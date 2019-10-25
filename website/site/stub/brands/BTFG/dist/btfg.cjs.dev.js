'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SPACING = function SPACING(unit, minor) {
  return (unit * 6 - (minor ? 3 : 0)) / 16 + (unit > 0 ? 'rem' : 0);
};
var COLORS = {
  "tints": {
    "background5": "#FFFFFF",
    "background10": "#FEFEFE",
    "background20": "#FEFEFE",
    "background30": "#FDFDFD",
    "background40": "#FDFDFD",
    "background50": "#FCFCFC",
    "background60": "#FBFBFB",
    "background70": "#FBFBFB",
    "background80": "#FAFAFA",
    "background90": "#FAFAFA",
    "border5": "#FDFDFD",
    "border10": "#FCFCFC",
    "border20": "#F9F9F9",
    "border30": "#F6F6F6",
    "border40": "#F3F3F3",
    "border50": "#F0F0F0",
    "border60": "#ECECEC",
    "border70": "#E9E9E9",
    "border80": "#E6E6E6",
    "border90": "#E3E3E3",
    "borderDark5": "#FAFAFA",
    "borderDark10": "#F4F4F4",
    "borderDark20": "#EAEAEA",
    "borderDark30": "#DFDFDF",
    "borderDark40": "#D4D4D4",
    "borderDark50": "#CACACA",
    "borderDark60": "#BFBFBF",
    "borderDark70": "#B4B4B4",
    "borderDark80": "#A9A9A9",
    "borderDark90": "#9F9F9F",
    "focus5": "#FCF8FB",
    "focus10": "#FAF1F6",
    "focus20": "#F4E3ED",
    "focus30": "#EFD5E4",
    "focus40": "#EAC7DB",
    "focus50": "#E5B9D3",
    "focus60": "#DFABCA",
    "focus70": "#DA9DC1",
    "focus80": "#D58FB8",
    "focus90": "#CF81AF",
    "heading5": "#F4F8FB",
    "heading10": "#E9F1F6",
    "heading20": "#D3E3EE",
    "heading30": "#BED5E5",
    "heading40": "#A8C7DD",
    "heading50": "#92BAD4",
    "heading60": "#7CACCB",
    "heading70": "#669EC3",
    "heading80": "#5190BA",
    "heading90": "#3B82B2",
    "hero5": "#F4F8FB",
    "hero10": "#E9F1F6",
    "hero20": "#D3E3EE",
    "hero30": "#BED5E5",
    "hero40": "#A8C7DD",
    "hero50": "#92BAD4",
    "hero60": "#7CACCB",
    "hero70": "#669EC3",
    "hero80": "#5190BA",
    "hero90": "#3B82B2",
    "light5": "#FFFFFF",
    "light10": "#FFFFFF",
    "light20": "#FEFEFE",
    "light30": "#FEFEFE",
    "light40": "#FEFEFE",
    "light50": "#FEFEFE",
    "light60": "#FDFDFD",
    "light70": "#FDFDFD",
    "light80": "#FDFDFD",
    "light90": "#FCFCFC",
    "muted5": "#F7F7F7",
    "muted10": "#F0F0F0",
    "muted20": "#E0E0E0",
    "muted30": "#D1D1D1",
    "muted40": "#C2C2C2",
    "muted50": "#B3B3B3",
    "muted60": "#A3A3A3",
    "muted70": "#949494",
    "muted80": "#858585",
    "muted90": "#757575",
    "neutral5": "#F7F8FA",
    "neutral10": "#EFF2F5",
    "neutral20": "#E0E5EA",
    "neutral30": "#D0D7E0",
    "neutral40": "#C1CAD6",
    "neutral50": "#B1BDCC",
    "neutral60": "#A1B0C1",
    "neutral70": "#92A3B7",
    "neutral80": "#8295AD",
    "neutral90": "#7388A2",
    "primary5": "#FAF2F7",
    "primary10": "#F5E6EF",
    "primary20": "#ECCCDF",
    "primary30": "#E2B3CE",
    "primary40": "#D899BE",
    "primary50": "#CF80AE",
    "primary60": "#C5669E",
    "primary70": "#BB4D8E",
    "primary80": "#B1337D",
    "primary90": "#A8196D",
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
  "background": "#F9F9F9",
  "border": "#E0E0E0",
  "borderDark": "#949494",
  "focus": "#CA73A6",
  "heading": "#2574A9",
  "hero": "#2574A9",
  "light": "#FCFCFC",
  "muted": "#666666",
  "neutral": "#637b98",
  "primary": "#9E005D",
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
    "": []
  },
  "bodyFont": {
    "weights": [400, 700],
    "fontFamily": "-apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif"
  },
  "brandFont": {
    "weights": [400, 700],
    "fontFamily": "Georgia, \"Times New Roman\", Times, serif"
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
    "color": "#9E005D",
    "textDecoration": "underline",
    ":hover": {
      "color": "#9E005D",
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
