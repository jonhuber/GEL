'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SPACING = function SPACING(unit, minor) {
  return (unit * 6 - (minor ? 3 : 0)) / 16 + (unit > 0 ? 'rem' : 0);
};
var COLORS = {
  "tints": {
    "background5": "#FEFEFE",
    "background10": "#FEFEFD",
    "background20": "#FCFCFC",
    "background30": "#FBFBFA",
    "background40": "#F9F9F9",
    "background50": "#F8F8F7",
    "background60": "#F7F7F5",
    "background70": "#F5F5F4",
    "background80": "#F4F4F2",
    "background90": "#F2F2F1",
    "border5": "#FDFDFD",
    "border10": "#FBFBFA",
    "border20": "#F7F7F6",
    "border30": "#F3F2F1",
    "border40": "#EFEEEC",
    "border50": "#EBEAE8",
    "border60": "#E6E6E3",
    "border70": "#E2E2DE",
    "border80": "#DEDDD9",
    "border90": "#DAD9D5",
    "borderDark5": "#FAFAF9",
    "borderDark10": "#F4F4F3",
    "borderDark20": "#EAE9E7",
    "borderDark30": "#DFDFDB",
    "borderDark40": "#D4D4CF",
    "borderDark50": "#CAC9C3",
    "borderDark60": "#BFBEB6",
    "borderDark70": "#B4B3AA",
    "borderDark80": "#A9A99E",
    "borderDark90": "#9F9E92",
    "focus5": "#FAF9FB",
    "focus10": "#F5F2F7",
    "focus20": "#EAE6EF",
    "focus30": "#E0D9E7",
    "focus40": "#D5CDDF",
    "focus50": "#CBC0D7",
    "focus60": "#C0B3CF",
    "focus70": "#B6A7C7",
    "focus80": "#AB9ABF",
    "focus90": "#A18EB7",
    "heading5": "#F2F6F5",
    "heading10": "#E6EDEB",
    "heading20": "#CCDAD6",
    "heading30": "#B3C8C2",
    "heading40": "#99B6AD",
    "heading50": "#80A499",
    "heading60": "#669185",
    "heading70": "#4D7F70",
    "heading80": "#336D5C",
    "heading90": "#195A47",
    "hero5": "#F8FCF4",
    "hero10": "#F2F9E9",
    "hero20": "#E4F2D2",
    "hero30": "#D7ECBC",
    "hero40": "#C9E5A6",
    "hero50": "#BCDF90",
    "hero60": "#AED879",
    "hero70": "#A1D263",
    "hero80": "#93CB4D",
    "hero90": "#86C536",
    "light5": "#FFFFFF",
    "light10": "#FEFEFE",
    "light20": "#FEFEFD",
    "light30": "#FDFDFD",
    "light40": "#FCFCFC",
    "light50": "#FCFCFB",
    "light60": "#FBFBFA",
    "light70": "#FAFAF9",
    "light80": "#F9F9F9",
    "light90": "#F9F9F8",
    "muted5": "#F8F8F7",
    "muted10": "#F1F1EF",
    "muted20": "#E3E3E0",
    "muted30": "#D6D5D0",
    "muted40": "#C8C7C1",
    "muted50": "#BABAB1",
    "muted60": "#ACACA1",
    "muted70": "#9E9E92",
    "muted80": "#919082",
    "muted90": "#838273",
    "neutral5": "#F8F8F7",
    "neutral10": "#F1F1EF",
    "neutral20": "#E3E3E0",
    "neutral30": "#D6D5D0",
    "neutral40": "#C8C7C1",
    "neutral50": "#BABAB1",
    "neutral60": "#ACACA1",
    "neutral70": "#9E9E92",
    "neutral80": "#919082",
    "neutral90": "#838273",
    "primary5": "#FEF2F2",
    "primary10": "#FCE6E6",
    "primary20": "#F9CCCC",
    "primary30": "#F7B3B3",
    "primary40": "#F49999",
    "primary50": "#F18080",
    "primary60": "#EE6666",
    "primary70": "#EB4D4D",
    "primary80": "#E93333",
    "primary90": "#E61919",
    "text5": "#F2F6F5",
    "text10": "#E6EDEB",
    "text20": "#CCDAD6",
    "text30": "#B3C8C2",
    "text40": "#99B6AD",
    "text50": "#80A499",
    "text60": "#669185",
    "text70": "#4D7F70",
    "text80": "#336D5C",
    "text90": "#195A47",
    "success5": "#F2F9F2",
    "success10": "#E6F2E6",
    "success20": "#CCE6CC",
    "success30": "#B3D9B3",
    "success40": "#99CC99",
    "success50": "#80C080",
    "success60": "#66B366",
    "success70": "#4DA64D",
    "success80": "#339933",
    "success90": "#198D19",
    "info5": "#F2F8FC",
    "info10": "#E6F1F9",
    "info20": "#CCE3F3",
    "info30": "#B3D5ED",
    "info40": "#99C7E7",
    "info50": "#80BAE2",
    "info60": "#66ACDC",
    "info70": "#4D9ED6",
    "info80": "#3390D0",
    "info90": "#1982CA",
    "warning5": "#FCF5F2",
    "warning10": "#F9EBE6",
    "warning20": "#F3D8CC",
    "warning30": "#EEC4B3",
    "warning40": "#E8B199",
    "warning50": "#E29D80",
    "warning60": "#DC8966",
    "warning70": "#D6764D",
    "warning80": "#D16233",
    "warning90": "#CB4F19",
    "danger5": "#FCF2F2",
    "danger10": "#F9E6E6",
    "danger20": "#F3CCCC",
    "danger30": "#EDB3B3",
    "danger40": "#E79999",
    "danger50": "#E28080",
    "danger60": "#DC6666",
    "danger70": "#D64D4D",
    "danger80": "#D03333",
    "danger90": "#CA1919",
    "system5": "#FFFFF2",
    "system10": "#FFFFE6",
    "system20": "#FFFFCC",
    "system30": "#FFFFB3",
    "system40": "#FFFF99",
    "system50": "#FFFF80",
    "system60": "#FFFF66",
    "system70": "#FFFF4D",
    "system80": "#FFFF33",
    "system90": "#FFFF19"
  },
  "background": "#F1F1EF",
  "border": "#D6D5D0",
  "borderDark": "#949386",
  "focus": "#9681AF",
  "heading": "#004833",
  "hero": "#78BE20",
  "light": "#F8F8F7",
  "muted": "#757463",
  "neutral": "#757463",
  "primary": "#E30000",
  "text": "#004833",
  "success": "#008000",
  "info": "#0074C4",
  "warning": "#C53B00",
  "danger": "#C40000",
  "system": "#ff0"
};
var LAYOUT = {
  "breakpoints": {
    "sm": 576,
    "md": 768,
    "lg": 992,
    "xl": 1200
  }
};
var TYPE = {
  "files": {
    "": [{
      "@font-face": {
        "fontFamily": "\"brandFontSTG\"",
        "src": "url(\"../font/dragonbold-bold-webfont.woff2\") format(\"woff2\"), url(\"../font/dragonbold-bold-webfont.woff\") format(\"woff\")",
        "weight": 400,
        "style": "normal"
      }
    }]
  },
  "bodyFont": {
    "weights": [400, 700],
    "fontFamily": "-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
  },
  "brandFont": {
    "weights": [400],
    "fontFamily": "\"brandFontSTG\""
  }
};
var PACKS = {
  "headline": {
    "1": {
      "fontWeight": 700,
      "fontSize": "3.375rem",
      "lineHeight": 1.2,
      "fontFamily": "-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "2": {
      "fontWeight": 700,
      "fontSize": "3rem",
      "lineHeight": 1.2,
      "fontFamily": "-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "3": {
      "fontWeight": 700,
      "fontSize": "2.625rem",
      "lineHeight": 1.2,
      "fontFamily": "-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "4": {
      "fontWeight": 700,
      "fontSize": "2.25rem",
      "lineHeight": 1.2,
      "fontFamily": "-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "5": {
      "fontWeight": 700,
      "fontSize": "1.875rem",
      "lineHeight": 1.2,
      "fontFamily": "-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "6": {
      "fontWeight": 700,
      "fontSize": "1.5rem",
      "lineHeight": 1.2,
      "fontFamily": "-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "7": {
      "fontWeight": 700,
      "fontSize": "1.125rem",
      "lineHeight": 1.2,
      "fontFamily": "-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "8": {
      "fontWeight": 700,
      "fontSize": "1rem",
      "lineHeight": 1.2,
      "fontFamily": "-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    },
    "9": {
      "fontWeight": 700,
      "fontSize": "0.875rem",
      "lineHeight": 1.2,
      "fontFamily": "-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
    }
  },
  "lead": {
    "marginBottom": "1.3125rem",
    "fontSize": ["1rem", "1.125rem"],
    "fontWeight": 300,
    "lineHeight": 1.4
  },
  "link": {
    "color": "#E30000",
    "textDecoration": "underline",
    ":hover": {
      "color": "#E30000",
      "textDecoration": "underline"
    }
  }
};
var index = {
  SPACING: SPACING,
  COLORS: COLORS,
  LAYOUT: LAYOUT,
  TYPE: TYPE,
  PACKS: PACKS
};

exports.COLORS = COLORS;
exports.LAYOUT = LAYOUT;
exports.PACKS = PACKS;
exports.SPACING = SPACING;
exports.TYPE = TYPE;
exports.default = index;
