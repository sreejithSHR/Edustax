"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _home_project_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/project/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _home_project_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcHJvamVjdCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnByb2plY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDc0Q7QUFDdkM7QUFDZTtBQUM5RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vPzM4ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbmltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL3Byb2plY3QvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvcHJvamVjdC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUNSO0FBRWpDLE1BQU1FLFVBQVVELGdEQUFRQSxDQUFDRCxrREFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuIl0sIm5hbWVzIjpbImF1dGhPcHRpb25zIiwiTmV4dEF1dGgiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   withPostAuth: () => (/* binding */ withPostAuth),\n/* harmony export */   withSiteAuth: () => (/* binding */ withSiteAuth)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\n\nconst VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.AUTH_GITHUB_ID,\n            clientSecret: process.env.AUTH_GITHUB_SECRET,\n            profile (profile) {\n                return {\n                    id: profile.id.toString(),\n                    name: profile.name || profile.login,\n                    gh_username: profile.login,\n                    email: profile.email,\n                    image: profile.avatar_url\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: `/login`,\n        verifyRequest: `/login`,\n        error: \"/login\"\n    },\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    session: {\n        strategy: \"jwt\"\n    },\n    cookies: {\n        sessionToken: {\n            name: `${VERCEL_DEPLOYMENT ? \"__Secure-\" : \"\"}next-auth.session-token`,\n            options: {\n                httpOnly: true,\n                sameSite: \"lax\",\n                path: \"/\",\n                // When working on localhost, the cookie domain must be omitted entirely (https://stackoverflow.com/a/1188145)\n                domain: VERCEL_DEPLOYMENT ? `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}` : undefined,\n                secure: VERCEL_DEPLOYMENT\n            }\n        }\n    },\n    callbacks: {\n        jwt: async ({ token, user })=>{\n            if (user) {\n                token.user = user;\n            }\n            return token;\n        },\n        session: async ({ session, token })=>{\n            session.user = {\n                ...session.user,\n                // @ts-expect-error\n                id: token.sub,\n                // @ts-expect-error\n                username: token?.user?.username || token?.user?.gh_username\n            };\n            return session;\n        }\n    }\n};\nfunction getSession() {\n    return (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(authOptions);\n}\nfunction withSiteAuth(action) {\n    return async (formData, siteId, key)=>{\n        const session = await getSession();\n        if (!session) {\n            return {\n                error: \"Not authenticated\"\n            };\n        }\n        const site = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].site.findUnique({\n            where: {\n                id: siteId\n            }\n        });\n        if (!site || site.userId !== session.user.id) {\n            return {\n                error: \"Not authorized\"\n            };\n        }\n        return action(formData, site, key);\n    };\n}\nfunction withPostAuth(action) {\n    return async (formData, postId, key)=>{\n        const session = await getSession();\n        if (!session?.user.id) {\n            return {\n                error: \"Not authenticated\"\n            };\n        }\n        const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post.findUnique({\n            where: {\n                id: postId\n            },\n            include: {\n                site: true\n            }\n        });\n        if (!post || post.userId !== session.user.id) {\n            return {\n                error: \"Post not found\"\n            };\n        }\n        return action(formData, post, key);\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7WUFDeENDLE9BQU87Z0JBQ0x2QyxJQUFJMEM7WUFDTjtZQUNBRSxTQUFTO2dCQUNQUCxNQUFNO1lBQ1I7UUFDRjtRQUNBLElBQUksQ0FBQ00sUUFBUUEsS0FBS0gsTUFBTSxLQUFLM0IsUUFBUWUsSUFBSSxDQUFDNUIsRUFBRSxFQUFFO1lBQzVDLE9BQU87Z0JBQ0xXLE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBT3NCLE9BQU9DLFVBQVVTLE1BQU1QO0lBQ2hDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlcnZlclNlc3Npb24sIHR5cGUgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcblxuY29uc3QgVkVSQ0VMX0RFUExPWU1FTlQgPSAhIXByb2Nlc3MuZW52LlZFUkNFTF9VUkw7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBHaXRIdWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSF9HSVRIVUJfSUQgYXMgc3RyaW5nLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIX0dJVEhVQl9TRUNSRVQgYXMgc3RyaW5nLFxuICAgICAgcHJvZmlsZShwcm9maWxlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHByb2ZpbGUuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWUgfHwgcHJvZmlsZS5sb2dpbixcbiAgICAgICAgICBnaF91c2VybmFtZTogcHJvZmlsZS5sb2dpbixcbiAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcbiAgICAgICAgICBpbWFnZTogcHJvZmlsZS5hdmF0YXJfdXJsLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IGAvbG9naW5gLFxuICAgIHZlcmlmeVJlcXVlc3Q6IGAvbG9naW5gLFxuICAgIGVycm9yOiBcIi9sb2dpblwiLCAvLyBFcnJvciBjb2RlIHBhc3NlZCBpbiBxdWVyeSBzdHJpbmcgYXMgP2Vycm9yPVxuICB9LFxuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6IFwiand0XCIgfSxcbiAgY29va2llczoge1xuICAgIHNlc3Npb25Ub2tlbjoge1xuICAgICAgbmFtZTogYCR7VkVSQ0VMX0RFUExPWU1FTlQgPyBcIl9fU2VjdXJlLVwiIDogXCJcIn1uZXh0LWF1dGguc2Vzc2lvbi10b2tlbmAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIC8vIFdoZW4gd29ya2luZyBvbiBsb2NhbGhvc3QsIHRoZSBjb29raWUgZG9tYWluIG11c3QgYmUgb21pdHRlZCBlbnRpcmVseSAoaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzExODgxNDUpXG4gICAgICAgIGRvbWFpbjogVkVSQ0VMX0RFUExPWU1FTlRcbiAgICAgICAgICA/IGAuJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ST09UX0RPTUFJTn1gXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIHNlY3VyZTogVkVSQ0VMX0RFUExPWU1FTlQsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGp3dDogYXN5bmMgKHsgdG9rZW4sIHVzZXIgfSkgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4udXNlciA9IHVzZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBzZXNzaW9uOiBhc3luYyAoeyBzZXNzaW9uLCB0b2tlbiB9KSA9PiB7XG4gICAgICBzZXNzaW9uLnVzZXIgPSB7XG4gICAgICAgIC4uLnNlc3Npb24udXNlcixcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBpZDogdG9rZW4uc3ViLFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIHVzZXJuYW1lOiB0b2tlbj8udXNlcj8udXNlcm5hbWUgfHwgdG9rZW4/LnVzZXI/LmdoX3VzZXJuYW1lLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Vzc2lvbigpIHtcbiAgcmV0dXJuIGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpIGFzIFByb21pc2U8e1xuICAgIHVzZXI6IHtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgICAgZW1haWw6IHN0cmluZztcbiAgICAgIGltYWdlOiBzdHJpbmc7XG4gICAgfTtcbiAgfSB8IG51bGw+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2l0aFNpdGVBdXRoKGFjdGlvbjogYW55KSB7XG4gIHJldHVybiBhc3luYyAoXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhIHwgbnVsbCxcbiAgICBzaXRlSWQ6IHN0cmluZyxcbiAgICBrZXk6IHN0cmluZyB8IG51bGwsXG4gICkgPT4ge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKCk7XG4gICAgaWYgKCFzZXNzaW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogXCJOb3QgYXV0aGVudGljYXRlZFwiLFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc2l0ZSA9IGF3YWl0IHByaXNtYS5zaXRlLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHNpdGVJZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKCFzaXRlIHx8IHNpdGUudXNlcklkICE9PSBzZXNzaW9uLnVzZXIuaWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBcIk5vdCBhdXRob3JpemVkXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb24oZm9ybURhdGEsIHNpdGUsIGtleSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoUG9zdEF1dGgoYWN0aW9uOiBhbnkpIHtcbiAgcmV0dXJuIGFzeW5jIChcbiAgICBmb3JtRGF0YTogRm9ybURhdGEgfCBudWxsLFxuICAgIHBvc3RJZDogc3RyaW5nLFxuICAgIGtleTogc3RyaW5nIHwgbnVsbCxcbiAgKSA9PiB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIuaWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBcIk5vdCBhdXRoZW50aWNhdGVkXCIsXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogcG9zdElkLFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgc2l0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKCFwb3N0IHx8IHBvc3QudXNlcklkICE9PSBzZXNzaW9uLnVzZXIuaWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBcIlBvc3Qgbm90IGZvdW5kXCIsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb24oZm9ybURhdGEsIHBvc3QsIGtleSk7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2Vzc2lvbiIsIkdpdEh1YlByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByaXNtYSIsIlZFUkNFTF9ERVBMT1lNRU5UIiwicHJvY2VzcyIsImVudiIsIlZFUkNFTF9VUkwiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwiQVVUSF9HSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJBVVRIX0dJVEhVQl9TRUNSRVQiLCJwcm9maWxlIiwiaWQiLCJ0b1N0cmluZyIsIm5hbWUiLCJsb2dpbiIsImdoX3VzZXJuYW1lIiwiZW1haWwiLCJpbWFnZSIsImF2YXRhcl91cmwiLCJwYWdlcyIsInNpZ25JbiIsInZlcmlmeVJlcXVlc3QiLCJlcnJvciIsImFkYXB0ZXIiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjb29raWVzIiwic2Vzc2lvblRva2VuIiwib3B0aW9ucyIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJwYXRoIiwiZG9tYWluIiwiTkVYVF9QVUJMSUNfUk9PVF9ET01BSU4iLCJ1bmRlZmluZWQiLCJzZWN1cmUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJzdWIiLCJ1c2VybmFtZSIsImdldFNlc3Npb24iLCJ3aXRoU2l0ZUF1dGgiLCJhY3Rpb24iLCJmb3JtRGF0YSIsInNpdGVJZCIsImtleSIsInNpdGUiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJ1c2VySWQiLCJ3aXRoUG9zdEF1dGgiLCJwb3N0SWQiLCJwb3N0IiwiaW5jbHVkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU05QyxNQUFNQyxTQUFTQyxPQUFPRCxNQUFNLElBQUksSUFBSUQsd0RBQVlBO0FBRWhELElBQUlHLElBQXNDLEVBQUVELE9BQU9ELE1BQU0sR0FBR0E7QUFFNUQsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBwcmlzbWEgPSBnbG9iYWwucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/preact","vendor-chunks/oidc-token-hash","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@next-auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();