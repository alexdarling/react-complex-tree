"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4252],{876:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return n?r.createElement(u,o(o({ref:t},s),{},{components:n})):r.createElement(u,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7733:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(8427),a=n(4397),i=(n(2784),n(876)),o=["components"],d={sidebar_position:5},l="Drag and Drop Customizability",p={unversionedId:"guides/drag-and-drop",id:"guides/drag-and-drop",title:"Drag and Drop Customizability",description:"React Complex Tree provides advanced drag-and-drop capabilities that can easily be enabled via props on",source:"@site/docs/guides/drag-and-drop.mdx",sourceDirName:"guides",slug:"/guides/drag-and-drop",permalink:"/docs/guides/drag-and-drop",editUrl:"https://github.com/lukasbach/react-complex-tree/edit/main/packages/docs/docs/guides/drag-and-drop.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Managing a tree's view state",permalink:"/docs/guides/viewstate"},next:{title:"Search Functionality",permalink:"/docs/guides/search"}},s=[{value:"Disabled Drag and Drop",id:"disabled-drag-and-drop",children:[],level:2},{value:"Only reordering of items allowed",id:"only-reordering-of-items-allowed",children:[],level:2},{value:"Only dropping on items with children allowed",id:"only-dropping-on-items-with-children-allowed",children:[],level:2},{value:"Only dropping on items without children allowed",id:"only-dropping-on-items-without-children-allowed",children:[],level:2},{value:"Dropping everywhere is allowed",id:"dropping-everywhere-is-allowed",children:[],level:2},{value:"Specifying which items can be dragged",id:"specifying-which-items-can-be-dragged",children:[],level:2},{value:"Specifying on which items can be dropped",id:"specifying-on-which-items-can-be-dropped",children:[],level:2},{value:"Programmatic interaction",id:"programmatic-interaction",children:[],level:2}],m={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"drag-and-drop-customizability"},"Drag and Drop Customizability"),(0,i.kt)("p",null,"React Complex Tree provides advanced drag-and-drop capabilities that can easily be enabled via props on\nthe tree environment. Once they are enabled, drag works natively between as many trees as are rendered\nwithin the environment. The user can also select multiple items (by pressing CTRL + left click on an item)\nand drag all of them at once to a new location. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/keyboard"},"Keyboard Bindings"),"\nfor more details on ways to select one or several items."),(0,i.kt)("p",null,"Also, drag and drop works also by only using the keyboard. This can be triggered by selecting one or several\nitems, then pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL + D"),", pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"UP")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DOWN")," to find a target location and pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"ENTER")," to drop or\n",(0,i.kt)("inlineCode",{parentName:"p"},"ESCAPE")," to abort drag. The user can also tab to a different tree within the same tree environment to drop the items\non that tree. The key bindings can be changed via props, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/keyboard"},"Keyboard Bindings"),"\nfor more details."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All props that can be provided to the tree environment to control drag and drop capabilities are documented\nin the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/TreeCapabilities"},"TreeCapabilities interface"),"."))),(0,i.kt)("h2",{id:"disabled-drag-and-drop"},"Disabled Drag and Drop"),(0,i.kt)("p",null,"By default, drag and drop is disabled. Clicking on items or attempting to drag them will just set the focus\nand selected item state on the item clicked on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{}}\n    >\n      <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n')),(0,i.kt)("h2",{id:"only-reordering-of-items-allowed"},"Only reordering of items allowed"),(0,i.kt)("p",null,"Supplying the ",(0,i.kt)("inlineCode",{parentName:"p"},"canDragAndDrop")," with the value ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," alongside the ",(0,i.kt)("inlineCode",{parentName:"p"},"canReorderItems")," allows the user\nto reorder items by clicking on them and dragging them to a new location in the tree."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{}}\n      canDragAndDrop={true}\n      canReorderItems={true}\n    >\n      <Tree treeId="tree-2" rootItem="root" treeLabel="Tree Example" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n')),(0,i.kt)("h2",{id:"only-dropping-on-items-with-children-allowed"},"Only dropping on items with children allowed"),(0,i.kt)("p",null,"Supplying the ",(0,i.kt)("inlineCode",{parentName:"p"},"canDragAndDrop")," with the value ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," alongside the ",(0,i.kt)("inlineCode",{parentName:"p"},"canDropOnItemWithChildren")," allows the user\nto drop items on other nodes that have the property ",(0,i.kt)("inlineCode",{parentName:"p"},"hasChildren")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". Note that this includes empty\ncontainers that have this property set as well. Reordering of items within a parent is not possible without\nproviding the ",(0,i.kt)("inlineCode",{parentName:"p"},"canReorderItems")," prop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{}}\n      canDragAndDrop={true}\n      canDropOnItemWithChildren={true}\n    >\n      <Tree treeId="tree-3" rootItem="root" treeLabel="Tree Example" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n')),(0,i.kt)("h2",{id:"only-dropping-on-items-without-children-allowed"},"Only dropping on items without children allowed"),(0,i.kt)("p",null,"Supplying the ",(0,i.kt)("inlineCode",{parentName:"p"},"canDragAndDrop")," with the value ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," alongside the ",(0,i.kt)("inlineCode",{parentName:"p"},"canDropOnItemWithoutChildren")," allows the user\nto drop items on other nodes that have the property ",(0,i.kt)("inlineCode",{parentName:"p"},"hasChildren")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Note that, in this example,\nitems dropped on other nodes immediately disappear as target nodes continue to not show any children because\ntheir property ",(0,i.kt)("inlineCode",{parentName:"p"},"hasChildren")," being false."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{}}\n      canDragAndDrop={true}\n      canDropOnItemWithoutChildren={true}\n    >\n      <Tree treeId="tree-4" rootItem="root" treeLabel="Tree Example" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n')),(0,i.kt)("h2",{id:"dropping-everywhere-is-allowed"},"Dropping everywhere is allowed"),(0,i.kt)("p",null,"Supplying the props ",(0,i.kt)("inlineCode",{parentName:"p"},"canDragAndDrop"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"canReorderItems"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"canDropOnItemWithChildren")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"canDropOnItemWithoutChildren"),"\nall with the value ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," allows all possible drop positions to be viable targets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{}}\n      canDragAndDrop={true}\n      canReorderItems={true}\n      canDropOnItemWithChildren={true}\n      canDropOnItemWithoutChildren={true}\n    >\n      <Tree treeId="tree-5" rootItem="root" treeLabel="Tree Example" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n')),(0,i.kt)("h2",{id:"specifying-which-items-can-be-dragged"},"Specifying which items can be dragged"),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"canDrag"),", a method can be provided to evaluate whether a certain item can be dragged or not.\nThe method takes an array of all items currently selected, which are attempted to be dragged. If the method\nreturns false, the drag is not initiated."),(0,i.kt)("p",null,"In the following example, only items whose name starts with the letter ",(0,i.kt)("strong",{parentName:"p"},"A")," are allowed to be dragged."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{\n        'tree-6': {\n          expandedItems: ['Fruit', 'Meals'],\n        },\n      }}\n      canDragAndDrop={true}\n      canReorderItems={true}\n      canDropOnItemWithChildren={true}\n      canDrag={items => items.map(item => item.data.startsWith('A')).reduce((a, b) => a && b, true)}\n    >\n      <Tree treeId=\"tree-6\" rootItem=\"root\" treeLabel=\"Tree Example\" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n")),(0,i.kt)("h2",{id:"specifying-on-which-items-can-be-dropped"},"Specifying on which items can be dropped"),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"canDropAt"),", a method can be provided to evaluate whether a certain item is a viable drop target.\nThe method takes an array of all items that are being dragged, as well as the drop target on which a drop\nwas attempted. If the method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the drop event is aborted. The method is evaluated for every\ndrop location at the time when the drag is initiated, and is also visually shown when the user attempts\nto drag over possible targets."),(0,i.kt)("p",null,"Note that, when reordering is allowed, the user can also reorder items within parents that succeed the evaluation\nof the ",(0,i.kt)("inlineCode",{parentName:"p"},"canDropAt")," method, but not within parents that do not."),(0,i.kt)("p",null,"In the following example, only items whose name starts with the letter ",(0,i.kt)("strong",{parentName:"p"},"A")," are considered viable drop targets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  return (\n    <UncontrolledTreeEnvironment\n      dataProvider={new StaticTreeDataProvider(longTree.items, (item, data) => ({ ...item, data }))}\n      getItemTitle={item => item.data}\n      viewState={{\n        'tree-7': {\n          expandedItems: ['Fruit', 'Meals'],\n        },\n      }}\n      canDragAndDrop={true}\n      canReorderItems={true}\n      canDropOnItemWithChildren={true}\n      canDropAt={(items, target) =>\n        target.targetType === 'between-items' ? target.parentItem.startsWith('A') : target.targetItem.startsWith('A')\n      }\n    >\n      <Tree treeId=\"tree-7\" rootItem=\"root\" treeLabel=\"Tree Example\" />\n    </UncontrolledTreeEnvironment>\n  );\n}\n")),(0,i.kt)("h2",{id:"programmatic-interaction"},"Programmatic interaction"),(0,i.kt)("p",null,"This feature can programmatically be controlled by pulling a React Ref either from the tree environment\nor the tree itself, and acting on the Ref object. ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/refs"},"Read the documentation on externally interacting\nwith the tree via Refs")," to find out more."))}c.isMDXComponent=!0}}]);