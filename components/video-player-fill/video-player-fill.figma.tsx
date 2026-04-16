import figma from "@figma/code-connect"
import { VideoPlayerFillBlock } from "./video-player-fill"

/**
 * Code Connect for the "Video player - Fill" Figma component.
 *
 * Not mapped:
 *  - videoSrc          — media URL; set manually
 *  - videoThumbnailUrl — figma.image() not available in @figma/code-connect v1
 *
 * TODO: Replace node-id=TODO with the component set node ID from Figma.
 *       Select the component, press Escape to reach the component set, then Copy link.
 */
figma.connect(
	VideoPlayerFillBlock,
	"https://www.figma.com/design/Rw75w1xVk3CUny9neS0DMF/%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES--v7.0--XFYZ7KmLpqNV--Copy-?node-id=9264-576771",
	{
		variant: { Size: "lg", Playing: "False" },
		props: {},
		example: () => <VideoPlayerFillBlock />,
	},
)
