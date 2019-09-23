/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2019 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pdfjs-dist/build/pdf", [], factory);
	else if(typeof exports === 'object')
		exports["pdfjs-dist/build/pdf"] = factory();
	else
		root["pdfjs-dist/build/pdf"] = root.pdfjsLib = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __w_pdfjs_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
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
/******/ 	__w_pdfjs_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__w_pdfjs_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__w_pdfjs_require__.d = function(exports, name, getter) {
/******/ 		if(!__w_pdfjs_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__w_pdfjs_require__.r = function(exports) {
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
/******/ 	__w_pdfjs_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __w_pdfjs_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__w_pdfjs_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __w_pdfjs_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__w_pdfjs_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__w_pdfjs_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__w_pdfjs_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__w_pdfjs_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __w_pdfjs_require__(__w_pdfjs_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var pdfjsVersion = '2.3.188';
var pdfjsBuild = '9596d702';

var pdfjsSharedUtil = __w_pdfjs_require__(1);

var pdfjsDisplayAPI = __w_pdfjs_require__(179);

var pdfjsDisplayTextLayer = __w_pdfjs_require__(194);

var pdfjsDisplayAnnotationLayer = __w_pdfjs_require__(195);

var pdfjsDisplayDisplayUtils = __w_pdfjs_require__(183);

var pdfjsDisplaySVG = __w_pdfjs_require__(196);

var pdfjsDisplayWorkerOptions = __w_pdfjs_require__(188);

var pdfjsDisplayAPICompatibility = __w_pdfjs_require__(185);

{
  var isNodeJS = __w_pdfjs_require__(4);

  if (isNodeJS()) {
    var PDFNodeStream = __w_pdfjs_require__(197).PDFNodeStream;

    pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
      return new PDFNodeStream(params);
    });
  } else {
    var PDFNetworkStream = __w_pdfjs_require__(200).PDFNetworkStream;

    var PDFFetchStream;

    if (pdfjsDisplayDisplayUtils.isFetchSupported()) {
      PDFFetchStream = __w_pdfjs_require__(201).PDFFetchStream;
    }

    pdfjsDisplayAPI.setPDFNetworkStreamFactory(function (params) {
      if (PDFFetchStream && pdfjsDisplayDisplayUtils.isValidFetchUrl(params.url)) {
        return new PDFFetchStream(params);
      }

      return new PDFNetworkStream(params);
    });
  }
}
exports.build = pdfjsDisplayAPI.build;
exports.version = pdfjsDisplayAPI.version;
exports.getDocument = pdfjsDisplayAPI.getDocument;
exports.LoopbackPort = pdfjsDisplayAPI.LoopbackPort;
exports.PDFDataRangeTransport = pdfjsDisplayAPI.PDFDataRangeTransport;
exports.PDFWorker = pdfjsDisplayAPI.PDFWorker;
exports.renderTextLayer = pdfjsDisplayTextLayer.renderTextLayer;
exports.AnnotationLayer = pdfjsDisplayAnnotationLayer.AnnotationLayer;
exports.createPromiseCapability = pdfjsSharedUtil.createPromiseCapability;
exports.PasswordResponses = pdfjsSharedUtil.PasswordResponses;
exports.InvalidPDFException = pdfjsSharedUtil.InvalidPDFException;
exports.MissingPDFException = pdfjsSharedUtil.MissingPDFException;
exports.SVGGraphics = pdfjsDisplaySVG.SVGGraphics;
exports.NativeImageDecoding = pdfjsSharedUtil.NativeImageDecoding;
exports.CMapCompressionType = pdfjsSharedUtil.CMapCompressionType;
exports.PermissionFlag = pdfjsSharedUtil.PermissionFlag;
exports.UnexpectedResponseException = pdfjsSharedUtil.UnexpectedResponseException;
exports.OPS = pdfjsSharedUtil.OPS;
exports.VerbosityLevel = pdfjsSharedUtil.VerbosityLevel;
exports.UNSUPPORTED_FEATURES = pdfjsSharedUtil.UNSUPPORTED_FEATURES;
exports.createValidAbsoluteUrl = pdfjsSharedUtil.createValidAbsoluteUrl;
exports.createObjectURL = pdfjsSharedUtil.createObjectURL;
exports.removeNullCharacters = pdfjsSharedUtil.removeNullCharacters;
exports.shadow = pdfjsSharedUtil.shadow;
exports.Util = pdfjsSharedUtil.Util;
exports.ReadableStream = pdfjsSharedUtil.ReadableStream;
exports.RenderingCancelledException = pdfjsDisplayDisplayUtils.RenderingCancelledException;
exports.getFilenameFromUrl = pdfjsDisplayDisplayUtils.getFilenameFromUrl;
exports.LinkTarget = pdfjsDisplayDisplayUtils.LinkTarget;
exports.addLinkAttributes = pdfjsDisplayDisplayUtils.addLinkAttributes;
exports.loadScript = pdfjsDisplayDisplayUtils.loadScript;
exports.PDFDateString = pdfjsDisplayDisplayUtils.PDFDateString;
exports.GlobalWorkerOptions = pdfjsDisplayWorkerOptions.GlobalWorkerOptions;
exports.apiCompatibilityParams = pdfjsDisplayAPICompatibility.apiCompatibilityParams;

/***/ }),
/* 1 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayByteLength = arrayByteLength;
exports.arraysToBytes = arraysToBytes;
exports.assert = assert;
exports.bytesToString = bytesToString;
exports.createPromiseCapability = createPromiseCapability;
exports.getVerbosityLevel = getVerbosityLevel;
exports.info = info;
exports.isArrayBuffer = isArrayBuffer;
exports.isArrayEqual = isArrayEqual;
exports.isBool = isBool;
exports.isEmptyObj = isEmptyObj;
exports.isNum = isNum;
exports.isString = isString;
exports.isSpace = isSpace;
exports.isSameOrigin = isSameOrigin;
exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
exports.isLittleEndian = isLittleEndian;
exports.isEvalSupported = isEvalSupported;
exports.log2 = log2;
exports.readInt8 = readInt8;
exports.readUint16 = readUint16;
exports.readUint32 = readUint32;
exports.removeNullCharacters = removeNullCharacters;
exports.setVerbosityLevel = setVerbosityLevel;
exports.shadow = shadow;
exports.string32 = string32;
exports.stringToBytes = stringToBytes;
exports.stringToPDFString = stringToPDFString;
exports.stringToUTF8String = stringToUTF8String;
exports.utf8StringToString = utf8StringToString;
exports.warn = warn;
exports.unreachable = unreachable;
Object.defineProperty(exports, "ReadableStream", {
  enumerable: true,
  get: function get() {
    return _streams_polyfill.ReadableStream;
  }
});
exports.createObjectURL = exports.FormatError = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.StreamType = exports.PermissionFlag = exports.PasswordResponses = exports.PasswordException = exports.NativeImageDecoding = exports.MissingPDFException = exports.InvalidPDFException = exports.AbortException = exports.CMapCompressionType = exports.ImageKind = exports.FontType = exports.AnnotationType = exports.AnnotationStateModelType = exports.AnnotationReviewState = exports.AnnotationReplyType = exports.AnnotationMarkedState = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.UNSUPPORTED_FEATURES = exports.VerbosityLevel = exports.OPS = exports.IDENTITY_MATRIX = exports.FONT_IDENTITY_MATRIX = void 0;

__w_pdfjs_require__(2);

var _streams_polyfill = __w_pdfjs_require__(177);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
var FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
var NativeImageDecoding = {
  NONE: 'none',
  DECODE: 'decode',
  DISPLAY: 'display'
};
exports.NativeImageDecoding = NativeImageDecoding;
var PermissionFlag = {
  PRINT: 0x04,
  MODIFY_CONTENTS: 0x08,
  COPY: 0x10,
  MODIFY_ANNOTATIONS: 0x20,
  FILL_INTERACTIVE_FORMS: 0x100,
  COPY_FOR_ACCESSIBILITY: 0x200,
  ASSEMBLE: 0x400,
  PRINT_HIGH_QUALITY: 0x800
};
exports.PermissionFlag = PermissionFlag;
var TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
exports.TextRenderingMode = TextRenderingMode;
var ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
exports.ImageKind = ImageKind;
var AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
exports.AnnotationType = AnnotationType;
var AnnotationStateModelType = {
  MARKED: 'Marked',
  REVIEW: 'Review'
};
exports.AnnotationStateModelType = AnnotationStateModelType;
var AnnotationMarkedState = {
  MARKED: 'Marked',
  UNMARKED: 'Unmarked'
};
exports.AnnotationMarkedState = AnnotationMarkedState;
var AnnotationReviewState = {
  ACCEPTED: 'Accepted',
  REJECTED: 'Rejected',
  CANCELLED: 'Cancelled',
  COMPLETED: 'Completed',
  NONE: 'None'
};
exports.AnnotationReviewState = AnnotationReviewState;
var AnnotationReplyType = {
  GROUP: 'Group',
  REPLY: 'R'
};
exports.AnnotationReplyType = AnnotationReplyType;
var AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};
exports.AnnotationFlag = AnnotationFlag;
var AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
};
exports.AnnotationFieldFlag = AnnotationFieldFlag;
var AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
var StreamType = {
  UNKNOWN: 'UNKNOWN',
  FLATE: 'FLATE',
  LZW: 'LZW',
  DCT: 'DCT',
  JPX: 'JPX',
  JBIG: 'JBIG',
  A85: 'A85',
  AHX: 'AHX',
  CCF: 'CCF',
  RLX: 'RLX'
};
exports.StreamType = StreamType;
var FontType = {
  UNKNOWN: 'UNKNOWN',
  TYPE1: 'TYPE1',
  TYPE1C: 'TYPE1C',
  CIDFONTTYPE0: 'CIDFONTTYPE0',
  CIDFONTTYPE0C: 'CIDFONTTYPE0C',
  TRUETYPE: 'TRUETYPE',
  CIDFONTTYPE2: 'CIDFONTTYPE2',
  TYPE3: 'TYPE3',
  OPENTYPE: 'OPENTYPE',
  TYPE0: 'TYPE0',
  MMTYPE1: 'MMTYPE1'
};
exports.FontType = FontType;
var VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
exports.VerbosityLevel = VerbosityLevel;
var CMapCompressionType = {
  NONE: 0,
  BINARY: 1,
  STREAM: 2
};
exports.CMapCompressionType = CMapCompressionType;
var OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotations: 78,
  endAnnotations: 79,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintJpegXObject: 82,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
};
exports.OPS = OPS;
var UNSUPPORTED_FEATURES = {
  unknown: 'unknown',
  forms: 'forms',
  javaScript: 'javaScript',
  smask: 'smask',
  shadingPattern: 'shadingPattern',
  font: 'font'
};
exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
var PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
exports.PasswordResponses = PasswordResponses;
var verbosity = VerbosityLevel.WARNINGS;

function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}

function getVerbosityLevel() {
  return verbosity;
}

function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log("Info: ".concat(msg));
  }
}

function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.log("Warning: ".concat(msg));
  }
}

function unreachable(msg) {
  throw new Error(msg);
}

function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}

function isSameOrigin(baseUrl, otherUrl) {
  var base;

  try {
    base = new URL(baseUrl);

    if (!base.origin || base.origin === 'null') {
      return false;
    }
  } catch (e) {
    return false;
  }

  var other = new URL(otherUrl, base);
  return base.origin === other.origin;
}

function _isValidProtocol(url) {
  if (!url) {
    return false;
  }

  switch (url.protocol) {
    case 'http:':
    case 'https:':
    case 'ftp:':
    case 'mailto:':
    case 'tel:':
      return true;

    default:
      return false;
  }
}

function createValidAbsoluteUrl(url, baseUrl) {
  if (!url) {
    return null;
  }

  try {
    var absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);

    if (_isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
    }
  } catch (ex) {}

  return null;
}

function shadow(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    value: value,
    enumerable: true,
    configurable: true,
    writable: false
  });
  return value;
}

var PasswordException = function PasswordExceptionClosure() {
  function PasswordException(msg, code) {
    this.name = 'PasswordException';
    this.message = msg;
    this.code = code;
  }

  PasswordException.prototype = new Error();
  PasswordException.constructor = PasswordException;
  return PasswordException;
}();

exports.PasswordException = PasswordException;

var UnknownErrorException = function UnknownErrorExceptionClosure() {
  function UnknownErrorException(msg, details) {
    this.name = 'UnknownErrorException';
    this.message = msg;
    this.details = details;
  }

  UnknownErrorException.prototype = new Error();
  UnknownErrorException.constructor = UnknownErrorException;
  return UnknownErrorException;
}();

exports.UnknownErrorException = UnknownErrorException;

var InvalidPDFException = function InvalidPDFExceptionClosure() {
  function InvalidPDFException(msg) {
    this.name = 'InvalidPDFException';
    this.message = msg;
  }

  InvalidPDFException.prototype = new Error();
  InvalidPDFException.constructor = InvalidPDFException;
  return InvalidPDFException;
}();

exports.InvalidPDFException = InvalidPDFException;

var MissingPDFException = function MissingPDFExceptionClosure() {
  function MissingPDFException(msg) {
    this.name = 'MissingPDFException';
    this.message = msg;
  }

  MissingPDFException.prototype = new Error();
  MissingPDFException.constructor = MissingPDFException;
  return MissingPDFException;
}();

exports.MissingPDFException = MissingPDFException;

var UnexpectedResponseException = function UnexpectedResponseExceptionClosure() {
  function UnexpectedResponseException(msg, status) {
    this.name = 'UnexpectedResponseException';
    this.message = msg;
    this.status = status;
  }

  UnexpectedResponseException.prototype = new Error();
  UnexpectedResponseException.constructor = UnexpectedResponseException;
  return UnexpectedResponseException;
}();

exports.UnexpectedResponseException = UnexpectedResponseException;

var FormatError = function FormatErrorClosure() {
  function FormatError(msg) {
    this.message = msg;
  }

  FormatError.prototype = new Error();
  FormatError.prototype.name = 'FormatError';
  FormatError.constructor = FormatError;
  return FormatError;
}();

exports.FormatError = FormatError;

var AbortException = function AbortExceptionClosure() {
  function AbortException(msg) {
    this.name = 'AbortException';
    this.message = msg;
  }

  AbortException.prototype = new Error();
  AbortException.constructor = AbortException;
  return AbortException;
}();

exports.AbortException = AbortException;
var NullCharactersRegExp = /\x00/g;

function removeNullCharacters(str) {
  if (typeof str !== 'string') {
    warn('The argument for removeNullCharacters must be a string.');
    return str;
  }

  return str.replace(NullCharactersRegExp, '');
}

function bytesToString(bytes) {
  assert(bytes !== null && _typeof(bytes) === 'object' && bytes.length !== undefined, 'Invalid argument for bytesToString');
  var length = bytes.length;
  var MAX_ARGUMENT_COUNT = 8192;

  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }

  var strBuf = [];

  for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    var chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }

  return strBuf.join('');
}

function stringToBytes(str) {
  assert(typeof str === 'string', 'Invalid argument for stringToBytes');
  var length = str.length;
  var bytes = new Uint8Array(length);

  for (var i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xFF;
  }

  return bytes;
}

function arrayByteLength(arr) {
  if (arr.length !== undefined) {
    return arr.length;
  }

  assert(arr.byteLength !== undefined);
  return arr.byteLength;
}

function arraysToBytes(arr) {
  var length = arr.length;

  if (length === 1 && arr[0] instanceof Uint8Array) {
    return arr[0];
  }

  var resultLength = 0;

  for (var i = 0; i < length; i++) {
    resultLength += arrayByteLength(arr[i]);
  }

  var pos = 0;
  var data = new Uint8Array(resultLength);

  for (var _i = 0; _i < length; _i++) {
    var item = arr[_i];

    if (!(item instanceof Uint8Array)) {
      if (typeof item === 'string') {
        item = stringToBytes(item);
      } else {
        item = new Uint8Array(item);
      }
    }

    var itemLength = item.byteLength;
    data.set(item, pos);
    pos += itemLength;
  }

  return data;
}

function string32(value) {
  return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}

function log2(x) {
  if (x <= 0) {
    return 0;
  }

  return Math.ceil(Math.log2(x));
}

function readInt8(data, start) {
  return data[start] << 24 >> 24;
}

function readUint16(data, offset) {
  return data[offset] << 8 | data[offset + 1];
}

function readUint32(data, offset) {
  return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
}

function isLittleEndian() {
  var buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  var view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}

function isEvalSupported() {
  try {
    new Function('');
    return true;
  } catch (e) {
    return false;
  }
}

var rgbBuf = ['rgb(', 0, ',', 0, ',', 0, ')'];

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "makeCssRgb",
    value: function makeCssRgb(r, g, b) {
      rgbBuf[1] = r;
      rgbBuf[3] = g;
      rgbBuf[5] = b;
      return rgbBuf.join('');
    }
  }, {
    key: "transform",
    value: function transform(m1, m2) {
      return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(p, m) {
      var xt = p[0] * m[0] + p[1] * m[2] + m[4];
      var yt = p[0] * m[1] + p[1] * m[3] + m[5];
      return [xt, yt];
    }
  }, {
    key: "applyInverseTransform",
    value: function applyInverseTransform(p, m) {
      var d = m[0] * m[3] - m[1] * m[2];
      var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
      var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
      return [xt, yt];
    }
  }, {
    key: "getAxialAlignedBoundingBox",
    value: function getAxialAlignedBoundingBox(r, m) {
      var p1 = Util.applyTransform(r, m);
      var p2 = Util.applyTransform(r.slice(2, 4), m);
      var p3 = Util.applyTransform([r[0], r[3]], m);
      var p4 = Util.applyTransform([r[2], r[1]], m);
      return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
    }
  }, {
    key: "inverseTransform",
    value: function inverseTransform(m) {
      var d = m[0] * m[3] - m[1] * m[2];
      return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
    }
  }, {
    key: "apply3dTransform",
    value: function apply3dTransform(m, v) {
      return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
    }
  }, {
    key: "singularValueDecompose2dScale",
    value: function singularValueDecompose2dScale(m) {
      var transpose = [m[0], m[2], m[1], m[3]];
      var a = m[0] * transpose[0] + m[1] * transpose[2];
      var b = m[0] * transpose[1] + m[1] * transpose[3];
      var c = m[2] * transpose[0] + m[3] * transpose[2];
      var d = m[2] * transpose[1] + m[3] * transpose[3];
      var first = (a + d) / 2;
      var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
      var sx = first + second || 1;
      var sy = first - second || 1;
      return [Math.sqrt(sx), Math.sqrt(sy)];
    }
  }, {
    key: "normalizeRect",
    value: function normalizeRect(rect) {
      var r = rect.slice(0);

      if (rect[0] > rect[2]) {
        r[0] = rect[2];
        r[2] = rect[0];
      }

      if (rect[1] > rect[3]) {
        r[1] = rect[3];
        r[3] = rect[1];
      }

      return r;
    }
  }, {
    key: "intersect",
    value: function intersect(rect1, rect2) {
      function compare(a, b) {
        return a - b;
      }

      var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare);
      var orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare);
      var result = [];
      rect1 = Util.normalizeRect(rect1);
      rect2 = Util.normalizeRect(rect2);

      if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
        result[0] = orderedX[1];
        result[2] = orderedX[2];
      } else {
        return null;
      }

      if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
        result[1] = orderedY[1];
        result[3] = orderedY[2];
      } else {
        return null;
      }

      return result;
    }
  }]);

  return Util;
}();

exports.Util = Util;
var PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];

function stringToPDFString(str) {
  var length = str.length,
      strBuf = [];

  if (str[0] === '\xFE' && str[1] === '\xFF') {
    for (var i = 2; i < length; i += 2) {
      strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
    }
  } else {
    for (var _i2 = 0; _i2 < length; ++_i2) {
      var code = PDFStringTranslateTable[str.charCodeAt(_i2)];
      strBuf.push(code ? String.fromCharCode(code) : str.charAt(_i2));
    }
  }

  return strBuf.join('');
}

function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}

function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}

function isEmptyObj(obj) {
  for (var key in obj) {
    return false;
  }

  return true;
}

function isBool(v) {
  return typeof v === 'boolean';
}

function isNum(v) {
  return typeof v === 'number';
}

function isString(v) {
  return typeof v === 'string';
}

function isArrayBuffer(v) {
  return _typeof(v) === 'object' && v !== null && v.byteLength !== undefined;
}

function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every(function (element, index) {
    return element === arr2[index];
  });
}

function isSpace(ch) {
  return ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A;
}

function createPromiseCapability() {
  var capability = Object.create(null);
  var isSettled = false;
  Object.defineProperty(capability, 'settled', {
    get: function get() {
      return isSettled;
    }
  });
  capability.promise = new Promise(function (resolve, reject) {
    capability.resolve = function (data) {
      isSettled = true;
      resolve(data);
    };

    capability.reject = function (reason) {
      isSettled = true;
      reject(reason);
    };
  });
  return capability;
}

var createObjectURL = function createObjectURLClosure() {
  var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  return function createObjectURL(data, contentType) {
    var forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!forceDataSchema && URL.createObjectURL) {
      var blob = new Blob([data], {
        type: contentType
      });
      return URL.createObjectURL(blob);
    }

    var buffer = "data:".concat(contentType, ";base64,");

    for (var i = 0, ii = data.length; i < ii; i += 3) {
      var b1 = data[i] & 0xFF;
      var b2 = data[i + 1] & 0xFF;
      var b3 = data[i + 2] & 0xFF;
      var d1 = b1 >> 2,
          d2 = (b1 & 3) << 4 | b2 >> 4;
      var d3 = i + 1 < ii ? (b2 & 0xF) << 2 | b3 >> 6 : 64;
      var d4 = i + 2 < ii ? b3 & 0x3F : 64;
      buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
    }

    return buffer;
  };
}();

exports.createObjectURL = createObjectURL;

/***/ }),
/* 2 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var globalScope = __w_pdfjs_require__(3);

if (!globalScope._pdfjsCompatibilityChecked) {
  globalScope._pdfjsCompatibilityChecked = true;

  var isNodeJS = __w_pdfjs_require__(4);

  var hasDOM = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object';

  (function checkNodeBtoa() {
    if (globalScope.btoa || !isNodeJS()) {
      return;
    }

    globalScope.btoa = function (chars) {
      return Buffer.from(chars, 'binary').toString('base64');
    };
  })();

  (function checkNodeAtob() {
    if (globalScope.atob || !isNodeJS()) {
      return;
    }

    globalScope.atob = function (input) {
      return Buffer.from(input, 'base64').toString('binary');
    };
  })();

  (function checkChildNodeRemove() {
    if (!hasDOM) {
      return;
    }

    if (typeof Element.prototype.remove !== 'undefined') {
      return;
    }

    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  })();

  (function checkDOMTokenListAddRemove() {
    if (!hasDOM || isNodeJS()) {
      return;
    }

    var div = document.createElement('div');
    div.classList.add('testOne', 'testTwo');

    if (div.classList.contains('testOne') === true && div.classList.contains('testTwo') === true) {
      return;
    }

    var OriginalDOMTokenListAdd = DOMTokenList.prototype.add;
    var OriginalDOMTokenListRemove = DOMTokenList.prototype.remove;

    DOMTokenList.prototype.add = function () {
      for (var _len = arguments.length, tokens = new Array(_len), _key = 0; _key < _len; _key++) {
        tokens[_key] = arguments[_key];
      }

      for (var _i = 0, _tokens = tokens; _i < _tokens.length; _i++) {
        var token = _tokens[_i];
        OriginalDOMTokenListAdd.call(this, token);
      }
    };

    DOMTokenList.prototype.remove = function () {
      for (var _len2 = arguments.length, tokens = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        tokens[_key2] = arguments[_key2];
      }

      for (var _i2 = 0, _tokens2 = tokens; _i2 < _tokens2.length; _i2++) {
        var token = _tokens2[_i2];
        OriginalDOMTokenListRemove.call(this, token);
      }
    };
  })();

  (function checkDOMTokenListToggle() {
    if (!hasDOM || isNodeJS()) {
      return;
    }

    var div = document.createElement('div');

    if (div.classList.toggle('test', 0) === false) {
      return;
    }

    DOMTokenList.prototype.toggle = function (token) {
      var force = arguments.length > 1 ? !!arguments[1] : !this.contains(token);
      return this[force ? 'add' : 'remove'](token), force;
    };
  })();

  (function checkStringStartsWith() {
    if (String.prototype.startsWith) {
      return;
    }

    __w_pdfjs_require__(5);
  })();

  (function checkStringEndsWith() {
    if (String.prototype.endsWith) {
      return;
    }

    __w_pdfjs_require__(57);
  })();

  (function checkStringIncludes() {
    if (String.prototype.includes) {
      return;
    }

    __w_pdfjs_require__(59);
  })();

  (function checkArrayIncludes() {
    if (Array.prototype.includes) {
      return;
    }

    __w_pdfjs_require__(61);
  })();

  (function checkArrayFrom() {
    if (Array.from) {
      return;
    }

    __w_pdfjs_require__(68);
  })();

  (function checkObjectAssign() {
    if (Object.assign) {
      return;
    }

    __w_pdfjs_require__(89);
  })();

  (function checkMathLog2() {
    if (Math.log2) {
      return;
    }

    Math.log2 = __w_pdfjs_require__(92);
  })();

  (function checkNumberIsNaN() {
    if (Number.isNaN) {
      return;
    }

    Number.isNaN = __w_pdfjs_require__(94);
  })();

  (function checkNumberIsInteger() {
    if (Number.isInteger) {
      return;
    }

    Number.isInteger = __w_pdfjs_require__(96);
  })();

  (function checkPromise() {
    if (globalScope.Promise && globalScope.Promise.prototype && globalScope.Promise.prototype["finally"]) {
      return;
    }

    globalScope.Promise = __w_pdfjs_require__(99);
  })();

  (function checkURL() {
    globalScope.URL = __w_pdfjs_require__(121);
  })();

  (function checkWeakMap() {
    if (globalScope.WeakMap) {
      return;
    }

    globalScope.WeakMap = __w_pdfjs_require__(128);
  })();

  (function checkWeakSet() {
    if (globalScope.WeakSet) {
      return;
    }

    globalScope.WeakSet = __w_pdfjs_require__(138);
  })();

  (function checkStringCodePointAt() {
    if (String.prototype.codePointAt) {
      return;
    }

    __w_pdfjs_require__(140);
  })();

  (function checkStringFromCodePoint() {
    if (String.fromCodePoint) {
      return;
    }

    String.fromCodePoint = __w_pdfjs_require__(142);
  })();

  (function checkSymbol() {
    if (globalScope.Symbol) {
      return;
    }

    __w_pdfjs_require__(144);
  })();

  (function checkStringPadStart() {
    if (String.prototype.padStart) {
      return;
    }

    __w_pdfjs_require__(167);
  })();

  (function checkStringPadEnd() {
    if (String.prototype.padEnd) {
      return;
    }

    __w_pdfjs_require__(172);
  })();

  (function checkObjectValues() {
    if (Object.values) {
      return;
    }

    Object.values = __w_pdfjs_require__(174);
  })();
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = typeof window !== 'undefined' && window.Math === Math ? window : typeof global !== 'undefined' && global.Math === Math ? global : typeof self !== 'undefined' && self.Math === Math ? self : {};

/***/ }),
/* 4 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function isNodeJS() {
  return (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process + '' === '[object process]' && !process.versions['nw'] && !process.versions['electron'];
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(6);
var entryUnbind = __w_pdfjs_require__(54);
module.exports = entryUnbind('String', 'startsWith');

/***/ }),
/* 6 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var toLength = __w_pdfjs_require__(43);
var notARegExp = __w_pdfjs_require__(49);
var requireObjectCoercible = __w_pdfjs_require__(17);
var correctIsRegExpLogic = __w_pdfjs_require__(53);
var nativeStartsWith = ''.startsWith;
var min = Math.min;
$({
 target: 'String',
 proto: true,
 forced: !correctIsRegExpLogic('startsWith')
}, {
 startsWith: function startsWith(searchString) {
  var that = String(requireObjectCoercible(this));
  notARegExp(searchString);
  var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
  var search = String(searchString);
  return nativeStartsWith ? nativeStartsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
 }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
var getOwnPropertyDescriptor = __w_pdfjs_require__(9).f;
var hide = __w_pdfjs_require__(23);
var redefine = __w_pdfjs_require__(26);
var setGlobal = __w_pdfjs_require__(28);
var copyConstructorProperties = __w_pdfjs_require__(36);
var isForced = __w_pdfjs_require__(48);
module.exports = function (options, source) {
 var TARGET = options.target;
 var GLOBAL = options.global;
 var STATIC = options.stat;
 var FORCED, target, key, targetProperty, sourceProperty, descriptor;
 if (GLOBAL) {
  target = global;
 } else if (STATIC) {
  target = global[TARGET] || setGlobal(TARGET, {});
 } else {
  target = (global[TARGET] || {}).prototype;
 }
 if (target)
  for (key in source) {
   sourceProperty = source[key];
   if (options.noTargetGet) {
    descriptor = getOwnPropertyDescriptor(target, key);
    targetProperty = descriptor && descriptor.value;
   } else
    targetProperty = target[key];
   FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
   if (!FORCED && targetProperty !== undefined) {
    if (typeof sourceProperty === typeof targetProperty)
     continue;
    copyConstructorProperties(sourceProperty, targetProperty);
   }
   if (options.sham || targetProperty && targetProperty.sham) {
    hide(sourceProperty, 'sham', true);
   }
   redefine(target, key, sourceProperty, options);
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var O = 'object';
var check = function (it) {
 return it && it.Math == Math && it;
};
module.exports = check(typeof globalThis == O && globalThis) || check(typeof window == O && window) || check(typeof self == O && self) || check(typeof global == O && global) || Function('return this')();

/***/ }),
/* 9 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var DESCRIPTORS = __w_pdfjs_require__(10);
var propertyIsEnumerableModule = __w_pdfjs_require__(12);
var createPropertyDescriptor = __w_pdfjs_require__(13);
var toIndexedObject = __w_pdfjs_require__(14);
var toPrimitive = __w_pdfjs_require__(18);
var has = __w_pdfjs_require__(20);
var IE8_DOM_DEFINE = __w_pdfjs_require__(21);
var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
 O = toIndexedObject(O);
 P = toPrimitive(P, true);
 if (IE8_DOM_DEFINE)
  try {
   return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) {
  }
 if (has(O, P))
  return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var fails = __w_pdfjs_require__(11);
module.exports = !fails(function () {
 return Object.defineProperty({}, 'a', {
  get: function () {
   return 7;
  }
 }).a != 7;
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (exec) {
 try {
  return !!exec();
 } catch (error) {
  return true;
 }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
 var descriptor = getOwnPropertyDescriptor(this, V);
 return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
 return {
  enumerable: !(bitmap & 1),
  configurable: !(bitmap & 2),
  writable: !(bitmap & 4),
  value: value
 };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var IndexedObject = __w_pdfjs_require__(15);
var requireObjectCoercible = __w_pdfjs_require__(17);
module.exports = function (it) {
 return IndexedObject(requireObjectCoercible(it));
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var fails = __w_pdfjs_require__(11);
var classof = __w_pdfjs_require__(16);
var split = ''.split;
module.exports = fails(function () {
 return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
 return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;
module.exports = function (it) {
 return toString.call(it).slice(8, -1);
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
 if (it == undefined)
  throw TypeError("Can't call method on " + it);
 return it;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var isObject = __w_pdfjs_require__(19);
module.exports = function (input, PREFERRED_STRING) {
 if (!isObject(input))
  return input;
 var fn, val;
 if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input)))
  return val;
 if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input)))
  return val;
 if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input)))
  return val;
 throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (it) {
 return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
 return hasOwnProperty.call(it, key);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var DESCRIPTORS = __w_pdfjs_require__(10);
var fails = __w_pdfjs_require__(11);
var createElement = __w_pdfjs_require__(22);
module.exports = !DESCRIPTORS && !fails(function () {
 return Object.defineProperty(createElement('div'), 'a', {
  get: function () {
   return 7;
  }
 }).a != 7;
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
var isObject = __w_pdfjs_require__(19);
var document = global.document;
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
 return EXISTS ? document.createElement(it) : {};
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var DESCRIPTORS = __w_pdfjs_require__(10);
var definePropertyModule = __w_pdfjs_require__(24);
var createPropertyDescriptor = __w_pdfjs_require__(13);
module.exports = DESCRIPTORS ? function (object, key, value) {
 return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
 object[key] = value;
 return object;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var DESCRIPTORS = __w_pdfjs_require__(10);
var IE8_DOM_DEFINE = __w_pdfjs_require__(21);
var anObject = __w_pdfjs_require__(25);
var toPrimitive = __w_pdfjs_require__(18);
var nativeDefineProperty = Object.defineProperty;
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
 anObject(O);
 P = toPrimitive(P, true);
 anObject(Attributes);
 if (IE8_DOM_DEFINE)
  try {
   return nativeDefineProperty(O, P, Attributes);
  } catch (error) {
  }
 if ('get' in Attributes || 'set' in Attributes)
  throw TypeError('Accessors not supported');
 if ('value' in Attributes)
  O[P] = Attributes.value;
 return O;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var isObject = __w_pdfjs_require__(19);
module.exports = function (it) {
 if (!isObject(it)) {
  throw TypeError(String(it) + ' is not an object');
 }
 return it;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
var shared = __w_pdfjs_require__(27);
var hide = __w_pdfjs_require__(23);
var has = __w_pdfjs_require__(20);
var setGlobal = __w_pdfjs_require__(28);
var nativeFunctionToString = __w_pdfjs_require__(30);
var InternalStateModule = __w_pdfjs_require__(31);
var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');
shared('inspectSource', function (it) {
 return nativeFunctionToString.call(it);
});
(module.exports = function (O, key, value, options) {
 var unsafe = options ? !!options.unsafe : false;
 var simple = options ? !!options.enumerable : false;
 var noTargetGet = options ? !!options.noTargetGet : false;
 if (typeof value == 'function') {
  if (typeof key == 'string' && !has(value, 'name'))
   hide(value, 'name', key);
  enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
 }
 if (O === global) {
  if (simple)
   O[key] = value;
  else
   setGlobal(key, value);
  return;
 } else if (!unsafe) {
  delete O[key];
 } else if (!noTargetGet && O[key]) {
  simple = true;
 }
 if (simple)
  O[key] = value;
 else
  hide(O, key, value);
})(Function.prototype, 'toString', function toString() {
 return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
var setGlobal = __w_pdfjs_require__(28);
var IS_PURE = __w_pdfjs_require__(29);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
(module.exports = function (key, value) {
 return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
 version: '3.2.1',
 mode: IS_PURE ? 'pure' : 'global',
 copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
var hide = __w_pdfjs_require__(23);
module.exports = function (key, value) {
 try {
  hide(global, key, value);
 } catch (error) {
  global[key] = value;
 }
 return value;
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 30 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var shared = __w_pdfjs_require__(27);
module.exports = shared('native-function-to-string', Function.toString);

/***/ }),
/* 31 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var NATIVE_WEAK_MAP = __w_pdfjs_require__(32);
var global = __w_pdfjs_require__(8);
var isObject = __w_pdfjs_require__(19);
var hide = __w_pdfjs_require__(23);
var objectHas = __w_pdfjs_require__(20);
var sharedKey = __w_pdfjs_require__(33);
var hiddenKeys = __w_pdfjs_require__(35);
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function (it) {
 return has(it) ? get(it) : set(it, {});
};
var getterFor = function (TYPE) {
 return function (it) {
  var state;
  if (!isObject(it) || (state = get(it)).type !== TYPE) {
   throw TypeError('Incompatible receiver, ' + TYPE + ' required');
  }
  return state;
 };
};
if (NATIVE_WEAK_MAP) {
 var store = new WeakMap();
 var wmget = store.get;
 var wmhas = store.has;
 var wmset = store.set;
 set = function (it, metadata) {
  wmset.call(store, it, metadata);
  return metadata;
 };
 get = function (it) {
  return wmget.call(store, it) || {};
 };
 has = function (it) {
  return wmhas.call(store, it);
 };
} else {
 var STATE = sharedKey('state');
 hiddenKeys[STATE] = true;
 set = function (it, metadata) {
  hide(it, STATE, metadata);
  return metadata;
 };
 get = function (it) {
  return objectHas(it, STATE) ? it[STATE] : {};
 };
 has = function (it) {
  return objectHas(it, STATE);
 };
}
module.exports = {
 set: set,
 get: get,
 has: has,
 enforce: enforce,
 getterFor: getterFor
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
var nativeFunctionToString = __w_pdfjs_require__(30);
var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));

/***/ }),
/* 33 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var shared = __w_pdfjs_require__(27);
var uid = __w_pdfjs_require__(34);
var keys = shared('keys');
module.exports = function (key) {
 return keys[key] || (keys[key] = uid(key));
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();
module.exports = function (key) {
 return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 36 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var has = __w_pdfjs_require__(20);
var ownKeys = __w_pdfjs_require__(37);
var getOwnPropertyDescriptorModule = __w_pdfjs_require__(9);
var definePropertyModule = __w_pdfjs_require__(24);
module.exports = function (target, source) {
 var keys = ownKeys(source);
 var defineProperty = definePropertyModule.f;
 var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
 for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  if (!has(target, key))
   defineProperty(target, key, getOwnPropertyDescriptor(source, key));
 }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var getBuiltIn = __w_pdfjs_require__(38);
var getOwnPropertyNamesModule = __w_pdfjs_require__(40);
var getOwnPropertySymbolsModule = __w_pdfjs_require__(47);
var anObject = __w_pdfjs_require__(25);
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
 var keys = getOwnPropertyNamesModule.f(anObject(it));
 var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
 return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var path = __w_pdfjs_require__(39);
var global = __w_pdfjs_require__(8);
var aFunction = function (variable) {
 return typeof variable == 'function' ? variable : undefined;
};
module.exports = function (namespace, method) {
 return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __w_pdfjs_require__) {

module.exports = __w_pdfjs_require__(8);

/***/ }),
/* 40 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var internalObjectKeys = __w_pdfjs_require__(41);
var enumBugKeys = __w_pdfjs_require__(46);
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
 return internalObjectKeys(O, hiddenKeys);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var has = __w_pdfjs_require__(20);
var toIndexedObject = __w_pdfjs_require__(14);
var indexOf = __w_pdfjs_require__(42).indexOf;
var hiddenKeys = __w_pdfjs_require__(35);
module.exports = function (object, names) {
 var O = toIndexedObject(object);
 var i = 0;
 var result = [];
 var key;
 for (key in O)
  !has(hiddenKeys, key) && has(O, key) && result.push(key);
 while (names.length > i)
  if (has(O, key = names[i++])) {
   ~indexOf(result, key) || result.push(key);
  }
 return result;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var toIndexedObject = __w_pdfjs_require__(14);
var toLength = __w_pdfjs_require__(43);
var toAbsoluteIndex = __w_pdfjs_require__(45);
var createMethod = function (IS_INCLUDES) {
 return function ($this, el, fromIndex) {
  var O = toIndexedObject($this);
  var length = toLength(O.length);
  var index = toAbsoluteIndex(fromIndex, length);
  var value;
  if (IS_INCLUDES && el != el)
   while (length > index) {
    value = O[index++];
    if (value != value)
     return true;
   }
  else
   for (; length > index; index++) {
    if ((IS_INCLUDES || index in O) && O[index] === el)
     return IS_INCLUDES || index || 0;
   }
  return !IS_INCLUDES && -1;
 };
};
module.exports = {
 includes: createMethod(true),
 indexOf: createMethod(false)
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var toInteger = __w_pdfjs_require__(44);
var min = Math.min;
module.exports = function (argument) {
 return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0;
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (argument) {
 return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var toInteger = __w_pdfjs_require__(44);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
 var integer = toInteger(index);
 return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = [
 'constructor',
 'hasOwnProperty',
 'isPrototypeOf',
 'propertyIsEnumerable',
 'toLocaleString',
 'toString',
 'valueOf'
];

/***/ }),
/* 47 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 48 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var fails = __w_pdfjs_require__(11);
var replacement = /#|\.prototype\./;
var isForced = function (feature, detection) {
 var value = data[normalize(feature)];
 return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function (string) {
 return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),
/* 49 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var isRegExp = __w_pdfjs_require__(50);
module.exports = function (it) {
 if (isRegExp(it)) {
  throw TypeError("The method doesn't accept regular expressions");
 }
 return it;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var isObject = __w_pdfjs_require__(19);
var classof = __w_pdfjs_require__(16);
var wellKnownSymbol = __w_pdfjs_require__(51);
var MATCH = wellKnownSymbol('match');
module.exports = function (it) {
 var isRegExp;
 return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
var shared = __w_pdfjs_require__(27);
var uid = __w_pdfjs_require__(34);
var NATIVE_SYMBOL = __w_pdfjs_require__(52);
var Symbol = global.Symbol;
var store = shared('wks');
module.exports = function (name) {
 return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name] || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var fails = __w_pdfjs_require__(11);
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
 return !String(Symbol());
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var wellKnownSymbol = __w_pdfjs_require__(51);
var MATCH = wellKnownSymbol('match');
module.exports = function (METHOD_NAME) {
 var regexp = /./;
 try {
  '/./'[METHOD_NAME](regexp);
 } catch (e) {
  try {
   regexp[MATCH] = false;
   return '/./'[METHOD_NAME](regexp);
  } catch (f) {
  }
 }
 return false;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
var bind = __w_pdfjs_require__(55);
var call = Function.call;
module.exports = function (CONSTRUCTOR, METHOD, length) {
 return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var aFunction = __w_pdfjs_require__(56);
module.exports = function (fn, that, length) {
 aFunction(fn);
 if (that === undefined)
  return fn;
 switch (length) {
 case 0:
  return function () {
   return fn.call(that);
  };
 case 1:
  return function (a) {
   return fn.call(that, a);
  };
 case 2:
  return function (a, b) {
   return fn.call(that, a, b);
  };
 case 3:
  return function (a, b, c) {
   return fn.call(that, a, b, c);
  };
 }
 return function () {
  return fn.apply(that, arguments);
 };
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function (it) {
 if (typeof it != 'function') {
  throw TypeError(String(it) + ' is not a function');
 }
 return it;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(58);
var entryUnbind = __w_pdfjs_require__(54);
module.exports = entryUnbind('String', 'endsWith');

/***/ }),
/* 58 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var toLength = __w_pdfjs_require__(43);
var notARegExp = __w_pdfjs_require__(49);
var requireObjectCoercible = __w_pdfjs_require__(17);
var correctIsRegExpLogic = __w_pdfjs_require__(53);
var nativeEndsWith = ''.endsWith;
var min = Math.min;
$({
 target: 'String',
 proto: true,
 forced: !correctIsRegExpLogic('endsWith')
}, {
 endsWith: function endsWith(searchString) {
  var that = String(requireObjectCoercible(this));
  notARegExp(searchString);
  var endPosition = arguments.length > 1 ? arguments[1] : undefined;
  var len = toLength(that.length);
  var end = endPosition === undefined ? len : min(toLength(endPosition), len);
  var search = String(searchString);
  return nativeEndsWith ? nativeEndsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
 }
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(60);
var entryUnbind = __w_pdfjs_require__(54);
module.exports = entryUnbind('String', 'includes');

/***/ }),
/* 60 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var notARegExp = __w_pdfjs_require__(49);
var requireObjectCoercible = __w_pdfjs_require__(17);
var correctIsRegExpLogic = __w_pdfjs_require__(53);
$({
 target: 'String',
 proto: true,
 forced: !correctIsRegExpLogic('includes')
}, {
 includes: function includes(searchString) {
  return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
 }
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(62);
var entryUnbind = __w_pdfjs_require__(54);
module.exports = entryUnbind('Array', 'includes');

/***/ }),
/* 62 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var $includes = __w_pdfjs_require__(42).includes;
var addToUnscopables = __w_pdfjs_require__(63);
$({
 target: 'Array',
 proto: true
}, {
 includes: function includes(el) {
  return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
 }
});
addToUnscopables('includes');

/***/ }),
/* 63 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var wellKnownSymbol = __w_pdfjs_require__(51);
var create = __w_pdfjs_require__(64);
var hide = __w_pdfjs_require__(23);
var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;
if (ArrayPrototype[UNSCOPABLES] == undefined) {
 hide(ArrayPrototype, UNSCOPABLES, create(null));
}
module.exports = function (key) {
 ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var anObject = __w_pdfjs_require__(25);
var defineProperties = __w_pdfjs_require__(65);
var enumBugKeys = __w_pdfjs_require__(46);
var hiddenKeys = __w_pdfjs_require__(35);
var html = __w_pdfjs_require__(67);
var documentCreateElement = __w_pdfjs_require__(22);
var sharedKey = __w_pdfjs_require__(33);
var IE_PROTO = sharedKey('IE_PROTO');
var PROTOTYPE = 'prototype';
var Empty = function () {
};
var createDict = function () {
 var iframe = documentCreateElement('iframe');
 var length = enumBugKeys.length;
 var lt = '<';
 var script = 'script';
 var gt = '>';
 var js = 'java' + script + ':';
 var iframeDocument;
 iframe.style.display = 'none';
 html.appendChild(iframe);
 iframe.src = String(js);
 iframeDocument = iframe.contentWindow.document;
 iframeDocument.open();
 iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
 iframeDocument.close();
 createDict = iframeDocument.F;
 while (length--)
  delete createDict[PROTOTYPE][enumBugKeys[length]];
 return createDict();
};
module.exports = Object.create || function create(O, Properties) {
 var result;
 if (O !== null) {
  Empty[PROTOTYPE] = anObject(O);
  result = new Empty();
  Empty[PROTOTYPE] = null;
  result[IE_PROTO] = O;
 } else
  result = createDict();
 return Properties === undefined ? result : defineProperties(result, Properties);
};
hiddenKeys[IE_PROTO] = true;

/***/ }),
/* 65 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var DESCRIPTORS = __w_pdfjs_require__(10);
var definePropertyModule = __w_pdfjs_require__(24);
var anObject = __w_pdfjs_require__(25);
var objectKeys = __w_pdfjs_require__(66);
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
 anObject(O);
 var keys = objectKeys(Properties);
 var length = keys.length;
 var index = 0;
 var key;
 while (length > index)
  definePropertyModule.f(O, key = keys[index++], Properties[key]);
 return O;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var internalObjectKeys = __w_pdfjs_require__(41);
var enumBugKeys = __w_pdfjs_require__(46);
module.exports = Object.keys || function keys(O) {
 return internalObjectKeys(O, enumBugKeys);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var getBuiltIn = __w_pdfjs_require__(38);
module.exports = getBuiltIn('document', 'documentElement');

/***/ }),
/* 68 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(69);
__w_pdfjs_require__(81);
var path = __w_pdfjs_require__(39);
module.exports = path.Array.from;

/***/ }),
/* 69 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var charAt = __w_pdfjs_require__(70).charAt;
var InternalStateModule = __w_pdfjs_require__(31);
var defineIterator = __w_pdfjs_require__(71);
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
defineIterator(String, 'String', function (iterated) {
 setInternalState(this, {
  type: STRING_ITERATOR,
  string: String(iterated),
  index: 0
 });
}, function next() {
 var state = getInternalState(this);
 var string = state.string;
 var index = state.index;
 var point;
 if (index >= string.length)
  return {
   value: undefined,
   done: true
  };
 point = charAt(string, index);
 state.index += point.length;
 return {
  value: point,
  done: false
 };
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var toInteger = __w_pdfjs_require__(44);
var requireObjectCoercible = __w_pdfjs_require__(17);
var createMethod = function (CONVERT_TO_STRING) {
 return function ($this, pos) {
  var S = String(requireObjectCoercible($this));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size)
   return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
 };
};
module.exports = {
 codeAt: createMethod(false),
 charAt: createMethod(true)
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var createIteratorConstructor = __w_pdfjs_require__(72);
var getPrototypeOf = __w_pdfjs_require__(74);
var setPrototypeOf = __w_pdfjs_require__(79);
var setToStringTag = __w_pdfjs_require__(77);
var hide = __w_pdfjs_require__(23);
var redefine = __w_pdfjs_require__(26);
var wellKnownSymbol = __w_pdfjs_require__(51);
var IS_PURE = __w_pdfjs_require__(29);
var Iterators = __w_pdfjs_require__(78);
var IteratorsCore = __w_pdfjs_require__(73);
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';
var returnThis = function () {
 return this;
};
module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
 createIteratorConstructor(IteratorConstructor, NAME, next);
 var getIterationMethod = function (KIND) {
  if (KIND === DEFAULT && defaultIterator)
   return defaultIterator;
  if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
   return IterablePrototype[KIND];
  switch (KIND) {
  case KEYS:
   return function keys() {
    return new IteratorConstructor(this, KIND);
   };
  case VALUES:
   return function values() {
    return new IteratorConstructor(this, KIND);
   };
  case ENTRIES:
   return function entries() {
    return new IteratorConstructor(this, KIND);
   };
  }
  return function () {
   return new IteratorConstructor(this);
  };
 };
 var TO_STRING_TAG = NAME + ' Iterator';
 var INCORRECT_VALUES_NAME = false;
 var IterablePrototype = Iterable.prototype;
 var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
 var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
 var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
 var CurrentIteratorPrototype, methods, KEY;
 if (anyNativeIterator) {
  CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
  if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
   if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
    if (setPrototypeOf) {
     setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
    } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
     hide(CurrentIteratorPrototype, ITERATOR, returnThis);
    }
   }
   setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
   if (IS_PURE)
    Iterators[TO_STRING_TAG] = returnThis;
  }
 }
 if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
  INCORRECT_VALUES_NAME = true;
  defaultIterator = function values() {
   return nativeIterator.call(this);
  };
 }
 if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
  hide(IterablePrototype, ITERATOR, defaultIterator);
 }
 Iterators[NAME] = defaultIterator;
 if (DEFAULT) {
  methods = {
   values: getIterationMethod(VALUES),
   keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
   entries: getIterationMethod(ENTRIES)
  };
  if (FORCED)
   for (KEY in methods) {
    if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
     redefine(IterablePrototype, KEY, methods[KEY]);
    }
   }
  else
   $({
    target: NAME,
    proto: true,
    forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
   }, methods);
 }
 return methods;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var IteratorPrototype = __w_pdfjs_require__(73).IteratorPrototype;
var create = __w_pdfjs_require__(64);
var createPropertyDescriptor = __w_pdfjs_require__(13);
var setToStringTag = __w_pdfjs_require__(77);
var Iterators = __w_pdfjs_require__(78);
var returnThis = function () {
 return this;
};
module.exports = function (IteratorConstructor, NAME, next) {
 var TO_STRING_TAG = NAME + ' Iterator';
 IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
 setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
 Iterators[TO_STRING_TAG] = returnThis;
 return IteratorConstructor;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var getPrototypeOf = __w_pdfjs_require__(74);
var hide = __w_pdfjs_require__(23);
var has = __w_pdfjs_require__(20);
var wellKnownSymbol = __w_pdfjs_require__(51);
var IS_PURE = __w_pdfjs_require__(29);
var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;
var returnThis = function () {
 return this;
};
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
 arrayIterator = [].keys();
 if (!('next' in arrayIterator))
  BUGGY_SAFARI_ITERATORS = true;
 else {
  PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
  if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
   IteratorPrototype = PrototypeOfArrayIteratorPrototype;
 }
}
if (IteratorPrototype == undefined)
 IteratorPrototype = {};
if (!IS_PURE && !has(IteratorPrototype, ITERATOR))
 hide(IteratorPrototype, ITERATOR, returnThis);
module.exports = {
 IteratorPrototype: IteratorPrototype,
 BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var has = __w_pdfjs_require__(20);
var toObject = __w_pdfjs_require__(75);
var sharedKey = __w_pdfjs_require__(33);
var CORRECT_PROTOTYPE_GETTER = __w_pdfjs_require__(76);
var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
 O = toObject(O);
 if (has(O, IE_PROTO))
  return O[IE_PROTO];
 if (typeof O.constructor == 'function' && O instanceof O.constructor) {
  return O.constructor.prototype;
 }
 return O instanceof Object ? ObjectPrototype : null;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var requireObjectCoercible = __w_pdfjs_require__(17);
module.exports = function (argument) {
 return Object(requireObjectCoercible(argument));
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var fails = __w_pdfjs_require__(11);
module.exports = !fails(function () {
 function F() {
 }
 F.prototype.constructor = null;
 return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineProperty = __w_pdfjs_require__(24).f;
var has = __w_pdfjs_require__(20);
var wellKnownSymbol = __w_pdfjs_require__(51);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
module.exports = function (it, TAG, STATIC) {
 if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
  defineProperty(it, TO_STRING_TAG, {
   configurable: true,
   value: TAG
  });
 }
};

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 79 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var anObject = __w_pdfjs_require__(25);
var aPossiblePrototype = __w_pdfjs_require__(80);
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
 var CORRECT_SETTER = false;
 var test = {};
 var setter;
 try {
  setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
  setter.call(test, []);
  CORRECT_SETTER = test instanceof Array;
 } catch (error) {
 }
 return function setPrototypeOf(O, proto) {
  anObject(O);
  aPossiblePrototype(proto);
  if (CORRECT_SETTER)
   setter.call(O, proto);
  else
   O.__proto__ = proto;
  return O;
 };
}() : undefined);

/***/ }),
/* 80 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var isObject = __w_pdfjs_require__(19);
module.exports = function (it) {
 if (!isObject(it) && it !== null) {
  throw TypeError("Can't set " + String(it) + ' as a prototype');
 }
 return it;
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var $ = __w_pdfjs_require__(7);
var from = __w_pdfjs_require__(82);
var checkCorrectnessOfIteration = __w_pdfjs_require__(88);
var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
 Array.from(iterable);
});
$({
 target: 'Array',
 stat: true,
 forced: INCORRECT_ITERATION
}, { from: from });

/***/ }),
/* 82 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var bind = __w_pdfjs_require__(55);
var toObject = __w_pdfjs_require__(75);
var callWithSafeIterationClosing = __w_pdfjs_require__(83);
var isArrayIteratorMethod = __w_pdfjs_require__(84);
var toLength = __w_pdfjs_require__(43);
var createProperty = __w_pdfjs_require__(85);
var getIteratorMethod = __w_pdfjs_require__(86);
module.exports = function from(arrayLike) {
 var O = toObject(arrayLike);
 var C = typeof this == 'function' ? this : Array;
 var argumentsLength = arguments.length;
 var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
 var mapping = mapfn !== undefined;
 var index = 0;
 var iteratorMethod = getIteratorMethod(O);
 var length, result, step, iterator;
 if (mapping)
  mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
 if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
  iterator = iteratorMethod.call(O);
  result = new C();
  for (; !(step = iterator.next()).done; index++) {
   createProperty(result, index, mapping ? callWithSafeIterationClosing(iterator, mapfn, [
    step.value,
    index
   ], true) : step.value);
  }
 } else {
  length = toLength(O.length);
  result = new C(length);
  for (; length > index; index++) {
   createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
  }
 }
 result.length = index;
 return result;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var anObject = __w_pdfjs_require__(25);
module.exports = function (iterator, fn, value, ENTRIES) {
 try {
  return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
 } catch (error) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined)
   anObject(returnMethod.call(iterator));
  throw error;
 }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var wellKnownSymbol = __w_pdfjs_require__(51);
var Iterators = __w_pdfjs_require__(78);
var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;
module.exports = function (it) {
 return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var toPrimitive = __w_pdfjs_require__(18);
var definePropertyModule = __w_pdfjs_require__(24);
var createPropertyDescriptor = __w_pdfjs_require__(13);
module.exports = function (object, key, value) {
 var propertyKey = toPrimitive(key);
 if (propertyKey in object)
  definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
 else
  object[propertyKey] = value;
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var classof = __w_pdfjs_require__(87);
var Iterators = __w_pdfjs_require__(78);
var wellKnownSymbol = __w_pdfjs_require__(51);
var ITERATOR = wellKnownSymbol('iterator');
module.exports = function (it) {
 if (it != undefined)
  return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var classofRaw = __w_pdfjs_require__(16);
var wellKnownSymbol = __w_pdfjs_require__(51);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var CORRECT_ARGUMENTS = classofRaw(function () {
 return arguments;
}()) == 'Arguments';
var tryGet = function (it, key) {
 try {
  return it[key];
 } catch (error) {
 }
};
module.exports = function (it) {
 var O, tag, result;
 return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var wellKnownSymbol = __w_pdfjs_require__(51);
var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;
try {
 var called = 0;
 var iteratorWithReturn = {
  next: function () {
   return { done: !!called++ };
  },
  'return': function () {
   SAFE_CLOSING = true;
  }
 };
 iteratorWithReturn[ITERATOR] = function () {
  return this;
 };
 Array.from(iteratorWithReturn, function () {
  throw 2;
 });
} catch (error) {
}
module.exports = function (exec, SKIP_CLOSING) {
 if (!SKIP_CLOSING && !SAFE_CLOSING)
  return false;
 var ITERATION_SUPPORT = false;
 try {
  var object = {};
  object[ITERATOR] = function () {
   return {
    next: function () {
     return { done: ITERATION_SUPPORT = true };
    }
   };
  };
  exec(object);
 } catch (error) {
 }
 return ITERATION_SUPPORT;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(90);
var path = __w_pdfjs_require__(39);
module.exports = path.Object.assign;

/***/ }),
/* 90 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var $ = __w_pdfjs_require__(7);
var assign = __w_pdfjs_require__(91);
$({
 target: 'Object',
 stat: true,
 forced: Object.assign !== assign
}, { assign: assign });

/***/ }),
/* 91 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var DESCRIPTORS = __w_pdfjs_require__(10);
var fails = __w_pdfjs_require__(11);
var objectKeys = __w_pdfjs_require__(66);
var getOwnPropertySymbolsModule = __w_pdfjs_require__(47);
var propertyIsEnumerableModule = __w_pdfjs_require__(12);
var toObject = __w_pdfjs_require__(75);
var IndexedObject = __w_pdfjs_require__(15);
var nativeAssign = Object.assign;
module.exports = !nativeAssign || fails(function () {
 var A = {};
 var B = {};
 var symbol = Symbol();
 var alphabet = 'abcdefghijklmnopqrst';
 A[symbol] = 7;
 alphabet.split('').forEach(function (chr) {
  B[chr] = chr;
 });
 return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
 var T = toObject(target);
 var argumentsLength = arguments.length;
 var index = 1;
 var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
 var propertyIsEnumerable = propertyIsEnumerableModule.f;
 while (argumentsLength > index) {
  var S = IndexedObject(arguments[index++]);
  var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
  var length = keys.length;
  var j = 0;
  var key;
  while (length > j) {
   key = keys[j++];
   if (!DESCRIPTORS || propertyIsEnumerable.call(S, key))
    T[key] = S[key];
  }
 }
 return T;
} : nativeAssign;

/***/ }),
/* 92 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(93);
var path = __w_pdfjs_require__(39);
module.exports = path.Math.log2;

/***/ }),
/* 93 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var $ = __w_pdfjs_require__(7);
var log = Math.log;
var LN2 = Math.LN2;
$({
 target: 'Math',
 stat: true
}, {
 log2: function log2(x) {
  return log(x) / LN2;
 }
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(95);
var path = __w_pdfjs_require__(39);
module.exports = path.Number.isNaN;

/***/ }),
/* 95 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var $ = __w_pdfjs_require__(7);
$({
 target: 'Number',
 stat: true
}, {
 isNaN: function isNaN(number) {
  return number != number;
 }
});

/***/ }),
/* 96 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(97);
var path = __w_pdfjs_require__(39);
module.exports = path.Number.isInteger;

/***/ }),
/* 97 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var $ = __w_pdfjs_require__(7);
var isInteger = __w_pdfjs_require__(98);
$({
 target: 'Number',
 stat: true
}, { isInteger: isInteger });

/***/ }),
/* 98 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var isObject = __w_pdfjs_require__(19);
var floor = Math.floor;
module.exports = function isInteger(it) {
 return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(100);
__w_pdfjs_require__(69);
__w_pdfjs_require__(102);
__w_pdfjs_require__(105);
__w_pdfjs_require__(119);
__w_pdfjs_require__(120);
var path = __w_pdfjs_require__(39);
module.exports = path.Promise;

/***/ }),
/* 100 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var redefine = __w_pdfjs_require__(26);
var toString = __w_pdfjs_require__(101);
var ObjectPrototype = Object.prototype;
if (toString !== ObjectPrototype.toString) {
 redefine(ObjectPrototype, 'toString', toString, { unsafe: true });
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var classof = __w_pdfjs_require__(87);
var wellKnownSymbol = __w_pdfjs_require__(51);
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) !== '[object z]' ? function toString() {
 return '[object ' + classof(this) + ']';
} : test.toString;

/***/ }),
/* 102 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
var DOMIterables = __w_pdfjs_require__(103);
var ArrayIteratorMethods = __w_pdfjs_require__(104);
var hide = __w_pdfjs_require__(23);
var wellKnownSymbol = __w_pdfjs_require__(51);
var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;
for (var COLLECTION_NAME in DOMIterables) {
 var Collection = global[COLLECTION_NAME];
 var CollectionPrototype = Collection && Collection.prototype;
 if (CollectionPrototype) {
  if (CollectionPrototype[ITERATOR] !== ArrayValues)
   try {
    hide(CollectionPrototype, ITERATOR, ArrayValues);
   } catch (error) {
    CollectionPrototype[ITERATOR] = ArrayValues;
   }
  if (!CollectionPrototype[TO_STRING_TAG])
   hide(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  if (DOMIterables[COLLECTION_NAME])
   for (var METHOD_NAME in ArrayIteratorMethods) {
    if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
     try {
      hide(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
     } catch (error) {
      CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
     }
   }
 }
}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = {
 CSSRuleList: 0,
 CSSStyleDeclaration: 0,
 CSSValueList: 0,
 ClientRectList: 0,
 DOMRectList: 0,
 DOMStringList: 0,
 DOMTokenList: 1,
 DataTransferItemList: 0,
 FileList: 0,
 HTMLAllCollection: 0,
 HTMLCollection: 0,
 HTMLFormElement: 0,
 HTMLSelectElement: 0,
 MediaList: 0,
 MimeTypeArray: 0,
 NamedNodeMap: 0,
 NodeList: 1,
 PaintRequestList: 0,
 Plugin: 0,
 PluginArray: 0,
 SVGLengthList: 0,
 SVGNumberList: 0,
 SVGPathSegList: 0,
 SVGPointList: 0,
 SVGStringList: 0,
 SVGTransformList: 0,
 SourceBufferList: 0,
 StyleSheetList: 0,
 TextTrackCueList: 0,
 TextTrackList: 0,
 TouchList: 0
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var toIndexedObject = __w_pdfjs_require__(14);
var addToUnscopables = __w_pdfjs_require__(63);
var Iterators = __w_pdfjs_require__(78);
var InternalStateModule = __w_pdfjs_require__(31);
var defineIterator = __w_pdfjs_require__(71);
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
 setInternalState(this, {
  type: ARRAY_ITERATOR,
  target: toIndexedObject(iterated),
  index: 0,
  kind: kind
 });
}, function () {
 var state = getInternalState(this);
 var target = state.target;
 var kind = state.kind;
 var index = state.index++;
 if (!target || index >= target.length) {
  state.target = undefined;
  return {
   value: undefined,
   done: true
  };
 }
 if (kind == 'keys')
  return {
   value: index,
   done: false
  };
 if (kind == 'values')
  return {
   value: target[index],
   done: false
  };
 return {
  value: [
   index,
   target[index]
  ],
  done: false
 };
}, 'values');
Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 105 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var IS_PURE = __w_pdfjs_require__(29);
var global = __w_pdfjs_require__(8);
var path = __w_pdfjs_require__(39);
var NativePromise = __w_pdfjs_require__(106);
var redefine = __w_pdfjs_require__(26);
var redefineAll = __w_pdfjs_require__(107);
var setToStringTag = __w_pdfjs_require__(77);
var setSpecies = __w_pdfjs_require__(108);
var isObject = __w_pdfjs_require__(19);
var aFunction = __w_pdfjs_require__(56);
var anInstance = __w_pdfjs_require__(109);
var classof = __w_pdfjs_require__(16);
var iterate = __w_pdfjs_require__(110);
var checkCorrectnessOfIteration = __w_pdfjs_require__(88);
var speciesConstructor = __w_pdfjs_require__(111);
var task = __w_pdfjs_require__(112).set;
var microtask = __w_pdfjs_require__(113);
var promiseResolve = __w_pdfjs_require__(115);
var hostReportErrors = __w_pdfjs_require__(117);
var newPromiseCapabilityModule = __w_pdfjs_require__(116);
var perform = __w_pdfjs_require__(118);
var userAgent = __w_pdfjs_require__(114);
var InternalStateModule = __w_pdfjs_require__(31);
var isForced = __w_pdfjs_require__(48);
var wellKnownSymbol = __w_pdfjs_require__(51);
var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = global.fetch;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
var FORCED = isForced(PROMISE, function () {
 var promise = PromiseConstructor.resolve(1);
 var empty = function () {
 };
 var FakePromise = (promise.constructor = {})[SPECIES] = function (exec) {
  exec(empty, empty);
 };
 return !((IS_NODE || typeof PromiseRejectionEvent == 'function') && (!IS_PURE || promise['finally']) && promise.then(empty) instanceof FakePromise && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1);
});
var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
 PromiseConstructor.all(iterable)['catch'](function () {
 });
});
var isThenable = function (it) {
 var then;
 return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, state, isReject) {
 if (state.notified)
  return;
 state.notified = true;
 var chain = state.reactions;
 microtask(function () {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var index = 0;
  while (chain.length > index) {
   var reaction = chain[index++];
   var handler = ok ? reaction.ok : reaction.fail;
   var resolve = reaction.resolve;
   var reject = reaction.reject;
   var domain = reaction.domain;
   var result, then, exited;
   try {
    if (handler) {
     if (!ok) {
      if (state.rejection === UNHANDLED)
       onHandleUnhandled(promise, state);
      state.rejection = HANDLED;
     }
     if (handler === true)
      result = value;
     else {
      if (domain)
       domain.enter();
      result = handler(value);
      if (domain) {
       domain.exit();
       exited = true;
      }
     }
     if (result === reaction.promise) {
      reject(TypeError('Promise-chain cycle'));
     } else if (then = isThenable(result)) {
      then.call(result, resolve, reject);
     } else
      resolve(result);
    } else
     reject(value);
   } catch (error) {
    if (domain && !exited)
     domain.exit();
    reject(error);
   }
  }
  state.reactions = [];
  state.notified = false;
  if (isReject && !state.rejection)
   onUnhandled(promise, state);
 });
};
var dispatchEvent = function (name, promise, reason) {
 var event, handler;
 if (DISPATCH_EVENT) {
  event = document.createEvent('Event');
  event.promise = promise;
  event.reason = reason;
  event.initEvent(name, false, true);
  global.dispatchEvent(event);
 } else
  event = {
   promise: promise,
   reason: reason
  };
 if (handler = global['on' + name])
  handler(event);
 else if (name === UNHANDLED_REJECTION)
  hostReportErrors('Unhandled promise rejection', reason);
};
var onUnhandled = function (promise, state) {
 task.call(global, function () {
  var value = state.value;
  var IS_UNHANDLED = isUnhandled(state);
  var result;
  if (IS_UNHANDLED) {
   result = perform(function () {
    if (IS_NODE) {
     process.emit('unhandledRejection', value, promise);
    } else
     dispatchEvent(UNHANDLED_REJECTION, promise, value);
   });
   state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
   if (result.error)
    throw result.value;
  }
 });
};
var isUnhandled = function (state) {
 return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function (promise, state) {
 task.call(global, function () {
  if (IS_NODE) {
   process.emit('rejectionHandled', promise);
  } else
   dispatchEvent(REJECTION_HANDLED, promise, state.value);
 });
};
var bind = function (fn, promise, state, unwrap) {
 return function (value) {
  fn(promise, state, value, unwrap);
 };
};
var internalReject = function (promise, state, value, unwrap) {
 if (state.done)
  return;
 state.done = true;
 if (unwrap)
  state = unwrap;
 state.value = value;
 state.state = REJECTED;
 notify(promise, state, true);
};
var internalResolve = function (promise, state, value, unwrap) {
 if (state.done)
  return;
 state.done = true;
 if (unwrap)
  state = unwrap;
 try {
  if (promise === value)
   throw TypeError("Promise can't be resolved itself");
  var then = isThenable(value);
  if (then) {
   microtask(function () {
    var wrapper = { done: false };
    try {
     then.call(value, bind(internalResolve, promise, wrapper, state), bind(internalReject, promise, wrapper, state));
    } catch (error) {
     internalReject(promise, wrapper, error, state);
    }
   });
  } else {
   state.value = value;
   state.state = FULFILLED;
   notify(promise, state, false);
  }
 } catch (error) {
  internalReject(promise, { done: false }, error, state);
 }
};
if (FORCED) {
 PromiseConstructor = function Promise(executor) {
  anInstance(this, PromiseConstructor, PROMISE);
  aFunction(executor);
  Internal.call(this);
  var state = getInternalState(this);
  try {
   executor(bind(internalResolve, this, state), bind(internalReject, this, state));
  } catch (error) {
   internalReject(this, state, error);
  }
 };
 Internal = function Promise(executor) {
  setInternalState(this, {
   type: PROMISE,
   done: false,
   notified: false,
   parent: false,
   reactions: [],
   rejection: false,
   state: PENDING,
   value: undefined
  });
 };
 Internal.prototype = redefineAll(PromiseConstructor.prototype, {
  then: function then(onFulfilled, onRejected) {
   var state = getInternalPromiseState(this);
   var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
   reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
   reaction.fail = typeof onRejected == 'function' && onRejected;
   reaction.domain = IS_NODE ? process.domain : undefined;
   state.parent = true;
   state.reactions.push(reaction);
   if (state.state != PENDING)
    notify(this, state, false);
   return reaction.promise;
  },
  'catch': function (onRejected) {
   return this.then(undefined, onRejected);
  }
 });
 OwnPromiseCapability = function () {
  var promise = new Internal();
  var state = getInternalState(promise);
  this.promise = promise;
  this.resolve = bind(internalResolve, promise, state);
  this.reject = bind(internalReject, promise, state);
 };
 newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
  return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
 };
 if (!IS_PURE && typeof NativePromise == 'function') {
  nativeThen = NativePromise.prototype.then;
  redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
   var that = this;
   return new PromiseConstructor(function (resolve, reject) {
    nativeThen.call(that, resolve, reject);
   }).then(onFulfilled, onRejected);
  });
  if (typeof $fetch == 'function')
   $({
    global: true,
    enumerable: true,
    forced: true
   }, {
    fetch: function fetch(input) {
     return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
    }
   });
 }
}
$({
 global: true,
 wrap: true,
 forced: FORCED
}, { Promise: PromiseConstructor });
setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);
PromiseWrapper = path[PROMISE];
$({
 target: PROMISE,
 stat: true,
 forced: FORCED
}, {
 reject: function reject(r) {
  var capability = newPromiseCapability(this);
  capability.reject.call(undefined, r);
  return capability.promise;
 }
});
$({
 target: PROMISE,
 stat: true,
 forced: IS_PURE || FORCED
}, {
 resolve: function resolve(x) {
  return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
 }
});
$({
 target: PROMISE,
 stat: true,
 forced: INCORRECT_ITERATION
}, {
 all: function all(iterable) {
  var C = this;
  var capability = newPromiseCapability(C);
  var resolve = capability.resolve;
  var reject = capability.reject;
  var result = perform(function () {
   var $promiseResolve = aFunction(C.resolve);
   var values = [];
   var counter = 0;
   var remaining = 1;
   iterate(iterable, function (promise) {
    var index = counter++;
    var alreadyCalled = false;
    values.push(undefined);
    remaining++;
    $promiseResolve.call(C, promise).then(function (value) {
     if (alreadyCalled)
      return;
     alreadyCalled = true;
     values[index] = value;
     --remaining || resolve(values);
    }, reject);
   });
   --remaining || resolve(values);
  });
  if (result.error)
   reject(result.value);
  return capability.promise;
 },
 race: function race(iterable) {
  var C = this;
  var capability = newPromiseCapability(C);
  var reject = capability.reject;
  var result = perform(function () {
   var $promiseResolve = aFunction(C.resolve);
   iterate(iterable, function (promise) {
    $promiseResolve.call(C, promise).then(capability.resolve, reject);
   });
  });
  if (result.error)
   reject(result.value);
  return capability.promise;
 }
});

/***/ }),
/* 106 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
module.exports = global.Promise;

/***/ }),
/* 107 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var redefine = __w_pdfjs_require__(26);
module.exports = function (target, src, options) {
 for (var key in src)
  redefine(target, key, src[key], options);
 return target;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var getBuiltIn = __w_pdfjs_require__(38);
var definePropertyModule = __w_pdfjs_require__(24);
var wellKnownSymbol = __w_pdfjs_require__(51);
var DESCRIPTORS = __w_pdfjs_require__(10);
var SPECIES = wellKnownSymbol('species');
module.exports = function (CONSTRUCTOR_NAME) {
 var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
 var defineProperty = definePropertyModule.f;
 if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
  defineProperty(Constructor, SPECIES, {
   configurable: true,
   get: function () {
    return this;
   }
  });
 }
};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
 if (!(it instanceof Constructor)) {
  throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
 }
 return it;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var anObject = __w_pdfjs_require__(25);
var isArrayIteratorMethod = __w_pdfjs_require__(84);
var toLength = __w_pdfjs_require__(43);
var bind = __w_pdfjs_require__(55);
var getIteratorMethod = __w_pdfjs_require__(86);
var callWithSafeIterationClosing = __w_pdfjs_require__(83);
var Result = function (stopped, result) {
 this.stopped = stopped;
 this.result = result;
};
var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
 var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
 var iterator, iterFn, index, length, result, step;
 if (IS_ITERATOR) {
  iterator = iterable;
 } else {
  iterFn = getIteratorMethod(iterable);
  if (typeof iterFn != 'function')
   throw TypeError('Target is not iterable');
  if (isArrayIteratorMethod(iterFn)) {
   for (index = 0, length = toLength(iterable.length); length > index; index++) {
    result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
    if (result && result instanceof Result)
     return result;
   }
   return new Result(false);
  }
  iterator = iterFn.call(iterable);
 }
 while (!(step = iterator.next()).done) {
  result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
  if (result && result instanceof Result)
   return result;
 }
 return new Result(false);
};
iterate.stop = function (result) {
 return new Result(true, result);
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var anObject = __w_pdfjs_require__(25);
var aFunction = __w_pdfjs_require__(56);
var wellKnownSymbol = __w_pdfjs_require__(51);
var SPECIES = wellKnownSymbol('species');
module.exports = function (O, defaultConstructor) {
 var C = anObject(O).constructor;
 var S;
 return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
var fails = __w_pdfjs_require__(11);
var classof = __w_pdfjs_require__(16);
var bind = __w_pdfjs_require__(55);
var html = __w_pdfjs_require__(67);
var createElement = __w_pdfjs_require__(22);
var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function (id) {
 if (queue.hasOwnProperty(id)) {
  var fn = queue[id];
  delete queue[id];
  fn();
 }
};
var runner = function (id) {
 return function () {
  run(id);
 };
};
var listener = function (event) {
 run(event.data);
};
var post = function (id) {
 global.postMessage(id + '', location.protocol + '//' + location.host);
};
if (!set || !clear) {
 set = function setImmediate(fn) {
  var args = [];
  var i = 1;
  while (arguments.length > i)
   args.push(arguments[i++]);
  queue[++counter] = function () {
   (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
  };
  defer(counter);
  return counter;
 };
 clear = function clearImmediate(id) {
  delete queue[id];
 };
 if (classof(process) == 'process') {
  defer = function (id) {
   process.nextTick(runner(id));
  };
 } else if (Dispatch && Dispatch.now) {
  defer = function (id) {
   Dispatch.now(runner(id));
  };
 } else if (MessageChannel) {
  channel = new MessageChannel();
  port = channel.port2;
  channel.port1.onmessage = listener;
  defer = bind(port.postMessage, port, 1);
 } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
  defer = post;
  global.addEventListener('message', listener, false);
 } else if (ONREADYSTATECHANGE in createElement('script')) {
  defer = function (id) {
   html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
    html.removeChild(this);
    run(id);
   };
  };
 } else {
  defer = function (id) {
   setTimeout(runner(id), 0);
  };
 }
}
module.exports = {
 set: set,
 clear: clear
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
var getOwnPropertyDescriptor = __w_pdfjs_require__(9).f;
var classof = __w_pdfjs_require__(16);
var macrotask = __w_pdfjs_require__(112).set;
var userAgent = __w_pdfjs_require__(114);
var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var flush, head, last, notify, toggle, node, promise, then;
if (!queueMicrotask) {
 flush = function () {
  var parent, fn;
  if (IS_NODE && (parent = process.domain))
   parent.exit();
  while (head) {
   fn = head.fn;
   head = head.next;
   try {
    fn();
   } catch (error) {
    if (head)
     notify();
    else
     last = undefined;
    throw error;
   }
  }
  last = undefined;
  if (parent)
   parent.enter();
 };
 if (IS_NODE) {
  notify = function () {
   process.nextTick(flush);
  };
 } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
  toggle = true;
  node = document.createTextNode('');
  new MutationObserver(flush).observe(node, { characterData: true });
  notify = function () {
   node.data = toggle = !toggle;
  };
 } else if (Promise && Promise.resolve) {
  promise = Promise.resolve(undefined);
  then = promise.then;
  notify = function () {
   then.call(promise, flush);
  };
 } else {
  notify = function () {
   macrotask.call(global, flush);
  };
 }
}
module.exports = queueMicrotask || function (fn) {
 var task = {
  fn: fn,
  next: undefined
 };
 if (last)
  last.next = task;
 if (!head) {
  head = task;
  notify();
 }
 last = task;
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var getBuiltIn = __w_pdfjs_require__(38);
module.exports = getBuiltIn('navigator', 'userAgent') || '';

/***/ }),
/* 115 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var anObject = __w_pdfjs_require__(25);
var isObject = __w_pdfjs_require__(19);
var newPromiseCapability = __w_pdfjs_require__(116);
module.exports = function (C, x) {
 anObject(C);
 if (isObject(x) && x.constructor === C)
  return x;
 var promiseCapability = newPromiseCapability.f(C);
 var resolve = promiseCapability.resolve;
 resolve(x);
 return promiseCapability.promise;
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var aFunction = __w_pdfjs_require__(56);
var PromiseCapability = function (C) {
 var resolve, reject;
 this.promise = new C(function ($$resolve, $$reject) {
  if (resolve !== undefined || reject !== undefined)
   throw TypeError('Bad Promise constructor');
  resolve = $$resolve;
  reject = $$reject;
 });
 this.resolve = aFunction(resolve);
 this.reject = aFunction(reject);
};
module.exports.f = function (C) {
 return new PromiseCapability(C);
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
module.exports = function (a, b) {
 var console = global.console;
 if (console && console.error) {
  arguments.length === 1 ? console.error(a) : console.error(a, b);
 }
};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function (exec) {
 try {
  return {
   error: false,
   value: exec()
  };
 } catch (error) {
  return {
   error: true,
   value: error
  };
 }
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var aFunction = __w_pdfjs_require__(56);
var newPromiseCapabilityModule = __w_pdfjs_require__(116);
var perform = __w_pdfjs_require__(118);
var iterate = __w_pdfjs_require__(110);
$({
 target: 'Promise',
 stat: true
}, {
 allSettled: function allSettled(iterable) {
  var C = this;
  var capability = newPromiseCapabilityModule.f(C);
  var resolve = capability.resolve;
  var reject = capability.reject;
  var result = perform(function () {
   var promiseResolve = aFunction(C.resolve);
   var values = [];
   var counter = 0;
   var remaining = 1;
   iterate(iterable, function (promise) {
    var index = counter++;
    var alreadyCalled = false;
    values.push(undefined);
    remaining++;
    promiseResolve.call(C, promise).then(function (value) {
     if (alreadyCalled)
      return;
     alreadyCalled = true;
     values[index] = {
      status: 'fulfilled',
      value: value
     };
     --remaining || resolve(values);
    }, function (e) {
     if (alreadyCalled)
      return;
     alreadyCalled = true;
     values[index] = {
      status: 'rejected',
      reason: e
     };
     --remaining || resolve(values);
    });
   });
   --remaining || resolve(values);
  });
  if (result.error)
   reject(result.value);
  return capability.promise;
 }
});

/***/ }),
/* 120 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var IS_PURE = __w_pdfjs_require__(29);
var NativePromise = __w_pdfjs_require__(106);
var getBuiltIn = __w_pdfjs_require__(38);
var speciesConstructor = __w_pdfjs_require__(111);
var promiseResolve = __w_pdfjs_require__(115);
var redefine = __w_pdfjs_require__(26);
$({
 target: 'Promise',
 proto: true,
 real: true
}, {
 'finally': function (onFinally) {
  var C = speciesConstructor(this, getBuiltIn('Promise'));
  var isFunction = typeof onFinally == 'function';
  return this.then(isFunction ? function (x) {
   return promiseResolve(C, onFinally()).then(function () {
    return x;
   });
  } : onFinally, isFunction ? function (e) {
   return promiseResolve(C, onFinally()).then(function () {
    throw e;
   });
  } : onFinally);
 }
});
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
 redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(122);
__w_pdfjs_require__(127);
__w_pdfjs_require__(125);
var path = __w_pdfjs_require__(39);
module.exports = path.URL;

/***/ }),
/* 122 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

__w_pdfjs_require__(69);
var $ = __w_pdfjs_require__(7);
var DESCRIPTORS = __w_pdfjs_require__(10);
var USE_NATIVE_URL = __w_pdfjs_require__(123);
var global = __w_pdfjs_require__(8);
var defineProperties = __w_pdfjs_require__(65);
var redefine = __w_pdfjs_require__(26);
var anInstance = __w_pdfjs_require__(109);
var has = __w_pdfjs_require__(20);
var assign = __w_pdfjs_require__(91);
var arrayFrom = __w_pdfjs_require__(82);
var codeAt = __w_pdfjs_require__(70).codeAt;
var toASCII = __w_pdfjs_require__(124);
var setToStringTag = __w_pdfjs_require__(77);
var URLSearchParamsModule = __w_pdfjs_require__(125);
var InternalStateModule = __w_pdfjs_require__(31);
var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;
var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';
var ALPHA = /[A-Za-z]/;
var ALPHANUMERIC = /[\d+\-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
var EOF;
var parseHost = function (url, input) {
 var result, codePoints, index;
 if (input.charAt(0) == '[') {
  if (input.charAt(input.length - 1) != ']')
   return INVALID_HOST;
  result = parseIPv6(input.slice(1, -1));
  if (!result)
   return INVALID_HOST;
  url.host = result;
 } else if (!isSpecial(url)) {
  if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input))
   return INVALID_HOST;
  result = '';
  codePoints = arrayFrom(input);
  for (index = 0; index < codePoints.length; index++) {
   result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
  }
  url.host = result;
 } else {
  input = toASCII(input);
  if (FORBIDDEN_HOST_CODE_POINT.test(input))
   return INVALID_HOST;
  result = parseIPv4(input);
  if (result === null)
   return INVALID_HOST;
  url.host = result;
 }
};
var parseIPv4 = function (input) {
 var parts = input.split('.');
 var partsLength, numbers, index, part, radix, number, ipv4;
 if (parts.length && parts[parts.length - 1] == '') {
  parts.pop();
 }
 partsLength = parts.length;
 if (partsLength > 4)
  return input;
 numbers = [];
 for (index = 0; index < partsLength; index++) {
  part = parts[index];
  if (part == '')
   return input;
  radix = 10;
  if (part.length > 1 && part.charAt(0) == '0') {
   radix = HEX_START.test(part) ? 16 : 8;
   part = part.slice(radix == 8 ? 1 : 2);
  }
  if (part === '') {
   number = 0;
  } else {
   if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part))
    return input;
   number = parseInt(part, radix);
  }
  numbers.push(number);
 }
 for (index = 0; index < partsLength; index++) {
  number = numbers[index];
  if (index == partsLength - 1) {
   if (number >= pow(256, 5 - partsLength))
    return null;
  } else if (number > 255)
   return null;
 }
 ipv4 = numbers.pop();
 for (index = 0; index < numbers.length; index++) {
  ipv4 += numbers[index] * pow(256, 3 - index);
 }
 return ipv4;
};
var parseIPv6 = function (input) {
 var address = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
 ];
 var pieceIndex = 0;
 var compress = null;
 var pointer = 0;
 var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
 var char = function () {
  return input.charAt(pointer);
 };
 if (char() == ':') {
  if (input.charAt(1) != ':')
   return;
  pointer += 2;
  pieceIndex++;
  compress = pieceIndex;
 }
 while (char()) {
  if (pieceIndex == 8)
   return;
  if (char() == ':') {
   if (compress !== null)
    return;
   pointer++;
   pieceIndex++;
   compress = pieceIndex;
   continue;
  }
  value = length = 0;
  while (length < 4 && HEX.test(char())) {
   value = value * 16 + parseInt(char(), 16);
   pointer++;
   length++;
  }
  if (char() == '.') {
   if (length == 0)
    return;
   pointer -= length;
   if (pieceIndex > 6)
    return;
   numbersSeen = 0;
   while (char()) {
    ipv4Piece = null;
    if (numbersSeen > 0) {
     if (char() == '.' && numbersSeen < 4)
      pointer++;
     else
      return;
    }
    if (!DIGIT.test(char()))
     return;
    while (DIGIT.test(char())) {
     number = parseInt(char(), 10);
     if (ipv4Piece === null)
      ipv4Piece = number;
     else if (ipv4Piece == 0)
      return;
     else
      ipv4Piece = ipv4Piece * 10 + number;
     if (ipv4Piece > 255)
      return;
     pointer++;
    }
    address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
    numbersSeen++;
    if (numbersSeen == 2 || numbersSeen == 4)
     pieceIndex++;
   }
   if (numbersSeen != 4)
    return;
   break;
  } else if (char() == ':') {
   pointer++;
   if (!char())
    return;
  } else if (char())
   return;
  address[pieceIndex++] = value;
 }
 if (compress !== null) {
  swaps = pieceIndex - compress;
  pieceIndex = 7;
  while (pieceIndex != 0 && swaps > 0) {
   swap = address[pieceIndex];
   address[pieceIndex--] = address[compress + swaps - 1];
   address[compress + --swaps] = swap;
  }
 } else if (pieceIndex != 8)
  return;
 return address;
};
var findLongestZeroSequence = function (ipv6) {
 var maxIndex = null;
 var maxLength = 1;
 var currStart = null;
 var currLength = 0;
 var index = 0;
 for (; index < 8; index++) {
  if (ipv6[index] !== 0) {
   if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
   }
   currStart = null;
   currLength = 0;
  } else {
   if (currStart === null)
    currStart = index;
   ++currLength;
  }
 }
 if (currLength > maxLength) {
  maxIndex = currStart;
  maxLength = currLength;
 }
 return maxIndex;
};
var serializeHost = function (host) {
 var result, index, compress, ignore0;
 if (typeof host == 'number') {
  result = [];
  for (index = 0; index < 4; index++) {
   result.unshift(host % 256);
   host = floor(host / 256);
  }
  return result.join('.');
 } else if (typeof host == 'object') {
  result = '';
  compress = findLongestZeroSequence(host);
  for (index = 0; index < 8; index++) {
   if (ignore0 && host[index] === 0)
    continue;
   if (ignore0)
    ignore0 = false;
   if (compress === index) {
    result += index ? ':' : '::';
    ignore0 = true;
   } else {
    result += host[index].toString(16);
    if (index < 7)
     result += ':';
   }
  }
  return '[' + result + ']';
 }
 return host;
};
var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
 ' ': 1,
 '"': 1,
 '<': 1,
 '>': 1,
 '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
 '#': 1,
 '?': 1,
 '{': 1,
 '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
 '/': 1,
 ':': 1,
 ';': 1,
 '=': 1,
 '@': 1,
 '[': 1,
 '\\': 1,
 ']': 1,
 '^': 1,
 '|': 1
});
var percentEncode = function (char, set) {
 var code = codeAt(char, 0);
 return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};
var specialSchemes = {
 ftp: 21,
 file: null,
 gopher: 70,
 http: 80,
 https: 443,
 ws: 80,
 wss: 443
};
var isSpecial = function (url) {
 return has(specialSchemes, url.scheme);
};
var includesCredentials = function (url) {
 return url.username != '' || url.password != '';
};
var cannotHaveUsernamePasswordPort = function (url) {
 return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};
var isWindowsDriveLetter = function (string, normalized) {
 var second;
 return string.length == 2 && ALPHA.test(string.charAt(0)) && ((second = string.charAt(1)) == ':' || !normalized && second == '|');
};
var startsWithWindowsDriveLetter = function (string) {
 var third;
 return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (string.length == 2 || ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#'));
};
var shortenURLsPath = function (url) {
 var path = url.path;
 var pathSize = path.length;
 if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
  path.pop();
 }
};
var isSingleDot = function (segment) {
 return segment === '.' || segment.toLowerCase() === '%2e';
};
var isDoubleDot = function (segment) {
 segment = segment.toLowerCase();
 return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};
var parseURL = function (url, input, stateOverride, base) {
 var state = stateOverride || SCHEME_START;
 var pointer = 0;
 var buffer = '';
 var seenAt = false;
 var seenBracket = false;
 var seenPasswordToken = false;
 var codePoints, char, bufferCodePoints, failure;
 if (!stateOverride) {
  url.scheme = '';
  url.username = '';
  url.password = '';
  url.host = null;
  url.port = null;
  url.path = [];
  url.query = null;
  url.fragment = null;
  url.cannotBeABaseURL = false;
  input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
 }
 input = input.replace(TAB_AND_NEW_LINE, '');
 codePoints = arrayFrom(input);
 while (pointer <= codePoints.length) {
  char = codePoints[pointer];
  switch (state) {
  case SCHEME_START:
   if (char && ALPHA.test(char)) {
    buffer += char.toLowerCase();
    state = SCHEME;
   } else if (!stateOverride) {
    state = NO_SCHEME;
    continue;
   } else
    return INVALID_SCHEME;
   break;
  case SCHEME:
   if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
    buffer += char.toLowerCase();
   } else if (char == ':') {
    if (stateOverride && (isSpecial(url) != has(specialSchemes, buffer) || buffer == 'file' && (includesCredentials(url) || url.port !== null) || url.scheme == 'file' && !url.host))
     return;
    url.scheme = buffer;
    if (stateOverride) {
     if (isSpecial(url) && specialSchemes[url.scheme] == url.port)
      url.port = null;
     return;
    }
    buffer = '';
    if (url.scheme == 'file') {
     state = FILE;
    } else if (isSpecial(url) && base && base.scheme == url.scheme) {
     state = SPECIAL_RELATIVE_OR_AUTHORITY;
    } else if (isSpecial(url)) {
     state = SPECIAL_AUTHORITY_SLASHES;
    } else if (codePoints[pointer + 1] == '/') {
     state = PATH_OR_AUTHORITY;
     pointer++;
    } else {
     url.cannotBeABaseURL = true;
     url.path.push('');
     state = CANNOT_BE_A_BASE_URL_PATH;
    }
   } else if (!stateOverride) {
    buffer = '';
    state = NO_SCHEME;
    pointer = 0;
    continue;
   } else
    return INVALID_SCHEME;
   break;
  case NO_SCHEME:
   if (!base || base.cannotBeABaseURL && char != '#')
    return INVALID_SCHEME;
   if (base.cannotBeABaseURL && char == '#') {
    url.scheme = base.scheme;
    url.path = base.path.slice();
    url.query = base.query;
    url.fragment = '';
    url.cannotBeABaseURL = true;
    state = FRAGMENT;
    break;
   }
   state = base.scheme == 'file' ? FILE : RELATIVE;
   continue;
  case SPECIAL_RELATIVE_OR_AUTHORITY:
   if (char == '/' && codePoints[pointer + 1] == '/') {
    state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
    pointer++;
   } else {
    state = RELATIVE;
    continue;
   }
   break;
  case PATH_OR_AUTHORITY:
   if (char == '/') {
    state = AUTHORITY;
    break;
   } else {
    state = PATH;
    continue;
   }
  case RELATIVE:
   url.scheme = base.scheme;
   if (char == EOF) {
    url.username = base.username;
    url.password = base.password;
    url.host = base.host;
    url.port = base.port;
    url.path = base.path.slice();
    url.query = base.query;
   } else if (char == '/' || char == '\\' && isSpecial(url)) {
    state = RELATIVE_SLASH;
   } else if (char == '?') {
    url.username = base.username;
    url.password = base.password;
    url.host = base.host;
    url.port = base.port;
    url.path = base.path.slice();
    url.query = '';
    state = QUERY;
   } else if (char == '#') {
    url.username = base.username;
    url.password = base.password;
    url.host = base.host;
    url.port = base.port;
    url.path = base.path.slice();
    url.query = base.query;
    url.fragment = '';
    state = FRAGMENT;
   } else {
    url.username = base.username;
    url.password = base.password;
    url.host = base.host;
    url.port = base.port;
    url.path = base.path.slice();
    url.path.pop();
    state = PATH;
    continue;
   }
   break;
  case RELATIVE_SLASH:
   if (isSpecial(url) && (char == '/' || char == '\\')) {
    state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
   } else if (char == '/') {
    state = AUTHORITY;
   } else {
    url.username = base.username;
    url.password = base.password;
    url.host = base.host;
    url.port = base.port;
    state = PATH;
    continue;
   }
   break;
  case SPECIAL_AUTHORITY_SLASHES:
   state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
   if (char != '/' || buffer.charAt(pointer + 1) != '/')
    continue;
   pointer++;
   break;
  case SPECIAL_AUTHORITY_IGNORE_SLASHES:
   if (char != '/' && char != '\\') {
    state = AUTHORITY;
    continue;
   }
   break;
  case AUTHORITY:
   if (char == '@') {
    if (seenAt)
     buffer = '%40' + buffer;
    seenAt = true;
    bufferCodePoints = arrayFrom(buffer);
    for (var i = 0; i < bufferCodePoints.length; i++) {
     var codePoint = bufferCodePoints[i];
     if (codePoint == ':' && !seenPasswordToken) {
      seenPasswordToken = true;
      continue;
     }
     var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
     if (seenPasswordToken)
      url.password += encodedCodePoints;
     else
      url.username += encodedCodePoints;
    }
    buffer = '';
   } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
    if (seenAt && buffer == '')
     return INVALID_AUTHORITY;
    pointer -= arrayFrom(buffer).length + 1;
    buffer = '';
    state = HOST;
   } else
    buffer += char;
   break;
  case HOST:
  case HOSTNAME:
   if (stateOverride && url.scheme == 'file') {
    state = FILE_HOST;
    continue;
   } else if (char == ':' && !seenBracket) {
    if (buffer == '')
     return INVALID_HOST;
    failure = parseHost(url, buffer);
    if (failure)
     return failure;
    buffer = '';
    state = PORT;
    if (stateOverride == HOSTNAME)
     return;
   } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
    if (isSpecial(url) && buffer == '')
     return INVALID_HOST;
    if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null))
     return;
    failure = parseHost(url, buffer);
    if (failure)
     return failure;
    buffer = '';
    state = PATH_START;
    if (stateOverride)
     return;
    continue;
   } else {
    if (char == '[')
     seenBracket = true;
    else if (char == ']')
     seenBracket = false;
    buffer += char;
   }
   break;
  case PORT:
   if (DIGIT.test(char)) {
    buffer += char;
   } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url) || stateOverride) {
    if (buffer != '') {
     var port = parseInt(buffer, 10);
     if (port > 0xFFFF)
      return INVALID_PORT;
     url.port = isSpecial(url) && port === specialSchemes[url.scheme] ? null : port;
     buffer = '';
    }
    if (stateOverride)
     return;
    state = PATH_START;
    continue;
   } else
    return INVALID_PORT;
   break;
  case FILE:
   url.scheme = 'file';
   if (char == '/' || char == '\\')
    state = FILE_SLASH;
   else if (base && base.scheme == 'file') {
    if (char == EOF) {
     url.host = base.host;
     url.path = base.path.slice();
     url.query = base.query;
    } else if (char == '?') {
     url.host = base.host;
     url.path = base.path.slice();
     url.query = '';
     state = QUERY;
    } else if (char == '#') {
     url.host = base.host;
     url.path = base.path.slice();
     url.query = base.query;
     url.fragment = '';
     state = FRAGMENT;
    } else {
     if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
      url.host = base.host;
      url.path = base.path.slice();
      shortenURLsPath(url);
     }
     state = PATH;
     continue;
    }
   } else {
    state = PATH;
    continue;
   }
   break;
  case FILE_SLASH:
   if (char == '/' || char == '\\') {
    state = FILE_HOST;
    break;
   }
   if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
    if (isWindowsDriveLetter(base.path[0], true))
     url.path.push(base.path[0]);
    else
     url.host = base.host;
   }
   state = PATH;
   continue;
  case FILE_HOST:
   if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
    if (!stateOverride && isWindowsDriveLetter(buffer)) {
     state = PATH;
    } else if (buffer == '') {
     url.host = '';
     if (stateOverride)
      return;
     state = PATH_START;
    } else {
     failure = parseHost(url, buffer);
     if (failure)
      return failure;
     if (url.host == 'localhost')
      url.host = '';
     if (stateOverride)
      return;
     buffer = '';
     state = PATH_START;
    }
    continue;
   } else
    buffer += char;
   break;
  case PATH_START:
   if (isSpecial(url)) {
    state = PATH;
    if (char != '/' && char != '\\')
     continue;
   } else if (!stateOverride && char == '?') {
    url.query = '';
    state = QUERY;
   } else if (!stateOverride && char == '#') {
    url.fragment = '';
    state = FRAGMENT;
   } else if (char != EOF) {
    state = PATH;
    if (char != '/')
     continue;
   }
   break;
  case PATH:
   if (char == EOF || char == '/' || char == '\\' && isSpecial(url) || !stateOverride && (char == '?' || char == '#')) {
    if (isDoubleDot(buffer)) {
     shortenURLsPath(url);
     if (char != '/' && !(char == '\\' && isSpecial(url))) {
      url.path.push('');
     }
    } else if (isSingleDot(buffer)) {
     if (char != '/' && !(char == '\\' && isSpecial(url))) {
      url.path.push('');
     }
    } else {
     if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
      if (url.host)
       url.host = '';
      buffer = buffer.charAt(0) + ':';
     }
     url.path.push(buffer);
    }
    buffer = '';
    if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
     while (url.path.length > 1 && url.path[0] === '') {
      url.path.shift();
     }
    }
    if (char == '?') {
     url.query = '';
     state = QUERY;
    } else if (char == '#') {
     url.fragment = '';
     state = FRAGMENT;
    }
   } else {
    buffer += percentEncode(char, pathPercentEncodeSet);
   }
   break;
  case CANNOT_BE_A_BASE_URL_PATH:
   if (char == '?') {
    url.query = '';
    state = QUERY;
   } else if (char == '#') {
    url.fragment = '';
    state = FRAGMENT;
   } else if (char != EOF) {
    url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
   }
   break;
  case QUERY:
   if (!stateOverride && char == '#') {
    url.fragment = '';
    state = FRAGMENT;
   } else if (char != EOF) {
    if (char == "'" && isSpecial(url))
     url.query += '%27';
    else if (char == '#')
     url.query += '%23';
    else
     url.query += percentEncode(char, C0ControlPercentEncodeSet);
   }
   break;
  case FRAGMENT:
   if (char != EOF)
    url.fragment += percentEncode(char, fragmentPercentEncodeSet);
   break;
  }
  pointer++;
 }
};
var URLConstructor = function URL(url) {
 var that = anInstance(this, URLConstructor, 'URL');
 var base = arguments.length > 1 ? arguments[1] : undefined;
 var urlString = String(url);
 var state = setInternalState(that, { type: 'URL' });
 var baseState, failure;
 if (base !== undefined) {
  if (base instanceof URLConstructor)
   baseState = getInternalURLState(base);
  else {
   failure = parseURL(baseState = {}, String(base));
   if (failure)
    throw TypeError(failure);
  }
 }
 failure = parseURL(state, urlString, null, baseState);
 if (failure)
  throw TypeError(failure);
 var searchParams = state.searchParams = new URLSearchParams();
 var searchParamsState = getInternalSearchParamsState(searchParams);
 searchParamsState.updateSearchParams(state.query);
 searchParamsState.updateURL = function () {
  state.query = String(searchParams) || null;
 };
 if (!DESCRIPTORS) {
  that.href = serializeURL.call(that);
  that.origin = getOrigin.call(that);
  that.protocol = getProtocol.call(that);
  that.username = getUsername.call(that);
  that.password = getPassword.call(that);
  that.host = getHost.call(that);
  that.hostname = getHostname.call(that);
  that.port = getPort.call(that);
  that.pathname = getPathname.call(that);
  that.search = getSearch.call(that);
  that.searchParams = getSearchParams.call(that);
  that.hash = getHash.call(that);
 }
};
var URLPrototype = URLConstructor.prototype;
var serializeURL = function () {
 var url = getInternalURLState(this);
 var scheme = url.scheme;
 var username = url.username;
 var password = url.password;
 var host = url.host;
 var port = url.port;
 var path = url.path;
 var query = url.query;
 var fragment = url.fragment;
 var output = scheme + ':';
 if (host !== null) {
  output += '//';
  if (includesCredentials(url)) {
   output += username + (password ? ':' + password : '') + '@';
  }
  output += serializeHost(host);
  if (port !== null)
   output += ':' + port;
 } else if (scheme == 'file')
  output += '//';
 output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
 if (query !== null)
  output += '?' + query;
 if (fragment !== null)
  output += '#' + fragment;
 return output;
};
var getOrigin = function () {
 var url = getInternalURLState(this);
 var scheme = url.scheme;
 var port = url.port;
 if (scheme == 'blob')
  try {
   return new URL(scheme.path[0]).origin;
  } catch (error) {
   return 'null';
  }
 if (scheme == 'file' || !isSpecial(url))
  return 'null';
 return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};
var getProtocol = function () {
 return getInternalURLState(this).scheme + ':';
};
var getUsername = function () {
 return getInternalURLState(this).username;
};
var getPassword = function () {
 return getInternalURLState(this).password;
};
var getHost = function () {
 var url = getInternalURLState(this);
 var host = url.host;
 var port = url.port;
 return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
};
var getHostname = function () {
 var host = getInternalURLState(this).host;
 return host === null ? '' : serializeHost(host);
};
var getPort = function () {
 var port = getInternalURLState(this).port;
 return port === null ? '' : String(port);
};
var getPathname = function () {
 var url = getInternalURLState(this);
 var path = url.path;
 return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};
var getSearch = function () {
 var query = getInternalURLState(this).query;
 return query ? '?' + query : '';
};
var getSearchParams = function () {
 return getInternalURLState(this).searchParams;
};
var getHash = function () {
 var fragment = getInternalURLState(this).fragment;
 return fragment ? '#' + fragment : '';
};
var accessorDescriptor = function (getter, setter) {
 return {
  get: getter,
  set: setter,
  configurable: true,
  enumerable: true
 };
};
if (DESCRIPTORS) {
 defineProperties(URLPrototype, {
  href: accessorDescriptor(serializeURL, function (href) {
   var url = getInternalURLState(this);
   var urlString = String(href);
   var failure = parseURL(url, urlString);
   if (failure)
    throw TypeError(failure);
   getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
  }),
  origin: accessorDescriptor(getOrigin),
  protocol: accessorDescriptor(getProtocol, function (protocol) {
   var url = getInternalURLState(this);
   parseURL(url, String(protocol) + ':', SCHEME_START);
  }),
  username: accessorDescriptor(getUsername, function (username) {
   var url = getInternalURLState(this);
   var codePoints = arrayFrom(String(username));
   if (cannotHaveUsernamePasswordPort(url))
    return;
   url.username = '';
   for (var i = 0; i < codePoints.length; i++) {
    url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
   }
  }),
  password: accessorDescriptor(getPassword, function (password) {
   var url = getInternalURLState(this);
   var codePoints = arrayFrom(String(password));
   if (cannotHaveUsernamePasswordPort(url))
    return;
   url.password = '';
   for (var i = 0; i < codePoints.length; i++) {
    url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
   }
  }),
  host: accessorDescriptor(getHost, function (host) {
   var url = getInternalURLState(this);
   if (url.cannotBeABaseURL)
    return;
   parseURL(url, String(host), HOST);
  }),
  hostname: accessorDescriptor(getHostname, function (hostname) {
   var url = getInternalURLState(this);
   if (url.cannotBeABaseURL)
    return;
   parseURL(url, String(hostname), HOSTNAME);
  }),
  port: accessorDescriptor(getPort, function (port) {
   var url = getInternalURLState(this);
   if (cannotHaveUsernamePasswordPort(url))
    return;
   port = String(port);
   if (port == '')
    url.port = null;
   else
    parseURL(url, port, PORT);
  }),
  pathname: accessorDescriptor(getPathname, function (pathname) {
   var url = getInternalURLState(this);
   if (url.cannotBeABaseURL)
    return;
   url.path = [];
   parseURL(url, pathname + '', PATH_START);
  }),
  search: accessorDescriptor(getSearch, function (search) {
   var url = getInternalURLState(this);
   search = String(search);
   if (search == '') {
    url.query = null;
   } else {
    if ('?' == search.charAt(0))
     search = search.slice(1);
    url.query = '';
    parseURL(url, search, QUERY);
   }
   getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
  }),
  searchParams: accessorDescriptor(getSearchParams),
  hash: accessorDescriptor(getHash, function (hash) {
   var url = getInternalURLState(this);
   hash = String(hash);
   if (hash == '') {
    url.fragment = null;
    return;
   }
   if ('#' == hash.charAt(0))
    hash = hash.slice(1);
   url.fragment = '';
   parseURL(url, hash, FRAGMENT);
  })
 });
}
redefine(URLPrototype, 'toJSON', function toJSON() {
 return serializeURL.call(this);
}, { enumerable: true });
redefine(URLPrototype, 'toString', function toString() {
 return serializeURL.call(this);
}, { enumerable: true });
if (NativeURL) {
 var nativeCreateObjectURL = NativeURL.createObjectURL;
 var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
 if (nativeCreateObjectURL)
  redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
   return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
 if (nativeRevokeObjectURL)
  redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
   return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}
setToStringTag(URLConstructor, 'URL');
$({
 global: true,
 forced: !USE_NATIVE_URL,
 sham: !DESCRIPTORS
}, { URL: URLConstructor });

/***/ }),
/* 123 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var fails = __w_pdfjs_require__(11);
var wellKnownSymbol = __w_pdfjs_require__(51);
var IS_PURE = __w_pdfjs_require__(29);
var ITERATOR = wellKnownSymbol('iterator');
module.exports = !fails(function () {
 var url = new URL('b?e=1', 'http://a');
 var searchParams = url.searchParams;
 url.pathname = 'c%20d';
 return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?e=1' || searchParams.get('e') !== '1' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR] || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' || new URL('http://тест').host !== 'xn--e1aybc' || new URL('http://a#б').hash !== '#%D0%B1';
});

/***/ }),
/* 124 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var maxInt = 2147483647;
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128;
var delimiter = '-';
var regexNonASCII = /[^\0-\u007E]/;
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g;
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;
var ucs2decode = function (string) {
 var output = [];
 var counter = 0;
 var length = string.length;
 while (counter < length) {
  var value = string.charCodeAt(counter++);
  if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
   var extra = string.charCodeAt(counter++);
   if ((extra & 0xFC00) == 0xDC00) {
    output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
   } else {
    output.push(value);
    counter--;
   }
  } else {
   output.push(value);
  }
 }
 return output;
};
var digitToBasic = function (digit) {
 return digit + 22 + 75 * (digit < 26);
};
var adapt = function (delta, numPoints, firstTime) {
 var k = 0;
 delta = firstTime ? floor(delta / damp) : delta >> 1;
 delta += floor(delta / numPoints);
 for (; delta > baseMinusTMin * tMax >> 1; k += base) {
  delta = floor(delta / baseMinusTMin);
 }
 return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};
var encode = function (input) {
 var output = [];
 input = ucs2decode(input);
 var inputLength = input.length;
 var n = initialN;
 var delta = 0;
 var bias = initialBias;
 var i, currentValue;
 for (i = 0; i < input.length; i++) {
  currentValue = input[i];
  if (currentValue < 0x80) {
   output.push(stringFromCharCode(currentValue));
  }
 }
 var basicLength = output.length;
 var handledCPCount = basicLength;
 if (basicLength) {
  output.push(delimiter);
 }
 while (handledCPCount < inputLength) {
  var m = maxInt;
  for (i = 0; i < input.length; i++) {
   currentValue = input[i];
   if (currentValue >= n && currentValue < m) {
    m = currentValue;
   }
  }
  var handledCPCountPlusOne = handledCPCount + 1;
  if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
   throw RangeError(OVERFLOW_ERROR);
  }
  delta += (m - n) * handledCPCountPlusOne;
  n = m;
  for (i = 0; i < input.length; i++) {
   currentValue = input[i];
   if (currentValue < n && ++delta > maxInt) {
    throw RangeError(OVERFLOW_ERROR);
   }
   if (currentValue == n) {
    var q = delta;
    for (var k = base;; k += base) {
     var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
     if (q < t)
      break;
     var qMinusT = q - t;
     var baseMinusT = base - t;
     output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
     q = floor(qMinusT / baseMinusT);
    }
    output.push(stringFromCharCode(digitToBasic(q)));
    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
    delta = 0;
    ++handledCPCount;
   }
  }
  ++delta;
  ++n;
 }
 return output.join('');
};
module.exports = function (input) {
 var encoded = [];
 var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
 var i, label;
 for (i = 0; i < labels.length; i++) {
  label = labels[i];
  encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
 }
 return encoded.join('.');
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

__w_pdfjs_require__(104);
var $ = __w_pdfjs_require__(7);
var USE_NATIVE_URL = __w_pdfjs_require__(123);
var redefine = __w_pdfjs_require__(26);
var redefineAll = __w_pdfjs_require__(107);
var setToStringTag = __w_pdfjs_require__(77);
var createIteratorConstructor = __w_pdfjs_require__(72);
var InternalStateModule = __w_pdfjs_require__(31);
var anInstance = __w_pdfjs_require__(109);
var hasOwn = __w_pdfjs_require__(20);
var bind = __w_pdfjs_require__(55);
var anObject = __w_pdfjs_require__(25);
var isObject = __w_pdfjs_require__(19);
var getIterator = __w_pdfjs_require__(126);
var getIteratorMethod = __w_pdfjs_require__(86);
var wellKnownSymbol = __w_pdfjs_require__(51);
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
var plus = /\+/g;
var sequences = Array(4);
var percentSequence = function (bytes) {
 return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};
var percentDecode = function (sequence) {
 try {
  return decodeURIComponent(sequence);
 } catch (error) {
  return sequence;
 }
};
var deserialize = function (it) {
 var result = it.replace(plus, ' ');
 var bytes = 4;
 try {
  return decodeURIComponent(result);
 } catch (error) {
  while (bytes) {
   result = result.replace(percentSequence(bytes--), percentDecode);
  }
  return result;
 }
};
var find = /[!'()~]|%20/g;
var replace = {
 '!': '%21',
 "'": '%27',
 '(': '%28',
 ')': '%29',
 '~': '%7E',
 '%20': '+'
};
var replacer = function (match) {
 return replace[match];
};
var serialize = function (it) {
 return encodeURIComponent(it).replace(find, replacer);
};
var parseSearchParams = function (result, query) {
 if (query) {
  var attributes = query.split('&');
  var index = 0;
  var attribute, entry;
  while (index < attributes.length) {
   attribute = attributes[index++];
   if (attribute.length) {
    entry = attribute.split('=');
    result.push({
     key: deserialize(entry.shift()),
     value: deserialize(entry.join('='))
    });
   }
  }
 }
};
var updateSearchParams = function (query) {
 this.entries.length = 0;
 parseSearchParams(this.entries, query);
};
var validateArgumentsLength = function (passed, required) {
 if (passed < required)
  throw TypeError('Not enough arguments');
};
var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
 setInternalState(this, {
  type: URL_SEARCH_PARAMS_ITERATOR,
  iterator: getIterator(getInternalParamsState(params).entries),
  kind: kind
 });
}, 'Iterator', function next() {
 var state = getInternalIteratorState(this);
 var kind = state.kind;
 var step = state.iterator.next();
 var entry = step.value;
 if (!step.done) {
  step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [
   entry.key,
   entry.value
  ];
 }
 return step;
});
var URLSearchParamsConstructor = function URLSearchParams() {
 anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
 var init = arguments.length > 0 ? arguments[0] : undefined;
 var that = this;
 var entries = [];
 var iteratorMethod, iterator, step, entryIterator, first, second, key;
 setInternalState(that, {
  type: URL_SEARCH_PARAMS,
  entries: entries,
  updateURL: function () {
  },
  updateSearchParams: updateSearchParams
 });
 if (init !== undefined) {
  if (isObject(init)) {
   iteratorMethod = getIteratorMethod(init);
   if (typeof iteratorMethod === 'function') {
    iterator = iteratorMethod.call(init);
    while (!(step = iterator.next()).done) {
     entryIterator = getIterator(anObject(step.value));
     if ((first = entryIterator.next()).done || (second = entryIterator.next()).done || !entryIterator.next().done)
      throw TypeError('Expected sequence with length 2');
     entries.push({
      key: first.value + '',
      value: second.value + ''
     });
    }
   } else
    for (key in init)
     if (hasOwn(init, key))
      entries.push({
       key: key,
       value: init[key] + ''
      });
  } else {
   parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
  }
 }
};
var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
redefineAll(URLSearchParamsPrototype, {
 append: function append(name, value) {
  validateArgumentsLength(arguments.length, 2);
  var state = getInternalParamsState(this);
  state.entries.push({
   key: name + '',
   value: value + ''
  });
  state.updateURL();
 },
 'delete': function (name) {
  validateArgumentsLength(arguments.length, 1);
  var state = getInternalParamsState(this);
  var entries = state.entries;
  var key = name + '';
  var index = 0;
  while (index < entries.length) {
   if (entries[index].key === key)
    entries.splice(index, 1);
   else
    index++;
  }
  state.updateURL();
 },
 get: function get(name) {
  validateArgumentsLength(arguments.length, 1);
  var entries = getInternalParamsState(this).entries;
  var key = name + '';
  var index = 0;
  for (; index < entries.length; index++) {
   if (entries[index].key === key)
    return entries[index].value;
  }
  return null;
 },
 getAll: function getAll(name) {
  validateArgumentsLength(arguments.length, 1);
  var entries = getInternalParamsState(this).entries;
  var key = name + '';
  var result = [];
  var index = 0;
  for (; index < entries.length; index++) {
   if (entries[index].key === key)
    result.push(entries[index].value);
  }
  return result;
 },
 has: function has(name) {
  validateArgumentsLength(arguments.length, 1);
  var entries = getInternalParamsState(this).entries;
  var key = name + '';
  var index = 0;
  while (index < entries.length) {
   if (entries[index++].key === key)
    return true;
  }
  return false;
 },
 set: function set(name, value) {
  validateArgumentsLength(arguments.length, 1);
  var state = getInternalParamsState(this);
  var entries = state.entries;
  var found = false;
  var key = name + '';
  var val = value + '';
  var index = 0;
  var entry;
  for (; index < entries.length; index++) {
   entry = entries[index];
   if (entry.key === key) {
    if (found)
     entries.splice(index--, 1);
    else {
     found = true;
     entry.value = val;
    }
   }
  }
  if (!found)
   entries.push({
    key: key,
    value: val
   });
  state.updateURL();
 },
 sort: function sort() {
  var state = getInternalParamsState(this);
  var entries = state.entries;
  var slice = entries.slice();
  var entry, entriesIndex, sliceIndex;
  entries.length = 0;
  for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
   entry = slice[sliceIndex];
   for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
    if (entries[entriesIndex].key > entry.key) {
     entries.splice(entriesIndex, 0, entry);
     break;
    }
   }
   if (entriesIndex === sliceIndex)
    entries.push(entry);
  }
  state.updateURL();
 },
 forEach: function forEach(callback) {
  var entries = getInternalParamsState(this).entries;
  var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
  var index = 0;
  var entry;
  while (index < entries.length) {
   entry = entries[index++];
   boundFunction(entry.value, entry.key, this);
  }
 },
 keys: function keys() {
  return new URLSearchParamsIterator(this, 'keys');
 },
 values: function values() {
  return new URLSearchParamsIterator(this, 'values');
 },
 entries: function entries() {
  return new URLSearchParamsIterator(this, 'entries');
 }
}, { enumerable: true });
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);
redefine(URLSearchParamsPrototype, 'toString', function toString() {
 var entries = getInternalParamsState(this).entries;
 var result = [];
 var index = 0;
 var entry;
 while (index < entries.length) {
  entry = entries[index++];
  result.push(serialize(entry.key) + '=' + serialize(entry.value));
 }
 return result.join('&');
}, { enumerable: true });
setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
$({
 global: true,
 forced: !USE_NATIVE_URL
}, { URLSearchParams: URLSearchParamsConstructor });
module.exports = {
 URLSearchParams: URLSearchParamsConstructor,
 getState: getInternalParamsState
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var anObject = __w_pdfjs_require__(25);
var getIteratorMethod = __w_pdfjs_require__(86);
module.exports = function (it) {
 var iteratorMethod = getIteratorMethod(it);
 if (typeof iteratorMethod != 'function') {
  throw TypeError(String(it) + ' is not iterable');
 }
 return anObject(iteratorMethod.call(it));
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
$({
 target: 'URL',
 proto: true,
 enumerable: true
}, {
 toJSON: function toJSON() {
  return URL.prototype.toString.call(this);
 }
});

/***/ }),
/* 128 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(100);
__w_pdfjs_require__(129);
__w_pdfjs_require__(102);
var path = __w_pdfjs_require__(39);
module.exports = path.WeakMap;

/***/ }),
/* 129 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var global = __w_pdfjs_require__(8);
var redefineAll = __w_pdfjs_require__(107);
var InternalMetadataModule = __w_pdfjs_require__(130);
var collection = __w_pdfjs_require__(132);
var collectionWeak = __w_pdfjs_require__(134);
var isObject = __w_pdfjs_require__(19);
var enforceIternalState = __w_pdfjs_require__(31).enforce;
var NATIVE_WEAK_MAP = __w_pdfjs_require__(32);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var isExtensible = Object.isExtensible;
var InternalWeakMap;
var wrapper = function (get) {
 return function WeakMap() {
  return get(this, arguments.length ? arguments[0] : undefined);
 };
};
var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak, true, true);
if (NATIVE_WEAK_MAP && IS_IE11) {
 InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
 InternalMetadataModule.REQUIRED = true;
 var WeakMapPrototype = $WeakMap.prototype;
 var nativeDelete = WeakMapPrototype['delete'];
 var nativeHas = WeakMapPrototype.has;
 var nativeGet = WeakMapPrototype.get;
 var nativeSet = WeakMapPrototype.set;
 redefineAll(WeakMapPrototype, {
  'delete': function (key) {
   if (isObject(key) && !isExtensible(key)) {
    var state = enforceIternalState(this);
    if (!state.frozen)
     state.frozen = new InternalWeakMap();
    return nativeDelete.call(this, key) || state.frozen['delete'](key);
   }
   return nativeDelete.call(this, key);
  },
  has: function has(key) {
   if (isObject(key) && !isExtensible(key)) {
    var state = enforceIternalState(this);
    if (!state.frozen)
     state.frozen = new InternalWeakMap();
    return nativeHas.call(this, key) || state.frozen.has(key);
   }
   return nativeHas.call(this, key);
  },
  get: function get(key) {
   if (isObject(key) && !isExtensible(key)) {
    var state = enforceIternalState(this);
    if (!state.frozen)
     state.frozen = new InternalWeakMap();
    return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
   }
   return nativeGet.call(this, key);
  },
  set: function set(key, value) {
   if (isObject(key) && !isExtensible(key)) {
    var state = enforceIternalState(this);
    if (!state.frozen)
     state.frozen = new InternalWeakMap();
    nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
   } else
    nativeSet.call(this, key, value);
   return this;
  }
 });
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var hiddenKeys = __w_pdfjs_require__(35);
var isObject = __w_pdfjs_require__(19);
var has = __w_pdfjs_require__(20);
var defineProperty = __w_pdfjs_require__(24).f;
var uid = __w_pdfjs_require__(34);
var FREEZING = __w_pdfjs_require__(131);
var METADATA = uid('meta');
var id = 0;
var isExtensible = Object.isExtensible || function () {
 return true;
};
var setMetadata = function (it) {
 defineProperty(it, METADATA, {
  value: {
   objectID: 'O' + ++id,
   weakData: {}
  }
 });
};
var fastKey = function (it, create) {
 if (!isObject(it))
  return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
 if (!has(it, METADATA)) {
  if (!isExtensible(it))
   return 'F';
  if (!create)
   return 'E';
  setMetadata(it);
 }
 return it[METADATA].objectID;
};
var getWeakData = function (it, create) {
 if (!has(it, METADATA)) {
  if (!isExtensible(it))
   return true;
  if (!create)
   return false;
  setMetadata(it);
 }
 return it[METADATA].weakData;
};
var onFreeze = function (it) {
 if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA))
  setMetadata(it);
 return it;
};
var meta = module.exports = {
 REQUIRED: false,
 fastKey: fastKey,
 getWeakData: getWeakData,
 onFreeze: onFreeze
};
hiddenKeys[METADATA] = true;

/***/ }),
/* 131 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var fails = __w_pdfjs_require__(11);
module.exports = !fails(function () {
 return Object.isExtensible(Object.preventExtensions({}));
});

/***/ }),
/* 132 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var global = __w_pdfjs_require__(8);
var isForced = __w_pdfjs_require__(48);
var redefine = __w_pdfjs_require__(26);
var InternalMetadataModule = __w_pdfjs_require__(130);
var iterate = __w_pdfjs_require__(110);
var anInstance = __w_pdfjs_require__(109);
var isObject = __w_pdfjs_require__(19);
var fails = __w_pdfjs_require__(11);
var checkCorrectnessOfIteration = __w_pdfjs_require__(88);
var setToStringTag = __w_pdfjs_require__(77);
var inheritIfRequired = __w_pdfjs_require__(133);
module.exports = function (CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
 var NativeConstructor = global[CONSTRUCTOR_NAME];
 var NativePrototype = NativeConstructor && NativeConstructor.prototype;
 var Constructor = NativeConstructor;
 var ADDER = IS_MAP ? 'set' : 'add';
 var exported = {};
 var fixMethod = function (KEY) {
  var nativeMethod = NativePrototype[KEY];
  redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
   nativeMethod.call(this, value === 0 ? 0 : value);
   return this;
  } : KEY == 'delete' ? function (key) {
   return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
  } : KEY == 'get' ? function get(key) {
   return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
  } : KEY == 'has' ? function has(key) {
   return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
  } : function set(key, value) {
   nativeMethod.call(this, key === 0 ? 0 : key, value);
   return this;
  });
 };
 if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
   new NativeConstructor().entries().next();
  })))) {
  Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
  InternalMetadataModule.REQUIRED = true;
 } else if (isForced(CONSTRUCTOR_NAME, true)) {
  var instance = new Constructor();
  var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
  var THROWS_ON_PRIMITIVES = fails(function () {
   instance.has(1);
  });
  var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
   new NativeConstructor(iterable);
  });
  var BUGGY_ZERO = !IS_WEAK && fails(function () {
   var $instance = new NativeConstructor();
   var index = 5;
   while (index--)
    $instance[ADDER](index, index);
   return !$instance.has(-0);
  });
  if (!ACCEPT_ITERABLES) {
   Constructor = wrapper(function (dummy, iterable) {
    anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
    var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
    if (iterable != undefined)
     iterate(iterable, that[ADDER], that, IS_MAP);
    return that;
   });
   Constructor.prototype = NativePrototype;
   NativePrototype.constructor = Constructor;
  }
  if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
   fixMethod('delete');
   fixMethod('has');
   IS_MAP && fixMethod('get');
  }
  if (BUGGY_ZERO || HASNT_CHAINING)
   fixMethod(ADDER);
  if (IS_WEAK && NativePrototype.clear)
   delete NativePrototype.clear;
 }
 exported[CONSTRUCTOR_NAME] = Constructor;
 $({
  global: true,
  forced: Constructor != NativeConstructor
 }, exported);
 setToStringTag(Constructor, CONSTRUCTOR_NAME);
 if (!IS_WEAK)
  common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
 return Constructor;
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var isObject = __w_pdfjs_require__(19);
var setPrototypeOf = __w_pdfjs_require__(79);
module.exports = function ($this, dummy, Wrapper) {
 var NewTarget, NewTargetPrototype;
 if (setPrototypeOf && typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype)
  setPrototypeOf($this, NewTargetPrototype);
 return $this;
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var redefineAll = __w_pdfjs_require__(107);
var getWeakData = __w_pdfjs_require__(130).getWeakData;
var anObject = __w_pdfjs_require__(25);
var isObject = __w_pdfjs_require__(19);
var anInstance = __w_pdfjs_require__(109);
var iterate = __w_pdfjs_require__(110);
var ArrayIterationModule = __w_pdfjs_require__(135);
var $has = __w_pdfjs_require__(20);
var InternalStateModule = __w_pdfjs_require__(31);
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var id = 0;
var uncaughtFrozenStore = function (store) {
 return store.frozen || (store.frozen = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
 this.entries = [];
};
var findUncaughtFrozen = function (store, key) {
 return find(store.entries, function (it) {
  return it[0] === key;
 });
};
UncaughtFrozenStore.prototype = {
 get: function (key) {
  var entry = findUncaughtFrozen(this, key);
  if (entry)
   return entry[1];
 },
 has: function (key) {
  return !!findUncaughtFrozen(this, key);
 },
 set: function (key, value) {
  var entry = findUncaughtFrozen(this, key);
  if (entry)
   entry[1] = value;
  else
   this.entries.push([
    key,
    value
   ]);
 },
 'delete': function (key) {
  var index = findIndex(this.entries, function (it) {
   return it[0] === key;
  });
  if (~index)
   this.entries.splice(index, 1);
  return !!~index;
 }
};
module.exports = {
 getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
  var C = wrapper(function (that, iterable) {
   anInstance(that, C, CONSTRUCTOR_NAME);
   setInternalState(that, {
    type: CONSTRUCTOR_NAME,
    id: id++,
    frozen: undefined
   });
   if (iterable != undefined)
    iterate(iterable, that[ADDER], that, IS_MAP);
  });
  var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
  var define = function (that, key, value) {
   var state = getInternalState(that);
   var data = getWeakData(anObject(key), true);
   if (data === true)
    uncaughtFrozenStore(state).set(key, value);
   else
    data[state.id] = value;
   return that;
  };
  redefineAll(C.prototype, {
   'delete': function (key) {
    var state = getInternalState(this);
    if (!isObject(key))
     return false;
    var data = getWeakData(key);
    if (data === true)
     return uncaughtFrozenStore(state)['delete'](key);
    return data && $has(data, state.id) && delete data[state.id];
   },
   has: function has(key) {
    var state = getInternalState(this);
    if (!isObject(key))
     return false;
    var data = getWeakData(key);
    if (data === true)
     return uncaughtFrozenStore(state).has(key);
    return data && $has(data, state.id);
   }
  });
  redefineAll(C.prototype, IS_MAP ? {
   get: function get(key) {
    var state = getInternalState(this);
    if (isObject(key)) {
     var data = getWeakData(key);
     if (data === true)
      return uncaughtFrozenStore(state).get(key);
     return data ? data[state.id] : undefined;
    }
   },
   set: function set(key, value) {
    return define(this, key, value);
   }
  } : {
   add: function add(value) {
    return define(this, value, true);
   }
  });
  return C;
 }
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var bind = __w_pdfjs_require__(55);
var IndexedObject = __w_pdfjs_require__(15);
var toObject = __w_pdfjs_require__(75);
var toLength = __w_pdfjs_require__(43);
var arraySpeciesCreate = __w_pdfjs_require__(136);
var push = [].push;
var createMethod = function (TYPE) {
 var IS_MAP = TYPE == 1;
 var IS_FILTER = TYPE == 2;
 var IS_SOME = TYPE == 3;
 var IS_EVERY = TYPE == 4;
 var IS_FIND_INDEX = TYPE == 6;
 var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
 return function ($this, callbackfn, that, specificCreate) {
  var O = toObject($this);
  var self = IndexedObject(O);
  var boundFunction = bind(callbackfn, that, 3);
  var length = toLength(self.length);
  var index = 0;
  var create = specificCreate || arraySpeciesCreate;
  var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
  var value, result;
  for (; length > index; index++)
   if (NO_HOLES || index in self) {
    value = self[index];
    result = boundFunction(value, index, O);
    if (TYPE) {
     if (IS_MAP)
      target[index] = result;
     else if (result)
      switch (TYPE) {
      case 3:
       return true;
      case 5:
       return value;
      case 6:
       return index;
      case 2:
       push.call(target, value);
      }
     else if (IS_EVERY)
      return false;
    }
   }
  return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
 };
};
module.exports = {
 forEach: createMethod(0),
 map: createMethod(1),
 filter: createMethod(2),
 some: createMethod(3),
 every: createMethod(4),
 find: createMethod(5),
 findIndex: createMethod(6)
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var isObject = __w_pdfjs_require__(19);
var isArray = __w_pdfjs_require__(137);
var wellKnownSymbol = __w_pdfjs_require__(51);
var SPECIES = wellKnownSymbol('species');
module.exports = function (originalArray, length) {
 var C;
 if (isArray(originalArray)) {
  C = originalArray.constructor;
  if (typeof C == 'function' && (C === Array || isArray(C.prototype)))
   C = undefined;
  else if (isObject(C)) {
   C = C[SPECIES];
   if (C === null)
    C = undefined;
  }
 }
 return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var classof = __w_pdfjs_require__(16);
module.exports = Array.isArray || function isArray(arg) {
 return classof(arg) == 'Array';
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(100);
__w_pdfjs_require__(139);
__w_pdfjs_require__(102);
var path = __w_pdfjs_require__(39);
module.exports = path.WeakSet;

/***/ }),
/* 139 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var collection = __w_pdfjs_require__(132);
var collectionWeak = __w_pdfjs_require__(134);
collection('WeakSet', function (get) {
 return function WeakSet() {
  return get(this, arguments.length ? arguments[0] : undefined);
 };
}, collectionWeak, false, true);

/***/ }),
/* 140 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(141);
var entryUnbind = __w_pdfjs_require__(54);
module.exports = entryUnbind('String', 'codePointAt');

/***/ }),
/* 141 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var codeAt = __w_pdfjs_require__(70).codeAt;
$({
 target: 'String',
 proto: true
}, {
 codePointAt: function codePointAt(pos) {
  return codeAt(this, pos);
 }
});

/***/ }),
/* 142 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(143);
var path = __w_pdfjs_require__(39);
module.exports = path.String.fromCodePoint;

/***/ }),
/* 143 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var $ = __w_pdfjs_require__(7);
var toAbsoluteIndex = __w_pdfjs_require__(45);
var fromCharCode = String.fromCharCode;
var nativeFromCodePoint = String.fromCodePoint;
var INCORRECT_LENGTH = !!nativeFromCodePoint && nativeFromCodePoint.length != 1;
$({
 target: 'String',
 stat: true,
 forced: INCORRECT_LENGTH
}, {
 fromCodePoint: function fromCodePoint(x) {
  var elements = [];
  var length = arguments.length;
  var i = 0;
  var code;
  while (length > i) {
   code = +arguments[i++];
   if (toAbsoluteIndex(code, 0x10FFFF) !== code)
    throw RangeError(code + ' is not a valid code point');
   elements.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00));
  }
  return elements.join('');
 }
});

/***/ }),
/* 144 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(145);
__w_pdfjs_require__(100);
__w_pdfjs_require__(147);
__w_pdfjs_require__(151);
__w_pdfjs_require__(152);
__w_pdfjs_require__(153);
__w_pdfjs_require__(154);
__w_pdfjs_require__(155);
__w_pdfjs_require__(156);
__w_pdfjs_require__(157);
__w_pdfjs_require__(158);
__w_pdfjs_require__(159);
__w_pdfjs_require__(160);
__w_pdfjs_require__(161);
__w_pdfjs_require__(162);
__w_pdfjs_require__(163);
__w_pdfjs_require__(164);
__w_pdfjs_require__(165);
__w_pdfjs_require__(166);
var path = __w_pdfjs_require__(39);
module.exports = path.Symbol;

/***/ }),
/* 145 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var fails = __w_pdfjs_require__(11);
var isArray = __w_pdfjs_require__(137);
var isObject = __w_pdfjs_require__(19);
var toObject = __w_pdfjs_require__(75);
var toLength = __w_pdfjs_require__(43);
var createProperty = __w_pdfjs_require__(85);
var arraySpeciesCreate = __w_pdfjs_require__(136);
var arrayMethodHasSpeciesSupport = __w_pdfjs_require__(146);
var wellKnownSymbol = __w_pdfjs_require__(51);
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {
 var array = [];
 array[IS_CONCAT_SPREADABLE] = false;
 return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');
var isConcatSpreadable = function (O) {
 if (!isObject(O))
  return false;
 var spreadable = O[IS_CONCAT_SPREADABLE];
 return spreadable !== undefined ? !!spreadable : isArray(O);
};
var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
$({
 target: 'Array',
 proto: true,
 forced: FORCED
}, {
 concat: function concat(arg) {
  var O = toObject(this);
  var A = arraySpeciesCreate(O, 0);
  var n = 0;
  var i, k, length, len, E;
  for (i = -1, length = arguments.length; i < length; i++) {
   E = i === -1 ? O : arguments[i];
   if (isConcatSpreadable(E)) {
    len = toLength(E.length);
    if (n + len > MAX_SAFE_INTEGER)
     throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
    for (k = 0; k < len; k++, n++)
     if (k in E)
      createProperty(A, n, E[k]);
   } else {
    if (n >= MAX_SAFE_INTEGER)
     throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
    createProperty(A, n++, E);
   }
  }
  A.length = n;
  return A;
 }
});

/***/ }),
/* 146 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var fails = __w_pdfjs_require__(11);
var wellKnownSymbol = __w_pdfjs_require__(51);
var SPECIES = wellKnownSymbol('species');
module.exports = function (METHOD_NAME) {
 return !fails(function () {
  var array = [];
  var constructor = array.constructor = {};
  constructor[SPECIES] = function () {
   return { foo: 1 };
  };
  return array[METHOD_NAME](Boolean).foo !== 1;
 });
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var global = __w_pdfjs_require__(8);
var IS_PURE = __w_pdfjs_require__(29);
var DESCRIPTORS = __w_pdfjs_require__(10);
var NATIVE_SYMBOL = __w_pdfjs_require__(52);
var fails = __w_pdfjs_require__(11);
var has = __w_pdfjs_require__(20);
var isArray = __w_pdfjs_require__(137);
var isObject = __w_pdfjs_require__(19);
var anObject = __w_pdfjs_require__(25);
var toObject = __w_pdfjs_require__(75);
var toIndexedObject = __w_pdfjs_require__(14);
var toPrimitive = __w_pdfjs_require__(18);
var createPropertyDescriptor = __w_pdfjs_require__(13);
var nativeObjectCreate = __w_pdfjs_require__(64);
var objectKeys = __w_pdfjs_require__(66);
var getOwnPropertyNamesModule = __w_pdfjs_require__(40);
var getOwnPropertyNamesExternal = __w_pdfjs_require__(148);
var getOwnPropertySymbolsModule = __w_pdfjs_require__(47);
var getOwnPropertyDescriptorModule = __w_pdfjs_require__(9);
var definePropertyModule = __w_pdfjs_require__(24);
var propertyIsEnumerableModule = __w_pdfjs_require__(12);
var hide = __w_pdfjs_require__(23);
var redefine = __w_pdfjs_require__(26);
var shared = __w_pdfjs_require__(27);
var sharedKey = __w_pdfjs_require__(33);
var hiddenKeys = __w_pdfjs_require__(35);
var uid = __w_pdfjs_require__(34);
var wellKnownSymbol = __w_pdfjs_require__(51);
var wrappedWellKnownSymbolModule = __w_pdfjs_require__(149);
var defineWellKnownSymbol = __w_pdfjs_require__(150);
var setToStringTag = __w_pdfjs_require__(77);
var InternalStateModule = __w_pdfjs_require__(31);
var $forEach = __w_pdfjs_require__(135).forEach;
var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var JSON = global.JSON;
var nativeJSONStringify = JSON && JSON.stringify;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
 return nativeObjectCreate(nativeDefineProperty({}, 'a', {
  get: function () {
   return nativeDefineProperty(this, 'a', { value: 7 }).a;
  }
 })).a != 7;
}) ? function (O, P, Attributes) {
 var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
 if (ObjectPrototypeDescriptor)
  delete ObjectPrototype[P];
 nativeDefineProperty(O, P, Attributes);
 if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
  nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
 }
} : nativeDefineProperty;
var wrap = function (tag, description) {
 var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
 setInternalState(symbol, {
  type: SYMBOL,
  tag: tag,
  description: description
 });
 if (!DESCRIPTORS)
  symbol.description = description;
 return symbol;
};
var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
 return typeof it == 'symbol';
} : function (it) {
 return Object(it) instanceof $Symbol;
};
var $defineProperty = function defineProperty(O, P, Attributes) {
 if (O === ObjectPrototype)
  $defineProperty(ObjectPrototypeSymbols, P, Attributes);
 anObject(O);
 var key = toPrimitive(P, true);
 anObject(Attributes);
 if (has(AllSymbols, key)) {
  if (!Attributes.enumerable) {
   if (!has(O, HIDDEN))
    nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
   O[HIDDEN][key] = true;
  } else {
   if (has(O, HIDDEN) && O[HIDDEN][key])
    O[HIDDEN][key] = false;
   Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
  }
  return setSymbolDescriptor(O, key, Attributes);
 }
 return nativeDefineProperty(O, key, Attributes);
};
var $defineProperties = function defineProperties(O, Properties) {
 anObject(O);
 var properties = toIndexedObject(Properties);
 var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
 $forEach(keys, function (key) {
  if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key))
   $defineProperty(O, key, properties[key]);
 });
 return O;
};
var $create = function create(O, Properties) {
 return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};
var $propertyIsEnumerable = function propertyIsEnumerable(V) {
 var P = toPrimitive(V, true);
 var enumerable = nativePropertyIsEnumerable.call(this, P);
 if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P))
  return false;
 return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
 var it = toIndexedObject(O);
 var key = toPrimitive(P, true);
 if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key))
  return;
 var descriptor = nativeGetOwnPropertyDescriptor(it, key);
 if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
  descriptor.enumerable = true;
 }
 return descriptor;
};
var $getOwnPropertyNames = function getOwnPropertyNames(O) {
 var names = nativeGetOwnPropertyNames(toIndexedObject(O));
 var result = [];
 $forEach(names, function (key) {
  if (!has(AllSymbols, key) && !has(hiddenKeys, key))
   result.push(key);
 });
 return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
 var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
 var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
 var result = [];
 $forEach(names, function (key) {
  if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
   result.push(AllSymbols[key]);
  }
 });
 return result;
};
if (!NATIVE_SYMBOL) {
 $Symbol = function Symbol() {
  if (this instanceof $Symbol)
   throw TypeError('Symbol is not a constructor');
  var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
  var tag = uid(description);
  var setter = function (value) {
   if (this === ObjectPrototype)
    setter.call(ObjectPrototypeSymbols, value);
   if (has(this, HIDDEN) && has(this[HIDDEN], tag))
    this[HIDDEN][tag] = false;
   setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
  };
  if (DESCRIPTORS && USE_SETTER)
   setSymbolDescriptor(ObjectPrototype, tag, {
    configurable: true,
    set: setter
   });
  return wrap(tag, description);
 };
 redefine($Symbol[PROTOTYPE], 'toString', function toString() {
  return getInternalState(this).tag;
 });
 propertyIsEnumerableModule.f = $propertyIsEnumerable;
 definePropertyModule.f = $defineProperty;
 getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
 getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
 getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
 if (DESCRIPTORS) {
  nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
   configurable: true,
   get: function description() {
    return getInternalState(this).description;
   }
  });
  if (!IS_PURE) {
   redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
  }
 }
 wrappedWellKnownSymbolModule.f = function (name) {
  return wrap(wellKnownSymbol(name), name);
 };
}
$({
 global: true,
 wrap: true,
 forced: !NATIVE_SYMBOL,
 sham: !NATIVE_SYMBOL
}, { Symbol: $Symbol });
$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
 defineWellKnownSymbol(name);
});
$({
 target: SYMBOL,
 stat: true,
 forced: !NATIVE_SYMBOL
}, {
 'for': function (key) {
  var string = String(key);
  if (has(StringToSymbolRegistry, string))
   return StringToSymbolRegistry[string];
  var symbol = $Symbol(string);
  StringToSymbolRegistry[string] = symbol;
  SymbolToStringRegistry[symbol] = string;
  return symbol;
 },
 keyFor: function keyFor(sym) {
  if (!isSymbol(sym))
   throw TypeError(sym + ' is not a symbol');
  if (has(SymbolToStringRegistry, sym))
   return SymbolToStringRegistry[sym];
 },
 useSetter: function () {
  USE_SETTER = true;
 },
 useSimple: function () {
  USE_SETTER = false;
 }
});
$({
 target: 'Object',
 stat: true,
 forced: !NATIVE_SYMBOL,
 sham: !DESCRIPTORS
}, {
 create: $create,
 defineProperty: $defineProperty,
 defineProperties: $defineProperties,
 getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$({
 target: 'Object',
 stat: true,
 forced: !NATIVE_SYMBOL
}, {
 getOwnPropertyNames: $getOwnPropertyNames,
 getOwnPropertySymbols: $getOwnPropertySymbols
});
$({
 target: 'Object',
 stat: true,
 forced: fails(function () {
  getOwnPropertySymbolsModule.f(1);
 })
}, {
 getOwnPropertySymbols: function getOwnPropertySymbols(it) {
  return getOwnPropertySymbolsModule.f(toObject(it));
 }
});
JSON && $({
 target: 'JSON',
 stat: true,
 forced: !NATIVE_SYMBOL || fails(function () {
  var symbol = $Symbol();
  return nativeJSONStringify([symbol]) != '[null]' || nativeJSONStringify({ a: symbol }) != '{}' || nativeJSONStringify(Object(symbol)) != '{}';
 })
}, {
 stringify: function stringify(it) {
  var args = [it];
  var index = 1;
  var replacer, $replacer;
  while (arguments.length > index)
   args.push(arguments[index++]);
  $replacer = replacer = args[1];
  if (!isObject(replacer) && it === undefined || isSymbol(it))
   return;
  if (!isArray(replacer))
   replacer = function (key, value) {
    if (typeof $replacer == 'function')
     value = $replacer.call(this, key, value);
    if (!isSymbol(value))
     return value;
   };
  args[1] = replacer;
  return nativeJSONStringify.apply(JSON, args);
 }
});
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE])
 hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
setToStringTag($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;

/***/ }),
/* 148 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var toIndexedObject = __w_pdfjs_require__(14);
var nativeGetOwnPropertyNames = __w_pdfjs_require__(40).f;
var toString = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function (it) {
 try {
  return nativeGetOwnPropertyNames(it);
 } catch (error) {
  return windowNames.slice();
 }
};
module.exports.f = function getOwnPropertyNames(it) {
 return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __w_pdfjs_require__) {

exports.f = __w_pdfjs_require__(51);

/***/ }),
/* 150 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var path = __w_pdfjs_require__(39);
var has = __w_pdfjs_require__(20);
var wrappedWellKnownSymbolModule = __w_pdfjs_require__(149);
var defineProperty = __w_pdfjs_require__(24).f;
module.exports = function (NAME) {
 var Symbol = path.Symbol || (path.Symbol = {});
 if (!has(Symbol, NAME))
  defineProperty(Symbol, NAME, { value: wrappedWellKnownSymbolModule.f(NAME) });
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('asyncIterator');

/***/ }),
/* 152 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var DESCRIPTORS = __w_pdfjs_require__(10);
var global = __w_pdfjs_require__(8);
var has = __w_pdfjs_require__(20);
var isObject = __w_pdfjs_require__(19);
var defineProperty = __w_pdfjs_require__(24).f;
var copyConstructorProperties = __w_pdfjs_require__(36);
var NativeSymbol = global.Symbol;
if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || NativeSymbol().description !== undefined)) {
 var EmptyStringDescriptionStore = {};
 var SymbolWrapper = function Symbol() {
  var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
  var result = this instanceof SymbolWrapper ? new NativeSymbol(description) : description === undefined ? NativeSymbol() : NativeSymbol(description);
  if (description === '')
   EmptyStringDescriptionStore[result] = true;
  return result;
 };
 copyConstructorProperties(SymbolWrapper, NativeSymbol);
 var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
 symbolPrototype.constructor = SymbolWrapper;
 var symbolToString = symbolPrototype.toString;
 var native = String(NativeSymbol('test')) == 'Symbol(test)';
 var regexp = /^Symbol\((.*)\)[^)]+$/;
 defineProperty(symbolPrototype, 'description', {
  configurable: true,
  get: function description() {
   var symbol = isObject(this) ? this.valueOf() : this;
   var string = symbolToString.call(symbol);
   if (has(EmptyStringDescriptionStore, symbol))
    return '';
   var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
   return desc === '' ? undefined : desc;
  }
 });
 $({
  global: true,
  forced: true
 }, { Symbol: SymbolWrapper });
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('hasInstance');

/***/ }),
/* 154 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('isConcatSpreadable');

/***/ }),
/* 155 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('iterator');

/***/ }),
/* 156 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('match');

/***/ }),
/* 157 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('matchAll');

/***/ }),
/* 158 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('replace');

/***/ }),
/* 159 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('search');

/***/ }),
/* 160 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('species');

/***/ }),
/* 161 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('split');

/***/ }),
/* 162 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('toPrimitive');

/***/ }),
/* 163 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('toStringTag');

/***/ }),
/* 164 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var defineWellKnownSymbol = __w_pdfjs_require__(150);
defineWellKnownSymbol('unscopables');

/***/ }),
/* 165 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var setToStringTag = __w_pdfjs_require__(77);
setToStringTag(Math, 'Math', true);

/***/ }),
/* 166 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var global = __w_pdfjs_require__(8);
var setToStringTag = __w_pdfjs_require__(77);
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 167 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(168);
var entryUnbind = __w_pdfjs_require__(54);
module.exports = entryUnbind('String', 'padStart');

/***/ }),
/* 168 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var $padStart = __w_pdfjs_require__(169).start;
var WEBKIT_BUG = __w_pdfjs_require__(171);
$({
 target: 'String',
 proto: true,
 forced: WEBKIT_BUG
}, {
 padStart: function padStart(maxLength) {
  return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
 }
});

/***/ }),
/* 169 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var toLength = __w_pdfjs_require__(43);
var repeat = __w_pdfjs_require__(170);
var requireObjectCoercible = __w_pdfjs_require__(17);
var ceil = Math.ceil;
var createMethod = function (IS_END) {
 return function ($this, maxLength, fillString) {
  var S = String(requireObjectCoercible($this));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  var fillLen, stringFiller;
  if (intMaxLength <= stringLength || fillStr == '')
   return S;
  fillLen = intMaxLength - stringLength;
  stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen)
   stringFiller = stringFiller.slice(0, fillLen);
  return IS_END ? S + stringFiller : stringFiller + S;
 };
};
module.exports = {
 start: createMethod(false),
 end: createMethod(true)
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var toInteger = __w_pdfjs_require__(44);
var requireObjectCoercible = __w_pdfjs_require__(17);
module.exports = ''.repeat || function repeat(count) {
 var str = String(requireObjectCoercible(this));
 var result = '';
 var n = toInteger(count);
 if (n < 0 || n == Infinity)
  throw RangeError('Wrong number of repetitions');
 for (; n > 0; (n >>>= 1) && (str += str))
  if (n & 1)
   result += str;
 return result;
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var userAgent = __w_pdfjs_require__(114);
module.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

/***/ }),
/* 172 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(173);
var entryUnbind = __w_pdfjs_require__(54);
module.exports = entryUnbind('String', 'padEnd');

/***/ }),
/* 173 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var $ = __w_pdfjs_require__(7);
var $padEnd = __w_pdfjs_require__(169).end;
var WEBKIT_BUG = __w_pdfjs_require__(171);
$({
 target: 'String',
 proto: true,
 forced: WEBKIT_BUG
}, {
 padEnd: function padEnd(maxLength) {
  return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
 }
});

/***/ }),
/* 174 */
/***/ (function(module, exports, __w_pdfjs_require__) {

__w_pdfjs_require__(175);
var path = __w_pdfjs_require__(39);
module.exports = path.Object.values;

/***/ }),
/* 175 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var $ = __w_pdfjs_require__(7);
var $values = __w_pdfjs_require__(176).values;
$({
 target: 'Object',
 stat: true
}, {
 values: function values(O) {
  return $values(O);
 }
});

/***/ }),
/* 176 */
/***/ (function(module, exports, __w_pdfjs_require__) {

var DESCRIPTORS = __w_pdfjs_require__(10);
var objectKeys = __w_pdfjs_require__(66);
var toIndexedObject = __w_pdfjs_require__(14);
var propertyIsEnumerable = __w_pdfjs_require__(12).f;
var createMethod = function (TO_ENTRIES) {
 return function (it) {
  var O = toIndexedObject(it);
  var keys = objectKeys(O);
  var length = keys.length;
  var i = 0;
  var result = [];
  var key;
  while (length > i) {
   key = keys[i++];
   if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
    result.push(TO_ENTRIES ? [
     key,
     O[key]
    ] : O[key]);
   }
  }
  return result;
 };
};
module.exports = {
 entries: createMethod(true),
 values: createMethod(false)
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


{
  var isReadableStreamSupported = false;

  if (typeof ReadableStream !== 'undefined') {
    try {
      new ReadableStream({
        start: function start(controller) {
          controller.close();
        }
      });
      isReadableStreamSupported = true;
    } catch (e) {}
  }

  if (isReadableStreamSupported) {
    exports.ReadableStream = ReadableStream;
  } else {
    exports.ReadableStream = __w_pdfjs_require__(178).ReadableStream;
  }
}

/***/ }),
/* 178 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (e, a) {
  for (var i in a) {
    e[i] = a[i];
  }
})(exports, function (modules) {
  var installedModules = {};

  function __w_pdfjs_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
    module.l = true;
    return module.exports;
  }

  __w_pdfjs_require__.m = modules;
  __w_pdfjs_require__.c = installedModules;

  __w_pdfjs_require__.i = function (value) {
    return value;
  };

  __w_pdfjs_require__.d = function (exports, name, getter) {
    if (!__w_pdfjs_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        configurable: false,
        enumerable: true,
        get: getter
      });
    }
  };

  __w_pdfjs_require__.n = function (module) {
    var getter = module && module.__esModule ? function getDefault() {
      return module['default'];
    } : function getModuleExports() {
      return module;
    };

    __w_pdfjs_require__.d(getter, 'a', getter);

    return getter;
  };

  __w_pdfjs_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  __w_pdfjs_require__.p = "";
  return __w_pdfjs_require__(__w_pdfjs_require__.s = 7);
}([function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  var _require = __w_pdfjs_require__(1),
      assert = _require.assert;

  function IsPropertyKey(argument) {
    return typeof argument === 'string' || (typeof argument === 'undefined' ? 'undefined' : _typeof(argument)) === 'symbol';
  }

  exports.typeIsObject = function (x) {
    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null || typeof x === 'function';
  };

  exports.createDataProperty = function (o, p, v) {
    assert(exports.typeIsObject(o));
    Object.defineProperty(o, p, {
      value: v,
      writable: true,
      enumerable: true,
      configurable: true
    });
  };

  exports.createArrayFromList = function (elements) {
    return elements.slice();
  };

  exports.ArrayBufferCopy = function (dest, destOffset, src, srcOffset, n) {
    new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
  };

  exports.CreateIterResultObject = function (value, done) {
    assert(typeof done === 'boolean');
    var obj = {};
    Object.defineProperty(obj, 'value', {
      value: value,
      enumerable: true,
      writable: true,
      configurable: true
    });
    Object.defineProperty(obj, 'done', {
      value: done,
      enumerable: true,
      writable: true,
      configurable: true
    });
    return obj;
  };

  exports.IsFiniteNonNegativeNumber = function (v) {
    if (Number.isNaN(v)) {
      return false;
    }

    if (v === Infinity) {
      return false;
    }

    if (v < 0) {
      return false;
    }

    return true;
  };

  function Call(F, V, args) {
    if (typeof F !== 'function') {
      throw new TypeError('Argument is not a function');
    }

    return Function.prototype.apply.call(F, V, args);
  }

  exports.InvokeOrNoop = function (O, P, args) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    var method = O[P];

    if (method === undefined) {
      return undefined;
    }

    return Call(method, O, args);
  };

  exports.PromiseInvokeOrNoop = function (O, P, args) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));

    try {
      return Promise.resolve(exports.InvokeOrNoop(O, P, args));
    } catch (returnValueE) {
      return Promise.reject(returnValueE);
    }
  };

  exports.PromiseInvokeOrPerformFallback = function (O, P, args, F, argsF) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    assert(Array.isArray(argsF));
    var method = void 0;

    try {
      method = O[P];
    } catch (methodE) {
      return Promise.reject(methodE);
    }

    if (method === undefined) {
      return F.apply(null, argsF);
    }

    try {
      return Promise.resolve(Call(method, O, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  exports.TransferArrayBuffer = function (O) {
    return O.slice();
  };

  exports.ValidateAndNormalizeHighWaterMark = function (highWaterMark) {
    highWaterMark = Number(highWaterMark);

    if (Number.isNaN(highWaterMark) || highWaterMark < 0) {
      throw new RangeError('highWaterMark property of a queuing strategy must be non-negative and non-NaN');
    }

    return highWaterMark;
  };

  exports.ValidateAndNormalizeQueuingStrategy = function (size, highWaterMark) {
    if (size !== undefined && typeof size !== 'function') {
      throw new TypeError('size property of a queuing strategy must be a function');
    }

    highWaterMark = exports.ValidateAndNormalizeHighWaterMark(highWaterMark);
    return {
      size: size,
      highWaterMark: highWaterMark
    };
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  function rethrowAssertionErrorRejection(e) {
    if (e && e.constructor === AssertionError) {
      setTimeout(function () {
        throw e;
      }, 0);
    }
  }

  function AssertionError(message) {
    this.name = 'AssertionError';
    this.message = message || '';
    this.stack = new Error().stack;
  }

  AssertionError.prototype = Object.create(Error.prototype);
  AssertionError.prototype.constructor = AssertionError;

  function assert(value, message) {
    if (!value) {
      throw new AssertionError(message);
    }
  }

  module.exports = {
    rethrowAssertionErrorRejection: rethrowAssertionErrorRejection,
    AssertionError: AssertionError,
    assert: assert
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _require = __w_pdfjs_require__(0),
      InvokeOrNoop = _require.InvokeOrNoop,
      PromiseInvokeOrNoop = _require.PromiseInvokeOrNoop,
      ValidateAndNormalizeQueuingStrategy = _require.ValidateAndNormalizeQueuingStrategy,
      typeIsObject = _require.typeIsObject;

  var _require2 = __w_pdfjs_require__(1),
      assert = _require2.assert,
      rethrowAssertionErrorRejection = _require2.rethrowAssertionErrorRejection;

  var _require3 = __w_pdfjs_require__(3),
      DequeueValue = _require3.DequeueValue,
      EnqueueValueWithSize = _require3.EnqueueValueWithSize,
      PeekQueueValue = _require3.PeekQueueValue,
      ResetQueue = _require3.ResetQueue;

  var WritableStream = function () {
    function WritableStream() {
      var underlyingSink = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          size = _ref.size,
          _ref$highWaterMark = _ref.highWaterMark,
          highWaterMark = _ref$highWaterMark === undefined ? 1 : _ref$highWaterMark;

      _classCallCheck(this, WritableStream);

      this._state = 'writable';
      this._storedError = undefined;
      this._writer = undefined;
      this._writableStreamController = undefined;
      this._writeRequests = [];
      this._inFlightWriteRequest = undefined;
      this._closeRequest = undefined;
      this._inFlightCloseRequest = undefined;
      this._pendingAbortRequest = undefined;
      this._backpressure = false;
      var type = underlyingSink.type;

      if (type !== undefined) {
        throw new RangeError('Invalid type is specified');
      }

      this._writableStreamController = new WritableStreamDefaultController(this, underlyingSink, size, highWaterMark);

      this._writableStreamController.__startSteps();
    }

    _createClass(WritableStream, [{
      key: 'abort',
      value: function abort(reason) {
        if (IsWritableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('abort'));
        }

        if (IsWritableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('Cannot abort a stream that already has a writer'));
        }

        return WritableStreamAbort(this, reason);
      }
    }, {
      key: 'getWriter',
      value: function getWriter() {
        if (IsWritableStream(this) === false) {
          throw streamBrandCheckException('getWriter');
        }

        return AcquireWritableStreamDefaultWriter(this);
      }
    }, {
      key: 'locked',
      get: function get() {
        if (IsWritableStream(this) === false) {
          throw streamBrandCheckException('locked');
        }

        return IsWritableStreamLocked(this);
      }
    }]);

    return WritableStream;
  }();

  module.exports = {
    AcquireWritableStreamDefaultWriter: AcquireWritableStreamDefaultWriter,
    IsWritableStream: IsWritableStream,
    IsWritableStreamLocked: IsWritableStreamLocked,
    WritableStream: WritableStream,
    WritableStreamAbort: WritableStreamAbort,
    WritableStreamDefaultControllerError: WritableStreamDefaultControllerError,
    WritableStreamDefaultWriterCloseWithErrorPropagation: WritableStreamDefaultWriterCloseWithErrorPropagation,
    WritableStreamDefaultWriterRelease: WritableStreamDefaultWriterRelease,
    WritableStreamDefaultWriterWrite: WritableStreamDefaultWriterWrite,
    WritableStreamCloseQueuedOrInFlight: WritableStreamCloseQueuedOrInFlight
  };

  function AcquireWritableStreamDefaultWriter(stream) {
    return new WritableStreamDefaultWriter(stream);
  }

  function IsWritableStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
      return false;
    }

    return true;
  }

  function IsWritableStreamLocked(stream) {
    assert(IsWritableStream(stream) === true, 'IsWritableStreamLocked should only be used on known writable streams');

    if (stream._writer === undefined) {
      return false;
    }

    return true;
  }

  function WritableStreamAbort(stream, reason) {
    var state = stream._state;

    if (state === 'closed') {
      return Promise.resolve(undefined);
    }

    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }

    var error = new TypeError('Requested to abort');

    if (stream._pendingAbortRequest !== undefined) {
      return Promise.reject(error);
    }

    assert(state === 'writable' || state === 'erroring', 'state must be writable or erroring');
    var wasAlreadyErroring = false;

    if (state === 'erroring') {
      wasAlreadyErroring = true;
      reason = undefined;
    }

    var promise = new Promise(function (resolve, reject) {
      stream._pendingAbortRequest = {
        _resolve: resolve,
        _reject: reject,
        _reason: reason,
        _wasAlreadyErroring: wasAlreadyErroring
      };
    });

    if (wasAlreadyErroring === false) {
      WritableStreamStartErroring(stream, error);
    }

    return promise;
  }

  function WritableStreamAddWriteRequest(stream) {
    assert(IsWritableStreamLocked(stream) === true);
    assert(stream._state === 'writable');
    var promise = new Promise(function (resolve, reject) {
      var writeRequest = {
        _resolve: resolve,
        _reject: reject
      };

      stream._writeRequests.push(writeRequest);
    });
    return promise;
  }

  function WritableStreamDealWithRejection(stream, error) {
    var state = stream._state;

    if (state === 'writable') {
      WritableStreamStartErroring(stream, error);
      return;
    }

    assert(state === 'erroring');
    WritableStreamFinishErroring(stream);
  }

  function WritableStreamStartErroring(stream, reason) {
    assert(stream._storedError === undefined, 'stream._storedError === undefined');
    assert(stream._state === 'writable', 'state must be writable');
    var controller = stream._writableStreamController;
    assert(controller !== undefined, 'controller must not be undefined');
    stream._state = 'erroring';
    stream._storedError = reason;
    var writer = stream._writer;

    if (writer !== undefined) {
      WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
    }

    if (WritableStreamHasOperationMarkedInFlight(stream) === false && controller._started === true) {
      WritableStreamFinishErroring(stream);
    }
  }

  function WritableStreamFinishErroring(stream) {
    assert(stream._state === 'erroring', 'stream._state === erroring');
    assert(WritableStreamHasOperationMarkedInFlight(stream) === false, 'WritableStreamHasOperationMarkedInFlight(stream) === false');
    stream._state = 'errored';

    stream._writableStreamController.__errorSteps();

    var storedError = stream._storedError;

    for (var i = 0; i < stream._writeRequests.length; i++) {
      var writeRequest = stream._writeRequests[i];

      writeRequest._reject(storedError);
    }

    stream._writeRequests = [];

    if (stream._pendingAbortRequest === undefined) {
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
      return;
    }

    var abortRequest = stream._pendingAbortRequest;
    stream._pendingAbortRequest = undefined;

    if (abortRequest._wasAlreadyErroring === true) {
      abortRequest._reject(storedError);

      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
      return;
    }

    var promise = stream._writableStreamController.__abortSteps(abortRequest._reason);

    promise.then(function () {
      abortRequest._resolve();

      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    }, function (reason) {
      abortRequest._reject(reason);

      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    });
  }

  function WritableStreamFinishInFlightWrite(stream) {
    assert(stream._inFlightWriteRequest !== undefined);

    stream._inFlightWriteRequest._resolve(undefined);

    stream._inFlightWriteRequest = undefined;
  }

  function WritableStreamFinishInFlightWriteWithError(stream, error) {
    assert(stream._inFlightWriteRequest !== undefined);

    stream._inFlightWriteRequest._reject(error);

    stream._inFlightWriteRequest = undefined;
    assert(stream._state === 'writable' || stream._state === 'erroring');
    WritableStreamDealWithRejection(stream, error);
  }

  function WritableStreamFinishInFlightClose(stream) {
    assert(stream._inFlightCloseRequest !== undefined);

    stream._inFlightCloseRequest._resolve(undefined);

    stream._inFlightCloseRequest = undefined;
    var state = stream._state;
    assert(state === 'writable' || state === 'erroring');

    if (state === 'erroring') {
      stream._storedError = undefined;

      if (stream._pendingAbortRequest !== undefined) {
        stream._pendingAbortRequest._resolve();

        stream._pendingAbortRequest = undefined;
      }
    }

    stream._state = 'closed';
    var writer = stream._writer;

    if (writer !== undefined) {
      defaultWriterClosedPromiseResolve(writer);
    }

    assert(stream._pendingAbortRequest === undefined, 'stream._pendingAbortRequest === undefined');
    assert(stream._storedError === undefined, 'stream._storedError === undefined');
  }

  function WritableStreamFinishInFlightCloseWithError(stream, error) {
    assert(stream._inFlightCloseRequest !== undefined);

    stream._inFlightCloseRequest._reject(error);

    stream._inFlightCloseRequest = undefined;
    assert(stream._state === 'writable' || stream._state === 'erroring');

    if (stream._pendingAbortRequest !== undefined) {
      stream._pendingAbortRequest._reject(error);

      stream._pendingAbortRequest = undefined;
    }

    WritableStreamDealWithRejection(stream, error);
  }

  function WritableStreamCloseQueuedOrInFlight(stream) {
    if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
      return false;
    }

    return true;
  }

  function WritableStreamHasOperationMarkedInFlight(stream) {
    if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
      return false;
    }

    return true;
  }

  function WritableStreamMarkCloseRequestInFlight(stream) {
    assert(stream._inFlightCloseRequest === undefined);
    assert(stream._closeRequest !== undefined);
    stream._inFlightCloseRequest = stream._closeRequest;
    stream._closeRequest = undefined;
  }

  function WritableStreamMarkFirstWriteRequestInFlight(stream) {
    assert(stream._inFlightWriteRequest === undefined, 'there must be no pending write request');
    assert(stream._writeRequests.length !== 0, 'writeRequests must not be empty');
    stream._inFlightWriteRequest = stream._writeRequests.shift();
  }

  function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
    assert(stream._state === 'errored', '_stream_.[[state]] is `"errored"`');

    if (stream._closeRequest !== undefined) {
      assert(stream._inFlightCloseRequest === undefined);

      stream._closeRequest._reject(stream._storedError);

      stream._closeRequest = undefined;
    }

    var writer = stream._writer;

    if (writer !== undefined) {
      defaultWriterClosedPromiseReject(writer, stream._storedError);

      writer._closedPromise["catch"](function () {});
    }
  }

  function WritableStreamUpdateBackpressure(stream, backpressure) {
    assert(stream._state === 'writable');
    assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
    var writer = stream._writer;

    if (writer !== undefined && backpressure !== stream._backpressure) {
      if (backpressure === true) {
        defaultWriterReadyPromiseReset(writer);
      } else {
        assert(backpressure === false);
        defaultWriterReadyPromiseResolve(writer);
      }
    }

    stream._backpressure = backpressure;
  }

  var WritableStreamDefaultWriter = function () {
    function WritableStreamDefaultWriter(stream) {
      _classCallCheck(this, WritableStreamDefaultWriter);

      if (IsWritableStream(stream) === false) {
        throw new TypeError('WritableStreamDefaultWriter can only be constructed with a WritableStream instance');
      }

      if (IsWritableStreamLocked(stream) === true) {
        throw new TypeError('This stream has already been locked for exclusive writing by another writer');
      }

      this._ownerWritableStream = stream;
      stream._writer = this;
      var state = stream._state;

      if (state === 'writable') {
        if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._backpressure === true) {
          defaultWriterReadyPromiseInitialize(this);
        } else {
          defaultWriterReadyPromiseInitializeAsResolved(this);
        }

        defaultWriterClosedPromiseInitialize(this);
      } else if (state === 'erroring') {
        defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);

        this._readyPromise["catch"](function () {});

        defaultWriterClosedPromiseInitialize(this);
      } else if (state === 'closed') {
        defaultWriterReadyPromiseInitializeAsResolved(this);
        defaultWriterClosedPromiseInitializeAsResolved(this);
      } else {
        assert(state === 'errored', 'state must be errored');
        var storedError = stream._storedError;
        defaultWriterReadyPromiseInitializeAsRejected(this, storedError);

        this._readyPromise["catch"](function () {});

        defaultWriterClosedPromiseInitializeAsRejected(this, storedError);

        this._closedPromise["catch"](function () {});
      }
    }

    _createClass(WritableStreamDefaultWriter, [{
      key: 'abort',
      value: function abort(reason) {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('abort'));
        }

        if (this._ownerWritableStream === undefined) {
          return Promise.reject(defaultWriterLockException('abort'));
        }

        return WritableStreamDefaultWriterAbort(this, reason);
      }
    }, {
      key: 'close',
      value: function close() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('close'));
        }

        var stream = this._ownerWritableStream;

        if (stream === undefined) {
          return Promise.reject(defaultWriterLockException('close'));
        }

        if (WritableStreamCloseQueuedOrInFlight(stream) === true) {
          return Promise.reject(new TypeError('cannot close an already-closing stream'));
        }

        return WritableStreamDefaultWriterClose(this);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          throw defaultWriterBrandCheckException('releaseLock');
        }

        var stream = this._ownerWritableStream;

        if (stream === undefined) {
          return;
        }

        assert(stream._writer !== undefined);
        WritableStreamDefaultWriterRelease(this);
      }
    }, {
      key: 'write',
      value: function write(chunk) {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('write'));
        }

        if (this._ownerWritableStream === undefined) {
          return Promise.reject(defaultWriterLockException('write to'));
        }

        return WritableStreamDefaultWriterWrite(this, chunk);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('closed'));
        }

        return this._closedPromise;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          throw defaultWriterBrandCheckException('desiredSize');
        }

        if (this._ownerWritableStream === undefined) {
          throw defaultWriterLockException('desiredSize');
        }

        return WritableStreamDefaultWriterGetDesiredSize(this);
      }
    }, {
      key: 'ready',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('ready'));
        }

        return this._readyPromise;
      }
    }]);

    return WritableStreamDefaultWriter;
  }();

  function IsWritableStreamDefaultWriter(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
      return false;
    }

    return true;
  }

  function WritableStreamDefaultWriterAbort(writer, reason) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    return WritableStreamAbort(stream, reason);
  }

  function WritableStreamDefaultWriterClose(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var state = stream._state;

    if (state === 'closed' || state === 'errored') {
      return Promise.reject(new TypeError('The stream (in ' + state + ' state) is not in the writable state and cannot be closed'));
    }

    assert(state === 'writable' || state === 'erroring');
    assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
    var promise = new Promise(function (resolve, reject) {
      var closeRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._closeRequest = closeRequest;
    });

    if (stream._backpressure === true && state === 'writable') {
      defaultWriterReadyPromiseResolve(writer);
    }

    WritableStreamDefaultControllerClose(stream._writableStreamController);
    return promise;
  }

  function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var state = stream._state;

    if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
      return Promise.resolve();
    }

    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }

    assert(state === 'writable' || state === 'erroring');
    return WritableStreamDefaultWriterClose(writer);
  }

  function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
    if (writer._closedPromiseState === 'pending') {
      defaultWriterClosedPromiseReject(writer, error);
    } else {
      defaultWriterClosedPromiseResetToRejected(writer, error);
    }

    writer._closedPromise["catch"](function () {});
  }

  function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
    if (writer._readyPromiseState === 'pending') {
      defaultWriterReadyPromiseReject(writer, error);
    } else {
      defaultWriterReadyPromiseResetToRejected(writer, error);
    }

    writer._readyPromise["catch"](function () {});
  }

  function WritableStreamDefaultWriterGetDesiredSize(writer) {
    var stream = writer._ownerWritableStream;
    var state = stream._state;

    if (state === 'errored' || state === 'erroring') {
      return null;
    }

    if (state === 'closed') {
      return 0;
    }

    return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
  }

  function WritableStreamDefaultWriterRelease(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    assert(stream._writer === writer);
    var releasedError = new TypeError('Writer was released and can no longer be used to monitor the stream\'s closedness');
    WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
    WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
    stream._writer = undefined;
    writer._ownerWritableStream = undefined;
  }

  function WritableStreamDefaultWriterWrite(writer, chunk) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var controller = stream._writableStreamController;
    var chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);

    if (stream !== writer._ownerWritableStream) {
      return Promise.reject(defaultWriterLockException('write to'));
    }

    var state = stream._state;

    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }

    if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
      return Promise.reject(new TypeError('The stream is closing or closed and cannot be written to'));
    }

    if (state === 'erroring') {
      return Promise.reject(stream._storedError);
    }

    assert(state === 'writable');
    var promise = WritableStreamAddWriteRequest(stream);
    WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
    return promise;
  }

  var WritableStreamDefaultController = function () {
    function WritableStreamDefaultController(stream, underlyingSink, size, highWaterMark) {
      _classCallCheck(this, WritableStreamDefaultController);

      if (IsWritableStream(stream) === false) {
        throw new TypeError('WritableStreamDefaultController can only be constructed with a WritableStream instance');
      }

      if (stream._writableStreamController !== undefined) {
        throw new TypeError('WritableStreamDefaultController instances can only be created by the WritableStream constructor');
      }

      this._controlledWritableStream = stream;
      this._underlyingSink = underlyingSink;
      this._queue = undefined;
      this._queueTotalSize = undefined;
      ResetQueue(this);
      this._started = false;
      var normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
      this._strategySize = normalizedStrategy.size;
      this._strategyHWM = normalizedStrategy.highWaterMark;
      var backpressure = WritableStreamDefaultControllerGetBackpressure(this);
      WritableStreamUpdateBackpressure(stream, backpressure);
    }

    _createClass(WritableStreamDefaultController, [{
      key: 'error',
      value: function error(e) {
        if (IsWritableStreamDefaultController(this) === false) {
          throw new TypeError('WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController');
        }

        var state = this._controlledWritableStream._state;

        if (state !== 'writable') {
          return;
        }

        WritableStreamDefaultControllerError(this, e);
      }
    }, {
      key: '__abortSteps',
      value: function __abortSteps(reason) {
        return PromiseInvokeOrNoop(this._underlyingSink, 'abort', [reason]);
      }
    }, {
      key: '__errorSteps',
      value: function __errorSteps() {
        ResetQueue(this);
      }
    }, {
      key: '__startSteps',
      value: function __startSteps() {
        var _this = this;

        var startResult = InvokeOrNoop(this._underlyingSink, 'start', [this]);
        var stream = this._controlledWritableStream;
        Promise.resolve(startResult).then(function () {
          assert(stream._state === 'writable' || stream._state === 'erroring');
          _this._started = true;
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(_this);
        }, function (r) {
          assert(stream._state === 'writable' || stream._state === 'erroring');
          _this._started = true;
          WritableStreamDealWithRejection(stream, r);
        })["catch"](rethrowAssertionErrorRejection);
      }
    }]);

    return WritableStreamDefaultController;
  }();

  function WritableStreamDefaultControllerClose(controller) {
    EnqueueValueWithSize(controller, 'close', 0);
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }

  function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
    var strategySize = controller._strategySize;

    if (strategySize === undefined) {
      return 1;
    }

    try {
      return strategySize(chunk);
    } catch (chunkSizeE) {
      WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
      return 1;
    }
  }

  function WritableStreamDefaultControllerGetDesiredSize(controller) {
    return controller._strategyHWM - controller._queueTotalSize;
  }

  function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
    var writeRecord = {
      chunk: chunk
    };

    try {
      EnqueueValueWithSize(controller, writeRecord, chunkSize);
    } catch (enqueueE) {
      WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
      return;
    }

    var stream = controller._controlledWritableStream;

    if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._state === 'writable') {
      var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
      WritableStreamUpdateBackpressure(stream, backpressure);
    }

    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }

  function IsWritableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSink')) {
      return false;
    }

    return true;
  }

  function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
    var stream = controller._controlledWritableStream;

    if (controller._started === false) {
      return;
    }

    if (stream._inFlightWriteRequest !== undefined) {
      return;
    }

    var state = stream._state;

    if (state === 'closed' || state === 'errored') {
      return;
    }

    if (state === 'erroring') {
      WritableStreamFinishErroring(stream);
      return;
    }

    if (controller._queue.length === 0) {
      return;
    }

    var writeRecord = PeekQueueValue(controller);

    if (writeRecord === 'close') {
      WritableStreamDefaultControllerProcessClose(controller);
    } else {
      WritableStreamDefaultControllerProcessWrite(controller, writeRecord.chunk);
    }
  }

  function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
    if (controller._controlledWritableStream._state === 'writable') {
      WritableStreamDefaultControllerError(controller, error);
    }
  }

  function WritableStreamDefaultControllerProcessClose(controller) {
    var stream = controller._controlledWritableStream;
    WritableStreamMarkCloseRequestInFlight(stream);
    DequeueValue(controller);
    assert(controller._queue.length === 0, 'queue must be empty once the final write record is dequeued');
    var sinkClosePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'close', []);
    sinkClosePromise.then(function () {
      WritableStreamFinishInFlightClose(stream);
    }, function (reason) {
      WritableStreamFinishInFlightCloseWithError(stream, reason);
    })["catch"](rethrowAssertionErrorRejection);
  }

  function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
    var stream = controller._controlledWritableStream;
    WritableStreamMarkFirstWriteRequestInFlight(stream);
    var sinkWritePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'write', [chunk, controller]);
    sinkWritePromise.then(function () {
      WritableStreamFinishInFlightWrite(stream);
      var state = stream._state;
      assert(state === 'writable' || state === 'erroring');
      DequeueValue(controller);

      if (WritableStreamCloseQueuedOrInFlight(stream) === false && state === 'writable') {
        var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
      }

      WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }, function (reason) {
      WritableStreamFinishInFlightWriteWithError(stream, reason);
    })["catch"](rethrowAssertionErrorRejection);
  }

  function WritableStreamDefaultControllerGetBackpressure(controller) {
    var desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
    return desiredSize <= 0;
  }

  function WritableStreamDefaultControllerError(controller, error) {
    var stream = controller._controlledWritableStream;
    assert(stream._state === 'writable');
    WritableStreamStartErroring(stream, error);
  }

  function streamBrandCheckException(name) {
    return new TypeError('WritableStream.prototype.' + name + ' can only be used on a WritableStream');
  }

  function defaultWriterBrandCheckException(name) {
    return new TypeError('WritableStreamDefaultWriter.prototype.' + name + ' can only be used on a WritableStreamDefaultWriter');
  }

  function defaultWriterLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released writer');
  }

  function defaultWriterClosedPromiseInitialize(writer) {
    writer._closedPromise = new Promise(function (resolve, reject) {
      writer._closedPromise_resolve = resolve;
      writer._closedPromise_reject = reject;
      writer._closedPromiseState = 'pending';
    });
  }

  function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
    writer._closedPromise = Promise.reject(reason);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'rejected';
  }

  function defaultWriterClosedPromiseInitializeAsResolved(writer) {
    writer._closedPromise = Promise.resolve(undefined);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'resolved';
  }

  function defaultWriterClosedPromiseReject(writer, reason) {
    assert(writer._closedPromise_resolve !== undefined, 'writer._closedPromise_resolve !== undefined');
    assert(writer._closedPromise_reject !== undefined, 'writer._closedPromise_reject !== undefined');
    assert(writer._closedPromiseState === 'pending', 'writer._closedPromiseState is pending');

    writer._closedPromise_reject(reason);

    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'rejected';
  }

  function defaultWriterClosedPromiseResetToRejected(writer, reason) {
    assert(writer._closedPromise_resolve === undefined, 'writer._closedPromise_resolve === undefined');
    assert(writer._closedPromise_reject === undefined, 'writer._closedPromise_reject === undefined');
    assert(writer._closedPromiseState !== 'pending', 'writer._closedPromiseState is not pending');
    writer._closedPromise = Promise.reject(reason);
    writer._closedPromiseState = 'rejected';
  }

  function defaultWriterClosedPromiseResolve(writer) {
    assert(writer._closedPromise_resolve !== undefined, 'writer._closedPromise_resolve !== undefined');
    assert(writer._closedPromise_reject !== undefined, 'writer._closedPromise_reject !== undefined');
    assert(writer._closedPromiseState === 'pending', 'writer._closedPromiseState is pending');

    writer._closedPromise_resolve(undefined);

    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'resolved';
  }

  function defaultWriterReadyPromiseInitialize(writer) {
    writer._readyPromise = new Promise(function (resolve, reject) {
      writer._readyPromise_resolve = resolve;
      writer._readyPromise_reject = reject;
    });
    writer._readyPromiseState = 'pending';
  }

  function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
    writer._readyPromise = Promise.reject(reason);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'rejected';
  }

  function defaultWriterReadyPromiseInitializeAsResolved(writer) {
    writer._readyPromise = Promise.resolve(undefined);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'fulfilled';
  }

  function defaultWriterReadyPromiseReject(writer, reason) {
    assert(writer._readyPromise_resolve !== undefined, 'writer._readyPromise_resolve !== undefined');
    assert(writer._readyPromise_reject !== undefined, 'writer._readyPromise_reject !== undefined');

    writer._readyPromise_reject(reason);

    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'rejected';
  }

  function defaultWriterReadyPromiseReset(writer) {
    assert(writer._readyPromise_resolve === undefined, 'writer._readyPromise_resolve === undefined');
    assert(writer._readyPromise_reject === undefined, 'writer._readyPromise_reject === undefined');
    writer._readyPromise = new Promise(function (resolve, reject) {
      writer._readyPromise_resolve = resolve;
      writer._readyPromise_reject = reject;
    });
    writer._readyPromiseState = 'pending';
  }

  function defaultWriterReadyPromiseResetToRejected(writer, reason) {
    assert(writer._readyPromise_resolve === undefined, 'writer._readyPromise_resolve === undefined');
    assert(writer._readyPromise_reject === undefined, 'writer._readyPromise_reject === undefined');
    writer._readyPromise = Promise.reject(reason);
    writer._readyPromiseState = 'rejected';
  }

  function defaultWriterReadyPromiseResolve(writer) {
    assert(writer._readyPromise_resolve !== undefined, 'writer._readyPromise_resolve !== undefined');
    assert(writer._readyPromise_reject !== undefined, 'writer._readyPromise_reject !== undefined');

    writer._readyPromise_resolve(undefined);

    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'fulfilled';
  }
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _require = __w_pdfjs_require__(0),
      IsFiniteNonNegativeNumber = _require.IsFiniteNonNegativeNumber;

  var _require2 = __w_pdfjs_require__(1),
      assert = _require2.assert;

  exports.DequeueValue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    assert(container._queue.length > 0, 'Spec-level failure: should never dequeue from an empty queue.');

    var pair = container._queue.shift();

    container._queueTotalSize -= pair.size;

    if (container._queueTotalSize < 0) {
      container._queueTotalSize = 0;
    }

    return pair.value;
  };

  exports.EnqueueValueWithSize = function (container, value, size) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and ' + '[[queueTotalSize]].');
    size = Number(size);

    if (!IsFiniteNonNegativeNumber(size)) {
      throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
    }

    container._queue.push({
      value: value,
      size: size
    });

    container._queueTotalSize += size;
  };

  exports.PeekQueueValue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    assert(container._queue.length > 0, 'Spec-level failure: should never peek at an empty queue.');
    var pair = container._queue[0];
    return pair.value;
  };

  exports.ResetQueue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    container._queue = [];
    container._queueTotalSize = 0;
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _require = __w_pdfjs_require__(0),
      ArrayBufferCopy = _require.ArrayBufferCopy,
      CreateIterResultObject = _require.CreateIterResultObject,
      IsFiniteNonNegativeNumber = _require.IsFiniteNonNegativeNumber,
      InvokeOrNoop = _require.InvokeOrNoop,
      PromiseInvokeOrNoop = _require.PromiseInvokeOrNoop,
      TransferArrayBuffer = _require.TransferArrayBuffer,
      ValidateAndNormalizeQueuingStrategy = _require.ValidateAndNormalizeQueuingStrategy,
      ValidateAndNormalizeHighWaterMark = _require.ValidateAndNormalizeHighWaterMark;

  var _require2 = __w_pdfjs_require__(0),
      createArrayFromList = _require2.createArrayFromList,
      createDataProperty = _require2.createDataProperty,
      typeIsObject = _require2.typeIsObject;

  var _require3 = __w_pdfjs_require__(1),
      assert = _require3.assert,
      rethrowAssertionErrorRejection = _require3.rethrowAssertionErrorRejection;

  var _require4 = __w_pdfjs_require__(3),
      DequeueValue = _require4.DequeueValue,
      EnqueueValueWithSize = _require4.EnqueueValueWithSize,
      ResetQueue = _require4.ResetQueue;

  var _require5 = __w_pdfjs_require__(2),
      AcquireWritableStreamDefaultWriter = _require5.AcquireWritableStreamDefaultWriter,
      IsWritableStream = _require5.IsWritableStream,
      IsWritableStreamLocked = _require5.IsWritableStreamLocked,
      WritableStreamAbort = _require5.WritableStreamAbort,
      WritableStreamDefaultWriterCloseWithErrorPropagation = _require5.WritableStreamDefaultWriterCloseWithErrorPropagation,
      WritableStreamDefaultWriterRelease = _require5.WritableStreamDefaultWriterRelease,
      WritableStreamDefaultWriterWrite = _require5.WritableStreamDefaultWriterWrite,
      WritableStreamCloseQueuedOrInFlight = _require5.WritableStreamCloseQueuedOrInFlight;

  var ReadableStream = function () {
    function ReadableStream() {
      var underlyingSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          size = _ref.size,
          highWaterMark = _ref.highWaterMark;

      _classCallCheck(this, ReadableStream);

      this._state = 'readable';
      this._reader = undefined;
      this._storedError = undefined;
      this._disturbed = false;
      this._readableStreamController = undefined;
      var type = underlyingSource.type;
      var typeString = String(type);

      if (typeString === 'bytes') {
        if (highWaterMark === undefined) {
          highWaterMark = 0;
        }

        this._readableStreamController = new ReadableByteStreamController(this, underlyingSource, highWaterMark);
      } else if (type === undefined) {
        if (highWaterMark === undefined) {
          highWaterMark = 1;
        }

        this._readableStreamController = new ReadableStreamDefaultController(this, underlyingSource, size, highWaterMark);
      } else {
        throw new RangeError('Invalid type is specified');
      }
    }

    _createClass(ReadableStream, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (IsReadableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('cancel'));
        }

        if (IsReadableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('Cannot cancel a stream that already has a reader'));
        }

        return ReadableStreamCancel(this, reason);
      }
    }, {
      key: 'getReader',
      value: function getReader() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            mode = _ref2.mode;

        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('getReader');
        }

        if (mode === undefined) {
          return AcquireReadableStreamDefaultReader(this);
        }

        mode = String(mode);

        if (mode === 'byob') {
          return AcquireReadableStreamBYOBReader(this);
        }

        throw new RangeError('Invalid mode is specified');
      }
    }, {
      key: 'pipeThrough',
      value: function pipeThrough(_ref3, options) {
        var writable = _ref3.writable,
            readable = _ref3.readable;
        var promise = this.pipeTo(writable, options);
        ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise);
        return readable;
      }
    }, {
      key: 'pipeTo',
      value: function pipeTo(dest) {
        var _this = this;

        var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            preventClose = _ref4.preventClose,
            preventAbort = _ref4.preventAbort,
            preventCancel = _ref4.preventCancel;

        if (IsReadableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('pipeTo'));
        }

        if (IsWritableStream(dest) === false) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo\'s first argument must be a WritableStream'));
        }

        preventClose = Boolean(preventClose);
        preventAbort = Boolean(preventAbort);
        preventCancel = Boolean(preventCancel);

        if (IsReadableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
        }

        if (IsWritableStreamLocked(dest) === true) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
        }

        var reader = AcquireReadableStreamDefaultReader(this);
        var writer = AcquireWritableStreamDefaultWriter(dest);
        var shuttingDown = false;
        var currentWrite = Promise.resolve();
        return new Promise(function (resolve, reject) {
          function pipeLoop() {
            currentWrite = Promise.resolve();

            if (shuttingDown === true) {
              return Promise.resolve();
            }

            return writer._readyPromise.then(function () {
              return ReadableStreamDefaultReaderRead(reader).then(function (_ref5) {
                var value = _ref5.value,
                    done = _ref5.done;

                if (done === true) {
                  return;
                }

                currentWrite = WritableStreamDefaultWriterWrite(writer, value)["catch"](function () {});
              });
            }).then(pipeLoop);
          }

          isOrBecomesErrored(_this, reader._closedPromise, function (storedError) {
            if (preventAbort === false) {
              shutdownWithAction(function () {
                return WritableStreamAbort(dest, storedError);
              }, true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesErrored(dest, writer._closedPromise, function (storedError) {
            if (preventCancel === false) {
              shutdownWithAction(function () {
                return ReadableStreamCancel(_this, storedError);
              }, true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesClosed(_this, reader._closedPromise, function () {
            if (preventClose === false) {
              shutdownWithAction(function () {
                return WritableStreamDefaultWriterCloseWithErrorPropagation(writer);
              });
            } else {
              shutdown();
            }
          });

          if (WritableStreamCloseQueuedOrInFlight(dest) === true || dest._state === 'closed') {
            var destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');

            if (preventCancel === false) {
              shutdownWithAction(function () {
                return ReadableStreamCancel(_this, destClosed);
              }, true, destClosed);
            } else {
              shutdown(true, destClosed);
            }
          }

          pipeLoop()["catch"](function (err) {
            currentWrite = Promise.resolve();
            rethrowAssertionErrorRejection(err);
          });

          function waitForWritesToFinish() {
            var oldCurrentWrite = currentWrite;
            return currentWrite.then(function () {
              return oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined;
            });
          }

          function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === 'errored') {
              action(stream._storedError);
            } else {
              promise["catch"](action)["catch"](rethrowAssertionErrorRejection);
            }
          }

          function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === 'closed') {
              action();
            } else {
              promise.then(action)["catch"](rethrowAssertionErrorRejection);
            }
          }

          function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown === true) {
              return;
            }

            shuttingDown = true;

            if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
              waitForWritesToFinish().then(doTheRest);
            } else {
              doTheRest();
            }

            function doTheRest() {
              action().then(function () {
                return finalize(originalIsError, originalError);
              }, function (newError) {
                return finalize(true, newError);
              })["catch"](rethrowAssertionErrorRejection);
            }
          }

          function shutdown(isError, error) {
            if (shuttingDown === true) {
              return;
            }

            shuttingDown = true;

            if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
              waitForWritesToFinish().then(function () {
                return finalize(isError, error);
              })["catch"](rethrowAssertionErrorRejection);
            } else {
              finalize(isError, error);
            }
          }

          function finalize(isError, error) {
            WritableStreamDefaultWriterRelease(writer);
            ReadableStreamReaderGenericRelease(reader);

            if (isError) {
              reject(error);
            } else {
              resolve(undefined);
            }
          }
        });
      }
    }, {
      key: 'tee',
      value: function tee() {
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('tee');
        }

        var branches = ReadableStreamTee(this, false);
        return createArrayFromList(branches);
      }
    }, {
      key: 'locked',
      get: function get() {
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('locked');
        }

        return IsReadableStreamLocked(this);
      }
    }]);

    return ReadableStream;
  }();

  module.exports = {
    ReadableStream: ReadableStream,
    IsReadableStreamDisturbed: IsReadableStreamDisturbed,
    ReadableStreamDefaultControllerClose: ReadableStreamDefaultControllerClose,
    ReadableStreamDefaultControllerEnqueue: ReadableStreamDefaultControllerEnqueue,
    ReadableStreamDefaultControllerError: ReadableStreamDefaultControllerError,
    ReadableStreamDefaultControllerGetDesiredSize: ReadableStreamDefaultControllerGetDesiredSize
  };

  function AcquireReadableStreamBYOBReader(stream) {
    return new ReadableStreamBYOBReader(stream);
  }

  function AcquireReadableStreamDefaultReader(stream) {
    return new ReadableStreamDefaultReader(stream);
  }

  function IsReadableStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
      return false;
    }

    return true;
  }

  function IsReadableStreamDisturbed(stream) {
    assert(IsReadableStream(stream) === true, 'IsReadableStreamDisturbed should only be used on known readable streams');
    return stream._disturbed;
  }

  function IsReadableStreamLocked(stream) {
    assert(IsReadableStream(stream) === true, 'IsReadableStreamLocked should only be used on known readable streams');

    if (stream._reader === undefined) {
      return false;
    }

    return true;
  }

  function ReadableStreamTee(stream, cloneForBranch2) {
    assert(IsReadableStream(stream) === true);
    assert(typeof cloneForBranch2 === 'boolean');
    var reader = AcquireReadableStreamDefaultReader(stream);
    var teeState = {
      closedOrErrored: false,
      canceled1: false,
      canceled2: false,
      reason1: undefined,
      reason2: undefined
    };
    teeState.promise = new Promise(function (resolve) {
      teeState._resolve = resolve;
    });
    var pull = create_ReadableStreamTeePullFunction();
    pull._reader = reader;
    pull._teeState = teeState;
    pull._cloneForBranch2 = cloneForBranch2;
    var cancel1 = create_ReadableStreamTeeBranch1CancelFunction();
    cancel1._stream = stream;
    cancel1._teeState = teeState;
    var cancel2 = create_ReadableStreamTeeBranch2CancelFunction();
    cancel2._stream = stream;
    cancel2._teeState = teeState;
    var underlyingSource1 = Object.create(Object.prototype);
    createDataProperty(underlyingSource1, 'pull', pull);
    createDataProperty(underlyingSource1, 'cancel', cancel1);
    var branch1Stream = new ReadableStream(underlyingSource1);
    var underlyingSource2 = Object.create(Object.prototype);
    createDataProperty(underlyingSource2, 'pull', pull);
    createDataProperty(underlyingSource2, 'cancel', cancel2);
    var branch2Stream = new ReadableStream(underlyingSource2);
    pull._branch1 = branch1Stream._readableStreamController;
    pull._branch2 = branch2Stream._readableStreamController;

    reader._closedPromise["catch"](function (r) {
      if (teeState.closedOrErrored === true) {
        return;
      }

      ReadableStreamDefaultControllerError(pull._branch1, r);
      ReadableStreamDefaultControllerError(pull._branch2, r);
      teeState.closedOrErrored = true;
    });

    return [branch1Stream, branch2Stream];
  }

  function create_ReadableStreamTeePullFunction() {
    function f() {
      var reader = f._reader,
          branch1 = f._branch1,
          branch2 = f._branch2,
          teeState = f._teeState;
      return ReadableStreamDefaultReaderRead(reader).then(function (result) {
        assert(typeIsObject(result));
        var value = result.value;
        var done = result.done;
        assert(typeof done === 'boolean');

        if (done === true && teeState.closedOrErrored === false) {
          if (teeState.canceled1 === false) {
            ReadableStreamDefaultControllerClose(branch1);
          }

          if (teeState.canceled2 === false) {
            ReadableStreamDefaultControllerClose(branch2);
          }

          teeState.closedOrErrored = true;
        }

        if (teeState.closedOrErrored === true) {
          return;
        }

        var value1 = value;
        var value2 = value;

        if (teeState.canceled1 === false) {
          ReadableStreamDefaultControllerEnqueue(branch1, value1);
        }

        if (teeState.canceled2 === false) {
          ReadableStreamDefaultControllerEnqueue(branch2, value2);
        }
      });
    }

    return f;
  }

  function create_ReadableStreamTeeBranch1CancelFunction() {
    function f(reason) {
      var stream = f._stream,
          teeState = f._teeState;
      teeState.canceled1 = true;
      teeState.reason1 = reason;

      if (teeState.canceled2 === true) {
        var compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
        var cancelResult = ReadableStreamCancel(stream, compositeReason);

        teeState._resolve(cancelResult);
      }

      return teeState.promise;
    }

    return f;
  }

  function create_ReadableStreamTeeBranch2CancelFunction() {
    function f(reason) {
      var stream = f._stream,
          teeState = f._teeState;
      teeState.canceled2 = true;
      teeState.reason2 = reason;

      if (teeState.canceled1 === true) {
        var compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
        var cancelResult = ReadableStreamCancel(stream, compositeReason);

        teeState._resolve(cancelResult);
      }

      return teeState.promise;
    }

    return f;
  }

  function ReadableStreamAddReadIntoRequest(stream) {
    assert(IsReadableStreamBYOBReader(stream._reader) === true);
    assert(stream._state === 'readable' || stream._state === 'closed');
    var promise = new Promise(function (resolve, reject) {
      var readIntoRequest = {
        _resolve: resolve,
        _reject: reject
      };

      stream._reader._readIntoRequests.push(readIntoRequest);
    });
    return promise;
  }

  function ReadableStreamAddReadRequest(stream) {
    assert(IsReadableStreamDefaultReader(stream._reader) === true);
    assert(stream._state === 'readable');
    var promise = new Promise(function (resolve, reject) {
      var readRequest = {
        _resolve: resolve,
        _reject: reject
      };

      stream._reader._readRequests.push(readRequest);
    });
    return promise;
  }

  function ReadableStreamCancel(stream, reason) {
    stream._disturbed = true;

    if (stream._state === 'closed') {
      return Promise.resolve(undefined);
    }

    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }

    ReadableStreamClose(stream);

    var sourceCancelPromise = stream._readableStreamController.__cancelSteps(reason);

    return sourceCancelPromise.then(function () {
      return undefined;
    });
  }

  function ReadableStreamClose(stream) {
    assert(stream._state === 'readable');
    stream._state = 'closed';
    var reader = stream._reader;

    if (reader === undefined) {
      return undefined;
    }

    if (IsReadableStreamDefaultReader(reader) === true) {
      for (var i = 0; i < reader._readRequests.length; i++) {
        var _resolve = reader._readRequests[i]._resolve;

        _resolve(CreateIterResultObject(undefined, true));
      }

      reader._readRequests = [];
    }

    defaultReaderClosedPromiseResolve(reader);
    return undefined;
  }

  function ReadableStreamError(stream, e) {
    assert(IsReadableStream(stream) === true, 'stream must be ReadableStream');
    assert(stream._state === 'readable', 'state must be readable');
    stream._state = 'errored';
    stream._storedError = e;
    var reader = stream._reader;

    if (reader === undefined) {
      return undefined;
    }

    if (IsReadableStreamDefaultReader(reader) === true) {
      for (var i = 0; i < reader._readRequests.length; i++) {
        var readRequest = reader._readRequests[i];

        readRequest._reject(e);
      }

      reader._readRequests = [];
    } else {
      assert(IsReadableStreamBYOBReader(reader), 'reader must be ReadableStreamBYOBReader');

      for (var _i = 0; _i < reader._readIntoRequests.length; _i++) {
        var readIntoRequest = reader._readIntoRequests[_i];

        readIntoRequest._reject(e);
      }

      reader._readIntoRequests = [];
    }

    defaultReaderClosedPromiseReject(reader, e);

    reader._closedPromise["catch"](function () {});
  }

  function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
    var reader = stream._reader;
    assert(reader._readIntoRequests.length > 0);

    var readIntoRequest = reader._readIntoRequests.shift();

    readIntoRequest._resolve(CreateIterResultObject(chunk, done));
  }

  function ReadableStreamFulfillReadRequest(stream, chunk, done) {
    var reader = stream._reader;
    assert(reader._readRequests.length > 0);

    var readRequest = reader._readRequests.shift();

    readRequest._resolve(CreateIterResultObject(chunk, done));
  }

  function ReadableStreamGetNumReadIntoRequests(stream) {
    return stream._reader._readIntoRequests.length;
  }

  function ReadableStreamGetNumReadRequests(stream) {
    return stream._reader._readRequests.length;
  }

  function ReadableStreamHasBYOBReader(stream) {
    var reader = stream._reader;

    if (reader === undefined) {
      return false;
    }

    if (IsReadableStreamBYOBReader(reader) === false) {
      return false;
    }

    return true;
  }

  function ReadableStreamHasDefaultReader(stream) {
    var reader = stream._reader;

    if (reader === undefined) {
      return false;
    }

    if (IsReadableStreamDefaultReader(reader) === false) {
      return false;
    }

    return true;
  }

  var ReadableStreamDefaultReader = function () {
    function ReadableStreamDefaultReader(stream) {
      _classCallCheck(this, ReadableStreamDefaultReader);

      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableStreamDefaultReader can only be constructed with a ReadableStream instance');
      }

      if (IsReadableStreamLocked(stream) === true) {
        throw new TypeError('This stream has already been locked for exclusive reading by another reader');
      }

      ReadableStreamReaderGenericInitialize(this, stream);
      this._readRequests = [];
    }

    _createClass(ReadableStreamDefaultReader, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('cancel'));
        }

        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('cancel'));
        }

        return ReadableStreamReaderGenericCancel(this, reason);
      }
    }, {
      key: 'read',
      value: function read() {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('read'));
        }

        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('read from'));
        }

        return ReadableStreamDefaultReaderRead(this);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (IsReadableStreamDefaultReader(this) === false) {
          throw defaultReaderBrandCheckException('releaseLock');
        }

        if (this._ownerReadableStream === undefined) {
          return;
        }

        if (this._readRequests.length > 0) {
          throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }

        ReadableStreamReaderGenericRelease(this);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('closed'));
        }

        return this._closedPromise;
      }
    }]);

    return ReadableStreamDefaultReader;
  }();

  var ReadableStreamBYOBReader = function () {
    function ReadableStreamBYOBReader(stream) {
      _classCallCheck(this, ReadableStreamBYOBReader);

      if (!IsReadableStream(stream)) {
        throw new TypeError('ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a ' + 'byte source');
      }

      if (IsReadableByteStreamController(stream._readableStreamController) === false) {
        throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' + 'source');
      }

      if (IsReadableStreamLocked(stream)) {
        throw new TypeError('This stream has already been locked for exclusive reading by another reader');
      }

      ReadableStreamReaderGenericInitialize(this, stream);
      this._readIntoRequests = [];
    }

    _createClass(ReadableStreamBYOBReader, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('cancel'));
        }

        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('cancel'));
        }

        return ReadableStreamReaderGenericCancel(this, reason);
      }
    }, {
      key: 'read',
      value: function read(view) {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('read'));
        }

        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('read from'));
        }

        if (!ArrayBuffer.isView(view)) {
          return Promise.reject(new TypeError('view must be an array buffer view'));
        }

        if (view.byteLength === 0) {
          return Promise.reject(new TypeError('view must have non-zero byteLength'));
        }

        return ReadableStreamBYOBReaderRead(this, view);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (!IsReadableStreamBYOBReader(this)) {
          throw byobReaderBrandCheckException('releaseLock');
        }

        if (this._ownerReadableStream === undefined) {
          return;
        }

        if (this._readIntoRequests.length > 0) {
          throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }

        ReadableStreamReaderGenericRelease(this);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('closed'));
        }

        return this._closedPromise;
      }
    }]);

    return ReadableStreamBYOBReader;
  }();

  function IsReadableStreamBYOBReader(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
      return false;
    }

    return true;
  }

  function IsReadableStreamDefaultReader(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
      return false;
    }

    return true;
  }

  function ReadableStreamReaderGenericInitialize(reader, stream) {
    reader._ownerReadableStream = stream;
    stream._reader = reader;

    if (stream._state === 'readable') {
      defaultReaderClosedPromiseInitialize(reader);
    } else if (stream._state === 'closed') {
      defaultReaderClosedPromiseInitializeAsResolved(reader);
    } else {
      assert(stream._state === 'errored', 'state must be errored');
      defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);

      reader._closedPromise["catch"](function () {});
    }
  }

  function ReadableStreamReaderGenericCancel(reader, reason) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    return ReadableStreamCancel(stream, reason);
  }

  function ReadableStreamReaderGenericRelease(reader) {
    assert(reader._ownerReadableStream !== undefined);
    assert(reader._ownerReadableStream._reader === reader);

    if (reader._ownerReadableStream._state === 'readable') {
      defaultReaderClosedPromiseReject(reader, new TypeError('Reader was released and can no longer be used to monitor the stream\'s closedness'));
    } else {
      defaultReaderClosedPromiseResetToRejected(reader, new TypeError('Reader was released and can no longer be used to monitor the stream\'s closedness'));
    }

    reader._closedPromise["catch"](function () {});

    reader._ownerReadableStream._reader = undefined;
    reader._ownerReadableStream = undefined;
  }

  function ReadableStreamBYOBReaderRead(reader, view) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    stream._disturbed = true;

    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }

    return ReadableByteStreamControllerPullInto(stream._readableStreamController, view);
  }

  function ReadableStreamDefaultReaderRead(reader) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    stream._disturbed = true;

    if (stream._state === 'closed') {
      return Promise.resolve(CreateIterResultObject(undefined, true));
    }

    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }

    assert(stream._state === 'readable');
    return stream._readableStreamController.__pullSteps();
  }

  var ReadableStreamDefaultController = function () {
    function ReadableStreamDefaultController(stream, underlyingSource, size, highWaterMark) {
      _classCallCheck(this, ReadableStreamDefaultController);

      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableStreamDefaultController can only be constructed with a ReadableStream instance');
      }

      if (stream._readableStreamController !== undefined) {
        throw new TypeError('ReadableStreamDefaultController instances can only be created by the ReadableStream constructor');
      }

      this._controlledReadableStream = stream;
      this._underlyingSource = underlyingSource;
      this._queue = undefined;
      this._queueTotalSize = undefined;
      ResetQueue(this);
      this._started = false;
      this._closeRequested = false;
      this._pullAgain = false;
      this._pulling = false;
      var normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
      this._strategySize = normalizedStrategy.size;
      this._strategyHWM = normalizedStrategy.highWaterMark;
      var controller = this;
      var startResult = InvokeOrNoop(underlyingSource, 'start', [this]);
      Promise.resolve(startResult).then(function () {
        controller._started = true;
        assert(controller._pulling === false);
        assert(controller._pullAgain === false);
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }, function (r) {
        ReadableStreamDefaultControllerErrorIfNeeded(controller, r);
      })["catch"](rethrowAssertionErrorRejection);
    }

    _createClass(ReadableStreamDefaultController, [{
      key: 'close',
      value: function close() {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('close');
        }

        if (this._closeRequested === true) {
          throw new TypeError('The stream has already been closed; do not close it again!');
        }

        var state = this._controlledReadableStream._state;

        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
        }

        ReadableStreamDefaultControllerClose(this);
      }
    }, {
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('enqueue');
        }

        if (this._closeRequested === true) {
          throw new TypeError('stream is closed or draining');
        }

        var state = this._controlledReadableStream._state;

        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
        }

        return ReadableStreamDefaultControllerEnqueue(this, chunk);
      }
    }, {
      key: 'error',
      value: function error(e) {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('error');
        }

        var stream = this._controlledReadableStream;

        if (stream._state !== 'readable') {
          throw new TypeError('The stream is ' + stream._state + ' and so cannot be errored');
        }

        ReadableStreamDefaultControllerError(this, e);
      }
    }, {
      key: '__cancelSteps',
      value: function __cancelSteps(reason) {
        ResetQueue(this);
        return PromiseInvokeOrNoop(this._underlyingSource, 'cancel', [reason]);
      }
    }, {
      key: '__pullSteps',
      value: function __pullSteps() {
        var stream = this._controlledReadableStream;

        if (this._queue.length > 0) {
          var chunk = DequeueValue(this);

          if (this._closeRequested === true && this._queue.length === 0) {
            ReadableStreamClose(stream);
          } else {
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
          }

          return Promise.resolve(CreateIterResultObject(chunk, false));
        }

        var pendingPromise = ReadableStreamAddReadRequest(stream);
        ReadableStreamDefaultControllerCallPullIfNeeded(this);
        return pendingPromise;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('desiredSize');
        }

        return ReadableStreamDefaultControllerGetDesiredSize(this);
      }
    }]);

    return ReadableStreamDefaultController;
  }();

  function IsReadableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSource')) {
      return false;
    }

    return true;
  }

  function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
    var shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);

    if (shouldPull === false) {
      return undefined;
    }

    if (controller._pulling === true) {
      controller._pullAgain = true;
      return undefined;
    }

    assert(controller._pullAgain === false);
    controller._pulling = true;
    var pullPromise = PromiseInvokeOrNoop(controller._underlyingSource, 'pull', [controller]);
    pullPromise.then(function () {
      controller._pulling = false;

      if (controller._pullAgain === true) {
        controller._pullAgain = false;
        return ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }

      return undefined;
    }, function (e) {
      ReadableStreamDefaultControllerErrorIfNeeded(controller, e);
    })["catch"](rethrowAssertionErrorRejection);
    return undefined;
  }

  function ReadableStreamDefaultControllerShouldCallPull(controller) {
    var stream = controller._controlledReadableStream;

    if (stream._state === 'closed' || stream._state === 'errored') {
      return false;
    }

    if (controller._closeRequested === true) {
      return false;
    }

    if (controller._started === false) {
      return false;
    }

    if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      return true;
    }

    var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);

    if (desiredSize > 0) {
      return true;
    }

    return false;
  }

  function ReadableStreamDefaultControllerClose(controller) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    controller._closeRequested = true;

    if (controller._queue.length === 0) {
      ReadableStreamClose(stream);
    }
  }

  function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');

    if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      ReadableStreamFulfillReadRequest(stream, chunk, false);
    } else {
      var chunkSize = 1;

      if (controller._strategySize !== undefined) {
        var strategySize = controller._strategySize;

        try {
          chunkSize = strategySize(chunk);
        } catch (chunkSizeE) {
          ReadableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
          throw chunkSizeE;
        }
      }

      try {
        EnqueueValueWithSize(controller, chunk, chunkSize);
      } catch (enqueueE) {
        ReadableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
        throw enqueueE;
      }
    }

    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    return undefined;
  }

  function ReadableStreamDefaultControllerError(controller, e) {
    var stream = controller._controlledReadableStream;
    assert(stream._state === 'readable');
    ResetQueue(controller);
    ReadableStreamError(stream, e);
  }

  function ReadableStreamDefaultControllerErrorIfNeeded(controller, e) {
    if (controller._controlledReadableStream._state === 'readable') {
      ReadableStreamDefaultControllerError(controller, e);
    }
  }

  function ReadableStreamDefaultControllerGetDesiredSize(controller) {
    var stream = controller._controlledReadableStream;
    var state = stream._state;

    if (state === 'errored') {
      return null;
    }

    if (state === 'closed') {
      return 0;
    }

    return controller._strategyHWM - controller._queueTotalSize;
  }

  var ReadableStreamBYOBRequest = function () {
    function ReadableStreamBYOBRequest(controller, view) {
      _classCallCheck(this, ReadableStreamBYOBRequest);

      this._associatedReadableByteStreamController = controller;
      this._view = view;
    }

    _createClass(ReadableStreamBYOBRequest, [{
      key: 'respond',
      value: function respond(bytesWritten) {
        if (IsReadableStreamBYOBRequest(this) === false) {
          throw byobRequestBrandCheckException('respond');
        }

        if (this._associatedReadableByteStreamController === undefined) {
          throw new TypeError('This BYOB request has been invalidated');
        }

        ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
      }
    }, {
      key: 'respondWithNewView',
      value: function respondWithNewView(view) {
        if (IsReadableStreamBYOBRequest(this) === false) {
          throw byobRequestBrandCheckException('respond');
        }

        if (this._associatedReadableByteStreamController === undefined) {
          throw new TypeError('This BYOB request has been invalidated');
        }

        if (!ArrayBuffer.isView(view)) {
          throw new TypeError('You can only respond with array buffer views');
        }

        ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
      }
    }, {
      key: 'view',
      get: function get() {
        return this._view;
      }
    }]);

    return ReadableStreamBYOBRequest;
  }();

  var ReadableByteStreamController = function () {
    function ReadableByteStreamController(stream, underlyingByteSource, highWaterMark) {
      _classCallCheck(this, ReadableByteStreamController);

      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableByteStreamController can only be constructed with a ReadableStream instance given ' + 'a byte source');
      }

      if (stream._readableStreamController !== undefined) {
        throw new TypeError('ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte ' + 'source');
      }

      this._controlledReadableStream = stream;
      this._underlyingByteSource = underlyingByteSource;
      this._pullAgain = false;
      this._pulling = false;
      ReadableByteStreamControllerClearPendingPullIntos(this);
      this._queue = this._queueTotalSize = undefined;
      ResetQueue(this);
      this._closeRequested = false;
      this._started = false;
      this._strategyHWM = ValidateAndNormalizeHighWaterMark(highWaterMark);
      var autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;

      if (autoAllocateChunkSize !== undefined) {
        if (Number.isInteger(autoAllocateChunkSize) === false || autoAllocateChunkSize <= 0) {
          throw new RangeError('autoAllocateChunkSize must be a positive integer');
        }
      }

      this._autoAllocateChunkSize = autoAllocateChunkSize;
      this._pendingPullIntos = [];
      var controller = this;
      var startResult = InvokeOrNoop(underlyingByteSource, 'start', [this]);
      Promise.resolve(startResult).then(function () {
        controller._started = true;
        assert(controller._pulling === false);
        assert(controller._pullAgain === false);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }, function (r) {
        if (stream._state === 'readable') {
          ReadableByteStreamControllerError(controller, r);
        }
      })["catch"](rethrowAssertionErrorRejection);
    }

    _createClass(ReadableByteStreamController, [{
      key: 'close',
      value: function close() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('close');
        }

        if (this._closeRequested === true) {
          throw new TypeError('The stream has already been closed; do not close it again!');
        }

        var state = this._controlledReadableStream._state;

        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
        }

        ReadableByteStreamControllerClose(this);
      }
    }, {
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('enqueue');
        }

        if (this._closeRequested === true) {
          throw new TypeError('stream is closed or draining');
        }

        var state = this._controlledReadableStream._state;

        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
        }

        if (!ArrayBuffer.isView(chunk)) {
          throw new TypeError('You can only enqueue array buffer views when using a ReadableByteStreamController');
        }

        ReadableByteStreamControllerEnqueue(this, chunk);
      }
    }, {
      key: 'error',
      value: function error(e) {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('error');
        }

        var stream = this._controlledReadableStream;

        if (stream._state !== 'readable') {
          throw new TypeError('The stream is ' + stream._state + ' and so cannot be errored');
        }

        ReadableByteStreamControllerError(this, e);
      }
    }, {
      key: '__cancelSteps',
      value: function __cancelSteps(reason) {
        if (this._pendingPullIntos.length > 0) {
          var firstDescriptor = this._pendingPullIntos[0];
          firstDescriptor.bytesFilled = 0;
        }

        ResetQueue(this);
        return PromiseInvokeOrNoop(this._underlyingByteSource, 'cancel', [reason]);
      }
    }, {
      key: '__pullSteps',
      value: function __pullSteps() {
        var stream = this._controlledReadableStream;
        assert(ReadableStreamHasDefaultReader(stream) === true);

        if (this._queueTotalSize > 0) {
          assert(ReadableStreamGetNumReadRequests(stream) === 0);

          var entry = this._queue.shift();

          this._queueTotalSize -= entry.byteLength;
          ReadableByteStreamControllerHandleQueueDrain(this);
          var view = void 0;

          try {
            view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
          } catch (viewE) {
            return Promise.reject(viewE);
          }

          return Promise.resolve(CreateIterResultObject(view, false));
        }

        var autoAllocateChunkSize = this._autoAllocateChunkSize;

        if (autoAllocateChunkSize !== undefined) {
          var buffer = void 0;

          try {
            buffer = new ArrayBuffer(autoAllocateChunkSize);
          } catch (bufferE) {
            return Promise.reject(bufferE);
          }

          var pullIntoDescriptor = {
            buffer: buffer,
            byteOffset: 0,
            byteLength: autoAllocateChunkSize,
            bytesFilled: 0,
            elementSize: 1,
            ctor: Uint8Array,
            readerType: 'default'
          };

          this._pendingPullIntos.push(pullIntoDescriptor);
        }

        var promise = ReadableStreamAddReadRequest(stream);
        ReadableByteStreamControllerCallPullIfNeeded(this);
        return promise;
      }
    }, {
      key: 'byobRequest',
      get: function get() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('byobRequest');
        }

        if (this._byobRequest === undefined && this._pendingPullIntos.length > 0) {
          var firstDescriptor = this._pendingPullIntos[0];
          var view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
          this._byobRequest = new ReadableStreamBYOBRequest(this, view);
        }

        return this._byobRequest;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('desiredSize');
        }

        return ReadableByteStreamControllerGetDesiredSize(this);
      }
    }]);

    return ReadableByteStreamController;
  }();

  function IsReadableByteStreamController(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingByteSource')) {
      return false;
    }

    return true;
  }

  function IsReadableStreamBYOBRequest(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
      return false;
    }

    return true;
  }

  function ReadableByteStreamControllerCallPullIfNeeded(controller) {
    var shouldPull = ReadableByteStreamControllerShouldCallPull(controller);

    if (shouldPull === false) {
      return undefined;
    }

    if (controller._pulling === true) {
      controller._pullAgain = true;
      return undefined;
    }

    assert(controller._pullAgain === false);
    controller._pulling = true;
    var pullPromise = PromiseInvokeOrNoop(controller._underlyingByteSource, 'pull', [controller]);
    pullPromise.then(function () {
      controller._pulling = false;

      if (controller._pullAgain === true) {
        controller._pullAgain = false;
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
    }, function (e) {
      if (controller._controlledReadableStream._state === 'readable') {
        ReadableByteStreamControllerError(controller, e);
      }
    })["catch"](rethrowAssertionErrorRejection);
    return undefined;
  }

  function ReadableByteStreamControllerClearPendingPullIntos(controller) {
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    controller._pendingPullIntos = [];
  }

  function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
    assert(stream._state !== 'errored', 'state must not be errored');
    var done = false;

    if (stream._state === 'closed') {
      assert(pullIntoDescriptor.bytesFilled === 0);
      done = true;
    }

    var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);

    if (pullIntoDescriptor.readerType === 'default') {
      ReadableStreamFulfillReadRequest(stream, filledView, done);
    } else {
      assert(pullIntoDescriptor.readerType === 'byob');
      ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
    }
  }

  function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
    var bytesFilled = pullIntoDescriptor.bytesFilled;
    var elementSize = pullIntoDescriptor.elementSize;
    assert(bytesFilled <= pullIntoDescriptor.byteLength);
    assert(bytesFilled % elementSize === 0);
    return new pullIntoDescriptor.ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
  }

  function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
    controller._queue.push({
      buffer: buffer,
      byteOffset: byteOffset,
      byteLength: byteLength
    });

    controller._queueTotalSize += byteLength;
  }

  function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
    var elementSize = pullIntoDescriptor.elementSize;
    var currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
    var maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
    var maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
    var maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
    var totalBytesToCopyRemaining = maxBytesToCopy;
    var ready = false;

    if (maxAlignedBytes > currentAlignedBytes) {
      totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
      ready = true;
    }

    var queue = controller._queue;

    while (totalBytesToCopyRemaining > 0) {
      var headOfQueue = queue[0];
      var bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
      var destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
      ArrayBufferCopy(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);

      if (headOfQueue.byteLength === bytesToCopy) {
        queue.shift();
      } else {
        headOfQueue.byteOffset += bytesToCopy;
        headOfQueue.byteLength -= bytesToCopy;
      }

      controller._queueTotalSize -= bytesToCopy;
      ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
      totalBytesToCopyRemaining -= bytesToCopy;
    }

    if (ready === false) {
      assert(controller._queueTotalSize === 0, 'queue must be empty');
      assert(pullIntoDescriptor.bytesFilled > 0);
      assert(pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize);
    }

    return ready;
  }

  function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
    assert(controller._pendingPullIntos.length === 0 || controller._pendingPullIntos[0] === pullIntoDescriptor);
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    pullIntoDescriptor.bytesFilled += size;
  }

  function ReadableByteStreamControllerHandleQueueDrain(controller) {
    assert(controller._controlledReadableStream._state === 'readable');

    if (controller._queueTotalSize === 0 && controller._closeRequested === true) {
      ReadableStreamClose(controller._controlledReadableStream);
    } else {
      ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
  }

  function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
    if (controller._byobRequest === undefined) {
      return;
    }

    controller._byobRequest._associatedReadableByteStreamController = undefined;
    controller._byobRequest._view = undefined;
    controller._byobRequest = undefined;
  }

  function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
    assert(controller._closeRequested === false);

    while (controller._pendingPullIntos.length > 0) {
      if (controller._queueTotalSize === 0) {
        return;
      }

      var pullIntoDescriptor = controller._pendingPullIntos[0];

      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
      }
    }
  }

  function ReadableByteStreamControllerPullInto(controller, view) {
    var stream = controller._controlledReadableStream;
    var elementSize = 1;

    if (view.constructor !== DataView) {
      elementSize = view.constructor.BYTES_PER_ELEMENT;
    }

    var ctor = view.constructor;
    var pullIntoDescriptor = {
      buffer: view.buffer,
      byteOffset: view.byteOffset,
      byteLength: view.byteLength,
      bytesFilled: 0,
      elementSize: elementSize,
      ctor: ctor,
      readerType: 'byob'
    };

    if (controller._pendingPullIntos.length > 0) {
      pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);

      controller._pendingPullIntos.push(pullIntoDescriptor);

      return ReadableStreamAddReadIntoRequest(stream);
    }

    if (stream._state === 'closed') {
      var emptyView = new view.constructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
      return Promise.resolve(CreateIterResultObject(emptyView, true));
    }

    if (controller._queueTotalSize > 0) {
      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
        var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        ReadableByteStreamControllerHandleQueueDrain(controller);
        return Promise.resolve(CreateIterResultObject(filledView, false));
      }

      if (controller._closeRequested === true) {
        var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
        ReadableByteStreamControllerError(controller, e);
        return Promise.reject(e);
      }
    }

    pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);

    controller._pendingPullIntos.push(pullIntoDescriptor);

    var promise = ReadableStreamAddReadIntoRequest(stream);
    ReadableByteStreamControllerCallPullIfNeeded(controller);
    return promise;
  }

  function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
    firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
    assert(firstDescriptor.bytesFilled === 0, 'bytesFilled must be 0');
    var stream = controller._controlledReadableStream;

    if (ReadableStreamHasBYOBReader(stream) === true) {
      while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
        var pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
        ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
      }
    }
  }

  function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
    if (pullIntoDescriptor.bytesFilled + bytesWritten > pullIntoDescriptor.byteLength) {
      throw new RangeError('bytesWritten out of range');
    }

    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);

    if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
      return;
    }

    ReadableByteStreamControllerShiftPendingPullInto(controller);
    var remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;

    if (remainderSize > 0) {
      var end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
      var remainder = pullIntoDescriptor.buffer.slice(end - remainderSize, end);
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
    }

    pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
    pullIntoDescriptor.bytesFilled -= remainderSize;
    ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
  }

  function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
    var firstDescriptor = controller._pendingPullIntos[0];
    var stream = controller._controlledReadableStream;

    if (stream._state === 'closed') {
      if (bytesWritten !== 0) {
        throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
      }

      ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
    } else {
      assert(stream._state === 'readable');
      ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
    }
  }

  function ReadableByteStreamControllerShiftPendingPullInto(controller) {
    var descriptor = controller._pendingPullIntos.shift();

    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    return descriptor;
  }

  function ReadableByteStreamControllerShouldCallPull(controller) {
    var stream = controller._controlledReadableStream;

    if (stream._state !== 'readable') {
      return false;
    }

    if (controller._closeRequested === true) {
      return false;
    }

    if (controller._started === false) {
      return false;
    }

    if (ReadableStreamHasDefaultReader(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      return true;
    }

    if (ReadableStreamHasBYOBReader(stream) === true && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
      return true;
    }

    if (ReadableByteStreamControllerGetDesiredSize(controller) > 0) {
      return true;
    }

    return false;
  }

  function ReadableByteStreamControllerClose(controller) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');

    if (controller._queueTotalSize > 0) {
      controller._closeRequested = true;
      return;
    }

    if (controller._pendingPullIntos.length > 0) {
      var firstPendingPullInto = controller._pendingPullIntos[0];

      if (firstPendingPullInto.bytesFilled > 0) {
        var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
        ReadableByteStreamControllerError(controller, e);
        throw e;
      }
    }

    ReadableStreamClose(stream);
  }

  function ReadableByteStreamControllerEnqueue(controller, chunk) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    var buffer = chunk.buffer;
    var byteOffset = chunk.byteOffset;
    var byteLength = chunk.byteLength;
    var transferredBuffer = TransferArrayBuffer(buffer);

    if (ReadableStreamHasDefaultReader(stream) === true) {
      if (ReadableStreamGetNumReadRequests(stream) === 0) {
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      } else {
        assert(controller._queue.length === 0);
        var transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
        ReadableStreamFulfillReadRequest(stream, transferredView, false);
      }
    } else if (ReadableStreamHasBYOBReader(stream) === true) {
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    } else {
      assert(IsReadableStreamLocked(stream) === false, 'stream must not be locked');
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    }
  }

  function ReadableByteStreamControllerError(controller, e) {
    var stream = controller._controlledReadableStream;
    assert(stream._state === 'readable');
    ReadableByteStreamControllerClearPendingPullIntos(controller);
    ResetQueue(controller);
    ReadableStreamError(stream, e);
  }

  function ReadableByteStreamControllerGetDesiredSize(controller) {
    var stream = controller._controlledReadableStream;
    var state = stream._state;

    if (state === 'errored') {
      return null;
    }

    if (state === 'closed') {
      return 0;
    }

    return controller._strategyHWM - controller._queueTotalSize;
  }

  function ReadableByteStreamControllerRespond(controller, bytesWritten) {
    bytesWritten = Number(bytesWritten);

    if (IsFiniteNonNegativeNumber(bytesWritten) === false) {
      throw new RangeError('bytesWritten must be a finite');
    }

    assert(controller._pendingPullIntos.length > 0);
    ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
  }

  function ReadableByteStreamControllerRespondWithNewView(controller, view) {
    assert(controller._pendingPullIntos.length > 0);
    var firstDescriptor = controller._pendingPullIntos[0];

    if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
      throw new RangeError('The region specified by view does not match byobRequest');
    }

    if (firstDescriptor.byteLength !== view.byteLength) {
      throw new RangeError('The buffer of view has different capacity than byobRequest');
    }

    firstDescriptor.buffer = view.buffer;
    ReadableByteStreamControllerRespondInternal(controller, view.byteLength);
  }

  function streamBrandCheckException(name) {
    return new TypeError('ReadableStream.prototype.' + name + ' can only be used on a ReadableStream');
  }

  function readerLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released reader');
  }

  function defaultReaderBrandCheckException(name) {
    return new TypeError('ReadableStreamDefaultReader.prototype.' + name + ' can only be used on a ReadableStreamDefaultReader');
  }

  function defaultReaderClosedPromiseInitialize(reader) {
    reader._closedPromise = new Promise(function (resolve, reject) {
      reader._closedPromise_resolve = resolve;
      reader._closedPromise_reject = reject;
    });
  }

  function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
    reader._closedPromise = Promise.reject(reason);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }

  function defaultReaderClosedPromiseInitializeAsResolved(reader) {
    reader._closedPromise = Promise.resolve(undefined);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }

  function defaultReaderClosedPromiseReject(reader, reason) {
    assert(reader._closedPromise_resolve !== undefined);
    assert(reader._closedPromise_reject !== undefined);

    reader._closedPromise_reject(reason);

    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }

  function defaultReaderClosedPromiseResetToRejected(reader, reason) {
    assert(reader._closedPromise_resolve === undefined);
    assert(reader._closedPromise_reject === undefined);
    reader._closedPromise = Promise.reject(reason);
  }

  function defaultReaderClosedPromiseResolve(reader) {
    assert(reader._closedPromise_resolve !== undefined);
    assert(reader._closedPromise_reject !== undefined);

    reader._closedPromise_resolve(undefined);

    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }

  function byobReaderBrandCheckException(name) {
    return new TypeError('ReadableStreamBYOBReader.prototype.' + name + ' can only be used on a ReadableStreamBYOBReader');
  }

  function defaultControllerBrandCheckException(name) {
    return new TypeError('ReadableStreamDefaultController.prototype.' + name + ' can only be used on a ReadableStreamDefaultController');
  }

  function byobRequestBrandCheckException(name) {
    return new TypeError('ReadableStreamBYOBRequest.prototype.' + name + ' can only be used on a ReadableStreamBYOBRequest');
  }

  function byteStreamControllerBrandCheckException(name) {
    return new TypeError('ReadableByteStreamController.prototype.' + name + ' can only be used on a ReadableByteStreamController');
  }

  function ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise) {
    try {
      Promise.prototype.then.call(promise, undefined, function () {});
    } catch (e) {}
  }
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var transformStream = __w_pdfjs_require__(6);

  var readableStream = __w_pdfjs_require__(4);

  var writableStream = __w_pdfjs_require__(2);

  exports.TransformStream = transformStream.TransformStream;
  exports.ReadableStream = readableStream.ReadableStream;
  exports.IsReadableStreamDisturbed = readableStream.IsReadableStreamDisturbed;
  exports.ReadableStreamDefaultControllerClose = readableStream.ReadableStreamDefaultControllerClose;
  exports.ReadableStreamDefaultControllerEnqueue = readableStream.ReadableStreamDefaultControllerEnqueue;
  exports.ReadableStreamDefaultControllerError = readableStream.ReadableStreamDefaultControllerError;
  exports.ReadableStreamDefaultControllerGetDesiredSize = readableStream.ReadableStreamDefaultControllerGetDesiredSize;
  exports.AcquireWritableStreamDefaultWriter = writableStream.AcquireWritableStreamDefaultWriter;
  exports.IsWritableStream = writableStream.IsWritableStream;
  exports.IsWritableStreamLocked = writableStream.IsWritableStreamLocked;
  exports.WritableStream = writableStream.WritableStream;
  exports.WritableStreamAbort = writableStream.WritableStreamAbort;
  exports.WritableStreamDefaultControllerError = writableStream.WritableStreamDefaultControllerError;
  exports.WritableStreamDefaultWriterCloseWithErrorPropagation = writableStream.WritableStreamDefaultWriterCloseWithErrorPropagation;
  exports.WritableStreamDefaultWriterRelease = writableStream.WritableStreamDefaultWriterRelease;
  exports.WritableStreamDefaultWriterWrite = writableStream.WritableStreamDefaultWriterWrite;
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _require = __w_pdfjs_require__(1),
      assert = _require.assert;

  var _require2 = __w_pdfjs_require__(0),
      InvokeOrNoop = _require2.InvokeOrNoop,
      PromiseInvokeOrPerformFallback = _require2.PromiseInvokeOrPerformFallback,
      PromiseInvokeOrNoop = _require2.PromiseInvokeOrNoop,
      typeIsObject = _require2.typeIsObject;

  var _require3 = __w_pdfjs_require__(4),
      ReadableStream = _require3.ReadableStream,
      ReadableStreamDefaultControllerClose = _require3.ReadableStreamDefaultControllerClose,
      ReadableStreamDefaultControllerEnqueue = _require3.ReadableStreamDefaultControllerEnqueue,
      ReadableStreamDefaultControllerError = _require3.ReadableStreamDefaultControllerError,
      ReadableStreamDefaultControllerGetDesiredSize = _require3.ReadableStreamDefaultControllerGetDesiredSize;

  var _require4 = __w_pdfjs_require__(2),
      WritableStream = _require4.WritableStream,
      WritableStreamDefaultControllerError = _require4.WritableStreamDefaultControllerError;

  function TransformStreamCloseReadable(transformStream) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }

    if (transformStream._readableClosed === true) {
      throw new TypeError('Readable side is already closed');
    }

    TransformStreamCloseReadableInternal(transformStream);
  }

  function TransformStreamEnqueueToReadable(transformStream, chunk) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }

    if (transformStream._readableClosed === true) {
      throw new TypeError('Readable side is already closed');
    }

    var controller = transformStream._readableController;

    try {
      ReadableStreamDefaultControllerEnqueue(controller, chunk);
    } catch (e) {
      transformStream._readableClosed = true;
      TransformStreamErrorIfNeeded(transformStream, e);
      throw transformStream._storedError;
    }

    var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    var maybeBackpressure = desiredSize <= 0;

    if (maybeBackpressure === true && transformStream._backpressure === false) {
      TransformStreamSetBackpressure(transformStream, true);
    }
  }

  function TransformStreamError(transformStream, e) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }

    TransformStreamErrorInternal(transformStream, e);
  }

  function TransformStreamCloseReadableInternal(transformStream) {
    assert(transformStream._errored === false);
    assert(transformStream._readableClosed === false);

    try {
      ReadableStreamDefaultControllerClose(transformStream._readableController);
    } catch (e) {
      assert(false);
    }

    transformStream._readableClosed = true;
  }

  function TransformStreamErrorIfNeeded(transformStream, e) {
    if (transformStream._errored === false) {
      TransformStreamErrorInternal(transformStream, e);
    }
  }

  function TransformStreamErrorInternal(transformStream, e) {
    assert(transformStream._errored === false);
    transformStream._errored = true;
    transformStream._storedError = e;

    if (transformStream._writableDone === false) {
      WritableStreamDefaultControllerError(transformStream._writableController, e);
    }

    if (transformStream._readableClosed === false) {
      ReadableStreamDefaultControllerError(transformStream._readableController, e);
    }
  }

  function TransformStreamReadableReadyPromise(transformStream) {
    assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');

    if (transformStream._backpressure === false) {
      return Promise.resolve();
    }

    assert(transformStream._backpressure === true, '_backpressure should have been initialized');
    return transformStream._backpressureChangePromise;
  }

  function TransformStreamSetBackpressure(transformStream, backpressure) {
    assert(transformStream._backpressure !== backpressure, 'TransformStreamSetBackpressure() should be called only when backpressure is changed');

    if (transformStream._backpressureChangePromise !== undefined) {
      transformStream._backpressureChangePromise_resolve(backpressure);
    }

    transformStream._backpressureChangePromise = new Promise(function (resolve) {
      transformStream._backpressureChangePromise_resolve = resolve;
    });

    transformStream._backpressureChangePromise.then(function (resolution) {
      assert(resolution !== backpressure, '_backpressureChangePromise should be fulfilled only when backpressure is changed');
    });

    transformStream._backpressure = backpressure;
  }

  function TransformStreamDefaultTransform(chunk, transformStreamController) {
    var transformStream = transformStreamController._controlledTransformStream;
    TransformStreamEnqueueToReadable(transformStream, chunk);
    return Promise.resolve();
  }

  function TransformStreamTransform(transformStream, chunk) {
    assert(transformStream._errored === false);
    assert(transformStream._transforming === false);
    assert(transformStream._backpressure === false);
    transformStream._transforming = true;
    var transformer = transformStream._transformer;
    var controller = transformStream._transformStreamController;
    var transformPromise = PromiseInvokeOrPerformFallback(transformer, 'transform', [chunk, controller], TransformStreamDefaultTransform, [chunk, controller]);
    return transformPromise.then(function () {
      transformStream._transforming = false;
      return TransformStreamReadableReadyPromise(transformStream);
    }, function (e) {
      TransformStreamErrorIfNeeded(transformStream, e);
      return Promise.reject(e);
    });
  }

  function IsTransformStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
      return false;
    }

    return true;
  }

  function IsTransformStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
      return false;
    }

    return true;
  }

  var TransformStreamSink = function () {
    function TransformStreamSink(transformStream, startPromise) {
      _classCallCheck(this, TransformStreamSink);

      this._transformStream = transformStream;
      this._startPromise = startPromise;
    }

    _createClass(TransformStreamSink, [{
      key: 'start',
      value: function start(c) {
        var transformStream = this._transformStream;
        transformStream._writableController = c;
        return this._startPromise.then(function () {
          return TransformStreamReadableReadyPromise(transformStream);
        });
      }
    }, {
      key: 'write',
      value: function write(chunk) {
        var transformStream = this._transformStream;
        return TransformStreamTransform(transformStream, chunk);
      }
    }, {
      key: 'abort',
      value: function abort() {
        var transformStream = this._transformStream;
        transformStream._writableDone = true;
        TransformStreamErrorInternal(transformStream, new TypeError('Writable side aborted'));
      }
    }, {
      key: 'close',
      value: function close() {
        var transformStream = this._transformStream;
        assert(transformStream._transforming === false);
        transformStream._writableDone = true;
        var flushPromise = PromiseInvokeOrNoop(transformStream._transformer, 'flush', [transformStream._transformStreamController]);
        return flushPromise.then(function () {
          if (transformStream._errored === true) {
            return Promise.reject(transformStream._storedError);
          }

          if (transformStream._readableClosed === false) {
            TransformStreamCloseReadableInternal(transformStream);
          }

          return Promise.resolve();
        })["catch"](function (r) {
          TransformStreamErrorIfNeeded(transformStream, r);
          return Promise.reject(transformStream._storedError);
        });
      }
    }]);

    return TransformStreamSink;
  }();

  var TransformStreamSource = function () {
    function TransformStreamSource(transformStream, startPromise) {
      _classCallCheck(this, TransformStreamSource);

      this._transformStream = transformStream;
      this._startPromise = startPromise;
    }

    _createClass(TransformStreamSource, [{
      key: 'start',
      value: function start(c) {
        var transformStream = this._transformStream;
        transformStream._readableController = c;
        return this._startPromise.then(function () {
          assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');

          if (transformStream._backpressure === true) {
            return Promise.resolve();
          }

          assert(transformStream._backpressure === false, '_backpressure should have been initialized');
          return transformStream._backpressureChangePromise;
        });
      }
    }, {
      key: 'pull',
      value: function pull() {
        var transformStream = this._transformStream;
        assert(transformStream._backpressure === true, 'pull() should be never called while _backpressure is false');
        assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
        TransformStreamSetBackpressure(transformStream, false);
        return transformStream._backpressureChangePromise;
      }
    }, {
      key: 'cancel',
      value: function cancel() {
        var transformStream = this._transformStream;
        transformStream._readableClosed = true;
        TransformStreamErrorInternal(transformStream, new TypeError('Readable side canceled'));
      }
    }]);

    return TransformStreamSource;
  }();

  var TransformStreamDefaultController = function () {
    function TransformStreamDefaultController(transformStream) {
      _classCallCheck(this, TransformStreamDefaultController);

      if (IsTransformStream(transformStream) === false) {
        throw new TypeError('TransformStreamDefaultController can only be ' + 'constructed with a TransformStream instance');
      }

      if (transformStream._transformStreamController !== undefined) {
        throw new TypeError('TransformStreamDefaultController instances can ' + 'only be created by the TransformStream constructor');
      }

      this._controlledTransformStream = transformStream;
    }

    _createClass(TransformStreamDefaultController, [{
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('enqueue');
        }

        TransformStreamEnqueueToReadable(this._controlledTransformStream, chunk);
      }
    }, {
      key: 'close',
      value: function close() {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('close');
        }

        TransformStreamCloseReadable(this._controlledTransformStream);
      }
    }, {
      key: 'error',
      value: function error(reason) {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('error');
        }

        TransformStreamError(this._controlledTransformStream, reason);
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('desiredSize');
        }

        var transformStream = this._controlledTransformStream;
        var readableController = transformStream._readableController;
        return ReadableStreamDefaultControllerGetDesiredSize(readableController);
      }
    }]);

    return TransformStreamDefaultController;
  }();

  var TransformStream = function () {
    function TransformStream() {
      var transformer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, TransformStream);

      this._transformer = transformer;
      var readableStrategy = transformer.readableStrategy,
          writableStrategy = transformer.writableStrategy;
      this._transforming = false;
      this._errored = false;
      this._storedError = undefined;
      this._writableController = undefined;
      this._readableController = undefined;
      this._transformStreamController = undefined;
      this._writableDone = false;
      this._readableClosed = false;
      this._backpressure = undefined;
      this._backpressureChangePromise = undefined;
      this._backpressureChangePromise_resolve = undefined;
      this._transformStreamController = new TransformStreamDefaultController(this);
      var startPromise_resolve = void 0;
      var startPromise = new Promise(function (resolve) {
        startPromise_resolve = resolve;
      });
      var source = new TransformStreamSource(this, startPromise);
      this._readable = new ReadableStream(source, readableStrategy);
      var sink = new TransformStreamSink(this, startPromise);
      this._writable = new WritableStream(sink, writableStrategy);
      assert(this._writableController !== undefined);
      assert(this._readableController !== undefined);
      var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(this._readableController);
      TransformStreamSetBackpressure(this, desiredSize <= 0);
      var transformStream = this;
      var startResult = InvokeOrNoop(transformer, 'start', [transformStream._transformStreamController]);
      startPromise_resolve(startResult);
      startPromise["catch"](function (e) {
        if (transformStream._errored === false) {
          transformStream._errored = true;
          transformStream._storedError = e;
        }
      });
    }

    _createClass(TransformStream, [{
      key: 'readable',
      get: function get() {
        if (IsTransformStream(this) === false) {
          throw streamBrandCheckException('readable');
        }

        return this._readable;
      }
    }, {
      key: 'writable',
      get: function get() {
        if (IsTransformStream(this) === false) {
          throw streamBrandCheckException('writable');
        }

        return this._writable;
      }
    }]);

    return TransformStream;
  }();

  module.exports = {
    TransformStream: TransformStream
  };

  function defaultControllerBrandCheckException(name) {
    return new TypeError('TransformStreamDefaultController.prototype.' + name + ' can only be used on a TransformStreamDefaultController');
  }

  function streamBrandCheckException(name) {
    return new TypeError('TransformStream.prototype.' + name + ' can only be used on a TransformStream');
  }
}, function (module, exports, __w_pdfjs_require__) {
  module.exports = __w_pdfjs_require__(5);
}]));

/***/ }),
/* 179 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocument = getDocument;
exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
exports.build = exports.version = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFWorker = exports.PDFDataRangeTransport = exports.LoopbackPort = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(180));

var _util = __w_pdfjs_require__(1);

var _display_utils = __w_pdfjs_require__(183);

var _font_loader = __w_pdfjs_require__(184);

var _api_compatibility = __w_pdfjs_require__(185);

var _canvas = __w_pdfjs_require__(186);

var _global_scope = _interopRequireDefault(__w_pdfjs_require__(3));

var _worker_options = __w_pdfjs_require__(188);

var _message_handler = __w_pdfjs_require__(189);

var _metadata = __w_pdfjs_require__(190);

var _transport_stream = __w_pdfjs_require__(192);

var _webgl = __w_pdfjs_require__(193);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DEFAULT_RANGE_CHUNK_SIZE = 65536;
var RENDERING_CANCELLED_TIMEOUT = 100;
var isWorkerDisabled = false;
var fallbackWorkerSrc;
var fakeWorkerFilesLoader = null;
{
  var useRequireEnsure = false;

  if (typeof window === 'undefined') {
    isWorkerDisabled = true;

    if (typeof require.ensure === 'undefined') {
      require.ensure = require('node-ensure');
    }

    useRequireEnsure = true;
  } else if (typeof require !== 'undefined' && typeof require.ensure === 'function') {
    useRequireEnsure = true;
  }

  if (typeof requirejs !== 'undefined' && requirejs.toUrl) {
    fallbackWorkerSrc = requirejs.toUrl('pdfjs-dist/build/pdf.worker.js');
  }

  var dynamicLoaderSupported = typeof requirejs !== 'undefined' && requirejs.load;
  fakeWorkerFilesLoader = useRequireEnsure ? function () {
    return new Promise(function (resolve, reject) {
      require.ensure([], function () {
        try {
          var worker;
          worker = require('./pdf.worker.js');
          resolve(worker.WorkerMessageHandler);
        } catch (ex) {
          reject(ex);
        }
      }, reject, 'pdfjsWorker');
    });
  } : dynamicLoaderSupported ? function () {
    return new Promise(function (resolve, reject) {
      requirejs(['pdfjs-dist/build/pdf.worker'], function (worker) {
        try {
          resolve(worker.WorkerMessageHandler);
        } catch (ex) {
          reject(ex);
        }
      }, reject);
    });
  } : null;

  if (!fallbackWorkerSrc && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && 'currentScript' in document) {
    var pdfjsFilePath = document.currentScript && document.currentScript.src;

    if (pdfjsFilePath) {
      fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, '.worker$1$2');
    }
  }
}
var createPDFNetworkStream;

function setPDFNetworkStreamFactory(pdfNetworkStreamFactory) {
  createPDFNetworkStream = pdfNetworkStreamFactory;
}

function getDocument(src) {
  var task = new PDFDocumentLoadingTask();
  var source;

  if (typeof src === 'string') {
    source = {
      url: src
    };
  } else if ((0, _util.isArrayBuffer)(src)) {
    source = {
      data: src
    };
  } else if (src instanceof PDFDataRangeTransport) {
    source = {
      range: src
    };
  } else {
    if (_typeof(src) !== 'object') {
      throw new Error('Invalid parameter in getDocument, ' + 'need either Uint8Array, string or a parameter object');
    }

    if (!src.url && !src.data && !src.range) {
      throw new Error('Invalid parameter object: need either .data, .range or .url');
    }

    source = src;
  }

  var params = Object.create(null);
  var rangeTransport = null,
      worker = null;

  for (var key in source) {
    if (key === 'url' && typeof window !== 'undefined') {
      params[key] = new URL(source[key], window.location).href;
      continue;
    } else if (key === 'range') {
      rangeTransport = source[key];
      continue;
    } else if (key === 'worker') {
      worker = source[key];
      continue;
    } else if (key === 'data' && !(source[key] instanceof Uint8Array)) {
      var pdfBytes = source[key];

      if (typeof pdfBytes === 'string') {
        params[key] = (0, _util.stringToBytes)(pdfBytes);
      } else if (_typeof(pdfBytes) === 'object' && pdfBytes !== null && !isNaN(pdfBytes.length)) {
        params[key] = new Uint8Array(pdfBytes);
      } else if ((0, _util.isArrayBuffer)(pdfBytes)) {
        params[key] = new Uint8Array(pdfBytes);
      } else {
        throw new Error('Invalid PDF binary data: either typed array, ' + 'string or array-like object is expected in the ' + 'data property.');
      }

      continue;
    }

    params[key] = source[key];
  }

  params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
  params.CMapReaderFactory = params.CMapReaderFactory || _display_utils.DOMCMapReaderFactory;
  params.ignoreErrors = params.stopAtErrors !== true;
  params.pdfBug = params.pdfBug === true;
  var NativeImageDecoderValues = Object.values(_util.NativeImageDecoding);

  if (params.nativeImageDecoderSupport === undefined || !NativeImageDecoderValues.includes(params.nativeImageDecoderSupport)) {
    params.nativeImageDecoderSupport = _api_compatibility.apiCompatibilityParams.nativeImageDecoderSupport || _util.NativeImageDecoding.DECODE;
  }

  if (!Number.isInteger(params.maxImageSize)) {
    params.maxImageSize = -1;
  }

  if (typeof params.isEvalSupported !== 'boolean') {
    params.isEvalSupported = true;
  }

  if (typeof params.disableFontFace !== 'boolean') {
    params.disableFontFace = _api_compatibility.apiCompatibilityParams.disableFontFace || false;
  }

  if (typeof params.disableRange !== 'boolean') {
    params.disableRange = false;
  }

  if (typeof params.disableStream !== 'boolean') {
    params.disableStream = false;
  }

  if (typeof params.disableAutoFetch !== 'boolean') {
    params.disableAutoFetch = false;
  }

  if (typeof params.disableCreateObjectURL !== 'boolean') {
    params.disableCreateObjectURL = _api_compatibility.apiCompatibilityParams.disableCreateObjectURL || false;
  }

  (0, _util.setVerbosityLevel)(params.verbosity);

  if (!worker) {
    var workerParams = {
      verbosity: params.verbosity,
      port: _worker_options.GlobalWorkerOptions.workerPort
    };
    worker = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
    task._worker = worker;
  }

  var docId = task.docId;
  worker.promise.then(function () {
    if (task.destroyed) {
      throw new Error('Loading aborted');
    }

    return _fetchDocument(worker, params, rangeTransport, docId).then(function (workerId) {
      if (task.destroyed) {
        throw new Error('Loading aborted');
      }

      var networkStream;

      if (rangeTransport) {
        networkStream = new _transport_stream.PDFDataTransportStream({
          length: params.length,
          initialData: params.initialData,
          progressiveDone: params.progressiveDone,
          disableRange: params.disableRange,
          disableStream: params.disableStream
        }, rangeTransport);
      } else if (!params.data) {
        networkStream = createPDFNetworkStream({
          url: params.url,
          length: params.length,
          httpHeaders: params.httpHeaders,
          withCredentials: params.withCredentials,
          rangeChunkSize: params.rangeChunkSize,
          disableRange: params.disableRange,
          disableStream: params.disableStream
        });
      }

      var messageHandler = new _message_handler.MessageHandler(docId, workerId, worker.port);
      messageHandler.postMessageTransfers = worker.postMessageTransfers;
      var transport = new WorkerTransport(messageHandler, task, networkStream, params);
      task._transport = transport;
      messageHandler.send('Ready', null);
    });
  })["catch"](task._capability.reject);
  return task;
}

function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
  if (worker.destroyed) {
    return Promise.reject(new Error('Worker was destroyed'));
  }

  if (pdfDataRangeTransport) {
    source.length = pdfDataRangeTransport.length;
    source.initialData = pdfDataRangeTransport.initialData;
    source.progressiveDone = pdfDataRangeTransport.progressiveDone;
  }

  return worker.messageHandler.sendWithPromise('GetDocRequest', {
    docId: docId,
    apiVersion: '2.3.188',
    source: {
      data: source.data,
      url: source.url,
      password: source.password,
      disableAutoFetch: source.disableAutoFetch,
      rangeChunkSize: source.rangeChunkSize,
      length: source.length
    },
    maxImageSize: source.maxImageSize,
    disableFontFace: source.disableFontFace,
    disableCreateObjectURL: source.disableCreateObjectURL,
    postMessageTransfers: worker.postMessageTransfers,
    docBaseUrl: source.docBaseUrl,
    nativeImageDecoderSupport: source.nativeImageDecoderSupport,
    ignoreErrors: source.ignoreErrors,
    isEvalSupported: source.isEvalSupported
  }).then(function (workerId) {
    if (worker.destroyed) {
      throw new Error('Worker was destroyed');
    }

    return workerId;
  });
}

var PDFDocumentLoadingTask = function PDFDocumentLoadingTaskClosure() {
  var nextDocumentId = 0;

  var PDFDocumentLoadingTask =
  /*#__PURE__*/
  function () {
    function PDFDocumentLoadingTask() {
      _classCallCheck(this, PDFDocumentLoadingTask);

      this._capability = (0, _util.createPromiseCapability)();
      this._transport = null;
      this._worker = null;
      this.docId = 'd' + nextDocumentId++;
      this.destroyed = false;
      this.onPassword = null;
      this.onProgress = null;
      this.onUnsupportedFeature = null;
    }

    _createClass(PDFDocumentLoadingTask, [{
      key: "destroy",
      value: function destroy() {
        var _this = this;

        this.destroyed = true;
        var transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
        return transportDestroyed.then(function () {
          _this._transport = null;

          if (_this._worker) {
            _this._worker.destroy();

            _this._worker = null;
          }
        });
      }
    }, {
      key: "then",
      value: function then(onFulfilled, onRejected) {
        (0, _display_utils.deprecated)('PDFDocumentLoadingTask.then method, ' + 'use the `promise` getter instead.');
        return this.promise.then.apply(this.promise, arguments);
      }
    }, {
      key: "promise",
      get: function get() {
        return this._capability.promise;
      }
    }]);

    return PDFDocumentLoadingTask;
  }();

  return PDFDocumentLoadingTask;
}();

var PDFDataRangeTransport =
/*#__PURE__*/
function () {
  function PDFDataRangeTransport(length, initialData) {
    var progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, PDFDataRangeTransport);

    this.length = length;
    this.initialData = initialData;
    this.progressiveDone = progressiveDone;
    this._rangeListeners = [];
    this._progressListeners = [];
    this._progressiveReadListeners = [];
    this._progressiveDoneListeners = [];
    this._readyCapability = (0, _util.createPromiseCapability)();
  }

  _createClass(PDFDataRangeTransport, [{
    key: "addRangeListener",
    value: function addRangeListener(listener) {
      this._rangeListeners.push(listener);
    }
  }, {
    key: "addProgressListener",
    value: function addProgressListener(listener) {
      this._progressListeners.push(listener);
    }
  }, {
    key: "addProgressiveReadListener",
    value: function addProgressiveReadListener(listener) {
      this._progressiveReadListeners.push(listener);
    }
  }, {
    key: "addProgressiveDoneListener",
    value: function addProgressiveDoneListener(listener) {
      this._progressiveDoneListeners.push(listener);
    }
  }, {
    key: "onDataRange",
    value: function onDataRange(begin, chunk) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._rangeListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var listener = _step.value;
          listener(begin, chunk);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "onDataProgress",
    value: function onDataProgress(loaded, total) {
      var _this2 = this;

      this._readyCapability.promise.then(function () {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _this2._progressListeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var listener = _step2.value;
            listener(loaded, total);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      });
    }
  }, {
    key: "onDataProgressiveRead",
    value: function onDataProgressiveRead(chunk) {
      var _this3 = this;

      this._readyCapability.promise.then(function () {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _this3._progressiveReadListeners[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var listener = _step3.value;
            listener(chunk);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      });
    }
  }, {
    key: "onDataProgressiveDone",
    value: function onDataProgressiveDone() {
      var _this4 = this;

      this._readyCapability.promise.then(function () {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = _this4._progressiveDoneListeners[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var listener = _step4.value;
            listener();
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      });
    }
  }, {
    key: "transportReady",
    value: function transportReady() {
      this._readyCapability.resolve();
    }
  }, {
    key: "requestDataRange",
    value: function requestDataRange(begin, end) {
      (0, _util.unreachable)('Abstract method PDFDataRangeTransport.requestDataRange');
    }
  }, {
    key: "abort",
    value: function abort() {}
  }]);

  return PDFDataRangeTransport;
}();

exports.PDFDataRangeTransport = PDFDataRangeTransport;

var PDFDocumentProxy =
/*#__PURE__*/
function () {
  function PDFDocumentProxy(pdfInfo, transport) {
    _classCallCheck(this, PDFDocumentProxy);

    this._pdfInfo = pdfInfo;
    this._transport = transport;
  }

  _createClass(PDFDocumentProxy, [{
    key: "getPage",
    value: function getPage(pageNumber) {
      return this._transport.getPage(pageNumber);
    }
  }, {
    key: "getPageIndex",
    value: function getPageIndex(ref) {
      return this._transport.getPageIndex(ref);
    }
  }, {
    key: "getDestinations",
    value: function getDestinations() {
      return this._transport.getDestinations();
    }
  }, {
    key: "getDestination",
    value: function getDestination(id) {
      return this._transport.getDestination(id);
    }
  }, {
    key: "getPageLabels",
    value: function getPageLabels() {
      return this._transport.getPageLabels();
    }
  }, {
    key: "getPageLayout",
    value: function getPageLayout() {
      return this._transport.getPageLayout();
    }
  }, {
    key: "getPageMode",
    value: function getPageMode() {
      return this._transport.getPageMode();
    }
  }, {
    key: "getViewerPreferences",
    value: function getViewerPreferences() {
      return this._transport.getViewerPreferences();
    }
  }, {
    key: "getOpenActionDestination",
    value: function getOpenActionDestination() {
      return this._transport.getOpenActionDestination();
    }
  }, {
    key: "getAttachments",
    value: function getAttachments() {
      return this._transport.getAttachments();
    }
  }, {
    key: "getJavaScript",
    value: function getJavaScript() {
      return this._transport.getJavaScript();
    }
  }, {
    key: "getOutline",
    value: function getOutline() {
      return this._transport.getOutline();
    }
  }, {
    key: "getPermissions",
    value: function getPermissions() {
      return this._transport.getPermissions();
    }
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      return this._transport.getMetadata();
    }
  }, {
    key: "getData",
    value: function getData() {
      return this._transport.getData();
    }
  }, {
    key: "getDownloadInfo",
    value: function getDownloadInfo() {
      return this._transport.downloadInfoCapability.promise;
    }
  }, {
    key: "getStats",
    value: function getStats() {
      return this._transport.getStats();
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this._transport.startCleanup();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      return this.loadingTask.destroy();
    }
  }, {
    key: "numPages",
    get: function get() {
      return this._pdfInfo.numPages;
    }
  }, {
    key: "fingerprint",
    get: function get() {
      return this._pdfInfo.fingerprint;
    }
  }, {
    key: "loadingParams",
    get: function get() {
      return this._transport.loadingParams;
    }
  }, {
    key: "loadingTask",
    get: function get() {
      return this._transport.loadingTask;
    }
  }]);

  return PDFDocumentProxy;
}();

exports.PDFDocumentProxy = PDFDocumentProxy;

var PDFPageProxy =
/*#__PURE__*/
function () {
  function PDFPageProxy(pageIndex, pageInfo, transport) {
    var pdfBug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, PDFPageProxy);

    this.pageIndex = pageIndex;
    this._pageInfo = pageInfo;
    this._transport = transport;
    this._stats = pdfBug ? new _display_utils.StatTimer() : _display_utils.DummyStatTimer;
    this._pdfBug = pdfBug;
    this.commonObjs = transport.commonObjs;
    this.objs = new PDFObjects();
    this.cleanupAfterRender = false;
    this.pendingCleanup = false;
    this.intentStates = Object.create(null);
    this.destroyed = false;
  }

  _createClass(PDFPageProxy, [{
    key: "getViewport",
    value: function getViewport() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          scale = _ref.scale,
          _ref$rotation = _ref.rotation,
          rotation = _ref$rotation === void 0 ? this.rotate : _ref$rotation,
          _ref$dontFlip = _ref.dontFlip,
          dontFlip = _ref$dontFlip === void 0 ? false : _ref$dontFlip;

      if (arguments.length > 1 || typeof arguments[0] === 'number') {
        (0, _display_utils.deprecated)('getViewport is called with obsolete arguments.');
        scale = arguments[0];
        rotation = typeof arguments[1] === 'number' ? arguments[1] : this.rotate;
        dontFlip = typeof arguments[2] === 'boolean' ? arguments[2] : false;
      }

      return new _display_utils.PageViewport({
        viewBox: this.view,
        scale: scale,
        rotation: rotation,
        dontFlip: dontFlip
      });
    }
  }, {
    key: "getAnnotations",
    value: function getAnnotations() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$intent = _ref2.intent,
          intent = _ref2$intent === void 0 ? null : _ref2$intent;

      if (!this.annotationsPromise || this.annotationsIntent !== intent) {
        this.annotationsPromise = this._transport.getAnnotations(this.pageIndex, intent);
        this.annotationsIntent = intent;
      }

      return this.annotationsPromise;
    }
  }, {
    key: "render",
    value: function render(_ref3) {
      var _this5 = this;

      var canvasContext = _ref3.canvasContext,
          viewport = _ref3.viewport,
          _ref3$intent = _ref3.intent,
          intent = _ref3$intent === void 0 ? 'display' : _ref3$intent,
          _ref3$enableWebGL = _ref3.enableWebGL,
          enableWebGL = _ref3$enableWebGL === void 0 ? false : _ref3$enableWebGL,
          _ref3$renderInteracti = _ref3.renderInteractiveForms,
          renderInteractiveForms = _ref3$renderInteracti === void 0 ? false : _ref3$renderInteracti,
          _ref3$transform = _ref3.transform,
          transform = _ref3$transform === void 0 ? null : _ref3$transform,
          _ref3$imageLayer = _ref3.imageLayer,
          imageLayer = _ref3$imageLayer === void 0 ? null : _ref3$imageLayer,
          _ref3$canvasFactory = _ref3.canvasFactory,
          canvasFactory = _ref3$canvasFactory === void 0 ? null : _ref3$canvasFactory,
          _ref3$background = _ref3.background,
          background = _ref3$background === void 0 ? null : _ref3$background;
      var stats = this._stats;
      stats.time('Overall');
      var renderingIntent = intent === 'print' ? 'print' : 'display';
      this.pendingCleanup = false;

      if (!this.intentStates[renderingIntent]) {
        this.intentStates[renderingIntent] = Object.create(null);
      }

      var intentState = this.intentStates[renderingIntent];

      if (intentState.streamReaderCancelTimeout) {
        clearTimeout(intentState.streamReaderCancelTimeout);
        intentState.streamReaderCancelTimeout = null;
      }

      var canvasFactoryInstance = canvasFactory || new _display_utils.DOMCanvasFactory();
      var webGLContext = new _webgl.WebGLContext({
        enable: enableWebGL
      });

      if (!intentState.displayReadyCapability) {
        intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false
        };
        stats.time('Page Request');

        this._pumpOperatorList({
          pageIndex: this.pageNumber - 1,
          intent: renderingIntent,
          renderInteractiveForms: renderInteractiveForms === true
        });
      }

      var complete = function complete(error) {
        var i = intentState.renderTasks.indexOf(internalRenderTask);

        if (i >= 0) {
          intentState.renderTasks.splice(i, 1);
        }

        if (_this5.cleanupAfterRender || renderingIntent === 'print') {
          _this5.pendingCleanup = true;
        }

        _this5._tryCleanup();

        if (error) {
          internalRenderTask.capability.reject(error);

          _this5._abortOperatorList({
            intentState: intentState,
            reason: error
          });
        } else {
          internalRenderTask.capability.resolve();
        }

        stats.timeEnd('Rendering');
        stats.timeEnd('Overall');
      };

      var internalRenderTask = new InternalRenderTask({
        callback: complete,
        params: {
          canvasContext: canvasContext,
          viewport: viewport,
          transform: transform,
          imageLayer: imageLayer,
          background: background
        },
        objs: this.objs,
        commonObjs: this.commonObjs,
        operatorList: intentState.operatorList,
        pageNumber: this.pageNumber,
        canvasFactory: canvasFactoryInstance,
        webGLContext: webGLContext,
        useRequestAnimationFrame: renderingIntent !== 'print',
        pdfBug: this._pdfBug
      });

      if (!intentState.renderTasks) {
        intentState.renderTasks = [];
      }

      intentState.renderTasks.push(internalRenderTask);
      var renderTask = internalRenderTask.task;
      intentState.displayReadyCapability.promise.then(function (transparency) {
        if (_this5.pendingCleanup) {
          complete();
          return;
        }

        stats.time('Rendering');
        internalRenderTask.initializeGraphics(transparency);
        internalRenderTask.operatorListChanged();
      })["catch"](complete);
      return renderTask;
    }
  }, {
    key: "getOperatorList",
    value: function getOperatorList() {
      function operatorListChanged() {
        if (intentState.operatorList.lastChunk) {
          intentState.opListReadCapability.resolve(intentState.operatorList);
          var i = intentState.renderTasks.indexOf(opListTask);

          if (i >= 0) {
            intentState.renderTasks.splice(i, 1);
          }
        }
      }

      var renderingIntent = 'oplist';

      if (!this.intentStates[renderingIntent]) {
        this.intentStates[renderingIntent] = Object.create(null);
      }

      var intentState = this.intentStates[renderingIntent];
      var opListTask;

      if (!intentState.opListReadCapability) {
        opListTask = {};
        opListTask.operatorListChanged = operatorListChanged;
        intentState.opListReadCapability = (0, _util.createPromiseCapability)();
        intentState.renderTasks = [];
        intentState.renderTasks.push(opListTask);
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false
        };

        this._stats.time('Page Request');

        this._pumpOperatorList({
          pageIndex: this.pageIndex,
          intent: renderingIntent
        });
      }

      return intentState.opListReadCapability.promise;
    }
  }, {
    key: "streamTextContent",
    value: function streamTextContent() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$normalizeWhites = _ref4.normalizeWhitespace,
          normalizeWhitespace = _ref4$normalizeWhites === void 0 ? false : _ref4$normalizeWhites,
          _ref4$disableCombineT = _ref4.disableCombineTextItems,
          disableCombineTextItems = _ref4$disableCombineT === void 0 ? false : _ref4$disableCombineT;

      var TEXT_CONTENT_CHUNK_SIZE = 100;
      return this._transport.messageHandler.sendWithStream('GetTextContent', {
        pageIndex: this.pageNumber - 1,
        normalizeWhitespace: normalizeWhitespace === true,
        combineTextItems: disableCombineTextItems !== true
      }, {
        highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
        size: function size(textContent) {
          return textContent.items.length;
        }
      });
    }
  }, {
    key: "getTextContent",
    value: function getTextContent() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var readableStream = this.streamTextContent(params);
      return new Promise(function (resolve, reject) {
        function pump() {
          reader.read().then(function (_ref5) {
            var _textContent$items;

            var value = _ref5.value,
                done = _ref5.done;

            if (done) {
              resolve(textContent);
              return;
            }

            Object.assign(textContent.styles, value.styles);

            (_textContent$items = textContent.items).push.apply(_textContent$items, _toConsumableArray(value.items));

            pump();
          }, reject);
        }

        var reader = readableStream.getReader();
        var textContent = {
          items: [],
          styles: Object.create(null)
        };
        pump();
      });
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      var _this6 = this;

      this.destroyed = true;
      this._transport.pageCache[this.pageIndex] = null;
      var waitOn = [];
      Object.keys(this.intentStates).forEach(function (intent) {
        var intentState = _this6.intentStates[intent];

        _this6._abortOperatorList({
          intentState: intentState,
          reason: new Error('Page was destroyed.'),
          force: true
        });

        if (intent === 'oplist') {
          return;
        }

        intentState.renderTasks.forEach(function (renderTask) {
          var renderCompleted = renderTask.capability.promise["catch"](function () {});
          waitOn.push(renderCompleted);
          renderTask.cancel();
        });
      });
      this.objs.clear();
      this.annotationsPromise = null;
      this.pendingCleanup = false;
      return Promise.all(waitOn);
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.pendingCleanup = true;

      this._tryCleanup(resetStats);
    }
  }, {
    key: "_tryCleanup",
    value: function _tryCleanup() {
      var _this7 = this;

      var resetStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.pendingCleanup || Object.keys(this.intentStates).some(function (intent) {
        var intentState = _this7.intentStates[intent];
        return intentState.renderTasks.length !== 0 || !intentState.operatorList.lastChunk;
      })) {
        return;
      }

      Object.keys(this.intentStates).forEach(function (intent) {
        delete _this7.intentStates[intent];
      });
      this.objs.clear();
      this.annotationsPromise = null;

      if (resetStats && this._stats instanceof _display_utils.StatTimer) {
        this._stats = new _display_utils.StatTimer();
      }

      this.pendingCleanup = false;
    }
  }, {
    key: "_startRenderPage",
    value: function _startRenderPage(transparency, intent) {
      var intentState = this.intentStates[intent];

      if (!intentState) {
        return;
      }

      this._stats.timeEnd('Page Request');

      if (intentState.displayReadyCapability) {
        intentState.displayReadyCapability.resolve(transparency);
      }
    }
  }, {
    key: "_renderPageChunk",
    value: function _renderPageChunk(operatorListChunk, intentState) {
      for (var i = 0, ii = operatorListChunk.length; i < ii; i++) {
        intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
        intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
      }

      intentState.operatorList.lastChunk = operatorListChunk.lastChunk;

      for (var _i = 0; _i < intentState.renderTasks.length; _i++) {
        intentState.renderTasks[_i].operatorListChanged();
      }

      if (operatorListChunk.lastChunk) {
        this._tryCleanup();
      }
    }
  }, {
    key: "_pumpOperatorList",
    value: function _pumpOperatorList(args) {
      var _this8 = this;

      (0, _util.assert)(args.intent, 'PDFPageProxy._pumpOperatorList: Expected "intent" argument.');

      var readableStream = this._transport.messageHandler.sendWithStream('GetOperatorList', args);

      var reader = readableStream.getReader();
      var intentState = this.intentStates[args.intent];
      intentState.streamReader = reader;

      var pump = function pump() {
        reader.read().then(function (_ref6) {
          var value = _ref6.value,
              done = _ref6.done;

          if (done) {
            intentState.streamReader = null;
            return;
          }

          if (_this8._transport.destroyed) {
            return;
          }

          _this8._renderPageChunk(value, intentState);

          pump();
        }, function (reason) {
          intentState.streamReader = null;

          if (_this8._transport.destroyed) {
            return;
          }

          if (intentState.operatorList) {
            intentState.operatorList.lastChunk = true;

            for (var i = 0; i < intentState.renderTasks.length; i++) {
              intentState.renderTasks[i].operatorListChanged();
            }

            _this8._tryCleanup();
          }

          if (intentState.displayReadyCapability) {
            intentState.displayReadyCapability.reject(reason);
          } else if (intentState.opListReadCapability) {
            intentState.opListReadCapability.reject(reason);
          } else {
            throw reason;
          }
        });
      };

      pump();
    }
  }, {
    key: "_abortOperatorList",
    value: function _abortOperatorList(_ref7) {
      var _this9 = this;

      var intentState = _ref7.intentState,
          reason = _ref7.reason,
          _ref7$force = _ref7.force,
          force = _ref7$force === void 0 ? false : _ref7$force;
      (0, _util.assert)(reason instanceof Error, 'PDFPageProxy._abortOperatorList: Expected "reason" argument.');

      if (!intentState.streamReader) {
        return;
      }

      if (!force) {
        if (intentState.renderTasks.length !== 0) {
          return;
        }

        if (reason instanceof _display_utils.RenderingCancelledException) {
          intentState.streamReaderCancelTimeout = setTimeout(function () {
            _this9._abortOperatorList({
              intentState: intentState,
              reason: reason,
              force: true
            });

            intentState.streamReaderCancelTimeout = null;
          }, RENDERING_CANCELLED_TIMEOUT);
          return;
        }
      }

      intentState.streamReader.cancel(new _util.AbortException(reason && reason.message));
      intentState.streamReader = null;

      if (this._transport.destroyed) {
        return;
      }

      Object.keys(this.intentStates).some(function (intent) {
        if (_this9.intentStates[intent] === intentState) {
          delete _this9.intentStates[intent];
          return true;
        }

        return false;
      });
      this.cleanup();
    }
  }, {
    key: "pageNumber",
    get: function get() {
      return this.pageIndex + 1;
    }
  }, {
    key: "rotate",
    get: function get() {
      return this._pageInfo.rotate;
    }
  }, {
    key: "ref",
    get: function get() {
      return this._pageInfo.ref;
    }
  }, {
    key: "userUnit",
    get: function get() {
      return this._pageInfo.userUnit;
    }
  }, {
    key: "view",
    get: function get() {
      return this._pageInfo.view;
    }
  }, {
    key: "stats",
    get: function get() {
      return this._stats instanceof _display_utils.StatTimer ? this._stats : null;
    }
  }]);

  return PDFPageProxy;
}();

exports.PDFPageProxy = PDFPageProxy;

var LoopbackPort =
/*#__PURE__*/
function () {
  function LoopbackPort() {
    var defer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, LoopbackPort);

    this._listeners = [];
    this._defer = defer;
    this._deferred = Promise.resolve(undefined);
  }

  _createClass(LoopbackPort, [{
    key: "postMessage",
    value: function postMessage(obj, transfers) {
      var _this10 = this;

      function cloneValue(value) {
        if (_typeof(value) !== 'object' || value === null) {
          return value;
        }

        if (cloned.has(value)) {
          return cloned.get(value);
        }

        var buffer, result;

        if ((buffer = value.buffer) && (0, _util.isArrayBuffer)(buffer)) {
          var transferable = transfers && transfers.includes(buffer);

          if (value === buffer) {
            result = value;
          } else if (transferable) {
            result = new value.constructor(buffer, value.byteOffset, value.byteLength);
          } else {
            result = new value.constructor(value);
          }

          cloned.set(value, result);
          return result;
        }

        result = Array.isArray(value) ? [] : {};
        cloned.set(value, result);

        for (var i in value) {
          var desc = void 0,
              p = value;

          while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
            p = Object.getPrototypeOf(p);
          }

          if (typeof desc.value === 'undefined' || typeof desc.value === 'function') {
            continue;
          }

          result[i] = cloneValue(desc.value);
        }

        return result;
      }

      if (!this._defer) {
        this._listeners.forEach(function (listener) {
          listener.call(_this10, {
            data: obj
          });
        });

        return;
      }

      var cloned = new WeakMap();
      var e = {
        data: cloneValue(obj)
      };

      this._deferred.then(function () {
        _this10._listeners.forEach(function (listener) {
          listener.call(_this10, e);
        });
      });
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(name, listener) {
      this._listeners.push(listener);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(name, listener) {
      var i = this._listeners.indexOf(listener);

      this._listeners.splice(i, 1);
    }
  }, {
    key: "terminate",
    value: function terminate() {
      this._listeners.length = 0;
    }
  }]);

  return LoopbackPort;
}();

exports.LoopbackPort = LoopbackPort;

var PDFWorker = function PDFWorkerClosure() {
  var pdfWorkerPorts = new WeakMap();
  var nextFakeWorkerId = 0;
  var fakeWorkerFilesLoadedCapability;

  function _getWorkerSrc() {
    if (_worker_options.GlobalWorkerOptions.workerSrc) {
      return _worker_options.GlobalWorkerOptions.workerSrc;
    }

    if (typeof fallbackWorkerSrc !== 'undefined') {
      return fallbackWorkerSrc;
    }

    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }

  function getMainThreadWorkerMessageHandler() {
    try {
      if (typeof window !== 'undefined') {
        return window.pdfjsWorker && window.pdfjsWorker.WorkerMessageHandler;
      }
    } catch (ex) {}

    return null;
  }

  function setupFakeWorkerGlobal() {
    if (fakeWorkerFilesLoadedCapability) {
      return fakeWorkerFilesLoadedCapability.promise;
    }

    fakeWorkerFilesLoadedCapability = (0, _util.createPromiseCapability)();
    var mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();

    if (mainWorkerMessageHandler) {
      fakeWorkerFilesLoadedCapability.resolve(mainWorkerMessageHandler);
      return fakeWorkerFilesLoadedCapability.promise;
    }

    var loader = fakeWorkerFilesLoader || function () {
      return (0, _display_utils.loadScript)(_getWorkerSrc()).then(function () {
        return window.pdfjsWorker.WorkerMessageHandler;
      });
    };

    loader().then(fakeWorkerFilesLoadedCapability.resolve, fakeWorkerFilesLoadedCapability.reject);
    return fakeWorkerFilesLoadedCapability.promise;
  }

  function createCDNWrapper(url) {
    var wrapper = 'importScripts(\'' + url + '\');';
    return URL.createObjectURL(new Blob([wrapper]));
  }

  var PDFWorker =
  /*#__PURE__*/
  function () {
    function PDFWorker() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref8$name = _ref8.name,
          name = _ref8$name === void 0 ? null : _ref8$name,
          _ref8$port = _ref8.port,
          port = _ref8$port === void 0 ? null : _ref8$port,
          _ref8$verbosity = _ref8.verbosity,
          verbosity = _ref8$verbosity === void 0 ? (0, _util.getVerbosityLevel)() : _ref8$verbosity;

      _classCallCheck(this, PDFWorker);

      if (port && pdfWorkerPorts.has(port)) {
        throw new Error('Cannot use more than one PDFWorker per port');
      }

      this.name = name;
      this.destroyed = false;
      this.postMessageTransfers = true;
      this.verbosity = verbosity;
      this._readyCapability = (0, _util.createPromiseCapability)();
      this._port = null;
      this._webWorker = null;
      this._messageHandler = null;

      if (port) {
        pdfWorkerPorts.set(port, this);

        this._initializeFromPort(port);

        return;
      }

      this._initialize();
    }

    _createClass(PDFWorker, [{
      key: "_initializeFromPort",
      value: function _initializeFromPort(port) {
        this._port = port;
        this._messageHandler = new _message_handler.MessageHandler('main', 'worker', port);

        this._messageHandler.on('ready', function () {});

        this._readyCapability.resolve();
      }
    }, {
      key: "_initialize",
      value: function _initialize() {
        var _this11 = this;

        if (typeof Worker !== 'undefined' && !isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
          var workerSrc = _getWorkerSrc();

          try {
            if (!(0, _util.isSameOrigin)(window.location.href, workerSrc)) {
              workerSrc = createCDNWrapper(new URL(workerSrc, window.location).href);
            }

            var worker = new Worker(workerSrc);
            var messageHandler = new _message_handler.MessageHandler('main', 'worker', worker);

            var terminateEarly = function terminateEarly() {
              worker.removeEventListener('error', onWorkerError);
              messageHandler.destroy();
              worker.terminate();

              if (_this11.destroyed) {
                _this11._readyCapability.reject(new Error('Worker was destroyed'));
              } else {
                _this11._setupFakeWorker();
              }
            };

            var onWorkerError = function onWorkerError() {
              if (!_this11._webWorker) {
                terminateEarly();
              }
            };

            worker.addEventListener('error', onWorkerError);
            messageHandler.on('test', function (data) {
              worker.removeEventListener('error', onWorkerError);

              if (_this11.destroyed) {
                terminateEarly();
                return;
              }

              if (data) {
                _this11._messageHandler = messageHandler;
                _this11._port = worker;
                _this11._webWorker = worker;

                if (!data.supportTransfers) {
                  _this11.postMessageTransfers = false;
                }

                _this11._readyCapability.resolve();

                messageHandler.send('configure', {
                  verbosity: _this11.verbosity
                });
              } else {
                _this11._setupFakeWorker();

                messageHandler.destroy();
                worker.terminate();
              }
            });
            messageHandler.on('ready', function (data) {
              worker.removeEventListener('error', onWorkerError);

              if (_this11.destroyed) {
                terminateEarly();
                return;
              }

              try {
                sendTest();
              } catch (e) {
                _this11._setupFakeWorker();
              }
            });

            var sendTest = function sendTest() {
              var testObj = new Uint8Array([_this11.postMessageTransfers ? 255 : 0]);

              try {
                messageHandler.send('test', testObj, [testObj.buffer]);
              } catch (ex) {
                (0, _util.warn)('Cannot use postMessage transfers.');
                testObj[0] = 0;
                messageHandler.send('test', testObj);
              }
            };

            sendTest();
            return;
          } catch (e) {
            (0, _util.info)('The worker has been disabled.');
          }
        }

        this._setupFakeWorker();
      }
    }, {
      key: "_setupFakeWorker",
      value: function _setupFakeWorker() {
        var _this12 = this;

        if (!isWorkerDisabled) {
          (0, _util.warn)('Setting up fake worker.');
          isWorkerDisabled = true;
        }

        setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
          if (_this12.destroyed) {
            _this12._readyCapability.reject(new Error('Worker was destroyed'));

            return;
          }

          var port = new LoopbackPort();
          _this12._port = port;
          var id = 'fake' + nextFakeWorkerId++;
          var workerHandler = new _message_handler.MessageHandler(id + '_worker', id, port);
          WorkerMessageHandler.setup(workerHandler, port);
          var messageHandler = new _message_handler.MessageHandler(id, id + '_worker', port);
          _this12._messageHandler = messageHandler;

          _this12._readyCapability.resolve();
        })["catch"](function (reason) {
          _this12._readyCapability.reject(new Error("Setting up fake worker failed: \"".concat(reason.message, "\".")));
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.destroyed = true;

        if (this._webWorker) {
          this._webWorker.terminate();

          this._webWorker = null;
        }

        pdfWorkerPorts["delete"](this._port);
        this._port = null;

        if (this._messageHandler) {
          this._messageHandler.destroy();

          this._messageHandler = null;
        }
      }
    }, {
      key: "promise",
      get: function get() {
        return this._readyCapability.promise;
      }
    }, {
      key: "port",
      get: function get() {
        return this._port;
      }
    }, {
      key: "messageHandler",
      get: function get() {
        return this._messageHandler;
      }
    }], [{
      key: "fromPort",
      value: function fromPort(params) {
        if (!params || !params.port) {
          throw new Error('PDFWorker.fromPort - invalid method signature.');
        }

        if (pdfWorkerPorts.has(params.port)) {
          return pdfWorkerPorts.get(params.port);
        }

        return new PDFWorker(params);
      }
    }, {
      key: "getWorkerSrc",
      value: function getWorkerSrc() {
        return _getWorkerSrc();
      }
    }]);

    return PDFWorker;
  }();

  return PDFWorker;
}();

exports.PDFWorker = PDFWorker;

var WorkerTransport =
/*#__PURE__*/
function () {
  function WorkerTransport(messageHandler, loadingTask, networkStream, params) {
    _classCallCheck(this, WorkerTransport);

    this.messageHandler = messageHandler;
    this.loadingTask = loadingTask;
    this.commonObjs = new PDFObjects();
    this.fontLoader = new _font_loader.FontLoader({
      docId: loadingTask.docId,
      onUnsupportedFeature: this._onUnsupportedFeature.bind(this)
    });
    this._params = params;
    this.CMapReaderFactory = new params.CMapReaderFactory({
      baseUrl: params.cMapUrl,
      isCompressed: params.cMapPacked
    });
    this.destroyed = false;
    this.destroyCapability = null;
    this._passwordCapability = null;
    this._networkStream = networkStream;
    this._fullReader = null;
    this._lastProgress = null;
    this.pageCache = [];
    this.pagePromises = [];
    this.downloadInfoCapability = (0, _util.createPromiseCapability)();
    this.setupMessageHandler();
  }

  _createClass(WorkerTransport, [{
    key: "destroy",
    value: function destroy() {
      var _this13 = this;

      if (this.destroyCapability) {
        return this.destroyCapability.promise;
      }

      this.destroyed = true;
      this.destroyCapability = (0, _util.createPromiseCapability)();

      if (this._passwordCapability) {
        this._passwordCapability.reject(new Error('Worker was destroyed during onPassword callback'));
      }

      var waitOn = [];
      this.pageCache.forEach(function (page) {
        if (page) {
          waitOn.push(page._destroy());
        }
      });
      this.pageCache.length = 0;
      this.pagePromises.length = 0;
      var terminated = this.messageHandler.sendWithPromise('Terminate', null);
      waitOn.push(terminated);
      Promise.all(waitOn).then(function () {
        _this13.fontLoader.clear();

        if (_this13._networkStream) {
          _this13._networkStream.cancelAllRequests(new _util.AbortException('Worker was terminated.'));
        }

        if (_this13.messageHandler) {
          _this13.messageHandler.destroy();

          _this13.messageHandler = null;
        }

        _this13.destroyCapability.resolve();
      }, this.destroyCapability.reject);
      return this.destroyCapability.promise;
    }
  }, {
    key: "setupMessageHandler",
    value: function setupMessageHandler() {
      var _this14 = this;

      var messageHandler = this.messageHandler,
          loadingTask = this.loadingTask;
      messageHandler.on('GetReader', function (data, sink) {
        (0, _util.assert)(_this14._networkStream);
        _this14._fullReader = _this14._networkStream.getFullReader();

        _this14._fullReader.onProgress = function (evt) {
          _this14._lastProgress = {
            loaded: evt.loaded,
            total: evt.total
          };
        };

        sink.onPull = function () {
          _this14._fullReader.read().then(function (_ref9) {
            var value = _ref9.value,
                done = _ref9.done;

            if (done) {
              sink.close();
              return;
            }

            (0, _util.assert)((0, _util.isArrayBuffer)(value));
            sink.enqueue(new Uint8Array(value), 1, [value]);
          })["catch"](function (reason) {
            sink.error(reason);
          });
        };

        sink.onCancel = function (reason) {
          _this14._fullReader.cancel(reason);
        };
      });
      messageHandler.on('ReaderHeadersReady', function (data) {
        var headersCapability = (0, _util.createPromiseCapability)();
        var fullReader = _this14._fullReader;
        fullReader.headersReady.then(function () {
          if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
            if (_this14._lastProgress && loadingTask.onProgress) {
              loadingTask.onProgress(_this14._lastProgress);
            }

            fullReader.onProgress = function (evt) {
              if (loadingTask.onProgress) {
                loadingTask.onProgress({
                  loaded: evt.loaded,
                  total: evt.total
                });
              }
            };
          }

          headersCapability.resolve({
            isStreamingSupported: fullReader.isStreamingSupported,
            isRangeSupported: fullReader.isRangeSupported,
            contentLength: fullReader.contentLength
          });
        }, headersCapability.reject);
        return headersCapability.promise;
      });
      messageHandler.on('GetRangeReader', function (data, sink) {
        (0, _util.assert)(_this14._networkStream);

        var rangeReader = _this14._networkStream.getRangeReader(data.begin, data.end);

        if (!rangeReader) {
          sink.close();
          return;
        }

        sink.onPull = function () {
          rangeReader.read().then(function (_ref10) {
            var value = _ref10.value,
                done = _ref10.done;

            if (done) {
              sink.close();
              return;
            }

            (0, _util.assert)((0, _util.isArrayBuffer)(value));
            sink.enqueue(new Uint8Array(value), 1, [value]);
          })["catch"](function (reason) {
            sink.error(reason);
          });
        };

        sink.onCancel = function (reason) {
          rangeReader.cancel(reason);
        };
      });
      messageHandler.on('GetDoc', function (_ref11) {
        var pdfInfo = _ref11.pdfInfo;
        _this14._numPages = pdfInfo.numPages;

        loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, _this14));
      });
      messageHandler.on('PasswordRequest', function (exception) {
        _this14._passwordCapability = (0, _util.createPromiseCapability)();

        if (loadingTask.onPassword) {
          var updatePassword = function updatePassword(password) {
            _this14._passwordCapability.resolve({
              password: password
            });
          };

          try {
            loadingTask.onPassword(updatePassword, exception.code);
          } catch (ex) {
            _this14._passwordCapability.reject(ex);
          }
        } else {
          _this14._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
        }

        return _this14._passwordCapability.promise;
      });
      messageHandler.on('PasswordException', function (exception) {
        loadingTask._capability.reject(new _util.PasswordException(exception.message, exception.code));
      });
      messageHandler.on('InvalidPDF', function (exception) {
        loadingTask._capability.reject(new _util.InvalidPDFException(exception.message));
      });
      messageHandler.on('MissingPDF', function (exception) {
        loadingTask._capability.reject(new _util.MissingPDFException(exception.message));
      });
      messageHandler.on('UnexpectedResponse', function (exception) {
        loadingTask._capability.reject(new _util.UnexpectedResponseException(exception.message, exception.status));
      });
      messageHandler.on('UnknownError', function (exception) {
        loadingTask._capability.reject(new _util.UnknownErrorException(exception.message, exception.details));
      });
      messageHandler.on('DataLoaded', function (data) {
        if (loadingTask.onProgress) {
          loadingTask.onProgress({
            loaded: data.length,
            total: data.length
          });
        }

        _this14.downloadInfoCapability.resolve(data);
      });
      messageHandler.on('StartRenderPage', function (data) {
        if (_this14.destroyed) {
          return;
        }

        var page = _this14.pageCache[data.pageIndex];

        page._startRenderPage(data.transparency, data.intent);
      });
      messageHandler.on('commonobj', function (data) {
        if (_this14.destroyed) {
          return;
        }

        var _data = _slicedToArray(data, 3),
            id = _data[0],
            type = _data[1],
            exportedData = _data[2];

        if (_this14.commonObjs.has(id)) {
          return;
        }

        switch (type) {
          case 'Font':
            var params = _this14._params;

            if ('error' in exportedData) {
              var exportedError = exportedData.error;
              (0, _util.warn)("Error during font loading: ".concat(exportedError));

              _this14.commonObjs.resolve(id, exportedError);

              break;
            }

            var fontRegistry = null;

            if (params.pdfBug && _global_scope["default"].FontInspector && _global_scope["default"].FontInspector.enabled) {
              fontRegistry = {
                registerFont: function registerFont(font, url) {
                  _global_scope["default"]['FontInspector'].fontAdded(font, url);
                }
              };
            }

            var font = new _font_loader.FontFaceObject(exportedData, {
              isEvalSupported: params.isEvalSupported,
              disableFontFace: params.disableFontFace,
              ignoreErrors: params.ignoreErrors,
              onUnsupportedFeature: _this14._onUnsupportedFeature.bind(_this14),
              fontRegistry: fontRegistry
            });

            _this14.fontLoader.bind(font).then(function () {
              _this14.commonObjs.resolve(id, font);
            }, function (reason) {
              messageHandler.sendWithPromise('FontFallback', {
                id: id
              })["finally"](function () {
                _this14.commonObjs.resolve(id, font);
              });
            });

            break;

          case 'FontPath':
          case 'FontType3Res':
            _this14.commonObjs.resolve(id, exportedData);

            break;

          default:
            throw new Error("Got unknown common object type ".concat(type));
        }
      });
      messageHandler.on('obj', function (data) {
        if (_this14.destroyed) {
          return undefined;
        }

        var _data2 = _slicedToArray(data, 4),
            id = _data2[0],
            pageIndex = _data2[1],
            type = _data2[2],
            imageData = _data2[3];

        var pageProxy = _this14.pageCache[pageIndex];

        if (pageProxy.objs.has(id)) {
          return undefined;
        }

        switch (type) {
          case 'JpegStream':
            return new Promise(function (resolve, reject) {
              var img = new Image();

              img.onload = function () {
                resolve(img);
              };

              img.onerror = function () {
                reject(new Error('Error during JPEG image loading'));
                (0, _display_utils.releaseImageResources)(img);
              };

              img.src = imageData;
            }).then(function (img) {
              pageProxy.objs.resolve(id, img);
            });

          case 'Image':
            pageProxy.objs.resolve(id, imageData);
            var MAX_IMAGE_SIZE_TO_STORE = 8000000;

            if (imageData && 'data' in imageData && imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
              pageProxy.cleanupAfterRender = true;
            }

            break;

          default:
            throw new Error("Got unknown object type ".concat(type));
        }

        return undefined;
      });
      messageHandler.on('DocProgress', function (data) {
        if (_this14.destroyed) {
          return;
        }

        if (loadingTask.onProgress) {
          loadingTask.onProgress({
            loaded: data.loaded,
            total: data.total
          });
        }
      });
      messageHandler.on('UnsupportedFeature', this._onUnsupportedFeature.bind(this));
      messageHandler.on('JpegDecode', function (data) {
        if (_this14.destroyed) {
          return Promise.reject(new Error('Worker was destroyed'));
        }

        if (typeof document === 'undefined') {
          return Promise.reject(new Error('"document" is not defined.'));
        }

        var _data3 = _slicedToArray(data, 2),
            imageUrl = _data3[0],
            components = _data3[1];

        if (components !== 3 && components !== 1) {
          return Promise.reject(new Error('Only 3 components or 1 component can be returned'));
        }

        return new Promise(function (resolve, reject) {
          var img = new Image();

          img.onload = function () {
            var width = img.width,
                height = img.height;
            var size = width * height;
            var rgbaLength = size * 4;
            var buf = new Uint8ClampedArray(size * components);
            var tmpCanvas = document.createElement('canvas');
            tmpCanvas.width = width;
            tmpCanvas.height = height;
            var tmpCtx = tmpCanvas.getContext('2d');
            tmpCtx.drawImage(img, 0, 0);
            var data = tmpCtx.getImageData(0, 0, width, height).data;

            if (components === 3) {
              for (var i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
                buf[j] = data[i];
                buf[j + 1] = data[i + 1];
                buf[j + 2] = data[i + 2];
              }
            } else if (components === 1) {
              for (var _i2 = 0, _j = 0; _i2 < rgbaLength; _i2 += 4, _j++) {
                buf[_j] = data[_i2];
              }
            }

            resolve({
              data: buf,
              width: width,
              height: height
            });
            (0, _display_utils.releaseImageResources)(img);
            tmpCanvas.width = 0;
            tmpCanvas.height = 0;
            tmpCanvas = null;
            tmpCtx = null;
          };

          img.onerror = function () {
            reject(new Error('JpegDecode failed to load image'));
            (0, _display_utils.releaseImageResources)(img);
          };

          img.src = imageUrl;
        });
      });
      messageHandler.on('FetchBuiltInCMap', function (data, sink) {
        if (_this14.destroyed) {
          sink.error(new Error('Worker was destroyed'));
          return;
        }

        var fetched = false;

        sink.onPull = function () {
          if (fetched) {
            sink.close();
            return;
          }

          fetched = true;

          _this14.CMapReaderFactory.fetch(data).then(function (builtInCMap) {
            sink.enqueue(builtInCMap, 1, [builtInCMap.cMapData.buffer]);
          })["catch"](function (reason) {
            sink.error(reason);
          });
        };
      });
    }
  }, {
    key: "_onUnsupportedFeature",
    value: function _onUnsupportedFeature(_ref12) {
      var featureId = _ref12.featureId;

      if (this.destroyed) {
        return;
      }

      if (this.loadingTask.onUnsupportedFeature) {
        this.loadingTask.onUnsupportedFeature(featureId);
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.messageHandler.sendWithPromise('GetData', null);
    }
  }, {
    key: "getPage",
    value: function getPage(pageNumber) {
      var _this15 = this;

      if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
        return Promise.reject(new Error('Invalid page request'));
      }

      var pageIndex = pageNumber - 1;

      if (pageIndex in this.pagePromises) {
        return this.pagePromises[pageIndex];
      }

      var promise = this.messageHandler.sendWithPromise('GetPage', {
        pageIndex: pageIndex
      }).then(function (pageInfo) {
        if (_this15.destroyed) {
          throw new Error('Transport destroyed');
        }

        var page = new PDFPageProxy(pageIndex, pageInfo, _this15, _this15._params.pdfBug);
        _this15.pageCache[pageIndex] = page;
        return page;
      });
      this.pagePromises[pageIndex] = promise;
      return promise;
    }
  }, {
    key: "getPageIndex",
    value: function getPageIndex(ref) {
      return this.messageHandler.sendWithPromise('GetPageIndex', {
        ref: ref
      })["catch"](function (reason) {
        return Promise.reject(new Error(reason));
      });
    }
  }, {
    key: "getAnnotations",
    value: function getAnnotations(pageIndex, intent) {
      return this.messageHandler.sendWithPromise('GetAnnotations', {
        pageIndex: pageIndex,
        intent: intent
      });
    }
  }, {
    key: "getDestinations",
    value: function getDestinations() {
      return this.messageHandler.sendWithPromise('GetDestinations', null);
    }
  }, {
    key: "getDestination",
    value: function getDestination(id) {
      if (typeof id !== 'string') {
        return Promise.reject(new Error('Invalid destination request.'));
      }

      return this.messageHandler.sendWithPromise('GetDestination', {
        id: id
      });
    }
  }, {
    key: "getPageLabels",
    value: function getPageLabels() {
      return this.messageHandler.sendWithPromise('GetPageLabels', null);
    }
  }, {
    key: "getPageLayout",
    value: function getPageLayout() {
      return this.messageHandler.sendWithPromise('GetPageLayout', null);
    }
  }, {
    key: "getPageMode",
    value: function getPageMode() {
      return this.messageHandler.sendWithPromise('GetPageMode', null);
    }
  }, {
    key: "getViewerPreferences",
    value: function getViewerPreferences() {
      return this.messageHandler.sendWithPromise('GetViewerPreferences', null);
    }
  }, {
    key: "getOpenActionDestination",
    value: function getOpenActionDestination() {
      return this.messageHandler.sendWithPromise('GetOpenActionDestination', null);
    }
  }, {
    key: "getAttachments",
    value: function getAttachments() {
      return this.messageHandler.sendWithPromise('GetAttachments', null);
    }
  }, {
    key: "getJavaScript",
    value: function getJavaScript() {
      return this.messageHandler.sendWithPromise('GetJavaScript', null);
    }
  }, {
    key: "getOutline",
    value: function getOutline() {
      return this.messageHandler.sendWithPromise('GetOutline', null);
    }
  }, {
    key: "getPermissions",
    value: function getPermissions() {
      return this.messageHandler.sendWithPromise('GetPermissions', null);
    }
  }, {
    key: "getMetadata",
    value: function getMetadata() {
      var _this16 = this;

      return this.messageHandler.sendWithPromise('GetMetadata', null).then(function (results) {
        return {
          info: results[0],
          metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
          contentDispositionFilename: _this16._fullReader ? _this16._fullReader.filename : null
        };
      });
    }
  }, {
    key: "getStats",
    value: function getStats() {
      return this.messageHandler.sendWithPromise('GetStats', null);
    }
  }, {
    key: "startCleanup",
    value: function startCleanup() {
      var _this17 = this;

      this.messageHandler.sendWithPromise('Cleanup', null).then(function () {
        for (var i = 0, ii = _this17.pageCache.length; i < ii; i++) {
          var page = _this17.pageCache[i];

          if (page) {
            page.cleanup();
          }
        }

        _this17.commonObjs.clear();

        _this17.fontLoader.clear();
      });
    }
  }, {
    key: "loadingParams",
    get: function get() {
      var params = this._params;
      return (0, _util.shadow)(this, 'loadingParams', {
        disableAutoFetch: params.disableAutoFetch,
        disableCreateObjectURL: params.disableCreateObjectURL,
        disableFontFace: params.disableFontFace,
        nativeImageDecoderSupport: params.nativeImageDecoderSupport
      });
    }
  }]);

  return WorkerTransport;
}();

var PDFObjects =
/*#__PURE__*/
function () {
  function PDFObjects() {
    _classCallCheck(this, PDFObjects);

    this._objs = Object.create(null);
  }

  _createClass(PDFObjects, [{
    key: "_ensureObj",
    value: function _ensureObj(objId) {
      if (this._objs[objId]) {
        return this._objs[objId];
      }

      return this._objs[objId] = {
        capability: (0, _util.createPromiseCapability)(),
        data: null,
        resolved: false
      };
    }
  }, {
    key: "get",
    value: function get(objId) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (callback) {
        this._ensureObj(objId).capability.promise.then(callback);

        return null;
      }

      var obj = this._objs[objId];

      if (!obj || !obj.resolved) {
        throw new Error("Requesting object that isn't resolved yet ".concat(objId, "."));
      }

      return obj.data;
    }
  }, {
    key: "has",
    value: function has(objId) {
      var obj = this._objs[objId];
      return obj ? obj.resolved : false;
    }
  }, {
    key: "resolve",
    value: function resolve(objId, data) {
      var obj = this._ensureObj(objId);

      obj.resolved = true;
      obj.data = data;
      obj.capability.resolve(data);
    }
  }, {
    key: "clear",
    value: function clear() {
      for (var objId in this._objs) {
        var data = this._objs[objId].data;

        if (typeof Image !== 'undefined' && data instanceof Image) {
          (0, _display_utils.releaseImageResources)(data);
        }
      }

      this._objs = Object.create(null);
    }
  }]);

  return PDFObjects;
}();

var RenderTask =
/*#__PURE__*/
function () {
  function RenderTask(internalRenderTask) {
    _classCallCheck(this, RenderTask);

    this._internalRenderTask = internalRenderTask;
    this.onContinue = null;
  }

  _createClass(RenderTask, [{
    key: "cancel",
    value: function cancel() {
      this._internalRenderTask.cancel();
    }
  }, {
    key: "then",
    value: function then(onFulfilled, onRejected) {
      (0, _display_utils.deprecated)('RenderTask.then method, use the `promise` getter instead.');
      return this.promise.then.apply(this.promise, arguments);
    }
  }, {
    key: "promise",
    get: function get() {
      return this._internalRenderTask.capability.promise;
    }
  }]);

  return RenderTask;
}();

var InternalRenderTask = function InternalRenderTaskClosure() {
  var canvasInRendering = new WeakSet();

  var InternalRenderTask =
  /*#__PURE__*/
  function () {
    function InternalRenderTask(_ref13) {
      var callback = _ref13.callback,
          params = _ref13.params,
          objs = _ref13.objs,
          commonObjs = _ref13.commonObjs,
          operatorList = _ref13.operatorList,
          pageNumber = _ref13.pageNumber,
          canvasFactory = _ref13.canvasFactory,
          webGLContext = _ref13.webGLContext,
          _ref13$useRequestAnim = _ref13.useRequestAnimationFrame,
          useRequestAnimationFrame = _ref13$useRequestAnim === void 0 ? false : _ref13$useRequestAnim,
          _ref13$pdfBug = _ref13.pdfBug,
          pdfBug = _ref13$pdfBug === void 0 ? false : _ref13$pdfBug;

      _classCallCheck(this, InternalRenderTask);

      this.callback = callback;
      this.params = params;
      this.objs = objs;
      this.commonObjs = commonObjs;
      this.operatorListIdx = null;
      this.operatorList = operatorList;
      this.pageNumber = pageNumber;
      this.canvasFactory = canvasFactory;
      this.webGLContext = webGLContext;
      this._pdfBug = pdfBug;
      this.running = false;
      this.graphicsReadyCallback = null;
      this.graphicsReady = false;
      this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== 'undefined';
      this.cancelled = false;
      this.capability = (0, _util.createPromiseCapability)();
      this.task = new RenderTask(this);
      this._continueBound = this._continue.bind(this);
      this._scheduleNextBound = this._scheduleNext.bind(this);
      this._nextBound = this._next.bind(this);
      this._canvas = params.canvasContext.canvas;
    }

    _createClass(InternalRenderTask, [{
      key: "initializeGraphics",
      value: function initializeGraphics() {
        var transparency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (this.cancelled) {
          return;
        }

        if (this._canvas) {
          if (canvasInRendering.has(this._canvas)) {
            throw new Error('Cannot use the same canvas during multiple render() operations. ' + 'Use different canvas or ensure previous operations were ' + 'cancelled or completed.');
          }

          canvasInRendering.add(this._canvas);
        }

        if (this._pdfBug && _global_scope["default"].StepperManager && _global_scope["default"].StepperManager.enabled) {
          this.stepper = _global_scope["default"].StepperManager.create(this.pageNumber - 1);
          this.stepper.init(this.operatorList);
          this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
        }

        var _this$params = this.params,
            canvasContext = _this$params.canvasContext,
            viewport = _this$params.viewport,
            transform = _this$params.transform,
            imageLayer = _this$params.imageLayer,
            background = _this$params.background;
        this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.webGLContext, imageLayer);
        this.gfx.beginDrawing({
          transform: transform,
          viewport: viewport,
          transparency: transparency,
          background: background
        });
        this.operatorListIdx = 0;
        this.graphicsReady = true;

        if (this.graphicsReadyCallback) {
          this.graphicsReadyCallback();
        }
      }
    }, {
      key: "cancel",
      value: function cancel() {
        var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.running = false;
        this.cancelled = true;

        if (this.gfx) {
          this.gfx.endDrawing();
        }

        if (this._canvas) {
          canvasInRendering["delete"](this._canvas);
        }

        this.callback(error || new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this.pageNumber), 'canvas'));
      }
    }, {
      key: "operatorListChanged",
      value: function operatorListChanged() {
        if (!this.graphicsReady) {
          if (!this.graphicsReadyCallback) {
            this.graphicsReadyCallback = this._continueBound;
          }

          return;
        }

        if (this.stepper) {
          this.stepper.updateOperatorList(this.operatorList);
        }

        if (this.running) {
          return;
        }

        this._continue();
      }
    }, {
      key: "_continue",
      value: function _continue() {
        this.running = true;

        if (this.cancelled) {
          return;
        }

        if (this.task.onContinue) {
          this.task.onContinue(this._scheduleNextBound);
        } else {
          this._scheduleNext();
        }
      }
    }, {
      key: "_scheduleNext",
      value: function _scheduleNext() {
        var _this18 = this;

        if (this._useRequestAnimationFrame) {
          window.requestAnimationFrame(function () {
            _this18._nextBound()["catch"](_this18.cancel.bind(_this18));
          });
        } else {
          Promise.resolve().then(this._nextBound)["catch"](this.cancel.bind(this));
        }
      }
    }, {
      key: "_next",
      value: function () {
        var _next2 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator["default"].mark(function _callee() {
          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!this.cancelled) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);

                  if (this.operatorListIdx === this.operatorList.argsArray.length) {
                    this.running = false;

                    if (this.operatorList.lastChunk) {
                      this.gfx.endDrawing();

                      if (this._canvas) {
                        canvasInRendering["delete"](this._canvas);
                      }

                      this.callback();
                    }
                  }

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _next() {
          return _next2.apply(this, arguments);
        }

        return _next;
      }()
    }]);

    return InternalRenderTask;
  }();

  return InternalRenderTask;
}();

var version = '2.3.188';
exports.version = version;
var build = '9596d702';
exports.build = build;

/***/ }),
/* 180 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = __w_pdfjs_require__(181);

/***/ }),
/* 181 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined;
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap;

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator;

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator["return"]) {
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      return info;
    }

    context.delegate = null;
    return ContinueSentinel;
  }

  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator";

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse();
    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
  return exports;
}(( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __w_pdfjs_require__(182)(module)))

/***/ }),
/* 182 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = [];
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 183 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLinkAttributes = addLinkAttributes;
exports.getFilenameFromUrl = getFilenameFromUrl;
exports.isFetchSupported = isFetchSupported;
exports.isValidFetchUrl = isValidFetchUrl;
exports.loadScript = loadScript;
exports.deprecated = deprecated;
exports.releaseImageResources = releaseImageResources;
exports.PDFDateString = exports.DummyStatTimer = exports.StatTimer = exports.DOMSVGFactory = exports.DOMCMapReaderFactory = exports.DOMCanvasFactory = exports.DEFAULT_LINK_REL = exports.LinkTarget = exports.RenderingCancelledException = exports.PageViewport = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(180));

var _util = __w_pdfjs_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_LINK_REL = 'noopener noreferrer nofollow';
exports.DEFAULT_LINK_REL = DEFAULT_LINK_REL;
var SVG_NS = 'http://www.w3.org/2000/svg';

var DOMCanvasFactory =
/*#__PURE__*/
function () {
  function DOMCanvasFactory() {
    _classCallCheck(this, DOMCanvasFactory);
  }

  _createClass(DOMCanvasFactory, [{
    key: "create",
    value: function create(width, height) {
      if (width <= 0 || height <= 0) {
        throw new Error('Invalid canvas size');
      }

      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = width;
      canvas.height = height;
      return {
        canvas: canvas,
        context: context
      };
    }
  }, {
    key: "reset",
    value: function reset(canvasAndContext, width, height) {
      if (!canvasAndContext.canvas) {
        throw new Error('Canvas is not specified');
      }

      if (width <= 0 || height <= 0) {
        throw new Error('Invalid canvas size');
      }

      canvasAndContext.canvas.width = width;
      canvasAndContext.canvas.height = height;
    }
  }, {
    key: "destroy",
    value: function destroy(canvasAndContext) {
      if (!canvasAndContext.canvas) {
        throw new Error('Canvas is not specified');
      }

      canvasAndContext.canvas.width = 0;
      canvasAndContext.canvas.height = 0;
      canvasAndContext.canvas = null;
      canvasAndContext.context = null;
    }
  }]);

  return DOMCanvasFactory;
}();

exports.DOMCanvasFactory = DOMCanvasFactory;

var DOMCMapReaderFactory =
/*#__PURE__*/
function () {
  function DOMCMapReaderFactory(_ref) {
    var _ref$baseUrl = _ref.baseUrl,
        baseUrl = _ref$baseUrl === void 0 ? null : _ref$baseUrl,
        _ref$isCompressed = _ref.isCompressed,
        isCompressed = _ref$isCompressed === void 0 ? false : _ref$isCompressed;

    _classCallCheck(this, DOMCMapReaderFactory);

    this.baseUrl = baseUrl;
    this.isCompressed = isCompressed;
  }

  _createClass(DOMCMapReaderFactory, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(_ref2) {
        var _this = this;

        var name, url, compressionType;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                name = _ref2.name;

                if (this.baseUrl) {
                  _context2.next = 3;
                  break;
                }

                throw new Error('The CMap "baseUrl" parameter must be specified, ensure that ' + 'the "cMapUrl" and "cMapPacked" API parameters are provided.');

              case 3:
                if (name) {
                  _context2.next = 5;
                  break;
                }

                throw new Error('CMap name must be specified.');

              case 5:
                url = this.baseUrl + name + (this.isCompressed ? '.bcmap' : '');
                compressionType = this.isCompressed ? _util.CMapCompressionType.BINARY : _util.CMapCompressionType.NONE;

                if (!(isFetchSupported() && isValidFetchUrl(url, document.baseURI))) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", fetch(url).then(
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee(response) {
                    var cMapData;
                    return _regenerator["default"].wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (response.ok) {
                              _context.next = 2;
                              break;
                            }

                            throw new Error(response.statusText);

                          case 2:
                            if (!_this.isCompressed) {
                              _context.next = 10;
                              break;
                            }

                            _context.t0 = Uint8Array;
                            _context.next = 6;
                            return response.arrayBuffer();

                          case 6:
                            _context.t1 = _context.sent;
                            cMapData = new _context.t0(_context.t1);
                            _context.next = 15;
                            break;

                          case 10:
                            _context.t2 = _util.stringToBytes;
                            _context.next = 13;
                            return response.text();

                          case 13:
                            _context.t3 = _context.sent;
                            cMapData = (0, _context.t2)(_context.t3);

                          case 15:
                            return _context.abrupt("return", {
                              cMapData: cMapData,
                              compressionType: compressionType
                            });

                          case 16:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x3) {
                    return _ref4.apply(this, arguments);
                  };
                }())["catch"](function (reason) {
                  throw new Error("Unable to load ".concat(_this.isCompressed ? 'binary ' : '') + "CMap at: ".concat(url));
                }));

              case 9:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  var request = new XMLHttpRequest();
                  request.open('GET', url, true);

                  if (_this.isCompressed) {
                    request.responseType = 'arraybuffer';
                  }

                  request.onreadystatechange = function () {
                    if (request.readyState !== XMLHttpRequest.DONE) {
                      return;
                    }

                    if (request.status === 200 || request.status === 0) {
                      var cMapData;

                      if (_this.isCompressed && request.response) {
                        cMapData = new Uint8Array(request.response);
                      } else if (!_this.isCompressed && request.responseText) {
                        cMapData = (0, _util.stringToBytes)(request.responseText);
                      }

                      if (cMapData) {
                        resolve({
                          cMapData: cMapData,
                          compressionType: compressionType
                        });
                        return;
                      }
                    }

                    reject(new Error(request.statusText));
                  };

                  request.send(null);
                })["catch"](function (reason) {
                  throw new Error("Unable to load ".concat(_this.isCompressed ? 'binary ' : '') + "CMap at: ".concat(url));
                }));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }())
  }]);

  return DOMCMapReaderFactory;
}();

exports.DOMCMapReaderFactory = DOMCMapReaderFactory;

var DOMSVGFactory =
/*#__PURE__*/
function () {
  function DOMSVGFactory() {
    _classCallCheck(this, DOMSVGFactory);
  }

  _createClass(DOMSVGFactory, [{
    key: "create",
    value: function create(width, height) {
      (0, _util.assert)(width > 0 && height > 0, 'Invalid SVG dimensions');
      var svg = document.createElementNS(SVG_NS, 'svg:svg');
      svg.setAttribute('version', '1.1');
      svg.setAttribute('width', width + 'px');
      svg.setAttribute('height', height + 'px');
      svg.setAttribute('preserveAspectRatio', 'none');
      svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
      return svg;
    }
  }, {
    key: "createElement",
    value: function createElement(type) {
      (0, _util.assert)(typeof type === 'string', 'Invalid SVG element type');
      return document.createElementNS(SVG_NS, type);
    }
  }]);

  return DOMSVGFactory;
}();

exports.DOMSVGFactory = DOMSVGFactory;

var PageViewport =
/*#__PURE__*/
function () {
  function PageViewport(_ref5) {
    var viewBox = _ref5.viewBox,
        scale = _ref5.scale,
        rotation = _ref5.rotation,
        _ref5$offsetX = _ref5.offsetX,
        offsetX = _ref5$offsetX === void 0 ? 0 : _ref5$offsetX,
        _ref5$offsetY = _ref5.offsetY,
        offsetY = _ref5$offsetY === void 0 ? 0 : _ref5$offsetY,
        _ref5$dontFlip = _ref5.dontFlip,
        dontFlip = _ref5$dontFlip === void 0 ? false : _ref5$dontFlip;

    _classCallCheck(this, PageViewport);

    this.viewBox = viewBox;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var centerX = (viewBox[2] + viewBox[0]) / 2;
    var centerY = (viewBox[3] + viewBox[1]) / 2;
    var rotateA, rotateB, rotateC, rotateD;
    rotation = rotation % 360;
    rotation = rotation < 0 ? rotation + 360 : rotation;

    switch (rotation) {
      case 180:
        rotateA = -1;
        rotateB = 0;
        rotateC = 0;
        rotateD = 1;
        break;

      case 90:
        rotateA = 0;
        rotateB = 1;
        rotateC = 1;
        rotateD = 0;
        break;

      case 270:
        rotateA = 0;
        rotateB = -1;
        rotateC = -1;
        rotateD = 0;
        break;

      default:
        rotateA = 1;
        rotateB = 0;
        rotateC = 0;
        rotateD = -1;
        break;
    }

    if (dontFlip) {
      rotateC = -rotateC;
      rotateD = -rotateD;
    }

    var offsetCanvasX, offsetCanvasY;
    var width, height;

    if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = Math.abs(viewBox[3] - viewBox[1]) * scale;
      height = Math.abs(viewBox[2] - viewBox[0]) * scale;
    } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = Math.abs(viewBox[2] - viewBox[0]) * scale;
      height = Math.abs(viewBox[3] - viewBox[1]) * scale;
    }

    this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
    this.width = width;
    this.height = height;
  }

  _createClass(PageViewport, [{
    key: "clone",
    value: function clone() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$scale = _ref6.scale,
          scale = _ref6$scale === void 0 ? this.scale : _ref6$scale,
          _ref6$rotation = _ref6.rotation,
          rotation = _ref6$rotation === void 0 ? this.rotation : _ref6$rotation,
          _ref6$dontFlip = _ref6.dontFlip,
          dontFlip = _ref6$dontFlip === void 0 ? false : _ref6$dontFlip;

      return new PageViewport({
        viewBox: this.viewBox.slice(),
        scale: scale,
        rotation: rotation,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        dontFlip: dontFlip
      });
    }
  }, {
    key: "convertToViewportPoint",
    value: function convertToViewportPoint(x, y) {
      return _util.Util.applyTransform([x, y], this.transform);
    }
  }, {
    key: "convertToViewportRectangle",
    value: function convertToViewportRectangle(rect) {
      var topLeft = _util.Util.applyTransform([rect[0], rect[1]], this.transform);

      var bottomRight = _util.Util.applyTransform([rect[2], rect[3]], this.transform);

      return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
    }
  }, {
    key: "convertToPdfPoint",
    value: function convertToPdfPoint(x, y) {
      return _util.Util.applyInverseTransform([x, y], this.transform);
    }
  }]);

  return PageViewport;
}();

exports.PageViewport = PageViewport;

var RenderingCancelledException = function RenderingCancelledException() {
  function RenderingCancelledException(msg, type) {
    this.message = msg;
    this.type = type;
  }

  RenderingCancelledException.prototype = new Error();
  RenderingCancelledException.prototype.name = 'RenderingCancelledException';
  RenderingCancelledException.constructor = RenderingCancelledException;
  return RenderingCancelledException;
}();

exports.RenderingCancelledException = RenderingCancelledException;
var LinkTarget = {
  NONE: 0,
  SELF: 1,
  BLANK: 2,
  PARENT: 3,
  TOP: 4
};
exports.LinkTarget = LinkTarget;
var LinkTargetStringMap = ['', '_self', '_blank', '_parent', '_top'];

function addLinkAttributes(link) {
  var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      url = _ref7.url,
      target = _ref7.target,
      rel = _ref7.rel,
      _ref7$enabled = _ref7.enabled,
      enabled = _ref7$enabled === void 0 ? true : _ref7$enabled;

  (0, _util.assert)(url && typeof url === 'string', 'addLinkAttributes: A valid "url" parameter must provided.');
  var urlNullRemoved = (0, _util.removeNullCharacters)(url);

  if (enabled) {
    link.href = link.title = urlNullRemoved;
  } else {
    link.href = '';
    link.title = "Disabled: ".concat(urlNullRemoved);

    link.onclick = function () {
      return false;
    };
  }

  var LinkTargetValues = Object.values(LinkTarget);
  var targetIndex = LinkTargetValues.includes(target) ? target : LinkTarget.NONE;
  link.target = LinkTargetStringMap[targetIndex];
  link.rel = typeof rel === 'string' ? rel : DEFAULT_LINK_REL;
}

function getFilenameFromUrl(url) {
  var anchor = url.indexOf('#');
  var query = url.indexOf('?');
  var end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
  return url.substring(url.lastIndexOf('/', end) + 1, end);
}

var StatTimer =
/*#__PURE__*/
function () {
  function StatTimer() {
    var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, StatTimer);

    this.enabled = !!enable;
    this.started = Object.create(null);
    this.times = [];
  }

  _createClass(StatTimer, [{
    key: "time",
    value: function time(name) {
      if (!this.enabled) {
        return;
      }

      if (name in this.started) {
        (0, _util.warn)('Timer is already running for ' + name);
      }

      this.started[name] = Date.now();
    }
  }, {
    key: "timeEnd",
    value: function timeEnd(name) {
      if (!this.enabled) {
        return;
      }

      if (!(name in this.started)) {
        (0, _util.warn)('Timer has not been started for ' + name);
      }

      this.times.push({
        'name': name,
        'start': this.started[name],
        'end': Date.now()
      });
      delete this.started[name];
    }
  }, {
    key: "toString",
    value: function toString() {
      var out = '',
          longest = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.times[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var time = _step.value;
          var name = time.name;

          if (name.length > longest) {
            longest = name.length;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.times[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _time = _step2.value;
          var duration = _time.end - _time.start;
          out += "".concat(_time.name.padEnd(longest), " ").concat(duration, "ms\n");
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return out;
    }
  }]);

  return StatTimer;
}();

exports.StatTimer = StatTimer;

var DummyStatTimer =
/*#__PURE__*/
function () {
  function DummyStatTimer() {
    _classCallCheck(this, DummyStatTimer);

    (0, _util.unreachable)('Cannot initialize DummyStatTimer.');
  }

  _createClass(DummyStatTimer, null, [{
    key: "time",
    value: function time(name) {}
  }, {
    key: "timeEnd",
    value: function timeEnd(name) {}
  }, {
    key: "toString",
    value: function toString() {
      return '';
    }
  }]);

  return DummyStatTimer;
}();

exports.DummyStatTimer = DummyStatTimer;

function isFetchSupported() {
  return typeof fetch !== 'undefined' && typeof Response !== 'undefined' && 'body' in Response.prototype && typeof ReadableStream !== 'undefined';
}

function isValidFetchUrl(url, baseUrl) {
  try {
    var _ref8 = baseUrl ? new URL(url, baseUrl) : new URL(url),
        protocol = _ref8.protocol;

    return protocol === 'http:' || protocol === 'https:';
  } catch (ex) {
    return false;
  }
}

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = resolve;

    script.onerror = function () {
      reject(new Error("Cannot load script at: ".concat(script.src)));
    };

    (document.head || document.documentElement).appendChild(script);
  });
}

function deprecated(details) {
  console.log('Deprecated API usage: ' + details);
}

function releaseImageResources(img) {
  (0, _util.assert)(img instanceof Image, 'Invalid `img` parameter.');
  var url = img.src;

  if (typeof url === 'string' && url.startsWith('blob:') && URL.revokeObjectURL) {
    URL.revokeObjectURL(url);
  }

  img.removeAttribute('src');
}

var pdfDateStringRegex;

var PDFDateString =
/*#__PURE__*/
function () {
  function PDFDateString() {
    _classCallCheck(this, PDFDateString);
  }

  _createClass(PDFDateString, null, [{
    key: "toDateObject",
    value: function toDateObject(input) {
      if (!input || !(0, _util.isString)(input)) {
        return null;
      }

      if (!pdfDateStringRegex) {
        pdfDateStringRegex = new RegExp('^D:' + '(\\d{4})' + '(\\d{2})?' + '(\\d{2})?' + '(\\d{2})?' + '(\\d{2})?' + '(\\d{2})?' + '([Z|+|-])?' + '(\\d{2})?' + '\'?' + '(\\d{2})?' + '\'?');
      }

      var matches = pdfDateStringRegex.exec(input);

      if (!matches) {
        return null;
      }

      var year = parseInt(matches[1], 10);
      var month = parseInt(matches[2], 10);
      month = month >= 1 && month <= 12 ? month - 1 : 0;
      var day = parseInt(matches[3], 10);
      day = day >= 1 && day <= 31 ? day : 1;
      var hour = parseInt(matches[4], 10);
      hour = hour >= 0 && hour <= 23 ? hour : 0;
      var minute = parseInt(matches[5], 10);
      minute = minute >= 0 && minute <= 59 ? minute : 0;
      var second = parseInt(matches[6], 10);
      second = second >= 0 && second <= 59 ? second : 0;
      var universalTimeRelation = matches[7] || 'Z';
      var offsetHour = parseInt(matches[8], 10);
      offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
      var offsetMinute = parseInt(matches[9], 10) || 0;
      offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;

      if (universalTimeRelation === '-') {
        hour += offsetHour;
        minute += offsetMinute;
      } else if (universalTimeRelation === '+') {
        hour -= offsetHour;
        minute -= offsetMinute;
      }

      return new Date(Date.UTC(year, month, day, hour, minute, second));
    }
  }]);

  return PDFDateString;
}();

exports.PDFDateString = PDFDateString;

/***/ }),
/* 184 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontLoader = exports.FontFaceObject = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(180));

var _util = __w_pdfjs_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseFontLoader =
/*#__PURE__*/
function () {
  function BaseFontLoader(_ref) {
    var docId = _ref.docId,
        onUnsupportedFeature = _ref.onUnsupportedFeature;

    _classCallCheck(this, BaseFontLoader);

    if (this.constructor === BaseFontLoader) {
      (0, _util.unreachable)('Cannot initialize BaseFontLoader.');
    }

    this.docId = docId;
    this._onUnsupportedFeature = onUnsupportedFeature;
    this.nativeFontFaces = [];
    this.styleElement = null;
  }

  _createClass(BaseFontLoader, [{
    key: "addNativeFontFace",
    value: function addNativeFontFace(nativeFontFace) {
      this.nativeFontFaces.push(nativeFontFace);
      document.fonts.add(nativeFontFace);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule) {
      var styleElement = this.styleElement;

      if (!styleElement) {
        styleElement = this.styleElement = document.createElement('style');
        styleElement.id = "PDFJS_FONT_STYLE_TAG_".concat(this.docId);
        document.documentElement.getElementsByTagName('head')[0].appendChild(styleElement);
      }

      var styleSheet = styleElement.sheet;
      styleSheet.insertRule(rule, styleSheet.cssRules.length);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.nativeFontFaces.forEach(function (nativeFontFace) {
        document.fonts["delete"](nativeFontFace);
      });
      this.nativeFontFaces.length = 0;

      if (this.styleElement) {
        this.styleElement.remove();
        this.styleElement = null;
      }
    }
  }, {
    key: "bind",
    value: function () {
      var _bind = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(font) {
        var _this = this;

        var nativeFontFace, rule;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(font.attached || font.missingFile)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", undefined);

              case 2:
                font.attached = true;

                if (!this.isFontLoadingAPISupported) {
                  _context.next = 19;
                  break;
                }

                nativeFontFace = font.createNativeFontFace();

                if (!nativeFontFace) {
                  _context.next = 18;
                  break;
                }

                this.addNativeFontFace(nativeFontFace);
                _context.prev = 7;
                _context.next = 10;
                return nativeFontFace.loaded;

              case 10:
                _context.next = 18;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](7);

                this._onUnsupportedFeature({
                  featureId: _util.UNSUPPORTED_FEATURES.font
                });

                (0, _util.warn)("Failed to load font '".concat(nativeFontFace.family, "': '").concat(_context.t0, "'."));
                font.disableFontFace = true;
                throw _context.t0;

              case 18:
                return _context.abrupt("return", undefined);

              case 19:
                rule = font.createFontFaceRule();

                if (!rule) {
                  _context.next = 25;
                  break;
                }

                this.insertRule(rule);

                if (!this.isSyncFontLoadingSupported) {
                  _context.next = 24;
                  break;
                }

                return _context.abrupt("return", undefined);

              case 24:
                return _context.abrupt("return", new Promise(function (resolve) {
                  var request = _this._queueLoadingCallback(resolve);

                  _this._prepareFontLoadEvent([rule], [font], request);
                }));

              case 25:
                return _context.abrupt("return", undefined);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 12]]);
      }));

      function bind(_x) {
        return _bind.apply(this, arguments);
      }

      return bind;
    }()
  }, {
    key: "_queueLoadingCallback",
    value: function _queueLoadingCallback(callback) {
      (0, _util.unreachable)('Abstract method `_queueLoadingCallback`.');
    }
  }, {
    key: "_prepareFontLoadEvent",
    value: function _prepareFontLoadEvent(rules, fontsToLoad, request) {
      (0, _util.unreachable)('Abstract method `_prepareFontLoadEvent`.');
    }
  }, {
    key: "isFontLoadingAPISupported",
    get: function get() {
      (0, _util.unreachable)('Abstract method `isFontLoadingAPISupported`.');
    }
  }, {
    key: "isSyncFontLoadingSupported",
    get: function get() {
      (0, _util.unreachable)('Abstract method `isSyncFontLoadingSupported`.');
    }
  }, {
    key: "_loadTestFont",
    get: function get() {
      (0, _util.unreachable)('Abstract method `_loadTestFont`.');
    }
  }]);

  return BaseFontLoader;
}();

var FontLoader;
exports.FontLoader = FontLoader;
{
  exports.FontLoader = FontLoader =
  /*#__PURE__*/
  function (_BaseFontLoader) {
    _inherits(GenericFontLoader, _BaseFontLoader);

    function GenericFontLoader(docId) {
      var _this2;

      _classCallCheck(this, GenericFontLoader);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(GenericFontLoader).call(this, docId));
      _this2.loadingContext = {
        requests: [],
        nextRequestId: 0
      };
      _this2.loadTestFontId = 0;
      return _this2;
    }

    _createClass(GenericFontLoader, [{
      key: "_queueLoadingCallback",
      value: function _queueLoadingCallback(callback) {
        function completeRequest() {
          (0, _util.assert)(!request.done, 'completeRequest() cannot be called twice.');
          request.done = true;

          while (context.requests.length > 0 && context.requests[0].done) {
            var otherRequest = context.requests.shift();
            setTimeout(otherRequest.callback, 0);
          }
        }

        var context = this.loadingContext;
        var request = {
          id: "pdfjs-font-loading-".concat(context.nextRequestId++),
          done: false,
          complete: completeRequest,
          callback: callback
        };
        context.requests.push(request);
        return request;
      }
    }, {
      key: "_prepareFontLoadEvent",
      value: function _prepareFontLoadEvent(rules, fonts, request) {
        function int32(data, offset) {
          return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
        }

        function spliceString(s, offset, remove, insert) {
          var chunk1 = s.substring(0, offset);
          var chunk2 = s.substring(offset + remove);
          return chunk1 + insert + chunk2;
        }

        var i, ii;
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        var ctx = canvas.getContext('2d');
        var called = 0;

        function isFontReady(name, callback) {
          called++;

          if (called > 30) {
            (0, _util.warn)('Load test font never loaded.');
            callback();
            return;
          }

          ctx.font = '30px ' + name;
          ctx.fillText('.', 0, 20);
          var imageData = ctx.getImageData(0, 0, 1, 1);

          if (imageData.data[3] > 0) {
            callback();
            return;
          }

          setTimeout(isFontReady.bind(null, name, callback));
        }

        var loadTestFontId = "lt".concat(Date.now()).concat(this.loadTestFontId++);
        var data = this._loadTestFont;
        var COMMENT_OFFSET = 976;
        data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
        var CFF_CHECKSUM_OFFSET = 16;
        var XXXX_VALUE = 0x58585858;
        var checksum = int32(data, CFF_CHECKSUM_OFFSET);

        for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
          checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
        }

        if (i < loadTestFontId.length) {
          checksum = checksum - XXXX_VALUE + int32(loadTestFontId + 'XXX', i) | 0;
        }

        data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util.string32)(checksum));
        var url = "url(data:font/opentype;base64,".concat(btoa(data), ");");
        var rule = "@font-face {font-family:\"".concat(loadTestFontId, "\";src:").concat(url, "}");
        this.insertRule(rule);
        var names = [];

        for (i = 0, ii = fonts.length; i < ii; i++) {
          names.push(fonts[i].loadedName);
        }

        names.push(loadTestFontId);
        var div = document.createElement('div');
        div.setAttribute('style', 'visibility: hidden;' + 'width: 10px; height: 10px;' + 'position: absolute; top: 0px; left: 0px;');

        for (i = 0, ii = names.length; i < ii; ++i) {
          var span = document.createElement('span');
          span.textContent = 'Hi';
          span.style.fontFamily = names[i];
          div.appendChild(span);
        }

        document.body.appendChild(div);
        isFontReady(loadTestFontId, function () {
          document.body.removeChild(div);
          request.complete();
        });
      }
    }, {
      key: "isFontLoadingAPISupported",
      get: function get() {
        var supported = typeof document !== 'undefined' && !!document.fonts;

        if (supported && typeof navigator !== 'undefined') {
          var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);

          if (m && m[1] < 63) {
            supported = false;
          }
        }

        return (0, _util.shadow)(this, 'isFontLoadingAPISupported', supported);
      }
    }, {
      key: "isSyncFontLoadingSupported",
      get: function get() {
        var supported = false;

        if (typeof navigator === 'undefined') {
          supported = true;
        } else {
          var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);

          if (m && m[1] >= 14) {
            supported = true;
          }
        }

        return (0, _util.shadow)(this, 'isSyncFontLoadingSupported', supported);
      }
    }, {
      key: "_loadTestFont",
      get: function get() {
        var getLoadTestFont = function getLoadTestFont() {
          return atob('T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA' + 'FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA' + 'ALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgA' + 'AAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1' + 'AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD' + '6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACM' + 'AooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4D' + 'IP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAA' + 'AAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUA' + 'AQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgAB' + 'AAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABY' + 'AAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAA' + 'AC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAA' + 'AAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQAC' + 'AQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3' + 'Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTj' + 'FQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==');
        };

        return (0, _util.shadow)(this, '_loadTestFont', getLoadTestFont());
      }
    }]);

    return GenericFontLoader;
  }(BaseFontLoader);
}
var IsEvalSupportedCached = {
  get value() {
    return (0, _util.shadow)(this, 'value', (0, _util.isEvalSupported)());
  }

};

var FontFaceObject =
/*#__PURE__*/
function () {
  function FontFaceObject(translatedData, _ref2) {
    var _ref2$isEvalSupported = _ref2.isEvalSupported,
        isEvalSupported = _ref2$isEvalSupported === void 0 ? true : _ref2$isEvalSupported,
        _ref2$disableFontFace = _ref2.disableFontFace,
        disableFontFace = _ref2$disableFontFace === void 0 ? false : _ref2$disableFontFace,
        _ref2$ignoreErrors = _ref2.ignoreErrors,
        ignoreErrors = _ref2$ignoreErrors === void 0 ? false : _ref2$ignoreErrors,
        _ref2$onUnsupportedFe = _ref2.onUnsupportedFeature,
        onUnsupportedFeature = _ref2$onUnsupportedFe === void 0 ? null : _ref2$onUnsupportedFe,
        _ref2$fontRegistry = _ref2.fontRegistry,
        fontRegistry = _ref2$fontRegistry === void 0 ? null : _ref2$fontRegistry;

    _classCallCheck(this, FontFaceObject);

    this.compiledGlyphs = Object.create(null);

    for (var i in translatedData) {
      this[i] = translatedData[i];
    }

    this.isEvalSupported = isEvalSupported !== false;
    this.disableFontFace = disableFontFace === true;
    this.ignoreErrors = ignoreErrors === true;
    this._onUnsupportedFeature = onUnsupportedFeature;
    this.fontRegistry = fontRegistry;
  }

  _createClass(FontFaceObject, [{
    key: "createNativeFontFace",
    value: function createNativeFontFace() {
      if (!this.data || this.disableFontFace) {
        return null;
      }

      var nativeFontFace = new FontFace(this.loadedName, this.data, {});

      if (this.fontRegistry) {
        this.fontRegistry.registerFont(this);
      }

      return nativeFontFace;
    }
  }, {
    key: "createFontFaceRule",
    value: function createFontFaceRule() {
      if (!this.data || this.disableFontFace) {
        return null;
      }

      var data = (0, _util.bytesToString)(new Uint8Array(this.data));
      var url = "url(data:".concat(this.mimetype, ";base64,").concat(btoa(data), ");");
      var rule = "@font-face {font-family:\"".concat(this.loadedName, "\";src:").concat(url, "}");

      if (this.fontRegistry) {
        this.fontRegistry.registerFont(this, url);
      }

      return rule;
    }
  }, {
    key: "getPathGenerator",
    value: function getPathGenerator(objs, character) {
      if (this.compiledGlyphs[character] !== undefined) {
        return this.compiledGlyphs[character];
      }

      var cmds, current;

      try {
        cmds = objs.get(this.loadedName + '_path_' + character);
      } catch (ex) {
        if (!this.ignoreErrors) {
          throw ex;
        }

        if (this._onUnsupportedFeature) {
          this._onUnsupportedFeature({
            featureId: _util.UNSUPPORTED_FEATURES.font
          });
        }

        (0, _util.warn)("getPathGenerator - ignoring character: \"".concat(ex, "\"."));
        return this.compiledGlyphs[character] = function (c, size) {};
      }

      if (this.isEvalSupported && IsEvalSupportedCached.value) {
        var args,
            js = '';

        for (var i = 0, ii = cmds.length; i < ii; i++) {
          current = cmds[i];

          if (current.args !== undefined) {
            args = current.args.join(',');
          } else {
            args = '';
          }

          js += 'c.' + current.cmd + '(' + args + ');\n';
        }

        return this.compiledGlyphs[character] = new Function('c', 'size', js);
      }

      return this.compiledGlyphs[character] = function (c, size) {
        for (var _i = 0, _ii = cmds.length; _i < _ii; _i++) {
          current = cmds[_i];

          if (current.cmd === 'scale') {
            current.args = [size, -size];
          }

          c[current.cmd].apply(c, current.args);
        }
      };
    }
  }]);

  return FontFaceObject;
}();

exports.FontFaceObject = FontFaceObject;

/***/ }),
/* 185 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var compatibilityParams = Object.create(null);
{
  var isNodeJS = __w_pdfjs_require__(4);

  var userAgent = typeof navigator !== 'undefined' && navigator.userAgent || '';
  var isIE = /Trident/.test(userAgent);
  var isIOSChrome = /CriOS/.test(userAgent);

  (function checkOnBlobSupport() {
    if (isIE || isIOSChrome) {
      compatibilityParams.disableCreateObjectURL = true;
    }
  })();

  (function checkFontFaceAndImage() {
    if (isNodeJS()) {
      compatibilityParams.disableFontFace = true;
      compatibilityParams.nativeImageDecoderSupport = 'none';
    }
  })();
}
exports.apiCompatibilityParams = Object.freeze(compatibilityParams);

/***/ }),
/* 186 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasGraphics = void 0;

var _util = __w_pdfjs_require__(1);

var _pattern_helper = __w_pdfjs_require__(187);

var MIN_FONT_SIZE = 16;
var MAX_FONT_SIZE = 100;
var MAX_GROUP_SIZE = 4096;
var MIN_WIDTH_FACTOR = 0.65;
var COMPILE_TYPE3_GLYPHS = true;
var MAX_SIZE_TO_COMPILE = 1000;
var FULL_CHUNK_HEIGHT = 16;
var IsLittleEndianCached = {
  get value() {
    return (0, _util.shadow)(IsLittleEndianCached, 'value', (0, _util.isLittleEndian)());
  }

};

function addContextCurrentTransform(ctx) {
  if (!ctx.mozCurrentTransform) {
    ctx._originalSave = ctx.save;
    ctx._originalRestore = ctx.restore;
    ctx._originalRotate = ctx.rotate;
    ctx._originalScale = ctx.scale;
    ctx._originalTranslate = ctx.translate;
    ctx._originalTransform = ctx.transform;
    ctx._originalSetTransform = ctx.setTransform;
    ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
    ctx._transformStack = [];
    Object.defineProperty(ctx, 'mozCurrentTransform', {
      get: function getCurrentTransform() {
        return this._transformMatrix;
      }
    });
    Object.defineProperty(ctx, 'mozCurrentTransformInverse', {
      get: function getCurrentTransformInverse() {
        var m = this._transformMatrix;
        var a = m[0],
            b = m[1],
            c = m[2],
            d = m[3],
            e = m[4],
            f = m[5];
        var ad_bc = a * d - b * c;
        var bc_ad = b * c - a * d;
        return [d / ad_bc, b / bc_ad, c / bc_ad, a / ad_bc, (d * e - c * f) / bc_ad, (b * e - a * f) / ad_bc];
      }
    });

    ctx.save = function ctxSave() {
      var old = this._transformMatrix;

      this._transformStack.push(old);

      this._transformMatrix = old.slice(0, 6);

      this._originalSave();
    };

    ctx.restore = function ctxRestore() {
      var prev = this._transformStack.pop();

      if (prev) {
        this._transformMatrix = prev;

        this._originalRestore();
      }
    };

    ctx.translate = function ctxTranslate(x, y) {
      var m = this._transformMatrix;
      m[4] = m[0] * x + m[2] * y + m[4];
      m[5] = m[1] * x + m[3] * y + m[5];

      this._originalTranslate(x, y);
    };

    ctx.scale = function ctxScale(x, y) {
      var m = this._transformMatrix;
      m[0] = m[0] * x;
      m[1] = m[1] * x;
      m[2] = m[2] * y;
      m[3] = m[3] * y;

      this._originalScale(x, y);
    };

    ctx.transform = function ctxTransform(a, b, c, d, e, f) {
      var m = this._transformMatrix;
      this._transformMatrix = [m[0] * a + m[2] * b, m[1] * a + m[3] * b, m[0] * c + m[2] * d, m[1] * c + m[3] * d, m[0] * e + m[2] * f + m[4], m[1] * e + m[3] * f + m[5]];

      ctx._originalTransform(a, b, c, d, e, f);
    };

    ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
      this._transformMatrix = [a, b, c, d, e, f];

      ctx._originalSetTransform(a, b, c, d, e, f);
    };

    ctx.rotate = function ctxRotate(angle) {
      var cosValue = Math.cos(angle);
      var sinValue = Math.sin(angle);
      var m = this._transformMatrix;
      this._transformMatrix = [m[0] * cosValue + m[2] * sinValue, m[1] * cosValue + m[3] * sinValue, m[0] * -sinValue + m[2] * cosValue, m[1] * -sinValue + m[3] * cosValue, m[4], m[5]];

      this._originalRotate(angle);
    };
  }
}

var CachedCanvases = function CachedCanvasesClosure() {
  function CachedCanvases(canvasFactory) {
    this.canvasFactory = canvasFactory;
    this.cache = Object.create(null);
  }

  CachedCanvases.prototype = {
    getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
      var canvasEntry;

      if (this.cache[id] !== undefined) {
        canvasEntry = this.cache[id];
        this.canvasFactory.reset(canvasEntry, width, height);
        canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
      } else {
        canvasEntry = this.canvasFactory.create(width, height);
        this.cache[id] = canvasEntry;
      }

      if (trackTransform) {
        addContextCurrentTransform(canvasEntry.context);
      }

      return canvasEntry;
    },
    clear: function clear() {
      for (var id in this.cache) {
        var canvasEntry = this.cache[id];
        this.canvasFactory.destroy(canvasEntry);
        delete this.cache[id];
      }
    }
  };
  return CachedCanvases;
}();

function compileType3Glyph(imgData) {
  var POINT_TO_PROCESS_LIMIT = 1000;
  var width = imgData.width,
      height = imgData.height;
  var i,
      j,
      j0,
      width1 = width + 1;
  var points = new Uint8Array(width1 * (height + 1));
  var POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
  var lineSize = width + 7 & ~7,
      data0 = imgData.data;
  var data = new Uint8Array(lineSize * height),
      pos = 0,
      ii;

  for (i = 0, ii = data0.length; i < ii; i++) {
    var mask = 128,
        elem = data0[i];

    while (mask > 0) {
      data[pos++] = elem & mask ? 0 : 255;
      mask >>= 1;
    }
  }

  var count = 0;
  pos = 0;

  if (data[pos] !== 0) {
    points[0] = 1;
    ++count;
  }

  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j] = data[pos] ? 2 : 1;
      ++count;
    }

    pos++;
  }

  if (data[pos] !== 0) {
    points[j] = 2;
    ++count;
  }

  for (i = 1; i < height; i++) {
    pos = i * lineSize;
    j0 = i * width1;

    if (data[pos - lineSize] !== data[pos]) {
      points[j0] = data[pos] ? 1 : 8;
      ++count;
    }

    var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);

    for (j = 1; j < width; j++) {
      sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);

      if (POINT_TYPES[sum]) {
        points[j0 + j] = POINT_TYPES[sum];
        ++count;
      }

      pos++;
    }

    if (data[pos - lineSize] !== data[pos]) {
      points[j0 + j] = data[pos] ? 2 : 4;
      ++count;
    }

    if (count > POINT_TO_PROCESS_LIMIT) {
      return null;
    }
  }

  pos = lineSize * (height - 1);
  j0 = i * width1;

  if (data[pos] !== 0) {
    points[j0] = 8;
    ++count;
  }

  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j0 + j] = data[pos] ? 4 : 8;
      ++count;
    }

    pos++;
  }

  if (data[pos] !== 0) {
    points[j0 + j] = 4;
    ++count;
  }

  if (count > POINT_TO_PROCESS_LIMIT) {
    return null;
  }

  var steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
  var outlines = [];

  for (i = 0; count && i <= height; i++) {
    var p = i * width1;
    var end = p + width;

    while (p < end && !points[p]) {
      p++;
    }

    if (p === end) {
      continue;
    }

    var coords = [p % width1, i];
    var type = points[p],
        p0 = p,
        pp;

    do {
      var step = steps[type];

      do {
        p += step;
      } while (!points[p]);

      pp = points[p];

      if (pp !== 5 && pp !== 10) {
        type = pp;
        points[p] = 0;
      } else {
        type = pp & 0x33 * type >> 4;
        points[p] &= type >> 2 | type << 2;
      }

      coords.push(p % width1);
      coords.push(p / width1 | 0);

      if (!points[p]) {
        --count;
      }
    } while (p0 !== p);

    outlines.push(coords);
    --i;
  }

  var drawOutline = function drawOutline(c) {
    c.save();
    c.scale(1 / width, -1 / height);
    c.translate(0, -height);
    c.beginPath();

    for (var i = 0, ii = outlines.length; i < ii; i++) {
      var o = outlines[i];
      c.moveTo(o[0], o[1]);

      for (var j = 2, jj = o.length; j < jj; j += 2) {
        c.lineTo(o[j], o[j + 1]);
      }
    }

    c.fill();
    c.beginPath();
    c.restore();
  };

  return drawOutline;
}

var CanvasExtraState = function CanvasExtraStateClosure() {
  function CanvasExtraState() {
    this.alphaIsShape = false;
    this.fontSize = 0;
    this.fontSizeScale = 1;
    this.textMatrix = _util.IDENTITY_MATRIX;
    this.textMatrixScale = 1;
    this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
    this.leading = 0;
    this.x = 0;
    this.y = 0;
    this.lineX = 0;
    this.lineY = 0;
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRenderingMode = _util.TextRenderingMode.FILL;
    this.textRise = 0;
    this.fillColor = '#000000';
    this.strokeColor = '#000000';
    this.patternFill = false;
    this.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.activeSMask = null;
    this.resumeSMaskCtx = null;
  }

  CanvasExtraState.prototype = {
    clone: function CanvasExtraState_clone() {
      return Object.create(this);
    },
    setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
      this.x = x;
      this.y = y;
    }
  };
  return CanvasExtraState;
}();

var CanvasGraphics = function CanvasGraphicsClosure() {
  var EXECUTION_TIME = 15;
  var EXECUTION_STEPS = 10;

  function CanvasGraphics(canvasCtx, commonObjs, objs, canvasFactory, webGLContext, imageLayer) {
    this.ctx = canvasCtx;
    this.current = new CanvasExtraState();
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    this.commonObjs = commonObjs;
    this.objs = objs;
    this.canvasFactory = canvasFactory;
    this.webGLContext = webGLContext;
    this.imageLayer = imageLayer;
    this.groupStack = [];
    this.processingType3 = null;
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.smaskCounter = 0;
    this.tempSMask = null;
    this.cachedCanvases = new CachedCanvases(this.canvasFactory);

    if (canvasCtx) {
      addContextCurrentTransform(canvasCtx);
    }

    this._cachedGetSinglePixelWidth = null;
  }

  function putBinaryImageData(ctx, imgData) {
    if (typeof ImageData !== 'undefined' && imgData instanceof ImageData) {
      ctx.putImageData(imgData, 0, 0);
      return;
    }

    var height = imgData.height,
        width = imgData.width;
    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    var srcPos = 0,
        destPos;
    var src = imgData.data;
    var dest = chunkImgData.data;
    var i, j, thisChunkHeight, elemsInThisChunk;

    if (imgData.kind === _util.ImageKind.GRAYSCALE_1BPP) {
      var srcLength = src.byteLength;
      var dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
      var dest32DataLength = dest32.length;
      var fullSrcDiff = width + 7 >> 3;
      var white = 0xFFFFFFFF;
      var black = IsLittleEndianCached.value ? 0xFF000000 : 0x000000FF;

      for (i = 0; i < totalChunks; i++) {
        thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
        destPos = 0;

        for (j = 0; j < thisChunkHeight; j++) {
          var srcDiff = srcLength - srcPos;
          var k = 0;
          var kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
          var kEndUnrolled = kEnd & ~7;
          var mask = 0;
          var srcByte = 0;

          for (; k < kEndUnrolled; k += 8) {
            srcByte = src[srcPos++];
            dest32[destPos++] = srcByte & 128 ? white : black;
            dest32[destPos++] = srcByte & 64 ? white : black;
            dest32[destPos++] = srcByte & 32 ? white : black;
            dest32[destPos++] = srcByte & 16 ? white : black;
            dest32[destPos++] = srcByte & 8 ? white : black;
            dest32[destPos++] = srcByte & 4 ? white : black;
            dest32[destPos++] = srcByte & 2 ? white : black;
            dest32[destPos++] = srcByte & 1 ? white : black;
          }

          for (; k < kEnd; k++) {
            if (mask === 0) {
              srcByte = src[srcPos++];
              mask = 128;
            }

            dest32[destPos++] = srcByte & mask ? white : black;
            mask >>= 1;
          }
        }

        while (destPos < dest32DataLength) {
          dest32[destPos++] = 0;
        }

        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else if (imgData.kind === _util.ImageKind.RGBA_32BPP) {
      j = 0;
      elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;

      for (i = 0; i < fullChunks; i++) {
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        srcPos += elemsInThisChunk;
        ctx.putImageData(chunkImgData, 0, j);
        j += FULL_CHUNK_HEIGHT;
      }

      if (i < totalChunks) {
        elemsInThisChunk = width * partialChunkHeight * 4;
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        ctx.putImageData(chunkImgData, 0, j);
      }
    } else if (imgData.kind === _util.ImageKind.RGB_24BPP) {
      thisChunkHeight = FULL_CHUNK_HEIGHT;
      elemsInThisChunk = width * thisChunkHeight;

      for (i = 0; i < totalChunks; i++) {
        if (i >= fullChunks) {
          thisChunkHeight = partialChunkHeight;
          elemsInThisChunk = width * thisChunkHeight;
        }

        destPos = 0;

        for (j = elemsInThisChunk; j--;) {
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = 255;
        }

        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else {
      throw new Error("bad image kind: ".concat(imgData.kind));
    }
  }

  function putBinaryImageMask(ctx, imgData) {
    var height = imgData.height,
        width = imgData.width;
    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    var srcPos = 0;
    var src = imgData.data;
    var dest = chunkImgData.data;

    for (var i = 0; i < totalChunks; i++) {
      var thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
      var destPos = 3;

      for (var j = 0; j < thisChunkHeight; j++) {
        var mask = 0;

        for (var k = 0; k < width; k++) {
          if (!mask) {
            var elem = src[srcPos++];
            mask = 128;
          }

          dest[destPos] = elem & mask ? 0 : 255;
          destPos += 4;
          mask >>= 1;
        }
      }

      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  }

  function copyCtxState(sourceCtx, destCtx) {
    var properties = ['strokeStyle', 'fillStyle', 'fillRule', 'globalAlpha', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'globalCompositeOperation', 'font'];

    for (var i = 0, ii = properties.length; i < ii; i++) {
      var property = properties[i];

      if (sourceCtx[property] !== undefined) {
        destCtx[property] = sourceCtx[property];
      }
    }

    if (sourceCtx.setLineDash !== undefined) {
      destCtx.setLineDash(sourceCtx.getLineDash());
      destCtx.lineDashOffset = sourceCtx.lineDashOffset;
    }
  }

  function resetCtxToDefault(ctx) {
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#000000';
    ctx.fillRule = 'nonzero';
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 10;
    ctx.globalCompositeOperation = 'source-over';
    ctx.font = '10px sans-serif';

    if (ctx.setLineDash !== undefined) {
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0;
    }
  }

  function composeSMaskBackdrop(bytes, r0, g0, b0) {
    var length = bytes.length;

    for (var i = 3; i < length; i += 4) {
      var alpha = bytes[i];

      if (alpha === 0) {
        bytes[i - 3] = r0;
        bytes[i - 2] = g0;
        bytes[i - 1] = b0;
      } else if (alpha < 255) {
        var alpha_ = 255 - alpha;
        bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
        bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
        bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
      }
    }
  }

  function composeSMaskAlpha(maskData, layerData, transferMap) {
    var length = maskData.length;
    var scale = 1 / 255;

    for (var i = 3; i < length; i += 4) {
      var alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
      layerData[i] = layerData[i] * alpha * scale | 0;
    }
  }

  function composeSMaskLuminosity(maskData, layerData, transferMap) {
    var length = maskData.length;

    for (var i = 3; i < length; i += 4) {
      var y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
      layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
    }
  }

  function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
    var hasBackdrop = !!backdrop;
    var r0 = hasBackdrop ? backdrop[0] : 0;
    var g0 = hasBackdrop ? backdrop[1] : 0;
    var b0 = hasBackdrop ? backdrop[2] : 0;
    var composeFn;

    if (subtype === 'Luminosity') {
      composeFn = composeSMaskLuminosity;
    } else {
      composeFn = composeSMaskAlpha;
    }

    var PIXELS_TO_PROCESS = 1048576;
    var chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));

    for (var row = 0; row < height; row += chunkSize) {
      var chunkHeight = Math.min(chunkSize, height - row);
      var maskData = maskCtx.getImageData(0, row, width, chunkHeight);
      var layerData = layerCtx.getImageData(0, row, width, chunkHeight);

      if (hasBackdrop) {
        composeSMaskBackdrop(maskData.data, r0, g0, b0);
      }

      composeFn(maskData.data, layerData.data, transferMap);
      maskCtx.putImageData(layerData, 0, row);
    }
  }

  function composeSMask(ctx, smask, layerCtx, webGLContext) {
    var mask = smask.canvas;
    var maskCtx = smask.context;
    ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
    var backdrop = smask.backdrop || null;

    if (!smask.transferMap && webGLContext.isEnabled) {
      var composed = webGLContext.composeSMask({
        layer: layerCtx.canvas,
        mask: mask,
        properties: {
          subtype: smask.subtype,
          backdrop: backdrop
        }
      });
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(composed, smask.offsetX, smask.offsetY);
      return;
    }

    genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
    ctx.drawImage(mask, 0, 0);
  }

  var LINE_CAP_STYLES = ['butt', 'round', 'square'];
  var LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
  var NORMAL_CLIP = {};
  var EO_CLIP = {};
  CanvasGraphics.prototype = {
    beginDrawing: function beginDrawing(_ref) {
      var transform = _ref.transform,
          viewport = _ref.viewport,
          _ref$transparency = _ref.transparency,
          transparency = _ref$transparency === void 0 ? false : _ref$transparency,
          _ref$background = _ref.background,
          background = _ref$background === void 0 ? null : _ref$background;
      var width = this.ctx.canvas.width;
      var height = this.ctx.canvas.height;
      this.ctx.save();
      this.ctx.fillStyle = background || 'rgb(255, 255, 255)';
      this.ctx.fillRect(0, 0, width, height);
      this.ctx.restore();

      if (transparency) {
        var transparentCanvas = this.cachedCanvases.getCanvas('transparent', width, height, true);
        this.compositeCtx = this.ctx;
        this.transparentCanvas = transparentCanvas.canvas;
        this.ctx = transparentCanvas.context;
        this.ctx.save();
        this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
      }

      this.ctx.save();
      resetCtxToDefault(this.ctx);

      if (transform) {
        this.ctx.transform.apply(this.ctx, transform);
      }

      this.ctx.transform.apply(this.ctx, viewport.transform);
      this.baseTransform = this.ctx.mozCurrentTransform.slice();

      if (this.imageLayer) {
        this.imageLayer.beginLayout();
      }
    },
    executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
      var argsArray = operatorList.argsArray;
      var fnArray = operatorList.fnArray;
      var i = executionStartIdx || 0;
      var argsArrayLen = argsArray.length;

      if (argsArrayLen === i) {
        return i;
      }

      var chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === 'function';
      var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
      var steps = 0;
      var commonObjs = this.commonObjs;
      var objs = this.objs;
      var fnId;

      while (true) {
        if (stepper !== undefined && i === stepper.nextBreakPoint) {
          stepper.breakIt(i, continueCallback);
          return i;
        }

        fnId = fnArray[i];

        if (fnId !== _util.OPS.dependency) {
          this[fnId].apply(this, argsArray[i]);
        } else {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = argsArray[i][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var depObjId = _step.value;
              var objsPool = depObjId.startsWith('g_') ? commonObjs : objs;

              if (!objsPool.has(depObjId)) {
                objsPool.get(depObjId, continueCallback);
                return i;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        i++;

        if (i === argsArrayLen) {
          return i;
        }

        if (chunkOperations && ++steps > EXECUTION_STEPS) {
          if (Date.now() > endTime) {
            continueCallback();
            return i;
          }

          steps = 0;
        }
      }
    },
    endDrawing: function CanvasGraphics_endDrawing() {
      if (this.current.activeSMask !== null) {
        this.endSMaskGroup();
      }

      this.ctx.restore();

      if (this.transparentCanvas) {
        this.ctx = this.compositeCtx;
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.drawImage(this.transparentCanvas, 0, 0);
        this.ctx.restore();
        this.transparentCanvas = null;
      }

      this.cachedCanvases.clear();
      this.webGLContext.clear();

      if (this.imageLayer) {
        this.imageLayer.endLayout();
      }
    },
    setLineWidth: function CanvasGraphics_setLineWidth(width) {
      this.current.lineWidth = width;
      this.ctx.lineWidth = width;
    },
    setLineCap: function CanvasGraphics_setLineCap(style) {
      this.ctx.lineCap = LINE_CAP_STYLES[style];
    },
    setLineJoin: function CanvasGraphics_setLineJoin(style) {
      this.ctx.lineJoin = LINE_JOIN_STYLES[style];
    },
    setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
      this.ctx.miterLimit = limit;
    },
    setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
      var ctx = this.ctx;

      if (ctx.setLineDash !== undefined) {
        ctx.setLineDash(dashArray);
        ctx.lineDashOffset = dashPhase;
      }
    },
    setRenderingIntent: function setRenderingIntent(intent) {},
    setFlatness: function setFlatness(flatness) {},
    setGState: function CanvasGraphics_setGState(states) {
      for (var i = 0, ii = states.length; i < ii; i++) {
        var state = states[i];
        var key = state[0];
        var value = state[1];

        switch (key) {
          case 'LW':
            this.setLineWidth(value);
            break;

          case 'LC':
            this.setLineCap(value);
            break;

          case 'LJ':
            this.setLineJoin(value);
            break;

          case 'ML':
            this.setMiterLimit(value);
            break;

          case 'D':
            this.setDash(value[0], value[1]);
            break;

          case 'RI':
            this.setRenderingIntent(value);
            break;

          case 'FL':
            this.setFlatness(value);
            break;

          case 'Font':
            this.setFont(value[0], value[1]);
            break;

          case 'CA':
            this.current.strokeAlpha = state[1];
            break;

          case 'ca':
            this.current.fillAlpha = state[1];
            this.ctx.globalAlpha = state[1];
            break;

          case 'BM':
            this.ctx.globalCompositeOperation = value;
            break;

          case 'SMask':
            if (this.current.activeSMask) {
              if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
                this.suspendSMaskGroup();
              } else {
                this.endSMaskGroup();
              }
            }

            this.current.activeSMask = value ? this.tempSMask : null;

            if (this.current.activeSMask) {
              this.beginSMaskGroup();
            }

            this.tempSMask = null;
            break;
        }
      }
    },
    beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
      var activeSMask = this.current.activeSMask;
      var drawnWidth = activeSMask.canvas.width;
      var drawnHeight = activeSMask.canvas.height;
      var cacheId = 'smaskGroupAt' + this.groupLevel;
      var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
      var currentCtx = this.ctx;
      var currentTransform = currentCtx.mozCurrentTransform;
      this.ctx.save();
      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
      groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);
      activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([['BM', 'source-over'], ['ca', 1], ['CA', 1]]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
    },
    suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();
      composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
      this.ctx.restore();
      this.ctx.save();
      copyCtxState(groupCtx, this.ctx);
      this.current.resumeSMaskCtx = groupCtx;

      var deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);

      this.ctx.transform.apply(this.ctx, deltaTransform);
      groupCtx.save();
      groupCtx.setTransform(1, 0, 0, 1, 0, 0);
      groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
      groupCtx.restore();
    },
    resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.current.resumeSMaskCtx;
      var currentCtx = this.ctx;
      this.ctx = groupCtx;
      this.groupStack.push(currentCtx);
      this.groupLevel++;
    },
    endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();
      composeSMask(this.ctx, this.current.activeSMask, groupCtx, this.webGLContext);
      this.ctx.restore();
      copyCtxState(groupCtx, this.ctx);

      var deltaTransform = _util.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);

      this.ctx.transform.apply(this.ctx, deltaTransform);
    },
    save: function CanvasGraphics_save() {
      this.ctx.save();
      var old = this.current;
      this.stateStack.push(old);
      this.current = old.clone();
      this.current.resumeSMaskCtx = null;
    },
    restore: function CanvasGraphics_restore() {
      if (this.current.resumeSMaskCtx) {
        this.resumeSMaskGroup();
      }

      if (this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)) {
        this.endSMaskGroup();
      }

      if (this.stateStack.length !== 0) {
        this.current = this.stateStack.pop();
        this.ctx.restore();
        this.pendingClip = null;
        this._cachedGetSinglePixelWidth = null;
      }
    },
    transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
      this.ctx.transform(a, b, c, d, e, f);
      this._cachedGetSinglePixelWidth = null;
    },
    constructPath: function CanvasGraphics_constructPath(ops, args) {
      var ctx = this.ctx;
      var current = this.current;
      var x = current.x,
          y = current.y;

      for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
        switch (ops[i] | 0) {
          case _util.OPS.rectangle:
            x = args[j++];
            y = args[j++];
            var width = args[j++];
            var height = args[j++];

            if (width === 0) {
              width = this.getSinglePixelWidth();
            }

            if (height === 0) {
              height = this.getSinglePixelWidth();
            }

            var xw = x + width;
            var yh = y + height;
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(xw, y);
            this.ctx.lineTo(xw, yh);
            this.ctx.lineTo(x, yh);
            this.ctx.lineTo(x, y);
            this.ctx.closePath();
            break;

          case _util.OPS.moveTo:
            x = args[j++];
            y = args[j++];
            ctx.moveTo(x, y);
            break;

          case _util.OPS.lineTo:
            x = args[j++];
            y = args[j++];
            ctx.lineTo(x, y);
            break;

          case _util.OPS.curveTo:
            x = args[j + 4];
            y = args[j + 5];
            ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
            j += 6;
            break;

          case _util.OPS.curveTo2:
            ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
            x = args[j + 2];
            y = args[j + 3];
            j += 4;
            break;

          case _util.OPS.curveTo3:
            x = args[j + 2];
            y = args[j + 3];
            ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
            j += 4;
            break;

          case _util.OPS.closePath:
            ctx.closePath();
            break;
        }
      }

      current.setCurrentPoint(x, y);
    },
    closePath: function CanvasGraphics_closePath() {
      this.ctx.closePath();
    },
    stroke: function CanvasGraphics_stroke(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var strokeColor = this.current.strokeColor;
      ctx.globalAlpha = this.current.strokeAlpha;

      if (strokeColor && strokeColor.hasOwnProperty('type') && strokeColor.type === 'Pattern') {
        ctx.save();
        var transform = ctx.mozCurrentTransform;

        var scale = _util.Util.singularValueDecompose2dScale(transform)[0];

        ctx.strokeStyle = strokeColor.getPattern(ctx, this);
        ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth * scale);
        ctx.stroke();
        ctx.restore();
      } else {
        ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth);
        ctx.stroke();
      }

      if (consumePath) {
        this.consumePath();
      }

      ctx.globalAlpha = this.current.fillAlpha;
    },
    closeStroke: function CanvasGraphics_closeStroke() {
      this.closePath();
      this.stroke();
    },
    fill: function CanvasGraphics_fill(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var needRestore = false;

      if (isPatternFill) {
        ctx.save();

        if (this.baseTransform) {
          ctx.setTransform.apply(ctx, this.baseTransform);
        }

        ctx.fillStyle = fillColor.getPattern(ctx, this);
        needRestore = true;
      }

      if (this.pendingEOFill) {
        ctx.fill('evenodd');
        this.pendingEOFill = false;
      } else {
        ctx.fill();
      }

      if (needRestore) {
        ctx.restore();
      }

      if (consumePath) {
        this.consumePath();
      }
    },
    eoFill: function CanvasGraphics_eoFill() {
      this.pendingEOFill = true;
      this.fill();
    },
    fillStroke: function CanvasGraphics_fillStroke() {
      this.fill(false);
      this.stroke(false);
      this.consumePath();
    },
    eoFillStroke: function CanvasGraphics_eoFillStroke() {
      this.pendingEOFill = true;
      this.fillStroke();
    },
    closeFillStroke: function CanvasGraphics_closeFillStroke() {
      this.closePath();
      this.fillStroke();
    },
    closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
      this.pendingEOFill = true;
      this.closePath();
      this.fillStroke();
    },
    endPath: function CanvasGraphics_endPath() {
      this.consumePath();
    },
    clip: function CanvasGraphics_clip() {
      this.pendingClip = NORMAL_CLIP;
    },
    eoClip: function CanvasGraphics_eoClip() {
      this.pendingClip = EO_CLIP;
    },
    beginText: function CanvasGraphics_beginText() {
      this.current.textMatrix = _util.IDENTITY_MATRIX;
      this.current.textMatrixScale = 1;
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
    },
    endText: function CanvasGraphics_endText() {
      var paths = this.pendingTextPaths;
      var ctx = this.ctx;

      if (paths === undefined) {
        ctx.beginPath();
        return;
      }

      ctx.save();
      ctx.beginPath();

      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        ctx.setTransform.apply(ctx, path.transform);
        ctx.translate(path.x, path.y);
        path.addToPath(ctx, path.fontSize);
      }

      ctx.restore();
      ctx.clip();
      ctx.beginPath();
      delete this.pendingTextPaths;
    },
    setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
      this.current.charSpacing = spacing;
    },
    setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
      this.current.wordSpacing = spacing;
    },
    setHScale: function CanvasGraphics_setHScale(scale) {
      this.current.textHScale = scale / 100;
    },
    setLeading: function CanvasGraphics_setLeading(leading) {
      this.current.leading = -leading;
    },
    setFont: function CanvasGraphics_setFont(fontRefName, size) {
      var fontObj = this.commonObjs.get(fontRefName);
      var current = this.current;

      if (!fontObj) {
        throw new Error("Can't find font for ".concat(fontRefName));
      }

      current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;

      if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
        (0, _util.warn)('Invalid font matrix for font ' + fontRefName);
      }

      if (size < 0) {
        size = -size;
        current.fontDirection = -1;
      } else {
        current.fontDirection = 1;
      }

      this.current.font = fontObj;
      this.current.fontSize = size;

      if (fontObj.isType3Font) {
        return;
      }

      var name = fontObj.loadedName || 'sans-serif';
      var bold = fontObj.black ? '900' : fontObj.bold ? 'bold' : 'normal';
      var italic = fontObj.italic ? 'italic' : 'normal';
      var typeface = "\"".concat(name, "\", ").concat(fontObj.fallbackName);
      var browserFontSize = size < MIN_FONT_SIZE ? MIN_FONT_SIZE : size > MAX_FONT_SIZE ? MAX_FONT_SIZE : size;
      this.current.fontSizeScale = size / browserFontSize;
      this.ctx.font = "".concat(italic, " ").concat(bold, " ").concat(browserFontSize, "px ").concat(typeface);
    },
    setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
      this.current.textRenderingMode = mode;
    },
    setTextRise: function CanvasGraphics_setTextRise(rise) {
      this.current.textRise = rise;
    },
    moveText: function CanvasGraphics_moveText(x, y) {
      this.current.x = this.current.lineX += x;
      this.current.y = this.current.lineY += y;
    },
    setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
      this.setLeading(-y);
      this.moveText(x, y);
    },
    setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
      this.current.textMatrix = [a, b, c, d, e, f];
      this.current.textMatrixScale = Math.sqrt(a * a + b * b);
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
    },
    nextLine: function CanvasGraphics_nextLine() {
      this.moveText(0, this.current.leading);
    },
    paintChar: function paintChar(character, x, y, patternTransform) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var textRenderingMode = current.textRenderingMode;
      var fontSize = current.fontSize / current.fontSizeScale;
      var fillStrokeMode = textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;
      var isAddToPathSet = !!(textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG);
      var patternFill = current.patternFill && font.data;
      var addToPath;

      if (font.disableFontFace || isAddToPathSet || patternFill) {
        addToPath = font.getPathGenerator(this.commonObjs, character);
      }

      if (font.disableFontFace || patternFill) {
        ctx.save();
        ctx.translate(x, y);
        ctx.beginPath();
        addToPath(ctx, fontSize);

        if (patternTransform) {
          ctx.setTransform.apply(ctx, patternTransform);
        }

        if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.fill();
        }

        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.stroke();
        }

        ctx.restore();
      } else {
        if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.fillText(character, x, y);
        }

        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          ctx.strokeText(character, x, y);
        }
      }

      if (isAddToPathSet) {
        var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
        paths.push({
          transform: ctx.mozCurrentTransform,
          x: x,
          y: y,
          fontSize: fontSize,
          addToPath: addToPath
        });
      }
    },

    get isFontSubpixelAAEnabled() {
      var _this$cachedCanvases$ = this.cachedCanvases.getCanvas('isFontSubpixelAAEnabled', 10, 10),
          ctx = _this$cachedCanvases$.context;

      ctx.scale(1.5, 1);
      ctx.fillText('I', 0, 10);
      var data = ctx.getImageData(0, 0, 10, 10).data;
      var enabled = false;

      for (var i = 3; i < data.length; i += 4) {
        if (data[i] > 0 && data[i] < 255) {
          enabled = true;
          break;
        }
      }

      return (0, _util.shadow)(this, 'isFontSubpixelAAEnabled', enabled);
    },

    showText: function CanvasGraphics_showText(glyphs) {
      var current = this.current;
      var font = current.font;

      if (font.isType3Font) {
        return this.showType3Text(glyphs);
      }

      var fontSize = current.fontSize;

      if (fontSize === 0) {
        return undefined;
      }

      var ctx = this.ctx;
      var fontSizeScale = current.fontSizeScale;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var fontDirection = current.fontDirection;
      var textHScale = current.textHScale * fontDirection;
      var glyphsLength = glyphs.length;
      var vertical = font.vertical;
      var spacingDir = vertical ? 1 : -1;
      var defaultVMetrics = font.defaultVMetrics;
      var widthAdvanceScale = fontSize * current.fontMatrix[0];
      var simpleFillText = current.textRenderingMode === _util.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
      ctx.save();
      var patternTransform;

      if (current.patternFill) {
        ctx.save();
        var pattern = current.fillColor.getPattern(ctx, this);
        patternTransform = ctx.mozCurrentTransform;
        ctx.restore();
        ctx.fillStyle = pattern;
      }

      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y + current.textRise);

      if (fontDirection > 0) {
        ctx.scale(textHScale, -1);
      } else {
        ctx.scale(textHScale, 1);
      }

      var lineWidth = current.lineWidth;
      var scale = current.textMatrixScale;

      if (scale === 0 || lineWidth === 0) {
        var fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;

        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          this._cachedGetSinglePixelWidth = null;
          lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
        }
      } else {
        lineWidth /= scale;
      }

      if (fontSizeScale !== 1.0) {
        ctx.scale(fontSizeScale, fontSizeScale);
        lineWidth /= fontSizeScale;
      }

      ctx.lineWidth = lineWidth;
      var x = 0,
          i;

      for (i = 0; i < glyphsLength; ++i) {
        var glyph = glyphs[i];

        if ((0, _util.isNum)(glyph)) {
          x += spacingDir * glyph * fontSize / 1000;
          continue;
        }

        var restoreNeeded = false;
        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var character = glyph.fontChar;
        var accent = glyph.accent;
        var scaledX, scaledY, scaledAccentX, scaledAccentY;
        var width = glyph.width;

        if (vertical) {
          var vmetric, vx, vy;
          vmetric = glyph.vmetric || defaultVMetrics;
          vx = glyph.vmetric ? vmetric[1] : width * 0.5;
          vx = -vx * widthAdvanceScale;
          vy = vmetric[2] * widthAdvanceScale;
          width = vmetric ? -vmetric[0] : width;
          scaledX = vx / fontSizeScale;
          scaledY = (x + vy) / fontSizeScale;
        } else {
          scaledX = x / fontSizeScale;
          scaledY = 0;
        }

        if (font.remeasure && width > 0) {
          var measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;

          if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
            var characterScaleX = width / measuredWidth;
            restoreNeeded = true;
            ctx.save();
            ctx.scale(characterScaleX, 1);
            scaledX /= characterScaleX;
          } else if (width !== measuredWidth) {
            scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
          }
        }

        if (glyph.isInFont || font.missingFile) {
          if (simpleFillText && !accent) {
            ctx.fillText(character, scaledX, scaledY);
          } else {
            this.paintChar(character, scaledX, scaledY, patternTransform);

            if (accent) {
              scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
              scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
              this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform);
            }
          }
        }

        var charWidth = width * widthAdvanceScale + spacing * fontDirection;
        x += charWidth;

        if (restoreNeeded) {
          ctx.restore();
        }
      }

      if (vertical) {
        current.y -= x * textHScale;
      } else {
        current.x += x * textHScale;
      }

      ctx.restore();
    },
    showType3Text: function CanvasGraphics_showType3Text(glyphs) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var fontSize = current.fontSize;
      var fontDirection = current.fontDirection;
      var spacingDir = font.vertical ? 1 : -1;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var textHScale = current.textHScale * fontDirection;
      var fontMatrix = current.fontMatrix || _util.FONT_IDENTITY_MATRIX;
      var glyphsLength = glyphs.length;
      var isTextInvisible = current.textRenderingMode === _util.TextRenderingMode.INVISIBLE;
      var i, glyph, width, spacingLength;

      if (isTextInvisible || fontSize === 0) {
        return;
      }

      this._cachedGetSinglePixelWidth = null;
      ctx.save();
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y);
      ctx.scale(textHScale, fontDirection);

      for (i = 0; i < glyphsLength; ++i) {
        glyph = glyphs[i];

        if ((0, _util.isNum)(glyph)) {
          spacingLength = spacingDir * glyph * fontSize / 1000;
          this.ctx.translate(spacingLength, 0);
          current.x += spacingLength * textHScale;
          continue;
        }

        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var operatorList = font.charProcOperatorList[glyph.operatorListId];

        if (!operatorList) {
          (0, _util.warn)("Type3 character \"".concat(glyph.operatorListId, "\" is not available."));
          continue;
        }

        this.processingType3 = glyph;
        this.save();
        ctx.scale(fontSize, fontSize);
        ctx.transform.apply(ctx, fontMatrix);
        this.executeOperatorList(operatorList);
        this.restore();

        var transformed = _util.Util.applyTransform([glyph.width, 0], fontMatrix);

        width = transformed[0] * fontSize + spacing;
        ctx.translate(width, 0);
        current.x += width * textHScale;
      }

      ctx.restore();
      this.processingType3 = null;
    },
    setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {},
    setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
      this.ctx.rect(llx, lly, urx - llx, ury - lly);
      this.clip();
      this.endPath();
    },
    getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
      var _this = this;

      var pattern;

      if (IR[0] === 'TilingPattern') {
        var color = IR[1];
        var baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
        var canvasGraphicsFactory = {
          createCanvasGraphics: function createCanvasGraphics(ctx) {
            return new CanvasGraphics(ctx, _this.commonObjs, _this.objs, _this.canvasFactory, _this.webGLContext);
          }
        };
        pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
      } else {
        pattern = (0, _pattern_helper.getShadingPatternFromIR)(IR);
      }

      return pattern;
    },
    setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
      this.current.strokeColor = this.getColorN_Pattern(arguments);
    },
    setFillColorN: function CanvasGraphics_setFillColorN() {
      this.current.fillColor = this.getColorN_Pattern(arguments);
      this.current.patternFill = true;
    },
    setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
      var color = _util.Util.makeCssRgb(r, g, b);

      this.ctx.strokeStyle = color;
      this.current.strokeColor = color;
    },
    setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
      var color = _util.Util.makeCssRgb(r, g, b);

      this.ctx.fillStyle = color;
      this.current.fillColor = color;
      this.current.patternFill = false;
    },
    shadingFill: function CanvasGraphics_shadingFill(patternIR) {
      var ctx = this.ctx;
      this.save();
      var pattern = (0, _pattern_helper.getShadingPatternFromIR)(patternIR);
      ctx.fillStyle = pattern.getPattern(ctx, this, true);
      var inv = ctx.mozCurrentTransformInverse;

      if (inv) {
        var canvas = ctx.canvas;
        var width = canvas.width;
        var height = canvas.height;

        var bl = _util.Util.applyTransform([0, 0], inv);

        var br = _util.Util.applyTransform([0, height], inv);

        var ul = _util.Util.applyTransform([width, 0], inv);

        var ur = _util.Util.applyTransform([width, height], inv);

        var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
        var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
        var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
        var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
        this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
      } else {
        this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      }

      this.restore();
    },
    beginInlineImage: function CanvasGraphics_beginInlineImage() {
      (0, _util.unreachable)('Should not call beginInlineImage');
    },
    beginImageData: function CanvasGraphics_beginImageData() {
      (0, _util.unreachable)('Should not call beginImageData');
    },
    paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
      this.save();
      this.baseTransformStack.push(this.baseTransform);

      if (Array.isArray(matrix) && matrix.length === 6) {
        this.transform.apply(this, matrix);
      }

      this.baseTransform = this.ctx.mozCurrentTransform;

      if (bbox) {
        var width = bbox[2] - bbox[0];
        var height = bbox[3] - bbox[1];
        this.ctx.rect(bbox[0], bbox[1], width, height);
        this.clip();
        this.endPath();
      }
    },
    paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
      this.restore();
      this.baseTransform = this.baseTransformStack.pop();
    },
    beginGroup: function CanvasGraphics_beginGroup(group) {
      this.save();
      var currentCtx = this.ctx;

      if (!group.isolated) {
        (0, _util.info)('TODO: Support non-isolated groups.');
      }

      if (group.knockout) {
        (0, _util.warn)('Knockout groups not supported.');
      }

      var currentTransform = currentCtx.mozCurrentTransform;

      if (group.matrix) {
        currentCtx.transform.apply(currentCtx, group.matrix);
      }

      if (!group.bbox) {
        throw new Error('Bounding box is required.');
      }

      var bounds = _util.Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);

      var canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
      bounds = _util.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
      var offsetX = Math.floor(bounds[0]);
      var offsetY = Math.floor(bounds[1]);
      var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
      var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
      var scaleX = 1,
          scaleY = 1;

      if (drawnWidth > MAX_GROUP_SIZE) {
        scaleX = drawnWidth / MAX_GROUP_SIZE;
        drawnWidth = MAX_GROUP_SIZE;
      }

      if (drawnHeight > MAX_GROUP_SIZE) {
        scaleY = drawnHeight / MAX_GROUP_SIZE;
        drawnHeight = MAX_GROUP_SIZE;
      }

      var cacheId = 'groupAt' + this.groupLevel;

      if (group.smask) {
        cacheId += '_smask_' + this.smaskCounter++ % 2;
      }

      var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / scaleX, 1 / scaleY);
      groupCtx.translate(-offsetX, -offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);

      if (group.smask) {
        this.smaskStack.push({
          canvas: scratchCanvas.canvas,
          context: groupCtx,
          offsetX: offsetX,
          offsetY: offsetY,
          scaleX: scaleX,
          scaleY: scaleY,
          subtype: group.smask.subtype,
          backdrop: group.smask.backdrop,
          transferMap: group.smask.transferMap || null,
          startTransformInverse: null
        });
      } else {
        currentCtx.setTransform(1, 0, 0, 1, 0, 0);
        currentCtx.translate(offsetX, offsetY);
        currentCtx.scale(scaleX, scaleY);
      }

      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([['BM', 'source-over'], ['ca', 1], ['CA', 1]]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
      this.current.activeSMask = null;
    },
    endGroup: function CanvasGraphics_endGroup(group) {
      this.groupLevel--;
      var groupCtx = this.ctx;
      this.ctx = this.groupStack.pop();

      if (this.ctx.imageSmoothingEnabled !== undefined) {
        this.ctx.imageSmoothingEnabled = false;
      } else {
        this.ctx.mozImageSmoothingEnabled = false;
      }

      if (group.smask) {
        this.tempSMask = this.smaskStack.pop();
      } else {
        this.ctx.drawImage(groupCtx.canvas, 0, 0);
      }

      this.restore();
    },
    beginAnnotations: function CanvasGraphics_beginAnnotations() {
      this.save();

      if (this.baseTransform) {
        this.ctx.setTransform.apply(this.ctx, this.baseTransform);
      }
    },
    endAnnotations: function CanvasGraphics_endAnnotations() {
      this.restore();
    },
    beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
      this.save();
      resetCtxToDefault(this.ctx);
      this.current = new CanvasExtraState();

      if (Array.isArray(rect) && rect.length === 4) {
        var width = rect[2] - rect[0];
        var height = rect[3] - rect[1];
        this.ctx.rect(rect[0], rect[1], width, height);
        this.clip();
        this.endPath();
      }

      this.transform.apply(this, transform);
      this.transform.apply(this, matrix);
    },
    endAnnotation: function CanvasGraphics_endAnnotation() {
      this.restore();
    },
    paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
      var domImage = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

      if (!domImage) {
        (0, _util.warn)('Dependent image isn\'t ready yet');
        return;
      }

      this.save();
      var ctx = this.ctx;
      ctx.scale(1 / w, -1 / h);
      ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height, 0, -h, w, h);

      if (this.imageLayer) {
        var currentTransform = ctx.mozCurrentTransformInverse;
        var position = this.getCanvasPosition(0, 0);
        this.imageLayer.appendImage({
          objId: objId,
          left: position[0],
          top: position[1],
          width: w / currentTransform[0],
          height: h / currentTransform[3]
        });
      }

      this.restore();
    },
    paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
      var ctx = this.ctx;
      var width = img.width,
          height = img.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var glyph = this.processingType3;

      if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === undefined) {
        if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
          glyph.compiled = compileType3Glyph({
            data: img.data,
            width: width,
            height: height
          });
        } else {
          glyph.compiled = null;
        }
      }

      if (glyph && glyph.compiled) {
        glyph.compiled(ctx);
        return;
      }

      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();
      putBinaryImageMask(maskCtx, img);
      maskCtx.globalCompositeOperation = 'source-in';
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      this.paintInlineImageXObject(maskCanvas.canvas);
    },
    paintImageMaskXObjectRepeat: function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX, scaleY, positions) {
      var width = imgData.width;
      var height = imgData.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();
      putBinaryImageMask(maskCtx, imgData);
      maskCtx.globalCompositeOperation = 'source-in';
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      var ctx = this.ctx;

      for (var i = 0, ii = positions.length; i < ii; i += 2) {
        ctx.save();
        ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
        ctx.scale(1, -1);
        ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
        ctx.restore();
      }
    },
    paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(images) {
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;

      for (var i = 0, ii = images.length; i < ii; i++) {
        var image = images[i];
        var width = image.width,
            height = image.height;
        var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
        var maskCtx = maskCanvas.context;
        maskCtx.save();
        putBinaryImageMask(maskCtx, image);
        maskCtx.globalCompositeOperation = 'source-in';
        maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
        maskCtx.fillRect(0, 0, width, height);
        maskCtx.restore();
        ctx.save();
        ctx.transform.apply(ctx, image.transform);
        ctx.scale(1, -1);
        ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
        ctx.restore();
      }
    },
    paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
      var imgData = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

      if (!imgData) {
        (0, _util.warn)('Dependent image isn\'t ready yet');
        return;
      }

      this.paintInlineImageXObject(imgData);
    },
    paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
      var imgData = this.processingType3 ? this.commonObjs.get(objId) : this.objs.get(objId);

      if (!imgData) {
        (0, _util.warn)('Dependent image isn\'t ready yet');
        return;
      }

      var width = imgData.width;
      var height = imgData.height;
      var map = [];

      for (var i = 0, ii = positions.length; i < ii; i += 2) {
        map.push({
          transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
          x: 0,
          y: 0,
          w: width,
          h: height
        });
      }

      this.paintInlineImageXObjectGroup(imgData, map);
    },
    paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
      var width = imgData.width;
      var height = imgData.height;
      var ctx = this.ctx;
      this.save();
      ctx.scale(1 / width, -1 / height);
      var currentTransform = ctx.mozCurrentTransformInverse;
      var a = currentTransform[0],
          b = currentTransform[1];
      var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
      var c = currentTransform[2],
          d = currentTransform[3];
      var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
      var imgToPaint, tmpCanvas;

      if (typeof HTMLElement === 'function' && imgData instanceof HTMLElement || !imgData.data) {
        imgToPaint = imgData;
      } else {
        tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', width, height);
        var tmpCtx = tmpCanvas.context;
        putBinaryImageData(tmpCtx, imgData);
        imgToPaint = tmpCanvas.canvas;
      }

      var paintWidth = width,
          paintHeight = height;
      var tmpCanvasId = 'prescale1';

      while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
        var newWidth = paintWidth,
            newHeight = paintHeight;

        if (widthScale > 2 && paintWidth > 1) {
          newWidth = Math.ceil(paintWidth / 2);
          widthScale /= paintWidth / newWidth;
        }

        if (heightScale > 2 && paintHeight > 1) {
          newHeight = Math.ceil(paintHeight / 2);
          heightScale /= paintHeight / newHeight;
        }

        tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
        tmpCtx = tmpCanvas.context;
        tmpCtx.clearRect(0, 0, newWidth, newHeight);
        tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
        imgToPaint = tmpCanvas.canvas;
        paintWidth = newWidth;
        paintHeight = newHeight;
        tmpCanvasId = tmpCanvasId === 'prescale1' ? 'prescale2' : 'prescale1';
      }

      ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);

      if (this.imageLayer) {
        var position = this.getCanvasPosition(0, -height);
        this.imageLayer.appendImage({
          imgData: imgData,
          left: position[0],
          top: position[1],
          width: width / currentTransform[0],
          height: height / currentTransform[3]
        });
      }

      this.restore();
    },
    paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
      var ctx = this.ctx;
      var w = imgData.width;
      var h = imgData.height;
      var tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', w, h);
      var tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);

      for (var i = 0, ii = map.length; i < ii; i++) {
        var entry = map[i];
        ctx.save();
        ctx.transform.apply(ctx, entry.transform);
        ctx.scale(1, -1);
        ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);

        if (this.imageLayer) {
          var position = this.getCanvasPosition(entry.x, entry.y);
          this.imageLayer.appendImage({
            imgData: imgData,
            left: position[0],
            top: position[1],
            width: w,
            height: h
          });
        }

        ctx.restore();
      }
    },
    paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
      this.ctx.fillRect(0, 0, 1, 1);
    },
    paintXObject: function CanvasGraphics_paintXObject() {
      (0, _util.warn)('Unsupported \'paintXObject\' command.');
    },
    markPoint: function CanvasGraphics_markPoint(tag) {},
    markPointProps: function CanvasGraphics_markPointProps(tag, properties) {},
    beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {},
    beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {},
    endMarkedContent: function CanvasGraphics_endMarkedContent() {},
    beginCompat: function CanvasGraphics_beginCompat() {},
    endCompat: function CanvasGraphics_endCompat() {},
    consumePath: function CanvasGraphics_consumePath() {
      var ctx = this.ctx;

      if (this.pendingClip) {
        if (this.pendingClip === EO_CLIP) {
          ctx.clip('evenodd');
        } else {
          ctx.clip();
        }

        this.pendingClip = null;
      }

      ctx.beginPath();
    },
    getSinglePixelWidth: function getSinglePixelWidth(scale) {
      if (this._cachedGetSinglePixelWidth === null) {
        var inverse = this.ctx.mozCurrentTransformInverse;
        this._cachedGetSinglePixelWidth = Math.sqrt(Math.max(inverse[0] * inverse[0] + inverse[1] * inverse[1], inverse[2] * inverse[2] + inverse[3] * inverse[3]));
      }

      return this._cachedGetSinglePixelWidth;
    },
    getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
      var transform = this.ctx.mozCurrentTransform;
      return [transform[0] * x + transform[2] * y + transform[4], transform[1] * x + transform[3] * y + transform[5]];
    }
  };

  for (var op in _util.OPS) {
    CanvasGraphics.prototype[_util.OPS[op]] = CanvasGraphics.prototype[op];
  }

  return CanvasGraphics;
}();

exports.CanvasGraphics = CanvasGraphics;

/***/ }),
/* 187 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShadingPatternFromIR = getShadingPatternFromIR;
exports.TilingPattern = void 0;

var _util = __w_pdfjs_require__(1);

var ShadingIRs = {};

function applyBoundingBox(ctx, bbox) {
  if (!bbox || typeof Path2D === 'undefined') {
    return;
  }

  var width = bbox[2] - bbox[0];
  var height = bbox[3] - bbox[1];
  var region = new Path2D();
  region.rect(bbox[0], bbox[1], width, height);
  ctx.clip(region);
}

ShadingIRs.RadialAxial = {
  fromIR: function RadialAxial_fromIR(raw) {
    var type = raw[1];
    var bbox = raw[2];
    var colorStops = raw[3];
    var p0 = raw[4];
    var p1 = raw[5];
    var r0 = raw[6];
    var r1 = raw[7];
    return {
      type: 'Pattern',
      getPattern: function RadialAxial_getPattern(ctx) {
        applyBoundingBox(ctx, bbox);
        var grad;

        if (type === 'axial') {
          grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
        } else if (type === 'radial') {
          grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
        }

        for (var i = 0, ii = colorStops.length; i < ii; ++i) {
          var c = colorStops[i];
          grad.addColorStop(c[0], c[1]);
        }

        return grad;
      }
    };
  }
};

var createMeshCanvas = function createMeshCanvasClosure() {
  function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
    var coords = context.coords,
        colors = context.colors;
    var bytes = data.data,
        rowSize = data.width * 4;
    var tmp;

    if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1;
      p1 = p2;
      p2 = tmp;
      tmp = c1;
      c1 = c2;
      c2 = tmp;
    }

    if (coords[p2 + 1] > coords[p3 + 1]) {
      tmp = p2;
      p2 = p3;
      p3 = tmp;
      tmp = c2;
      c2 = c3;
      c3 = tmp;
    }

    if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1;
      p1 = p2;
      p2 = tmp;
      tmp = c1;
      c1 = c2;
      c2 = tmp;
    }

    var x1 = (coords[p1] + context.offsetX) * context.scaleX;
    var y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
    var x2 = (coords[p2] + context.offsetX) * context.scaleX;
    var y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
    var x3 = (coords[p3] + context.offsetX) * context.scaleX;
    var y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;

    if (y1 >= y3) {
      return;
    }

    var c1r = colors[c1],
        c1g = colors[c1 + 1],
        c1b = colors[c1 + 2];
    var c2r = colors[c2],
        c2g = colors[c2 + 1],
        c2b = colors[c2 + 2];
    var c3r = colors[c3],
        c3g = colors[c3 + 1],
        c3b = colors[c3 + 2];
    var minY = Math.round(y1),
        maxY = Math.round(y3);
    var xa, car, cag, cab;
    var xb, cbr, cbg, cbb;
    var k;

    for (var y = minY; y <= maxY; y++) {
      if (y < y2) {
        k = y < y1 ? 0 : y1 === y2 ? 1 : (y1 - y) / (y1 - y2);
        xa = x1 - (x1 - x2) * k;
        car = c1r - (c1r - c2r) * k;
        cag = c1g - (c1g - c2g) * k;
        cab = c1b - (c1b - c2b) * k;
      } else {
        k = y > y3 ? 1 : y2 === y3 ? 0 : (y2 - y) / (y2 - y3);
        xa = x2 - (x2 - x3) * k;
        car = c2r - (c2r - c3r) * k;
        cag = c2g - (c2g - c3g) * k;
        cab = c2b - (c2b - c3b) * k;
      }

      k = y < y1 ? 0 : y > y3 ? 1 : (y1 - y) / (y1 - y3);
      xb = x1 - (x1 - x3) * k;
      cbr = c1r - (c1r - c3r) * k;
      cbg = c1g - (c1g - c3g) * k;
      cbb = c1b - (c1b - c3b) * k;
      var x1_ = Math.round(Math.min(xa, xb));
      var x2_ = Math.round(Math.max(xa, xb));
      var j = rowSize * y + x1_ * 4;

      for (var x = x1_; x <= x2_; x++) {
        k = (xa - x) / (xa - xb);
        k = k < 0 ? 0 : k > 1 ? 1 : k;
        bytes[j++] = car - (car - cbr) * k | 0;
        bytes[j++] = cag - (cag - cbg) * k | 0;
        bytes[j++] = cab - (cab - cbb) * k | 0;
        bytes[j++] = 255;
      }
    }
  }

  function drawFigure(data, figure, context) {
    var ps = figure.coords;
    var cs = figure.colors;
    var i, ii;

    switch (figure.type) {
      case 'lattice':
        var verticesPerRow = figure.verticesPerRow;
        var rows = Math.floor(ps.length / verticesPerRow) - 1;
        var cols = verticesPerRow - 1;

        for (i = 0; i < rows; i++) {
          var q = i * verticesPerRow;

          for (var j = 0; j < cols; j++, q++) {
            drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
            drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
          }
        }

        break;

      case 'triangles':
        for (i = 0, ii = ps.length; i < ii; i += 3) {
          drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
        }

        break;

      default:
        throw new Error('illegal figure');
    }
  }

  function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases, webGLContext) {
    var EXPECTED_SCALE = 1.1;
    var MAX_PATTERN_SIZE = 3000;
    var BORDER_SIZE = 2;
    var offsetX = Math.floor(bounds[0]);
    var offsetY = Math.floor(bounds[1]);
    var boundsWidth = Math.ceil(bounds[2]) - offsetX;
    var boundsHeight = Math.ceil(bounds[3]) - offsetY;
    var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    var scaleX = boundsWidth / width;
    var scaleY = boundsHeight / height;
    var context = {
      coords: coords,
      colors: colors,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY
    };
    var paddedWidth = width + BORDER_SIZE * 2;
    var paddedHeight = height + BORDER_SIZE * 2;
    var canvas, tmpCanvas, i, ii;

    if (webGLContext.isEnabled) {
      canvas = webGLContext.drawFigures({
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        figures: figures,
        context: context
      });
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
      tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
    } else {
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
      var tmpCtx = tmpCanvas.context;
      var data = tmpCtx.createImageData(width, height);

      if (backgroundColor) {
        var bytes = data.data;

        for (i = 0, ii = bytes.length; i < ii; i += 4) {
          bytes[i] = backgroundColor[0];
          bytes[i + 1] = backgroundColor[1];
          bytes[i + 2] = backgroundColor[2];
          bytes[i + 3] = 255;
        }
      }

      for (i = 0; i < figures.length; i++) {
        drawFigure(data, figures[i], context);
      }

      tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
    }

    return {
      canvas: canvas,
      offsetX: offsetX - BORDER_SIZE * scaleX,
      offsetY: offsetY - BORDER_SIZE * scaleY,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  return createMeshCanvas;
}();

ShadingIRs.Mesh = {
  fromIR: function Mesh_fromIR(raw) {
    var coords = raw[2];
    var colors = raw[3];
    var figures = raw[4];
    var bounds = raw[5];
    var matrix = raw[6];
    var bbox = raw[7];
    var background = raw[8];
    return {
      type: 'Pattern',
      getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
        applyBoundingBox(ctx, bbox);
        var scale;

        if (shadingFill) {
          scale = _util.Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
        } else {
          scale = _util.Util.singularValueDecompose2dScale(owner.baseTransform);

          if (matrix) {
            var matrixScale = _util.Util.singularValueDecompose2dScale(matrix);

            scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
          }
        }

        var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords, colors, figures, shadingFill ? null : background, owner.cachedCanvases, owner.webGLContext);

        if (!shadingFill) {
          ctx.setTransform.apply(ctx, owner.baseTransform);

          if (matrix) {
            ctx.transform.apply(ctx, matrix);
          }
        }

        ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
        ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
        return ctx.createPattern(temporaryPatternCanvas.canvas, 'no-repeat');
      }
    };
  }
};
ShadingIRs.Dummy = {
  fromIR: function Dummy_fromIR() {
    return {
      type: 'Pattern',
      getPattern: function Dummy_fromIR_getPattern() {
        return 'hotpink';
      }
    };
  }
};

function getShadingPatternFromIR(raw) {
  var shadingIR = ShadingIRs[raw[0]];

  if (!shadingIR) {
    throw new Error("Unknown IR type: ".concat(raw[0]));
  }

  return shadingIR.fromIR(raw);
}

var TilingPattern = function TilingPatternClosure() {
  var PaintType = {
    COLORED: 1,
    UNCOLORED: 2
  };
  var MAX_PATTERN_SIZE = 3000;

  function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
    this.operatorList = IR[2];
    this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
    this.bbox = IR[4];
    this.xstep = IR[5];
    this.ystep = IR[6];
    this.paintType = IR[7];
    this.tilingType = IR[8];
    this.color = color;
    this.canvasGraphicsFactory = canvasGraphicsFactory;
    this.baseTransform = baseTransform;
    this.type = 'Pattern';
    this.ctx = ctx;
  }

  TilingPattern.prototype = {
    createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
      var operatorList = this.operatorList;
      var bbox = this.bbox;
      var xstep = this.xstep;
      var ystep = this.ystep;
      var paintType = this.paintType;
      var tilingType = this.tilingType;
      var color = this.color;
      var canvasGraphicsFactory = this.canvasGraphicsFactory;
      (0, _util.info)('TilingType: ' + tilingType);
      var x0 = bbox[0],
          y0 = bbox[1],
          x1 = bbox[2],
          y1 = bbox[3];

      var matrixScale = _util.Util.singularValueDecompose2dScale(this.matrix);

      var curMatrixScale = _util.Util.singularValueDecompose2dScale(this.baseTransform);

      var combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
      var dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
      var dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
      var tmpCanvas = owner.cachedCanvases.getCanvas('pattern', dimx.size, dimy.size, true);
      var tmpCtx = tmpCanvas.context;
      var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
      graphics.groupLevel = owner.groupLevel;
      this.setFillAndStrokeStyleToContext(graphics, paintType, color);
      graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
      graphics.transform(1, 0, 0, 1, -x0, -y0);
      this.clipBbox(graphics, bbox, x0, y0, x1, y1);
      graphics.executeOperatorList(operatorList);
      this.ctx.transform(1, 0, 0, 1, x0, y0);
      this.ctx.scale(1 / dimx.scale, 1 / dimy.scale);
      return tmpCanvas.canvas;
    },
    getSizeAndScale: function TilingPattern_getSizeAndScale(step, realOutputSize, scale) {
      step = Math.abs(step);
      var maxSize = Math.max(MAX_PATTERN_SIZE, realOutputSize);
      var size = Math.ceil(step * scale);

      if (size >= maxSize) {
        size = maxSize;
      } else {
        scale = size / step;
      }

      return {
        scale: scale,
        size: size
      };
    },
    clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
      if (Array.isArray(bbox) && bbox.length === 4) {
        var bboxWidth = x1 - x0;
        var bboxHeight = y1 - y0;
        graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
        graphics.clip();
        graphics.endPath();
      }
    },
    setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(graphics, paintType, color) {
      var context = graphics.ctx,
          current = graphics.current;

      switch (paintType) {
        case PaintType.COLORED:
          var ctx = this.ctx;
          context.fillStyle = ctx.fillStyle;
          context.strokeStyle = ctx.strokeStyle;
          current.fillColor = ctx.fillStyle;
          current.strokeColor = ctx.strokeStyle;
          break;

        case PaintType.UNCOLORED:
          var cssColor = _util.Util.makeCssRgb(color[0], color[1], color[2]);

          context.fillStyle = cssColor;
          context.strokeStyle = cssColor;
          current.fillColor = cssColor;
          current.strokeColor = cssColor;
          break;

        default:
          throw new _util.FormatError("Unsupported paint type: ".concat(paintType));
      }
    },
    getPattern: function TilingPattern_getPattern(ctx, owner) {
      ctx = this.ctx;
      ctx.setTransform.apply(ctx, this.baseTransform);
      ctx.transform.apply(ctx, this.matrix);
      var temporaryPatternCanvas = this.createPatternCanvas(owner);
      return ctx.createPattern(temporaryPatternCanvas, 'repeat');
    }
  };
  return TilingPattern;
}();

exports.TilingPattern = TilingPattern;

/***/ }),
/* 188 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalWorkerOptions = void 0;
var GlobalWorkerOptions = Object.create(null);
exports.GlobalWorkerOptions = GlobalWorkerOptions;
GlobalWorkerOptions.workerPort = GlobalWorkerOptions.workerPort === undefined ? null : GlobalWorkerOptions.workerPort;
GlobalWorkerOptions.workerSrc = GlobalWorkerOptions.workerSrc === undefined ? '' : GlobalWorkerOptions.workerSrc;

/***/ }),
/* 189 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageHandler = MessageHandler;

var _util = __w_pdfjs_require__(1);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var StreamKind = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};

function wrapReason(reason) {
  if (_typeof(reason) !== 'object') {
    return reason;
  }

  switch (reason.name) {
    case 'AbortException':
      return new _util.AbortException(reason.message);

    case 'MissingPDFException':
      return new _util.MissingPDFException(reason.message);

    case 'UnexpectedResponseException':
      return new _util.UnexpectedResponseException(reason.message, reason.status);

    case 'UnknownErrorException':
      return new _util.UnknownErrorException(reason.message, reason.details);

    default:
      return new _util.UnknownErrorException(reason.message, reason.toString());
  }
}

function MessageHandler(sourceName, targetName, comObj) {
  var _this = this;

  this.sourceName = sourceName;
  this.targetName = targetName;
  this.comObj = comObj;
  this.callbackId = 1;
  this.streamId = 1;
  this.postMessageTransfers = true;
  this.streamSinks = Object.create(null);
  this.streamControllers = Object.create(null);
  var callbacksCapabilities = this.callbacksCapabilities = Object.create(null);
  var ah = this.actionHandler = Object.create(null);

  this._onComObjOnMessage = function (event) {
    var data = event.data;

    if (data.targetName !== _this.sourceName) {
      return;
    }

    if (data.stream) {
      _this._processStreamMessage(data);
    } else if (data.isReply) {
      var callbackId = data.callbackId;

      if (data.callbackId in callbacksCapabilities) {
        var callback = callbacksCapabilities[callbackId];
        delete callbacksCapabilities[callbackId];

        if ('reason' in data) {
          callback.reject(wrapReason(data.reason));
        } else {
          callback.resolve(data.data);
        }
      } else {
        throw new Error("Cannot resolve callback ".concat(callbackId));
      }
    } else if (data.action in ah) {
      var action = ah[data.action];

      if (data.callbackId) {
        var _sourceName = _this.sourceName;
        var _targetName = data.sourceName;
        new Promise(function (resolve) {
          resolve(action(data.data));
        }).then(function (result) {
          comObj.postMessage({
            sourceName: _sourceName,
            targetName: _targetName,
            isReply: true,
            callbackId: data.callbackId,
            data: result
          });
        }, function (reason) {
          comObj.postMessage({
            sourceName: _sourceName,
            targetName: _targetName,
            isReply: true,
            callbackId: data.callbackId,
            reason: wrapReason(reason)
          });
        });
      } else if (data.streamId) {
        _this._createStreamSink(data);
      } else {
        action(data.data);
      }
    } else {
      throw new Error("Unknown action from worker: ".concat(data.action));
    }
  };

  comObj.addEventListener('message', this._onComObjOnMessage);
}

MessageHandler.prototype = {
  on: function on(actionName, handler) {
    var ah = this.actionHandler;

    if (ah[actionName]) {
      throw new Error("There is already an actionName called \"".concat(actionName, "\""));
    }

    ah[actionName] = handler;
  },
  send: function send(actionName, data, transfers) {
    this.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data: data
    }, transfers);
  },
  sendWithPromise: function sendWithPromise(actionName, data, transfers) {
    var callbackId = this.callbackId++;
    var capability = (0, _util.createPromiseCapability)();
    this.callbacksCapabilities[callbackId] = capability;

    try {
      this.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: actionName,
        callbackId: callbackId,
        data: data
      }, transfers);
    } catch (ex) {
      capability.reject(ex);
    }

    return capability.promise;
  },
  sendWithStream: function sendWithStream(actionName, data, queueingStrategy, transfers) {
    var _this2 = this;

    var streamId = this.streamId++;
    var sourceName = this.sourceName;
    var targetName = this.targetName;
    var comObj = this.comObj;
    return new _util.ReadableStream({
      start: function start(controller) {
        var startCapability = (0, _util.createPromiseCapability)();
        _this2.streamControllers[streamId] = {
          controller: controller,
          startCall: startCapability,
          pullCall: null,
          cancelCall: null,
          isClosed: false
        };

        _this2.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          action: actionName,
          streamId: streamId,
          data: data,
          desiredSize: controller.desiredSize
        }, transfers);

        return startCapability.promise;
      },
      pull: function pull(controller) {
        var pullCapability = (0, _util.createPromiseCapability)();
        _this2.streamControllers[streamId].pullCall = pullCapability;
        comObj.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          stream: StreamKind.PULL,
          streamId: streamId,
          desiredSize: controller.desiredSize
        });
        return pullCapability.promise;
      },
      cancel: function cancel(reason) {
        (0, _util.assert)(reason instanceof Error, 'cancel must have a valid reason');
        var cancelCapability = (0, _util.createPromiseCapability)();
        _this2.streamControllers[streamId].cancelCall = cancelCapability;
        _this2.streamControllers[streamId].isClosed = true;
        comObj.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          stream: StreamKind.CANCEL,
          streamId: streamId,
          reason: wrapReason(reason)
        });
        return cancelCapability.promise;
      }
    }, queueingStrategy);
  },
  _createStreamSink: function _createStreamSink(data) {
    var self = this;
    var action = this.actionHandler[data.action];
    var streamId = data.streamId;
    var desiredSize = data.desiredSize;
    var sourceName = this.sourceName;
    var targetName = data.sourceName;
    var capability = (0, _util.createPromiseCapability)();
    var comObj = this.comObj;
    var streamSink = {
      enqueue: function enqueue(chunk) {
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var transfers = arguments.length > 2 ? arguments[2] : undefined;

        if (this.isCancelled) {
          return;
        }

        var lastDesiredSize = this.desiredSize;
        this.desiredSize -= size;

        if (lastDesiredSize > 0 && this.desiredSize <= 0) {
          this.sinkCapability = (0, _util.createPromiseCapability)();
          this.ready = this.sinkCapability.promise;
        }

        self.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          stream: StreamKind.ENQUEUE,
          streamId: streamId,
          chunk: chunk
        }, transfers);
      },
      close: function close() {
        if (this.isCancelled) {
          return;
        }

        this.isCancelled = true;
        comObj.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          stream: StreamKind.CLOSE,
          streamId: streamId
        });
        delete self.streamSinks[streamId];
      },
      error: function error(reason) {
        (0, _util.assert)(reason instanceof Error, 'error must have a valid reason');

        if (this.isCancelled) {
          return;
        }

        this.isCancelled = true;
        comObj.postMessage({
          sourceName: sourceName,
          targetName: targetName,
          stream: StreamKind.ERROR,
          streamId: streamId,
          reason: wrapReason(reason)
        });
      },
      sinkCapability: capability,
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize: desiredSize,
      ready: null
    };
    streamSink.sinkCapability.resolve();
    streamSink.ready = streamSink.sinkCapability.promise;
    this.streamSinks[streamId] = streamSink;
    new Promise(function (resolve) {
      resolve(action(data.data, streamSink));
    }).then(function () {
      comObj.postMessage({
        sourceName: sourceName,
        targetName: targetName,
        stream: StreamKind.START_COMPLETE,
        streamId: streamId,
        success: true
      });
    }, function (reason) {
      comObj.postMessage({
        sourceName: sourceName,
        targetName: targetName,
        stream: StreamKind.START_COMPLETE,
        streamId: streamId,
        reason: wrapReason(reason)
      });
    });
  },
  _processStreamMessage: function _processStreamMessage(data) {
    var _this3 = this;

    var sourceName = this.sourceName;
    var targetName = data.sourceName;
    var streamId = data.streamId;
    var comObj = this.comObj;

    var deleteStreamController = function deleteStreamController() {
      Promise.all([_this3.streamControllers[streamId].startCall, _this3.streamControllers[streamId].pullCall, _this3.streamControllers[streamId].cancelCall].map(function (capability) {
        return capability && capability.promise["catch"](function () {});
      })).then(function () {
        delete _this3.streamControllers[streamId];
      });
    };

    switch (data.stream) {
      case StreamKind.START_COMPLETE:
        if (data.success) {
          this.streamControllers[streamId].startCall.resolve();
        } else {
          this.streamControllers[streamId].startCall.reject(wrapReason(data.reason));
        }

        break;

      case StreamKind.PULL_COMPLETE:
        if (data.success) {
          this.streamControllers[streamId].pullCall.resolve();
        } else {
          this.streamControllers[streamId].pullCall.reject(wrapReason(data.reason));
        }

        break;

      case StreamKind.PULL:
        if (!this.streamSinks[streamId]) {
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            stream: StreamKind.PULL_COMPLETE,
            streamId: streamId,
            success: true
          });
          break;
        }

        if (this.streamSinks[streamId].desiredSize <= 0 && data.desiredSize > 0) {
          this.streamSinks[streamId].sinkCapability.resolve();
        }

        this.streamSinks[streamId].desiredSize = data.desiredSize;
        var onPull = this.streamSinks[data.streamId].onPull;
        new Promise(function (resolve) {
          resolve(onPull && onPull());
        }).then(function () {
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            stream: StreamKind.PULL_COMPLETE,
            streamId: streamId,
            success: true
          });
        }, function (reason) {
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            stream: StreamKind.PULL_COMPLETE,
            streamId: streamId,
            reason: wrapReason(reason)
          });
        });
        break;

      case StreamKind.ENQUEUE:
        (0, _util.assert)(this.streamControllers[streamId], 'enqueue should have stream controller');

        if (this.streamControllers[streamId].isClosed) {
          break;
        }

        this.streamControllers[streamId].controller.enqueue(data.chunk);
        break;

      case StreamKind.CLOSE:
        (0, _util.assert)(this.streamControllers[streamId], 'close should have stream controller');

        if (this.streamControllers[streamId].isClosed) {
          break;
        }

        this.streamControllers[streamId].isClosed = true;
        this.streamControllers[streamId].controller.close();
        deleteStreamController();
        break;

      case StreamKind.ERROR:
        (0, _util.assert)(this.streamControllers[streamId], 'error should have stream controller');
        this.streamControllers[streamId].controller.error(wrapReason(data.reason));
        deleteStreamController();
        break;

      case StreamKind.CANCEL_COMPLETE:
        if (data.success) {
          this.streamControllers[streamId].cancelCall.resolve();
        } else {
          this.streamControllers[streamId].cancelCall.reject(wrapReason(data.reason));
        }

        deleteStreamController();
        break;

      case StreamKind.CANCEL:
        if (!this.streamSinks[streamId]) {
          break;
        }

        var onCancel = this.streamSinks[data.streamId].onCancel;
        new Promise(function (resolve) {
          resolve(onCancel && onCancel(wrapReason(data.reason)));
        }).then(function () {
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            stream: StreamKind.CANCEL_COMPLETE,
            streamId: streamId,
            success: true
          });
        }, function (reason) {
          comObj.postMessage({
            sourceName: sourceName,
            targetName: targetName,
            stream: StreamKind.CANCEL_COMPLETE,
            streamId: streamId,
            reason: wrapReason(reason)
          });
        });
        this.streamSinks[streamId].sinkCapability.reject(wrapReason(data.reason));
        this.streamSinks[streamId].isCancelled = true;
        delete this.streamSinks[streamId];
        break;

      default:
        throw new Error('Unexpected stream case');
    }
  },
  postMessage: function postMessage(message, transfers) {
    if (transfers && this.postMessageTransfers) {
      this.comObj.postMessage(message, transfers);
    } else {
      this.comObj.postMessage(message);
    }
  },
  destroy: function destroy() {
    this.comObj.removeEventListener('message', this._onComObjOnMessage);
  }
};

/***/ }),
/* 190 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Metadata = void 0;

var _util = __w_pdfjs_require__(1);

var _xml_parser = __w_pdfjs_require__(191);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Metadata =
/*#__PURE__*/
function () {
  function Metadata(data) {
    _classCallCheck(this, Metadata);

    (0, _util.assert)(typeof data === 'string', 'Metadata: input is not a string');
    data = this._repair(data);
    var parser = new _xml_parser.SimpleXMLParser();
    var xmlDocument = parser.parseFromString(data);
    this._metadata = Object.create(null);

    if (xmlDocument) {
      this._parse(xmlDocument);
    }
  }

  _createClass(Metadata, [{
    key: "_repair",
    value: function _repair(data) {
      return data.replace(/^([^<]+)/, '').replace(/>\\376\\377([^<]+)/g, function (all, codes) {
        var bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g, function (code, d1, d2, d3) {
          return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
        }).replace(/&(amp|apos|gt|lt|quot);/g, function (str, name) {
          switch (name) {
            case 'amp':
              return '&';

            case 'apos':
              return '\'';

            case 'gt':
              return '>';

            case 'lt':
              return '<';

            case 'quot':
              return '\"';
          }

          throw new Error("_repair: ".concat(name, " isn't defined."));
        });
        var chars = '';

        for (var i = 0, ii = bytes.length; i < ii; i += 2) {
          var code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);

          if (code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38) {
            chars += String.fromCharCode(code);
          } else {
            chars += '&#x' + (0x10000 + code).toString(16).substring(1) + ';';
          }
        }

        return '>' + chars;
      });
    }
  }, {
    key: "_parse",
    value: function _parse(xmlDocument) {
      var rdf = xmlDocument.documentElement;

      if (rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
        rdf = rdf.firstChild;

        while (rdf && rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
          rdf = rdf.nextSibling;
        }
      }

      var nodeName = rdf ? rdf.nodeName.toLowerCase() : null;

      if (!rdf || nodeName !== 'rdf:rdf' || !rdf.hasChildNodes()) {
        return;
      }

      var children = rdf.childNodes;

      for (var i = 0, ii = children.length; i < ii; i++) {
        var desc = children[i];

        if (desc.nodeName.toLowerCase() !== 'rdf:description') {
          continue;
        }

        for (var j = 0, jj = desc.childNodes.length; j < jj; j++) {
          if (desc.childNodes[j].nodeName.toLowerCase() !== '#text') {
            var entry = desc.childNodes[j];
            var name = entry.nodeName.toLowerCase();
            this._metadata[name] = entry.textContent.trim();
          }
        }
      }
    }
  }, {
    key: "get",
    value: function get(name) {
      var data = this._metadata[name];
      return typeof data !== 'undefined' ? data : null;
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this._metadata;
    }
  }, {
    key: "has",
    value: function has(name) {
      return typeof this._metadata[name] !== 'undefined';
    }
  }]);

  return Metadata;
}();

exports.Metadata = Metadata;

/***/ }),
/* 191 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleXMLParser = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var XMLParserErrorCode = {
  NoError: 0,
  EndOfDocument: -1,
  UnterminatedCdat: -2,
  UnterminatedXmlDeclaration: -3,
  UnterminatedDoctypeDeclaration: -4,
  UnterminatedComment: -5,
  MalformedElement: -6,
  OutOfMemory: -7,
  UnterminatedAttributeValue: -8,
  UnterminatedElement: -9,
  ElementNeverBegun: -10
};

function isWhitespace(s, index) {
  var ch = s[index];
  return ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t';
}

function isWhitespaceString(s) {
  for (var i = 0, ii = s.length; i < ii; i++) {
    if (!isWhitespace(s, i)) {
      return false;
    }
  }

  return true;
}

var XMLParserBase =
/*#__PURE__*/
function () {
  function XMLParserBase() {
    _classCallCheck(this, XMLParserBase);
  }

  _createClass(XMLParserBase, [{
    key: "_resolveEntities",
    value: function _resolveEntities(s) {
      var _this = this;

      return s.replace(/&([^;]+);/g, function (all, entity) {
        if (entity.substring(0, 2) === '#x') {
          return String.fromCharCode(parseInt(entity.substring(2), 16));
        } else if (entity.substring(0, 1) === '#') {
          return String.fromCharCode(parseInt(entity.substring(1), 10));
        }

        switch (entity) {
          case 'lt':
            return '<';

          case 'gt':
            return '>';

          case 'amp':
            return '&';

          case 'quot':
            return '\"';
        }

        return _this.onResolveEntity(entity);
      });
    }
  }, {
    key: "_parseContent",
    value: function _parseContent(s, start) {
      var pos = start,
          name,
          attributes = [];

      function skipWs() {
        while (pos < s.length && isWhitespace(s, pos)) {
          ++pos;
        }
      }

      while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '>' && s[pos] !== '/') {
        ++pos;
      }

      name = s.substring(start, pos);
      skipWs();

      while (pos < s.length && s[pos] !== '>' && s[pos] !== '/' && s[pos] !== '?') {
        skipWs();
        var attrName = '',
            attrValue = '';

        while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '=') {
          attrName += s[pos];
          ++pos;
        }

        skipWs();

        if (s[pos] !== '=') {
          return null;
        }

        ++pos;
        skipWs();
        var attrEndChar = s[pos];

        if (attrEndChar !== '\"' && attrEndChar !== '\'') {
          return null;
        }

        var attrEndIndex = s.indexOf(attrEndChar, ++pos);

        if (attrEndIndex < 0) {
          return null;
        }

        attrValue = s.substring(pos, attrEndIndex);
        attributes.push({
          name: attrName,
          value: this._resolveEntities(attrValue)
        });
        pos = attrEndIndex + 1;
        skipWs();
      }

      return {
        name: name,
        attributes: attributes,
        parsed: pos - start
      };
    }
  }, {
    key: "_parseProcessingInstruction",
    value: function _parseProcessingInstruction(s, start) {
      var pos = start,
          name,
          value;

      function skipWs() {
        while (pos < s.length && isWhitespace(s, pos)) {
          ++pos;
        }
      }

      while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '>' && s[pos] !== '/') {
        ++pos;
      }

      name = s.substring(start, pos);
      skipWs();
      var attrStart = pos;

      while (pos < s.length && (s[pos] !== '?' || s[pos + 1] !== '>')) {
        ++pos;
      }

      value = s.substring(attrStart, pos);
      return {
        name: name,
        value: value,
        parsed: pos - start
      };
    }
  }, {
    key: "parseXml",
    value: function parseXml(s) {
      var i = 0;

      while (i < s.length) {
        var ch = s[i];
        var j = i;

        if (ch === '<') {
          ++j;
          var ch2 = s[j];
          var q = void 0;

          switch (ch2) {
            case '/':
              ++j;
              q = s.indexOf('>', j);

              if (q < 0) {
                this.onError(XMLParserErrorCode.UnterminatedElement);
                return;
              }

              this.onEndElement(s.substring(j, q));
              j = q + 1;
              break;

            case '?':
              ++j;

              var pi = this._parseProcessingInstruction(s, j);

              if (s.substring(j + pi.parsed, j + pi.parsed + 2) !== '?>') {
                this.onError(XMLParserErrorCode.UnterminatedXmlDeclaration);
                return;
              }

              this.onPi(pi.name, pi.value);
              j += pi.parsed + 2;
              break;

            case '!':
              if (s.substring(j + 1, j + 3) === '--') {
                q = s.indexOf('-->', j + 3);

                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedComment);
                  return;
                }

                this.onComment(s.substring(j + 3, q));
                j = q + 3;
              } else if (s.substring(j + 1, j + 8) === '[CDATA[') {
                q = s.indexOf(']]>', j + 8);

                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedCdat);
                  return;
                }

                this.onCdata(s.substring(j + 8, q));
                j = q + 3;
              } else if (s.substring(j + 1, j + 8) === 'DOCTYPE') {
                var q2 = s.indexOf('[', j + 8);
                var complexDoctype = false;
                q = s.indexOf('>', j + 8);

                if (q < 0) {
                  this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                  return;
                }

                if (q2 > 0 && q > q2) {
                  q = s.indexOf(']>', j + 8);

                  if (q < 0) {
                    this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                    return;
                  }

                  complexDoctype = true;
                }

                var doctypeContent = s.substring(j + 8, q + (complexDoctype ? 1 : 0));
                this.onDoctype(doctypeContent);
                j = q + (complexDoctype ? 2 : 1);
              } else {
                this.onError(XMLParserErrorCode.MalformedElement);
                return;
              }

              break;

            default:
              var content = this._parseContent(s, j);

              if (content === null) {
                this.onError(XMLParserErrorCode.MalformedElement);
                return;
              }

              var isClosed = false;

              if (s.substring(j + content.parsed, j + content.parsed + 2) === '/>') {
                isClosed = true;
              } else if (s.substring(j + content.parsed, j + content.parsed + 1) !== '>') {
                this.onError(XMLParserErrorCode.UnterminatedElement);
                return;
              }

              this.onBeginElement(content.name, content.attributes, isClosed);
              j += content.parsed + (isClosed ? 2 : 1);
              break;
          }
        } else {
          while (j < s.length && s[j] !== '<') {
            j++;
          }

          var text = s.substring(i, j);
          this.onText(this._resolveEntities(text));
        }

        i = j;
      }
    }
  }, {
    key: "onResolveEntity",
    value: function onResolveEntity(name) {
      return "&".concat(name, ";");
    }
  }, {
    key: "onPi",
    value: function onPi(name, value) {}
  }, {
    key: "onComment",
    value: function onComment(text) {}
  }, {
    key: "onCdata",
    value: function onCdata(text) {}
  }, {
    key: "onDoctype",
    value: function onDoctype(doctypeContent) {}
  }, {
    key: "onText",
    value: function onText(text) {}
  }, {
    key: "onBeginElement",
    value: function onBeginElement(name, attributes, isEmpty) {}
  }, {
    key: "onEndElement",
    value: function onEndElement(name) {}
  }, {
    key: "onError",
    value: function onError(code) {}
  }]);

  return XMLParserBase;
}();

var SimpleDOMNode =
/*#__PURE__*/
function () {
  function SimpleDOMNode(nodeName, nodeValue) {
    _classCallCheck(this, SimpleDOMNode);

    this.nodeName = nodeName;
    this.nodeValue = nodeValue;
    Object.defineProperty(this, 'parentNode', {
      value: null,
      writable: true
    });
  }

  _createClass(SimpleDOMNode, [{
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes && this.childNodes.length > 0;
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.childNodes && this.childNodes[0];
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var childNodes = this.parentNode.childNodes;

      if (!childNodes) {
        return undefined;
      }

      var index = childNodes.indexOf(this);

      if (index === -1) {
        return undefined;
      }

      return childNodes[index + 1];
    }
  }, {
    key: "textContent",
    get: function get() {
      if (!this.childNodes) {
        return this.nodeValue || '';
      }

      return this.childNodes.map(function (child) {
        return child.textContent;
      }).join('');
    }
  }]);

  return SimpleDOMNode;
}();

var SimpleXMLParser =
/*#__PURE__*/
function (_XMLParserBase) {
  _inherits(SimpleXMLParser, _XMLParserBase);

  function SimpleXMLParser() {
    var _this2;

    _classCallCheck(this, SimpleXMLParser);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SimpleXMLParser).call(this));
    _this2._currentFragment = null;
    _this2._stack = null;
    _this2._errorCode = XMLParserErrorCode.NoError;
    return _this2;
  }

  _createClass(SimpleXMLParser, [{
    key: "parseFromString",
    value: function parseFromString(data) {
      this._currentFragment = [];
      this._stack = [];
      this._errorCode = XMLParserErrorCode.NoError;
      this.parseXml(data);

      if (this._errorCode !== XMLParserErrorCode.NoError) {
        return undefined;
      }

      var _this$_currentFragmen = _slicedToArray(this._currentFragment, 1),
          documentElement = _this$_currentFragmen[0];

      if (!documentElement) {
        return undefined;
      }

      return {
        documentElement: documentElement
      };
    }
  }, {
    key: "onResolveEntity",
    value: function onResolveEntity(name) {
      switch (name) {
        case 'apos':
          return '\'';
      }

      return _get(_getPrototypeOf(SimpleXMLParser.prototype), "onResolveEntity", this).call(this, name);
    }
  }, {
    key: "onText",
    value: function onText(text) {
      if (isWhitespaceString(text)) {
        return;
      }

      var node = new SimpleDOMNode('#text', text);

      this._currentFragment.push(node);
    }
  }, {
    key: "onCdata",
    value: function onCdata(text) {
      var node = new SimpleDOMNode('#text', text);

      this._currentFragment.push(node);
    }
  }, {
    key: "onBeginElement",
    value: function onBeginElement(name, attributes, isEmpty) {
      var node = new SimpleDOMNode(name);
      node.childNodes = [];

      this._currentFragment.push(node);

      if (isEmpty) {
        return;
      }

      this._stack.push(this._currentFragment);

      this._currentFragment = node.childNodes;
    }
  }, {
    key: "onEndElement",
    value: function onEndElement(name) {
      this._currentFragment = this._stack.pop() || [];
      var lastElement = this._currentFragment[this._currentFragment.length - 1];

      if (!lastElement) {
        return;
      }

      for (var i = 0, ii = lastElement.childNodes.length; i < ii; i++) {
        lastElement.childNodes[i].parentNode = lastElement;
      }
    }
  }, {
    key: "onError",
    value: function onError(code) {
      this._errorCode = code;
    }
  }]);

  return SimpleXMLParser;
}(XMLParserBase);

exports.SimpleXMLParser = SimpleXMLParser;

/***/ }),
/* 192 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFDataTransportStream = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(180));

var _util = __w_pdfjs_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PDFDataTransportStream =
/*#__PURE__*/
function () {
  function PDFDataTransportStream(params, pdfDataRangeTransport) {
    var _this = this;

    _classCallCheck(this, PDFDataTransportStream);

    (0, _util.assert)(pdfDataRangeTransport);
    this._queuedChunks = [];
    this._progressiveDone = params.progressiveDone || false;
    var initialData = params.initialData;

    if (initialData && initialData.length > 0) {
      var buffer = new Uint8Array(initialData).buffer;

      this._queuedChunks.push(buffer);
    }

    this._pdfDataRangeTransport = pdfDataRangeTransport;
    this._isStreamingSupported = !params.disableStream;
    this._isRangeSupported = !params.disableRange;
    this._contentLength = params.length;
    this._fullRequestReader = null;
    this._rangeReaders = [];

    this._pdfDataRangeTransport.addRangeListener(function (begin, chunk) {
      _this._onReceiveData({
        begin: begin,
        chunk: chunk
      });
    });

    this._pdfDataRangeTransport.addProgressListener(function (loaded, total) {
      _this._onProgress({
        loaded: loaded,
        total: total
      });
    });

    this._pdfDataRangeTransport.addProgressiveReadListener(function (chunk) {
      _this._onReceiveData({
        chunk: chunk
      });
    });

    this._pdfDataRangeTransport.addProgressiveDoneListener(function () {
      _this._onProgressiveDone();
    });

    this._pdfDataRangeTransport.transportReady();
  }

  _createClass(PDFDataTransportStream, [{
    key: "_onReceiveData",
    value: function _onReceiveData(args) {
      var buffer = new Uint8Array(args.chunk).buffer;

      if (args.begin === undefined) {
        if (this._fullRequestReader) {
          this._fullRequestReader._enqueue(buffer);
        } else {
          this._queuedChunks.push(buffer);
        }
      } else {
        var found = this._rangeReaders.some(function (rangeReader) {
          if (rangeReader._begin !== args.begin) {
            return false;
          }

          rangeReader._enqueue(buffer);

          return true;
        });

        (0, _util.assert)(found);
      }
    }
  }, {
    key: "_onProgress",
    value: function _onProgress(evt) {
      if (evt.total === undefined) {
        var firstReader = this._rangeReaders[0];

        if (firstReader && firstReader.onProgress) {
          firstReader.onProgress({
            loaded: evt.loaded
          });
        }
      } else {
        var fullReader = this._fullRequestReader;

        if (fullReader && fullReader.onProgress) {
          fullReader.onProgress({
            loaded: evt.loaded,
            total: evt.total
          });
        }
      }
    }
  }, {
    key: "_onProgressiveDone",
    value: function _onProgressiveDone() {
      if (this._fullRequestReader) {
        this._fullRequestReader.progressiveDone();
      }

      this._progressiveDone = true;
    }
  }, {
    key: "_removeRangeReader",
    value: function _removeRangeReader(reader) {
      var i = this._rangeReaders.indexOf(reader);

      if (i >= 0) {
        this._rangeReaders.splice(i, 1);
      }
    }
  }, {
    key: "getFullReader",
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      var queuedChunks = this._queuedChunks;
      this._queuedChunks = null;
      return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone);
    }
  }, {
    key: "getRangeReader",
    value: function getRangeReader(begin, end) {
      if (end <= this._progressiveDataLength) {
        return null;
      }

      var reader = new PDFDataTransportStreamRangeReader(this, begin, end);

      this._pdfDataRangeTransport.requestDataRange(begin, end);

      this._rangeReaders.push(reader);

      return reader;
    }
  }, {
    key: "cancelAllRequests",
    value: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }

      var readers = this._rangeReaders.slice(0);

      readers.forEach(function (rangeReader) {
        rangeReader.cancel(reason);
      });

      this._pdfDataRangeTransport.abort();
    }
  }, {
    key: "_progressiveDataLength",
    get: function get() {
      return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
    }
  }]);

  return PDFDataTransportStream;
}();

exports.PDFDataTransportStream = PDFDataTransportStream;

var PDFDataTransportStreamReader =
/*#__PURE__*/
function () {
  function PDFDataTransportStreamReader(stream, queuedChunks) {
    var progressiveDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, PDFDataTransportStreamReader);

    this._stream = stream;
    this._done = progressiveDone || false;
    this._filename = null;
    this._queuedChunks = queuedChunks || [];
    this._loaded = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this._queuedChunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var chunk = _step.value;
        this._loaded += chunk.byteLength;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this._requests = [];
    this._headersReady = Promise.resolve();
    stream._fullRequestReader = this;
    this.onProgress = null;
  }

  _createClass(PDFDataTransportStreamReader, [{
    key: "_enqueue",
    value: function _enqueue(chunk) {
      if (this._done) {
        return;
      }

      if (this._requests.length > 0) {
        var requestCapability = this._requests.shift();

        requestCapability.resolve({
          value: chunk,
          done: false
        });
      } else {
        this._queuedChunks.push(chunk);
      }

      this._loaded += chunk.byteLength;
    }
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var chunk, requestCapability;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this._queuedChunks.length > 0)) {
                  _context.next = 3;
                  break;
                }

                chunk = this._queuedChunks.shift();
                return _context.abrupt("return", {
                  value: chunk,
                  done: false
                });

              case 3:
                if (!this._done) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 5:
                requestCapability = (0, _util.createPromiseCapability)();

                this._requests.push(requestCapability);

                return _context.abrupt("return", requestCapability.promise);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      this._done = true;

      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });

      this._requests = [];
    }
  }, {
    key: "progressiveDone",
    value: function progressiveDone() {
      if (this._done) {
        return;
      }

      this._done = true;
    }
  }, {
    key: "headersReady",
    get: function get() {
      return this._headersReady;
    }
  }, {
    key: "filename",
    get: function get() {
      return this._filename;
    }
  }, {
    key: "isRangeSupported",
    get: function get() {
      return this._stream._isRangeSupported;
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._stream._isStreamingSupported;
    }
  }, {
    key: "contentLength",
    get: function get() {
      return this._stream._contentLength;
    }
  }]);

  return PDFDataTransportStreamReader;
}();

var PDFDataTransportStreamRangeReader =
/*#__PURE__*/
function () {
  function PDFDataTransportStreamRangeReader(stream, begin, end) {
    _classCallCheck(this, PDFDataTransportStreamRangeReader);

    this._stream = stream;
    this._begin = begin;
    this._end = end;
    this._queuedChunk = null;
    this._requests = [];
    this._done = false;
    this.onProgress = null;
  }

  _createClass(PDFDataTransportStreamRangeReader, [{
    key: "_enqueue",
    value: function _enqueue(chunk) {
      if (this._done) {
        return;
      }

      if (this._requests.length === 0) {
        this._queuedChunk = chunk;
      } else {
        var requestsCapability = this._requests.shift();

        requestsCapability.resolve({
          value: chunk,
          done: false
        });

        this._requests.forEach(function (requestCapability) {
          requestCapability.resolve({
            value: undefined,
            done: true
          });
        });

        this._requests = [];
      }

      this._done = true;

      this._stream._removeRangeReader(this);
    }
  }, {
    key: "read",
    value: function () {
      var _read2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var chunk, requestCapability;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._queuedChunk) {
                  _context2.next = 4;
                  break;
                }

                chunk = this._queuedChunk;
                this._queuedChunk = null;
                return _context2.abrupt("return", {
                  value: chunk,
                  done: false
                });

              case 4:
                if (!this._done) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 6:
                requestCapability = (0, _util.createPromiseCapability)();

                this._requests.push(requestCapability);

                return _context2.abrupt("return", requestCapability.promise);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function read() {
        return _read2.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      this._done = true;

      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });

      this._requests = [];

      this._stream._removeRangeReader(this);
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return false;
    }
  }]);

  return PDFDataTransportStreamRangeReader;
}();

/***/ }),
/* 193 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebGLContext = void 0;

var _util = __w_pdfjs_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WebGLContext =
/*#__PURE__*/
function () {
  function WebGLContext(_ref) {
    var _ref$enable = _ref.enable,
        enable = _ref$enable === void 0 ? false : _ref$enable;

    _classCallCheck(this, WebGLContext);

    this._enabled = enable === true;
  }

  _createClass(WebGLContext, [{
    key: "composeSMask",
    value: function composeSMask(_ref2) {
      var layer = _ref2.layer,
          mask = _ref2.mask,
          properties = _ref2.properties;
      return WebGLUtils.composeSMask(layer, mask, properties);
    }
  }, {
    key: "drawFigures",
    value: function drawFigures(_ref3) {
      var width = _ref3.width,
          height = _ref3.height,
          backgroundColor = _ref3.backgroundColor,
          figures = _ref3.figures,
          context = _ref3.context;
      return WebGLUtils.drawFigures(width, height, backgroundColor, figures, context);
    }
  }, {
    key: "clear",
    value: function clear() {
      WebGLUtils.cleanup();
    }
  }, {
    key: "isEnabled",
    get: function get() {
      var enabled = this._enabled;

      if (enabled) {
        enabled = WebGLUtils.tryInitGL();
      }

      return (0, _util.shadow)(this, 'isEnabled', enabled);
    }
  }]);

  return WebGLContext;
}();

exports.WebGLContext = WebGLContext;

var WebGLUtils = function WebGLUtilsClosure() {
  function loadShader(gl, code, shaderType) {
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (!compiled) {
      var errorMsg = gl.getShaderInfoLog(shader);
      throw new Error('Error during shader compilation: ' + errorMsg);
    }

    return shader;
  }

  function createVertexShader(gl, code) {
    return loadShader(gl, code, gl.VERTEX_SHADER);
  }

  function createFragmentShader(gl, code) {
    return loadShader(gl, code, gl.FRAGMENT_SHADER);
  }

  function createProgram(gl, shaders) {
    var program = gl.createProgram();

    for (var i = 0, ii = shaders.length; i < ii; ++i) {
      gl.attachShader(program, shaders[i]);
    }

    gl.linkProgram(program);
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);

    if (!linked) {
      var errorMsg = gl.getProgramInfoLog(program);
      throw new Error('Error during program linking: ' + errorMsg);
    }

    return program;
  }

  function createTexture(gl, image, textureId) {
    gl.activeTexture(textureId);
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    return texture;
  }

  var currentGL, currentCanvas;

  function generateGL() {
    if (currentGL) {
      return;
    }

    currentCanvas = document.createElement('canvas');
    currentGL = currentCanvas.getContext('webgl', {
      premultipliedalpha: false
    });
  }

  var smaskVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ';
  var smaskFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ';
  var smaskCache = null;

  function initSmaskGL() {
    var canvas, gl;
    generateGL();
    canvas = currentCanvas;
    currentCanvas = null;
    gl = currentGL;
    currentGL = null;
    var vertexShader = createVertexShader(gl, smaskVertexShaderCode);
    var fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
    var program = createProgram(gl, [vertexShader, fragmentShader]);
    gl.useProgram(program);
    var cache = {};
    cache.gl = gl;
    cache.canvas = canvas;
    cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    cache.positionLocation = gl.getAttribLocation(program, 'a_position');
    cache.backdropLocation = gl.getUniformLocation(program, 'u_backdrop');
    cache.subtypeLocation = gl.getUniformLocation(program, 'u_subtype');
    var texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
    var texLayerLocation = gl.getUniformLocation(program, 'u_image');
    var texMaskLocation = gl.getUniformLocation(program, 'u_mask');
    var texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1i(texLayerLocation, 0);
    gl.uniform1i(texMaskLocation, 1);
    smaskCache = cache;
  }

  function composeSMask(layer, mask, properties) {
    var width = layer.width,
        height = layer.height;

    if (!smaskCache) {
      initSmaskGL();
    }

    var cache = smaskCache,
        canvas = cache.canvas,
        gl = cache.gl;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.uniform2f(cache.resolutionLocation, width, height);

    if (properties.backdrop) {
      gl.uniform4f(cache.resolutionLocation, properties.backdrop[0], properties.backdrop[1], properties.backdrop[2], 1);
    } else {
      gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
    }

    gl.uniform1i(cache.subtypeLocation, properties.subtype === 'Luminosity' ? 1 : 0);
    var texture = createTexture(gl, layer, gl.TEXTURE0);
    var maskTexture = createTexture(gl, mask, gl.TEXTURE1);
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, width, 0, 0, height, 0, height, width, 0, width, height]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.positionLocation);
    gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.flush();
    gl.deleteTexture(texture);
    gl.deleteTexture(maskTexture);
    gl.deleteBuffer(buffer);
    return canvas;
  }

  var figuresVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ';
  var figuresFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ';
  var figuresCache = null;

  function initFiguresGL() {
    var canvas, gl;
    generateGL();
    canvas = currentCanvas;
    currentCanvas = null;
    gl = currentGL;
    currentGL = null;
    var vertexShader = createVertexShader(gl, figuresVertexShaderCode);
    var fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
    var program = createProgram(gl, [vertexShader, fragmentShader]);
    gl.useProgram(program);
    var cache = {};
    cache.gl = gl;
    cache.canvas = canvas;
    cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    cache.scaleLocation = gl.getUniformLocation(program, 'u_scale');
    cache.offsetLocation = gl.getUniformLocation(program, 'u_offset');
    cache.positionLocation = gl.getAttribLocation(program, 'a_position');
    cache.colorLocation = gl.getAttribLocation(program, 'a_color');
    figuresCache = cache;
  }

  function drawFigures(width, height, backgroundColor, figures, context) {
    if (!figuresCache) {
      initFiguresGL();
    }

    var cache = figuresCache,
        canvas = cache.canvas,
        gl = cache.gl;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.uniform2f(cache.resolutionLocation, width, height);
    var count = 0;
    var i, ii, rows;

    for (i = 0, ii = figures.length; i < ii; i++) {
      switch (figures[i].type) {
        case 'lattice':
          rows = figures[i].coords.length / figures[i].verticesPerRow | 0;
          count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
          break;

        case 'triangles':
          count += figures[i].coords.length;
          break;
      }
    }

    var coords = new Float32Array(count * 2);
    var colors = new Uint8Array(count * 3);
    var coordsMap = context.coords,
        colorsMap = context.colors;
    var pIndex = 0,
        cIndex = 0;

    for (i = 0, ii = figures.length; i < ii; i++) {
      var figure = figures[i],
          ps = figure.coords,
          cs = figure.colors;

      switch (figure.type) {
        case 'lattice':
          var cols = figure.verticesPerRow;
          rows = ps.length / cols | 0;

          for (var row = 1; row < rows; row++) {
            var offset = row * cols + 1;

            for (var col = 1; col < cols; col++, offset++) {
              coords[pIndex] = coordsMap[ps[offset - cols - 1]];
              coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
              coords[pIndex + 2] = coordsMap[ps[offset - cols]];
              coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
              coords[pIndex + 4] = coordsMap[ps[offset - 1]];
              coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
              colors[cIndex] = colorsMap[cs[offset - cols - 1]];
              colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
              colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
              colors[cIndex + 3] = colorsMap[cs[offset - cols]];
              colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
              colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
              colors[cIndex + 6] = colorsMap[cs[offset - 1]];
              colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
              colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];
              coords[pIndex + 6] = coords[pIndex + 2];
              coords[pIndex + 7] = coords[pIndex + 3];
              coords[pIndex + 8] = coords[pIndex + 4];
              coords[pIndex + 9] = coords[pIndex + 5];
              coords[pIndex + 10] = coordsMap[ps[offset]];
              coords[pIndex + 11] = coordsMap[ps[offset] + 1];
              colors[cIndex + 9] = colors[cIndex + 3];
              colors[cIndex + 10] = colors[cIndex + 4];
              colors[cIndex + 11] = colors[cIndex + 5];
              colors[cIndex + 12] = colors[cIndex + 6];
              colors[cIndex + 13] = colors[cIndex + 7];
              colors[cIndex + 14] = colors[cIndex + 8];
              colors[cIndex + 15] = colorsMap[cs[offset]];
              colors[cIndex + 16] = colorsMap[cs[offset] + 1];
              colors[cIndex + 17] = colorsMap[cs[offset] + 2];
              pIndex += 12;
              cIndex += 18;
            }
          }

          break;

        case 'triangles':
          for (var j = 0, jj = ps.length; j < jj; j++) {
            coords[pIndex] = coordsMap[ps[j]];
            coords[pIndex + 1] = coordsMap[ps[j] + 1];
            colors[cIndex] = colorsMap[cs[j]];
            colors[cIndex + 1] = colorsMap[cs[j] + 1];
            colors[cIndex + 2] = colorsMap[cs[j] + 2];
            pIndex += 2;
            cIndex += 3;
          }

          break;
      }
    }

    if (backgroundColor) {
      gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255, backgroundColor[2] / 255, 1.0);
    } else {
      gl.clearColor(0, 0, 0, 0);
    }

    gl.clear(gl.COLOR_BUFFER_BIT);
    var coordsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.positionLocation);
    gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
    var colorsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.colorLocation);
    gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false, 0, 0);
    gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
    gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);
    gl.drawArrays(gl.TRIANGLES, 0, count);
    gl.flush();
    gl.deleteBuffer(coordsBuffer);
    gl.deleteBuffer(colorsBuffer);
    return canvas;
  }

  return {
    tryInitGL: function tryInitGL() {
      try {
        generateGL();
        return !!currentGL;
      } catch (ex) {}

      return false;
    },
    composeSMask: composeSMask,
    drawFigures: drawFigures,
    cleanup: function cleanup() {
      if (smaskCache && smaskCache.canvas) {
        smaskCache.canvas.width = 0;
        smaskCache.canvas.height = 0;
      }

      if (figuresCache && figuresCache.canvas) {
        figuresCache.canvas.width = 0;
        figuresCache.canvas.height = 0;
      }

      smaskCache = null;
      figuresCache = null;
    }
  };
}();

/***/ }),
/* 194 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTextLayer = void 0;

var _util = __w_pdfjs_require__(1);

var _global_scope = _interopRequireDefault(__w_pdfjs_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renderTextLayer = function renderTextLayerClosure() {
  var MAX_TEXT_DIVS_TO_RENDER = 100000;
  var NonWhitespaceRegexp = /\S/;

  function isAllWhitespace(str) {
    return !NonWhitespaceRegexp.test(str);
  }

  function appendText(task, geom, styles) {
    var textDiv = document.createElement('span');
    var textDivProperties = {
      angle: 0,
      canvasWidth: 0,
      isWhitespace: false,
      originalTransform: null,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      scale: 1
    };

    task._textDivs.push(textDiv);

    if (isAllWhitespace(geom.str)) {
      textDivProperties.isWhitespace = true;

      task._textDivProperties.set(textDiv, textDivProperties);

      return;
    }

    var tx = _util.Util.transform(task._viewport.transform, geom.transform);

    var angle = Math.atan2(tx[1], tx[0]);
    var style = styles[geom.fontName];

    if (style.vertical) {
      angle += Math.PI / 2;
    }

    var fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
    var fontAscent = fontHeight;

    if (style.ascent) {
      fontAscent = style.ascent * fontAscent;
    } else if (style.descent) {
      fontAscent = (1 + style.descent) * fontAscent;
    }

    var left, top;

    if (angle === 0) {
      left = tx[4];
      top = tx[5] - fontAscent;
    } else {
      left = tx[4] + fontAscent * Math.sin(angle);
      top = tx[5] - fontAscent * Math.cos(angle);
    }

    textDiv.style.left = "".concat(left, "px");
    textDiv.style.top = "".concat(top, "px");
    textDiv.style.fontSize = "".concat(fontHeight, "px");
    textDiv.style.fontFamily = style.fontFamily;
    textDiv.textContent = geom.str;

    if (task._fontInspectorEnabled) {
      textDiv.dataset.fontName = geom.fontName;
    }

    if (angle !== 0) {
      textDivProperties.angle = angle * (180 / Math.PI);
    }

    if (geom.str.length > 1) {
      if (style.vertical) {
        textDivProperties.canvasWidth = geom.height * task._viewport.scale;
      } else {
        textDivProperties.canvasWidth = geom.width * task._viewport.scale;
      }
    }

    task._textDivProperties.set(textDiv, textDivProperties);

    if (task._textContentStream) {
      task._layoutText(textDiv);
    }

    if (task._enhanceTextSelection) {
      var angleCos = 1,
          angleSin = 0;

      if (angle !== 0) {
        angleCos = Math.cos(angle);
        angleSin = Math.sin(angle);
      }

      var divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
      var divHeight = fontHeight;
      var m, b;

      if (angle !== 0) {
        m = [angleCos, angleSin, -angleSin, angleCos, left, top];
        b = _util.Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
      } else {
        b = [left, top, left + divWidth, top + divHeight];
      }

      task._bounds.push({
        left: b[0],
        top: b[1],
        right: b[2],
        bottom: b[3],
        div: textDiv,
        size: [divWidth, divHeight],
        m: m
      });
    }
  }

  function render(task) {
    if (task._canceled) {
      return;
    }

    var textDivs = task._textDivs;
    var capability = task._capability;
    var textDivsLength = textDivs.length;

    if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
      task._renderingDone = true;
      capability.resolve();
      return;
    }

    if (!task._textContentStream) {
      for (var i = 0; i < textDivsLength; i++) {
        task._layoutText(textDivs[i]);
      }
    }

    task._renderingDone = true;
    capability.resolve();
  }

  function expand(task) {
    var bounds = task._bounds;
    var viewport = task._viewport;
    var expanded = expandBounds(viewport.width, viewport.height, bounds);

    for (var i = 0; i < expanded.length; i++) {
      var div = bounds[i].div;

      var divProperties = task._textDivProperties.get(div);

      if (divProperties.angle === 0) {
        divProperties.paddingLeft = bounds[i].left - expanded[i].left;
        divProperties.paddingTop = bounds[i].top - expanded[i].top;
        divProperties.paddingRight = expanded[i].right - bounds[i].right;
        divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;

        task._textDivProperties.set(div, divProperties);

        continue;
      }

      var e = expanded[i],
          b = bounds[i];
      var m = b.m,
          c = m[0],
          s = m[1];
      var points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
      var ts = new Float64Array(64);
      points.forEach(function (p, i) {
        var t = _util.Util.applyTransform(p, m);

        ts[i + 0] = c && (e.left - t[0]) / c;
        ts[i + 4] = s && (e.top - t[1]) / s;
        ts[i + 8] = c && (e.right - t[0]) / c;
        ts[i + 12] = s && (e.bottom - t[1]) / s;
        ts[i + 16] = s && (e.left - t[0]) / -s;
        ts[i + 20] = c && (e.top - t[1]) / c;
        ts[i + 24] = s && (e.right - t[0]) / -s;
        ts[i + 28] = c && (e.bottom - t[1]) / c;
        ts[i + 32] = c && (e.left - t[0]) / -c;
        ts[i + 36] = s && (e.top - t[1]) / -s;
        ts[i + 40] = c && (e.right - t[0]) / -c;
        ts[i + 44] = s && (e.bottom - t[1]) / -s;
        ts[i + 48] = s && (e.left - t[0]) / s;
        ts[i + 52] = c && (e.top - t[1]) / -c;
        ts[i + 56] = s && (e.right - t[0]) / s;
        ts[i + 60] = c && (e.bottom - t[1]) / -c;
      });

      var findPositiveMin = function findPositiveMin(ts, offset, count) {
        var result = 0;

        for (var i = 0; i < count; i++) {
          var t = ts[offset++];

          if (t > 0) {
            result = result ? Math.min(t, result) : t;
          }
        }

        return result;
      };

      var boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
      divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
      divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
      divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
      divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;

      task._textDivProperties.set(div, divProperties);
    }
  }

  function expandBounds(width, height, boxes) {
    var bounds = boxes.map(function (box, i) {
      return {
        x1: box.left,
        y1: box.top,
        x2: box.right,
        y2: box.bottom,
        index: i,
        x1New: undefined,
        x2New: undefined
      };
    });
    expandBoundsLTR(width, bounds);
    var expanded = new Array(boxes.length);
    bounds.forEach(function (b) {
      var i = b.index;
      expanded[i] = {
        left: b.x1New,
        top: 0,
        right: b.x2New,
        bottom: 0
      };
    });
    boxes.map(function (box, i) {
      var e = expanded[i],
          b = bounds[i];
      b.x1 = box.top;
      b.y1 = width - e.right;
      b.x2 = box.bottom;
      b.y2 = width - e.left;
      b.index = i;
      b.x1New = undefined;
      b.x2New = undefined;
    });
    expandBoundsLTR(height, bounds);
    bounds.forEach(function (b) {
      var i = b.index;
      expanded[i].top = b.x1New;
      expanded[i].bottom = b.x2New;
    });
    return expanded;
  }

  function expandBoundsLTR(width, bounds) {
    bounds.sort(function (a, b) {
      return a.x1 - b.x1 || a.index - b.index;
    });
    var fakeBoundary = {
      x1: -Infinity,
      y1: -Infinity,
      x2: 0,
      y2: Infinity,
      index: -1,
      x1New: 0,
      x2New: 0
    };
    var horizon = [{
      start: -Infinity,
      end: Infinity,
      boundary: fakeBoundary
    }];
    bounds.forEach(function (boundary) {
      var i = 0;

      while (i < horizon.length && horizon[i].end <= boundary.y1) {
        i++;
      }

      var j = horizon.length - 1;

      while (j >= 0 && horizon[j].start >= boundary.y2) {
        j--;
      }

      var horizonPart, affectedBoundary;
      var q,
          k,
          maxXNew = -Infinity;

      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        var xNew;

        if (affectedBoundary.x2 > boundary.x1) {
          xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
        } else if (affectedBoundary.x2New === undefined) {
          xNew = (affectedBoundary.x2 + boundary.x1) / 2;
        } else {
          xNew = affectedBoundary.x2New;
        }

        if (xNew > maxXNew) {
          maxXNew = xNew;
        }
      }

      boundary.x1New = maxXNew;

      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;

        if (affectedBoundary.x2New === undefined) {
          if (affectedBoundary.x2 > boundary.x1) {
            if (affectedBoundary.index > boundary.index) {
              affectedBoundary.x2New = affectedBoundary.x2;
            }
          } else {
            affectedBoundary.x2New = maxXNew;
          }
        } else if (affectedBoundary.x2New > maxXNew) {
          affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
        }
      }

      var changedHorizon = [],
          lastBoundary = null;

      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        var useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;

        if (lastBoundary === useBoundary) {
          changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
        } else {
          changedHorizon.push({
            start: horizonPart.start,
            end: horizonPart.end,
            boundary: useBoundary
          });
          lastBoundary = useBoundary;
        }
      }

      if (horizon[i].start < boundary.y1) {
        changedHorizon[0].start = boundary.y1;
        changedHorizon.unshift({
          start: horizon[i].start,
          end: boundary.y1,
          boundary: horizon[i].boundary
        });
      }

      if (boundary.y2 < horizon[j].end) {
        changedHorizon[changedHorizon.length - 1].end = boundary.y2;
        changedHorizon.push({
          start: boundary.y2,
          end: horizon[j].end,
          boundary: horizon[j].boundary
        });
      }

      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;

        if (affectedBoundary.x2New !== undefined) {
          continue;
        }

        var used = false;

        for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
          used = horizon[k].boundary === affectedBoundary;
        }

        for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
          used = horizon[k].boundary === affectedBoundary;
        }

        for (k = 0; !used && k < changedHorizon.length; k++) {
          used = changedHorizon[k].boundary === affectedBoundary;
        }

        if (!used) {
          affectedBoundary.x2New = maxXNew;
        }
      }

      Array.prototype.splice.apply(horizon, [i, j - i + 1].concat(changedHorizon));
    });
    horizon.forEach(function (horizonPart) {
      var affectedBoundary = horizonPart.boundary;

      if (affectedBoundary.x2New === undefined) {
        affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
      }
    });
  }

  function TextLayerRenderTask(_ref) {
    var _this = this;

    var textContent = _ref.textContent,
        textContentStream = _ref.textContentStream,
        container = _ref.container,
        viewport = _ref.viewport,
        textDivs = _ref.textDivs,
        textContentItemsStr = _ref.textContentItemsStr,
        enhanceTextSelection = _ref.enhanceTextSelection;
    this._textContent = textContent;
    this._textContentStream = textContentStream;
    this._container = container;
    this._viewport = viewport;
    this._textDivs = textDivs || [];
    this._textContentItemsStr = textContentItemsStr || [];
    this._enhanceTextSelection = !!enhanceTextSelection;
    this._fontInspectorEnabled = !!(_global_scope["default"].FontInspector && _global_scope["default"].FontInspector.enabled);
    this._reader = null;
    this._layoutTextLastFontSize = null;
    this._layoutTextLastFontFamily = null;
    this._layoutTextCtx = null;
    this._textDivProperties = new WeakMap();
    this._renderingDone = false;
    this._canceled = false;
    this._capability = (0, _util.createPromiseCapability)();
    this._renderTimer = null;
    this._bounds = [];

    this._capability.promise["finally"](function () {
      if (_this._layoutTextCtx) {
        _this._layoutTextCtx.canvas.width = 0;
        _this._layoutTextCtx.canvas.height = 0;
        _this._layoutTextCtx = null;
      }
    })["catch"](function () {});
  }

  TextLayerRenderTask.prototype = {
    get promise() {
      return this._capability.promise;
    },

    cancel: function TextLayer_cancel() {
      this._canceled = true;

      if (this._reader) {
        this._reader.cancel(new _util.AbortException('TextLayer task cancelled.'));

        this._reader = null;
      }

      if (this._renderTimer !== null) {
        clearTimeout(this._renderTimer);
        this._renderTimer = null;
      }

      this._capability.reject(new Error('TextLayer task cancelled.'));
    },
    _processItems: function _processItems(items, styleCache) {
      for (var i = 0, len = items.length; i < len; i++) {
        this._textContentItemsStr.push(items[i].str);

        appendText(this, items[i], styleCache);
      }
    },
    _layoutText: function _layoutText(textDiv) {
      var textDivProperties = this._textDivProperties.get(textDiv);

      if (textDivProperties.isWhitespace) {
        return;
      }

      var transform = '';

      if (textDivProperties.canvasWidth !== 0) {
        var _textDiv$style = textDiv.style,
            fontSize = _textDiv$style.fontSize,
            fontFamily = _textDiv$style.fontFamily;

        if (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) {
          this._layoutTextCtx.font = "".concat(fontSize, " ").concat(fontFamily);
          this._layoutTextLastFontSize = fontSize;
          this._layoutTextLastFontFamily = fontFamily;
        }

        var _this$_layoutTextCtx$ = this._layoutTextCtx.measureText(textDiv.textContent),
            width = _this$_layoutTextCtx$.width;

        if (width > 0) {
          textDivProperties.scale = textDivProperties.canvasWidth / width;
          transform = "scaleX(".concat(textDivProperties.scale, ")");
        }
      }

      if (textDivProperties.angle !== 0) {
        transform = "rotate(".concat(textDivProperties.angle, "deg) ").concat(transform);
      }

      if (transform.length > 0) {
        if (this._enhanceTextSelection) {
          textDivProperties.originalTransform = transform;
        }

        textDiv.style.transform = transform;
      }

      this._textDivProperties.set(textDiv, textDivProperties);

      this._container.appendChild(textDiv);
    },
    _render: function TextLayer_render(timeout) {
      var _this2 = this;

      var capability = (0, _util.createPromiseCapability)();
      var styleCache = Object.create(null);
      var canvas = document.createElement('canvas');
      canvas.mozOpaque = true;
      this._layoutTextCtx = canvas.getContext('2d', {
        alpha: false
      });

      if (this._textContent) {
        var textItems = this._textContent.items;
        var textStyles = this._textContent.styles;

        this._processItems(textItems, textStyles);

        capability.resolve();
      } else if (this._textContentStream) {
        var pump = function pump() {
          _this2._reader.read().then(function (_ref2) {
            var value = _ref2.value,
                done = _ref2.done;

            if (done) {
              capability.resolve();
              return;
            }

            Object.assign(styleCache, value.styles);

            _this2._processItems(value.items, styleCache);

            pump();
          }, capability.reject);
        };

        this._reader = this._textContentStream.getReader();
        pump();
      } else {
        throw new Error('Neither "textContent" nor "textContentStream"' + ' parameters specified.');
      }

      capability.promise.then(function () {
        styleCache = null;

        if (!timeout) {
          render(_this2);
        } else {
          _this2._renderTimer = setTimeout(function () {
            render(_this2);
            _this2._renderTimer = null;
          }, timeout);
        }
      }, this._capability.reject);
    },
    expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
      if (!this._enhanceTextSelection || !this._renderingDone) {
        return;
      }

      if (this._bounds !== null) {
        expand(this);
        this._bounds = null;
      }

      var NO_PADDING = '0 0 0 0';
      var transformBuf = [],
          paddingBuf = [];

      for (var i = 0, ii = this._textDivs.length; i < ii; i++) {
        var div = this._textDivs[i];

        var divProps = this._textDivProperties.get(div);

        if (divProps.isWhitespace) {
          continue;
        }

        if (expandDivs) {
          transformBuf.length = 0;
          paddingBuf.length = 0;

          if (divProps.originalTransform) {
            transformBuf.push(divProps.originalTransform);
          }

          if (divProps.paddingTop > 0) {
            paddingBuf.push("".concat(divProps.paddingTop, "px"));
            transformBuf.push("translateY(".concat(-divProps.paddingTop, "px)"));
          } else {
            paddingBuf.push(0);
          }

          if (divProps.paddingRight > 0) {
            paddingBuf.push("".concat(divProps.paddingRight / divProps.scale, "px"));
          } else {
            paddingBuf.push(0);
          }

          if (divProps.paddingBottom > 0) {
            paddingBuf.push("".concat(divProps.paddingBottom, "px"));
          } else {
            paddingBuf.push(0);
          }

          if (divProps.paddingLeft > 0) {
            paddingBuf.push("".concat(divProps.paddingLeft / divProps.scale, "px"));
            transformBuf.push("translateX(".concat(-divProps.paddingLeft / divProps.scale, "px)"));
          } else {
            paddingBuf.push(0);
          }

          var padding = paddingBuf.join(' ');

          if (padding !== NO_PADDING) {
            div.style.padding = padding;
          }

          if (transformBuf.length) {
            div.style.transform = transformBuf.join(' ');
          }
        } else {
          div.style.padding = null;
          div.style.transform = divProps.originalTransform;
        }
      }
    }
  };

  function renderTextLayer(renderParameters) {
    var task = new TextLayerRenderTask({
      textContent: renderParameters.textContent,
      textContentStream: renderParameters.textContentStream,
      container: renderParameters.container,
      viewport: renderParameters.viewport,
      textDivs: renderParameters.textDivs,
      textContentItemsStr: renderParameters.textContentItemsStr,
      enhanceTextSelection: renderParameters.enhanceTextSelection
    });

    task._render(renderParameters.timeout);

    return task;
  }

  return renderTextLayer;
}();

exports.renderTextLayer = renderTextLayer;

/***/ }),
/* 195 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnotationLayer = void 0;

var _display_utils = __w_pdfjs_require__(183);

var _util = __w_pdfjs_require__(1);

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnnotationElementFactory =
/*#__PURE__*/
function () {
  function AnnotationElementFactory() {
    _classCallCheck(this, AnnotationElementFactory);
  }

  _createClass(AnnotationElementFactory, null, [{
    key: "create",
    value: function create(parameters) {
      var subtype = parameters.data.annotationType;

      switch (subtype) {
        case _util.AnnotationType.LINK:
          return new LinkAnnotationElement(parameters);

        case _util.AnnotationType.TEXT:
          return new TextAnnotationElement(parameters);

        case _util.AnnotationType.WIDGET:
          var fieldType = parameters.data.fieldType;

          switch (fieldType) {
            case 'Tx':
              return new TextWidgetAnnotationElement(parameters);

            case 'Btn':
              if (parameters.data.radioButton) {
                return new RadioButtonWidgetAnnotationElement(parameters);
              } else if (parameters.data.checkBox) {
                return new CheckboxWidgetAnnotationElement(parameters);
              }

              return new PushButtonWidgetAnnotationElement(parameters);

            case 'Ch':
              return new ChoiceWidgetAnnotationElement(parameters);
          }

          return new WidgetAnnotationElement(parameters);

        case _util.AnnotationType.POPUP:
          return new PopupAnnotationElement(parameters);

        case _util.AnnotationType.FREETEXT:
          return new FreeTextAnnotationElement(parameters);

        case _util.AnnotationType.LINE:
          return new LineAnnotationElement(parameters);

        case _util.AnnotationType.SQUARE:
          return new SquareAnnotationElement(parameters);

        case _util.AnnotationType.CIRCLE:
          return new CircleAnnotationElement(parameters);

        case _util.AnnotationType.POLYLINE:
          return new PolylineAnnotationElement(parameters);

        case _util.AnnotationType.CARET:
          return new CaretAnnotationElement(parameters);

        case _util.AnnotationType.INK:
          return new InkAnnotationElement(parameters);

        case _util.AnnotationType.POLYGON:
          return new PolygonAnnotationElement(parameters);

        case _util.AnnotationType.HIGHLIGHT:
          return new HighlightAnnotationElement(parameters);

        case _util.AnnotationType.UNDERLINE:
          return new UnderlineAnnotationElement(parameters);

        case _util.AnnotationType.SQUIGGLY:
          return new SquigglyAnnotationElement(parameters);

        case _util.AnnotationType.STRIKEOUT:
          return new StrikeOutAnnotationElement(parameters);

        case _util.AnnotationType.STAMP:
          return new StampAnnotationElement(parameters);

        case _util.AnnotationType.FILEATTACHMENT:
          return new FileAttachmentAnnotationElement(parameters);

        default:
          return new AnnotationElement(parameters);
      }
    }
  }]);

  return AnnotationElementFactory;
}();

var AnnotationElement =
/*#__PURE__*/
function () {
  function AnnotationElement(parameters) {
    var isRenderable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var ignoreBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, AnnotationElement);

    this.isRenderable = isRenderable;
    this.data = parameters.data;
    this.layer = parameters.layer;
    this.page = parameters.page;
    this.viewport = parameters.viewport;
    this.linkService = parameters.linkService;
    this.downloadManager = parameters.downloadManager;
    this.imageResourcesPath = parameters.imageResourcesPath;
    this.renderInteractiveForms = parameters.renderInteractiveForms;
    this.svgFactory = parameters.svgFactory;

    if (isRenderable) {
      this.container = this._createContainer(ignoreBorder);
    }
  }

  _createClass(AnnotationElement, [{
    key: "_createContainer",
    value: function _createContainer() {
      var ignoreBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var data = this.data,
          page = this.page,
          viewport = this.viewport;
      var container = document.createElement('section');
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      container.setAttribute('data-annotation-id', data.id);

      var rect = _util.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);

      container.style.transform = "matrix(".concat(viewport.transform.join(','), ")");
      container.style.transformOrigin = "-".concat(rect[0], "px -").concat(rect[1], "px");

      if (!ignoreBorder && data.borderStyle.width > 0) {
        container.style.borderWidth = "".concat(data.borderStyle.width, "px");

        if (data.borderStyle.style !== _util.AnnotationBorderStyleType.UNDERLINE) {
          width = width - 2 * data.borderStyle.width;
          height = height - 2 * data.borderStyle.width;
        }

        var horizontalRadius = data.borderStyle.horizontalCornerRadius;
        var verticalRadius = data.borderStyle.verticalCornerRadius;

        if (horizontalRadius > 0 || verticalRadius > 0) {
          var radius = "".concat(horizontalRadius, "px / ").concat(verticalRadius, "px");
          container.style.borderRadius = radius;
        }

        switch (data.borderStyle.style) {
          case _util.AnnotationBorderStyleType.SOLID:
            container.style.borderStyle = 'solid';
            break;

          case _util.AnnotationBorderStyleType.DASHED:
            container.style.borderStyle = 'dashed';
            break;

          case _util.AnnotationBorderStyleType.BEVELED:
            (0, _util.warn)('Unimplemented border style: beveled');
            break;

          case _util.AnnotationBorderStyleType.INSET:
            (0, _util.warn)('Unimplemented border style: inset');
            break;

          case _util.AnnotationBorderStyleType.UNDERLINE:
            container.style.borderBottomStyle = 'solid';
            break;

          default:
            break;
        }

        if (data.color) {
          container.style.borderColor = _util.Util.makeCssRgb(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
        } else {
          container.style.borderWidth = 0;
        }
      }

      container.style.left = "".concat(rect[0], "px");
      container.style.top = "".concat(rect[1], "px");
      container.style.width = "".concat(width, "px");
      container.style.height = "".concat(height, "px");
      return container;
    }
  }, {
    key: "_createPopup",
    value: function _createPopup(container, trigger, data) {
      if (!trigger) {
        trigger = document.createElement('div');
        trigger.style.height = container.style.height;
        trigger.style.width = container.style.width;
        container.appendChild(trigger);
      }

      var popupElement = new PopupElement({
        container: container,
        trigger: trigger,
        color: data.color,
        title: data.title,
        modificationDate: data.modificationDate,
        contents: data.contents,
        hideWrapper: true
      });
      var popup = popupElement.render();
      popup.style.left = container.style.width;
      container.appendChild(popup);
    }
  }, {
    key: "render",
    value: function render() {
      (0, _util.unreachable)('Abstract method `AnnotationElement.render` called');
    }
  }]);

  return AnnotationElement;
}();

var LinkAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement) {
  _inherits(LinkAnnotationElement, _AnnotationElement);

  function LinkAnnotationElement(parameters) {
    _classCallCheck(this, LinkAnnotationElement);

    var isRenderable = !!(parameters.data.url || parameters.data.dest || parameters.data.action);
    return _possibleConstructorReturn(this, _getPrototypeOf(LinkAnnotationElement).call(this, parameters, isRenderable));
  }

  _createClass(LinkAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'linkAnnotation';
      var data = this.data,
          linkService = this.linkService;
      var link = document.createElement('a');

      if (data.url) {
        (0, _display_utils.addLinkAttributes)(link, {
          url: data.url,
          target: data.newWindow ? _display_utils.LinkTarget.BLANK : linkService.externalLinkTarget,
          rel: linkService.externalLinkRel,
          enabled: linkService.externalLinkEnabled
        });
      } else if (data.action) {
        this._bindNamedAction(link, data.action);
      } else {
        this._bindLink(link, data.dest);
      }

      this.container.appendChild(link);
      return this.container;
    }
  }, {
    key: "_bindLink",
    value: function _bindLink(link, destination) {
      var _this = this;

      link.href = this.linkService.getDestinationHash(destination);

      link.onclick = function () {
        if (destination) {
          _this.linkService.navigateTo(destination);
        }

        return false;
      };

      if (destination) {
        link.className = 'internalLink';
      }
    }
  }, {
    key: "_bindNamedAction",
    value: function _bindNamedAction(link, action) {
      var _this2 = this;

      link.href = this.linkService.getAnchorUrl('');

      link.onclick = function () {
        _this2.linkService.executeNamedAction(action);

        return false;
      };

      link.className = 'internalLink';
    }
  }]);

  return LinkAnnotationElement;
}(AnnotationElement);

var TextAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement2) {
  _inherits(TextAnnotationElement, _AnnotationElement2);

  function TextAnnotationElement(parameters) {
    _classCallCheck(this, TextAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(TextAnnotationElement).call(this, parameters, isRenderable));
  }

  _createClass(TextAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'textAnnotation';
      var image = document.createElement('img');
      image.style.height = this.container.style.height;
      image.style.width = this.container.style.width;
      image.src = this.imageResourcesPath + 'annotation-' + this.data.name.toLowerCase() + '.svg';
      image.alt = '[{{type}} Annotation]';
      image.dataset.l10nId = 'text_annotation_type';
      image.dataset.l10nArgs = JSON.stringify({
        type: this.data.name
      });

      if (!this.data.hasPopup) {
        this._createPopup(this.container, image, this.data);
      }

      this.container.appendChild(image);
      return this.container;
    }
  }]);

  return TextAnnotationElement;
}(AnnotationElement);

var WidgetAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement3) {
  _inherits(WidgetAnnotationElement, _AnnotationElement3);

  function WidgetAnnotationElement() {
    _classCallCheck(this, WidgetAnnotationElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(WidgetAnnotationElement).apply(this, arguments));
  }

  _createClass(WidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      return this.container;
    }
  }]);

  return WidgetAnnotationElement;
}(AnnotationElement);

var TextWidgetAnnotationElement =
/*#__PURE__*/
function (_WidgetAnnotationElem) {
  _inherits(TextWidgetAnnotationElement, _WidgetAnnotationElem);

  function TextWidgetAnnotationElement(parameters) {
    _classCallCheck(this, TextWidgetAnnotationElement);

    var isRenderable = parameters.renderInteractiveForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
    return _possibleConstructorReturn(this, _getPrototypeOf(TextWidgetAnnotationElement).call(this, parameters, isRenderable));
  }

  _createClass(TextWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      var TEXT_ALIGNMENT = ['left', 'center', 'right'];
      this.container.className = 'textWidgetAnnotation';
      var element = null;

      if (this.renderInteractiveForms) {
        if (this.data.multiLine) {
          element = document.createElement('textarea');
          element.textContent = this.data.fieldValue;
        } else {
          element = document.createElement('input');
          element.type = 'text';
          element.setAttribute('value', this.data.fieldValue);
        }

        element.disabled = this.data.readOnly;

        if (this.data.maxLen !== null) {
          element.maxLength = this.data.maxLen;
        }

        if (this.data.comb) {
          var fieldWidth = this.data.rect[2] - this.data.rect[0];
          var combWidth = fieldWidth / this.data.maxLen;
          element.classList.add('comb');
          element.style.letterSpacing = "calc(".concat(combWidth, "px - 1ch)");
        }
      } else {
        element = document.createElement('div');
        element.textContent = this.data.fieldValue;
        element.style.verticalAlign = 'middle';
        element.style.display = 'table-cell';
        var font = null;

        if (this.data.fontRefName && this.page.commonObjs.has(this.data.fontRefName)) {
          font = this.page.commonObjs.get(this.data.fontRefName);
        }

        this._setTextStyle(element, font);
      }

      if (this.data.textAlignment !== null) {
        element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
      }

      this.container.appendChild(element);
      return this.container;
    }
  }, {
    key: "_setTextStyle",
    value: function _setTextStyle(element, font) {
      var style = element.style;
      style.fontSize = "".concat(this.data.fontSize, "px");
      style.direction = this.data.fontDirection < 0 ? 'rtl' : 'ltr';

      if (!font) {
        return;
      }

      style.fontWeight = font.black ? font.bold ? '900' : 'bold' : font.bold ? 'bold' : 'normal';
      style.fontStyle = font.italic ? 'italic' : 'normal';
      var fontFamily = font.loadedName ? "\"".concat(font.loadedName, "\", ") : '';
      var fallbackName = font.fallbackName || 'Helvetica, sans-serif';
      style.fontFamily = fontFamily + fallbackName;
    }
  }]);

  return TextWidgetAnnotationElement;
}(WidgetAnnotationElement);

var CheckboxWidgetAnnotationElement =
/*#__PURE__*/
function (_WidgetAnnotationElem2) {
  _inherits(CheckboxWidgetAnnotationElement, _WidgetAnnotationElem2);

  function CheckboxWidgetAnnotationElement(parameters) {
    _classCallCheck(this, CheckboxWidgetAnnotationElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckboxWidgetAnnotationElement).call(this, parameters, parameters.renderInteractiveForms));
  }

  _createClass(CheckboxWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'buttonWidgetAnnotation checkBox';
      var element = document.createElement('input');
      element.disabled = this.data.readOnly;
      element.type = 'checkbox';

      if (this.data.fieldValue && this.data.fieldValue !== 'Off') {
        element.setAttribute('checked', true);
      }

      this.container.appendChild(element);
      return this.container;
    }
  }]);

  return CheckboxWidgetAnnotationElement;
}(WidgetAnnotationElement);

var RadioButtonWidgetAnnotationElement =
/*#__PURE__*/
function (_WidgetAnnotationElem3) {
  _inherits(RadioButtonWidgetAnnotationElement, _WidgetAnnotationElem3);

  function RadioButtonWidgetAnnotationElement(parameters) {
    _classCallCheck(this, RadioButtonWidgetAnnotationElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadioButtonWidgetAnnotationElement).call(this, parameters, parameters.renderInteractiveForms));
  }

  _createClass(RadioButtonWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'buttonWidgetAnnotation radioButton';
      var element = document.createElement('input');
      element.disabled = this.data.readOnly;
      element.type = 'radio';
      element.name = this.data.fieldName;

      if (this.data.fieldValue === this.data.buttonValue) {
        element.setAttribute('checked', true);
      }

      this.container.appendChild(element);
      return this.container;
    }
  }]);

  return RadioButtonWidgetAnnotationElement;
}(WidgetAnnotationElement);

var PushButtonWidgetAnnotationElement =
/*#__PURE__*/
function (_LinkAnnotationElemen) {
  _inherits(PushButtonWidgetAnnotationElement, _LinkAnnotationElemen);

  function PushButtonWidgetAnnotationElement() {
    _classCallCheck(this, PushButtonWidgetAnnotationElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(PushButtonWidgetAnnotationElement).apply(this, arguments));
  }

  _createClass(PushButtonWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      var container = _get(_getPrototypeOf(PushButtonWidgetAnnotationElement.prototype), "render", this).call(this);

      container.className = 'buttonWidgetAnnotation pushButton';
      return container;
    }
  }]);

  return PushButtonWidgetAnnotationElement;
}(LinkAnnotationElement);

var ChoiceWidgetAnnotationElement =
/*#__PURE__*/
function (_WidgetAnnotationElem4) {
  _inherits(ChoiceWidgetAnnotationElement, _WidgetAnnotationElem4);

  function ChoiceWidgetAnnotationElement(parameters) {
    _classCallCheck(this, ChoiceWidgetAnnotationElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceWidgetAnnotationElement).call(this, parameters, parameters.renderInteractiveForms));
  }

  _createClass(ChoiceWidgetAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'choiceWidgetAnnotation';
      var selectElement = document.createElement('select');
      selectElement.disabled = this.data.readOnly;

      if (!this.data.combo) {
        selectElement.size = this.data.options.length;

        if (this.data.multiSelect) {
          selectElement.multiple = true;
        }
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.data.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var option = _step.value;
          var optionElement = document.createElement('option');
          optionElement.textContent = option.displayValue;
          optionElement.value = option.exportValue;

          if (this.data.fieldValue.includes(option.displayValue)) {
            optionElement.setAttribute('selected', true);
          }

          selectElement.appendChild(optionElement);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.container.appendChild(selectElement);
      return this.container;
    }
  }]);

  return ChoiceWidgetAnnotationElement;
}(WidgetAnnotationElement);

var PopupAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement4) {
  _inherits(PopupAnnotationElement, _AnnotationElement4);

  function PopupAnnotationElement(parameters) {
    _classCallCheck(this, PopupAnnotationElement);

    var isRenderable = !!(parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(PopupAnnotationElement).call(this, parameters, isRenderable));
  }

  _createClass(PopupAnnotationElement, [{
    key: "render",
    value: function render() {
      var IGNORE_TYPES = ['Line', 'Square', 'Circle', 'PolyLine', 'Polygon', 'Ink'];
      this.container.className = 'popupAnnotation';

      if (IGNORE_TYPES.includes(this.data.parentType)) {
        return this.container;
      }

      var selector = "[data-annotation-id=\"".concat(this.data.parentId, "\"]");
      var parentElement = this.layer.querySelector(selector);

      if (!parentElement) {
        return this.container;
      }

      var popup = new PopupElement({
        container: this.container,
        trigger: parentElement,
        color: this.data.color,
        title: this.data.title,
        modificationDate: this.data.modificationDate,
        contents: this.data.contents
      });
      var parentLeft = parseFloat(parentElement.style.left);
      var parentWidth = parseFloat(parentElement.style.width);
      this.container.style.transformOrigin = "-".concat(parentLeft + parentWidth, "px -").concat(parentElement.style.top);
      this.container.style.left = "".concat(parentLeft + parentWidth, "px");
      this.container.appendChild(popup.render());
      return this.container;
    }
  }]);

  return PopupAnnotationElement;
}(AnnotationElement);

var PopupElement =
/*#__PURE__*/
function () {
  function PopupElement(parameters) {
    _classCallCheck(this, PopupElement);

    this.container = parameters.container;
    this.trigger = parameters.trigger;
    this.color = parameters.color;
    this.title = parameters.title;
    this.modificationDate = parameters.modificationDate;
    this.contents = parameters.contents;
    this.hideWrapper = parameters.hideWrapper || false;
    this.pinned = false;
  }

  _createClass(PopupElement, [{
    key: "render",
    value: function render() {
      var BACKGROUND_ENLIGHT = 0.7;
      var wrapper = document.createElement('div');
      wrapper.className = 'popupWrapper';
      this.hideElement = this.hideWrapper ? wrapper : this.container;
      this.hideElement.setAttribute('hidden', true);
      var popup = document.createElement('div');
      popup.className = 'popup';
      var color = this.color;

      if (color) {
        var r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
        var g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
        var b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
        popup.style.backgroundColor = _util.Util.makeCssRgb(r | 0, g | 0, b | 0);
      }

      var title = document.createElement('h1');
      title.textContent = this.title;
      popup.appendChild(title);

      var dateObject = _display_utils.PDFDateString.toDateObject(this.modificationDate);

      if (dateObject) {
        var modificationDate = document.createElement('span');
        modificationDate.textContent = '{{date}}, {{time}}';
        modificationDate.dataset.l10nId = 'annotation_date_string';
        modificationDate.dataset.l10nArgs = JSON.stringify({
          date: dateObject.toLocaleDateString(),
          time: dateObject.toLocaleTimeString()
        });
        popup.appendChild(modificationDate);
      }

      var contents = this._formatContents(this.contents);

      popup.appendChild(contents);
      this.trigger.addEventListener('click', this._toggle.bind(this));
      this.trigger.addEventListener('mouseover', this._show.bind(this, false));
      this.trigger.addEventListener('mouseout', this._hide.bind(this, false));
      popup.addEventListener('click', this._hide.bind(this, true));
      wrapper.appendChild(popup);
      return wrapper;
    }
  }, {
    key: "_formatContents",
    value: function _formatContents(contents) {
      var p = document.createElement('p');
      var lines = contents.split(/(?:\r\n?|\n)/);

      for (var i = 0, ii = lines.length; i < ii; ++i) {
        var line = lines[i];
        p.appendChild(document.createTextNode(line));

        if (i < ii - 1) {
          p.appendChild(document.createElement('br'));
        }
      }

      return p;
    }
  }, {
    key: "_toggle",
    value: function _toggle() {
      if (this.pinned) {
        this._hide(true);
      } else {
        this._show(true);
      }
    }
  }, {
    key: "_show",
    value: function _show() {
      var pin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (pin) {
        this.pinned = true;
      }

      if (this.hideElement.hasAttribute('hidden')) {
        this.hideElement.removeAttribute('hidden');
        this.container.style.zIndex += 1;
      }
    }
  }, {
    key: "_hide",
    value: function _hide() {
      var unpin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (unpin) {
        this.pinned = false;
      }

      if (!this.hideElement.hasAttribute('hidden') && !this.pinned) {
        this.hideElement.setAttribute('hidden', true);
        this.container.style.zIndex -= 1;
      }
    }
  }]);

  return PopupElement;
}();

var FreeTextAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement5) {
  _inherits(FreeTextAnnotationElement, _AnnotationElement5);

  function FreeTextAnnotationElement(parameters) {
    _classCallCheck(this, FreeTextAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(FreeTextAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(FreeTextAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'freeTextAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return FreeTextAnnotationElement;
}(AnnotationElement);

var LineAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement6) {
  _inherits(LineAnnotationElement, _AnnotationElement6);

  function LineAnnotationElement(parameters) {
    _classCallCheck(this, LineAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(LineAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(LineAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'lineAnnotation';
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var line = this.svgFactory.createElement('svg:line');
      line.setAttribute('x1', data.rect[2] - data.lineCoordinates[0]);
      line.setAttribute('y1', data.rect[3] - data.lineCoordinates[1]);
      line.setAttribute('x2', data.rect[2] - data.lineCoordinates[2]);
      line.setAttribute('y2', data.rect[3] - data.lineCoordinates[3]);
      line.setAttribute('stroke-width', data.borderStyle.width);
      line.setAttribute('stroke', 'transparent');
      svg.appendChild(line);
      this.container.append(svg);

      this._createPopup(this.container, line, data);

      return this.container;
    }
  }]);

  return LineAnnotationElement;
}(AnnotationElement);

var SquareAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement7) {
  _inherits(SquareAnnotationElement, _AnnotationElement7);

  function SquareAnnotationElement(parameters) {
    _classCallCheck(this, SquareAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(SquareAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(SquareAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'squareAnnotation';
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var borderWidth = data.borderStyle.width;
      var square = this.svgFactory.createElement('svg:rect');
      square.setAttribute('x', borderWidth / 2);
      square.setAttribute('y', borderWidth / 2);
      square.setAttribute('width', width - borderWidth);
      square.setAttribute('height', height - borderWidth);
      square.setAttribute('stroke-width', borderWidth);
      square.setAttribute('stroke', 'transparent');
      square.setAttribute('fill', 'none');
      svg.appendChild(square);
      this.container.append(svg);

      this._createPopup(this.container, square, data);

      return this.container;
    }
  }]);

  return SquareAnnotationElement;
}(AnnotationElement);

var CircleAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement8) {
  _inherits(CircleAnnotationElement, _AnnotationElement8);

  function CircleAnnotationElement(parameters) {
    _classCallCheck(this, CircleAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(CircleAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(CircleAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'circleAnnotation';
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var borderWidth = data.borderStyle.width;
      var circle = this.svgFactory.createElement('svg:ellipse');
      circle.setAttribute('cx', width / 2);
      circle.setAttribute('cy', height / 2);
      circle.setAttribute('rx', width / 2 - borderWidth / 2);
      circle.setAttribute('ry', height / 2 - borderWidth / 2);
      circle.setAttribute('stroke-width', borderWidth);
      circle.setAttribute('stroke', 'transparent');
      circle.setAttribute('fill', 'none');
      svg.appendChild(circle);
      this.container.append(svg);

      this._createPopup(this.container, circle, data);

      return this.container;
    }
  }]);

  return CircleAnnotationElement;
}(AnnotationElement);

var PolylineAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement9) {
  _inherits(PolylineAnnotationElement, _AnnotationElement9);

  function PolylineAnnotationElement(parameters) {
    var _this3;

    _classCallCheck(this, PolylineAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PolylineAnnotationElement).call(this, parameters, isRenderable, true));
    _this3.containerClassName = 'polylineAnnotation';
    _this3.svgElementName = 'svg:polyline';
    return _this3;
  }

  _createClass(PolylineAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = this.containerClassName;
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var points = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = data.vertices[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var coordinate = _step2.value;
          var x = coordinate.x - data.rect[0];
          var y = data.rect[3] - coordinate.y;
          points.push(x + ',' + y);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      points = points.join(' ');
      var polyline = this.svgFactory.createElement(this.svgElementName);
      polyline.setAttribute('points', points);
      polyline.setAttribute('stroke-width', data.borderStyle.width);
      polyline.setAttribute('stroke', 'transparent');
      polyline.setAttribute('fill', 'none');
      svg.appendChild(polyline);
      this.container.append(svg);

      this._createPopup(this.container, polyline, data);

      return this.container;
    }
  }]);

  return PolylineAnnotationElement;
}(AnnotationElement);

var PolygonAnnotationElement =
/*#__PURE__*/
function (_PolylineAnnotationEl) {
  _inherits(PolygonAnnotationElement, _PolylineAnnotationEl);

  function PolygonAnnotationElement(parameters) {
    var _this4;

    _classCallCheck(this, PolygonAnnotationElement);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PolygonAnnotationElement).call(this, parameters));
    _this4.containerClassName = 'polygonAnnotation';
    _this4.svgElementName = 'svg:polygon';
    return _this4;
  }

  return PolygonAnnotationElement;
}(PolylineAnnotationElement);

var CaretAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement10) {
  _inherits(CaretAnnotationElement, _AnnotationElement10);

  function CaretAnnotationElement(parameters) {
    _classCallCheck(this, CaretAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(CaretAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(CaretAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'caretAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return CaretAnnotationElement;
}(AnnotationElement);

var InkAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement11) {
  _inherits(InkAnnotationElement, _AnnotationElement11);

  function InkAnnotationElement(parameters) {
    var _this5;

    _classCallCheck(this, InkAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(InkAnnotationElement).call(this, parameters, isRenderable, true));
    _this5.containerClassName = 'inkAnnotation';
    _this5.svgElementName = 'svg:polyline';
    return _this5;
  }

  _createClass(InkAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = this.containerClassName;
      var data = this.data;
      var width = data.rect[2] - data.rect[0];
      var height = data.rect[3] - data.rect[1];
      var svg = this.svgFactory.create(width, height);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = data.inkLists[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var inkList = _step3.value;
          var points = [];
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = inkList[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var coordinate = _step4.value;
              var x = coordinate.x - data.rect[0];
              var y = data.rect[3] - coordinate.y;
              points.push("".concat(x, ",").concat(y));
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                _iterator4["return"]();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          points = points.join(' ');
          var polyline = this.svgFactory.createElement(this.svgElementName);
          polyline.setAttribute('points', points);
          polyline.setAttribute('stroke-width', data.borderStyle.width);
          polyline.setAttribute('stroke', 'transparent');
          polyline.setAttribute('fill', 'none');

          this._createPopup(this.container, polyline, data);

          svg.appendChild(polyline);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      this.container.append(svg);
      return this.container;
    }
  }]);

  return InkAnnotationElement;
}(AnnotationElement);

var HighlightAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement12) {
  _inherits(HighlightAnnotationElement, _AnnotationElement12);

  function HighlightAnnotationElement(parameters) {
    _classCallCheck(this, HighlightAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(HighlightAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(HighlightAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'highlightAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return HighlightAnnotationElement;
}(AnnotationElement);

var UnderlineAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement13) {
  _inherits(UnderlineAnnotationElement, _AnnotationElement13);

  function UnderlineAnnotationElement(parameters) {
    _classCallCheck(this, UnderlineAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(UnderlineAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(UnderlineAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'underlineAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return UnderlineAnnotationElement;
}(AnnotationElement);

var SquigglyAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement14) {
  _inherits(SquigglyAnnotationElement, _AnnotationElement14);

  function SquigglyAnnotationElement(parameters) {
    _classCallCheck(this, SquigglyAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(SquigglyAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(SquigglyAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'squigglyAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return SquigglyAnnotationElement;
}(AnnotationElement);

var StrikeOutAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement15) {
  _inherits(StrikeOutAnnotationElement, _AnnotationElement15);

  function StrikeOutAnnotationElement(parameters) {
    _classCallCheck(this, StrikeOutAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(StrikeOutAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(StrikeOutAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'strikeoutAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return StrikeOutAnnotationElement;
}(AnnotationElement);

var StampAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement16) {
  _inherits(StampAnnotationElement, _AnnotationElement16);

  function StampAnnotationElement(parameters) {
    _classCallCheck(this, StampAnnotationElement);

    var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
    return _possibleConstructorReturn(this, _getPrototypeOf(StampAnnotationElement).call(this, parameters, isRenderable, true));
  }

  _createClass(StampAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'stampAnnotation';

      if (!this.data.hasPopup) {
        this._createPopup(this.container, null, this.data);
      }

      return this.container;
    }
  }]);

  return StampAnnotationElement;
}(AnnotationElement);

var FileAttachmentAnnotationElement =
/*#__PURE__*/
function (_AnnotationElement17) {
  _inherits(FileAttachmentAnnotationElement, _AnnotationElement17);

  function FileAttachmentAnnotationElement(parameters) {
    var _this6;

    _classCallCheck(this, FileAttachmentAnnotationElement);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(FileAttachmentAnnotationElement).call(this, parameters, true));
    var _this6$data$file = _this6.data.file,
        filename = _this6$data$file.filename,
        content = _this6$data$file.content;
    _this6.filename = (0, _display_utils.getFilenameFromUrl)(filename);
    _this6.content = content;

    if (_this6.linkService.eventBus) {
      _this6.linkService.eventBus.dispatch('fileattachmentannotation', {
        source: _assertThisInitialized(_this6),
        id: (0, _util.stringToPDFString)(filename),
        filename: filename,
        content: content
      });
    }

    return _this6;
  }

  _createClass(FileAttachmentAnnotationElement, [{
    key: "render",
    value: function render() {
      this.container.className = 'fileAttachmentAnnotation';
      var trigger = document.createElement('div');
      trigger.style.height = this.container.style.height;
      trigger.style.width = this.container.style.width;
      trigger.addEventListener('dblclick', this._download.bind(this));

      if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
        this._createPopup(this.container, trigger, this.data);
      }

      this.container.appendChild(trigger);
      return this.container;
    }
  }, {
    key: "_download",
    value: function _download() {
      if (!this.downloadManager) {
        (0, _util.warn)('Download cannot be started due to unavailable download manager');
        return;
      }

      this.downloadManager.downloadData(this.content, this.filename, '');
    }
  }]);

  return FileAttachmentAnnotationElement;
}(AnnotationElement);

var AnnotationLayer =
/*#__PURE__*/
function () {
  function AnnotationLayer() {
    _classCallCheck(this, AnnotationLayer);
  }

  _createClass(AnnotationLayer, null, [{
    key: "render",
    value: function render(parameters) {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = parameters.annotations[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var data = _step5.value;

          if (!data) {
            continue;
          }

          var element = AnnotationElementFactory.create({
            data: data,
            layer: parameters.div,
            page: parameters.page,
            viewport: parameters.viewport,
            linkService: parameters.linkService,
            downloadManager: parameters.downloadManager,
            imageResourcesPath: parameters.imageResourcesPath || '',
            renderInteractiveForms: parameters.renderInteractiveForms || false,
            svgFactory: new _display_utils.DOMSVGFactory()
          });

          if (element.isRenderable) {
            parameters.div.appendChild(element.render());
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }, {
    key: "update",
    value: function update(parameters) {
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = parameters.annotations[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var data = _step6.value;
          var element = parameters.div.querySelector("[data-annotation-id=\"".concat(data.id, "\"]"));

          if (element) {
            element.style.transform = "matrix(".concat(parameters.viewport.transform.join(','), ")");
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
            _iterator6["return"]();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      parameters.div.removeAttribute('hidden');
    }
  }]);

  return AnnotationLayer;
}();

exports.AnnotationLayer = AnnotationLayer;

/***/ }),
/* 196 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVGGraphics = void 0;

var _util = __w_pdfjs_require__(1);

var _display_utils = __w_pdfjs_require__(183);

var _is_node = _interopRequireDefault(__w_pdfjs_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SVGGraphics = function SVGGraphics() {
  throw new Error('Not implemented: SVGGraphics');
};

exports.SVGGraphics = SVGGraphics;
{
  var opListToTree = function opListToTree(opList) {
    var opTree = [];
    var tmp = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = opList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var opListElement = _step.value;

        if (opListElement.fn === 'save') {
          opTree.push({
            'fnId': 92,
            'fn': 'group',
            'items': []
          });
          tmp.push(opTree);
          opTree = opTree[opTree.length - 1].items;
          continue;
        }

        if (opListElement.fn === 'restore') {
          opTree = tmp.pop();
        } else {
          opTree.push(opListElement);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return opTree;
  };

  var pf = function pf(value) {
    if (Number.isInteger(value)) {
      return value.toString();
    }

    var s = value.toFixed(10);
    var i = s.length - 1;

    if (s[i] !== '0') {
      return s;
    }

    do {
      i--;
    } while (s[i] === '0');

    return s.substring(0, s[i] === '.' ? i : i + 1);
  };

  var pm = function pm(m) {
    if (m[4] === 0 && m[5] === 0) {
      if (m[1] === 0 && m[2] === 0) {
        if (m[0] === 1 && m[3] === 1) {
          return '';
        }

        return "scale(".concat(pf(m[0]), " ").concat(pf(m[3]), ")");
      }

      if (m[0] === m[3] && m[1] === -m[2]) {
        var a = Math.acos(m[0]) * 180 / Math.PI;
        return "rotate(".concat(pf(a), ")");
      }
    } else {
      if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
        return "translate(".concat(pf(m[4]), " ").concat(pf(m[5]), ")");
      }
    }

    return "matrix(".concat(pf(m[0]), " ").concat(pf(m[1]), " ").concat(pf(m[2]), " ").concat(pf(m[3]), " ").concat(pf(m[4]), " ") + "".concat(pf(m[5]), ")");
  };

  var SVG_DEFAULTS = {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fillColor: '#000000'
  };
  var XML_NS = 'http://www.w3.org/XML/1998/namespace';
  var XLINK_NS = 'http://www.w3.org/1999/xlink';
  var LINE_CAP_STYLES = ['butt', 'round', 'square'];
  var LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];

  var convertImgDataToPng = function () {
    var PNG_HEADER = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    var CHUNK_WRAPPER_SIZE = 12;
    var crcTable = new Int32Array(256);

    for (var i = 0; i < 256; i++) {
      var c = i;

      for (var h = 0; h < 8; h++) {
        if (c & 1) {
          c = 0xedB88320 ^ c >> 1 & 0x7fffffff;
        } else {
          c = c >> 1 & 0x7fffffff;
        }
      }

      crcTable[i] = c;
    }

    function crc32(data, start, end) {
      var crc = -1;

      for (var _i = start; _i < end; _i++) {
        var a = (crc ^ data[_i]) & 0xff;
        var b = crcTable[a];
        crc = crc >>> 8 ^ b;
      }

      return crc ^ -1;
    }

    function writePngChunk(type, body, data, offset) {
      var p = offset;
      var len = body.length;
      data[p] = len >> 24 & 0xff;
      data[p + 1] = len >> 16 & 0xff;
      data[p + 2] = len >> 8 & 0xff;
      data[p + 3] = len & 0xff;
      p += 4;
      data[p] = type.charCodeAt(0) & 0xff;
      data[p + 1] = type.charCodeAt(1) & 0xff;
      data[p + 2] = type.charCodeAt(2) & 0xff;
      data[p + 3] = type.charCodeAt(3) & 0xff;
      p += 4;
      data.set(body, p);
      p += body.length;
      var crc = crc32(data, offset + 4, p);
      data[p] = crc >> 24 & 0xff;
      data[p + 1] = crc >> 16 & 0xff;
      data[p + 2] = crc >> 8 & 0xff;
      data[p + 3] = crc & 0xff;
    }

    function adler32(data, start, end) {
      var a = 1;
      var b = 0;

      for (var _i2 = start; _i2 < end; ++_i2) {
        a = (a + (data[_i2] & 0xff)) % 65521;
        b = (b + a) % 65521;
      }

      return b << 16 | a;
    }

    function deflateSync(literals) {
      if (!(0, _is_node["default"])()) {
        return deflateSyncUncompressed(literals);
      }

      try {
        var input;

        if (parseInt(process.versions.node) >= 8) {
          input = literals;
        } else {
          input = new Buffer(literals);
        }

        var output = require('zlib').deflateSync(input, {
          level: 9
        });

        return output instanceof Uint8Array ? output : new Uint8Array(output);
      } catch (e) {
        (0, _util.warn)('Not compressing PNG because zlib.deflateSync is unavailable: ' + e);
      }

      return deflateSyncUncompressed(literals);
    }

    function deflateSyncUncompressed(literals) {
      var len = literals.length;
      var maxBlockLength = 0xFFFF;
      var deflateBlocks = Math.ceil(len / maxBlockLength);
      var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
      var pi = 0;
      idat[pi++] = 0x78;
      idat[pi++] = 0x9c;
      var pos = 0;

      while (len > maxBlockLength) {
        idat[pi++] = 0x00;
        idat[pi++] = 0xff;
        idat[pi++] = 0xff;
        idat[pi++] = 0x00;
        idat[pi++] = 0x00;
        idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
        pi += maxBlockLength;
        pos += maxBlockLength;
        len -= maxBlockLength;
      }

      idat[pi++] = 0x01;
      idat[pi++] = len & 0xff;
      idat[pi++] = len >> 8 & 0xff;
      idat[pi++] = ~len & 0xffff & 0xff;
      idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
      idat.set(literals.subarray(pos), pi);
      pi += literals.length - pos;
      var adler = adler32(literals, 0, literals.length);
      idat[pi++] = adler >> 24 & 0xff;
      idat[pi++] = adler >> 16 & 0xff;
      idat[pi++] = adler >> 8 & 0xff;
      idat[pi++] = adler & 0xff;
      return idat;
    }

    function encode(imgData, kind, forceDataSchema, isMask) {
      var width = imgData.width;
      var height = imgData.height;
      var bitDepth, colorType, lineSize;
      var bytes = imgData.data;

      switch (kind) {
        case _util.ImageKind.GRAYSCALE_1BPP:
          colorType = 0;
          bitDepth = 1;
          lineSize = width + 7 >> 3;
          break;

        case _util.ImageKind.RGB_24BPP:
          colorType = 2;
          bitDepth = 8;
          lineSize = width * 3;
          break;

        case _util.ImageKind.RGBA_32BPP:
          colorType = 6;
          bitDepth = 8;
          lineSize = width * 4;
          break;

        default:
          throw new Error('invalid format');
      }

      var literals = new Uint8Array((1 + lineSize) * height);
      var offsetLiterals = 0,
          offsetBytes = 0;

      for (var y = 0; y < height; ++y) {
        literals[offsetLiterals++] = 0;
        literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
        offsetBytes += lineSize;
        offsetLiterals += lineSize;
      }

      if (kind === _util.ImageKind.GRAYSCALE_1BPP && isMask) {
        offsetLiterals = 0;

        for (var _y = 0; _y < height; _y++) {
          offsetLiterals++;

          for (var _i3 = 0; _i3 < lineSize; _i3++) {
            literals[offsetLiterals++] ^= 0xFF;
          }
        }
      }

      var ihdr = new Uint8Array([width >> 24 & 0xff, width >> 16 & 0xff, width >> 8 & 0xff, width & 0xff, height >> 24 & 0xff, height >> 16 & 0xff, height >> 8 & 0xff, height & 0xff, bitDepth, colorType, 0x00, 0x00, 0x00]);
      var idat = deflateSync(literals);
      var pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
      var data = new Uint8Array(pngLength);
      var offset = 0;
      data.set(PNG_HEADER, offset);
      offset += PNG_HEADER.length;
      writePngChunk('IHDR', ihdr, data, offset);
      offset += CHUNK_WRAPPER_SIZE + ihdr.length;
      writePngChunk('IDATA', idat, data, offset);
      offset += CHUNK_WRAPPER_SIZE + idat.length;
      writePngChunk('IEND', new Uint8Array(0), data, offset);
      return (0, _util.createObjectURL)(data, 'image/png', forceDataSchema);
    }

    return function convertImgDataToPng(imgData, forceDataSchema, isMask) {
      var kind = imgData.kind === undefined ? _util.ImageKind.GRAYSCALE_1BPP : imgData.kind;
      return encode(imgData, kind, forceDataSchema, isMask);
    };
  }();

  var SVGExtraState =
  /*#__PURE__*/
  function () {
    function SVGExtraState() {
      _classCallCheck(this, SVGExtraState);

      this.fontSizeScale = 1;
      this.fontWeight = SVG_DEFAULTS.fontWeight;
      this.fontSize = 0;
      this.textMatrix = _util.IDENTITY_MATRIX;
      this.fontMatrix = _util.FONT_IDENTITY_MATRIX;
      this.leading = 0;
      this.textRenderingMode = _util.TextRenderingMode.FILL;
      this.textMatrixScale = 1;
      this.x = 0;
      this.y = 0;
      this.lineX = 0;
      this.lineY = 0;
      this.charSpacing = 0;
      this.wordSpacing = 0;
      this.textHScale = 1;
      this.textRise = 0;
      this.fillColor = SVG_DEFAULTS.fillColor;
      this.strokeColor = '#000000';
      this.fillAlpha = 1;
      this.strokeAlpha = 1;
      this.lineWidth = 1;
      this.lineJoin = '';
      this.lineCap = '';
      this.miterLimit = 0;
      this.dashArray = [];
      this.dashPhase = 0;
      this.dependencies = [];
      this.activeClipUrl = null;
      this.clipGroup = null;
      this.maskId = '';
    }

    _createClass(SVGExtraState, [{
      key: "clone",
      value: function clone() {
        return Object.create(this);
      }
    }, {
      key: "setCurrentPoint",
      value: function setCurrentPoint(x, y) {
        this.x = x;
        this.y = y;
      }
    }]);

    return SVGExtraState;
  }();

  var clipCount = 0;
  var maskCount = 0;
  var shadingCount = 0;

  exports.SVGGraphics = SVGGraphics =
  /*#__PURE__*/
  function () {
    function SVGGraphics(commonObjs, objs, forceDataSchema) {
      _classCallCheck(this, SVGGraphics);

      this.svgFactory = new _display_utils.DOMSVGFactory();
      this.current = new SVGExtraState();
      this.transformMatrix = _util.IDENTITY_MATRIX;
      this.transformStack = [];
      this.extraStack = [];
      this.commonObjs = commonObjs;
      this.objs = objs;
      this.pendingClip = null;
      this.pendingEOFill = false;
      this.embedFonts = false;
      this.embeddedFonts = Object.create(null);
      this.cssStyle = null;
      this.forceDataSchema = !!forceDataSchema;
      this._operatorIdMapping = [];

      for (var op in _util.OPS) {
        this._operatorIdMapping[_util.OPS[op]] = op;
      }
    }

    _createClass(SVGGraphics, [{
      key: "save",
      value: function save() {
        this.transformStack.push(this.transformMatrix);
        var old = this.current;
        this.extraStack.push(old);
        this.current = old.clone();
      }
    }, {
      key: "restore",
      value: function restore() {
        this.transformMatrix = this.transformStack.pop();
        this.current = this.extraStack.pop();
        this.pendingClip = null;
        this.tgrp = null;
      }
    }, {
      key: "group",
      value: function group(items) {
        this.save();
        this.executeOpTree(items);
        this.restore();
      }
    }, {
      key: "loadDependencies",
      value: function loadDependencies(operatorList) {
        var _this = this;

        var fnArray = operatorList.fnArray;
        var argsArray = operatorList.argsArray;

        for (var i = 0, ii = fnArray.length; i < ii; i++) {
          if (fnArray[i] !== _util.OPS.dependency) {
            continue;
          }

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            var _loop = function _loop() {
              var obj = _step2.value;
              var objsPool = obj.startsWith('g_') ? _this.commonObjs : _this.objs;
              var promise = new Promise(function (resolve) {
                objsPool.get(obj, resolve);
              });

              _this.current.dependencies.push(promise);
            };

            for (var _iterator2 = argsArray[i][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }

        return Promise.all(this.current.dependencies);
      }
    }, {
      key: "transform",
      value: function transform(a, b, c, d, e, f) {
        var transformMatrix = [a, b, c, d, e, f];
        this.transformMatrix = _util.Util.transform(this.transformMatrix, transformMatrix);
        this.tgrp = null;
      }
    }, {
      key: "getSVG",
      value: function getSVG(operatorList, viewport) {
        var _this2 = this;

        this.viewport = viewport;

        var svgElement = this._initialize(viewport);

        return this.loadDependencies(operatorList).then(function () {
          _this2.transformMatrix = _util.IDENTITY_MATRIX;

          _this2.executeOpTree(_this2.convertOpList(operatorList));

          return svgElement;
        });
      }
    }, {
      key: "convertOpList",
      value: function convertOpList(operatorList) {
        var operatorIdMapping = this._operatorIdMapping;
        var argsArray = operatorList.argsArray;
        var fnArray = operatorList.fnArray;
        var opList = [];

        for (var i = 0, ii = fnArray.length; i < ii; i++) {
          var fnId = fnArray[i];
          opList.push({
            'fnId': fnId,
            'fn': operatorIdMapping[fnId],
            'args': argsArray[i]
          });
        }

        return opListToTree(opList);
      }
    }, {
      key: "executeOpTree",
      value: function executeOpTree(opTree) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = opTree[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var opTreeElement = _step3.value;
            var fn = opTreeElement.fn;
            var fnId = opTreeElement.fnId;
            var args = opTreeElement.args;

            switch (fnId | 0) {
              case _util.OPS.beginText:
                this.beginText();
                break;

              case _util.OPS.dependency:
                break;

              case _util.OPS.setLeading:
                this.setLeading(args);
                break;

              case _util.OPS.setLeadingMoveText:
                this.setLeadingMoveText(args[0], args[1]);
                break;

              case _util.OPS.setFont:
                this.setFont(args);
                break;

              case _util.OPS.showText:
                this.showText(args[0]);
                break;

              case _util.OPS.showSpacedText:
                this.showText(args[0]);
                break;

              case _util.OPS.endText:
                this.endText();
                break;

              case _util.OPS.moveText:
                this.moveText(args[0], args[1]);
                break;

              case _util.OPS.setCharSpacing:
                this.setCharSpacing(args[0]);
                break;

              case _util.OPS.setWordSpacing:
                this.setWordSpacing(args[0]);
                break;

              case _util.OPS.setHScale:
                this.setHScale(args[0]);
                break;

              case _util.OPS.setTextMatrix:
                this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                break;

              case _util.OPS.setTextRise:
                this.setTextRise(args[0]);
                break;

              case _util.OPS.setTextRenderingMode:
                this.setTextRenderingMode(args[0]);
                break;

              case _util.OPS.setLineWidth:
                this.setLineWidth(args[0]);
                break;

              case _util.OPS.setLineJoin:
                this.setLineJoin(args[0]);
                break;

              case _util.OPS.setLineCap:
                this.setLineCap(args[0]);
                break;

              case _util.OPS.setMiterLimit:
                this.setMiterLimit(args[0]);
                break;

              case _util.OPS.setFillRGBColor:
                this.setFillRGBColor(args[0], args[1], args[2]);
                break;

              case _util.OPS.setStrokeRGBColor:
                this.setStrokeRGBColor(args[0], args[1], args[2]);
                break;

              case _util.OPS.setStrokeColorN:
                this.setStrokeColorN(args);
                break;

              case _util.OPS.setFillColorN:
                this.setFillColorN(args);
                break;

              case _util.OPS.shadingFill:
                this.shadingFill(args[0]);
                break;

              case _util.OPS.setDash:
                this.setDash(args[0], args[1]);
                break;

              case _util.OPS.setRenderingIntent:
                this.setRenderingIntent(args[0]);
                break;

              case _util.OPS.setFlatness:
                this.setFlatness(args[0]);
                break;

              case _util.OPS.setGState:
                this.setGState(args[0]);
                break;

              case _util.OPS.fill:
                this.fill();
                break;

              case _util.OPS.eoFill:
                this.eoFill();
                break;

              case _util.OPS.stroke:
                this.stroke();
                break;

              case _util.OPS.fillStroke:
                this.fillStroke();
                break;

              case _util.OPS.eoFillStroke:
                this.eoFillStroke();
                break;

              case _util.OPS.clip:
                this.clip('nonzero');
                break;

              case _util.OPS.eoClip:
                this.clip('evenodd');
                break;

              case _util.OPS.paintSolidColorImageMask:
                this.paintSolidColorImageMask();
                break;

              case _util.OPS.paintJpegXObject:
                this.paintJpegXObject(args[0], args[1], args[2]);
                break;

              case _util.OPS.paintImageXObject:
                this.paintImageXObject(args[0]);
                break;

              case _util.OPS.paintInlineImageXObject:
                this.paintInlineImageXObject(args[0]);
                break;

              case _util.OPS.paintImageMaskXObject:
                this.paintImageMaskXObject(args[0]);
                break;

              case _util.OPS.paintFormXObjectBegin:
                this.paintFormXObjectBegin(args[0], args[1]);
                break;

              case _util.OPS.paintFormXObjectEnd:
                this.paintFormXObjectEnd();
                break;

              case _util.OPS.closePath:
                this.closePath();
                break;

              case _util.OPS.closeStroke:
                this.closeStroke();
                break;

              case _util.OPS.closeFillStroke:
                this.closeFillStroke();
                break;

              case _util.OPS.closeEOFillStroke:
                this.closeEOFillStroke();
                break;

              case _util.OPS.nextLine:
                this.nextLine();
                break;

              case _util.OPS.transform:
                this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                break;

              case _util.OPS.constructPath:
                this.constructPath(args[0], args[1]);
                break;

              case _util.OPS.endPath:
                this.endPath();
                break;

              case 92:
                this.group(opTreeElement.items);
                break;

              default:
                (0, _util.warn)("Unimplemented operator ".concat(fn));
                break;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }, {
      key: "setWordSpacing",
      value: function setWordSpacing(wordSpacing) {
        this.current.wordSpacing = wordSpacing;
      }
    }, {
      key: "setCharSpacing",
      value: function setCharSpacing(charSpacing) {
        this.current.charSpacing = charSpacing;
      }
    }, {
      key: "nextLine",
      value: function nextLine() {
        this.moveText(0, this.current.leading);
      }
    }, {
      key: "setTextMatrix",
      value: function setTextMatrix(a, b, c, d, e, f) {
        var current = this.current;
        current.textMatrix = current.lineMatrix = [a, b, c, d, e, f];
        current.textMatrixScale = Math.sqrt(a * a + b * b);
        current.x = current.lineX = 0;
        current.y = current.lineY = 0;
        current.xcoords = [];
        current.tspan = this.svgFactory.createElement('svg:tspan');
        current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
        current.tspan.setAttributeNS(null, 'font-size', "".concat(pf(current.fontSize), "px"));
        current.tspan.setAttributeNS(null, 'y', pf(-current.y));
        current.txtElement = this.svgFactory.createElement('svg:text');
        current.txtElement.appendChild(current.tspan);
      }
    }, {
      key: "beginText",
      value: function beginText() {
        var current = this.current;
        current.x = current.lineX = 0;
        current.y = current.lineY = 0;
        current.textMatrix = _util.IDENTITY_MATRIX;
        current.lineMatrix = _util.IDENTITY_MATRIX;
        current.textMatrixScale = 1;
        current.tspan = this.svgFactory.createElement('svg:tspan');
        current.txtElement = this.svgFactory.createElement('svg:text');
        current.txtgrp = this.svgFactory.createElement('svg:g');
        current.xcoords = [];
      }
    }, {
      key: "moveText",
      value: function moveText(x, y) {
        var current = this.current;
        current.x = current.lineX += x;
        current.y = current.lineY += y;
        current.xcoords = [];
        current.tspan = this.svgFactory.createElement('svg:tspan');
        current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
        current.tspan.setAttributeNS(null, 'font-size', "".concat(pf(current.fontSize), "px"));
        current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      }
    }, {
      key: "showText",
      value: function showText(glyphs) {
        var current = this.current;
        var font = current.font;
        var fontSize = current.fontSize;

        if (fontSize === 0) {
          return;
        }

        var charSpacing = current.charSpacing;
        var wordSpacing = current.wordSpacing;
        var fontDirection = current.fontDirection;
        var textHScale = current.textHScale * fontDirection;
        var vertical = font.vertical;
        var widthAdvanceScale = fontSize * current.fontMatrix[0];
        var x = 0;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = glyphs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var glyph = _step4.value;

            if (glyph === null) {
              x += fontDirection * wordSpacing;
              continue;
            } else if ((0, _util.isNum)(glyph)) {
              x += -glyph * fontSize * 0.001;
              continue;
            }

            var width = glyph.width;
            var character = glyph.fontChar;
            var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
            var charWidth = width * widthAdvanceScale + spacing * fontDirection;

            if (!glyph.isInFont && !font.missingFile) {
              x += charWidth;
              continue;
            }

            current.xcoords.push(current.x + x * textHScale);
            current.tspan.textContent += character;
            x += charWidth;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        if (vertical) {
          current.y -= x * textHScale;
        } else {
          current.x += x * textHScale;
        }

        current.tspan.setAttributeNS(null, 'x', current.xcoords.map(pf).join(' '));
        current.tspan.setAttributeNS(null, 'y', pf(-current.y));
        current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
        current.tspan.setAttributeNS(null, 'font-size', "".concat(pf(current.fontSize), "px"));

        if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
          current.tspan.setAttributeNS(null, 'font-style', current.fontStyle);
        }

        if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
          current.tspan.setAttributeNS(null, 'font-weight', current.fontWeight);
        }

        var fillStrokeMode = current.textRenderingMode & _util.TextRenderingMode.FILL_STROKE_MASK;

        if (fillStrokeMode === _util.TextRenderingMode.FILL || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          if (current.fillColor !== SVG_DEFAULTS.fillColor) {
            current.tspan.setAttributeNS(null, 'fill', current.fillColor);
          }

          if (current.fillAlpha < 1) {
            current.tspan.setAttributeNS(null, 'fill-opacity', current.fillAlpha);
          }
        } else if (current.textRenderingMode === _util.TextRenderingMode.ADD_TO_PATH) {
          current.tspan.setAttributeNS(null, 'fill', 'transparent');
        } else {
          current.tspan.setAttributeNS(null, 'fill', 'none');
        }

        if (fillStrokeMode === _util.TextRenderingMode.STROKE || fillStrokeMode === _util.TextRenderingMode.FILL_STROKE) {
          var lineWidthScale = 1 / (current.textMatrixScale || 1);

          this._setStrokeAttributes(current.tspan, lineWidthScale);
        }

        var textMatrix = current.textMatrix;

        if (current.textRise !== 0) {
          textMatrix = textMatrix.slice();
          textMatrix[5] += current.textRise;
        }

        current.txtElement.setAttributeNS(null, 'transform', "".concat(pm(textMatrix), " scale(1, -1)"));
        current.txtElement.setAttributeNS(XML_NS, 'xml:space', 'preserve');
        current.txtElement.appendChild(current.tspan);
        current.txtgrp.appendChild(current.txtElement);

        this._ensureTransformGroup().appendChild(current.txtElement);
      }
    }, {
      key: "setLeadingMoveText",
      value: function setLeadingMoveText(x, y) {
        this.setLeading(-y);
        this.moveText(x, y);
      }
    }, {
      key: "addFontStyle",
      value: function addFontStyle(fontObj) {
        if (!this.cssStyle) {
          this.cssStyle = this.svgFactory.createElement('svg:style');
          this.cssStyle.setAttributeNS(null, 'type', 'text/css');
          this.defs.appendChild(this.cssStyle);
        }

        var url = (0, _util.createObjectURL)(fontObj.data, fontObj.mimetype, this.forceDataSchema);
        this.cssStyle.textContent += "@font-face { font-family: \"".concat(fontObj.loadedName, "\";") + " src: url(".concat(url, "); }\n");
      }
    }, {
      key: "setFont",
      value: function setFont(details) {
        var current = this.current;
        var fontObj = this.commonObjs.get(details[0]);
        var size = details[1];
        current.font = fontObj;

        if (this.embedFonts && fontObj.data && !this.embeddedFonts[fontObj.loadedName]) {
          this.addFontStyle(fontObj);
          this.embeddedFonts[fontObj.loadedName] = fontObj;
        }

        current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : _util.FONT_IDENTITY_MATRIX;
        var bold = fontObj.black ? fontObj.bold ? 'bolder' : 'bold' : fontObj.bold ? 'bold' : 'normal';
        var italic = fontObj.italic ? 'italic' : 'normal';

        if (size < 0) {
          size = -size;
          current.fontDirection = -1;
        } else {
          current.fontDirection = 1;
        }

        current.fontSize = size;
        current.fontFamily = fontObj.loadedName;
        current.fontWeight = bold;
        current.fontStyle = italic;
        current.tspan = this.svgFactory.createElement('svg:tspan');
        current.tspan.setAttributeNS(null, 'y', pf(-current.y));
        current.xcoords = [];
      }
    }, {
      key: "endText",
      value: function endText() {
        var current = this.current;

        if (current.textRenderingMode & _util.TextRenderingMode.ADD_TO_PATH_FLAG && current.txtElement && current.txtElement.hasChildNodes()) {
          current.element = current.txtElement;
          this.clip('nonzero');
          this.endPath();
        }
      }
    }, {
      key: "setLineWidth",
      value: function setLineWidth(width) {
        if (width > 0) {
          this.current.lineWidth = width;
        }
      }
    }, {
      key: "setLineCap",
      value: function setLineCap(style) {
        this.current.lineCap = LINE_CAP_STYLES[style];
      }
    }, {
      key: "setLineJoin",
      value: function setLineJoin(style) {
        this.current.lineJoin = LINE_JOIN_STYLES[style];
      }
    }, {
      key: "setMiterLimit",
      value: function setMiterLimit(limit) {
        this.current.miterLimit = limit;
      }
    }, {
      key: "setStrokeAlpha",
      value: function setStrokeAlpha(strokeAlpha) {
        this.current.strokeAlpha = strokeAlpha;
      }
    }, {
      key: "setStrokeRGBColor",
      value: function setStrokeRGBColor(r, g, b) {
        this.current.strokeColor = _util.Util.makeCssRgb(r, g, b);
      }
    }, {
      key: "setFillAlpha",
      value: function setFillAlpha(fillAlpha) {
        this.current.fillAlpha = fillAlpha;
      }
    }, {
      key: "setFillRGBColor",
      value: function setFillRGBColor(r, g, b) {
        this.current.fillColor = _util.Util.makeCssRgb(r, g, b);
        this.current.tspan = this.svgFactory.createElement('svg:tspan');
        this.current.xcoords = [];
      }
    }, {
      key: "setStrokeColorN",
      value: function setStrokeColorN(args) {
        this.current.strokeColor = this._makeColorN_Pattern(args);
      }
    }, {
      key: "setFillColorN",
      value: function setFillColorN(args) {
        this.current.fillColor = this._makeColorN_Pattern(args);
      }
    }, {
      key: "shadingFill",
      value: function shadingFill(args) {
        var width = this.viewport.width;
        var height = this.viewport.height;

        var inv = _util.Util.inverseTransform(this.transformMatrix);

        var bl = _util.Util.applyTransform([0, 0], inv);

        var br = _util.Util.applyTransform([0, height], inv);

        var ul = _util.Util.applyTransform([width, 0], inv);

        var ur = _util.Util.applyTransform([width, height], inv);

        var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
        var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
        var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
        var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
        var rect = this.svgFactory.createElement('svg:rect');
        rect.setAttributeNS(null, 'x', x0);
        rect.setAttributeNS(null, 'y', y0);
        rect.setAttributeNS(null, 'width', x1 - x0);
        rect.setAttributeNS(null, 'height', y1 - y0);
        rect.setAttributeNS(null, 'fill', this._makeShadingPattern(args));

        this._ensureTransformGroup().appendChild(rect);
      }
    }, {
      key: "_makeColorN_Pattern",
      value: function _makeColorN_Pattern(args) {
        if (args[0] === 'TilingPattern') {
          return this._makeTilingPattern(args);
        }

        return this._makeShadingPattern(args);
      }
    }, {
      key: "_makeTilingPattern",
      value: function _makeTilingPattern(args) {
        var color = args[1];
        var operatorList = args[2];
        var matrix = args[3] || _util.IDENTITY_MATRIX;

        var _args$ = _slicedToArray(args[4], 4),
            x0 = _args$[0],
            y0 = _args$[1],
            x1 = _args$[2],
            y1 = _args$[3];

        var xstep = args[5];
        var ystep = args[6];
        var paintType = args[7];
        var tilingId = "shading".concat(shadingCount++);

        var _Util$applyTransform = _util.Util.applyTransform([x0, y0], matrix),
            _Util$applyTransform2 = _slicedToArray(_Util$applyTransform, 2),
            tx0 = _Util$applyTransform2[0],
            ty0 = _Util$applyTransform2[1];

        var _Util$applyTransform3 = _util.Util.applyTransform([x1, y1], matrix),
            _Util$applyTransform4 = _slicedToArray(_Util$applyTransform3, 2),
            tx1 = _Util$applyTransform4[0],
            ty1 = _Util$applyTransform4[1];

        var _Util$singularValueDe = _util.Util.singularValueDecompose2dScale(matrix),
            _Util$singularValueDe2 = _slicedToArray(_Util$singularValueDe, 2),
            xscale = _Util$singularValueDe2[0],
            yscale = _Util$singularValueDe2[1];

        var txstep = xstep * xscale;
        var tystep = ystep * yscale;
        var tiling = this.svgFactory.createElement('svg:pattern');
        tiling.setAttributeNS(null, 'id', tilingId);
        tiling.setAttributeNS(null, 'patternUnits', 'userSpaceOnUse');
        tiling.setAttributeNS(null, 'width', txstep);
        tiling.setAttributeNS(null, 'height', tystep);
        tiling.setAttributeNS(null, 'x', "".concat(tx0));
        tiling.setAttributeNS(null, 'y', "".concat(ty0));
        var svg = this.svg;
        var transformMatrix = this.transformMatrix;
        var fillColor = this.current.fillColor;
        var strokeColor = this.current.strokeColor;
        var bbox = this.svgFactory.create(tx1 - tx0, ty1 - ty0);
        this.svg = bbox;
        this.transformMatrix = matrix;

        if (paintType === 2) {
          var cssColor = _util.Util.makeCssRgb.apply(_util.Util, _toConsumableArray(color));

          this.current.fillColor = cssColor;
          this.current.strokeColor = cssColor;
        }

        this.executeOpTree(this.convertOpList(operatorList));
        this.svg = svg;
        this.transformMatrix = transformMatrix;
        this.current.fillColor = fillColor;
        this.current.strokeColor = strokeColor;
        tiling.appendChild(bbox.childNodes[0]);
        this.defs.appendChild(tiling);
        return "url(#".concat(tilingId, ")");
      }
    }, {
      key: "_makeShadingPattern",
      value: function _makeShadingPattern(args) {
        switch (args[0]) {
          case 'RadialAxial':
            var shadingId = "shading".concat(shadingCount++);
            var colorStops = args[2];
            var gradient;

            switch (args[1]) {
              case 'axial':
                var point0 = args[3];
                var point1 = args[4];
                gradient = this.svgFactory.createElement('svg:linearGradient');
                gradient.setAttributeNS(null, 'id', shadingId);
                gradient.setAttributeNS(null, 'gradientUnits', 'userSpaceOnUse');
                gradient.setAttributeNS(null, 'x1', point0[0]);
                gradient.setAttributeNS(null, 'y1', point0[1]);
                gradient.setAttributeNS(null, 'x2', point1[0]);
                gradient.setAttributeNS(null, 'y2', point1[1]);
                break;

              case 'radial':
                var focalPoint = args[3];
                var circlePoint = args[4];
                var focalRadius = args[5];
                var circleRadius = args[6];
                gradient = this.svgFactory.createElement('svg:radialGradient');
                gradient.setAttributeNS(null, 'id', shadingId);
                gradient.setAttributeNS(null, 'gradientUnits', 'userSpaceOnUse');
                gradient.setAttributeNS(null, 'cx', circlePoint[0]);
                gradient.setAttributeNS(null, 'cy', circlePoint[1]);
                gradient.setAttributeNS(null, 'r', circleRadius);
                gradient.setAttributeNS(null, 'fx', focalPoint[0]);
                gradient.setAttributeNS(null, 'fy', focalPoint[1]);
                gradient.setAttributeNS(null, 'fr', focalRadius);
                break;

              default:
                throw new Error("Unknown RadialAxial type: ".concat(args[1]));
            }

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = colorStops[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var colorStop = _step5.value;
                var stop = this.svgFactory.createElement('svg:stop');
                stop.setAttributeNS(null, 'offset', colorStop[0]);
                stop.setAttributeNS(null, 'stop-color', colorStop[1]);
                gradient.appendChild(stop);
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                  _iterator5["return"]();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }

            this.defs.appendChild(gradient);
            return "url(#".concat(shadingId, ")");

          case 'Mesh':
            (0, _util.warn)('Unimplemented pattern Mesh');
            return null;

          case 'Dummy':
            return 'hotpink';

          default:
            throw new Error("Unknown IR type: ".concat(args[0]));
        }
      }
    }, {
      key: "setDash",
      value: function setDash(dashArray, dashPhase) {
        this.current.dashArray = dashArray;
        this.current.dashPhase = dashPhase;
      }
    }, {
      key: "constructPath",
      value: function constructPath(ops, args) {
        var current = this.current;
        var x = current.x,
            y = current.y;
        var d = [];
        var j = 0;
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = ops[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var op = _step6.value;

            switch (op | 0) {
              case _util.OPS.rectangle:
                x = args[j++];
                y = args[j++];
                var width = args[j++];
                var height = args[j++];
                var xw = x + width;
                var yh = y + height;
                d.push('M', pf(x), pf(y), 'L', pf(xw), pf(y), 'L', pf(xw), pf(yh), 'L', pf(x), pf(yh), 'Z');
                break;

              case _util.OPS.moveTo:
                x = args[j++];
                y = args[j++];
                d.push('M', pf(x), pf(y));
                break;

              case _util.OPS.lineTo:
                x = args[j++];
                y = args[j++];
                d.push('L', pf(x), pf(y));
                break;

              case _util.OPS.curveTo:
                x = args[j + 4];
                y = args[j + 5];
                d.push('C', pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                j += 6;
                break;

              case _util.OPS.curveTo2:
                x = args[j + 2];
                y = args[j + 3];
                d.push('C', pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                j += 4;
                break;

              case _util.OPS.curveTo3:
                x = args[j + 2];
                y = args[j + 3];
                d.push('C', pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                j += 4;
                break;

              case _util.OPS.closePath:
                d.push('Z');
                break;
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
              _iterator6["return"]();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        d = d.join(' ');

        if (current.path && ops.length > 0 && ops[0] !== _util.OPS.rectangle && ops[0] !== _util.OPS.moveTo) {
          d = current.path.getAttributeNS(null, 'd') + d;
        } else {
          current.path = this.svgFactory.createElement('svg:path');

          this._ensureTransformGroup().appendChild(current.path);
        }

        current.path.setAttributeNS(null, 'd', d);
        current.path.setAttributeNS(null, 'fill', 'none');
        current.element = current.path;
        current.setCurrentPoint(x, y);
      }
    }, {
      key: "endPath",
      value: function endPath() {
        var current = this.current;
        current.path = null;

        if (!this.pendingClip) {
          return;
        }

        if (!current.element) {
          this.pendingClip = null;
          return;
        }

        var clipId = "clippath".concat(clipCount++);
        var clipPath = this.svgFactory.createElement('svg:clipPath');
        clipPath.setAttributeNS(null, 'id', clipId);
        clipPath.setAttributeNS(null, 'transform', pm(this.transformMatrix));
        var clipElement = current.element.cloneNode(true);

        if (this.pendingClip === 'evenodd') {
          clipElement.setAttributeNS(null, 'clip-rule', 'evenodd');
        } else {
          clipElement.setAttributeNS(null, 'clip-rule', 'nonzero');
        }

        this.pendingClip = null;
        clipPath.appendChild(clipElement);
        this.defs.appendChild(clipPath);

        if (current.activeClipUrl) {
          current.clipGroup = null;
          this.extraStack.forEach(function (prev) {
            prev.clipGroup = null;
          });
          clipPath.setAttributeNS(null, 'clip-path', current.activeClipUrl);
        }

        current.activeClipUrl = "url(#".concat(clipId, ")");
        this.tgrp = null;
      }
    }, {
      key: "clip",
      value: function clip(type) {
        this.pendingClip = type;
      }
    }, {
      key: "closePath",
      value: function closePath() {
        var current = this.current;

        if (current.path) {
          var d = "".concat(current.path.getAttributeNS(null, 'd'), "Z");
          current.path.setAttributeNS(null, 'd', d);
        }
      }
    }, {
      key: "setLeading",
      value: function setLeading(leading) {
        this.current.leading = -leading;
      }
    }, {
      key: "setTextRise",
      value: function setTextRise(textRise) {
        this.current.textRise = textRise;
      }
    }, {
      key: "setTextRenderingMode",
      value: function setTextRenderingMode(textRenderingMode) {
        this.current.textRenderingMode = textRenderingMode;
      }
    }, {
      key: "setHScale",
      value: function setHScale(scale) {
        this.current.textHScale = scale / 100;
      }
    }, {
      key: "setRenderingIntent",
      value: function setRenderingIntent(intent) {}
    }, {
      key: "setFlatness",
      value: function setFlatness(flatness) {}
    }, {
      key: "setGState",
      value: function setGState(states) {
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = states[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _step7$value = _slicedToArray(_step7.value, 2),
                key = _step7$value[0],
                value = _step7$value[1];

            switch (key) {
              case 'LW':
                this.setLineWidth(value);
                break;

              case 'LC':
                this.setLineCap(value);
                break;

              case 'LJ':
                this.setLineJoin(value);
                break;

              case 'ML':
                this.setMiterLimit(value);
                break;

              case 'D':
                this.setDash(value[0], value[1]);
                break;

              case 'RI':
                this.setRenderingIntent(value);
                break;

              case 'FL':
                this.setFlatness(value);
                break;

              case 'Font':
                this.setFont(value);
                break;

              case 'CA':
                this.setStrokeAlpha(value);
                break;

              case 'ca':
                this.setFillAlpha(value);
                break;

              default:
                (0, _util.warn)("Unimplemented graphic state operator ".concat(key));
                break;
            }
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
              _iterator7["return"]();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      }
    }, {
      key: "fill",
      value: function fill() {
        var current = this.current;

        if (current.element) {
          current.element.setAttributeNS(null, 'fill', current.fillColor);
          current.element.setAttributeNS(null, 'fill-opacity', current.fillAlpha);
          this.endPath();
        }
      }
    }, {
      key: "stroke",
      value: function stroke() {
        var current = this.current;

        if (current.element) {
          this._setStrokeAttributes(current.element);

          current.element.setAttributeNS(null, 'fill', 'none');
          this.endPath();
        }
      }
    }, {
      key: "_setStrokeAttributes",
      value: function _setStrokeAttributes(element) {
        var lineWidthScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var current = this.current;
        var dashArray = current.dashArray;

        if (lineWidthScale !== 1 && dashArray.length > 0) {
          dashArray = dashArray.map(function (value) {
            return lineWidthScale * value;
          });
        }

        element.setAttributeNS(null, 'stroke', current.strokeColor);
        element.setAttributeNS(null, 'stroke-opacity', current.strokeAlpha);
        element.setAttributeNS(null, 'stroke-miterlimit', pf(current.miterLimit));
        element.setAttributeNS(null, 'stroke-linecap', current.lineCap);
        element.setAttributeNS(null, 'stroke-linejoin', current.lineJoin);
        element.setAttributeNS(null, 'stroke-width', pf(lineWidthScale * current.lineWidth) + 'px');
        element.setAttributeNS(null, 'stroke-dasharray', dashArray.map(pf).join(' '));
        element.setAttributeNS(null, 'stroke-dashoffset', pf(lineWidthScale * current.dashPhase) + 'px');
      }
    }, {
      key: "eoFill",
      value: function eoFill() {
        if (this.current.element) {
          this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
        }

        this.fill();
      }
    }, {
      key: "fillStroke",
      value: function fillStroke() {
        this.stroke();
        this.fill();
      }
    }, {
      key: "eoFillStroke",
      value: function eoFillStroke() {
        if (this.current.element) {
          this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
        }

        this.fillStroke();
      }
    }, {
      key: "closeStroke",
      value: function closeStroke() {
        this.closePath();
        this.stroke();
      }
    }, {
      key: "closeFillStroke",
      value: function closeFillStroke() {
        this.closePath();
        this.fillStroke();
      }
    }, {
      key: "closeEOFillStroke",
      value: function closeEOFillStroke() {
        this.closePath();
        this.eoFillStroke();
      }
    }, {
      key: "paintSolidColorImageMask",
      value: function paintSolidColorImageMask() {
        var rect = this.svgFactory.createElement('svg:rect');
        rect.setAttributeNS(null, 'x', '0');
        rect.setAttributeNS(null, 'y', '0');
        rect.setAttributeNS(null, 'width', '1px');
        rect.setAttributeNS(null, 'height', '1px');
        rect.setAttributeNS(null, 'fill', this.current.fillColor);

        this._ensureTransformGroup().appendChild(rect);
      }
    }, {
      key: "paintJpegXObject",
      value: function paintJpegXObject(objId, w, h) {
        var imgObj = this.objs.get(objId);
        var imgEl = this.svgFactory.createElement('svg:image');
        imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgObj.src);
        imgEl.setAttributeNS(null, 'width', pf(w));
        imgEl.setAttributeNS(null, 'height', pf(h));
        imgEl.setAttributeNS(null, 'x', '0');
        imgEl.setAttributeNS(null, 'y', pf(-h));
        imgEl.setAttributeNS(null, 'transform', "scale(".concat(pf(1 / w), " ").concat(pf(-1 / h), ")"));

        this._ensureTransformGroup().appendChild(imgEl);
      }
    }, {
      key: "paintImageXObject",
      value: function paintImageXObject(objId) {
        var imgData = this.objs.get(objId);

        if (!imgData) {
          (0, _util.warn)("Dependent image with object ID ".concat(objId, " is not ready yet"));
          return;
        }

        this.paintInlineImageXObject(imgData);
      }
    }, {
      key: "paintInlineImageXObject",
      value: function paintInlineImageXObject(imgData, mask) {
        var width = imgData.width;
        var height = imgData.height;
        var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
        var cliprect = this.svgFactory.createElement('svg:rect');
        cliprect.setAttributeNS(null, 'x', '0');
        cliprect.setAttributeNS(null, 'y', '0');
        cliprect.setAttributeNS(null, 'width', pf(width));
        cliprect.setAttributeNS(null, 'height', pf(height));
        this.current.element = cliprect;
        this.clip('nonzero');
        var imgEl = this.svgFactory.createElement('svg:image');
        imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgSrc);
        imgEl.setAttributeNS(null, 'x', '0');
        imgEl.setAttributeNS(null, 'y', pf(-height));
        imgEl.setAttributeNS(null, 'width', pf(width) + 'px');
        imgEl.setAttributeNS(null, 'height', pf(height) + 'px');
        imgEl.setAttributeNS(null, 'transform', "scale(".concat(pf(1 / width), " ").concat(pf(-1 / height), ")"));

        if (mask) {
          mask.appendChild(imgEl);
        } else {
          this._ensureTransformGroup().appendChild(imgEl);
        }
      }
    }, {
      key: "paintImageMaskXObject",
      value: function paintImageMaskXObject(imgData) {
        var current = this.current;
        var width = imgData.width;
        var height = imgData.height;
        var fillColor = current.fillColor;
        current.maskId = "mask".concat(maskCount++);
        var mask = this.svgFactory.createElement('svg:mask');
        mask.setAttributeNS(null, 'id', current.maskId);
        var rect = this.svgFactory.createElement('svg:rect');
        rect.setAttributeNS(null, 'x', '0');
        rect.setAttributeNS(null, 'y', '0');
        rect.setAttributeNS(null, 'width', pf(width));
        rect.setAttributeNS(null, 'height', pf(height));
        rect.setAttributeNS(null, 'fill', fillColor);
        rect.setAttributeNS(null, 'mask', "url(#".concat(current.maskId, ")"));
        this.defs.appendChild(mask);

        this._ensureTransformGroup().appendChild(rect);

        this.paintInlineImageXObject(imgData, mask);
      }
    }, {
      key: "paintFormXObjectBegin",
      value: function paintFormXObjectBegin(matrix, bbox) {
        if (Array.isArray(matrix) && matrix.length === 6) {
          this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        }

        if (bbox) {
          var width = bbox[2] - bbox[0];
          var height = bbox[3] - bbox[1];
          var cliprect = this.svgFactory.createElement('svg:rect');
          cliprect.setAttributeNS(null, 'x', bbox[0]);
          cliprect.setAttributeNS(null, 'y', bbox[1]);
          cliprect.setAttributeNS(null, 'width', pf(width));
          cliprect.setAttributeNS(null, 'height', pf(height));
          this.current.element = cliprect;
          this.clip('nonzero');
          this.endPath();
        }
      }
    }, {
      key: "paintFormXObjectEnd",
      value: function paintFormXObjectEnd() {}
    }, {
      key: "_initialize",
      value: function _initialize(viewport) {
        var svg = this.svgFactory.create(viewport.width, viewport.height);
        var definitions = this.svgFactory.createElement('svg:defs');
        svg.appendChild(definitions);
        this.defs = definitions;
        var rootGroup = this.svgFactory.createElement('svg:g');
        rootGroup.setAttributeNS(null, 'transform', pm(viewport.transform));
        svg.appendChild(rootGroup);
        this.svg = rootGroup;
        return svg;
      }
    }, {
      key: "_ensureClipGroup",
      value: function _ensureClipGroup() {
        if (!this.current.clipGroup) {
          var clipGroup = this.svgFactory.createElement('svg:g');
          clipGroup.setAttributeNS(null, 'clip-path', this.current.activeClipUrl);
          this.svg.appendChild(clipGroup);
          this.current.clipGroup = clipGroup;
        }

        return this.current.clipGroup;
      }
    }, {
      key: "_ensureTransformGroup",
      value: function _ensureTransformGroup() {
        if (!this.tgrp) {
          this.tgrp = this.svgFactory.createElement('svg:g');
          this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));

          if (this.current.activeClipUrl) {
            this._ensureClipGroup().appendChild(this.tgrp);
          } else {
            this.svg.appendChild(this.tgrp);
          }
        }

        return this.tgrp;
      }
    }]);

    return SVGGraphics;
  }();
}

/***/ }),
/* 197 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFNodeStream = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(180));

var _util = __w_pdfjs_require__(1);

var _network_utils = __w_pdfjs_require__(198);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs');

var http = require('http');

var https = require('https');

var url = require('url');

var fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;

function parseUrl(sourceUrl) {
  var parsedUrl = url.parse(sourceUrl);

  if (parsedUrl.protocol === 'file:' || parsedUrl.host) {
    return parsedUrl;
  }

  if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
    return url.parse("file:///".concat(sourceUrl));
  }

  if (!parsedUrl.host) {
    parsedUrl.protocol = 'file:';
  }

  return parsedUrl;
}

var PDFNodeStream =
/*#__PURE__*/
function () {
  function PDFNodeStream(source) {
    _classCallCheck(this, PDFNodeStream);

    this.source = source;
    this.url = parseUrl(source.url);
    this.isHttp = this.url.protocol === 'http:' || this.url.protocol === 'https:';
    this.isFsUrl = this.url.protocol === 'file:';
    this.httpHeaders = this.isHttp && source.httpHeaders || {};
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }

  _createClass(PDFNodeStream, [{
    key: "getFullReader",
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
      return this._fullRequestReader;
    }
  }, {
    key: "getRangeReader",
    value: function getRangeReader(start, end) {
      if (end <= this._progressiveDataLength) {
        return null;
      }

      var rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);

      this._rangeRequestReaders.push(rangeReader);

      return rangeReader;
    }
  }, {
    key: "cancelAllRequests",
    value: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }

      var readers = this._rangeRequestReaders.slice(0);

      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  }, {
    key: "_progressiveDataLength",
    get: function get() {
      return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
    }
  }]);

  return PDFNodeStream;
}();

exports.PDFNodeStream = PDFNodeStream;

var BaseFullReader =
/*#__PURE__*/
function () {
  function BaseFullReader(stream) {
    _classCallCheck(this, BaseFullReader);

    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    var source = stream.source;
    this._contentLength = source.length;
    this._loaded = 0;
    this._filename = null;
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;

    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }

    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._readableStream = null;
    this._readCapability = (0, _util.createPromiseCapability)();
    this._headersCapability = (0, _util.createPromiseCapability)();
  }

  _createClass(BaseFullReader, [{
    key: "read",
    value: function () {
      var _read = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var chunk, buffer;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._readCapability.promise;

              case 2:
                if (!this._done) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 4:
                if (!this._storedError) {
                  _context.next = 6;
                  break;
                }

                throw this._storedError;

              case 6:
                chunk = this._readableStream.read();

                if (!(chunk === null)) {
                  _context.next = 10;
                  break;
                }

                this._readCapability = (0, _util.createPromiseCapability)();
                return _context.abrupt("return", this.read());

              case 10:
                this._loaded += chunk.length;

                if (this.onProgress) {
                  this.onProgress({
                    loaded: this._loaded,
                    total: this._contentLength
                  });
                }

                buffer = new Uint8Array(chunk).buffer;
                return _context.abrupt("return", {
                  value: buffer,
                  done: false
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      if (!this._readableStream) {
        this._error(reason);

        return;
      }

      this._readableStream.destroy(reason);
    }
  }, {
    key: "_error",
    value: function _error(reason) {
      this._storedError = reason;

      this._readCapability.resolve();
    }
  }, {
    key: "_setReadableStream",
    value: function _setReadableStream(readableStream) {
      var _this = this;

      this._readableStream = readableStream;
      readableStream.on('readable', function () {
        _this._readCapability.resolve();
      });
      readableStream.on('end', function () {
        readableStream.destroy();
        _this._done = true;

        _this._readCapability.resolve();
      });
      readableStream.on('error', function (reason) {
        _this._error(reason);
      });

      if (!this._isStreamingSupported && this._isRangeSupported) {
        this._error(new _util.AbortException('streaming is disabled'));
      }

      if (this._storedError) {
        this._readableStream.destroy(this._storedError);
      }
    }
  }, {
    key: "headersReady",
    get: function get() {
      return this._headersCapability.promise;
    }
  }, {
    key: "filename",
    get: function get() {
      return this._filename;
    }
  }, {
    key: "contentLength",
    get: function get() {
      return this._contentLength;
    }
  }, {
    key: "isRangeSupported",
    get: function get() {
      return this._isRangeSupported;
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }]);

  return BaseFullReader;
}();

var BaseRangeReader =
/*#__PURE__*/
function () {
  function BaseRangeReader(stream) {
    _classCallCheck(this, BaseRangeReader);

    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    this._loaded = 0;
    this._readableStream = null;
    this._readCapability = (0, _util.createPromiseCapability)();
    var source = stream.source;
    this._isStreamingSupported = !source.disableStream;
  }

  _createClass(BaseRangeReader, [{
    key: "read",
    value: function () {
      var _read2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var chunk, buffer;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._readCapability.promise;

              case 2:
                if (!this._done) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 4:
                if (!this._storedError) {
                  _context2.next = 6;
                  break;
                }

                throw this._storedError;

              case 6:
                chunk = this._readableStream.read();

                if (!(chunk === null)) {
                  _context2.next = 10;
                  break;
                }

                this._readCapability = (0, _util.createPromiseCapability)();
                return _context2.abrupt("return", this.read());

              case 10:
                this._loaded += chunk.length;

                if (this.onProgress) {
                  this.onProgress({
                    loaded: this._loaded
                  });
                }

                buffer = new Uint8Array(chunk).buffer;
                return _context2.abrupt("return", {
                  value: buffer,
                  done: false
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function read() {
        return _read2.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      if (!this._readableStream) {
        this._error(reason);

        return;
      }

      this._readableStream.destroy(reason);
    }
  }, {
    key: "_error",
    value: function _error(reason) {
      this._storedError = reason;

      this._readCapability.resolve();
    }
  }, {
    key: "_setReadableStream",
    value: function _setReadableStream(readableStream) {
      var _this2 = this;

      this._readableStream = readableStream;
      readableStream.on('readable', function () {
        _this2._readCapability.resolve();
      });
      readableStream.on('end', function () {
        readableStream.destroy();
        _this2._done = true;

        _this2._readCapability.resolve();
      });
      readableStream.on('error', function (reason) {
        _this2._error(reason);
      });

      if (this._storedError) {
        this._readableStream.destroy(this._storedError);
      }
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }]);

  return BaseRangeReader;
}();

function createRequestOptions(url, headers) {
  return {
    protocol: url.protocol,
    auth: url.auth,
    host: url.hostname,
    port: url.port,
    path: url.path,
    method: 'GET',
    headers: headers
  };
}

var PDFNodeStreamFullReader =
/*#__PURE__*/
function (_BaseFullReader) {
  _inherits(PDFNodeStreamFullReader, _BaseFullReader);

  function PDFNodeStreamFullReader(stream) {
    var _this3;

    _classCallCheck(this, PDFNodeStreamFullReader);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PDFNodeStreamFullReader).call(this, stream));

    var handleResponse = function handleResponse(response) {
      if (response.statusCode === 404) {
        var error = new _util.MissingPDFException("Missing PDF \"".concat(_this3._url, "\"."));
        _this3._storedError = error;

        _this3._headersCapability.reject(error);

        return;
      }

      _this3._headersCapability.resolve();

      _this3._setReadableStream(response);

      var getResponseHeader = function getResponseHeader(name) {
        return _this3._readableStream.headers[name.toLowerCase()];
      };

      var _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
        getResponseHeader: getResponseHeader,
        isHttp: stream.isHttp,
        rangeChunkSize: _this3._rangeChunkSize,
        disableRange: _this3._disableRange
      }),
          allowRangeRequests = _validateRangeRequest.allowRangeRequests,
          suggestedLength = _validateRangeRequest.suggestedLength;

      _this3._isRangeSupported = allowRangeRequests;
      _this3._contentLength = suggestedLength || _this3._contentLength;
      _this3._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
    };

    _this3._request = null;

    if (_this3._url.protocol === 'http:') {
      _this3._request = http.request(createRequestOptions(_this3._url, stream.httpHeaders), handleResponse);
    } else {
      _this3._request = https.request(createRequestOptions(_this3._url, stream.httpHeaders), handleResponse);
    }

    _this3._request.on('error', function (reason) {
      _this3._storedError = reason;

      _this3._headersCapability.reject(reason);
    });

    _this3._request.end();

    return _this3;
  }

  return PDFNodeStreamFullReader;
}(BaseFullReader);

var PDFNodeStreamRangeReader =
/*#__PURE__*/
function (_BaseRangeReader) {
  _inherits(PDFNodeStreamRangeReader, _BaseRangeReader);

  function PDFNodeStreamRangeReader(stream, start, end) {
    var _this4;

    _classCallCheck(this, PDFNodeStreamRangeReader);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PDFNodeStreamRangeReader).call(this, stream));
    _this4._httpHeaders = {};

    for (var property in stream.httpHeaders) {
      var value = stream.httpHeaders[property];

      if (typeof value === 'undefined') {
        continue;
      }

      _this4._httpHeaders[property] = value;
    }

    _this4._httpHeaders['Range'] = "bytes=".concat(start, "-").concat(end - 1);

    var handleResponse = function handleResponse(response) {
      if (response.statusCode === 404) {
        var error = new _util.MissingPDFException("Missing PDF \"".concat(_this4._url, "\"."));
        _this4._storedError = error;
        return;
      }

      _this4._setReadableStream(response);
    };

    _this4._request = null;

    if (_this4._url.protocol === 'http:') {
      _this4._request = http.request(createRequestOptions(_this4._url, _this4._httpHeaders), handleResponse);
    } else {
      _this4._request = https.request(createRequestOptions(_this4._url, _this4._httpHeaders), handleResponse);
    }

    _this4._request.on('error', function (reason) {
      _this4._storedError = reason;
    });

    _this4._request.end();

    return _this4;
  }

  return PDFNodeStreamRangeReader;
}(BaseRangeReader);

var PDFNodeStreamFsFullReader =
/*#__PURE__*/
function (_BaseFullReader2) {
  _inherits(PDFNodeStreamFsFullReader, _BaseFullReader2);

  function PDFNodeStreamFsFullReader(stream) {
    var _this5;

    _classCallCheck(this, PDFNodeStreamFsFullReader);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(PDFNodeStreamFsFullReader).call(this, stream));
    var path = decodeURIComponent(_this5._url.path);

    if (fileUriRegex.test(_this5._url.href)) {
      path = path.replace(/^\//, '');
    }

    fs.lstat(path, function (error, stat) {
      if (error) {
        if (error.code === 'ENOENT') {
          error = new _util.MissingPDFException("Missing PDF \"".concat(path, "\"."));
        }

        _this5._storedError = error;

        _this5._headersCapability.reject(error);

        return;
      }

      _this5._contentLength = stat.size;

      _this5._setReadableStream(fs.createReadStream(path));

      _this5._headersCapability.resolve();
    });
    return _this5;
  }

  return PDFNodeStreamFsFullReader;
}(BaseFullReader);

var PDFNodeStreamFsRangeReader =
/*#__PURE__*/
function (_BaseRangeReader2) {
  _inherits(PDFNodeStreamFsRangeReader, _BaseRangeReader2);

  function PDFNodeStreamFsRangeReader(stream, start, end) {
    var _this6;

    _classCallCheck(this, PDFNodeStreamFsRangeReader);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(PDFNodeStreamFsRangeReader).call(this, stream));
    var path = decodeURIComponent(_this6._url.path);

    if (fileUriRegex.test(_this6._url.href)) {
      path = path.replace(/^\//, '');
    }

    _this6._setReadableStream(fs.createReadStream(path, {
      start: start,
      end: end - 1
    }));

    return _this6;
  }

  return PDFNodeStreamFsRangeReader;
}(BaseRangeReader);

/***/ }),
/* 198 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createResponseStatusError = createResponseStatusError;
exports.extractFilenameFromHeader = extractFilenameFromHeader;
exports.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
exports.validateResponseStatus = validateResponseStatus;

var _util = __w_pdfjs_require__(1);

var _content_disposition = __w_pdfjs_require__(199);

function validateRangeRequestCapabilities(_ref) {
  var getResponseHeader = _ref.getResponseHeader,
      isHttp = _ref.isHttp,
      rangeChunkSize = _ref.rangeChunkSize,
      disableRange = _ref.disableRange;
  (0, _util.assert)(rangeChunkSize > 0, 'Range chunk size must be larger than zero');
  var returnValues = {
    allowRangeRequests: false,
    suggestedLength: undefined
  };
  var length = parseInt(getResponseHeader('Content-Length'), 10);

  if (!Number.isInteger(length)) {
    return returnValues;
  }

  returnValues.suggestedLength = length;

  if (length <= 2 * rangeChunkSize) {
    return returnValues;
  }

  if (disableRange || !isHttp) {
    return returnValues;
  }

  if (getResponseHeader('Accept-Ranges') !== 'bytes') {
    return returnValues;
  }

  var contentEncoding = getResponseHeader('Content-Encoding') || 'identity';

  if (contentEncoding !== 'identity') {
    return returnValues;
  }

  returnValues.allowRangeRequests = true;
  return returnValues;
}

function extractFilenameFromHeader(getResponseHeader) {
  var contentDisposition = getResponseHeader('Content-Disposition');

  if (contentDisposition) {
    var filename = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);

    if (filename.includes('%')) {
      try {
        filename = decodeURIComponent(filename);
      } catch (ex) {}
    }

    if (/\.pdf$/i.test(filename)) {
      return filename;
    }
  }

  return null;
}

function createResponseStatusError(status, url) {
  if (status === 404 || status === 0 && /^file:/.test(url)) {
    return new _util.MissingPDFException('Missing PDF "' + url + '".');
  }

  return new _util.UnexpectedResponseException('Unexpected server response (' + status + ') while retrieving PDF "' + url + '".', status);
}

function validateResponseStatus(status) {
  return status === 200 || status === 206;
}

/***/ }),
/* 199 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getFilenameFromContentDispositionHeader(contentDisposition) {
  var needsEncodingFixup = true;
  var tmp = toParamRegExp('filename\\*', 'i').exec(contentDisposition);

  if (tmp) {
    tmp = tmp[1];
    var filename = rfc2616unquote(tmp);
    filename = unescape(filename);
    filename = rfc5987decode(filename);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }

  tmp = rfc2231getparam(contentDisposition);

  if (tmp) {
    var _filename = rfc2047decode(tmp);

    return fixupEncoding(_filename);
  }

  tmp = toParamRegExp('filename', 'i').exec(contentDisposition);

  if (tmp) {
    tmp = tmp[1];

    var _filename2 = rfc2616unquote(tmp);

    _filename2 = rfc2047decode(_filename2);
    return fixupEncoding(_filename2);
  }

  function toParamRegExp(attributePattern, flags) {
    return new RegExp('(?:^|;)\\s*' + attributePattern + '\\s*=\\s*' + '(' + '[^";\\s][^;\\s]*' + '|' + '"(?:[^"\\\\]|\\\\"?)+"?' + ')', flags);
  }

  function textdecode(encoding, value) {
    if (encoding) {
      if (!/^[\x00-\xFF]+$/.test(value)) {
        return value;
      }

      try {
        var decoder = new TextDecoder(encoding, {
          fatal: true
        });
        var bytes = Array.from(value, function (ch) {
          return ch.charCodeAt(0) & 0xFF;
        });
        value = decoder.decode(new Uint8Array(bytes));
        needsEncodingFixup = false;
      } catch (e) {
        if (/^utf-?8$/i.test(encoding)) {
          try {
            value = decodeURIComponent(escape(value));
            needsEncodingFixup = false;
          } catch (err) {}
        }
      }
    }

    return value;
  }

  function fixupEncoding(value) {
    if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
      value = textdecode('utf-8', value);

      if (needsEncodingFixup) {
        value = textdecode('iso-8859-1', value);
      }
    }

    return value;
  }

  function rfc2231getparam(contentDisposition) {
    var matches = [],
        match;
    var iter = toParamRegExp('filename\\*((?!0\\d)\\d+)(\\*?)', 'ig');

    while ((match = iter.exec(contentDisposition)) !== null) {
      var _match = match,
          _match2 = _slicedToArray(_match, 4),
          n = _match2[1],
          quot = _match2[2],
          part = _match2[3];

      n = parseInt(n, 10);

      if (n in matches) {
        if (n === 0) {
          break;
        }

        continue;
      }

      matches[n] = [quot, part];
    }

    var parts = [];

    for (var n = 0; n < matches.length; ++n) {
      if (!(n in matches)) {
        break;
      }

      var _matches$n = _slicedToArray(matches[n], 2),
          quot = _matches$n[0],
          part = _matches$n[1];

      part = rfc2616unquote(part);

      if (quot) {
        part = unescape(part);

        if (n === 0) {
          part = rfc5987decode(part);
        }
      }

      parts.push(part);
    }

    return parts.join('');
  }

  function rfc2616unquote(value) {
    if (value.startsWith('"')) {
      var parts = value.slice(1).split('\\"');

      for (var i = 0; i < parts.length; ++i) {
        var quotindex = parts[i].indexOf('"');

        if (quotindex !== -1) {
          parts[i] = parts[i].slice(0, quotindex);
          parts.length = i + 1;
        }

        parts[i] = parts[i].replace(/\\(.)/g, '$1');
      }

      value = parts.join('"');
    }

    return value;
  }

  function rfc5987decode(extvalue) {
    var encodingend = extvalue.indexOf('\'');

    if (encodingend === -1) {
      return extvalue;
    }

    var encoding = extvalue.slice(0, encodingend);
    var langvalue = extvalue.slice(encodingend + 1);
    var value = langvalue.replace(/^[^']*'/, '');
    return textdecode(encoding, value);
  }

  function rfc2047decode(value) {
    if (!value.startsWith('=?') || /[\x00-\x19\x80-\xff]/.test(value)) {
      return value;
    }

    return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (_, charset, encoding, text) {
      if (encoding === 'q' || encoding === 'Q') {
        text = text.replace(/_/g, ' ');
        text = text.replace(/=([0-9a-fA-F]{2})/g, function (_, hex) {
          return String.fromCharCode(parseInt(hex, 16));
        });
        return textdecode(charset, text);
      }

      try {
        text = atob(text);
      } catch (e) {}

      return textdecode(charset, text);
    });
  }

  return '';
}

/***/ }),
/* 200 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFNetworkStream = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(180));

var _util = __w_pdfjs_require__(1);

var _network_utils = __w_pdfjs_require__(198);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

;
var OK_RESPONSE = 200;
var PARTIAL_CONTENT_RESPONSE = 206;

function getArrayBuffer(xhr) {
  var data = xhr.response;

  if (typeof data !== 'string') {
    return data;
  }

  var array = (0, _util.stringToBytes)(data);
  return array.buffer;
}

var NetworkManager =
/*#__PURE__*/
function () {
  function NetworkManager(url, args) {
    _classCallCheck(this, NetworkManager);

    this.url = url;
    args = args || {};
    this.isHttp = /^https?:/i.test(url);
    this.httpHeaders = this.isHttp && args.httpHeaders || {};
    this.withCredentials = args.withCredentials || false;

    this.getXhr = args.getXhr || function NetworkManager_getXhr() {
      return new XMLHttpRequest();
    };

    this.currXhrId = 0;
    this.pendingRequests = Object.create(null);
  }

  _createClass(NetworkManager, [{
    key: "requestRange",
    value: function requestRange(begin, end, listeners) {
      var args = {
        begin: begin,
        end: end
      };

      for (var prop in listeners) {
        args[prop] = listeners[prop];
      }

      return this.request(args);
    }
  }, {
    key: "requestFull",
    value: function requestFull(listeners) {
      return this.request(listeners);
    }
  }, {
    key: "request",
    value: function request(args) {
      var xhr = this.getXhr();
      var xhrId = this.currXhrId++;
      var pendingRequest = this.pendingRequests[xhrId] = {
        xhr: xhr
      };
      xhr.open('GET', this.url);
      xhr.withCredentials = this.withCredentials;

      for (var property in this.httpHeaders) {
        var value = this.httpHeaders[property];

        if (typeof value === 'undefined') {
          continue;
        }

        xhr.setRequestHeader(property, value);
      }

      if (this.isHttp && 'begin' in args && 'end' in args) {
        xhr.setRequestHeader('Range', "bytes=".concat(args.begin, "-").concat(args.end - 1));
        pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
      } else {
        pendingRequest.expectedStatus = OK_RESPONSE;
      }

      xhr.responseType = 'arraybuffer';

      if (args.onError) {
        xhr.onerror = function (evt) {
          args.onError(xhr.status);
        };
      }

      xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
      xhr.onprogress = this.onProgress.bind(this, xhrId);
      pendingRequest.onHeadersReceived = args.onHeadersReceived;
      pendingRequest.onDone = args.onDone;
      pendingRequest.onError = args.onError;
      pendingRequest.onProgress = args.onProgress;
      xhr.send(null);
      return xhrId;
    }
  }, {
    key: "onProgress",
    value: function onProgress(xhrId, evt) {
      var pendingRequest = this.pendingRequests[xhrId];

      if (!pendingRequest) {
        return;
      }

      if (pendingRequest.onProgress) {
        pendingRequest.onProgress(evt);
      }
    }
  }, {
    key: "onStateChange",
    value: function onStateChange(xhrId, evt) {
      var pendingRequest = this.pendingRequests[xhrId];

      if (!pendingRequest) {
        return;
      }

      var xhr = pendingRequest.xhr;

      if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
        pendingRequest.onHeadersReceived();
        delete pendingRequest.onHeadersReceived;
      }

      if (xhr.readyState !== 4) {
        return;
      }

      if (!(xhrId in this.pendingRequests)) {
        return;
      }

      delete this.pendingRequests[xhrId];

      if (xhr.status === 0 && this.isHttp) {
        if (pendingRequest.onError) {
          pendingRequest.onError(xhr.status);
        }

        return;
      }

      var xhrStatus = xhr.status || OK_RESPONSE;
      var ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;

      if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
        if (pendingRequest.onError) {
          pendingRequest.onError(xhr.status);
        }

        return;
      }

      var chunk = getArrayBuffer(xhr);

      if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
        var rangeHeader = xhr.getResponseHeader('Content-Range');
        var matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
        pendingRequest.onDone({
          begin: parseInt(matches[1], 10),
          chunk: chunk
        });
      } else if (chunk) {
        pendingRequest.onDone({
          begin: 0,
          chunk: chunk
        });
      } else if (pendingRequest.onError) {
        pendingRequest.onError(xhr.status);
      }
    }
  }, {
    key: "hasPendingRequests",
    value: function hasPendingRequests() {
      for (var xhrId in this.pendingRequests) {
        return true;
      }

      return false;
    }
  }, {
    key: "getRequestXhr",
    value: function getRequestXhr(xhrId) {
      return this.pendingRequests[xhrId].xhr;
    }
  }, {
    key: "isPendingRequest",
    value: function isPendingRequest(xhrId) {
      return xhrId in this.pendingRequests;
    }
  }, {
    key: "abortAllRequests",
    value: function abortAllRequests() {
      for (var xhrId in this.pendingRequests) {
        this.abortRequest(xhrId | 0);
      }
    }
  }, {
    key: "abortRequest",
    value: function abortRequest(xhrId) {
      var xhr = this.pendingRequests[xhrId].xhr;
      delete this.pendingRequests[xhrId];
      xhr.abort();
    }
  }]);

  return NetworkManager;
}();

var PDFNetworkStream =
/*#__PURE__*/
function () {
  function PDFNetworkStream(source) {
    _classCallCheck(this, PDFNetworkStream);

    this._source = source;
    this._manager = new NetworkManager(source.url, {
      httpHeaders: source.httpHeaders,
      withCredentials: source.withCredentials
    });
    this._rangeChunkSize = source.rangeChunkSize;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }

  _createClass(PDFNetworkStream, [{
    key: "_onRangeRequestReaderClosed",
    value: function _onRangeRequestReaderClosed(reader) {
      var i = this._rangeRequestReaders.indexOf(reader);

      if (i >= 0) {
        this._rangeRequestReaders.splice(i, 1);
      }
    }
  }, {
    key: "getFullReader",
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
      return this._fullRequestReader;
    }
  }, {
    key: "getRangeReader",
    value: function getRangeReader(begin, end) {
      var reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
      reader.onClosed = this._onRangeRequestReaderClosed.bind(this);

      this._rangeRequestReaders.push(reader);

      return reader;
    }
  }, {
    key: "cancelAllRequests",
    value: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }

      var readers = this._rangeRequestReaders.slice(0);

      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  }]);

  return PDFNetworkStream;
}();

exports.PDFNetworkStream = PDFNetworkStream;

var PDFNetworkStreamFullRequestReader =
/*#__PURE__*/
function () {
  function PDFNetworkStreamFullRequestReader(manager, source) {
    _classCallCheck(this, PDFNetworkStreamFullRequestReader);

    this._manager = manager;
    var args = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = source.url;
    this._fullRequestId = manager.requestFull(args);
    this._headersReceivedCapability = (0, _util.createPromiseCapability)();
    this._disableRange = source.disableRange || false;
    this._contentLength = source.length;
    this._rangeChunkSize = source.rangeChunkSize;

    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }

    this._isStreamingSupported = false;
    this._isRangeSupported = false;
    this._cachedChunks = [];
    this._requests = [];
    this._done = false;
    this._storedError = undefined;
    this._filename = null;
    this.onProgress = null;
  }

  _createClass(PDFNetworkStreamFullRequestReader, [{
    key: "_onHeadersReceived",
    value: function _onHeadersReceived() {
      var fullRequestXhrId = this._fullRequestId;

      var fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);

      var getResponseHeader = function getResponseHeader(name) {
        return fullRequestXhr.getResponseHeader(name);
      };

      var _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
        getResponseHeader: getResponseHeader,
        isHttp: this._manager.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      }),
          allowRangeRequests = _validateRangeRequest.allowRangeRequests,
          suggestedLength = _validateRangeRequest.suggestedLength;

      if (allowRangeRequests) {
        this._isRangeSupported = true;
      }

      this._contentLength = suggestedLength || this._contentLength;
      this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);

      if (this._isRangeSupported) {
        this._manager.abortRequest(fullRequestXhrId);
      }

      this._headersReceivedCapability.resolve();
    }
  }, {
    key: "_onDone",
    value: function _onDone(args) {
      if (args) {
        if (this._requests.length > 0) {
          var requestCapability = this._requests.shift();

          requestCapability.resolve({
            value: args.chunk,
            done: false
          });
        } else {
          this._cachedChunks.push(args.chunk);
        }
      }

      this._done = true;

      if (this._cachedChunks.length > 0) {
        return;
      }

      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });

      this._requests = [];
    }
  }, {
    key: "_onError",
    value: function _onError(status) {
      var url = this._url;
      var exception = (0, _network_utils.createResponseStatusError)(status, url);
      this._storedError = exception;

      this._headersReceivedCapability.reject(exception);

      this._requests.forEach(function (requestCapability) {
        requestCapability.reject(exception);
      });

      this._requests = [];
      this._cachedChunks = [];
    }
  }, {
    key: "_onProgress",
    value: function _onProgress(data) {
      if (this.onProgress) {
        this.onProgress({
          loaded: data.loaded,
          total: data.lengthComputable ? data.total : this._contentLength
        });
      }
    }
  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var chunk, requestCapability;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this._storedError) {
                  _context.next = 2;
                  break;
                }

                throw this._storedError;

              case 2:
                if (!(this._cachedChunks.length > 0)) {
                  _context.next = 5;
                  break;
                }

                chunk = this._cachedChunks.shift();
                return _context.abrupt("return", {
                  value: chunk,
                  done: false
                });

              case 5:
                if (!this._done) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 7:
                requestCapability = (0, _util.createPromiseCapability)();

                this._requests.push(requestCapability);

                return _context.abrupt("return", requestCapability.promise);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      this._done = true;

      this._headersReceivedCapability.reject(reason);

      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });

      this._requests = [];

      if (this._manager.isPendingRequest(this._fullRequestId)) {
        this._manager.abortRequest(this._fullRequestId);
      }

      this._fullRequestReader = null;
    }
  }, {
    key: "filename",
    get: function get() {
      return this._filename;
    }
  }, {
    key: "isRangeSupported",
    get: function get() {
      return this._isRangeSupported;
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }, {
    key: "contentLength",
    get: function get() {
      return this._contentLength;
    }
  }, {
    key: "headersReady",
    get: function get() {
      return this._headersReceivedCapability.promise;
    }
  }]);

  return PDFNetworkStreamFullRequestReader;
}();

var PDFNetworkStreamRangeRequestReader =
/*#__PURE__*/
function () {
  function PDFNetworkStreamRangeRequestReader(manager, begin, end) {
    _classCallCheck(this, PDFNetworkStreamRangeRequestReader);

    this._manager = manager;
    var args = {
      onDone: this._onDone.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._requestId = manager.requestRange(begin, end, args);
    this._requests = [];
    this._queuedChunk = null;
    this._done = false;
    this.onProgress = null;
    this.onClosed = null;
  }

  _createClass(PDFNetworkStreamRangeRequestReader, [{
    key: "_close",
    value: function _close() {
      if (this.onClosed) {
        this.onClosed(this);
      }
    }
  }, {
    key: "_onDone",
    value: function _onDone(data) {
      var chunk = data.chunk;

      if (this._requests.length > 0) {
        var requestCapability = this._requests.shift();

        requestCapability.resolve({
          value: chunk,
          done: false
        });
      } else {
        this._queuedChunk = chunk;
      }

      this._done = true;

      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });

      this._requests = [];

      this._close();
    }
  }, {
    key: "_onProgress",
    value: function _onProgress(evt) {
      if (!this.isStreamingSupported && this.onProgress) {
        this.onProgress({
          loaded: evt.loaded
        });
      }
    }
  }, {
    key: "read",
    value: function () {
      var _read2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var chunk, requestCapability;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this._queuedChunk !== null)) {
                  _context2.next = 4;
                  break;
                }

                chunk = this._queuedChunk;
                this._queuedChunk = null;
                return _context2.abrupt("return", {
                  value: chunk,
                  done: false
                });

              case 4:
                if (!this._done) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 6:
                requestCapability = (0, _util.createPromiseCapability)();

                this._requests.push(requestCapability);

                return _context2.abrupt("return", requestCapability.promise);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function read() {
        return _read2.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      this._done = true;

      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({
          value: undefined,
          done: true
        });
      });

      this._requests = [];

      if (this._manager.isPendingRequest(this._requestId)) {
        this._manager.abortRequest(this._requestId);
      }

      this._close();
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return false;
    }
  }]);

  return PDFNetworkStreamRangeRequestReader;
}();

/***/ }),
/* 201 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFFetchStream = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(180));

var _util = __w_pdfjs_require__(1);

var _network_utils = __w_pdfjs_require__(198);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function createFetchOptions(headers, withCredentials, abortController) {
  return {
    method: 'GET',
    headers: headers,
    signal: abortController && abortController.signal,
    mode: 'cors',
    credentials: withCredentials ? 'include' : 'same-origin',
    redirect: 'follow'
  };
}

var PDFFetchStream =
/*#__PURE__*/
function () {
  function PDFFetchStream(source) {
    _classCallCheck(this, PDFFetchStream);

    this.source = source;
    this.isHttp = /^https?:/i.test(source.url);
    this.httpHeaders = this.isHttp && source.httpHeaders || {};
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }

  _createClass(PDFFetchStream, [{
    key: "getFullReader",
    value: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      this._fullRequestReader = new PDFFetchStreamReader(this);
      return this._fullRequestReader;
    }
  }, {
    key: "getRangeReader",
    value: function getRangeReader(begin, end) {
      if (end <= this._progressiveDataLength) {
        return null;
      }

      var reader = new PDFFetchStreamRangeReader(this, begin, end);

      this._rangeRequestReaders.push(reader);

      return reader;
    }
  }, {
    key: "cancelAllRequests",
    value: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }

      var readers = this._rangeRequestReaders.slice(0);

      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  }, {
    key: "_progressiveDataLength",
    get: function get() {
      return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
    }
  }]);

  return PDFFetchStream;
}();

exports.PDFFetchStream = PDFFetchStream;

var PDFFetchStreamReader =
/*#__PURE__*/
function () {
  function PDFFetchStreamReader(stream) {
    var _this = this;

    _classCallCheck(this, PDFFetchStreamReader);

    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    this._filename = null;
    var source = stream.source;
    this._withCredentials = source.withCredentials || false;
    this._contentLength = source.length;
    this._headersCapability = (0, _util.createPromiseCapability)();
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;

    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }

    if (typeof AbortController !== 'undefined') {
      this._abortController = new AbortController();
    }

    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._headers = new Headers();

    for (var property in this._stream.httpHeaders) {
      var value = this._stream.httpHeaders[property];

      if (typeof value === 'undefined') {
        continue;
      }

      this._headers.append(property, value);
    }

    var url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
      if (!(0, _network_utils.validateResponseStatus)(response.status)) {
        throw (0, _network_utils.createResponseStatusError)(response.status, url);
      }

      _this._reader = response.body.getReader();

      _this._headersCapability.resolve();

      var getResponseHeader = function getResponseHeader(name) {
        return response.headers.get(name);
      };

      var _validateRangeRequest = (0, _network_utils.validateRangeRequestCapabilities)({
        getResponseHeader: getResponseHeader,
        isHttp: _this._stream.isHttp,
        rangeChunkSize: _this._rangeChunkSize,
        disableRange: _this._disableRange
      }),
          allowRangeRequests = _validateRangeRequest.allowRangeRequests,
          suggestedLength = _validateRangeRequest.suggestedLength;

      _this._isRangeSupported = allowRangeRequests;
      _this._contentLength = suggestedLength || _this._contentLength;
      _this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);

      if (!_this._isStreamingSupported && _this._isRangeSupported) {
        _this.cancel(new _util.AbortException('Streaming is disabled.'));
      }
    })["catch"](this._headersCapability.reject);
    this.onProgress = null;
  }

  _createClass(PDFFetchStreamReader, [{
    key: "read",
    value: function () {
      var _read = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _ref, value, done, buffer;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._headersCapability.promise;

              case 2:
                _context.next = 4;
                return this._reader.read();

              case 4:
                _ref = _context.sent;
                value = _ref.value;
                done = _ref.done;

                if (!done) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", {
                  value: value,
                  done: done
                });

              case 9:
                this._loaded += value.byteLength;

                if (this.onProgress) {
                  this.onProgress({
                    loaded: this._loaded,
                    total: this._contentLength
                  });
                }

                buffer = new Uint8Array(value).buffer;
                return _context.abrupt("return", {
                  value: buffer,
                  done: false
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      if (this._reader) {
        this._reader.cancel(reason);
      }

      if (this._abortController) {
        this._abortController.abort();
      }
    }
  }, {
    key: "headersReady",
    get: function get() {
      return this._headersCapability.promise;
    }
  }, {
    key: "filename",
    get: function get() {
      return this._filename;
    }
  }, {
    key: "contentLength",
    get: function get() {
      return this._contentLength;
    }
  }, {
    key: "isRangeSupported",
    get: function get() {
      return this._isRangeSupported;
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }]);

  return PDFFetchStreamReader;
}();

var PDFFetchStreamRangeReader =
/*#__PURE__*/
function () {
  function PDFFetchStreamRangeReader(stream, begin, end) {
    var _this2 = this;

    _classCallCheck(this, PDFFetchStreamRangeReader);

    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    var source = stream.source;
    this._withCredentials = source.withCredentials || false;
    this._readCapability = (0, _util.createPromiseCapability)();
    this._isStreamingSupported = !source.disableStream;

    if (typeof AbortController !== 'undefined') {
      this._abortController = new AbortController();
    }

    this._headers = new Headers();

    for (var property in this._stream.httpHeaders) {
      var value = this._stream.httpHeaders[property];

      if (typeof value === 'undefined') {
        continue;
      }

      this._headers.append(property, value);
    }

    this._headers.append('Range', "bytes=".concat(begin, "-").concat(end - 1));

    var url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(function (response) {
      if (!(0, _network_utils.validateResponseStatus)(response.status)) {
        throw (0, _network_utils.createResponseStatusError)(response.status, url);
      }

      _this2._readCapability.resolve();

      _this2._reader = response.body.getReader();
    });
    this.onProgress = null;
  }

  _createClass(PDFFetchStreamRangeReader, [{
    key: "read",
    value: function () {
      var _read2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var _ref2, value, done, buffer;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._readCapability.promise;

              case 2:
                _context2.next = 4;
                return this._reader.read();

              case 4:
                _ref2 = _context2.sent;
                value = _ref2.value;
                done = _ref2.done;

                if (!done) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", {
                  value: value,
                  done: done
                });

              case 9:
                this._loaded += value.byteLength;

                if (this.onProgress) {
                  this.onProgress({
                    loaded: this._loaded
                  });
                }

                buffer = new Uint8Array(value).buffer;
                return _context2.abrupt("return", {
                  value: buffer,
                  done: false
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function read() {
        return _read2.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "cancel",
    value: function cancel(reason) {
      if (this._reader) {
        this._reader.cancel(reason);
      }

      if (this._abortController) {
        this._abortController.abort();
      }
    }
  }, {
    key: "isStreamingSupported",
    get: function get() {
      return this._isStreamingSupported;
    }
  }]);

  return PDFFetchStreamRangeReader;
}();

/***/ })
/******/ ]);
});
//# sourceMappingURL=pdf.js.map