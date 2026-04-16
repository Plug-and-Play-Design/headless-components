import figma from "@figma/code-connect"
import { BlogSectionSimpleCenterAligned01Block } from "./blog-section-simple-center-aligned-01"

/**
 * Code Connect for the "Blog section - Simple, center-aligned 01" Figma component.
 *
 * Prop mapping:
 *  - figma.textContent('Subheading')      → subheading
 *  - figma.textContent('Heading')         → heading
 *  - figma.textContent('Supporting text') → supportingText
 *
 * Not mapped:
 *  - articles — cards are connected separately via figma.children(); set article data manually
 *  - actions  — button arrays can't be extracted with basic Code Connect extractors
 *
 * TODO: Replace node-id=TODO with the component set node ID from Figma.
 *       Select the component, press Escape to reach the component set, then Copy link.
 */
figma.connect(
	BlogSectionSimpleCenterAligned01Block,
	"https://www.figma.com/design/Rw75w1xVk3CUny9neS0DMF/%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES--v7.0--XFYZ7KmLpqNV--Copy-?node-id=1398-5920",
	{
		variant: { Type: "Simple center aligned 01", Breakpoint: "Desktop" },
		props: {
			subheading: figma.textContent("Subheading"),
			heading: figma.textContent("Heading"),
			supportingText: figma.textContent("Supporting text"),
			cards: figma.children("*"),
		},
		example: ({ subheading, heading, supportingText, cards }) => (
			<>
				<BlogSectionSimpleCenterAligned01Block
					subheading={subheading}
					heading={heading}
					supportingText={supportingText}
				/>
				{/* Article cards — pass via the articles prop at runtime */}
				{cards}
			</>
		),
	},
)
