(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[185],{8668:function(Y){Y.exports={pre:"pre___3fTUI"}},70347:function(){},47828:function(){},68059:function(Y,w,o){"use strict";o.r(w),o.d(w,{default:function(){return Yt}});var ne=o(65056),X=o(70347),ue=o(18106),Se=o(6999),x=o(96156),y=o(22122),a=o(67294),G=o(94184),K=o.n(G),J=o(98423),H=o(86032),V=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},Z=function(n){var i=n.prefixCls,e=n.className,t=n.hoverable,l=t===void 0?!0:t,s=V(n,["prefixCls","className","hoverable"]);return a.createElement(H.C,null,function(u){var c=u.getPrefixCls,d=c("card",i),p=K()("".concat(d,"-grid"),e,(0,x.Z)({},"".concat(d,"-grid-hoverable"),l));return a.createElement("div",(0,y.Z)({},s,{className:p}))})},q=Z,ve=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},I=function(n){return a.createElement(H.C,null,function(i){var e=i.getPrefixCls,t=n.prefixCls,l=n.className,s=n.avatar,u=n.title,c=n.description,d=ve(n,["prefixCls","className","avatar","title","description"]),p=e("card",t),f=K()("".concat(p,"-meta"),l),v=s?a.createElement("div",{className:"".concat(p,"-meta-avatar")},s):null,g=u?a.createElement("div",{className:"".concat(p,"-meta-title")},u):null,B=c?a.createElement("div",{className:"".concat(p,"-meta-description")},c):null,S=g||B?a.createElement("div",{className:"".concat(p,"-meta-detail")},g,B):null;return a.createElement("div",(0,y.Z)({},d,{className:f}),v,S)})},re=I,Fe=o(47428),He=o(92820),ae=He.Z,ke=o(21584),k=ke.Z,Ue=o(97647),Ge=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i};function We(r){var n=r.map(function(i,e){return a.createElement("li",{style:{width:"".concat(100/r.length,"%")},key:"action-".concat(e)},a.createElement("span",null,i))});return n}var ye=function(n){var i,e,t=a.useContext(H.E_),l=t.getPrefixCls,s=t.direction,u=a.useContext(Ue.Z),c=function(fe){var Q;(Q=n.onTabChange)===null||Q===void 0||Q.call(n,fe)},d=function(){var fe;return a.Children.forEach(n.children,function(Q){Q&&Q.type&&Q.type===q&&(fe=!0)}),fe},p=n.prefixCls,f=n.className,v=n.extra,g=n.headStyle,B=g===void 0?{}:g,S=n.bodyStyle,C=S===void 0?{}:S,A=n.title,z=n.loading,D=n.bordered,W=D===void 0?!0:D,m=n.size,h=n.type,j=n.cover,O=n.actions,T=n.tabList,M=n.children,L=n.activeTabKey,$=n.defaultActiveTabKey,b=n.tabBarExtraContent,F=n.hoverable,N=n.tabProps,le=N===void 0?{}:N,oe=Ge(n,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),E=l("card",p),se=C.padding===0||C.padding==="0px"?{padding:24}:void 0,U=a.createElement("div",{className:"".concat(E,"-loading-block")}),Jt=a.createElement("div",{className:"".concat(E,"-loading-content"),style:se},a.createElement(ae,{gutter:8},a.createElement(k,{span:22},U)),a.createElement(ae,{gutter:8},a.createElement(k,{span:8},U),a.createElement(k,{span:15},U)),a.createElement(ae,{gutter:8},a.createElement(k,{span:6},U),a.createElement(k,{span:18},U)),a.createElement(ae,{gutter:8},a.createElement(k,{span:13},U),a.createElement(k,{span:9},U)),a.createElement(ae,{gutter:8},a.createElement(k,{span:4},U),a.createElement(k,{span:3},U),a.createElement(k,{span:16},U))),Ie=L!==void 0,qt=(0,y.Z)((0,y.Z)({},le),(i={},(0,x.Z)(i,Ie?"activeKey":"defaultActiveKey",Ie?L:$),(0,x.Z)(i,"tabBarExtraContent",b),i)),Me,$e=T&&T.length?a.createElement(Fe.Z,(0,y.Z)({size:"large"},qt,{className:"".concat(E,"-head-tabs"),onChange:c}),T.map(function(ce){return a.createElement(Fe.Z.TabPane,{tab:ce.tab,disabled:ce.disabled,key:ce.key})})):null;(A||v||$e)&&(Me=a.createElement("div",{className:"".concat(E,"-head"),style:B},a.createElement("div",{className:"".concat(E,"-head-wrapper")},A&&a.createElement("div",{className:"".concat(E,"-head-title")},A),v&&a.createElement("div",{className:"".concat(E,"-extra")},v)),$e));var _t=j?a.createElement("div",{className:"".concat(E,"-cover")},j):null,en=a.createElement("div",{className:"".concat(E,"-body"),style:C},z?Jt:M),tn=O&&O.length?a.createElement("ul",{className:"".concat(E,"-actions")},We(O)):null,nn=(0,J.Z)(oe,["onTabChange"]),Ke=m||u,rn=K()(E,(e={},(0,x.Z)(e,"".concat(E,"-loading"),z),(0,x.Z)(e,"".concat(E,"-bordered"),W),(0,x.Z)(e,"".concat(E,"-hoverable"),F),(0,x.Z)(e,"".concat(E,"-contain-grid"),d()),(0,x.Z)(e,"".concat(E,"-contain-tabs"),T&&T.length),(0,x.Z)(e,"".concat(E,"-").concat(Ke),Ke),(0,x.Z)(e,"".concat(E,"-type-").concat(h),!!h),(0,x.Z)(e,"".concat(E,"-rtl"),s==="rtl"),e),f);return a.createElement("div",(0,y.Z)({},nn,{className:rn}),Me,_t,en,tn)};ye.Grid=q,ye.Meta=re;var Ve=ye,an=o(47828),ln=o(22385),on=o(47673),Xe=o(42550),_=o(21687),Qe=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},Ye=function(n,i){var e=n.prefixCls,t=n.component,l=t===void 0?"article":t,s=n.className,u=n["aria-label"],c=n.setContentRef,d=n.children,p=Qe(n,["prefixCls","component","className","aria-label","setContentRef","children"]),f=i;return c&&((0,_.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),f=(0,Xe.sQ)(i,c)),a.createElement(H.C,null,function(v){var g=v.getPrefixCls,B=v.direction,S=l,C=g("typography",e),A=K()(C,(0,x.Z)({},"".concat(C,"-rtl"),B==="rtl"),s);return a.createElement(S,(0,y.Z)({className:A,"aria-label":u,ref:f},p),d)})},Ne=a.forwardRef(Ye);Ne.displayName="Typography";var Je=Ne,Ze=Je,ee=o(90484),qe=o(85061),_e=o(6610),et=o(5991),tt=o(10379),nt=o(44144),me=o(50344),rt=o(20640),at=o.n(rt),te=o(28991),it={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},lt=it,he=o(27029),Te=function(n,i){return a.createElement(he.Z,(0,te.Z)((0,te.Z)({},n),{},{ref:i,icon:lt}))};Te.displayName="EditOutlined";var ot=a.forwardRef(Te),st=o(79508),ct={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},ut=ct,Pe=function(n,i){return a.createElement(he.Z,(0,te.Z)((0,te.Z)({},n),{},{ref:i,icon:ut}))};Pe.displayName="CopyOutlined";var dt=a.forwardRef(Pe),pt=o(4084),ft=o(58184),vt=o(42051),Be=o(34952),ge=o(32637),De=o(31808),Ee=o(69713),yt=o(28481),je=o(15105),mt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},ht=mt,Ae=function(n,i){return a.createElement(he.Z,(0,te.Z)((0,te.Z)({},n),{},{ref:i,icon:ht}))};Ae.displayName="EnterOutlined";var gt=a.forwardRef(Ae),Et=o(45839),Ct=function(n){var i=n.prefixCls,e=n["aria-label"],t=n.className,l=n.style,s=n.direction,u=n.maxLength,c=n.autoSize,d=c===void 0?!0:c,p=n.value,f=n.onSave,v=n.onCancel,g=n.onEnd,B=a.useRef(),S=a.useRef(!1),C=a.useRef(),A=a.useState(p),z=(0,yt.Z)(A,2),D=z[0],W=z[1];a.useEffect(function(){W(p)},[p]),a.useEffect(function(){if(B.current&&B.current.resizableTextArea){var b=B.current.resizableTextArea.textArea;b.focus();var F=b.value.length;b.setSelectionRange(F,F)}},[]);var m=function(F){var N=F.target;W(N.value.replace(/[\n\r]/g,""))},h=function(){S.current=!0},j=function(){S.current=!1},O=function(F){var N=F.keyCode;S.current||(C.current=N)},T=function(){f(D.trim())},M=function(F){var N=F.keyCode,le=F.ctrlKey,oe=F.altKey,E=F.metaKey,se=F.shiftKey;C.current===N&&!S.current&&!le&&!oe&&!E&&!se&&(N===je.Z.ENTER?(T(),g==null||g()):N===je.Z.ESC&&v())},L=function(){T()},$=K()(i,"".concat(i,"-edit-content"),(0,x.Z)({},"".concat(i,"-rtl"),s==="rtl"),t);return a.createElement("div",{className:$,style:l},a.createElement(Et.Z,{ref:B,maxLength:u,value:D,onChange:m,onKeyDown:O,onKeyUp:M,onCompositionStart:h,onCompositionEnd:j,onBlur:L,"aria-label":e,autoSize:d}),a.createElement(gt,{className:"".concat(i,"-edit-content-confirm")}))},xt=Ct,Ce=o(73935),bt=1,Ot=3,St=8,P,xe={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function be(r){if(!r)return 0;var n=r.match(/^\d*(\.\d*)?/);return n?Number(n[0]):0}function Ft(r){var n=Array.prototype.slice.apply(r);return n.map(function(i){return"".concat(i,": ").concat(r.getPropertyValue(i),";")}).join("")}function Nt(r){var n=[];return r.forEach(function(i){var e=n[n.length-1];typeof i=="string"&&typeof e=="string"?n[n.length-1]+=i:n.push(i)}),n}function Le(r,n){r.setAttribute("aria-hidden","true");var i=window.getComputedStyle(n),e=Ft(i);r.setAttribute("style",e),r.style.position="fixed",r.style.left="0",r.style.height="auto",r.style.minHeight="auto",r.style.maxHeight="auto",r.style.top="-999999px",r.style.zIndex="-1000",r.style.textOverflow="clip",r.style.whiteSpace="normal",r.style.webkitLineClamp="none"}function Zt(r){var n=document.createElement("div");Le(n,r),n.appendChild(document.createTextNode("text")),document.body.appendChild(n);var i=n.offsetHeight,e=be(window.getComputedStyle(r).lineHeight);return document.body.removeChild(n),i>e?i:e}var Tt=function(r,n,i,e,t){P||(P=document.createElement("div"),P.setAttribute("aria-hidden","true")),P.parentNode||document.body.appendChild(P);var l=n.rows,s=n.suffix,u=s===void 0?"":s,c=window.getComputedStyle(r),d=Zt(r),p=Math.floor(d)*(l+1)+be(c.paddingTop)+be(c.paddingBottom);Le(P,r);var f=Nt((0,me.Z)(i));(0,Ce.render)(a.createElement("div",{style:xe},a.createElement("span",{style:xe},f,u),a.createElement("span",{style:xe},e)),P);function v(){return Math.ceil(P.getBoundingClientRect().height)<p}if(v())return(0,Ce.unmountComponentAtNode)(P),{content:i,text:P.innerHTML,ellipsis:!1};var g=Array.prototype.slice.apply(P.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(m){var h=m.nodeType;return h!==St}),B=Array.prototype.slice.apply(P.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,Ce.unmountComponentAtNode)(P);var S=[];P.innerHTML="";var C=document.createElement("span");P.appendChild(C);var A=document.createTextNode(t+u);C.appendChild(A),B.forEach(function(m){P.appendChild(m)});function z(m){C.insertBefore(m,A)}function D(m,h){var j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:h.length,T=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,M=Math.floor((j+O)/2),L=h.slice(0,M);if(m.textContent=L,j>=O-1)for(var $=O;$>=j;$-=1){var b=h.slice(0,$);if(m.textContent=b,v()||!b)return $===h.length?{finished:!1,reactNode:h}:{finished:!0,reactNode:b}}return v()?D(m,h,M,O,M):D(m,h,j,M,T)}function W(m,h){var j=m.nodeType;if(j===bt)return z(m),v()?{finished:!1,reactNode:f[h]}:(C.removeChild(m),{finished:!0,reactNode:null});if(j===Ot){var O=m.textContent||"",T=document.createTextNode(O);return z(T),D(T,O)}return{finished:!1,reactNode:null}}return g.some(function(m,h){var j=W(m,h),O=j.finished,T=j.reactNode;return T&&S.push(T),O}),{content:S,text:P.innerHTML,ellipsis:!0}},Pt=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},Bt=(0,De.GL)("webkitLineClamp"),Dt=(0,De.GL)("textOverflow");function jt(r,n){var i=r.mark,e=r.code,t=r.underline,l=r.delete,s=r.strong,u=r.keyboard,c=r.italic,d=n;function p(f,v){!f||(d=a.createElement(v,{},d))}return p(s,"strong"),p(t,"u"),p(l,"del"),p(e,"code"),p(i,"mark"),p(u,"kbd"),p(c,"i"),d}function de(r,n,i){return r===!0||r===void 0?n:r||i&&n}var Re="...",Oe=function(r){(0,tt.Z)(i,r);var n=(0,nt.Z)(i);function i(){var e;return(0,_e.Z)(this,i),e=n.apply(this,arguments),e.contentRef=a.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,l=e.context.getPrefixCls;return l("typography",t)},e.onExpandClick=function(t){var l,s=e.getEllipsis(),u=s.onExpand;e.setState({expanded:!0}),(l=u)===null||l===void 0||l(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var l=e.getEditable(),s=l.onChange;s==null||s(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,l;(l=(t=e.getEditable()).onCancel)===null||l===void 0||l.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var l=e.props,s=l.children,u=l.copyable,c=(0,y.Z)({},(0,ee.Z)(u)==="object"?u:null);c.text===void 0&&(c.text=String(s)),at()(c.text||""),e.setState({copied:!0},function(){c.onCopy&&c.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var l=e.getEditable(),s=l.onStart;t&&s&&s(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){ge.Z.cancel(e.rafId),e.rafId=(0,ge.Z)(function(){e.syncEllipsis()})},e}return(0,et.Z)(i,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var l=this.props.children,s=this.getEllipsis(),u=this.getEllipsis(t);(l!==t.children||s.rows!==u.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),ge.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var l=this.state.edit,s=t||this.props,u=s.editable;return u?(0,y.Z)({editing:l},(0,ee.Z)(u)==="object"?u:null):{editing:l}}},{key:"getEllipsis",value:function(t){var l=t||this.props,s=l.ellipsis;return s?(0,y.Z)({rows:1,expandable:!1},(0,ee.Z)(s)==="object"?s:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,l=this.props,s=l.editable,u=l.copyable,c=this.getEllipsis(),d=c.rows,p=c.expandable,f=c.suffix,v=c.onEllipsis,g=c.tooltip;return f||g||s||u||p||!t||v?!1:d===1?Dt:Bt}},{key:"syncEllipsis",value:function(){var t=this.state,l=t.ellipsisText,s=t.isEllipsis,u=t.expanded,c=this.getEllipsis(),d=c.rows,p=c.suffix,f=c.onEllipsis,v=this.props.children;if(!(!d||d<0||!this.contentRef.current||u)&&!this.canUseCSSEllipsis()){(0,_.Z)((0,me.Z)(v).every(function(A){return typeof A=="string"}),"Typography","`ellipsis` should use string as children only.");var g=Tt(this.contentRef.current,{rows:d,suffix:p},v,this.renderOperations(!0),Re),B=g.content,S=g.text,C=g.ellipsis;(l!==S||s!==C)&&(this.setState({ellipsisText:S,ellipsisContent:B,isEllipsis:C}),s!==C&&f&&f(C))}}},{key:"renderExpand",value:function(t){var l=this.getEllipsis(),s=l.expandable,u=l.symbol,c=this.state,d=c.expanded,p=c.isEllipsis;if(!s||!t&&(d||!p))return null;var f;return u?f=u:f=this.expandStr,a.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},f)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var l=t.icon,s=t.tooltip,u=(0,me.Z)(s)[0]||this.editStr,c=typeof u=="string"?u:"";return a.createElement(Ee.Z,{key:"edit",title:s===!1?"":u},a.createElement(Be.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":c},l||a.createElement(ot,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,l=this.props.copyable;if(!!l){var s=this.getPrefixCls(),u=l.tooltips,c=l.icon,d=Array.isArray(u)?u:[u],p=Array.isArray(c)?c:[c],f=t?de(d[1],this.copiedStr):de(d[0],this.copyStr),v=t?this.copiedStr:this.copyStr,g=typeof f=="string"?f:v;return a.createElement(Ee.Z,{key:"copy",title:f},a.createElement(Be.Z,{className:K()("".concat(s,"-copy"),t&&"".concat(s,"-copy-success")),onClick:this.onCopyClick,"aria-label":g},t?de(p[1],a.createElement(st.Z,null),!0):de(p[0],a.createElement(dt,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,l=t.children,s=t.className,u=t.style,c=this.context.direction,d=this.getEditable(),p=d.maxLength,f=d.autoSize,v=d.onEnd;return a.createElement(xt,{value:typeof l=="string"?l:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:v,prefixCls:this.getPrefixCls(),className:s,style:u,direction:c,maxLength:p,autoSize:f})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(l){return l})}},{key:"renderContent",value:function(){var t=this,l=this.state,s=l.ellipsisContent,u=l.isEllipsis,c=l.expanded,d=this.props,p=d.component,f=d.children,v=d.className,g=d.type,B=d.disabled,S=d.style,C=Pt(d,["component","children","className","type","disabled","style"]),A=this.context.direction,z=this.getEllipsis(),D=z.rows,W=z.suffix,m=z.tooltip,h=this.getPrefixCls(),j=(0,J.Z)(C,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,qe.Z)(ft.nf))),O=this.canUseCSSEllipsis(),T=D===1&&O,M=D&&D>1&&O,L=f;if(D&&u&&!c&&!O){var $=C.title,b=$||"";!$&&(typeof f=="string"||typeof f=="number")&&(b=String(f)),b=b.slice(String(s||"").length),L=a.createElement(a.Fragment,null,s,a.createElement("span",{title:b,"aria-hidden":"true"},Re),W),m&&(L=a.createElement(Ee.Z,{title:m===!0?f:m},a.createElement("span",null,L)))}else L=a.createElement(a.Fragment,null,f,W);return L=jt(this.props,L),a.createElement(vt.Z,{componentName:"Text"},function(F){var N,le=F.edit,oe=F.copy,E=F.copied,se=F.expand;return t.editStr=le,t.copyStr=oe,t.copiedStr=E,t.expandStr=se,a.createElement(pt.Z,{onResize:t.resizeOnNextFrame,disabled:O},a.createElement(Ze,(0,y.Z)({className:K()((N={},(0,x.Z)(N,"".concat(h,"-").concat(g),g),(0,x.Z)(N,"".concat(h,"-disabled"),B),(0,x.Z)(N,"".concat(h,"-ellipsis"),D),(0,x.Z)(N,"".concat(h,"-single-line"),D===1),(0,x.Z)(N,"".concat(h,"-ellipsis-single-line"),T),(0,x.Z)(N,"".concat(h,"-ellipsis-multiple-line"),M),N),v),style:(0,y.Z)((0,y.Z)({},S),{WebkitLineClamp:M?D:void 0}),component:p,ref:t.contentRef,direction:A},j),L,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),l=t.editing;return l?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var l=t.children,s=t.editable;return(0,_.Z)(!s||typeof l=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),i}(a.Component);Oe.contextType=H.E_,Oe.defaultProps={children:""};var pe=Oe,At=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},Lt=function(n){var i=n.ellipsis,e=At(n,["ellipsis"]),t=a.useMemo(function(){return i&&(0,ee.Z)(i)==="object"?(0,J.Z)(i,["expandable","rows"]):i},[i]);return(0,_.Z)((0,ee.Z)(i)!=="object"||!i||!("expandable"in i)&&!("rows"in i),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),a.createElement(pe,(0,y.Z)({},e,{ellipsis:t,component:"span"}))},Rt=Lt,wt=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},zt=function(n,i){var e=n.ellipsis,t=n.rel,l=wt(n,["ellipsis","rel"]);(0,_.Z)((0,ee.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var s=a.useRef(null);a.useImperativeHandle(i,function(){var c;return(c=s.current)===null||c===void 0?void 0:c.contentRef.current});var u=(0,y.Z)((0,y.Z)({},l),{rel:t===void 0&&l.target==="_blank"?"noopener noreferrer":t});return delete u.navigate,a.createElement(pe,(0,y.Z)({},u,{ref:s,ellipsis:!!e,component:"a"}))},It=a.forwardRef(zt),Mt=o(93355),$t=function(r,n){var i={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(i[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(i[e[t]]=r[e[t]]);return i},Kt=(0,Mt.a)(1,2,3,4,5),Ht=function(n){var i=n.level,e=i===void 0?1:i,t=$t(n,["level"]),l;return Kt.indexOf(e)!==-1?l="h".concat(e):((0,_.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),l="h1"),a.createElement(pe,(0,y.Z)({},t,{component:l}))},kt=Ht,Ut=function(n){return a.createElement(pe,(0,y.Z)({},n,{component:"div"}))},Gt=Ut,ie=Ze;ie.Text=Rt,ie.Link=It,ie.Title=kt,ie.Paragraph=Gt;var we=ie,Wt=o(67265),Vt=o(21010),Xt=o(8668),Qt=o.n(Xt),R=o(85893),ze=function(n){var i=n.children;return(0,R.jsx)("pre",{className:Qt().pre,children:(0,R.jsx)("code",{children:(0,R.jsx)(we.Text,{copyable:!0,children:i})})})},Yt=function(){var r=(0,Vt.YB)();return(0,R.jsx)(Wt.ZP,{children:(0,R.jsxs)(Ve,{children:[(0,R.jsx)(we.Text,{strong:!0,style:{marginBottom:12}}),(0,R.jsxs)(ze,{children:["\u5728\u8FD9\u4E2A\u7EB7\u7E41\u7684\u65F6\u4EE3\u91CC\uFF0C\u4EBA\u6D3B\u7740\u5C31\u662F\u4E00\u573A\u4FEE\u884C\uFF0C",(0,R.jsx)("br",{}),"\u4E0D\u8BBA\u4E16\u4E8B\u591A\u4E48\u590D\u6742\uFF0C\u751F\u6D3B\u591A\u4E48\u8270\u96BE\uFF0C\u90FD\u8981\u5B66\u4F1A\u4E3A\u81EA\u5DF1\u5F00\u4E2A\u836F\u65B9\uFF0C",(0,R.jsx)("br",{}),"\u6D12\u8131\u4E9B\uFF0C\u8C41\u8FBE\u4E9B\uFF0C\u5F00\u6717\u4E9B\uFF0C\u6CA1\u6709\u4EC0\u4E48\u8FC7\u4E0D\u53BB\u7684\u574E\uFF0C\u4E5F\u6CA1\u4EC0\u4E48\u5927\u4E0D\u4E86\u7684\u4E8B."]}),(0,R.jsxs)(ze,{children:["\u5F53\u4F60\u611F\u5230\u8FF7\u832B\u7684\u65F6\u5019\uFF0C\u8BF7\u4F60\u62AC\u5934\u770B\u770B\u5929\u8FB9\u7684\u9633\u5149\uFF0C",(0,R.jsx)("br",{}),"\u770B\u7740\u5B83\u662F\u987A\u7740\u600E\u6837\u7684\u8DEF\u627E\u5230\u843D\u5C71\u7684\u70B9\uFF1B\u5F53\u4F60\u611F\u5230\u59D4\u5C48\u7684\u65F6\u5019\uFF0C",(0,R.jsx)("br",{}),"\u8BF7\u4F60\u9759\u5FC3\u56DE\u5FC6\u7684\u5FC3\u623F\uFF0C\u770B\u770B\u5B83\u88C5\u7740\u600E\u6837\u7684\u559C\u6012\u54C0\u4E50\uFF1B\u5F53\u4F60\u611F\u5230\u5F77\u5FA8\u7684\u65F6\u5019\uFF0C\u8BF7\u4F60\u7EC6\u5FC3\u9605\u8BFB\u6210\u529F\u7684\u6545\u4E8B\u3002",(0,R.jsx)("br",{}),"\u6BCF\u4E2A\u4EBA\u7684\u8DEF\u90FD\u4E0D\u662F\u4E00\u5E06\u98CE\u987A\u7684\uFF0C\u4F60\u8BE5\u6709\u7684\u8F9B\u9178\u522B\u4EBA\u4E5F\u66FE\u6709\u8FC7\u3002"]})]})})}},20640:function(Y,w,o){"use strict";var ne=o(11742),X={"text/plain":"Text","text/html":"Url",default:"Text"},ue="Copy to clipboard: #{key}, Enter";function Se(y){var a=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return y.replace(/#{\s*key\s*}/g,a)}function x(y,a){var G,K,J,H,V,Z,q=!1;a||(a={}),G=a.debug||!1;try{J=ne(),H=document.createRange(),V=document.getSelection(),Z=document.createElement("span"),Z.textContent=y,Z.style.all="unset",Z.style.position="fixed",Z.style.top=0,Z.style.clip="rect(0, 0, 0, 0)",Z.style.whiteSpace="pre",Z.style.webkitUserSelect="text",Z.style.MozUserSelect="text",Z.style.msUserSelect="text",Z.style.userSelect="text",Z.addEventListener("copy",function(I){if(I.stopPropagation(),a.format)if(I.preventDefault(),typeof I.clipboardData=="undefined"){G&&console.warn("unable to use e.clipboardData"),G&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var re=X[a.format]||X.default;window.clipboardData.setData(re,y)}else I.clipboardData.clearData(),I.clipboardData.setData(a.format,y);a.onCopy&&(I.preventDefault(),a.onCopy(I.clipboardData))}),document.body.appendChild(Z),H.selectNodeContents(Z),V.addRange(H);var ve=document.execCommand("copy");if(!ve)throw new Error("copy command was unsuccessful");q=!0}catch(I){G&&console.error("unable to copy using execCommand: ",I),G&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(a.format||"text",y),a.onCopy&&a.onCopy(window.clipboardData),q=!0}catch(re){G&&console.error("unable to copy using clipboardData: ",re),G&&console.error("falling back to prompt"),K=Se("message"in a?a.message:ue),window.prompt(K,y)}}finally{V&&(typeof V.removeRange=="function"?V.removeRange(H):V.removeAllRanges()),Z&&document.body.removeChild(Z),J()}return q}Y.exports=x},11742:function(Y){Y.exports=function(){var w=document.getSelection();if(!w.rangeCount)return function(){};for(var o=document.activeElement,ne=[],X=0;X<w.rangeCount;X++)ne.push(w.getRangeAt(X));switch(o.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":o.blur();break;default:o=null;break}return w.removeAllRanges(),function(){w.type==="Caret"&&w.removeAllRanges(),w.rangeCount||ne.forEach(function(ue){w.addRange(ue)}),o&&o.focus()}}}}]);