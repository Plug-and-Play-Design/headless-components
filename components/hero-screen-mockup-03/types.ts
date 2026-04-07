import { type Props as ButtonProps } from "@org/ui/untitledui/base/buttons/button"

export interface HeroScreenMockup03Props {
	heading?: string
	content?: React.ReactNode
	buttons?: ButtonProps[]
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
