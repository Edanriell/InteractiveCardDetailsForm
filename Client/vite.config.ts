import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { URL } from "url";

const resolvePath = (path: string) => new URL(path, import.meta.url).pathname;

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite({
			routesDirectory: "./src/app/routes",
			generatedRouteTree: "./src/app/routeTree.gen.ts"
		}),
		react()
	],
	resolve: {
		alias: {
			"@app": resolvePath("./src/app"),
			"@entities": resolvePath("./src/entities"),
			"@features": resolvePath("./src/features"),
			"@pages": resolvePath("./src/pages"),
			"@shared": resolvePath("./src/shared"),
			"@widgets": resolvePath("./src/widgets")
		}
	}
});
