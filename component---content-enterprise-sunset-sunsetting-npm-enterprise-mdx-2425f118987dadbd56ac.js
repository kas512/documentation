(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),r=n("u9kb"),o=n("aOgs"),i=n("q1tI"),l=n.n(i),c=n("7ljp"),s=n("pD55"),m=n("8Aig"),u=n("ReZb"),p=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return l.a.createElement(r.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(r.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return l.a.createElement("strong",null,t)},h=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),E=n("dVM4"),O=Object(a.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function w(e){var t=e.items,n=e.depth;return l.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(r.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(r.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var j=w,v=n("MfeC");function k(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(l.a.createElement(r.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(r.i,{overlay:e.overlay},l.a.createElement(r.i.Button,null,i.variant.title),l.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},o)))}k.Menu=Object(a.f)(r.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=k,N=Object(a.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),H=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),G=Object(a.f)(r.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,O=i.title,w=i.description,k=i.status,P=i.source,S=i.additionalContributors,M=void 0===S?[]:S,W=v.a.getVariantRoot(a.pathname);return l.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:d,PromptReply:g,Screenshot:h.a}},l.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(s.a,{title:O,description:w}),l.a.createElement(m.b,{location:a}),l.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(r.e,{display:["none",null,null,"block"]},l.a.createElement(f.a,{location:a})),l.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(_,null,l.a.createElement(r.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(r.e,null,l.a.createElement(r.e,null,l.a.createElement(r.m,{as:"h1"},O),w))),null!=W?l.a.createElement(H,null,l.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?l.a.createElement(G,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},l.a.createElement(r.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(j,{items:n.tableOfContents.items})):null,l.a.createElement(I,null,k||P?l.a.createElement(r.k,{mb:3,alignItems:"center"},k?l.a.createElement(E.a,{status:k}):null,l.a.createElement(r.e,{mx:"auto"}),P?l.a.createElement(y.a,{href:P}):null):null,n.tableOfContents.items?l.a.createElement(r.e,{display:["block",null,"none"],mb:3},l.a.createElement(r.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(r.r,{icon:o.b,mr:2}):l.a.createElement(r.r,{icon:o.c,mr:2}),"Table of contents"),l.a.createElement(r.e,{pt:1},l.a.createElement(j,{items:n.tableOfContents.items})))}))):null,t,l.a.createElement(b.a,{editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},l9T1:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},l={_frontmatter:i},c=o.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(c,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In March 2020, npm was acquired by GitHub. On June 30, 2020, we notified npm Enterprise (npmE) customers of our intent to sunset npm Enterprise. ",Object(r.b)("strong",{parentName:"p"},"npm Enterprise will be supported until June 30, 2021"),", and we will renew contracts for npmE until that date. We encourage all npmE customers to evaluate and migrate to GitHub Packages."),Object(r.b)("h2",null,"Evaluating and migrating to GitHub Packages"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"How do I trial or migrate to GitHub Packages?"),Object(r.b)("br",{parentName:"p"}),"\n","Customers who already have one of GitHub’s Free, Teams, or Enterprise Cloud plans already receive monthly storage and bandwidth resources for GitHub Packages as part of their plan. To begin evaluating GitHub Packages, visit our documentation on ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://help.github.com/en/packages/publishing-and-managing-packages/publishing-a-package"}),"publishing with GitHub Packages")," directly from your repository.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"My source code is not on GitHub. How can I trial GitHub Packages?"),Object(r.b)("br",{parentName:"p"}),"\n","The combined npm and GitHub team has reached out to customers to work on detailed transition plans, including free trials for GitHub Enterprise Cloud. However, if you still need assistance, please ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://enterprise.github.com/contact"}),"contact the GitHub team"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Where do I turn for customer support during this time?"),Object(r.b)("br",{parentName:"p"}),"\n","Please visit ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/support"}),"npm support")," for assistance with your npm Enterprise plan."))),Object(r.b)("p",null,"For further assistance or to answer any questions not covered here (including those regarding billing and payments specific to your account), please reach out your GitHub and npm contacts, or contact ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://enterprise.github.com/contact"}),"the GitHub sales team"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-enterprise-sunset-sunsetting-npm-enterprise-mdx-2425f118987dadbd56ac.js.map