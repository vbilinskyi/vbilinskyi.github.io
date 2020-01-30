(function(global){
    var langs = global._translations || {};
    var newLangs = {c3f894c6:"Войдите, чтобы подписаться",b461620b:"Не потеряйте свои подписки","886e1a84":"И читайте публикации этого источника на главной странице","7b0ac668":"Лента рекомендаций Дзена лучше, когда вы авторизованы","01e89744":"Войдите, чтобы сохранить источник в раздел подписок",c7ef96a4:"Войти"} || {};
    
    for (var key in newLangs) {
        langs[key] = newLangs[key];
    }
    global._translations = langs;
})(this);
(window.webpackPublishersJsonp=window.webpackPublishersJsonp||[]).push([[25],{1012:function(e,t,n){"use strict";function i(e,t){return n=>(n({type:u.adArticlePreferencesLoading}),(0,a.fetchSubscriptionData)(e,t).then(e=>(n({type:u.adArticlePreferencesLoaded,payload:{subscriptionStatus:e}}),e)).catch(()=>{n({type:u.adArticlePreferencesLoadFailed})}))}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchAdArticle=function(e,t){return n=>(n({type:u.adArticleDataLoading}),(0,r.fetchPublicationData)(e,t).then(e=>{const{data:{images:t,publication:{publisherItemId:o,publisherId:r}}}=e;return n(i(o,r)),n((0,l.addImagesFromMap)(t)),(0,s.addImagesToDict)(t),n({type:u.adArticleDataLoaded,payload:{data:e}}),e}).catch(()=>{n({type:u.adArticleDataLoadFailed})}))},t.fetchAdArticlePreferences=i,t.likePublisher=function(e,t=!1,n,i,r){return(0,o.sendLikePublisher)(e,t,n,i,r),{type:u.adArticlePublisherLiked}},t.unlikePublisher=function(e,t=!1,n,i,r){return(0,o.sendUnlikePublisher)(e,t,n,i,r),{type:u.adArticlePublisherUnliked}},t.blockPublisher=function(e,t=!1,n,i,r){return(0,o.sendBlockPublisher)(e,t,n,i,r),{type:u.adArticlePublisherBlocked}},t.unblockPublisher=function(e,t=!1,n,i,r){return(0,o.sendUnblockPublisher)(e,t,n,i,r),{type:u.adArticlePublisherUnblocked}},t.AdArticleActionType=void 0;var o=n(73),r=n(985),a=n(192),l=n(111),s=n(19);let u;t.AdArticleActionType=u,function(e){e.adArticleDataLoading="AD_ARTICLE_DATA_LOADING",e.adArticleDataLoaded="AD_ARTICLE_DATA_LOADED",e.adArticleDataLoadFailed="AD_ARTICLE_DATA_LOAD_FAILED",e.adArticlePreferencesLoading="AD_ARTICLE_PREFERENCES_LOADING",e.adArticlePreferencesLoaded="AD_ARTICLE_PREFERENCES_LOADED",e.adArticlePreferencesLoadFailed="AD_ARTICLE_PREFERENCES_LOAD_FAILED",e.adArticlePublisherLiked="AD_ARTICLE_PUBLISHER_LIKED",e.adArticlePublisherUnliked="AD_ARTICLE_PUBLISHER_UNLIKED",e.adArticlePublisherBlocked="AD_ARTICLE_PUBLISHER_BLOCKED",e.adArticlePublisherUnblocked="AD_ARTICLE_PUBLISHER_UNBLOCKED"}(u||(t.AdArticleActionType=u={}))},1039:function(e,t,n){"use strict";var i=n(3),o=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.SocialLoginPopupContainer=void 0;var r=o(n(2)),a=i(n(0)),l=n(16),s=n(6),u=n(42),c=n(38),d=n(170),p=n(2641),f=n(2648);const m="SOCIAL_LOGIN_POPUP",h=e=>(0,u.getLocalStorage)().get(`${m}_${e}`),b=e=>{(0,u.getLocalStorage)().delete(`${m}_${e}`)};t.SocialLoginPopupContainer=(e=>{const{isMobile:t,isAdArticle:n}=e,i=(0,l.useDispatch)(),{publisher:o,user:v,experiment:y,loginPopupData:g,publication:_,adArticle:P,omittedQueryParams:O}=(0,l.useSelector)(e=>{const{experiments:t,profile:{user:n},publisher:{publisher:i},social:{loginPopupData:o},publication:r,adArticle:a,url:{omittedQueryParams:l}}=e;return{publisher:i,user:n,experiment:t.subscribeLoginPopupMessage,loginPopupData:o,publication:r,adArticle:a,omittedQueryParams:l}},l.shallowEqual),{currentPublication:T,currentPublisher:C}=(0,a.useMemo)(()=>n?n&&P&&P.data?{currentPublication:P.data.data.publication,currentPublisher:P.data.publisher}:{currentPublication:null,currentPublisher:null}:{currentPublication:_,currentPublisher:o},[n,P,_,o]),A=(0,a.useCallback)(e=>T&&C?{place:"login_popup",item_type:"interface_element",item_id:c.InterfaceElementToBulkItemIdMap.subscribePublicationHeader,parent_id:T.itemId,source_type:"publisher",source_id:C.itemId,event:e}:null,[T,C]),E=(0,a.useCallback)(()=>{i((0,d.closeLoginPopup)());const e=A("login_suggest_close");e&&(0,c.sendStatEvent)(e)},[i,A]),M=(0,a.useCallback)(()=>{if(!g)return;const{action:e,objectRecommenderId:t,objectId:n}=g;(0,s.openAuthPage)({socialLoginPopup:`${e}_${t}`},"_blank"),i((0,d.closeLoginPopup)());const o=A("auth_click");o&&(0,c.sendStatEvent)(o),(({objectRecommenderId:e,objectId:t,action:n})=>{(0,u.getLocalStorage)().set(`${m}_${e}`,{action:n,objectId:t},36e5)})({objectRecommenderId:t,objectId:n,action:e})},[g,i,A]),L=(0,a.useCallback)(()=>{const e=A("login_suggest_show");e&&(0,c.sendStatEvent)(e)},[A]);return(0,f.useSocialLoginPopupAction)({dispatch:i,omittedQueryParams:O,getStorageValue:h,removeStorageValue:b,user:v,currentPublisher:C,isAdArticle:n}),!v&&y&&T?(0,r.default)(p.SocialLoginPopup,{loginPopupData:g,onCloseClick:E,experiment:y,onClick:M,onPopupOpen:L,isMobile:t,isPopupOpen:Boolean(g&&T.publisherId===g.objectId)}):null})},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.omit=void 0,t.omit=((e,t)=>{const n=Object.keys(e),i={};for(let o=0;o<n.length;o++){const r=n[o];t.includes(r)||(i[r]=e[r])}return i})},119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MODAL_TRANSITION_DURATION=t.ESC_BUTTON=void 0,t.ESC_BUTTON=27,t.MODAL_TRANSITION_DURATION=200},151:function(e,t,n){"use strict";var i=n(3);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Modal",{enumerable:!0,get:function(){return o.Modal}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"StatefulModal",{enumerable:!0,get:function(){return r.StatefulModal}}),Object.defineProperty(t,"ModalHeader",{enumerable:!0,get:function(){return a.ModalHeader}}),Object.defineProperty(t,"ModalContent",{enumerable:!0,get:function(){return l.ModalContent}}),Object.defineProperty(t,"ModalDivider",{enumerable:!0,get:function(){return s.ModalDivider}}),Object.defineProperty(t,"ModalActions",{enumerable:!0,get:function(){return u.ModalActions}});var o=i(n(372)),r=n(730),a=n(731),l=n(733),s=n(735),u=n(737)},168:function(e,t,n){"use strict";e.exports=n(274)},169:function(e,t,n){"use strict";var i=n(3),o=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.withOpenState=void 0;var r=o(n(14)),a=i(n(0)),l=n(556);t.withOpenState=(e=>{const t=(0,a.forwardRef)((t,n)=>{const{renderTrigger:i,renderContent:o,...l}=t,s=(0,a.useRef)(null),u=(0,a.useCallback)(()=>s.current,[]),[c,d]=(0,a.useState)(!1),p=(0,a.useCallback)(()=>d(!0),[]),f=(0,a.useCallback)(()=>d(!1),[]),m=(0,a.useCallback)(()=>d(e=>!e),[]),h=i({containerRef:s,open:p,close:f,toggle:m,isOpen:c}),b=a.default.createElement(e,(0,r.default)({},l,{ref:n,getTriggerElem:u,close:f,isOpen:c}),o({close:f}));return a.default.createElement(a.default.Fragment,null,h,b)});return t.displayName=(0,l.createHocDisplayName)("WithOpenState",e),(0,a.memo)(t)})},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getScrollbarWidth=void 0;const i=()=>{const e=document.createElement("div");Object.assign(e.style,{position:"absolute",top:"-9999px",left:"-9999px",overflow:"scroll",visibility:"hidden",width:"100px",height:"100px"}),document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t};t.getScrollbarWidth=i;var o=i;t.default=o},181:function(e,t,n){"use strict";var i=n(3);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ScrollbarFix",{enumerable:!0,get:function(){return o.ScrollbarFix}}),Object.defineProperty(t,"createScrollbarFix",{enumerable:!0,get:function(){return o.createScrollbarFix}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=i(n(726))},212:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=i,e.exports=t.default},213:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=function(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}},i(n(0));var o=i(n(4));t.nameShape=o.default.oneOfType([o.default.string,o.default.shape({enter:o.default.string,leave:o.default.string,active:o.default.string}),o.default.shape({enter:o.default.string,enterActive:o.default.string,leave:o.default.string,leaveActive:o.default.string,appear:o.default.string,appearActive:o.default.string})])},2641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"SocialLoginPopup",{enumerable:!0,get:function(){return i.SocialLoginPopup}});var i=n(2642)},2642:function(e,t,n){"use strict";var i=n(3),o=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.SocialLoginPopup=void 0;var r=o(n(2)),a=i(n(0)),l=n(2643),s=n(11),u=n(214);t.SocialLoginPopup=(({loginPopupData:e,experiment:t,onClick:n,onCloseClick:i,onPopupOpen:o,isMobile:c,isPopupOpen:d})=>{const p=e?e.action:null,f=(0,a.useMemo)(()=>{switch(t){case u.SocialLoginPopupValueType.mainpage:case u.SocialLoginPopupValueType.betterRecommendations:if(p===u.ActionsToPublication.subscribe)return(0,s.lang)('c3f894c6');case u.SocialLoginPopupValueType.saveSource:if(p===u.ActionsToPublication.subscribe)return(0,s.lang)('b461620b');default:return""}},[t,p]),m=(0,a.useMemo)(()=>{switch(t){case u.SocialLoginPopupValueType.mainpage:if(p===u.ActionsToPublication.subscribe)return(0,s.lang)('886e1a84');case u.SocialLoginPopupValueType.betterRecommendations:if(p===u.ActionsToPublication.subscribe)return(0,s.lang)('7b0ac668');case u.SocialLoginPopupValueType.saveSource:if(p===u.ActionsToPublication.subscribe)return(0,s.lang)('01e89744');default:return""}},[t,p]),h=p===u.ActionsToPublication.subscribe?"channel":"cards";return(0,r.default)(l.LoginPopup,{isOpen:d,isMobile:c,viewType:h,titleText:f,descriptionText:m,buttonText:(0,s.lang)('c7ef96a4'),onClick:n,close:i,onOpen:o})})},2643:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2644);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},2644:function(e,t,n){"use strict";var i=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.LoginPopup=t.LoginPopupContent=void 0;var o=i(n(2));n(2645);var r=i(n(0)),a=n(151),l=n(47),s=n(12),u=i(n(2647));const c=(0,s.bevis)("login-popup"),d=r.default.createElement(r.default.Fragment,null,(0,o.default)("div",{className:c("gray-card")}),(0,o.default)("div",{className:c("gray-card")}),(0,o.default)("div",{className:c("black-card")}),(0,o.default)("div",{className:c("star",{isBig:!0})}),(0,o.default)("div",{className:c("star")})),p=r.default.createElement(r.default.Fragment,null,(0,o.default)("div",{className:c("gray-channel")}),(0,o.default)("div",{className:c("star",{isBig:!0})}),(0,o.default)("div",{className:c("star")})),f=({viewType:e,titleText:t,descriptionText:n,buttonText:i,isMobile:a,onClick:s,containerRef:f})=>{const m="channel"===e?p:d;return r.default.createElement("div",{className:c({isMobile:a,viewType:e}),ref:f},(0,o.default)("div",{className:c("pics")},void 0,m),(0,o.default)("h1",{className:c("title")},void 0,t),(0,o.default)("p",{className:c("description")},void 0,n),(0,o.default)(l.Button,{size:"l",icon:u.default,viewType:"yellow",widthType:"wide",onClick:s,iconClass:c("button-icon")},void 0,i))};t.LoginPopupContent=f,t.LoginPopup=(e=>{const{isOpen:t,isMobile:n,close:i,onClick:r,titleText:l,buttonText:s,descriptionText:u,viewType:c="channel",onClose:d,onOpen:p}=e;return(0,o.default)(a.Modal,{isOpen:t,close:i,onClose:d,onOpen:p,isMobileMenu:n,viewType:"login-popup-fixed-thin",withVerticalAlign:!0},void 0,(0,o.default)(f,{isMobile:n,viewType:c,titleText:l,descriptionText:u,buttonText:s,onClick:r}))})},2645:function(e,t,n){},2647:function(e,t){e.exports="\"data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cg opacity='0.8'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.0463 8.89712C11.6333 8.14245 12 7.08029 12 6C12 4.23229 10.5276 3 9 3C7.47236 3 6 4.23229 6 6C6 7.08029 6.36674 8.14245 6.9537 8.89712C7.52381 9.63011 8.22849 10 9 10C9.77151 10 10.4762 9.63011 11.0463 8.89712ZM9 12C12 12 14 9 14 6C14 3 11.5 1 9 1C6.5 1 4 3 4 6C4 9 6 12 9 12Z' fill='black'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.98398 17.1423C3.98953 17.1221 4 17.0727 4 17H2C2 16.7366 2.08482 16.4953 2.1541 16.3336C2.23429 16.1465 2.34521 15.9494 2.4825 15.7511C2.75823 15.3528 3.16504 14.9139 3.72114 14.5061C4.84448 13.6823 6.55578 13 9 13C11.4442 13 13.1555 13.6823 14.2789 14.5061C14.835 14.9139 15.2418 15.3528 15.5175 15.7511C15.6548 15.9494 15.7657 16.1465 15.8459 16.3336C15.9152 16.4953 16 16.7366 16 17H14C14 17.0727 14.0105 17.1221 14.016 17.1423C14.0142 17.1373 14.0114 17.1303 14.0076 17.1215C13.9882 17.0762 13.9468 16.9959 13.8731 16.8895C13.727 16.6784 13.4775 16.3986 13.0961 16.1189C12.3445 15.5677 11.0558 15 9 15C6.94422 15 5.65552 15.5677 4.90386 16.1189C4.52246 16.3986 4.27302 16.6784 4.12688 16.8895C4.05322 16.9959 4.0118 17.0762 3.99239 17.1215C3.98858 17.1303 3.98585 17.1373 3.98398 17.1423Z' fill='black'/%3E %3C/g%3E %3C/svg%3E\""},2648:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useSocialLoginPopupAction=void 0;var i=n(0),o=n(22),r=n(73),a=n(1012),l=n(214),s=n(27);const u=(0,o.isOneOfZenKits)();t.useSocialLoginPopupAction=(({dispatch:e,omittedQueryParams:t,getStorageValue:n,removeStorageValue:o,user:c,isAdArticle:d,currentPublisher:p})=>{(0,i.useEffect)(()=>{const i=t.socialLoginPopup,[f,m]=i?i.split("_"):[null,null];if(!m||!c)return;const h=n(m);if(!h)return;const{action:b}=h;if(f===b&&f===l.ActionsToPublication.subscribe){const t=d?a.likePublisher:r.likePublisher;p&&m===p.itemId?(e(t({id:p.id,itemId:p.itemId,privateData:p.privateData},u)),o(m)):(0,s.fireOnLoad)(()=>{const e=n(m);if(!e)return;const{objectId:t,action:i}=e;i===l.ActionsToPublication.subscribe&&((0,r.sendLikePublisher)({id:t,itemId:m,privateData:{}}),o(m))})}},[e,p,d,t,c,n,o])})},274:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=i(n(0)),l=i(n(4)),s=i(n(544)),u=i(n(550)),c=n(213),d=(c.nameShape.isRequired,l.default.bool,l.default.bool,l.default.bool,(0,c.transitionTimeout)("Appear"),(0,c.transitionTimeout)("Enter"),(0,c.transitionTimeout)("Leave"),function(e){function t(){var n,i,r;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=i=o(this,e.call.apply(e,[this].concat(s))),i._wrapChild=function(e){return a.default.createElement(u.default,{name:i.props.transitionName,appear:i.props.transitionAppear,enter:i.props.transitionEnter,leave:i.props.transitionLeave,appearTimeout:i.props.transitionAppearTimeout,enterTimeout:i.props.transitionEnterTimeout,leaveTimeout:i.props.transitionLeaveTimeout},e)},r=n,o(i,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return a.default.createElement(s.default,r({},this.props,{childFactory:this._wrapChild}))},t}(a.default.Component));d.displayName="CSSTransitionGroup",d.propTypes={},d.defaultProps={transitionAppear:!1,transitionEnter:!0,transitionLeave:!0},t.default=d,e.exports=t.default},372:function(e,t,n){"use strict";var i=n(3),o=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Modal=void 0;var r=o(n(14)),a=o(n(2)),l=o(n(8));n(503);var s=i(n(0)),u=o(n(29)),c=o(n(168)),d=n(181),p=n(64),f=n(179),m=n(109),h=n(18),b=n(118),v=n(12),y=n(119);const g=(0,v.bevis)("modal");class _ extends s.default.PureComponent{constructor(...e){super(...e),(0,l.default)(this,"state",{placeholderElem:null,margin:null,scrollbarWidth:null,isJustOpened:!1}),(0,l.default)(this,"_composeInputRefs",(0,m.createRefsComposer)()),(0,l.default)(this,"_scrollableContainerElem",null),(0,l.default)(this,"_scrollbarFixElem",null),(0,l.default)(this,"_whileOpenListenerStorage",new p.ListenerStorage),(0,l.default)(this,"_scrollableContainerRef",e=>{this._scrollableContainerElem=e,e?this._modalDidOpen():this._modalDidClose()}),(0,l.default)(this,"_scrollbarFixRef",e=>{this._scrollbarFixElem=e})}componentDidUpdate(e){const{isOpen:t,isMobileMenu:n,onOpen:i,onClose:o}=this.props;!e.isOpen&&t&&("function"==typeof i&&i(),n&&this.setState({isJustOpened:!0})),e.isOpen&&!t&&("function"==typeof o&&o(),n&&this.setState({isJustOpened:!1}))}_isNotModalClick(e){return e.target===this._scrollableContainerElem||e.target===this._scrollbarFixElem}_modalDidOpen(){const{scrollbarWidth:e}=this.state,t=this._scrollableContainerElem;if(!t||"number"!=typeof e)return;const{direction:n}=getComputedStyle(t);this.setState({margin:"rtl"===n?`0 0 0 ${-e}px`:`0 ${-e}px 0 0`}),document.body&&(document.body.style.overflow="hidden");const i=e=>{if(this._isNotModalClick(e)){e.preventDefault();const{shouldCloseOnOuterClick:t,close:n}=this.props;t&&"function"==typeof n&&n()}};this._whileOpenListenerStorage.add(document,"mousedown",i,{passive:!1}),this._whileOpenListenerStorage.add(document,"touchstart",i,{passive:!1}),this._whileOpenListenerStorage.add(document,"keydown",e=>{if(e.keyCode===y.ESC_BUTTON){const{shouldCloseOnEscClick:e,close:t}=this.props;e&&"function"==typeof t&&t()}})}_modalDidClose(){this.setState({margin:null}),document.body&&(document.body.style.overflow=""),this._whileOpenListenerStorage.clear()}_renderModal(){const{isOpen:e,isMobileMenu:t,withFixedHeight:n,close:i,containerRef:o,withScrollbarFix:l,withVerticalAlign:c,scrollableContainerRef:p,viewType:f,isClosable:m,children:v,...y}=this.props,{placeholderElem:_,margin:P,scrollbarWidth:O,isJustOpened:T}=this.state,C=l?d.ScrollbarFix:"div";if(!e||!_||"number"!=typeof O)return null;const A=(0,h.mergeProps)((0,b.omit)(y,["shouldCloseOnEscClick","shouldCloseOnOuterClick","onClose","onOpen"]),{className:g("content",{isMobileMenu:t}),style:T?{transform:"translateY(0)"}:void 0}),E=this._composeInputRefs(this._scrollableContainerRef,p),M=u.default.createPortal(s.default.createElement("div",{ref:E,className:g({viewType:f,withVerticalAlign:c,withFixedHeight:n,isMobileMenu:t}),style:{margin:P||void 0,visibility:P?void 0:"hidden"}},s.default.createElement(C,{ref:this._scrollbarFixRef,className:g("scrollbar-fix")},s.default.createElement("div",(0,r.default)({ref:o},A),v,m?(0,a.default)("div",{className:g("close-wrapper")},void 0,(0,a.default)("button",{className:g("close"),onClick:i})):null))),_);return(0,a.default)(s.Fragment,{},"modal",M)}componentDidMount(){this.setState({placeholderElem:document.body,scrollbarWidth:(0,f.getScrollbarWidth)()})}componentWillUnmount(){this._whileOpenListenerStorage.clear()}render(){return(0,a.default)(c.default,{component:s.Fragment,transitionName:"_transition",transitionEnterTimeout:y.MODAL_TRANSITION_DURATION,transitionLeaveTimeout:y.MODAL_TRANSITION_DURATION},void 0,this._renderModal())}}t.Modal=_,(0,l.default)(_,"defaultProps",{isOpen:!1,isClosable:!0,shouldCloseOnEscClick:!0,shouldCloseOnOuterClick:!0,withScrollbarFix:!1,withVerticalAlign:!1,viewType:"outer-close"});var P=_;t.default=P},503:function(e,t,n){},504:function(e,t,n){},505:function(e,t,n){},506:function(e,t,n){},507:function(e,t,n){},544:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=i(n(548)),a=i(n(0)),l=i(n(4)),s=(i(n(17)),n(549)),u=(l.default.any,l.default.func,l.default.node,function(e){function t(n,i){!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,i));return r.performAppear=function(e,t){r.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(r._handleDoneAppearing.bind(r,e,t)):r._handleDoneAppearing(e,t)},r._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete r.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(r.props.children);n&&n.hasOwnProperty(e)||r.performLeave(e,t)},r.performEnter=function(e,t){r.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(r._handleDoneEntering.bind(r,e,t)):r._handleDoneEntering(e,t)},r._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete r.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(r.props.children);n&&n.hasOwnProperty(e)||r.performLeave(e,t)},r.performLeave=function(e,t){r.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(r._handleDoneLeaving.bind(r,e,t)):r._handleDoneLeaving(e,t)},r._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete r.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(r.props.children);n&&n.hasOwnProperty(e)?r.keysToEnter.push(e):r.setState(function(t){var n=o({},t.children);return delete n[e],{children:n}})},r.childRefs=Object.create(null),r.state={children:(0,s.getChildMapping)(n.children)},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,s.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,s.mergeChildMappings)(n,t)});for(var i in t){var o=n&&n.hasOwnProperty(i);!t[i]||o||this.currentlyTransitioningKeys[i]||this.keysToEnter.push(i)}for(var r in n){var a=t&&t.hasOwnProperty(r);!n[r]||a||this.currentlyTransitioningKeys[r]||this.keysToLeave.push(r)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[],n=function(n){var i=e.state.children[n];if(i){var o="string"!=typeof i.ref,l=e.props.childFactory(i),s=function(t){e.childRefs[n]=t};l===i&&o&&(s=(0,r.default)(i.ref,s)),t.push(a.default.cloneElement(l,{key:n,ref:s}))}};for(var i in this.state.children)n(i);var l=o({},this.props);return delete l.transitionLeave,delete l.transitionName,delete l.transitionAppear,delete l.transitionEnter,delete l.childFactory,delete l.transitionLeaveTimeout,delete l.transitionEnterTimeout,delete l.transitionAppearTimeout,delete l.component,a.default.createElement(this.props.component,l,t)},t}(a.default.Component));u.displayName="TransitionGroup",u.propTypes={},u.defaultProps={component:"span",childFactory:function(e){return e}},t.default=u,e.exports=t.default},548:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(0!==(t=t.filter(function(e){return null!=e})).length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},549:function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=function(e){if(!e)return e;var t={};return i.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t},t.mergeChildMappings=function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var i={},o=[];for(var r in e)t.hasOwnProperty(r)?o.length&&(i[r]=o,o=[]):o.push(r);var a=void 0,l={};for(var s in t){if(i.hasOwnProperty(s))for(a=0;a<i[s].length;a++){var u=i[s][a];l[i[s][a]]=n(u)}l[s]=n(s)}for(a=0;a<o.length;a++)l[o[a]]=n(o[a]);return l};var i=n(0)},550:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=i(n(551)),l=i(n(553)),s=i(n(554)),u=n(555),c=i(n(0)),d=i(n(4)),p=n(29),f=n(213),m=[];u.transitionEnd&&m.push(u.transitionEnd),u.animationEnd&&m.push(u.animationEnd),d.default.node,f.nameShape.isRequired,d.default.bool,d.default.bool,d.default.bool,d.default.number,d.default.number,d.default.number;var h=function(e){function t(){var n,i,r;!function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this);for(var a=arguments.length,l=Array(a),s=0;s<a;s++)l[s]=arguments[s];return n=i=o(this,e.call.apply(e,[this].concat(l))),i.componentWillAppear=function(e){i.props.appear?i.transition("appear",e,i.props.appearTimeout):e()},i.componentWillEnter=function(e){i.props.enter?i.transition("enter",e,i.props.enterTimeout):e()},i.componentWillLeave=function(e){i.props.leave?i.transition("leave",e,i.props.leaveTimeout):e()},r=n,o(i,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var i=(0,p.findDOMNode)(this);if(i){var o=this.props.name[e]||this.props.name+"-"+e,r=this.props.name[e+"Active"]||o+"-active",s=null,c=void 0;(0,a.default)(i,o),this.queueClassAndNode(r,i);var d=function(e){e&&e.target!==i||(clearTimeout(s),c&&c(),(0,l.default)(i,o),(0,l.default)(i,r),c&&c(),t&&t())};n?(s=setTimeout(d,n),this.transitionTimeouts.push(s)):u.transitionEnd&&(c=function(e,t){return m.length?m.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){m.length&&m.forEach(function(n){return e.removeEventListener(n,t,!1)})}}(i,d))}else t&&t()},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,s.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,a.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=r({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,c.default.cloneElement(c.default.Children.only(this.props.children),e)},t}(c.default.Component);h.displayName="CSSTransitionGroupChild",h.propTypes={},t.default=h,e.exports=t.default},551:function(e,t,n){"use strict";var i=n(1);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=i(n(552));e.exports=t.default},552:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},553:function(e,t,n){"use strict";function i(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=i(e.className,t):e.setAttribute("class",i(e.className&&e.className.baseVal||"",t))}},554:function(e,t,n){"use strict";var i=n(1);t.__esModule=!0,t.default=void 0;var o,r="clearTimeout",a=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-s)),i=setTimeout(e,n);return s=t,i},l=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};i(n(212)).default&&["","webkit","moz","o","ms"].some(function(e){var t=l(e,"request");if(t in window)return r=l(e,"cancel"),a=function(e){return window[t](e)}});var s=(new Date).getTime();(o=function(e){return a(e)}).cancel=function(e){window[r]&&"function"==typeof window[r]&&window[r](e)};var u=o;t.default=u,e.exports=t.default},555:function(e,t,n){"use strict";var i=n(1);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var o=i(n(212)),r="transform";t.transform=r;var a,l,s;t.animationEnd=s,t.transitionEnd=l;var u,c,d,p;t.transitionDelay=p,t.transitionTiming=d,t.transitionDuration=c,t.transitionProperty=u;var f,m,h,b;if(t.animationDelay=b,t.animationTiming=h,t.animationDuration=m,t.animationName=f,o.default){var v=function(){for(var e,t,n=document.createElement("div").style,i={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},o=Object.keys(i),r="",a=0;a<o.length;a++){var l=o[a];if(l+"TransitionProperty"in n){r="-"+l.toLowerCase(),e=i[l]("TransitionEnd"),t=i[l]("AnimationEnd");break}}return!e&&"transitionProperty"in n&&(e="transitionend"),!t&&"animationName"in n&&(t="animationend"),n=null,{animationEnd:t,transitionEnd:e,prefix:r}}();a=v.prefix,t.transitionEnd=l=v.transitionEnd,t.animationEnd=s=v.animationEnd,t.transform=r=a+"-"+r,t.transitionProperty=u=a+"-transition-property",t.transitionDuration=c=a+"-transition-duration",t.transitionDelay=p=a+"-transition-delay",t.transitionTiming=d=a+"-transition-timing-function",t.animationName=f=a+"-animation-name",t.animationDuration=m=a+"-animation-duration",t.animationTiming=h=a+"-animation-delay",t.animationDelay=b=a+"-animation-timing-function"}var y={transform:r,end:l,property:u,timing:d,delay:p,duration:c};t.default=y},556:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createHocDisplayName=t.getDisplayName=void 0;const i=e=>e.displayName||e.name||"Component";t.getDisplayName=i,t.createHocDisplayName=((e,t)=>`${e}(${i(t)})`)},726:function(e,t,n){"use strict";var i=n(3),o=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ScrollbarFix=t.createScrollbarFix=void 0;var r=o(n(14)),a=i(n(0)),l=n(179),s=n(18);const u=e=>(0,a.forwardRef)((t,n)=>{const[i,o]=(0,a.useState)(null);(0,a.useEffect)(()=>{o((0,l.getScrollbarWidth)())},[]);let u;return u="number"==typeof i&&i>0?(0,s.mergeProps)(t,{style:{width:`calc(100vw - ${i}px)`}}):t,a.default.createElement(e,(0,r.default)({},u,{ref:n}))});t.createScrollbarFix=u;const c=u("div");t.ScrollbarFix=c;var d=c;t.default=d},730:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StatefulModal=void 0;var i=n(372);const o=(0,n(169).withOpenState)(i.Modal);t.StatefulModal=o},731:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ModalHeader",{enumerable:!0,get:function(){return i.ModalHeader}});var i=n(732)},732:function(e,t,n){"use strict";var i=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.ModalHeader=void 0;var o=i(n(2));n(504),i(n(0));const r=(0,n(12).bevis)("modal-header");t.ModalHeader=(({text:e,children:t})=>(0,o.default)("div",{className:r()},void 0,(0,o.default)("h2",{className:r("title")},void 0,e),t))},733:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ModalContent",{enumerable:!0,get:function(){return i.ModalContent}});var i=n(734)},734:function(e,t,n){"use strict";var i=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContent=void 0;var o=i(n(14));n(505);var r=i(n(0)),a=n(12);const l=(0,a.bevis)("modal-content");t.ModalContent=(({children:e,className:t,...n})=>r.default.createElement("div",(0,o.default)({},n,{className:a.bevis.mix(l(),t)}),e))},735:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ModalDivider",{enumerable:!0,get:function(){return i.ModalDivider}});var i=n(736)},736:function(e,t,n){"use strict";var i=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.ModalDivider=void 0;var o=i(n(2));n(506),i(n(0));var r=n(12);const a=(0,r.bevis)("modal-divider");t.ModalDivider=(({className:e})=>(0,o.default)("hr",{className:(0,r.mix)(a(),e)}))},737:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ModalActions",{enumerable:!0,get:function(){return i.ModalActions}});var i=n(738)},738:function(e,t,n){"use strict";var i=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.ModalActions=void 0;var o=i(n(2));n(507),i(n(0));const r=(0,n(12).bevis)("modal-actions");t.ModalActions=(({children:e})=>(0,o.default)("div",{className:r()},void 0,e))},985:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPublication=function(e){return(0,i.loadData)((0,o.formatPath)(o.PATHS.GET_PUBLICATION,{},{publicationId:e})).then(({publications:e,images:t})=>({publication:e[0],images:t}))},t.fetchPublicationData=function(e,t){return(0,i.loadData)((0,o.formatPath)(o.PATHS.GET_PUBLICATION_RENDER_DATA,{publisherId:e,publicationId:t}))};var i=n(13),o=n(6)}}]);