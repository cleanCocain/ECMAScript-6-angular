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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _rateServiceMock = __webpack_require__(3);

var _rateServiceMock2 = _interopRequireDefault(_rateServiceMock);

var _deletedata = __webpack_require__(4);

var _deletedata2 = _interopRequireDefault(_deletedata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log(service.gd);


var url = "http://localhost:1337/user";
var title = "User login details";

fetch(url, {
    method: 'get'
}).then(function (data) {
    return data.json();
}).then(function (users) {
    var html = '';
    var count = 0;
    users.forEach(function (user) {
        return html += '\n \n   <tbody>\n   <tr>\n   <td>' + user.id + '</td>\n   <td>' + user.name + '</td>\n   <td>' + user.country + '</td>\n   <td>' + user.email + '</td>\n   </tr>\n   </tbody>';
    });
    document.getElementById("user").innerHTML = html;
    document.getElementById("title").innerHTML = title;
}).catch(function (e) {
    return console.log(e);
});

document.getElementById('save').addEventListener('click', function () {

    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var country = document.getElementById("country").value;
    var email = document.getElementById("email").value;

    var save = new _rateServiceMock2.default(id, name, country, email);
    save.performSave();
});

document.getElementById('update').addEventListener('click', function () {

    var id = document.getElementById("id2").value;
    var name = document.getElementById("name2").value;
    var country = document.getElementById("country2").value;
    var email = document.getElementById("email2").value;

    var update = new _rateServiceMock2.default(id, name, country, email);
    update.performUpdate();
});
document.getElementById('delete').addEventListener('click', function () {

    var id = document.getElementById("deleteid").value;

    var del = new _deletedata2.default(id);
    del.performDelete();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// let rates = [
//     {
//         "name": "30 years fixed",
//         "rate": "13",
//         "years": "30"
//     },
//     {
//         "name": "20 years fixed",
//         "rate": "2.8",
//         "years": "20"
//     }
// ];

// let gd = new FormData();

// fetch("http://localhost:1337/user",
// {
//     method: "GET",
// })
// .then(function(res){ return res.json(); })
// .then(function(data){ alert ( JSON.stringify( data ) ) })
var Update = function () {
    function Update(id, name, country, email) {
        _classCallCheck(this, Update);

        this.id = id;
        this.name = name;
        this.country = country;
        this.email = email;
    }

    _createClass(Update, [{
        key: "performUpdate",
        value: function performUpdate() {
            var url = "http://localhost:1337/user/update/" + this.id + "?name=" + this.name + "\n&country=" + this.country + "&email=" + this.email;
            if (this.id) {
                fetch(url, {
                    method: "POST"
                }).then(function (res) {
                    return res.json();
                }).then(alert("successfully Updated!")).catch(function (error) {
                    console.log('Somthing went wrong! ' + error.message);
                });
            } else {
                alert('some data missing!');
            }
        }
    }, {
        key: "performSave",
        value: function performSave() {
            var url = "http://localhost:1337/user/create?id=" + this.id + "&name=" + this.name + "\n        &country=" + this.country + "&email=" + this.email;
            if (this.id) {
                fetch(url, {
                    method: "POST"
                }).then(function (res) {
                    return res.json();
                }).then(alert("successfully added!")).catch(function (error) {
                    console.log('Somthing went wrong! ' + error.message);
                });
            } else {
                alert('some data missing!');
            }
        }
    }]);

    return Update;
}();

exports.default = Update;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Delete = function () {
    function Delete(id) {
        _classCallCheck(this, Delete);

        this.id = id;
    }

    _createClass(Delete, [{
        key: "performDelete",
        value: function performDelete() {
            var url = "http://localhost:1337/user?id=" + this.id;
            console.log(this.id);
            fetch(url, {
                method: "DELETE"
            }).then(function (res) {
                return res.json();
            }).then(alert("successfully deleted!")).catch(function (error) {
                console.log('Somthing went wrong! ' + error.message);
            });
        }
    }]);

    return Delete;
}();

exports.default = Delete;

/***/ })
/******/ ]);
//# sourceMappingURL=ratefinder.bundle.js.map