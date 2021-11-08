import { FC, useEffect, useState } from 'react';
import Sound from 'react-sound';
import Slider from 'react-input-slider';
import { useTranslation } from 'next-export-i18n';

// components
import Icon from 'components/icon';

// icons
import PLAY from 'svgs/ui/play.svg?sprite';
import PAUSE from 'svgs/ui/pause.svg?sprite';

// types
import { PlayerProps } from './types';

const Player: FC<PlayerProps> = ({ src, autoPlay }: PlayerProps) => {
  const [status, setStatus] = useState(Sound.status.STOPPED);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setAudioPosition] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    if (autoPlay) {
      setStatus(Sound.status.PLAYING);
    } else {
      setStatus(Sound.status.PAUSED);
    }
  }, [autoPlay]);

  const onButtonClick = () => {
    if ([Sound.status.STOPPED, Sound.status.PAUSED].includes(status)) {
      setStatus(Sound.status.PLAYING);
    } else if (status === Sound.status.PLAYING) {
      setStatus(Sound.status.PAUSED);
    }
  };

  const minElapsed = Math.floor(position / 60000);
  const secElapsed = Math.floor((position - minElapsed * 60000) / 1000);

  return (
    <div className="flex w-full font-sans text-sm leading-5" style={{ letterSpacing: '5.6px' }}>
      <Sound
        playStatus={status}
        autoLoad
        url={src}
        position={position}
        onPlaying={({ position: pos }) => {
          setAudioPosition(pos);
        }}
        onLoad={({ loaded, duration: d }) => {
          setDuration(d);
          setAudioLoaded(loaded);
        }}
      />
      <div
        className="flex items-center"
        style={{ minWidth: 84 }}
        role="button"
        tabIndex={0}
        onClick={() => onButtonClick()}
        onKeyPress={() => onButtonClick()}
      >
        <Icon icon={status === Sound.status.PLAYING ? PAUSE : PLAY} className="w-2 h-2 mr-2" />
        <div>
          {[Sound.status.STOPPED, Sound.status.PAUSED].includes(status) && t('player.play')}
          {status === Sound.status.PLAYING && t('player.pause')}
        </div>
      </div>
      <div className="flex items-center w-full px-8">
        <Slider
          styles={{
            track: {
              width: '100%',
              height: '1px',
            },
            thumb: {
              height: '12px',
              width: '12px',
              border: 'solid 1px lightgrey',
            },
          }}
          axis="x"
          x={position}
          onChange={({ x }) => {
            // setStatus(Sound.status.PAUSED);
            setAudioPosition(x);
            setTimeout(() => setStatus(Sound.status.PLAYING), 300);
          }}
          xmin={0}
          xmax={duration}
          disabled={false}
        />
      </div>
      <div className="" style={{ minWidth: 64 }}>{`${minElapsed}:${
        secElapsed > 9 ? secElapsed : `0${secElapsed}`
      }`}</div>
    </div>
  );
};

export default Player;
