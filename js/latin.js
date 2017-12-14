let latin = [
  {
    html: '&nbsp;',
    symbol: ' ',
    numeric: '&#160;',
    description: 'no-break space',
    hex: '%A0',
    cssIso: '\\00a0',
    jsOctal: '\\240',
    category: 'latin'
  },
  {
    html: '&iexcl;',
    symbol: '¡',
    numeric: '&#161;',
    description: 'inverted exclamation mark',
    hex: '%A1',
    cssIso: '\\00a1',
    jsOctal: '\\241',
    category: 'latin'
  },
  {
    html: '&cent;',
    symbol: '¢',
    numeric: '&#162;',
    description: 'cent sign',
    hex: '%A2',
    cssIso: '\\00a2',
    jsOctal: '\\242',
    category: 'latin'
  },
  {
    html: '&pound;',
    symbol: '£',
    numeric: '&#163;',
    description: 'pound sterling sign',
    hex: '%A3',
    cssIso: '\\00a3',
    jsOctal: '\\243',
    category: 'latin'
  },
  {
    html: '&curren;',
    symbol: '¤',
    numeric: '&#164;',
    description: 'general currency sign',
    hex: '%A4',
    cssIso: '\\00a4',
    jsOctal: '\\244',
    category: 'latin'
  },
  {
    html: '&yen;',
    symbol: '¥',
    numeric: '&#165;',
    description: 'yen sign',
    hex: '%A5',
    cssIso: '\\00a5',
    jsOctal: '\\245',
    category: 'latin'
  },
  {
    html: '&#x20B9;',
    symbol: '₹',
    numeric: '&#x20B9;',
    description: 'Indian Rupee (INR) sign',
    hex: 'U+20B9',
    cssIso: '\\20B9',
    jsOctal: '\\u20B9',
    category: 'latin'
  },
  {
    html: '&brvbar;',
    symbol: '¦',
    numeric: '&#166;',
    description: 'broken (vertical) bar',
    hex: '%A6',
    cssIso: '\\00a6',
    jsOctal: '\\246',
    category: 'latin'
  },
  {
    html: '&sect;',
    symbol: '§',
    numeric: '&#167;',
    description: 'section sign',
    hex: '%A7',
    cssIso: '\\00a7',
    jsOctal: '\\247',
    category: 'latin'
  },
  {
    html: '&uml;',
    symbol: '¨',
    numeric: '&#168;',
    description: 'umlaut (dieresis)',
    hex: '%A8',
    cssIso: '\\00a8',
    jsOctal: '\\250',
    category: 'latin'
  },
  {
    html: '&copy;',
    symbol: '©',
    numeric: '&#169;',
    description: 'copyright sign',
    hex: '%A9',
    cssIso: '\\00a9',
    jsOctal: '\\251',
    category: 'latin'
  },
  {
    html: '&ordf;',
    symbol: 'ª',
    numeric: '&#170;',
    description: 'ordinal indicator, feminine',
    hex: '%AA',
    cssIso: '\\00aa',
    jsOctal: '\\252',
    category: 'latin'
  },
  {
    html: '&laquo;',
    symbol: '«',
    numeric: '&#171;',
    description: 'angle quotation mark, left',
    hex: '%AB',
    cssIso: '\\00ab',
    jsOctal: '\\253',
    category: 'latin'
  },
  {
    html: '&not;',
    symbol: '¬',
    numeric: '&#172;',
    description: 'not sign',
    hex: '%AC',
    cssIso: '\\00ac',
    jsOctal: '\\254',
    category: 'latin'
  },
  {
    html: '&shy;',
    symbol: '',
    numeric: '&#173;',
    description: 'soft hyphen',
    hex: '%AD',
    cssIso: '\\00ad',
    jsOctal: '\\255',
    category: 'latin'
  },
  {
    html: '&reg;',
    symbol: '®',
    numeric: '&#174;',
    description: 'registered sign',
    hex: '%AE',
    cssIso: '\\00ae',
    jsOctal: '\\256',
    category: 'latin'
  },
  {
    html: '&macr;',
    symbol: '¯',
    numeric: '&#175;',
    description: 'macron',
    hex: '%AF',
    cssIso: '\\00af',
    jsOctal: '\\257',
    category: 'latin'
  },
  {
    html: '&deg;',
    symbol: '°',
    numeric: '&#176;',
    description: 'degree sign',
    hex: '%B0',
    cssIso: '\\00b0',
    jsOctal: '\\260',
    category: 'latin'
  },
  {
    html: '&plusmn;',
    symbol: '±',
    numeric: '&#177;',
    description: 'plus-or-minus sign',
    hex: '%B1',
    cssIso: '\\00b1',
    jsOctal: '\\261',
    category: 'latin'
  },
  {
    html: '&sup2;',
    symbol: '²',
    numeric: '&#178;',
    description: 'superscript two',
    hex: '%B2',
    cssIso: '\\00b2',
    jsOctal: '\\262',
    category: 'latin'
  },
  {
    html: '&sup3;',
    symbol: '³',
    numeric: '&#179;',
    description: 'superscript three',
    hex: '%B3',
    cssIso: '\\00b3',
    jsOctal: '\\263',
    category: 'latin'
  },
  {
    html: '&acute;',
    symbol: '´',
    numeric: '&#180;',
    description: 'acute accent',
    hex: '%B4',
    cssIso: '\\00b4',
    jsOctal: '\\264',
    category: 'latin'
  },
  {
    html: '&micro;',
    symbol: 'µ',
    numeric: '&#181;',
    description: 'micro sign',
    hex: '%B5',
    cssIso: '\\00b5',
    jsOctal: '\\265',
    category: 'latin'
  },
  {
    html: '&para;',
    symbol: '¶',
    numeric: '&#182;',
    description: 'pilcrow (paragraph sign)',
    hex: '%B6',
    cssIso: '\\00b6',
    jsOctal: '\\266',
    category: 'latin'
  },
  {
    html: '&middot;',
    symbol: '·',
    numeric: '&#183;',
    description: 'middle dot',
    hex: '%B7',
    cssIso: '\\00b7',
    jsOctal: '\\267',
    category: 'latin'
  },
  {
    html: '&cedil;',
    symbol: '¸',
    numeric: '&#184;',
    description: 'cedilla',
    hex: '%B8',
    cssIso: '\\00b8',
    jsOctal: '\\270',
    category: 'latin'
  },
  {
    html: '&sup1;',
    symbol: '¹',
    numeric: '&#185;',
    description: 'superscript one',
    hex: '%B9',
    cssIso: '\\00b9',
    jsOctal: '\\271',
    category: 'latin'
  },
  {
    html: '&ordm;',
    symbol: 'º',
    numeric: '&#186;',
    description: 'ordinal indicator, masculine',
    hex: '%BA',
    cssIso: '\\00ba',
    jsOctal: '\\272',
    category: 'latin'
  },
  {
    html: '&raquo;',
    symbol: '»',
    numeric: '&#187;',
    description: 'angle quotation mark, right',
    hex: '%BB',
    cssIso: '\\00bb',
    jsOctal: '\\273',
    category: 'latin'
  },
  {
    html: '&frac14;',
    symbol: '¼',
    numeric: '&#188;',
    description: 'fraction one-quarter',
    hex: '%BC',
    cssIso: '\\00bc',
    jsOctal: '\\274',
    category: 'latin'
  },
  {
    html: '&frac12;',
    symbol: '½',
    numeric: '&#189;',
    description: 'fraction one-half',
    hex: '%BD',
    cssIso: '\\00bd',
    jsOctal: '\\275',
    category: 'latin'
  },
  {
    html: '&frac34;',
    symbol: '¾',
    numeric: '&#190;',
    description: 'fraction three-quarters',
    hex: '%BE',
    cssIso: '\\00be',
    jsOctal: '\\276',
    category: 'latin'
  },
  {
    html: '&iquest;',
    symbol: '¿',
    numeric: '&#191;',
    description: 'inverted question mark',
    hex: '%BF',
    cssIso: '\\00bf',
    jsOctal: '\\277',
    category: 'latin'
  },
  {
    html: '&Agrave;',
    symbol: 'À',
    numeric: '&#192;',
    description: 'capital A, grave accent',
    hex: '%C0',
    cssIso: '\\00c0',
    jsOctal: '\\300',
    category: 'latin'
  },
  {
    html: '&Aacute;',
    symbol: 'Á',
    numeric: '&#193;',
    description: 'capital A, acute accent',
    hex: '%C1',
    cssIso: '\\00c1',
    jsOctal: '\\301',
    category: 'latin'
  },
  {
    html: '&Acirc;',
    symbol: 'Â',
    numeric: '&#194;',
    description: 'capital A, circumflex accent',
    hex: '%C2',
    cssIso: '\\00c2',
    jsOctal: '\\302',
    category: 'latin'
  },
  {
    html: '&Atilde;',
    symbol: 'Ã',
    numeric: '&#195;',
    description: 'capital A, tilde',
    hex: '%C3',
    cssIso: '\\00c3',
    jsOctal: '\\303',
    category: 'latin'
  },
  {
    html: '&Auml;',
    symbol: 'Ä',
    numeric: '&#196;',
    description: 'capital A, dieresis or umlaut mark',
    hex: '%C4',
    cssIso: '\\00c4',
    jsOctal: '\\304',
    category: 'latin'
  },
  {
    html: '&Aring;',
    symbol: 'Å',
    numeric: '&#197;',
    description: 'capital A, ring',
    hex: '%C5',
    cssIso: '\\00c5',
    jsOctal: '\\305',
    category: 'latin'
  },
  {
    html: '&AElig;',
    symbol: 'Æ',
    numeric: '&#198;',
    description: 'capital AE diphthong (ligature)',
    hex: '%C6',
    cssIso: '\\00c6',
    jsOctal: '\\306',
    category: 'latin'
  },
  {
    html: '&Ccedil;',
    symbol: 'Ç',
    numeric: '&#199;',
    description: 'capital C, cedilla',
    hex: '%C7',
    cssIso: '\\00c7',
    jsOctal: '\\307',
    category: 'latin'
  },
  {
    html: '&Egrave;',
    symbol: 'È',
    numeric: '&#200;',
    description: 'capital E, grave accent',
    hex: '%C8',
    cssIso: '\\00c8',
    jsOctal: '\\310',
    category: 'latin'
  },
  {
    html: '&Eacute;',
    symbol: 'É',
    numeric: '&#201;',
    description: 'capital E, acute accent',
    hex: '%C9',
    cssIso: '\\00c9',
    jsOctal: '\\311',
    category: 'latin'
  },
  {
    html: '&Ecirc;',
    symbol: 'Ê',
    numeric: '&#202;',
    description: 'capital E, circumflex accent',
    hex: '%CA',
    cssIso: '\\00ca',
    jsOctal: '\\312',
    category: 'latin'
  },
  {
    html: '&Euml;',
    symbol: 'Ë',
    numeric: '&#203;',
    description: 'capital E, dieresis or umlaut mark',
    hex: '%CB',
    cssIso: '\\00cb',
    jsOctal: '\\313',
    category: 'latin'
  },
  {
    html: '&Igrave;',
    symbol: 'Ì',
    numeric: '&#204;',
    description: 'capital I, grave accent',
    hex: '%CC',
    cssIso: '\\00cc',
    jsOctal: '\\314',
    category: 'latin'
  },
  {
    html: '&Iacute;',
    symbol: 'Í',
    numeric: '&#205;',
    description: 'capital I, acute accent',
    hex: '%CD',
    cssIso: '\\00cd',
    jsOctal: '\\315',
    category: 'latin'
  },
  {
    html: '&Icirc;',
    symbol: 'Î',
    numeric: '&#206;',
    description: 'capital I, circumflex accent',
    hex: '%CE',
    cssIso: '\\00ce',
    jsOctal: '\\316',
    category: 'latin'
  },
  {
    html: '&Iuml;',
    symbol: 'Ï',
    numeric: '&#207;',
    description: 'capital I, dieresis or umlaut mark',
    hex: '%CF',
    cssIso: '\\00cf',
    jsOctal: '\\317',
    category: 'latin'
  },
  {
    html: '&ETH;',
    symbol: 'Ð',
    numeric: '&#208;',
    description: 'capital Eth, Icelandic',
    hex: '%D0',
    cssIso: '\\00d0',
    jsOctal: '\\320',
    category: 'latin'
  },
  {
    html: '&Ntilde;',
    symbol: 'Ñ',
    numeric: '&#209;',
    description: 'capital N, tilde',
    hex: '%D1',
    cssIso: '\\00d1',
    jsOctal: '\\321',
    category: 'latin'
  },
  {
    html: '&Ograve;',
    symbol: 'Ò',
    numeric: '&#210;',
    description: 'capital O, grave accent',
    hex: '%D2',
    cssIso: '\\00d2',
    jsOctal: '\\322',
    category: 'latin'
  },
  {
    html: '&Oacute;',
    symbol: 'Ó',
    numeric: '&#211;',
    description: 'capital O, acute accent',
    hex: '%D3',
    cssIso: '\\00d3',
    jsOctal: '\\323',
    category: 'latin'
  },
  {
    html: '&Ocirc;',
    symbol: 'Ô',
    numeric: '&#212;',
    description: 'capital O, circumflex accent',
    hex: '%D4',
    cssIso: '\\00d4',
    jsOctal: '\\324',
    category: 'latin'
  },
  {
    html: '&Otilde;',
    symbol: 'Õ',
    numeric: '&#213;',
    description: 'capital O, tilde',
    hex: '%D5',
    cssIso: '\\00d5',
    jsOctal: '\\325',
    category: 'latin'
  },
  {
    html: '&Ouml;',
    symbol: 'Ö',
    numeric: '&#214;',
    description: 'capital O, dieresis or umlaut mark',
    hex: '%D6',
    cssIso: '\\00d6',
    jsOctal: '\\326',
    category: 'latin'
  },
  {
    html: '&times;',
    symbol: '×',
    numeric: '&#215;',
    description: 'multiply sign',
    hex: '%D7',
    cssIso: '\\00d7',
    jsOctal: '\\327',
    category: 'latin'
  },
  {
    html: '&Oslash;',
    symbol: 'Ø',
    numeric: '&#216;',
    description: 'capital O, slash',
    hex: '%D8',
    cssIso: '\\00d8',
    jsOctal: '\\330',
    category: 'latin'
  },
  {
    html: '&Ugrave;',
    symbol: 'Ù',
    numeric: '&#217;',
    description: 'capital U, grave accent',
    hex: '%D9',
    cssIso: '\\00d9',
    jsOctal: '\\331',
    category: 'latin'
  },
  {
    html: '&Uacute;',
    symbol: 'Ú',
    numeric: '&#218;',
    description: 'capital U, acute accent',
    hex: '%DA',
    cssIso: '\\00da',
    jsOctal: '\\332',
    category: 'latin'
  },
  {
    html: '&Ucirc;',
    symbol: 'Û',
    numeric: '&#219;',
    description: 'capital U, circumflex accent',
    hex: '%DB',
    cssIso: '\\00db',
    jsOctal: '\\333',
    category: 'latin'
  },
  {
    html: '&Uuml;',
    symbol: 'Ü',
    numeric: '&#220;',
    description: 'capital U, dieresis or umlaut mark',
    hex: '%DC',
    cssIso: '\\00dc',
    jsOctal: '\\334',
    category: 'latin'
  },
  {
    html: '&Yacute;',
    symbol: 'Ý',
    numeric: '&#221;',
    description: 'capital Y, acute accent',
    hex: '%DD',
    cssIso: '\\00dd',
    jsOctal: '\\335',
    category: 'latin'
  },
  {
    html: '&THORN;',
    symbol: 'Þ',
    numeric: '&#222;',
    description: 'capital THORN, Icelandic',
    hex: '%DE',
    cssIso: '\\00de',
    jsOctal: '\\336',
    category: 'latin'
  },
  {
    html: '&szlig;',
    symbol: 'ß',
    numeric: '&#223;',
    description: 'small sharp s, German (sz ligature)',
    hex: '%DF',
    cssIso: '\\00df',
    jsOctal: '\\337',
    category: 'latin'
  },
  {
    html: '&agrave;',
    symbol: 'à',
    numeric: '&#224;',
    description: 'small a, grave accent',
    hex: '%E0',
    cssIso: '\\00e0',
    jsOctal: '\\340',
    category: 'latin'
  },
  {
    html: '&aacute;',
    symbol: 'á',
    numeric: '&#225;',
    description: 'small a, acute accent',
    hex: '%E1',
    cssIso: '\\00e1',
    jsOctal: '\\341',
    category: 'latin'
  },
  {
    html: '&acirc;',
    symbol: 'â',
    numeric: '&#226;',
    description: 'small a, circumflex accent',
    hex: '%E2',
    cssIso: '\\00e2',
    jsOctal: '\\342',
    category: 'latin'
  },
  {
    html: '&atilde;',
    symbol: 'ã',
    numeric: '&#227;',
    description: 'small a, tilde',
    hex: '%E3',
    cssIso: '\\00e3',
    jsOctal: '\\343',
    category: 'latin'
  },
  {
    html: '&auml;',
    symbol: 'ä',
    numeric: '&#228;',
    description: 'small a, dieresis or umlaut mark',
    hex: '%E4',
    cssIso: '\\00e4',
    jsOctal: '\\344',
    category: 'latin'
  },
  {
    html: '&aring;',
    symbol: 'å',
    numeric: '&#229;',
    description: 'small a, ring',
    hex: '%E5',
    cssIso: '\\00e5',
    jsOctal: '\\345',
    category: 'latin'
  },
  {
    html: '&aelig;',
    symbol: 'æ',
    numeric: '&#230;',
    description: 'small ae diphthong (ligature)',
    hex: '%E6',
    cssIso: '\\00e6',
    jsOctal: '\\346',
    category: 'latin'
  },
  {
    html: '&ccedil;',
    symbol: 'ç',
    numeric: '&#231;',
    description: 'small c, cedilla',
    hex: '%E7',
    cssIso: '\\00e7',
    jsOctal: '\\347',
    category: 'latin'
  },
  {
    html: '&egrave;',
    symbol: 'è',
    numeric: '&#232;',
    description: 'small e, grave accent',
    hex: '%E8',
    cssIso: '\\00e8',
    jsOctal: '\\350',
    category: 'latin'
  },
  {
    html: '&eacute;',
    symbol: 'é',
    numeric: '&#233;',
    description: 'small e, acute accent',
    hex: '%E9',
    cssIso: '\\00e9',
    jsOctal: '\\351',
    category: 'latin'
  },
  {
    html: '&ecirc;',
    symbol: 'ê',
    numeric: '&#234;',
    description: 'small e, circumflex accent',
    hex: '%EA',
    cssIso: '\\00ea',
    jsOctal: '\\352',
    category: 'latin'
  },
  {
    html: '&euml;',
    symbol: 'ë',
    numeric: '&#235;',
    description: 'small e, dieresis or umlaut mark',
    hex: '%EB',
    cssIso: '\\00eb',
    jsOctal: '\\353',
    category: 'latin'
  },
  {
    html: '&igrave;',
    symbol: 'ì',
    numeric: '&#236;',
    description: 'small i, grave accent',
    hex: '%EC',
    cssIso: '\\00ec',
    jsOctal: '\\354',
    category: 'latin'
  },
  {
    html: '&iacute;',
    symbol: 'í',
    numeric: '&#237;',
    description: 'small i, acute accent',
    hex: '%ED',
    cssIso: '\\00ed',
    jsOctal: '\\355',
    category: 'latin'
  },
  {
    html: '&icirc;',
    symbol: 'î',
    numeric: '&#238;',
    description: 'small i, circumflex accent',
    hex: '%EE',
    cssIso: '\\00ee',
    jsOctal: '\\356',
    category: 'latin'
  },
  {
    html: '&iuml;',
    symbol: 'ï',
    numeric: '&#239;',
    description: 'small i, dieresis or umlaut mark',
    hex: '%EF',
    cssIso: '\\00ef',
    jsOctal: '\\357',
    category: 'latin'
  },
  {
    html: '&eth;',
    symbol: 'ð',
    numeric: '&#240;',
    description: 'small eth, Icelandic',
    hex: '%F0',
    cssIso: '\\00f0',
    jsOctal: '\\360',
    category: 'latin'
  },
  {
    html: '&ntilde;',
    symbol: 'ñ',
    numeric: '&#241;',
    description: 'small n, tilde',
    hex: '%F1',
    cssIso: '\\00f1',
    jsOctal: '\\361',
    category: 'latin'
  },
  {
    html: '&ograve;',
    symbol: 'ò',
    numeric: '&#242;',
    description: 'small o, grave accent',
    hex: '%F2',
    cssIso: '\\00f2',
    jsOctal: '\\362',
    category: 'latin'
  },
  {
    html: '&oacute;',
    symbol: 'ó',
    numeric: '&#243;',
    description: 'small o, acute accent',
    hex: '%F3',
    cssIso: '\\00f3',
    jsOctal: '\\363',
    category: 'latin'
  },
  {
    html: '&ocirc;',
    symbol: 'ô',
    numeric: '&#244;',
    description: 'small o, circumflex accent',
    hex: '%F4',
    cssIso: '\\00f4',
    jsOctal: '\\364',
    category: 'latin'
  },
  {
    html: '&otilde;',
    symbol: 'õ',
    numeric: '&#245;',
    description: 'small o, tilde',
    hex: '%F5',
    cssIso: '\\00f5',
    jsOctal: '\\365',
    category: 'latin'
  },
  {
    html: '&ouml;',
    symbol: 'ö',
    numeric: '&#246;',
    description: 'small o, dieresis or umlaut mark',
    hex: '%F6',
    cssIso: '\\00f6',
    jsOctal: '\\366',
    category: 'latin'
  },
  {
    html: '&divide;',
    symbol: '÷',
    numeric: '&#247;',
    description: 'divide sign',
    hex: '%F7',
    cssIso: '\\00f7',
    jsOctal: '\\367',
    category: 'latin'
  },
  {
    html: '&oslash;',
    symbol: 'ø',
    numeric: '&#248;',
    description: 'small o, slash',
    hex: '%F8',
    cssIso: '\\00f8',
    jsOctal: '\\370',
    category: 'latin'
  },
  {
    html: '&ugrave;',
    symbol: 'ù',
    numeric: '&#249;',
    description: 'small u, grave accent',
    hex: '%F9',
    cssIso: '\\00f9',
    jsOctal: '\\371',
    category: 'latin'
  },
  {
    html: '&uacute;',
    symbol: 'ú',
    numeric: '&#250;',
    description: 'small u, acute accent',
    hex: '%FA',
    cssIso: '\\00fa',
    jsOctal: '\\372',
    category: 'latin'
  },
  {
    html: '&ucirc;',
    symbol: 'û',
    numeric: '&#251;',
    description: 'small u, circumflex accent',
    hex: '%FB',
    cssIso: '\\00fb',
    jsOctal: '\\373',
    category: 'latin'
  },
  {
    html: '&uuml;',
    symbol: 'ü',
    numeric: '&#252;',
    description: 'small u, dieresis or umlaut mark',
    hex: '%FC',
    cssIso: '\\00fc',
    jsOctal: '\\374',
    category: 'latin'
  },
  {
    html: '&yacute;',
    symbol: 'ý',
    numeric: '&#253;',
    description: 'small y, acute accent',
    hex: '%FD',
    cssIso: '\\00fd',
    jsOctal: '\\375',
    category: 'latin'
  },
  {
    html: '&thorn;',
    symbol: 'þ',
    numeric: '&#254;',
    description: 'small thorn, Icelandic',
    hex: '%FE',
    cssIso: '\\00fe',
    jsOctal: '\\376',
    category: 'latin'
  },
  {
    html: '&yuml;',
    symbol: 'ÿ',
    numeric: '&#255;',
    description: 'small y, dieresis or umlaut mark',
    hex: '%FF',
    cssIso: '\\00ff',
    jsOctal: '\\377',
    category: 'latin'
  }
];
