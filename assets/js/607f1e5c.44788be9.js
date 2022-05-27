"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1938],{876:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6671:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var a=n(8427),r=n(4397),i=(n(2784),n(876)),l=["components"],o={sidebar_position:9},d="Keyboard Bindings",p={unversionedId:"guides/keyboard",id:"guides/keyboard",title:"Keyboard Bindings",description:"Almost all features provided by React Complex Tree are accessible by using keyboard interactions. Default",source:"@site/docs/guides/keyboard.mdx",sourceDirName:"guides",slug:"/guides/keyboard",permalink:"/docs/guides/keyboard",editUrl:"https://github.com/lukasbach/react-complex-tree/edit/main/packages/docs/docs/guides/keyboard.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Multiple Trees",permalink:"/docs/guides/multiple-trees"},next:{title:"Interaction Modes",permalink:"/docs/guides/interaction-modes"}},m=[{value:"Default bindings",id:"default-bindings",children:[],level:2},{value:"Keyboard-bound Drag-and-Drop sequences",id:"keyboard-bound-drag-and-drop-sequences",children:[],level:2},{value:"Programmatic interaction",id:"programmatic-interaction",children:[],level:2}],u={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keyboard-bindings"},"Keyboard Bindings"),(0,i.kt)("p",null,"Almost all features provided by React Complex Tree are accessible by using keyboard interactions. Default\nbindings are provided by the framework, but can be customized via props on the tree environment by supplying\na ",(0,i.kt)("inlineCode",{parentName:"p"},"keyboardBindings")," prop to the environment, which implements the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/KeyboardBindings"},(0,i.kt)("inlineCode",{parentName:"a"},"KeyboardBindings")," interface"),"."),(0,i.kt)("h2",{id:"default-bindings"},"Default bindings"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default bindings are defined in the source code\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukasbach/react-complex-tree/blob/main/packages/core/src/hotkeys/defaultKeyboardBindings.ts"},"here"),"."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Interaction"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Binding"),(0,i.kt)("th",{parentName:"tr",align:null},"Binding Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Expand Siblings"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CONTROL + *")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"expandSiblings")),(0,i.kt)("td",{parentName:"tr",align:null},"Not yet implemented")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Move focus to first item in tree"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"HOME")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"moveFocusToFirstItem")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Move focus to last item in tree"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"END")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"moveFocusToLastItem")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Execute primary action for selected items"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ENTER")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"primaryAction")),(0,i.kt)("td",{parentName:"tr",align:null},"Calls the ",(0,i.kt)("inlineCode",{parentName:"td"},"onPrimaryAction")," hook provided to the environment.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Start renaming focused item"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"F2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"renameItem")),(0,i.kt)("td",{parentName:"tr",align:null},"Renaming is completed by submitting the form, i.e. by pressing enter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Abort renaming focused item"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ESCAPE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"abortRenameItem")),(0,i.kt)("td",{parentName:"tr",align:null},"Blurring the input also aborts renaming.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toggle the select-state of the focused item"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CONTROL + SPACE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"toggleSelectItem")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Abort search and hide the search input"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ESCAPE")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"ENTER")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"abortSearch")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Bring up the search input and focus it"),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"startSearch")),(0,i.kt)("td",{parentName:"tr",align:null},"By default, searching can be started by pressing any letter button.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Select all items"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CONTROL + A")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"selectAll")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Start keyboard-bound Drag-and-Drop sequence"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CONTROL + D")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"startProgrammaticDnd")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Complete keyboard-bound Drag-and-Drop sequence"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ENTER")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"completeProgrammaticDnd")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Abort keyboard-bound Drag-and-Drop sequence"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ESCAPE")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"abortProgrammaticDnd")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"keyboard-bound-drag-and-drop-sequences"},"Keyboard-bound Drag-and-Drop sequences"),(0,i.kt)("p",null,"Drag and Drop is also controllable via keyboard. This sequence can be started by pressing the\nhotkey ",(0,i.kt)("inlineCode",{parentName:"p"},"startProgrammaticDnd")," which is ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTROL + D")," by default. Then, the user can press the up or down keys\nto select a target location. Moving the focus to a different tree with Tab is also possible. To complete the drop,\nthe hotkey ",(0,i.kt)("inlineCode",{parentName:"p"},"completeProgrammaticDnd")," (",(0,i.kt)("inlineCode",{parentName:"p"},"ENTER"),") needs to be pressed. The drag can also be aborted with the hotkey\n",(0,i.kt)("inlineCode",{parentName:"p"},"abortProgrammaticDnd")," (",(0,i.kt)("inlineCode",{parentName:"p"},"ESCAPE"),")."),(0,i.kt)("h2",{id:"programmatic-interaction"},"Programmatic interaction"),(0,i.kt)("p",null,"Most features, like moving the focus or selecting items, can programmatically be controlled by pulling a React Ref\neither from the tree environment or the tree itself, and acting on the Ref object.\n",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/refs"},"Read the documentation on externally interacting with the tree via Refs")," to find out more."))}s.isMDXComponent=!0}}]);