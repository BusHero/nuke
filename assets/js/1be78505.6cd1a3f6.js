"use strict";(self.webpackChunknuke_website=self.webpackChunknuke_website||[]).push([[9514,4204],{49068:function(e,t,o){o.r(t),o.d(t,{default:function(){return Ze}});var n=o(67294),a=o(84204),c=o(19488),l=o(86010),i=o(95999),r=o(12466),s=o(85936);var m=o(35281),d="backToTopButton_RiI4",u="backToTopButtonShow_ssHd";function b(){var e=function(e){var t=e.threshold,o=(0,n.useState)(!1),a=o[0],c=o[1],l=(0,n.useRef)(!1),i=(0,r.Ct)(),m=i.startScroll,d=i.cancelScroll;return(0,r.RF)((function(e,o){var n=e.scrollY,a=null==o?void 0:o.scrollY;a&&(l.current?l.current=!1:n>=a?(d(),c(!1)):n<t?c(!1):n+window.innerHeight<document.documentElement.scrollHeight&&c(!0))})),(0,s.S)((function(e){e.location.hash&&(l.current=!0,c(!1))})),{shown:a,scrollToTop:function(){return m(0)}}}({threshold:300}),t=e.shown,o=e.scrollToTop;return n.createElement("button",{"aria-label":(0,i.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",m.k.common.backToTopButton,d,t&&u),type:"button",onClick:o})}var p=o(87524),v=o(86668),h=o(18487),f=o(87462);function E(e){return n.createElement("svg",(0,f.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var g="collapseSidebarButton_FykI",k="collapseSidebarButtonIcon_DTRl";function C(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,i.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,i.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",g),onClick:t},n.createElement(E,{className:k}))}var _=o(59689),S=o(63366),N=o(69688),I=o(2488),y=o(48596),Z=o(86043),T=Symbol("EmptyContext"),x=n.createContext(T);function w(e){var t=e.children,o=(0,n.useState)(null),a=o[0],c=o[1],l=(0,n.useMemo)((function(){return{expandedItem:a,setExpandedItem:c}}),[a]);return n.createElement(x.Provider,{value:l},t)}var L=o(39960),A=o(72389),M=["item","onItemClick","activePath","level","index"];function F(e){var t=e.categoryLabel,o=e.onClick;return n.createElement("button",{"aria-label":(0,i.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:o})}function P(e){var t=e.item,o=e.onItemClick,a=e.activePath,c=e.level,i=e.index,r=(0,S.Z)(e,M),s=t.items,d=t.label,u=t.collapsible,b=t.className,p=t.href,h=function(e){var t=(0,A.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,I.Wl)(e):void 0}),[e,t])}(t),E=(0,I._F)(t,a),g=(0,y.Mg)(p,a),k=(0,Z.u)({initialState:function(){return!!u&&(!E&&t.collapsed)}}),C=k.collapsed,_=k.setCollapsed;!function(e){var t=e.isActive,o=e.collapsed,a=e.setCollapsed,c=(0,N.D9)(t);(0,n.useEffect)((function(){t&&!c&&o&&a(!1)}),[t,c,o,a])}({isActive:E,collapsed:C,setCollapsed:_});var w=function(){var e=(0,n.useContext)(x);if(e===T)throw new N.i6("DocSidebarItemsExpandedStateProvider");return e}(),P=w.expandedItem,B=w.setExpandedItem;function D(e){void 0===e&&(e=!C),B(e?null:i),_(e)}var H=(0,v.L)().docs.sidebar.autoCollapseCategories;return(0,n.useEffect)((function(){u&&P&&P!==i&&H&&_(!0)}),[u,P,i,_,H]),n.createElement("li",{className:(0,l.Z)(m.k.docs.docSidebarItemCategory,m.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},b)},n.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},n.createElement(L.Z,(0,f.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":u,"menu__link--sublist-caret":!p&&u,"menu__link--active":E}),onClick:u?function(e){null==o||o(t),p?D(!1):(e.preventDefault(),D())}:function(){null==o||o(t)},"aria-current":g?"page":void 0,"aria-expanded":u?!C:void 0,href:u?null!=h?h:"#":h},r),d),p&&u&&n.createElement(F,{categoryLabel:d,onClick:function(e){e.preventDefault(),D()}})),n.createElement(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},n.createElement(K,{items:s,tabIndex:C?-1:0,onItemClick:o,activePath:a,level:c+1})))}var B=o(13919),D=o(90541),H="menuExternalLink_KU1_",R=["item","onItemClick","activePath","level","index"];function V(e){var t=e.item,o=e.onItemClick,a=e.activePath,c=e.level,i=(e.index,(0,S.Z)(e,R)),r=t.href,s=t.label,d=t.className,u=(0,I._F)(t,a),b=(0,B.Z)(r);return n.createElement("li",{className:(0,l.Z)(m.k.docs.docSidebarItemLink,m.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",d),key:s},n.createElement(L.Z,(0,f.Z)({className:(0,l.Z)("menu__link",!b&&H,{"menu__link--active":u}),"aria-current":u?"page":void 0,to:r},b&&{onClick:o?function(){return o(t)}:void 0},i),s,!b&&n.createElement(D.Z,null)))}var W="menuHtmlItem_hP_2";function z(e){var t=e.item,o=e.level,a=e.index,c=t.value,i=t.defaultStyle,r=t.className;return n.createElement("li",{className:(0,l.Z)(m.k.docs.docSidebarItemLink,m.k.docs.docSidebarItemLinkLevel(o),i&&W+" menu__list-item",r),key:a,dangerouslySetInnerHTML:{__html:c}})}var G=["item"];function U(e){var t=e.item,o=(0,S.Z)(e,G);switch(t.type){case"category":return n.createElement(P,(0,f.Z)({item:t},o));case"html":return n.createElement(z,(0,f.Z)({item:t},o));default:return n.createElement(V,(0,f.Z)({item:t},o))}}var O=["items"];function q(e){var t=e.items,o=(0,S.Z)(e,O);return n.createElement(w,null,t.map((function(e,t){return n.createElement(U,(0,f.Z)({key:t,item:e,index:t},o))})))}var K=(0,n.memo)(q),X="menu_izAj",Y="menuWithAnnouncementBar_l2a_";function j(e){var t=e.path,o=e.sidebar,a=e.className,c=function(){var e=(0,_.nT)().isActive,t=(0,n.useState)(e),o=t[0],a=t[1];return(0,r.RF)((function(t){var o=t.scrollY;e&&a(0===o)}),[e]),e&&o}();return n.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",X,c&&Y,a)},n.createElement("ul",{className:(0,l.Z)(m.k.docs.docSidebarMenu,"menu__list")},n.createElement(K,{items:o,activePath:t,level:1})))}var Q="sidebar_RiAD",J="sidebarWithHideableNavbar_d0QC",$="sidebarHidden_Lg_2",ee="sidebarLogo_YUvz";function te(e){var t=e.path,o=e.sidebar,a=e.onCollapse,c=e.isHidden,i=(0,v.L)(),r=i.navbar.hideOnScroll,s=i.docs.sidebar.hideable;return n.createElement("div",{className:(0,l.Z)(Q,r&&J,c&&$)},r&&n.createElement(h.Z,{tabIndex:-1,className:ee}),n.createElement(j,{path:t,sidebar:o}),s&&n.createElement(C,{onClick:a}))}var oe=n.memo(te),ne=o(72961),ae=o(13102),ce=function(e){var t=e.sidebar,o=e.path,a=(0,ne.e)();return n.createElement("ul",{className:(0,l.Z)(m.k.docs.docSidebarMenu,"menu__list")},n.createElement(K,{items:t,activePath:o,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1}))};function le(e){return n.createElement(ae.Zo,{component:ce,props:e})}var ie=n.memo(le);function re(e){var t=(0,p.i)(),o="desktop"===t||"ssr"===t,a="mobile"===t;return n.createElement(n.Fragment,null,o&&n.createElement(oe,e),a&&n.createElement(ie,e))}var se=o(76775),me="expandButton__5cy",de="expandButtonIcon_FlNX";function ue(e){var t=e.toggleSidebar;return n.createElement("div",{className:me,title:(0,i.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,i.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(E,{className:de}))}var be="docSidebarContainer_UQUJ",pe="docSidebarContainerHidden_f7XD",ve=o(1116);function he(e){var t,o=e.children,a=(0,ve.V)();return n.createElement(n.Fragment,{key:null!=(t=null==a?void 0:a.name)?t:"noSidebar"},o)}function fe(e){var t=e.sidebar,o=e.hiddenSidebarContainer,a=e.setHiddenSidebarContainer,c=(0,se.TH)().pathname,i=(0,n.useState)(!1),r=i[0],s=i[1],d=(0,n.useCallback)((function(){r&&s(!1),a((function(e){return!e}))}),[a,r]);return n.createElement("aside",{className:(0,l.Z)(m.k.docs.docSidebarContainer,be,o&&pe),onTransitionEnd:function(e){e.currentTarget.classList.contains(be)&&o&&s(!0)}},n.createElement(he,null,n.createElement(re,{sidebar:t,path:c,onCollapse:d,isHidden:r})),r&&n.createElement(ue,{toggleSidebar:d}))}var Ee={docMainContainer:"docMainContainer_uL0j",docMainContainerEnhanced:"docMainContainerEnhanced_oQfM",docItemWrapperEnhanced:"docItemWrapperEnhanced_HFwV"};function ge(e){var t=e.hiddenSidebarContainer,o=e.children,a=(0,ve.V)();return n.createElement("main",{className:(0,l.Z)(Ee.docMainContainer,(t||!a)&&Ee.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",Ee.docItemWrapper,t&&Ee.docItemWrapperEnhanced)},o))}var ke="docPage_ualW",Ce="docsWrapper_mKqt";function _e(e){var t=e.children,o=(0,ve.V)(),a=(0,n.useState)(!1),l=a[0],i=a[1];return n.createElement(c.Z,{wrapperClassName:Ce},n.createElement(b,null),n.createElement("div",{className:ke},o&&n.createElement(fe,{sidebar:o.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:i}),n.createElement(ge,{hiddenSidebarContainer:l},t)))}var Se=o(43320),Ne=o(10833),Ie=o(74477),ye=o(14739);function Ze(e){var t=e.versionMetadata,o=(0,I.hI)(e);if(!o)return n.createElement(a.default,null);var c=o.docElement,i=o.sidebarName,r=o.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(ye.Z,{version:t.version,tag:(0,Se.os)(t.pluginId,t.version)}),n.createElement(Ne.FG,{className:(0,l.Z)(m.k.wrapper.docsPages,m.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(Ie.q,{version:t},n.createElement(ve.b,{name:i,items:r},n.createElement(_e,null,c)))))}},74477:function(e,t,o){o.d(t,{E:function(){return i},q:function(){return l}});var n=o(67294),a=o(69688),c=n.createContext(null);function l(e){var t=e.children,o=e.version;return n.createElement(c.Provider,{value:o},t)}function i(){var e=(0,n.useContext)(c);if(null===e)throw new a.i6("DocsVersionProvider");return e}},84204:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var n=o(67294),a=o(19488),c=o(95999),l=o(10833),i=o(39960),r=o(44996),s=o(10412);function m(){if(s.Z.canUseDOM){var e=window.location.pathname.toLowerCase(),t={AppVeyor:"/docs/cicd/appveyor",AzurePipelines:"/docs/cicd/azure-pipelines",Bitbucket:"/docs/cicd/bitbucket","GitHub Actions":"/docs/cicd/github-actions",GitLab:"/docs/cicd/gitlab",Jenkins:"/docs/cicd/jenkins",SpaceAutomation:"/docs/cicd/space-automation",TeamCity:"/docs/cicd/teamcity",AzureSignTool:"/docs/common/cli-tools",BenchmarkDotNet:"/docs/common/cli-tools",Boots:"/docs/common/cli-tools",Chocolatey:"/docs/common/cli-tools",CloudFoundry:"/docs/common/cli-tools",Codecov:"/docs/common/cli-tools",CodeMetrics:"/docs/common/cli-tools",CorFlags:"/docs/common/cli-tools",CoverallsNet:"/docs/common/cli-tools",Coverlet:"/docs/common/cli-tools",DocFX:"/docs/common/cli-tools",Docker:"/docs/common/cli-tools",DotCover:"/docs/common/cli-tools",DotNet:"/docs/common/cli-tools",EntityFramework:"/docs/common/cli-tools",Fixie:"/docs/common/cli-tools",GitLink:"/docs/common/cli-tools",GitReleaseManager:"/docs/common/cli-tools",GitVersion:"/docs/common/cli-tools",Helm:"/docs/common/cli-tools",ILRepack:"/docs/common/cli-tools",InnoSetup:"/docs/common/cli-tools",Kubernetes:"/docs/common/cli-tools",MauiCheck:"/docs/common/cli-tools",MinVer:"/docs/common/cli-tools",MSBuild:"/docs/common/cli-tools",MSpec:"/docs/common/cli-tools",NerdbankGitVersioning:"/docs/common/cli-tools",Netlify:"/docs/common/cli-tools",Npm:"/docs/common/cli-tools",NSwag:"/docs/common/cli-tools",NuGet:"/docs/common/cli-tools",NUnit:"/docs/common/cli-tools",Octopus:"/docs/common/cli-tools",OctoVersion:"/docs/common/cli-tools",OpenCover:"/docs/common/cli-tools",Paket:"/docs/common/cli-tools",PowerShell:"/docs/common/cli-tools",Pulumi:"/docs/common/cli-tools",ReportGenerator:"/docs/common/cli-tools",ReSharper:"/docs/common/cli-tools",SignClient:"/docs/common/cli-tools",SignTool:"/docs/common/cli-tools",SonarScanner:"/docs/common/cli-tools",SpecFlow:"/docs/common/cli-tools",Squirrel:"/docs/common/cli-tools",TestCloud:"/docs/common/cli-tools",Unity:"/docs/common/cli-tools",VSTest:"/docs/common/cli-tools",VSWhere:"/docs/common/cli-tools",WebConfigTransformRunner:"/docs/common/cli-tools",Xunit:"/docs/common/cli-tools"};for(var o in t)if(e.includes(o.toLowerCase())){var m=t[o];window.location.href=m+(m.endsWith("cli-tools")?"?tool="+o:void 0)}}return n.createElement(n.Fragment,null,n.createElement(l.d,{title:(0,c.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(a.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(c.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"(\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 404")),n.createElement("p",{style:{fontSize:"large"}},"Seems your search engine has not yet indexed our shiny new website."),n.createElement(i.Z,{className:"button button--lg button--secondary button--outline",to:"https://github.com/nuke-build/nuke/issues/941",style:{marginRight:"20px"}},n.createElement(c.Z,null,"Report Broken Link")),n.createElement(i.Z,{className:"button button--lg button--secondary button--outline",to:(0,r.Z)("/search")},n.createElement(c.Z,null,"Use Local Search")))))))}}}]);