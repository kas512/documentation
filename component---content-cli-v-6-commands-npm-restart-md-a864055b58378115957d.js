(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),r=n("aOgs"),o=n("q1tI"),i=n.n(o),c=n("7ljp"),s=n("pD55"),m=n("8Aig"),p=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return i.a.createElement("strong",null,t)},h=n("gnlW"),g=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function E(e){var t=e.items,n=e.depth;return i.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var v=E,N=n("MfeC");function x(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var a=N.a.getVariantsForPage(e.root,n.page),r=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),r.push(i.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(l.i,{overlay:e.overlay},i.a.createElement(l.i.Button,null,o.variant.title),i.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},r)))}x.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=x,w=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,E=o.description,x=o.status,T=o.source,A=o.additionalContributors,M=void 0===A?[]:A,P=N.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:p.a,Note:b.a,Prompt:d,PromptReply:f,Screenshot:h.a}},i.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:y,description:E}),i.a.createElement(m.b,{location:a}),i.a.createElement(w,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.e,{display:["none",null,null,"block"]},i.a.createElement(g.a,{location:a})),i.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(C,null,i.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.e,null,i.a.createElement(l.e,null,i.a.createElement(l.m,{as:"h1"},y),E))),null!=P?i.a.createElement(I,null,i.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(v,{items:n.tableOfContents.items})):null,i.a.createElement(z,null,x||T?i.a.createElement(l.k,{mb:3,alignItems:"center"},x?i.a.createElement(j.a,{status:x}):null,i.a.createElement(l.e,{mx:"auto"}),T?i.a.createElement(O.a,{href:T}):null):null,n.tableOfContents.items?i.a.createElement(l.e,{display:["block",null,"none"],mb:3},i.a.createElement(l.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.r,{icon:r.b,mr:2}):i.a.createElement(l.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(l.e,{pt:1},i.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},TP29:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),r=n("O6H6"),o={},i={_frontmatter:o},c=r.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm restart [-- <args>]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This restarts a package."),Object(l.b)("p",null,'This runs a package\'s "stop", "restart", and "start" scripts, and associated\npre- and post- scripts, in the order given below:'),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"prerestart"),Object(l.b)("li",{parentName:"ol"},"prestop"),Object(l.b)("li",{parentName:"ol"},"stop"),Object(l.b)("li",{parentName:"ol"},"poststop"),Object(l.b)("li",{parentName:"ol"},"restart"),Object(l.b)("li",{parentName:"ol"},"prestart"),Object(l.b)("li",{parentName:"ol"},"start"),Object(l.b)("li",{parentName:"ol"},"poststart"),Object(l.b)("li",{parentName:"ol"},"postrestart")),Object(l.b)("h3",null,"Note"),Object(l.b)("p",null,'Note that the "restart" script is run ',Object(l.b)("strong",{parentName:"p"},"in addition to"),' the "stop"\nand "start" scripts, not instead of them.'),Object(l.b)("p",null,"This is the behavior as of ",Object(l.b)("inlineCode",{parentName:"p"},"npm")," major version 2.  A change in this\nbehavior will be accompanied by an increase in major version number"),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-run-script"}),"npm run-script")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/using-npm/scripts"}),"npm scripts")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-test"}),"npm test")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-start"}),"npm start")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-stop"}),"npm stop")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-restart"}),"npm restart"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-restart-md-a864055b58378115957d.js.map