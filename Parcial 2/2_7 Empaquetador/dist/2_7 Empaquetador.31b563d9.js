// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"5j6Kf":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var _cowsay = require("cowsay");
let vk = (0, _cowsay.say)({
    text: 'grazing in the browser'
});
document.getElementById('Vaca').innerText = vk;

},{"cowsay":"24uMK"}],"24uMK":[function(require,module,exports,__globalThis) {
(function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    'use strict';
    var ansiRegex = ()=>{
        const pattern = [
            '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[a-zA-Z\\d]*)*)?\\u0007)',
            '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))'
        ].join('|');
        return new RegExp(pattern, 'g');
    };
    var stripAnsi = (input)=>typeof input === 'string' ? input.replace(ansiRegex(), '') : input;
    /* eslint-disable yoda */ var isFullwidthCodePoint = (x)=>{
        if (Number.isNaN(x)) return false;
        // code points are derived from:
        // http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
        if (x >= 0x1100 && (x <= 0x115f || // Hangul Jamo
        x === 0x2329 || // LEFT-POINTING ANGLE BRACKET
        x === 0x232a || // RIGHT-POINTING ANGLE BRACKET
        // CJK Radicals Supplement .. Enclosed CJK Letters and Months
        0x2e80 <= x && x <= 0x3247 && x !== 0x303f || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
        0x3250 <= x && x <= 0x4dbf || // CJK Unified Ideographs .. Yi Radicals
        0x4e00 <= x && x <= 0xa4c6 || // Hangul Jamo Extended-A
        0xa960 <= x && x <= 0xa97c || // Hangul Syllables
        0xac00 <= x && x <= 0xd7a3 || // CJK Compatibility Ideographs
        0xf900 <= x && x <= 0xfaff || // Vertical Forms
        0xfe10 <= x && x <= 0xfe19 || // CJK Compatibility Forms .. Small Form Variants
        0xfe30 <= x && x <= 0xfe6b || // Halfwidth and Fullwidth Forms
        0xff01 <= x && x <= 0xff60 || 0xffe0 <= x && x <= 0xffe6 || // Kana Supplement
        0x1b000 <= x && x <= 0x1b001 || // Enclosed Ideographic Supplement
        0x1f200 <= x && x <= 0x1f251 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
        0x20000 <= x && x <= 0x3fffd)) return true;
        return false;
    };
    var stringWidth = (str)=>{
        if (typeof str !== 'string' || str.length === 0) return 0;
        str = stripAnsi(str);
        let width = 0;
        for(let i = 0; i < str.length; i++){
            const code = str.codePointAt(i);
            // Ignore control characters
            if (code <= 0x1F || code >= 0x7F && code <= 0x9F) continue;
            // Ignore combining characters
            if (code >= 0x300 && code <= 0x36F) continue;
            // Surrogates
            if (code > 0xFFFF) i++;
            width += isFullwidthCodePoint(code) ? 2 : 1;
        }
        return width;
    };
    var say = function(text, wrap) {
        var delimiters = {
            first: [
                "/",
                "\\"
            ],
            middle: [
                "|",
                "|"
            ],
            last: [
                "\\",
                "/"
            ],
            only: [
                "<",
                ">"
            ]
        };
        return format(text, wrap, delimiters);
    };
    var think = function(text, wrap) {
        var delimiters = {
            first: [
                "(",
                ")"
            ],
            middle: [
                "(",
                ")"
            ],
            last: [
                "(",
                ")"
            ],
            only: [
                "(",
                ")"
            ]
        };
        return format(text, wrap, delimiters);
    };
    function format(text, wrap, delimiters) {
        var lines = split(text, wrap);
        var maxLength = max(lines);
        var balloon;
        if (lines.length === 1) balloon = [
            " " + top(maxLength),
            delimiters.only[0] + " " + lines[0] + " " + delimiters.only[1],
            " " + bottom(maxLength)
        ];
        else {
            balloon = [
                " " + top(maxLength)
            ];
            for(var i = 0, len = lines.length; i < len; i += 1){
                var delimiter;
                if (i === 0) delimiter = delimiters.first;
                else if (i === len - 1) delimiter = delimiters.last;
                else delimiter = delimiters.middle;
                balloon.push(delimiter[0] + " " + pad(lines[i], maxLength) + " " + delimiter[1]);
            }
            balloon.push(" " + bottom(maxLength));
        }
        return balloon.join("\n");
    }
    function split(text, wrap) {
        text = text.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '').replace(/\t/g, '        ');
        var lines = [];
        if (!wrap) lines = text.split("\n");
        else {
            var start = 0;
            while(start < text.length){
                var nextNewLine = text.indexOf("\n", start);
                var wrapAt = Math.min(start + wrap, nextNewLine === -1 ? text.length : nextNewLine);
                lines.push(text.substring(start, wrapAt));
                start = wrapAt;
                // Ignore next new line
                if (text.charAt(start) === "\n") start += 1;
            }
        }
        return lines;
    }
    function max(lines) {
        var max = 0;
        for(var i = 0, len = lines.length; i < len; i += 1)if (stringWidth(lines[i]) > max) max = stringWidth(lines[i]);
        return max;
    }
    function pad(text, length) {
        return text + new Array(length - stringWidth(text) + 1).join(" ");
    }
    function top(length) {
        return new Array(length + 3).join("_");
    }
    function bottom(length) {
        return new Array(length + 3).join("-");
    }
    var balloon = {
        say: say,
        think: think
    };
    var replacer = function(cow, variables) {
        var eyes = escapeRe(variables.eyes);
        var eyeL = eyes.charAt(0);
        var eyeR = eyes.charAt(1);
        var tongue = escapeRe(variables.tongue);
        if (cow.indexOf("$the_cow") !== -1) cow = extractTheCow(cow);
        return cow.replace(/\$thoughts/g, variables.thoughts).replace(/\$eyes/g, eyes).replace(/\$tongue/g, tongue).replace(/\$\{eyes\}/g, eyes).replace(/\$eye/, eyeL).replace(/\$eye/, eyeR).replace(/\$\{tongue\}/g, tongue);
    };
    /*
	 * "$" dollar signs must be doubled before being used in a regex replace
	 * This can occur in eyes or tongue.
	 * For example:
	 *
	 * cowsay -g Moo!
	 *
	 * cowsay -e "\$\$" Moo!
	 */ function escapeRe(s) {
        if (s && s.replace) return s.replace(/\$/g, "$$$$");
        return s;
    }
    function extractTheCow(cow) {
        cow = cow.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '');
        var match = /\$the_cow\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(cow);
        if (!match) {
            console.error("Cannot parse cow file\n", cow);
            return cow;
        } else return match[1].replace(/\\{2}/g, "\\").replace(/\\@/g, "@").replace(/\\\$/g, "$");
    }
    var modes = {
        "b": {
            eyes: "==",
            tongue: "  "
        },
        "d": {
            eyes: "xx",
            tongue: "U "
        },
        "g": {
            eyes: "$$",
            tongue: "  "
        },
        "p": {
            eyes: "@@",
            tongue: "  "
        },
        "s": {
            eyes: "**",
            tongue: "U "
        },
        "t": {
            eyes: "--",
            tongue: "  "
        },
        "w": {
            eyes: "OO",
            tongue: "  "
        },
        "y": {
            eyes: "..",
            tongue: "  "
        }
    };
    var faces = function(options) {
        for(var mode in modes){
            if (options[mode] === true) return modes[mode];
        }
        return {
            eyes: options.e || "oo",
            tongue: options.T || "  "
        };
    };
    var DEFAULT_COW = "$the_cow = <<\"EOC\";\n        $thoughts   ^__^\n         $thoughts  ($eyes)\\\\_______\n            (__)\\\\       )\\\\/\\\\\n             $tongue ||----w |\n                ||     ||\nEOC\n";
    var ackbar = "# Admiral Ackbar\n#\n# based on 'ack --bar' from http://beyondgrep.com/\n$the_cow = <<EOC;\n         $thoughts\n          $thoughts\n                      ?IIIIIII7II?????+\n                   ~III777II777I?+==++==+:\n                  ???I7I???I7II++=====++===\n                 ??+??????????+===~~=+++??==+\n                ??+??II??????+==~=~~=+++++==++\n               I+?????????+?+====~=~==+==++?==?\n              ?????II?????+++++=======?===~~~~==\n            ,?????II????????++++====~===::~~~~:~\n            I?I??II?+++??+?+++==~~~~:~:~:,:,,:::~\n           I??????+==+???++++=~~:~:~:,:::,:,,,,,::\n          +I?++++=+=+????+++=~~:~~:::,,,,::,,,:,:\n          I??+?+====+???+++===~~::::,::,:,,,,,,::\n         I????=~===++?+=+=~==~:~~:,,,,,,,.,,,,,:~\n        =??+?=~~~~??+?+===~~==,==~~~~,,,,..,,,.:=\n        II++==~~=++++++=~~=~,~+=?+?=I?++=..,.,,:\n     IIII?+?=====+~+++~=~~~:::=~+~===:,,,,,.,.::\n    I?=?I+??+=~=~?I?=+=~~~::,~~=~::~=::,,,,,,::\n    ?+I??++=++~,::+++~~~:::,,=~~=,~,..,::.:\n    ++=+?++~=:~::I+,~=:~,:,,,,:~~......::~,,,\n     ~=~=:.++~:,.,~=::::.,,:,.:~,:=...==~,::\n     =~?++??+=~~,.:?~.:,:,,,.,::,,~:=~=::,~\n     ++~~:~===~:~,.~::,~=~.:,..,:,,:==:.,:7\n     ~~,::...:=:,::+:~:.,~,...,.,,,,::~,,::~=\n      =~===+=~~,.::,,,:::,..,,,,,,,,,,,:,..,=+?\n      ~=~=~::~~~::,.,,,~:.+,..,,,,..,,,,...,+I?\n      ~==~:~~:~~,~=~~:,:~,:,,,,,,....,,,..+?I?I\n      ~=~=+,:~:=,:~~~~~~::::,.,,.,,.,,,..~+????I\n      ~=~==~=:~~:,~~~~~:::,::,.,,,..,,,I77I?+??II\n      +I7:::~~=~:,::~~~~.=.,~,,,,...,~7III?+??II7\n     777?+~:=~=~~:,::~~:::.,,,,,,,,,777II??I777777\n     777I==:=~::~~~~::~:::,:,:~:::,777I???777777777\n    7777+,~===~:~:~~~~:::,.~:=,,:777II???77777777777=?\n    777I~,~~~=~::~:,:,,,:=~~,,:7777I???I7777777777+=++\n  I7777I,,:,.==::::,:,,,,::::7777I+??I77777777777??I7I7,\n ,77777I::,..~~:,,,,,,.,:~I7777I+??I777777777777?I7777777,\n 77777777,...~~:,,,,,.,77777I7???II777777777777+?7777777777\n77777777777:,~~~,,=7777777I???II777777777777777+77777777777\n77777777777777777777777I+7?7II77777777777777777+777777777777\nEOC\n\n";
    var apertureBlank = "# Aperture Science logo, without the text inside\n# via http://pastebin.com/1AZwKrKp \n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n              .,-:;//;:=,\n          . :H\\@\\@\\@MM\\@M#H/.,+%;,\n       ,/X+ +M\\@\\@M\\@MM%=,-%HMMM\\@X/,\n     -+\\@MM; \\$M\\@\\@MH+-,;XMMMM\\@MMMM\\@+-\n    ;\\@M\\@\\@M- XM\\@X;. -+XXXXXHHH\\@M\\@M#\\@/.\n  ,%MM\\@\\@MH ,\\@%=            .---=-=:=,.\n  =\\@#\\@\\@\\@MX .,              -%HX\\$\\$%%%+;\n =-./\\@M\\@M\\$                  .;\\@MMMM\\@MM:\n X\\@/ -\\$MM/                    .+MM\\@\\@\\@M\\$\n,\\@M\\@H: :\\@:                    . =X#\\@\\@\\@\\@-\n,\\@\\@\\@MMX, .                    /H- ;\\@M\\@M=\n.H\\@\\@\\@\\@M\\@+,                    %MM+..%#\\$.\n /MMMM\\@MMH/.                  XM\\@MH; =;\n  /%+%\\$XHH\\@\\$=              , .H\\@\\@\\@\\@MX,\n   .=--------.           -%H.,\\@\\@\\@\\@\\@MX,\n   .%MM\\@\\@\\@HHHXX\\$\\$\\$%+- .:\\$MMX =M\\@\\@MM%.\n     =XMMM\\@MM\\@MM#H;,-+HMM\\@M+ /MMMX=\n       =%\\@M\\@M#\\@\\$-.=\\$\\@MM\\@\\@\\@M; %M%=\n         ,:+\\$+-,/H#MMMMMMM\\@= =,\n               =++%%%%+/:-.\nEOC\n";
    var aperture = "# Aperture Science logo\n# via http://pastebin.com/1AZwKrKp \n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n              .,-:;//;:=,\n          . :H\\@\\@\\@MM\\@M#H/.,+%;,\n       ,/X+ +M\\@\\@M\\@MM%=,-%HMMM\\@X/,\n     -+\\@MM; \\$M\\@\\@MH+-,;XMMMM\\@MMMM\\@+-\n    ;\\@M\\@\\@M- XM\\@X;. -+XXXXXHHH\\@M\\@M#\\@/.\n  ,%MM\\@\\@MH ,\\@%=            .---=-=:=,.\n  =\\@#\\@\\@\\@MX .,      WE      -%HX\\$\\$%%%+;\n =-./\\@M\\@M\\$         DO       .;\\@MMMM\\@MM:\n X\\@/ -\\$MM/        WHAT        .+MM\\@\\@\\@M\\$\n,\\@M\\@H: :\\@:         WE         . =X#\\@\\@\\@\\@-\n,\\@\\@\\@MMX, .        MUST        /H- ;\\@M\\@M=\n.H\\@\\@\\@\\@M\\@+,      BECAUSE       %MM+..%#\\$.\n /MMMM\\@MMH/.       WE         XM\\@MH; =;\n  /%+%\\$XHH\\@\\$=     CAN      , .H\\@\\@\\@\\@MX,\n   .=--------.           -%H.,\\@\\@\\@\\@\\@MX,\n   .%MM\\@\\@\\@HHHXX\\$\\$\\$%+- .:\\$MMX =M\\@\\@MM%.\n     =XMMM\\@MM\\@MM#H;,-+HMM\\@M+ /MMMX=\n       =%\\@M\\@M#\\@\\$-.=\\$\\@MM\\@\\@\\@M; %M%=\n         ,:+\\$+-,/H#MMMMMMM\\@= =,\n               =++%%%%+/:-.\nEOC\n";
    var armadillo = "# armadillo\n#\n# based on http://ascii.co.uk/art/armadillo\n$the_cow = <<EOC;\n         $thoughts\n          $thoughts\n               ,.-----__\n            ,:::://///,:::-.\n           /:''/////// ``:::`;/|/\n          /'   ||||||     :://'`\\\\\n        .' ,   ||||||     `/(  e \\\\\n  -===~__-'\\\\__X_`````\\\\_____/~`-._ `.\n              ~~        ~~       `~-'\nEOC\n\n";
    var atat = "# ATAT\n# from http://www.asciiworld.com/-Robots,24-.html (accessed 4/30/2014)\n$the_cow = <<EOC;\n  $thoughts                         ________\n   $thoughts                    _.-Y  |  |  Y-.,_\n    $thoughts                .-\"   |  |  |  ||   \"~-.      \n          _____     |\"\"[]\"|\" !\"\"! \"|\"==\"\" \"I      \n       .-\"{-. \"I----]_   :|------..| []  __L      \n      P-=}=(r\\_I]_[L__] _l|______l |..  |___I     \n      ^-=\\[_c=-'  ~j______[________]_L______L]    \n                    [_L--.\\_==I|I==/.--.j_I_/     \n                      j)==([\"-----`])==((_]       \n                       I--I\"~~\"\"\"~~\"I--I          \n                       |[]|         |[]|          \n                       j__l         j__l          \n                       |!!|         |!!|          \n                       |..|         |..|         \n                       )[](         )[](          \n                       ]--[         ]--[          \n                       [L_]         [L_]          \n                      /|..|\\       /|..|\\         \n                     '={--}=`     '={--}=`        \n                    .-^-r--^-.   .-^-r--^-.       \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nModified ATAT from Row  (the Ascii-Wizard of Oz)\nEOC\n";
    var atom = "# atom\n# via http://pastebin.com/1AZwKrKp\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts\n                  =/;;/-\n                 +:    //\n                /;      /;\n               -X        H.\n .//;;;:;;-,   X=        :+   .-;:=;:;%;.\n M-       ,=;;;#:,      ,:#;;:=,       ,\\@\n :%           :%.=/++++/=.\\$=           %=\n  ,%;         %/:+/;,,/++:+/         ;+.\n    ,+/.    ,;\\@+,        ,%H;,    ,/+,\n       ;+;;/= \\@.  .H##X   -X :///+;\n       ;+=;;;.\\@,  .XM\\@\\$.  =X.//;=%/.\n    ,;:      :\\@%=        =\\$H:     .+%-\n  ,%=         %;-///==///-//         =%,\n ;+           :%-;;;:;;;;-X-           +:\n \\@-      .-;;;;M-        =M/;;;-.      -X\n  :;;::;;-.    %-        :+    ,-;;-;:==\n               ,X        H.\n                ;/      %=\n                 //    +;\n                  ,////,\n\nEOC\n";
    var awesomeFace = "# awesome face\n# via http://pastebin.com/1AZwKrKp\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n                  \\#[/[#:xxxxxx:#[/[\\\\x\n             [/\\\\ &3N            W3& \\\\/[x\n          [[x\\@W                      W\\@x[[\\\\\n        /#&N                             N_#\n      /#\\@                                  \\@#/x\n    [/ NH_  ^\\@W               Nd_  ^\\@p      N /#\n   [[d\\@#_ zz\\@[/x3           3x:d9zz \\\\/#_N     d[[\n  /[3^[JMMMJ/////&         ^#NMMMMM ////#W     H[[\n [/\\@p/NMMMML\\@#[:^/3       d/JMMMMMMEx[# x\\\\      &/#\n /x &/LMMMMMMMMMM[_       x:MMMMMMMMMMMM /p      :/\n[/d d/ELLLLLLLLLD/&        \\#LLLLLLLLLLLL3/N      d/[\n//N   xxxxxxxxxxxxN       Wxxxxxxxxxxxxxx_       W//\n/[                                                //\n//N   p333333333333333333333333333333333p        W//\n[/d   _^/#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/H       \\@/[\n /:     \\\\#                              [x       :/\n [/\\@    d/x                             \\#:      &/#\n  [[H    ^[x                            [      H[[\n   [[d    _[x            &Hppp3d_      \\#\\\\N    \\@[[\n    [/ N   d#\\\\        &NzDDDDDDDDJp^ x[xN   N /#\n      /#&   N [:     pDDDDDDDDDDDDJ&#:H    &#/\n       :/#_W  W^##x 3DDDDDDDDDJN&:\\\\^p   W_#/\n          [[x&W  p& xx ^^^^ x:x \\@W   W&x/[\n             [/# &HW   WWWWN    WH& \\#/[\n                 [/[#\\\\xxxxxx\\\\#[/[\\\\x^\\@\nEOC\n";
    var banana = "# Banana \n#  http://www.ascii-art.de/ascii/ab/banana.txt\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts\n\n     \".           ,#  \n     \\\\ `-._____,-'=/\n  ____`._ ----- _,'_____PhS\n         `-----'\nEOC\n";
    var bearface = "##\n## acsii picture from http://www.ascii-art.de/ascii/ab/bear.txt\n##\n$the_cow = <<EOC;\n $thoughts\n  $thoughts\n     .--.              .--.\n    : (\\\\ \". _......_ .\" /) :\n     '.    `        `    .'\n      /'   _        _   `\\\\\n     /     $eye}      {$eye     \\\\\n    |       /      \\\\       |\n    |     /'        `\\\\     |\n     \\\\   | .  .==.  . |   /\n      '._ \\\\.' \\\\__/ './ _.'\n      /  ``'._-''-_.'``  \\\\\nEOC\n";
    var beavis_zen = "##\n## Beavis, with Zen philosophy removed.\n##\n$the_cow = <<EOC;\n   $thoughts         __------~~-,\n    $thoughts      ,'            ,\n          /               \\\\\n         /                :\n        |                  '\n        |                  |\n        |                  |\n         |   _--           |\n         _| =-.     .-.   ||\n         $eye|/$eye/       _.   |\n         /  ~          \\\\ |\n       (____\\@)  ___~    |\n          |_===~~~.`    |\n       _______.--~     |\n       \\\\________       |\n                \\\\      |\n              __/-___-- -__\n             /            _ \\\\\nEOC\n";
    var bees = "# Bees/beehive\n#  http://www.asciiworld.com/-Bees-.html\n$the_cow = <<EOC;\n          $thoughts\n           $thoughts\n\n\n      ^^      .-=-=-=-.  ^^\n  ^^        (`-=-=-=-=-`)         ^^\n          (`-=-=-=-=-=-=-`)  ^^         ^^\n    ^^   (`-=-=-=-=-=-=-=-`)   ^^                            ^^\n        ( `-=-=-=-(@)-=-=-` )      ^^\n        (`-=-=-=-=-=-=-=-=-`)  ^^\n        (`-=-=-=-=-=-=-=-=-`)              ^^\n        (`-=-=-=-=-=-=-=-=-`)                      ^^\n        (`-=-=-=-=-=-=-=-=-`)  ^^\n         (`-=-=-=-=-=-=-=-`)          ^^\n          (`-=-=-=-=-=-=-`)  ^^                 ^^\n      jgs   (`-=-=-=-=-`)\n             `-=-=-=-=-`\nEOC\n";
    var billTheCat = "# Bill the Cat\n#\n# Based on 'ack --th[pt]+t+'\n#  from http://beyondgrep.com/ack-2.14-single-file\n$the_cow = <<EOC;\n $thoughts\n  $thoughts\n _   /|\n \\\\'o.O'\n =(___)=\n    U\nEOC\n";
    var biohazard = "# biohazard symbol\n# via http://pastebin.com/1AZwKrKp\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n              =+\\$HM####\\@H%;,\n           /H###############M\\$,\n           ,\\@################+\n            .H##############+\n              X############/\n               \\$##########/\n                %########/\n                 /X/;;+X/\n \n                  -XHHX-\n                 ,######,\n \\#############X  .M####M.  X#############\n \\##############-   -//-   -##############\n X##############%,      ,+##############X\n -##############X        X##############-\n  %############%          %############%\n   %##########;            ;##########%\n    ;#######M=              =M#######;\n     .+M###\\@,                ,\\@###M+.\n        :XH.                  .HX:\n\nEOC\n";
    var bishop = "# Bishop (Chess piece)\n#\n# from http://www.chessvariants.org/d.pieces/ascii.html\n#   by David Moeser\n#\n$the_cow = <<EOC;\n $thoughts\n  $thoughts\n    <>_\n  (\\\\)  )\n   \\\\__/\n  (____)\n   |  |\n   |__|\n  /____\\\\\n (______)\nEOC\n";
    var blackMesa = "# Black Mesa logo\n# via http://pastebin.com/1AZwKrKp\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n           .-;+\\$XHHHHHHX\\$+;-.\n        ,;X\\@\\@X%/;=----=:/%X\\@\\@X/,\n      =\\$\\@\\@%=.              .=+H\\@X:\n    -XMX:                      =XMX=\n   /\\@\\@:                          =H\\@+\n  %\\@X,                            .\\$\\@\\$\n +\\@X.                               \\$\\@%\n-\\@\\@,                                .\\@\\@=\n%\\@%                                  +\\@\\$\nH\\@:                                  :\\@H\nH\\@:         :HHHHHHHHHHHHHHHHHHX,    =\\@H\n%\\@%         ;\\@M\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@H-   +\\@\\$\n=\\@\\@,        :\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@= .\\@\\@:\n +\\@X        :\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@M\\@\\@\\@\\@\\@\\@:%\\@%\n  \\$\\@\\$,      ;\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@M\\@\\@\\@\\@\\@\\@\\$.\n   +\\@\\@HHHHHHH\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@+\n    =X\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@X=\n      :\\$\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@M\\@\\@\\@\\@\\$:\n        ,;\\$\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@X/-\n           .-;+\\$XXHHHHHX\\$+;-.\nEOC\n";
    var bong = "##\n## A cow with a bong, from lars@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n         $thoughts\n          $thoughts\n            ^__^ \n    _______/($eyes)\n/\\\\/(       /(__)\n   | W----|| |~|\n   ||     || |~|  ~~\n             |~|  ~\n             |_| o\n             |#|/\n            _+#+_\nEOC\n";
    var box = "# Box\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n         __________________\n        /\\\\  ______________ \\\\\n       /::\\\\ \\\\ZZZZZZZZZZZZ/\\\\ \\\\\n      /:/\\\\.\\\\ \\\\        /:/\\\\:\\\\ \\\\\n     /:/Z/\\\\:\\\\ \\\\      /:/Z/\\\\:\\\\ \\\\\n    /:/Z/__\\\\:\\\\ \\\\____/:/Z/  \\\\:\\\\ \\\\\n   /:/Z/____\\\\:\\\\ \\\\___\\\\/Z/    \\\\:\\\\ \\\\\n   \\\\:\\\\ \\\\ZZZZZ\\\\:\\\\ \\\\ZZ/\\\\ \\\\     \\\\:\\\\ \\\\\n    \\\\:\\\\ \\\\     \\\\:\\\\ \\\\ \\\\:\\\\ \\\\     \\\\:\\\\ \\\\\n     \\\\:\\\\ \\\\     \\\\:\\\\ \\\\_\\\\;\\\\_\\\\_____\\\\;\\\\ \\\\\n      \\\\:\\\\ \\\\     \\\\:\\\\_________________\\\\\n       \\\\:\\\\ \\\\    /:/ZZZZZZZZZZZZZZZZZ/\n        \\\\:\\\\ \\\\  /:/Z/    \\\\:\\\\ \\\\  /:/Z/\n         \\\\:\\\\ \\\\/:/Z/      \\\\:\\\\ \\\\/:/Z/\n          \\\\:\\\\/:/Z/________\\\\;\\\\/:/Z/\n           \\\\::/Z/_______itz__\\\\/Z/\n            \\\\/ZZZZZZZZZZZZZZZZZ/\nEOC\n";
    var brokenHeart = "# broken heart\n# via http://pastebin.com/1AZwKrKp\n# TODO: replace \"thoughts\" with \"feelings\"\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n                          .,---.\n                        ,/XM#MMMX;,\n                      -%##########M%,\n                     -\\@######%  \\$###\\@=\n      .,--,         -H#######\\$   \\$###M:\n   ,;\\$M###MMX;     .;##########\\$;HM###X=\n ,/\\@##########H=      ;################+\n-+#############M/,      %##############+\n%M###############=      /##############:\nH################      .M#############;.\n\\@###############M      ,\\@###########M:.\nX################,      -\\$=X#######\\@:\n/\\@##################%-     +######\\$-\n.;##################X     .X#####+,\n .;H################/     -X####+.\n   ,;X##############,       .MM/\n      ,:+\\$H\\@M#######M#\\$-    .\\$\\$=\n           .,-=;+\\$\\@###X:    ;/=.\n                  .,/X\\$;   .::,\n                      .,    ..\nEOC\n";
    var budFrogs = "##\n## The Budweiser frogs\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n          oO)-.                       .-(Oo\n         /__  _\\\\                     /_  __\\\\\n         \\\\  \\\\(  |     ()~()         |  )/  /\n          \\\\__|\\\\ |    (-___-)        | /|__/\n          '  '--'    ==`-'==        '--'  '\nEOC\n";
    var bunny = "##\n## A cute little wabbit\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts   \\\\\n        \\\\ /\\\\\n        ( )\n      .( o ).\nEOC\n";
    var C3PO = "# C3PO\n#\n# adapted from 'telnet -e x towel.blinkenlights.nl'\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n       /~\\\\\n      |oo )\n      _\\\\=/_\n     /     \\\\\n    //|/.\\\\|\\\\\\\\\n   ||  \\\\_/  ||\n   || |\\\\ /| ||\n    \\# \\\\_ _/  \\#\n      | | |\n      | | |\n      []|[]\n      | | |\n     /_]_[_\\\\\nEOC\n";
    var cake = "# Cake, from Portal \n# via http://pastebin.com/1AZwKrKp\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n            ,:/+/-\n            /M/              .,-=;//;-\n       .:/= ;MH/,    ,=/+%\\$XH@MM#@:\n      -\\$##@+\\$###@H@MMM#######H:.    -/H#\n .,H@H@ X######@ -H#####@+-     -+H###@X\n  .,@##H;      +XM##M/,     =%@###@X;-\nX%-  :M##########$.    .:%M###@%:\nM##H,   +H@@@$/-.  ,;\\$M###@%,          -\nM####M=,,---,.-%%H####M\\$:          ,+@##\n@##################@/.         :%H##@\\$-\nM###############H,         ;HM##M\\$=\n\\#################.    .=\\$M##M\\$=\n\\#################H..;XM##M\\$=          .:+\nM###################@%=           =+@MH%\n@################M/.          =+H#X%=\n=+M##############M,       -/X#X+;.\n  .;XM##########H=    ,/X#H+:,\n     .=+HM######M+/+HM@+=.\n         ,:/%XM####H/.\n              ,.:=-.\nEOC\n";
    var cakeWithCandles = "# cake with candles\n# via http://chris.com/ascii/index.php?art=events/birthday\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n       $thoughts\n                                    (\n                       (\n               )                    )             (\n                       )           (o)    )\n               (      (o)    )     ,|,            )\n              (o)     ,|,          |~\\\\    (      (o)\n              ,|,     |~\\\\    (     \\\\ |   (o)     ,|,\n              \\\\~|     \\\\ |   (o)    |`\\\\   ,|,     |~\\\\\n              |`\\\\     |`\\\\\\@\\@\\@,|,\\@\\@\\@\\@\\\\ |\\@\\@\\@\\\\~|     \\\\ |\n              \\\\ | o\\@\\@\\@\\\\ |\\@\\@\\@\\\\~|\\@\\@\\@\\@|`\\\\\\@\\@\\@|`\\\\\\@\\@\\@o |`\\\\\n             o|`\\\\\\@\\@\\@\\@\\@|`\\\\\\@\\@\\@|`\\\\\\@\\@\\@\\@\\\\ |\\@\\@\\@\\\\ |\\@\\@\\@\\@\\@\\\\ |o\n           o\\@\\@\\\\ |\\@\\@\\@\\@\\@\\\\ |\\@\\@\\@\\\\ |\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@|`\\\\\\@\\@\\@\\@\\@|`\\\\\\@\\@o\n          \\@\\@\\@\\@|`\\\\\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@|`\\\\\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\\\ |\\@\\@\\@\\@\\@\\\\ |\\@\\@\\@\\@\n          p\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\\\ |\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@|`\\\\\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@q\n          \\@\\@o\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@|`\\\\\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@o\\@\\@\n          \\@:\\@\\@\\@o\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@o\\@\\@::\\@\n          ::\\@\\@::\\@\\@o\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@o\\@\\@:\\@\\@::\\@\n          ::\\@\\@::\\@\\@\\@\\@::oo\\@\\@\\@\\@oo\\@\\@\\@\\@\\@ooo\\@\\@\\@\\@\\@o:::\\@\\@\\@::::::\n          %::::::\\@::::::\\@\\@\\@\\@:::\\@\\@\\@:::::\\@\\@\\@\\@:::::\\@\\@:::::%\n          %%::::::::::::\\@\\@::::::\\@:::::::\\@\\@::::::::::::%%\n          ::%%%::::::::::\\@::::::::::::::\\@::::::::::%%%::\n        .#::%::%%%%%%:::::::::::::::::::::::::%%%%%::%::#.\n      .###::::::%%:::%:%%%%%%%%%%%%%%%%%%%%%:%:::%%:::::###.\n    .#####::::::%:::::%%::::::%%%%:::::%%::::%::::::::::#####.\n   .######`:::::::::::%:::::::%:::::::::%::::%:::::::::\\'######.\n   .#########``::::::::::::::::::::::::::::::::::::\\'\\'#########.\n   `.#############```::::::::::::::::::::::::\\'\\'\\'#############.\\'\n    `.######################################################.\\'\n      ` .###########,._.,,,. \\#######<_\\\\##################. \\'\n         ` .#######,;:      `,/____,__`\\\\_____,_________,_____\n            `  .###;;;`.   _,;>-,------,,--------,----------\\'\n                `  `,;\\' ~~~ ,\\'\\\\######_/\\'#######  .  \\'\n                    \\'\\'~`\\'\\'\\'\\'    -  .\\'/;  -    \\'       -Catalyst\nEOC\n";
    var cat2 = "#\n#\tCat picture by Joan Stark\n#\tTransformed into cowfile by Myroslav Golub\n#\n$the_cow = <<EOC;\n       $thoughts  \n        $thoughts\n         $thoughts\n          $thoughts\n          |\\\\___/|\n         =) $eyeY$eye (=            \n          \\\\  ^  /\n           )=*=(       \n          /     \\\\\n          |     |\n         /| | | |\\\\\n         \\\\| | |_|/\\\\\n         //_// ___/\n             \\\\_) \nEOC\n";
    var cat = "# Cat\n#\n# used https://github.com/paulkaefer/flipFile.py\n#  python flipFile.py cat \" \"\n# and \n#  cat cat_flipped | sed 's/\\\\/\\\\\\\\/g' > cat.cow\n#\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts                       _\n                          / )      \n                         / /       \n      //|                \\\\ \\\\       \n   .-`^ \\\\   .-`````-.     \\\\ \\\\      \n o` {|}  \\\\_/         \\\\    / /      \n '--,  _ //   .---.   \\\\  / /       \n   ^^^` )/  ,/     \\\\   \\\\/ /        \n        (  /)      /\\\\/   /         \n        / / (     / (   /          \n    ___/ /) (  __/ __\\\\ (           \n   (((__)((__)((__(((___)          \nEOC\n\n";
    var catfence = "#\n#\tCat picture by Joan Stark\n#\tTransformed into cowfile by Myroslav Golub\n#\n$the_cow = <<EOC;\n       $thoughts     *     ,MMM8&&&.            *\n                  MMMM88&&&&&    .\n        $thoughts        MMMM88&&&&&&&\n     *           MMM88&&&&&&&&\n         $thoughts       MMM88&&&&&&&&\n                 'MMM88&&&&&&'\n          $thoughts        'MMM8&&&'      *\n          |\\\\___/|\n         =) $eyeY$eye (=            .              '\n          \\\\  ^  /\n           )=*=(       *\n          /     \\\\\n          |     |\n         /| | | |\\\\\n         \\\\| | |_|/\\\\\n  _/\\\\_/\\\\_//_// ___/\\\\_/\\\\_/\\\\_/\\\\_/\\\\_/\\\\_/\\\\_/\\\\_/\\\\_\n  |  |  |  | \\\\_) |  |  |  |  |  |  |  |  |  |\n  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |     \n  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n\nEOC\n";
    var charizardvice = "$the_cow = <<\"EOC\";\n                        $thoughts\n                         $thoughts     ___.\n                          $thoughts    L._, \\\\\n               _.,         $thoughts   <  <\\\\                _\n             ,' '           $thoughts  `.   | \\\\            ( `\n          ../, `.            $thoughts  |    .\\\\`.           \\\\ \\\\_\n         ,' ,..  .           _.,'    ||\\\\l            )  '\".\n        , ,'   \\\\           ,'.-.`-._,'  |           .  _._`.\n      ,' /      \\\\ \\\\        `' ' `--/   | \\\\          / /   ..\\\\\n    .'  /        \\\\ .         |\\\\__ - _ ,'` `        / /     `.`.\n    |  '          ..         `-...-\"  |  `-'      / /        . `.\n    | /           |L__           |    |          / /          `. `.\n   , /            .   .          |    |         / /             ` `\n  / /          ,. ,`._ `-_       |    |  _   ,-' /               ` \\\\\n / .           \\\\\"`_/. `-_ \\\\_,.  ,'    +-' `-'  _,        ..,-.    \\\\`.\n  '         .-f    ,'   `    '.       \\\\__.---'     _   .'   '     \\\\ \\\\\n' /          `.'    l     .' /          \\\\..      ,_|/   `.  ,'`     L`\n|'      _.-\"\"` `.    \\\\ _,'  `            \\\\ `.___`.'\"`-.  , |   |    | \\\\\n||    ,'      `. `.   '       _,...._        `  |    `/ '  |   '     .|\n||  ,'          `. ;.,.---' ,'       `.   `.. `-'  .-' /_ .'    ;_   ||\n|| '              V      / /           `   | `   ,'   ,' '.    !  `. ||\n||/            _,-------7 '              . |  `-'    l         /    `||\n |          ,' .-   ,' ||               | .-.        `.      .'     ||\n `'        ,'    `\".'    |               |    `.        '. -.'       `'\n          /      ,'      |               |,'    \\\\-.._,.'/'\n          .     /        .               .       \\\\    .''\n        .`.    |         `.             /         :_,'.'\n          \\\\ `...\\\\   _     ,'-.        .'         /_.-'\n           `-.__ `,  `'   .  _.>----''.  _  __  /\n                .'        /\"'          |  \"'   '_\n               /_|.-'\\\\ ,\".             '.'`__'-( \\\\\n                 / ,\"'\"\\\\,'               `/  `-.|\" m\nEOC\n";
    var charlie = "##\n## KMB is God.\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n    $thoughts     ,, \uFF3F\n        \uFF0F      \uFF40\uFF64\n       /   (_\uFF89L_\uFF09 \u30FD\n      /   \xb4\u30FB \u30FB\uFF40  l\n    \uFF08l      \u3057     l\uFF09\n      l     \uFF3F\uFF3F    l\n      >  \uFF64 _      \u30A3\n    \uFF0F        \uFFE3    \u30FD\n   /  |              i\u30FD\n   |\uFF3C|              |/|\n   |  ||/\uFF3C\uFF0F\uFF3C\uFF0F\uFF3C/ | |\nEOC\n";
    var cheese = "##\n## The cheese from milk & cheese\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n      _____   _________\n     /     \\\\_/         |\n    |                 ||\n    |                 ||\n   |    ###\\\\  /###   | |\n   |     $eye  \\\\/  $eye    | |\n  /|                 | |\n / |        <        |\\\\ \\\\\n| /|                 | | |\n| |     \\\\_______/   |  | |\n| |        $tongue       | / /\n/||                 /|||\n   ----------------|\n        | |    | |\n        ***    ***\n       /___\\\\  /___\\\\\nEOC\n";
    var chessmen = "# Chessmen Lineup\n#\n# based on ASCII chess pieces from http://www.chessvariants.org/d.pieces/ascii.html\n#\n# used https://github.com/paulkaefer/connectFiles.py\n#   to \"glue\" the pieces together into one file\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts \n      $thoughts\n       $thoughts\n                                           .::.                      \n                                           _::_                      \n                                 ()      _/____\\\\_                    \n                               <~~~~>    \\\\      /                    \n                       <>_      \\\\__/      \\\\____/      <>_            \n           __/\"\"\"\\\\   (\\\\)  )    (____)     (____)    (\\\\)  )   __/\"\"\"\\\\ \n  WWWWWW  ]___ 0  }   \\\\__/      |  |       |  |      \\\\__/   ]___ 0  }  WWWWWW\n   |  |       /   }  (____)     |  |       |__|     (____)      /   }   |  |\n   |  |     /~    }   |  |      |__|      /    \\\\     |  |     /~    }   |  |\n   |__|     \\\\____/    |__|     /____\\\\    (______)    |__|     \\\\____/    |__|\n  /____\\\\    /____\\\\   /____\\\\   (______)  (________)  /____\\\\    /____\\\\   /____\\\\\n (______)  (______) (______) (________) /________\\\\ (______)  (______) (______)\n\n    __        __       __        __         __        __        __       __\n   (  )      (  )     (  )      (  )       (  )      (  )      (  )     (  )\n    ||        ||       ||        ||         ||        ||        ||       ||\n   /__\\\\      /__\\\\     /__\\\\      /__\\\\       /__\\\\      /__\\\\      /__\\\\     /__\\\\\n  (____)    (____)   (____)    (____)     (____)    (____)    (____)   (____)\nEOC\n";
    var chito = "#\n# \u3061\u30FC\u3061\u3083\u3093\n#\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n                -\u4E00     \u4E00-\n        \uFF0F                       \uFF3C\n       /             ________\n      /     -~                     \u30DF\uFF64\n      \u30EC'     _  \u4E00\uFF67i\u30A1 \uFFE2}\uFFE3Tii\u4E00- _  \uFF3C\n    \uFF0F    --::|::::/\u6597\u58EB  /   |[_V\u3044\uFF3F\uFF1E\u300D\n  \uFF0F \u30A4\u300C::::|:::Y/  \uFF72::\u30CF      \uFF68-\uFF90\u30FD\u3044\n  \uFF1C___\uFF5C:::\u3078|::|{ \u4E42-\u5915     {::\uFF44\uFF98|\u3044\n        \uFF3C\u516B |::\uFF5C             `''   \uFF8A|\n    \uFF3F --\uFF3C\u30FD|::|                  .\uFF72 \uFF98\n  \uFF0F------.\u309D|:\uFF84|        -       \u30A3:|\n  \uFF3C        \uFF1E\u30DF|`\u30FD!\uFF86  T  \uFF8C\uFFE3.\u2267\uFF5C:/\n     \u2228         |::\\/ }-/\u304F\uFF3C   /\uFF5C/ \nEOC\n";
    var clawArm = "# claw arm\n# via http://pastebin.com/1AZwKrKp\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n       X MM X\n       X MM X\n       X MM X\n       X MM X\n       + HX +\n     ,=\\$\\$XX%/-\n   =X#########\\@%-\n  ;##############=\n -###############M,\n ;##\\@\\@\\@######M\\@###=\n .+:;+:=H##\\$=:/:;H.\n - +###- \\## :###,,;\n +\\@:/%;-H##H==/::H;\n  /#\\@/-=+\\$\\$%::+H#\\$\n  \\$#%-,      ,.:##-\n -\\@/            =X%.\n %H=             -\\$;\n  =HH,         .%M;\n   /MM/       :\\@M/.\n    .:XX,   -\\$H:.\nEOC\n";
    var clippy = "# Clippy\n#\n# from http://www.reddit.com/r/commandline/comments/2lb5ij/what_is_your_favorite_ascii_art/cltg01p\n#\n$the_cow = <<EOC;\n $thoughts\n  $thoughts\n     __ \n    /  \\\\  \n    |  |\n    @  @\n    |  |\n    || |/ \n    || || \n    |\\\\_/|\n    \\\\___/\nEOC\n\n";
    var companionCube = "# Companion Cube from Portal\n# via http://pastebin.com/1AZwKrKp\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n\n +\\@##########M/             :\\@#########\\@/\n \\##############\\$;H#######\\@;+#############\n \\###############M########################\n \\##############X,-/++/+%+/,%#############\n \\############M\\$:           -X############\n \\##########H;.      ,--.     =X##########\n :X######M;     -\\$H\\@M##MH%:    :H#######\\@\n   =%#M+=,   ,+\\@#######M###H:    -=/M#%\n   %M##\\@+   .X##\\$, ./+- ./###;    +M##%\n   %####M.  /###=         \\@##M.   X###%\n   %####M.  ;M##H:.     =\\$###X.   \\$###%\n   %####\\@.   /####M\\$-./\\@#####:    %###%\n   %H#M/,     /H###########\\@:     ./M#%\n  ;\\$H##\\@\\@H:    .;\\$HM#MMMH\\$;,   ./H\\@M##M\\$=\n X#########%.      ..,,.     .;\\@#########\n \\###########H+:.           ./\\@###########\n \\##############/ ./%%%%+/.-M#############\n \\##############H\\$\\@#######\\@\\@##############\n \\##############X%########M\\$M#############\n +M##########H:            .\\$##########X=\nEOC\n";
    var cower = "##\n## A cowering cow\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n        ,__, |    | \n        ($eyes)\\\\|    |___\n        (__)\\\\|    |   )\\\\_\n         $tongue  |    |_w |  \\\\\n             |    |  ||   *\n\n             Cower....\nEOC\n";
    var cowfee = "$the_cow = <<EOC;\n   $thoughts      {\n    $thoughts  }   }   {\n      {   {  }  }\n       }   }{  {\n      {  }{  }  }\n     ( }{ }{  { )\n    .-{   }   }-.\n   ( ( } { } { } )\n   |`-.._____..-'|\n   |             ;--.\n   |   (__)     (__  \\\\\n   |   ($eyes)      | )  )\n   |    \\\\/       |/  /\n   |     $tongue      /  /\n   |            (  /\n   \\\\             y'\n    `-.._____..-'\nEOC\n";
    var cthulhuMini = "# Cthulhu\n#\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n\n      ^(;,;)^\n\nEOC\n\n";
    var cube = "# Cube\n#\n# from http://www.reddit.com/r/commandline/comments/2lb5ij/what_is_your_favorite_ascii_art/cltrase\n#   also available at https://gist.github.com/th3m4ri0/6e3f631866da31d05030\n# \n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n       ____________\n      /\\\\  ________ \\\\\n     / /\\\\ \\\\______/\\\\ \\\\\n    / / /\\\\ \\\\  / /\\\\ \\\\ \\\\\n   / / /__\\\\ \\\\/ / /\\\\ \\\\ \\\\\n  / /_/____\\\\ \\\\/_/__\\\\_\\\\ \\\\\n  \\\\ \\\\ \\\\____/ / ________ \\\\\n   \\\\ \\\\ \\\\  / / /\\\\ \\\\  / / /\n    \\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\/ / /\n     \\\\ \\\\/ / /__\\\\_\\\\/ / /\n      \\\\  / /______\\\\/ /\n       \\\\/___________/\nEOC\n\n";
    var daemon = "##\n## 4.4 >> 5.4\n##\n$the_cow = <<EOC;\n   $thoughts         ,        ,\n    $thoughts       /(        )`\n     $thoughts      \\\\ \\\\___   / |\n            /- _  `-/  '\n           (/\\\\/ \\\\ \\\\   /\\\\\n           / /   | `    \\\\\n           $eye $eye   ) /    |\n           `-^--'`<     '\n          (_.)  _  )   /\n           `.___/`    /\n             `-----' /\n<----.     __ / __   \\\\\n<----|====O)))==) \\\\) /====\n<----'    `--' `.__,' \\\\\n             |        |\n              \\\\       /\n        ______( (_  / \\\\______\n      ,'  ,-----'   |        \\\\\n      `--{__________)        \\\\/\nEOC\n";
    var dalek = "# Dalek\n# from http://www.ascii-art.de/ascii/def/dr_who.txt (accessed 4/30/2014)\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n              ___\n      D>=G==='   '.\n            |======|\n            |======|\n        )--/]IIIIII]\n           |_______|\n           C O O O D\n          C O  O  O D\n         C  O  O  O  D\n         C__O__O__O__D\nsnd     [_____________]\nEOC\n";
    var dalekShooting = "# Dalek\n# from http://www.asciiworld.com/-Robots,24-.html (accessed 4/30/2014)\n$the_cow = <<EOC;\n                                    $thoughts\n                                     $thoughts\n                                                         ____                   \n                                               [(=]|[==/   @  \\\\     \n                                                      |--------|                \n     *                                     *  .       ==========                \n.  / *    .                         *   .* . * /.     ==========                \n / /  .                      *   .    *  \\\\. * /      ||||||||||||               \n =-=-=-=-=-=-----==-=--=-=--=-=-=-=---=--= -. %%%%%%[-- ||||||||||              \n  \\\\  \\\\ .                             *  (===========[  /=========]              \n.  \\\\   *  *                          .    /  * \\\\   |==============]             \n         *                        *      *         C @ @ @ @ @ @ |D             \n        *  *                          .           /              |              \n                                         .       C  @ @ @  @ @  @ |D            \n          *                          *          /                 |             \n                                               C  @  @  @  @  @  @ |D           \n                                              /                    |            \n                                             C  @   @   @   @  @  @ |D          \n                                            /                       |           \n                                           |@@@@@@@@@@@@@@@@@@@@@@@@@|          \n                                            -------------------------           \nModified from howard1\\@vax.oxford.ac.uk\nEOC\n";
    var dockerWhale = "##\n## docker whale\n##\n$the_cow = <<EOC;\n         $thoughts\n          $thoughts\n                    ##        .\n              ## ## ##       ==\n           ## ## ## ##      ===\n       /\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\\___/ ===\n  ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n       \\______ o          __/\n         \\    \\        __/\n          \\____\\______/\n\nEOC\n";
    var doge = "##\n## Doge\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n\n           _                _\n          / /.           _-//\n         / ///         _-   /\n        //_-//=========     /\n      _///        //_ ||   ./\n    _|                 -__-||\n   |  __              - \\\\   \\\n  |  |#-       _-|_           |\n  |            |#|||       _   |  \n |  _==_                       ||\n- ==|.=.=|_ =                  |\n|  |-|-  ___                  |\n|    --__   _                /\n||     ===                  |\n |                     _. //\n  ||_         __-   _-  _|\n     \\_______/  ___/  _|\n                   --*\nEOC\n";
    var dolphin = "# dolphin (tiny)\n#\n# from http://www.chris.com/ascii/index.php?art=animals/other%20(water)\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n               ,\n             __)\\\\_  \n       (\\_.-'    a`-.\n  jgs  (/~~````(/~^^` \n\nEOC\n";
    var dragonAndCow = "##\n## A dragon smiting a cow, possible credit to kube@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n                       $thoughts                    ^    /^\n                        $thoughts                  / \\\\  // \\\\\n                         $thoughts   |\\\\___/|      /   \\\\//  .\\\\\n                          $thoughts  /O  O  \\\\__  /    //  | \\\\ \\\\           *----*\n                            /     /  \\\\/_/    //   |  \\\\  \\\\          \\\\   |\n                            \\@___\\@`    \\\\/_   //    |   \\\\   \\\\         \\\\/\\\\ \\\\\n                           0/0/|       \\\\/_ //     |    \\\\    \\\\         \\\\  \\\\\n                       0/0/0/0/|        \\\\///      |     \\\\     \\\\       |  |\n                    0/0/0/0/0/_|_ /   (  //       |      \\\\     _\\\\     |  /\n                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\\\\.-~       /   /\n                             ,-}        _      *-.|.-~-.           .~    ~\n            \\\\     \\\\__/        `/\\\\      /                 ~-. _ .-~      /\n             \\\\____($eyes)           *.   }            {                   /\n             (    (--)          .----~-.\\\\        \\\\-`                 .~\n             //__\\\\\\\\$tongue\\\\__ Ack!   ///.----..<        \\\\             _ -~\n            //    \\\\\\\\               ///-._ _ _ _ _ _ _{^ - - - - ~\nEOC\n";
    var dragon = "##\n## The Whitespace Dragon\n##\n$the_cow = <<EOC;\n      $thoughts                    / \\\\  //\\\\\n       $thoughts    |\\\\___/|      /   \\\\//  \\\\\\\\\n            /$eye  $eye  \\\\__  /    //  | \\\\ \\\\    \n           /     /  \\\\/_/    //   |  \\\\  \\\\  \n           \\@_^_\\@'/   \\\\/_   //    |   \\\\   \\\\ \n           //_^_/     \\\\/_ //     |    \\\\    \\\\\n        ( //) |        \\\\///      |     \\\\     \\\\\n      ( / /) _|_ /   )  //       |      \\\\     _\\\\\n    ( // /) '/,_ _ _/  ( ; -.    |    _ _\\\\.-~        .-~~~^-.\n  (( / / )) ,-{        _      `-.|.-~-.           .~         `.\n (( // / ))  '/\\\\      /                 ~-. _ .-~      .-~^-.  \\\\\n (( /// ))      `.   {            }                   /      \\\\  \\\\\n  (( / ))     .----~-.\\\\        \\\\-'                 .~         \\\\  `. \\\\^-.\n             ///.----..>        \\\\             _ -~             `.  ^-`  ^-_\n               ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~\n                                                                  /.-~\nEOC\n";
    var ebi_furai = "#\n# \u3048\u3073\u30D5\u30E9\u30A4\n#\n\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n      ,.,,\uFF64,..,\uFF64\uFF64.,\uFF64,\uFF64\uFF64.,_          \uFF0Fi\n    ;'`;\u3001\uFF64:\u3001..:\u3001:,:,.::\uFF40'::\uFF9E\":,'\xb4 --i\n    '\uFF64;:..: ,:.\uFF64.:',.:.::_.;..;:.\u2010'\uFF9E\n\nEOC\n";
    var elephant2 = "# Elephant\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts                                 \n      /  \\\\~~~/  \\\\         \n     (    ..     )----,      \n      \\\\__     __/      \\\\     \n        )|  /)         |\\\\    \n         | /\\\\  /___\\\\   / ^   \n          \"-|__|   |__|      \nEOC\n";
    var elephant = "##\n## An elephant out and about\n##\n$the_cow = <<EOC;\n $thoughts     /\\\\  ___  /\\\\\n  $thoughts   // \\\\/   \\\\/ \\\\\\\\\n     ((    $eye $eye    ))\n      \\\\\\\\ /     \\\\ //\n       \\\\/  | |  \\\\/ \n        |  | |  |  \n        |  | |  |  \n        |   o   |  \n        | |   | |  \n        |m|   |m|  \nEOC\n";
    var elephantInSnake = "##\n## Do we need to explain this?\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts              ....       \n           ........    .      \n          .            .      \n         .             .      \n.........              .......\n..............................\n\nElephant inside ASCII snake\nEOC\n";
    var explosion = "# Explosion\n# via http://pastebin.com/1AZwKrKp\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n            .+\n             /M;\n              H#@:              ;,\n              -###H-          -@/\n               %####\\$.  -;  .%#X\n                M#####+;#H :M#M.\n..          .+/;%#########X###-\n -/%H%+;-,    +##############/\n    .:\\$M###MH\\$%+############X  ,--=;-\n        -/H#####################H+=.\n           .+#################X.\n         =%M####################H;.\n            /@###############+;;/%%;,\n         -%###################\\$.\n       ;H######################M=\n    ,%#####MH\\$%;+#####M###-/@####%\n  :\\$H%+;=-      -####X.,H#   -+M##@-\n .              ,###;    ;      =\\$##+\n                .#H,               :XH,\n                 +                   .;-\nEOC\n";
    var eyes = "##\n## Evil-looking eyes\n##\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n                                   .::!!!!!!!:.\n  .!!!!!:.                        .:!!!!!!!!!!!!\n  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW\\$\\$\\$ \n      :\\$\\$NWX!!:           .:!!!!!!XUWW\\$\\$\\$\\$\\$\\$\\$\\$\\$P \n      \\$\\$\\$\\$\\$##WX!:      .<!!!!UW\\$\\$\\$\\$\"  \\$\\$\\$\\$\\$\\$\\$\\$# \n      \\$\\$\\$\\$\\$  \\$\\$\\$UX   :!!UW\\$\\$\\$\\$\\$\\$\\$\\$\\$   4\\$\\$\\$\\$\\$* \n      ^\\$\\$\\$B  \\$\\$\\$\\$\\\\     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$   d\\$\\$R\" \n        \"*\\$bd\\$\\$\\$\\$      '*\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$o+#\" \n             \"\"\"\"          \"\"\"\"\"\"\" \nEOC\n";
    var fatBanana = "# fatter banana\n# via https://www.reddit.com/r/cowsay/comments/3bkpwv/any_love_for_bananasay/\n$the_cow = <<EOC;\n           $thoughts\n            $thoughts\n        \"-.. __      __.='>\n         `.     \"\"\"\"\"   ,'\n           \"-..__   _.-\"\n   ~ ~~ ~ ~  ~   \"\"\"  ~~  ~\nEOC\n";
    var fatCow = "# fatter cow\n# via https://www.reddit.com/r/cowsay/comments/39htd0/with_all_this_reddit_hype_what_about_a_little/\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n\n    A__A\n   ( OO )\\\\_----__\n   (____)\\\\      )\\\\/\\\\\n        ||      |\n        ||`---w||\nEOC\n";
    var fence = "$the_cow = <<EOC;\n                          $thoughts\n                           $thoughts         __.----.___\n           ||            ||  (\\\\(__)/)-'||      ;--` ||\n          _||____________||___`($eyes)'___||______;____||_\n          -||------------||----)  (----||-----------||-\n          _||____________||___(o  o)___||______;____||_\n          -||------------||----`--'----||-----------||-\n           ||            ||     $tongue `|| ||| || ||     ||jgs\n        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\nEOC\n";
    var fire = "# Fire\n# via http://pastebin.com/1AZwKrKp\n$the_cow = <<EOC;\n      $thoughts\n       $thoughts\n                     -\\$-\n                    .H##H,\n                   +######+\n                .+#########H.\n              -\\$############\\@.\n            =H###############\\@  -X:\n          .\\$##################:  \\@#\\@-\n     ,;  .M###################;  H###;\n   ;\\@#:  \\@###################\\@  ,#####:\n -M###.  M#################\\@.  ;######H\n M####-  +###############\\$   =\\@#######X\n H####\\$   -M###########+   :#########M,\n  /####X-   =########%   :M########\\@/.\n    ,;%H\\@X;   .\\$###X   :##MM\\@%+;:-\n                 ..\n  -/;:-,.              ,,-==+M########H\n -##################\\@HX%%+%%\\$%%%+:,,\n    .-/H%%%+%%\\$H\\@###############M\\@+=:/+:\n/XHX%:#####MH%=    ,---:;;;;/%%XHM,:###\\$\n\\$\\@#MX %+;-                           .\nEOC\n";
    var flamingSheep = "##\n## The flaming sheep, contributed by Geordan Rosario (geordan@csua.berkeley.edu)\n##\n$the_cow = <<EOC;\n  $thoughts            .    .     .   \n   $thoughts      .  . .     `  ,     \n    $thoughts    .; .  : .' :  :  : . \n     $thoughts   i..`: i` i.i.,i  i . \n      $thoughts   `,--.|i |i|ii|ii|i: \n           U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.||' \n           \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)'  \n             $tongue (\\@\\@\\@\\@\\@\\@\\@\\@)    \n                `YY~~~~YY'    \n                 ||    ||     \nEOC\n";
    var fox = "# Fox\n# http://www.retrojunkie.com/asciiart/animals/foxes.htm\n$the_cow = <<EOC;\n$thoughts\n $thoughts\n   /\\\\   /\\\\   Todd Vargo\n  //\\\\\\\\_//\\\\\\\\     ____\n  \\\\_     _/    /   /\n   / * * \\\\    /^^^]\n   \\\\_\\\\O/_/    [   ]\n    /   \\\\_    [   /\n    \\\\     \\\\_  /  /\n     [ [ /  \\\\/ _/\n    _[ [ \\\\  /_/\nEOC\n";
    var ghostbusters = "##\n## Ghostbusters!\n##\n$the_cow = <<EOC;\n          $thoughts\n           $thoughts\n            $thoughts          __---__\n                    _-       /--______\n               __--( /     \\\\ )XXXXXXXXXXX\\\\v.\n             .-XXX(   $eye   $eye  )XXXXXXXXXXXXXXX-\n            /XXX(       U     )        XXXXXXX\\\\\n          /XXXXX(              )--_  XXXXXXXXXXX\\\\\n         /XXXXX/ (      O     )   XXXXXX   \\\\XXXXX\\\\\n         XXXXX/   /            XXXXXX   \\\\__ \\\\XXXXX\n         XXXXXX__/          XXXXXX         \\\\__---->\n ---___  XXX__/          XXXXXX      \\\\__         /\n   \\\\-  --__/   ___/\\\\  XXXXXX            /  ___--/=\n    \\\\-\\\\    ___/    XXXXXX              '--- XXXXXX\n       \\\\-\\\\/XXX\\\\ XXXXXX                      /XXXXX\n         \\\\XXXXXXXXX   \\\\                    /XXXXX/\n          \\\\XXXXXX      >                 _/XXXXX/\n            \\\\XXXXX--__/              __-- XXXX/\n             -XXXXXXXX---------------  XXXXXX-\n                \\\\XXXXXXXXXXXXXXXXXXXXXXXXXX/\n                  \"\"VXXXXXXXXXXXXXXXXXXV\"\"\nEOC\n";
    var ghost = "# art by Joan G. Stark, https://en.wikipedia.org/wiki/Joan_Stark\n$the_cow = <<\"EOC\";\n     $thoughts     .-.\n      $thoughts  .'   `.\n       $thoughts :g g   :\n        $thoughts: o    `.\n        :         ``.\n       :             `.\n      :  :         .   `.\n      :   :          ` . `.\n       `.. :            `. ``;\n          `:;             `:'\n             :              `.\n              `.              `.     .\n                `'`'`'`---..,___`;.-'\nEOC\n\n";
    var glados = "# GLaDOS from Portal\n# via http://pastebin.com/1AZwKrKp \n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n       \\#+ \\@      \\# \\#              M#\\@\n .    .X  X.%##\\@;# \\#   +\\@#######X. \\@#%\n   ,==.   ,######M+  -#####%M####M-    \\#\n  :H##M%:=##+ .M##M,;#####/+#######% ,M#\n .M########=  =\\@#\\@.=#####M=M#######=  X#\n :\\@\\@MMM##M.  -##M.,#######M#######. =  M\n             \\@##..###:.    .H####. \\@\\@ X,\n   \\############: \\###,/####;  /##= \\@#. M\n           ,M## ;##,\\@#M;/M#M  \\@# X#% X#\n.%=   \\######M## \\##.M#:   ./#M ,M \\#M ,#\\$\n\\##/         \\$## \\#+;#: \\#### ;#/ M M- \\@# :\n\\#+ \\#M\\@MM###M-;M \\#:\\$#-##\\$H# .#X \\@ + \\$#. \\#\n      \\######/.: \\#%=# M#:MM./#.-#  \\@#: H#\n+,.=   \\@###: /\\@ %#,\\@  \\##\\@X \\#,-#\\@.##% .\\@#\n\\#####+;/##/ \\@##  \\@#,+       /#M    . X,\n   ;###M#\\@ M###H .#M-     ,##M  ;\\@\\@; \\###\n   .M#M##H ;####X ,\\@#######M/ -M###\\$  -H\n    .M###%  X####H  .\\@\\@MM\\@;  ;\\@#M\\@\n      H#M    /\\@####/      ,++.  / ==-,\n               ,=/:, .+X\\@MMH\\@#H  \\#####\\$=\nEOC\n";
    var goat2 = "#\n#\tCodeGoat.io: https://github.com/danyshaanan/goatsay\n#\n$the_cow = <<EOC;\n        $thoughts\n         $thoughts\n          )__(\n         '|$eyes|'________/\n          |__|         |\n           $tongue||\"\"\"\"\"\"\"||\n             ||       ||\n\nEOC\n";
    var goat = "##\n## ejm97 http://www.ascii-art.de/ascii/ghi/goat.txt\n##\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts\n         $thoughts  _))\n           > $eye\\\\     _~\n           `;'\\\\\\\\__-' \\\\_\n              | )  _ \\\\ \\\\\n             / / ``   w w\n            w w\nEOC\n\n\n\n\n\n";
    var goldenEagle = "# Golden Eagle (Marquette University mascot)\n# \n$the_cow = <<EOC;\n    $thoughts                                       ,:=+++++???++?+=+=\n     $thoughts                               :+?????\\$MUUUUUUUUUMO+??~\n      $thoughts                         :+I??\\$UUUUMUMMMMUUMUMUUMUUMM???I+:\n       $thoughts                     ,+??+ZOUUMMUMMMUUUUUMUUUMUUUMUMUUMZI+?+:\n        $thoughts                 ~I?+MMUMUUUMUUUOOUMMMMMMUUUUUMMMUUUUUUMMUM$??~\n                       I?+7MMMMMUUO7?+?IUMMMMMMMMUUMUUMUUUUUUUUUUMMMUMO?I\n                    ~I?+MMMUUUO????+?IOUZ7?,.......,+\\$\\$OUMUUUUUUMUMUUUMUU+I:\n                   =??\\$UMUUU7++??????II???????=.....,?OUUMMMUUMUUUUUUUMMUUU+=\n                 +??UUMMM7??????+??+?????+??=,...\\$MUMUUUUMUUMUUUUUUUUMMUM7II??=\n               ,+?IUMMMI???III?++??+?????+~....... ......MUUMUUUUUUUUUMMU7?~\n               IIUMMM+?+?IUUUUMUUM7I?????????????I?+=:......MUUMMUMUMMMMUUU+~\n             :?+UMMU+?+?7UMMUUUZ7\\$\\$7????+++????????????=.....+UMUUUUMMMMMMUZ?\n             ?+UMUM???+MMMMMU?++???????????++????????++????....OMMMUMMMMUMMUI:\n            +\\$MMUM?+?ZMMU:\\$MM???OUUU+??+???+????????????????,...UMUMUUUUMMUMM?~\n            IUUUU?I?OUUU,..UU?IMMUUMUUI???+?????????????????I,..:UUMUUUUMMUMU?+\n            ?UUUMUM\\$UMUU~..UUUUU\\$,IUUUMM7+?????????????????+?I~..UUUUUUUMMMUU+?\n            ?OUMUUUUMMUI+.?UUUU=...~UMMUU\\$?????+???????????????..MUMUUUUUMUMU??\n           :??IUUMMUMUMMOMUU7........OUUUMMU?I????????????????I..MUMUUUUMUUMU?+\n         +IIUMUO.IUUUUUUO..............?UMUMUM7??????????????+?..UUMUUUUMUUMU?=\n       ,IZMMU,.:UU7:..........,UUUMUZ....MUUMMO+???????????????..UUUUUUUUUUU?:\n       IZUUU:..UUUI=....... IUUUUUMMUZ,.MMUMU$?+???????????????.MUUMUUUUMUMUI\n     ,+IUUM..O=..........\\$UUMMMUU?~....UMMUUI?????????????????=.UMMUUUUUMMU?+\n     +?UMU~............OUMMUU~..... .UUMUMM+?????????????????=.UMMUMUMUUMOI=\n     ?\\$MU~...    ...:MUMU=~........,UUMMMUI+????????????????+IUMMMUUUUMUU?+\n     +OMU....   ...?UMU=..:~~,.....MMMUUU+?+????????????????~MMUUUUMUMMU?+~   \n     ?OMU~ .. ...?UMUUUMUMUMUMUMUUUMUUMUI???????????????+?+OUUMUUMMMMUIUUUMO,\n     ??UMU~.....\\$MUUUOM???UMMUUUMMMUUMM7?++????????????++OMMMUMUUMMUI??UMIU+~\n     :?7UUU\\$...UMMM?I~,  +?MMUUMMMMMMUU?????????????+??\\$UMMMMUUUMU\\$?: ,??I?:\n       ?IMUMUUZMU+?,      =?UMMMMMMMMO??????????????+UMUMMUMUMUU?I~\n        ?+\\$MUMUMU??        ?MMMMMMMMU??+???????????IUMMMUUUMUUZ?=\n          ,+???ZUO?~       +ZUMMUMUMU???++??+???IUMMUMUMMUUO??~\n               ,,:~=       ,?UMUMUMU???+??+?+?7UMUMUMUMUI??:\n                            ?UMUMMMM?+??++?ZUUMUMUMUZ++?,                  \n                            ?UMMMMMO+???MMUMUMUMUMOII=,                       \n                            ?UUUMUUZOMUUMUMMUMM+??=\n                            ?UMMUMMUUUMUMM\\$???~\n                           ,?UMUUMUUU\\$?+?~:                                  \n                           :IUUUM?+?I=:                                  \n                           ????~,\nEOC\n";
    var hand = "##\n## \u3053\u308C\u304C\u79C1\u306E\u672C\u5F53\u306E\u59FF\u3060\uFF01\n##  \n##\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts\n                           __ \n                  l^\u30FD    /  }    _\n                  |  |   /  /   \uFF0F  )\n                  |  |  /  /  \uFF0F  \uFF0F _\n                  j. \u3057'  / \uFF0F  \uFF0F \uFF0F  )\n                 /  .\uFF3F__ \xb4  \uFF0F \uFF0F  \uFF0F\n                /   {  /:\uFF40\u30FD \uFF40\xa8 \uFF0F\n               /     \u2228::::::\uFF8A   \uFF0F\n              |\u5EF4     \uFF3C:::\u30CE}  /\n    {\uFFE3\uFFE3\uFFE3\uFFE3\u30FD  \u5EF4     \uFF40\u30FC'  \u30FC-\uFF64\n    \u30FD \uFF3F\uFF3F_   \uFF3C \u5EF4        \uFF3F\uFF3F\uFF3F\uFF89\n        \uFF0F       \uFF3C \u8FB7_\xb4\uFFE3\n      \uFF0F           \uFF8D\uFFE3\n    \uFF0F             ,\uFF8D\n                  /\u3001\uFF8D\n                 /\uFF3C__\uFF89\nEOC\n\n";
    var happyWhale = "# happy whale\n#\n# modified from http://www.chris.com/ascii/index.php?art=animals/other%20(water)\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n     $thoughts\n        __ \\ / __\n       /  \\\\ | /  \\\\\n           \\\\|/\n       _.---v---.,_\n      /            \\\\  /\\\\__/\\\\\n     /              \\\\ \\\\_  _/\n     |__ @           |_/ /\n      _/                / \n      \\\\       \\\\__,     /  \n   ~~~~\\\\~~~~~~~~~~~~~~`~~~\n\nEOC\n";
    var hedgehog = "##\n## A cute little hedgehog\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts ..:::::::::.\n    ::::::::::::::\n   /. `::::::::::::\n  O__,_:::::::::::'\nEOC\n";
    var hellokitty = "##\n## Hello Kitty\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n      /\\\\_)o<\n     |      \\\\\n     | $eye . $eye|\n      \\\\_____/\n         $tongue\nEOC\n";
    var hippie = "$the_cow = <<EOC;\n                       $thoughts              ___\n                        $thoughts            ///\\\\\\\\\\\\/----\n                         $thoughts           ||//\\\\///\\\\\\\\\\\\\\\\\n                          $thoughts         /`-.__\\\\\\\\\\\\\\\\///|\n                           $thoughts       /_  _   `--._|\n                               ___-`---.___     |\n                          ----------       `-.__|\n                       ----------( \\\\.-.$eye $eye;_  \\\\\\\\\\\\\\\\\\\\\\\\\n                      ------------| `-'-.(_)--/\\\\\\\\\\\\\\\\\\\\\n                     /////------//|   `-'       )\\\\\\\\\\\\\\\\\\\\\\\\\n                     /////------///\\\\  `--'\\\\  /\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n                     ////--------///\\\\  `-' /\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\   .-.  _\n                      //////------////>---'\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  | | / )\n        _              ////////////// |__| )\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  | |/ /\n       / `.       _    ////////.-'  >\\\\    <-._.--.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  _|__ /_\n      (    \\\\  . .' )    /////// ( .- (    )() ( )_)\\\\\\\\\\\\\\\\\\\\\\\\\\\\  / __)-' )\n       `-   | |/          //// ( ) ( )|--'() ( ) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\   \\\\  `(.-')\n          .---/ _()        /// ( ) () |  /() ( )  \\\\\\\\\\\\\\\\\\\\\\\\     > ._>-'\n        ()+8 8 |            |  ( )( ) | /( ) ( )   \\\\        / \\\\/\n        ()+8 8/-()__        /  ( )( ) \\\\/ ( ) ( )\\\\   \\\\      /\\\\ /\n          |8 8|     `.     |   () ( ).--.( ) ( )-\\\\   \\\\    /   |\n        ()+||||-() (_/    _/   /| ()/ || \\\\ )  ()()\\\\   \\\\__/   /\n        .-`||||          /\\\\\\\\  / / ()|/  \\\\ ()     \\\\ `.  /|   |\n       (_  ||||        .'   _/-/  ()\\\\/||\\\\/()     \\\\-. \\\\     /\n           ||( \\\\_    .'    ( )/  ( ) `--' ( )     > ) `.  /\n        .--|_|\\\\_ \\\\ .'    .'( )_  ( )-.___.-( )  (  )    \"\"\n        `.__)-.( /.'\\\\  .'   (  )'_)-.______( ).-')'\n          (___)|  \\\\ .-'      `--'`-._.---._.(_))-'\n          (__)|| +-)'           |   /_.--.\\\\    |\n          (__)||-'              `._|`-'  ) )  _|\n            |||||                |  `.`-'.'--' /\n            |||||               .'    | |   .\\\\|\n            |||||             .'   _.-|_|     \\\\\n            |||||            /   .'.-'  \\\\\\\\     |\n            ||||||         .'     /      \\\\     \\\\\n             |||||        /     .'        \\\\     \\\\\n             |||||      .'     /           |    |\n            _|||||----./     .'            \\\\     \\\\\n         .-' |||||   `/     /               \\\\    |\n       .'     |||||   (    /                |    |\n      /       |||||   |    |\\\\                \\\\   |\n      |     .'|||||.  |    ||                |    )\n       \\\\    | |||||\\\\  |    |/                |    \\\\\n        \\\\   | ||||||  |    |                 /    |\n        |    `.||||' /     |                |     \\\\\n        |      ||||  |     \\\\                |      |\n        /      ||||| |      |\\\\             /       |\n       /       |||||_/      | \\\\            |        \\\\\n      /      ------'|       |  |           |        |\n     |      |___.---|        \\\\ |           /        |\n     |             /         | |          |         \\\\\n     |             |         \\\\/           |          |\n     |             /          |           |          |\n      \\\\           |           |           |          |\n       `.        /             \\\\          |           \\\\\n         `--.___`-_            |_         |           |\n           .-.__.-''-,_         -         |           \\\\_'\n          <`.         '.-//|-/``        (_)          _.-'\n           `._-.____.-'.|   /            '//, ,\\\\.-'`` |--.\n              `-.____.' |__/               '''\\\\      -'/ |\n                                               `.   _.// |\n                                                 `-.__.-'\n\nVK\nEOC\n";
    var hiya = "$the_cow = <<EOC;\n           $thoughts     (      )\n            $thoughts    ~(^^^^)~\n             $thoughts    ) $eyes \\\\~_          |\\\\\n              $thoughts  /     | \\\\        \\\\~ /\n                ( 0  0  ) \\\\        | |\n                 ---___/~  \\\\       | |\n                  /'__/ |   ~-_____/ |\n   o          _   ~----~      ___---~\n     O       //     |         |\n            ((~\\\\  _|         -|\n      o  O //-_ \\\\/ |        ~  |\n           ^   \\\\_ /         ~  |\n                  |          ~ |\n                  |     /     ~ |\n                  |     (       |\n                   \\\\     \\\\      /\\\\\n                  / -_____-\\\\   \\\\ ~~-*\n                  |  /       \\\\  \\\\       .==.\n                  / /         / /       |  |\n                /~  |      //~  |       |__|         W<\n                ~~~~        ~~~~\nEOC\n";
    var hiyoko = "##\n## \u3072\u3088\u5B50\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n    $thoughts\n      ,\uFF64 ,._\n      \uFF89 \u30FB  \u30FD\n     / :::   i  \n    / :::    \uFF9E\uFF64\n   ,i:::       `\uFF70-\uFF64\n   |:::           i\n   !::::..        \uFF89\n    `\u30FC\u2015\u2015\u2015\u2015'\" \nEOC\n";
    var homer = "# Homer Simpson\n#\n# from http://www.reddit.com/r/textfiles/comments/2s9ybk/random_ascii_art/\n#\n$the_cow = <<EOC;\n            $thoughts\n             $thoughts                __ \n                   _ ,___,-'\",-=-. \n       __,-- _ _,-'_)_  (\"\"`'-._\\\\ `. \n    _,'  __ |,' ,-' __)  ,-     /. | \n  ,'_,--'   |     -'  _)/         `\\\\ \n,','      ,'       ,-'_,`           : \n,'     ,-'       ,(,-(              : \n     ,'       ,-' ,    _            ; \n    /        ,-._/`---'            / \n   /        (____)(----. )       ,' \n  /         (      `.__,     /\\\\ /, \n :           ;-.___         /__\\\\/| \n |         ,'      `--.      -,\\\\ | \n :        /            \\\\    .__/ \n  \\\\      (__            \\\\    |_ \n   \\\\       ,`-, *       /   _|,\\\\ \n    \\\\    ,'   `-.     ,'_,-'    \\\\ \n   (_\\\\,-'    ,'\\\\\")--,'-'       __\\\\ \n    \\\\       /  // ,'|      ,--'  `-. \n     `-.    `-/ \\\\'  |   _,'         `. \n        `-._ /      `--'/             \\\\ \n-hrr-      ,'           |              \\\\ \n          /             |               \\\\ \n       ,-'              |               / \n      /                 |             -'\nEOC\n";
    var hypno = "$the_cow =<<\"EOC\"\n  $thoughts\n     ___        _--_\n    /    -    /     \\\\\n   ( $eyes   \\\\  (    $eyes )\n   |  $eyes _;\\\\-/|  $eyes _|\n    \\\\___/######\\\\___/\\\\\n      /##############\\\\\n     /  ######   ##  #|\n    /  ##@##@##       |\n   /    ######     ##  \\\\\n <______-------___\\\\  . //_\n    |       ____  | | //# \\\\__~__\n     \\\\      $tongue    \\\\  //###  \\\\   \\\\\n      |             /\\'  ##  ##  ##\\\\   __--~--_\n       \\\\_________- /\\\\ )    ^     ##|--########\\\\\n  /--~-_\\\\________/_  |          #@##|#######Y##|\n | \\\\ `  /|       /O/ ( ###  \\')    ##/######/###/\n \\\\  \\\\  | |       --  |  ###        /LLLLL--###/\n  \\\\_ \\\\/  |            \\\\_   \\\\    ) /####_____--\n ___ /    \\\\           /     |   _-####\\\\\n(___/     -\\\\_________/     / -- |#####@@@@@@\\'_\n (__\\\\_      __,) (.___     ,/    /#####      `@@\n      | -\\\\\\\\-          //-//      @@  @@@@@.\n      | | \\\\\\\\_       _// //      @\\'       \\'@@.\n      (.)   \\\\_)    / / //                   @@@\n                  (_) (_\\'\nEOC\n";
    var ibm = "#\n# International Business Machines\n#\n\n$the_cow = << EOC;\n  $thoughts\n   $thoughts\n\n\u25A0\u25A0\u25A0\u25A0\u25A0   \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0     \u25A0\u25A0\u25A0\u25A0\u25A0       \u25A0\u25A0\u25A0\u25A0\u25A0\n\u25A0\u25A0\u25A0\u25A0\u25A0   \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0   \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0     \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\n \u25A0\u25A0\u25A0     \u25A0\u25A0\u25A0   \u25A0\u25A0\u25A0    \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0   \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\n \u25A0\u25A0\u25A0     \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0     \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0 \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\n \u25A0\u25A0\u25A0     \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0     \u25A0\u25A0\u25A0 \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0 \u25A0\u25A0\u25A0\n \u25A0\u25A0\u25A0     \u25A0\u25A0\u25A0   \u25A0\u25A0\u25A0    \u25A0\u25A0\u25A0  \u25A0\u25A0\u25A0\u25A0\u25A0  \u25A0\u25A0\u25A0\n\u25A0\u25A0\u25A0\u25A0\u25A0   \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0   \u25A0\u25A0\u25A0\u25A0   \u25A0\u25A0\u25A0   \u25A0\u25A0\u25A0\u25A0\n\u25A0\u25A0\u25A0\u25A0\u25A0   \u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0\u25A0     \u25A0\u25A0\u25A0\u25A0    \u25A0    \u25A0\u25A0\u25A0\u25A0\nEOC\n";
    var iwashi = "##\n## \u3044\u308F\u3057\n##  \n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n         \uFF3F\uFF3F\uFF3F\uFF3F \uFF3F\uFF3F\uFF3F\uFF3F\uFF3F__\n      \uFF68''  \uFF20 :. ,! \uFF0C\uFF0C \uFF0C \uFF0C\uFFE3\uFFE3 \xa8` \u2010-            \uFF3F\uFF3F\n       \uFF3C    \u30CE   i            \u2019 \u2019\u2019 \u2019\u2019\uFF64_;:`:\u2010.-_-\u2010\u30CB\uFF1D=\u5F73\n         \uFF40 \uFF1C. _  .\uFF70 \uFF64                       !\u4E09  \uFF1C\n                 \uFF40\xa8  \u2010= . \uFF3F\uFF3F\uFF3F_.. \uFF86=-\u2010\u2010`'\xb4\uFF40\uFF90\uFF64   \u4E09\uFF1E\n                                                 \uFFE3\uFFE3\nEOC\n";
    var jellyfish = "# jellyfish\n#\n# from http://ascii.co.uk/art/jellyfish\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n\n         .-;\\':\\':\\'-.\n        {\\'.\\'.\\'.\\'.\\'.}\n         )        \\'`.\n        \\'-. ._ ,_.-=\\'\n          `). ( `);(\n          (\\'. .)(,\\'.)\n           ) ( ,\\').(\n          ( .\\').\\'(\\').\n          .) (\\' ).(\\'\n           '  ) (  ).\n            .\\'( .)\\'\n              .).\\'\njgs\n\nEOC\n";
    var karl_marx = "##\n## Karl Marx\n##  \n##\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts\n                   ,\u2015\u30FE\u30FD\u30FD/\uFF56\u3078\uFF0F\u2312\u30FC\n                , \u2312\u30FD \u30FD \u30FD / \uFF0F \u30CE  \u2312\u30FD\u3001\n              / \uFF0F\u30FE,\u309E -\u309E\u309E\u309E\uFF64_ \u2312  \u30CE \u30FD\n            \uFF0F  \uFF0F            `\u30FE  \u30FC   \u30DF\u30FD\n          ,/   /                   \u30FE \uFF3C  \u30FD\uFF90\n         /    /                      \u309E      \u30FD\n         i   /                       /      \uFF3C\n        /    -=\uFF86\u30FD\uFF64,_  ,,,,;r;==-     \u30FE  \u30FE\u30DF \u30FD\n        | ;: `\u309E\uFF82\u30FD\u3009^`\u30FE\u3060'=-\uFF64_        i    \u5F61 \u30FD\n        i ,   /::::/     `'''\"\"\"        \uFF89  \u309E \u30FE \u30FD\n        } ;  |    \u4EBA\uFF64,;-,'^            /    \u304F\u30FE  \uFF09\n        /    \u5F61\u30CE\u30CE\u30CE\uFF89\uFF89\uFF89(((((        \uFF0F\uFF8D\u30DF        /\n       /     /\uFF89\uFF89\uFF89\uFF89\uFF89,.-\u2015\u30DF\u30FD\u30FE\u30FE\u30FE\u30FE\u30FE\u30FE     _\u30CE`\uFF70'\"\n      ,i          -\u30FC\u2010 `\u309E           \u30FD   \u30FD\n      \u5F61\u5F61                        \u30DF       \u30FD\n''\"\"\uFFE3\u5F61      /   /   /   /            \u30DF   \uFF82\uFF3C\n      \uFF1C    /   /   /   /        \u30FE   \u30FE  \u30CE\uFF89\uFF89\n        '\u2015\u5F61                         \uFF52\u30FC'\"\n            \u30FE\u30CE\u4EBA,,.r--\uFF64\u30CE\u30CE\u30CE\u30CE\u30CE\u308A'\"\nEOC\n";
    var kilroy = "# Kilroy\n# from http://www.ascii-art.de/ascii/jkl/kilroy.txt (accessed 8/14/2014)\n$the_cow = <<EOC;\n     $thoughts \n      $thoughts\n           ,,,\n          (0 0)\n   +---ooO-(_)-Ooo---+\n   |                 |\nEOC\n\n";
    var king = "# King (Chess piece)\n#\n# from http://www.chessvariants.org/d.pieces/ascii.html\n#   by David Moeser\n#\n$the_cow = <<EOC;\n $thoughts\n  $thoughts\n    .::.\n    _::_\n  _/____\\\\_\n  \\\\      /\n   \\\\____/\n   (____)\n    |  |\n    |__|\n   /    \\\\\n  (______)\n (________)\n /________\\\\\nEOC\n";
    var kiss = "##\n## A lovers' empbrace\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n             ,;;;;;;;,\n            ;;;;;;;;;;;,\n           ;;;;;'_____;'\n           ;;;(/))))|((\\\\\n           _;;((((((|))))\n          / |_\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n     .--~(  \\\\ ~))))))))))))\n    /     \\\\  `\\\\-(((((((((((\\\\\\\\\n    |    | `\\\\   ) |\\\\       /|)\n     |    |  `. _/  \\\\_____/ |\n      |    , `\\\\~            /\n       |    \\\\  \\\\           /\n      | `.   `\\\\|          /\n      |   ~-   `\\\\        /\n       \\\\____~._/~ -_,   (\\\\\n        |-----|\\\\   \\\\    ';;\n       |      | :;;;'     \\\\\n      |  /    |            |\n      |       |            |\nEOC\n";
    var kitten = "# Kitten\n#\n# based on rfksay by Andrew Northern\n# http://robotfindskitten.org/aw.cgi?main=software.rfk#rfksay\n#\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n\n     |\\\\_/|\n     |o o|__\n     --*--__\\\\\n     C_C_(___)\nEOC\n";
    var kitty = "##\n## A kitten of sorts, I think\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n       (\"`-'  '-/\") .___..--' ' \"`-._\n         ` $eye_ $eye  )    `-.   (      ) .`-.__. `)\n         (_Y_.) ' ._   )   `._` ;  `` -. .-'\n      _.. `--'_..-_/   /--' _ .' ,4\n   ( i l ),-''  ( l i),'  ( ( ! .-'    \nEOC\n";
    var knight = "# Knight (Chess piece)\n#\n# from http://www.chessvariants.org/d.pieces/ascii.html\n#   by David Moeser\n#\n$the_cow = <<EOC;\n $thoughts\n  $thoughts\n  __/\"\"\"\\\\\n ]___ 0  }\n     /   }\n   /~    }\n   \\\\____/\n   /____\\\\\n  (______)\nEOC\n";
    var koala = "##\n## From the canonical koala collection\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n       ___  \n     {~$eye_$eye~}\n      ( Y )\n     ()~*~()   \n     (_)-(_)   \nEOC\n";
    var kosh = "##\n## It's a Kosh Cow!\n##\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n      $thoughts\n  ___       _____     ___\n /   \\\\     /    /|   /   \\\\\n|     |   /    / |  |     |\n|     |  /____/  |  |     |     \n|     |  |    |  |  |     |\n|     |  | {} | /   |     |\n|     |  |____|/    |     |\n|     |    |==|     |     |\n|      \\\\___________/      |\n|                         |\n|                         |\nEOC\n";
    var lamb2 = "$the_cow = <<EOC;\n $thoughts\n  $thoughts\n  ,-''''-.\n (.  ,.   L        ___...__\n /$eye} ,-`  `'-==''``        ''._\n//{                           '`.\n\\\\_,X ,                         : )\n $tongue 7                          ;`\n    :                  ,       /\n     \\\\_,                \\\\     ;\n       Y   L_    __..--':`.    L\n       |  /| ````       ;  y  J\n       [ j J            / / L ;\n       | |Y \\\\          /_J  | |\n       L_J/_)         /_)   L_J\n      /_)               sk /_)\nEOC\n";
    var lamb = "$the_cow = <<EOC;\n                 $thoughts\n                  $thoughts  _,._\n                 __.'   _)\n                <_,)'.-\"$eye\\\\\n                  /' (    \\\\\n      _.-----..,-'   (`\"--^\n     //              |   $tongue\n    (|   `;      ,   |  \n      \\\\   ;.----/  ,/ \n       ) // /   | |\\\\ \\\\\n       \\\\ \\\\\\\\`\\\\   | |/ /\n        \\\\ \\\\\\\\ \\\\  | |\\\\/\nEOC\n";
    var lightbulb = "# lightbulb\n# via http://pastebin.com/1AZwKrKp\n$the_cow = <<EOC;\n$thoughts\n $thoughts\n         ,=;%\\$%%\\$X%%%%;/%%%%;=,\n     ,/\\$\\$+:-                -:+\\$\\$/,\n   :X\\$=                          =\\$X:\n ;M%.                              .%M;\n+#/                                  /#+\n\\##                                    M#\nH#,                     =;+/;,       ,#X\n.HM-       :\\@X+%H:   .%M%- .M#.     -M\\@.\n  /#%.     \\@#-  ,H\\@--MH, .;\\@\\$-    .%#+\n   .\\$M;    .+\\@X;, MM#\\@:/\\$X;.     ;M\\$,\n     =\\@H,     ,:+%H#M%;-       ,H\\@=\n      .\\$#;        -#H         =#\\$\n        %#;        \\#M        ;#%\n         H#-       \\##       -#H\n         ;#+       \\##       +#;\n          ;H+;;;;;;HH;;;;;;+H/\n           =H#\\@HHHHHHHHHH\\@#H=\n           =\\@#H%%%%%%%\\$HH\\@#\\@=\n           =\\@#X%%%%%%%\\$M###\\@=\n               =+%XHHX%+=\nEOC\n";
    var lobster = "# Lobster\n#   lobster jgs   10/96\n#   http://ascii.co.uk/art/lobster\n$the_cow = <<EOC;\n             $thoughts\n              $thoughts\n                             ,.---._\n                   ,,,,     /       `,\n                    \\\\\\\\\\\\\\\\   /    '\\\\_  ;\n                     |||| /\\\\/``-.__\\\\;'\n                     ::::/\\\\/_\n     {{`-.__.-'(`(^^(^^^(^ 9 `.========='\n    {{{{{{ { ( ( (  (   (-----:=\n     {{.-'~~'-.(,(,,(,,,(__6_.'=========.\n                     ::::\\\\/\\\\\n                     |||| \\\\/\\\\  ,-'/,\n                    ////   \\\\ `` _/ ;\n                   ''''     \\\\  `  .'\n                             `---'\nEOC\n";
    var lollerskates = "# LOLLERSKATES\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n        /\\\\O\n         /\\\\/\n        /\\\\\n       /  \\\\\n      LOL LOL\n:-D LOLLERSKATES :-D\nEOC\n";
    var lukeKoala = "##\n## From the canonical koala collection\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts          .\n       ___   //\n     {~$eye_$eye~}// \n      ( Y )K/  \n     ()~*~()   \n     (_)-(_)   \n     Luke    \n     Skywalker\n     koala   \nEOC\n";
    var mailchimp = "# MailChimp\n#\n# view-source:http://mailchimp.com/\n$the_cow = <<EOC;\n$thoughts\n $thoughts\n    ______\n   / ___M ]__\nC{ ( o o )}\n    {     \u2022\u2022\n      \\\\___\n      ----\xb4\nEOC\n";
    var mazeRunner = "# maze-runner.cow\n#\n#   a guy running through an ASCII maze\n#   found at http://pip.readthedocs.org/en/user_builds/pip/rtd-builds/latest/installing/\n#\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n      $thoughts\n       \\\\\n        \\\\\n         \\\\\n    \\\\     \\\\                     /\n     \\\\     \\\\                   /\n      \\\\     \\\\                 /\n       ]     \\\\               [    ,'|\n       ]      \\\\              [   /  |\n       ]___               ___[ ,'   |\n       ]  ]\\\\             /[  [ |:   |\n       ]  ] \\\\           / [  [ |:   |\n       ]  ]  ]         [  [  [ |:   |\n       ]  ]  ]__     __[  [  [ |:   |\n       ]  ]  ] ]\\\\ _ /[ [  [  [ |:   |\n       ]  ]  ] ] (#) [ [  [  [ :===='\n       ]  ]  ]_].nHn.[_[  [  [\n       ]  ]  ]  HHHHH. [  [  [\n       ]  ] /   `HH(\"N  \\\\ [  [\n       ]__]/     HHH  \"  \\\\[__[\n       ]         NNN         [\n       ]         N/\"         [\n       ]         N H         [\n      /          N            \\\\\n     /           q,            \\\\\n    /                           \\\\\nEOC\n\n";
    var mechAndCow = "$the_cow = <<EOC;\n      $thoughts                            |     |\n       $thoughts                        ,--|     |-.\n                         __,----|  |     | |\n                       ,;::     |  `_____' |\n                       `._______|    i^i   |\n                                `----| |---'| .\n                           ,-------._| |== ||//\n                           |       |_|P`.  /'/\n                           `-------' 'Y Y/'/'\n                                     .==\\ /_\\\n   ^__^                             /   /'|  `i\n   ($eyes)\\_______                   /'   /  |   |\n   (__)\\       )\\/\\             /'    /   |   `i\n    $tongue ||----w |           ___,;`----'.___L_,-'`\\__\n       ||     ||          i_____;----\\.____i\"\"\\____\\\nEOC\n";
    var meow = "##\n## A meowing tiger?\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts ,   _ ___.--'''`--''//-,-_--_.\n      \\\\`\"' ` || \\\\\\\\ \\\\ \\\\\\\\/ / // / ,-\\\\\\\\`,_\n     /'`  \\\\ \\\\ || Y  | \\\\|/ / // / - |__ `-,\n    /\\$eye\"\\\\  ` \\\\ `\\\\ |  | ||/ // | \\\\/  \\\\  `-._`-,_.,\n   /  _.-. `.-\\\\,___/\\\\ _/|_/_\\\\_\\\\/|_/ |     `-._._)\n   `-'``/  /  |  // \\\\__/\\\\__  /  \\\\__/ \\\\\n    $tongue  `-'  /-\\\\/  | -|   \\\\__ \\\\   |-' |\n          __/\\\\ / _/ \\\\/ __,-'   ) ,' _|'\n         (((__/(((_.' ((___..-'((__,'\nEOC\n";
    var milk = "##\n## Milk from Milk and Cheese\n##\n$the_cow = <<EOC;\n $thoughts     ____________ \n  $thoughts    |__________|\n      /           /\\\\\n     /           /  \\\\\n    /___________/___/|\n    |          |     |\n    |  ==\\\\ /== |     |\n    |   $eye   $eye  | \\\\ \\\\ |\n    |     <    |  \\\\ \\\\|\n   /|          |   \\\\ \\\\\n  / |  \\\\_____/ |   / /\n / /|    $tongue    |  / /|\n/||\\\\|          | /||\\\\/\n    -------------|   \n        | |    | | \n       <__/    \\\\__>\nEOC\n";
    var minotaur = "$the_cow = <<\"EOC\";\n        $thoughts   ^__^\n         $thoughts  ($eyes)\n            (__)\n           /-||-\\\\\n           \\\\|\\\\/|/\n            o==o \n            ||||\n            ()()\nEOC\n";
    var monaLisa = "# Mona Lisa\n#\n# from http://www.heartnsoul.com/ascii_art/mona_lisa_ascii.htm\n$the_cow = <<EOC;\n          $thoughts\n           $thoughts\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!>''''''<!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!'''''`             ``'!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!''`          .....         `'!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!'`      .      :::::'            `'!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!'     .   '     .::::'                `!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!'      :          `````                   `!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!        .,cchcccccc,,.                       `!!!!!!!!!!!!\n!!!!!!!!!!!!!!!     .-\"?\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$c,                      `!!!!!!!!!!!\n!!!!!!!!!!!!!!    ,ccc\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$,                     `!!!!!!!!!!\n!!!!!!!!!!!!!    z\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$;.                    `!!!!!!!!!\n!!!!!!!!!!!!    <\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$:.                    `!!!!!!!!\n!!!!!!!!!!!     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$h;:.                   !!!!!!!!\n!!!!!!!!!!'     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$h;.                   !!!!!!!\n!!!!!!!!!'     <\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$                   !!!!!!!\n!!!!!!!!'      `\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$F                   `!!!!!!\n!!!!!!!!        c\\$\\$\\$\\$???\\$\\$\\$\\$\\$\\$\\$P\"\"  \"\"\"??????\"                      !!!!!!\n!!!!!!!         `\"\" .,.. \"\\$\\$\\$\\$F    .,zcr                            !!!!!!\n!!!!!!!         .  dL    .?\\$\\$\\$   .,cc,      .,z\\$h.                  !!!!!!\n!!!!!!!!        <. \\$\\$c= <\\$d\\$\\$\\$   <\\$\\$\\$\\$=-=+\"\\$\\$\\$\\$\\$\\$\\$                  !!!!!!\n!!!!!!!         d\\$\\$\\$hcccd\\$\\$\\$\\$\\$   d\\$\\$\\$hcccd\\$\\$\\$\\$\\$\\$\\$F                  `!!!!!\n!!!!!!         ,\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$h d\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$                   `!!!!!\n!!!!!          `\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$<\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$'                    !!!!!\n!!!!!          `\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\"\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$P>                     !!!!!\n!!!!!           ?\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$??\\$c`\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$?>'                     `!!!!\n!!!!!           `?\\$\\$\\$\\$\\$\\$I7?\"\"    ,\\$\\$\\$\\$\\$\\$\\$\\$\\$?>>'                       !!!!\n!!!!!.           <<?\\$\\$\\$\\$\\$\\$c.    ,d\\$\\$?\\$\\$\\$\\$\\$F>>''                       `!!!\n!!!!!!            <i?\\$P\"??\\$\\$r--\"?\"\"  ,\\$\\$\\$\\$h;>''                       `!!!\n!!!!!!             \\$\\$\\$hccccccccc= cc\\$\\$\\$\\$\\$\\$\\$>>'                         !!!\n!!!!!              `?\\$\\$\\$\\$\\$\\$F\"\"\"\"  `\"\\$\\$\\$\\$\\$>>>''                         `!!\n!!!!!                \"?\\$\\$\\$\\$\\$cccccc\\$\\$\\$\\$??>>>>'                           !!\n!!!!>                  \"\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$F>>>>''                            `!\n!!!!!                    \"\\$\\$\\$\\$\\$\\$\\$\\$???>'''                                !\n!!!!!>                     `\"\"\"\"\"                                        `\n!!!!!!;                       .                                          `\n!!!!!!!                       ?h.\n!!!!!!!!                       \\$\\$c,\n!!!!!!!!>                      ?\\$\\$\\$h.              .,c\n!!!!!!!!!                       \\$\\$\\$\\$\\$\\$\\$\\$\\$hc,.,,cc\\$\\$\\$\\$\\$\n!!!!!!!!!                  .,zcc\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\n!!!!!!!!!               .z\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\n!!!!!!!!!             ,d\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$          .\n!!!!!!!!!           ,d\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$         !!\n!!!!!!!!!         ,d\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$        ,!'\n!!!!!!!!>        c\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$.       !'\n!!!!!!''       ,d\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$>       '\n!!!''         z\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$>\n!'           ,\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$>             ..\n            z\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$'           ;!!!!''`\n            \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$F       ,;;!'`'  .''\n           <\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$>    ,;'`'  ,;\n           `\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$F   -'   ,;!!'\n            \"?\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$?\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$F     .<!!!'''       <!\n         !>    \"\"??\\$\\$\\$?C3\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\"\"     ;!'''          !!!\n       ;!!!!;,      `\"''\"\"????\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\"\"   ,;-''               ',!\n      ;!!!!<!!!; .                `\"\"\"\"\"\"\"\"\"\"\"    `'                  ' '\n      !!!! ;!!! ;!!!!>;,;, ..                  ' .                   '  '\n     !!' ,;!!! ;'`!!!!!!!!;!!!!!;  .        >' .''                 ;\n    !!' ;!!'!';! !! !!!!!!!!!!!!!  '         -'\n   <!!  !! `!;! `!' !!!!!!!!!!<!       .\n   `!  ;!  ;!!! <' <!!!! `!!! <       /\n  `;   !>  <!! ;'  !!!!'  !!';!     ;'\n   !   !   !!! !   `!!!  ;!! !      '  '\n  ;   `!  `!! ,'    !'   ;!'\n      '   /`! !    <     !! <      '\n           / ;!        >;! ;>\n             !'       ; !! '\n          ' ;!        > ! '\n\nEOC\n";
    var moofasa = "##\n## MOOfasa.\n##\n$the_cow = <<EOC;\n       $thoughts    ____\n        $thoughts  /    \\\\\n          | ^__^ |\n          | ($eyes) |______\n          | (__) |      )\\\\/\\\\\n           \\\\____/|----w |\n                ||     ||\n\n\t         Moofasa\nEOC\n";
    var mooghidjirah = "$the_cow = <<EOC;\n $thoughts       $thoughts      $thoughts      \n  $thoughts        ^__^  $thoughts        \n    ^__^   ($eyes)   ^__^  \n    ($eyes)   (__)   ($eyes)   \n    (__)    $tongue    (__)   \noyo/:$tongue            $tongue:/oy+\n/mmmmm+   syyyyo  `ommmmm/\n smmmmms. -ymmy. .smmmmmo \n `+dmmmmd+``::``+dmmmmd+  \n   -ymmmmmh/``+hmmmmmy-   \n    `/hmmmmmhhmmmmmh/`    \n      `/hmmmmmmmmh/`      \n        `/hmmmmmd/        \n      `oo.`/dmmmmdo`      \n     `ymmd+``ommmmmy`     \n     smmmmd-  /mmmmms     \n    -mmmmm+    ommmmm-    \n    -ooooo`    .ooooo.     \nEOC\n";
    var moojira = "$the_cow = <<EOC;\n     $thoughts              \n      $thoughts    /ss/           \n   `oys:  .dmmd`  :syo`   \n   /dmmy   .//.   hmmd:   \n    -/:`          `:/-    \noyo/:.     ^__^     .:/oy+\n/mmmmm+   <($eyes\\)>  `ommmmm/\n smmmmms. -(__). .smmmmmo \n `+dmmmmd+``$tongue``+dmmmmd+  \n   -ymmmmmh/``+hmmmmmy-   \n    `/hmmmmmhhmmmmmh/`    \n      `/hmmmmmmmmh/`      \n        `/hmmmmmd/        \n      `oo.`/dmmmmdo`      \n     `ymmd+`VVmmmmmy`     \n     smmmmd-  /mmmmms     \n    -mmmmm+    ommmmm-    \n    -ooooo`    .ooooo.    \nEOC\n";
    var moose = "$the_cow = <<EOC;\n  $thoughts\n   $thoughts   \\\\_\\\\_    _/_/\n    $thoughts      \\\\__/\n           ($eyes)\\\\_______\n           (__)\\\\       )\\\\/\\\\\n            $tongue ||----- |\n               ||     ||\nEOC\n";
    var mule = "# Mule\n#\n# based on mule from http://rossmason.blogspot.com/2008/10/friday-ascii-art.html \n#\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts \n  /\\\\          /\\\\                               \n ( \\\\\\\\        // )                              \n  \\\\ \\\\\\\\      // /                               \n   \\\\_\\\\\\\\||||//_/                                \n     / _  _ \\\\/                                 \n                                               \n     |(o)(o)|\\\\/                                \n     |      | \\\\/                               \n     \\\\      /  \\\\/_____________________         \n      |____|     \\\\\\\\                  \\\\\\\\        \n     /      \\\\     ||                  \\\\\\\\       \n     \\\\ 0  0 /     |/                  |\\\\\\\\      \n      \\\\____/ \\\\    V           (       / \\\\\\\\     \n       / \\\\    \\\\     )          \\\\     /   \\\\\\\\    \n      / | \\\\    \\\\_|  |___________\\\\   /     \"\" \n                  ||  |     \\\\   /\\\\  \\\\          \n                  ||  /      \\\\  \\\\ \\\\  \\\\         \n                  || |        | |  | |         \n                  || |        | |  | |         \n                  ||_|        |_|  |_|         \n                 //_/        /_/  /_/          \nEOC\n";
    var mutilated = "##\n## A mutilated cow, from aspolito@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n       $thoughts   \\\\_______\n v__v   $thoughts  \\\\   O   )\n ($eyes)      ||----w |\n (__)      ||     ||  \\\\/\\\\\n  $tongue\nEOC\n";
    var nyan = "# Nyan Cat\n#\n# from http://www.reddit.com/r/commandline/comments/2lb5ij/what_is_your_favorite_ascii_art/clt4ybl\n#\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts\n\n+      o     +              o   \n    +             o     +       +\no          +\n    o  +           +        +\n+        o     o       +        o\n-_-_-_-_-_-_-_,------,      o \n_-_-_-_-_-_-_-|   /\\\\_/\\\\  \n-_-_-_-_-_-_-~|__( ^ .^)  +     +  \n_-_-_-_-_-_-_-''  ''      \n+      o         o   +       o\n    +         +\no        o         o      o     +\n    o           +\n+      +     o        o      +    \nEOC\n\n";
    var octopus = "# octopus\n#   http://www.ascii-art.de/ascii/mno/octopus.txt\n$the_cow = <<EOC;\n        $thoughts               ___\n         $thoughts           .-'   `'.\n                    /         \\\\\n                    |         ;\n                    |         |           ___.--,\n           _.._     |0) ~ (0) |    _.---'`__.-( (_.\n    __.--'`_.. '.__.\\\\    '--. \\\\_.-' ,.--'`     `\"\"`\n   ( ,.--'`   ',__ /./;   ;, '.__.'`    __\n   _`) )  .---.__.' / |   |\\\\   \\\\__..--\"\"  \"\"\"--.,_\n  `---' .'.''-._.-'`_./  /\\\\ '.  \\\\ _.-~~~````~~~-._`-.__.'\n        | |  .' _.-' |  |  \\\\  \\\\  '.               `~---`\n         \\\\ \\\\/ .'     \\\\  \\\\   '. '-._)\n          \\\\/ /        \\\\  \\\\    `=.__`~-.\n     jgs  / /\\\\         `) )    / / `\"\".`\\\\\n    , _.-'.'\\\\ \\\\        / /    ( (     / /\n     `--~`   ) )    .-'.'      '.'.  | (\n            (/`    ( (`          ) )  '-;\n             `      '-;         (-'\nEOC\n";
    var okazu = "#\n# \u304A\u304B\u305A\n#\n\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts                _, _ ,\uFF64\n    $thoughts          , - \xb4      `--\u3001\n             \u30CE               \u4E36\n           \uFF0F                  `\uFF64_\n         ,\xb4                        \u3001\n        ,'                          \u4E36\n       \uFF89                             \u30FD\n    \uFF3F;\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F',\uFF3F\n    \u30FD\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\uFF89\n      \u30FD                              /\n       \u30FD\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09/\n         \uFF3C                        \uFF0F\n           \uFF3C\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\u4E09\uFF0F\n             `\uFF1C              \uFF1E\xb4\n               \uFF40\u4E01\u4E09\u4E09\u4E09\u4E09\u4E01\xb4\n     \uFF3F          \uFF40 \uFF70----\u2010 \xb4\n  \uFF0F::/\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3F_\n\uFF08;;;\uFF8C \uFF70\u2500----\uFF1D\uFF1D === \u30CB\u30CB\u30CB \u4E8C\u4E8C\u4E8C\u4E09\u4E09\u4E09\uFF63\n\n         \uFF3F|\uFF3F \uFF3C  \uFF3F\uFF4C\uFF3F\uFF3C  _\uFF3F|\uFF3F_\u30FD\u30FD\n          _|\uFF3F       \uFF5C\u30FD     __|\n        \uFF0F |  \u30FD     \uFF89  \u2502   (__|\n        \uFF3C\u30CE  \u30CE    \uFF89 \u30FD\uFF89     _\u30CE \nEOC\n";
    var owl = "##\n## An owl\n##\n$the_cow = <<EOC;\n         $thoughts\n          $thoughts\n           ___\n          (o o)\n         (  V  )\n        /--m-m-\nEOC\n";
    var pawn = "# Pawn (Chess piece)\n#\n# from http://www.chessvariants.org/d.pieces/ascii.html\n#   by David Moeser\n#\n$the_cow = <<EOC;\n $thoughts\n  $thoughts\n     __\n    (  )\n     ||\n    /__\\\\\n   (____)\nEOC\n";
    var periodicTable = "$the_cow = <<EOC;\n$thoughts\n $thoughts\n   1A   2A                                         3A  4A  5A  6A  7A  8A\n  -----                                                               -----\n1 | H |                                                               |He |\n  |---+----                                       --------------------+---|\n2 |Li |Be |                                       | B | C | N | O | F |Ne |\n  |---+---|                                       |---+---+---+---+---+---|\n3 |Na |Mg |3B  4B  5B  6B  7B |    8B     |1B  2B |Al |Si | P | S |Cl |Ar |\n  |---+---+---------------------------------------+---+---+---+---+---+---|\n4 | K |Ca |Sc |Ti | V |Cr |Mn |Fe |Co |Ni |Cu |Zn |Ga |Ge |As |Se |Br |Kr |\n  |---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---|\n5 |Rb |Sr | Y |Zr |Nb |Mo |Tc |Ru |Rh |Pd |Ag |Cd |In |Sn |Sb |Te | I |Xe |\n  |---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---|\n6 |Cs |Ba |Lu |Hf |Ta | W |Re |Os |Ir |Pt |Au |Hg |Tl |Pb |Bi |Po |At |Rn |\n  |---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---|\n7 |Fr |Ra |Lr |Rf |Db |Sg |Bh |Hs |Mt |Ds |Rg |Cn |Nh |Fl |Mc |Lv |Ts |Og |\n  -------------------------------------------------------------------------\n              -------------------------------------------------------------\n   Lanthanide |La |Ce |Pr |Nd |Pm |Sm |Eu |Gd |Tb |Dy |Ho |Er |Tm |Yb |Lu |\n              |---+---+---+---+---+---+---+---+---+---+---+---+---+---+---|\n   Actinide   |Ac |Th |Pa | U |Np |Pu |Am |Cm |Bk |Cf |Es |Fm |Md |No |Lr |\n              -------------------------------------------------------------\nEOC\n";
    var personalitySphere = "# Personality Sphere from Portal/Portal 2\n# via http://pastebin.com/1AZwKrKp\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n      .-+\\$H###MM\\@MMMMM##\\@\\$+-,. ....\n-\\@\\$+%\\$+%HX+--..  .  . .,:X\\$/+/++\\$#:\n-#MXH\\$=                      \\$HXH#:\n .--,:#+   ,+\\$HMX =\\@\\@X%, . .X#:,,,\n     =#\\@\\$H :####H =####;,M%\\$#X\n     X###\\$ \\$####X =####H %###X\n    ;###X /###\\@\\$: ,+HM##H.+###;\n   :###;,X##%=;%H\\@H\\$;-;M#\\@-;###/\n  ,M##;.\\@##;-H#######M=.M##-:###-\n  ;##M ;##X \\@###H-=\\@###.;##X H##;\n  ;##M./##X.\\@###H:/M###-=##X X##;\n  -###;,M##:,\\@########+-H##; \\@##-\n   %##M==\\@##%==%HMH%::/M##+.X##+\n    %###/./###X+: -+\\$M##M=,X##+\n     X###X X####H +#####% \\@##H\n     :###H %####H +#####; X##;\n     /#\\$.  -HM##H /###\\@+.  +#\\$. .\n/HX%\\$X:      .,-, .-,.      =XX\\$H\\@-\n/#H+/+%+/+;=.          .=/%;;/;;+#+\n ..  .,-:XM#MM\\@\\@\\@\\@\\@\\@H\\@\\@M#\\@+=,.   ,,\nEOC\n";
    var pinballMachine = "# Pinball machine\n#\n# from http://ascii.co.uk/art/pinball\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n              /\\\\\n             <  \\\\\n             |\\\\  \\\\\n             | \\\\  \\\\\n             | .\\\\  >\n             |  .\\\\/|\n             |   .||\n             |    ||\n            / \\\\   ||\n           /,-.\\\\: ||\n          /,,  `\\\\ ||\n         /,  ', `\\\\||\n        /, *   ''/ |\n       /,    *,'/  |\n      /,     , /   |\n     / :    , /   .|\n    /\\\\ :   , /   /||\n   |\\\\ \\\\ .., /   / ||\n   |.\\\\ \\\\ . /   /  ||\n   |  \\\\ \\\\ /   /   ||\n   |   \\\\ /   /    |'\n   |\\\\o '|o  /\n   ||\\\\o |  /\n   || \\\\ | /\n   ||  \\\\|/\n   |'   ||\n        ||\n        ||\n        |'\nEOC\n";
    var psychiatrichelp2 = "use utf8;\n$the_cow = <<EOC;\n $thoughts      .------------------------.\n  $thoughts     |       PSYCHIATRIC      |\n   $thoughts    |         HELP  5\xa2       |\n    $thoughts   |________________________|\n     $thoughts  ||     .-\"\"\"--.         ||\n      $thoughts ||    /        \\\\.-.     ||\n        ||   |     ._,     \\\\    ||\n        ||   \\\\_/`-'   '-.,_/    ||\n        ||   (_   (' _)') \\\\     ||\n        ||   /|           |\\\\    ||\n        ||  | \\\\     __   / |    ||\n        ||   \\\\_).,_____,/}/     ||\n      __||____;_--'___'/ (      ||\n     |\\\\ ||   (__,\\\\\\\\    \\\\_/------||\n     ||\\\\||______________________||\n     ||||                        |\n     ||||       THE DOCTOR       |\n     \\\\|||         IS [IN]   _____|\n      \\\\||                  (______)\n jgs   `|___________________//||\\\\\\\\\n                           //=||=\\\\\\\\\n                           `  ``  `\nEOC\n";
    var psychiatrichelp = "$the_cow = <<EOC;\n        $thoughts         ____________________\n         $thoughts       |                    |\n          $thoughts      |     PSYCHIATRIC    |\n           $thoughts     |        HELP        |\n            $thoughts    |____________________|\n             $thoughts   ||  ,-..'``.        ||\n              $thoughts  || (,-..'`. )       ||\n                 ||   )-c - `)\\\\      ||\n   ,.,._.-.,_,.,-||,.(`.--  ,`',.-,_,||.-.,.,-,._.\n              ___||____,`,'--._______||\n             |`._||______`'__________||\n             |   ||     __           ||\n             |   ||    |.-' ,|-      ||\n   _,_,,..-,_|   ||    ._)) `|-      ||,.,_,_.-.,_\n            . `._||__________________||   ____    .\n     .              .           .     . <.____`>\n   .SSt  .      .     .      .    .   _.()`'()`'  .\nEOC\n   ";
    var pterodactyl = "# pterodactyl.cow\n#\n#   a pterodactyl with its mouth open\n#\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n      $thoughts\n                                                                                 -/- \n                                                                              -/ --/    \n                                                                            /- -  /     \n                                                                         //      /      \n                                                                        /       /       \n                                                                      //       /        \n                                                                    //        /         \n                                                                  //          /         \n                                                                ///           /         \n                                                               //            /          \n                                                              //            /           \n                                                             //          . ./           \n                                                             //       .    /            \n                                                             //    .      /             \n                                                             //  .       /              \n                                                            // .         /              \n                                                          (=>            /              \n                                                         (==>            /              \n                                                          (=>            /              \n             -_                                           //.           /               \n             \\\\\\\\-_                                        //   .         /               \n              \\\\ \\\\_-_                                     //     .       /               \n               \\\\_ \\\\_--_                                 //        . . . /               \n                 \\\\_ \\\\_ -_                              //              /                \n                   \\\\_ \\\\_ (O)-___                      //               /                \n                     \\\\ _\\\\   __  --__                  /                /                \n                     _/    \\\\  ----__--____          //                 /                \n                   _/  _/   \\\\       -------       //                  /                 \n                 _/ __/ \\\\\\\\   \\\\\\\\                  /                   /                  \n               _/ _/      \\\\\\\\   \\\\\\\\              //                   /                   \n              -__/          \\\\\\\\   \\\\\\\\\\\\          //                   /                    \n                              \\\\\\\\    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//   -                /                    \n                                \\\\\\\\         _/         -            /                    \n                                  \\\\\\\\                      -        \\\\                    \n                                    \\\\\\\\\\\\                       -     \\\\                   \n                                        \\\\\\\\                       -   \\\\                  \n                                          \\\\\\\\\\\\                         \\\\--__             \n                                           | \\\\\\\\                            \\\\__________  \n                                            |  \\\\\\\\\\\\\\\\                ___      _________-\\\\\\\\\n                                            |    \\\\\\\\\\\\\\\\\\\\                \\\\--__/____        \n                                            |        \\\\\\\\\\\\\\\\________---\\\\-    ______-----   \n                                             |                   /    \\\\--  \\\\_______     \n                                             |                   /       \\\\-_________\\\\   \n                                             \\\\                   /                  \\\\\\\\  \n                                             \\\\                 ./                       \n                                             \\\\            .     /                       \n                                              \\\\        .       /                        \n                                              \\\\    .           //                       \n                                              \\\\                /                        \n                                              |__              /                        \n                                              \\\\==              /                        \n                                               \\\\\\\\              \\\\                        \n                                                \\\\\\\\  .          \\\\                        \n                                                  \\\\\\\\    .  .   \\\\                        \n                                                   \\\\           .\\\\                       \n                                                   \\\\\\\\            \\\\                      \n                                                     \\\\           \\\\                      \n                                                      \\\\\\\\          \\\\                     \n                                                        \\\\\\\\         \\\\                    \n                                                          \\\\         \\\\--                 \n                                                           \\\\\\\\          \\\\                \n                                                             \\\\\\\\         \\\\\\\\\\\\\\\\            \n                                                               \\\\\\\\\\\\\\\\_________\\\\\\\\\\\\         \nEOC\n\n";
    var queen = "# Queen (Chess piece)\n#\n# from http://www.chessvariants.org/d.pieces/ascii.html\n#   by David Moeser\n#\n$the_cow = <<EOC;\n $thoughts\n  $thoughts\n     ()\n   <~~~~>\n    \\\\__/\n   (____)\n    |  |\n    |  |\n    |__|\n   /____\\\\\n  (______)\n (________)\nEOC\n";
    var R2D2 = "# R2-D2\n#\n# from http://www.ascii-art.de/ascii/s/starwars.txt\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n         _____\n       .\\'/L|__`.\n      / =[_]O|` \\\\\n      |\\\"+_____\\\":|\n    __:='|____`-:__\n   ||[] ||====| []||\n   ||[] | |=| | []||\n   |:||_|=|U| |_||:|\n   |:|||]_=_ =[_||:| LS\n   | |||] [_][]C|| |\n   | ||-\\'\\\"\\\"\\\"\\\"\\\"`-|| |\n   /|\\\\\\\\_\\\\_|_|_/_//|\\\\\n  |___|   /|\\\\   |___|\n  `---\\'  |___|  `---\\'\n         `---'\nEOC\n";
    var radio = "# radio from Portal\n# via http://pastebin.com/1AZwKrKp\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n                    ;=\n                    /=\n                    ;=\n                    /=\n                    ;=\n                    /=\n                    ;=\n                    /=\n             ,--==-:\\$;\n         ,/\\$@#######\\@X+-\n      ./@###############X=\n     /M#####X+/;;;;+H#####\\$.\n    %####M/;+H\\@XX@@%;;\\@####\\@,\n   +####H=+##\\$,--,=M#X-%####\\@.\n  -####X,X\\@HHXH##MXHXXH-+####\\$\n  X###\\@.X/\\$M\\$:####\\$=\\@X/X,X####-\n .####:+\\$:##\\@:####\\$:##H/X=####%\n -%%\\$%,+==%\\$+-\\$+:\\$;-\\$\\$%-+,/\\$%%+\n -/+%%X\\$XX\\$\\$\\$\\$\\$\\$\\$%\\$\\$\\$%\\$X\\$X\\$%+/-\nEOC\n";
    var ren = "##\n## Ren \n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n    ____  \n   /# /_\\\\_\n  |  |/$eye\\\\$eye\\\\\n  |  \\\\\\\\_/_/\n / |_   |  \n|  ||\\\\_ ~| \n|  ||| \\\\/  \n|  |||_    \n \\\\//  |    \n  ||  |    \n  ||_  \\\\   \n  \\\\_|  o|  \n  /\\\\___/   \n /  ||||__ \n    (___)_)\nEOC\n";
    var renge = "##\n## Nyanpasu~\n##\n$the_cow = <<EOC;\n     $thoughts               _\n      $thoughts            \xb4   \uFF3C   __\n       $thoughts        \uFF0F \uFF0F\u2312\\\\ | \uFF0F   \uFF3C\n   f|{r\u3001       | /     '|/ \uFF0F\u2312\uFF3C\uFF3C\n   ||J |        \\\\/\uFF1E--\uFF1C\\\\/ /--    |\n(\uFF3C|`` \u3057]\uFF84----\uFF0F          \u2312` \uFF3C| /\n \uFF3C      \uFF89\\\\   /                \uFF3C|/\\\\   --\u3001___\n  \u309B    /  \uFF3C/      /     |         \\\\/_       \uFF89\n   \\\\\u3001/\\\\_\uFF0F/\uFF72    ,/'|    /\\\\ \u3001        \u2165   __\uFF0F\n    [\\\\/   \\\\/_|   /\\\\|/|   |-]  \u3001     \u304F-\u304F\n    |      \\\\/|  |/___\uFF89\\\\  /\\\\___ \\\\     /   \uFF3C\n    {/      <|\u5C0F| _\uFF92\uFF98  \\\\/  _\uFF92\uFF98` \\\\   \uFF5C|   |\n     \\\\        \uFF5C| \\\\/\uFF7F      \\\\/\uFF7F  \uFF89 / /\\\\|\uFF3C_/\n      \\\\       \uFF5C|              /_\uFF72\\\\/\n       \\\\      \uFF5C|     /\u30FD      / /\uFF89\n        \\\\     \uFF5C/\\\\   \u2514-     ,/ /'\n         \\\\    \uFF5C |\uFF0F>> r -=\u2266{{/ /\uFF86=_\n          \\\\   \u4EBA | \uFF0F\uFF68|     /\uFF9A/__   \uFF89\uFF86-\u3001\n           \uFF3C   \\\\|/  X\uFF89    / /   \u5165//\u2312Y\uFF8A\n             \\\\  /\u3057 \uFF5C`---' //  /  \\\\\uFF86\uFF86\uFF86\uFF89|\n              \uFF3C/  / \\\\  --\uFF71 \uFF5C  |   | _]|\n               \uFF5C /   \\\\/\\\\/  \uFF5C  |   |___|\n               r\u52FA    \uFF5C_\uFF5C \uFF5C  |   |  ||\n               |`7    \uFF5C \uFF5C \uFF5C  |   |   |\nEOC\n";
    var robot = "# Robot\n#\n# based on rfksay by Andrew Northern\n# http://robotfindskitten.org/aw.cgi?main=software.rfk#rfksay\n#\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n\n     [-]\n     (+)=C\n     | |\n     OOO\nEOC\n";
    var robotfindskitten = "# Robot finds kitten <3\n#\n# based on rfksay by Andrew Northern\n# http://robotfindskitten.org/aw.cgi?main=software.rfk#rfksay\n#\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n\n    [-]   |\\\\_/|\n    (+)=C |o o|__\n    | |   --*--__\\\\\n    OOO   C_C_(___)\nEOC\n";
    var roflcopter = "$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n ROFL:ROFL:ROFL:ROFL\n         _^___\n L    __/   $eyes \\\\    \nLOL===__        \\\\ \n L      \\\\________]\n         I   I  $tongue\n        --------/\nEOC\n";
    var rook = "# Rook (Chess piece)\n#\n# from http://www.chessvariants.org/d.pieces/ascii.html\n#   by David Moeser\n#\n$the_cow = <<EOC;\n $thoughts\n  $thoughts\n\n   WWWWWW\n    |  |\n    |  |\n    |__|\n   /____\\\\\n  (______)\nEOC\n";
    var sachiko = "#\n# \u30D7\u30ED\u30C7\u30E5\u30FC\u30B5\u30FC\u3055\u3093\u306F\u72EC\u7279\u306E\u5909\u308F\u3063\u305F\u30BB\u30F3\u30B9\u3092\u3057\u3066\u307E\u3059\u306D\uFF01\n#\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n       $thoughts\n             , -\u2015\u2015- \u3001\n          \uFF0F          \u30FD\u3001\n        /\u723B\uFF89\uFF98\uFF89\uFF8A\uFF89\uFF98l\uFF89 \u309D  l\n     \uFF1C\uFF89\uFF98\uFF89\u2010'    \uFF70  \uFF98 \uFF1E }\n        l \uFF89 \u2503    \u2503 l \uFF89  \uFF89\n        l\u4EBA   r\u2010\u2510   !\uFF89\uFF3E)\n           \u309D ` \xb4 \u2010\uFF1C\xb4\nEOC\n";
    var satanic = "##\n## Satanic cow, source unknown.\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts  (__)  \n         (\\\\/)  \n  /-------\\\\/    \n / | 666 ||$tongue  \n*  ||----||      \n   ~~    ~~      \nEOC\n";
    var seahorseBig = "# large seahorse\n#\n# adapted from http://www.chris.com/ascii/index.php?art=animals/other%20(water)\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n                  ,\n         ___     /^\\\\   ,\n        `\\  \\'...`   \\\\_/^\\\\\n          ) ~     ',    /__,\n         /       ,.    ,, /___,\n        (  .-.   \\'.\\'. /// ___/\n         ) .-.\\'  .`.`///-.\\'.\n        / ( o )  .\\\"\\\". ====) \\\\\n       (   \\'-`   \\\\  |\\'~~~`  u\\\\,\n        \\\\ _~  .\\\"\\\"\\\"` |~|^u^ u^(\\\"\\\"\n        //  .\"     /~/^ u^ u^\\\n       // .\"      /~  u^ u  ^u\\      _\n      // .\"      /~/U^ U^ U^ ^(     / )\n     /` .\"       |~  U^ U^ ^ U^\\   /) _)\n   ./` .\"        |~|^ U^ ^U ^ U(  / _  _)\n  ;.`.\"          |~ ^U ^ U^ U ^/ /)_ =  _)\n   \\\"\\\"            |~|^ ^U ^ ^ U(_/_    )- _)\n                 |~ U ^ ^U ^U ^ )   =    _)\n                 \\\\~|^ U U^ U ^ =  ~ )  - _)\n                  \\\\ U ^U ^ ^U^_)     =  _)\n                   \\\",^U^ ^U ^/ \\\\)_~   -_)\n                     \\\".u^u ^|   \\\\_  = _)\n                      ).u ^u|    \\\\)  _)\n                      \\\\u ^u^(     \\\\__)\n                       )^u ^u\\\\\n                       \\\\u ^u ^|\n             ____       )^u ^u|\n          ,-`    '-.    )u ^u^|\n         /  .---. ' \\\\  / ^ u^/\n        |  ;  `  '  | /u^u ^/\n        |  ;  '-` . `:u^u^u/\n        \\\\.\\'^\\'._   _.`u ^.-`\n         \\\\_.~=_```-.^.-\\\"\n           \\'\\\"------\\\"`\n\nEOC\n";
    var seahorse = "# seahorse\n#\n# adapted from http://www.chris.com/ascii/index.php?art=animals/other%20(water)\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n\n      (\\\\(\\\\/\n  .-._)oo  '_\n  \\'---.     .\\'\\\\\n       )    \\\\.-\\'\\\\\n      /__ ;     (\n      |__ : /'._/\n       \\\\_  (\n       .,)  )\n       \\'-.-\\'\n\nEOC\n";
    var sheep = "##\n## The non-flaming sheep.\n##\n$the_cow = <<EOC\n  $thoughts\n   $thoughts\n       __     \n      U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.\n      \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)\n        $tongue (\\@\\@\\@\\@\\@\\@\\@\\@)\n           `YY~~~~YY'\n            ||    ||\nEOC\n";
    var shikato = "$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n\n     L\uFF70'{r \uFF67j\uFF70\u30CE\n      _`)-\uFF91{\n    /\xb4::( \uFF65)\u30FD-- \uFF64\n   {::::::::::::::}\n   \u309D:::::.\u30CE\u30FC-\n     \u3057\uFF7F\xa8UU\nEOC\n";
    var shrug = "$the_cow = <<EOC;\n  $thoughts\n\xaf\\\\_(\u30C4)_/\xaf\nEOC\n";
    var skeleton = "##\n## This 'Scowleton' brought to you by one of \n## {appel,kube,rowe}@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n          $thoughts      (__)      \n           $thoughts     /$eyes|  \n            $thoughts   (_\"_)*+++++++++*\n                   //I#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\I\\\\\n                   I[I|I|||||I I `\n                   I`I'///'' I I\n                   I I       I I\n                   ~ ~       ~ ~\n                     Scowleton\nEOC\n";
    var small = "##\n## A small cow, artist unknown\n##\n$eyes = \"..\" unless ($eyes);\n$the_cow = <<EOC;\n       $thoughts   ,__,\n        $thoughts  ($eyes)____\n           (__)    )\\\\\n            $tongue||--|| *\nEOC\n";
    var smilingOctopus = "# \n$the_cow = <<EOC;\n      $thoughts\n       $thoughts\n        $thoughts                                     ,\n                                            ,o\n                                            :o\n                   _....._                  `:o\n                 .\\'       ``-.                \\\\o\n                /  _      _   \\\\                \\\\o\n               :  /*\\\\    /*\\\\   )                ;o\n               |  \\\\_/    \\\\_/   /                ;o\n               (       U      /                 ;o\n                \\\\  (\\\\_____/) /                  /o\n                 \\\\   \\\\_m_/  (                  /o\n                  \\\\         (                ,o:\n                  )          \\\\,           .o;o\\'           ,o\\'o\\'o.\n                ./          /\\\\o;o,,,,,;o;o;\\'\\'         _,-o,-\\'\\'\\'-o:o.\n .             ./o./)        \\\\    \\'o\\'o\\'o\\'\\'         _,-\\'o,o\\'         o\n o           ./o./ /       .o \\\\.              __,-o o,o\\'\n \\\\o.       ,/o /  /o/)     | o o\\'-..____,,-o\\'o o_o-\\'\n `o:o...-o,o-\\' ,o,/ |     \\\\   \\'o.o_o_o_o,o--\\'\\'\n .,  ``o-o\\'  ,.oo/   \\'o /\\\\.o`.\n `o`o-....o\\'o,-\\'   /o /   \\\\o \\\\.                       ,o..         o\n   ``o-o.o--      /o /      \\\\o.o--..          ,,,o-o\\'o.--o:o:o,,..:o\n                 (oo(          `--o.o`o---o\\'o\\'o,o,-\\'\\'\\'        o\\'o\\'o\n                  \\\\ o\\\\              ``-o-o\\'\\'\\'\\'\n   ,-o;o           \\\\o \\\\\n  /o/               )o )  Carl Pilcher\n (o(               /o /                |\n  \\\\o\\.       ...-o\\'o /              \\\\   |\n    \\\\o`o`-o\\'o o,o,--\\'       ~~~~~~~~\\\\~~|~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n      ```o--\\'\\'\\'                       \\\\| /\n                                       |/\n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n                                       |\n ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\nEOC\n";
    var snoopy = "##\n## acsii picture From: kwok@menpachi.nmfs.hawaii.edu (William Kwok)\n## from http://www.ascii-art.de/ascii/s/snoopy.txt\n$the_cow = <<EOC;\n $thoughts\n  $thoughts          , ----.\n   $thoughts        -  -     `\n      ,__.,'           \\\\\n    .'                 *`\n   /       $eye   $eye     / **\\\\\n  .                 / ****.\n  |    mm           | ****|\n   \\\\                | ****|\n    ` ._______      \\\\ ****/\n              \\\\      /`---'\n               \\\\___(\n               /~~~~\\\\\n              /      \\\\\n             /      | \\\\\n            |       |  \\\\\n  , ~~ .    |, ~~ . |  |\\\\\n ( |||| )   ( |||| )(,,,)`\n( |||||| )-( |||||| )    | ^\n( |||||| ) ( |||||| )    |'/\n( |||||| )-( |||||| )___,'-\n ( |||| )   ( |||| )\n  ` ~~ '     ` ~~ '\nEOC\n";
    var snoopyhouse = "##\n## acsii picture from http://www.ascii-art.de/ascii/s/snoopy.txt\n##\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts       __---__                         ______\n         $thoughts     /    ___\\\\_             o  O  O _(      )__\n              /====(_____\\\\___---_  o        _(           )_\n             |                    \\\\        (_  AI-YA!!!!   )\n             |                     |@        (_  Shot      _)\n              \\\\       ___         /           (__  Again!__)\n \\\\ __----____--_\\\\____(____\\\\_____/                (______)\n==|__----____--______|\n /              /    \\\\____/)_\n              /        ______)\n             /           |  |\n            |           _|  |\n       ______\\\\______________|______\n      /                    *   *   \\\\\n     /_____________*____*___________\\\\\n     /   *     *                    \\\\\n    /________________________________\\\\\n    / *                              \\\\\n   /__________________________________\\\\\n        |                        |\n        |________________________|\n        |                        |\n        |________________________|\nEOC\n";
    var snoopysleep = "##\n## picture from http://www.ascii-art.de/ascii/ab/beagle.txt\n## \n$the_cow = <<EOC;\n $thoughts\n  $thoughts\n   $thoughts     O_      __)(\n       ,'  `.   (_\".`.\n      :      :    /|`\n      |      |   ((|_  ,-.\n      ; -   /:  ,'  `:(( -\\\\\n     /    -'  `: ____ \\\\\\\\\\\\-:\n    _\\\\__   ____|___  \\\\____|_\n   ;    | |        '-`      :\n  :_____|:|__________________:\n  ;     |:|                  :\n :      |:|                   :\n ;_______`'___________________:\n:                              :\n|______________________________|\n `---.--------------------.---'\n     |____________________|\n     |                    |\n     |____________________|\n     |                    |\n   _\\\\|_\\\\|_\\\\/(__\\\\__)\\\\__\\\\//_|(_\nEOC\n";
    var spidercow = "$the_cow = <<EOC;\n          $thoughts     (\n           $thoughts     )\n            $thoughts   (\n         /\\\\  .-\"\"\"\"-.  /\\\\\n        //\\\\\\\\/  ,,,,  \\\\//\\\\\\\\\n        |/\\\\| ,;;;;;;, |/\\\\|\n        //\\\\\\\\\\\\;-\"\"\"\"-;///\\\\\\\\\n       //  \\\\/   ..   \\\\/  \\\\\\\\\n      (| ,-_| \\\\ || / |_-, |)\n        //`__(\\\\(__)/)__`\\\\\\\\\n       // /.-\\\\`($eyes)'/-.\\\\ \\\\\\\\\n      (\\\\ |)   ')  ('   (| /)\n       ` (|   (o  o)   |) `\n         \\\\)    `--'    (/\n                $tongue\nEOC\n";
    var squid = "#\n# \u3053\u308C\u30B9\u30D7\u30E9\u30C8\u30A5\u30FC\u30F3\u611F\u3042\u308B\u306D\n#\n\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts                                                           \uFF3F\uFF3F\uFF3F\u30CE^l\n      $thoughts                                            \uFF3F,,\u30CE``\uFF70-'\uFFE3\uFFE3        \uFF4C\n                                                 \u304F                       /\n                                                  `\u30FD,   __\uFF64-'           /\n                                                    __\uFF1E\u2010\xb4               |\n                                           ._,;\u2010''``              ,     /\n                                         _;\"                     /     /\n                                       \uFF0F                       /     \u304F\n                                     \uFF0F                        /       |\n                                   \uFF0F                        \uFF0F       \uFF4C\n                                 \u30CE                        \uFF0F\uFFE3\u30FD     /\n                                /                        \uFF0F     \uFF09 _\u30CE\n                            ,r'\u2033\u30FD\u3001                   \uFF0F        \uFFE3\n                           /      \u30FD                 \uFF0F\n                        \uFF3F\uFF89        `r            _\uFF64\u2010'\n                      \uFF0F          _l,_       _\uFF64\u2010'\n                 __,r'          \uFF0Fr;;,\u30FD   \uFF0F\n               ,/              \uFF5C.;\u25CF,;;|  \u30CE\n              \u30CE \uFF0F  \uFF0F\uFF0F       \u30FD\uFF64!!!\uFF9E\uFF89 \"\n            \uFF0F \uFF0F\uFF0F\uFF0F  \uFF0F\uFF0F___,r''\"\uFFE3\n           / \uFF0F / / /\uFF0F / /\n      ___\uFF0F\uFF0F/\uFF0F\uFF0F\uFF0F \uFF0F\uFF0F/\n  \uFF0F\uFFE3\uFF3F_\uFF0F\uFF0F\uFF0F/ / \uFF0F\uFF0F\uFF0F\n l \uFF0F\xb4___\uFF0F\uFF0F\uFF0F\uFF0F\uFF0F\uFF0F /\n \u3057\u30EC\"\uFF0F\uFF0F/ /  \uFF0F\uFF0F//\uFF0F\n      / ,/ / \uFF0F\uFF0F\uFF0F /\n      \uFF9A'   \uFF9A'\uFF0F\uFF0F \uFF0F\n           \uFF0Fl\uFF5Cl/\n          \uFF5C|\uFF9A'l\u30CE\n           \u30EC'\nEOC\n";
    var squirrel = "$the_cow = <<EOC;\n  $thoughts\n     $thoughts\n                  _ _\n       | \\__/|  .~    ~.\n       /$eyes `./      .'\n      {o__,   \\    {\n        / .  . )    \\\n        `-` '-' \\    }\n       .(   _(   )_.'\n      '---.~_ _ _|\n                                                     \nEOC\n";
    var stegosaurus = "##\n## A stegosaur with a top hat?\n##\n$the_cow = <<EOC;\n$thoughts                             .       .\n $thoughts                           / `.   .' \" \n  $thoughts                  .---.  <    > <    >  .---.\n   $thoughts                 |    \\\\  \\\\ - ~ ~ - /  /    |\n         _____          ..-~             ~-..-~\n        |     |   \\\\~~~\\\\.'                    `./~~~/\n       ---------   \\\\__/                        \\\\__/\n      .'  $eye    \\\\     /               /       \\\\  \" \n     (_____,    `._.'               |         }  \\\\/~~~/\n      `----.          /       }     |        /    \\\\__/\n            `-.      |       /      |       /      `. ,~~|\n                ~-.__|      /_ - ~ ^|      /- _      `..-\u2018 / \\\\  /\\\\\n                     |     /        |     /     ~-.     `-/ _ \\\\/__\\\\\n                     |_____|        |_____|         ~ - . _ _ _ _ _>\nEOC\n";
    var stimpy = "##\n## Stimpy!\n##\n$the_cow = <<EOC;\n  $thoughts     .    _  .    \n   $thoughts    |\\\\_|/__/|    \n       / / \\\\/ \\\\  \\\\  \n      /__|$eye||$eye|__ \\\\ \n     |/_ \\\\_/\\\\_/ _\\\\ |  \n     | | (____) | ||  \n     \\\\/\\\\___/\\\\__/  // \n     (_/         ||\n      |          ||\n      |          ||\\\\   \n       \\\\        //_/  \n        \\\\______//\n       __ || __||\n      (____(____)\nEOC\n";
    var sudowoodo = "# Sudowoodo (Pok\xe9mon)\n#\n# https://gist.github.com/rzabcik/9233650/\n#\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n     _              __\n    / `\\\\  (~._    ./  )\n    \\\\__/ __`-_\\\\__/ ./\n   _ \\\\ \\\\/  \\\\   \\\\ |_   __\n (   )  \\\\__/ -^    \\\\ /  \\\\\n  \\\\_/ \"  \\\\  | o  o  |.. /  __\n       \\\\. --' ====  /  || /  \\\\\n         \\\\   .  .  |---__.\\\\__/\n         /  :     /   |   |\n         /   :   /     \\\\_/\n      --/ ::    (\n     (  |     (  (____\n   .--  .. ----**.____)\n   \\\\___/\nEOC\n";
    var supermilker = "##\n## A cow being milked, probably from Lars Smith (lars@csua.berkeley.edu)\n##\n$the_cow = <<EOC;\n  $thoughts   ^__^\n   $thoughts  ($eyes)\\\\_______        ________\n      (__)\\\\       )\\\\/\\\\    |Super |\n       $tongue ||----W |       |Milker|\n          ||    UDDDDDDDDD|______|\nEOC\n";
    var surgery = "##\n## A cow operation, artist unknown\n##\n$the_cow = <<EOC;\n          $thoughts           \\\\  / \n           $thoughts           \\\\/  \n               (__)    /\\\\         \n               ($eyes)   O  O        \n               _\\\\/_   //         \n         *    (    ) //       \n          \\\\  (\\\\\\\\    //       \n           \\\\(  \\\\\\\\    )                              \n            (   \\\\\\\\   )   /\\\\                          \n  ___[\\\\______/^^^^^^^\\\\__/) o-)__                     \n |\\\\__[=======______//________)__\\\\                    \n \\\\|_______________//____________|                    \n     |||      || //||     |||\n     |||      || @.||     |||                        \n      ||      \\\\/  .\\\\/      ||                        \n                 . .                                 \n                '.'.`                                \n\n            COW-OPERATION                           \nEOC\n";
    var tableflip = "$the_cow = <<EOC;\n  $thoughts\n(\u256F\xb0\u25A1\xb0\uFF09\u256F\uFE35 \u253B\u2501\u253B\nEOC\n";
    var taxi = "# Taxi cab\n#\n# from http://ascii.co.uk/art/taxi\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n                   [\\\\\n              .----' `-----.\n             //^^^^;;^^^^^^`\\\\\n     _______//_____||_____()_\\\\________\n    /826    :      : ___              `\\\\\n   |>   ____;      ;  |/\\\\><|   ____   _<)\n  {____/    \\\\_________________/    \\\\____}\n       \\\\ '' /                 \\\\ '' /\n jgs    '--'                   '--'\nEOC\n";
    var telebears = "##\n## A cow performing an unnatural act, artist unknown.\n##\n$the_cow = <<EOC;\n      $thoughts                _\n       $thoughts              (_)   <-- TeleBEARS\n        $thoughts   ^__^       / \\\\\n         $thoughts  ($eyes)\\\\_____/_\\\\ \\\\\n            (__)\\\\  you  ) /\n             $tongue ||----w ((\n                ||     ||>> \nEOC\n";
    var template = "# \n$the_cow = <<EOC;\n$thoughts\n $thoughts\nEOC\n";
    var threader = "$the_cow = <<EOC;\n       $thoughts\n        $thoughts\n         $thoughts\n             \uFF3F\uFF3F\uFF3F\uFF3F\n           \uFF0F\uFF3F\uFF3F\uFF3F\uFF3F\uFF3C\n         \uFF0F\uFF0F (\u2312 \u2312 \u30FD\uFF3C\uFF3C\n        \uFF5C\uFF5C  \uFF89z(\u2312 )| \uFF5C\uFF5C\n        \uFF5C\uFF5C <   (_\u30CE \uFF5C\uFF5C\n        \uFF5C\uFF5C  L_\uFF0F )  \uFF5C\uFF5C\n         \uFF3C\uFF3C /\uFF3F\uFF0F  \uFF0F\uFF0F\n           \uFF3C\u2312 )  (\u2312 \uFF0F\n           \uFF0F\uFF0F    \uFF3C\uFF3C\n           \uFF3C\uFF3C_  _\uFF0F\uFF0F\n             \uFF8D\uFF3F)(\uFF3F/\n             \uFF5C\uFF1D\uFF1D\uFF5C\n              \uFF3C\u4E09\uFF0F\n                \u2227\n              \uFF0F  \uFF3C\n              \uFF3C  \uFF0F\n                \uFF36\nEOC\n";
    var threecubes = "# Three cubes\n#\n# from http://www.reddit.com/r/commandline/comments/2lb5ij/what_is_your_favorite_ascii_art/cltcqs1\n#   also available at https://gist.github.com/th3m4ri0/6e3f631866da31d05030\n# \n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n        ____________\n       /\\\\  ________ \\\\\n      /  \\\\ \\\\______/\\\\ \\\\\n     / /\\\\ \\\\ \\\\  / /\\\\ \\\\ \\\\\n    / / /\\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\\n   / / /__\\\\ \\\\ \\\\/_/__\\\\_\\\\ \\\\__________\n  / /_/____\\\\ \\\\__________  ________ \\\\\n  \\\\ \\\\ \\\\____/ / ________/\\\\ \\\\______/\\\\ \\\\\n   \\\\ \\\\ \\\\  / / /\\\\ \\\\  / /\\\\ \\\\ \\\\  / /\\\\ \\\\ \\\\\n    \\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\\n     \\\\ \\\\/ / /__\\\\_\\\\/ / /__\\\\ \\\\ \\\\/_/__\\\\_\\\\ \\\\\n      \\\\  /_/______\\\\/_/____\\\\ \\\\___________\\\\\n      /  \\\\ \\\\______/\\\\ \\\\____/ / ________  /\n     / /\\\\ \\\\ \\\\  / /\\\\ \\\\ \\\\  / / /\\\\ \\\\  / / /\n    / / /\\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\/ / /\n   / / /__\\\\ \\\\ \\\\/_/__\\\\_\\\\/ / /__\\\\_\\\\/ / /\n  / /_/____\\\\ \\\\_________\\\\/ /______\\\\/ /\n  \\\\ \\\\ \\\\____/ / ________  __________/\n   \\\\ \\\\ \\\\  / / /\\\\ \\\\  / / /\n    \\\\ \\\\ \\\\/ / /\\\\ \\\\ \\\\/ / /\n     \\\\ \\\\/ / /__\\\\_\\\\/ / /\n      \\\\  / /______\\\\/ /\n       \\\\/___________/\nEOC\n\n";
    var toaster = "# Toaster\n#   http://ascii.co.uk/art/toaster \n$the_cow = <<EOC;\n   $thoughts                     .___________.\n    $thoughts                    |           |\n     $thoughts    ___________.   |  |    /~\\\\ |\n         / __   __  /|   | _ _   |_| |\n        / /:/  /:/ / |   !________|__!\n       / /:/  /:/ /  |            |\n      / /:/  /:/ /   |____________!\n     / /:/  /:/ /    |\n    / /:/  /:/ /     |\n   /  ~~   ~~ /      |\n   |~~~~~~~~~~|      |\n   |    ::    |     /\n   |    ==    |    /\n   |    ::    |   /\n   |    ::    |  /\n   |    ::  @ | /\n   !__________!/\nEOC\n";
    var tortoise = "# Tortoise\n# from http://svn.haxx.se/tsvn/archive-2005-06/1030.shtml (accessed 9/11/2014)\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts       ___\n      oo  // \\\\\\\\\n     (_,\\\\/ \\\\_/ \\\\\n       \\\\ \\\\_/_\\\\_/>\n       /_/   \\\\_\\\\\nEOC\n";
    var turkey = "##\n## Turkey!\n##\n$the_cow = <<EOC;\n  $thoughts                                  ,+*^^*+___+++_\n   $thoughts                           ,*^^^^              )\n    $thoughts                       _+*                     ^**+_\n     $thoughts                    +^       _ _++*+_+++_,         )\n              _+^^*+_    (     ,+*^ ^          \\\\+_        )\n             {       )  (    ,(    ,_+--+--,      ^)      ^\\\\\n            { (\\@)    } f   ,(  ,+-^ __*_*_  ^^\\\\_   ^\\\\       )\n           {:;-/    (_+*-+^^^^^+*+*<_ _++_)_    )    )      /\n          ( /  (    (        ,___    ^*+_+* )   <    <      \\\\\n           U _/     )    *--<  ) ^\\\\-----++__)   )    )       )\n            (      )  _(^)^^))  )  )\\\\^^^^^))^*+/    /       /\n          (      /  (_))_^)) )  )  ))^^^^^))^^^)__/     +^^\n         (     ,/    (^))^))  )  ) ))^^^^^^^))^^)       _)\n          *+__+*       (_))^)  ) ) ))^^^^^^))^^^^^)____*^\n          \\\\             \\\\_)^)_)) ))^^^^^^^^^^))^^^^)\n           (_             ^\\\\__^^^^^^^^^^^^))^^^^^^^)\n             ^\\\\___            ^\\\\__^^^^^^))^^^^^^^^)\\\\\\\\\n                  ^^^^^\\\\uuu/^^\\\\uuu/^^^^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\\n                     ___) >____) >___   ^\\\\_\\\\_\\\\_\\\\_\\\\_\\\\_\\\\)\n                    ^^^//\\\\\\\\_^^//\\\\\\\\_^       ^(\\\\_\\\\_\\\\_\\\\)\n                      ^^^ ^^ ^^^ ^\nEOC\n";
    var turtle = "##\n## A mysterious turtle...\n##\n$the_cow = <<EOC;\n    $thoughts                                  ___-------___\n     $thoughts                             _-~~             ~~-_\n      $thoughts                         _-~                    /~-_\n             /^\\\\__/^\\\\         /~  \\\\                   /    \\\\\n           /|  $eye|| $eye|        /      \\\\_______________/        \\\\\n          | |___||__|      /       /                \\\\          \\\\\n          |          \\\\    /      /                    \\\\          \\\\\n          |   (_______) /______/                        \\\\_________ \\\\\n          |      $tongue / /         \\\\                      /            \\\\\n           \\\\         \\\\^\\\\\\\\         \\\\                  /               \\\\     /\n             \\\\         ||           \\\\______________/      _-_       //\\\\__//\n               \\\\       ||------_-~~-_ ------------- \\\\ --/~   ~\\\\    || __/\n                 ~-----||====/~     |==================|       |/~~~~~\n                  (_(__/  ./     /                    \\\\_\\\\      \\\\.\n                         (_(___/                         \\\\_____)_)\nEOC\n";
    var tuxBig = "# Tux the Penguin (large version)\n#  seen when connected to irc.uslug.org\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts          .88888888:.\n         $thoughts        88888888.88888.\n               .8888888888888888.\n               888888888888888888\n               88' _`88'_  `88888\n               88 88 88 88  88888\n               88_88_::_88_:88888\n               88:::,::,:::::8888\n               88`:::::::::'`8888\n              .88  `::::'    8:88.\n             8888            `8:888.\n           .8888'             `888888.\n          .8888:..  .::.  ...:'8888888:.\n         .8888.'     :'     `'::`88:88888\n        .8888        '         `.888:8888.\n       888:8         .           888:88888\n     .888:88        .:           888:88888:   \n     8888888.       ::           88:888888\n     `.::.888.      ::          .88888888\n    .::::::.888.    ::         :::`8888'.:.\n   ::::::::::.888   '         .::::::::::::\n   ::::::::::::.8    '      .:8::::::::::::.\n  .::::::::::::::.        .:888:::::::::::::\n  :::::::::::::::88:.__..:88888:::::::::::'\n   `'.:::::::::::88888888888.88:::::::::'\n         `':::_:' -- '' -'-' `':_::::'`\nEOC\n";
    var tux = "##\n## TuX\n## (c) pborys@p-soft.silesia.linux.org.pl \n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n        .--.\n       |$eye_$eye |\n       |:_/ |\n      //   \\\\ \\\\\n     (|     | )\n    /'\\\\_   _/`\\\\\n    \\\\___)=(___/\n\nEOC\n";
    var tweetyBird = "# Tweety bird\n#  from http://pastebin.com/isRcSy01\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n      $thoughts\n                    ___\n                _.-'   ```'--.._    \n              .'                `-._ \n             /                      `.     \n            /                         `.  \n           /                            `.  \n          :       (                       \\\\   \n          |    (   \\\\_                  )   `.  \n          |     \\\\__/ '.               /  )  ;  \n          |   (___:    \\\\            _/__/   ;  \n          :       | _  ;          .'   |__) :  \n           :      |` \\\\ |         /     /   /  \n            \\\\     |_  ;|        /`\\\\   /   / \n             \\\\    ; ) :|       ;_  ; /   /  \n              \\\\_  .-''-.       | ) :/   /  \n             .-         `      .--.'   /  \n            :         _.----._     `  < \n            :       -'........'-       `.\n             `.        `''''`           ;\n               `'-.__                  ,'\n                     ``--.   :'-------'\n                         :   :\n                        .'   '.\nEOC\n";
    var USA = "# USA flag\n#\n# from http://chris.com/ascii/index.php?art=objects/flags\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n\n  |* * * * * * * * * * OOOOOOOOOOOOOOOOOOOOOOOOO|\n  | * * * * * * * * *  :::::::::::::::::::::::::|\n  |* * * * * * * * * * OOOOOOOOOOOOOOOOOOOOOOOOO|\n  | * * * * * * * * *  :::::::::::::::::::::::::|\n  |* * * * * * * * * * OOOOOOOOOOOOOOOOOOOOOOOOO|\n  | * * * * * * * * *  :::::::::::::::::::::::::|\n  |* * * * * * * * * * OOOOOOOOOOOOOOOOOOOOOOOOO|\n  |:::::::::::::::::::::::::::::::::::::::::::::|\n  |OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO|\n  |:::::::::::::::::::::::::::::::::::::::::::::|\n  |OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO|\n  |:::::::::::::::::::::::::::::::::::::::::::::|\n  |OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO|\n\nEOC\n";
    var vader = "##\n## Cowth Vader, from geordan@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n        $thoughts    ,-^-.\n         $thoughts   !$eyeY$eye!\n          $thoughts /./=\\\\.\\\\______\n               ##      $tongue)\\\\/\\\\\n                ||-----w||\n                ||      ||\n\n               Cowth Vader\nEOC\n";
    var vaderKoala = "##\n## Another canonical koala?\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts        .\n     .---.  //\n    Y|$eye $eye|Y// \n   /_(i=i)K/ \n   ~()~*~()~  \n    (_)-(_)   \n\n     Darth \n     Vader    \n     koala        \nEOC\n";
    var weepingAngel = "#\n# Weeping Angel\n#\n# Don't blink!\n#\n# based on design found at http://shirt.woot.com/derby/entry/73182/dont-blink\n#   and http://infinitywave.deviantart.com/art/Don-t-Blink-tee-391963389\n#\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts\n\n                                     ...I..\n                            :XX:X\\$ . .7N..            ..\\$\\$.. .:~..\n                            X:XX.. 8XXI..         ....XX..7..7KKK8.. .\n                              N. .XXX,          ..:ZD- ..M.\\$K:XN?XX.XN .\n                              .. XX\\$.            *. .KN7XXX+ -XX,CN.,XX\n                        IXX?..                  ...--+..IXX:X:X..-ZN?DX,.\n                      .\\$XXXXX. .X               ..XX~-7=\\$7+IX5\\$...+IM+XXXX.\n                    .  +....7D=               .7=IX,: 7+..   . ,.  =+XXID..\n                    .-\\$-.. .    .             .MM-,,..... . ,=7OI.. .,:N7%\n          ..17KN. ..XX:XZ.  ..., .            .:.. .     .-IN78IN7=-.,..CMO.                     ..-.\n        ..XXXXMO..  ..8X:X= 8D0..               .8 .    .+I:N-X:XXDXXXX.ID..                  ..-XX:XX- .\n        .X:DX:XX.     ...8KI78M,                .X......-IM.D.XDXXXXXXX?:. .                .:++7CXXXXXX?.\n      . X7XXXXD8 .      .  ?8XXX.....            X+ : ...XX.X.DCO.  .+X-8X,.              . .=?2XXXXXXXXXX.\n       .=XXX887+.       .=:+?,:I.XXXXZ.         .7NO.=8+ ...M?.. 8X.\\$\\$X 7=..              ..=?X:X7++\\$NXXXXX:\n       =XX:D-...  .:..  .  ...  ...?XXX         .*. X(O)X  :X .X(O)X+X.,.                .*XXX=    . -IXXXD,\n     ,-X:XI..     ,.     ...           .       .X..........XX-....=.?N?.O?               .+XXX..       .-XX:X.\n    .:ZX8-      . .   ..+\\$:,..                .DX..D:\\$78. .XX?:XXXXD?XZ...               +DXX,    ..  .. =X:XX\n    --\\$D   .    ......+XX. .I.                  X-.*XX ..XZXXXXX.XXXXXX 8.              -.XXO.    .:=-7=..:8XX,\n  ..:7Z. .      ..  +X:XX.  X..                 :I.........XXX....XX:XX  .            ..7X7Z..  .-II\\$%>I?+,-X:X.\n   :,7..       , ...8X:XX.  XX                  .X ...  . .. .8XX:,-ZXX.              .7IXXX .  .+ODC8:\\$II7:ZXX:\n  .,=.      ..?.  ,8X\\$XX=   .XX..               ..+..  .-..%77.XXX.\\$XX .            . *IXXXX    :78DX8D08DN7-XXX.\n  .:..       *-...-XXXXX.   .,XX..                8,...O..VVVVV XX:XX               . ZOX:XI  . =ID0X0XODOX:+\\$XX..\n  .:        .? . ,IX:X:X,    .:X=.                .\\$ .N VV ....VVM+XX.              .=ZOXXX.  . IDO0X0X0D0X:0?XX?.\n  ,         ...  :IXXXXXX- .....O.                 7- O...,I.Z.X.X:X,               .7\\$:\\$\\$..   .OCO0X\\$%DCOXXD\\$7X>.\n  -  ...    ?..  =+X:X:XXDX:XX+ .. . .            ., .I. .VVVVV  XX\\$..              :.\\$XXX     +DCXXX\\$+%\\$D8ZXXDXO+\n  , .*...   .%7...,,,%%0%XXXXXXXXXXO-D\\$7J0\\$: ..-:.. ...W,XXXXX,-IXX                .:7XXXX    .CD88DCW..\\$DX:X:XX?%\n .,.-%,-.   . ?7.  .. ..+%8XX:X:XX:X:X:NO\\$DX..,XXX.. . ..XXDXXI\\$XX .               .-O:XX     -CDOI8XX*.*DX:X:X7=%\n.--.:\\$.+ .     .I%       .:7XXXXXXXXXX    . . ....      ..*.-XDXX..               .-:XXX .   .=78CD8XX+  +IXXX>..Z\n ?=:=?.+.        .XX..      ...?8:XXXX-.           .    .:-Z+XX- ....... .       .+,DXX.    .7.,\\$88DXX:  .:OD%..%O.\n ?+IO--+           -XX.  .        .-7O.    .              .\\$\\$.. .7.M.\\$XXX:...   .++DZM.   ..I\\$  .\\$8DX7.,..  .. IXX..\n +??D,\\$\\$              .X8.       .        .*      .   . ..  ...*XX X,X:X-: ON?...,XIO     .-O\\$.   .-. =O,. .  OXXX-.\n.:?ID,Z7              .. ....:I-..        .      ...  .+..   :7 XXD. XX,:...+XXX-.,*..    .=\\$?..  . .:O8.\\$D7 .IXXX?\n ,+78:Z7 . ,*. ..*.           .....  .....D . ?+.     .:+.  -X+.XX7.8XZ.*.  ..+7XX,     ..*+:.  ... ,8:+.-D0..7XXX7.\n.,=\\$8I88   ,7  :XD-.  ....             +.:,...--|.. ..      7% CXZ..XX,.*.  ....+XX+.   ..:.    .\\$O..DO,  8D+.-XXXX,\n :-\\$X0XX ..,*. -DX,... 7... .           .X...::::::-O...    .  .. .7XX...  .,XX. 78-+:..        .OZ.-87   CD\\$.7XXXX.\n.--7O0XI.. :-O:ZM8...-*O.  -.           :% .::-,,::..:,::::--*+I88XXXD....X:X:XX.7XXXXX:        .8%7DO....-8O77DXXX,\n -=78XX.   .**%XX .   %7:..Z .          8. .:X7.::*,* :,,,::-:-*7\\$DXX+.,.XXX?I+.7X:X:X.-X:      .-%%8O .  .8ODIDXXX,\n -=7IX8.    .*87.   ..\\$O7-I\\$..    -.    .... .. ....:,:O:,::-: .7IDXX ..XX..  .:X:... XXXXX.    ..=7+.    .=0D7CXXX:\n.-+7IN..          . :..O\\$7X,      =.  ..,.  ..   ...   O..7.::. ?.XXX,.  .      ..  .X:XZ08. . .          ..\\$D8%XXX:\n.-7II.            .+%. :77:.    .:..  . XD  .-  :...  .:. .   ..... ..          .-  ,X7...,X%.:            . DO8XXX,\n ,I* ,       -?:..8XX. . .....   ...   :XX...X .\\$  , .?%: ,? ==7X7., .           D..? . .XXXXX:%...         ..%8DXX\n ..      ..  DOX .8XX..-..:==.:  . .   .X%  .X .% .%. XXO DX.D?\\$X?               XX.  . 7XI.XX.. :.   ....    ..-?,.\n        ... .DXX..8XX .?8-Z\\$?..*.* .    X-  .X..7 7\\$..XXX.DX+XXXX,   .        . .XX.  .  .  .XX...     .*.  ..  ..\n  ....  :,:. IXX-.8XX .-XDXX- .++\\$..  . X,  .X.%,.+% .XXX.\\$XIDDDD. .=.  .. ...,8XO..        -XXXX ..    *...., .....\n   ,,\\$. -:*. -DXO+8X\\$ .,ZXD7,  .:...  .,X.  .?.X- +-..XXX 7XOXXXXO. ..  .NXXXXXXXXX         87%:XX..    -..I7\\$:.,-.\n . .DX,.-I% ..\\$XX8DXI   *OI-..  ..    .XX   ..7X8.?,  XXX.\\$DX:XXID     .XXXXXXX8.. ..       .+XXXXX+  ..,  \\$XX..:?..\n . .8X-.-%8...*DO\\$XX7   ......         XX   . XX .I.. XXD 7XX:XX?,     ,..              .8D\\$X:XXXXXX   ... \\$8X. ,I7.\n    I8\\$.-OXX..,\\$D8XX... .  -,,....     XX.  ..X  .?:. ZXO -XX:X\\$,:...                 .... :XX:IXXXX   ... %8X  .\\$X.\n..  -8D.-O8X...-\\$CX+ ..D,  -X7,-,.     XX   . 7. .I7 .7X\\$ :X\\$XX-.XXI .                .:: ..X:XXXXXX.. ,. .%XX  .CX:\n..  .CD.+OCX  . .,. .-.XO. ?8I,IX.  . :X7.  ...   78..8X-.+X+XX, XXD.     .     .:    ..*N= -XXXXXXD  .:. .OXN  .8XI\n .   78*COyX,       .8*XX  =8....   ..\\$X..... .   XXI XX .XX.XX..?XX..7.  ?,    ..      ..?XXXXXXXX.  ,:. ,OX*  ,DX\\$\n .  .%D7CO7X\\$ . .... X7XX   ..        XX . ..   ..XX\\$ X8  XX.XX...XXX%8   %-              .. .=\\$XX..  ,:. :ZX   :DX%\n.... +XO8O7XD ...+.  X8XX.          .:X.  .7-    ,XX\\$.D= .XX 8X   DXX\\$X:  XD.                         .-,.*OX.  =DX%\n .,. .XD8O\\$XX  ,,\\$:. OXXX-          .XX.  .D?.  .XXX:-8. +XX DX:   XX7X\\$  XX                          .=-IZXD   +DX8 .\n ::.  XXXXZX\\$  .,\\$D  7XDXI          OX... O8?   .XXX.%8  IXX ZXI   ZX7XD. DX.             ..   .      .=+Z\\$X=   7DX%\n.-:.  IXXN7X. ..:IX. 7DNK\\$        ..XZ  .\\$XX- ..OXX8 %Z  7XX.-XX ..+XDXX+.7X-.           :+   .D      .-*\\$+X... %DX%\n.*,,. .XXDIX, ..??X. IDXXI        .XX   .XX8,  :XXX  %% .=DX..XX.. .XX:X8 .XX.           .=.  .X      ..+??X  ..%DX?\n.+*-  .OX7?%. .:%77\\$.7DXX         -X7.  XXX+...XXX:. ZO...DX\\$.OXX  .+X\\$XX,.XX,          ....  ,X       .-8\\$.  .-OXX+\n *I*,. .8+ZI  .=D+XX ,8XX.        XX. .8XX%...7XX7...%X   8XX .XXX  .X\\$XX\\$.XXX..              -X      . -X. ..?+DXX:.\n =O7%:. :-I  ..*O+XX  I8,.       .XI. .XX%.. -XXD   .:X:  .XX* ZXXZ..\\$X7XD.:XX7.              ?8        .-...I8\\$XXX..\n -X\\$O%:    .,..=7-XX. .,..      .*X   .OD.  .:+%..   *XD  .8X- .7XX..XX..II +CO               -.     ..   .,%XODXXX...\n :XOOX-.  ..?..:I:XX..                 .\\$,  .:.     ..,:  .I?,. +8?..\\$%.  . ..,.            . ,.    .?..   =XX:XXXX\n .XXXD=    ,O. .I.\\$M=                    .     .     ...  ......-....,..     ..             ..X=     X .   -DXX8XXX\n .XXX8*.  ,,\\$:. .?+XX                                               .                        =N?..   D     :OXD8XXX\n  %XXXI.  ,,7\\$. +I78N.            ...                                                        ID?.   .I    ..%X8CXX+\n  +ICOI   .,:Z- .-XXD.            .,..                                    ..                 7D*..  ..      \\$D\\$ZDD..\n  ,IOO+.  ,::Z7..7\\$\\$D              ,.. .                                  .@.                -O\\$.:  7.     .78OZ8D..\n  .888..  ,-:7O+.7778.            .,.  I .     ..      ....     ...:..  . OO..               .--*:. 7.. .   :%XZ8.\n.,.:%I..  ,+:?O?.=I7\\$.             .   .      ....... . ::    , .*7%..  :.OO=.               ..-+..,?.. .   .I?OI.\n    .     ,7:=\\$7,,II7.            ..  ..   .. .-    ..  +7.   :  77\\$.-..? %%+                 .7\\$. +=:,..   .,..\n          .+::7Z7.:I+.            ..  :.    .. -* .. \\$  I\\$ .  -,.I\\$7 =  7.XXI                 .*...*,,.... .    .\n        . .-*:I\\$?..*.              .  *.    .  -7.. .7. I\\$.,  :-.7\\$7.=  7-\\$\\$7                ..    .,- .  ..  ...\n    . ...  :7:777. .                  -.    +- +7.   7..7\\$+ ..?.?77  =  7+777                 .. ..7?I....-   .. .\n    = .....,7:-7I-.                   -.    II =I:   :?.?I7   ?.?II. = .I?7::                   ..+--?.. -*,  .=?\n    ,,..,. ,**,I?I..              .   ,.   .II :*?.   ?.??I.. ?.:?I. - .I?II?                   . ,:*?-. ==I..=I?.\n    .=...+ .*+,-??.*              .   .:.   +7:.-7.  .+,+??:..*:.+7. :. 7777+                   .,7+++7. -+,.-=7*.\n    .=...*. :=:,++:.  .           .   .:. .. =+=.-*: .=*=**= .:-.**, ,..*****.                  .,:=*=*.,:*..***=.\n    .....-. ,*-,===.              .   .:  .  ,== :-*. .,*,*+*. .-.** :  -****.                   ,:**:*.,:+..*+*:\n    .. .... .:-:=== .             .   .:     .*: ,:*.  .*,--*,  -.-***  :****,                   .:---: ,:-..-**,\n.   ..    .. ,--:-- .             .    ,     .-: .,-,.  -::--,..:,---:, .----:                   .:=:=. .::.,===.\n       :-::. .::::- .             ..   .     .::  ,:-   .::--:, ,,,;:.  .---::                   .,:.: ..:,.::-:.\n     ,..,,,.  ,::::                .   .     .,,  ,,:.  .:,:::,..,.:::. .:::::                   .,,,, ..,.,::::\n        ,,,,  .,,,,                .   ..     .,  .,:,   ,,:,,,. ,.,,,.  .:,,,                    ..,.. ...,,:,,\n    ,,...,,,   ,,,.                    .      .,. .,,,   .,,,,,. ,.,,,.. .,,,,                    .    .,,.,,,,.\n     .,......  ...                     .      ...  ,,,   .,,,,,. ...,,,. .,,,,                          ...,.,,.\n      ,......  ...                  .  ...     ..  .....  .................,.,.                           ...,.\n      .......   .                        .     ... ....   ....... ....... .....                      ...........\n      ... ....                          ..     ...  ...   ....... .............                        ........\n       .......                          ...     ..  ...    ...... .............                       ........\n        ......                          ...     ...  ...   ... ..  ............                         ......\n        .....                           ....      .   .      ....  ............                        .... .\n        .. ...                       .. . ..           ..       .   . .... .. ..                       ....\n           . .                          . .       ..   ...   ...      ... ....                          .  .\n           .                              .       ..          .       .  .   ..\n             .                           .                    . .    ..    . .                             .\nEOC\n";
    var whale = "# whale\n#\n# modified from https://www.reddit.com/r/pics/comments/25ji0n/man_face_to_face_with_whale/chi1kdy?context=3\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n     $thoughts\n                '-.\n      .---._     \\\\ \\.--'\n    /       `-..__)  ,-'\n   |    0           /\n    \\--.__,   .__.,`\n     `-.___'._\\\\_.'\n\nEOC\n";
    var wizard = "# Wizard\n#\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n                     _____\n                   .\\'* *.\\'\n               ___/_*_(_\n              / _______ \\\\\n             _\\\\_)/___\\\\(_/_\n            / _((\\\\- -/))_ \\\\\n            \\\\ \\\\())(-)(()/ /\n             ' \\\\(((()))/ \\'\n            / \\' \\\\)).))\\\\ \\' \\\\\n           / _ \\\\ - | - /_  \\\\\n          (   ( .;\\'\\'\\';. .\\'  )\n          _\\\\\\\"__ /    )\\\\ __\\\"/_\n            \\\\/  \\\\   \\' /  \\\\/\n             .\\'  \\'...\\' \\'  )\n              / /  |   \\\\  \\\\\n             / .   .    .  \\\\\n            /   .      .    \\\\\n           /   /   |    \\\\    \\\\\n         .\\'   /    b     \\'.   \\'.\n     _.-\\'    /     Bb      \\'-.  \\'-_\n _.-\\'       |      BBb        \\'-.  \\'-.\n(________mrf\\____.dBBBb._________)____)\nEOC\n\n";
    var wood = "#\n#  \u6728\n# \u6728\u6728\n#\n\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts   --\u6728--\n       \uFF0F\uFF5C\uFF3C\n     \uFF0F  \uFF5C  \uFF3C\n  --\u6728-- \uFF5C --\u6728--\n  \uFF0F\uFF5C\uFF3C    \uFF0F\uFF5C\uFF3C\n\uFF0F  \uFF5C\u3000\uFF3C\uFF0F  \uFF5C  \uFF3C\n    \uFF5C        \uFF5C\nEOC\n";
    var world = "# World\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n          _,--',   _._.--._____\n   .--.--';_'-.', \";_      _.,-'\n  .'--'.  _.'    {`'-;_ .-.>.'\n        '-:_      )  / `' '=.\n          ) >     {_/,     /~)\n  snd     |/               `^ .'\nEOC\n";
    var www = "##\n## A cow wadvertising the World Wide Web, from lim@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n        $thoughts   ^__^\n         $thoughts  ($eyes)\\\\_______\n            (__)\\\\       )\\\\/\\\\\n             $tongue ||--WWW |\n                ||     ||\nEOC\n";
    var yasuna_01 = "##\n## \u3084\u3059\u306A\u3061\u3083\u3093\n##  \n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n  \n            . .: \u2500\u2500\u2500:. .\n         .\uFF0F.: .: .: .: .: \u30FD\n        .:   .:l.:   .: .: .:.\n        |.l:..\uFF8A.\u30CF..|\u30FD.\uFF84\uFF64:: |\n        |:l.:/\u30FD\uFF64_\u30FD|_\u30CEV:.:.|\n        |:l\uFF8A.  {j    {j  |:\u30FDl\n        \uFF89:l} ''        ''|:\u30CE\u30FD\uFF0F )\n        \u30FD\uFF8D:\u30FD.\uFF64 r---\uFF64  \uFF68\uFF89 \u252C' `\uFF0F\n     \u03B3::\u30FD  \uFF40^Y`T\uFF87\u03A4` {__\u251C'`'\n     \uFF40\u2010< \uFF3C_ \u30CF |:|  Y\n          \u30FD_>\uFF64|  |:|\uFF0F|\n               /   V   l\n             \u3008        \u3009\n           \u3008:\uFF40-:';`-\xb4:\u3009\n            .>-:\uFF67\u2500--\u2010r-:\uFF68\n            /  /     |  |\n           /  /      |  |\n          /-,/       |--|\n         \u306B7         |\u4E8C|\nEOC\n";
    var yasuna_02 = "##\n## \u3084\u3059\u306A\u3061\u3083\u3093\n##  \n##\n          $the_cow = <<EOC;\n           $thoughts\n            $thoughts\n                           _.. .:-\u2015-:. .._\n                      .: .: .: .: .: .: .: .: .: \n                   \uFF0F .: .: .: .: .: .: .: .: .: .\uFF3C\n                 ,'         ,!    \u2227           : .: \u30FD\n                /, .:: :\uFF5C./ |.:./\u30FD.:i\uFF8D.: .: .: .: ::.\n               ,''|.:: .\u4EBA/--|':/  \u30FD:| \uFF64\uFF3F.: : .: .::|\n                  |.:: \uFF72  ,,=\uFF64\uFF9A        \u309E=\uFF90\uFF64.:|..: .: :|\n                  |.:: \uFF5C{{    }}     {{    }}\u516B.: .: :|\n                 /.: : /  \u309B= \"        \u309B= \"    ;.:r \uFF64:|\n                /,.\uFF72.:\u3008                     ,, //' \uFF5D:|\n               '  \u30FD:: \u309D\u3001        \uFF70--\u2510       //  \u30CE::.\n                    \u30FE::.\uFF64\uFF1E .    \u30FD _\uFF89    ..  \uFF1C\xa8\uFF68.:}~\uFF3C\n                      `\u309C\u30FE/\uFF40>\u4E86\u3001.    v \u3014:\uFF0F|:/  \u30EC'\n                        _ . -/: ,K:::>\uFF64/: :\uFF84._\n                       |: :\u304F_.:|/:\u3008 /: :}: /~\u30FD\n              r\u300C\u300C\u300C\uFF48,>:|: <: |'::\uFF7F::<\xa8.:n\uFF62\u300C\u300C!\uFF64\n              \u309D\uFF3F_\uFF89 /: : |::\u30FD |::/: \uFF0F: :.\uFF8D\uFF3F_\u30CE\uFF5D\n               | \uFFE3 |,': :/: : \u30FD:' \uFF0F : :.:| \uFFE3 |:}\nEOC\n";
    var yasuna_03a = "##\n## \u30BD\u30FC\u30CB\u30E3\u3061\u3083\u3093\u304A\u3081\u3067\u3068\u30FC\uFF01\u30BD\u30FC\u30CB\u30E3\u3061\u3083\u3093\u304A\u3081\u3067\u3068\u30FC\uFF01\n##\n$the_cow = <<EOC;\n $thoughts\n  $thoughts\n   $thoughts\n            . .: -----  .\n         \uFF0F: .: .: .:.: .:\uFF3C\n        /    ..  . l.: .: .:\u30FD\n       : .: ,/|-/|:\u30CF.:|-.\uFF4C.:\n       |: :\u30CE |/.|/  \u30FD|.V\uFF8A.:|\n       |.::|  =\uFF1D     \uFF1D= }.:| \n       |.\u03B3|| ''  \uFF3F_   ''{::\uFF8A \n       \uFF89\u30CE\uFF8A\uFF98   \uFF5B   }     \uFF89V\n       \u2228Vv\u30FD\uFF64._  --'_ .\u30A4V\n            \u03B3:/:{.\u53C8 }\uFF8D\u30FD \n          \uFF0F:\u3009:V \uFF8A.\uFF98\u3008: \uFF3C \n        \uFF0F : V\u30FD:V// /:V ::\uFF3C \n    r\u30A4: : \uFF0F|: :\uFF3CV\u30CE: :|\u30FD: \u30FD-\uFF64\n   \uFF62  \u30FD:\uFF0F  |: o :  o:|   \uFF3C:/ \u300D\n    \u30FC'    ./: : : : : \uFF8A      \u30FC' \n          ./::o: : : :o \uFF8A \n          /\u30FD: : :\u039B: : :\uFF89:\u3001 \n        \u3008:::\uFFE3\uFFE3:::\uFFE3:::::\u3009 \n          \uFF3C:__:::::::__:\uFF0F \n            |  \u03A4\uFFE3\u03A4 | \n            |  |   |  | \n            |''|   |''| \nEOC\n";
    var yasuna_03 = "##\n## \u30BD\u30FC\u30CB\u30E3\u3061\u3083\u3093\u304A\u3081\u3067\u3068\u30FC\uFF01\u30BD\u30FC\u30CB\u30E3\u3061\u3083\u3093\u304A\u3081\u3067\u3068\u30FC\uFF01\n##\n$the_cow = <<EOC;\n            . .: -----  .\n         \uFF0F: .: .: .:.: .:\uFF3C\n        /    ..  . l.: .: .:\u30FD\n       : .: ,/|-/|:\u30CF.:|-.\uFF4C.:\n       |: :\u30CE |/.|/  \u30FD|.V\uFF8A.:|\n       |.::|  =\uFF1D     \uFF1D= }.:| \n       |.\u03B3|| ''  \uFF3F_   ''{::\uFF8A \n       \uFF89\u30CE\uFF8A\uFF98   \uFF5B   }     \uFF89V\n       \u2228Vv\u30FD\uFF64._  --'_ .\u30A4V\n            \u03B3:/:{.\u53C8 }\uFF8D\u30FD \n          \uFF0F:\u3009:V \uFF8A.\uFF98\u3008: \uFF3C \n        \uFF0F : V\u30FD:V// /:V ::\uFF3C \n    r\u30A4: : \uFF0F|: :\uFF3CV\u30CE: :|\u30FD: \u30FD-\uFF64\n   \uFF62  \u30FD:\uFF0F  |: o :  o:|   \uFF3C:/ \u300D\n    \u30FC'    ./: : : : : \uFF8A      \u30FC' \n          ./::o: : : :o \uFF8A \n          /\u30FD: : :\u039B: : :\uFF89:\u3001 \n        \u3008:::\uFFE3\uFFE3:::\uFFE3:::::\u3009 \n          \uFF3C:__:::::::__:\uFF0F \n            |  \u03A4\uFFE3\u03A4 | \n            |  |   |  | \n            |''|   |''| \nEOC\n";
    var yasuna_04 = "##\n## \u6E7F\u5E03\n##\n$the_cow = <<EOC;\n            $thoughts\n             $thoughts\n              $thoughts\n                    .  .:----.:  .      \n                  \uFF0F    .: .: .: .:\uFF3C\n                 .          .. .: .: \u30FD\n                /.: :/|:/.:\uFF8A::\uFF8A : .: .:.  \n              \u30CE.: ./-|/ |/ V- V\uFF64.: .:.:|            \n               \uFF5C:\u30CE   _     _   V: .:,:|\n                |:}  =\uFF1D     \uFF1D= |:l\uFF64:.:|\n                |:\uFF89''    \uFF3F_   ''|:| }::|\n               \u516B:\u30FD.   V_ \u4E3F   .|\uFF89\uFF72: :\u516B\n                 \u30FD/\u2267=-z:-:r:=\u2266l:\uFF89|:\uFF0F\n                    \uFF0F/ \uFF9A\uFF87\uFF98: \u3009 \uFF3C\n                   / :\u3009|/l/:< : \u30CF  \n                  /:}:{:|:/:/ : : :.     \n                 /: { : ': /: : {: :|            \n                 {: : :\u30FD:/: : : : :}          \n                /} :}:o : : o: {: : \uFF8A                \n                {: :\uFF98: : : : : |: : }  \nEOC\n";
    var yasuna_05 = "##\n## \u30C0\u30FC\u30C4\u306E\u624D\u80FD\n##\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n       \uFF0F .: .: .: .: .: .: .:  .: .: . \uFF3C\n     ./   .: .: .: .: .: .: .:  .: .: .: .\u30FD\n     /          /  . ..l..  \u30FD.: .: .: .: .:.\n    ,    .. .: /  .| : \u30CF: .|  \uFF3C.: .: .: .: .\n    |.: .:.l.:/  \u30FD|.:/  \uFF64 .|.\u30CE \uFF3C .l:.: .: |\n    |.: .:.|:/.\uFF68\u2260\uFF90|:/    \uFF3C| \u30A3\u2260\u30DF\uFF64|.:.: .:|\n    |.: .: \u30CE /Y::::\u30FD       Y::::\u30FD\u30FD\uFF3C .: \uFF5C\n   /:.: /^|:|{.{:::::}       {:::::}.} |:|\u30FD:\uFF64\n \u30CE:\u30CE: { |:| \uFF35\u3046\u30FC\u30BD       \u3046\u30FC\u30BD  |:| }\u30FD:\uFF3C\n    | : \u30FD|.|  '' \uFFE3           \uFFE3 ''U|:| /:|\n     :: ::\u4EBA|                        |\u4EBA::\uFF98\n     V\uFF8A:: :: \\                     /::  \uFF8A/\n      \\|\u30FD:: ::\u30FD\uFF64     --      ,\u30A4::\uFF0F|\uFF0F\n          \uFF3C| \u30FD:\u2267=r-r---r-r=\u2266:\u30CE|\uFF0F\n             . :\xb4:.\u30FD\u4E8C\u4E8C.\u30CE: :\uFF40: .\n            \uFF0F: : :  \uFF0F\u30CF\uFF3C: : : : \uFF3C\nEOC\n";
    var yasuna_06 = "##\n## \u7B56\u58EB\n##  \n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n \n              ,.:\uFFE3\uFFE3\uFFE3\uFFE3:.\uFF64\n            \uFF0F .: .: .: .: .:\uFF3C\n          \uFF0F   __ l  __    .: .\u30FD\n        \uFF0F:  ./\uFF36\uFF36\uFF36\uFF3C:\uFF84\uFF64`.: .:.\n   (\uFF3C  \uFFE3/.:\uFF72.\uFF68=\uFF90` \xb4\uFF68=\uFF90\uFF64\u30FD,: .:|\n   {\uFF90\u3068^\u30D8l.:\uFF89{\u3045\uFF7F,  \u3045\uFF7F}|:|^\u30FD:|\n    \u30FD\u3003: \uFF9A\uFF5B    __ -\uFF64 \" |:| \uFF89::|\n      \uFF3C: :\uFF8A\uFF3C  {    }  ,\uFF9A\u30A4:::\u516B\n        \uFF3C :V.:>:\u30CB\u30CB\uFF86:\uFF1C\uFF36\uFF36\uFF36\n          \uFF3C :v:\u3008|\u7236 /:|:\uFF8A\u2510\n            \u30FE{:\uFF62|/:|/ <:/:\uFF89\uFF3C\n              {:\\|::/:\uFF0F:{: :\u30FD\n              {: : : :`: /> : :>\n             / : \uFF9F : : \uFF9F : Y: :/\n            /: : : : : : : |\u30FD/\n           \u3008: :\uFF9F: \uFF8A : :\uFF9F: \u221F\uFF7A\n           /::---':::------\u304F \nEOC\n";
    var yasuna_07 = "##\n## \u3054\u307C\u3046\n##  \n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n     $thoughts\n               \uFF3F\uFF3F\uFF3F\uFF3F\uFF3F\n           .:\xb4.: .: . : :. `  \u3001\n     ..: \uFF0F.: .: .: . : .: .:   \uFF3C\n    .::\uFF0F:::       \uFF89   /\uFF64         \uFF3C\n   ..:/.: ::.:|\uFF3F\uFF0F::|:/  \uFF3C:__|:  .\\\n .:: :::: :::/|\uFF0F\uFF40\u30FD|/    '\uFF3C:\uFF84\u3001:  .\n .:::|.:: ::/:\uFF68f\u4E8E\u30DF     .\u30A3\u2260\uFF90\uFF64\uFF36: :. .\n..:::|.:::\u30CE::{{:::}       {:::}}{: |\uFF3C|\n..:::::::_::|::\u3046\uFF86\u30BD       \u3046:\u30BD\uFF36: |\n.::: /.:/ |:|:\u30FD\u30FD       \uFF40      }: |\n.:::/\uFF72:{  |:|:    \uFF0F\uFFE3\uFFE3 \uFF67      \uFF89  :|\n ..::|.\u309D,\u30FD|:   /      /     \uFF0F:::\u516B\n .:::\uFF36:::::\uFF1E:._\u30FD\u3001 ./__ .\u30A4:\uFF8A:\uFF0F\n  ..::\uFF3C|\uFF3C:\u6597:\uFF70r\uFF8D`\u30A2\u53C8\uFF1C\uFF36|\uFF0F\n   ..::::\uFF0F\u2312: :|:\uFF36\uFF36{\u30FD:\uFF3C\n      .:/.: :|::l::\uFF8D}/\\|:}:.\uFF3C\n    ..::\uFF62.: :|::\uFF1E:\uFF36//|\u3008:.}.}\n  ...::/.:: :|::\uFF3C: \uFF36/| / :}:.\u2510\n ...::/.::::r\uFF70::::\uFF3C:\uFF36|/\u3008::::.\u30FD\n..:::/.::::\uFF72::::::: \uFF3C Y::\u30FD:::::.\uFF3C \nEOC\n";
    var yasuna_08 = "#\n# \u3054\u307C\u30462\n#\n\n$the_cow << EOC;\n  $thoughts\n   $thoughts\n    $thoughts\n          ,.:\u2500\u2500\u2010-:.,\n        \uFF0F:.           \uFF3C\n      \uFF0F:. :. :. }:. :. :.\u30FD\n     .: :. :. }.:/\uFF3C.:|,:. :\uFF8D\n     |:.:. :. /\uFF36\u30CE \u30FD\uFF84\uFF3C:|\uFF64\uFF8D\n     |:.:. /\uFF36_\uFF86    \uFF86\uFF3F_ {::\uFF8D\n     |:.\uFF8D .| \u0393T      | |\uFF36.\uFF3C\n     |:{ |:|.l\uFF5C      | |\u516B:\u30FC\n     \u30CF:`:\uFF36\uFF64l\uFF5C\u2220\u4E8Cl.|.\uFF72:\uFF8A:\uFF89\n      _\uFF36\uFF3C;\uFF1E=r rr r=\uFF1C\uFF8A\uFF0F   \uFF3F\uFF3F\n     |\u3056 |\uFF8D :{\uFF36/V:}:\uFF3C      |\u3054  |\n    {\uFF90}\u304F{)}:\uFF1E\uFF36/< :  \uFF1E-:-'{}\u307C{\uFF90}\n     |\u308D_|:\uFF89:\uFF3C:Y / }\uFF90 : : : |  \u3046Y\n          \uFF89 :o: : :oj `\u30FC\u2500-\xb4 \uFFE3\uFFE3\n         / : : : : :{\n        /: : o : :o:\uFF8D\n      \u3008 : : : /\\: : \u3009\n       /::\u30FC\u2500\u2500'::\u30FC\u2010\uFF8D\n     \u3008:::::::::::::::::\u3009\n       \uFFE3|\uFFE3\uFF62\uFFE3|\uFFE3|\uFFE3\n         |  |  |  | \nEOC\n";
    var yasuna_09 = "#\n# \u3061\u3073\u304D\u3083\u3089\n#\n\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n    $thoughts\n    \n           ____\n       ,: .: .: :.\u30FD\n     ,'       /\\   \uFF49\n     {: .:\uFF89\uFF9A\uFF8D/  Vi\uFF8D:}\n    .{,\uFF64\u3008 \uFF2F   \uFF2F{.:.\n    \u30CE\u30FD\\!\"       }.:\uFF8A\n      \uFF37\uFF8Aw=-\uFF64\u3078,\uFF6C<,V'      \n         /\uFF8D }{./\\\n        ;: i:V:!;}\n        |:\uFF5C: :\uFF5C}\n        |:|:\uFF61: \uFF61l}\n        >-'-\uFF9F-'`\uFF9Fu\n        \uFF70i-i\uFF5Ei-i~\n         |.|  |.|\n         |-|  |-|\n         \u30D2\uFF7A  \u30D2\uFF7A \nEOC\n";
    var yasuna_10 = "#\n# \u4F55\u3067\u305D\u3046\u3044\u3046\u3068\u304D\u3060\u3051\u51C4\u305D\u3046\u306A\u306E\uFF01\n#\n\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n    $thoughts\n             \uFF3F\uFF3F\uFF3F\uFF3F\n       \uFF1C :: :: :: :: `\u4E36\uFF64\n       \uFF0F   _, \uFF68:\uFF8A \uFF64\uFF3F: ::\uFF3C\n     \u2220:: :/ |/|/ \\/  \\/:: |\nr\u30D8n  /:\\/ c=\uFF1D.::.\uFF1D=\u3063\\/ |  rv\u3078\n\u30FD\uFF0F\uFF3Ci:\uFF5C   \u250C\u2500\u2500\u2510   i::|\uFF0F\uFF3C\u30CE\n  \uFF3C::|(||   |:::::|    ||)|::\uFF0F\n    \uFF3C|\u4EBA|.\u3001|:::::| .\uFF68|\uFF89:\u516B\uFF0F\n      \uFF3C\\/\\/>|:::::|<\\/\\/\uFF0F\n        \uFF3C :::>T\uFF87T<::: \uFF0F\n          Y : \uFF3CW\uFF0F : Y \nEOC\n";
    var yasuna_11 = "#\n# \u304D\u3085\u30FC\u3063\uFF01\n#\n\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts          . .: -\u30FC\u30FC\u2015 :._\n    $thoughts       \uFF0F.: .: .: .:     \uFF1E  r\u2312\u30FD\n           / .:         \uFF5C.\uFF64.:\uFF3C  \uFF89 \u30CE\n          .: .: .:|\uFF3C  |\u6597\uFF8D\uFF84.:.:\uFF36  /\n          |: .: /\\|\u30CE\uFF3C| \uFF0F \uFF36::\uFF2E./\n          |: .:/ c\u2500-        \uFF39:| /\n          |:\uFF8A:{``   ,  --\u2510  \u4EBAV /\n          \uFF89:L\uFF3C>   \u304F_,\uFFE3\u2518\uFF0F  \uFF3C\n   /\u2312\uFFE3\uFFE3\uFFE3|\uFFE3\uFFE3\uFF1E--r-r\uFF6D\uFF1C|   \uFF0F\n   L_,v\u30FC\u2500-|    \uFF64 }  \uFF36Y\uFF8A   Y\n             \uFFE3\uFFE3\uFF36  \uFF5C/\u2227   \uFF8D\n                  {   |//\u2227  \uFF8D\n                  {    \uFF3C//   \uFF8D\n                  {            \uFF3C\n                  \uFF5D             >\nEOC\n";
    var yasuna_12 = "#\n# \u304B\u3089\u3042\u3052\n#\n\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts\n         $thoughts        .:  \uFFE3\uFFE3\uFFE3\uFFE3:.\u4E36\uFF64\n               \uFF0F.: .: .: .: .: .: \uFF3C\n              /    \uFF0F|    /\\.:| .: :.\n             / .:|\u4E42 |/{:/ _\u4E42/\\ .:.:|\n           \u30CE.:\\/\uFF68\u5E81\uFF90` \\/\uFF68\u5E81\uFF90x  \\/:.:|\n             |:}{\u5F0B.\uFF89    \u5F0B\u30CE } /.:.:|\n             \uFF9A:\uFF98''          '' \uFF5C:\u30CF:\uFF3C\n             {\u4EBA       ,\u3001    ,\uFF5C/\u30CE:\u5382 \nEOC\n";
    var yasuna_13 = "#\n# \u8EE2\u3093\u3067\u3082\u6CE3\u304B\u306A\u3044\uFF01\n#\n\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts    \uFF61\n         $thoughts       \uFF3F\uFF3F\uFF3F__{_    o\n      \u25CB   \u30FD\uFFE3    .: .: .: \uFF40\u4E36\uFF3F_\n           \uFF0F .: .\uFF0F;|.:/|::\u2227.:\uFF3C        \u041E\n     (\u30FDn\u2220 .::|\u2220\u4E8C:|:/:|\u30F3-:\u2228:\u300C\uFF9A^L\n     \u03B6, \u30D8 /::(___)|/:(\uFFE3\uFFE3 )|.:/\u3001  \u03B6\n     `\u304F: :/_:\uFF89(_) \uFF3F\uFF3F \uFFE3(_) |:/:`\uFF70:/\n  \u3002    \uFF3C|\uFF3C\u4EBA   |/   `\u2312\u30FD \uFF5C/ : :/  o\n      __\u250C   \uFF3C`\u30D8|/\u30FD/\u30FD\uFF0F^\u30FD/\uFF0F/:/\uFF0F/\n      \uFF3C                        /:\uFF0F / \nEOC\n";
    var yasuna_14 = "#\n# \u304F\u3063\u3001\u304F\u3045\u30FC\uFF01\n#\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts\n         $thoughts\n                 .:-\u2500\u2500\u2500\u2500-:.  .\n             .: .: .: .: .: .: .: :.\n          \uFF0F.: .: .: .: .: .: .: .:  \uFF3C\n         .: .:          /:  |        :.\n        .: .: : :  |.:./ |.: \u30CF.:.|::|.: :\uFF3C\n       /.: .: .: .:|.:/ u|.:/ u \uFF64:|::|.:\uFF5C\u2015`\n      /.: .: .:|:,|.\uFF3C._\uFF68.:/ \uFF64_\uFF0F\uFF5C\u2228,::|\n     /.: .: .: |:/\u30A3\u2260\u30DF |/  \u30A3=\u30DF\uFF64 \u2228::\uFF5C\n    /..: ,--|:\uFF5C  {\u3093i:i}     ri:i}} \uFF8A::|\n   /.\u30CE.:/\u3078|:|.   \u2228:\u30BF...::.\u30FE:\u30BF  .:.:\uFF64\n   \uFF0F:: :\uFF8A (|:| u ''       '    ''  {:|\u30FD:\uFF3C\n     {: :\uFF3C_|:| \uFF55   __          u \uFF89:\uFF5C\n     \u2228\uFF8A:\uFF8A:\u30FD.|\uFF64   \uFF08- `\uFF70\uFF67      ..\uFF72::/\uFF89\n       ,:\uFF1C:\uFFE3/|\uFF64\uFF1E:._\uFFE3..:-=\u2266::\uFF8A:\uFF0F\n      /: \u30FD::/:| \uFF3C_\u30A3 .\u30CF\uFF1E:\u3001\n     \u300D: : :\u304F:\uFF5C\uFF0F{;;}\u2228: }::\uFF8A\n    /:\uFF3C : }/\uFFE3`Y\u30FD:\u2225:\uFF0F: /:\u300CY\u4E8C\u30FD\n   / : : : /  \uFFE3}-':/::\u3009: }:/Y{\u2500 }\n  /: : : :/  .\u4E8C\uFF8C::/::/: : \uFF98::\uFF8A{-- \uFF89\n./\u3078\u2500\u2500\u2010\uFF8A  ,-\uFF72 :/::/ : :\uFF91:-{\uFF64_\u30A8\u30CE\n{: : : :.\u30FD>\u30A4:|:/::\u30CE: :/ : {{ \uFF0F\uFF89 \nEOC\n";
    var yasuna_16 = "$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n         ..: \uFFE3\uFFE3\uFFE3\uFFE3: :.\n       \uFF0F::  /\uFF5C.:/ |.: .:\uFF3C\n      ,  /\uFF5C/  |./  |.\uFF8A.: .:\u30FD\n    ./.:\uFF72__\u30CE   \u30FD\uFF64___\u2228.: .:.\n   ./: .:\u2261\u2261     \u2261\u2261.|.: .:\uFF5C\n   /\u30CE|/} }.      } } |:\uFF8A:.:\uFF5C\n     .\u30FD{,{ -~~~- {,{\uFF5C:/\uFF89:\u4ECE\n      \u2228v\uFF64\uFF1Ez-r-x-:r\uFF1C/\uFF9A\uFF9A\u3078 \nEOC\n";
    var yasuna_17 = "#\n# \u3055\u3063\u305D\u304F\u8A66\u3057\u3066\u307F\u3088\u3046 \u9053\u5177\u6301\u3063\u3066\u306A\u3044\u304B\u3089\u4F5C\u308B\u3057\u304B\u306A\u3044\u304B\u306A\n#  \n\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n     $thoughts                 ____\n                 .: :<::. ::.>: :.\n               \uFF0F:: ::. :. ::. ::`:\u3001\n               `::. ::.\u30A3:.i::.\u3001::.\u30FD\n             /'      ./|..\uFF84.}V.. .. \uFF8A\n            '.. .. ./L/\uFF5C:| \u4E00V::. ::\uFF11\n            i::. ::/}/` V:| V V\uFF84::. ::i\n            |::. :/Y\u828B\u30DFV!Y \u828B\u30DF|::. .|\n            ,::. \u30CF {::}  V {::}}:r,:\u4EE3\n            /::. :}  \u3064\uFF89    \u3064\uFF89\uFF5C:\u30EC:}\u309D  \u30FD\n              V::\u516B    r\u4E00 \u2510   \uFF68!::.:\uFF98      }\n       \uFF5Br     \uFF3C\uFF8A:\uFF1E- .\u4E00-'.s<:\u30CF}\u30FD}   __\u30CE \uFF89\n        \u5F0B\u4E8C\u4E00   \u30FD:{\uFF1E}_\u30CE  / \u309D\uFF64\n                \uFF61\uFF1C   \u3008\uFF8A\u3009  {    `\u3001\n              \uFF0F     i       `\uFF64.    `\u3001\n            \uFF0F    \u30D5^|   \u3000   ',\uFF9E\u3001   `\u3001\n           \u304F   \uFF0F   |         ', \uFF9E\u3001y \u30FD\n           t\u309D_r     r          ',  ><\u4E00'\n                    /  \u309E\uFF3F      '\n                   /      \u4E00      `\nEOC\n";
    var yasuna_18 = "#\n# \u307E\u3001\u3042\u308A\u304C\u3061\u306A\u8A00\u3044\u8A33\u3060\u3088\u306D\n#  \n\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n                      ,:\u4E8C\u4E8C\u4E8C\u4E8C:. .,\n                   \uFF0F.\uFF0F\uFF3F\uFF3F\uFF3F_  \uFF3C.:\uFF3C\n                  /. /\uFF0F.: .: .:\uFF3C  : .:\uFF3C\n                 /.: .: .:/\uFF5C:/\\ .:\uFF3C}.: .:.\n                .: |.:/\u4E00/ |:/ \u4E00.:}: .: .:\uFF5C\n                |.:|\u30CE |/_\uFF5C/ _  \\/\uFF8D: .: .:|\n                |.: \uFF5C= \uFF1D    \uFF1D\uFF1D= \\/}: .:|\n                |:: \uFF98''           '' /:/\uFF64.:|\n               \u30CE:|:\u4EBA    \u4E00\u4E00 \uFF64    /:/ \uFF89.:|\n                , \u2534\uFF1C\uFF3C  {     \uFF5D ,{:/\u30A4::\u516B\n               /_..   \uFF3C` \u30FC\u252C\u4E00r\uFF1C:\u516B\u516B\uFF0F\n               \uFF0F  T\uFF3C   `\uFF1C}\u309E=\u5F61'\u2312\uFF3C\uFF3C_>\n              /___ |  >\uFF64    \uFF40''\uFF3C   \uFF5C\n             /\uFF86}::\\/\uFF0F  \uFF3C       \uFF5C  \uFF5C\n          \u3000{\uFF86\uFF89:: /''\uFF3C | `|r--\uFF6F\uFF1C|_\uFF0F|\n           /__   V    \uFF5D|  \u300B=\u300A      |\n           \uFF3C \uFF3C/\uFF40\u4E00\uFF8D\u30CE|  { 6 }     \uFF5B \n             \uFFE3        \uFF62   \u309E= '      }\n                      \uFF89               \u3009 \nEOC\n";
    var yasuna_19 = "#\n# \u3084\u3059\u306A\u3061\u3083\u3093\u306E\u307E\u3093\u307E\u308B\u304A\u76EE\u76EE\n#\n\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n\n:. :.\u5B51|:/\u4ED4:./  \uFF3C:.| V\uFF5C:. \uFF84:. :.\n:. :/  |/  |:/     \u30FD|   \\/:!\\/:.:\n:. / ,\u30A3f\u828B\u30DF     \u30A3f\u828B\uFF40:V  .\\/.\n:./ ,' :'::::\uFF8A      ,':::::\uFF8A \u30FD /:.\n:t  { {k)::::!     !k)::::!  },'.:\n:\uFF8A    \u5F0B \u4E00\u30BD      \u5F0B \u4E00 \uFF7F ,: ::\n:.{      \uFFE3    ,       \uFFE3  ; :./\n:.| ''                  '' |:./\n:.\uFF84\uFF64      ` \uFF64      \u30CE     \uFF89!:/\u30CE\n\uFF84\uFF64!:\uFF1E \uFF64.     \u4E00  '   .,\uFF1C:|/::.\n:: :: :: ::>z-\u4E00-z<:: :: :: :: :.\nV|\uFF3C:/}\uFF8D/  `\u30FC\u53C8\u30FC' \\/}\u30CE{\uFF0F|:\uFF0F\n  ,z'\uFFE3 \uFF8D   /{ .\uFF84\uFF64  /\uFFE3  \u30FD\n\uFF0F      /\\./x \u4E00 \uFF90./       \uFF3C \nEOC\n";
    var yasuna_20 = "#\n# yasuna_20.cow - \u3082\u3057\u304B\u3057\u305F\u3089\u65B0\u7A2E\u304B\u3082\uFF01\n#\n\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n    $thoughts            ________\n             .:          :\uFF40\u4E36\n           /.:   \uFF5B :\uFF5C\uFF64  .: .:\uFF3C\n          /   |.: /\\.:|\uFF89\uFF3C.} .: :.\n         .: .:/\\\u4E42  \uFF3C\uFF68=\u30DFV.:}.: |\n         |.:\\/ \uFF68=\uFF90    \uFF8B\u30BD\uFF5DV:|.:\uFF5C\n         |.:\uFF8A{ \uFF8B\u30BD '    ''\uFF5C:|\u30FD\uFF5C\n         |.: \uFF8A''          \uFF5C:\uFF89\u30CE:\uFF3C\n        \u4E3F.:|\u4EBA    \u2312\u30FD    \uFF72::\\/ \uFFE3\n    /^^\uFF8D  \\/Vv:\uFF1E=rr::rr\uFF1CvV\\/\n  \uFF5B   \uFF89    \u30CE   \\/\u30CC\\\uFF0F \uFF3C\n    \uFF3C  \uFF3C,\u304F  }   |:|   V \uFF3C\n      \uFF3C     >\u30A3   |:|   \uFF5D  \uFF89\n        \uFF3C\uFF0F  \uFF89    |:|   }-\u304F \uFF3C\n             /      V     \\  \uFF3C  \uFF3C \nEOC\n";
    var ymd_udon = "##\n## \u5C71\u7530\u3046\u3069\u3093\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n  \n             _ - \uFFE3 - _\n           _-_\uFF3F\uFF3F\uFF3F\uFF3F_- _\n         \uFFE3\uFF4C  \u25CF   \u25CF  l\uFFE3\n            \u30FD\uFF64_ \u2312 _\u30CE\n         _ -\u2010\u30CB \uFFE3 \u30CB\u2010- _\n  /\u2312 \u2010\uFF86\u2010 \uFFE3   /    \\ \uFFE3 \u2010\uFF86\u2010\u2312\u30FD\n \u30FD\uFF64_\u30CE       \u2514-\uFF55\u2010\u2518      \u30FD\uFF64_\u30CE\nEOC\n";
    var zenNohMilk = "$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n    $thoughts\n\n     i\uFF86\uFF86i\n    /   /\u30FD\n   \uFF5C\u8FB2\uFF5C\uFF5C\n   \uFF5C\u5354\uFF5C\uFF5C\n   \uFF5C\u725B\uFF5C\uFF5C\uFF3F\n \uFF0F\uFF5C\u4E73\uFF5C\uFF5C\uFF0F\n \uFFE3\uFFE3\uFFE3\uFFE3\uFFE3\nEOC\n";
    function convertToCliOptions(browserOptions) {
        const cliOptions = {
            e: browserOptions.eyes || 'oo',
            T: browserOptions.tongue || '  ',
            n: browserOptions.wrap,
            W: browserOptions.wrapLength || 40,
            text: browserOptions.text || '',
            _: browserOptions.text || [],
            f: browserOptions.cow
        };
        if (browserOptions.mode) // converts mode: 'b' to b: true
        cliOptions[browserOptions.mode] = true;
        return cliOptions;
    }
    function doIt(options, sayAloud) {
        const cow = options.f || DEFAULT_COW;
        const face = faces(options);
        face.thoughts = sayAloud ? "\\" : "o";
        const action = sayAloud ? "say" : "think";
        return balloon[action](options.text || options._.join(" "), options.n ? null : options.W) + "\n" + replacer(cow, face);
    }
    function say$1(browserOptions) {
        return doIt(convertToCliOptions(browserOptions), true);
    }
    function think$1(browserOptions) {
        return doIt(convertToCliOptions(browserOptions), false);
    }
    exports1.ACKBAR = ackbar;
    exports1.APERTURE = aperture;
    exports1.APERTURE_BLANK = apertureBlank;
    exports1.ARMADILLO = armadillo;
    exports1.ATAT = atat;
    exports1.ATOM = atom;
    exports1.AWESOME_FACE = awesomeFace;
    exports1.BANANA = banana;
    exports1.BEARFACE = bearface;
    exports1.BEAVIS_ZEN = beavis_zen;
    exports1.BEES = bees;
    exports1.BILL_THE_CAT = billTheCat;
    exports1.BIOHAZARD = biohazard;
    exports1.BISHOP = bishop;
    exports1.BLACK_MESA = blackMesa;
    exports1.BONG = bong;
    exports1.BOX = box;
    exports1.BROKEN_HEART = brokenHeart;
    exports1.BUD_FROGS = budFrogs;
    exports1.BUNNY = bunny;
    exports1.C3PO = C3PO;
    exports1.CAKE = cake;
    exports1.CAKE_WITH_CANDLES = cakeWithCandles;
    exports1.CAT = cat;
    exports1.CAT2 = cat2;
    exports1.CATFENCE = catfence;
    exports1.CHARIZARDVICE = charizardvice;
    exports1.CHARLIE = charlie;
    exports1.CHEESE = cheese;
    exports1.CHESSMEN = chessmen;
    exports1.CHITO = chito;
    exports1.CLAW_ARM = clawArm;
    exports1.CLIPPY = clippy;
    exports1.COMPANION_CUBE = companionCube;
    exports1.COWER = cower;
    exports1.COWFEE = cowfee;
    exports1.CTHULHU_MINI = cthulhuMini;
    exports1.CUBE = cube;
    exports1.DAEMON = daemon;
    exports1.DALEK = dalek;
    exports1.DALEK_SHOOTING = dalekShooting;
    exports1.DEFAULT = DEFAULT_COW;
    exports1.DOCKER_WHALE = dockerWhale;
    exports1.DOGE = doge;
    exports1.DOLPHIN = dolphin;
    exports1.DRAGON = dragon;
    exports1.DRAGON_AND_COW = dragonAndCow;
    exports1.EBI_FURAI = ebi_furai;
    exports1.ELEPHANT = elephant;
    exports1.ELEPHANT2 = elephant2;
    exports1.ELEPHANT_IN_SNAKE = elephantInSnake;
    exports1.EXPLOSION = explosion;
    exports1.EYES = eyes;
    exports1.FAT_BANANA = fatBanana;
    exports1.FAT_COW = fatCow;
    exports1.FENCE = fence;
    exports1.FIRE = fire;
    exports1.FLAMING_SHEEP = flamingSheep;
    exports1.FOX = fox;
    exports1.GHOST = ghost;
    exports1.GHOSTBUSTERS = ghostbusters;
    exports1.GLADOS = glados;
    exports1.GOAT = goat;
    exports1.GOAT2 = goat2;
    exports1.GOLDEN_EAGLE = goldenEagle;
    exports1.HAND = hand;
    exports1.HAPPY_WHALE = happyWhale;
    exports1.HEDGEHOG = hedgehog;
    exports1.HELLOKITTY = hellokitty;
    exports1.HIPPIE = hippie;
    exports1.HIYA = hiya;
    exports1.HIYOKO = hiyoko;
    exports1.HOMER = homer;
    exports1.HYPNO = hypno;
    exports1.IBM = ibm;
    exports1.IWASHI = iwashi;
    exports1.JELLYFISH = jellyfish;
    exports1.KARL_MARX = karl_marx;
    exports1.KILROY = kilroy;
    exports1.KING = king;
    exports1.KISS = kiss;
    exports1.KITTEN = kitten;
    exports1.KITTY = kitty;
    exports1.KNIGHT = knight;
    exports1.KOALA = koala;
    exports1.KOSH = kosh;
    exports1.LAMB = lamb;
    exports1.LAMB2 = lamb2;
    exports1.LIGHTBULB = lightbulb;
    exports1.LOBSTER = lobster;
    exports1.LOLLERSKATES = lollerskates;
    exports1.LUKE_KOALA = lukeKoala;
    exports1.MAILCHIMP = mailchimp;
    exports1.MAZE_RUNNER = mazeRunner;
    exports1.MECH_AND_COW = mechAndCow;
    exports1.MEOW = meow;
    exports1.MILK = milk;
    exports1.MINOTAUR = minotaur;
    exports1.MONA_LISA = monaLisa;
    exports1.MOOFASA = moofasa;
    exports1.MOOGHIDJIRAH = mooghidjirah;
    exports1.MOOJIRA = moojira;
    exports1.MOOSE = moose;
    exports1.MULE = mule;
    exports1.MUTILATED = mutilated;
    exports1.NYAN = nyan;
    exports1.OCTOPUS = octopus;
    exports1.OKAZU = okazu;
    exports1.OWL = owl;
    exports1.PAWN = pawn;
    exports1.PERIODIC_TABLE = periodicTable;
    exports1.PERSONALITY_SPHERE = personalitySphere;
    exports1.PINBALL_MACHINE = pinballMachine;
    exports1.PSYCHIATRICHELP = psychiatrichelp;
    exports1.PSYCHIATRICHELP2 = psychiatrichelp2;
    exports1.PTERODACTYL = pterodactyl;
    exports1.QUEEN = queen;
    exports1.R2_D2 = R2D2;
    exports1.RADIO = radio;
    exports1.REN = ren;
    exports1.RENGE = renge;
    exports1.ROBOT = robot;
    exports1.ROBOTFINDSKITTEN = robotfindskitten;
    exports1.ROFLCOPTER = roflcopter;
    exports1.ROOK = rook;
    exports1.SACHIKO = sachiko;
    exports1.SATANIC = satanic;
    exports1.SEAHORSE = seahorse;
    exports1.SEAHORSE_BIG = seahorseBig;
    exports1.SHEEP = sheep;
    exports1.SHIKATO = shikato;
    exports1.SHRUG = shrug;
    exports1.SKELETON = skeleton;
    exports1.SMALL = small;
    exports1.SMILING_OCTOPUS = smilingOctopus;
    exports1.SNOOPY = snoopy;
    exports1.SNOOPYHOUSE = snoopyhouse;
    exports1.SNOOPYSLEEP = snoopysleep;
    exports1.SPIDERCOW = spidercow;
    exports1.SQUID = squid;
    exports1.SQUIRREL = squirrel;
    exports1.STEGOSAURUS = stegosaurus;
    exports1.STIMPY = stimpy;
    exports1.SUDOWOODO = sudowoodo;
    exports1.SUPERMILKER = supermilker;
    exports1.SURGERY = surgery;
    exports1.TABLEFLIP = tableflip;
    exports1.TAXI = taxi;
    exports1.TELEBEARS = telebears;
    exports1.TEMPLATE = template;
    exports1.THREADER = threader;
    exports1.THREECUBES = threecubes;
    exports1.TOASTER = toaster;
    exports1.TORTOISE = tortoise;
    exports1.TURKEY = turkey;
    exports1.TURTLE = turtle;
    exports1.TUX = tux;
    exports1.TUX_BIG = tuxBig;
    exports1.TWEETY_BIRD = tweetyBird;
    exports1.USA = USA;
    exports1.VADER = vader;
    exports1.VADER_KOALA = vaderKoala;
    exports1.WEEPING_ANGEL = weepingAngel;
    exports1.WHALE = whale;
    exports1.WIZARD = wizard;
    exports1.WOOD = wood;
    exports1.WORLD = world;
    exports1.WWW = www;
    exports1.YASUNA_01 = yasuna_01;
    exports1.YASUNA_02 = yasuna_02;
    exports1.YASUNA_03 = yasuna_03;
    exports1.YASUNA_03A = yasuna_03a;
    exports1.YASUNA_04 = yasuna_04;
    exports1.YASUNA_05 = yasuna_05;
    exports1.YASUNA_06 = yasuna_06;
    exports1.YASUNA_07 = yasuna_07;
    exports1.YASUNA_08 = yasuna_08;
    exports1.YASUNA_09 = yasuna_09;
    exports1.YASUNA_10 = yasuna_10;
    exports1.YASUNA_11 = yasuna_11;
    exports1.YASUNA_12 = yasuna_12;
    exports1.YASUNA_13 = yasuna_13;
    exports1.YASUNA_14 = yasuna_14;
    exports1.YASUNA_16 = yasuna_16;
    exports1.YASUNA_17 = yasuna_17;
    exports1.YASUNA_18 = yasuna_18;
    exports1.YASUNA_19 = yasuna_19;
    exports1.YASUNA_20 = yasuna_20;
    exports1.YMD_UDON = ymd_udon;
    exports1.ZEN_NOH_MILK = zenNohMilk;
    exports1.say = say$1;
    exports1.think = think$1;
    Object.defineProperty(exports1, '__esModule', {
        value: true
    });
});

},{}]},["5j6Kf","a0t4e"], "a0t4e", "parcelRequire2f20", {})

//# sourceMappingURL=2_7 Empaquetador.31b563d9.js.map
