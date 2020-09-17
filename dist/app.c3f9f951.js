// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/courses.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.courseCombinations = exports.categories = void 0;
var categories = {
  Deutsch: ['Deutsch'],
  Fremdsprache: ['Französisch', 'Englisch', 'Spanisch', 'Latein'],
  'Gesellschaftswissenschaftliches Fach': ['Geschichte', 'Sozialkunde', 'Erdkunde'],
  Mathematik: ['Mathematik'],
  Naturwissenschaft: ['Biologie', 'Physik', 'Chemie'],
  Informatik: ['Informatik'],
  Religionslehre: ['Evangelische Religion', 'Katholische Religion'],
  Sport: ['Sport'],
  'Künstlerisches Fach': ['Musik', 'Kunst']
};
exports.categories = categories;
var courseCombinations = [[categories.Fremdsprache, categories.Mathematik, categories.Deutsch], [categories.Fremdsprache, categories.Naturwissenschaft, categories.Deutsch], [categories.Fremdsprache, categories.Deutsch, categories['Gesellschaftswissenschaftliches Fach']], [categories.Fremdsprache, categories.Fremdsprache, categories.Mathematik], [categories.Fremdsprache, categories.Fremdsprache, categories.Naturwissenschaft], [categories.Fremdsprache, categories.Fremdsprache, categories['Gesellschaftswissenschaftliches Fach']], [categories.Fremdsprache, categories.Mathematik, categories.Naturwissenschaft], [categories.Fremdsprache, categories.Mathematik, categories.Informatik], [categories.Fremdsprache, categories.Mathematik, categories['Gesellschaftswissenschaftliches Fach']], [categories.Fremdsprache, categories.Naturwissenschaft, categories.Naturwissenschaft], [categories.Fremdsprache, categories.Naturwissenschaft, categories['Gesellschaftswissenschaftliches Fach']], [categories.Fremdsprache, categories.Naturwissenschaft, categories.Informatik], [categories.Mathematik, categories.Naturwissenschaft, categories.Deutsch], [categories.Mathematik, categories.Deutsch, categories['Gesellschaftswissenschaftliches Fach']], [categories.Mathematik, categories.Naturwissenschaft, categories['Gesellschaftswissenschaftliches Fach']], [categories.Naturwissenschaft, categories.Naturwissenschaft, categories.Deutsch], [categories.Mathematik, categories.Deutsch, categories.Informatik], [categories.Naturwissenschaft, categories.Deutsch, categories['Gesellschaftswissenschaftliches Fach']], [categories.Fremdsprache, categories.Mathematik, categories.Sport], [categories.Fremdsprache, categories.Mathematik, categories.Religionslehre], [categories.Fremdsprache, categories.Mathematik, categories['Künstlerisches Fach']], [categories.Naturwissenschaft, categories.Deutsch, categories.Informatik], [categories.Fremdsprache, categories.Naturwissenschaft, categories.Sport], [categories.Fremdsprache, categories.Naturwissenschaft, categories.Religionslehre], [categories.Fremdsprache, categories.Naturwissenschaft, categories['Künstlerisches Fach']], [categories.Mathematik, categories.Deutsch, categories.Sport], [categories.Mathematik, categories.Deutsch, categories.Religionslehre], [categories.Mathematik, categories.Deutsch, categories['Künstlerisches Fach']], [categories.Naturwissenschaft, categories.Deutsch, categories.Sport], [categories.Naturwissenschaft, categories.Deutsch, categories.Religionslehre], [categories.Naturwissenschaft, categories.Deutsch, categories['Künstlerisches Fach']]];
exports.courseCombinations = courseCombinations;
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

var _courses = require("./courses");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var courseContainerDIV = document.querySelector('.course-container');
var selectedCourses = []; // create cours dom elements

Object.values(_courses.categories).flat().forEach(createCourseElement);

function createCourseElement(course) {
  var element = document.createElement('div');
  element.className = 'course';
  element.id = course;
  element.innerHTML = "<span class=\"course-name\">".concat(course, "</span>");
  courseContainerDIV.appendChild(element);
  element.addEventListener('click', eventHandler);
}

function eventHandler(event) {
  var element = event.target.id !== '' ? event.target : event.target.parentNode;
  var course = element.id; // cancel if disabled

  if (element.classList.contains('disabled')) return; // toggle selection

  if (!element.classList.contains('selected')) {
    element.classList.add('selected');
    selectedCourses.push(course);
  } else {
    element.classList.remove('selected');
    selectedCourses.splice(selectedCourses.indexOf(course), 1);
  } // get further possibilities


  var possibilities = findCoursePossibilties(selectedCourses); // disabled other items

  courseContainerDIV.querySelectorAll('.course').forEach(function (el) {
    if (!possibilities.includes(el.id) && !el.classList.contains('selected')) el.classList.add('disabled');else el.classList.remove('disabled');
  });
}

function findCoursePossibilties(selectedCourses) {
  // convert given courses to categories
  var selectedCategories = selectedCourses.map(function (course) {
    return getCategory(course);
  }); // search for possibilities

  var possibleCategoryCombinatinons = _courses.courseCombinations.map(function (courseCombination) {
    // get categories of maped combi
    var combinationCategory = courseCombination.map(function (combi) {
      return getCategory(combi[0]);
    }); // check if combi matches

    var matched = selectedCategories.every(function (category) {
      if (combinationCategory.includes(category)) {
        combinationCategory.splice(combinationCategory.indexOf(category), 1);
        return true;
      }
    });
    if (matched) return combinationCategory.map(function (category) {
      return _courses.categories[category];
    }).flat();
  });

  return _toConsumableArray(new Set(possibleCategoryCombinatinons.flat().filter(function (n) {
    return n;
  })));
}

function getCategory(course) {
  return Object.entries(_courses.categories).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        category = _ref2[0],
        courses = _ref2[1];

    return courses.includes(course);
  })[0][0];
}
},{"./courses":"js/courses.js"}],"../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59931" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map