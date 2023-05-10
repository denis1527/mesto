(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_type_visible"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationSettings=t,this._formElement=n,this._submitButton=this._formElement.querySelector(this._validationSettings.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector))}var n,r;return n=e,(r=[{key:"_showValidationError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._validationSettings.inputErrorClass),n.textContent=t,n.classList.add(this._validationSettings.errorClass)}},{key:"_hideValidationError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._validationSettings.inputErrorClass),t.classList.remove(this._validationSettings.errorClass),t.textContent=""}},{key:"resetValidate",value:function(){var e=this;this._inputList.forEach((function(t){e._hideValidationError(t)})),this._toggleButtonState()}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideValidationError(e):this._showValidationError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableValidationCheck",value:function(){this._setEventListeners()}},{key:"_disableSubmitButton",value:function(){this._submitButton.setAttribute("disabled","true"),this._submitButton.classList.add(this._validationSettings.inactiveButtonClass)}},{key:"_enableSubmitButton",value:function(){this._submitButton.classList.remove(this._validationSettings.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r,o,i){var a,c,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c=function(){u._likeIcon.addEventListener("click",(function(){return u._interactLike()})),u._elementImages.addEventListener("click",(function(){return u._cardZoom(u._cardName,u._cardImage)})),u._userId===u._authorId?u._deleteIcon.addEventListener("click",(function(){return u._cardDelete(u,u._cardId)})):u._deleteIcon.remove()},(a="_addEventHandlers")in this?Object.defineProperty(this,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):this[a]=c,this._card=t,this._cardName=this._card.name,this._cardImage=this._card.link,this._cardTemplate=n,this._userId=r,this._cardId=o.cardId,this._authorId=o.authorId,this._cardZoom=i.handleCardZoom,this._cardDelete=i.handleCardDelete,this._putLike=i.handleCardLike,this._removeLike=i.handleCardDeleteLike}var t,n;return t=e,(n=[{key:"_createCard",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".cards__item").cloneNode(!0)}},{key:"deleteCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"renderCardLike",value:function(e){this._likeArea=e.likes,0===this._likeArea.length?this.likeSelector.textContent="":this.likeSelector.textContent=this._likeArea.length,this._likedCard()?this._likeIcon.classList.add("cards__like_active"):this._likeIcon.classList.remove("cards__like_active")}},{key:"_likedCard",value:function(){var e=this;return this._likeArea.find((function(t){return t._id===e._userId}))}},{key:"_interactLike",value:function(){this._likedCard()?this._removeLike(this._cardId):this._putLike(this._cardId)}},{key:"makeCard",value:function(){return this._cardElement=this._createCard(),this._elementImages=this._cardElement.querySelector(".cards__image"),this._elementName=this._cardElement.querySelector(".cards__description"),this._likeIcon=this._cardElement.querySelector(".cards__like"),this._deleteIcon=this._cardElement.querySelector(".cards__delete"),this.likeSelector=this._cardElement.querySelector(".cards__like-counter"),this._elementName.textContent=this._cardName,this._elementImages.src=this._cardImage,this._elementImages.alt=this._cardName,this.renderCardLike(this._card),this._addEventHandlers(),this._cardElement}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){e.forEach(this._renderer)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupItem=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupItem.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupItem.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupItem.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e,t){var n,r=t.callbackNotice;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitButton=n._popupItem.querySelector(".popup__form"),n._callbackNotice=r,n}return t=a,(n=[{key:"open",value:function(e,t){this._cardObject=e,this._cardId=t,f(y(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._submitButton.addEventListener("submit",(function(t){t.preventDefault(),e._callbackNotice(e._cardObject,e._cardId)})),f(y(a.prototype),"setEventListeners",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupDescription=t._popupItem.querySelector(".popup__description"),t._popupImage=t._popupItem.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupDescription.textContent=e,this._popupImage.src=t,this._popupImage.alt=e,b(w(a.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function P(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e,t){var n,r=t.callbackFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callbackFormSubmit=r,n._popupFormItem=n._popupItem.querySelector(".popup__form"),n._inputList=Array.from(n._popupFormItem.querySelectorAll(".popup__input")),n._sendButton=n._popupItem.querySelector(".popup__submit"),n._sendButtonText=n._sendButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;I(R(a.prototype),"setEventListeners",this).call(this),this._popupFormItem.addEventListener("submit",(function(t){t.preventDefault(),e._callbackFormSubmit(e._getInputValues())}))}},{key:"putSavingProcessText",value:function(){this._sendButton.textContent="Сохранение..."}},{key:"returnSavingProcessText",value:function(){this._sendButton.textContent=this._sendButtonText}},{key:"close",value:function(){I(R(a.prototype),"close",this).call(this),this._popupFormItem.reset()}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){var n=t.usernameSelector,r=t.userDescriptionSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._username=document.querySelector(n),this._userDescription=document.querySelector(r),this._avatarLink=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{username:this._username.textContent,description:this._userDescription.textContent}}},{key:"setUserInfo",value:function(e){var t=e.username,n=e.description;this._username.textContent=t,this._userDescription.textContent=n}},{key:"setUserAvatar",value:function(e){this._avatarLink.src=e}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.link,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=n,this._headers=r}var t,n;return t=e,(n=[{key:"_processingServerResponse",value:function(e){return e.ok?e.json():Promise.reject("код ошибки: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._link,"cards"),{headers:this._headers}).then((function(t){return e._processingServerResponse(t)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,r=e.link;return fetch("".concat(this._link,"cards"),{headers:this._headers,method:"POST",body:JSON.stringify({name:n,link:r})}).then((function(e){return t._processingServerResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._link,"cards/").concat(e),{headers:this._headers,method:"DELETE"}).then((function(e){return t._processingServerResponse(e)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._link,"users/me"),{headers:this._headers}).then((function(t){return e._processingServerResponse(t)}))}},{key:"sendUserData",value:function(e){var t=this;return fetch("".concat(this._link,"users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.username,about:e.description})}).then((function(e){return t._processingServerResponse(e)}))}},{key:"sendAvatarData",value:function(e){var t=this;return fetch("".concat(this._link,"users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._processingServerResponse(e)}))}},{key:"putCardLike",value:function(e){var t=this;return fetch("".concat(this._link,"cards/").concat(e,"/likes"),{headers:this._headers,method:"PUT"}).then((function(e){return t._processingServerResponse(e)}))}},{key:"deleteCardLike",value:function(e){var t=this;return fetch("".concat(this._link,"cards/").concat(e,"/likes"),{headers:this._headers,method:"DELETE"}).then((function(e){return t._processingServerResponse(e)}))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A=document.querySelector(".profile__editor"),V=document.querySelector(".profile__add-mesto"),N=document.querySelector("#profile-popup"),U=N.querySelector(".popup__form"),F=document.querySelector("#cards-popup").querySelector(".popup__form"),H=N.querySelector("#username-input"),Z=N.querySelector("#description-input"),J=document.querySelector("#avatar-popup").querySelector(".popup__form"),M=document.querySelector(".profile__avatar-edit");function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $,G=new D({link:"https://mesto.nomoreparties.co/v1/cohort-65/",headers:{authorization:"b440f8c2-f83f-4502-a60c-0b455a4d4b27","Content-Type":"application/json"}}),K=new B({usernameSelector:".profile__name",userDescriptionSelector:".profile__description",userAvatarSelector:".profile__avatar"}),Q=function(e){var t=new o(e,"#card-template",$,{cardId:e._id,authorId:e.owner._id},{handleCardZoom:function(e,t){X.open(e,t)},handleCardDelete:function(e,t){ee.open(e,t)},handleCardLike:function(e){G.putCardLike(e).then((function(e){t.renderCardLike(e)})).catch((function(e){console.log("При лайке карточки возникла ошибка, ".concat(e))}))},handleCardDeleteLike:function(e){G.deleteCardLike(e).then((function(e){t.renderCardLike(e)})).catch((function(e){console.log("При дизлайке карточки возникла ошибка, ".concat(e))}))}});return t.makeCard()},W=new a({renderer:function(e){W.addItem(Q(e))}},".cards");Promise.all([G.getUserData(),G.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$=o._id,K.setUserInfo({username:o.name,description:o.about}),W.renderItems(i.reverse()),K.setUserAvatar(o.avatar)})).catch((function(e){console.log("Возникла глобальная ошибка, ".concat(e))}));var X=new E("#image-popup");X.setEventListeners();var Y=new T("#avatar-popup",{callbackFormSubmit:function(e){Y.putSavingProcessText(),G.sendAvatarData(e).then((function(e){K.setUserAvatar(e.avatar),Y.close()})).catch((function(e){console.log("При обновлении аватара возникла ошибка, ".concat(e))})).finally((function(){Y.returnSavingProcessText()}))}});Y.setEventListeners();var ee=new _("#delete-card",{callbackNotice:function(e,t){G.deleteCard(t).then((function(){e.deleteCard(),ee.close()})).catch((function(e){console.log("При удалении карточки возникла ошибка, ".concat(e))}))}});ee.setEventListeners();var te=new T("#profile-popup",{callbackFormSubmit:function(e){te.putSavingProcessText(),G.sendUserData(e).then((function(e){K.setUserInfo({username:e.name,description:e.about}),te.close()})).catch((function(e){console.log("При редактировании профиля возникла ошибка, ".concat(e))})).finally((function(){te.returnSavingProcessText()}))}});te.setEventListeners();var ne=new T("#cards-popup",{callbackFormSubmit:function(e){ne.putSavingProcessText(),G.addNewCard({name:e.placename,link:e.placeimage}).then((function(e){W.addItem(Q(e)),ne.close()})).catch((function(e){console.log("При добавлении новой карточки возникла ошибка, ".concat(e))})).finally((function(){ne.returnSavingProcessText()}))}});ne.setEventListeners();var re=new n(e,F);re.enableValidationCheck();var oe=new n(e,U);oe.enableValidationCheck();var ie=new n(e,J);ie.enableValidationCheck(),A.addEventListener("click",(function(){te.open(),oe.resetValidate();var e=K.getUserInfo();H.value=e.username,Z.value=e.description})),M.addEventListener("click",(function(){Y.open(),ie.resetValidate()})),V.addEventListener("click",(function(){ne.open(),re.resetValidate()}))})();