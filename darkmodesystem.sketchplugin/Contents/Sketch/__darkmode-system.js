var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/darkmode-system.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/balanced-match/index.js":
/*!**********************************************!*\
  !*** ./node_modules/balanced-match/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ "./node_modules/brace-expansion/index.js":
/*!***********************************************!*\
  !*** ./node_modules/brace-expansion/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(/*! concat-map */ "./node_modules/concat-map/index.js");
var balanced = __webpack_require__(/*! balanced-match */ "./node_modules/balanced-match/index.js");

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),

/***/ "./node_modules/concat-map/index.js":
/*!******************************************!*\
  !*** ./node_modules/concat-map/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/minimatch/minimatch.js":
/*!*********************************************!*\
  !*** ./node_modules/minimatch/minimatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(/*! path */ "path")
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(/*! brace-expansion */ "./node_modules/brace-expansion/index.js")

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),

/***/ "./src/darkmode-system.js":
/*!********************************!*\
  !*** ./src/darkmode-system.js ***!
  \********************************/
/*! exports provided: getSettings, deleteAll, documentColors, DeleteAllSettings, switchDark, switchLight, createDarkmode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return getSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAll", function() { return deleteAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentColors", function() { return documentColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAllSettings", function() { return DeleteAllSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchDark", function() { return switchDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchLight", function() { return switchLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDarkmode", function() { return createDarkmode; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);


var functions = __webpack_require__(/*! ./functions.js */ "./src/functions.js");

var page, pageInfo; // Config

var Rectangle = __webpack_require__(/*! sketch/dom */ "sketch/dom").Rectangle;

var TextDom = __webpack_require__(/*! sketch/dom */ "sketch/dom").Text;

var Artboard = __webpack_require__(/*! sketch/dom */ "sketch/dom").Artboard;

var Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");

var Style = __webpack_require__(/*! sketch/dom */ "sketch/dom").Style;

var SharedStyle = __webpack_require__(/*! sketch/dom */ "sketch/dom").SharedStyle;

function getSettings(context) {
  DarkModeSystem(context, "settings");
}
function deleteAll(context) {
  DarkModeSystem(context, "delete");
}
function documentColors(context) {
  DarkModeSystem(context, "colors");
}
function DeleteAllSettings(context) {
  DarkModeSystem(context, "deletesettings");
}
function switchDark(context) {
  DarkModeSystem(context, "switchDark");
}
function switchLight(context) {
  DarkModeSystem(context, "switchLight");
}
function createDarkmode(context) {
  DarkModeSystem(context, "darkmode");
}

function DarkModeSystem(context, type) {
  var labels_alignments = ["Left", "Right", "Center"];
  var pluginName = "DarkMode System",
      pluginDomain = "DarkModeSystem";
  var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  var fieldHeight = 22,
      fieldWidth = 60,
      labelHeight = 16,
      leftColWidth = 120,
      settingPad = 10,
      settingX = 0,
      settingY = 30,
      switchHeight = 16,
      textOffset = 2,
      windowHeight = labelHeight * 7 + settingPad * 7 + 50,
      windowWidth = 600; // Setting variables

  var get_settign_S = Settings.documentSettingForKey(document, 'Styles');

  if (get_settign_S == null) {
    Settings.setDocumentSettingForKey(document, 'Styles', []);
  } // Setting variables


  var get_settign_C = Settings.documentSettingForKey(document, 'Styles_Containers');

  if (get_settign_C == null) {
    Settings.setDocumentSettingForKey(document, 'Styles_Containers', []);
  } // Setting variables


  var get_settign_L = Settings.documentSettingForKey(document, 'Styles_Layers');

  if (get_settign_L == null) {
    Settings.setDocumentSettingForKey(document, 'Styles_Layers', []);
  } // Setting variables


  var get_settign_T = Settings.documentSettingForKey(document, 'Styles_Texts');

  if (get_settign_T == null) {
    Settings.setDocumentSettingForKey(document, 'Styles_Texts', []);
  } // ------- ------- ------- -------
  // darkmode AREA
  // ------- ------- ------- -------  


  if (type && type == "darkmode") {
    console.log("entered darkmode");
    var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
    var s_styles = Settings.documentSettingForKey(document, 'Styles'); //Settings.setDocumentSettingForKey(document, 'Font', groupdefaultFont.indexOfSelectedItem());
    //create Modal

    var s_colors = Settings.documentSettingForKey(document, 'colors');
    var alert = NSAlert.alloc().init(),
        alertIconPath = context.plugin.urlForResourceNamed("icon.png").path(),
        alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath),
        alertContent = NSView.alloc().init();
    alertContent = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight)); //explaining process
    //FONT FAMILY

    var col_width = windowWidth / 4 - 10;
    var groupdefaultFont_label = functions.createLabel("Clean Unvalid Settings", 12, NSMakeRect(0, settingY + textOffset, col_width, labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    var groupdefaultFont_label = functions.createLabel("Sync Layers with SharedStyles", 12, NSMakeRect(col_width + 10, settingY + textOffset, col_width, labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    var groupdefaultFont_label = functions.createLabel("Create DarkMode Version", 12, NSMakeRect((col_width + 10) * 2, settingY + textOffset, col_width, labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    var groupdefaultFont_label = functions.createLabel("Switch to DarkMode ", 12, NSMakeRect((col_width + 10) * 3, settingY + textOffset, col_width, labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + 5;
    var groupdefaultFont_label = functions.createBoldLabel("Step 1", 12, NSMakeRect(0, settingY + textOffset, col_width, labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    var groupdefaultFont_label = functions.createBoldLabel("Step 2", 12, NSMakeRect(col_width + 10, settingY + textOffset, col_width, labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    var groupdefaultFont_label = functions.createBoldLabel("Step 3", 12, NSMakeRect((col_width + 10) * 2, settingY + textOffset, col_width, labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    var groupdefaultFont_label = functions.createBoldLabel("Step 4", 12, NSMakeRect((col_width + 10) * 3, settingY + textOffset, col_width, labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var progress = functions.createColoredBlock("#fa6a00", NSMakeRect(0, settingY, col_width, 12), false);
    alertContent.addSubview(progress);
    var progress = functions.createColoredBlock("#b25f29", NSMakeRect(col_width + 10, settingY, col_width, 12), false);
    alertContent.addSubview(progress);
    var progress = functions.createColoredBlock("#66422c", NSMakeRect((col_width + 10) * 2, settingY, col_width, 12), false);
    alertContent.addSubview(progress);
    var progress = functions.createColoredBlock("#2d2e38", NSMakeRect((col_width + 10) * 3, settingY, col_width, 12), false);
    alertContent.addSubview(progress);
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var groupdefaultFont_label = functions.createBoldLabel("Process Overview", 15, NSMakeRect(0, settingY + textOffset, windowWidth, labelHeight));
    alertContent.addSubview(groupdefaultFont_label); //FONT FAMILY

    var pages_available = [];

    for (var i = 0; i < document.pages.length; i++) {
      var all_shapes = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.find('Shape', document.pages[i]).length;
      var all_shapesPaths = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.find('ShapePath', document.pages[i]).length;
      var all_texts = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.find('Text', document.pages[i]).length;
      var total = all_shapes + all_shapesPaths + all_texts;
      pages_available.push(document.pages[i].name + " - " + total);
    }

    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad * 3;
    var selected_page = functions.createPopUpButton(pages_available, 0, NSMakeRect(0, settingY, windowWidth / 2, fieldHeight));
    alertContent.addSubview(selected_page);
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var groupdefaultFont_label = functions.createBoldLabel("Select Page to Transform", 15, NSMakeRect(0, settingY + textOffset, windowWidth, labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    alert.setIcon(alertIcon);
    alert.setMessageText("Create Dark Mode System");
    alert.setInformativeText("This might take a while....");
    alert.accessoryView = alertContent; //BUTTONS

    var buttonOrganize = alert.addButtonWithTitle("Create Dark Mode");
    var buttonCancel = alert.addButtonWithTitle("Cancel");
    var responseCode = alert.runModal();

    if (responseCode == 1000) {
      //create dark mode 
      var all_settings = Settings.documentSettingForKey(document, 'Styles');
      var reviewed_Settings = functions.reviewSettings(document, all_settings);
      Settings.setDocumentSettingForKey(document, 'Styles', reviewed_Settings);
      var s_page = selected_page.indexOfSelectedItem();
      var all_shapes = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.find('Shape', document.pages[s_page]);
      var all_shapesPaths = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.find('ShapePath', document.pages[s_page]);
      var all_texts = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.find('Text', document.pages[s_page]);
      var new_styles = functions.syncLayerwithStyles_best(Settings, sketch__WEBPACK_IMPORTED_MODULE_0___default.a, document, s_page);
      document.sharedLayerStyles = new_styles.layer;
      document.sharedTextStyles = new_styles.text;
      var count_added = document.sharedLayerStyles.length + document.sharedTextStyles.length;
      var new_styles_ids = new_styles.new_styles;
      var new_styles_withdark = functions.createDarkModeStyle(Settings, document, new_styles.layer, new_styles.text, new_styles.new_styles);
      Settings.setDocumentSettingForKey(document, 'Styles', new_styles_withdark.settings);
      Settings.setDocumentSettingForKey(document, 'Styles_Containers', new_styles_withdark.settings_c);
      Settings.setDocumentSettingForKey(document, 'Styles_Layers', new_styles_withdark.settings_l);
      Settings.setDocumentSettingForKey(document, 'Styles_Texts', new_styles_withdark.settings_t);
      document.sharedLayerStyles = new_styles_withdark.layer;
      document.sharedTextStyles = new_styles_withdark.text; // functions.SwitchDarkMode(document ,layers, new_styles_withdark.layer, new_styles_withdark.text, true);

      var count = functions.SwitchDarkMode_best(Settings, sketch__WEBPACK_IMPORTED_MODULE_0___default.a, document, s_page, new_styles_withdark.layer, new_styles_withdark.text, true);

      if (count > 0) {
        sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(' Created Dark Mode version in ' + count + ' Layers Sucessfully!');
      } else {
        sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(" All layers are already in Light Mode or haven't created a DarkMode System");
      }
    }
  } // ------- ------- ------- -------
  // switchLight AREA
  // ------- ------- ------- -------  
  else if (type && type == "switchDark") {
      windowHeight = 90;
      windowWidth = 300;
      var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
      var s_styles = Settings.documentSettingForKey(document, 'Styles'); //Settings.setDocumentSettingForKey(document, 'Font', groupdefaultFont.indexOfSelectedItem());
      //create Modal

      var s_colors = Settings.documentSettingForKey(document, 'colors');
      var alert = NSAlert.alloc().init(),
          alertIconPath = context.plugin.urlForResourceNamed("icon.png").path(),
          alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath),
          alertContent = NSView.alloc().init();
      alertContent = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight)); //FONT FAMILY

      var pages_available = [];

      for (var i = 0; i < document.pages.length; i++) {
        //var all_shapes= sketch.find('Shape', document.pages[i]).length;
        //var all_shapesPaths= sketch.find('ShapePath', document.pages[i]).length;
        //var all_texts= sketch.find('Text', document.pages[i]).length;
        //var total= all_shapes+all_shapesPaths+all_texts;
        pages_available.push(document.pages[i].name);
      }

      var selected_page = functions.createPopUpButton(pages_available, 0, NSMakeRect(0, settingY, windowWidth, fieldHeight));
      alertContent.addSubview(selected_page);
      settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
      var groupdefaultFont_label = functions.createBoldLabel("Select Page to Transform", 15, NSMakeRect(0, settingY + textOffset, windowWidth, labelHeight));
      alertContent.addSubview(groupdefaultFont_label);
      alert.setIcon(alertIcon);
      alert.setMessageText("Switch to Light Mode ");
      alert.accessoryView = alertContent; //BUTTONS

      var buttonOrganize = alert.addButtonWithTitle("Switch Dark");
      var buttonCancel = alert.addButtonWithTitle("Cancel");
      var responseCode = alert.runModal();

      if (responseCode == 1000) {
        //create dark mode 
        var s_page = selected_page.indexOfSelectedItem(); //functions.SwitchDarkMode(document ,layers, new_styles_withdark.layer, new_styles_withdark.text, false);

        var count = functions.SwitchDarkMode_best(Settings, sketch__WEBPACK_IMPORTED_MODULE_0___default.a, document, s_page, document.sharedLayerStyles, document.sharedTextStyles, true);

        if (count > 0) {
          sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(' Switched ' + count + ' Layers to Dark Mode Sucessfully!');
        } else {
          sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(" All layers are already in Dark Mode or haven't created a DarkMode System");
        }
      }
    } // ------- ------- ------- -------
    // switchLight AREA
    // ------- ------- ------- -------  
    else if (type && type == "switchLight") {
        windowHeight = 90;
        windowWidth = 300;
        var document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
        var s_styles = Settings.documentSettingForKey(document, 'Styles'); //Settings.setDocumentSettingForKey(document, 'Font', groupdefaultFont.indexOfSelectedItem());
        //create Modal

        var s_colors = Settings.documentSettingForKey(document, 'colors');
        var alert = NSAlert.alloc().init(),
            alertIconPath = context.plugin.urlForResourceNamed("icon.png").path(),
            alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath),
            alertContent = NSView.alloc().init();
        alertContent = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight)); //FONT FAMILY

        var pages_available = [];

        for (var i = 0; i < document.pages.length; i++) {
          //var all_shapes= sketch.find('Shape', document.pages[i]).length;
          //var all_shapesPaths= sketch.find('ShapePath', document.pages[i]).length;
          //var all_texts= sketch.find('Text', document.pages[i]).length;
          //var total= all_shapes+all_shapesPaths+all_texts;
          pages_available.push(document.pages[i].name);
        }

        var selected_page = functions.createPopUpButton(pages_available, 0, NSMakeRect(0, settingY, windowWidth, fieldHeight));
        alertContent.addSubview(selected_page);
        settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
        var groupdefaultFont_label = functions.createBoldLabel("Select Page to Transform", 15, NSMakeRect(0, settingY + textOffset, windowWidth, labelHeight));
        alertContent.addSubview(groupdefaultFont_label);
        alert.setIcon(alertIcon);
        alert.setMessageText("Switch to Light Mode ");
        alert.accessoryView = alertContent; //BUTTONS

        var buttonOrganize = alert.addButtonWithTitle("Switch Light");
        var buttonCancel = alert.addButtonWithTitle("Cancel");
        var responseCode = alert.runModal();

        if (responseCode == 1000) {
          //create dark mode 
          var s_page = selected_page.indexOfSelectedItem(); //functions.SwitchDarkMode(document ,layers, new_styles_withdark.layer, new_styles_withdark.text, false);

          var count = functions.SwitchDarkMode_best(Settings, sketch__WEBPACK_IMPORTED_MODULE_0___default.a, document, s_page, document.sharedLayerStyles, document.sharedTextStyles, false);

          if (count > 0) {
            sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(' Switched ' + count + ' Layers to Light Mode Sucessfully!');
          } else {
            sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(" All layers are already in Light Mode or haven't created a DarkMode System");
          }
        }
      } // ------- ------- ------- -------
      // SETTINGS AREA
      // ------- ------- ------- -------  
      else if (type && type == "settings") {
          windowHeight = 460;
          windowWidth = 800;
          var all_settings = Settings.documentSettingForKey(document, 'Styles');
          var all_settings_c = Settings.documentSettingForKey(document, 'Styles_Containers');
          var all_settings_l = Settings.documentSettingForKey(document, 'Styles_Layers');
          var all_settings_t = Settings.documentSettingForKey(document, 'Styles_Texts');
          var scrolHeight = (all_settings.length * (labelHeight + settingPad) + 100) * 2;
          var alert = NSAlert.alloc().init(),
              alertIconPath = context.plugin.urlForResourceNamed("icon.png").path(),
              alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath),
              //scroll
          alertscroll = NSScrollView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight)),
              //content
          alertContent = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, scrolHeight));
          alertContent.setFlipped(1);
          alertscroll.setHasVerticalScroller(1);
          alertscroll.setDocumentView(alertContent);
          var col_1 = 440;
          var col = windowWidth / 2 - col_1 / 2 - 10 + 100; //LABELS

          var title_color_0 = functions.createBoldLabel("Type", 12, NSMakeRect(0, settingY, col_1, labelHeight));
          alertContent.addSubview(title_color_0);
          var title_color_1 = functions.createBoldLabel("In Colored", 12, NSMakeRect(120, settingY, col_1, labelHeight));
          alertContent.addSubview(title_color_1);
          var title_color_2 = functions.createBoldLabel("Light Style", 12, NSMakeRect(col_1 / 2 - 10, settingY, col, labelHeight));
          alertContent.addSubview(title_color_2);
          var title_color_3 = functions.createBoldLabel("Dark Style", 12, NSMakeRect(col + col_1 / 2 - 10, settingY, col, labelHeight));
          alertContent.addSubview(title_color_3);
          var light_name = [];
          var dark_name = [];
          var type = [];
          var colored_container = []; //console.log(all_settings);

          for (var j = 0; j < 3; j++) {
            var i = 0;

            if (j == 0) {
              all_settings = all_settings_c;
            } else if (j == 1) {
              all_settings = all_settings_l;
            } else {
              all_settings = all_settings_t;
            }

            for (var k = 0; k < all_settings.length; k++) {
              settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
              var dark_id = all_settings[i].dark;
              var light_id = all_settings[i].light;

              if (all_settings[i].type == "text") {
                var sharedStyle_light = document.getSharedTextStyleWithID(light_id);
                var sharedStyle_dark = document.getSharedTextStyleWithID(dark_id);
                type[i] = functions.createLabel(all_settings[i].element, 12, NSMakeRect(0, settingY + textOffset, col_1, labelHeight));
                alertContent.addSubview(type[i]);
              } else {
                var sharedStyle_light = document.getSharedLayerStyleWithID(light_id);
                var sharedStyle_dark = document.getSharedLayerStyleWithID(dark_id);
                type[i] = functions.createLabel(all_settings[i].element, 12, NSMakeRect(0, settingY + textOffset, col_1, labelHeight));
                alertContent.addSubview(type[i]);
              } //console.log(sharedStyle_dark);
              //console.log(sharedStyle_light);


              colored_container[i] = functions.createLabel(String(all_settings[i].colored_container), 12, NSMakeRect(120, settingY + textOffset, col_1, labelHeight));
              alertContent.addSubview(colored_container[i]);

              if (sharedStyle_light === undefined || sharedStyle_dark === undefined) {
                light_name[i] = functions.createLabel("-", 12, NSMakeRect(col_1 / 2 - 10, settingY + textOffset, windowWidth - leftColWidth, labelHeight));
                alertContent.addSubview(light_name[i]);
                dark_name[i] = functions.createLabel("-", 12, NSMakeRect(col + col_1 / 2 - 10, settingY + textOffset, windowWidth - leftColWidth, labelHeight));
                alertContent.addSubview(dark_name[i]); // console.log("there is one settings missing");
              } else {
                light_name[i] = functions.createLabel(sharedStyle_light.name, 12, NSMakeRect(col_1 / 2 - 10, settingY + textOffset, windowWidth - leftColWidth, labelHeight));
                alertContent.addSubview(light_name[i]);
                dark_name[i] = functions.createLabel(sharedStyle_dark.name, 12, NSMakeRect(col + col_1 / 2 - 10, settingY + textOffset, windowWidth - leftColWidth, labelHeight));
                alertContent.addSubview(dark_name[i]);
              }

              i++;
            }
          }

          alert.setIcon(alertIcon);
          alert.setMessageText("Edit Settings");
          alert.setInformativeText("Here you can setup some of the variables that help you generate and edit your DarkMode Systems.");
          alert.accessoryView = alertscroll;
          var responseCode = alert.runModal();

          if (responseCode == 1000) {
            return false;
          } else return false;
        } // ------------------------------------------------
        // create a Delete All Style System
        // ------------------------------------------------
        else if (type && type == "deletesettings") {
            windowHeight = 10;
            windowWidth = 400;
            var alert = NSAlert.alloc().init(),
                alertIconPath = context.plugin.urlForResourceNamed("icon.png").path(),
                alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath),
                alertContent = NSView.alloc().init();
            alertContent = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight));
            alert.setIcon(alertIcon);
            alert.setMessageText("Delete All Settings ");
            alert.setInformativeText("Are you Sure You want to delete all " + get_settign_S.length + " styles? This will not delete the shared styles connected to the layers, but the setting connecting the 2.");
            alert.accessoryView = alertContent; //BUTTONS

            var buttonOrganize = alert.addButtonWithTitle("Delete All");
            var buttonOrganize2 = alert.addButtonWithTitle("Delete Unused");
            var buttonCancel = alert.addButtonWithTitle("Cancel"); // RUN MODAL

            var responseCode = alert.runModal(); // log(styles_list);

            if (responseCode == 1000) {
              var all_settings = Settings.documentSettingForKey(document, 'Styles');
              sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(' Deleted All! ' + all_settings.length + ' styles, sucessfully!');
              Settings.setDocumentSettingForKey('Styles', []);
            } else if (responseCode == 1001) {
              var all_settings = Settings.documentSettingForKey(document, 'Styles');
              var reviewed_Settings = functions.reviewSettings(document, all_settings);
              Settings.setDocumentSettingForKey('Styles', reviewed_Settings);
              var deleted = all_settings.length - reviewed_Settings.length;
              sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(' Deleted ' + deleted + ' Settings , sucessfully! You now have ' + reviewed_Settings.length + " Settings!");
            }
          } // ------- ------- ------- -------
          // Colors AREA
          // ------- ------- ------- -------  
          else if (type && type == "colors") {
              var count = 0; //Layer styles COlors

              var colors_in_layer_styles = [];
              var colors_in_layer_styles_names = [];
              var styles_layer = document.sharedLayerStyles;
              var s_colors = Settings.documentSettingForKey(document, 'colors'); //console.log(styles_layer);
              //COLORS

              var colors = s_colors;
              var groupdefaultColorsCode = [];
              var groupdefaultColorsCode_dark = [];
              var groupdefaultColorsCode_block = [];
              var groupdefaultColorsCode_block_dark = [];
              var groupdefaultColorsName = [];
              var groupdefaultColorsCode_textstyles = [];
              var groupdefaultColorsCode_block_textstyles = [];
              var groupdefaultColorsName_textstyles = [];
              var groupdefaultColorsCode_layerstyles = [];
              var groupdefaultColorsCode_block_layerstyles = [];
              var groupdefaultColorsName_layerstyles = [];

              for (var i = 0; i < styles_layer.length; i++) {
                if (styles_layer[i].style.fills.length > 0) {
                  var layer_style_color = styles_layer[i].style.fills[0].color;
                  var repeated = 0;

                  for (var j = 0; j < colors.length; j++) {
                    if (layer_style_color == colors[j].code) {
                      repeated++;
                      break;
                    }
                  }

                  for (var k = 0; k < colors_in_layer_styles.length; k++) {
                    if (layer_style_color == colors_in_layer_styles[k]) {
                      repeated++;
                      break;
                    }
                  }

                  if (repeated == 0) {
                    colors_in_layer_styles.push(layer_style_color);
                    colors_in_layer_styles_names.push(styles_layer[i].name);
                  }
                }
              } //Text styles COlors


              var styles_list = document.sharedTextStyles;
              var colors_in_text_styles = [];

              for (var i = 0; i < styles_list.length; i++) {
                var text_style_color = styles_list[i].style.textColor; //console.log(text_style_color);

                var repeated = 0;

                for (var j = 0; j < colors.length; j++) {
                  if (text_style_color == colors[j].code) {
                    repeated++;
                    break;
                  }
                }

                for (var k = 0; k < colors_in_text_styles.length; k++) {
                  if (text_style_color == colors_in_text_styles[k]) {
                    repeated++;
                    break;
                  }
                }

                if (repeated == 0 && text_style_color != undefined) {
                  colors_in_text_styles.push(text_style_color);
                }
              } // Settings.setDocumentSettingForKey(document, 'colors', []);


              windowHeight = 100 + (s_colors.length * (fieldHeight + settingPad) + colors_in_layer_styles.length * (fieldHeight + settingPad) + colors_in_text_styles.length * (fieldHeight + settingPad) + 100);
              windowWidth = 600;
              var alert = NSAlert.alloc().init(),
                  alertIconPath = context.plugin.urlForResourceNamed("icon.png").path(),
                  alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath),
                  alertContent = NSView.alloc().init();
              alertContent = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight));
              alert.setIcon(alertIcon);
              alert.setMessageText("Edit Document Colors");
              alert.setInformativeText("Here you can setup some of the variables that help you generate and edit your DarkMode Systems.");
              alert.accessoryView = alertContent;
              groupdefaultColorsCode[colors.length] = functions.createField("", NSMakeRect(40, settingY, windowWidth / 2 - 50, fieldHeight));
              alertContent.addSubview(groupdefaultColorsCode[colors.length]);
              groupdefaultColorsName[colors.length] = functions.createField("", NSMakeRect(windowWidth / 2, settingY, windowWidth / 2, fieldHeight));
              alertContent.addSubview(groupdefaultColorsName[colors.length]); //TITLES

              settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
              var title_color_1 = functions.createLabel("Color Code", 12, NSMakeRect(40, settingY, windowWidth / 2 - 50, fieldHeight));
              alertContent.addSubview(title_color_1);
              var title_color_2 = functions.createLabel("Color Name", 12, NSMakeRect(windowWidth / 2, settingY, windowWidth / 2, fieldHeight));
              alertContent.addSubview(title_color_2); //TITLES

              settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
              var title_color = functions.createBoldLabel("Add New Color", 12, NSMakeRect(0, settingY + textOffset, windowWidth - leftColWidth, labelHeight));
              alertContent.addSubview(title_color); // DIVIDER

              settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
              var divider_2 = functions.createDivider(NSMakeRect(0, settingY, windowWidth, 1));
              alertContent.addSubview(divider_2);
              settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;

              for (var i = colors_in_layer_styles.length - 1; i >= 0; i--) {
                settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
                groupdefaultColorsCode_block_layerstyles[i] = functions.createColoredBlock(colors_in_layer_styles[i], NSMakeRect(0, settingY, fieldHeight, fieldHeight), false);
                alertContent.addSubview(groupdefaultColorsCode_block_layerstyles[i]);
                groupdefaultColorsCode_layerstyles[i] = functions.createField(colors_in_layer_styles[i], NSMakeRect(40, settingY, windowWidth / 2 - 50, fieldHeight));
                alertContent.addSubview(groupdefaultColorsCode_layerstyles[i]);
                groupdefaultColorsName_layerstyles[i] = functions.createField(colors_in_layer_styles_names[i], NSMakeRect(windowWidth / 2, settingY, windowWidth / 2, fieldHeight));
                alertContent.addSubview(groupdefaultColorsName_layerstyles[i]);
              } //TITLES


              settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
              var title_color = functions.createBoldLabel("New Colors from Layer Styles", 12, NSMakeRect(0, settingY + textOffset, windowWidth - leftColWidth, labelHeight));
              alertContent.addSubview(title_color); // DIVIDER

              settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
              var divider_2 = functions.createDivider(NSMakeRect(0, settingY, windowWidth, 1));
              alertContent.addSubview(divider_2);
              settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad; //console.log(styles[]);

              for (var i = colors_in_text_styles.length - 1; i >= 0; i--) {
                settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
                groupdefaultColorsCode_block_textstyles[i] = functions.createColoredBlock(colors_in_text_styles[i], NSMakeRect(0, settingY, fieldHeight, fieldHeight), false);
                alertContent.addSubview(groupdefaultColorsCode_block_textstyles[i]);
                groupdefaultColorsCode_textstyles[i] = functions.createField(colors_in_text_styles[i], NSMakeRect(40, settingY, windowWidth / 2 - 50, fieldHeight));
                alertContent.addSubview(groupdefaultColorsCode_textstyles[i]);
                groupdefaultColorsName_textstyles[i] = functions.createField(colors_in_text_styles[i], NSMakeRect(windowWidth / 2, settingY, windowWidth / 2, fieldHeight));
                alertContent.addSubview(groupdefaultColorsName_textstyles[i]);
              } //TITLES


              settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
              var title_color = functions.createBoldLabel("New Colors from Text Styles", 12, NSMakeRect(0, settingY + textOffset, windowWidth - leftColWidth, labelHeight));
              alertContent.addSubview(title_color); // DIVIDER

              settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
              var divider_2 = functions.createDivider(NSMakeRect(0, settingY, windowWidth, 1));
              alertContent.addSubview(divider_2);
              settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;

              for (var i = colors.length - 1; i >= 0; i--) {
                settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
                groupdefaultColorsCode_block[i] = functions.createColoredBlock(colors[i].code, NSMakeRect(0, settingY, fieldHeight, fieldHeight), false);
                alertContent.addSubview(groupdefaultColorsCode_block[i]);
                groupdefaultColorsCode[i] = functions.createField(colors[i].code, NSMakeRect(50, settingY, windowWidth / 3 - 50, fieldHeight));
                alertContent.addSubview(groupdefaultColorsCode[i]);
                groupdefaultColorsName[i] = functions.createField(colors[i].name, NSMakeRect(windowWidth / 3, settingY, windowWidth / 3, fieldHeight));
                alertContent.addSubview(groupdefaultColorsName[i]);
                groupdefaultColorsCode_block_dark[i] = functions.createColoredBlock(colors[i].code, NSMakeRect(windowWidth / 3 * 2 + 40, settingY, fieldHeight, fieldHeight), true);
                alertContent.addSubview(groupdefaultColorsCode_block_dark[i]);
                var color = colors[i].code;

                if (color.length > 7) {
                  var alpha = color.slice(7, 9);
                } else {
                  var alpha = "ff";
                }

                var dark_hex_hex = functions.DarkMode(color, "Shape_Fill");
                var dark_hex = functions.RGBToHex("rgb(" + dark_hex_hex.r + "," + dark_hex_hex.g + "," + dark_hex_hex.b + ")");
                groupdefaultColorsCode_dark[i] = functions.createLabel(dark_hex + alpha, 12, NSMakeRect(windowWidth / 3 * 2 + 90, settingY, windowWidth / 3 * 3 - 90, fieldHeight));
                alertContent.addSubview(groupdefaultColorsCode_dark[i]);
              } //TITLES


              settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
              var title_color = functions.createBoldLabel("Colors", 12, NSMakeRect(0, settingY + textOffset, windowWidth - leftColWidth, labelHeight));
              alertContent.addSubview(title_color);
              alert.accessoryView = alertContent; //BUTTONS

              var buttonOrganize = alert.addButtonWithTitle("Update Colors");
              var buttonOrganize = alert.addButtonWithTitle("Add Color");
              var buttonOrganize = alert.addButtonWithTitle("Add Text Colors");
              var buttonCancel = alert.addButtonWithTitle("Cancel");
              var responseCode = alert.runModal();

              if (responseCode == 1000) {
                //update color
                var validated_array = functions.validateColorInput(groupdefaultColorsCode, groupdefaultColorsName, false);
                Settings.setDocumentSettingForKey(document, 'colors', validated_array);
              } else if (responseCode == 1001) {
                //add color
                var count_repeated = 0;

                for (var j = 0; j < colors.length; j++) {
                  if (groupdefaultColorsCode[colors.length].stringValue() == colors[j].code) {
                    count_repeated++;
                    break;
                  }
                }

                if (count_repeated == 0) {
                  var validated_array = functions.validateColorInput(groupdefaultColorsCode, groupdefaultColorsName, true);
                  Settings.setDocumentSettingForKey(document, 'colors', validated_array);
                  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message('Color added!');
                } else {
                  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(' That Color code already exists! Color not added.');
                }
              } else if (responseCode == 1002) {
                //add color from text
                var groupdefaultColorsCode_merged = groupdefaultColorsCode.concat(groupdefaultColorsCode_textstyles);
                var groupdefaultColorsName_merged = groupdefaultColorsName.concat(groupdefaultColorsName_textstyles);
                var validated_array = functions.validateColorInput(groupdefaultColorsCode_merged, groupdefaultColorsName_merged, true);
                Settings.setDocumentSettingForKey(document, 'colors', validated_array); //console.log(validated_array);
              }
            }
}

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: getFontIndex, getSpecificFonts, getFonts, getFontsOld, getFontName, addTextStyle, updateTextStyle, updateTextStyleLabel, createTextStyle, placeTextStyles, elementHasStyle, ifStyleNameAlreadyExists, getStyleByName, getStyleById, getTextStyleByName, updateSettingsWithDocument, updateSettingsWithGlobal, createSelect, createPopUpButton, createPopUpButtonWeights, getIndexforPopupButton, getWeightfromPopupButton, getIs_italic, getTextStyleByNameLabel, getUserDefaults, createBoldLabel, createNotSelectableInput, createLabel, createCheckbox, createColoredBlock, changeColoredBlock, DarkMode, RGBToHex, createDivider, createField, createFieldnoBack, createFieldControl, setKeyOrder, validateColorInput, OrganizeArrayTextStyles, reviewSettings, syncLayerwithStyles_best, createDarkModeStyle, SwitchDarkMode_best */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontIndex", function() { return getFontIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecificFonts", function() { return getSpecificFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFonts", function() { return getFonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontsOld", function() { return getFontsOld; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontName", function() { return getFontName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTextStyle", function() { return addTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTextStyle", function() { return updateTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTextStyleLabel", function() { return updateTextStyleLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextStyle", function() { return createTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeTextStyles", function() { return placeTextStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementHasStyle", function() { return elementHasStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifStyleNameAlreadyExists", function() { return ifStyleNameAlreadyExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleByName", function() { return getStyleByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleById", function() { return getStyleById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextStyleByName", function() { return getTextStyleByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSettingsWithDocument", function() { return updateSettingsWithDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSettingsWithGlobal", function() { return updateSettingsWithGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelect", function() { return createSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopUpButton", function() { return createPopUpButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopUpButtonWeights", function() { return createPopUpButtonWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexforPopupButton", function() { return getIndexforPopupButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeightfromPopupButton", function() { return getWeightfromPopupButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIs_italic", function() { return getIs_italic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextStyleByNameLabel", function() { return getTextStyleByNameLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserDefaults", function() { return getUserDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBoldLabel", function() { return createBoldLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNotSelectableInput", function() { return createNotSelectableInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLabel", function() { return createLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckbox", function() { return createCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColoredBlock", function() { return createColoredBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeColoredBlock", function() { return changeColoredBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkMode", function() { return DarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBToHex", function() { return RGBToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDivider", function() { return createDivider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createField", function() { return createField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFieldnoBack", function() { return createFieldnoBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFieldControl", function() { return createFieldControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setKeyOrder", function() { return setKeyOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateColorInput", function() { return validateColorInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizeArrayTextStyles", function() { return OrganizeArrayTextStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewSettings", function() { return reviewSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncLayerwithStyles_best", function() { return syncLayerwithStyles_best; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDarkModeStyle", function() { return createDarkModeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchDarkMode_best", function() { return SwitchDarkMode_best; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var minimatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! minimatch */ "./node_modules/minimatch/minimatch.js");
/* harmony import */ var minimatch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(minimatch__WEBPACK_IMPORTED_MODULE_1__);

 // ------------------
//inputs
// ------------------

function getFontIndex(font_name, avail_fonts) {
  var index = 0; //has to convert them to normal array, as {sys_fonts} is array-like object, and is persistent, so when modified, changes stay between runs of script

  for (var i = 0; i < avail_fonts.length; i++) {
    var font_info = avail_fonts[i];
    var font_selected = font_name;
    var style_oposite = document.getSharedTextStyleWithID(style_oposite_id);

    if (font_info == font_selected && style_oposite != null) {
      index = i;
      break;
    }
  }

  return index;
}
function getSpecificFonts(specific_font) {
  var fontManager = NSFontManager.sharedFontManager();
  var fonts = {
    family: [],
    weights: []
  };
  var sys_fonts_families = fontManager.availableFontFamilies();

  for (var i = 0; i < sys_fonts_families.length; i++) {
    if (sys_fonts_families[i] == specific_font) {
      fonts.family.push(sys_fonts_families[i]);
      var w = fontManager.availableMembersOfFontFamily(sys_fonts_families[i]);
      var weights = []; //log(w);

      for (var m = 0; m < w.length; m++) {
        weights.push({
          "name": w[m][1],
          "font": w[m][0],
          "weight": w[m][2],
          "variation": w[m][3]
        });
      }

      if (w.length.length == 0) {
        weights.push({
          "name": "plain",
          "font": sys_fonts_families[i],
          "weight": "5",
          "variation": 0
        });
      }

      fonts.weights.push(weights);
    }
  }

  return fonts;
}
function getFonts() {
  var fontManager = NSFontManager.sharedFontManager();
  var fonts = {
    family: [],
    weights: []
  };
  var sys_fonts = fontManager.availableFonts();
  var sys_fonts_families = fontManager.availableFontFamilies();
  var w = fontManager.availableMembersOfFontFamily(sys_fonts_families[0]);
  var last_font;

  for (var i = 0; i < sys_fonts_families.length; i++) {
    fonts.family.push(sys_fonts_families[i]);
    var w = fontManager.availableMembersOfFontFamily(sys_fonts_families[i]);
    var weights = []; //log(w);

    for (var m = 0; m < w.length; m++) {
      weights.push({
        "name": w[m][1],
        "font": w[m][0],
        "weight": w[m][2],
        "variation": w[m][3]
      });
    }

    if (w.length.length == 0) {
      weights.push({
        "name": "plain",
        "font": sys_fonts_families[i],
        "weight": "5",
        "variation": 0
      });
    }

    fonts.weights.push(weights);
  }

  return fonts;
}
function getFontsOld() {
  var fontManager = NSFontManager.sharedFontManager();
  var fonts = [];
  var sys_fonts = fontManager.availableFonts(); //has to convert them to normal array, as {sys_fonts} is array-like object, and is persistent, so when modified, changes stay between runs of script

  for (var i = 0; i < sys_fonts.length; i++) {
    fonts.push(sys_fonts[i]);
  }

  return fonts;
}
/*
export function getFontIndex(font) {
  var fontManager = NSFontManager.sharedFontManager();
  var font_name ;
  var sys_fonts = fontManager.availableFonts();
  //has to convert them to normal array, as {sys_fonts} is array-like object, and is persistent, so when modified, changes stay between runs of script
  for (var i = 0; i < sys_fonts.length; ++i) {
      if(sys_fonts[i]==font){
          font_name=i;
          break;
       }
  }
  return font_name;
}
*/

function getFontName(index) {
  var fontManager = NSFontManager.sharedFontManager();
  var font_name;
  var sys_fonts = fontManager.availableFonts(); //has to convert them to normal array, as {sys_fonts} is array-like object, and is persistent, so when modified, changes stay between runs of script

  for (var i = 0; i < sys_fonts.length; ++i) {
    if (i == index) {
      font_name = sys_fonts[i];
      break;
    }
  }

  return font_name;
} // ------------------
// text style
// ------------------

function addTextStyle(context, styleName, theStyle) {
  var sketchVersion = MSApplicationMetadata.metadata().appVersion;
  var textStyles = context.document.documentData().layerTextStyles();

  if (textStyles.addSharedStyleWithName_firstInstance) {
    textStyles.addSharedStyleWithName_firstInstance(styleName, theStyle.style());
  } else if (sketchVersion < 52) {
    var textStyle = MSSharedStyle.alloc().initWithName_firstInstance(styleName, theStyle.style());
    textStyles.addSharedObject(textStyle);
  } else {
    var textStyle = MSSharedStyle.alloc().initWithName_style(styleName, theStyle.style());
    textStyles.addSharedObject(textStyle);
  }

  return getTextStyleByName(context, styleName);
}
/*
function updateTextStyle(context,styleName,theStyle) {
	var textStyles = context.document.documentData().layerTextStyles(),
		currentStyle = getTextStyleByName(context,styleName);

	if (textStyles.updateValueOfSharedObject_byCopyingInstance) {
		textStyles.updateValueOfSharedObject_byCopyingInstance(currentStyle,theStyle.style());
	} else {
		currentStyle.updateToMatch(theStyle.style());
	}

	return getTextStyleByName(context,styleName);
}
*/

/*
export function createTextStyle(styleData,frame) {
	var textStyle = MSTextLayer.alloc().initWithFrame(frame);
	textStyle.setFontSize(styleData.fontSize);
	textStyle.setLineHeight(styleData.lineHeight);
	textStyle.setTextAlignment(styleData.textAlignment);
	textStyle.setFontPostscriptName(styleData.fontFace);
	textStyle.setTextColor(MSImmutableColor.colorWithSVGString("#" + styleData.fontColor));

	return textStyle;
}
*/

function updateTextStyle(document, Text, Rectangle, create_info, defaultSettings, place) {
  var base = create_info.base.stringValue();
  var ratio = parseFloat(create_info.ratio.stringValue().replace(",", "."));
  var font_family = create_info.font_family.titleOfSelectedItem();
  var font_weight = create_info.font_weight.titleOfSelectedItem();
  var font_weight_index = create_info.font_weight.indexOfSelectedItem();
  var font_color = create_info.color.indexOfSelectedItem();
  var font_color_name = create_info.color.titleOfSelectedItem();
  var color = defaultSettings.s_colors[font_color].code;
  var weights_array = create_info.list_weights;
  var labels_alignments = create_info.labels_alignments;
  var count = [];
  var count_updated = 0;
  var count_Created = 0;
  var weight_info = getWeightfromPopupButton(font_weight_index, font_weight, weights_array);
  var i = 0;
  var initial_size = base / ratio / ratio / ratio;
  var is_italic = getIs_italic(weight_info[0].name);

  while (i < defaultSettings.s_labels.length) {
    var size = initial_size * Math.pow(ratio, i + 1);
    var label = defaultSettings.s_labels.length - i - 1;

    for (var j = 0; j < 3; j++) {
      var options = [defaultSettings.s_labels[label], font_family, weight_info[0].name, font_color_name, labels_alignments[j]];
      var h = defaultSettings.s_hierarchy;
      var styleName = options[h[0]] + "/" + options[h[1]] + "/" + options[h[2]] + "/" + options[h[3]] + "/" + options[h[4]]; // var styleName=defaultSettings.s_labels[label]+"/"+font_color_name+"/"+weight_info[0].name+"/"+labels_alignments[j];

      var titleStyle = getTextStyleByName(context, styleName); // If title style does not exist...

      var styles_list = document.sharedTextStyles;
      var style_to_update = getTextStyleByNameLabel(styleName, styles_list);

      if (!titleStyle) {
        count_Created++;
        document.sharedTextStyles.push({
          name: styleName,
          style: {
            fontFamily: font_family,
            fontSize: size,
            fontStyle: is_italic,
            fontWeight: weight_info[0].weight,
            textColor: color + "ff",
            lineHeight: size * 1.2,
            alignment: j,
            borders: [],
            fills: []
          }
        });
      } else {
        count_updated++;
        var new_style = {
          fontFamily: font_family,
          fontSize: size,
          fontStyle: is_italic,
          fontWeight: weight_info[0].weight,
          textColor: color + "ff",
          lineHeight: size * 1.2,
          alignment: j,
          borders: [],
          fills: []
        }; //log(titleStyle);
        //log(style_to_update);

        style_to_update.style.fontFamily = font_family;
        style_to_update.style.fontSize = size;
        style_to_update.style.fontStyle = is_italic;
        style_to_update.style.fontWeight = weight_info[0].weight;
        style_to_update.style.lineHeight = size * 1.2;
        var layers = style_to_update.getAllInstancesLayers(); //log("NEW CHANge");

        for (var m = 0; m < layers.length; m++) {
          layers[m].style.syncWithSharedStyle(style_to_update);
        }
      }
    }

    i++;
  }

  if (place > 0) {//placeTextStyles(document, Text, Rectangle);
  }

  var count = [count_Created, count_updated];
  return count;
}
function updateTextStyleLabel(document, Text, Rectangle, create_info, defaultSettings, place) {
  var base = create_info.base.stringValue();
  var ratio = parseFloat(create_info.ratio.stringValue().replace(",", "."));
  var font_family = create_info.font_family.titleOfSelectedItem();
  var font_weight = create_info.font_weight.titleOfSelectedItem();
  var font_weight_index = create_info.font_weight.indexOfSelectedItem();
  var font_color = create_info.color.indexOfSelectedItem();
  var font_color_name = create_info.color.titleOfSelectedItem();
  var color = defaultSettings.s_colors[font_color].code;
  var weights_array = create_info.list_weights;
  var labels_alignments = create_info.labels_alignments;
  print(ratio);
  var count = [];
  var count_updated = 0;
  var count_Created = 0;
  var weight_info = getWeightfromPopupButton(font_weight_index, font_weight, weights_array);
  var i = 0;
  var initial_size = base / ratio / ratio / ratio;
  var is_italic = getIs_italic(weight_info[0].name);

  while (i < defaultSettings.s_labels.length) {
    var size = initial_size * Math.pow(ratio, i + 1);
    var label = defaultSettings.s_labels.length - i - 1;

    for (var j = 0; j < 3; j++) {
      var options = [defaultSettings.s_labels[label], font_family, weight_info[0].name, font_color_name, labels_alignments[j]];
      var h = defaultSettings.s_hierarchy;
      var styleName = options[h[0]] + "/" + options[h[1]] + "/" + options[h[2]] + "/" + options[h[3]] + "/" + options[h[4]]; // var styleName=defaultSettings.s_labels[label]+"/"+font_color_name+"/"+weight_info[0].name+"/"+labels_alignments[j];

      var titleStyle = getTextStyleByName(context, styleName); // If title style does not exist...

      var styles_list = document.sharedTextStyles;
      var style_to_update = getTextStyleByNameLabel(styleName, styles_list);

      if (!titleStyle) {
        count_Created++;
        document.sharedTextStyles.push({
          name: styleName,
          style: {
            fontFamily: font_family,
            fontSize: size,
            fontStyle: is_italic,
            fontWeight: weight_info[0].weight,
            textColor: color + "ff",
            lineHeight: size * 1.2,
            alignment: j,
            borders: [],
            fills: []
          }
        });
      } else {
        count_updated++;
        var new_style = {
          fontFamily: font_family,
          fontSize: size,
          fontStyle: is_italic,
          fontWeight: weight_info[0].weight,
          textColor: color + "ff",
          lineHeight: size * 1.2,
          alignment: j,
          borders: [],
          fills: []
        }; //log(titleStyle);
        //log(style_to_update);

        style_to_update.style.fontFamily = font_family;
        style_to_update.style.fontSize = size;
        style_to_update.style.fontStyle = is_italic;
        style_to_update.style.fontWeight = weight_info[0].weight;
        style_to_update.style.lineHeight = size * 1.2;
        var layers = style_to_update.getAllInstancesLayers(); //log("NEW CHANge");

        for (var m = 0; m < layers.length; m++) {
          layers[m].style.syncWithSharedStyle(style_to_update);
        }
      }
    }

    i++;
  }

  if (place > 0) {//placeTextStyles(document, Text, Rectangle);
  }

  var count = [count_Created, count_updated];
  return count;
}
function createTextStyle(document, Text, Rectangle, create_info, defaultSettings, place) {
  var base = create_info.base.stringValue();
  var ratio = parseFloat(create_info.ratio.stringValue().replace(",", "."));
  var font_family = create_info.font_family.titleOfSelectedItem();
  var font_weight = create_info.font_weight.titleOfSelectedItem();
  var font_weight_index = create_info.font_weight.indexOfSelectedItem();
  var font_color = create_info.color.indexOfSelectedItem();
  var font_color_name = create_info.color.titleOfSelectedItem();
  var color = defaultSettings.s_colors[font_color].code;
  var weights_array = create_info.list_weights;
  var labels_alignments = create_info.labels_alignments;
  print(ratio);
  var count = [];
  var count_existent = 0;
  var weight_info = getWeightfromPopupButton(font_weight_index, font_weight, weights_array);
  var i = 0;
  var initial_size = base / ratio / ratio / ratio;
  var count_Created = 0;
  var is_italic = getIs_italic(weight_info[0].name);

  while (i < defaultSettings.s_labels.length) {
    var size = initial_size * Math.pow(ratio, i + 1);
    var label = defaultSettings.s_labels.length - i - 1;

    for (var j = 0; j < 3; j++) {
      //HIERARQUIA
      var options = [defaultSettings.s_labels[label], font_family, weight_info[0].name, font_color_name, labels_alignments[j]];
      var h = defaultSettings.s_hierarchy;
      var styleName = options[h[0]] + "/" + options[h[1]] + "/" + options[h[2]] + "/" + options[h[3]] + "/" + options[h[4]]; //var styleName=defaultSettings.s_labels[label]+"/"+font_family+"/"+weight_info[0].name+"/"+font_color_name+"/"+labels_alignments[j];

      var titleStyle = getTextStyleByName(context, styleName); // If title style does not exist...

      if (!titleStyle) {
        count_Created++;
        var page = document.selectedPage;
        document.sharedTextStyles.push({
          name: styleName,
          style: {
            fontFamily: font_family,
            fontSize: size,
            fontStyle: is_italic,
            fontWeight: weight_info[0].weight,
            textColor: color + "ff",
            lineHeight: size * 1.2,
            alignment: j,
            borders: [],
            fills: []
          }
        });
      } else {
        count_existent++;
      }
    }

    i++;
  }

  if (place > 0) {
    placeTextStyles(document, Text, Rectangle);
  }

  var count = [count_Created, count_existent];
  return count;
}
function placeTextStyles(document, Text, Rectangle) {
  var x = 0;
  var y = 0;
  var layer_width = 800;
  var layer_height = 70;
  var styles_list = document.sharedTextStyles;
  var page = document.selectedPage;

  var Group = __webpack_require__(/*! sketch/dom */ "sketch/dom").Group;

  var Artboard = __webpack_require__(/*! sketch/dom */ "sketch/dom").Artboard;

  var organized_styles = OrganizeArrayTextStyles(styles_list);
  var layers_artboard = document.getLayersNamed("TypeSystem");

  if (layers_artboard.length) {
    //  layers[0].remove();
    var artboard = layers_artboard[0];
    artboard.layers = [];
  } else {
    var artboard = new Artboard({
      name: 'TypeSystem',
      parent: page
    });
  }

  var layers = document.getLayersNamed("Group TypeSystem");

  if (layers.length) {
    //  layers[0].remove();
    var group = layers[0];
    group.layers = [];
  } else {
    var group = new Group({
      name: 'Group TypeSystem',
      parent: artboard
    });
  } // log (organized_styles);


  if (organized_styles.length > 0) {
    for (var j = 0; j < organized_styles.length; j++) {
      y = j * (layer_height + 10); // STYLES INDIVIDUALLY

      var styles = organized_styles[j].styles;

      for (var i = 0; i < styles.length; i++) {
        x = i * (layer_width + 100);
        var rect = new Rectangle(x, y, layer_width, layer_height);
        var text = new Text({
          text: styles[i].name,
          sharedStyleId: styles[i].id,
          frame: rect,
          parent: group,
          style: styles[i].style
        }); //document.centerOnLayer(text);
      }
    }

    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message(' Placed ' + styles_list.length + ' text styles, sucessfully!');
    group.adjustToFit();
    artboard.adjustToFit();
    var padding = 100;
    var h = artboard.frame.height + padding * 2;
    var w = artboard.frame.width + padding * 2;
    var art_x = artboard.frame.x - padding;
    var art_y = artboard.frame.y - padding;
    artboard.frame.height = h;
    artboard.frame.width = w;
    artboard.frame.x = art_x;
    artboard.frame.y = art_y;
    group.frame.x = padding;
    group.frame.y = padding;
  } else {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message('No Styles to Place :( Try creating them first.');
  }
}
function elementHasStyle(all_styles, id) {
  var exists = false; //console.log(all_styles);

  for (var i = 0; i < all_styles.length; i++) {
    if (id == all_styles[i].id) {
      exists = all_styles[i];
      break;
    }
  }

  return exists;
}
function ifStyleNameAlreadyExists(all_styles, name) {
  var exists = false; //console.log(all_styles);

  for (var i = 0; i < all_styles.length; i++) {
    if (name.replace(" ", "") == all_styles[i].name.replace(" ", "")) {
      exists = true;
      break;
    }
  }

  return exists;
}
function getStyleByName(all_styles, name) {
  var style = false; //console.log(all_styles);

  for (var i = 0; i < all_styles.length; i++) {
    if (name.replace(" ", "") == all_styles[i].name.replace(" ", "")) {
      style = all_styles[i];
      break;
    }
  }

  return style;
}
function getStyleById(all_styles, id) {
  var style = false; //console.log(all_styles);

  for (var i = 0; i < all_styles.length; i++) {
    if (id == all_styles[i].id) {
      style = all_styles[i];
      break;
    }
  }

  return style;
}
function getTextStyleByName(context, styleName, removeStyle) {
  var textStyles = context.document.documentData().layerTextStyles().objects();

  if (textStyles) {
    for (var i = 0; i < textStyles.count(); i++) {
      if (textStyles.objectAtIndex(i).name() == styleName) {
        if (removeStyle && removeStyle == 1) {
          context.document.documentData().layerTextStyles().removeSharedStyle(textStyles.objectAtIndex(i));
          return false;
        } else {
          return textStyles.objectAtIndex(i);
        }
      }
    }
  }

  return false;
} // ------------------
// functions
// ------------------

function updateSettingsWithDocument(context, settings, page) {
  var i;

  for (i in settings) {
    try {
      var value = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Settings.layerSettingForKey(page, i);
    } catch (err) {
      log('Could not JSON.parse value, using old method…');
      var value = context.command.valueForKey_onLayer(i, page.sketchObject);
    }

    if (value != null) settings[i] = value;
  }

  return settings;
}
function updateSettingsWithGlobal(defaults, settings) {
  var i;

  for (i in settings) {
    var value = defaults.objectForKey(i);
    if (value) settings[i] = value;
  }

  return settings;
}
function createSelect(items, selectedItemIndex, frame) {
  var comboBox = NSComboBox.alloc().initWithFrame(frame),
      selectedItemIndex = selectedItemIndex > -1 ? selectedItemIndex : 0;
  comboBox.addItemsWithObjectValues(items);
  comboBox.selectItemAtIndex(selectedItemIndex);
  comboBox.setNumberOfVisibleItems(16);
  comboBox.setCompletes(1);
  return comboBox;
}
function createPopUpButton(items, selectedItemIndex, frame) {
  var PopUpButton = NSPopUpButton.alloc().initWithFrame(frame),
      selectedItemIndex = selectedItemIndex > -1 ? selectedItemIndex : 0;
  PopUpButton.addItemsWithTitles(items);
  PopUpButton.selectItemAtIndex(selectedItemIndex);
  PopUpButton.setTarget = self;
  return PopUpButton;
}
function createPopUpButtonWeights(items, selectedItemIndex, frame) {
  var PopUpButton = NSPopUpButton.alloc().initWithFrame(frame),
      selectedItemIndex = selectedItemIndex > -1 ? selectedItemIndex : 0;
  var items_names = [];

  for (var i = 0; i < items.length; i++) {
    items_names.push(items[i].name);
  } //log(items);


  PopUpButton.addItemsWithTitles(items_names);
  PopUpButton.selectItemAtIndex(selectedItemIndex);
  PopUpButton.setTarget = self;
  return PopUpButton;
}
function getIndexforPopupButton(weight, style, all_weights) {
  var index = 0; // log(all_weights);

  for (var i = 0; i < all_weights.length; i++) {
    if (style == null && all_weights[i].weight == weight) {
      index = i;
      break;
    } else if (all_weights[i].name.toLowerCase().indexOf(style) !== -1 && all_weights[i].weight == weight) {
      index = i;
      break;
    }
  }

  return index;
}
function getWeightfromPopupButton(index, name, all_weights) {
  var weight = [];

  if (all_weights.length > 0) {
    for (var i = 0; i < all_weights.length; i++) {
      var str = name.replace(" ", "");

      if (all_weights[i].name == name) {
        weight.push({
          "name": all_weights[index].name,
          "font": all_weights[index].font,
          "weight": all_weights[index].weight,
          "variation": all_weights[index].variation
        });
        break;
      }
    }
  } else {
    weight = 5;
  }

  return weight;
}
function getIs_italic(font_name) {
  var italic = undefined;

  if (font_name.toLowerCase().indexOf("italic") !== -1) {
    italic = "italic";
  }

  return italic;
}
function getTextStyleByNameLabel(name, styles_list) {
  var style = [];

  for (var i = 0; i < styles_list.length; i++) {
    if (styles_list[i].name == name) {
      style.push(styles_list[i]);
      break;
    }
  }

  return style[0];
}
function getUserDefaults(domain) {
  return NSUserDefaults.alloc().initWithSuiteName(domain);
}
function createBoldLabel(text, size, frame) {
  var label = NSTextField.alloc().initWithFrame(frame);
  label.setStringValue(text);
  label.setFont(NSFont.boldSystemFontOfSize(size));
  label.setBezeled(false);
  label.setDrawsBackground(false);
  label.setEditable(false);
  label.setSelectable(false);
  return label;
}
function createNotSelectableInput(text, size, frame) {
  var label = NSTextField.alloc().initWithFrame(frame);
  label.setStringValue(text);
  label.setFont(NSFont.systemFontOfSize(size));
  label.setBezeled(false);
  label.setEditable(false);
  label.setSelectable(false);
  return label;
}
function createLabel(text, size, frame) {
  var label = NSTextField.alloc().initWithFrame(frame);
  label.setStringValue(text);
  label.setFont(NSFont.systemFontOfSize(size));
  label.setBezeled(false);
  label.setDrawsBackground(false);
  label.setEditable(false);
  label.setSelectable(false);
  return label;
}
function createCheckbox(item, flag, frame) {
  var checkbox = NSButton.alloc().initWithFrame(frame),
      flag = flag == false ? NSOffState : NSOnState;
  checkbox.setButtonType(NSSwitchButton);
  checkbox.setBezelStyle(0);
  checkbox.setTitle(item.name);
  checkbox.setTag(item.value);
  checkbox.setState(flag);
  return checkbox;
}
function createColoredBlock(color, frame, darkmode) {
  var block = NSView.alloc().initWithFrame(frame);
  block.setWantsLayer(1);

  if (darkmode) {
    var color_rgb = DarkMode(color, "Shape");
  } else {
    var color_rgb = hexToRgba(color);
  } //console.log(color_rgb);
  //console.log(color_rgb);


  block.layer().cornerRadius = 2;
  block.layer().maskedCorners = true;
  block.layer().setBackgroundColor(CGColorCreateGenericRGB(color_rgb.r / 255, color_rgb.g / 255, color_rgb.b / 255, color_rgb.a / 255));
  return block; //NSRectFill
}
function changeColoredBlock(block, color) {
  var color_rgb = hexToRgba(color);
  block.layer().setBackgroundColor(CGColorCreateGenericRGB(color_rgb.r / 255, color_rgb.g / 255, color_rgb.b / 255, color_rgb.a / 255));
}
function DarkMode(hex, element) {
  // var hex = h.substr(0, 7);
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.substr(0, 7));

  if (hex.length > 7) {
    var alpha = parseInt(hex.slice(7, 9), 16);
  } else {
    var alpha = 255;
  }

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);
  var gray_middle = 127; // IF IS MONOTONE

  if (Math.abs(r - g) < 50 && Math.abs(r - b) < 50) {
    var lightness = r * 0.299 + g * 0.587 + b * 0.114;

    if (lightness > gray_middle) {
      //console.log("is light"+lightness);
      //(lightness* -100)/255
      if (element == "container") {
        var darkmode = RGBToHSL("rgb(255,255,255)", "container", "light");
      } else if (element == "in_colored_container") {
        var darkmode = RGBToHSL("rgb(5,5,5)", "text", "dark");
      } else if (element == "Shape") {
        var darkmode = RGBToHSL("rgb(" + r + "," + g + "," + b + ")", "container", "light");
      } else {
        var darkmode = RGBToHSL("rgb(" + r + "," + g + "," + b + ")", "text", "light");
      }
    } else {
      if (element == "container") {
        var darkmode = RGBToHSL("rgb(255,255,255)", "container", "light");
      } else if (element == "in_colored_container") {
        var darkmode = RGBToHSL("rgb(5,5,5)", "text", "dark");
      } else if (element == "Shape") {
        var darkmode = RGBToHSL("rgb(" + r + "," + g + "," + b + ")", "container", "dark");
      } else {
        //180- (90+((lightness* 100)/gray_middle));
        var darkmode = RGBToHSL("rgb(" + r + "," + g + "," + b + ")", "text", "dark");
      }
    }

    var darkmode_rgb = HSLToRGB(darkmode, false); //IF IS COLOR
  } else {
    //console.log("ITS COLORED");
    //console.log(element);
    //console.log("original rgb("+r+","+g+","+b+")");
    //var darkmode = RGBToHSL("rgb(" + r + "," + g + "," + b + ")", 0, -50);
    if (element == "container") {
      var darkmode = RGBToHSL("rgb(255,255,255)", "container", "light");
    } else if (element == "Shape" || element == "in_colored_container") {
      var darkmode = RGBToHSL("rgb(" + r + "," + g + "," + b + ")", "container", "color");
    } else {
      var darkmode = RGBToHSL("rgb(" + r + "," + g + "," + b + ")", "text", "color");
    }

    var darkmode_rgb = HSLToRGB(darkmode, false);
  } //console.log("---------------------");


  return result ? {
    r: darkmode_rgb.r,
    g: darkmode_rgb.g,
    b: darkmode_rgb.b,
    a: alpha
  } : null;
}
function RGBToHex(rgb) {
  var ex = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;

  if (ex.test(rgb)) {
    // choose correct separator
    var sep = rgb.indexOf(",") > -1 ? "," : " "; // turn "rgb(r,g,b)" into [r,g,b]

    rgb = rgb.substr(4).split(")")[0].split(sep); // convert %s to 0–255

    for (var R in rgb) {
      var _r = rgb[R];
      if (_r.indexOf("%") > -1) rgb[R] = Math.round(_r.substr(0, _r.length - 1) / 100 * 255);
      /* Example:
      75% -> 191
      75/100 = 0.75, * 255 = 191.25 -> 191
      */
    }

    var r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;
    return "#" + r + g + b;
  } else {
    return "Invalid input color";
  }
}

function HSLToRGB(hsl, isPct) {
  var ex = /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;

  if (ex.test(hsl)) {
    var sep = hsl.indexOf(",") > -1 ? "," : " ";
    hsl = hsl.substr(4).split(")")[0].split(sep);
    isPct = isPct === true;
    var h = hsl[0],
        s = hsl[1].substr(0, hsl[1].length - 1) / 100,
        l = hsl[2].substr(0, hsl[2].length - 1) / 100; // strip label and convert to degrees (if necessary)

    if (h.indexOf("deg") > -1) h = h.substr(0, h.length - 3);else if (h.indexOf("rad") > -1) h = Math.round(h.substr(0, h.length - 3) / (2 * Math.PI) * 360);else if (h.indexOf("turn") > -1) h = Math.round(h.substr(0, h.length - 4) * 360); // keep hue fraction of 360 if ending up over

    if (h >= 360) h %= 360;
    var c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(h / 60 % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return {
      r: r,
      g: g,
      b: b
    };
  } else {
    return "Invalid input color";
  }
}

function RGBToHSL(rgb, type, mode) {
  var ex = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;

  if (ex.test(rgb)) {
    var sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep); // convert %s to 0–255

    for (var R in rgb) {
      var _r2 = rgb[R];
      if (_r2.indexOf("%") > -1) rgb[R] = Math.round(_r2.substr(0, _r2.length - 1) / 100 * 255);
    } // make r, g, and b fractions of 1


    var r = rgb[0] / 255,
        g = rgb[1] / 255,
        b = rgb[2] / 255,
        // find greatest and smallest channel values
    cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0; // calculate hue
    // no difference

    if (delta == 0) h = 0; // red is max
    else if (cmax == r) h = (g - b) / delta % 6; // green is max
      else if (cmax == g) h = (b - r) / delta + 2; // blue is max
        else h = (r - g) / delta + 4;
    h = Math.round(h * 60); // make negative hues positive behind 360°

    if (h < 0) h += 360; // calculate lightness

    l = (cmax + cmin) / 2; // calculate saturation

    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1)); // multiply l and s by 100

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    if (mode == "light") {
      if (type == "container") {
        var x = 100 - l;
        var a = 10;
        var c = 2;
        var bi = 0.96;
        var y = a * Math.pow(bi, x) + c;
        l = y; //l = 100-l;
      } else {
        l = 100 - l;
      } //(lightness* -100)/255

    } else if (mode == "dark") {
      if (type == "text") {
        var x = 100 - l;
        var a = 10;
        var c = 5;
        var bi = 0.96;
        var y = a * Math.pow(bi, x) + c;
        l = 100 - y; //l = 100-l;
      } else {
        l = 100 - l;
      }
    } else {
      //dont exced limits
      var s_color = -50;
      var transformed_color = s + s_color;

      if (transformed_color >= 100) {
        s = 100;
      } else if (transformed_color <= 0) {
        s = 0;
      } else {
        s += s_color;
      }

      s = 75;
      l = 65;
    } //l_darkmode, s_color,


    if (l > 100) {
      var lu = 100;
    } else {
      var lu = l;
    } // console.log("transformed hsl(" + h + "," + s + "%," + lu + "%)");


    return "hsl(" + h + "," + s + "%," + lu + "%)";
  } else {
    return "Invalid input color";
  }
}

function HSLToHex(hsl) {
  var ex = /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;

  if (ex.test(hsl)) {
    var sep = hsl.indexOf(",") > -1 ? "," : " ";
    hsl = hsl.substr(4).split(")")[0].split(sep);
    var h = hsl[0],
        s = hsl[1].substr(0, hsl[1].length - 1) / 100,
        l = hsl[2].substr(0, hsl[2].length - 1) / 100; // strip label and convert to degrees (if necessary)

    if (h.indexOf("deg") > -1) h = h.substr(0, h.length - 3);else if (h.indexOf("rad") > -1) h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));else if (h.indexOf("turn") > -1) h = Math.round(h.substr(0, h.length - 4) * 360);
    if (h >= 360) h %= 360;
    var c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(h / 60 % 2 - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    } // having obtained RGB, convert channels to hex


    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16); // prepend 0s if necessary

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;
    return "#" + r + g + b;
  } else {
    return "Invalid input color";
  }
}

function hexToRgba(hex) {
  // var hex = h.substr(0, 7);
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.substr(0, 7));

  if (hex.length > 7) {
    var alpha = parseInt(hex.slice(7, 9), 16);
  } else {
    var alpha = 255;
  }

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: alpha
  } : null;
}

function createDivider(frame) {
  var divider = NSView.alloc().initWithFrame(frame);
  divider.setWantsLayer(1);
  divider.layer().setBackgroundColor(CGColorCreateGenericRGB(204 / 255, 204 / 255, 204 / 255, 1.0));
  return divider;
}
function createField(value, frame) {
  var field = NSTextField.alloc().initWithFrame(frame);
  field.setStringValue(value);
  field.delegate = self;
  return field;
}
function createFieldnoBack(value, frame) {
  var field = NSTextField.alloc().initWithFrame(frame);
  field.setStringValue(value);
  field.setDrawsBackground(false);
  field.delegate = self;
  return field;
}
function createFieldControl(value, frame) {
  var field = NSControl.alloc().initWithFrame(frame);
  field.setStringValue(value);
  field.delegate = self;
  return field;
}
function setKeyOrder(alert, order) {
  for (var i = 0; i < order.length; i++) {
    var thisItem = order[i],
        nextItem = order[i + 1];
    if (nextItem) thisItem.setNextKeyView(nextItem);
  }

  alert.window().setInitialFirstResponder(order[0]);
}
function validateColorInput(code_array, name_array, add) {
  var validated_array = [];

  if (add) {
    var a_length = code_array.length;
  } else {
    var a_length = code_array.length - 1;
  }

  for (var i = 0; i < a_length; i++) {
    var count_repeated = 0;
    var code = code_array[i].stringValue();
    /*
            for(var j=0; j<validated_array.length; j++){
              if(code==validated_array[j]){
                count_repeated++;
                break;
    
              }
            }
            */

    if (count_repeated == 0) {
      if (/^#[0-9A-F]{8}$/i.test(code) || /^#[0-9A-F]{6}$/i.test(code)) {
        validated_array.push({
          "name": name_array[i].stringValue(),
          "code": code_array[i].stringValue()
        });
      }
    }
  }

  return validated_array;
}
function OrganizeArrayTextStyles(styles) {
  var array = [];
  var cur_style, cur_style_name;

  for (var i = 0; i < styles.length; i++) {
    var style_fontSize = styles[i].style.fontSize;
    var style_name = styles[i].name;

    if (style_name.indexOf("/") !== -1) {
      var style_name_array = style_name.split("/");
      var s_name = style_name_array[0];
    } else {
      var s_name = style_name;
    }

    if (array.length == 0) {
      array.push({
        "group": s_name,
        "styles": [styles[i]],
        "group_size": style_fontSize
      });
      cur_style_name = s_name;
    } else {
      var has_group = false;
      var has_group_id = 0;

      for (var j = 0; j < array.length; j++) {
        if (s_name == array[j].group) {
          has_group = true;
          has_group_id = j;
          break;
        }
      }

      if (has_group) {
        array[has_group_id].styles.push(styles[i]);
      } else {
        array.push({
          "group": s_name,
          "styles": [styles[i]],
          "group_size": style_fontSize
        });
        cur_style_name = s_name;
      }
    }
  }

  return array;
}

function updateElementStyle(element, style) {
  element.sharedStyleId = style.id;
  element.sharedStyle = style;
  element.style = style.style;
  element.style.syncWithSharedStyle(style);
}

function addNewStyle(document, element, style_type, style, added, styles) {
  var this_name = "DarkModeSystem/" + element + "-" + added + "/lightMode";
  styles.push({
    name: this_name,
    style: style,
    styleType: style_type,
    document: document
  });
  return styles;
}

function getLayerArtboard(p) {
  var parent_top = p;
  var artboar_id = p.id;

  if (parent_top.parent.type != "Page") {
    while (parent_top.type != "Artboard" && parent_top.type != "SymbolMaster" && parent_top.type != "Page") {
      parent_top = parent_top.parent;
      artboar_id = parent_top.id;
    }
  }

  return artboar_id;
}

function reviewSettings(document, all_settings) {
  console.log("Step 0 - Reviewing Settings..."); //console.log(all_settings);

  var reviewed_settings = [];

  for (var i = 0; i < all_settings.length; i++) {
    var dark_id = all_settings[i].dark;
    var light_id = all_settings[i].light;

    if (all_settings[i].type == "text") {
      var sharedStyle_light = document.getSharedTextStyleWithID(light_id);
      var sharedStyle_dark = document.getSharedTextStyleWithID(dark_id);
    } else {
      var sharedStyle_light = document.getSharedLayerStyleWithID(light_id);
      var sharedStyle_dark = document.getSharedLayerStyleWithID(dark_id);
    } //console.log(sharedStyle_dark);
    //console.log(sharedStyle_light);


    if (sharedStyle_light === undefined || sharedStyle_dark === undefined) {// console.log("there is one settings missing");
    } else {
      reviewed_settings.push(all_settings[i]);
    }
  }

  return reviewed_settings;
}
function syncLayerwithStyles_best(Settings, sketch, document, page) {
  //var all_layer= sketch.find('*', document.pages[page]);
  var all_shapes = sketch.find('Shape', document.pages[page]);
  var all_shapesPaths = sketch.find('ShapePath', document.pages[page]);
  var all_texts = sketch.find('Text', document.pages[page]);
  var layer_styles = document.sharedLayerStyles;
  var text_styles = document.sharedTextStyles;
  var count_added = document.sharedLayerStyles.length + document.sharedTextStyles.length;
  var all_settings = Settings.documentSettingForKey(document, 'Styles');
  var all_settings_c = Settings.documentSettingForKey(document, 'Styles_Containers');
  var all_settings_l = Settings.documentSettingForKey(document, 'Styles_Layers');
  var all_settings_t = Settings.documentSettingForKey(document, 'Styles_Texts');
  console.log("initial styles" + count_added);
  console.log("Step 1 - Validating...");
  var count = 0;
  var colored_containers = [];
  var new_styles = [];
  var percentage = 0;
  var count_shapePath_added = 0;
  var container_min_width = 200;
  var container_min_height = 200;
  var count_c = all_settings_c.length;
  var count_l = all_settings_l.length;
  var count_t = all_settings_t.length; // DO CONTAINERS

  var percentage = 0;
  var count_container_added = count_c;

  for (var i = 0; i < all_shapesPaths.length; i++) {
    if (all_shapesPaths[i].frame.width > container_min_width && all_shapesPaths[i].frame.height > container_min_height && all_shapesPaths[i].shapeType == "Rectangle") {
      count++;

      if (percentage != parseInt(i * 100 / all_shapesPaths.length)) {
        console.log("Containers 1 - " + percentage + "%");
        percentage = parseInt(i * 100 / all_shapesPaths.length);
      }

      var count_fills = 0;

      for (var s = 0; s < all_shapesPaths[i].style.fills.length; s++) {
        if (all_shapesPaths[i].style.fills[s].enabled == true) {
          var color = all_shapesPaths[i].style.fills[s].color;
          break;
        }
      }

      var color_rgb = hexToRgba(color);

      if (Math.abs(color_rgb.r - color_rgb.g) < 50 && Math.abs(color_rgb.r - color_rgb.b) < 50) {
        var container = "container_monotone";
      } else {
        var container = "container_color";
      } //Processing layers and its shared styles 


      var hasStyle = elementHasStyle(layer_styles, all_shapesPaths[i].sharedStyleId);
      var isOutOfSync = true;

      if (hasStyle != false) {
        isOutOfSync = all_shapesPaths[i].style.isOutOfSyncWithSharedStyle(hasStyle);
      }

      var is_inside_colored_container = false;

      if (!hasStyle || hasStyle && isOutOfSync) {
        var hasMatchingStyle = elementHasMatchingStyleAndSetting(document, layer_styles, all_shapesPaths[i].style, all_settings_c, all_settings_l, all_settings_t, undefined, ["layer", "layer", "text"]); //var hasMatchingStyle= elementHasMatchingStyle(layer_styles, all_shapesPaths[i].style);
        // get setting with macthcing style

        var hasmach_butnot = false;

        if (hasMatchingStyle) {
          for (var n = 0; n < all_settings_c.length; n++) {
            if (all_settings_c[n].light == hasMatchingStyle.id) {
              if (all_settings_c[n].element != container) {
                hasmach_butnot_setting = true;
                break;
              } else {
                break;
              }
            }
          }
        }

        if (!hasMatchingStyle || hasmach_butnot) {
          //create new style
          count_container_added++;
          layer_styles = addNewStyle(document, "Contsainer", "Layer", all_shapesPaths[i].style, count_container_added, layer_styles); //update element

          var last = layer_styles.length - 1;
          updateElementStyle(all_shapesPaths[i], layer_styles[last]); //Create new setting

          var element_size = all_shapesPaths[i].frame;
          var layer_artboard = getLayerArtboard(all_shapesPaths[i]);

          if (container == "container_color") {
            var frame_absolute = getFrameAbsoluteFrame(all_shapesPaths[i]);
            var this_frame = {
              "x": frame_absolute.x,
              "y": frame_absolute.y,
              "width": all_shapesPaths[i].frame.width,
              "height": all_shapesPaths[i].frame.height
            };
            colored_containers.push({
              "artboard": layer_artboard,
              "container": this_frame
            });
          } //console.log("COLORED CONTAINER!!!"); 


          new_styles.push({
            "action": "new",
            "type": "layer",
            "element": container,
            "id": layer_styles[last].id
          });
        } else {
          //update element
          updateElementStyle(all_shapesPaths[i], hasMatchingStyle); //add setting if it doesn't exist

          var element_size = all_shapesPaths[i].frame;
          var layer_artboard = getLayerArtboard(all_shapesPaths[i]);

          if (container == "container_color") {
            var frame_absolute = getFrameAbsoluteFrame(all_shapesPaths[i]);
            var this_frame = {
              "x": frame_absolute.x,
              "y": frame_absolute.y,
              "width": all_shapesPaths[i].frame.width,
              "height": all_shapesPaths[i].frame.height
            };
            colored_containers.push({
              "artboard": layer_artboard,
              "container": this_frame
            });
          } //console.log("COLORED CONTAINER!!!"); 


          var hasSettings = ifStylesavedInSettings(document, all_settings_c, new_styles, hasMatchingStyle.id, "layer");

          if (!hasSettings) {
            new_styles.push({
              "action": "link",
              "type": "layer",
              "element": container,
              "id": hasMatchingStyle.id
            });
          }
        } //has synced style

      } else {
        //update element
        updateElementStyle(all_shapesPaths[i], hasStyle); //add setting if it doesn't exist

        var element_size = all_shapesPaths[i].frame;
        var layer_artboard = getLayerArtboard(all_shapesPaths[i]);

        if (container == "container_color") {
          var frame_absolute = getFrameAbsoluteFrame(all_shapesPaths[i]);
          var this_frame = {
            "x": frame_absolute.x,
            "y": frame_absolute.y,
            "width": all_shapesPaths[i].frame.width,
            "height": all_shapesPaths[i].frame.height
          };
          colored_containers.push({
            "artboard": layer_artboard,
            "container": this_frame
          });
        } //console.log("COLORED CONTAINER!!!"); 


        var hasSettings = ifStylesavedInSettings(document, all_settings_c, new_styles, hasStyle.id, "layer");

        if (!hasSettings) {
          new_styles.push({
            "action": "save_setting",
            "type": "layer",
            "element": container,
            "id": hasStyle.id
          });
        }
      }
    }
  }

  var count_shapePath_added = count_l; // DO SHAPES PATHS

  for (var i = 0; i < all_shapesPaths.length; i++) {
    if (all_shapesPaths[i].frame.width < container_min_width || all_shapesPaths[i].frame.height < container_min_height || all_shapesPaths[i].shapeType != "Rectangle") {
      count++;

      if (percentage != parseInt(i * 100 / all_shapesPaths.length)) {
        console.log("Shapes paths 1 - " + percentage + "%");
        percentage = parseInt(i * 100 / all_shapesPaths.length);
      }

      var count_fills = 0;

      for (var s = 0; s < all_shapesPaths[i].style.fills.length; s++) {
        if (all_shapesPaths[i].style.fills[s].enabled == true) {
          count_fills++;
          break;
        }
      }

      var element_size = "small"; //Processing layers and its shared styles 

      var hasStyle = elementHasStyle(layer_styles, all_shapesPaths[i].sharedStyleId);
      var isOutOfSync = true;

      if (hasStyle != false) {
        isOutOfSync = all_shapesPaths[i].style.isOutOfSyncWithSharedStyle(hasStyle);
      }

      var is_inside_colored_container = TextinsideColoredContainer(all_shapesPaths[i], colored_containers);

      if (!hasStyle || hasStyle && isOutOfSync) {
        //var hasMatchingStyle= elementHasMatchingStyle(layer_styles, all_shapesPaths[i].style);
        var hasMatchingStyle = elementHasMatchingStyleAndSetting(document, layer_styles, all_shapesPaths[i].style, all_settings_l, all_settings_c, all_settings_t, is_inside_colored_container, ["layer", "layer", "text"]); // is has matching style but one is hover a colored container and the other is not

        var hasmach_butnot = false;

        if (hasMatchingStyle) {
          for (var n = 0; n < new_styles.length; n++) {
            if (new_styles[n].id == hasMatchingStyle.id) {
              if (new_styles[n].colored_container != is_inside_colored_container) {
                hasmach_butnot = true;
                break;
              } else {
                break;
              }
            }
          }
        }

        if (!hasMatchingStyle || hasmach_butnot) {
          //create new style
          count_shapePath_added++;
          layer_styles = addNewStyle(document, "ShapePath", "Layer", all_shapesPaths[i].style, count_shapePath_added, layer_styles); //update element

          var last = layer_styles.length - 1;
          updateElementStyle(all_shapesPaths[i], layer_styles[last]); //Create new setting

          new_styles.push({
            "action": "new",
            "type": "layer",
            "colored_container": is_inside_colored_container,
            "element": element_size,
            "id": layer_styles[last].id,
            "layerName": all_shapesPaths[i].name
          });
        } else {
          //update element
          updateElementStyle(all_shapesPaths[i], hasMatchingStyle); //add setting if it doesn't exist

          var hasSettings = ifStylesavedInSettings(document, all_settings_l, new_styles, hasMatchingStyle.id, "layer");

          if (!hasSettings) {
            new_styles.push({
              "action": "link",
              "type": "layer",
              "colored_container": is_inside_colored_container,
              "element": element_size,
              "id": hasMatchingStyle.id,
              "layerName": all_shapesPaths[i].name
            });
          }
        } //has synced style

      } else {
        //update element
        updateElementStyle(all_shapesPaths[i], hasStyle); //add setting if it doesn't exist

        var hasSettings = ifStylesavedInSettings(document, all_settings_l, new_styles, hasStyle.id, "layer");

        if (!hasSettings) {
          new_styles.push({
            "action": "save_setting",
            "type": "layer",
            "colored_container": is_inside_colored_container,
            "element": element_size,
            "id": hasStyle.id,
            "layerName": all_shapesPaths[i].name
          });
        }
      }
    }
  } //DO SHAPES


  var percentage = 0;
  var count_shape_added = count_shapePath_added;

  for (var i = 0; i < all_shapes.length; i++) {
    count++; //progress

    if (percentage != parseInt(i * 100 / all_shapes.length)) {
      console.log("Shapes 1 - " + percentage + "%");
      percentage = parseInt(i * 100 / all_shapes.length);
    }

    var element_size = "small"; //Processing layers and its shared styles 

    var hasStyle = elementHasStyle(layer_styles, all_shapes[i].sharedStyleId);
    var isOutOfSync = true;

    if (hasStyle != false) {
      isOutOfSync = all_shapes[i].style.isOutOfSyncWithSharedStyle(hasStyle);
    }

    var is_inside_colored_container = TextinsideColoredContainer(all_shapes[i], colored_containers);

    if (!hasStyle || hasStyle && isOutOfSync) {
      //var hasMatchingStyle= elementHasMatchingStyle(layer_styles, all_shapes[i].style);
      var hasMatchingStyle = elementHasMatchingStyleAndSetting(document, layer_styles, all_shapes[i].style, all_settings_l, all_settings_c, all_settings_t, is_inside_colored_container, ["layer", "layer", "text"]); // is has matching style but one is hover a colored container and the other is not

      var hasmach_butnot = false;

      if (hasMatchingStyle) {
        for (var n = 0; n < new_styles.length; n++) {
          if (new_styles[n].id == hasMatchingStyle.id) {
            if (new_styles[n].colored_container != is_inside_colored_container) {
              hasmach_butnot = true;
              break;
            } else {
              break;
            }
          }
        }
      }

      if (!hasMatchingStyle || hasmach_butnot) {
        //create new style
        count_shape_added++;
        layer_styles = addNewStyle(document, "Shape", "Layer", all_shapes[i].style, count_shape_added, layer_styles); //update element

        var last = layer_styles.length - 1;
        updateElementStyle(all_shapes[i], layer_styles[last]); //Create new setting

        new_styles.push({
          "action": "new",
          "type": "layer",
          "colored_container": is_inside_colored_container,
          "element": element_size,
          "id": layer_styles[last].id,
          "layerName": all_shapes[i].name
        });
      } else {
        //update element
        updateElementStyle(all_shapes[i], hasMatchingStyle); //add setting if it doesn't exist

        var hasSettings = ifStylesavedInSettings(document, all_settings_l, new_styles, hasMatchingStyle.id, "layer");

        if (!hasSettings) {
          new_styles.push({
            "action": "link",
            "type": "layer",
            "colored_container": is_inside_colored_container,
            "element": element_size,
            "id": hasMatchingStyle.id,
            "layerName": all_shapes[i].name
          });
        }
      } //has synced style

    } else {
      //update element
      updateElementStyle(all_shapes[i], hasStyle); //add setting if it doesn't exist

      var hasSettings = ifStylesavedInSettings(document, all_settings_l, new_styles, hasStyle.id, "layer");

      if (!hasSettings) {
        new_styles.push({
          "action": "save_setting",
          "type": "layer",
          "colored_container": is_inside_colored_container,
          "element": element_size,
          "id": hasStyle.id,
          "layerName": all_shapes[i].name
        });
      }
    }
  } //DO TEXTS


  var percentage = 0;
  var count_text_added = count_t;

  for (var i = 0; i < all_texts.length; i++) {
    count++;

    if (percentage != parseInt(i * 100 / all_texts.length)) {
      console.log("Texts 1 - " + percentage + "%");
      percentage = parseInt(i * 100 / all_texts.length);
    } //Processing layers and its shared styles 


    var hasStyle = elementHasStyle(text_styles, all_texts[i].sharedStyleId);
    var isOutOfSync = true;

    if (hasStyle != false) {
      isOutOfSync = all_texts[i].style.isOutOfSyncWithSharedStyle(hasStyle);
    }

    var is_inside_colored_container = TextinsideColoredContainer(all_texts[i], colored_containers);

    if (!hasStyle || hasStyle && isOutOfSync) {
      //var hasMatchingStyle= elementHasMatchingStyle(text_styles, all_texts[i].style); 
      var hasMatchingStyle = elementHasMatchingStyleAndSetting(document, text_styles, all_texts[i].style, all_settings_t, all_settings_c, all_settings_l, is_inside_colored_container, ["text", "layer", "layer"]); // is has matching style but one is hover a colored container and the other is not

      var hasmach_butnot = false;
      var hasmach_butnot_setting = false; //if matching style founf is in new styles

      if (hasMatchingStyle) {
        for (var n = 0; n < new_styles.length; n++) {
          if (new_styles[n].id == hasMatchingStyle.id) {
            if (new_styles[n].colored_container != is_inside_colored_container) {
              hasmach_butnot = true;
              break;
            } else {
              break;
            }
          }
        }
      }

      var hasmach_butnot_setting = false;

      if (hasMatchingStyle && !hasmach_butnot) {
        for (var n = 0; n < all_settings_t.length; n++) {
          if (all_settings_t[n].light == hasMatchingStyle.id) {
            if (all_settings_t[n].element != "text") {
              hasmach_butnot_setting = true;
              break;
            } else {
              break;
            }
          }
        }
      }

      if (!hasMatchingStyle || hasmach_butnot || hasmach_butnot_setting) {
        //create new style
        count_text_added++;
        var layerName;

        if (all_texts[i].style.fontSize < 13) {
          layerName = "Text-Small";
        } else if (all_texts[i].style.fontSize < 16) {
          layerName = "Text-Body";
        } else {
          layerName = "Text-Heading";
        }

        text_styles = addNewStyle(document, layerName, "Text", all_texts[i].style, count_text_added, text_styles); //update element

        var last = text_styles.length - 1;
        updateElementStyle(all_texts[i], text_styles[last]); //Create new setting

        new_styles.push({
          "action": "new",
          "type": "text",
          "colored_container": is_inside_colored_container,
          "id": text_styles[last].id,
          "layerName": all_texts[i].name
        });
      } else {
        //update element
        updateElementStyle(all_texts[i], hasMatchingStyle); //add setting if it doesn't exist

        var hasSettings = ifStylesavedInSettings(document, all_settings_t, new_styles, hasMatchingStyle.id, "text");

        if (!hasSettings) {
          new_styles.push({
            "action": "link",
            "type": "text",
            "colored_container": is_inside_colored_container,
            "id": hasMatchingStyle.id,
            "layerName": all_texts[i].name
          });
        }
      } //has synced style

    } else {
      //update element
      updateElementStyle(all_texts[i], hasStyle); //add setting if it doesn't exist

      var hasSettings = ifStylesavedInSettings(document, all_settings_t, new_styles, hasStyle.id, "text");

      if (!hasSettings) {
        var is_inside_colored_container = TextinsideColoredContainer(all_texts[i], colored_containers);
        new_styles.push({
          "action": "save_setting",
          "type": "text",
          "colored_container": is_inside_colored_container,
          "id": hasStyle.id,
          "layerName": all_texts[i].name
        });
      }
    }
  } //new_styles = new_container_styles.concat(new_styles);
  //console.log(colored_containers);
  //console.log("initial styles"+count_added);


  return {
    "layer": layer_styles,
    "text": text_styles,
    "new_styles": new_styles
  };
}

function TextinsideColoredContainer(text_element, colored_containers) {
  var is_inside_colored_container = false;
  var layer_artboard = getLayerArtboard(text_element);
  var same_artboard = false;
  var frame_absolute = getFrameAbsoluteFrame(text_element);

  for (var c = 0; c < colored_containers.length; c++) {
    if (layer_artboard == colored_containers[c].artboard) {
      same_artboard = colored_containers[c];

      if (frame_absolute.x >= same_artboard.container.x && frame_absolute.x <= same_artboard.container.x + same_artboard.container.width && frame_absolute.y >= same_artboard.container.y && frame_absolute.y <= same_artboard.container.y + same_artboard.container.height) {
        is_inside_colored_container = true;
      }
    }
  }

  return is_inside_colored_container;
}

function getFrameAbsoluteFrame(p) {
  var parent_top = p;
  var sum_x = p.frame.x;
  var sum_y = p.frame.y;

  if (parent_top.parent.type != "Page") {
    while (parent_top.type != "Artboard" && parent_top.type != "SymbolMaster" && parent_top.type != "Page") {
      parent_top = parent_top.parent;

      if (parent_top.type != "Artboard" && parent_top.type != "SymbolMaster" && parent_top.type != "Page") {
        sum_x += parent_top.frame.x;
        sum_y += parent_top.frame.y;
      }
    }
  }

  return {
    "x": sum_x,
    "y": sum_y
  };
}

function elementHasMatchingStyle(all_styles, style, this_settings) {
  var repeated = false; //console.log(all_styles);

  for (var i = 0; i < all_styles.length; i++) {
    var isOutOfSync = style.isOutOfSyncWithSharedStyle(all_styles[i]);
    var originLibrary = all_styles[i].getLibrary();

    if (!isOutOfSync && originLibrary == null) {
      repeated = all_styles[i];
      break;
    }
  }

  return repeated;
}

function elementHasMatchingStyleAndSetting(document, all_styles, style, this_settings, otherSettings, otherSettings_2, is_inside_colored_container, type) {
  var repeated = false;
  var is_in_my_setting = false;
  var is_in_other_Setting = false; //console.log(all_styles);

  for (var n = 0; n < this_settings.length; n++) {
    if (type[0] == "layer") {
      var setting_style = document.getSharedLayerStyleWithID(this_settings[n].light);
    } else {
      var setting_style = document.getSharedTextStyleWithID(this_settings[n].light);
    }

    var isOutOfSync = style.isOutOfSyncWithSharedStyle(setting_style);

    if (!isOutOfSync && this_settings[n].colored_container == is_inside_colored_container) {
      is_in_my_setting = true;
      repeated = setting_style;
      break;
    }
  }

  if (!is_in_my_setting) {
    for (var n = 0; n < otherSettings.length; n++) {
      if (type[1] == "layer") {
        var setting_style = document.getSharedLayerStyleWithID(otherSettings[n].light);
      } else {
        var setting_style = document.getSharedTextStyleWithID(otherSettings[n].light);
      }

      var isOutOfSync = style.isOutOfSyncWithSharedStyle(setting_style); //var originLibrary = all_styles[i].getLibrary();

      if (!isOutOfSync) {
        is_in_other_Setting = true;
        break;
      }
    }
  }

  if (!is_in_my_setting && !is_in_other_Setting) {
    for (var n = 0; n < otherSettings_2.length; n++) {
      if (type[2] == "layer") {
        var setting_style = document.getSharedLayerStyleWithID(otherSettings_2[n].light);
      } else {
        var setting_style = document.getSharedTextStyleWithID(otherSettings_2[n].light);
      }

      var isOutOfSync = style.isOutOfSyncWithSharedStyle(setting_style); //var originLibrary = all_styles[i].getLibrary();

      if (!isOutOfSync) {
        is_in_other_Setting = true;
        break;
      }
    }
  }

  if (!is_in_my_setting && !is_in_other_Setting) {
    for (var i = 0; i < all_styles.length; i++) {
      var isOutOfSync = style.isOutOfSyncWithSharedStyle(all_styles[i]);
      var originLibrary = all_styles[i].getLibrary();

      if (!isOutOfSync && originLibrary == null) {
        repeated = all_styles[i];
        break;
      }
    }
  }

  return repeated;
}

function ifStylesavedInSettings(document, all_settings, new_styles, style_id, type) {
  var repeated = false; //console.log(all_styles);

  for (var i = 0; i < new_styles.length; i++) {
    if (style_id == new_styles[i].id) {
      repeated = i;
      break;
    }
  } //console.log(all_styles);


  for (var i = 0; i < all_settings.length; i++) {
    if (style_id == all_settings.light) {
      /*
      if(type == "layer"){
        var style_dark=document.getSharedLayerStyleWithID(all_settings.dark );
        var style_light=document.getSharedLayerStyleWithID(all_settings.light );
      }else{
        var style_dark=document.getSharedTextStyleWithID(all_settings.dark );
        var style_light=document.getSharedTextStyleWithID(all_settings.light );
        
      }
      */
      if (type == "layer") {
        var style_dark = document.getSharedLayerStyleWithID(all_settings.dark);
      } else {
        var style_dark = document.getSharedTextStyleWithID(all_settings.dark);
      }

      if (style_dark != undefined) {
        repeated = all_settings[i];
      }

      break;
    }
  }

  return repeated;
}

function createDarkModeStyle(Settings, document, styles_layer, styles_text, new_styles) {
  console.log(".........................................");
  console.log("Step 2 - Create Dark Mode Layer Styles...");
  var percentage_layer = 0;
  var percentage_text = 0;
  var s_styles = Settings.documentSettingForKey(document, 'Styles');
  var s_styles_c = Settings.documentSettingForKey(document, 'Styles_Containers');
  var s_styles_l = Settings.documentSettingForKey(document, 'Styles_Layers');
  var s_styles_t = Settings.documentSettingForKey(document, 'Styles_Texts'); //layer color

  var new_styles_layer = styles_layer;
  var new_styles_text = styles_text; //console.log("number of styles"+new_styles.length);
  //DO LAYERS

  for (var i = 0; i < new_styles.length; i++) {
    //VIEW OF PROGRESS
    if (parseInt(percentage_layer) != parseInt(i * 100 / new_styles.length)) {
      console.log("Step 2 - " + percentage_layer + "%");
      percentage_layer = parseInt(i * 100 / new_styles.length);
    } //CREATE STYLE LAYER


    if (new_styles[i].type == "layer") {
      //GET SHARED STYLE
      var shared_style = getStyleById(styles_layer, new_styles[i].id); // var shared_style = document.getSharedLayerStyleWithID(new_styles[i].id);

      var s_style_name = shared_style.name; //GET CLEAN NAMES

      if (s_style_name.includes("lightMode")) {
        var clean_name = s_style_name.replace("/lightMode", "").replace(" ", "");
      } else {
        var clean_name = s_style_name.replace(" ", "");
        shared_style.name = shared_style.name + "/lightMode";
      }

      var dark_name = clean_name + "/DarkMode";
      new_styles_layer.push({
        name: dark_name,
        style: shared_style.style,
        styleType: "Layer",
        document: document
      });
      var last_style = new_styles_layer.length - 1;
      var transformMode;

      if (new_styles[i].colored_container == true) {
        transformMode = "in_colored_container";
      } else if (new_styles[i].element == "small") {
        transformMode = "Shape";
      } else {
        transformMode = "container";
      } //change Fill


      if (shared_style.style.fills.length > 0) {
        //loop through all fills
        for (var f = 0; f < shared_style.style.fills.length; f++) {
          //if gradient
          if (shared_style.style.fills[f].fillType == "Gradient") {
            for (var g = 0; g < shared_style.style.fills[f].gradient.stops.length; g++) {
              var newcolor = transformColor(shared_style.style.fills[f].gradient.stops[g].color, transformMode);
              new_styles_layer[last_style].style.fills[f].gradient.stops[g].color = newcolor;
            } //normal fill

          } else {
            var newcolor = transformColor(shared_style.style.fills[f].color, transformMode);
            new_styles_layer[last_style].style.fills[f].color = newcolor;
          }
        }
      } //change border


      if (shared_style.style.borders.length > 0) {
        //loop through all fills
        for (var b = 0; b < shared_style.style.borders.length; b++) {
          //iff gradient
          if (shared_style.style.borders[b].fillType == "Gradient") {
            for (var g = 0; g < shared_style.style.borders[b].gradient.stops.length; g++) {
              var newcolor = transformColor(shared_style.style.borders[b].gradient.stops[g].color, transformMode);
              new_styles_layer[last_style].style.borders[b].color = newcolor;
            } //normal fill

          } else {
            var newcolor = transformColor(shared_style.style.borders[b].color, transformMode);
            new_styles_layer[last_style].style.borders[b].color = newcolor;
          }
        }
      } //change shadows


      if (shared_style.style.shadows.length > 0) {
        for (var s = 0; s < shared_style.style.shadows.length; s++) {
          var newcolor = transformColor(shared_style.style.shadows[s].color, transformMode);
          new_styles_layer[last_style].style.shadows[s].color = newcolor;
        }
      } //change inner shadows


      if (shared_style.style.innerShadows.length > 0) {
        for (var s = 0; s < shared_style.style.innerShadows.length; s++) {
          var newcolor = transformColor(shared_style.style.innerShadows[s].color, transformMode);
          new_styles_layer[last_style].style.innerShadows[s].color = newcolor;
        }
      } //add setting


      s_styles.push({
        "type": "layer",
        "colored_container": new_styles[i].colored_container,
        "element": new_styles[i].element,
        "light": shared_style.id,
        "dark": new_styles_layer[last_style].id
      });

      if (new_styles[i].element === "small") {
        s_styles_l.push({
          "type": "layer",
          "colored_container": new_styles[i].colored_container,
          "element": new_styles[i].element,
          "light": shared_style.id,
          "dark": new_styles_layer[last_style].id
        });
      } else {
        s_styles_c.push({
          "type": "layer",
          "colored_container": new_styles[i].colored_container,
          "element": new_styles[i].element,
          "light": shared_style.id,
          "dark": new_styles_layer[last_style].id
        });
      } //console.log({"type": "layer", "light": shared_style.id, "dark":new_styles_layer[last_style].id});
      //console.log( shared_style.id);
      //CREATE TEXT LAYER

    } else {
      //GET SHARED STYLE
      var shared_style = getStyleById(styles_text, new_styles[i].id); // var shared_style = document.getSharedLayerStyleWithID(new_styles[i].id);
      //console.log(shared_style);

      var s_style_name = shared_style.name;

      if (s_style_name.includes("lightMode")) {
        var clean_name = s_style_name.replace("/lightMode", "").replace(" ", "");
      } else {
        var clean_name = s_style_name.replace(" ", "");
        shared_style.name = shared_style.name + "/lightMode";
      }

      var dark_name = clean_name + "/DarkMode";
      new_styles_text.push({
        name: dark_name,
        style: shared_style.style,
        styleType: "Layer",
        document: document
      });
      var last_style = new_styles_text.length - 1;

      if (new_styles[i].colored_container == true) {
        transformMode = "in_colored_container";
      } else {
        transformMode = "Text";
      } //CHANGE TEXT COLOR


      var layer_style_color = shared_style.style.textColor;
      var newcolor = transformColor(layer_style_color, transformMode);
      new_styles_text[last_style].style.textColor = newcolor;
      s_styles.push({
        "type": "text",
        "colored_container": new_styles[i].colored_container,
        "element": "text",
        "light": shared_style.id,
        "dark": new_styles_text[last_style].id
      });
      s_styles_t.push({
        "type": "text",
        "colored_container": new_styles[i].colored_container,
        "element": "text",
        "light": shared_style.id,
        "dark": new_styles_text[last_style].id
      });
    }
  }

  return {
    "layer": new_styles_layer,
    "text": new_styles_text,
    "settings": s_styles,
    "settings_c": s_styles_c,
    "settings_l": s_styles_l,
    "settings_t": s_styles_t
  };
}

function transformColor(color, type) {
  if (color.length > 7) {
    var alpha = color.slice(7, 9);
  } else {
    var alpha = "ff";
  }

  var dark_hex_hex = DarkMode(color, type);
  var dark_hex = RGBToHex("rgb(" + dark_hex_hex.r + "," + dark_hex_hex.g + "," + dark_hex_hex.b + ")");
  var dark_hex_alpha = dark_hex + alpha;
  return dark_hex_alpha;
}

function getSettingStyle(id, dark, all_settings) {
  var opositde_mode = false; //console.log(all_styles);

  for (var i = 0; i < all_settings.length; i++) {
    if (i == all_settings.length - 1 || i == all_settings.length - 2) {//console.log(all_settings[i])
    }

    if (all_settings[i].light == id && dark == true) {
      // console.log(opositde_mode)
      opositde_mode = all_settings[i].dark;
      break;
    }

    if (all_settings[i].dark == id && dark == false) {
      //console.log(opositde_mode)
      opositde_mode = all_settings[i].light;
      break;
    }
  }

  return opositde_mode;
}

function SwitchDarkMode_best(Settings, sketch, document, page, layer_styles, text_styles, dark) {
  console.log(".........................................");
  var all_layer = sketch.find('*', document.pages[page]);
  var all_artboards = sketch.find('Artboard', document.pages[page]);
  var all_shapes = sketch.find('Shape', document.pages[page]);
  var all_shapesPaths = sketch.find('ShapePath', document.pages[page]);
  var all_texts = sketch.find('Text', document.pages[page]);
  var all_settings = Settings.documentSettingForKey(document, 'Styles');

  if (dark) {
    var this_mode = "lightMode";
    var to_mode = "DarkMode";
  } else {
    var this_mode = "DarkMode";
    var to_mode = "lightMode";
  }

  var count_switch = 0;
  console.log("Step 4 - Switch to " + to_mode);
  var percentage = 0;

  for (var i = 0; i < all_shapes.length; i++) {
    if (percentage != parseInt(i * 100 / all_shapes.length)) {
      console.log("Shapes 4 - " + percentage + "%");
      percentage = parseInt(i * 100 / all_shapes.length);
    }

    var style_oposite_id = getSettingStyle(all_shapes[i].sharedStyleId, dark, all_settings);

    if (style_oposite_id != false) {
      //console.log(style_oposite_id);
      var style_oposite = document.getSharedLayerStyleWithID(style_oposite_id); //console.log(style_oposite);

      if (style_oposite != undefined) {
        all_shapes[i].sharedStyleId = style_oposite.id;
        all_shapes[i].sharedStyle = style_oposite;
        all_shapes[i].style = style_oposite.style;
        all_shapes[i].style.syncWithSharedStyle(style_oposite);
      }
    }
  }

  var percentage = 0;

  for (var i = 0; i < all_shapesPaths.length; i++) {
    if (percentage != parseInt(i * 100 / all_shapesPaths.length)) {
      console.log("Shapes Paths 4 - " + percentage + "%");
      percentage = parseInt(i * 100 / all_shapesPaths.length);
    } //console.log("shape id "+all_shapesPaths[i].sharedStyleId);


    var style_oposite_id = getSettingStyle(all_shapesPaths[i].sharedStyleId, dark, all_settings); //console.log(all_shapesPaths[i].sharedStyleId);
    //console.log("shape"+style_oposite_id);

    if (style_oposite_id != false) {
      //console.log("style_oposite_id");
      var style_oposite = document.getSharedLayerStyleWithID(style_oposite_id);

      if (style_oposite != undefined) {
        all_shapesPaths[i].sharedStyleId = style_oposite.id;
        all_shapesPaths[i].sharedStyle = style_oposite;
        all_shapesPaths[i].style = style_oposite.style;
        all_shapesPaths[i].style.syncWithSharedStyle(style_oposite);
        count_switch++;
      }
    }
  }

  var percentage = 0;

  for (var i = 0; i < all_texts.length; i++) {
    if (percentage != parseInt(i * 100 / all_texts.length)) {
      console.log("Texts 4 - " + percentage + "%");
      percentage = parseInt(i * 100 / all_texts.length);
    }

    var style_oposite_id = getSettingStyle(all_texts[i].sharedStyleId, dark, all_settings);

    if (style_oposite_id != false) {
      var style_oposite = document.getSharedTextStyleWithID(style_oposite_id);

      if (style_oposite != undefined) {
        all_texts[i].sharedStyleId = style_oposite.id;
        all_texts[i].sharedStyle = style_oposite;
        all_texts[i].style = style_oposite.style;
        all_texts[i].style.syncWithSharedStyle(style_oposite);
        count_switch++;
      }
    }
  }

  if (count_switch > 0) {
    var percentage = 0;

    for (var i = 0; i < all_artboards.length; i++) {
      console.log("Artboard - " + i);

      if (percentage != parseInt(i * 100 / all_artboards.length)) {
        console.log("Artboards 4 - " + percentage + "%");
        percentage = parseInt(i * 100 / all_artboards.length);
      } //CHANGE TEXT COLOR


      if (all_artboards[i].background.enabled == false) {
        var layer_style_color = "#ffffff";
      } else {
        var layer_style_color = all_artboards[i].background.color;
      }

      var alpha = "ff";
      var dark_hex_hex = DarkMode(layer_style_color, "Artboard");
      var dark_hex = RGBToHex("rgb(" + dark_hex_hex.r + "," + dark_hex_hex.g + "," + dark_hex_hex.b + ")");
      var new_artboard_color = dark_hex + alpha;
      all_artboards[i].background.color = new_artboard_color;
      all_artboards[i].background.enabled = true;
    }
  }

  return count_switch;
}

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['getSettings'] = __skpm_run.bind(this, 'getSettings');
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['documentColors'] = __skpm_run.bind(this, 'documentColors');
globalThis['createDarkmode'] = __skpm_run.bind(this, 'createDarkmode');
globalThis['DeleteAllSettings'] = __skpm_run.bind(this, 'DeleteAllSettings');
globalThis['switchLight'] = __skpm_run.bind(this, 'switchLight');
globalThis['switchDark'] = __skpm_run.bind(this, 'switchDark')

//# sourceMappingURL=__darkmode-system.js.map