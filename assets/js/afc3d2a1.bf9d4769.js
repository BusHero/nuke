"use strict";(self.webpackChunknuke_website=self.webpackChunknuke_website||[]).push([[2257],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34047:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Telemetry"},p=void 0,d={unversionedId:"getting-started/telemetry",id:"getting-started/telemetry",title:"Telemetry",description:"As an effort to improve NUKE and to provide you with a better, more tailored experience, we include a telemetry feature that collects anonymous usage data and enables us to make more informed decisions for the future.",source:"@site/docs/01-getting-started/07-telemetry.md",sourceDirName:"01-getting-started",slug:"/getting-started/telemetry",permalink:"/docs/getting-started/telemetry",draft:!1,editUrl:"https://github.com/nuke-build/nuke/edit/develop/website/docs/01-getting-started/07-telemetry.md",tags:[],version:"current",lastUpdatedBy:"Matthias Koch",lastUpdatedAt:1655975335,formattedLastUpdatedAt:"6/23/2022",sidebarPosition:7,frontMatter:{title:"Telemetry"},sidebar:"tutorialSidebar",previous:{title:"Build Execution",permalink:"/docs/getting-started/execution"},next:{title:"Build Anatomy",permalink:"/docs/fundamentals/builds"}},s={},m=[{value:"Disclosure",id:"disclosure",level:2},{value:"Scope",id:"scope",level:2},{value:"Data Points",id:"data-points",level:2},{value:"How to opt-out",id:"how-to-opt-out",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As an effort to improve NUKE and to provide you with a better, more tailored experience, we include a telemetry feature that collects anonymous usage data and enables us to make more informed decisions for the future."),(0,o.kt)("p",null,"We want you to be fully aware about telemetry, which is why the global tool will show a disclosure notice on first start. In addition, every build project requires to define a ",(0,o.kt)("inlineCode",{parentName:"p"},"NukeTelemetryVersion")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="_build.csproj"',title:'"_build.csproj"'},"<PropertyGroup>\n  <NukeTelemetryVersion>1</NukeTelemetryVersion>\n</PropertyGroup>\n")),(0,o.kt)("p",null,"We will increase the telemetry version whenever we add or change significant data points. With every version change and  after updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nuke.Common")," package, you will be prompted again for confirmation."),(0,o.kt)("h2",{id:"disclosure"},"Disclosure"),(0,o.kt)("p",null,"NUKE will display a prompt similar to the following when executing a build project without the ",(0,o.kt)("inlineCode",{parentName:"p"},"NukeTelemetryVersion")," property being set or when executing the global tool for the first time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Telemetry\n---------\nNUKE collects anonymous usage data in order to help us improve your experience.\n\nRead more about scope, data points, and opt-out: https://nuke.build/telemetry\n")),(0,o.kt)("p",null,"Once you confirm the notice, NUKE will either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an awareness cookie under ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.nuke/telemetry-awareness/v1")," for the respective global tool, or"),(0,o.kt)("li",{parentName:"ul"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"NukeTelemetryVersion")," property to the project file.")),(0,o.kt)("h2",{id:"scope"},"Scope"),(0,o.kt)("p",null,"As a global tool and library, NUKE has ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nuke-build/nuke/blob/master/source/Nuke.Common/Execution/Telemetry.Events.cs"},"multiple events")," where telemetry is collected:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BuildStarted")," \u2013 when a build was started"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TargetSucceeded")," \u2013 when a target succeeded (only ",(0,o.kt)("inlineCode",{parentName:"li"},"Restore"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Compile"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Test"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BuildSetup")," \u2013 when setting up a build via ",(0,o.kt)("inlineCode",{parentName:"li"},"nuke [:setup]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CakeConvert")," \u2013 when converting Cake files via ",(0,o.kt)("inlineCode",{parentName:"li"},"nuke :cake-convert"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Data for ",(0,o.kt)("inlineCode",{parentName:"p"},"BuildStarted")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TargetSucceeded")," is only collected when ",(0,o.kt)("inlineCode",{parentName:"p"},"IsServerBuild")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (i.e., CI build), or the build is invoked via global tool. I.e., a contributor executing ",(0,o.kt)("inlineCode",{parentName:"p"},"build.ps1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sh")," will not have telemetry enabled unknowingly. Likewise, when a build project targets a higher telemetry version than the installed global tool, the lower version will be used."))),(0,o.kt)("h2",{id:"data-points"},"Data Points"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nuke-build/nuke/blob/master/source/Nuke.Common/Execution/Telemetry.Properties.cs"},"telemetry data points")," do not collect personal data, such as usernames or email addresses. The data is sent securely to Microsoft servers using ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/monitor/"},"Azure Monitor")," technology, held under restricted access, and published under strict security controls from secure ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/storage/"},"Azure Storage")," systems."),(0,o.kt)("p",null,"Protecting your privacy is important to us. If you suspect the telemetry is collecting sensitive data or the data is being insecurely or inappropriately handled, file an issue in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nuke-build/nuke"},"nuke-build/nuke")," repository or ",(0,o.kt)("a",{parentName:"p",href:"mailto:info@nuke.build?subject=Telemetry"},"email us")," for investigation."),(0,o.kt)("p",null,"The telemetry feature collects the following data:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Data"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Timestamp of invocation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Operating system")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Version of .NET SDK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Repository provider (GitHub, GitLab, Bitbucket, etc.)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Repository Branch (",(0,o.kt)("inlineCode",{parentName:"td"},"main"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"develop"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"feature"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"hotfix"),", custom)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Hashed Repository URL (SHA256; first 6 characters)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Hashed Commit Sha (SHA256; first 6 characters)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Compile time of build project in seconds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Target framework")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Version of ",(0,o.kt)("inlineCode",{parentName:"td"},"Nuke.Common")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"Nuke.GlobalTool"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Host implementation (only non-custom)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Build type (project/global tool)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number of executable targets")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number of custom extensions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number of custom components")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Used configuration generators and build components (only non-custom)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"All"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Target execution time in seconds (only for targets named ",(0,o.kt)("em",{parentName:"td"},"Restore"),", ",(0,o.kt)("em",{parentName:"td"},"Compile"),", or ",(0,o.kt)("em",{parentName:"td"},"Test"),")")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Whenever a type does not originate from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nuke")," namespace, it is replaced with ",(0,o.kt)("inlineCode",{parentName:"p"},"<External>"),"."))),(0,o.kt)("h2",{id:"how-to-opt-out"},"How to opt-out"),(0,o.kt)("p",null,"The telemetry feature is enabled by default. To opt-out, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"NUKE_TELEMETRY_OPTOUT")," environment variable to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."))}c.isMDXComponent=!0}}]);