import type { Props as ButtonProps } from "@org/ui/untitledui/base/buttons/button"

// ─── Primitive / Atomic Types ──────────────────────────────────────────────

/** An image asset with a URL and accessible alt text. */
export type ImageAsset = {
	url: string
	alt: string
}

/** A company/brand logo with optional dark-mode variant and link. */
export type LogoItem = {
	name: string
	imageUrl: string
	darkModeImageUrl?: string
	url?: string
}

/** A person — used in testimonials, author credits, and team sections. */
export type AuthorItem = {
	name: string
	username?: string
	imageUrl?: string
	url?: string
}

/** A single testimonial or review card. */
export type ReviewItem = {
	quote: string
	author: AuthorItem
	stars?: number
}

export type Cards = {
	backgroundColor?: BackgroundColor
}

// ─── Scalar Aliases ────────────────────────────────────────────────────────

/** HTML heading element level. */
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

/** A Tailwind background-color utility class (or empty string to inherit). */
export type BackgroundColor = `bg-${string}` | ""

// ─── Prop Mixins (named after Figma layers) ────────────────────────────────
// Use these with `extends` in component prop interfaces so the interface
// names stay in sync with the Figma layer names they represent.

/** Figma layer: "Heading" */
export interface WithHeading {
	heading?: string
	headingLevel?: HeadingLevel
}

/** Figma layer: "Supporting text" */
export interface WithSupportingText {
	supportingText?: React.ReactNode
}

/** Figma layer: "Eyebrow" — small label or badge shown above the heading. */
export interface WithEyebrow {
	eyebrow?: React.ReactNode
}

/** Figma layer: "Actions" — CTA button group. */
export interface WithActions {
	actions?: ButtonProps[]
}

/** Figma layer: "Image" / "Media" — foreground image or screen mockup. */
export interface WithImage {
	image?: ImageAsset
}

/** Figma layer: "Background" — section background color or image. */
export interface WithBackground {
	backgroundColor?: BackgroundColor
	backgroundImage?: ImageAsset
}

/** Figma layer: "Logos" — social-proof logo strip. */
export interface WithLogos {
	logos?: LogoItem[]
}

/** Figma layer: "Text" — standalone body text block. */
export interface WithText {
	text?: React.ReactNode
}

/** Figma layer: "Reviews" / "Testimonials" — array of testimonial cards. */
export interface WithReviews {
	reviews?: ReviewItem[]
}

export interface WithCards {
	cards?: Cards
}
