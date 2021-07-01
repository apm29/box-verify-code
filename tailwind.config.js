const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["src/**/*.vue"],
  // prefix: "tw-",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // Build your palette here
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      gray: colors.gray,
      pink: colors.pink,
      purple: colors.purple,
      indigo: colors.indigo,
      yellow: colors.yellow,
      black: colors.black,
      white: colors.white,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      amber: colors.amber,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightBlue: colors.sky,
      sky: colors.sky,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
    },
  },
  variants: {
    extend: {
      accessibility: ["responsive", "focus-within", "focus"],
      alignContent: ["responsive"],
      alignItems: ["responsive"],
      alignSelf: ["responsive"],
      animation: ["responsive"],
      appearance: ["responsive"],
      backgroundAttachment: ["responsive"],
      backgroundClip: ["responsive"],
      backgroundColor: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
        "disabled",
      ],
      backgroundImage: ["responsive"],
      backgroundOpacity: [
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
        "disabled",
      ],
      backgroundPosition: ["responsive"],
      backgroundRepeat: ["responsive"],
      backgroundSize: ["responsive"],
      borderCollapse: ["responsive"],
      borderColor: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
        "disabled",
      ],
      borderOpacity: [
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
        "disabled",
      ],
      borderRadius: ["responsive"],
      borderStyle: ["responsive"],
      borderWidth: ["responsive"],
      boxShadow: [
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "focus",
        "disabled",
      ],
      boxSizing: ["responsive"],
      clear: ["responsive"],
      container: ["responsive"],
      cursor: ["responsive"],
      display: ["responsive"],
      divideColor: ["responsive", "dark"],
      divideOpacity: ["responsive"],
      divideStyle: ["responsive"],
      divideWidth: ["responsive"],
      fill: ["responsive"],
      flex: ["responsive"],
      flexDirection: ["responsive"],
      flexGrow: ["responsive"],
      flexShrink: ["responsive"],
      flexWrap: ["responsive"],
      float: ["responsive"],
      fontFamily: ["responsive"],
      fontSize: ["responsive"],
      fontSmoothing: ["responsive"],
      fontStyle: ["responsive"],
      fontVariantNumeric: ["responsive"],
      fontWeight: ["responsive"],
      gap: ["responsive"],
      gradientColorStops: ["responsive", "dark", "hover", "disabled", "focus"],
      gridAutoColumns: ["responsive"],
      gridAutoFlow: ["responsive"],
      gridAutoRows: ["responsive"],
      gridColumn: ["responsive"],
      gridColumnEnd: ["responsive"],
      gridColumnStart: ["responsive"],
      gridRow: ["responsive"],
      gridRowEnd: ["responsive"],
      gridRowStart: ["responsive"],
      gridTemplateColumns: ["responsive"],
      gridTemplateRows: ["responsive"],
      height: ["responsive"],
      inset: ["responsive"],
      justifyContent: ["responsive"],
      justifyItems: ["responsive"],
      justifySelf: ["responsive"],
      letterSpacing: ["responsive"],
      lineHeight: ["responsive"],
      listStylePosition: ["responsive"],
      listStyleType: ["responsive"],
      margin: ["responsive"],
      maxHeight: ["responsive"],
      maxWidth: ["responsive"],
      minHeight: ["responsive"],
      minWidth: ["responsive"],
      objectFit: ["responsive"],
      objectPosition: ["responsive"],
      opacity: [
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "disabled",
        "focus",
      ],
      order: ["responsive"],
      outline: ["responsive", "focus-within", "disabled", "focus"],
      overflow: ["responsive"],
      overscrollBehavior: ["responsive"],
      padding: ["responsive"],
      placeContent: ["responsive"],
      placeItems: ["responsive"],
      placeSelf: ["responsive"],
      placeholderColor: ["responsive", "dark", "disabled", "focus"],
      placeholderOpacity: ["responsive", "disabled", "focus"],
      pointerEvents: ["responsive"],
      position: ["responsive"],
      resize: ["responsive"],
      ringColor: ["responsive", "dark", "focus-within", "disabled", "focus"],
      ringOffsetColor: [
        "responsive",
        "dark",
        "focus-within",
        "disabled",
        "focus",
      ],
      ringOffsetWidth: ["responsive", "focus-within", "disabled", "focus"],
      ringOpacity: ["responsive", "focus-within", "disabled", "focus"],
      ringWidth: ["responsive", "focus-within", "disabled", "focus"],
      rotate: ["responsive", "hover", "disabled", "focus"],
      scale: ["responsive", "hover", "disabled", "focus"],
      skew: ["responsive", "hover", "disabled", "focus"],
      space: ["responsive"],
      stroke: ["responsive"],
      strokeWidth: ["responsive"],
      tableLayout: ["responsive"],
      textAlign: ["responsive"],
      textColor: [
        "responsive",
        "dark",
        "group-hover",
        "focus-within",
        "hover",
        "disabled",
        "focus",
      ],
      textDecoration: [
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "disabled",
        "focus",
      ],
      textOpacity: [
        "responsive",
        "group-hover",
        "focus-within",
        "hover",
        "disabled",
        "focus",
      ],
      textOverflow: ["responsive"],
      textTransform: ["responsive"],
      transform: ["responsive"],
      transformOrigin: ["responsive"],
      transitionDelay: ["responsive"],
      transitionDuration: ["responsive"],
      transitionProperty: ["responsive"],
      transitionTimingFunction: ["responsive"],
      translate: ["responsive", "hover", "focus"],
      userSelect: ["responsive"],
      verticalAlign: ["responsive"],
      visibility: ["responsive"],
      whitespace: ["responsive"],
      width: ["responsive"],
      wordBreak: ["responsive"],
      zIndex: ["responsive", "focus-within", "disabled", "focus"],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, //禁用preflight样式重置
  },
};
