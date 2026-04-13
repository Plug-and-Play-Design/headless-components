import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { VideoPlayerFillBlock } from "./video-player-fill"

const meta = {
	title: "Components/Video Player Fill",
	component: VideoPlayerFillBlock,
	args: {
		videoSrc: "https://www.untitledui.com/videos/untitled-ui-demo.mp4",
		videoThumbnailUrl: "https://www.untitledui.com/base/video-thumbnail.webp",
	},
	argTypes: {
		videoSrc: { control: "text" },
		videoThumbnailUrl: { control: "text" },
	},
} satisfies Meta<typeof VideoPlayerFillBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		await expect(canvas.getByRole("img")).toBeInTheDocument()
	},
}
