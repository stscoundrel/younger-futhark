# Younger Futhark

Transform latin letters to Younger Futhark runes & vice versa

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

### About Younger Futhark

The Younger Futhark, also called Scandinavian runes, is a runic alphabet and a reduced form of the Elder Futhark, with only 16 characters. It was in use from about the 9th century onwards.