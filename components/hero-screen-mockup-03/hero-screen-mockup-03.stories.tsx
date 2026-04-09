import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { HeroScreenMockup03Block } from "./hero-screen-mockup-03"
import { PlayCircle } from "@untitledui/icons"

const meta = {
	title: "Components/Hero Screen Mockup",
	component: HeroScreenMockup03Block,
	args: {
		heading: "Beautiful banking to grow smarter",
		supportingText:
			"Powerful, self-serve product and growth analytics to help you budget, forecast, and be smarter with your money. Trusted by over 4,000 startups.",
		actions: [
			{
				children: "Demo",
				href: "https://example.com/get-started",
				iconLeading: PlayCircle,
				color: "primary",
				size: "md",
			},
			{ children: "Signup", href: "https://example.com/learn-more", color: "secondary", size: "md" },
		],
		image: {
			url: "https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp",
			alt: "Dashboard preview",
		},
		backgroundImage: {
			url: "https://www.untitledui.com/patterns/light/grid-sm-desktop.svg",
			alt: "Abstract gradient background",
		},
	},
} satisfies Meta<typeof HeroScreenMockup03Block>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		await expect(canvas.getByRole("heading", { name: "Beautiful banking to grow smarter" })).toBeInTheDocument()
		await expect(canvas.getByText(/Powerful, self-serve product and growth analytics/i)).toBeInTheDocument()
		await expect(canvas.getByRole("img", { name: "Dashboard preview" })).toBeInTheDocument()
	},
}
