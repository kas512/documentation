(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),l=n("q1tI"),c=n.n(l),i=n("7ljp"),m=n("pD55"),p=n("8Aig"),u=n("ReZb"),d=n("GCVy"),s=n("+6vE");var b=function(e){var t=e.children;return c.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var y=function(e){var t=e.children;return c.a.createElement("strong",null,t)},h=n("gnlW"),f=n("mwnC"),g=n("/Rw0"),v=n("dVM4"),O=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return c.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},c.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var j=E,w=n("MfeC");function x(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),r=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),r.push(c.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(o.i,{overlay:e.overlay},c.a.createElement(o.i.Button,null,l.variant.title),c.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},r)))}x.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=x,k=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),M=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,O=l.title,E=l.description,x=l.status,P=l.source,A=l.additionalContributors,T=void 0===A?[]:A,W=w.a.getVariantRoot(a.pathname);return c.a.createElement(i.a,{components:{Index:u.a,Note:d.a,Prompt:b,PromptReply:y,Screenshot:h.a}},c.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(m.a,{title:O,description:E}),c.a.createElement(p.b,{location:a}),c.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(o.e,{display:["none",null,null,"block"]},c.a.createElement(f.a,{location:a})),c.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(_,null,c.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(o.e,null,c.a.createElement(o.e,null,c.a.createElement(o.m,{as:"h1"},O),E))),null!=W?c.a.createElement(I,null,c.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?c.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},c.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(j,{items:n.tableOfContents.items})):null,c.a.createElement(M,null,x||P?c.a.createElement(o.k,{mb:3,alignItems:"center"},x?c.a.createElement(v.a,{status:x}):null,c.a.createElement(o.e,{mx:"auto"}),P?c.a.createElement(g.a,{href:P}):null):null,n.tableOfContents.items?c.a.createElement(o.e,{display:["block",null,"none"],mb:3},c.a.createElement(o.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(o.r,{icon:r.b,mr:2}):c.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),c.a.createElement(o.e,{pt:1},c.a.createElement(j,{items:n.tableOfContents.items})))}))):null,t,c.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(T.map((function(e){return{login:e}})))}))))))}},z15T:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n("8o2o"),o=(n("q1tI"),n("7ljp")),r=n("O6H6"),l={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},i=c("Prompt"),m=c("Note"),p={_frontmatter:l},u=r.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(u,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When you have two-factor access enabled on your account, and you lose the ability to provide the one-time password, you may be able to recover your account."),Object(o.b)("h3",null,"Misplaced second factor device"),Object(o.b)("p",null,"If you have misplaced the device that provided second-factor authentication, you can use the recovery codes generated when you enabled 2FA to access your account."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Locate the recovery codes generated when you enabled 2FA on your account.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you are logged out, on the command line, log in using your npm username and npm password."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"npm login\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"When prompted for an OTP, enter a recovery code.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once you are logged in, type ",Object(o.b)("inlineCode",{parentName:"p"},"npm profile disable-2fa")," and enter your npm password if prompted.  ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enter an unused recovery code when you see this prompt:"),Object(o.b)(i,{mdxType:"Prompt"},"Enter one-time password from your authenticator:")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"npm will confirm that two-factor authentication has been disabled.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"type ",Object(o.b)("inlineCode",{parentName:"p"},"npm profile enable-2fa")," to re-enable 2FA, assign a different device to your account, and generate new recovery codes."))),Object(o.b)(m,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Using the recovery codes to re-enable 2FA may create a second authenticator account with the same npm account name."),Object(o.b)("p",null,"To delete the old authenticator account, follow the steps for the authenticator.")),Object(o.b)("h3",null,"Misplaced recovery codes"),Object(o.b)("p",null,"If you have misplaced both the device that provided second-factor authentication and your recovery codes, we may be unable to help you recover your account. If you have any questions, please ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/support"},"contact npm Support"),"."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-setting-up-your-npm-user-account-recovering-your-2-fa-enabled-account-mdx-be27cb2da0bcd2bb0a9b.js.map