import { getRuneMapping } from './mappings/rune-mapping';
import { getLetterMapping } from './mappings/letter-mapping';

export const lettersToRunes = (content: string) : string => {
  let result = '';

  const letterMapping = getLetterMapping();
  const letters: string[] = content.split('');

  letters.forEach((letter) => {
    if (letterMapping.has(letter)) {
      result += letterMapping.get(letter);
    } else if (letter === ' ') {
      result += ' ';
    }
  });

  return result;
};

export const runesToLetters = (content: string) : string => {
  let result = '';

  const runeMapping = getRuneMapping();
  const runes: string[] = content.split('');

  runes.forEach((rune) => {
    if (runeMapping.has(rune)) {
      result += runeMapping.get(rune);
    } else if (rune === ' ') {
      result += ' ';
    }
  });

  return result;
};

export default {
  lettersToRunes,
  runesToLetters,
  getRuneMapping,
  getLetterMapping,
};
