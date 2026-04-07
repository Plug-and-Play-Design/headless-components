import { type Props as ButtonProps } from "@org/ui/untitledui/base/buttons/button"

export interface SocialProofFullWidthMaskedProps {
    content?: React.ReactNode
    logos?: {
        name: string
        imageUrl: string
        url?: string
    }[]
    backgroundColor?: `bg-${string}` | ""
}
