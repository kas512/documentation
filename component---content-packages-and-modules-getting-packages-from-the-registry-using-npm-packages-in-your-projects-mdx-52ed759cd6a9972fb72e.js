(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{FSzm:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),r={},i={_frontmatter:r},c=o.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Once you have ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"downloading-and-installing-packages"}),"installed a package")," in ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules"),", you can use it in your code."),Object(l.b)("h2",null,"Using unscoped packages in your projects"),Object(l.b)("h3",null,"Node.js module"),Object(l.b)("p",null,"If you are creating a Node.js module, you can use a package in your module by passing it as an argument to the ",Object(l.b)("inlineCode",{parentName:"p"},"require")," function."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-javascript"}),"var lodash = require('lodash');\n\nvar output = lodash.without([1, 2, 3], 1);\nconsole.log(output);\n")),Object(l.b)("h3",null,"package.json file"),Object(l.b)("p",null,"In ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", list the package under dependencies. You can optionally include a ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"about-semantic-versioning"}),"semantic version"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "dependencies": {\n    "@package_name": "^1.0.0"\n  }\n}\n')),Object(l.b)("h2",null,"Using scoped packages in your projects"),Object(l.b)("p",null,"To use a scoped package, simply include the scope wherever you use the package name."),Object(l.b)("h3",null,"Node.js module"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'var projectName = require("@scope/package-name")\n')),Object(l.b)("h3",null,"package.json file"),Object(l.b)("p",null,"In ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "dependencies": {\n    "@scope/package_name": "^1.0.0"\n  }\n}\n')),Object(l.b)("h2",null,'Resolving "Cannot find module" errors'),Object(l.b)("p",null,"If you have not properly installed a package, you will receive an error when you try to use it in your code. For example, if you reference the ",Object(l.b)("inlineCode",{parentName:"p"},"lodash")," package without installing it, you would see the following error:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),"module.js:340\n    throw err;\n          ^\nError: Cannot find module 'lodash'\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"For scoped packages, run ",Object(l.b)("inlineCode",{parentName:"li"},"npm install <@scope/package_name>")),Object(l.b)("li",{parentName:"ul"},"For unscoped packages, run ",Object(l.b)("inlineCode",{parentName:"li"},"npm install <package_name>"))))}s.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),s=n("pD55"),u=n("8Aig"),m=n("ReZb"),p=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return i.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),h=n("mwnC"),y=n("/Rw0"),j=n("dVM4"),O=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,n=e.depth;return i.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var E=k,v=n("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),o=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),o.push(i.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(l.i,{overlay:e.overlay},i.a.createElement(l.i.Button,null,r.variant.title),i.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},o)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=w,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,O=r.title,k=r.description,w=r.status,F=r.source,M=r.additionalContributors,W=void 0===M?[]:M,P=v.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:m.a,Note:p.a,Prompt:b,PromptReply:g,Screenshot:f.a}},i.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:O,description:k}),i.a.createElement(u.b,{location:a}),i.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.e,{display:["none",null,null,"block"]},i.a.createElement(h.a,{location:a})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.e,null,i.a.createElement(l.e,null,i.a.createElement(l.m,{as:"h1"},O),k))),null!=P?i.a.createElement(I,null,i.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},i.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(E,{items:n.tableOfContents.items})):null,i.a.createElement(z,null,w||F?i.a.createElement(l.k,{mb:3,alignItems:"center"},w?i.a.createElement(j.a,{status:w}):null,i.a.createElement(l.e,{mx:"auto"}),F?i.a.createElement(y.a,{href:F}):null):null,n.tableOfContents.items?i.a.createElement(l.e,{display:["block",null,"none"],mb:3},i.a.createElement(l.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.r,{icon:o.b,mr:2}):i.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),i.a.createElement(l.e,{pt:1},i.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-packages-and-modules-getting-packages-from-the-registry-using-npm-packages-in-your-projects-mdx-52ed759cd6a9972fb72e.js.map