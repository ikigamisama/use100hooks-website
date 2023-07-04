import { useState, useEffect, useRef } from "react";

type UseVideoHookResult = {
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  videoRef: React.RefObject<HTMLVideoElement>;
};

export const useVideo = (src: string): UseVideoHookResult => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.src = src;
      videoElement.load();
    }

    return () => {
      if (videoElement) {
        videoElement.pause();
      }
    };
  }, [src]);

  const play = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return {
    play,
    pause,
    togglePlay,
    videoRef,
  };
};
