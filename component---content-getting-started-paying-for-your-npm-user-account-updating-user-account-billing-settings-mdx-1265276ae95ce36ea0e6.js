(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),r=n("aOgs"),i=n("q1tI"),o=n.n(i),c=n("7ljp"),m=n("pD55"),b=n("8Aig"),u=n("ReZb"),d=n("GCVy"),p=n("+6vE");var s=function(e){var t=e.children;return o.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return o.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),O=n("/Rw0"),h=n("dVM4"),j=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function x(e){var t=e.items,n=e.depth;return o.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(x,{items:e.items,depth:n+1}):null)})))}x.defaultProps={depth:0};var E=x,v=n("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),r=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),r.push(o.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(l.i,{overlay:e.overlay},o.a.createElement(l.i.Button,null,i.variant.title),o.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},r)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var F=w,N=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),k=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),C=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,j=i.title,x=i.description,w=i.status,T=i.source,z=i.additionalContributors,M=void 0===z?[]:z,W=v.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:u.a,Note:d.a,Prompt:s,PromptReply:g,Screenshot:f.a}},o.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(m.a,{title:j,description:x}),o.a.createElement(b.b,{location:a}),o.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.e,{display:["none",null,null,"block"]},o.a.createElement(y.a,{location:a})),o.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(l.e,null,o.a.createElement(l.e,null,o.a.createElement(l.m,{as:"h1"},j),x))),null!=W?o.a.createElement(C,null,o.a.createElement(F,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?o.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},o.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(E,{items:n.tableOfContents.items})):null,o.a.createElement(S,null,w||T?o.a.createElement(l.k,{mb:3,alignItems:"center"},w?o.a.createElement(h.a,{status:w}):null,o.a.createElement(l.e,{mx:"auto"}),T?o.a.createElement(O.a,{href:T}):null):null,n.tableOfContents.items?o.a.createElement(l.e,{display:["block",null,"none"],mb:3},o.a.createElement(l.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(l.r,{icon:r.b,mr:2}):o.a.createElement(l.r,{icon:r.c,mr:2}),"Table of contents"),o.a.createElement(l.e,{pt:1},o.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(p.a,{editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},WGD7:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return p}));var a,l=n("zLVn"),r=n("q1tI"),i=n("7ljp"),o=n("O6H6"),c=n("4LHR"),m={},b=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),u={_frontmatter:m},d=o.a;function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)(d,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," This article only applies to users of the public npm registry.")),Object(i.b)("p",null,"You can update the credit card used to pay for your paid user account plan. Updating your credit card will not change your billing cycle date, and the new credit card will be charged on the next billing cycle."),Object(i.b)(r.Fragment,null,Object(i.b)("strong",null,"Note:")," If the credit card used to pay for your paid user account plan expires, or we are otherwise are unable to charge your card, you have a grace period of ",c.a["grace-period"].text," to update the card."),Object(i.b)("h2",null,"Updating credit card information"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["user-login"].text),Object(i.b)(r.Fragment,null,c.a["user-login"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["billing-info"].text),Object(i.b)(r.Fragment,null,c.a["billing-info"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["payment-info"].text),Object(i.b)(r.Fragment,null,c.a["payment-info"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["billing-form"].text),Object(i.b)(r.Fragment,null,c.a["billing-form"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["payment-info-button"].text),Object(i.b)(r.Fragment,null,c.a["payment-info-button"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["billing-creditcard-form"].text),Object(i.b)(r.Fragment,null,c.a["billing-creditcard-form"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["payment-remember-me"].text),Object(i.b)(r.Fragment,null,c.a["payment-remember-me"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["billing-update-card"].text),Object(i.b)(r.Fragment,null,c.a["billing-update-card"].image))),Object(i.b)("h2",null,"Updating billing receipt email and extra receipt information"),Object(i.b)("p",null,"You can update the email address used for receipts, and add extra information to the receipt for your paid user account plan, such as your business name, VAT identification number, or address of record. Updated billing information will appear on all receipts immediately."),Object(i.b)(b,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The billing email is used for receipts only and is not required to match the email address of the person whose card is used to pay for the paid user account plan.")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["user-login"].text),Object(i.b)(r.Fragment,null,c.a["user-login"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["billing-info"].text),Object(i.b)(r.Fragment,null,c.a["billing-info"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["billing-history"].text),Object(i.b)(r.Fragment,null,c.a["billing-history"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["billing-receipt-settings"].text),Object(i.b)(r.Fragment,null,c.a["billing-receipt-settings"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["billing-extra-info"].text),Object(i.b)(r.Fragment,null,c.a["billing-extra-info"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["billing-extra-receipt-email"].text),Object(i.b)(r.Fragment,null,c.a["billing-extra-receipt-email"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(r.Fragment,null,c.a["billing-extra-save"].text),Object(i.b)(r.Fragment,null,c.a["billing-extra-save"].image))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-paying-for-your-npm-user-account-updating-user-account-billing-settings-mdx-1265276ae95ce36ea0e6.js.map