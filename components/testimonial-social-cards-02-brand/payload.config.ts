import type { Block } from "payload"

export const TestimonialSocialCards02Brand: Block = {
	slug: "testimonial-social-cards-02-brand",
	dbName: "tsc02brand", // Shortened DB name to avoid hitting limits
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							type: "row",
							fields: [
								{
									name: "heading",
									type: "text",
									label: "Heading",
									admin: {
										width: "80%",
									},
								},
								{
									name: "headingLevel",
									type: "select",
									label: "Heading Level",
									defaultValue: "h1",
									options: [
										{ label: "H1", value: "h1" },
										{ label: "H2", value: "h2" },
										{ label: "H3", value: "h3" },
										{ label: "H4", value: "h4" },
										{ label: "H5", value: "h5" },
										{ label: "H6", value: "h6" },
									],
								},
							],
						},
						{
							name: "supportingText",
							type: "text",
							label: "Supporting Text",
						},
						{
							name: "reviews",
							type: "array",
							label: "Reviews",
							fields: [
								{
									name: "quote",
									type: "text",
									label: "Quote",
									required: true,
								},
								{
									name: "stars",
									type: "number",
									label: "Stars",
									min: 1,
									max: 5,
									defaultValue: 5,
								},
								{
									name: "author",
									type: "group",
									label: "Author",
									fields: [
										{
											name: "name",
											type: "text",
											label: "Name",
											required: true,
										},
										{
											name: "username",
											type: "text",
											label: "Username (e.g. @handle)",
										},
										{
											name: "imageUrl",
											type: "upload",
											label: "Avatar",
											relationTo: "media",
										},
										{
											name: "url",
											type: "text",
											label: "Profile URL (optional)",
											validate: (value: string | null | undefined) => {
												if (!value) return true
												try {
													new URL(value)
													return true
												} catch (e) {
													console.error("Invalid URL:", e)
													return "Please enter a valid URL"
												}
											},
										},
									],
								},
							],
						},
					],
				},
				{
					label: "Appearance",
					fields: [
						{
							name: "backgroundColor",
							type: "select",
							label: "Section Background Color",
							defaultValue: "bg-brand-primary",
							options: [
								{ label: "Brand Primary", value: "bg-brand-primary" },
								{ label: "Brand Secondary", value: "bg-brand-secondary" },
								{ label: "None", value: "" },
							],
						},
						{
							name: "cards__backgroundColor",
							type: "select",
							label: "Card Background Color",
							defaultValue: "bg-brand-section_subtle",
							options: [
								{ label: "Brand Section Subtle", value: "bg-brand-section_subtle" },
								{ label: "Brand Section", value: "bg-brand-section" },
								{ label: "None", value: "" },
							],
						},
					],
				},
			],
		},
	],
}
