package org.example.server.config;

import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import io.github.bucket4j.Refill;
import io.github.bucket4j.local.LocalBucketBuilder;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Duration;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
				.csrf(csrf -> csrf.disable())  // In production, consider enabling CSRF protection
				.cors(cors -> cors.configurationSource(corsConfigurationSource()))
				.authorizeHttpRequests(authz -> authz
						.requestMatchers("/api/**").authenticated()
						.anyRequest().permitAll()
				)
				.httpBasic(httpBasic -> {
				});

		return http.build();
	}

	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(List.of("http://localhost:3000"));
		configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
		configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "X-Requested-With"));
		configuration.setExposedHeaders(Arrays.asList("X-RateLimit-Limit", "X-RateLimit-Remaining", "X-RateLimit-Reset"));
		configuration.setAllowCredentials(true);
		configuration.setMaxAge(3600L);

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}

	// Rate Limiting Configuration
	@Bean
	public FilterRegistrationBean<RateLimitFilter> rateLimitFilter() {
		FilterRegistrationBean<RateLimitFilter> registrationBean = new FilterRegistrationBean<>();
		registrationBean.setFilter(new RateLimitFilter());
		registrationBean.addUrlPatterns("/api/*");
		registrationBean.setOrder(1);
		return registrationBean;
	}

	// Rate Limiter filter implementation
	public class RateLimitFilter extends OncePerRequestFilter {

		private final Map<String, Bucket> buckets = new ConcurrentHashMap<>();

		private Bucket createNewBucket() {
			// Define rate limit: 100 requests per minute
			Bandwidth limit = Bandwidth.classic(100, Refill.greedy(100, Duration.ofMinutes(1)));
			return new LocalBucketBuilder().addLimit(limit).build();
		}

		@Override
		protected void doFilterInternal(HttpServletRequest request,
		                                HttpServletResponse response,
		                                FilterChain filterChain)
				throws ServletException, IOException {

			// Get client IP address (or token in production)
			String clientIP = getClientIP(request);

			// Get or create bucket for the client
			Bucket bucket = buckets.computeIfAbsent(clientIP, k -> createNewBucket());

			// Try to consume a token
			if (bucket.tryConsume(1)) {
				// Add rate limit headers to response
				response.addHeader("X-RateLimit-Limit", "100");
				response.addHeader("X-RateLimit-Remaining", String.valueOf(bucket.getAvailableTokens()));

				// Request allowed, proceed
				filterChain.doFilter(request, response);
			} else {
				// Rate limit exceeded
				response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value()); // 429 status code
				response.setContentType("application/json");
				response.getWriter().write("{\"error\": \"Rate limit exceeded. Please try again later.\"}");
			}
		}

		private String getClientIP(HttpServletRequest request) {
			String xForwardedFor = request.getHeader("X-Forwarded-For");
			if (xForwardedFor != null) {
				return xForwardedFor.split(",")[0].trim();
			}
			return request.getRemoteAddr();
		}
	}

}
