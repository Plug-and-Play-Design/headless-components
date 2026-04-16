import figma from "@figma/code-connect"
import { FaqAccordion03Block } from "./faq-accordion-03"

/**
 * Code Connect for the "FAQ - Accordion 03" Figma component.
 *
 * Prop mapping:
 *  - figma.textContent('Subheading')      → subheading
 *  - figma.textContent('Heading')         → heading
 *  - figma.textContent('Supporting text') → supportingText
 *
 * Not mapped:
 *  - faqItems — array of question/answer pairs; set manually
 *
 * TODO: Replace node-id=TODO with the component set node ID from Figma.
 *       Select the component, press Escape to reach the component set, then Copy link.
 */
figma.connect(
	FaqAccordion03Block,
	"https://www.figma.com/design/Rw75w1xVk3CUny9neS0DMF/%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES--v7.0--XFYZ7KmLpqNV--Copy-?node-id=1360-3728",
	{
		variant: { Type: "Accordion 03", Breakpoint: "Desktop" },
		props: {
			subheading: figma.textContent("Subheading"),
			heading: figma.textContent("Heading"),
			supportingText: figma.textContent("Supporting text"),
		},
		example: ({ subheading, heading, supportingText }) => (
			<FaqAccordion03Block subheading={subheading} heading={heading} supportingText={supportingText} />
		),
	},
)
