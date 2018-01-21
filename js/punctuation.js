let punctuation = [
  {
    html: '&ensp;',
    symbol: '',
    numeric: '&#8194;',
    description: 'en space',
    hex: 'u+2002 ISOpub',
    cssIso: '\\2002',
    jsOctal: '\\u2002',
    category: 'punctuation'
  },
  {
    html: '&emsp;',
    symbol: '',
    numeric: '&#8195;',
    description: 'em space',
    hex: 'u+2003 ISOpub',
    cssIso: '\\2003',
    jsOctal: '\\u2003',
    category: 'punctuation'
  },
  {
    html: '&thinsp;',
    symbol: '',
    numeric: '&#8201;',
    description: 'thin space',
    hex: 'u+2009 ISOpub',
    cssIso: '\\2009',
    jsOctal: '\\u2009',
    category: 'punctuation'
  },
  {
    html: '&zwnj;',
    symbol: '',
    numeric: '&#8204;',
    description: 'zero width non-joiner',
    hex: 'u+200C NEW RFC 2070',
    cssIso: '\\200C',
    jsOctal: '\\u200C',
    category: 'punctuation'
  },
  {
    html: '&zwj;',
    symbol: '',
    numeric: '&#8205;',
    description: 'zero width joiner',
    hex: 'u+200D NEW RFC 2070',
    cssIso: '\\200D',
    jsOctal: '\\u200d',
    category: 'punctuation'
  },
  {
    html: '&lrm;',
    symbol: '',
    numeric: '&#8206;',
    description: 'left-to-right mark',
    hex: 'u+200E NEW RFC 2070',
    cssIso: '\\200E',
    jsOctal: '\\u200e',
    category: 'punctuation'
  },
  {
    html: '&rlm;',
    symbol: '',
    numeric: '&#8207;',
    description: 'right-to-left mark',
    hex: 'u+200F NEW RFC 2070',
    cssIso: '\\200F',
    jsOctal: '\\u200f',
    category: 'punctuation'
  },
  {
    html: '&ndash;',
    symbol: '–',
    numeric: '&#8211;',
    description: 'en dash',
    hex: 'u+2013 ISOpub',
    cssIso: '\\2013',
    jsOctal: '\\u2013',
    category: 'punctuation'
  },
  {
    html: '&mdash;',
    symbol: '—',
    numeric: '&#8212;',
    description: 'em dash',
    hex: 'u+2014 ISOpub',
    cssIso: '\\2014',
    jsOctal: '\\u2014',
    category: 'punctuation'
  },
  {
    html: '&lsquo;',
    symbol: '‘',
    numeric: '&#8216;',
    description: 'left single quotation mark',
    hex: 'u+2018 ISOnum',
    cssIso: '\\2018',
    jsOctal: '\\u2018',
    category: 'punctuation'
  },
  {
    html: '&rsquo;',
    symbol: '’',
    numeric: '&#8217;',
    description: 'right single quotation mark',
    hex: 'u+2019 ISOnum',
    cssIso: '\\2019',
    jsOctal: '\\u2019',
    category: 'punctuation'
  },
  {
    html: '&sbquo;',
    symbol: '‚',
    numeric: '&#8218;',
    description: 'single low-9 quotation mark',
    hex: 'u+201A NEW',
    cssIso: '\\201A',
    jsOctal: '\\u201a',
    category: 'punctuation'
  },
  {
    html: '&ldquo;',
    symbol: '“',
    numeric: '&#8220;',
    description: 'left double quotation mark',
    hex: 'u+201C ISOnum',
    cssIso: '\\201C',
    jsOctal: '\\u201c',
    category: 'punctuation'
  },
  {
    html: '&rdquo;',
    symbol: '”',
    numeric: '&#8221;',
    description: 'right double quotation mark',
    hex: 'u+201D ISOnum',
    cssIso: '\\201D',
    jsOctal: '\\u201d',
    category: 'punctuation'
  },
  {
    html: '&bdquo;',
    symbol: '„',
    numeric: '&#8222;',
    description: 'double low-9 quotation mark',
    hex: 'u+201E NEW',
    cssIso: '\\201E',
    jsOctal: '\\u201e',
    category: 'punctuation'
  },
  {
    html: '&dagger;',
    symbol: '†',
    numeric: '&#8224;',
    description: 'dagger',
    hex: 'u+2020 ISOpub',
    cssIso: '\\2020',
    jsOctal: '\\u2020',
    category: 'punctuation'
  },
  {
    html: '&Dagger;',
    symbol: '‡',
    numeric: '&#8225;',
    description: 'double dagger',
    hex: 'u+2021 ISOpub',
    cssIso: '\\2021',
    jsOctal: '\\u2021',
    category: 'punctuation'
  },
  {
    html: '&permil;',
    symbol: '‰',
    numeric: '&#8240;',
    description: 'per mille sign',
    hex: 'u+2030 ISOtech',
    cssIso: '\\2030',
    jsOctal: '\\u2030',
    category: 'punctuation'
  },
  {
    html: '&lsaquo;',
    symbol: '‹',
    numeric: '&#8249;',
    description: 'single left-pointing angle quotation mark',
    hex: 'u+2039 ISO proposed',
    cssIso: '\\2039',
    jsOctal: '\\u2039',
    category: 'punctuation'
  },
  {
    html: '&rsaquo;',
    symbol: '›',
    numeric: '&#8250;',
    description: 'single right-pointing angle quotation mark',
    hex: 'u+203A ISO proposed',
    cssIso: '\\203A',
    jsOctal: '\\u203a',
    category: 'punctuation'
  },
  {
    html: '&bull;',
    symbol: '•',
    numeric: '&#8226;',
    description: 'bullet, a.k.a. black small circle bullet is NOT the same as bullet operator — u+2219',
    hex: 'u+2022 ISOpub',
    cssIso: '\\2022',
    jsOctal: '\\u2219',
    category: 'punctuation'
  },
  {
    html: '&hellip;',
    symbol: '…',
    numeric: '&#8230;',
    description: 'horizontal ellipsis, a.k.a. three dot leader',
    hex: 'u+2026 ISOpub',
    cssIso: '\\2026',
    jsOctal: '\\u2026',
    category: 'punctuation'
  },
  {
    html: '&prime;',
    symbol: '′',
    numeric: '&#8242;',
    description: 'prime, a.k.a. minutes, a.k.a. feet',
    hex: 'u+2032 ISOtech',
    cssIso: '\\2032',
    jsOctal: '\\u2032',
    category: 'punctuation'
  },
  {
    html: '&Prime;',
    symbol: '″',
    numeric: '&#8243;',
    description: 'double prime, a.k.a. seconds, a.k.a. inches',
    hex: 'u+2033 ISOtech',
    cssIso: '\\2033',
    jsOctal: '\\u2033',
    category: 'punctuation'
  },
  {
    html: '&oline;',
    symbol: '‾',
    numeric: '&#8254;',
    description: 'overline, a.k.a. spacing overscore',
    hex: 'u+203E NEW',
    cssIso: '\\203E',
    jsOctal: '\\u203e',
    category: 'punctuation'
  },
  {
    html: '&frasl;',
    symbol: '⁄',
    numeric: '&#8260;',
    description: 'fraction slash',
    hex: 'u+2044 NEW',
    cssIso: '\\2044',
    jsOctal: '\\u8260',
    category: 'punctuation'
  }
];
