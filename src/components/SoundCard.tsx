'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, Text, Slider as MantineSlider, Stack, ActionIcon } from '@mantine/core';
import { IconPlayerPlay, IconPlayerStop } from '@tabler/icons-react';
import { Sound } from '@/types/sound';

interface SoundCardProps {
  sound: Sound;
  onPlay: (sound: Sound) => void;
  onStop: (sound: Sound) => void;
  onVolumeChange: (sound: Sound, volume: number) => void;
}

export default function SoundCard({ sound, onPlay, onStop, onVolumeChange }: SoundCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(sound.volume || 30);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handlePlayStop = () => {
    if (isPlaying) {
      handleStop();
    } else {
      handlePlay();
    }
  };

  const handlePlay = () => {
    const audioPath = `/assets/audio/${sound.file}`;
    console.log('Attempting to play audio:', audioPath);

    if (!audioRef.current) {
      audioRef.current = new Audio(audioPath);
      audioRef.current.loop = true;
      audioRef.current.volume = volume / 100;
    }

    audioRef.current.play().then(() => {
      console.log('Audio started playing successfully');
      setIsPlaying(true);
      onPlay(sound);
    }).catch((error) => {
      console.error('Error playing audio:', error);
      console.error('Audio path:', audioPath);
    });
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    onStop(sound);
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    onVolumeChange(sound, newVolume);
  };

  const getThumbnailPath = () => {
    return sound.thumbnail ? `/assets/images/${sound.thumbnail}` : null;
  };

  return (
    <Box
      style={{
        backgroundImage: getThumbnailPath() ? `url(${getThumbnailPath()})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px',
        opacity: isPlaying ? 1 : 0.85,
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'opacity 0.2s ease',
        borderRadius: 'md',
        overflow: 'hidden'
      }}
      onClick={handlePlayStop}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        if (!isPlaying) {
          e.currentTarget.style.opacity = '0.85';
        }
      }}
    >
      {/* Dark overlay */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
          zIndex: 1
        }}
      />

      {/* Content */}
      <Stack
        align="center"
        justify="center"
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          width: '100%'
        }}
        gap="xl"
      >
        {/* Sound label */}
        <Text
          size="xl"
          fw={500}
          c="white"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '15px',
            borderRadius: '10px',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          {sound.label}
        </Text>

        {/* Volume control - appears when playing */}
        {isPlaying && (
          <Box
            style={{
              width: '80%',
              opacity: isPlaying ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          >
            <MantineSlider
              value={volume}
              onChange={handleVolumeChange}
              min={0}
              max={100}
              step={1}
              size="sm"
              color="blue"
              styles={{
                track: {
                  backgroundColor: 'rgba(255,255,255,0.3)'
                },
                thumb: {
                  backgroundColor: 'white',
                  border: '2px solid #3b82f6'
                }
              }}
            />
          </Box>
        )}
      </Stack>
    </Box>
  );
}
