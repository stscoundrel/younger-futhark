import youngerFuthark, { Variant } from '../src';

describe('Letters to runes transformation tests', () => {
  test('Does not transform not-found characters', () => {
    const original = '12345';

    const result = youngerFuthark.lettersToRunes(original);

    expect(result).toBe(original);
  });

  test('Transforms letters to runes (default)', () => {
    const content = 'aábcdðeéfghiíjklmnoópqrstþuúvwxyýzåäæöøǫþ';
    const expected = 'ᛅᛅᛒᛋᛏᚦᛁᛁᚠᚴᚼᛁᛁᛁᚴᛚᛘᚾᚢᚢᛒᚴᚱᛋᛏᚦᚢᚢᚢᚢᛋᚢᚢᛋᚢᛅᛅᚢᚢᚢᚦ';

    const result = youngerFuthark.lettersToRunes(content);

    expect(result).toBe(expected);
  });

  test('Transforms letters to runes (long branch)', () => {
    const content = 'aábcdðeéfghiíjklmnoópqrstþuúvwxyýzåäæöøǫþ';
    const expected = 'ᛅᛅᛒᛋᛏᚦᛁᛁᚠᚴᚼᛁᛁᛁᚴᛚᛘᚾᚢᚢᛒᚴᚱᛋᛏᚦᚢᚢᚢᚢᛋᚢᚢᛋᚢᛅᛅᚢᚢᚢᚦ';

    const result = youngerFuthark.lettersToLongBranchRunes(content);

    expect(result).toBe(expected);
  });

  test('Transforms letters to runes (short twig)', () => {
    const content = 'aábcdðeéfghiíjklmnoópqrstþuúvwxyýzåäæöøǫþ';
    const expected = 'ᛆᛆᛒᛌᛐᚦᛁᛁᚠᚴᚽᛁᛁᛁᚴᛚᛘᚿᚢᚢᛒᚴᚱᛌᛐᚦᚢᚢᚢᚢᛌᚢᚢᛌᚢᛆᛆᚢᚢᚢᚦ';

    const result = youngerFuthark.lettersToShortTwigRunes(content);

    expect(result).toBe(expected);
  });

  test('Transforms letters to runes with given variant', () => {
    const content = 'aábcdðeéfghiíjklmnoópqrstþuúvwxyýzåäæöøǫþ';
    const expectedLongBranch = 'ᛅᛅᛒᛋᛏᚦᛁᛁᚠᚴᚼᛁᛁᛁᚴᛚᛘᚾᚢᚢᛒᚴᚱᛋᛏᚦᚢᚢᚢᚢᛋᚢᚢᛋᚢᛅᛅᚢᚢᚢᚦ';
    const expectedShortTwig = 'ᛆᛆᛒᛌᛐᚦᛁᛁᚠᚴᚽᛁᛁᛁᚴᛚᛘᚿᚢᚢᛒᚴᚱᛌᛐᚦᚢᚢᚢᚢᛌᚢᚢᛌᚢᛆᛆᚢᚢᚢᚦ';
    const longBranchResult = youngerFuthark.lettersToRunes(content, Variant.LongBranch);
    const shortTwigResult = youngerFuthark.lettersToRunes(content, Variant.ShortTwig);

    expect(longBranchResult).toBe(expectedLongBranch);
    expect(shortTwigResult).toBe(expectedShortTwig);
  });

  test('Transforms full sentence to runes', () => {
    // From Old Groms runestone.
    const letters = 'auk tani karþi kristna';
    const expected = 'ᛅᚢᚴ:ᛏᛅᚾᛁ:ᚴᛅᚱᚦᛁ:ᚴᚱᛁᛋᛏᚾᛅ';

    const result = youngerFuthark.lettersToRunes(letters);

    expect(result).toBe(expected);
  });

  test('Transforms upper & lowercase to same runes', () => {
    // From Old Groms runestone.
    const letters = 'AUK tani Karþi kriSTnA';
    const expected = 'ᛅᚢᚴ:ᛏᛅᚾᛁ:ᚴᛅᚱᚦᛁ:ᚴᚱᛁᛋᛏᚾᛅ';

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
    const expected = 'ᛅᚾᛏ:ᛚᚢ;:"ᚼᛁ":ᛋᛒᚢᚴᛁ:ᛁᚾ:ᚱᛁᛏᛏᛚᛁᛋ.';

    const result = youngerFuthark.lettersToRunes('And lo; "he" spoke in riddles.');

    expect(result).toEqual(expected);
  });

  test('Transforms ǫ (issue #53).', () => {
    const expected = 'ᚢ';

    const result = youngerFuthark.lettersToRunes('ǫ');

    expect(result).toEqual(expected);
  });
});
