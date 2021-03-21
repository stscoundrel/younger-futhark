import youngerFuthark from '../src';

describe('Rune mapping tests', () => {
  test('Returns map of runes to letters', () => {
    const resultMap = youngerFuthark.getRuneMapping();

    expect(typeof resultMap).toBe('object');
    expect(resultMap instanceof Map).toBeTruthy();
  });

  test('Runemap contains all 16 runes', () => {
    const resultMap = youngerFuthark.getRuneMapping();

    expect(resultMap.size).toBe(16);

    expect(resultMap.has('ᚠ')).toBeTruthy();
    expect(resultMap.has('ᚢ')).toBeTruthy();
    expect(resultMap.has('ᚦ')).toBeTruthy();
    expect(resultMap.has('ᚬ')).toBeTruthy();
    expect(resultMap.has('ᚱ')).toBeTruthy();
    expect(resultMap.has('ᚴ')).toBeTruthy();
    expect(resultMap.has('ᚼ')).toBeTruthy();
    expect(resultMap.has('ᚾ')).toBeTruthy();
    expect(resultMap.has('ᛁ')).toBeTruthy();
    expect(resultMap.has('ᛅ')).toBeTruthy();
    expect(resultMap.has('ᛋ')).toBeTruthy();
    expect(resultMap.has('ᛏ')).toBeTruthy();
    expect(resultMap.has('ᛒ')).toBeTruthy();
    expect(resultMap.has('ᛘ')).toBeTruthy();
    expect(resultMap.has('ᛚ')).toBeTruthy();
    expect(resultMap.has('ᛦ')).toBeTruthy();
  });
});
