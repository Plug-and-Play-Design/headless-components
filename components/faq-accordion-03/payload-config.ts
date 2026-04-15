import type { Block } from "payload"
import {
	FixedToolbarFeature,
	InlineToolbarFeature,
	lexicalEditor,
	HeadingFeature,
	OrderedListFeature,
	UnorderedListFeature,
	BlockquoteFeature,
} from "@payloadcms/richtext-lexical"

export const FaqAccordion03: Block = {
	slug: "faq-accordion-03",
	dbName: "faqAcc03",
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
									name: "subheading",
									type: "text",
									label: "Subheading",
									admin: {
										width: "80%",
									},
								},
								{
									name: "subheadingLevel",
									type: "select",
									label: "Subheading Level",
									defaultValue: "p",
									options: [
										{ label: "P", value: "p" },
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
									defaultValue: "h2",
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
							label: "Supporting Text",
							type: "richText",
							editor: lexicalEditor({
								features: ({ rootFeatures }) => {
									return [
										...rootFeatures,
										FixedToolbarFeature(),
										InlineToolbarFeature(),
									]
								},
							}),
						},
						{
							name: "faqItems",
							type: "array",
							label: "FAQ Items",
							fields: [
								{
									name: "question",
									type: "text",
									label: "Question",
									required: true,
								},
								{
									name: "answer",
									label: "Answer",
									type: "richText",
									editor: lexicalEditor({
										features: ({ rootFeatures }) => {
											return [
												...rootFeatures,
												FixedToolbarFeature(),
												InlineToolbarFeature(),
												HeadingFeature(),
												OrderedListFeature(),
												UnorderedListFeature(),
												BlockquoteFeature(),
											]
										},
									}),
								},
							],
						},
					],
				},
			],
		},
	],
}
