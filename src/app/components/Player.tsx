"use client";

import { debounce } from "lodash";
import { useTranslation } from "next-export-i18n";
import { FC, useEffect, useRef, useState } from "react";
import ReactHowler from "react-howler";
import Slider from "react-input-slider";
// icons
import PauseIcon from "../../svgs/ui/pause.svg";
import PlayIcon from "../../svgs/ui/play.svg";

// types

export interface PlayerProps {
  src: string;
  autoPlay?: boolean;
}

export const Player: FC<PlayerProps> = ({ src, autoPlay }: PlayerProps) => {
  const [position, setAudioPosition] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const [dragging, setDragging] = useState(false);
  const { t } = useTranslation();
  const player = useRef<any>();

  useEffect(() => {
    if (autoPlay) {
      setPlaying(true);
    }
  }, [autoPlay, player]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playing && !dragging && player.current) {
        const pos = player.current.seek() as number;
        setAudioPosition(pos);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [playing, dragging]);

  const onSliderChange = (value: number) => {
    if (player.current) {
      updatePlayerPosition(value);
    }
    setAudioPosition(value);
  };

  const updatePlayerPosition = debounce((value) => {
    setPlaying(false);
    player.current.seek(value);
    setPlaying(true);
  }, 300);

  const onButtonClick = () => {
    setPlaying(!playing);
  };

  const minElapsed = Math.floor(position / 60);
  const secElapsed = Math.floor(position - minElapsed * 60);

  return (
    <div
      className="flex w-full font-sans text-sm leading-5"
      style={{ letterSpacing: "5.6px" }}
    >
      <ReactHowler
        src={src}
        playing={playing}
        ref={player}
        html5={true}
        preload={true}
      />
      <div
        className="flex items-center"
        style={{ minWidth: 84 }}
        role="button"
        tabIndex={0}
        onClick={() => onButtonClick()}
        onKeyPress={() => onButtonClick()}
      >
        <div className="mr-2">
          {!playing && <PlayIcon />}
          {playing && <PauseIcon />}
        </div>
        <div>
          {!playing && t("player.play")}
          {playing && t("player.pause")}
        </div>
      </div>
      <div className="flex items-center w-full px-8">
        <Slider
          styles={{
            track: {
              width: "100%",
              height: "1px",
            },
            thumb: {
              height: "12px",
              width: "12px",
              border: "solid 1px lightgrey",
            },
          }}
          axis="x"
          x={position}
          onChange={({ x }) => onSliderChange(x)}
          onDragStart={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
          xmin={0}
          xmax={player.current?.duration() || 0} // update max to duration
          disabled={false}
        />
      </div>
      <div className="" style={{ minWidth: 64 }}>{`${minElapsed}:${
        secElapsed > 9 ? secElapsed : `0${secElapsed}`
      }`}</div>
    </div>
  );
};
