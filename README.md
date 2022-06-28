# Younger Futhark

Transform latin letters to Younger Futhark runes & vice versa

Other runic alphabets:
- [Elder Futhark](https://github.com/stscoundrel/elder-futhark)
- [Futhorc (Anglo-Saxon runes)](https://github.com/stscoundrel/futhorc)
- [Futhork (Medieval runes)](https://github.com/stscoundrel/futhork)

### Install

`yarn add younger-futhark`

#### Usage

You can either transform runes to text, or text to runes.

Latin text to runes:

```javascript
import { lettersToRunes } from 'younger-futhark'

// Old Norse text from Old Groms runestone.
const result = lettersToRunes('auk tani karþi kristna')

console.log(result) // ᛅᚢᚴ ᛏᛅᚾᛁ ᚴᛅᚱᚦᛁ ᚴᚱᛁᛋᛏᚾᛅ
```

Runes to latin text:

```javascript
import { runesToLetters } from 'younger-futhark'

const result = runesToLetters('ᚠᚢᚦᛅᚱᚴ')

console.log(result) // fuþark
```

Style variants:

Younger Futhark contains two rune sets: long branch (danish) and short twig (Norwegian / Swedish)

```javascript
import youngerFuthark from 'younger-futhark';

const letters = "aábcdðeéfghiíjklmnoópqrstþuúvwxyýzåäæöøǫþ";

// Comes with named functions per style.
const longBranch = youngerFuthark.lettersToLongBranchRunes(letters);
const shortTwig = youngerFuthark.lettersToShortTwigRunes(letters);

console.log(longBranch); // ᛅᛅᛒᛋᛏᚦᛁᛁᚠᚴᚼᛁᛁᛁᚴᛚᛘᚾᚢᚢᛒᚴᚱᛋᛏᚦᚢᚢᚢᚢᛋᚢᚢᛋᚢᛅᛅᚢᚢᚢᚦ
console.log(shortTwig);  // ᛆᛆᛒᛌᛐᚦᛁᛁᚠᚴᚽᛁᛁᛁᚴᛚᛘᚿᚢᚢᛒᚴᚱᛌᛐᚦᚢᚢᚢᚢᛌᚢᚢᛌᚢᛆᛆᚢᚢᚢᚦ

// Default function can also be called with variant enum to define the runeset.
const longBranchResult = youngerFuthark.lettersToRunes(letters, youngerFuthark.Variant.longBranch)
const shortTwigResult = youngerFuthark.lettersToRunes(letters, youngerFuthark.Variant.shortTwig)
```

### About Younger Futhark

The Younger Futhark, also called Scandinavian runes, is a runic alphabet and a reduced form of the Elder Futhark, with only 16 characters. It was in use from about the 9th century onwards.
