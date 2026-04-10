import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import type { Article } from "@org/ui/components/props"
import { BlogSectionSimpleCenterAligned01Block } from "./blog-section-simple-center-aligned-01"

const articles: Article[] = [
	{
		id: "article-1",
		title: "UX review presentations",
		summary: "How do you create compelling presentations that wow your colleagues and impress your managers?",
		href: "#",
		category: {
			name: "Design",
			href: "#",
		},
		thumbnailUrl: "https://www.untitledui.com/marketing/spirals.webp",
		publishedAt: "20 Jan 2027",
		readingTime: "8 min read",
		author: {
			name: "Olivia Rhye",
			href: "#",
			avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
		},
		tags: [
			{ name: "Design", color: "brand", href: "#" },
			{ name: "Research", color: "indigo", href: "#" },
			{ name: "Presentation", color: "pink", href: "#" },
		],
		isFeatured: true,
	},
	{
		id: "article-2",
		title: "Migrating to Linear 101",
		summary:
			"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
		href: "#",
		category: {
			name: "Product",
			href: "#",
		},
		thumbnailUrl: "https://www.untitledui.com/marketing/conversation.webp",
		publishedAt: "19 Jan 2027",
		readingTime: "8 min read",
		author: {
			name: "Phoenix Baker",
			href: "#",
			avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
		},
		tags: [
			{ name: "Product", color: "sky", href: "#" },
			{ name: "Tools", color: "pink", href: "#" },
			{ name: "SaaS", color: "pink", href: "#" },
		],
	},
	{
		id: "article-3",
		title: "Building your API stack",
		summary: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
		href: "#",
		category: {
			name: "Software Engineering",
			href: "#",
		},
		thumbnailUrl: "https://www.untitledui.com/blog/two-mobile-shapes-pattern.webp",
		publishedAt: "18 Jan 2027",
		readingTime: "8 min read",
		author: {
			name: "Lana Steiner",
			href: "#",
			avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
		},
		tags: [
			{ name: "Software Development", color: "success", href: "#" },
			{ name: "Tools", color: "pink", href: "#" },
		],
	},
]

const meta = {
	title: "Components/Blog Section Simple Center Aligned 01",
	component: BlogSectionSimpleCenterAligned01Block,
	args: {
		heading: "From the blog",
		subheading: "Latest articles",
		supportingText: "The latest industry news, interviews, technologies, and resources.",
		articles,
	},
	argTypes: {
		heading: { control: "text" },
		headingLevel: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "h5", "h6"],
		},
		subheading: { control: "text" },
		subheadingLevel: {
			control: "select",
			options: ["p", "h1", "h2", "h3", "h4", "h5", "h6"],
		},
		supportingText: { control: "text" },
		articles: { control: false },
		actions: { control: false },
	},
} satisfies Meta<typeof BlogSectionSimpleCenterAligned01Block>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		await expect(canvas.getByRole("heading", { name: "From the blog" })).toBeInTheDocument()
		await expect(canvas.getByText("Latest articles")).toBeInTheDocument()
		await expect(canvas.getByText("UX review presentations")).toBeInTheDocument()
		await expect(canvas.getByText("Migrating to Linear 101")).toBeInTheDocument()
		await expect(canvas.getByText("Building your API stack")).toBeInTheDocument()
	},
}

export const NoHeader: Story = {
	args: {
		heading: undefined,
		subheading: undefined,
		supportingText: undefined,
	},
}

export const WithActions: Story = {
	args: {
		actions: [
			{ children: "View all posts", href: "#", color: "primary", size: "md" },
			{ children: "Subscribe", href: "#", color: "secondary", size: "md" },
		],
	},
}
