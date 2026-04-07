import type { StorybookConfig } from "@storybook/react-vite"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

const config: StorybookConfig = {
	stories: ["../components/**/*.stories.@(ts|tsx)"],
	addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	viteFinal(config) {
		const projectRoot = path.resolve(__dirname, "..")

		// Add Tailwind v4 Vite plugin
		config.plugins = [tailwindcss(), ...(config.plugins ?? [])]

		// Allow Vite to serve files from the whole project root (including untitledui/, tokens/, etc.)
		config.server ??= {}
		config.server.fs ??= {}
		config.server.fs.allow = [projectRoot, ...(config.server.fs.allow ?? [])]

		config.resolve ??= {}
		config.resolve.alias = {
			...config.resolve.alias,
			// Internal org package aliases → real implementations
			"@org/ui/untitledui/base/buttons/button": path.resolve(projectRoot, "untitledui/base/buttons/button.tsx"),
			"@org/ui/untitledui/utils/cx": path.resolve(projectRoot, "untitledui/utils/cx.ts"),
			"@org/ui/untitledui/utils/is-react-component": path.resolve(
				projectRoot,
				"untitledui/utils/is-react-component.ts",
			),
			"@org/ui/untitledui": path.resolve(projectRoot, "untitledui"),
			"@org/utils": path.resolve(projectRoot, "utils.ts"),
			// storybook/test is not exported by the storybook package; alias to the ESM build to avoid Node.js built-ins
			"storybook/test": path.resolve(projectRoot, "node_modules/@storybook/test/dist/index.mjs"),
		}
		return config
	},
}

export default config
