export interface Sound {
  file: string;
  label: string;
  isPlaying?: boolean;
  volume?: number;
  thumbnail?: string;
}

export interface SoundData {
  file: string;
  label: string;
  thumbnail: string;
  volume?: number;
}
