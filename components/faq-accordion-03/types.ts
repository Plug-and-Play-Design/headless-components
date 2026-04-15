import type React from "react"
import type { WithHeading, WithSubheading, WithSupportingText } from "@org/ui/components/props"

export type FaqItem = {
	question: string
	answer: React.ReactNode
}

export interface WithFaqItems {
	faqItems?: FaqItem[]
}

export interface FaqAccordion03Props extends WithHeading, WithSubheading, WithSupportingText, WithFaqItems {}
