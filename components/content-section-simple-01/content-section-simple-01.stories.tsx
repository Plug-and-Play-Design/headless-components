import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { ContentSectionSimple01Block } from "./content-section-simple-01"

const meta = {
	title: "Components/Content Section Simple 01",
	component: ContentSectionSimple01Block,
	args: {
		heading: "Beautiful analytics to grow smarter",
		supportingText:
			"Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.",
		text: (
			<>
				<p>
					Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet
					pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae
					malesuada fringilla.
				</p>
				<h2>How we can help</h2>
				<p>
					Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus
					eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
					posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
				</p>
				<p>
					Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus
					velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at.
					Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
					sodales id est ac volutpat.
				</p>
			</>
		),
	},
	argTypes: {
		heading: { control: "text" },
		headingLevel: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "h5", "h6"],
		},
		supportingText: { control: "text" },
		text: { control: false },
	},
} satisfies Meta<typeof ContentSectionSimple01Block>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		await expect(
			canvas.getByRole("heading", { name: "Beautiful analytics to grow smarter" }),
		).toBeInTheDocument()
		await expect(
			canvas.getByText(/Powerful, self-serve product and growth analytics/i),
		).toBeInTheDocument()
		await expect(canvas.getByText(/How we can help/i)).toBeInTheDocument()
	},
}

export const NoBody: Story = {
	args: {
		text: undefined,
	},
}

export const HeadingOnly: Story = {
	args: {
		supportingText: undefined,
		text: undefined,
	},
}
