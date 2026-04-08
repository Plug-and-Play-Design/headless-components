import { type Props as ButtonProps } from "@org/ui/untitledui/base/buttons/button"

export interface HeroScreenMockup03Props {
	heading?: string
	headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	supportingText?: React.ReactNode
	actions?: ButtonProps[]
	image?: {
		url: string
		alt: string
	}
	backgroundColor?: `bg-${string}` | ""
	backgroundImage?: {
		url: string
		alt: string
	}
}
