(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var o=n(0),r=n.n(o),i=n(28),l=n.n(i),a=n(11),s=n.n(a),c=n(53),u=n.n(c),f=n(54),d=n.n(f),p=n(23),h=n.n(p);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,b(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,o["Component"]),n=t,(i=[{key:"render",value:function(){var e=this.props.team;return r.a.createElement("div",{id:e.id},r.a.createElement(l.a,null,r.a.createElement(s.a,{tag:"h2"},e.title),r.a.createElement(u.a,{fill:!1,flush:!1},e.members.map(function(e){return r.a.createElement(d.a,{key:e.name+e.photo.url,basis:"1/4",alignSelf:"start"},r.a.createElement(h.a,{src:e.photo.url}),r.a.createElement(s.a,{tag:"h4",strong:!0},e.name),r.a.createElement(s.a,{tag:"h5"},e.name))}))))}}])&&m(n.prototype,i),a&&m(n,a),t}()},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),l=u(i),a=u(n(1)),s=u(n(3)),c=u(n(88));function u(e){return e&&e.__esModule?e:{default:e}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=u(n(2)).default.IMAGE,p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"render",value:function(){var e,t=this.props,n=t.align,r=t.caption,i=t.className,a=t.full,u=t.mask,p=t.size,h=t.fit,v=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["align","caption","className","full","mask","size","fit"]),m=(0,s.default)(d,(f(e={},d+"--"+p,p),f(e,d+"--"+h,h),f(e,d+"--full",!!h||"boolean"==typeof a&&a),f(e,d+"--full-"+a,"string"==typeof a),f(e,d+"--mask",u),f(e,d+"--align-top",n&&n.top),f(e,d+"--align-bottom",n&&n.bottom),f(e,d+"--align-left",n&&n.left),f(e,d+"--align-right",n&&n.right),e),i),y="string"==typeof r?r:v.alt,b=l.default.createElement("img",o({},v,{className:m})),_=d+"__caption",g=(0,s.default)(_,f({},_+"--"+p,p));return r&&y?l.default.createElement("span",{className:d+"__container"},b,l.default.createElement(c.default,{className:g},y)):b}}]),t}();p.displayName="Image",t.default=p,p.propTypes={align:a.default.shape({bottom:a.default.boolean,left:a.default.boolean,right:a.default.boolean,top:a.default.boolean}),alt:a.default.string,caption:a.default.oneOfType([a.default.bool,a.default.string]),fit:a.default.oneOf(["contain","cover"]),full:a.default.oneOf([!0,"horizontal","vertical",!1]),mask:a.default.bool,size:a.default.oneOf(["small","medium","large","thumb"]),src:a.default.string,title:a.default.string},p.defaultProps={size:"medium"},e.exports=t.default},381:function(e,t,n){__NEXT_REGISTER_PAGE("/index/components/TeamSection",function(){return e.exports=n(122),{page:e.exports.default}})},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),l=w(i),a=w(n(1)),s=n(19),c=w(n(3)),u=w(n(5)),f=w(n(6)),d=w(n(22)),p=w(n(95)),h=w(n(96)),v=w(n(97)),m=w(n(98)),y=w(n(43)),b=w(n(4)),_=n(63),g=w(n(99)),T=w(n(91)),O=w(n(2));function w(e){return e&&e.__esModule?e:{default:e}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=O.default.TILES,k=O.default.TILE,x=k+"--selected",j=k+"--active",P=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o._onLeft=o._onLeft.bind(o),o._onRight=o._onRight.bind(o),o._onScrollHorizontal=o._onScrollHorizontal.bind(o),o._onWheel=o._onWheel.bind(o),o._onResize=o._onResize.bind(o),o._layout=o._layout.bind(o),o._onClick=o._onClick.bind(o),o._fireClick=o._fireClick.bind(o),o._announceTile=o._announceTile.bind(o),o._onPreviousTile=o._onPreviousTile.bind(o),o._onNextTile=o._onNextTile.bind(o),o._onEnter=o._onEnter.bind(o),o.state={activeTile:void 0,mouseActive:!1,overflow:!1,selected:m.default.normalizeIndexes(e.selected)},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.direction,n=e.onMore,o=e.selectable;n&&(this._scroll=v.default.startListeningForScroll(this.moreRef,n)),"row"===t&&(window.addEventListener("resize",this._onResize),document.addEventListener("wheel",this._onWheel,{passive:!0}),this._trackHorizontalScroll(),this._layoutTimer=setTimeout(this._layout,10)),o&&(this._keyboardHandlers={left:this._onPreviousTile,up:this._onPreviousTile,right:this._onNextTile,down:this._onNextTile,enter:this._onEnter,space:this._onEnter},y.default.startListeningToKeyboard(this,this._keyboardHandlers))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.selected&&this.setState({selected:m.default.normalizeIndexes(e.selected)}),this._scroll&&(v.default.stopListeningForScroll(this._scroll),this._scroll=void 0)}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,o=n.direction,r=n.onMore,i=n.selectable;r&&!this._scroll&&(this._scroll=v.default.startListeningForScroll(this.moreRef,r)),"row"===o&&(this._trackHorizontalScroll(),this._layoutTimer=setTimeout(this._layout,10)),i&&(this._keyboardHandlers={left:this._onPreviousTile,up:this._onPreviousTile,right:this._onNextTile,down:this._onNextTile,enter:this._onEnter,space:this._onEnter},y.default.startListeningToKeyboard(this,this._keyboardHandlers))}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.direction,n=e.selectable;(this._scroll&&v.default.stopListeningForScroll(this._scroll),"row"===t)&&(window.removeEventListener("resize",this._onResize),document.removeEventListener("wheel",this._onWheel),this._tracking&&(0,s.findDOMNode)(this.tilesRef).removeEventListener("scroll",this._onScrollHorizontal));n&&y.default.stopListeningToKeyboard(this,this._keyboardHandlers),this._layoutTimer&&clearTimeout(this._layoutTimer)}},{key:"_announceTile",value:function(e){var t=this.context.intl,n=b.default.getMessage(t,"Enter Select"),o=e.length>15?e.substring(0,15)+"...":e;(0,_.announce)(o+" "+n)}},{key:"_onPreviousTile",value:function(e){var t=this;if((0,s.findDOMNode)(this.tilesRef).contains(document.activeElement)){e.preventDefault();var n=this.state.activeTile,o=(0,s.findDOMNode)(this.tilesRef).querySelectorAll("."+k);return o&&o.length>0&&(void 0===n?(o[0].classList.add(j),this.setState({activeTile:0},function(){t._announceTile(o[t.state.activeTile].innerText)})):n-1>=0&&(o[n].classList.remove(j),o[n-1].classList.add(j),this.setState({activeTile:n-1},function(){t._announceTile(o[t.state.activeTile].innerText)}))),!0}}},{key:"_onNextTile",value:function(e){var t=this;if((0,s.findDOMNode)(this.tilesRef).contains(document.activeElement)){e.preventDefault();var n=this.state.activeTile,o=(0,s.findDOMNode)(this.tilesRef).querySelectorAll("."+k);return o&&o.length>0&&(void 0===n?(o[0].classList.add(j),this.setState({activeTile:0},function(){t._announceTile(o[t.state.activeTile].innerText)})):n+1<=o.length-1&&(o[n].classList.remove(j),o[n+1].classList.add(j),this.setState({activeTile:n+1},function(){t._announceTile(o[t.state.activeTile].innerText)}))),!0}}},{key:"_fireClick",value:function(e,t){var n=void 0;try{n=new MouseEvent("click",{bubbles:!0,cancelable:!0,shiftKey:t})}catch(e){(n=document.createEvent("Event")).initEvent("click",!0,!0)}e.dispatchEvent(n)}},{key:"_onEnter",value:function(e){var t=this.state.activeTile,n=this.context.intl;if((0,s.findDOMNode)(this.tilesRef).contains(document.activeElement)&&void 0!==t){var o=(0,s.findDOMNode)(this.tilesRef).querySelectorAll("."+k);this._fireClick(o[t],e.shiftKey),o[t].classList.remove(j);var r=o[t].innerText,i=r.length>15?r.substring(0,15)+"...":r,l=b.default.getMessage(n,"Selected");(0,_.announce)(i+" "+l)}}},{key:"_onLeft",value:function(){var e=(0,s.findDOMNode)(this.tilesRef);h.default.scrollBy(e,"scrollLeft",-e.offsetWidth)}},{key:"_onRight",value:function(){var e=(0,s.findDOMNode)(this.tilesRef);h.default.scrollBy(e,"scrollLeft",e.offsetWidth)}},{key:"_onScrollHorizontal",value:function(){clearTimeout(this._layoutTimer),this._layoutTimer=setTimeout(this._layout,50)}},{key:"_onWheel",value:function(e){Math.abs(e.deltaX)>100?clearInterval(this._scrollTimer):e.deltaX>5?this._onRight():e.deltaX<-5&&this._onLeft()}},{key:"_layout",value:function(){if("row"===this.props.direction){var e=(0,s.findDOMNode)(this.tilesRef),t={overflow:e.scrollWidth>e.offsetWidth+20,overflowStart:e.scrollLeft<=20,overflowEnd:e.scrollLeft>=e.scrollWidth-e.offsetWidth,scrollWidth:e.scrollWidth},n={overflow:this.state.overflow,overflowStart:this.state.overflowStart,overflowEnd:this.state.overflowEnd,scrollWidth:this.state.scrollWidth};JSON.stringify(t)!==JSON.stringify(n)&&this.setState(o({},t));var r=e.getBoundingClientRect(),i=e.querySelectorAll("."+k);Array.from(i).map(function(e,t){var n=e.getBoundingClientRect();n.left+12<r.left||n.right-12>r.right?e.classList.add(k+"--eclipsed"):e.classList.remove(k+"--eclipsed")})}}},{key:"_onResize",value:function(){clearTimeout(this._layoutTimer),this._layoutTimer=setTimeout(this._layout,50)}},{key:"_trackHorizontalScroll",value:function(){this.state.overflow&&!this._tracking&&((0,s.findDOMNode)(this.tilesRef).addEventListener("scroll",this._onScrollHorizontal),this._tracking=!0)}},{key:"_onClick",value:function(e){var t=this.props,n=t.onSelect,o=t.selectable,r=t.selected,i=m.default.onClick(e,{containerElement:(0,s.findDOMNode)(this.tilesRef),childSelector:"."+k,selectedClass:x,multiSelect:"multiple"===o,priorSelectedIndexes:this.state.selected});void 0===r&&this.setState({selected:i}),n&&n(1===i.length?i[0]:i)}},{key:"_renderChild",value:function(e,t){var n=this.props.flush,o=this.state.selected,r=e.props.selected;if(o&&o.indexOf(t)>-1&&(r=!0),e)return e.type&&e.type._tile?l.default.cloneElement(e,{hoverBorder:!n,selected:r}):e}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.a11yTitle,a=n.className,h=n.children,v=n.direction,m=n.fill,y=n.flush,_=n.onBlur,O=n.onFocus,w=n.onMore,x=n.onMouseDown,P=n.onMouseUp,M=n.selectable,N=this.state,C=N.activeTile,L=N.focus,R=N.mouseActive,I=N.overflow,z=N.overflowEnd,B=N.overflowStart,D=this.context.intl,A=(0,c.default)(S,(E(e={},S+"--fill",m),E(e,S+"--flush",y),E(e,S+"--focus",L),E(e,S+"--selectable",M),E(e,S+"--moreable",w),E(e,S+"--overflowed",I),e),a),W=u.default.pick(this.props,Object.keys(f.default.propTypes)),H=void 0;w&&(H=l.default.createElement("div",{ref:function(e){return t.moreRef=e},className:S+"__more"},l.default.createElement(p.default,null)));var K=i.Children.toArray(h).filter(function(e){return e}).map(function(e,n){return t._renderChild(e,n)}),F=void 0;if(M){var q="multiple"===M?"("+b.default.getMessage(D,"Multi Select")+")":"";F={"aria-label":(r||b.default.getMessage(D,"Tiles"))+" "+q+" "+b.default.getMessage(D,"Navigation Help"),tabIndex:"0",onClick:this._onClick,onMouseDown:function(e){t.setState({mouseActive:!0}),x&&x(e)},onMouseUp:function(e){t.setState({mouseActive:!1}),P&&P(e)},onFocus:function(e){!1===R&&t.setState({focus:!0}),O&&O(e)},onBlur:function(e){C&&(0,s.findDOMNode)(t.tilesRef).querySelectorAll("."+k)[C].classList.remove(j);t.setState({focus:!1,activeTile:void 0}),_&&_(e)}}}var X=l.default.createElement(f.default,o({ref:function(e){return t.tilesRef=e}},W,{wrap:!v,direction:v||"row",className:A,focusable:!1},F),K,H);if(I){var G=void 0,J=void 0;if(!B){var U=b.default.getMessage(D,"Previous Tiles");G=l.default.createElement(d.default,{className:S+"__left",icon:l.default.createElement(g.default,null),a11yTitle:U,onClick:this._onLeft})}if(!z){var Q=b.default.getMessage(D,"Next Tiles");J=l.default.createElement(d.default,{className:S+"__right",icon:l.default.createElement(T.default,null),a11yTitle:Q,onClick:this._onRight})}X=l.default.createElement("div",{className:S+"__container"},G,X,J)}return X}}]),t}();P.displayName="Tiles",t.default=P,P.contextTypes={intl:a.default.object},P.propTypes=o({fill:a.default.bool,flush:a.default.bool,onMore:a.default.func,onSelect:a.default.func,selectable:a.default.oneOfType([a.default.bool,a.default.oneOf(["multiple"])]),selected:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)])},f.default.propTypes),P.defaultProps={flush:!0,justify:"start",pad:"small"},e.exports=t.default},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),l=d(i),a=d(n(1)),s=d(n(3)),c=d(n(5)),u=d(n(6)),f=d(n(2));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=f.default.TILE,v=f.default.NAMESPACE,m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"render",value:function(){var e,n=this.props,r=n.children,i=n.className,a=n.onClick,f=n.wide,d=n.status,m=n.hoverStyle,y=n.hoverColorIndex,b=n.hoverBorder,_=n.hoverBorderSize,g=n.selected,T=c.default.omit(this.props,Object.keys(t.propTypes)),O=d?d.toLowerCase():void 0,w=b?_||"large":"small",E=(0,s.default)(h,i,(p(e={},h+"--status-"+O,d),p(e,h+"--selected",g),p(e,h+"--wide",f),p(e,h+"--selectable",a),p(e,""+v+m+("border"==m?w?"-"+w:"-medium":"")+"-hover-color-index-"+y,m),p(e,h+"--hover-border-"+w,w),e)),S=c.default.pick(this.props,Object.keys(u.default.propTypes));return l.default.createElement(u.default,o({},T,S,{className:E}),r)}}]),t}();m.displayName="Tile",t.default=m,m._tile=!0,m.propTypes=o({hoverStyle:a.default.oneOf(["border","background","none"]),hoverColorIndex:a.default.string,hoverBorder:a.default.bool,hoverBorderSize:a.default.oneOf(["small","medium","large"]),selected:a.default.bool,wide:a.default.bool},u.default.propTypes),m.defaultProps={pad:"none",direction:"column",align:"center",hoverStyle:"none",hoverColorIndex:"disabled"},e.exports=t.default},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),l=f(i),a=f(n(1)),s=f(n(3)),c=f(n(2)),u=f(n(4));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=c.default.SPINNING,h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"render",value:function(){var e,t=this.props,n=t.a11yTitle,r=t.className,i=t.small,a=t.size,c=t.responsive,f=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["a11yTitle","className","small","size","responsive"]),h=this.context.intl,v=i?"small":a,m=(0,s.default)(p,(d(e={},p+"--"+v,v),d(e,p+"--responsive",c),e),r);return l.default.createElement("svg",o({},f,{className:m,viewBox:"0 0 48 48",version:"1.1",role:"img","aria-label":n||u.default.getMessage(h,"Spinning")}),l.default.createElement("circle",{cx:"24",cy:"24",r:"21",stroke:"#979797",strokeWidth:"6",fill:"none"}))}}]),t}();h.displayName="Spinning",t.default=h,h.contextTypes={intl:a.default.object},h.defaultProps={responsive:!0},h.propTypes={a11yTitle:a.default.string,className:a.default.string,small:a.default.bool,size:a.default.oneOf(["small","medium","large","xlarge","huge"]),responsive:a.default.bool},e.exports=t.default},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={scrollBy:function(e,t,n,o){var r=this;clearInterval(this._scrollToTimer);var i=e[t],l=i+n,a=1;this._scrollToTimer=setInterval(function(){var n,s=e[t],c=void 0,u=(n=a/25)<.5?2*n*n:(4-2*n)*n-1;c=l>i?Math.min(l,Math.max(s,Math.round(i+(l-i)*u))):Math.max(l,Math.min(s,Math.round(i-(i-l)*u))),e[t]=c,(a+=1)>25&&(clearInterval(r._scrollToTimer),r._scrollToTimer=setTimeout(function(){e[t]=c,o&&o()},200))},8)}},e.exports=t.default},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(25),r=500;function i(e){(e.scrollParents||[]).forEach(function(t){var n=void 0;if(n=t===document?window.innerHeight:t.getBoundingClientRect().bottom,e.onEnd){var o=e.endIndicatorElement.getBoundingClientRect();n&&o.bottom<=n+10&&e.onEnd()}e.onTop&&(e.startIndicatorElement.getBoundingClientRect().bottom>0&&e.onTop())})}t.default={startListeningForScroll:function(e,t,n,l){var a={onEnd:t,endIndicatorElement:e,onTop:l,startIndicatorElement:n,scrollParents:(0,o.findScrollParents)(e||n)};return a._onResize=function(e){clearTimeout(e.scrollTimer),e.scrollTimer=setTimeout(function(){return i(e)},r)}.bind(this,a),a._onScroll=function(e){clearTimeout(e.scrollTimer),e.scrollTimer=setTimeout(function(){return i(e)},r)}.bind(this,a),window.addEventListener("resize",a._onResize),(a.scrollParents||[]).forEach(function(o,r){if(o.addEventListener("scroll",a._onScroll),n){var i=o===document?o.scrollingElement:o,s=n.getBoundingClientRect();i.getBoundingClientRect().height+s.bottom>=i.scrollHeight?a.scrollTimer=setTimeout(l,50):r||(a.scrollTimer=setTimeout(function(){var e=n.getBoundingClientRect();i.scrollTop=e.bottom+10},50))}o!==document&&o!==document.body||e&&e.getBoundingClientRect().top<window.innerHeight&&(a.scrollTimer=setTimeout(t,50))}),a},stopListeningForScroll:function(e){(e.scrollParents||[]).forEach(function(t){clearTimeout(e.scrollTimer),t.removeEventListener("scroll",e._onScroll),window.removeEventListener("resize",e._onResize)}),e.scrollParents=void 0}},e.exports=t.default},98:function(e,t,n){"use strict";function o(e){if(e&&e.containerElement)for(var t=e.containerElement.querySelectorAll("."+e.selectedClass),n=0;n<t.length;n++)t[n].classList.remove(e.selectedClass)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={normalizeIndexes:function(e){return null==e?[]:"number"==typeof e?[e]:e},clearClass:o,getIndexesFromClass:function(e){for(var t=e.containerElement.querySelectorAll(e.childSelector),n=[],o=0;o<t.length;o++)t[o].classList.contains(e.selectedClass)&&n.push(o);return n},setClassFromIndexes:function(e){if(o(e),e&&e.containerElement&&e.selectedIndexes){var t=e.containerElement.querySelectorAll(e.childSelector);e.selectedIndexes.forEach(function(n){t[n]&&t[n].classList.add(e.selectedClass)})}},onClick:function(e,t){for(var n=e.target,o=n.matches||n.matchesElement||n.msMatchesSelector;o&&n&&!o.bind(n,t.childSelector)();)o=(n=n.parentNode).matches||n.matchesElement||n.msMatchesSelector;for(var r=0,i=n.previousSibling;null!=i;)i=i.previousSibling,r+=1;var l=void 0;if(e.ctrlKey||e.metaKey||e.shiftKey){var a=t.priorSelectedIndexes.indexOf(r);if(t.multiSelect)if(l=t.priorSelectedIndexes.slice(0),e.shiftKey){var s=-1;l.forEach(function(e,t){-1===s?s=e:Math.abs(r-e)<Math.abs(r-s)&&(s=e)});for(var c=r;c!==s;)l.push(c),s<r?c-=1:c+=1;a>-1&&l.splice(a,1),window.getSelection().removeAllRanges()}else-1===a?l.push(r):l.splice(a,1);else l=-1!==a&&(e.ctrlKey||e.metaKey)?[]:t.priorSelectedIndexes}else l=[r];return l}},e.exports=t.default},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),l=d(i),a=d(n(1)),s=d(n(3)),c=d(n(2)),u=d(n(4)),f=d(n(5));function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=c.default.CONTROL_ICON,v=c.default.COLOR_INDEX,m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"render",value:function(){var e,n=this.props,r=n.className,i=n.colorIndex,a=this.props,c=a.a11yTitle,d=a.size,m=a.responsive,y=this.context.intl,b=(0,s.default)(h,h+"-link-previous",r,(p(e={},h+"--"+d,d),p(e,h+"--responsive",m),p(e,v+"-"+i,i),e));c=c||u.default.getMessage(y,"link-previous");var _=f.default.omit(this.props,Object.keys(t.propTypes));return l.default.createElement("svg",o({},_,{version:"1.1",viewBox:"0 0 24 24",width:"24px",height:"24px",role:"img",className:b,"aria-label":c}),l.default.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M2,12 L22,12 M13,3 L22,12 L13,21",transform:"matrix(-1 0 0 1 24 0)"}))}}]),t}();m.displayName="Icon",t.default=m,m.contextTypes={intl:a.default.object},m.defaultProps={responsive:!0},m.displayName="LinkPrevious",m.icon=!0,m.propTypes={a11yTitle:a.default.string,colorIndex:a.default.string,size:a.default.oneOf(["xsmall","small","medium","large","xlarge","huge"]),responsive:a.default.bool},e.exports=t.default}},[[381,1,0]]]);