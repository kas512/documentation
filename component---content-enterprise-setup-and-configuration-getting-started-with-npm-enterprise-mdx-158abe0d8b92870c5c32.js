(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),l=n("q1tI"),i=n.n(l),c=n("7ljp"),s=n("pD55"),m=n("8Aig"),u=n("ReZb"),d=n("GCVy"),p=n("+6vE");var b=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),h=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),E=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function j(e){var t=e.items,n=e.depth;return i.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(j,{items:e.items,depth:n+1}):null)})))}j.defaultProps={depth:0};var k=j,v=n("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),r=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),r.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,l.variant.title),i.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},r)))}w.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,N=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,E=l.title,j=l.description,w=l.status,A=l.source,M=l.additionalContributors,P=void 0===M?[]:M,W=v.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:u.a,Note:d.a,Prompt:b,PromptReply:g,Screenshot:f.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:E,description:j}),i.a.createElement(m.b,{location:a}),i.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(h.a,{location:a})),i.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(C,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},E),j))),null!=W?i.a.createElement(S,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?i.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(k,{items:n.tableOfContents.items})):null,i.a.createElement(z,null,w||A?i.a.createElement(o.k,{mb:3,alignItems:"center"},w?i.a.createElement(O.a,{status:w}):null,i.a.createElement(o.e,{mx:"auto"}),A?i.a.createElement(y.a,{href:A}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:r.b,mr:2}):i.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(p.a,{editUrl:n.editUrl,contributors:n.contributors.concat(P.map((function(e){return{login:e}})))}))))))}},i4zL:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("O6H6"),l={},i={_frontmatter:l},c=r.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As an npm Enterprise admin, once you have created a temporary username and password from the signup link for your new instance, you should:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to your npm Enterprise instance."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"/configuring-an-authentication-provider"}),"Configure SSO authentication")),Object(o.b)("li",{parentName:"ol"},"Link your account to your SSO provider."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"/creating-an-org"}),"Create one or more organizations"),"."),Object(o.b)("li",{parentName:"ol"},"Tell users to log in to the instance with their SSO credentials."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"/adding-members-to-your-org"}),"Add users to organizations and teams"),"."),Object(o.b)("li",{parentName:"ol"},'Have users follow the steps in the "',Object(o.b)("a",Object.assign({parentName:"li"},{href:"/getting-started"}),"Getting started"),'" and "',Object(o.b)("a",Object.assign({parentName:"li"},{href:"/packages-and-modules"}),"Packages and modules"),'" documentation to ',Object(o.b)("a",Object.assign({parentName:"li"},{href:"/downloading-and-installing-node-js-and-npm"}),"download Node.js and npm"),", ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"/configuring-your-registry-settings-as-an-npm-enterprise-user"}),"configure their npm client"),", and ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"/packages-and-modules/contributing-packages-to-the-registry"}),"publish")," and ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"/packages-and-modules/getting-packages-from-the-registry"}),"install")," packages.")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-enterprise-setup-and-configuration-getting-started-with-npm-enterprise-mdx-158abe0d8b92870c5c32.js.map