import youngerFuthark from '../src';

describe('Rune mapping tests', () => {
  test('Returns map of runes to letters', () => {
    const resultMap = youngerFuthark.getRuneMapping();

    expect(typeof resultMap).toBe('object');
    expect(resultMap instanceof Map).toBeTruthy();
  });

  test('Runemap contains all 16 runes + space', () => {
    const resultMap = youngerFuthark.getRuneMapping();

    expect(resultMap.size).toBe(17);

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

  test('Runes in map have matching letters', () => {
    const resultMap = youngerFuthark.getRuneMapping();

    expect(resultMap.get('ᚠ')).toBe('f');
    expect(resultMap.get('ᚢ')).toBe('u');
    expect(resultMap.get('ᚦ')).toBe('þ');
    expect(resultMap.get('ᚬ')).toBe('o');
    expect(resultMap.get('ᚱ')).toBe('r');
    expect(resultMap.get('ᚴ')).toBe('k');
    expect(resultMap.get('ᚼ')).toBe('h');
    expect(resultMap.get('ᚾ')).toBe('n');
    expect(resultMap.get('ᛁ')).toBe('i');
    expect(resultMap.get('ᛅ')).toBe('a');
    expect(resultMap.get('ᛋ')).toBe('s');
    expect(resultMap.get('ᛏ')).toBe('t');
    expect(resultMap.get('ᛒ')).toBe('b');
    expect(resultMap.get('ᛘ')).toBe('m');
    expect(resultMap.get('ᛚ')).toBe('l');
    expect(resultMap.get('ᛦ')).toBe('R');
    expect(resultMap.get(':')).toBe(' ');
  });
});
