import type { Block } from "payload"

export const SocialProofFullWidthMasked: Block = {
	slug: "social-proof-full-width-masked",
    dbName: "spfwm", // Shortened DB name to avoid hitting limits
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
                            label: "Content",
							name: "text",
							type: "text",
							defaultValue: "Trusted by 4,000+ companies",
						},
						{
							name: "logos",
							type: "array",
							label: "Logos",
							fields: [
								{
									name: "name",
									type: "text",
									label: "Logo Name",
									required: true,
								},
								{
									name: "imageUrl",
									type: "upload",
									label: "Image",
									relationTo: "media",
									required: true,
								},
								{
									name: "url",
									type: "text",
									label: "Link URL (optional)",
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
					label: "Appearance",
					fields: [
						{
							name: "backgroundColor",
							type: "select",
							label: "Background Color",
							defaultValue: "bg-primary",
							options: [
								{
									label: "Primary",
									value: "bg-primary",
								},
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
					],
				},
			],
		},
	],
}
