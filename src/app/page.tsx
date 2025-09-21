'use client';

import { useState, useEffect } from 'react';
import { Container, Text, Grid, Box, Title, Stack } from '@mantine/core';
import SoundCard from '@/components/SoundCard';
import { Sound, SoundData } from '@/types/sound';

export default function Home() {
  const [sounds, setSounds] = useState<Sound[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSounds = async () => {
      try {
        const response = await fetch('/sounds.json');
        const soundsData: SoundData[] = await response.json();

        const formattedSounds: Sound[] = soundsData.map(item => ({
          file: item.file,
          label: item.label,
          thumbnail: item.thumbnail,
          volume: item.volume || 30,
          isPlaying: false
        }));

        setSounds(formattedSounds);
      } catch (error) {
        console.error('Error loading sounds:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSounds();
  }, []);

  const handlePlay = (sound: Sound) => {
    // Track play event (you can add analytics here)
    console.log('Playing:', sound.label);
  };

  const handleStop = (sound: Sound) => {
    // Track stop event (you can add analytics here)
    console.log('Stopped:', sound.label);
  };

  const handleVolumeChange = (sound: Sound, volume: number) => {
    // Update volume for the sound
    setSounds(prevSounds =>
      prevSounds.map(s =>
        s.file === sound.file ? { ...s, volume } : s
      )
    );
  };

  if (loading) {
    return (
      <Box
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa'
        }}
      >
        <Box ta="center">
          <Box
            style={{
              width: 48,
              height: 48,
              border: '4px solid #e9ecef',
              borderTop: '4px solid #3b82f6',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 16px'
            }}
          />
          <Text c="dimmed">Loading relaxing sounds...</Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      {/* Intro Section - matches original design */}
      <Box
        className="intro"
        style={{
          backgroundImage: 'url(/assets/images/malte-wingen-381988-unsplash.jpg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container size="xl" style={{ width: '100%' }}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Box style={{ padding: '100px 0' }}>
                <Stack gap="md">
                  <Title
                    order={1}
                    size="3rem"
                    fw={300}
                    c="dimmed"
                    style={{ margin: 0 }}
                  >
                    Find your calm in 5 minutes
                  </Title>

                  <Text
                    size="lg"
                    fw={300}
                    c="dimmed"
                    style={{ lineHeight: 1.4 }}
                  >
                    Transform your day with carefully curated ambient sounds designed to calm your mind and sharpen your focus.
                    <br />
                    <br />
                    Mix and match different sounds, adjust volumes, and create your perfect atmosphere for relaxation or concentration.
                  </Text>
                </Stack>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 0, md: 8 }} />
          </Grid>
        </Container>
      </Box>

      {/* Sound Cards Section */}
      <Box>
        <Grid gutter={0}>
          {sounds.map((sound) => (
            <Grid.Col key={sound.file} span={{ base: 12, md: 6 }}>
              <SoundCard
                sound={sound}
                onPlay={handlePlay}
                onStop={handleStop}
                onVolumeChange={handleVolumeChange}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box
        style={{
          backgroundColor: '#fdd13c',
          padding: '50px 0'
        }}
      >
        <Container size="xl">
          <Text ta="center" size="lg" fw={500} c="dark.8">
            <Text
              component="a"
              href="http://dzhuneyt.com"
              target="_blank"
              rel="noopener"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => {
                // Analytics tracking
                if (typeof window !== 'undefined' && (window as typeof window & { gtag?: Function }).gtag) {
                  (window as typeof window & { gtag: Function }).gtag('event', 'click', {
                    event_category: 'footer',
                    event_label: 'dzhuneyt.com',
                  });
                }
                console.log('Powered By Clicked');
              }}
            >
              Created with <span style={{ color: '#e74c3c' }}>❤️</span> in Bulgaria.
            </Text>
            <br />
            <br />
            Powered by Next.js and strong coffee.
          </Text>
        </Container>
      </Box>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 992px) {
          .intro {
            background: #fdd13c !important;
            background: radial-gradient(#fdd13c, #eabf3b) !important;
          }
        }
      `}</style>
    </Box>
  );
}
