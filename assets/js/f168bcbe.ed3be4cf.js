"use strict";(self.webpackChunknuke_website=self.webpackChunknuke_website||[]).push([[2978],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294),o=n(86010),l="tabItem_OmH5";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),o=n(67294),l=n(72389),r=n(67392),i=n(7094),u=n(12466),s=n(86010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,m=e.block,h=e.defaultValue,b=e.values,f=e.groupId,v=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,r.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==N&&!y.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),T=w.tabGroupChoices,x=w.setTabGroupChoices,O=(0,o.useState)(N),E=O[0],j=O[1],P=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=T[f];null!=I&&I!==E&&y.some((function(e){return e.value===I}))&&j(I)}var M=function(e){var t=e.currentTarget,n=P.indexOf(t),a=y[n].value;a!==E&&(C(t),j(a),null!=f&&x(f,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var o=P.indexOf(e.currentTarget)-1;n=P[o]||P[P.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},v)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return P.push(e)},onKeyDown:Z,onFocus:M,onClick:M},l,{className:(0,s.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),p?(0,o.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,l.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},88857:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var a=n(87462),o=n(63366),l=(n(67294),n(3905)),r=n(9877),i=n(72360),u=["components"],s={title:"Global Builds"},c=void 0,d={unversionedId:"sharing/global-builds",id:"sharing/global-builds",title:"Global Builds",description:"Instead of adding and maintaining build projects in all your repositories, you can also build them by convention using a global build. Global builds are based on the concept of .NET global tools and additionally include all the necessary tools referenced through NuGet packages. That means that for building one of your repositories, you only need to install and execute your pre-packaged build.",source:"@site/docs/04-sharing/01-global-builds.md",sourceDirName:"04-sharing",slug:"/sharing/global-builds",permalink:"/docs/sharing/global-builds",draft:!1,editUrl:"https://github.com/nuke-build/nuke/edit/develop/website/docs/04-sharing/01-global-builds.md",tags:[],version:"current",lastUpdatedBy:"Matthias Koch",lastUpdatedAt:1655975335,formattedLastUpdatedAt:"6/23/2022",sidebarPosition:1,frontMatter:{title:"Global Builds"},sidebar:"tutorialSidebar",previous:{title:"Chats & Social Media",permalink:"/docs/common/chats"},next:{title:"Build Components",permalink:"/docs/sharing/build-components"}},p={},m=[{value:"Packaging",id:"packaging",level:2},{value:"Installation",id:"installation",level:2},{value:"Execution",id:"execution",level:2}],h={toc:m};function b(e){var t=e.components,n=(0,o.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Instead of adding and maintaining build projects in all your repositories, you can also build them by convention using a global build. Global builds are based on the concept of ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools"},".NET global tools")," and additionally include all the necessary tools referenced through NuGet packages. That means that for building one of your repositories, you only need to install and execute your pre-packaged build."),(0,l.kt)("h2",{id:"packaging"},"Packaging"),(0,l.kt)("p",null,"As a first step, you need to extend the build project file with the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools-how-to-create#setup-the-global-tool"},"necessary information for global tool packaging"),". Particularly, that includes the ",(0,l.kt)("inlineCode",{parentName:"p"},"PackAsTool")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ToolCommandName")," property:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="MyBuild.csproj"',title:'"MyBuild.csproj"'},'<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n    <OutputType>Exe</OutputType>\n    <TargetFramework>net6.0</TargetFramework>\n    // highlight-start\n    <PackAsTool>true</PackAsTool>\n    <ToolCommandName>my-build</ToolCommandName>\n    // highlight-end\n  </PropertyGroup>\n\n</Project>\n')),(0,l.kt)("p",null,"Afterwards, the project can be packaged and deployed as usual:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\ndotnet pack --version <version>\n# terminal-command\ndotnet nuget push MyBuild.<version>.nupkg --source <source> --api-key <token>\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Currently, ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/core/deploying/single-file/overview"},"single-file deployments")," are not supported. That means that the operating system must have the .NET SDK installed. Feel free to track the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nuke-build/nuke/issues/822"},"related GitHub issue")," for any updates."))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Once the global build is packaged and deployed, you can install it either locally to a repository or globally on your development machine:"),(0,l.kt)(r.Z,{groupId:"tool-type",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"local-tool",label:"Local Tool",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\ndotnet new tool-manifest\n# terminal-command\ndotnet tool install MyBuild\n"))),(0,l.kt)(i.Z,{value:"global-tool",label:"Global Tool",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\ndotnet tool install -g MyBuild\n")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When you want to guarantee reproducibility, local tools are the better fit since the version is pinned individually for every repository. Global tools, on the other hand, provide more convenience in that you're always building with the same version. This is especially helpful when your conventions, like folder structure and namings, are already well evolved."))),(0,l.kt)("h2",{id:"execution"},"Execution"),(0,l.kt)("p",null,"After installation, you can invoke the build through the command that you've specified in ",(0,l.kt)("inlineCode",{parentName:"p"},"ToolCommandName"),". As per the example from above:"),(0,l.kt)(r.Z,{groupId:"tool-type",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"local-tool",label:"Local Tool",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\ndotnet my-build [args]\n"))),(0,l.kt)(i.Z,{value:"global-tool",label:"Global Tool",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"# terminal-command\nmy-build [args]\n")))))}b.isMDXComponent=!0}}]);