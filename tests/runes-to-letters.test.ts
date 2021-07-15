import youngerFuthark from '../src';

describe('Runes to letters transformation tests', () => {
  test('Transforms runes to letters', () => {
    const runes = 'ᚠᚢᚦᛅᚱᚴ';
    const expected = 'fuþark';

    const result = youngerFuthark.runesToLetters(runes);

    expect(result).toBe(expected);
  });

  test('Transforms full rune sentence', () => {
    // From Old Groms runestone.
    const runes = 'ᛅᚢᚴ ᛏᛅᚾᛁ ᚴᛅᚱᚦᛁ ᚴᚱᛁᛋᛏᚾᛅ';
    const expected = 'auk tani karþi kristna';

    const result = youngerFuthark.runesToLetters(runes);

    expect(result).toBe(expected);
  });

  test('Transform alternative rune forms', () => {
    const runes = 'ᚽᚿᛆᛌᛐ';
    const expected = 'hnast';

    const result = youngerFuthark.runesToLetters(runes);

    expect(result).toBe(expected);
  });
});
