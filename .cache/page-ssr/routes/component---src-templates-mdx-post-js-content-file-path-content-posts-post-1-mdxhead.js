exports.id = "component---src-templates-mdx-post-js-content-file-path-content-posts-post-1-mdxhead";
exports.ids = ["component---src-templates-mdx-post-js-content-file-path-content-posts-post-1-mdxhead"];
exports.modules = {

/***/ "./content/posts/post-1.mdx":
/*!**********************************!*\
  !*** ./content/posts/post-1.mdx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/


function _createMdxContent(props) {
  const _components = Object.assign({
    h3: "h3",
    p: "p",
    br: "br",
    hr: "hr",
    ol: "ol",
    li: "li",
    strong: "strong",
    blockquote: "blockquote"
  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h3, null, "💭 Sobre encontrar inspiração"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "Nem sempre a criatividade surge de forma explosiva — muitas vezes, ela aparece disfarçada de rotina.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.br), "\n", "A inspiração pode estar em algo simples: uma conversa despretensiosa, uma música tocando ao fundo ou até um gesto de gentileza que quebra o ritmo apressado do dia."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "A ideia de que criar depende de grandes momentos de iluminação é um mito.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.br), "\n", "Criar é, na verdade, um exercício de observar e transformar o comum em algo significativo."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.hr), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h3, null, "🧠 Dicas para desbloquear a mente criativa"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.ol, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.strong, null, "Permita o tédio."), " Às vezes, é no silêncio e na pausa que a mente organiza ideias."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.strong, null, "Anote tudo."), " Ideias pequenas podem virar projetos grandes."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.strong, null, "Revisite velhas anotações."), " A versão de você de meses atrás pode ter tido ótimas intuições que merecem ser resgatadas."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.li, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.strong, null, "Não espere estar pronto."), " Criar é, muitas vezes, o processo que nos torna prontos."), "\n"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.hr), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.h3, null, "🌿 Conclusão"), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "A criatividade não depende de tempo livre, mas de um olhar atento.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.br), "\n", "Mesmo em meio ao caos, é possível encontrar algo novo — basta permitir-se observar o mundo com curiosidade."), "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.blockquote, null, "\n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components.p, null, "“Criar é dar sentido ao que parece comum. É o olhar que transforma o simples em único.”"), "\n"));
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MDXLayout, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_createMdxContent, props)) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);

/***/ }),

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@mdx-js/react/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* binding */ MDXContext),
/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),
/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* binding */ withMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "./public/page-data/sq/d/2269431855.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2269431855.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"data":{"site":{"siteMetadata":{"title":"BLOG TODAY","description":"blog","siteUrl":"https://blogtoday2025.netlify.app","image":"/og-image.png"}}}}');

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");



const Brand = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Layout__Brand"
})(["font-weight:800;background:linear-gradient(90deg,#8b5cf6,#06b6d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;"]);
function Layout({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Brand, null, "BLOG TODAY")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/posts"
  }, "Posts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/news"
  }, "Not\xEDcias"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/projects"
  }, "Projetos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/contato"
  }, "Contato"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, "\xA9 ", new Date().getFullYear(), " \u2022 Feito com Gatsby \u2022 "));
}

/***/ }),

/***/ "./src/components/SEO.js":
/*!*******************************!*\
  !*** ./src/components/SEO.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2269431855_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2269431855.json */ "./public/page-data/sq/d/2269431855.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Head({
  title,
  description,
  image,
  pathname
}) {
  const {
    site
  } = _public_page_data_sq_d_2269431855_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const meta = site.siteMetadata;
  const seo = {
    title: title ? `${title} | ${meta.title}` : meta.title,
    description: description || meta.description,
    image: new URL(image || meta.image, meta.siteUrl),
    url: new URL(pathname || "/", meta.siteUrl)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, seo.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }));
}

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./src/templates/mdx-post.js?__contentFilePath=C:/Users/USER/Desktop/gatsby-jamstack-rubrica/content/posts/post-1.mdx&export=head":
/*!****************************************************************************************************************************************!*\
  !*** ./src/templates/mdx-post.js?__contentFilePath=C:/Users/USER/Desktop/gatsby-jamstack-rubrica/content/posts/post-1.mdx&export=head ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* reexport safe */ _components_SEO__WEBPACK_IMPORTED_MODULE_3__.Head),
/* harmony export */   "default": () => (/* binding */ GatsbyMDXWrapper)
/* harmony export */ });
/* harmony import */ var C_Users_USER_Desktop_gatsby_jamstack_rubrica_content_posts_post_1_mdx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/posts/post-1.mdx */ "./content/posts/post-1.mdx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");




function MdxPost({
  data,
  children
}) {
  const {
    mdx
  } = data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("article", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", null, mdx.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "small"
  }, mdx.frontmatter.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "prose"
  }, children)));
}
function GatsbyMDXWrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(MdxPost, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(C_Users_USER_Desktop_gatsby_jamstack_rubrica_content_posts_post_1_mdx__WEBPACK_IMPORTED_MODULE_0__["default"], props));
}
const pageQuery = "2519000598";


/***/ })

};
;
//# sourceMappingURL=component---src-templates-mdx-post-js-content-file-path-content-posts-post-1-mdxhead.js.map