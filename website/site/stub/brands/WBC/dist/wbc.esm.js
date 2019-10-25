var SPACING = function SPACING(unit, minor) {
  return (unit * 6 - (minor ? 3 : 0)) / 16 + (unit > 0 ? 'rem' : 0);
};
var COLORS = {
  "tints": {
    "background5": "#FEFEFE",
    "background10": "#FEFEFE",
    "background20": "#FDFDFC",
    "background30": "#FCFBFB",
    "background40": "#FBFAF9",
    "background50": "#FAF9F8",
    "background60": "#F8F8F6",
    "background70": "#F7F7F5",
    "background80": "#F6F5F3",
    "background90": "#F5F4F2",
    "border5": "#FDFDFC",
    "border10": "#FBFBFA",
    "border20": "#F7F6F5",
    "border30": "#F3F2EF",
    "border40": "#EFEDEA",
    "border50": "#EBE9E5",
    "border60": "#E7E4E0",
    "border70": "#E3E0DB",
    "border80": "#DFDBD5",
    "border90": "#DBD7D0",
    "borderDark5": "#F9FAFA",
    "borderDark10": "#F4F4F5",
    "borderDark20": "#E8E9EA",
    "borderDark30": "#DDDEE0",
    "borderDark40": "#D1D3D5",
    "borderDark50": "#C6C9CB",
    "borderDark60": "#BABEC0",
    "borderDark70": "#AFB3B6",
    "borderDark80": "#A3A8AB",
    "borderDark90": "#989DA1",
    "focus5": "#FAF6F9",
    "focus10": "#F5ECF3",
    "focus20": "#ECDAE7",
    "focus30": "#E2C7DA",
    "focus40": "#D9B5CE",
    "focus50": "#CFA2C2",
    "focus60": "#C58FB6",
    "focus70": "#BC7DAA",
    "focus80": "#B26A9D",
    "focus90": "#A95891",
    "heading5": "#F7F4F6",
    "heading10": "#EFE8ED",
    "heading20": "#E0D1DB",
    "heading30": "#D0BAC9",
    "heading40": "#C0A3B7",
    "heading50": "#B18DA5",
    "heading60": "#A17693",
    "heading70": "#915F81",
    "heading80": "#81486F",
    "heading90": "#72315D",
    "hero5": "#F7F4F6",
    "hero10": "#EFE8ED",
    "hero20": "#E0D1DB",
    "hero30": "#D0BAC9",
    "hero40": "#C0A3B7",
    "hero50": "#B18DA5",
    "hero60": "#A17693",
    "hero70": "#915F81",
    "hero80": "#81486F",
    "hero90": "#72315D",
    "light5": "#FFFFFF",
    "light10": "#FEFEFE",
    "light20": "#FEFEFE",
    "light30": "#FDFDFD",
    "light40": "#FDFDFC",
    "light50": "#FCFCFC",
    "light60": "#FBFBFB",
    "light70": "#FBFBFA",
    "light80": "#FAFAF9",
    "light90": "#FAFAF9",
    "muted5": "#F7F7F7",
    "muted10": "#EEEFF0",
    "muted20": "#DDDFE0",
    "muted30": "#CDCFD1",
    "muted40": "#BCBFC1",
    "muted50": "#ABAFB2",
    "muted60": "#9A9FA3",
    "muted70": "#898F93",
    "muted80": "#797F84",
    "muted90": "#686F74",
    "neutral5": "#F5F5F5",
    "neutral10": "#EAEBEC",
    "neutral20": "#D5D7D8",
    "neutral30": "#C0C3C5",
    "neutral40": "#ABAFB2",
    "neutral50": "#969B9F",
    "neutral60": "#81878B",
    "neutral70": "#6C7378",
    "neutral80": "#575F65",
    "neutral90": "#424B51",
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
    "text5": "#F5F5F5",
    "text10": "#EAEBEC",
    "text20": "#D5D7D8",
    "text30": "#C0C3C5",
    "text40": "#ABAFB2",
    "text50": "#969B9F",
    "text60": "#81878B",
    "text70": "#6C7378",
    "text80": "#575F65",
    "text90": "#424B51",
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
  "background": "#F4F3F0",
  "border": "#D7D2CB",
  "borderDark": "#8C9296",
  "focus": "#9F4585",
  "heading": "#621A4B",
  "hero": "#621A4B",
  "light": "#F9F9F8",
  "muted": "#575F65",
  "neutral": "#2D373E",
  "primary": "#D5002B",
  "text": "#2D373E",
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
        "fontFamily": "\"brandFontWBC\"",
        "src": "url(\"../font/7FF5B4E46E46717F5.woff2\") format(\"woff2\"), url(\"../font/7FF5B4E46E46717F5.woff\") format(\"woff\")",
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
    "fontFamily": "\"brandFontWBC\""
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

export default index;
export { COLORS, LAYOUT, PACKS, SPACING, TYPE };
