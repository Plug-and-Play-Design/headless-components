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

export const ContentSectionSimple01: Block = {
	slug: "content-section-simple-01",
	dbName: "css01",
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
							label: "Body Content",
							name: "text",
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
}
