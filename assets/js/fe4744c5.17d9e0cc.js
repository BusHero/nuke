"use strict";(self.webpackChunknuke_website=self.webpackChunknuke_website||[]).push([[5826],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),i=n(86010),r="tabItem_OmH5";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),i=n(67294),r=n(72389),o=n(67392),l=n(7094),s=n(12466),u=n(86010),d="tabList_uSqn",c="tabItem_LplD";function p(e){var t,n,r,p=e.lazy,m=e.block,h=e.defaultValue,g=e.values,v=e.groupId,k=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(t=null!=h?h:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.U)(),x=y.tabGroupChoices,T=y.setTabGroupChoices,C=(0,i.useState)(N),E=C[0],O=C[1],S=[],Z=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=x[v];null!=I&&I!==E&&b.some((function(e){return e.value===I}))&&O(I)}var z=function(e){var t=e.currentTarget,n=S.indexOf(t),a=b[n].value;a!==E&&(Z(t),O(a),null!=v&&T(v,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var i=S.indexOf(e.currentTarget)-1;n=S[i]||S[S.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,u.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},k)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return S.push(e)},onKeyDown:P,onFocus:z,onClick:z},r,{className:(0,u.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),p?(0,i.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},95736:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(63366),i=n(67294),r=n(91262),o=n(86010),l="controlInfo_EsNG",s=["src"],u=function(e){var t=e.src,u=(0,a.Z)(e,s);return i.createElement(r.Z,null,(function(){var e=n(55126),a=(0,i.useRef)(null);return(0,i.useEffect)((function(){var n=a.current;e.create(t,n,u)}),[t]),i.createElement(i.Fragment,null,i.createElement("div",{ref:a}),i.createElement("div",{className:(0,o.Z)(l)},"Use ",i.createElement("kbd",null,"Space")," to pause/play, ",i.createElement("kbd",null,"\u2b05")," and ",i.createElement("kbd",null,"\u2b95")," to seek backward/forward, or ",i.createElement("kbd",null,"F")," to fullscreen."))}))}},64710:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return h}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(9877),l=n(72360),s=n(55670),u=(n(95736),["components"]),d={title:"Build Execution"},c=void 0,p={unversionedId:"getting-started/execution",id:"getting-started/execution",title:"Build Execution",description:"After you've set up a build you can run it either through the global tool or one of the installed bootstrapping scripts:",source:"@site/docs/01-getting-started/03-execution.md",sourceDirName:"01-getting-started",slug:"/getting-started/execution",permalink:"/docs/getting-started/execution",draft:!1,editUrl:"https://github.com/nuke-build/nuke/edit/develop/website/docs/01-getting-started/03-execution.md",tags:[],version:"current",lastUpdatedBy:"Matthias Koch",lastUpdatedAt:1655975335,formattedLastUpdatedAt:"6/23/2022",sidebarPosition:3,frontMatter:{title:"Build Execution"},sidebar:"tutorialSidebar",previous:{title:"Build Setup",permalink:"/docs/getting-started/setup"},next:{title:"Telemetry",permalink:"/docs/getting-started/telemetry"}},m={},h=[{value:"Build Summary",id:"build-summary",level:2},{value:"Invoking Targets",id:"invoking-targets",level:2},{value:"Skipping Targets",id:"skipping-targets",level:2},{value:"Aborting Builds",id:"aborting-builds",level:2},{value:"Continuing Builds",id:"continuing-builds",level:2},{value:"Help Text",id:"help-text",level:2},{value:"Execution Plans",id:"execution-plans",level:2}],g={toc:h};function v(e){var t=e.components,d=(0,i.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After you've ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/setup"},"set up a build")," you can run it either through the global tool or one of the installed bootstrapping scripts:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"global-tool",label:"Global Tool",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\nnuke [arguments]\n"))),(0,r.kt)(l.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\n.\\build.cmd [arguments]\n"))),(0,r.kt)(l.Z,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\n./build.sh [arguments]\n")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This document discusses the default build arguments (also referred to as parameters). You will learn how to ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/parameters"},"define custom parameters")," in a following chapter."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The global tool makes running builds a lot easier. Once you've configured the ",(0,r.kt)("a",{parentName:"p",href:"/docs/global-tool/shell-completion"},"shell completion"),", you can enter arguments much faster and avoid any typos. It also allows you to run a build from anywhere below the root directory without having to go back to where the bootstrapping scripts are located."))),(0,r.kt)("h2",{id:"build-summary"},"Build Summary"),(0,r.kt)("p",null,"Once a build has finished running an execution plan, it will print a comprehensive summary with all involved targets, their outcome, duration, and additional metadata:"),(0,r.kt)(s.Z,{mdxType:"CodeBlock"},"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550","\n","Target             Status      Duration","\n","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\n","Restore            Succeeded       0:16","\n","Compile            Succeeded       0:59   // Version: 5.3.0-alpha.35","\n","Test               Succeeded       0:41   // Passed: 327, Skipped: 6","\n","Pack               Succeeded       0:10   // Packages: 4","\n","\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500","\n","Total                              2:08","\n","\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550","\n","\n","Build succeeded on ",(new Date).toLocaleString(),". \uff3c\uff08\uff3e\u1d17\uff3e\uff09\uff0f"),(0,r.kt)("h2",{id:"invoking-targets"},"Invoking Targets"),(0,r.kt)("p",null,"You can invoke a single target or a set of targets either through positional or named arguments:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"positional-argument",label:"Positional Argument",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\nnuke <target> [other-targets...]\n"))),(0,r.kt)(l.Z,{value:"named-argument",label:"Named Argument",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\nnuke [arguments...] --targets <target> [other-targets...]\n")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Passing targets as named arguments allows you to quickly overwrite the invoked targets without moving the caret to the front of a long invocation command."))),(0,r.kt)("h2",{id:"skipping-targets"},"Skipping Targets"),(0,r.kt)("p",null,"You can skip all or individual targets from the execution plan that are not specifically invoked:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"skip-all",label:"Skipping All Targets",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\nnuke [targets] --skip\n"))),(0,r.kt)(l.Z,{value:"skip-individual",label:"Skipping Individual Targets",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\nnuke [targets] --skip <other-targets...>\n")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Skipping targets can greatly improve your troubleshooting experience. Irrelevant targets won't waste execution time and there is no need to temporarily change dependencies between targets."))),(0,r.kt)("h2",{id:"aborting-builds"},"Aborting Builds"),(0,r.kt)("p",null,"At any moment during execution, you can hit ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl-C")," to abort the build with a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/console/ctrl-c-and-ctrl-break-signals"},"SIGINT signal"),". Targets that were running at the time will be marked with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Aborted")," status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nTarget             Status      Duration\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nRestore            Succeeded       0:16\nCompile            Aborted         0:01\nPack               NotRun\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nTotal                              0:17\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n")),(0,r.kt)("h2",{id:"continuing-builds"},"Continuing Builds"),(0,r.kt)("p",null,"You can continue a failed or aborted build from the first point of failure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\nnuke [arguments...] --continue\n")),(0,r.kt)("p",null,"All previously succeeded targets will be skipped automatically, which can save a lot of unnecessary execution time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nTarget             Status      Duration\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nRestore            Skipped\nCompile            Succeeded       0:15\nPack               Succeeded       0:05\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nTotal                              0:20\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When you combine the ",(0,r.kt)("inlineCode",{parentName:"p"},"--continue")," argument with the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/dotnet/core/tools/dotnet-watch"},(0,r.kt)("inlineCode",{parentName:"a"},"dotnet watch"))," command, you can establish a very tight feedback loop while working on your target implementation. Just go to the build project directory and call:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\ndotnet watch run -- [arguments..] --continue\n")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The state of the build instance is NOT serialized. I.e., if a succeeded target produced data for a failed target, that data won't be available during the continuation of the build."),(0,r.kt)("p",{parentName:"div"},"Moreover, a build can only reliably continue when the invocation is the same as in the previous attempt. That means that you can only add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--continue")," switch but not change any other arguments. If this rule is violated, the build will start from the very beginning."))),(0,r.kt)("h2",{id:"help-text"},"Help Text"),(0,r.kt)("p",null,"When you're coming back to a repository or build you haven't worked on in a while, you can bring up the integrated help text by calling:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\nnuke --help\n")),(0,r.kt)("p",null,"This allows you to inspect all available targets with their direct dependencies as well as parameters with their descriptions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Targets (with their direct dependencies):\n\n  Clean\n  Restore\n  Compile (default)    -> Restore\n\nParameters:\n\n  --configuration         Configuration to build - Default is 'Debug' (local) or\n                          'Release' (server).\n\n  --continue              Indicates to continue a previously failed build attempt.\n  --help                  Shows the help text for this build assembly.\n  --host                  Host for execution. Default is 'automatic'.\n  --no-logo               Disables displaying the NUKE logo.\n  --plan                  Shows the execution plan (HTML).\n  --profile               Defines the profiles to load.\n  --root                  Root directory during build execution.\n  --skip                  List of targets to be skipped. Empty list skips all\n                          dependencies.\n  --target                List of targets to be invoked. Default is 'Compile'.\n  --verbosity             Logging verbosity during build execution. Default is\n                          'Normal'.\n")),(0,r.kt)("h2",{id:"execution-plans"},"Execution Plans"),(0,r.kt)("p",null,"In order to get a better understanding of how your builds are structured, you can load a visual representation of the different execution plans by calling:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\nnuke --plan\n")),(0,r.kt)("p",null,"Hovering a target will show its individual execution plan, that means, all targets that are going to be executed when one specific target is invoked. The style of an edge (solid/dashed/yellow) between two targets indicates their ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/targets#dependencies"},"dependency relation")," (execution/ordering/trigger):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Visualizing Execution Plans",src:n(92851).Z,width:"1208",height:"496"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When no targets are hovered, the execution plan for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/builds"},"default targets")," is highlighted."))))}v.isMDXComponent=!0},92851:function(e,t,n){t.Z=n.p+"assets/images/plan-6524e4336fe035eeaa0f6448576a02af.gif"}}]);