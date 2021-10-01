import { FC, useState } from 'react';
import Sound from 'react-sound';
import Slider from 'react-input-slider';

// components
import Icon from 'components/icon';

// icons
import PLAY from 'svgs/ui/play.svg?sprite';

// types
import { PlayerProps } from './types';

const Player: FC<PlayerProps> = ({ src }: PlayerProps) => {
  const [status, setStatus] = useState(Sound.status.STOPPED);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setAudioPosition] = useState(0);

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
        <Icon icon={PLAY} className="w-2 h-2 mr-2" />
        <div>
          {[Sound.status.STOPPED, Sound.status.PAUSED].includes(status) && 'PLAY'}
          {status === Sound.status.PLAYING && 'PAUSE'}
        </div>
      </div>
      <div className="w-full">
        <Slider
          styles={{
            track: {
              height: '1px',
            },
            thumb: {
              height: '12px',
              width: '12px',
            },
          }}
          axis="x"
          x={position}
          onChange={({ x }) => {
            setStatus(Sound.status.PAUSED);
            setAudioPosition(x);
            // setTimeout(() => setStatus(Sound.status.PLAYING), 100);
          }}
          xmin={0}
          xmax={duration}
          disabled={false}
        />
      </div>
      <div className="" style={{ minWidth: 64 }}>{`${minElapsed}:${secElapsed}`}</div>
    </div>
  );
};

export default Player;
