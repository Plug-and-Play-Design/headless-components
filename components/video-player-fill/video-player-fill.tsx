"use client";

import { VideoPlayer } from "@org/ui/untitledui/base/video-player/video-player";
import type { VideoPlayerFillProps } from "./types";

export const VideoPlayerFillBlock = (props: VideoPlayerFillProps) => {
    return (
      <div className="relative aspect-video w-full overflow-hidden">
        <VideoPlayer
            size="lg"
            src={props.videoSrc ?? "https://www.untitledui.com/videos/untitled-ui-demo.mp4"}
            thumbnailUrl={props.videoThumbnailUrl ?? "https://www.untitledui.com/base/video-thumbnail.webp"}
            className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    );
};