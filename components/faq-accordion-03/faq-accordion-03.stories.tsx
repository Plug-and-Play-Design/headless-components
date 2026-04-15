import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { FaqAccordion03Block } from "./faq-accordion-03"

const meta = {
	title: "Components/FAQ Accordion 03",
	component: FaqAccordion03Block,
	args: {
		subheading: "Support",
		heading: "FAQs",
		supportingText: (
			<>
				Everything you need to know about the product and billing. Can&apos;t find the answer you&apos;re
				looking for? Please{" "}
				<a
					href="#"
					className="rounded-xs underline underline-offset-4 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
				>
					chat to our friendly team
				</a>
				.
			</>
		),
		faqItems: [
			{
				question: "Is there a free trial available?",
				answer:
					"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
			},
			{
				question: "Can I change my plan later?",
				answer:
					"Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
			},
			{
				question: "What is your cancellation policy?",
				answer:
					"We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
			},
			{
				question: "Can other info be added to an invoice?",
				answer:
					"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
			},
			{
				question: "How does billing work?",
				answer:
					"Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
			},
			{
				question: "How do I change my account email?",
				answer:
					"You can change the email address associated with your account by going to untitledui.com/account from a laptop or desktop.",
			},
		],
	},
	argTypes: {
		subheading: { control: "text" },
		subheadingLevel: {
			control: "select",
			options: ["p", "h1", "h2", "h3", "h4", "h5", "h6"],
		},
		heading: { control: "text" },
		headingLevel: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "h5", "h6"],
		},
		supportingText: { control: false },
		faqItems: { control: false },
	},
} satisfies Meta<typeof FaqAccordion03Block>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		await expect(canvas.getByRole("heading", { name: "FAQs" })).toBeInTheDocument()
		await expect(canvas.getByText("Support")).toBeInTheDocument()
		await expect(canvas.getByText("Is there a free trial available?")).toBeInTheDocument()
		await expect(canvas.getByText("Can I change my plan later?")).toBeInTheDocument()
	},
}

export const NoHeader: Story = {
	args: {
		subheading: undefined,
		heading: undefined,
		supportingText: undefined,
	},
}

export const SingleItem: Story = {
	args: {
		faqItems: [
			{
				question: "Is there a free trial available?",
				answer:
					"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
			},
		],
	},
}
