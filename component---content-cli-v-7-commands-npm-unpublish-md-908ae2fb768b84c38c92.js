(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),r=n("aOgs"),o=n("q1tI"),i=n.n(o),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),u=n("ReZb"),p=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),v=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return i.a.createElement(v,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var j=E,k=n("MfeC");function w(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),r=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),r.push(i.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(l.i,{overlay:e.overlay},i.a.createElement(l.i.Button,null,o.variant.title),i.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},r)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,N=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,v=o.title,E=o.description,w=o.status,H=o.source,M=o.additionalContributors,W=void 0===M?[]:M,G=k.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:d,PromptReply:h,Screenshot:g.a}},i.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:v,description:E}),i.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.e,{display:["none",null,null,"block"]},i.a.createElement(f.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),i.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(C,null,i.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.e,null,i.a.createElement(l.e,null,i.a.createElement(l.m,{as:"h1"},v),E))),null!=G?i.a.createElement(I,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:G,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(j,{items:n.tableOfContents.items})):null,i.a.createElement(z,null,w||H?i.a.createElement(l.k,{mb:3,alignItems:"center"},w?i.a.createElement(O.a,{status:w}):null,i.a.createElement(l.e,{mx:"auto"}),H?i.a.createElement(y.a,{href:H}):null):null,n.tableOfContents.items?i.a.createElement(l.e,{display:["block",null,"none"],mb:3},i.a.createElement(l.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.r,{icon:r.b,mr:2}):i.a.createElement(l.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(l.e,{pt:1},i.a.createElement(j,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},xzM3:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),r=n("O6H6"),o={},i={_frontmatter:o},c=r.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("p",null,"To learn more about how the npm registry treats unpublish, see our ",Object(l.b)("a",{href:"https://www.npmjs.com/policies/unpublish",target:"_blank",rel:"noopener noreferrer"}," unpublish policies")),Object(l.b)("h4",null,"Unpublishing a single version of a package"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm unpublish [<@scope>/]<pkg>@<version>\n")),Object(l.b)("h4",null,"Unpublishing an entire package"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm unpublish [<@scope>/]<pkg> --force\n")),Object(l.b)("h3",null,"Warning"),Object(l.b)("p",null,"Consider using the ",Object(l.b)("a",{parentName:"p",href:"/cli/v7/commands/npm-deprecate"},Object(l.b)("inlineCode",{parentName:"a"},"deprecate"))," command instead,\nif your intent is to encourage users to upgrade, or if you no longer\nwant to maintain a package."),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This removes a package version from the registry, deleting its entry and\nremoving the tarball."),Object(l.b)("p",null,"The npm registry will return an error if you are not ",Object(l.b)("a",{parentName:"p",href:"/cli/v7/commands/npm-login"},"logged\nin"),"."),Object(l.b)("p",null,"If you do not specify a version or if you remove all of a package's\nversions then the registry will remove the root package entry entirely."),Object(l.b)("p",null,"Even if you unpublish a package version, that specific name and version\ncombination can never be reused. In order to publish the package again,\nyou must use a new version number. If you unpublish the entire package,\nyou may not publish any new versions of that package until 28 days have\npassed."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-deprecate"},"npm deprecate")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-publish"},"npm publish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/using-npm/registry"},"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-adduser"},"npm adduser")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-owner"},"npm owner")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-login"},"npm login"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-unpublish-md-908ae2fb768b84c38c92.js.map