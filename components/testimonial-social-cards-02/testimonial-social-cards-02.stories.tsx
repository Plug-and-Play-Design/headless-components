import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { TestimonialSocialCards02Block } from "./testimonial-social-cards-02"

const meta = {
	title: "Components/Testimonial Social Cards 02 Brand",
	component: TestimonialSocialCards02Block,
	args: {
		heading: "Don't just take our word for it",
		supportingText: "Hear from some of our amazing customers who are building faster.",
	},
	argTypes: {
		heading: { control: "text" },
		headingLevel: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "h5", "h6"],
		},
		supportingText: { control: "text" },
		backgroundColor: { control: "text" },
		backgroundImage: { control: false },
		reviews: { control: false },
		cards: { control: false },
	},
} satisfies Meta<typeof TestimonialSocialCards02Block>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        headingLevel: "h6",
    },

    play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		await expect(canvas.getByRole("heading", { name: "Don't just take our word for it" })).toBeInTheDocument()
		await expect(canvas.getByText(/Hear from some of our amazing customers/i)).toBeInTheDocument()
		await expect(canvas.getByText("Sienna Hewitt")).toBeInTheDocument()
		await expect(canvas.getByText("Kari Rasmussen")).toBeInTheDocument()
		await expect(canvas.getByText("Amélie Laurent")).toBeInTheDocument()
	}
}
