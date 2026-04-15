"use client"
import { useState } from "react"
import { motion } from "motion/react"
import { cx } from "@org/ui/untitledui/utils/cx"
import type { FAQAccordion03Props } from "./types"

export const FAQAccordion03Block = (props: FAQAccordion03Props) => {
	const [openQuestions, setOpenQuestions] = useState(new Set([0]))

	const handleToggle = (index: number) => {
		openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index)
		setOpenQuestions(new Set(openQuestions))
	}

	return (
		<section className="bg-primary py-16 md:py-24">
			<div className="mx-auto max-w-container px-4 md:px-8">
				<div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
					<div className="flex w-full max-w-3xl flex-col lg:max-w-xl">
						{props.subheading && (() => {
							const SubheadingTag = props.subheadingLevel || "p"
							return (
								<SubheadingTag className="text-sm font-semibold text-brand-secondary md:text-md">
									{props.subheading}
								</SubheadingTag>
							)
						})()}

						{props.heading && (() => {
							const HeadingTag = props.headingLevel || "h2"
							return (
								<HeadingTag className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
									{props.heading}
								</HeadingTag>
							)
						})()}

						{props.supportingText && (
							<div className="mt-4 text-lg text-tertiary md:mt-5">
								{props.supportingText}
							</div>
						)}
					</div>

					{props.faqItems && props.faqItems.length > 0 && (
						<div className="flex w-full flex-col gap-8">
							{props.faqItems.map((faq, index) => (
								<div key={faq.question}>
									<h3>
										<button
											onClick={() => handleToggle(index)}
											className="flex w-full cursor-pointer items-start justify-between gap-6 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6"
										>
											<span className="text-md font-semibold text-primary">{faq.question}</span>
											<span aria-hidden="true" className="flex size-6 items-center text-fg-quaternary">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<circle cx="12" cy="12" r="10"></circle>
													<line
														className={cx(
															"origin-center rotate-0 transition duration-150 ease-out",
															openQuestions.has(index) && "-rotate-90",
														)}
														x1="12"
														y1="8"
														x2="12"
														y2="16"
													></line>
													<line x1="8" y1="12" x2="16" y2="12"></line>
												</svg>
											</span>
										</button>
									</h3>

									<motion.div
										className="overflow-hidden"
										initial={false}
										animate={{
											height: openQuestions.has(index) ? "auto" : 0,
											opacity: openQuestions.has(index) ? 1 : 0,
										}}
										transition={{
											type: "spring",
											damping: 24,
											stiffness: 240,
											bounce: 0.4,
										}}
									>
										<div className="pt-1 pr-12">
											<p className="text-md text-tertiary">{faq.answer}</p>
										</div>
									</motion.div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
