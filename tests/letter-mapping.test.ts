import youngerFuthark from '../src';

describe('Letter mapping tests', () => {
  test('Returns map of runes to letters', () => {
    const resultMap = youngerFuthark.getLetterMapping();

    expect(typeof resultMap).toBe('object');
    expect(resultMap instanceof Map).toBeTruthy();
  });

  test('Letter contains all common letters', () => {
    const resultMap = youngerFuthark.getLetterMapping();

    expect(resultMap.size).toBe(31);

    expect(resultMap.has('a')).toBeTruthy();
    expect(resultMap.has('b')).toBeTruthy();
    expect(resultMap.has('c')).toBeTruthy();
    expect(resultMap.has('d')).toBeTruthy();
    expect(resultMap.has('e')).toBeTruthy();
    expect(resultMap.has('f')).toBeTruthy();
    expect(resultMap.has('g')).toBeTruthy();
    expect(resultMap.has('h')).toBeTruthy();
    expect(resultMap.has('i')).toBeTruthy();
    expect(resultMap.has('j')).toBeTruthy();
    expect(resultMap.has('k')).toBeTruthy();
    expect(resultMap.has('l')).toBeTruthy();
    expect(resultMap.has('m')).toBeTruthy();
    expect(resultMap.has('n')).toBeTruthy();
    expect(resultMap.has('o')).toBeTruthy();
    expect(resultMap.has('p')).toBeTruthy();
    expect(resultMap.has('q')).toBeTruthy();
    expect(resultMap.has('r')).toBeTruthy();
    expect(resultMap.has('s')).toBeTruthy();
    expect(resultMap.has('t')).toBeTruthy();
    expect(resultMap.has('u')).toBeTruthy();
    expect(resultMap.has('v')).toBeTruthy();
    expect(resultMap.has('w')).toBeTruthy();
    expect(resultMap.has('x')).toBeTruthy();
    expect(resultMap.has('y')).toBeTruthy();
    expect(resultMap.has('z')).toBeTruthy();
    expect(resultMap.has('å')).toBeTruthy();
    expect(resultMap.has('ä')).toBeTruthy();
    expect(resultMap.has('æ')).toBeTruthy();
    expect(resultMap.has('ö')).toBeTruthy();
    expect(resultMap.has('ø')).toBeTruthy();
  });
});
