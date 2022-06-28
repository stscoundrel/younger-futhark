import { getRuneMapping } from './mappings/rune-mapping';
import { getLettersToLongBranchRunesMapping, getLettersToShortTwigRunesMapping } from './mappings/letter-mapping';
import { transform } from './transform';

export enum Variant {
  LongBranch = 'LONG_BRANCH',
  ShortTwig = 'SHORTTWIG'
}

export const lettersToLongBranchRunes = (content: string): string => {
  const letterMapping = getLettersToLongBranchRunesMapping();
  const result = transform(content, letterMapping);

  return result;
};

export const lettersToShortTwigRunes = (content: string): string => {
  const letterMapping = getLettersToShortTwigRunesMapping();
  const result = transform(content, letterMapping);

  return result;
};

// For backwards compatibility & similar interface for other rune libs.
export const lettersToRunes = (
  content: string,
  variant: Variant = Variant.LongBranch,
): string => {
  if (variant === Variant.ShortTwig) {
    return lettersToShortTwigRunes(content);
  }

  return lettersToLongBranchRunes(content);
};

export const runesToLetters = (content: string): string => {
  const runeMapping = getRuneMapping();
  const result = transform(content, runeMapping);

  return result;
};

export default {
  lettersToRunes,
  runesToLetters,
  lettersToLongBranchRunes,
  lettersToShortTwigRunes,
  getRuneMapping,
  getLetterMapping: getLettersToLongBranchRunesMapping,
  getLettersToLongBranchRunesMapping,
  getLettersToShortTwigRunesMapping,
  Variant,
};
