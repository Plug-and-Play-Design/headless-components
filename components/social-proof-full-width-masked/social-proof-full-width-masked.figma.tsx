import figma from "@figma/code-connect"
import { SocialProofFullWidthMaskedBlock } from "./social-proof-full-width-masked"

/**
 * Code Connect for the "Social proof section - Full width masked" Figma component.
 *
 * Prop mapping:
 *  - figma.textContent('Text') → text  (reads the "Text" layer)
 *
 * Not mapped:
 *  - logos             — array of logo images; set manually
 *  - backgroundColor   — appearance / decorative
 *  - backgroundImage   — figma.image() not available in @figma/code-connect v1
 *
 * Note: This component has dark and light variants. Add a second figma.connect()
 * call with a different variant filter to cover both (e.g. Theme = "Light").
 *
 * TODO: Replace node-id=TODO with the component set node ID from Figma.
 *       Select the component, press Escape to reach the component set, then Copy link.
 */
figma.connect(
	SocialProofFullWidthMaskedBlock,
	"https://www.figma.com/design/Rw75w1xVk3CUny9neS0DMF/%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES--v7.0--XFYZ7KmLpqNV--Copy-?node-id=1294-161217",
	{
		variant: { Type: "Full width masked", Theme: "Default", Breakpoint: "Desktop" },
		props: {
			text: figma.textContent("Text"),
		},
		example: ({ text }) => <SocialProofFullWidthMaskedBlock text={text} />,
	},
)
