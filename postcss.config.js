module.exports = {
  plugins: [
    require("postcss-import", {
      from: "./css/libs/hamburgers-master/dist/",
    }),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
