import figma from "@figma/code-connect"
import { Simple03Vertical } from "./blog-cards"

/**
 * Code Connect for the blog card used inside "Blog section - Simple, center-aligned 01".
 *
 * Prop mapping:
 *  - figma.textContent('Title')        → article.title
 *  - figma.textContent('Supporting text') → article.summary
 *  - figma.textContent('Name')         → article.author.name
 *  - figma.textContent('Date')         → article.publishedAt
 *  - figma.textContent('Reading time') → article.readingTime
 *  - figma.textContent('Category')     → article.category.name
 *
 * Not mapped:
 *  - article.thumbnailUrl  — figma.image() not available in @figma/code-connect v1
 *  - article.author.avatarUrl — same
 *  - article.href, article.category.href, article.author.href — never guess URLs
 *  - article.tags — array, set manually
 *
 * TODO: Replace node-id=TODO with the blog card component set node ID from Figma.
 *       Select the card component, press Escape to reach the component set, then Copy link.
 * TODO: Verify the text layer names below match the actual Figma layer names in your file.
 */
figma.connect(
	Simple03Vertical,
	"https://www.figma.com/design/Rw75w1xVk3CUny9neS0DMF/%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES--v7.0--XFYZ7KmLpqNV--Copy-?node-id=1390-58&t=NpWEH1vQZpfqpvQS-4",
	{
		variant: { Type: "Simple 03", Orientation: "Vertical", Breakpoint: "Desktop" },
		props: {
			title: figma.textContent("Title"),
			summary: figma.textContent("Supporting text"),
			authorName: figma.textContent("Name"),
			publishedAt: figma.textContent("Date"),
			readingTime: figma.textContent("Reading time"),
			categoryName: figma.textContent("Category"),
		},
		example: ({ title, summary, authorName, publishedAt, readingTime, categoryName }) => (
			<Simple03Vertical
				article={{
					id: "preview",
					title,
					summary,
					href: "#",
					thumbnailUrl: "",
					category: { href: "#", name: categoryName },
					author: { href: "#", name: authorName, avatarUrl: "" },
					publishedAt,
					readingTime,
					tags: [],
				}}
			/>
		),
	},
)
