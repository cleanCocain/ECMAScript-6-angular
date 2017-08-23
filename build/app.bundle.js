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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _controller = __webpack_require__(1);

angular.module('app', []).controller('Mycontroller', _controller.Mycontroller);

// Mycontroller.getid();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mycontroller = function () {
    function Mycontroller($http, $scope) {
        _classCallCheck(this, Mycontroller);

        // super(id,name,country,email);
        // alert('Hello!');

        this.$http = $http;
        this.$scope = $scope;
        this.chkdata();
        this.fieldData();
        this.fieldUpdateData();
    }

    _createClass(Mycontroller, [{
        key: 'fieldData',
        value: function fieldData() {
            this.id = null;
            this.name = null;
            this.country = null;
            this.email = null;
        }
    }, {
        key: 'fieldUpdateData',
        value: function fieldUpdateData() {
            this.idu;
            this.nameu;
            this.countryu;
            this.emailu;
        }
    }, {
        key: 'chkdata',
        value: function chkdata() {

            this.httpData = [];
            this.tableData = [];
        }

        // getid() {

        //     const myURL = 'http://localhost:1337/user';
        //     var str = [];
        //     let count = 0;
        //     this.$http.get(myURL).then(responce => responce.data)
        //         .then(users => {

        //             users.forEach(element => {
        //                 count++;
        //                 str.push(element);
        //                 // console.log(str);
        //                 // console.log(count);
        //             });
        //             // console.log(str);
        //             str = this.data;
        //             return this.data;

        //         });


        //     // alert(str); 
        //     alert(str);
        // }

    }, {
        key: 'init',
        value: function init() {
            var _this = this;

            var myURL = 'http://localhost:1337/user';

            // var result = [];
            // let result = {id:'',name:'',country:'',email:''};
            var result = [];
            this.$http.get(myURL).then(function (responce) {

                result = responce.data;

                // users.forEach(element => {

                // result.push(element);
                // console.log(str);
                // console.log(count);
                // });
                // console.log(result);
                _this.httpData = JSON.stringify(result);
                _this.tableData = result;
            });
            console.log(result);
        }
    }, {
        key: 'saveUser',
        value: function saveUser() {
            var _this2 = this;

            this.fieldData();
            var body = 'id=' + this.id + '&name=' + this.name + '&country=' + this.country + '\n        &email=' + this.email;

            this.$http.post('http://localhost:1337/user/create?' + body).then(function (data) {
                alert('data added');_this2.init();
            }).catch(function (data) {
                alert('error');
            });
            ;

            console.log(body);
            console.log(this.id);
            console.log(this.name);
            console.log(this.country);
            console.log(this.email);
        }
    }, {
        key: 'editUser',
        value: function editUser(index) {
            this.fieldUpdateData();
            console.log(index);
            this.idu = this.tableData[index].id;
            this.nameu = this.tableData[index].name;
            this.countryu = this.tableData[index].country;
            this.emailu = this.tableData[index].email;
        }
    }, {
        key: 'updateUser',
        value: function updateUser() {
            var _this3 = this;

            this.fieldUpdateData();
            var body = this.idu + '?name=' + this.nameu + '&country=' + this.countryu + '\n        &email=' + this.emailu;

            this.$http.post('http://localhost:1337/user/update/' + body).then(function (data) {
                alert('data updated');_this3.init();
            }).catch(function (data) {
                alert('error');
            });
            ;

            // this.fieldUpdateData();
            this.idu = null;
            this.nameu = null;
            this.countryu = null;
            this.emailu = null;

            console.log(body);
            console.log(this.idu);
            console.log(this.nameu);
            console.log(this.countryu);
            console.log(this.emailu);
        }
    }, {
        key: 'deleteUser',
        value: function deleteUser(index) {
            var _this4 = this;

            console.log(index);
            this.$http.delete('http://localhost:1337/user?id=' + index).then(function (data) {
                alert('Successfully Deleted');
                _this4.init();
            }).catch(function (data) {
                alert('error');
            });
        }
    }]);

    return Mycontroller;
}();

exports.Mycontroller = Mycontroller;

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map