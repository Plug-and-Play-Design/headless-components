import type { Block } from "payload"

export const VideoPlayerFill: Block = {
	slug: "video-player-fill",
	dbName: "vpf", // Shortened DB name to avoid hitting limits
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "videoSrc",
							type: "upload",
							label: "Video",
							relationTo: "media",
						},
						{
							name: "videoThumbnailUrl",
							type: "upload",
							label: "Thumbnail",
							relationTo: "media",
						},
					],
				},
			],
		},
	],
}
