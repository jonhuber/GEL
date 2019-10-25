'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SPACING = function SPACING(unit, minor) {
  return (unit * 6 - (minor ? 3 : 0)) / 16 + (unit > 0 ? 'rem' : 0);
};
var COLORS = {
  "tints": {
    "background5": "#FEFEFE",
    "background10": "#FEFEFE",
    "background20": "#FCFCFC",
    "background30": "#FBFBFB",
    "background40": "#F9F9FA",
    "background50": "#F8F8F9",
    "background60": "#F7F7F7",
    "background70": "#F5F5F6",
    "background80": "#F4F4F5",
    "background90": "#F2F2F3",
    "border5": "#FDFDFD",
    "border10": "#FBFBFB",
    "border20": "#F6F6F7",
    "border30": "#F2F2F3",
    "border40": "#EEEEEF",
    "border50": "#EAEAEC",
    "border60": "#E5E5E8",
    "border70": "#E1E1E4",
    "border80": "#DDDDE0",
    "border90": "#D8D8DC",
    "borderDark5": "#FAFAFA",
    "borderDark10": "#F4F4F5",
    "borderDark20": "#E9E9EB",
    "borderDark30": "#DFDEE0",
    "borderDark40": "#D4D3D6",
    "borderDark50": "#C9C9CC",
    "borderDark60": "#BEBEC2",
    "borderDark70": "#B3B3B8",
    "borderDark80": "#A9A8AD",
    "borderDark90": "#9E9DA3",
    "focus5": "#F9F8FD",
    "focus10": "#F3F2FA",
    "focus20": "#E7E5F5",
    "focus30": "#DBD7F0",
    "focus40": "#CFCAEB",
    "focus50": "#C3BDE6",
    "focus60": "#B6B0E1",
    "focus70": "#AAA3DC",
    "focus80": "#9E95D7",
    "focus90": "#9288D2",
    "heading5": "#F6F6FA",
    "heading10": "#EEEDF4",
    "heading20": "#DDDAE9",
    "heading30": "#CBC8DE",
    "heading40": "#BAB6D3",
    "heading50": "#A9A4C8",
    "heading60": "#9891BD",
    "heading70": "#877FB2",
    "heading80": "#756DA7",
    "heading90": "#645A9C",
    "hero5": "#F6F6FA",
    "hero10": "#EEEDF4",
    "hero20": "#DDDAE9",
    "hero30": "#CBC8DE",
    "hero40": "#BAB6D3",
    "hero50": "#A9A4C8",
    "hero60": "#9891BD",
    "hero70": "#877FB2",
    "hero80": "#756DA7",
    "hero90": "#645A9C",
    "light5": "#FFFFFF",
    "light10": "#FFFFFF",
    "light20": "#FEFEFF",
    "light30": "#FEFEFE",
    "light40": "#FDFDFE",
    "light50": "#FDFDFE",
    "light60": "#FDFDFE",
    "light70": "#FCFCFE",
    "light80": "#FCFCFD",
    "light90": "#FBFBFD",
    "muted5": "#F8F8F8",
    "muted10": "#F1F0F2",
    "muted20": "#E2E2E4",
    "muted30": "#D4D3D7",
    "muted40": "#C5C4CA",
    "muted50": "#B7B6BD",
    "muted60": "#A8A7AF",
    "muted70": "#9A98A2",
    "muted80": "#8B8995",
    "muted90": "#7D7B87",
    "neutral5": "#F7F7F7",
    "neutral10": "#EEEEEF",
    "neutral20": "#DEDDE0",
    "neutral30": "#CDCDD0",
    "neutral40": "#BDBCC0",
    "neutral50": "#ACABB1",
    "neutral60": "#9B9AA1",
    "neutral70": "#8B8991",
    "neutral80": "#7A7981",
    "neutral90": "#6A6872",
    "primary5": "#FDF5F2",
    "primary10": "#FBEBE6",
    "primary20": "#F7D8CC",
    "primary30": "#F3C4B3",
    "primary40": "#EFB199",
    "primary50": "#EB9D80",
    "primary60": "#E78966",
    "primary70": "#E3764D",
    "primary80": "#DF6233",
    "primary90": "#DB4F19",
    "text5": "#F4F2F6",
    "text10": "#E9E6ED",
    "text20": "#D2CCDC",
    "text30": "#BCB3CA",
    "text40": "#A69AB8",
    "text50": "#9081A7",
    "text60": "#796795",
    "text70": "#634E83",
    "text80": "#4D3571",
    "text90": "#361B60",
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
  "background": "#F1F1F2",
  "border": "#D4D4D8",
  "borderDark": "#939299",
  "focus": "#867BCD",
  "heading": "#534891",
  "hero": "#534891",
  "light": "#FBFBFD",
  "muted": "#6E6C7A",
  "neutral": "#595762",
  "primary": "#D73B00",
  "text": "#20024E",
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
        "fontFamily": "\"brandFontBOM\"",
        "src": "url(\"../font/lineto-brown-pro-light.woff2\") format(\"woff2\"), url(\"../font/lineto-brown-pro-light.woff\") format(\"woff\")",
        "weight": 300,
        "style": "normal"
      }
    }, {
      "@font-face": {
        "fontFamily": "\"brandFontBOM\"",
        "src": "url(\"../font/lineto-brown-pro-regular.woff2\") format(\"woff2\"), url(\"../font/lineto-brown-pro-regular.woff\") format(\"woff\")",
        "weight": 400,
        "style": "normal"
      }
    }, {
      "@font-face": {
        "fontFamily": "\"brandFontBOM\"",
        "src": "url(\"../font/lineto-brown-pro-bold.woff2\") format(\"woff2\"), url(\"../font/lineto-brown-pro-bold.woff\") format(\"woff\")",
        "weight": 700,
        "style": "normal"
      }
    }]
  },
  "bodyFont": {
    "weights": [400, 700],
    "fontFamily": "-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
  },
  "brandFont": {
    "weights": [300, 400, 700],
    "fontFamily": "\"brandFontBOM\""
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
    "color": "#D73B00",
    "textDecoration": "underline",
    ":hover": {
      "color": "#D73B00",
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
