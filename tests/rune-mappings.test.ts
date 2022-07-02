import youngerFuthark from '../src';

describe('Rune mapping tests', () => {
  test('Main rune mapping is combination of short twig & long branch', () => {
    // Long branch & short twig runesets are offered as separate exports
    // While it would make sense to export the main rune map as combination of the two,
    // it would result in a bit of extra operations for each transform.
    // Lets trust the maps will remain in sync, and add this test to guard it.
    const runeMapping = youngerFuthark.getRuneMapping();
    const shortTwig = youngerFuthark.getShortTwigRuneMapping();
    const longBranch = youngerFuthark.getLongBranchRuneMapping();

    const combined = new Map([...longBranch, ...shortTwig]);

    expect(runeMapping).toEqual(combined);
  });
});
