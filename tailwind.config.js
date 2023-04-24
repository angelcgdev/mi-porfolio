const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");

const hoverPlugin = plugin(function ({ addVariant, e, postcss }) {
  addVariant("hover", ({ container, separator }) => {
    const hoverRule = postcss.atRule({
      name: "media",
      params: "(hover: hover)",
    });
    hoverRule.append(container.nodes);
    container.append(hoverRule);
    hoverRule.walkRules((rule) => {
      rule.selector = `.${e(
        `hover${separator}${rule.selector.slice(1)}`
      )}:hover`;
    });
  });
});

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  // purge: {
  //   enabled: true,
  //   content: ['./src/**/*.js'],
  //   options: {
  //     safelist: ['dark'],
  //   },
  // },
  // important: "#app",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        disabled: "rgb(var(--color-disabled) / <alpha-value>)",
        borderc: "rgb(var(--color-border) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ["dark"],
    },
  },
  plugins: [hoverPlugin],
};
