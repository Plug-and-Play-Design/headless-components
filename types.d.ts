// @storybook/react-vite only exports framework config types.
// Meta and StoryObj live in @storybook/react — re-export them here so
// imports from "@storybook/react-vite" work without changing story files.
declare module "@storybook/react-vite" {
	export type { Meta, StoryObj } from "@storybook/react"
}
