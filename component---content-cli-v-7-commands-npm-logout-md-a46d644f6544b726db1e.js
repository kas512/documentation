(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{IErw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n("8o2o"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},r={_frontmatter:i},c=o.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm logout [--registry=<url>] [--scope=<@scope>]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"When logged into a registry that supports token-based authentication, tell the\nserver to end this token's session. This will invalidate the token everywhere\nyou're using it, not just for the current environment."),Object(l.b)("p",null,"When logged into a legacy registry that uses username and password authentication, this will\nclear the credentials in your user configuration. In this case, it will ",Object(l.b)("em",{parentName:"p"},"only")," affect\nthe current environment."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"--scope")," is provided, this will find the credentials for the registry\nconnected to that scope, if set."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,"registry"),Object(l.b)("p",null,"Default: ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://registry.npmjs.org/"}),"https://registry.npmjs.org/")),Object(l.b)("p",null,"The base URL of the npm package registry. If ",Object(l.b)("inlineCode",{parentName:"p"},"scope")," is also specified,\nit takes precedence."),Object(l.b)("h4",null,"scope"),Object(l.b)("p",null,"Default: The scope of your current project, if any, otherwise none."),Object(l.b)("p",null,"If specified, you will be logged out of the specified scope. See ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"/cli/v7/using-npm/scope"}),Object(l.b)("inlineCode",{parentName:"a"},"scope")),"."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm logout --scope=@myco\n")),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-adduser"}),"npm adduser")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/using-npm/registry"}),"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-config"}),"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-whoami"}),"npm whoami"))))}s.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),s=n("pD55"),m=n("8Aig"),u=n("ReZb"),p=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=n("gnlW"),g=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var v=E,w=n("MfeC");function k(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},o)))}k.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=k,N=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),W=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,j=i.title,E=i.description,k=i.status,D=i.source,z=i.additionalContributors,M=void 0===z?[]:z,T=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:d,PromptReply:f,Screenshot:h.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:j,description:E}),r.a.createElement(m.b,{location:a}),r.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{location:a})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},j),E))),null!=T?r.a.createElement(I,null,r.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:T,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(W,null,k||D?r.a.createElement(l.k,{mb:3,alignItems:"center"},k?r.a.createElement(O.a,{status:k}):null,r.a.createElement(l.e,{mx:"auto"}),D?r.a.createElement(y.a,{href:D}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(b.a,{editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-logout-md-a46d644f6544b726db1e.js.map