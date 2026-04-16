import figma from "@figma/code-connect"
import { HeroScreenMockup03Block } from "./hero-screen-mockup-03"

/**
 * Code Connect for the "Hero header section - Screen mockup 03" Figma component.
 *
 * Prop mapping:
 *  - figma.textContent('Heading')        → heading        (reads the "Heading" text layer)
 *  - figma.textContent('Supporting text')→ supportingText (reads the "Supporting text" layer)
 *
 * Not mapped:
 *  - image          — figma.image() is not available in @figma/code-connect v1; set manually
 *  - actions        — button arrays can't be extracted with basic Code Connect extractors
 *  - backgroundImage, backgroundColor, headingLevel — appearance / decorative
 */
figma.connect(
	HeroScreenMockup03Block,
	"https://www.figma.com/design/Rw75w1xVk3CUny9neS0DMF/%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES--v7.0--XFYZ7KmLpqNV--Copy-?node-id=1316-3622",
	{
		variant: { Type: "Screen mockup 03", Breakpoint: "Desktop" },
		props: {
			heading: figma.textContent("Heading"),
			supportingText: figma.textContent("Supporting text"),
		},
		example: ({ heading, supportingText }) => (
			<HeroScreenMockup03Block heading={heading} supportingText={supportingText} />
		),
	},
)
