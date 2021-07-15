import youngerFuthark from '../src';

describe('Rune mapping tests', () => {
  test('Returns map of runes to letters', () => {
    const resultMap = youngerFuthark.getRuneMapping();

    expect(typeof resultMap).toBe('object');
    expect(resultMap instanceof Map).toBeTruthy();
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

    // Alternative runes when available.
    expect(resultMap.get('ᚽ')).toBe('h');
    expect(resultMap.get('ᚿ')).toBe('n');
    expect(resultMap.get('ᛆ')).toBe('a');
    expect(resultMap.get('ᛌ')).toBe('s');
    expect(resultMap.get('ᛐ')).toBe('t');
  });
});
