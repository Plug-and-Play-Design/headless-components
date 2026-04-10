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

export const BlogSectionSimpleCenterAligned01: Block = {
	slug: "blog-section-simple-center-aligned-01",
	dbName: "bssca01", // Shortened DB name to avoid hitting limits
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
							label: "Content",
							name: "supportingText",
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
						{
							name: "articles",
							type: "array",
							label: "Articles",
							maxRows: 3,
							fields: [
								{
									name: "title",
									type: "text",
									label: "Title",
									required: true,
								},
								{
									name: "summary",
									type: "textarea",
									label: "Summary",
								},
								{
									name: "href",
									type: "text",
									label: "Article URL",
									required: true,
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
								{
									name: "thumbnailUrl",
									type: "upload",
									label: "Thumbnail",
									relationTo: "media",
								},
								{
									name: "publishedAt",
									type: "date",
									label: "Published At",
								},
								{
									name: "readingTime",
									type: "text",
									label: "Reading Time (e.g. 5 min read)",
								},
								{
									name: "category",
									type: "group",
									label: "Category",
									fields: [
										{
											name: "name",
											type: "text",
											label: "Name",
											required: true,
										},
										{
											name: "href",
											type: "text",
											label: "Category URL",
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
											name: "avatarUrl",
											type: "upload",
											label: "Avatar",
											relationTo: "media",
										},
										{
											name: "href",
											type: "text",
											label: "Author URL",
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
						{
							name: "actions",
							type: "array",
							label: "Buttons",
							maxRows: 2,
							fields: [
								{
									name: "children",
									type: "text",
									label: "Button Text",
								},
								{
									name: "href",
									type: "text",
									label: "Button URL",
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
								{
									name: "size",
									type: "select",
									label: "Size",
									defaultValue: "md",
									options: [
										{ label: "Small", value: "sm" },
										{ label: "Medium", value: "md" },
										{ label: "Large", value: "lg" },
									],
								},
								{
									name: "color",
									type: "select",
									label: "Color",
									defaultValue: "primary",
									options: [
										{ label: "Primary", value: "primary" },
										{ label: "Secondary", value: "secondary" },
										{ label: "Tertiary", value: "tertiary" },
									],
								},
							],
						},
					],
				},
			],
		},
	],
}
