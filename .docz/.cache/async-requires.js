// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---my-resume-readme-md": () => import("./../../../../my-resume/README.md" /* webpackChunkName: "component---my-resume-readme-md" */),
  "component---my-resume-src-index-mdx": () => import("./../../../../my-resume/src/index.mdx" /* webpackChunkName: "component---my-resume-src-index-mdx" */),
  "component---my-resume-src-wiki-mdx": () => import("./../../../../my-resume/src/wiki.mdx" /* webpackChunkName: "component---my-resume-src-wiki-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

