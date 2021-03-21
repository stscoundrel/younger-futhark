import { getRuneMapping } from './mappings/rune-mapping';
import { getLetterMapping } from './mappings/letter-mapping';

const transform = (content: string, dictionary: Map<string, string>) : string => {
  let result = '';
  const parts: string[] = content.split('');

  parts.forEach((part) => {
    if (dictionary.has(part)) {
      result += dictionary.get(part);
    } else if (part === ' ') {
      result += ' ';
    }
  });

  return result;
};

export const lettersToRunes = (content: string) : string => {
  const letterMapping = getLetterMapping();
  const result = transform(content, letterMapping);

  return result;
};

export const runesToLetters = (content: string) : string => {
  const runeMapping = getRuneMapping();
  const result = transform(content, runeMapping);

  return result;
};

export default {
  lettersToRunes,
  runesToLetters,
  getRuneMapping,
  getLetterMapping,
};
