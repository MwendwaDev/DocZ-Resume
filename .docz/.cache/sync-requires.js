const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---my-resume-readme-md": hot(preferDefault(require("C:\\Users\\user\\Desktop\\newapp\\my-resume\\README.md"))),
  "component---my-resume-src-index-mdx": hot(preferDefault(require("C:\\Users\\user\\Desktop\\newapp\\my-resume\\src\\index.mdx"))),
  "component---my-resume-src-wiki-mdx": hot(preferDefault(require("C:\\Users\\user\\Desktop\\newapp\\my-resume\\src\\wiki.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\user\\Desktop\\newapp\\.docz\\src\\pages\\404.js")))
}

