'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SPACING = function SPACING(unit, minor) {
  return (unit * 6 - (minor ? 3 : 0)) / 16 + (unit > 0 ? 'rem' : 0);
};
var COLORS = {
  "tints": {
    "primary5": "#FDF2F4",
    "primary10": "#FBE6EA",
    "primary20": "#F7CCD5",
    "primary30": "#F2B3BF",
    "primary40": "#EE99AA",
    "primary50": "#EA8095",
    "primary60": "#E66680",
    "primary70": "#E24D6B",
    "primary80": "#DD3355",
    "primary90": "#D91940",
    "hero5": "#F6F7F7",
    "hero10": "#EDEEEF",
    "hero20": "#DBDDDF",
    "hero30": "#C8CDD0",
    "hero40": "#B6BCC0",
    "hero50": "#A4ABB0",
    "hero60": "#929AA0",
    "hero70": "#808990",
    "hero80": "#6D7981",
    "hero90": "#5B6871",
    "focus5": "#FEF7F8",
    "focus10": "#FCEFF2",
    "focus20": "#FADEE4",
    "focus30": "#F7CED7",
    "focus40": "#F4BEC9",
    "focus50": "#F2AEBC",
    "focus60": "#EF9DAE",
    "focus70": "#EC8DA1",
    "focus80": "#E97D93",
    "focus90": "#E76C86",
    "heading5": "#F2F2F2",
    "heading10": "#E6E6E6",
    "heading20": "#CCCCCC",
    "heading30": "#B3B3B3",
    "heading40": "#999999",
    "heading50": "#808080",
    "heading60": "#666666",
    "heading70": "#4D4D4D",
    "heading80": "#333333",
    "heading90": "#191919",
    "light5": "#FFFFFF",
    "light10": "#FEFFFF",
    "light20": "#FEFEFE",
    "light30": "#FDFEFE",
    "light40": "#FDFDFD",
    "light50": "#FCFDFD",
    "light60": "#FBFCFD",
    "light70": "#FBFCFC",
    "light80": "#FAFBFC",
    "light90": "#FAFBFB",
    "muted5": "#F7F7F8",
    "muted10": "#EFF0F1",
    "muted20": "#DEE1E3",
    "muted30": "#CED2D4",
    "muted40": "#BDC3C6",
    "muted50": "#ADB4B8",
    "muted60": "#9DA4AA",
    "muted70": "#8C959C",
    "muted80": "#7C868D",
    "muted90": "#6B777F",
    "neutral5": "#F4F5F5",
    "neutral10": "#E9EBEB",
    "neutral20": "#D4D6D7",
    "neutral30": "#BEC2C3",
    "neutral40": "#A8ADAF",
    "neutral50": "#93999C",
    "neutral60": "#7D8488",
    "neutral70": "#677074",
    "neutral80": "#515B60",
    "neutral90": "#3C474C",
    "text5": "#F2F2F2",
    "text10": "#E6E6E6",
    "text20": "#CCCCCC",
    "text30": "#B3B3B3",
    "text40": "#999999",
    "text50": "#808080",
    "text60": "#666666",
    "text70": "#4D4D4D",
    "text80": "#333333",
    "text90": "#191919",
    "border5": "#FDFDFD",
    "border10": "#FAFBFC",
    "border20": "#F5F7F8",
    "border30": "#F1F3F5",
    "border40": "#ECEFF1",
    "border50": "#E7ECEE",
    "border60": "#E2E8EA",
    "border70": "#DDE4E7",
    "border80": "#D9E0E3",
    "border90": "#D4DCE0",
    "borderDark5": "#FAFAFA",
    "borderDark10": "#F4F5F5",
    "borderDark20": "#E9EAEB",
    "borderDark30": "#DEE0E1",
    "borderDark40": "#D3D5D7",
    "borderDark50": "#C8CBCD",
    "borderDark60": "#BDC1C2",
    "borderDark70": "#B2B6B8",
    "borderDark80": "#A7ACAE",
    "borderDark90": "#9CA1A4",
    "background5": "#FEFFFF",
    "background10": "#FEFEFE",
    "background20": "#FDFDFD",
    "background30": "#FBFCFC",
    "background40": "#FAFBFB",
    "background50": "#F9FAFB",
    "background60": "#F8F9FA",
    "background70": "#F7F8F9",
    "background80": "#F5F7F8",
    "background90": "#F4F6F7",
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
  "primary": "#D5002B",
  "hero": "#495761",
  "focus": "#E45C78",
  "heading": "#000",
  "light": "#F9FAFB",
  "muted": "#5B6871",
  "neutral": "#263238",
  "text": "#000",
  "border": "#CFD8DC",
  "borderDark": "#91979A",
  "background": "#F3F5F6",
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
    "fontFamily": "\"Times New Roman\", \"Times\", serif"
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
    "color": "#D5002B",
    "textDecoration": "underline",
    ":hover": {
      "color": "#D5002B",
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
