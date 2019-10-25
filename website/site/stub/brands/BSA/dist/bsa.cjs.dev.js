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
    "background40": "#F9F9F9",
    "background50": "#F8F8F8",
    "background60": "#F6F7F7",
    "background70": "#F5F5F5",
    "background80": "#F3F4F4",
    "background90": "#F2F2F2",
    "border5": "#FDFDFD",
    "border10": "#FBFBFB",
    "border20": "#F6F6F7",
    "border30": "#F2F2F2",
    "border40": "#EDEEEE",
    "border50": "#E9EAEA",
    "border60": "#E5E5E6",
    "border70": "#E0E1E2",
    "border80": "#DCDDDD",
    "border90": "#D7D8D9",
    "borderDark5": "#F9FAFA",
    "borderDark10": "#F4F4F5",
    "borderDark20": "#E9E9EA",
    "borderDark30": "#DEDFE0",
    "borderDark40": "#D3D4D5",
    "borderDark50": "#C8C9CB",
    "borderDark60": "#BCBEC0",
    "borderDark70": "#B1B3B6",
    "borderDark80": "#A6A9AB",
    "borderDark90": "#9B9EA1",
    "focus5": "#FCF8FA",
    "focus10": "#F9F1F5",
    "focus20": "#F3E2EB",
    "focus30": "#EDD4E2",
    "focus40": "#E7C5D8",
    "focus50": "#E1B7CE",
    "focus60": "#DAA9C4",
    "focus70": "#D49ABA",
    "focus80": "#CE8CB1",
    "focus90": "#C87DA7",
    "heading5": "#F2F5F8",
    "heading10": "#E6EAF0",
    "heading20": "#CCD5E2",
    "heading30": "#B3C1D3",
    "heading40": "#99ACC4",
    "heading50": "#8097B6",
    "heading60": "#6682A7",
    "heading70": "#4D6D98",
    "heading80": "#335989",
    "heading90": "#19447B",
    "hero5": "#F2F5F8",
    "hero10": "#E6EAF0",
    "hero20": "#CCD5E2",
    "hero30": "#B3C1D3",
    "hero40": "#99ACC4",
    "hero50": "#8097B6",
    "hero60": "#6682A7",
    "hero70": "#4D6D98",
    "hero80": "#335989",
    "hero90": "#19447B",
    "light5": "#FFFFFF",
    "light10": "#FEFEFE",
    "light20": "#FEFEFE",
    "light30": "#FDFDFD",
    "light40": "#FCFCFC",
    "light50": "#FCFCFC",
    "light60": "#FBFBFB",
    "light70": "#FAFAFA",
    "light80": "#F9F9F9",
    "light90": "#F9F9F9",
    "muted5": "#F8F8F8",
    "muted10": "#F0F1F1",
    "muted20": "#E2E2E3",
    "muted30": "#D3D4D5",
    "muted40": "#C4C6C7",
    "muted50": "#B6B8BA",
    "muted60": "#A7A9AC",
    "muted70": "#989B9E",
    "muted80": "#898D90",
    "muted90": "#7B7E82",
    "neutral5": "#F8F8F8",
    "neutral10": "#F0F1F1",
    "neutral20": "#E2E2E3",
    "neutral30": "#D3D4D5",
    "neutral40": "#C4C6C7",
    "neutral50": "#B6B8BA",
    "neutral60": "#A7A9AC",
    "neutral70": "#989B9E",
    "neutral80": "#898D90",
    "neutral90": "#7B7E82",
    "primary5": "#FDF4F4",
    "primary10": "#FBE8EA",
    "primary20": "#F7D1D5",
    "primary30": "#F3BBBF",
    "primary40": "#EFA4AA",
    "primary50": "#EC8D95",
    "primary60": "#E87680",
    "primary70": "#E45F6B",
    "primary80": "#E04955",
    "primary90": "#DC3240",
    "text5": "#F5F5F5",
    "text10": "#EBEBEB",
    "text20": "#D6D6D6",
    "text30": "#C2C2C2",
    "text40": "#ADADAD",
    "text50": "#999999",
    "text60": "#858585",
    "text70": "#707070",
    "text80": "#5C5C5C",
    "text90": "#474747",
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
  "background": "#F0F1F1",
  "border": "#D3D4D5",
  "borderDark": "#909396",
  "focus": "#C26F9D",
  "heading": "#002F6C",
  "hero": "#002F6C",
  "light": "#F8F8F8",
  "muted": "#6C7074",
  "neutral": "#6C7074",
  "primary": "#D81B2B",
  "text": "#333",
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
        "fontFamily": "\"brandFontBSA\"",
        "src": "url(\"../font/Aller_Lt.woff2\") format(\"woff2\"), url(\"../font/Aller_Lt.woff\") format(\"woff\")",
        "weight": 300,
        "style": "normal"
      }
    }, {
      "@font-face": {
        "fontFamily": "\"brandFontBSA\"",
        "src": "url(\"../font/Aller_Bd.woff2\") format(\"woff2\"), url(\"../font/Aller_Bd.woff\") format(\"woff\")",
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
    "weights": [300, 400],
    "fontFamily": "\"brandFontBSA\""
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
    "color": "#D81B2B",
    "textDecoration": "underline",
    ":hover": {
      "color": "#D81B2B",
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
