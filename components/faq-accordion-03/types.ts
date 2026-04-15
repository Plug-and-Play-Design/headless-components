import type { WithHeading, WithSubheading, WithSupportingText } from "@org/ui/components/props"

export type FaqItem = {
	question: string
	answer: string
}

export interface WithFaqItems {
	faqItems?: FaqItem[]
}

export interface FAQAccordion03Props extends WithHeading, WithSubheading, WithSupportingText, WithFaqItems {}
