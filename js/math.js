let math = [
  {
    html: '&forall;',
    symbol: '∀',
    numeric: '&#8704;',
    description: 'for all',
    hex: 'u+2200 ISOtech',
    cssIso: '\\2200',
    jsOctal: '\\u2200',
    category: 'mathematical operators'
  },
  {
    html: '&part;',
    symbol: '∂',
    numeric: '&#8706;',
    description: 'partial differential',
    hex: 'u+2202 ISOtech',
    cssIso: '\\2202',
    jsOctal: '\\u2202',
    category: 'mathematical operators'
  },
  {
    html: '&exist;',
    symbol: '∃',
    numeric: '&#8707;',
    description: 'there exists',
    hex: 'u+2203 ISOtech',
    cssIso: '\\2203',
    jsOctal: '\\u2203',
    category: 'mathematical operators'
  },
  {
    html: '&empty;',
    symbol: '∅',
    numeric: '&#8709;',
    description: 'empty set, a.k.a. null set, a.k.a. diameter',
    hex: 'u+2205 ISOamso',
    cssIso: '\\2205',
    jsOctal: '\\u2205',
    category: 'mathematical operators'
  },
  {
    html: '&nabla;',
    symbol: '∇',
    numeric: '&#8711;',
    description: 'nabla, a.k.a. backward difference',
    hex: 'u+2207 ISOtech',
    cssIso: '\\2207',
    jsOctal: '\\u2207',
    category: 'mathematical operators'
  },
  {
    html: '&isin;',
    symbol: '∈',
    numeric: '&#8712;',
    description: 'element of',
    hex: 'u+2208 ISOtech',
    cssIso: '\\2208',
    jsOctal: '\\u2208',
    category: 'mathematical operators'
  },
  {
    html: '&notin;',
    symbol: '∉',
    numeric: '&#8713;',
    description: 'not an element of',
    hex: 'u+2209 ISOtech',
    cssIso: '\\2209',
    jsOctal: '\\u2209',
    category: 'mathematical operators'
  },
  {
    html: '&ni;',
    symbol: '∋',
    numeric: '&#8715;',
    description: 'contains as member',
    hex: 'u+220B ISOtech',
    cssIso: '\\220B',
    jsOctal: '\\u220b',
    category: 'mathematical operators'
  },
  {
    html: '&prod;',
    symbol: '∏',
    numeric: '&#8719;',
    description: 'n-ary product, a.k.a. product sign',
    hex: 'u+220F ISOamsb',
    cssIso: '\\220F',
    jsOctal: '\\u03a0',
    category: 'mathematical operators'
  },
  {
    html: '&sum;',
    symbol: '∑',
    numeric: '&#8721;',
    description: 'n-ary sumation',
    hex: 'u+2211 ISOamsb',
    cssIso: '\\2211',
    jsOctal: '\\u03a3',
    category: 'mathematical operators'
  },
  {
    html: '&minus;',
    symbol: '−',
    numeric: '&#8722;',
    description: 'minus sign',
    hex: 'u+2212 ISOtech',
    cssIso: '\\2212',
    jsOctal: '\\u2212',
    category: 'mathematical operators'
  },
  {
    html: '&lowast;',
    symbol: '∗',
    numeric: '&#8727;',
    description: 'asterisk operator',
    hex: 'u+2217 ISOtech',
    cssIso: '\\2217',
    jsOctal: '\\u2217',
    category: 'mathematical operators'
  },
  {
    html: '&radic;',
    symbol: '√',
    numeric: '&#8730;',
    description: 'square root, a.k.a. radical sign',
    hex: 'u+221A ISOtech',
    cssIso: '\\221A',
    jsOctal: '\\u221a',
    category: 'mathematical operators'
  },
  {
    html: '&prop;',
    symbol: '∝',
    numeric: '&#8733;',
    description: 'proportional to',
    hex: 'u+221D ISOtech',
    cssIso: '\\221D',
    jsOctal: '\\u221d',
    category: 'mathematical operators'
  },
  {
    html: '&infin;',
    symbol: '∞',
    numeric: '&#8734;',
    description: 'infinity',
    hex: 'u+221E ISOtech',
    cssIso: '\\221E',
    jsOctal: '\\u221e',
    category: 'mathematical operators'
  },
  {
    html: '&ang;',
    symbol: '∠',
    numeric: '&#8736;',
    description: 'angle',
    hex: 'u+2220 ISOamso',
    cssIso: '\\2220',
    jsOctal: '\\u2220',
    category: 'mathematical operators'
  },
  {
    html: '&and;',
    symbol: '⊥',
    numeric: '&#8869;',
    description: 'logical and, a.k.a. wedge',
    hex: 'u+2227 ISOtech',
    cssIso: '\\2227',
    jsOctal: '\\u2227',
    category: 'mathematical operators'
  },
  {
    html: '&or;',
    symbol: '⊦',
    numeric: '&#8870;',
    description: 'logical or, a.k.a. vee',
    hex: 'u+2228 ISOtech',
    cssIso: '\\2228',
    jsOctal: '\\u2228',
    category: 'mathematical operators'
  },
  {
    html: '&cap;',
    symbol: '∩',
    numeric: '&#8745;',
    description: 'intersection, a.k.a. cap',
    hex: 'u+2229 ISOtech',
    cssIso: '\\2229',
    jsOctal: '\\u2229',
    category: 'mathematical operators'
  },
  {
    html: '&cup;',
    symbol: '∪',
    numeric: '&#8746;',
    description: 'union, a.k.a. cup',
    hex: 'u+222A ISOtech',
    cssIso: '\\222A',
    jsOctal: '\\u222a',
    category: 'mathematical operators'
  },
  {
    html: '&int;',
    symbol: '∫',
    numeric: '&#8747;',
    description: 'integral',
    hex: 'u+222B ISOtech',
    cssIso: '\\222B',
    jsOctal: '\\u222b',
    category: 'mathematical operators'
  },
  {
    html: '&there4;',
    symbol: '∴',
    numeric: '&#8756;',
    description: 'therefore',
    hex: 'u+2234 ISOtech',
    cssIso: '\\2234',
    jsOctal: '\\u2234',
    category: 'mathematical operators'
  },
  {
    html: '&sim;',
    symbol: '∼',
    numeric: '&#8764;',
    description: 'tilde',
    hex: 'u+223C ISOtech',
    cssIso: '\\223C',
    jsOctal: '\\u223c',
    category: 'mathematical operators'
  },
  {
    html: '&cong;',
    symbol: '≅',
    numeric: '&#8773;',
    description: 'approximately equal to',
    hex: 'u+2245 ISOtech',
    cssIso: '\\2245',
    jsOctal: '\\u2245',
    category: 'mathematical operators'
  },
  {
    html: '&asymp;',
    symbol: '≈',
    numeric: '&#8776;',
    description: 'almost equal to, a.k.a. asymptotic to',
    hex: 'u+2248 ISOamsr',
    cssIso: '\\2248',
    jsOctal: '\\u2248',
    category: 'mathematical operators'
  },
  {
    html: '&ne;',
    symbol: '≠',
    numeric: '&#8800;',
    description: 'not equal to',
    hex: 'u+2260 ISOtech',
    cssIso: '\\2260',
    jsOctal: '\\u2260',
    category: 'mathematical operators'
  },
  {
    html: '&equiv;',
    symbol: '≡',
    numeric: '&#8801;',
    description: 'identical to',
    hex: 'u+2261 ISOtech',
    cssIso: '\\2261',
    jsOctal: '\\u2261',
    category: 'mathematical operators'
  },
  {
    html: '&le;',
    symbol: '≤',
    numeric: '&#8804;',
    description: 'less-than or equal to',
    hex: 'u+2264 ISOtech',
    cssIso: '\\2264',
    jsOctal: '\\u2264',
    category: 'mathematical operators'
  },
  {
    html: '&ge;',
    symbol: '≥',
    numeric: '&#8805;',
    description: 'greater-than or equal to',
    hex: 'u+2265 ISOtech',
    cssIso: '\\2265',
    jsOctal: '\\u2265',
    category: 'mathematical operators'
  },
  {
    html: '&sub;',
    symbol: '⊂',
    numeric: '&#8834;',
    description: 'subset of',
    hex: 'u+2282 ISOtech',
    cssIso: '\\2282',
    jsOctal: '\\u2282',
    category: 'mathematical operators'
  },
  {
    html: '&sup;',
    symbol: '⊃',
    numeric: '&#8835;',
    description: 'superset of',
    hex: 'u+2283 ISOtech',
    cssIso: '\\2283',
    jsOctal: '\\u2283',
    category: 'mathematical operators'
  },
  {
    html: '&nsub;',
    symbol: '⊄',
    numeric: '&#8836;',
    description: 'not a subset of',
    hex: 'u+2284 ISOamsn',
    cssIso: '\\2284',
    jsOctal: '\\u2284',
    category: 'mathematical operators'
  },
  {
    html: '&sube;',
    symbol: '⊆',
    numeric: '&#8838;',
    description: 'subset of or equal to',
    hex: 'u+2286 ISOtech',
    cssIso: '\\2286',
    jsOctal: '\\u2286',
    category: 'mathematical operators'
  },
  {
    html: '&supe;',
    symbol: '⊇',
    numeric: '&#8839;',
    description: 'superset of or equal to',
    hex: 'u+2287 ISOtech',
    cssIso: '\\2287',
    jsOctal: '\\u2287',
    category: 'mathematical operators'
  },
  {
    html: '&oplus;',
    symbol: '⊕',
    numeric: '&#8853;',
    description: 'circled plus, a.k.a. direct sum',
    hex: 'u+2295 ISOamsb',
    cssIso: '\\2295',
    jsOctal: '\\u2295',
    category: 'mathematical operators'
  },
  {
    html: '&otimes;',
    symbol: '⊗',
    numeric: '&#8855;',
    description: 'circled times, a.k.a. vector product',
    hex: 'u+2297 ISOamsb',
    cssIso: '\\2297',
    jsOctal: '\\u2297',
    category: 'mathematical operators'
  },
  {
    html: '&perp;',
    symbol: '⊥',
    numeric: '&#8869;',
    description: 'up tack',
    hex: 'u+22A5 ISOtech',
    cssIso: '\\22A5',
    jsOctal: '\\u22a5',
    category: 'mathematical operators'
  },
  {
    html: '&sdot;',
    symbol: '⋅',
    numeric: '&#8901;',
    description: 'dot operator',
    hex: 'u+22C5 ISOamsb',
    cssIso: '\\22C5',
    jsOctal: '\\u22c5',
    category: 'mathematical operators'
  }
];
