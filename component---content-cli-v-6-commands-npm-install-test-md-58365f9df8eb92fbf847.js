(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{Nqe4:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},r={_frontmatter:i},c=o.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm install-test (with no args, in package dir)\nnpm install-test [<@scope>/]<name>\nnpm install-test [<@scope>/]<name>@<tag>\nnpm install-test [<@scope>/]<name>@<version>\nnpm install-test [<@scope>/]<name>@<version range>\nnpm install-test <tarball file>\nnpm install-test <tarball url>\nnpm install-test <folder>\n\nalias: npm it\ncommon options: [--save|--save-dev|--save-optional] [--save-exact] [--dry-run]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command runs an ",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," followed immediately by an ",Object(l.b)("inlineCode",{parentName:"p"},"npm test"),". It\ntakes exactly the same arguments as ",Object(l.b)("inlineCode",{parentName:"p"},"npm install"),"."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-install"}),"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-test"}),"npm test"))))}m.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),p=n("ReZb"),u=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),y=n("mwnC"),h=n("/Rw0"),E=n("dVM4"),v=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function O(e){var t=e.items,n=e.depth;return r.a.createElement(v,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(O,{items:e.items,depth:n+1}):null)})))}O.defaultProps={depth:0};var x=O,j=n("MfeC");function k(e){var t=j.a.getPath(e.location.pathname),n=j.a.getVariantAndPage(e.root,t);if(!n)return null;var a=j.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},o)))}k.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=k,C=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),N=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,v=i.title,O=i.description,k=i.status,M=i.source,W=i.additionalContributors,A=void 0===W?[]:W,D=j.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:p.a,Note:u.a,Prompt:b,PromptReply:f,Screenshot:g.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:v,description:O}),r.a.createElement(s.b,{location:a}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(y.a,{location:a})),r.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(N,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},v),O))),null!=D?r.a.createElement(I,null,r.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:D,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(x,{items:n.tableOfContents.items})):null,r.a.createElement(z,null,k||M?r.a.createElement(l.k,{mb:3,alignItems:"center"},k?r.a.createElement(E.a,{status:k}):null,r.a.createElement(l.e,{mx:"auto"}),M?r.a.createElement(h.a,{href:M}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(x,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(A.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-install-test-md-58365f9df8eb92fbf847.js.map