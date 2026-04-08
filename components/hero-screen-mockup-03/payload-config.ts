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

export const HeroScreenMockup03: Block = {
	slug: "hero-screen-mockup",
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
									admin: {
										width: "80%",
									},
								},
								{
									name: "heading-level",
									type: "select",
									options: [
										{
											label: "H1",
											value: "h1",
										},
										{
											label: "H2",
											value: "h2",
										},
										{
											label: "H3",
											value: "h3",
										},
									],
									defaultValue: "h1",
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
							label: "Buttons",
							name: "actions",
							type: "array",
							maxRows: 2,
							fields: [
								{
									label: "Button Text",
									name: "children",
									type: "text",
								},
								{
									label: "Button URL",
									name: "href",
									type: "text",
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
									options: [
										{
											label: "Small",
											value: "sm",
										},
										{
											label: "Medium",
											value: "md",
										},
										{
											label: "Large",
											value: "lg",
										},
									],
									defaultValue: "md",
								},
								{
									name: "color",
									type: "select",
									options: [
										{
											label: "Primary",
											value: "primary",
										},
										{
											label: "Secondary",
											value: "secondary",
										},
										{
											label: "Tertiary",
											value: "tertiary",
										},
									],
									defaultValue: "primary",
								},
							],
						},
						{
							name: "image",
							type: "upload",
							relationTo: "media",
						},
					],
				},
				{
					label: "Appearance",
					fields: [
						{
							name: "backgroundColor",
							type: "select",
							options: [
								{
									label: "None",
									value: "",
								},
								{
									label: "Slate",
									value: "bg-slate-100 dark:bg-slate-800",
								},
								{
									label: "Gray",
									value: "bg-gray-100 dark:bg-gray-800",
								},
								{
									label: "Zinc",
									value: "bg-zinc-100 dark:bg-zinc-800",
								},
								{
									label: "Neutral",
									value: "bg-neutral-100 dark:bg-neutral-800",
								},
								{
									label: "Stone",
									value: "bg-stone-100 dark:bg-stone-800",
								},
							],
						},
						{
							name: "backgroundImage",
							type: "upload",
							relationTo: "media",
							label: "Background Image URL",
						},
					],
				},
			],
		},
	],
}
