(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{NF8E:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return s}));var n=a("8o2o"),o=(a("q1tI"),a("7ljp")),l=a("O6H6"),r={},i={_frontmatter:r},c=l.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(c,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"note"},Object(o.b)("p",null,"To use private packages, you must"),Object(o.b)("ul",null,Object(o.b)("li",null," be using npm version 2.7.0 or greater. To upgrade, on the command line, run ",Object(o.b)("code",{className:"highlighter-rouge"},"npm install npm@latest -g")),Object(o.b)("li",null,"have a ",Object(o.b)("a",{href:"https://www.npmjs.com/pricing"},"paid user or organization account")))),Object(o.b)("p",null,"With npm private packages, you can use the npm registry to host code that is only visible to you and chosen collaborators, allowing you to manage and use private code alongside public code in your projects."),Object(o.b)("p",null,"Private packages always have a scope, and scoped packages are private by default."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"User-scoped private packages"),' can only be accessed by you and collaborators to whom you have granted read or read/write access. For more information, see "',Object(o.b)("a",Object.assign({parentName:"li"},{href:"adding-collaborators-to-private-packages-owned-by-a-user-account"}),"Adding collaborators to private packages owned by a user account"),'".'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Organization-scoped private packages"),' can only be accessed by teams that have been granted read or read/write access. For more information, see "',Object(o.b)("a",Object.assign({parentName:"li"},{href:"managing-team-access-to-organization-packages"}),"Managing team access to organization packages"),'".')),Object(o.b)("h2",null,"Next steps"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'"',Object(o.b)("a",Object.assign({parentName:"li"},{href:"creating-and-publishing-private-packages"}),"Creating and publishing private packages"),'"'),Object(o.b)("li",{parentName:"ul"},'"',Object(o.b)("a",Object.assign({parentName:"li"},{href:"using-npm-packages-in-your-projects"}),"Using npm packages in your projects"),'"')),Object(o.b)("h2",null,"Resources"),Object(o.b)("iframe",{src:"https://www.youtube.com/embed/O6JoXGnHK_Y",frameBorder:"0",allowFullScreen:!0}))}s.isMDXComponent=!0},O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),l=a("aOgs"),r=a("q1tI"),i=a.n(r),c=a("7ljp"),s=a("pD55"),m=a("8Aig"),u=a("ReZb"),p=a("GCVy"),b=a("+6vE");var d=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},h=a("gnlW"),f=a("mwnC"),y=a("/Rw0"),O=a("dVM4"),v=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,a=e.depth;return i.a.createElement(v,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(E,{items:e.items,depth:a+1}):null)})))}E.defaultProps={depth:0};var j=E,k=a("MfeC");function w(e){var t=k.a.getPath(e.location.pathname),a=k.a.getVariantAndPage(e.root,t);if(!a)return null;var n=k.a.getVariantsForPage(e.root,a.page),l=[],r=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(r=e),l.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,r.variant.title),i.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},l)))}w.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,_=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),N=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),z=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,r=a.frontmatter,v=r.title,E=r.description,w=r.status,M=r.source,W=r.additionalContributors,F=void 0===W?[]:W,P=k.a.getVariantRoot(n.pathname);return i.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:d,PromptReply:g,Screenshot:h.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:v,description:E}),i.a.createElement(m.b,{location:n}),i.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(f.a,{location:n})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(N,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},v),E))),null!=P?i.a.createElement(I,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:n})):null),a.tableOfContents.items?i.a.createElement(z,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(j,{items:a.tableOfContents.items})):null,i.a.createElement(S,null,w||M?i.a.createElement(o.k,{mb:3,alignItems:"center"},w?i.a.createElement(O.a,{status:w}):null,i.a.createElement(o.e,{mx:"auto"}),M?i.a.createElement(y.a,{href:M}):null):null,a.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:l.b,mr:2}):i.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(j,{items:a.tableOfContents.items})))}))):null,t,i.a.createElement(b.a,{editUrl:a.editUrl,contributors:a.contributors.concat(F.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-packages-and-modules-introduction-to-packages-and-modules-about-private-packages-mdx-2546c75531a32379cc8a.js.map