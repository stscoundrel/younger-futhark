import youngerFuthark from '../src';

describe('Letters to runes transformation tests', () => {
  test('Ignores not-found letters', () => {
    const falseLetters = '12345';
    const expected = '';

    const result = youngerFuthark.lettersToRunes(falseLetters);

    expect(result).toBe(expected);
  });

  test('Transforms letters to runes', () => {
    const letters = 'fuþark';
    const expected = 'ᚠᚢᚦᛅᚱᚴ';

    const result = youngerFuthark.lettersToRunes(letters);

    expect(result).toBe(expected);
  });

  test('Transforms full sentence to runes', () => {
    // From Old Groms runestone.
    const letters = 'auk tani karþi kristna';
    const expected = 'ᛅᚢᚴ ᛏᛅᚾᛁ ᚴᛅᚱᚦᛁ ᚴᚱᛁᛋᛏᚾᛅ';

    const result = youngerFuthark.lettersToRunes(letters);

    expect(result).toBe(expected);
  });

  test('Transforms accented letters', () => {
    const letters = 'a e i o u y';
    const accentedLetters = 'á é í ó ú ý';

    const result1 = youngerFuthark.lettersToRunes(letters);
    const result2 = youngerFuthark.lettersToRunes(accentedLetters);

    expect(result1).toEqual(result2);
  });
});
