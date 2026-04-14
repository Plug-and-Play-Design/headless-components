"use client"
import type { ContentSectionSimple01Props } from "./types"

export const ContentSectionSimple01Block = (props: ContentSectionSimple01Props) => {
	return (
		<section className="bg-primary py-16 md:py-24">
			<div className="mx-auto max-w-container px-4 md:px-8">
				<div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2">
					<div className="max-w-3xl lg:col-span-1">
						{props.heading && (() => {
							const HeadingTag = props.headingLevel || "h2"
							return (
								<HeadingTag className="text-display-sm font-semibold text-primary md:text-display-md">
									{props.heading}
								</HeadingTag>
							)
						})()}

						{props.supportingText && (
							<p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
								{props.supportingText}
							</p>
						)}
					</div>

					{props.text && (
						<div className="prose md:prose-lg">
							{props.text}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
