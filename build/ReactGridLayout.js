
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash.isequal");

var _propTypes = _interopRequireDefault(require("prop-types"));

*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},function(t,e,n){var r=n(7),o=r.default,a=r.DraggableCore;t.exports=o,t.exports.default=o,t.exports.DraggableCore=a},function(t,e,n){"use strict";var r=n(6);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(0),i=n.n(a),u=n(2),s=n.n(u),c=n(3),l=n.n(c);function f(t,e){for(var n=0,r=t.length;n<r;n++)if(e.apply(e,[t[n],n,t]))return t[n]}function p(t){return"function"==typeof t||"[object Function]"===Object.prototype.toString.call(t)}function h(t){return"number"==typeof t&&!isNaN(t)}function d(t){return parseInt(t,10)}function y(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))}var g=["Moz","Webkit","O","ms"];function b(t,e){return e?"".concat(e).concat(function(t){for(var e="",n=!0,r=0;r<t.length;r++)n?(e+=t[r].toUpperCase(),n=!1):"-"===t[r]?n=!0:e+=t[r];return e}(t)):t}var v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window||void 0===window.document)return"";var e=window.document.documentElement.style;if(t in e)return"";for(var n=0;n<g.length;n++)if(b(t,g[n])in e)return g[n];return""}();function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O="";function j(t,e){return O||(O=f(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(e){return p(t[e])}))),!!p(t[O])&&t[O](e)}function S(t,e,n){var r=t;do{if(j(r,e))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function x(t,e,n){t&&(t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener?t.addEventListener(e,n,!0):t["on"+e]=n)}function _(t,e,n){t&&(t.detachEvent?t.detachEvent("on"+e,n):t.removeEventListener?t.removeEventListener(e,n,!0):t["on"+e]=null)}function D(t){var e=t.clientHeight,n=t.ownerDocument.defaultView.getComputedStyle(t);return(e+=d(n.borderTopWidth))+d(n.borderBottomWidth)}function P(t){var e=t.clientWidth,n=t.ownerDocument.defaultView.getComputedStyle(t);return(e+=d(n.borderLeftWidth))+d(n.borderRightWidth)}function R(t){var e=t.clientHeight,n=t.ownerDocument.defaultView.getComputedStyle(t);return(e-=d(n.paddingTop))-d(n.paddingBottom)}function k(t){var e=t.clientWidth,n=t.ownerDocument.defaultView.getComputedStyle(t);return(e-=d(n.paddingLeft))-d(n.paddingRight)}function z(t,e,n){var r=t.x,o=t.y,a="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(e){var i="".concat("string"==typeof e.x?e.x:e.x+n),u="".concat("string"==typeof e.y?e.y:e.y+n);a="translate(".concat(i,", ").concat(u,")")+a}return a}function E(t){if(t){var e,n,r=t.getElementById("react-draggable-style-el");r||((r=t.createElement("style")).type="text/css",r.id="react-draggable-style-el",r.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",r.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",t.getElementsByTagName("head")[0].appendChild(r)),t.body&&(n="react-draggable-transparent-selection",(e=t.body).classList?e.classList.add(n):e.className.match(new RegExp("(?:^|\\s)".concat(n,"(?!\\S)")))||(e.className+=" ".concat(n)))}}function C(t){try{t&&t.body&&(e=t.body,n="react-draggable-transparent-selection",e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(n,"(?!\\S)"),"g"),"")),t.selection?t.selection.empty():window.getSelection().removeAllRanges()}catch(t){}var e,n}function T(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(n,!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({touchAction:"none"},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function M(t){return"both"===t.props.axis||"x"===t.props.axis}function L(t){return"both"===t.props.axis||"y"===t.props.axis}function N(t,e,n){var r="number"==typeof e?function(t,e){return t.targetTouches&&f(t.targetTouches,(function(t){return e===t.identifier}))||t.changedTouches&&f(t.changedTouches,(function(t){return e===t.identifier}))}(t,e):null;if("number"==typeof e&&!r)return null;var o=W(n);return function(t,e,n){var r=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect();return{x:(t.clientX+e.scrollLeft-r.left)/n,y:(t.clientY+e.scrollTop-r.top)/n}}(r||t,n.props.offsetParent||o.offsetParent||o.ownerDocument.body,n.props.scale)}function A(t,e,n){var r=t.state,o=!h(r.lastX),a=W(t);return o?{node:a,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:a,deltaX:e-r.lastX,deltaY:n-r.lastY,lastX:r.lastX,lastY:r.lastY,x:e,y:n}}function H(t,e){var n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}}function W(t){var e=s.a.findDOMNode(t);if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var G={start:"touchstart",move:"touchmove",stop:"touchend"},V={start:"mousedown",move:"mousemove",stop:"mouseup"},$=V,J=function(t){function e(){var t,n,r,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=this,o=(t=F(e)).call.apply(t,[this].concat(i)),n=!o||"object"!==I(o)&&"function"!=typeof o?Y(r):o,U(Y(n),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),U(Y(n),"handleDragStart",(function(t){if(n.props.onMouseDown(t),!n.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;var e=s.a.findDOMNode(Y(n));if(!e||!e.ownerDocument||!e.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var r=e.ownerDocument;if(!(n.props.disabled||!(t.target instanceof r.defaultView.Node)||n.props.handle&&!S(t.target,n.props.handle,e)||n.props.cancel&&S(t.target,n.props.cancel,e))){var o=function(t){return t.targetTouches&&t.targetTouches[0]?t.targetTouches[0].identifier:t.changedTouches&&t.changedTouches[0]?t.changedTouches[0].identifier:void 0}(t);n.setState({touchIdentifier:o});var a=N(t,o,Y(n));if(null!=a){var i=a.x,u=a.y,c=A(Y(n),i,u);n.props.onStart,!1!==n.props.onStart(t,c)&&(n.props.enableUserSelectHack&&E(r),n.setState({dragging:!0,lastX:i,lastY:u}),x(r,$.move,n.handleDrag),x(r,$.stop,n.handleDragStop))}}})),U(Y(n),"handleDrag",(function(t){"touchmove"===t.type&&t.preventDefault();var e=N(t,n.state.touchIdentifier,Y(n));if(null!=e){var r,o,a,i=e.x,u=e.y;if(Array.isArray(n.props.grid)){var s=i-n.state.lastX,c=u-n.state.lastY,l=B((r=n.props.grid,o=s,a=c,[Math.round(o/r[0])*r[0],Math.round(a/r[1])*r[1]]),2);if(s=l[0],c=l[1],!s&&!c)return;i=n.state.lastX+s,u=n.state.lastY+c}var f=A(Y(n),i,u);if(!1!==n.props.onDrag(t,f))n.setState({lastX:i,lastY:u});else try{n.handleDragStop(new MouseEvent("mouseup"))}catch(t){var p=document.createEvent("MouseEvents");p.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.handleDragStop(p)}}})),U(Y(n),"handleDragStop",(function(t){if(n.state.dragging){var e=N(t,n.state.touchIdentifier,Y(n));if(null!=e){var r=e.x,o=e.y,a=A(Y(n),r,o),i=s.a.findDOMNode(Y(n));i&&n.props.enableUserSelectHack&&C(i.ownerDocument),n.setState({dragging:!1,lastX:NaN,lastY:NaN}),n.props.onStop(t,a),i&&(_(i.ownerDocument,$.move,n.handleDrag),_(i.ownerDocument,$.stop,n.handleDragStop))}}})),U(Y(n),"onMouseDown",(function(t){return $=V,n.handleDragStart(t)})),U(Y(n),"onMouseUp",(function(t){return $=V,n.handleDragStop(t)})),U(Y(n),"onTouchStart",(function(t){return $=G,n.handleDragStart(t)})),U(Y(n),"onTouchEnd",(function(t){return $=G,n.handleDragStop(t)})),n}var n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(e,o.a.Component),n=e,(r=[{key:"componentWillUnmount",value:function(){var t=s.a.findDOMNode(this);if(t){var e=t.ownerDocument;_(e,V.move,this.handleDrag),_(e,G.move,this.handleDrag),_(e,V.stop,this.handleDragStop),_(e,G.stop,this.handleDragStop),this.props.enableUserSelectHack&&C(e)}}},{key:"render",value:function(){return o.a.cloneElement(o.a.Children.only(this.props.children),{style:T(this.props.children.props.style),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}])&&q(n.prototype,r),e}();function K(t){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Q(){return(Q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(n,!0).forEach((function(e){it(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function et(t){return(et=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function nt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ot(t,e,n){return e&&rt(t.prototype,e),n&&rt(t,n),t}function at(t,e){return(at=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}U(J,"displayName","DraggableCore"),U(J,"propTypes",{allowAnyClick:i.a.bool,disabled:i.a.bool,enableUserSelectHack:i.a.bool,offsetParent:function(t,e){if(t[e]&&1!==t[e].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:i.a.arrayOf(i.a.number),handle:i.a.string,cancel:i.a.string,onStart:i.a.func,onDrag:i.a.func,onStop:i.a.func,onMouseDown:i.a.func,scale:i.a.number,className:y,style:y,transform:y}),U(J,"defaultProps",{allowAnyClick:!1,cancel:null,disabled:!1,enableUserSelectHack:!0,offsetParent:null,handle:null,grid:null,transform:null,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1}),n.d(e,"default",(function(){return ut})),n.d(e,"DraggableCore",(function(){return J}));var ut=function(t){function e(t){var n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=et(e).call(this,t),n=!r||"object"!==K(r)&&"function"!=typeof r?nt(this):r,it(nt(n),"onDragStart",(function(t,e){if(!1===n.props.onStart(t,H(nt(n),e)))return!1;n.setState({dragging:!0,dragged:!0})})),it(nt(n),"onDrag",(function(t,e){if(!n.state.dragging)return!1;var r=H(nt(n),e),o={x:r.x,y:r.y};if(n.props.bounds){var a=o.x,i=o.y;o.x+=n.state.slackX,o.y+=n.state.slackY;var u=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(function(t,e,n){if(!t.props.bounds)return[e,n];var r=t.props.bounds;r="string"==typeof r?r:function(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}(r);var o=W(t);if("string"==typeof r){var a,i=o.ownerDocument,u=i.defaultView;if(!((a="parent"===r?o.parentNode:i.querySelector(r))instanceof u.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');var s=u.getComputedStyle(o),c=u.getComputedStyle(a);r={left:-o.offsetLeft+d(c.paddingLeft)+d(s.marginLeft),top:-o.offsetTop+d(c.paddingTop)+d(s.marginTop),right:k(a)-P(o)-o.offsetLeft+d(c.paddingRight)-d(s.marginRight),bottom:R(a)-D(o)-o.offsetTop+d(c.paddingBottom)-d(s.marginBottom)}}return h(r.right)&&(e=Math.min(e,r.right)),h(r.bottom)&&(n=Math.min(n,r.bottom)),h(r.left)&&(e=Math.max(e,r.left)),h(r.top)&&(n=Math.max(n,r.top)),[e,n]}(nt(n),o.x,o.y),2),s=u[0],c=u[1];o.x=s,o.y=c,o.slackX=n.state.slackX+(a-o.x),o.slackY=n.state.slackY+(i-o.y),r.x=o.x,r.y=o.y,r.deltaX=o.x-n.state.x,r.deltaY=o.y-n.state.y}if(!1===n.props.onDrag(t,r))return!1;n.setState(o)})),it(nt(n),"onDragStop",(function(t,e){if(!n.state.dragging)return!1;if(!1===n.props.onStop(t,H(nt(n),e)))return!1;var r={dragging:!1,slackX:0,slackY:0};if(Boolean(n.props.position)){var o=n.props.position,a=o.x,i=o.y;r.x=a,r.y=i}n.setState(r)})),n.state={dragging:!1,dragged:!1,x:t.position?t.position.x:t.defaultPosition.x,y:t.position?t.position.y:t.defaultPosition.y,prevPropsPosition:tt({},t.position),slackX:0,slackY:0,isElementSVG:!1},!t.position||t.onDrag||t.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&at(t,e)}(e,o.a.Component),ot(e,null,[{key:"getDerivedStateFromProps",value:function(t,e){var n=t.position,r=e.prevPropsPosition;return!n||r&&n.x===r.x&&n.y===r.y?null:{x:n.x,y:n.y,prevPropsPosition:tt({},n)}}}]),ot(e,[{key:"componentDidMount",value:function(){void 0!==window.SVGElement&&s.a.findDOMNode(this)instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"render",value:function(){var t,e=this.props,n=(e.axis,e.bounds,e.children),r=e.defaultPosition,a=e.defaultClassName,i=e.defaultClassNameDragging,u=e.defaultClassNameDragged,s=e.position,c=e.positionOffset,f=(e.scale,function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(e,["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"])),p={},h=null,d=!Boolean(s)||this.state.dragging,y=s||r,g={x:M(this)&&d?this.state.x:y.x,y:L(this)&&d?this.state.y:y.y};this.state.isElementSVG?h=function(t,e){return z(t,e,"")}(g,c):p=function(t,e){var n=z(t,e,"px");return w({},b("transform",v),n)}(g,c);var m=l()(n.props.className||"",a,(it(t={},i,this.state.dragging),it(t,u,this.state.dragged),t));return o.a.createElement(J,Q({},f,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),o.a.cloneElement(o.a.Children.only(n),{className:m,style:tt({},n.props.style,{},p),transform:h}))}}]),e}();it(ut,"displayName","Draggable"),it(ut,"propTypes",tt({},J.propTypes,{axis:i.a.oneOf(["both","x","y","none"]),bounds:i.a.oneOfType([i.a.shape({left:i.a.number,right:i.a.number,top:i.a.number,bottom:i.a.number}),i.a.string,i.a.oneOf([!1])]),defaultClassName:i.a.string,defaultClassNameDragging:i.a.string,defaultClassNameDragged:i.a.string,defaultPosition:i.a.shape({x:i.a.number,y:i.a.number}),positionOffset:i.a.shape({x:i.a.oneOfType([i.a.number,i.a.string]),y:i.a.oneOfType([i.a.number,i.a.string])}),position:i.a.shape({x:i.a.number,y:i.a.number}),className:y,style:y,transform:y})),it(ut,"defaultProps",tt({},J.defaultProps,{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},position:null,scale:1}))}]))},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),a=n(0),i=n.n(a),u=n(3),s=n.n(u),c=n(12),l=n.n(c),f=n(6),p=n.n(f),h=n(1);function d(t){var e=t.margin,n=t.containerPadding,r=t.containerWidth,o=t.cols;return(r-e[0]*(o-1)-2*n[0])/o}function y(t,e,n,r,o,a){var i=t.margin,u=t.containerPadding,s=t.rowHeight,c=d(t),l={};return a&&a.resizing?(l.width=Math.round(a.resizing.width),l.height=Math.round(a.resizing.height)):(l.width=r===1/0?r:Math.round(c*r+Math.max(0,r-1)*i[0]),l.height=o===1/0?o:Math.round(s*o+Math.max(0,o-1)*i[1])),a&&a.dragging?(l.top=Math.round(a.dragging.top),l.left=Math.round(a.dragging.left)):(l.top=Math.round((s+i[1])*n+u[1]),l.left=Math.round((c+i[0])*e+u[0])),l}function g(t,e,n,r,o){var a=t.margin,i=t.cols,u=t.rowHeight,s=t.maxRows,c=d(t),l=Math.round((n-a[0])/(c+a[0])),f=Math.round((e-a[1])/(u+a[1]));return{x:l=Math.max(Math.min(l,i-r),0),y:f=Math.max(Math.min(f,s-o),0)}}var b=n(5),v=n.n(b),m=n(7),w=n(13);function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){z(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function D(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?R(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var E=function(t){function e(){var t,n;x(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return z(R(n=D(this,(t=P(e)).call.apply(t,[this].concat(o)))),"state",{resizing:null,dragging:null,className:""}),z(R(n),"currentNode",void 0),z(R(n),"onDragStart",(function(t,e){var r=e.node;if(n.props.onDragStart){var o={top:0,left:0},a=r.offsetParent;if(a){var i=a.getBoundingClientRect(),u=r.getBoundingClientRect(),s=u.left/n.props.transformScale,c=i.left/n.props.transformScale,l=u.top/n.props.transformScale,f=i.top/n.props.transformScale;o.left=s-c+a.scrollLeft,o.top=l-f+a.scrollTop,n.setState({dragging:o});var p=g(n.getPositionParams(),o.top,o.left,n.props.w,n.props.h),h=p.x,d=p.y;return n.props.onDragStart&&n.props.onDragStart.call(R(n),n.props.i,h,d,{e:t,node:r,newPosition:o})}}})),z(R(n),"onDrag",(function(t,e){var r=e.node,o=e.deltaX,a=e.deltaY,i=n.props,u=i.onDrag,s=i.transformScale;if(u){o/=s,a/=s;var c={top:0,left:0};if(!n.state.dragging)throw new Error("onDrag called before onDragStart.");c.left=n.state.dragging.left+o,c.top=n.state.dragging.top+a,n.setState({dragging:c});var l=g(n.getPositionParams(),c.top,c.left,n.props.w,n.props.h),f=l.x,p=l.y;return u&&u.call(R(n),n.props.i,f,p,{e:t,node:r,newPosition:c})}})),z(R(n),"onDragStop",(function(t,e){var r=e.node;if(n.props.onDragStop){var o={top:0,left:0};if(!n.state.dragging)throw new Error("onDragEnd called before onDragStart.");o.left=n.state.dragging.left,o.top=n.state.dragging.top,n.setState({dragging:null});var a=g(n.getPositionParams(),o.top,o.left,n.props.w,n.props.h),i=a.x,u=a.y;return n.props.onDragStop&&n.props.onDragStop.call(R(n),n.props.i,i,u,{e:t,node:r,newPosition:o})}})),z(R(n),"onResizeStop",(function(t,e){n.onResizeHandler(t,e,"onResizeStop")})),z(R(n),"onResizeStart",(function(t,e){n.onResizeHandler(t,e,"onResizeStart")})),z(R(n),"onResize",(function(t,e){n.onResizeHandler(t,e,"onResize")})),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(e,t),n=e,(r=[{key:"componentDidUpdate",value:function(t){this.moveDroppingItem(t)}},{key:"moveDroppingItem",value:function(t){var e=this.props.droppingPosition,n=t.droppingPosition,r=this.state.dragging;if(e&&n){this.currentNode||(this.currentNode=v.a.findDOMNode(this));var o=r&&e.left!==n.left||e.top!==n.top;if(r){if(o){var a=e.left-r.left,i=e.top-r.top;this.onDrag(e.e,{node:this.currentNode,deltaX:a,deltaY:i})}}else this.onDragStart(e.e,{node:this.currentNode,deltaX:e.left,deltaY:e.top})}}},{key:"getPositionParams",value:function(){return{cols:this.props.cols,containerPadding:this.props.containerPadding,containerWidth:this.props.containerWidth,margin:this.props.margin,maxRows:this.props.maxRows,rowHeight:this.props.rowHeight}}},{key:"createStyle",value:function(t){var e,n=this.props,r=n.usePercentages,o=n.containerWidth;return n.useCSSTransforms?e=Object(h.setTransform)(t):(e=Object(h.setTopLeft)(t),r&&(e.left=Object(h.perc)(t.left/o),e.width=Object(h.perc)(t.width/o))),e}},{key:"mixinDraggable",value:function(t){return o.a.createElement(m.DraggableCore,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,handle:this.props.handle,cancel:".react-resizable-handle"+(this.props.cancel?","+this.props.cancel:""),scale:this.props.transformScale},t)}},{key:"mixinResizable",value:function(t,e){var n=this.props,r=n.cols,a=n.x,i=n.minW,u=n.minH,s=n.maxW,c=n.maxH,l=n.transformScale,f=this.getPositionParams(),p=y(f,0,0,r-a,0).width,h=y(f,0,0,i,u),d=y(f,0,0,s,c),g=[h.width,h.height],b=[Math.min(d.width,p),Math.min(d.height,1/0)];return o.a.createElement(w.Resizable,{width:e.width,height:e.height,minConstraints:g,maxConstraints:b,onResizeStop:this.onResizeStop,onResizeStart:this.onResizeStart,onResize:this.onResize,transformScale:l},t)}},{key:"onResizeHandler",value:function(t,e,n){var r=e.node,o=e.size,a=this.props[n];if(a){var i=this.props,u=i.cols,s=i.x,c=i.y,l=i.i,f=i.maxW,p=i.minW,h=i.maxH,y=i.minH,g=function(t,e,n,r,o){var a=t.margin,i=t.maxRows,u=t.cols,s=t.rowHeight,c=d(t),l=Math.round((e+a[0])/(c+a[0])),f=Math.round((n+a[1])/(s+a[1]));return{w:l=Math.max(Math.min(l,u-r),0),h:f=Math.max(Math.min(f,i-o),0)}}(this.getPositionParams(),o.width,o.height,s,c),b=g.w,v=g.h;b=Math.min(b,u-s),b=Math.max(b,1),b=Math.max(Math.min(b,f),p),v=Math.max(Math.min(v,h),y),this.setState({resizing:"onResizeStop"===n?null:o}),a.call(this,l,b,v,{e:t,node:r,size:o})}}},{key:"render",value:function(){var t=this.props,e=t.x,n=t.y,r=t.w,a=t.h,i=t.isDraggable,u=t.isResizable,s=t.droppingPosition,c=t.useCSSTransforms,l=y(this.getPositionParams(),e,n,r,a,this.state),f=o.a.Children.only(this.props.children),h=o.a.cloneElement(f,{className:p()("react-grid-item",f.props.className,this.props.className,{static:this.props.static,resizing:Boolean(this.state.resizing),"react-draggable":i,"react-draggable-dragging":Boolean(this.state.dragging),dropping:Boolean(s),cssTransforms:c}),style:S({},this.props.style,{},f.props.style,{},this.createStyle(l))});return u&&(h=this.mixinResizable(h,l)),i&&(h=this.mixinDraggable(h)),h}}])&&_(n.prototype,r),a&&_(n,a),e}(o.a.Component);function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){I(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function H(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(t,e){return(W=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}z(E,"propTypes",{children:i.a.element,cols:i.a.number.isRequired,containerWidth:i.a.number.isRequired,rowHeight:i.a.number.isRequired,margin:i.a.array.isRequired,maxRows:i.a.number.isRequired,containerPadding:i.a.array.isRequired,x:i.a.number.isRequired,y:i.a.number.isRequired,w:i.a.number.isRequired,h:i.a.number.isRequired,minW:function(t,e){var n=t[e];return"number"!=typeof n?new Error("minWidth not Number"):n>t.w||n>t.maxW?new Error("minWidth larger than item width/maxWidth"):void 0},maxW:function(t,e){var n=t[e];return"number"!=typeof n?new Error("maxWidth not Number"):n<t.w||n<t.minW?new Error("maxWidth smaller than item width/minWidth"):void 0},minH:function(t,e){var n=t[e];return"number"!=typeof n?new Error("minHeight not Number"):n>t.h||n>t.maxH?new Error("minHeight larger than item height/maxHeight"):void 0},maxH:function(t,e){var n=t[e];return"number"!=typeof n?new Error("maxHeight not Number"):n<t.h||n<t.minH?new Error("maxHeight smaller than item height/minHeight"):void 0},i:i.a.string.isRequired,onDragStop:i.a.func,onDragStart:i.a.func,onDrag:i.a.func,onResizeStop:i.a.func,onResizeStart:i.a.func,onResize:i.a.func,isDraggable:i.a.bool.isRequired,isResizable:i.a.bool.isRequired,static:i.a.bool,useCSSTransforms:i.a.bool.isRequired,transformScale:i.a.number,className:i.a.string,handle:i.a.string,cancel:i.a.string,droppingPosition:i.a.shape({e:i.a.object.isRequired,left:i.a.number.isRequired,top:i.a.number.isRequired})}),z(E,"defaultProps",{className:"",cancel:"",handle:"",minH:1,minW:1,maxH:1/0,maxW:1/0,transformScale:1}),n.d(e,"default",(function(){return F}));var B=function(t){var e=t||{},n=e.verticalCompact,r=e.compactType;return!1===n?null:r},q=!1;try{q=/firefox/i.test(navigator.userAgent)}catch(t){}var F=function(t){function e(t,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?H(t):e}(this,A(e).call(this,t,n)),I(H(r),"state",{activeDrag:null,layout:Object(h.synchronizeLayoutWithChildren)(r.props.layout,r.props.children,r.props.cols,B(r.props)),mounted:!1,oldDragItem:null,oldLayout:null,oldResizeItem:null,droppingDOMNode:null,children:[]}),I(H(r),"dragEnterCounter",0),I(H(r),"onDragOver",(function(t){if(q&&-1===t.nativeEvent.target.className.indexOf("react-grid-layout"))return!1;var e=r.props,n=e.droppingItem,a=e.margin,i=e.cols,u=e.rowHeight,s=e.maxRows,c=e.width,l=e.containerPadding,f=r.state.layout,p=t.nativeEvent,h=p.layerX,d=p.layerY,y={left:h,top:d,e:t};if(r.state.droppingDOMNode){if(r.state.droppingPosition){var b=r.state.droppingPosition,v=b.left,m=b.top;(v!=h||m!=d)&&r.setState({droppingPosition:y})}}else{var w=g({cols:i,margin:a,maxRows:s,rowHeight:u,containerWidth:c,containerPadding:l||a},d,h,n.w,n.h);r.setState({droppingDOMNode:o.a.createElement("div",{key:n.i}),droppingPosition:y,layout:[].concat(L(f),[M({},n,{x:w.x,y:w.y,static:!1,isDraggable:!0})])})}t.stopPropagation(),t.preventDefault()})),I(H(r),"removeDroppingPlaceholder",(function(){var t=r.props,e=t.droppingItem,n=t.cols,o=r.state.layout,a=Object(h.compact)(o.filter((function(t){return t.i!==e.i})),B(r.props),n);r.setState({layout:a,droppingDOMNode:null,activeDrag:null,droppingPosition:void 0})})),I(H(r),"onDragLeave",(function(){r.dragEnterCounter--,0===r.dragEnterCounter&&r.removeDroppingPlaceholder()})),I(H(r),"onDragEnter",(function(){r.dragEnterCounter++})),I(H(r),"onDrop",(function(t){var e=r.props.droppingItem,n=r.state.layout.find((function(t){return t.i===e.i}))||{},o=n.x,a=n.y,i=n.w,u=n.h;r.dragEnterCounter=0,r.removeDroppingPlaceholder(),r.props.onDrop({x:o,y:a,w:i,h:u,e:t})})),Object(h.autoBindHandlers)(H(r),["onDragStart","onDrag","onDragStop","onResizeStart","onResize","onResizeStop"]),r}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&W(t,e)}(e,t),n=e,a=[{key:"getDerivedStateFromProps",value:function(t,e){var n;return e.activeDrag?null:(s()(t.layout,e.propsLayout)&&t.compactType===e.compactType?Object(h.childrenEqual)(t.children,e.children)||(n=e.layout):n=t.layout,n?{layout:Object(h.synchronizeLayoutWithChildren)(n,t.children,t.cols,B(t)),compactType:t.compactType,children:t.children,propsLayout:t.layout}:null)}}],(r=[{key:"componentDidMount",value:function(){this.setState({mounted:!0}),this.onLayoutMaybeChanged(this.state.layout,this.props.layout)}},{key:"componentDidUpdate",value:function(t,e){if(!this.state.activeDrag){var n=this.state.layout,r=e.layout;this.onLayoutMaybeChanged(n,r)}}},{key:"containerHeight",value:function(){if(this.props.autoSize){var t=Object(h.bottom)(this.state.layout),e=this.props.containerPadding?this.props.containerPadding[1]:this.props.margin[1];return t*this.props.rowHeight+(t-1)*this.props.margin[1]+2*e+"px"}}},{key:"onDragStart",value:function(t,e,n,r){var o=r.e,a=r.node,i=this.state.layout,u=Object(h.getLayoutItem)(i,t);if(u)return this.setState({oldDragItem:Object(h.cloneLayoutItem)(u),oldLayout:this.state.layout}),this.props.onDragStart(i,u,u,null,o,a)}},{key:"onDrag",value:function(t,e,n,r){var o=r.e,a=r.node,i=this.state.oldDragItem,u=this.state.layout,s=this.props.cols,c=Object(h.getLayoutItem)(u,t);if(c){var l={w:c.w,h:c.h,x:c.x,y:c.y,placeholder:!0,i:t};u=Object(h.moveElement)(u,c,e,n,!0,this.props.preventCollision,B(this.props),s),this.props.onDrag(u,i,c,l,o,a),this.setState({layout:Object(h.compact)(u,B(this.props),s),activeDrag:l})}}},{key:"onDragStop",value:function(t,e,n,r){var o=r.e,a=r.node;if(this.state.activeDrag){var i=this.state.oldDragItem,u=this.state.layout,s=this.props,c=s.cols,l=s.preventCollision,f=Object(h.getLayoutItem)(u,t);if(f){u=Object(h.moveElement)(u,f,e,n,!0,l,B(this.props),c),this.props.onDragStop(u,i,f,null,o,a);var p=Object(h.compact)(u,B(this.props),c),d=this.state.oldLayout;this.setState({activeDrag:null,layout:p,oldDragItem:null,oldLayout:null}),this.onLayoutMaybeChanged(p,d)}}}},{key:"onLayoutMaybeChanged",value:function(t,e){var n,r;e||(e=this.state.layout),n=e,r=t,l()(n).xorWith(r,s.a).isEmpty()||this.props.onLayoutChange(t)}},{key:"onResizeStart",value:function(t,e,n,r){var o=r.e,a=r.node,i=this.state.layout,u=Object(h.getLayoutItem)(i,t);u&&(this.setState({oldResizeItem:Object(h.cloneLayoutItem)(u),oldLayout:this.state.layout}),this.props.onResizeStart(i,u,u,null,o,a))}},{key:"onResize",value:function(t,e,n,r){var o=r.e,a=r.node,i=this.state,u=i.layout,s=i.oldResizeItem,c=this.props,l=c.cols,f=c.preventCollision,p=Object(h.getLayoutItem)(u,t);if(p){var d;if(f){var y=Object(h.getAllCollisions)(u,M({},p,{w:e,h:n})).filter((function(t){return t.i!==p.i}));if(d=y.length>0){var g=1/0,b=1/0;y.forEach((function(t){t.x>p.x&&(g=Math.min(g,t.x)),t.y>p.y&&(b=Math.min(b,t.y))})),Number.isFinite(g)&&(p.w=g-p.x),Number.isFinite(b)&&(p.h=b-p.y)}}d||(p.w=e,p.h=n);var v={w:p.w,h:p.h,x:p.x,y:p.y,static:!0,i:t};this.props.onResize(u,s,p,v,o,a),this.setState({layout:Object(h.compact)(u,B(this.props),l),activeDrag:v})}}},{key:"onResizeStop",value:function(t,e,n,r){var o=r.e,a=r.node,i=this.state,u=i.layout,s=i.oldResizeItem,c=this.props.cols,l=Object(h.getLayoutItem)(u,t);this.props.onResizeStop(u,s,l,null,o,a);var f=Object(h.compact)(u,B(this.props),c),p=this.state.oldLayout;this.setState({activeDrag:null,layout:f,oldResizeItem:null,oldLayout:null}),this.onLayoutMaybeChanged(f,p)}},{key:"placeholder",value:function(){var t=this.state.activeDrag;if(!t)return null;var e=this.props,n=e.width,r=e.cols,a=e.margin,i=e.containerPadding,u=e.rowHeight,s=e.maxRows,c=e.useCSSTransforms,l=e.transformScale;return o.a.createElement(E,{w:t.w,h:t.h,x:t.x,y:t.y,i:t.i,className:"react-grid-placeholder",containerWidth:n,cols:r,margin:a,containerPadding:i||a,maxRows:s,rowHeight:u,isDraggable:!1,isResizable:!1,useCSSTransforms:c,transformScale:l},o.a.createElement("div",null))}},{key:"processGridItem",value:function(t,e){if(t&&t.key){var n=Object(h.getLayoutItem)(this.state.layout,String(t.key));if(!n)return null;var r=this.props,a=r.width,i=r.cols,u=r.margin,s=r.containerPadding,c=r.rowHeight,l=r.maxRows,f=r.isDraggable,p=r.isResizable,d=r.useCSSTransforms,y=r.transformScale,g=r.draggableCancel,b=r.draggableHandle,v=this.state,m=v.mounted,w=v.droppingPosition,O="boolean"==typeof n.isDraggable?n.isDraggable:!n.static&&f,j="boolean"==typeof n.isResizable?n.isResizable:!n.static&&p;return o.a.createElement(E,{containerWidth:a,cols:i,margin:u,containerPadding:s||u,maxRows:l,rowHeight:c,cancel:g,handle:b,onDragStop:this.onDragStop,onDragStart:this.onDragStart,onDrag:this.onDrag,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,isDraggable:O,isResizable:j,useCSSTransforms:d&&m,usePercentages:!m,transformScale:y,w:n.w,h:n.h,x:n.x,y:n.y,i:n.i,minH:n.minH,minW:n.minW,maxH:n.maxH,maxW:n.maxW,static:n.static,droppingPosition:e?w:void 0},t)}}},{key:"render",value:function(){var t=this,e=this.props,n=e.className,r=e.style,a=e.isDroppable,i=p()("react-grid-layout",n),u=M({height:this.containerHeight()},r);return o.a.createElement("div",{className:i,style:u,onDrop:a?this.onDrop:h.noop,onDragLeave:a?this.onDragLeave:h.noop,onDragEnter:a?this.onDragEnter:h.noop,onDragOver:a?this.onDragOver:h.noop},o.a.Children.map(this.props.children,(function(e){return t.processGridItem(e)})),a&&this.state.droppingDOMNode&&this.processGridItem(this.state.droppingDOMNode,!0),this.placeholder())}}])&&N(n.prototype,r),a&&N(n,a),e}(o.a.Component);I(F,"displayName","ReactGridLayout"),I(F,"propTypes",{className:i.a.string,style:i.a.object,width:i.a.number,autoSize:i.a.bool,cols:i.a.number,draggableCancel:i.a.string,draggableHandle:i.a.string,verticalCompact:function(t){t.verticalCompact,0},compactType:i.a.oneOf(["vertical","horizontal"]),layout:function(t){var e=t.layout;void 0!==e&&Object(h.validateLayout)(e,"layout")},margin:i.a.arrayOf(i.a.number),containerPadding:i.a.arrayOf(i.a.number),rowHeight:i.a.number,maxRows:i.a.number,isDraggable:i.a.bool,isResizable:i.a.bool,preventCollision:i.a.bool,useCSSTransforms:i.a.bool,transformScale:i.a.number,isDroppable:i.a.bool,onLayoutChange:i.a.func,onDragStart:i.a.func,onDrag:i.a.func,onDragStop:i.a.func,onResizeStart:i.a.func,onResize:i.a.func,onResizeStop:i.a.func,onDrop:i.a.func,droppingItem:i.a.shape({i:i.a.string.isRequired,w:i.a.number.isRequired,h:i.a.number.isRequired}),children:function(t,e){var n=t[e],r={};o.a.Children.forEach(n,(function(t){if(r[t.key])throw new Error('Duplicate child key "'+t.key+'" found! This will cause problems in ReactGridLayout.');r[t.key]=!0}))}}),I(F,"defaultProps",{autoSize:!0,cols:12,className:"",style:{},draggableHandle:"",draggableCancel:"",containerPadding:null,rowHeight:150,maxRows:1/0,layout:[],margin:[10,10],isDraggable:!0,isResizable:!0,isDroppable:!1,useCSSTransforms:!0,transformScale:1,verticalCompact:!0,compactType:"vertical",preventCollision:!1,droppingItem:{i:"__dropping-elem__",h:1,w:1},onLayoutChange:h.noop,onDragStart:h.noop,onDrag:h.noop,onDragStop:h.noop,onResizeStart:h.noop,onResize:h.noop,onResizeStop:h.noop,onDrop:h.noop})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;var r=u(n(2)),o=u(n(0)),a=n(7),i=n(17);function u(t){return t&&t.__esModule?t:{default:t}}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(t){var e,n;function o(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return f(l(e=t.call.apply(t,[this].concat(r))||this),"state",{slackW:0,slackH:0}),e}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var u=o.prototype;return u.lockAspectRatio=function(t,e,n){return[t=(e=t/n)*n,e]},u.runConstraints=function(t,e){var n=[this.props.minConstraints,this.props.maxConstraints],r=n[0],o=n[1];if(!r&&!o)return[t,e];if(this.props.lockAspectRatio)if(e===this.props.height){var a=this.props.width/this.props.height;t=(e=t/a)*a}else{var i=this.props.height/this.props.width;e=(t=e/i)*i}var u=t,s=e,c=this.state,l=c.slackW,f=c.slackH;return t+=l,e+=f,r&&(t=Math.max(r[0],t),e=Math.max(r[1],e)),o&&(t=Math.min(o[0],t),e=Math.min(o[1],e)),f+=s-e,(l+=u-t)===this.state.slackW&&f===this.state.slackH||this.setState({slackW:l,slackH:f}),[t,e]},u.resizeHandler=function(t,e){var n=this;return function(r,o){var a=o.node,i=o.deltaX,u=o.deltaY;i/=n.props.transformScale,u/=n.props.transformScale;var s=("both"===n.props.axis||"x"===n.props.axis)&&-1===["n","s"].indexOf(e),c=("both"===n.props.axis||"y"===n.props.axis)&&-1===["e","w"].indexOf(e);s&&"w"===e[e.length-1]&&(i=-i),c&&"n"===e[0]&&(u=-u);var l=n.props.width+(s?i:0),f=n.props.height+(c?u:0),p=l!==n.props.width,h=f!==n.props.height;if("onResize"!==t||p||h){var d=n.runConstraints(l,f);l=d[0],f=d[1];var y={};if("onResizeStart"===t);else if("onResizeStop"===t)y.slackW=y.slackH=0;else if(l===n.props.width&&f===n.props.height)return;"function"==typeof n.props[t]?("function"==typeof r.persist&&r.persist(),n.setState(y,(function(){return n.props[t](r,{node:a,size:{width:l,height:f},handle:e})}))):n.setState(y)}}},u.renderResizeHandle=function(t){var e=this.props.handle;return e?"function"==typeof e?e(t):e:r.default.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+t})},u.render=function(){var t=this,e=this.props,n=e.children,o=e.draggableOpts,u=(e.width,e.height,e.handleSize,e.lockAspectRatio,e.axis,e.minConstraints,e.maxConstraints,e.onResize,e.onResizeStop,e.onResizeStart,e.resizeHandles),l=(e.transformScale,function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(e,["children","draggableOpts","width","height","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"])),p=l.className?l.className+" react-resizable":"react-resizable";return(0,i.cloneElement)(n,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},l,{className:p,children:[n.props.children,u.map((function(e){return r.default.createElement(a.DraggableCore,s({},o,{key:"resizableHandle-"+e,onStop:t.resizeHandler("onResizeStop",e),onStart:t.resizeHandler("onResizeStart",e),onDrag:t.resizeHandler("onResize",e)}),t.renderResizeHandle(e))}))]}))},o}(r.default.Component);e.default=p,f(p,"propTypes",{children:o.default.element.isRequired,width:o.default.number.isRequired,height:o.default.number.isRequired,handle:o.default.element,handleSize:o.default.array,resizeHandles:o.default.arrayOf(o.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:o.default.number,lockAspectRatio:o.default.bool,axis:o.default.oneOf(["both","x","y","none"]),minConstraints:o.default.arrayOf(o.default.number),maxConstraints:o.default.arrayOf(o.default.number),onResizeStop:o.default.func,onResizeStart:o.default.func,onResize:o.default.func,draggableOpts:o.default.object}),f(p,"defaultProps",{handleSize:[20,20],lockAspectRatio:!1,axis:"both",minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1})},function(t,e,n){(function(t,r){var o;
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash core -o ./dist/lodash.core.js`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(){var a="[object Object]",i=/[&<>"']/g,u=RegExp(i.source),s=/^(?:0|[1-9]\d*)$/,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,f=c||l||Function("return this")();e&&!e.nodeType&&e&&"object"==typeof r&&r&&r.nodeType;function p(t,e){return t.push.apply(t,e),t}function h(t){return function(e){return null==e?void 0:e[t]}}function d(t,e,n,r,o){return o(t,(function(t,o,a){n=r?(r=!1,t):e(n,t,o,a)})),n}var y,g=(y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},function(t){return null==y?void 0:y[t]});var b,v,m=Array.prototype,w=Object.prototype,O=w.hasOwnProperty,j=0,S=w.toString,x=f._,_=Object.create,D=w.propertyIsEnumerable,P=f.isFinite,R=(b=Object.keys,v=Object,function(t){return b(v(t))}),k=Math.max;function z(t){return t instanceof C?t:new C(t)}var E=function(){function t(){}return function(e){if(!kt(e))return{};if(_)return _(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function C(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e}function T(t,e,n){var r=t[e];O.call(t,e)&&St(r,n)&&(void 0!==n||e in t)||M(t,e,n)}function M(t,e,n){t[e]=n}function L(t,e,n){if("function"!=typeof t)throw new TypeError("Expected a function");return setTimeout((function(){t.apply(void 0,n)}),e)}C.prototype=E(z.prototype),C.prototype.constructor=C;var N,A,H=(N=F,function(t,e){if(null==t)return t;if(!Dt(t))return N(t,e);for(var n=t.length,r=A?n:-1,o=Object(t);(A?r--:++r<n)&&!1!==e(o[r],r,o););return t});function W(t,e,n){for(var r=-1,o=t.length;++r<o;){var a=t[r],i=e(a);if(null!=i&&(void 0===u?i==i:n(i,u)))var u=i,s=a}return s}function I(t,e){var n=[];return H(t,(function(t,r,o){e(t,r,o)&&n.push(t)})),n}function B(t,e,n,r,o){var a=-1,i=t.length;for(n||(n=it),o||(o=[]);++a<i;){var u=t[a];e>0&&n(u)?e>1?B(u,e-1,n,r,o):p(o,u):r||(o[o.length]=u)}return o}var q=function(t){return function(e,n,r){for(var o=-1,a=Object(e),i=r(e),u=i.length;u--;){var s=i[t?u:++o];if(!1===n(a[s],s,a))break}return e}}();function F(t,e){return t&&q(t,e,It)}function Y(t,e){return I(e,(function(e){return Rt(t[e])}))}function X(t){return function(t){return S.call(t)}(t)}function U(t,e){return t>e}var G=Vt;function V(t,e,n,r,o){return t===e||(null==t||null==e||!zt(t)&&!zt(e)?t!=t&&e!=e:function(t,e,n,r,o,i){var u=_t(t),s=_t(e),c=u?"[object Array]":X(t),l=s?"[object Array]":X(e),f=(c="[object Arguments]"==c?a:c)==a,p=(l="[object Arguments]"==l?a:l)==a,h=c==l;i||(i=[]);var d=gt(i,(function(e){return e[0]==t})),y=gt(i,(function(t){return t[0]==e}));if(d&&y)return d[1]==e;if(i.push([t,e]),i.push([e,t]),h&&!f){var g=u?function(t,e,n,r,o,a){var i=1&n,u=t.length,s=e.length;if(u!=s&&!(i&&s>u))return!1;var c=-1,l=!0,f=2&n?[]:void 0;for(;++c<u;){var p=t[c],h=e[c];if(f){if(!nt(e,(function(t,e){if(!ht(f,e)&&(p===t||o(p,t,n,r,a)))return f.push(e)}))){l=!1;break}}else if(p!==h&&!o(p,h,n,r,a)){l=!1;break}}return l}(t,e,n,r,o,i):function(t,e,n,r,o,a,i){switch(n){case"[object Boolean]":case"[object Date]":case"[object Number]":return St(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+""}return!1}(t,e,c);return i.pop(),g}if(!(1&n)){var b=f&&O.call(t,"__wrapped__"),v=p&&O.call(e,"__wrapped__");if(b||v){var m=b?t.value():t,w=v?e.value():e;g=o(m,w,n,r,i);return i.pop(),g}}if(!h)return!1;g=function(t,e,n,r,o,a){var i=1&n,u=It(t),s=u.length,c=It(e).length;if(s!=c&&!i)return!1;var l=s;for(;l--;){var f=u[l];if(!(i?f in e:O.call(e,f)))return!1}var p=!0,h=i;for(;++l<s;){f=u[l];var d=t[f],y=e[f];if(d!==y&&!o(d,y,n,r,a)){p=!1;break}h||(h="constructor"==f)}if(p&&!h){var g=t.constructor,b=e.constructor;g!=b&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof b&&b instanceof b)&&(p=!1)}return p}(t,e,n,r,o,i);return i.pop(),g}(t,e,n,r,V,o))}function $(t){return"function"==typeof t?t:null==t?Yt:("object"==typeof t?Q:h)(t)}function J(t,e){return t<e}function K(t,e){var n=-1,r=Dt(t)?Array(t.length):[];return H(t,(function(t,o,a){r[++n]=e(t,o,a)})),r}function Q(t){var e=R(t);return function(n){var r=e.length;if(null==n)return!r;for(n=Object(n);r--;){var o=e[r];if(!(o in n&&V(t[o],n[o],3)))return!1}return!0}}function Z(t,e){return lt(ct(t,e,Yt),t+"")}function tt(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++r<o;)a[r]=t[r+e];return a}function et(t){return tt(t,0,t.length)}function nt(t,e){var n;return H(t,(function(t,r,o){return!(n=e(t,r,o))})),!!n}function rt(t,e,n,r){var o=!n;n||(n={});for(var a=-1,i=e.length;++a<i;){var u=e[a],s=r?r(n[u],t[u],u,n,t):void 0;void 0===s&&(s=t[u]),o?M(n,u,s):T(n,u,s)}return n}function ot(t){return Z((function(e,n){var r=-1,o=n.length,a=o>1?n[o-1]:void 0;for(a=t.length>3&&"function"==typeof a?(o--,a):void 0,e=Object(e);++r<o;){var i=n[r];i&&t(e,i,r,a)}return e}))}function at(t,e,n,r){if("function"!=typeof t)throw new TypeError("Expected a function");var o=1&e,a=function(t){return function(){var e=arguments,n=E(t.prototype),r=t.apply(n,e);return kt(r)?r:n}}(t);return function e(){for(var i=-1,u=arguments.length,s=-1,c=r.length,l=Array(c+u),p=this&&this!==f&&this instanceof e?a:t;++s<c;)l[s]=r[s];for(;u--;)l[s++]=arguments[++i];return p.apply(o?n:this,l)}}function it(t){return _t(t)||xt(t)}function ut(t,e,n){if(!kt(n))return!1;var r=typeof e;return!!("number"==r?Dt(n)&&function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&s.test(t))&&t>-1&&t%1==0&&t<e}(e,n.length):"string"==r&&e in n)&&St(n[e],t)}function st(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}function ct(t,e,n){return e=k(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,a=k(r.length-e,0),i=Array(a);++o<a;)i[o]=r[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=r[o];return u[e]=n(i),t.apply(this,u)}}var lt=Yt;function ft(t){return(null==t?0:t.length)?B(t,1):[]}function pt(t){return t&&t.length?t[0]:void 0}function ht(t,e,n){for(var r=null==t?0:t.length,o=((n="number"==typeof n?n<0?k(r+n,0):n:0)||0)-1,a=e==e;++o<r;){var i=t[o];if(a?i===e:i!=i)return o}return-1}function dt(t){var e=z(t);return e.__chain__=!0,e}var yt,gt=(yt=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=null==n?0:Mt(n);return o<0&&(o=k(r+o,0)),function(t,e,n,r){for(var o=t.length,a=n+(r?1:-1);r?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,$(e),o)},function(t,e,n){var r=Object(t);if(!Dt(t)){var o=$(e);t=It(t),e=function(t){return o(r[t],t,r)}}var a=yt(t,e,n);return a>-1?r[o?t[a]:a]:void 0});function bt(t,e){return H(t,$(e))}function vt(t,e,n){return d(t,$(e),n,arguments.length<3,H)}function mt(t,e){var n;if("function"!=typeof e)throw new TypeError("Expected a function");return t=Mt(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=void 0),n}}var wt=Z((function(t,e,n){return at(t,33,e,n)})),Ot=Z((function(t,e){return L(t,1,e)})),jt=Z((function(t,e,n){return L(t,Lt(e)||0,n)}));function St(t,e){return t===e||t!=t&&e!=e}var xt=G(function(){return arguments}())?G:function(t){return zt(t)&&O.call(t,"callee")&&!D.call(t,"callee")},_t=Array.isArray;function Dt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Rt(t)}var Pt=function(t){return zt(t)&&"[object Date]"==X(t)};function Rt(t){if(!kt(t))return!1;var e=X(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function kt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function zt(t){return null!=t&&"object"==typeof t}function Et(t){return"number"==typeof t||zt(t)&&"[object Number]"==X(t)}var Ct=function(t){return zt(t)&&"[object RegExp]"==X(t)};function Tt(t){return"string"==typeof t||!_t(t)&&zt(t)&&"[object String]"==X(t)}var Mt=Number,Lt=Number;function Nt(t){return"string"==typeof t?t:null==t?"":t+""}var At=ot((function(t,e){rt(e,R(e),t)})),Ht=ot((function(t,e){rt(e,st(e),t)}));var Wt=Z((function(t,e){t=Object(t);var n=-1,r=e.length,o=r>2?e[2]:void 0;for(o&&ut(e[0],e[1],o)&&(r=1);++n<r;)for(var a=e[n],i=Bt(a),u=-1,s=i.length;++u<s;){var c=i[u],l=t[c];(void 0===l||St(l,w[c])&&!O.call(t,c))&&(t[c]=a[c])}return t}));var It=R,Bt=st,qt=function(t){return lt(ct(t,void 0,ft),t+"")}((function(t,e){return null==t?{}:function(t,e){return t=Object(t),vt(e,(function(e,n){return n in t&&(e[n]=t[n]),e}),{})}(t,e)}));function Ft(t){return null==t?[]:function(t,e){return K(e,(function(e){return t[e]}))}(t,It(t))}function Yt(t){return t}var Xt,Ut=$;function Gt(t,e,n){var r=It(e),o=Y(e,r);null!=n||kt(e)&&(o.length||!r.length)||(n=e,e=t,t=this,o=Y(e,It(e)));var a=!(kt(n)&&"chain"in n&&!n.chain),i=Rt(t);return H(o,(function(n){var r=e[n];t[n]=r,i&&(t.prototype[n]=function(){var e=this.__chain__;if(a||e){var n=t(this.__wrapped__),o=n.__actions__=et(this.__actions__);return o.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,p([this.value()],arguments))})})),t}function Vt(){}z.assignIn=Ht,z.before=mt,z.bind=wt,z.chain=dt,z.compact=function(t){return I(t,Boolean)},z.concat=function(){var t=arguments.length;if(!t)return[];for(var e=Array(t-1),n=arguments[0],r=t;r--;)e[r-1]=arguments[r];return p(_t(n)?et(n):[n],B(e,1))},z.create=function(t,e){var n=E(t);return null==e?n:At(n,e)},z.defaults=Wt,z.defer=Ot,z.delay=jt,z.filter=function(t,e){return I(t,$(e))},z.flatten=ft,z.flattenDeep=function(t){return(null==t?0:t.length)?B(t,1/0):[]},z.iteratee=Ut,z.keys=It,z.map=function(t,e){return K(t,$(e))},z.matches=function(t){return Q(At({},t))},z.mixin=Gt,z.negate=function(t){if("function"!=typeof t)throw new TypeError("Expected a function");return function(){var e=arguments;return!t.apply(this,e)}},z.once=function(t){return mt(2,t)},z.pick=qt,z.slice=function(t,e,n){var r=null==t?0:t.length;return e=null==e?0:+e,n=void 0===n?r:+n,r?tt(t,e,n):[]},z.sortBy=function(t,e){var n=0;return e=$(e),K(K(t,(function(t,r,o){return{value:t,index:n++,criteria:e(t,r,o)}})).sort((function(t,e){return function(t,e){if(t!==e){var n=void 0!==t,r=null===t,o=t==t,a=void 0!==e,i=null===e,u=e==e;if(!i&&t>e||r&&a&&u||!n&&u||!o)return 1;if(!r&&t<e||i&&n&&o||!a&&o||!u)return-1}return 0}(t.criteria,e.criteria)||t.index-e.index})),h("value"))},z.tap=function(t,e){return e(t),t},z.thru=function(t,e){return e(t)},z.toArray=function(t){return Dt(t)?t.length?et(t):[]:Ft(t)},z.values=Ft,z.extend=Ht,Gt(z,z),z.clone=function(t){return kt(t)?_t(t)?et(t):rt(t,R(t)):t},z.escape=function(t){return(t=Nt(t))&&u.test(t)?t.replace(i,g):t},z.every=function(t,e,n){return function(t,e){var n=!0;return H(t,(function(t,r,o){return n=!!e(t,r,o)})),n}(t,$(e=n?void 0:e))},z.find=gt,z.forEach=bt,z.has=function(t,e){return null!=t&&O.call(t,e)},z.head=pt,z.identity=Yt,z.indexOf=ht,z.isArguments=xt,z.isArray=_t,z.isBoolean=function(t){return!0===t||!1===t||zt(t)&&"[object Boolean]"==X(t)},z.isDate=Pt,z.isEmpty=function(t){return Dt(t)&&(_t(t)||Tt(t)||Rt(t.splice)||xt(t))?!t.length:!R(t).length},z.isEqual=function(t,e){return V(t,e)},z.isFinite=function(t){return"number"==typeof t&&P(t)},z.isFunction=Rt,z.isNaN=function(t){return Et(t)&&t!=+t},z.isNull=function(t){return null===t},z.isNumber=Et,z.isObject=kt,z.isRegExp=Ct,z.isString=Tt,z.isUndefined=function(t){return void 0===t},z.last=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0},z.max=function(t){return t&&t.length?W(t,Yt,U):void 0},z.min=function(t){return t&&t.length?W(t,Yt,J):void 0},z.noConflict=function(){return f._===this&&(f._=x),this},z.noop=Vt,z.reduce=vt,z.result=function(t,e,n){var r=null==t?void 0:t[e];return void 0===r&&(r=n),Rt(r)?r.call(t):r},z.size=function(t){return null==t?0:(t=Dt(t)?t:R(t)).length},z.some=function(t,e,n){return nt(t,$(e=n?void 0:e))},z.uniqueId=function(t){var e=++j;return Nt(t)+e},z.each=bt,z.first=pt,Gt(z,(Xt={},F(z,(function(t,e){O.call(z.prototype,e)||(Xt[e]=t)})),Xt),{chain:!1}),z.VERSION="4.17.15",H(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(t){var e=(/^(?:replace|split)$/.test(t)?String.prototype:m)[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|join|replace|shift)$/.test(t);z.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var o=this.value();return e.apply(_t(o)?o:[],t)}return this[n]((function(n){return e.apply(_t(n)?n:[],t)}))}})),z.prototype.toJSON=z.prototype.valueOf=z.prototype.value=function(){return t=this.__wrapped__,vt(this.__actions__,(function(t,e){return e.func.apply(e.thisArg,p([t],e.args))}),t);var t},f._=z,void 0===(o=function(){return z}.call(e,n,e,r))||(r.exports=o)}).call(this)}).call(this,n(9),n(10)(t))},function(t,e,n){"use strict";t.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")},t.exports.Resizable=n(11).default,t.exports.ResizableBox=n(18).default},function(t,e,n){t.exports=n(8).default,t.exports.utils=n(1),t.exports.Responsive=n(19).default,t.exports.Responsive.utils=n(4),t.exports.WidthProvider=n(20).default},function(t,e,n){"use strict";var r=n(16);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";e.__esModule=!0,e.cloneElement=function(t,e){e.style&&t.props.style&&(e.style=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t.props.style,{},e.style));e.className&&t.props.className&&(e.className=t.props.className+" "+e.className);return o.default.cloneElement(t,e)};var r,o=(r=n(2))&&r.__esModule?r:{default:r};function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;var r=i(n(2)),o=i(n(0)),a=i(n(11));function i(t){return t&&t.__esModule?t:{default:t}}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(t){var e,n;function o(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return c(s(e=t.call.apply(t,[this].concat(r))||this),"state",{width:e.props.width,height:e.props.height,propsWidth:e.props.width,propsHeight:e.props.height}),c(s(e),"onResize",(function(t,n){var r=n.size;r.width,r.height;e.props.onResize?(t.persist&&t.persist(),e.setState(r,(function(){return e.props.onResize&&e.props.onResize(t,n)}))):e.setState(r)})),e}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.getDerivedStateFromProps=function(t,e){return e.propsWidth!==t.width||e.propsHeight!==t.height?{width:t.width,height:t.height,propsWidth:t.width,propsHeight:t.height}:null},o.prototype.render=function(){var t=this.props,e=t.handle,n=t.handleSize,o=(t.onResize,t.onResizeStart),i=t.onResizeStop,s=t.draggableOpts,c=t.minConstraints,l=t.maxConstraints,f=t.lockAspectRatio,p=t.axis,h=(t.width,t.height,t.resizeHandles),d=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles"]);return r.default.createElement(a.default,{handle:e,handleSize:n,width:this.state.width,height:this.state.height,onResizeStart:o,onResize:this.onResize,onResizeStop:i,draggableOpts:s,minConstraints:c,maxConstraints:l,lockAspectRatio:f,axis:p,resizeHandles:h},r.default.createElement("div",u({style:{width:this.state.width+"px",height:this.state.height+"px"}},d)))},o}(r.default.Component);e.default=l,c(l,"propTypes",{height:o.default.number,width:o.default.number}),c(l,"defaultProps",{handleSize:[20,20]})},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return D}));var r=n(2),o=n.n(r),a=n(0),i=n.n(a),u=n(3),s=n.n(u),c=n(1),l=n(4),f=n(8);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function d(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?O(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=function(t){return Object.prototype.toString.call(t)};function _(t,e){return Array.isArray(t)?t:t[e]}var D=function(t){function e(){var t,n;b(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return S(O(n=m(this,(t=w(e)).call.apply(t,[this].concat(o)))),"state",n.generateInitialState()),S(O(n),"onLayoutChange",(function(t){n.props.onLayoutChange(t,g({},n.props.layouts,S({},n.state.breakpoint,t)))})),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,t),n=e,a=[{key:"getDerivedStateFromProps",value:function(t,e){if(!s()(t.layouts,e.layouts)){var n=e.breakpoint,r=e.cols;return{layout:Object(l.findOrGenerateResponsiveLayout)(t.layouts,t.breakpoints,n,n,r,t.compactType),layouts:t.layouts}}return null}}],(r=[{key:"generateInitialState",value:function(){var t=this.props,e=t.width,n=t.breakpoints,r=t.layouts,o=t.cols,a=Object(l.getBreakpointFromWidth)(n,e),i=Object(l.getColsFromBreakpoint)(a,o),u=!1===this.props.verticalCompact?null:this.props.compactType;return{layout:Object(l.findOrGenerateResponsiveLayout)(r,n,a,a,i,u),breakpoint:a,cols:i}}},{key:"componentDidUpdate",value:function(t){this.props.width==t.width&&this.props.breakpoint===t.breakpoint&&s()(this.props.breakpoints,t.breakpoints)&&s()(this.props.cols,t.cols)||this.onWidthChange(t)}},{key:"onWidthChange",value:function(t){var e=this.props,n=e.breakpoints,r=e.cols,o=e.layouts,a=e.compactType,i=this.props.breakpoint||Object(l.getBreakpointFromWidth)(this.props.breakpoints,this.props.width),u=this.state.breakpoint,s=Object(l.getColsFromBreakpoint)(i,r),f=g({},o);if(u!==i||t.breakpoints!==n||t.cols!==r){u in f||(f[u]=Object(c.cloneLayout)(this.state.layout));var p=Object(l.findOrGenerateResponsiveLayout)(f,n,i,u,s,a);p=Object(c.synchronizeLayoutWithChildren)(p,this.props.children,s,a),f[i]=p,this.props.onLayoutChange(p,f),this.props.onBreakpointChange(i,s),this.setState({breakpoint:i,layout:p,cols:s})}var h=_(this.props.margin,i),d=_(this.props.containerPadding,i);this.props.onWidthChange(this.props.width,h,s,d)}},{key:"render",value:function(){var t=this.props,e=(t.breakpoint,t.breakpoints,t.cols,t.layouts,t.margin),n=t.containerPadding,r=(t.onBreakpointChange,t.onLayoutChange,t.onWidthChange,d(t,["breakpoint","breakpoints","cols","layouts","margin","containerPadding","onBreakpointChange","onLayoutChange","onWidthChange"]));return o.a.createElement(f.default,h({},r,{margin:_(e,this.state.breakpoint),containerPadding:_(n,this.state.breakpoint),onLayoutChange:this.onLayoutChange,layout:this.state.layout,cols:this.state.cols}))}}])&&v(n.prototype,r),a&&v(n,a),e}(o.a.Component);S(D,"propTypes",{breakpoint:i.a.string,breakpoints:i.a.object,cols:i.a.object,margin:i.a.oneOfType([i.a.array,i.a.object]),containerPadding:i.a.oneOfType([i.a.array,i.a.object]),layouts:function(t,e){if("[object Object]"!==x(t[e]))throw new Error("Layout property must be an object. Received: "+x(t[e]));Object.keys(t[e]).forEach((function(e){if(!(e in t.breakpoints))throw new Error("Each key in layouts must align with a key in breakpoints.");Object(c.validateLayout)(t.layouts[e],"layouts."+e)}))},width:i.a.number.isRequired,onBreakpointChange:i.a.func,onLayoutChange:i.a.func,onWidthChange:i.a.func}),S(D,"defaultProps",{breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},layouts:{},margin:[10,10],containerPadding:{lg:null,md:null,sm:null,xs:null,xxs:null},onBreakpointChange:c.noop,onLayoutChange:c.noop,onWidthChange:c.noop})},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n(2),o=n.n(r),a=n(0),i=n.n(a),u=n(5),s=n.n(u);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?g(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){var e,n;return n=e=function(e){function n(){var t,e;p(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return v(g(e=d(this,(t=y(n)).call.apply(t,[this].concat(o)))),"state",{width:1280}),v(g(e),"mounted",!1),v(g(e),"onWindowResize",(function(){if(e.mounted){var t=s.a.findDOMNode(g(e));t instanceof HTMLElement&&e.setState({width:t.offsetWidth})}})),e}var r,a,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(n,e),r=n,(a=[{key:"componentDidMount",value:function(){this.mounted=!0,window.addEventListener("resize",this.onWindowResize),this.onWindowResize()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,window.removeEventListener("resize",this.onWindowResize)}},{key:"render",value:function(){var e=this.props,n=e.measureBeforeMount,r=f(e,["measureBeforeMount"]);return n&&!this.mounted?o.a.createElement("div",{className:this.props.className,style:this.props.style}):o.a.createElement(t,l({},r,this.state))}}])&&h(r.prototype,a),i&&h(r,i),n}(o.a.Component),v(e,"defaultProps",{measureBeforeMount:!1}),v(e,"propTypes",{measureBeforeMount:i.a.bool}),n}}])}));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// End Types
// https://stackoverflow.com/questions/37065663/array-of-object-deep-comparison-with-lodash
var isArrayEqual = function isArrayEqual(x, y) {
  return (0, _core.default)(x)
    .xorWith(y, _lodash.default)
    .isEmpty();
};

var compactType = function compactType(
  props
  /*: Props*/
) /*: CompactType*/
{
  var _ref = props || {},
    verticalCompact = _ref.verticalCompact,
    compactType = _ref.compactType;

  return verticalCompact === false ? null : compactType;
};

var layoutClassName = "react-grid-layout";
var isFirefox = false; // Try...catch will protect from navigator not existing (e.g. node) or a bad implementation of navigator

try {
  isFirefox = /firefox/i.test(navigator.userAgent);
} catch (e) {}
/* Ignore */

/**
 * A reactive, fluid grid layout with draggable, resizable components.
 */


var ReactGridLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactGridLayout, _React$Component);

  // TODO publish internal ReactClass displayName transform
  // Refactored to another module to make way for preval
  function ReactGridLayout(props
  /*: Props*/
  , context
  /*: any*/
  )
  /*: void*/
  {
    var _this;

    _classCallCheck(this, ReactGridLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactGridLayout).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeDrag: null,
      layout: (0, _utils.synchronizeLayoutWithChildren)(_this.props.layout, _this.props.children, _this.props.cols, // Legacy support for verticalCompact: false
      (0, _utils.compactType)(_this.props)),
      mounted: false,
      oldDragItem: null,
      oldLayout: null,
      oldResizeItem: null,
      droppingDOMNode: null,
      children: []
    });

    _defineProperty(_assertThisInitialized(_this), "dragEnterCounter", 0);

    _defineProperty(_assertThisInitialized(_this), "onDragOver", function (e
    /*: DragOverEvent*/
    ) {
      // we should ignore events from layout's children in Firefox
      // to avoid unpredictable jumping of a dropping placeholder
      // FIXME remove this hack
      if (isFirefox && e.nativeEvent.target.className.indexOf(layoutClassName) === -1) {
        return false;
      }

      var _this$props = _this.props,
          droppingItem = _this$props.droppingItem,
          margin = _this$props.margin,
          cols = _this$props.cols,
          rowHeight = _this$props.rowHeight,
          maxRows = _this$props.maxRows,
          width = _this$props.width,
          containerPadding = _this$props.containerPadding;
      var layout = _this.state.layout; // This is relative to the DOM element that this event fired for.

      var _e$nativeEvent = e.nativeEvent,
          layerX = _e$nativeEvent.layerX,
          layerY = _e$nativeEvent.layerY;
      var droppingPosition = {
        left: layerX,
        top: layerY,
        e: e
      };

      if (!_this.state.droppingDOMNode) {
        var positionParams
        /*: PositionParams*/
        = {
          cols: cols,
          margin: margin,
          maxRows: maxRows,
          rowHeight: rowHeight,
          containerWidth: width,
          containerPadding: containerPadding || margin
        };
        var calculatedPosition = (0, _calculateUtils.calcXY)(positionParams, layerY, layerX, droppingItem.w, droppingItem.h);

        _this.setState({
          droppingDOMNode: _react.default.createElement("div", {
            key: droppingItem.i
          }),
          droppingPosition: droppingPosition,
          layout: [].concat(_toConsumableArray(layout), [_objectSpread({}, droppingItem, {
            x: calculatedPosition.x,
            y: calculatedPosition.y,
            static: false,
            isDraggable: true
          })])
        });
      } else if (_this.state.droppingPosition) {
        var _this$state$droppingP = _this.state.droppingPosition,
            left = _this$state$droppingP.left,
            top = _this$state$droppingP.top;
        var shouldUpdatePosition = left != layerX || top != layerY;

        if (shouldUpdatePosition) {
          _this.setState({
            droppingPosition: droppingPosition
          });
        }
      }

      e.stopPropagation();
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "removeDroppingPlaceholder", function () {
      var _this$props2 = _this.props,
          droppingItem = _this$props2.droppingItem,
          cols = _this$props2.cols;
      var layout = _this.state.layout;
      var newLayout = (0, _utils.compact)(layout.filter(function (l) {
        return l.i !== droppingItem.i;
      }), (0, _utils.compactType)(_this.props), cols);

      _this.setState({
        layout: newLayout,
        droppingDOMNode: null,
        activeDrag: null,
        droppingPosition: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDragLeave", function () {
      _this.dragEnterCounter--; // onDragLeave can be triggered on each layout's child.
      // But we know that count of dragEnter and dragLeave events
      // will be balanced after leaving the layout's container
      // so we can increase and decrease count of dragEnter and
      // when it'll be equal to 0 we'll remove the placeholder

      if (_this.dragEnterCounter === 0) {
        _this.removeDroppingPlaceholder();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDragEnter", function () {
      _this.dragEnterCounter++;
    });

    _defineProperty(_assertThisInitialized(_this), "onDrop", function (e
    /*: Event*/
    ) {
      var droppingItem = _this.props.droppingItem;
      var layout = _this.state.layout;

      var _ref = layout.find(function (l) {
        return l.i === droppingItem.i;
      }) || {},
          x = _ref.x,
          y = _ref.y,
          w = _ref.w,
          h = _ref.h; // reset gragEnter counter on drop


      _this.dragEnterCounter = 0;

    _createClass(
      ReactGridLayout,
      [
        {
          key: "componentDidMount",
          value: function componentDidMount() {
            this.setState({
              mounted: true
            }); // Possibly call back with layout on mount. This should be done after correcting the layout width
            // to ensure we don't rerender with the wrong width.

            this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
          }
        },
        {
          key: "componentDidUpdate",
          value: function componentDidUpdate(
            prevProps,
            /*: Props*/
            prevState
            /*: State*/
          ) {
            if (!this.state.activeDrag) {
              var newLayout = this.state.layout;
              var oldLayout = prevState.layout;
              this.onLayoutMaybeChanged(newLayout, oldLayout);
            }
          }
          /**
           * Calculates a pixel value for the container.
           * @return {String} Container height in pixels.
           */
        },
        {
          key: "containerHeight",
          value: function containerHeight() {
            if (!this.props.autoSize) return;
            var nbRow = (0, _utils.bottom)(this.state.layout);
            var containerPaddingY = this.props.containerPadding
              ? this.props.containerPadding[1]
              : this.props.margin[1];
            return (
              nbRow * this.props.rowHeight +
              (nbRow - 1) * this.props.margin[1] +
              containerPaddingY * 2 +
              "px"
            );
          }
          /**
           * When dragging starts
           * @param {String} i Id of the child
           * @param {Number} x X position of the move
           * @param {Number} y Y position of the move
           * @param {Event} e The mousedown event
           * @param {Element} node The current dragging DOM element
           */
        },
        {
          key: "onDragStart",
          value: function onDragStart(
            i,
            /*: string*/
            x,
            /*: number*/
            y,
            /*: number*/
            _ref3
          ) {
            var e = _ref3.e,
              node = _ref3.node;
            var layout = this.state.layout;
            var l = (0, _utils.getLayoutItem)(layout, i);
            if (!l) return;
            this.setState({
              oldDragItem: (0, _utils.cloneLayoutItem)(l),
              oldLayout: this.state.layout
            });
            return this.props.onDragStart(layout, l, l, null, e, node);
          }
          /**
           * Each drag movement create a new dragelement and move the element to the dragged location
           * @param {String} i Id of the child
           * @param {Number} x X position of the move
           * @param {Number} y Y position of the move
           * @param {Event} e The mousedown event
           * @param {Element} node The current dragging DOM element
           */
        },
        {
          key: "onDrag",
          value: function onDrag(
            i,
            /*: string*/
            x,
            /*: number*/
            y,
            /*: number*/
            _ref4
          ) {
            var e = _ref4.e,
              node = _ref4.node;
            var oldDragItem = this.state.oldDragItem;
            var layout = this.state.layout;
            var cols = this.props.cols;
            var l = (0, _utils.getLayoutItem)(layout, i);
            if (!l) return; // Create placeholder (display only)

            var placeholder = {
              w: l.w,
              h: l.h,
              x: l.x,
              y: l.y,
              placeholder: true,
              i: i
            }; // Move the element to the dragged location.

            var isUserAction = true;
            layout = (0, _utils.moveElement)(
              layout,
              l,
              x,
              y,
              isUserAction,
              this.props.preventCollision,
              compactType(this.props),
              cols
            );
            this.props.onDrag(layout, oldDragItem, l, placeholder, e, node);
            this.setState({
              layout: (0, _utils.compact)(
                layout,
                compactType(this.props),
                cols
              ),
              activeDrag: placeholder
            });
          }
          /**
           * When dragging stops, figure out which position the element is closest to and update its x and y.
           * @param  {String} i Index of the child.
           * @param {Number} x X position of the move
           * @param {Number} y Y position of the move
           * @param {Event} e The mousedown event
           * @param {Element} node The current dragging DOM element
           */
        },
        {
          key: "onDragStop",
          value: function onDragStop(
            i,
            /*: string*/
            x,
            /*: number*/
            y,
            /*: number*/
            _ref5
          ) {
            var e = _ref5.e,
              node = _ref5.node;
            if (!this.state.activeDrag) return;
            var oldDragItem = this.state.oldDragItem;
            var layout = this.state.layout;
            var _this$props3 = this.props,
              cols = _this$props3.cols,
              preventCollision = _this$props3.preventCollision;
            var l = (0, _utils.getLayoutItem)(layout, i);
            if (!l) return; // Move the element here

            var isUserAction = true;
            layout = (0, _utils.moveElement)(
              layout,
              l,
              x,
              y,
              isUserAction,
              preventCollision,
              compactType(this.props),
              cols
            );
            this.props.onDragStop(layout, oldDragItem, l, null, e, node); // Set state

            var newLayout = (0, _utils.compact)(
              layout,
              compactType(this.props),
              cols
            );
            var oldLayout = this.state.oldLayout;
            this.setState({
              activeDrag: null,
              layout: newLayout,
              oldDragItem: null,
              oldLayout: null
            });
            this.onLayoutMaybeChanged(newLayout, oldLayout);
          }
        },
        {
          key: "onLayoutMaybeChanged",
          value: function onLayoutMaybeChanged(
            newLayout,
            /*: Layout*/
            oldLayout
            /*: ?Layout*/
          ) {
            if (!oldLayout) oldLayout = this.state.layout;

            if (!isArrayEqual(oldLayout, newLayout)) {
              this.props.onLayoutChange(newLayout);
            }
          }
        },
        {
          key: "onResizeStart",
          value: function onResizeStart(
            i,
            /*: string*/
            w,
            /*: number*/
            h,
            /*: number*/
            _ref6
          ) {
            var e = _ref6.e,
              node = _ref6.node;
            var layout = this.state.layout;
            var l = (0, _utils.getLayoutItem)(layout, i);
            if (!l) return;
            this.setState({
              oldResizeItem: (0, _utils.cloneLayoutItem)(l),
              oldLayout: this.state.layout
            });
            this.props.onResizeStart(layout, l, l, null, e, node);
          }
        },
        {
          key: "onResize",
          value: function onResize(
            i,
            /*: string*/
            w,
            /*: number*/
            h,
            /*: number*/
            _ref7
          ) {
            var e = _ref7.e,
              node = _ref7.node;
            var _this$state = this.state,
              layout = _this$state.layout,
              oldResizeItem = _this$state.oldResizeItem;
            var _this$props4 = this.props,
              cols = _this$props4.cols,
              preventCollision = _this$props4.preventCollision;
            var l =
              /*: ?LayoutItem*/
              (0, _utils.getLayoutItem)(layout, i);
            if (!l) return; // Something like quad tree should be used
            // to find collisions faster

            var hasCollisions;

            if (preventCollision) {
              var collisions = (0, _utils.getAllCollisions)(
                layout,
                _objectSpread({}, l, {
                  w: w,
                  h: h
                })
              ).filter(function(layoutItem) {
                return layoutItem.i !== l.i;
              });
              hasCollisions = collisions.length > 0; // If we're colliding, we need adjust the placeholder.

              if (hasCollisions) {
                // adjust w && h to maximum allowed space
                var leastX = Infinity,
                  leastY = Infinity;
                collisions.forEach(function(layoutItem) {
                  if (layoutItem.x > l.x)
                    leastX = Math.min(leastX, layoutItem.x);
                  if (layoutItem.y > l.y)
                    leastY = Math.min(leastY, layoutItem.y);
                });
                if (Number.isFinite(leastX)) l.w = leastX - l.x;
                if (Number.isFinite(leastY)) l.h = leastY - l.y;
              }
            }

            if (!hasCollisions) {
              // Set new width and height.
              l.w = w;
              l.h = h;
            } // Create placeholder element (display only)

            var placeholder = {
              w: l.w,
              h: l.h,
              x: l.x,
              y: l.y,
              static: true,
              i: i
            };
            this.props.onResize(layout, oldResizeItem, l, placeholder, e, node); // Re-compact the layout and set the drag placeholder.

            this.setState({
              layout: (0, _utils.compact)(
                layout,
                compactType(this.props),
                cols
              ),
              activeDrag: placeholder
            });
          }
        },
        {
          key: "onResizeStop",
          value: function onResizeStop(
            i,
            /*: string*/
            w,
            /*: number*/
            h,
            /*: number*/
            _ref8
          ) {
            var e = _ref8.e,
              node = _ref8.node;
            var _this$state2 = this.state,
              layout = _this$state2.layout,
              oldResizeItem = _this$state2.oldResizeItem;
            var cols = this.props.cols;
            var l = (0, _utils.getLayoutItem)(layout, i);
            this.props.onResizeStop(layout, oldResizeItem, l, null, e, node); // Set state

            var newLayout = (0, _utils.compact)(
              layout,
              compactType(this.props),
              cols
            );
            var oldLayout = this.state.oldLayout;
            this.setState({
              activeDrag: null,
              layout: newLayout,
              oldResizeItem: null,
              oldLayout: null
            });
            this.onLayoutMaybeChanged(newLayout, oldLayout);
          }
          /**
           * Create a placeholder object.
           * @return {Element} Placeholder div.
           */
        },
        {
          key: "placeholder",
          value: function placeholder() /*: ?ReactElement<any>*/
          {
            var activeDrag = this.state.activeDrag;
            if (!activeDrag) return null;
            var _this$props5 = this.props,
              width = _this$props5.width,
              cols = _this$props5.cols,
              margin = _this$props5.margin,
              containerPadding = _this$props5.containerPadding,
              rowHeight = _this$props5.rowHeight,
              maxRows = _this$props5.maxRows,
              useCSSTransforms = _this$props5.useCSSTransforms,
              transformScale = _this$props5.transformScale; // {...this.state.activeDrag} is pretty slow, actually

            return _react.default.createElement(
              _GridItem.default,
              {
                w: activeDrag.w,
                h: activeDrag.h,
                x: activeDrag.x,
                y: activeDrag.y,
                i: activeDrag.i,
                className: "react-grid-placeholder",
                containerWidth: width,
                cols: cols,
                margin: margin,
                containerPadding: containerPadding || margin,
                maxRows: maxRows,
                rowHeight: rowHeight,
                isDraggable: false,
                isResizable: false,
                useCSSTransforms: useCSSTransforms,
                transformScale: transformScale
              },
              _react.default.createElement("div", null)
            );
          }
          /**
           * Given a grid item, set its style attributes & surround in a <Draggable>.
           * @param  {Element} child React element.
           * @return {Element}       Element wrapped in draggable and properly placed.
           */
        },
        {
          key: "processGridItem",
          value: function processGridItem(
            child,
            /*: ReactElement<any>*/
            isDroppingItem
            /*: boolean*/
          ) /*: ?ReactElement<any>*/
          {
            if (!child || !child.key) return;
            var l = (0, _utils.getLayoutItem)(
              this.state.layout,
              String(child.key)
            );
            if (!l) return null;
            var _this$props6 = this.props,
              width = _this$props6.width,
              cols = _this$props6.cols,
              margin = _this$props6.margin,
              containerPadding = _this$props6.containerPadding,
              rowHeight = _this$props6.rowHeight,
              maxRows = _this$props6.maxRows,
              isDraggable = _this$props6.isDraggable,
              isResizable = _this$props6.isResizable,
              useCSSTransforms = _this$props6.useCSSTransforms,
              transformScale = _this$props6.transformScale,
              draggableCancel = _this$props6.draggableCancel,
              draggableHandle = _this$props6.draggableHandle;
            var _this$state3 = this.state,
              mounted = _this$state3.mounted,
              droppingPosition = _this$state3.droppingPosition; // Determine user manipulations possible.
            // If an item is static, it can't be manipulated by default.
            // Any properties defined directly on the grid item will take precedence.

            var draggable =
              typeof l.isDraggable === "boolean"
                ? l.isDraggable
                : !l.static && isDraggable;
            var resizable =
              typeof l.isResizable === "boolean"
                ? l.isResizable
                : !l.static && isResizable;
            return _react.default.createElement(
              _GridItem.default,
              {
                containerWidth: width,
                cols: cols,
                margin: margin,
                containerPadding: containerPadding || margin,
                maxRows: maxRows,
                rowHeight: rowHeight,
                cancel: draggableCancel,
                handle: draggableHandle,
                onDragStop: this.onDragStop,
                onDragStart: this.onDragStart,
                onDrag: this.onDrag,
                onResizeStart: this.onResizeStart,
                onResize: this.onResize,
                onResizeStop: this.onResizeStop,
                isDraggable: draggable,
                isResizable: resizable,
                useCSSTransforms: useCSSTransforms && mounted,
                usePercentages: !mounted,
                transformScale: transformScale,
                w: l.w,
                h: l.h,
                x: l.x,
                y: l.y,
                i: l.i,
                minH: l.minH,
                minW: l.minW,
                maxH: l.maxH,
                maxW: l.maxW,
                static: l.static,
                droppingPosition: isDroppingItem ? droppingPosition : undefined
              },
              child
            );
          } // Called while dragging an element. Part of browser native drag/drop API.
          // Native event target might be the layout itself, or an element within the layout.
        },
        {
          key: "render",
          value: function render() {
            var _this2 = this;

            var _this$props7 = this.props,
              className = _this$props7.className,
              style = _this$props7.style,
              isDroppable = _this$props7.isDroppable;
            var mergedClassName = (0, _classnames.default)(
              layoutClassName,
              className
            );

            var mergedStyle = _objectSpread(
              {
                height: this.containerHeight()
              },
              style
            );

            return _react.default.createElement(
              "div",
              {
                className: mergedClassName,
                style: mergedStyle,
                onDrop: isDroppable ? this.onDrop : _utils.noop,
                onDragLeave: isDroppable ? this.onDragLeave : _utils.noop,
                onDragEnter: isDroppable ? this.onDragEnter : _utils.noop,
                onDragOver: isDroppable ? this.onDragOver : _utils.noop
              },
              _react.default.Children.map(this.props.children, function(child) {
                return _this2.processGridItem(child);
              }),
              isDroppable &&
                this.state.droppingDOMNode &&
                this.processGridItem(this.state.droppingDOMNode, true),
              this.placeholder()
            );
          }
        }
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(
            nextProps,
            /*: Props*/
            prevState
            /*: State*/
          ) {
            var newLayoutBase;

            if (prevState.activeDrag) {
              return null;
            } // Legacy support for compactType
            // Allow parent to set layout directly.

            if (
              !(0, _lodash.default)(nextProps.layout, prevState.propsLayout) ||
              nextProps.compactType !== prevState.compactType
            ) {
              newLayoutBase = nextProps.layout;
            } else if (
              !(0, _utils.childrenEqual)(nextProps.children, prevState.children)
            ) {
              // If children change, also regenerate the layout. Use our state
              // as the base in case because it may be more up to date than
              // what is in props.
              newLayoutBase = prevState.layout;
            } // We need to regenerate the layout.

            if (newLayoutBase) {
              var newLayout = (0, _utils.synchronizeLayoutWithChildren)(
                newLayoutBase,
                nextProps.children,
                nextProps.cols,
                compactType(nextProps)
              );
              return {
                layout: newLayout,
                // We need to save these props to state for using
                // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
                compactType: nextProps.compactType,
                children: nextProps.children,
                propsLayout: nextProps.layout
              };
            }

            return null;
          }
        }
      ]
    );

      _this.props.onDrop({
        x: x,
        y: y,
        w: w,
        h: h,
        e: e
      });
    });

    (0, _utils.autoBindHandlers)(_assertThisInitialized(_this), ["onDragStart", "onDrag", "onDragStop", "onResizeStart", "onResize", "onResizeStop"]);
    return _this;
  }

  _createClass(ReactGridLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        mounted: true
      }); // Possibly call back with layout on mount. This should be done after correcting the layout width
      // to ensure we don't rerender with the wrong width.

      this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps
    /*: Props*/
    , nextState
    /*: State*/
    ) {
      return (// NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== nextProps.children || !(0, _utils.fastRGLPropsEqual)(this.props, nextProps, _lodash.isEqual) || this.state.activeDrag !== nextState.activeDrag || this.state.droppingPosition !== nextState.droppingPosition
      );
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps
    /*: Props*/
    , prevState
    /*: State*/
    ) {
      if (!this.state.activeDrag) {
        var newLayout = this.state.layout;
        var oldLayout = prevState.layout;
        this.onLayoutMaybeChanged(newLayout, oldLayout);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */

  }, {
    key: "containerHeight",
    value: function containerHeight() {
      if (!this.props.autoSize) return;
      var nbRow = (0, _utils.bottom)(this.state.layout);
      var containerPaddingY = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return nbRow * this.props.rowHeight + (nbRow - 1) * this.props.margin[1] + containerPaddingY * 2 + "px";
    }
    /**
     * When dragging starts
     * @param {String} i Id of the child
     * @param {Number} x X position of the move
     * @param {Number} y Y position of the move
     * @param {Event} e The mousedown event
     * @param {Element} node The current dragging DOM element
     */

  }, {
    key: "onDragStart",
    value: function onDragStart(i
    /*: string*/
    , x
    /*: number*/
    , y
    /*: number*/
    , _ref2) {
      var e = _ref2.e,
          node = _ref2.node;
      var layout = this.state.layout;
      var l = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return;
      this.setState({
        oldDragItem: (0, _utils.cloneLayoutItem)(l),
        oldLayout: this.state.layout
      });
      return this.props.onDragStart(layout, l, l, null, e, node);
    }
    /**
     * Each drag movement create a new dragelement and move the element to the dragged location
     * @param {String} i Id of the child
     * @param {Number} x X position of the move
     * @param {Number} y Y position of the move
     * @param {Event} e The mousedown event
     * @param {Element} node The current dragging DOM element
     */

  }, {
    key: "onDrag",
    value: function onDrag(i
    /*: string*/
    , x
    /*: number*/
    , y
    /*: number*/
    , _ref3) {
      var e = _ref3.e,
          node = _ref3.node;
      var oldDragItem = this.state.oldDragItem;
      var layout = this.state.layout;
      var cols = this.props.cols;
      var l = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return; // Create placeholder (display only)

      var placeholder = {
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        placeholder: true,
        i: i
      }; // Move the element to the dragged location.

      var isUserAction = true;
      layout = (0, _utils.moveElement)(layout, l, x, y, isUserAction, this.props.preventCollision, (0, _utils.compactType)(this.props), cols);
      this.props.onDrag(layout, oldDragItem, l, placeholder, e, node);
      this.setState({
        layout: (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols),
        activeDrag: placeholder
      });
    }
    /**
     * When dragging stops, figure out which position the element is closest to and update its x and y.
     * @param  {String} i Index of the child.
     * @param {Number} x X position of the move
     * @param {Number} y Y position of the move
     * @param {Event} e The mousedown event
     * @param {Element} node The current dragging DOM element
     */

  }, {
    key: "onDragStop",
    value: function onDragStop(i
    /*: string*/
    , x
    /*: number*/
    , y
    /*: number*/
    , _ref4) {
      var e = _ref4.e,
          node = _ref4.node;
      if (!this.state.activeDrag) return;
      var oldDragItem = this.state.oldDragItem;
      var layout = this.state.layout;
      var _this$props3 = this.props,
          cols = _this$props3.cols,
          preventCollision = _this$props3.preventCollision;
      var l = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return; // Move the element here

      var isUserAction = true;
      layout = (0, _utils.moveElement)(layout, l, x, y, isUserAction, preventCollision, (0, _utils.compactType)(this.props), cols);
      this.props.onDragStop(layout, oldDragItem, l, null, e, node); // Set state

      var newLayout = (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols);
      var oldLayout = this.state.oldLayout;
      this.setState({
        activeDrag: null,
        layout: newLayout,
        oldDragItem: null,
        oldLayout: null
      });
      this.onLayoutMaybeChanged(newLayout, oldLayout);
    }
  }, {
    key: "onLayoutMaybeChanged",
    value: function onLayoutMaybeChanged(newLayout
    /*: Layout*/
    , oldLayout
    /*: ?Layout*/
    ) {
      if (!oldLayout) oldLayout = this.state.layout;

      if (!isArrayEqual(oldLayout, newLayout)) {
        this.props.onLayoutChange(newLayout);
      }
    }
  }, {
    key: "onResizeStart",
    value: function onResizeStart(i
    /*: string*/
    , w
    /*: number*/
    , h
    /*: number*/
    , _ref5) {
      var e = _ref5.e,
          node = _ref5.node;
      var layout = this.state.layout;
      var l = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return;
      this.setState({
        oldResizeItem: (0, _utils.cloneLayoutItem)(l),
        oldLayout: this.state.layout
      });
      this.props.onResizeStart(layout, l, l, null, e, node);
    }
  }, {
    key: "onResize",
    value: function onResize(i
    /*: string*/
    , w
    /*: number*/
    , h
    /*: number*/
    , _ref6) {
      var e = _ref6.e,
          node = _ref6.node;
      var _this$state = this.state,
          layout = _this$state.layout,
          oldResizeItem = _this$state.oldResizeItem;
      var _this$props4 = this.props,
          cols = _this$props4.cols,
          preventCollision = _this$props4.preventCollision;
      var l
      /*: ?LayoutItem*/
      = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return; // Something like quad tree should be used
      // to find collisions faster

      var hasCollisions;

      if (preventCollision) {
        var collisions = (0, _utils.getAllCollisions)(layout, _objectSpread({}, l, {
          w: w,
          h: h
        })).filter(function (layoutItem) {
          return layoutItem.i !== l.i;
        });
        hasCollisions = collisions.length > 0; // If we're colliding, we need adjust the placeholder.

        if (hasCollisions) {
          // adjust w && h to maximum allowed space
          var leastX = Infinity,
              leastY = Infinity;
          collisions.forEach(function (layoutItem) {
            if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x);
            if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y);
          });
          if (Number.isFinite(leastX)) l.w = leastX - l.x;
          if (Number.isFinite(leastY)) l.h = leastY - l.y;
        }
      }

      if (!hasCollisions) {
        // Set new width and height.
        l.w = w;
        l.h = h;
      } // Create placeholder element (display only)


      var placeholder = {
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        static: true,
        i: i
      };
      this.props.onResize(layout, oldResizeItem, l, placeholder, e, node); // Re-compact the layout and set the drag placeholder.

      this.setState({
        layout: (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols),
        activeDrag: placeholder
      });
    }
  }, {
    key: "onResizeStop",
    value: function onResizeStop(i
    /*: string*/
    , w
    /*: number*/
    , h
    /*: number*/
    , _ref7) {
      var e = _ref7.e,
          node = _ref7.node;
      var _this$state2 = this.state,
          layout = _this$state2.layout,
          oldResizeItem = _this$state2.oldResizeItem;
      var cols = this.props.cols;
      var l = (0, _utils.getLayoutItem)(layout, i);
      this.props.onResizeStop(layout, oldResizeItem, l, null, e, node); // Set state

      var newLayout = (0, _utils.compact)(layout, (0, _utils.compactType)(this.props), cols);
      var oldLayout = this.state.oldLayout;
      this.setState({
        activeDrag: null,
        layout: newLayout,
        oldResizeItem: null,
        oldLayout: null
      });
      this.onLayoutMaybeChanged(newLayout, oldLayout);
    }
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */

  }, {
    key: "placeholder",
    value: function placeholder()
    /*: ?ReactElement<any>*/
    {
      var activeDrag = this.state.activeDrag;
      if (!activeDrag) return null;
      var _this$props5 = this.props,
          width = _this$props5.width,
          cols = _this$props5.cols,
          margin = _this$props5.margin,
          containerPadding = _this$props5.containerPadding,
          rowHeight = _this$props5.rowHeight,
          maxRows = _this$props5.maxRows,
          useCSSTransforms = _this$props5.useCSSTransforms,
          transformScale = _this$props5.transformScale; // {...this.state.activeDrag} is pretty slow, actually

      return _react.default.createElement(_GridItem.default, {
        w: activeDrag.w,
        h: activeDrag.h,
        x: activeDrag.x,
        y: activeDrag.y,
        i: activeDrag.i,
        className: "react-grid-placeholder",
        containerWidth: width,
        cols: cols,
        margin: margin,
        containerPadding: containerPadding || margin,
        maxRows: maxRows,
        rowHeight: rowHeight,
        isDraggable: false,
        isResizable: false,
        useCSSTransforms: useCSSTransforms,
        transformScale: transformScale
      }, _react.default.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */

  }, {
    key: "processGridItem",
    value: function processGridItem(child
    /*: ReactElement<any>*/
    , isDroppingItem
    /*: boolean*/
    )
    /*: ?ReactElement<any>*/
    {
      if (!child || !child.key) return;
      var l = (0, _utils.getLayoutItem)(this.state.layout, String(child.key));
      if (!l) return null;
      var _this$props6 = this.props,
          width = _this$props6.width,
          cols = _this$props6.cols,
          margin = _this$props6.margin,
          containerPadding = _this$props6.containerPadding,
          rowHeight = _this$props6.rowHeight,
          maxRows = _this$props6.maxRows,
          isDraggable = _this$props6.isDraggable,
          isResizable = _this$props6.isResizable,
          useCSSTransforms = _this$props6.useCSSTransforms,
          transformScale = _this$props6.transformScale,
          draggableCancel = _this$props6.draggableCancel,
          draggableHandle = _this$props6.draggableHandle;
      var _this$state3 = this.state,
          mounted = _this$state3.mounted,
          droppingPosition = _this$state3.droppingPosition; // Determine user manipulations possible.
      // If an item is static, it can't be manipulated by default.
      // Any properties defined directly on the grid item will take precedence.

      var draggable = typeof l.isDraggable === "boolean" ? l.isDraggable : !l.static && isDraggable;
      var resizable = typeof l.isResizable === "boolean" ? l.isResizable : !l.static && isResizable;
      return _react.default.createElement(_GridItem.default, {
        containerWidth: width,
        cols: cols,
        margin: margin,
        containerPadding: containerPadding || margin,
        maxRows: maxRows,
        rowHeight: rowHeight,
        cancel: draggableCancel,
        handle: draggableHandle,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: draggable,
        isResizable: resizable,
        useCSSTransforms: useCSSTransforms && mounted,
        usePercentages: !mounted,
        transformScale: transformScale,
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        i: l.i,
        minH: l.minH,
        minW: l.minW,
        maxH: l.maxH,
        maxW: l.maxW,
        static: l.static,
        droppingPosition: isDroppingItem ? droppingPosition : undefined
      }, child);
    } // Called while dragging an element. Part of browser native drag/drop API.
    // Native event target might be the layout itself, or an element within the layout.

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props7 = this.props,
          className = _this$props7.className,
          style = _this$props7.style,
          isDroppable = _this$props7.isDroppable;
      var mergedClassName = (0, _classnames.default)(layoutClassName, className);

      var mergedStyle = _objectSpread({
        height: this.containerHeight()
      }, style);

      return _react.default.createElement("div", {
        className: mergedClassName,
        style: mergedStyle,
        onDrop: isDroppable ? this.onDrop : _utils.noop,
        onDragLeave: isDroppable ? this.onDragLeave : _utils.noop,
        onDragEnter: isDroppable ? this.onDragEnter : _utils.noop,
        onDragOver: isDroppable ? this.onDragOver : _utils.noop
      }, _react.default.Children.map(this.props.children, function (child) {
        return _this2.processGridItem(child);
      }), isDroppable && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, true), this.placeholder());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps
    /*: Props*/
    , prevState
    /*: State*/
    ) {
      var newLayoutBase;

      if (prevState.activeDrag) {
        return null;
      } // Legacy support for compactType
      // Allow parent to set layout directly.


      if (!(0, _lodash.isEqual)(nextProps.layout, prevState.propsLayout) || nextProps.compactType !== prevState.compactType) {
        newLayoutBase = nextProps.layout;
      } else if (!(0, _utils.childrenEqual)(nextProps.children, prevState.children)) {
        // If children change, also regenerate the layout. Use our state
        // as the base in case because it may be more up to date than
        // what is in props.
        newLayoutBase = prevState.layout;
      } // We need to regenerate the layout.


      if (newLayoutBase) {
        var newLayout = (0, _utils.synchronizeLayoutWithChildren)(newLayoutBase, nextProps.children, nextProps.cols, (0, _utils.compactType)(nextProps));
        return {
          layout: newLayout,
          // We need to save these props to state for using
          // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
          compactType: nextProps.compactType,
          children: nextProps.children,
          propsLayout: nextProps.layout
        };
      }

      return null;
    }
  }]);

  return ReactGridLayout;
}(_react.default.Component);

exports.default = ReactGridLayout;

_defineProperty(ReactGridLayout, "displayName", "ReactGridLayout");

_defineProperty(ReactGridLayout, "propTypes", _ReactGridLayoutPropTypes.default);

_defineProperty(ReactGridLayout, "defaultProps", {
  autoSize: true,
  cols: 12,
  className: "",
  style: {},
  draggableHandle: "",
  draggableCancel: "",
  containerPadding: null,
  rowHeight: 150,
  maxRows: Infinity,
  // infinite vertical growth
  layout: [],
  margin: [10, 10],
  isDraggable: true,
  isResizable: true,
  isDroppable: false,
  useCSSTransforms: true,
  transformScale: 1,
  verticalCompact: true,
  compactType: "vertical",
  preventCollision: false,
  droppingItem: {
    i: "__dropping-elem__",
    h: 1,
    w: 1
  },
  onLayoutChange: _utils.noop,
  onDragStart: _utils.noop,
  onDrag: _utils.noop,
  onDragStop: _utils.noop,
  onResizeStart: _utils.noop,
  onResize: _utils.noop,
  onResizeStop: _utils.noop,
  onDrop: _utils.noop
});