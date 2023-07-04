import { useState, useEffect, useRef } from "react";

type UseAudioHookResult = {
  play: () => void;
  isPlaying: boolean;
  pause: () => void;
  audioRef: React.RefObject<HTMLAudioElement>;
};

export const useAudio = (src: string): UseAudioHookResult => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.src = src;
      audioElement.load();
    }

    const handleEnded = () => {
      setIsPlaying(false);
    };

    if (audioElement) {
      audioElement.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.removeEventListener("ended", handleEnded);
      }
    };
  }, [src]);

  const play = () => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  return {
    play,
    isPlaying,
    pause,
    audioRef,
  };
};
