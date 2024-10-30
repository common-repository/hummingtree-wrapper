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


__webpack_require__(1);
__webpack_require__(2);

var hummingtree = function () {
  var HOST_ID = ht_wrp_host_data.hostId;
  var pluginUrl = ht_wrp_host_data.pluginUrl;
  var urlKey = '';
  // main body
  var hummingtreeMain = document.getElementById('hummingtree');
  var slider = document.querySelector('.hummingtree-slider');
  var toggle = document.querySelector('.hummingtree-toggle');
  var caret = document.querySelector('.hummingtree-caret');
  var head = document.querySelector('.hummingtree-slider-head');
  var body = document.querySelector('.hummingtree-slider-body');
  var footer = document.querySelector('.hummingtree-slider-footer');
  var fLogo = document.querySelector('.hummingtree-footer-logo');
  var button = document.querySelector('.hummingtree-footer-button');
  // message window
  var message = document.querySelector('.hummingtree-message');
  var mLogo = document.querySelector('.hummingtree-message-logo');
  var mShadow = document.querySelector('.hummingtree-message-shadow');
  var mTitle = document.querySelector('.hummingtree-message-title');
  var mHeader = document.querySelector('.hummingtree-message-header');
  var mText = document.querySelector('.hummingtree-message-text');
  var mButton = document.querySelector('.hummingtree-message-button');
  // image preload
  var toggleImg = new Image();
  var adImg = new Image();

  var _createCORSRequest = function _createCORSRequest(method, url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.onload = function () {
        xhr.status == 200 ? resolve(xhr.response) : reject({ status: xhr.status, res: xhr.response });
      };
      xhr.onerror = function () {
        reject(Error('Network Error'));
      };
      xhr.send();
    });
  };

  var _createWrapper = function _createWrapper(data, isDefault) {
    var text = data.text,
        link = data.link,
        title = data.title,
        imageUrl = data.imageUrl,
        call = data.call;

    var adTitle = document.createElement('h3');
    var adText = document.createElement('p');
    var callToAction = document.createElement('p');

    callToAction.textContent = call ? '' + call : 'Learn More';
    adTitle.textContent = '' + title;
    adText.textContent = '' + text;
    button.href = '' + link;
    head.appendChild(adTitle);
    body.appendChild(adText);
    button.appendChild(callToAction);
    toggle.addEventListener('click', _toggleSlider, false);
    button.addEventListener('click', _conversion, false);

    if (isDefault) {
      hummingtreeMain.classList.add('hummingtree-border');
      caret.src = pluginUrl + '/hummingtree-wrapper/widget/public/assets/iconExpand.png';
      slider.classList.remove('hummingtree-slider-inactive');
      slider.classList.add('hummingtree-slider-default', 'hummingtree-slider-closed');
    } else {
      adImg.onload = function () {
        slider.classList.remove('hummingtree-slider-inactive');
        slider.classList.add('hummingtree-slider-closed');
        hummingtreeMain.style.setProperty('background-image', 'url(' + imageUrl + ')', 'important');
        message.classList.add('hummingtree-loaded');
      };

      adImg.src = imageUrl;
    }
  };

  var _toggleSlider = function _toggleSlider() {
    if (slider.classList.contains('hummingtree-slider-closed')) {
      slider.classList.remove('hummingtree-slider-closed');
      slider.classList.add('hummingtree-slider-open');
      caret.classList.remove('hummingtree-caret-open');
    } else {
      slider.classList.remove('hummingtree-slider-open');
      caret.classList.add('hummingtree-caret-open');
      slider.classList.add('hummingtree-slider-closed');
    }
  };

  var _showError = function _showError(type) {
    var standardErr = function standardErr() {
      mTitle.classList.remove('hummingtree-title-loading');
      mTitle.src = pluginUrl + '/hummingtree-wrapper/widget/public/assets/ht-text-grey.svg';
      mLogo.classList.remove('hummingtree-logo-loading');
      mShadow.classList.remove('hummingtree-shadow-loading');
      mShadow.classList.add('hummingtree-shadow-error');
      mHeader.textContent = "Oops!";
      hummingtreeMain.classList.add('hummingtree-border');
    };

    switch (type) {
      case 'invalid id':
        standardErr();

        mLogo.src = pluginUrl + '/hummingtree-wrapper/widget/public/assets/ht-error.svg';
        mLogo.classList.add('hummingtree-logo-error');
        mText.textContent = "Your host ID isn't valid. Double check to make sure you've entered all of it.";
        mButton.classList.add('hummingtree-button-active');
        mButton.textContent = "Check Your Settings";
        break;
      case 'missing id':
        standardErr();

        mLogo.src = pluginUrl + '/hummingtree-wrapper/widget/public/assets/ht-error.svg';
        mLogo.classList.add('hummingtree-logo-error');
        mText.textContent = "It looks like you haven't entered a host ID.";
        mButton.classList.add('hummingtree-button-active');
        mButton.textContent = "Check Your Settings";
        break;
      case 'blocked':
        standardErr();

        mLogo.src = pluginUrl + '/hummingtree-wrapper/widget/public/assets/ht-tree-blocked.svg';
        mLogo.classList.add('hummingtree-logo-blocked');
        mText.classList.add('hummingtree-text-blocked');
        mText.textContent = "It looks like you're blocking our ads. Please consider whitelisting to support this site.";
        break;
      case 'default':
        mTitle.classList.remove('hummingtree-title-loading');
        mTitle.classList.add('hummingtree-title-default');
        mLogo.classList.remove('hummingtree-logo-loading');
        mLogo.src = pluginUrl + '/hummingtree-wrapper/widget/public/assets/ht-default.svg';
        mLogo.classList.add('hummingtree-logo-default');
        mShadow.classList.remove('hummingtree-shadow-loading');
        mShadow.classList.add('hummingtree-shadow-error');

        _createWrapper({
          text: 'Make beautiful ads in seconds with HummingTree.',
          link: 'https://hummingtree.co',
          title: 'Plant Your Ad Here'
        }, true);
        break;
    }
  };

  var _conversion = function _conversion() {
    if (urlKey) {
      _createCORSRequest('GET', 'https://api.hummingtree.co/delivery/' + urlKey).catch(function (err) {
        return console.error(err.res);
      });
    }
  };

  var getAd = function getAd() {
    if (!HOST_ID) {
      _showError('missing id');
    } else {
      toggleImg.onload = function () {
        caret.src = toggleImg.src;

        _createCORSRequest('POST', 'https://api.hummingtree.co/delivery/' + HOST_ID).then(function (data) {
          var json = JSON.parse(data);
          urlKey = json.urlKey;

          if (json.link === 'https://hummingtree.co' && json.title === 'Plant Your Ad Here') {
            _showError('default');
          } else {
            _createWrapper(json);
          }
        }).catch(function (err) {
          if (err.status === 400) {
            var error = JSON.parse(err.res).error.type;

            if (error === 'malformed id') _showError('invalid id');
          } else {
            _showError('default');
          }
          console.error(JSON.parse(err.res));
        });
      };
      toggleImg.onerror = function () {
        _showError('blocked');
      };
      toggleImg.src = 'https://storage.googleapis.com/ads_images_hummingtree/iconExpand.png';
    }
  };

  getAd();
}();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);