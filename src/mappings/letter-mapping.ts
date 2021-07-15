export const getLetterMapping = (): Map<string, string> => {
  const letterMapping = new Map();
  letterMapping.set('a', 'ᛅ');
  letterMapping.set('á', 'ᛅ');
  letterMapping.set('b', 'ᛒ');
  letterMapping.set('c', 'ᛋ');
  letterMapping.set('d', 'ᛏ');
  letterMapping.set('ð', 'ᚦ');
  letterMapping.set('e', 'ᛁ');
  letterMapping.set('é', 'ᛁ');
  letterMapping.set('f', 'ᚠ');
  letterMapping.set('g', 'ᚴ');
  letterMapping.set('h', 'ᚼ');
  letterMapping.set('i', 'ᛁ');
  letterMapping.set('í', 'ᛁ');
  letterMapping.set('j', 'ᛁ');
  letterMapping.set('k', 'ᚴ');
  letterMapping.set('l', 'ᛚ');
  letterMapping.set('m', 'ᛘ');
  letterMapping.set('n', 'ᚾ');
  letterMapping.set('o', 'ᚢ');
  letterMapping.set('ó', 'ᚢ');
  letterMapping.set('p', 'ᛒ');
  letterMapping.set('q', 'ᚴ');
  letterMapping.set('r', 'ᚱ');
  letterMapping.set('s', 'ᛋ');
  letterMapping.set('t', 'ᛏ');
  letterMapping.set('þ', 'ᚦ');
  letterMapping.set('u', 'ᚢ');
  letterMapping.set('ú', 'ᚢ');
  letterMapping.set('v', 'ᚢ');
  letterMapping.set('w', 'ᚢ');
  letterMapping.set('x', 'ᛋ');
  letterMapping.set('y', 'ᚢ');
  letterMapping.set('ý', 'ᚢ');
  letterMapping.set('z', 'ᛋ');
  letterMapping.set('å', 'ᚢ');
  letterMapping.set('ä', 'ᛅ');
  letterMapping.set('æ', 'ᛅ');
  letterMapping.set('ö', 'ᚢ');
  letterMapping.set('ø', 'ᚢ');
  letterMapping.set('ǫ', 'ᚢ');
  letterMapping.set(' ', ':');
  return letterMapping;
};

export default {
  getLetterMapping,
};
