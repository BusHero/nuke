"use strict";(self.webpackChunknuke_website=self.webpackChunknuke_website||[]).push([[1655],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(o,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),i=n(86010),r="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),i=n(67294),r=n(72389),l=n(67392),s=n(7094),o=n(12466),d=n(86010),c="tabList_uSqn",u="tabItem_LplD";function p(e){var t,n,r,p=e.lazy,m=e.block,h=e.defaultValue,g=e.values,v=e.groupId,k=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=g?g:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(N,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,s.U)(),w=x.tabGroupChoices,T=x.setTabGroupChoices,B=(0,i.useState)(y),C=B[0],E=B[1],_=[],A=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=w[v];null!=D&&D!==C&&N.some((function(e){return e.value===D}))&&E(D)}var O=function(e){var t=e.currentTarget,n=_.indexOf(t),a=N[n].value;a!==C&&(A(t),E(a),null!=v&&T(v,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;n=_[a]||_[0];break;case"ArrowLeft":var i=_.indexOf(e.currentTarget)-1;n=_[i]||_[_.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,d.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":m},k)},N.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return _.push(e)},onKeyDown:I,onFocus:O,onClick:O},r,{className:(0,d.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),p?(0,i.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},68021:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=n(9877),s=n(72360),o=(n(55670),["components"]),d={title:"Target Definitions"},c=void 0,u={unversionedId:"fundamentals/targets",id:"fundamentals/targets",title:"Target Definitions",description:"Inside a Build class, you can define your build steps as Target properties. The implementation for a build step is provided as a lambda function through the Executes method:",source:"@site/docs/02-fundamentals/05-targets.md",sourceDirName:"02-fundamentals",slug:"/fundamentals/targets",permalink:"/docs/fundamentals/targets",draft:!1,editUrl:"https://github.com/nuke-build/nuke/edit/develop/website/docs/02-fundamentals/05-targets.md",tags:[],version:"current",lastUpdatedBy:"Matthias Koch",lastUpdatedAt:1655975335,formattedLastUpdatedAt:"6/23/2022",sidebarPosition:5,frontMatter:{title:"Target Definitions"},sidebar:"tutorialSidebar",previous:{title:"Build Anatomy",permalink:"/docs/fundamentals/builds"},next:{title:"Parameters",permalink:"/docs/fundamentals/parameters"}},p={},m=[{value:"Dependencies",id:"dependencies",level:2},{value:"Conditional Execution",id:"conditional-execution",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Failure Handling",id:"failure-handling",level:2},{value:"Unlisting Targets",id:"unlisting-targets",level:2}],h={toc:m};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Inside a ",(0,r.kt)("inlineCode",{parentName:"p"},"Build")," class, you can define your build steps as ",(0,r.kt)("inlineCode",{parentName:"p"},"Target")," properties. The implementation for a build step is provided as a lambda function through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Executes")," method: "),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"regular",label:"Regular Targets",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Build.cs"',title:'"Build.cs"'},'class Build : NukeBuild\n{\n    public static int Main() => Execute<Build>();\n\n    Target MyTarget => _ => _\n        .Executes(() =>\n        {\n            Console.WriteLine("Hello!");\n        });\n}\n'))),(0,r.kt)(s.Z,{value:"async",label:"Async Targets",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Build.cs"',title:'"Build.cs"'},'class Build : NukeBuild\n{\n    public static int Main() => Execute<Build>();\n\n    Target MyTarget => _ => _\n        .Executes(async () =>\n        {\n            await Console.Out.WriteLineAsync("Hello!");\n        });\n}\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Async targets are just a convenience feature that allows you using async APIs in a straightforward way. Behind the scenes, they are still run synchronously."))))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"Specifying dependencies is essential to let targets run in a meaningful and predictable order. There are 3 different types of dependencies, each of them can be defined from both directions."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"execution",label:"Execution Dependencies",mdxType:"TabItem"},(0,r.kt)("p",null,"Define that target ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," must run before target ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," unless ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," is skipped:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Build.cs"',title:'"Build.cs"'},"class Build : NukeBuild\n{\n    Target A => _ => _\n        // highlight-start\n        .DependentFor(B)      // Choose this...\n        // highlight-end\n        .Executes(() => { });\n\n    Target B => _ => _\n        // highlight-start\n        .DependsOn(A)         // ...or this!\n        // highlight-end\n        .Executes(() => { });\n}\n"))),(0,r.kt)(s.Z,{value:"ordering",label:"Ordering Dependencies",mdxType:"TabItem"},(0,r.kt)("p",null,"Define that target ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," runs before target ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," if both are scheduled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Build.cs"',title:'"Build.cs"'},"class Build : NukeBuild\n{\n    Target A => _ => _\n        // highlight-start\n        .Before(B)            // Choose this...\n        // highlight-end\n        .Executes(() => { });\n\n    Target B => _ => _\n        // highlight-start\n        .After(A)             // ...or this!\n        // highlight-end\n        .Executes(() => { });\n}\n"))),(0,r.kt)(s.Z,{value:"triggers",label:"Trigger Dependencies",mdxType:"TabItem"},(0,r.kt)("p",null,"Define that target ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," invokes target ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," once it completes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Build.cs"',title:'"Build.cs"'},"class Build : NukeBuild\n{\n    Target A => _ => _\n        // highlight-start\n        .Triggers(B)          // Choose this...\n        // highlight-end\n        .Executes(() => { });\n\n    Target B => _ => _\n        // highlight-start\n        .TriggeredBy(A)       // ...or this!\n        // highlight-end\n        .Executes(() => { });\n}\n")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When choosing a direction, you should ask yourself which target should know about the existence of the other. For instance, should a ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," target ",(0,r.kt)("em",{parentName:"p"},"trigger")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tweet")," target? Or should a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tweet")," target ",(0,r.kt)("em",{parentName:"p"},"be triggered")," by a ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," target?"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Dependencies between targets are solely defined between the individual targets and ",(0,r.kt)("em",{parentName:"p"},"not")," through the position they take in a dependency call. The following examples illustrates the difference between the ",(0,r.kt)("strong",{parentName:"p"},"partial and total order")," of targets:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"partial",label:"Partial Order",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Build.cs"',title:'"Build.cs"'},"class Build : NukeBuild\n{\n    Target A => _ => _\n        .Executes(() => { });\n\n    Target B => _ => _\n        .Executes(() => { });\n\n    Target C => _ => _\n        // highlight-start\n        .DependsOn(A, B)\n        // highlight-end\n        .Executes(() => { });\n}\n")),(0,r.kt)("p",{parentName:"div"},"The execution is nondeterministic between ",(0,r.kt)("inlineCode",{parentName:"p"},"A->B->C")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B->A->C"),". This isn't necessarily problematic, but something to be aware of. In particular, it allows different targets to run in parallel (currently only in compatible CI/CD environments)."),"  "),(0,r.kt)(s.Z,{value:"total",label:"Total Order",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Build.cs"',title:'"Build.cs"'},"class Build : NukeBuild\n{\n    Target A => _ => _\n        .Executes(() => { });\n\n    Target B => _ => _\n        // highlight-start\n        .DependsOn(A)\n        // highlight-end\n        .Executes(() => { });\n\n    Target C => _ => _\n        // highlight-start\n        .DependsOn(B)\n        // highlight-end\n        .Executes(() => { });\n}\n")),(0,r.kt)("p",{parentName:"div"},"The execution is always deterministic with ",(0,r.kt)("inlineCode",{parentName:"p"},"A->B->C"),"."),"  ")))),(0,r.kt)("h2",{id:"conditional-execution"},"Conditional Execution"),(0,r.kt)("p",null,"Apart from ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/execution#skipping-targets"},"skipping targets manually"),", you can also programmatically decide whether a target should be skipped. Depending on the use-case, you can choose between dynamic and static conditions."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"dynamic-conditions",label:"Dynamic Conditions",mdxType:"TabItem"},(0,r.kt)("p",null,"Define a condition that is checked right before target ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," executes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class Build : NukeBuild\n{\n    readonly List<string> Data = new();\n\n    Target A => _ => _\n        .Executes(() => { /* Populate Data */ });\n\n    Target B => _ => _\n        .DependsOn(A)\n        // highlight-start\n        .OnlyWhenDynamic(() => Data.Any())\n        // highlight-end\n        .Execute(() => { });\n}\n"))),(0,r.kt)(s.Z,{value:"static-conditions",label:"Static Conditions",mdxType:"TabItem"},(0,r.kt)("p",null,"Define a condition that is checked before target ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class Build : NukeBuild\n{\n    Target A => _ => _\n        .Executes(() => { });\n\n    Target B => _ => _\n        // highlight-start\n        .OnlyWhenStatic(() => IsLocalBuild)\n        // By default, dependencies are skipped\n        .WhenSkipped(DependencyBehavior.Execute)\n        // highlight-end\n        .DependsOn(A)\n        .Execute(() => { });\n}\n")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When a condition is not met, the exception message is created from the boolean expression. For more complex conditions, you can extract the logic into a separate method or property to make the message more readable."))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"You can define target requirements that are checked right at the beginning of the build execution before any other targets are executed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class Build : NukeBuild\n{\n    Target A => _ => _\n        // highlight-start\n        .Requires(() => IsServerBuild)\n        // highlight-end\n        .Executes(() => { });\n}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Target requirements are an important aspect to achieve a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fail-fast"},"fail-fast behavior"),". Preceding targets won't waste any execution time only to discover that a condition that was known right from the beginning was not met."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When a requirement is not met, the exception message is created from the boolean expression. For more complex requirements, you can extract the logic into a separate method or property to make the message more readable."))),(0,r.kt)("h2",{id:"failure-handling"},"Failure Handling"),(0,r.kt)("p",null,"Not every failing target should immediately stop the build. Targets that are not essential could allow to continue the execution, while other targets are important to run even if another target has failed. For these use-cases, you can configure the failure handling. "),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"proceed",label:"Proceeded Execution",mdxType:"TabItem"},(0,r.kt)("p",null,"Define that execution continues after target ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," throws:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'class Build : NukeBuild\n{\n    Target A => _ => _\n        // highlight-start\n        .ProceedAfterFailure()\n        // highlight-end\n        .Executes(() =>\n        {\n            Assert.Fail("error");\n        });\n\n    Target B => _ => _\n        .DependsOn(A)\n        .Execute(() => { });\n}\n'))),(0,r.kt)(s.Z,{value:"assured",label:"Assured Execution",mdxType:"TabItem"},(0,r.kt)("p",null,"Define that target ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," executes even if another target fails:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'class Build : NukeBuild\n{\n    Target A => _ => _\n        .Executes(() =>\n        {\n            Assert.Fail("error");\n        });\n\n    Target B => _ => _\n        // highlight-start\n        .AssuredAfterFailure()\n        // highlight-end\n        .DependsOn(A)\n        .Execute(() => { });\n}\n')))),(0,r.kt)("h2",{id:"unlisting-targets"},"Unlisting Targets"),(0,r.kt)("p",null,"It is good practice to follow the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Single-responsibility_principle"},"single-responsibility principle")," when implementing targets. However, you may not want to expose every target through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/execution#help-text"},"build help text"),". For cases like this, you can un-list a target:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"class Build : NukeBuild\n{\n    Target A => _ => _\n        // highlight-start\n        .Unlisted()\n        // highlight-end\n        .Executes(() => { });\n}\n")))}g.isMDXComponent=!0}}]);