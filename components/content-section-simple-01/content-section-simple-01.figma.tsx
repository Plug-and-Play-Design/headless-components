import figma from "@figma/code-connect"
import { ContentSectionSimple01Block } from "./content-section-simple-01"

/**
 * Code Connect for the "Content section - Simple 01" Figma component.
 *
 * Prop mapping:
 *  - figma.textContent('Heading')         → heading
 *  - figma.textContent('Supporting text') → supportingText
 *  - figma.textContent('Text')            → text
 *
 * Not mapped:
 *  - headingLevel — appearance / decorative
 *
 * TODO: Replace node-id=TODO with the component set node ID from Figma.
 *       Select the component, press Escape to reach the component set, then Copy link.
 */
figma.connect(
	ContentSectionSimple01Block,
	"https://www.figma.com/design/Rw75w1xVk3CUny9neS0DMF/%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES--v7.0--XFYZ7KmLpqNV--Copy-?node-id=1431-222569",
	{
		variant: { Type: "Simple 01", Breakpoint: "Desktop" },
		props: {
			heading: figma.textContent("Heading"),
			supportingText: figma.textContent("Supporting text"),
			text: figma.textContent("Text"),
		},
		example: ({ heading, supportingText, text }) => (
			<ContentSectionSimple01Block heading={heading} supportingText={supportingText} text={text} />
		),
	},
)
