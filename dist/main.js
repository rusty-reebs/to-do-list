/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0; /* stretches out to fill entire screen */\n  font-family: \"Roboto\", serif;\n}\n\n.homecontainer {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n}\n\n.sidebar {\n  display: grid;\n  grid-template-rows: 70px 70px 70px 1fr;\n  background-color: lightyellow;\n  height: auto;\n}\n\n.main {\n  display: grid;\n  justify-content: center;\n  background-color: lightgreen;\n  height: auto;\n  width: auto;\n  grid-template-rows: 70px 30px 1fr;\n}\n\n.apptitle {\n  grid-row: 1;\n  background-color: #4caf50;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  height: 40px;\n  line-height: 40px;\n  margin-top: 15px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 26px;\n  border-radius: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  cursor: pointer;\n}\n\n.projectheader {\n  grid-row: 3;\n  border-bottom: 1px solid grey;\n  color: black;\n  text-align: left;\n  text-decoration: none;\n  display: block;\n  height: 40px;\n  line-height: 40px;\n  margin-top: 15px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 26px;\n}\n\n.newprojectbutton {\n  float: right;\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n  font-size: 30px;\n  border-radius: 50px;\n  transition-duration: 0.4s;\n}\n\n.newprojectbutton:hover {\n  background-color: #4caf50;\n  color: white;\n  border-radius: 50px;\n}\n\n.projectsdiv {\n  grid-row: 4;\n}\n\n.project {\n  color: black;\n  font-size: 20px;\n  padding: 5px;\n  margin-left: 10px;\n  margin-right: 40px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  transition-duration: 0.4s;\n  border-radius: 10px;\n}\n\n.project:hover {\n  background-color: #4caf50;\n  color: white;\n}\n\n.activeproject {\n  background-color: #4caf50;\n  color: white;\n}\n\n.projectinput {\n  background-color: lightgreen;\n  color: black;\n  font-size: 20px;\n  border: none;\n  border-radius: 10px;\n  margin-left: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.saveproject {\n  display: flex;\n  justify-content: center;\n  font-size: 25px;\n}\n\n.saveprojectbtn {\n  background-color: #4caf50;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  width: 130px;\n  height: 30px;\n  margin-top: 15px;\n  font-size: 18px;\n  border-radius: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.buttoncontainer {\n  display: flex;\n  grid-row: 1;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n\n.newnotebutton {\n  background-color: #4caf50;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  width: 300px;\n  height: 40px;\n  font-size: 26px;\n  border-radius: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.newnotebutton:hover {\n  background-color: lightyellow;\n  color: black;\n}\n\n.popupcontainer {\n  grid-row: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.popupbox {\n  position: absolute;\n  top: 20%;\n  z-index: 100;\n  width: 450px;\n  height: 450px;\n  font-size: 30px;\n  background-color: lightyellow;\n  border-radius: 3px;\n  border: none;\n  text-align: center;\n  color: black;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.notescontainer {\n  grid-row: 3;\n  min-height: 1090px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-rows: max-content;\n  grid-gap: 30px;\n  opacity: 1;\n}\n\n.note {\n  display: grid;\n  grid-template-rows: 23% 50% 9% 9% 9%;\n  background-color: lightyellow;\n  color: black;\n  height: 250px;\n  width: 250px;\n  border-radius: 3px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.scroll {\n  overflow-x: hidden;\n  overflow-y: auto;\n  white-space: normal;\n}\n\n.notediv {\n  margin-top: 0;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 0;\n}\n\n.notedivtitle {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  padding-bottom: 5px;\n  font-size: 18px;\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.notedivproject {\n  border-top: 0.5px solid black;\n  margin-left: 15px;\n  margin-right: 15px;\n  font-size: 14px;\n  padding-top: 5px;\n  font-weight: bold;\n  align-self: center;\n}\n\n.notedivduedate {\n  font-size: 14px;\n  font-weight: bold;\n  margin-left: 15px;\n  margin-right: 15px;\n  align-self: center;\n}\n\n.notedivpriority {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  font-size: 14px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 5px;\n}\n\n.high {\n  width: fit-content;\n  color: white;\n  background-color: #f44336;\n  padding: 1px 5px;\n  border-radius: 8px;\n}\n\n.medium {\n  width: fit-content;\n  color: black;\n  background-color: #ffc107;\n  padding: 1px 5px;\n  border-radius: 8px;\n}\n\n.low {\n  width: fit-content;\n  color: black;\n  background-color: lightgreen;\n  padding: 1px 5px;\n  border-radius: 8px;\n}\n\n.noteform {\n  display: grid;\n  height: 450px;\n  grid-template-rows: 60px 130px 60px 60px 60px 60px;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  justify-items: center;\n  text-align: center;\n}\n\n.notetitle {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row: 1;\n  font-family: inherit;\n  font-size: 20px;\n  border: 0;\n  border-radius: 10px;\n  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);\n}\n\n.description {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row: 2;\n  width: 90%;\n  height: 120px;\n  resize: none;\n  font-family: inherit;\n  font-size: 20px;\n  border: 0;\n  border-radius: 10px;\n  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);\n}\n\n.projectselect {\n  grid-column: 1;\n  grid-row: 3;\n  justify-self: left;\n  margin-left: 25px;\n  font-size: 18px;\n}\n\n.duedate {\n  grid-column: 1;\n  grid-row: 4;\n  justify-self: left;\n  margin-left: 25px;\n  font-size: 18px;\n}\n\n.duedatecal {\n  grid-column: 2;\n  grid-row: 4;\n  margin-right: 25px;\n}\n\n.prioritylabel {\n  grid-column: 1;\n  grid-row: 5;\n  justify-self: left;\n  margin-left: 25px;\n  font-size: 18px;\n}\n.trashicondiv {\n  grid-column: 2;\n  justify-self: right;\n}\n\ninput {\n  width: 90%;\n  margin: 8px 0;\n  padding: 10px;\n  background-color: lightyellow;\n  box-sizing: border-box;\n}\n\ntextarea {\n  width: 90%;\n  background-color: lightyellow;\n  box-sizing: border-box;\n}\n\nselect {\n  grid-column: 2;\n  margin-right: 25px;\n  width: 200px;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.savebutton {\n  grid-row: 6;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  background-color: #4caf50;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  width: 200px;\n  height: 30px;\n  margin-top: 15px;\n  font-size: 18px;\n  border-radius: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./styles/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  margin: 0; /* stretches out to fill entire screen */\n  font-family: \"Roboto\", serif;\n}\n\n.homecontainer {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n}\n\n.sidebar {\n  display: grid;\n  grid-template-rows: 70px 70px 70px 1fr;\n  background-color: lightyellow;\n  height: auto;\n}\n\n.main {\n  display: grid;\n  justify-content: center;\n  background-color: lightgreen;\n  height: auto;\n  width: auto;\n  grid-template-rows: 70px 30px 1fr;\n}\n\n.apptitle {\n  grid-row: 1;\n  background-color: #4caf50;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  height: 40px;\n  line-height: 40px;\n  margin-top: 15px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 26px;\n  border-radius: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  cursor: pointer;\n}\n\n.projectheader {\n  grid-row: 3;\n  border-bottom: 1px solid grey;\n  color: black;\n  text-align: left;\n  text-decoration: none;\n  display: block;\n  height: 40px;\n  line-height: 40px;\n  margin-top: 15px;\n  margin-bottom: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  font-size: 26px;\n}\n\n.newprojectbutton {\n  float: right;\n  background-color: inherit;\n  border: none;\n  cursor: pointer;\n  font-size: 30px;\n  border-radius: 50px;\n  transition-duration: 0.4s;\n}\n\n.newprojectbutton:hover {\n  background-color: #4caf50;\n  color: white;\n  border-radius: 50px;\n}\n\n.projectsdiv {\n  grid-row: 4;\n}\n\n.project {\n  color: black;\n  font-size: 20px;\n  padding: 5px;\n  margin-left: 10px;\n  margin-right: 40px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  transition-duration: 0.4s;\n  border-radius: 10px;\n}\n\n.project:hover {\n  background-color: #4caf50;\n  color: white;\n}\n\n.activeproject {\n  background-color: #4caf50;\n  color: white;\n}\n\n.projectinput {\n  background-color: lightgreen;\n  color: black;\n  font-size: 20px;\n  border: none;\n  border-radius: 10px;\n  margin-left: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.saveproject {\n  display: flex;\n  justify-content: center;\n  font-size: 25px;\n}\n\n.saveprojectbtn {\n  background-color: #4caf50;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  width: 130px;\n  height: 30px;\n  margin-top: 15px;\n  font-size: 18px;\n  border-radius: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.buttoncontainer {\n  display: flex;\n  grid-row: 1;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n\n.newnotebutton {\n  background-color: #4caf50;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  width: 300px;\n  height: 40px;\n  font-size: 26px;\n  border-radius: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.newnotebutton:hover {\n  background-color: lightyellow;\n  color: black;\n}\n\n.popupcontainer {\n  grid-row: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.popupbox {\n  position: absolute;\n  top: 20%;\n  z-index: 100;\n  width: 450px;\n  height: 450px;\n  font-size: 30px;\n  background-color: lightyellow;\n  border-radius: 3px;\n  border: none;\n  text-align: center;\n  color: black;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.notescontainer {\n  grid-row: 3;\n  min-height: 1090px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-rows: max-content;\n  grid-gap: 30px;\n  opacity: 1;\n}\n\n.note {\n  display: grid;\n  grid-template-rows: 23% 50% 9% 9% 9%;\n  background-color: lightyellow;\n  color: black;\n  height: 250px;\n  width: 250px;\n  border-radius: 3px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.scroll {\n  overflow-x: hidden;\n  overflow-y: auto;\n  white-space: normal;\n}\n\n.notediv {\n  margin-top: 0;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 0;\n}\n\n.notedivtitle {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  padding-bottom: 5px;\n  font-size: 18px;\n  font-weight: bold;\n  overflow: hidden;\n}\n\n.notedivproject {\n  border-top: 0.5px solid black;\n  margin-left: 15px;\n  margin-right: 15px;\n  font-size: 14px;\n  padding-top: 5px;\n  font-weight: bold;\n  align-self: center;\n}\n\n.notedivduedate {\n  font-size: 14px;\n  font-weight: bold;\n  margin-left: 15px;\n  margin-right: 15px;\n  align-self: center;\n}\n\n.notedivpriority {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  font-size: 14px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 5px;\n}\n\n.high {\n  width: fit-content;\n  color: white;\n  background-color: #f44336;\n  padding: 1px 5px;\n  border-radius: 8px;\n}\n\n.medium {\n  width: fit-content;\n  color: black;\n  background-color: #ffc107;\n  padding: 1px 5px;\n  border-radius: 8px;\n}\n\n.low {\n  width: fit-content;\n  color: black;\n  background-color: lightgreen;\n  padding: 1px 5px;\n  border-radius: 8px;\n}\n\n.noteform {\n  display: grid;\n  height: 450px;\n  grid-template-rows: 60px 130px 60px 60px 60px 60px;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  justify-items: center;\n  text-align: center;\n}\n\n.notetitle {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row: 1;\n  font-family: inherit;\n  font-size: 20px;\n  border: 0;\n  border-radius: 10px;\n  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);\n}\n\n.description {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row: 2;\n  width: 90%;\n  height: 120px;\n  resize: none;\n  font-family: inherit;\n  font-size: 20px;\n  border: 0;\n  border-radius: 10px;\n  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);\n}\n\n.projectselect {\n  grid-column: 1;\n  grid-row: 3;\n  justify-self: left;\n  margin-left: 25px;\n  font-size: 18px;\n}\n\n.duedate {\n  grid-column: 1;\n  grid-row: 4;\n  justify-self: left;\n  margin-left: 25px;\n  font-size: 18px;\n}\n\n.duedatecal {\n  grid-column: 2;\n  grid-row: 4;\n  margin-right: 25px;\n}\n\n.prioritylabel {\n  grid-column: 1;\n  grid-row: 5;\n  justify-self: left;\n  margin-left: 25px;\n  font-size: 18px;\n}\n.trashicondiv {\n  grid-column: 2;\n  justify-self: right;\n}\n\ninput {\n  width: 90%;\n  margin: 8px 0;\n  padding: 10px;\n  background-color: lightyellow;\n  box-sizing: border-box;\n}\n\ntextarea {\n  width: 90%;\n  background-color: lightyellow;\n  box-sizing: border-box;\n}\n\nselect {\n  grid-column: 2;\n  margin-right: 25px;\n  width: 200px;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.savebutton {\n  grid-row: 6;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  background-color: #4caf50;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  width: 200px;\n  height: 30px;\n  margin-top: 15px;\n  font-size: 18px;\n  border-radius: 10px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ renderHome),
/* harmony export */   "clearProjects": () => (/* binding */ clearProjects)
/* harmony export */ });
// home.js renders the sidebar and main container



const renderHome = (() => {
  const content = document.getElementById("content");
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homecontainer");
  content.appendChild(homeContainer);

  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  homeContainer.appendChild(sidebar);

  const main = document.createElement("div");
  main.classList.add("main");
  homeContainer.appendChild(main);

  const appTitle = document.createElement("div");
  appTitle.classList.add("apptitle");
  appTitle.innerHTML = "✅ My To-Do List";
  sidebar.appendChild(appTitle);

  const projectHeader = document.createElement("div");
  projectHeader.classList.add("projectheader");
  projectHeader.innerHTML = "Projects";
  sidebar.appendChild(projectHeader);

  const newProjectButton = document.createElement("button");
  newProjectButton.classList.add("newprojectbutton");
  newProjectButton.innerHTML = "+";
  projectHeader.appendChild(newProjectButton);

  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projectsdiv");
  sidebar.appendChild(projectsDiv);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("buttoncontainer");
  main.appendChild(buttonContainer);

  const newNoteButton = document.createElement("button");
  newNoteButton.classList.add("newnotebutton");
  newNoteButton.innerHTML = "+ New To-Do Note";
  buttonContainer.appendChild(newNoteButton);

  const notesContainer = document.createElement("div");
  notesContainer.classList.add("notescontainer");
  main.appendChild(notesContainer);

  return {
    appTitle,
    homeContainer,
    main,
    notesContainer,
    newNoteButton,
    newProjectButton,
    projectsDiv,
  };
})();

const clearProjects = () => {
  while (renderHome.projectsDiv.hasChildNodes()) {
    renderHome.projectsDiv.removeChild(renderHome.projectsDiv.firstChild);
  }
};




/***/ }),

/***/ "./src/components/notepopup.js":
/*!*************************************!*\
  !*** ./src/components/notepopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popupContainer": () => (/* binding */ popupContainer),
/* harmony export */   "noteForm": () => (/* binding */ noteForm),
/* harmony export */   "inputDescrip": () => (/* binding */ inputDescrip),
/* harmony export */   "inputTitle": () => (/* binding */ inputTitle),
/* harmony export */   "inputDueDate": () => (/* binding */ inputDueDate),
/* harmony export */   "selectPriority": () => (/* binding */ selectPriority),
/* harmony export */   "buildNotePopup": () => (/* binding */ buildNotePopup),
/* harmony export */   "clearProjectOptions": () => (/* binding */ clearProjectOptions),
/* harmony export */   "renderProjectOptions": () => (/* binding */ renderProjectOptions)
/* harmony export */ });
// notepopup.js manipulates the DOM to build note popup box for input/edit




const popupContainer = document.createElement("div");
popupContainer.classList.add("popupcontainer");
const popupBox = document.createElement("div");
popupBox.classList.add("popupbox");
const noteForm = document.createElement("form");
noteForm.classList.add("noteform");
noteForm.id = "noteform";
const inputTitle = document.createElement("input");
inputTitle.classList.add("notetitle");
inputTitle.type = "text";
inputTitle.name = "title";
inputTitle.id = "notetitle";
inputTitle.placeholder = "Title";
const inputDescrip = document.createElement("textarea");
inputDescrip.classList.add("description");
inputDescrip.name = "description";
inputDescrip.id = "notedescription";
inputDescrip.placeholder = "Take a note...";
const labelProject = document.createElement("label");
labelProject.classList.add("projectselect");
labelProject.for = "project";
labelProject.innerHTML = "Project:";
const selectProject = document.createElement("select");
selectProject.classList.add("selectproject");
selectProject.name = "project";
selectProject.id = "project";
const labelDueDate = document.createElement("label");
labelDueDate.classList.add("duedate");
labelDueDate.for = "duedate";
labelDueDate.innerHTML = "Due Date:";
const inputDueDate = document.createElement("input");
inputDueDate.classList.add("duedatecal");
inputDueDate.type = "date";
inputDueDate.name = "duedate";
inputDueDate.id = "duedate";
const labelPriority = document.createElement("label");
labelPriority.classList.add("prioritylabel");
labelPriority.for = "priority";
labelPriority.innerHTML = "Priority:";
const selectPriority = document.createElement("select");
selectPriority.classList.add("selectpriority");
selectPriority.name = "priority";
selectPriority.id = "priority";
const highPri = document.createElement("option");
highPri.value = "High";
highPri.innerHTML = "High";
const medPri = document.createElement("option");
medPri.value = "Medium";
medPri.innerHTML = "Medium";
const lowPri = document.createElement("option");
lowPri.value = "Low";
lowPri.innerHTML = "Low";
const noteSubmitButton = document.createElement("button");
noteSubmitButton.type = "submit";
noteSubmitButton.classList.add("savebutton");
noteSubmitButton.name = "submit";
noteSubmitButton.id = "submitnote";
noteSubmitButton.innerHTML = "Save";
const div = document.createElement("div");

const clearProjectOptions = () => {
  while (selectProject.hasChildNodes()) {
    selectProject.removeChild(selectProject.firstChild);
  }
};

const renderProjectOptions = (project) => {
  const option = document.createElement("option");
  option.innerHTML = project;
  option.value = project;
  selectProject.appendChild(option);
};

const buildNotePopup = () => {
  popupContainer.appendChild(popupBox);
  popupBox.appendChild(noteForm);

  noteForm.appendChild(inputTitle);
  noteForm.appendChild(inputDescrip);
  noteForm.appendChild(labelProject);
  noteForm.appendChild(selectProject);
  noteForm.appendChild(labelDueDate);
  noteForm.appendChild(inputDueDate);
  noteForm.appendChild(labelPriority);
  noteForm.appendChild(selectPriority);

  selectPriority.appendChild(highPri);
  selectPriority.appendChild(medPri);
  selectPriority.appendChild(lowPri);

  noteForm.appendChild(noteSubmitButton);
};




/***/ }),

/***/ "./src/components/projects.js":
/*!************************************!*\
  !*** ./src/components/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectInputForm": () => (/* binding */ projectInputForm),
/* harmony export */   "saveProjectButton": () => (/* binding */ saveProjectButton),
/* harmony export */   "showProjectInput": () => (/* binding */ showProjectInput)
/* harmony export */ });
// projects.js

const projectInputForm = document.createElement("form");
const projectInput = document.createElement("input");
projectInput.classList.add("projectinput");
projectInput.type = "text";
projectInput.name = "project";
projectInput.placeholder = "New project name";
projectInput.id = "project";
const saveProjectDiv = document.createElement("div");
saveProjectDiv.classList.add("saveproject");
const saveProjectButton = document.createElement("button");
saveProjectButton.classList.add("saveprojectbtn");
saveProjectButton.innerHTML = "Save";

const showProjectInput = () => {
  projectInputForm.appendChild(projectInput);
  projectInputForm.appendChild(saveProjectDiv);
  saveProjectDiv.appendChild(saveProjectButton);
};





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");
/* harmony import */ var _components_notepopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/notepopup */ "./src/components/notepopup.js");
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/projects */ "./src/components/projects.js");
// Main JS script to call other functions









class Note {
  constructor(title, description, project, duedate, priority) {
    this.title = title;
    this.description = description;
    this.project = project;
    this.duedate = duedate;
    this.priority = priority;
  }
}

let projectsArray = ["Sample To-Dos"];

let myNoteArray = [
  {
    title: "1st note",
    description:
      "Hi! This app is best viewed on a desktop! Add your projects by clicking the '+' on the left. You can sort your notes by project, too.",
    project: projectsArray[0],
    duedate: "2021-09-01",
    priority: "High",
    id: 0,
  },
  {
    title: "2nd note",
    description:
      "Greetings, I am the second note. You can click on me to edit and you can click on the trash can to delete me.",
    project: projectsArray[0],
    duedate: "2021-09-04",
    priority: "Medium",
    id: 1,
  },
  {
    title: "3rd note with longer title and text",
    description:
      "Hello, I'm the third note. My priority is low. My title and description are super duper long and show what happens when you exceed the text area. Surprise! You can scroll my content.",
    project: projectsArray[0],
    duedate: "2021-09-30",
    priority: "Low",
    id: 2,
  },
  {
    title: "4th note",
    description:
      "By the way, this project was coded in plain JavaScript and CSS.",
    project: projectsArray[0],
    duedate: "2021-10-31",
    priority: "Medium",
    id: 3,
  },
];

_components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.newProjectButton.addEventListener("click", () => {
  _components_projects__WEBPACK_IMPORTED_MODULE_3__.projectInputForm.classList.toggle("active");
  renderProjectInput();
});

_components_projects__WEBPACK_IMPORTED_MODULE_3__.saveProjectButton.addEventListener("click", (e) => {
  e.preventDefault();
  saveProject();
});

_components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.newNoteButton.addEventListener("click", () => {
  _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.popupContainer.classList.remove("edit");
  _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.popupContainer.classList.add("addnew");
  renderNotePopup();
});

_components_notepopup__WEBPACK_IMPORTED_MODULE_2__.noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!_components_notepopup__WEBPACK_IMPORTED_MODULE_2__.popupContainer.classList.contains("edit")) {
    saveNote();
  } else {
    saveNote(activeNoteIndex);
  }
});

_components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.homeContainer.addEventListener(
  "click",
  (e) => {
    if (
      !e.target.closest(".popupcontainer") &&
      !e.target.closest(".newnotebutton") &&
      _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.popupContainer.classList.contains("addnew")
    ) {
      closeNotePopup();
      _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.popupContainer.classList.remove("addnew");
    } else if (
      _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.popupContainer.classList.contains("edit") &&
      !e.target.closest(".popupcontainer") &&
      !e.target.closest(".newnotebutton")
    ) {
      closeNotePopup();
      _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.popupContainer.classList.remove("edit");
    } else if (
      !e.target.closest(".saveprojectbtn") &&
      !e.target.closest(".projectinput") &&
      _components_projects__WEBPACK_IMPORTED_MODULE_3__.projectInputForm.classList.contains("active")
    ) {
      closeProjectInput();
    }
  },
  true
);

const saveProject = () => {
  const projectName = document.getElementById("project");
  projectsArray.push(projectName.value);
  populateProjects();
  setTimeout(() => closeProjectInput(), 300);
};

const populateProjects = () => {
  (0,_components_home__WEBPACK_IMPORTED_MODULE_1__.clearProjects)();
  projectsArray.forEach((project, index) => {
    renderProject(project, index);
  });
  addToStorage();
};

let projectDivArray = [];
const renderProject = (project, index) => {
  project = document.createElement("div");
  project.classList.add("project");
  project.innerHTML = projectsArray[index];
  _components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.projectsDiv.appendChild(project);
  projectDivArray.push(project);
  project.addEventListener("click", () => {
    projectDivArray.forEach((project) => {
      project.classList.remove("activeproject");
    });
    project.classList.add("activeproject");
    const sortedNoteArray = myNoteArray.filter((note) => {
      if (note.project === projectsArray[index]) return note;
    });
    console.log(sortedNoteArray);
    populateBoard(sortedNoteArray);
  });
};

const populateProjectOptions = () => {
  (0,_components_notepopup__WEBPACK_IMPORTED_MODULE_2__.clearProjectOptions)();
  projectsArray.forEach((project) => {
    (0,_components_notepopup__WEBPACK_IMPORTED_MODULE_2__.renderProjectOptions)(project);
  });
};

let noteId = 4;
const saveNote = (noteNumber) => {
  const noteTitle = document.getElementById("notetitle");
  const noteDescription = document.getElementById("notedescription");
  const noteProject = document.getElementById("project");
  const noteDueDate = document.getElementById("duedate");
  const notePriority = document.getElementById("priority");
  const todoNote = new Note(
    noteTitle.value,
    noteDescription.value,
    noteProject.value,
    noteDueDate.value,
    notePriority.value
  );
  if (_components_notepopup__WEBPACK_IMPORTED_MODULE_2__.popupContainer.classList.contains("edit")) {
    todoNote.id = noteNumber;
    let noteIndex = myNoteArray
      .map((note) => {
        return note.id;
      })
      .indexOf(noteNumber);
    myNoteArray.splice(noteIndex, 1, todoNote);
    populateProjects();
    populateBoard(myNoteArray);
    setTimeout(() => closeNotePopup(), 300);
  } else {
    todoNote.id = noteId;
    myNoteArray.push(todoNote);
    noteId++;
  }
  populateProjects();
  populateBoard(myNoteArray);
  setTimeout(() => closeNotePopup(), 300);
};

const renderProjectInput = () => {
  (0,_components_projects__WEBPACK_IMPORTED_MODULE_3__.showProjectInput)();
  _components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.projectsDiv.appendChild(_components_projects__WEBPACK_IMPORTED_MODULE_3__.projectInputForm);
};

const closeProjectInput = () => {
  _components_projects__WEBPACK_IMPORTED_MODULE_3__.projectInputForm.reset();
  _components_projects__WEBPACK_IMPORTED_MODULE_3__.projectInputForm.classList.toggle("active");
  _components_projects__WEBPACK_IMPORTED_MODULE_3__.projectInputForm.remove();
};

const renderNotePopup = () => {
  (0,_components_notepopup__WEBPACK_IMPORTED_MODULE_2__.buildNotePopup)();
  _components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.notesContainer.style.opacity = "0.3";
  _components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.main.insertBefore(_components_notepopup__WEBPACK_IMPORTED_MODULE_2__.popupContainer, _components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.main.childNodes[1]);
  populateProjectOptions();
};

const closeNotePopup = () => {
  _components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.notesContainer.style.opacity = "1.0";
  _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.noteForm.reset();
  _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.popupContainer.remove();
};

let activeNoteIndex;

const populateBoard = (noteArray) => {
  //! can some of this DOM stuff be written as a function in a module?
  clearBoard();
  noteArray.forEach((note) => {
    const blankNote = document.createElement("div");
    blankNote.classList.add("note");

    blankNote.addEventListener("click", () => {
      _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.popupContainer.classList.add("edit");
      editNote(note.id);
      activeNoteIndex = note.id;
    });

    const title = document.createElement("div");
    title.classList.add("notedivtitle");
    title.classList.add("scroll");
    title.textContent = note.title;
    blankNote.appendChild(title);
    const description = document.createElement("div");
    description.classList.add("notediv");
    description.classList.add("scroll");
    description.textContent = note.description;
    blankNote.appendChild(description);
    const project = document.createElement("div");
    project.textContent = note.project;
    project.title = "Project";
    project.classList.add("notedivproject");
    blankNote.appendChild(project);
    const duedate = document.createElement("div");
    duedate.classList.add("notedivduedate");
    duedate.textContent = note.duedate;
    duedate.title = "Due Date";
    blankNote.appendChild(duedate);
    const priority = document.createElement("div");
    priority.classList.add("notedivpriority");
    blankNote.appendChild(priority);
    const priorityValue = document.createElement("div");
    priorityValue.textContent = note.priority;
    priorityValue.title = "Priority";
    switch (note.priority) {
      case "High":
        priorityValue.classList.add("high");
        break;
      case "Medium":
        priorityValue.classList.add("medium");
        break;
      case "Low":
        priorityValue.classList.add("low");
        break;
    }
    priority.appendChild(priorityValue);
    const trashIconDiv = document.createElement("div");
    trashIconDiv.classList.add("trashicondiv");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa");
    trashIcon.classList.add("fa-trash");
    trashIconDiv.appendChild(trashIcon);
    priority.appendChild(trashIconDiv);

    trashIconDiv.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      deleteNote(note.id);
    });

    _components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.notesContainer.appendChild(blankNote);
    addToStorage();
  });
};

const deleteNote = (id) => {
  let noteIndex = myNoteArray
    .map((note) => {
      return note.id;
    })
    .indexOf(id);
  myNoteArray.splice(noteIndex, 1);
  addToStorage();
  setTimeout(() => {
    populateProjects();
    populateBoard(myNoteArray);
  }, 200);
};

const editNote = (id) => {
  let noteIndex = myNoteArray
    .map((note) => {
      return note.id;
    })
    .indexOf(id);
  _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.popupContainer.classList.add("edit");
  renderNotePopup();
  _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.inputTitle.value = myNoteArray[noteIndex].title;
  _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.inputDescrip.value = myNoteArray[noteIndex].description;
  project.value = myNoteArray[noteIndex].project;
  _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.inputDueDate.value = myNoteArray[noteIndex].duedate;
  _components_notepopup__WEBPACK_IMPORTED_MODULE_2__.selectPriority.value = myNoteArray[noteIndex].priority;
};

const clearBoard = () => {
  while (_components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.notesContainer.hasChildNodes()) {
    _components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.notesContainer.removeChild(_components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.notesContainer.firstChild);
  }
};

_components_home__WEBPACK_IMPORTED_MODULE_1__.renderHome.appTitle.addEventListener("click", () => {
  setTimeout(() => {
    populateProjects();
    populateBoard(myNoteArray);
  }, 300);
});

const addToStorage = () => {
  localStorage.setItem("notes", JSON.stringify(myNoteArray));
  localStorage.setItem("projects", JSON.stringify(projectsArray));
};

const getFromStorage = () => {
  myNoteArray = JSON.parse(localStorage.getItem("notes"));
  projectsArray = JSON.parse(localStorage.getItem("projects"));
};

// If local storage does not exist, create it, otherwise get notes from local storage
if (!localStorage.getItem("notes") || !localStorage.getItem("projects")) {
  addToStorage();
} else {
  getFromStorage();
}

populateProjects();
populateBoard(myNoteArray);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FekI7O0FBU0U7QUFDd0I7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXFEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStDO0FBQ25COzs7Ozs7O1VDdEI1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRTZCOztBQUVpQzs7QUFZOUI7O0FBTUQ7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsMEZBQTRDO0FBQzVDLEVBQUUsbUZBQWlDO0FBQ25DO0FBQ0EsQ0FBQzs7QUFFRCxvRkFBa0M7QUFDbEM7QUFDQTtBQUNBLENBQUM7O0FBRUQsdUZBQXlDO0FBQ3pDLEVBQUUsa0ZBQStCO0FBQ2pDLEVBQUUsK0VBQTRCO0FBQzlCO0FBQ0EsQ0FBQzs7QUFFRCw0RUFBeUI7QUFDekI7QUFDQSxPQUFPLG9GQUFpQztBQUN4QztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCx1RkFBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0ZBQWlDO0FBQ3ZDO0FBQ0E7QUFDQSxNQUFNLGtGQUErQjtBQUNyQyxNQUFNO0FBQ04sTUFBTSxvRkFBaUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtGQUErQjtBQUNyQyxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU0scUZBQW1DO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsK0RBQWE7QUFDZjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0ZBQWtDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsRUFBRSwwRUFBbUI7QUFDckI7QUFDQSxJQUFJLDJFQUFvQjtBQUN4QixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0ZBQWlDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsc0VBQWdCO0FBQ2xCLEVBQUUsZ0ZBQWtDLENBQUMsa0VBQWdCO0FBQ3JEOztBQUVBO0FBQ0EsRUFBRSx3RUFBc0I7QUFDeEIsRUFBRSxtRkFBaUM7QUFDbkMsRUFBRSx5RUFBdUI7QUFDekI7O0FBRUE7QUFDQSxFQUFFLHFFQUFjO0FBQ2hCLEVBQUUscUZBQXVDO0FBQ3pDLEVBQUUsMEVBQTRCLENBQUMsaUVBQWMsRUFBRSwyRUFBNkI7QUFDNUU7QUFDQTs7QUFFQTtBQUNBLEVBQUUscUZBQXVDO0FBQ3pDLEVBQUUsaUVBQWM7QUFDaEIsRUFBRSx3RUFBcUI7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSwrRUFBNEI7QUFDbEM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsSUFBSSxtRkFBcUM7QUFDekM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsRUFBRSwrRUFBNEI7QUFDOUI7QUFDQSxFQUFFLG1FQUFnQjtBQUNsQixFQUFFLHFFQUFrQjtBQUNwQjtBQUNBLEVBQUUscUVBQWtCO0FBQ3BCLEVBQUUsdUVBQW9CO0FBQ3RCOztBQUVBO0FBQ0EsU0FBUyxxRkFBdUM7QUFDaEQsSUFBSSxtRkFBcUMsQ0FBQyxrRkFBb0M7QUFDOUU7QUFDQTs7QUFFQSxrRkFBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3R5bGVzL3N0eWxlLmNzcz9hMmY1Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL25vdGVwb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiBzdHJldGNoZXMgb3V0IHRvIGZpbGwgZW50aXJlIHNjcmVlbiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzZXJpZjtcXG59XFxuXFxuLmhvbWVjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDcwcHggNzBweCAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDMwcHggMWZyO1xcbn1cXG5cXG4uYXBwdGl0bGUge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RoZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4ubmV3cHJvamVjdGJ1dHRvbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxufVxcblxcbi5uZXdwcm9qZWN0YnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4ucHJvamVjdHNkaXYge1xcbiAgZ3JpZC1yb3c6IDQ7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hY3RpdmVwcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0aW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNhdmVwcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLnNhdmVwcm9qZWN0YnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnV0dG9uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLXJvdzogMTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5ld25vdGVidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ld25vdGVidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wb3B1cGNvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwYm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjAlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxufVxcblxcbi5ub3Rlc2NvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMztcXG4gIG1pbi1oZWlnaHQ6IDEwOTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcXG4gIGdyaWQtZ2FwOiAzMHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm5vdGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjMlIDUwJSA5JSA5JSA5JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG4uc2Nyb2xsIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG5cXG4ubm90ZWRpdiB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4ubm90ZWRpdnRpdGxlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5ub3RlZGl2cHJvamVjdCB7XFxuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubm90ZWRpdmR1ZWRhdGUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm5vdGVkaXZwcmlvcml0eSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5oaWdoIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxuICBwYWRkaW5nOiAxcHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ubWVkaXVtIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XFxuICBwYWRkaW5nOiAxcHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ubG93IHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICBwYWRkaW5nOiAxcHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4ubm90ZWZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMTMwcHggNjBweCA2MHB4IDYwcHggNjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ub3RldGl0bGUge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICBncmlkLXJvdzogMTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICBncmlkLXJvdzogMjtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxufVxcblxcbi5wcm9qZWN0c2VsZWN0IHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmR1ZWRhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogNDtcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uZHVlZGF0ZWNhbCB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiA0O1xcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4ucHJpb3JpdHlsYWJlbCB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiA1O1xcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbi50cmFzaGljb25kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA4cHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnNlbGVjdCB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIG1hcmdpbi1yaWdodDogMjVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc2F2ZWJ1dHRvbiB7XFxuICBncmlkLXJvdzogNjtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTLEVBQUUsd0NBQXdDO0VBQ25ELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osV0FBVztFQUNYLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZFQUE2RTtFQUM3RSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixjQUFj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aUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZFQUE2RTtFQUM3RSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogc3RyZXRjaGVzIG91dCB0byBmaWxsIGVudGlyZSBzY3JlZW4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2VyaWY7XFxufVxcblxcbi5ob21lY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCA3MHB4IDcwcHggMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAzMHB4IDFmcjtcXG59XFxuXFxuLmFwcHRpdGxlIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0aGVhZGVyIHtcXG4gIGdyaWQtcm93OiAzO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLm5ld3Byb2plY3RidXR0b24ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbn1cXG5cXG4ubmV3cHJvamVjdGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuLnByb2plY3RzZGl2IHtcXG4gIGdyaWQtcm93OiA0O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogNDBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWN0aXZlcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zYXZlcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5zYXZlcHJvamVjdGJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uZXdub3RlYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXdub3RlYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucG9wdXBjb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cGJveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwJTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHdpZHRoOiA0NTBweDtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG5cXG4ubm90ZXNjb250YWluZXIge1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBtaW4taGVpZ2h0OiAxMDkwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XFxuICBncmlkLWdhcDogMzBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5ub3RlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIzJSA1MCUgOSUgOSUgOSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcXG4gIGNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcXG59XFxuLnNjcm9sbCB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG59XFxuXFxuLm5vdGVkaXYge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLm5vdGVkaXZ0aXRsZSB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubm90ZWRpdnByb2plY3Qge1xcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm5vdGVkaXZkdWVkYXRlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5ub3RlZGl2cHJpb3JpdHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uaGlnaCB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xcbiAgcGFkZGluZzogMXB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xcbiAgcGFkZGluZzogMXB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmxvdyB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgcGFkZGluZzogMXB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLm5vdGVmb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDEzMHB4IDYwcHggNjBweCA2MHB4IDYwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubm90ZXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbn1cXG5cXG4ucHJvamVjdHNlbGVjdCB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGdyaWQtcm93OiAzO1xcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5kdWVkYXRlIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDQ7XFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmR1ZWRhdGVjYWwge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogNDtcXG4gIG1hcmdpbi1yaWdodDogMjVweDtcXG59XFxuXFxuLnByaW9yaXR5bGFiZWwge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogNTtcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4udHJhc2hpY29uZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogOHB4IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnNhdmVidXR0b24ge1xcbiAgZ3JpZC1yb3c6IDY7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGhvbWUuanMgcmVuZGVycyB0aGUgc2lkZWJhciBhbmQgbWFpbiBjb250YWluZXJcblxuZXhwb3J0IHsgcmVuZGVySG9tZSB9O1xuXG5jb25zdCByZW5kZXJIb21lID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWVjb250YWluZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG5cbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgY29uc3QgYXBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcHBUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYXBwdGl0bGVcIik7XG4gIGFwcFRpdGxlLmlubmVySFRNTCA9IFwi4pyFIE15IFRvLURvIExpc3RcIjtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChhcHBUaXRsZSk7XG5cbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RoZWFkZXJcIik7XG4gIHByb2plY3RIZWFkZXIuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXdwcm9qZWN0YnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IFwiK1wiO1xuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuXG4gIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzZGl2XCIpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcblxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbmNvbnRhaW5lclwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuXG4gIGNvbnN0IG5ld05vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdOb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXdub3RlYnV0dG9uXCIpO1xuICBuZXdOb3RlQnV0dG9uLmlubmVySFRNTCA9IFwiKyBOZXcgVG8tRG8gTm90ZVwiO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3Tm90ZUJ1dHRvbik7XG5cbiAgY29uc3Qgbm90ZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBub3Rlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm90ZXNjb250YWluZXJcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQobm90ZXNDb250YWluZXIpO1xuXG4gIHJldHVybiB7XG4gICAgYXBwVGl0bGUsXG4gICAgaG9tZUNvbnRhaW5lcixcbiAgICBtYWluLFxuICAgIG5vdGVzQ29udGFpbmVyLFxuICAgIG5ld05vdGVCdXR0b24sXG4gICAgbmV3UHJvamVjdEJ1dHRvbixcbiAgICBwcm9qZWN0c0RpdixcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IGNsZWFyUHJvamVjdHMgPSAoKSA9PiB7XG4gIHdoaWxlIChyZW5kZXJIb21lLnByb2plY3RzRGl2Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHJlbmRlckhvbWUucHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQocmVuZGVySG9tZS5wcm9qZWN0c0Rpdi5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgY2xlYXJQcm9qZWN0cyB9O1xuIiwiLy8gbm90ZXBvcHVwLmpzIG1hbmlwdWxhdGVzIHRoZSBET00gdG8gYnVpbGQgbm90ZSBwb3B1cCBib3ggZm9yIGlucHV0L2VkaXRcblxuZXhwb3J0IHtcbiAgcG9wdXBDb250YWluZXIsXG4gIG5vdGVGb3JtLFxuICBpbnB1dERlc2NyaXAsXG4gIGlucHV0VGl0bGUsXG4gIGlucHV0RHVlRGF0ZSxcbiAgc2VsZWN0UHJpb3JpdHksXG59O1xuZXhwb3J0IHsgYnVpbGROb3RlUG9wdXAgfTtcblxuY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBvcHVwY29udGFpbmVyXCIpO1xuY29uc3QgcG9wdXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucG9wdXBCb3guY2xhc3NMaXN0LmFkZChcInBvcHVwYm94XCIpO1xuY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbm5vdGVGb3JtLmNsYXNzTGlzdC5hZGQoXCJub3RlZm9ybVwiKTtcbm5vdGVGb3JtLmlkID0gXCJub3RlZm9ybVwiO1xuY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZChcIm5vdGV0aXRsZVwiKTtcbmlucHV0VGl0bGUudHlwZSA9IFwidGV4dFwiO1xuaW5wdXRUaXRsZS5uYW1lID0gXCJ0aXRsZVwiO1xuaW5wdXRUaXRsZS5pZCA9IFwibm90ZXRpdGxlXCI7XG5pbnB1dFRpdGxlLnBsYWNlaG9sZGVyID0gXCJUaXRsZVwiO1xuY29uc3QgaW5wdXREZXNjcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuaW5wdXREZXNjcmlwLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbmlucHV0RGVzY3JpcC5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuaW5wdXREZXNjcmlwLmlkID0gXCJub3RlZGVzY3JpcHRpb25cIjtcbmlucHV0RGVzY3JpcC5wbGFjZWhvbGRlciA9IFwiVGFrZSBhIG5vdGUuLi5cIjtcbmNvbnN0IGxhYmVsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmxhYmVsUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNlbGVjdFwiKTtcbmxhYmVsUHJvamVjdC5mb3IgPSBcInByb2plY3RcIjtcbmxhYmVsUHJvamVjdC5pbm5lckhUTUwgPSBcIlByb2plY3Q6XCI7XG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbnNlbGVjdFByb2plY3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdHByb2plY3RcIik7XG5zZWxlY3RQcm9qZWN0Lm5hbWUgPSBcInByb2plY3RcIjtcbnNlbGVjdFByb2plY3QuaWQgPSBcInByb2plY3RcIjtcbmNvbnN0IGxhYmVsRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmxhYmVsRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlZGF0ZVwiKTtcbmxhYmVsRHVlRGF0ZS5mb3IgPSBcImR1ZWRhdGVcIjtcbmxhYmVsRHVlRGF0ZS5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlOlwiO1xuY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuaW5wdXREdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVkYXRlY2FsXCIpO1xuaW5wdXREdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbmlucHV0RHVlRGF0ZS5uYW1lID0gXCJkdWVkYXRlXCI7XG5pbnB1dER1ZURhdGUuaWQgPSBcImR1ZWRhdGVcIjtcbmNvbnN0IGxhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5sYWJlbFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eWxhYmVsXCIpO1xubGFiZWxQcmlvcml0eS5mb3IgPSBcInByaW9yaXR5XCI7XG5sYWJlbFByaW9yaXR5LmlubmVySFRNTCA9IFwiUHJpb3JpdHk6XCI7XG5jb25zdCBzZWxlY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5zZWxlY3RQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0cHJpb3JpdHlcIik7XG5zZWxlY3RQcmlvcml0eS5uYW1lID0gXCJwcmlvcml0eVwiO1xuc2VsZWN0UHJpb3JpdHkuaWQgPSBcInByaW9yaXR5XCI7XG5jb25zdCBoaWdoUHJpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbmhpZ2hQcmkudmFsdWUgPSBcIkhpZ2hcIjtcbmhpZ2hQcmkuaW5uZXJIVE1MID0gXCJIaWdoXCI7XG5jb25zdCBtZWRQcmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xubWVkUHJpLnZhbHVlID0gXCJNZWRpdW1cIjtcbm1lZFByaS5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xuY29uc3QgbG93UHJpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbmxvd1ByaS52YWx1ZSA9IFwiTG93XCI7XG5sb3dQcmkuaW5uZXJIVE1MID0gXCJMb3dcIjtcbmNvbnN0IG5vdGVTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xubm90ZVN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbm5vdGVTdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInNhdmVidXR0b25cIik7XG5ub3RlU3VibWl0QnV0dG9uLm5hbWUgPSBcInN1Ym1pdFwiO1xubm90ZVN1Ym1pdEJ1dHRvbi5pZCA9IFwic3VibWl0bm90ZVwiO1xubm90ZVN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNhdmVcIjtcbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IGNsZWFyUHJvamVjdE9wdGlvbnMgPSAoKSA9PiB7XG4gIHdoaWxlIChzZWxlY3RQcm9qZWN0Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHNlbGVjdFByb2plY3QucmVtb3ZlQ2hpbGQoc2VsZWN0UHJvamVjdC5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgcmVuZGVyUHJvamVjdE9wdGlvbnMgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb24uaW5uZXJIVE1MID0gcHJvamVjdDtcbiAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcbiAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xufTtcblxuY29uc3QgYnVpbGROb3RlUG9wdXAgPSAoKSA9PiB7XG4gIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvcHVwQm94KTtcbiAgcG9wdXBCb3guYXBwZW5kQ2hpbGQobm90ZUZvcm0pO1xuXG4gIG5vdGVGb3JtLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuICBub3RlRm9ybS5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXApO1xuICBub3RlRm9ybS5hcHBlbmRDaGlsZChsYWJlbFByb2plY3QpO1xuICBub3RlRm9ybS5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0KTtcbiAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobGFiZWxEdWVEYXRlKTtcbiAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREdWVEYXRlKTtcbiAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eSk7XG4gIG5vdGVGb3JtLmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5KTtcblxuICBzZWxlY3RQcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpKTtcbiAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkUHJpKTtcbiAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpKTtcblxuICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlU3VibWl0QnV0dG9uKTtcbn07XG5cbmV4cG9ydCB7IGNsZWFyUHJvamVjdE9wdGlvbnMsIHJlbmRlclByb2plY3RPcHRpb25zIH07XG4iLCIvLyBwcm9qZWN0cy5qc1xuXG5jb25zdCBwcm9qZWN0SW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5jb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5wcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3RpbnB1dFwiKTtcbnByb2plY3RJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5wcm9qZWN0SW5wdXQubmFtZSA9IFwicHJvamVjdFwiO1xucHJvamVjdElucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgcHJvamVjdCBuYW1lXCI7XG5wcm9qZWN0SW5wdXQuaWQgPSBcInByb2plY3RcIjtcbmNvbnN0IHNhdmVQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNhdmVQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJzYXZlcHJvamVjdFwiKTtcbmNvbnN0IHNhdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnNhdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzYXZlcHJvamVjdGJ0blwiKTtcbnNhdmVQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IFwiU2F2ZVwiO1xuXG5jb25zdCBzaG93UHJvamVjdElucHV0ID0gKCkgPT4ge1xuICBwcm9qZWN0SW5wdXRGb3JtLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gIHByb2plY3RJbnB1dEZvcm0uYXBwZW5kQ2hpbGQoc2F2ZVByb2plY3REaXYpO1xuICBzYXZlUHJvamVjdERpdi5hcHBlbmRDaGlsZChzYXZlUHJvamVjdEJ1dHRvbik7XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0SW5wdXRGb3JtLCBzYXZlUHJvamVjdEJ1dHRvbiB9O1xuZXhwb3J0IHsgc2hvd1Byb2plY3RJbnB1dCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIE1haW4gSlMgc2NyaXB0IHRvIGNhbGwgb3RoZXIgZnVuY3Rpb25zXG5cbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgcmVuZGVySG9tZSwgY2xlYXJQcm9qZWN0cyB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZVwiO1xuXG5pbXBvcnQge1xuICBidWlsZE5vdGVQb3B1cCxcbiAgY2xlYXJQcm9qZWN0T3B0aW9ucyxcbiAgcmVuZGVyUHJvamVjdE9wdGlvbnMsXG4gIHBvcHVwQ29udGFpbmVyLFxuICBub3RlRm9ybSxcbiAgaW5wdXRUaXRsZSxcbiAgaW5wdXREZXNjcmlwLFxuICBpbnB1dER1ZURhdGUsXG4gIHNlbGVjdFByaW9yaXR5LFxufSBmcm9tIFwiLi9jb21wb25lbnRzL25vdGVwb3B1cFwiO1xuXG5pbXBvcnQge1xuICBwcm9qZWN0SW5wdXRGb3JtLFxuICBzYXZlUHJvamVjdEJ1dHRvbixcbiAgc2hvd1Byb2plY3RJbnB1dCxcbn0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0c1wiO1xuXG5jbGFzcyBOb3RlIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBkdWVkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxufVxuXG5sZXQgcHJvamVjdHNBcnJheSA9IFtcIlNhbXBsZSBUby1Eb3NcIl07XG5cbmxldCBteU5vdGVBcnJheSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIjFzdCBub3RlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkhpISBUaGlzIGFwcCBpcyBiZXN0IHZpZXdlZCBvbiBhIGRlc2t0b3AhIEFkZCB5b3VyIHByb2plY3RzIGJ5IGNsaWNraW5nIHRoZSAnKycgb24gdGhlIGxlZnQuIFlvdSBjYW4gc29ydCB5b3VyIG5vdGVzIGJ5IHByb2plY3QsIHRvby5cIixcbiAgICBwcm9qZWN0OiBwcm9qZWN0c0FycmF5WzBdLFxuICAgIGR1ZWRhdGU6IFwiMjAyMS0wOS0wMVwiLFxuICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIjJuZCBub3RlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkdyZWV0aW5ncywgSSBhbSB0aGUgc2Vjb25kIG5vdGUuIFlvdSBjYW4gY2xpY2sgb24gbWUgdG8gZWRpdCBhbmQgeW91IGNhbiBjbGljayBvbiB0aGUgdHJhc2ggY2FuIHRvIGRlbGV0ZSBtZS5cIixcbiAgICBwcm9qZWN0OiBwcm9qZWN0c0FycmF5WzBdLFxuICAgIGR1ZWRhdGU6IFwiMjAyMS0wOS0wNFwiLFxuICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiM3JkIG5vdGUgd2l0aCBsb25nZXIgdGl0bGUgYW5kIHRleHRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSGVsbG8sIEknbSB0aGUgdGhpcmQgbm90ZS4gTXkgcHJpb3JpdHkgaXMgbG93LiBNeSB0aXRsZSBhbmQgZGVzY3JpcHRpb24gYXJlIHN1cGVyIGR1cGVyIGxvbmcgYW5kIHNob3cgd2hhdCBoYXBwZW5zIHdoZW4geW91IGV4Y2VlZCB0aGUgdGV4dCBhcmVhLiBTdXJwcmlzZSEgWW91IGNhbiBzY3JvbGwgbXkgY29udGVudC5cIixcbiAgICBwcm9qZWN0OiBwcm9qZWN0c0FycmF5WzBdLFxuICAgIGR1ZWRhdGU6IFwiMjAyMS0wOS0zMFwiLFxuICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiNHRoIG5vdGVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQnkgdGhlIHdheSwgdGhpcyBwcm9qZWN0IHdhcyBjb2RlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IGFuZCBDU1MuXCIsXG4gICAgcHJvamVjdDogcHJvamVjdHNBcnJheVswXSxcbiAgICBkdWVkYXRlOiBcIjIwMjEtMTAtMzFcIixcbiAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICBpZDogMyxcbiAgfSxcbl07XG5cbnJlbmRlckhvbWUubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9qZWN0SW5wdXRGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIHJlbmRlclByb2plY3RJbnB1dCgpO1xufSk7XG5cbnNhdmVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHNhdmVQcm9qZWN0KCk7XG59KTtcblxucmVuZGVySG9tZS5uZXdOb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0XCIpO1xuICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkbmV3XCIpO1xuICByZW5kZXJOb3RlUG9wdXAoKTtcbn0pO1xuXG5ub3RlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0XCIpKSB7XG4gICAgc2F2ZU5vdGUoKTtcbiAgfSBlbHNlIHtcbiAgICBzYXZlTm90ZShhY3RpdmVOb3RlSW5kZXgpO1xuICB9XG59KTtcblxucmVuZGVySG9tZS5ob21lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwiY2xpY2tcIixcbiAgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICAhZS50YXJnZXQuY2xvc2VzdChcIi5wb3B1cGNvbnRhaW5lclwiKSAmJlxuICAgICAgIWUudGFyZ2V0LmNsb3Nlc3QoXCIubmV3bm90ZWJ1dHRvblwiKSAmJlxuICAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkbmV3XCIpXG4gICAgKSB7XG4gICAgICBjbG9zZU5vdGVQb3B1cCgpO1xuICAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFkZG5ld1wiKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdFwiKSAmJlxuICAgICAgIWUudGFyZ2V0LmNsb3Nlc3QoXCIucG9wdXBjb250YWluZXJcIikgJiZcbiAgICAgICFlLnRhcmdldC5jbG9zZXN0KFwiLm5ld25vdGVidXR0b25cIilcbiAgICApIHtcbiAgICAgIGNsb3NlTm90ZVBvcHVwKCk7XG4gICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZWRpdFwiKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgIWUudGFyZ2V0LmNsb3Nlc3QoXCIuc2F2ZXByb2plY3RidG5cIikgJiZcbiAgICAgICFlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3RpbnB1dFwiKSAmJlxuICAgICAgcHJvamVjdElucHV0Rm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICApIHtcbiAgICAgIGNsb3NlUHJvamVjdElucHV0KCk7XG4gICAgfVxuICB9LFxuICB0cnVlXG4pO1xuXG5jb25zdCBzYXZlUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RcIik7XG4gIHByb2plY3RzQXJyYXkucHVzaChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgc2V0VGltZW91dCgoKSA9PiBjbG9zZVByb2plY3RJbnB1dCgpLCAzMDApO1xufTtcblxuY29uc3QgcG9wdWxhdGVQcm9qZWN0cyA9ICgpID0+IHtcbiAgY2xlYXJQcm9qZWN0cygpO1xuICBwcm9qZWN0c0FycmF5LmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgcmVuZGVyUHJvamVjdChwcm9qZWN0LCBpbmRleCk7XG4gIH0pO1xuICBhZGRUb1N0b3JhZ2UoKTtcbn07XG5cbmxldCBwcm9qZWN0RGl2QXJyYXkgPSBbXTtcbmNvbnN0IHJlbmRlclByb2plY3QgPSAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIHByb2plY3QuaW5uZXJIVE1MID0gcHJvamVjdHNBcnJheVtpbmRleF07XG4gIHJlbmRlckhvbWUucHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIHByb2plY3REaXZBcnJheS5wdXNoKHByb2plY3QpO1xuICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvamVjdERpdkFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZXByb2plY3RcIik7XG4gICAgfSk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlcHJvamVjdFwiKTtcbiAgICBjb25zdCBzb3J0ZWROb3RlQXJyYXkgPSBteU5vdGVBcnJheS5maWx0ZXIoKG5vdGUpID0+IHtcbiAgICAgIGlmIChub3RlLnByb2plY3QgPT09IHByb2plY3RzQXJyYXlbaW5kZXhdKSByZXR1cm4gbm90ZTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhzb3J0ZWROb3RlQXJyYXkpO1xuICAgIHBvcHVsYXRlQm9hcmQoc29ydGVkTm90ZUFycmF5KTtcbiAgfSk7XG59O1xuXG5jb25zdCBwb3B1bGF0ZVByb2plY3RPcHRpb25zID0gKCkgPT4ge1xuICBjbGVhclByb2plY3RPcHRpb25zKCk7XG4gIHByb2plY3RzQXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHJlbmRlclByb2plY3RPcHRpb25zKHByb2plY3QpO1xuICB9KTtcbn07XG5cbmxldCBub3RlSWQgPSA0O1xuY29uc3Qgc2F2ZU5vdGUgPSAobm90ZU51bWJlcikgPT4ge1xuICBjb25zdCBub3RlVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGV0aXRsZVwiKTtcbiAgY29uc3Qgbm90ZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IG5vdGVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0XCIpO1xuICBjb25zdCBub3RlRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlZGF0ZVwiKTtcbiAgY29uc3Qgbm90ZVByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKTtcbiAgY29uc3QgdG9kb05vdGUgPSBuZXcgTm90ZShcbiAgICBub3RlVGl0bGUudmFsdWUsXG4gICAgbm90ZURlc2NyaXB0aW9uLnZhbHVlLFxuICAgIG5vdGVQcm9qZWN0LnZhbHVlLFxuICAgIG5vdGVEdWVEYXRlLnZhbHVlLFxuICAgIG5vdGVQcmlvcml0eS52YWx1ZVxuICApO1xuICBpZiAocG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdFwiKSkge1xuICAgIHRvZG9Ob3RlLmlkID0gbm90ZU51bWJlcjtcbiAgICBsZXQgbm90ZUluZGV4ID0gbXlOb3RlQXJyYXlcbiAgICAgIC5tYXAoKG5vdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vdGUuaWQ7XG4gICAgICB9KVxuICAgICAgLmluZGV4T2Yobm90ZU51bWJlcik7XG4gICAgbXlOb3RlQXJyYXkuc3BsaWNlKG5vdGVJbmRleCwgMSwgdG9kb05vdGUpO1xuICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICBwb3B1bGF0ZUJvYXJkKG15Tm90ZUFycmF5KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNsb3NlTm90ZVBvcHVwKCksIDMwMCk7XG4gIH0gZWxzZSB7XG4gICAgdG9kb05vdGUuaWQgPSBub3RlSWQ7XG4gICAgbXlOb3RlQXJyYXkucHVzaCh0b2RvTm90ZSk7XG4gICAgbm90ZUlkKys7XG4gIH1cbiAgcG9wdWxhdGVQcm9qZWN0cygpO1xuICBwb3B1bGF0ZUJvYXJkKG15Tm90ZUFycmF5KTtcbiAgc2V0VGltZW91dCgoKSA9PiBjbG9zZU5vdGVQb3B1cCgpLCAzMDApO1xufTtcblxuY29uc3QgcmVuZGVyUHJvamVjdElucHV0ID0gKCkgPT4ge1xuICBzaG93UHJvamVjdElucHV0KCk7XG4gIHJlbmRlckhvbWUucHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0Rm9ybSk7XG59O1xuXG5jb25zdCBjbG9zZVByb2plY3RJbnB1dCA9ICgpID0+IHtcbiAgcHJvamVjdElucHV0Rm9ybS5yZXNldCgpO1xuICBwcm9qZWN0SW5wdXRGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIHByb2plY3RJbnB1dEZvcm0ucmVtb3ZlKCk7XG59O1xuXG5jb25zdCByZW5kZXJOb3RlUG9wdXAgPSAoKSA9PiB7XG4gIGJ1aWxkTm90ZVBvcHVwKCk7XG4gIHJlbmRlckhvbWUubm90ZXNDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMC4zXCI7XG4gIHJlbmRlckhvbWUubWFpbi5pbnNlcnRCZWZvcmUocG9wdXBDb250YWluZXIsIHJlbmRlckhvbWUubWFpbi5jaGlsZE5vZGVzWzFdKTtcbiAgcG9wdWxhdGVQcm9qZWN0T3B0aW9ucygpO1xufTtcblxuY29uc3QgY2xvc2VOb3RlUG9wdXAgPSAoKSA9PiB7XG4gIHJlbmRlckhvbWUubm90ZXNDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMS4wXCI7XG4gIG5vdGVGb3JtLnJlc2V0KCk7XG4gIHBvcHVwQ29udGFpbmVyLnJlbW92ZSgpO1xufTtcblxubGV0IGFjdGl2ZU5vdGVJbmRleDtcblxuY29uc3QgcG9wdWxhdGVCb2FyZCA9IChub3RlQXJyYXkpID0+IHtcbiAgLy8hIGNhbiBzb21lIG9mIHRoaXMgRE9NIHN0dWZmIGJlIHdyaXR0ZW4gYXMgYSBmdW5jdGlvbiBpbiBhIG1vZHVsZT9cbiAgY2xlYXJCb2FyZCgpO1xuICBub3RlQXJyYXkuZm9yRWFjaCgobm90ZSkgPT4ge1xuICAgIGNvbnN0IGJsYW5rTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmxhbmtOb3RlLmNsYXNzTGlzdC5hZGQoXCJub3RlXCIpO1xuXG4gICAgYmxhbmtOb3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgICAgIGVkaXROb3RlKG5vdGUuaWQpO1xuICAgICAgYWN0aXZlTm90ZUluZGV4ID0gbm90ZS5pZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibm90ZWRpdnRpdGxlXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBub3RlLnRpdGxlO1xuICAgIGJsYW5rTm90ZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJub3RlZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxcIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBub3RlLmRlc2NyaXB0aW9uO1xuICAgIGJsYW5rTm90ZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IG5vdGUucHJvamVjdDtcbiAgICBwcm9qZWN0LnRpdGxlID0gXCJQcm9qZWN0XCI7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwibm90ZWRpdnByb2plY3RcIik7XG4gICAgYmxhbmtOb3RlLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGR1ZWRhdGUuY2xhc3NMaXN0LmFkZChcIm5vdGVkaXZkdWVkYXRlXCIpO1xuICAgIGR1ZWRhdGUudGV4dENvbnRlbnQgPSBub3RlLmR1ZWRhdGU7XG4gICAgZHVlZGF0ZS50aXRsZSA9IFwiRHVlIERhdGVcIjtcbiAgICBibGFua05vdGUuYXBwZW5kQ2hpbGQoZHVlZGF0ZSk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJub3RlZGl2cHJpb3JpdHlcIik7XG4gICAgYmxhbmtOb3RlLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eVZhbHVlLnRleHRDb250ZW50ID0gbm90ZS5wcmlvcml0eTtcbiAgICBwcmlvcml0eVZhbHVlLnRpdGxlID0gXCJQcmlvcml0eVwiO1xuICAgIHN3aXRjaCAobm90ZS5wcmlvcml0eSkge1xuICAgICAgY2FzZSBcIkhpZ2hcIjpcbiAgICAgICAgcHJpb3JpdHlWYWx1ZS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTWVkaXVtXCI6XG4gICAgICAgIHByaW9yaXR5VmFsdWUuY2xhc3NMaXN0LmFkZChcIm1lZGl1bVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTG93XCI6XG4gICAgICAgIHByaW9yaXR5VmFsdWUuY2xhc3NMaXN0LmFkZChcImxvd1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5VmFsdWUpO1xuICAgIGNvbnN0IHRyYXNoSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHJhc2hJY29uRGl2LmNsYXNzTGlzdC5hZGQoXCJ0cmFzaGljb25kaXZcIik7XG4gICAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiKTtcbiAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZChcImZhLXRyYXNoXCIpO1xuICAgIHRyYXNoSWNvbkRpdi5hcHBlbmRDaGlsZCh0cmFzaEljb24pO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHRyYXNoSWNvbkRpdik7XG5cbiAgICB0cmFzaEljb25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgZGVsZXRlTm90ZShub3RlLmlkKTtcbiAgICB9KTtcblxuICAgIHJlbmRlckhvbWUubm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYmxhbmtOb3RlKTtcbiAgICBhZGRUb1N0b3JhZ2UoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkZWxldGVOb3RlID0gKGlkKSA9PiB7XG4gIGxldCBub3RlSW5kZXggPSBteU5vdGVBcnJheVxuICAgIC5tYXAoKG5vdGUpID0+IHtcbiAgICAgIHJldHVybiBub3RlLmlkO1xuICAgIH0pXG4gICAgLmluZGV4T2YoaWQpO1xuICBteU5vdGVBcnJheS5zcGxpY2Uobm90ZUluZGV4LCAxKTtcbiAgYWRkVG9TdG9yYWdlKCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHBvcHVsYXRlUHJvamVjdHMoKTtcbiAgICBwb3B1bGF0ZUJvYXJkKG15Tm90ZUFycmF5KTtcbiAgfSwgMjAwKTtcbn07XG5cbmNvbnN0IGVkaXROb3RlID0gKGlkKSA9PiB7XG4gIGxldCBub3RlSW5kZXggPSBteU5vdGVBcnJheVxuICAgIC5tYXAoKG5vdGUpID0+IHtcbiAgICAgIHJldHVybiBub3RlLmlkO1xuICAgIH0pXG4gICAgLmluZGV4T2YoaWQpO1xuICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgcmVuZGVyTm90ZVBvcHVwKCk7XG4gIGlucHV0VGl0bGUudmFsdWUgPSBteU5vdGVBcnJheVtub3RlSW5kZXhdLnRpdGxlO1xuICBpbnB1dERlc2NyaXAudmFsdWUgPSBteU5vdGVBcnJheVtub3RlSW5kZXhdLmRlc2NyaXB0aW9uO1xuICBwcm9qZWN0LnZhbHVlID0gbXlOb3RlQXJyYXlbbm90ZUluZGV4XS5wcm9qZWN0O1xuICBpbnB1dER1ZURhdGUudmFsdWUgPSBteU5vdGVBcnJheVtub3RlSW5kZXhdLmR1ZWRhdGU7XG4gIHNlbGVjdFByaW9yaXR5LnZhbHVlID0gbXlOb3RlQXJyYXlbbm90ZUluZGV4XS5wcmlvcml0eTtcbn07XG5cbmNvbnN0IGNsZWFyQm9hcmQgPSAoKSA9PiB7XG4gIHdoaWxlIChyZW5kZXJIb21lLm5vdGVzQ29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHJlbmRlckhvbWUubm90ZXNDb250YWluZXIucmVtb3ZlQ2hpbGQocmVuZGVySG9tZS5ub3Rlc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxufTtcblxucmVuZGVySG9tZS5hcHBUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBwb3B1bGF0ZVByb2plY3RzKCk7XG4gICAgcG9wdWxhdGVCb2FyZChteU5vdGVBcnJheSk7XG4gIH0sIDMwMCk7XG59KTtcblxuY29uc3QgYWRkVG9TdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5vdGVzXCIsIEpTT04uc3RyaW5naWZ5KG15Tm90ZUFycmF5KSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xufTtcblxuY29uc3QgZ2V0RnJvbVN0b3JhZ2UgPSAoKSA9PiB7XG4gIG15Tm90ZUFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5vdGVzXCIpKTtcbiAgcHJvamVjdHNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG59O1xuXG4vLyBJZiBsb2NhbCBzdG9yYWdlIGRvZXMgbm90IGV4aXN0LCBjcmVhdGUgaXQsIG90aGVyd2lzZSBnZXQgbm90ZXMgZnJvbSBsb2NhbCBzdG9yYWdlXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibm90ZXNcIikgfHwgIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcbiAgYWRkVG9TdG9yYWdlKCk7XG59IGVsc2Uge1xuICBnZXRGcm9tU3RvcmFnZSgpO1xufVxuXG5wb3B1bGF0ZVByb2plY3RzKCk7XG5wb3B1bGF0ZUJvYXJkKG15Tm90ZUFycmF5KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==