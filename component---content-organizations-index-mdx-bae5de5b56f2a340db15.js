(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),u=n("ReZb"),d=n("GCVy"),p=n("+6vE");var b=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=n("gnlW"),g=n("mwnC"),y=n("/Rw0"),E=n("dVM4"),x=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return r.a.createElement(x,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var w=v,O=n("MfeC");function k(e){var t=O.a.getPath(e.location.pathname),n=O.a.getVariantAndPage(e.root,t);if(!n)return null;var a=O.a.getVariantsForPage(e.root,n.page),l=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),l.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,i.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},l)))}k.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var _=k,C=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),j=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),z=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),H=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,x=i.title,v=i.description,k=i.status,P=i.source,M=i.additionalContributors,N=void 0===M?[]:M,T=O.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:u.a,Note:d.a,Prompt:b,PromptReply:f,Screenshot:h.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:x,description:v}),r.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:n.themeOptions.editOnGitHub,pathPrefix:n.themeOptions.pathPrefix,location:a})),r.a.createElement(j,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(I,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},x),v))),null!=T?r.a.createElement(z,null,r.a.createElement(_,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:T,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(H,null,k||P?r.a.createElement(o.k,{mb:3,alignItems:"center"},k?r.a.createElement(E.a,{status:k}):null,r.a.createElement(o.e,{mx:"auto"}),P?r.a.createElement(y.a,{href:P}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:l.b,mr:2}):r.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(p.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(N.map((function(e){return{login:e}})))}))))))}},xzgU:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return p}));var a,o=n("zLVn"),l=n("q1tI"),i=n("7ljp"),r=n("O6H6"),c=n("u9kb"),m=(n("4LHR"),{}),s=(a="Index",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),u={_frontmatter:m},d=r.a;function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(d,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l.Fragment,null,"Organizations allow teams of contributors to read, write, and public and private packages.  Organizations are free when they publish public packages.  When organizations publish private packages, an npm Teams subscription is required. For more information on npm Teams pricing, see our ",Object(i.b)(c.n,{href:"https://www.npmjs.com/pricing",mdxType:"Link"},"products page"),"."),Object(i.b)(s,{mdxType:"Index"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-organizations-index-mdx-bae5de5b56f2a340db15.js.map