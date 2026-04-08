"use client"
import { type HeroScreenMockup03Props } from "./types"
import { Button } from "@org/ui/untitledui/base/buttons/button"
import { cn } from "@org/utils"

export const HeroScreenMockup03Block = (props: HeroScreenMockup03Props) => {
	return (
		<div className={cn("relative overflow-hidden bg-secondary", props.backgroundColor)}>
			{props.backgroundImage && (
				<img
					alt={props.backgroundImage.alt}
					aria-hidden="true"
					loading="lazy"
					src={props.backgroundImage.url}
					className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 dark:brightness-[0.2]"
				/>
			)}

			<section className="relative py-16 md:py-24">
				<div className="mx-auto w-full max-w-container px-4 md:px-8">
					<div className="mx-auto flex max-w-5xl flex-col items-center text-center">
						{props.heading && (() => {
							const HeadingTag = props.headingLevel || "h1"
							return (
								<HeadingTag className="text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
									{props.heading}
								</HeadingTag>
							)
						})()}
						
						{props.supportingText && (
							<div className="mt-4 max-w-3xl text-balance text-tertiary md:mt-6 md:text-xl">
								{props.supportingText}
							</div>
						)}
						{props.actions && (
							<div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start md:mt-12">
								{props.actions.map((button, index) => (
									<Button key={index} {...button} />
								))}
							</div>
						)}
					</div>
				</div>
				{props.image && (
					<div className="mx-auto mt-16 w-full max-w-container px-4 md:px-8">
						<div className="mx-auto w-full max-w-3xl">
							<img
								alt={props.image.alt}
								src={props.image.url}
								className="mx-auto aspect-video w-full rounded object-cover object-top shadow-xl ring-4 ring-screen-mockup-border md:rounded-xl md:shadow-3xl"
							/>
						</div>
					</div>
				)}
			</section>
		</div>
	)
}
