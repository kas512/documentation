(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),u=n("ReZb"),d=n("GCVy"),p=n("+6vE");var f=function(e){var t=e.children;return i.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var b=function(e){var t=e.children;return i.a.createElement("strong",null,t)},g=n("gnlW"),h=n("mwnC"),y=n("/Rw0"),E=n("dVM4"),x=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return i.a.createElement(x,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var k=v,w=n("MfeC");function _(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),o=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),o.push(i.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(l.i,{overlay:e.overlay},i.a.createElement(l.i.Button,null,r.variant.title),i.a.createElement(_.Menu,{direction:e.direction,width:e.menuWidth},o)))}_.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=_,O=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),j=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),N=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,x=r.title,v=r.description,_=r.status,M=r.source,W=r.additionalContributors,P=void 0===W?[]:W,A=w.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:u.a,Note:d.a,Prompt:f,PromptReply:b,Screenshot:g.a}},i.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:x,description:v}),i.a.createElement(s.b,{location:a}),i.a.createElement(O,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.e,{display:["none",null,null,"block"]},i.a.createElement(h.a,{location:a})),i.a.createElement(j,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(I,null,i.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.e,null,i.a.createElement(l.e,null,i.a.createElement(l.m,{as:"h1"},x),v))),null!=A?i.a.createElement(S,null,i.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?i.a.createElement(N,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(k,{items:n.tableOfContents.items})):null,i.a.createElement(z,null,_||M?i.a.createElement(l.k,{mb:3,alignItems:"center"},_?i.a.createElement(E.a,{status:_}):null,i.a.createElement(l.e,{mx:"auto"}),M?i.a.createElement(y.a,{href:M}):null):null,n.tableOfContents.items?i.a.createElement(l.e,{display:["block",null,"none"],mb:3},i.a.createElement(l.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.r,{icon:o.b,mr:2}):i.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),i.a.createElement(l.e,{pt:1},i.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(p.a,{editUrl:n.editUrl,contributors:n.contributors.concat(P.map((function(e){return{login:e}})))}))))))}},pHx6:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n("8o2o"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),r={},i={_frontmatter:r},c=o.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,'The Enterprise admin user has the most far-reaching permissions on the Enterprise instance and can manage instance settings, organizations, users, and packages. For a full list of Enterprise admin permissions, see "',Object(l.b)("a",{parentName:"p",href:"npm-enterprise-roles-and-permissions"},"npm Enterprise roles and permissions"),'".'))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-enterprise-user-management-about-the-enterprise-admin-user-mdx-e5a0acfe181670a58fe8.js.map