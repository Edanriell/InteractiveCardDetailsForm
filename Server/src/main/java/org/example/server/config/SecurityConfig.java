package org.example.server.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

// Extend with cors
// RateLimit

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
				.csrf(csrf -> csrf.disable())  // In production, consider enabling CSRF protection
				.authorizeHttpRequests(authz -> authz
						.requestMatchers("/api/**").authenticated()
						.anyRequest().permitAll()
				)
				.httpBasic(httpBasic -> {
				});

		return http.build();
	}
}
