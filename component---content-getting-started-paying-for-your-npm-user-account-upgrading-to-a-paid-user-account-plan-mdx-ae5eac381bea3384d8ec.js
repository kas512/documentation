(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{LJRi:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n("8o2o"),l=n("q1tI"),o=n("7ljp"),r=n("O6H6"),i=n("4LHR"),c={},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},p=m("Note"),u=m("Screenshot"),b={_frontmatter:c},s=r.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(s,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(p,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," This article only applies to users of the public npm registry.")),Object(o.b)("p",null,'If you need to install and publish private packages, you can upgrade to a paid user account plan. Our paid user account plan costs $7 per month. For more information, see the "npm account" column on our ',Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/pricing"}),"pricing page"),"."),Object(o.b)("p",null,"Your paid plan and billing cycle will start when you submit your credit card information, and you will be charged for the first month immediately."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)(l.Fragment,null,i.a["user-login"].text),Object(o.b)(l.Fragment,null,i.a["user-login"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(l.Fragment,null,i.a["billing-info"].text),Object(o.b)(l.Fragment,null,i.a["billing-info"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Under "change plan", click ',Object(o.b)("strong",{parentName:"p"},"Upgrade Plan ($7/User)"),"."),Object(o.b)(u,{src:"/getting-started/paying-for-your-npm-user-account/change-plan.png",alt:"Screenshot of the change payment plan button",mdxType:"Screenshot"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Under "Want to upgrade?", click ',Object(o.b)("strong",{parentName:"p"},"Enable Private Publishing for $7/mo"),"."),Object(o.b)(u,{src:"/getting-started/paying-for-your-npm-user-account/enable-private-publishing.png",alt:"Screenshot showing the enable private publishing button",mdxType:"Screenshot"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)(l.Fragment,null,i.a["billing-form"].text),Object(o.b)(l.Fragment,null,i.a["billing-form"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(l.Fragment,null,i.a["payment-info-button"].text),Object(o.b)(l.Fragment,null,i.a["payment-info-button"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(l.Fragment,null,i.a["billing-creditcard-form"].text),Object(o.b)(u,{src:"/getting-started/paying-for-your-npm-user-account/billing-upgrade-form.png",alt:"Screenshot of the payment form",mdxType:"Screenshot"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)(l.Fragment,null,i.a["payment-remember-me"].text),Object(o.b)(l.Fragment,null,i.a["payment-remember-me"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Pay $7.00"),"."),Object(o.b)(u,{src:"/getting-started/paying-for-your-npm-user-account/billing-upgrade-button.png",alt:"Screenshot of the payment confirmation button",mdxType:"Screenshot"}))))}d.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),p=n("8Aig"),u=n("ReZb"),b=n("GCVy"),s=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),h=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return i.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var x=E,v=n("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),o=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),o.push(i.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(l.i,{overlay:e.overlay},i.a.createElement(l.i.Button,null,r.variant.title),i.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},o)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=w,N=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),F=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,j=r.title,E=r.description,w=r.status,P=r.source,T=r.additionalContributors,M=void 0===T?[]:T,W=v.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:u.a,Note:b.a,Prompt:d,PromptReply:g,Screenshot:f.a}},i.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:j,description:E}),i.a.createElement(p.b,{location:a}),i.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.e,{display:["none",null,null,"block"]},i.a.createElement(y.a,{location:a})),i.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(C,null,i.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.e,null,i.a.createElement(l.e,null,i.a.createElement(l.m,{as:"h1"},j),E))),null!=W?i.a.createElement(S,null,i.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?i.a.createElement(F,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},i.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(x,{items:n.tableOfContents.items})):null,i.a.createElement(I,null,w||P?i.a.createElement(l.k,{mb:3,alignItems:"center"},w?i.a.createElement(O.a,{status:w}):null,i.a.createElement(l.e,{mx:"auto"}),P?i.a.createElement(h.a,{href:P}):null):null,n.tableOfContents.items?i.a.createElement(l.e,{display:["block",null,"none"],mb:3},i.a.createElement(l.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.r,{icon:o.b,mr:2}):i.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),i.a.createElement(l.e,{pt:1},i.a.createElement(x,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-getting-started-paying-for-your-npm-user-account-upgrading-to-a-paid-user-account-plan-mdx-ae5eac381bea3384d8ec.js.map