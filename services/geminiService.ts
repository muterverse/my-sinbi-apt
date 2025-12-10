import { CharacterResult, MBTIResult } from "../types";
import { CHARACTERS } from "../constants";

// This service is now purely local and synchronous, but we keep the async signature 
// if we want to simulate network delay or easy refactoring later.
export const calculateCharacter = async (result: MBTIResult): Promise<CharacterResult> => {
  // Simulate "analyzing" time for dramatic effect
  await new Promise(resolve => setTimeout(resolve, 1500));

  const type = result.type;
  
  // Fallback to closest match if exact type missing (though we covered all 16)
  const character = CHARACTERS[type] || CHARACTERS['ESFP'];
  
  return character;
};
