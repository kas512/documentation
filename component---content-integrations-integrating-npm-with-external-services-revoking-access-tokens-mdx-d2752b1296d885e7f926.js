(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{"4ton":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));var a,o=n("zLVn"),l=(n("q1tI"),n("7ljp")),r=n("O6H6"),i={},c=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),m={_frontmatter:i},s=r.a;function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(s,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"To keep your account and packages secure, we strongly recommend revoking (deleting) tokens you no longer need or that have been compromised. You can revoke any token you have created."),Object(l.b)(c,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," While access tokens are not derived from your password, changing your password will invalidate all of your tokens. You can also invalidate a single token by logging out on a machine that is logged in with that token. We recommend revoking rather than invalidating tokens.")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"To see a list of your tokens, on the command line, run:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"npm token list\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In the tokens table, find and copy the ID of the token you want to delete.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"On the command line, run the following command, replacing ",Object(l.b)("inlineCode",{parentName:"p"},"123456")," with the ID of the token you want to delete:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"npm token delete 123456\n")),Object(l.b)("p",{parentName:"li"},"npm will report ",Object(l.b)("inlineCode",{parentName:"p"},"Removed 1 token"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"To confirm that the token has been removed, run:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"npm token list\n")))),Object(l.b)(c,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," You must use the token ID to delete a token, not the truncated version of the token. In some cases, there may be a delay of up to an hour before a token is successfully revoked.")))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),p=n("ReZb"),d=n("GCVy"),u=n("+6vE");var b=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),g=n("/Rw0"),k=n("dVM4"),O=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return i.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var v=E,j=n("MfeC");function w(e){var t=j.a.getPath(e.location.pathname),n=j.a.getVariantAndPage(e.root,t);if(!n)return null;var a=j.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,r.variant.title),i.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},l)))}w.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,N=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,O=r.title,E=r.description,w=r.status,T=r.source,W=r.additionalContributors,z=void 0===W?[]:W,H=j.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:p.a,Note:d.a,Prompt:b,PromptReply:h,Screenshot:f.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:O,description:E}),i.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(y.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},O),E))),null!=H?i.a.createElement(I,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(v,{items:n.tableOfContents.items})):null,i.a.createElement(D,null,w||T?i.a.createElement(o.k,{mb:3,alignItems:"center"},w?i.a.createElement(k.a,{status:w}):null,i.a.createElement(o.e,{mx:"auto"}),T?i.a.createElement(g.a,{href:T}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:l.b,mr:2}):i.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-integrations-integrating-npm-with-external-services-revoking-access-tokens-mdx-d2752b1296d885e7f926.js.map