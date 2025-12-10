export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';

export interface Option {
  text: string;
  value: string; // 'E', 'I', 'S', 'N', etc.
}

export interface Question {
  id: number;
  text: string;
  dimension: Dimension;
  options: [Option, Option];
}

export interface CharacterResult {
  id: string;
  name: string;
  mbti: string;
  catchphrase: string;
  description: string;
  tags: string[];
  imageUrl: string;
  bestMatch: string;
  worstMatch: string;
}

export interface MBTIResult {
  type: string;
  scores: {
    E: number;
    I: number;
    S: number;
    N: number;
    T: number;
    F: number;
    J: number;
    P: number;
  };
}
