import youngerFuthark from '../src';

describe('Letter mapping tests', () => {
  test('Returns map of runes to letters', () => {
    const resultMap = youngerFuthark.getLetterMapping();

    expect(typeof resultMap).toBe('object');
    expect(resultMap instanceof Map).toBeTruthy();
  });

  test('Common letters have matching runes', () => {
    const resultMap = youngerFuthark.getLetterMapping();

    expect(resultMap.get('a')).toBe('ᛅ');
    expect(resultMap.get('á')).toBe('ᛅ');
    expect(resultMap.get('b')).toBe('ᛒ');
    expect(resultMap.get('c')).toBe('ᛋ');
    expect(resultMap.get('d')).toBe('ᛏ');
    expect(resultMap.get('e')).toBe('ᛁ');
    expect(resultMap.get('é')).toBe('ᛁ');
    expect(resultMap.get('f')).toBe('ᚠ');
    expect(resultMap.get('g')).toBe('ᚴ');
    expect(resultMap.get('h')).toBe('ᚼ');
    expect(resultMap.get('i')).toBe('ᛁ');
    expect(resultMap.get('í')).toBe('ᛁ');
    expect(resultMap.get('j')).toBe('ᛁ');
    expect(resultMap.get('k')).toBe('ᚴ');
    expect(resultMap.get('l')).toBe('ᛚ');
    expect(resultMap.get('m')).toBe('ᛘ');
    expect(resultMap.get('n')).toBe('ᚾ');
    expect(resultMap.get('o')).toBe('ᚢ');
    expect(resultMap.get('ó')).toBe('ᚢ');
    expect(resultMap.get('p')).toBe('ᛒ');
    expect(resultMap.get('q')).toBe('ᚴ');
    expect(resultMap.get('r')).toBe('ᚱ');
    expect(resultMap.get('s')).toBe('ᛋ');
    expect(resultMap.get('t')).toBe('ᛏ');
    expect(resultMap.get('u')).toBe('ᚢ');
    expect(resultMap.get('ú')).toBe('ᚢ');
    expect(resultMap.get('v')).toBe('ᚢ');
    expect(resultMap.get('w')).toBe('ᚢ');
    expect(resultMap.get('x')).toBe('ᛋ');
    expect(resultMap.get('y')).toBe('ᚢ');
    expect(resultMap.get('ý')).toBe('ᚢ');
    expect(resultMap.get('z')).toBe('ᛋ');
    expect(resultMap.get('å')).toBe('ᚢ');
    expect(resultMap.get('ä')).toBe('ᛅ');
    expect(resultMap.get('æ')).toBe('ᛅ');
    expect(resultMap.get('ö')).toBe('ᚢ');
    expect(resultMap.get('ø')).toBe('ᚢ');
    expect(resultMap.get('ǫ')).toBe('ᚢ');
    expect(resultMap.get(' ')).toBe(':');
  });
});
