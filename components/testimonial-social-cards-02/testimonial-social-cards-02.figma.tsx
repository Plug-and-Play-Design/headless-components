import figma from "@figma/code-connect"
import { TestimonialSocialCards02Block } from "./testimonial-social-cards-02"

/**
 * Code Connect for the "Testimonial - Social cards 02" Figma component.
 *
 * Prop mapping:
 *  - figma.textContent('Heading')         → heading
 *  - figma.textContent('Supporting text') → supportingText
 *
 * Not mapped:
 *  - reviews         — array of review cards with author avatars; set manually
 *  - cards           — appearance / decorative
 *  - backgroundColor — appearance / decorative
 *
 * TODO: Replace node-id=TODO with the component set node ID from Figma.
 *       Select the component, press Escape to reach the component set, then Copy link.
 */
figma.connect(
	TestimonialSocialCards02Block,
	"https://www.figma.com/design/Rw75w1xVk3CUny9neS0DMF/%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES--v7.0--XFYZ7KmLpqNV--Copy-?node-id=1377-11884",
	{
		variant: { Type: "Social cards 02", Breakpoint: "Desktop" },
		props: {
			heading: figma.textContent("Heading"),
			supportingText: figma.textContent("Supporting text"),
		},
		example: ({ heading, supportingText }) => (
			<TestimonialSocialCards02Block heading={heading} supportingText={supportingText} />
		),
	},
)
