import youngerFuthark from '../src';

describe('Letters to runes transformation tests', () => {
  test('Does not transform not-found characters', () => {
    const original = '12345';

    const result = youngerFuthark.lettersToRunes(original);

    expect(result).toBe(original);
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

  test('Transforms upper & lowercase to same runes', () => {
    // From Old Groms runestone.
    const letters = 'AUK tani Karþi kriSTnA';
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

  test('Leaves non-matched letters unchanged.', () => {
    const expected = 'ᛅᚾᛏ ᛚᚢ; "ᚼᛁ" ᛋᛒᚢᚴᛁ ᛁᚾ ᚱᛁᛏᛏᛚᛁᛋ.';

    const result = youngerFuthark.lettersToRunes('And lo; "he" spoke in riddles.');

    expect(result).toEqual(expected);
  });
});
