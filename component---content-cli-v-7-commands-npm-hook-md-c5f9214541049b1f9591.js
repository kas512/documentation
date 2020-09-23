(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"6ieD":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n("8o2o"),o=(n("q1tI"),n("7ljp")),l=n("O6H6"),r={},c={_frontmatter:r},i=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(i,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",null,"Synopsis"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm hook ls [pkg]\nnpm hook add <entity> <url> <secret>\nnpm hook update <id> <url> [secret]\nnpm hook rm <id>\n")),Object(o.b)("h3",null,"Description"),Object(o.b)("p",null,"Allows you to manage ",Object(o.b)("a",{parentName:"p",href:"https://blog.npmjs.org/post/145260155635/introducing-hooks-get-notifications-of-npm"},"npm\nhooks"),",\nincluding adding, removing, listing, and updating."),Object(o.b)("p",null,"Hooks allow you to configure URL endpoints that will be notified whenever a\nchange happens to any of the supported entity types. Three different types\nof entities can be watched by hooks: packages, owners, and scopes."),Object(o.b)("p",null,"To create a package hook, simply reference the package name."),Object(o.b)("p",null,"To create an owner hook, prefix the owner name with ",Object(o.b)("inlineCode",{parentName:"p"},"~")," (as in,\n",Object(o.b)("inlineCode",{parentName:"p"},"~youruser"),")."),Object(o.b)("p",null,"To create a scope hook, prefix the scope name with ",Object(o.b)("inlineCode",{parentName:"p"},"@")," (as in,\n",Object(o.b)("inlineCode",{parentName:"p"},"@yourscope"),")."),Object(o.b)("p",null,"The hook ",Object(o.b)("inlineCode",{parentName:"p"},"id")," used by ",Object(o.b)("inlineCode",{parentName:"p"},"update")," and ",Object(o.b)("inlineCode",{parentName:"p"},"rm")," are the IDs listed in ",Object(o.b)("inlineCode",{parentName:"p"},"npm hook ls"),"\nfor that particular hook."),Object(o.b)("p",null,"The shared secret will be sent along to the URL endpoint so you can verify\nthe request came from your own configured hook."),Object(o.b)("h3",null,"Example"),Object(o.b)("p",null,"Add a hook to watch a package for changes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook add lodash https://example.com/ my-shared-secret\n")),Object(o.b)("p",null,"Add a hook to watch packages belonging to the user ",Object(o.b)("inlineCode",{parentName:"p"},"substack"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook add ~substack https://example.com/ my-shared-secret\n")),Object(o.b)("p",null,"Add a hook to watch packages in the scope ",Object(o.b)("inlineCode",{parentName:"p"},"@npm")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook add @npm https://example.com/ my-shared-secret\n")),Object(o.b)("p",null,"List all your active hooks:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook ls\n")),Object(o.b)("p",null,"List your active hooks for the ",Object(o.b)("inlineCode",{parentName:"p"},"lodash")," package:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook ls lodash\n")),Object(o.b)("p",null,"Update an existing hook's url:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook update id-deadbeef https://my-new-website.here/\n")),Object(o.b)("p",null,"Remove a hook:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm hook rm id-deadbeef\n")),Object(o.b)("h3",null,"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://blog.npmjs.org/post/145260155635/introducing-hooks-get-notifications-of-npm"},'"Introducing Hooks" blog post'))))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),r=n("q1tI"),c=n.n(r),i=n("7ljp"),p=n("pD55"),s=n("8Aig"),m=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return c.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return c.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),k=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function j(e){var t=e.items,n=e.depth;return c.a.createElement(k,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},c.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(j,{items:e.items,depth:n+1}):null)})))}j.defaultProps={depth:0};var E=j,w=n("MfeC");function N(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(c.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(o.i,{overlay:e.overlay},c.a.createElement(o.i.Button,null,r.variant.title),c.a.createElement(N.Menu,{direction:e.direction,width:e.menuWidth},l)))}N.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=N,v=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),A=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,k=r.title,j=r.description,N=r.status,T=r.source,D=r.additionalContributors,R=void 0===D?[]:D,z=w.a.getVariantRoot(a.pathname);return c.a.createElement(i.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:g.a}},c.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(p.a,{title:k,description:j}),c.a.createElement(s.b,{location:a}),c.a.createElement(v,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(o.e,{display:["none",null,null,"block"]},c.a.createElement(f.a,{location:a})),c.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(_,null,c.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(o.e,null,c.a.createElement(o.e,null,c.a.createElement(o.m,{as:"h1"},k),j))),null!=z?c.a.createElement(I,null,c.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),n.tableOfContents.items?c.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},c.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(E,{items:n.tableOfContents.items})):null,c.a.createElement(A,null,N||T?c.a.createElement(o.k,{mb:3,alignItems:"center"},N?c.a.createElement(O.a,{status:N}):null,c.a.createElement(o.e,{mx:"auto"}),T?c.a.createElement(y.a,{href:T}):null):null,n.tableOfContents.items?c.a.createElement(o.e,{display:["block",null,"none"],mb:3},c.a.createElement(o.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(o.r,{icon:l.b,mr:2}):c.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),c.a.createElement(o.e,{pt:1},c.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,c.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(R.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-hook-md-c5f9214541049b1f9591.js.map