export const getRuneMapping = (): Map<string, string[]> => {
  const runeMapping = new Map();
  runeMapping.set('ᚠ', ['f']);
  runeMapping.set('ᚢ', ['u', 'ú', 'ý', 'y', 'v', 'w', 'o', 'ö', 'ø']);
  runeMapping.set('ᚦ', ['þ', 'ð']);
  runeMapping.set('ᚬ', ['o']);
  runeMapping.set('ᚱ', ['r']);
  runeMapping.set('ᚴ', ['k', 'g', 'q']);
  runeMapping.set('ᚼ', ['h']);
  runeMapping.set('ᚾ', ['n']);
  runeMapping.set('ᛁ', ['i', 'í', 'j', 'e', 'é']);
  runeMapping.set('ᛅ', ['a', 'æ']);
  runeMapping.set('ᛋ', ['s', 'c', 'z', 'x']);
  runeMapping.set('ᛏ', ['t', 'd']);
  runeMapping.set('ᛒ', ['b', 'p']);
  runeMapping.set('ᛘ', ['m']);
  runeMapping.set('ᛚ', ['l']);
  runeMapping.set('ᛦ', ['ʀ']);
  return runeMapping;
};

export const getLetterMapping = (): Map<string, string> => {
  const letterMapping = new Map();
  letterMapping.set('a', 'ᛅ');
  letterMapping.set('b', 'ᛒ');
  letterMapping.set('c', 'ᛋ');
  letterMapping.set('d', 'ᛏ');
  letterMapping.set('e', 'ᛁ');
  letterMapping.set('f', 'ᚠ');
  letterMapping.set('g', 'ᚴ');
  letterMapping.set('h', 'ᚼ');
  letterMapping.set('i', 'ᛁ');
  letterMapping.set('j', 'ᛁ');
  letterMapping.set('k', 'ᚴ');
  letterMapping.set('l', 'ᛚ');
  letterMapping.set('m', 'ᛘ');
  letterMapping.set('n', 'ᚾ');
  letterMapping.set('o', 'ᚢ');
  letterMapping.set('p', 'ᛒ');
  letterMapping.set('q', 'ᚴ');
  letterMapping.set('r', 'ᚱ');
  letterMapping.set('s', 'ᛋ');
  letterMapping.set('t', 'ᛏ');
  letterMapping.set('u', 'ᚢ');
  letterMapping.set('v', 'ᚢ');
  letterMapping.set('w', 'ᚢ');
  letterMapping.set('x', 'ᛋ');
  letterMapping.set('y', 'ᚢ');
  letterMapping.set('z', 'ᛋ');
  letterMapping.set('å', 'ᚢ');
  letterMapping.set('ä', 'ᛅ');
  letterMapping.set('æ', 'ᛅ');
  letterMapping.set('ö', 'ᚢ');
  letterMapping.set('ø', 'ᚢ');
  return letterMapping;
};

export default {
  getRuneMapping,
  getLetterMapping,
};
