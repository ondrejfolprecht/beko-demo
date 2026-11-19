const NBSP = " ";

const SINGLE_LETTER_WORD = /(?<=^|[\s( ])([aiouvzsk])\s+(?=\S)/gi;
const NUMBER_WITH_UNIT = /(\d)\s(h|let\b)/g;
const STANDARD_CODE = /\b(ISO|CATIA|Tier)\s(?=[\dV])/g;
const POSTAL_CODE = /\b(\d{3})\s(\d{2})\b/g;

/** Applies Czech typesetting rules: no single-letter word, unit or split code at a line end. */
function setCzech(text: string) {
  return text
    .replace(SINGLE_LETTER_WORD, `$1${NBSP}`)
    .replace(NUMBER_WITH_UNIT, `$1${NBSP}$2`)
    .replace(STANDARD_CODE, `$1${NBSP}`)
    .replace(POSTAL_CODE, `$1${NBSP}$2`);
}

/** Recursively typesets every string of a content object. URLs contain no spaces, so they stay intact. */
export function typeset<T>(value: T): T {
  if (typeof value === "string") return setCzech(value) as T;
  if (Array.isArray(value)) return value.map(typeset) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, typeset(entry)])) as T;
  }
  return value;
}
