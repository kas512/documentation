(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),p=n("8Aig"),s=n("ReZb"),u=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return i.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},y=n("gnlW"),f=n("mwnC"),h=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function E(e){var t=e.items,n=e.depth;return i.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var k=E,v=n("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),o=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),o.push(i.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(l.i,{overlay:e.overlay},i.a.createElement(l.i.Button,null,r.variant.title),i.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},o)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,N=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),A=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,j=r.title,E=r.description,w=r.status,F=r.source,P=r.additionalContributors,R=void 0===P?[]:P,z=v.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:s.a,Note:u.a,Prompt:b,PromptReply:g,Screenshot:y.a}},i.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:j,description:E}),i.a.createElement(p.b,{location:a}),i.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.e,{display:["none",null,null,"block"]},i.a.createElement(f.a,{location:a})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.e,null,i.a.createElement(l.e,null,i.a.createElement(l.m,{as:"h1"},j),E))),null!=z?i.a.createElement(I,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},i.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(k,{items:n.tableOfContents.items})):null,i.a.createElement(A,null,w||F?i.a.createElement(l.k,{mb:3,alignItems:"center"},w?i.a.createElement(O.a,{status:w}):null,i.a.createElement(l.e,{mx:"auto"}),F?i.a.createElement(h.a,{href:F}):null):null,n.tableOfContents.items?i.a.createElement(l.e,{display:["block",null,"none"],mb:3},i.a.createElement(l.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.r,{icon:o.b,mr:2}):i.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),i.a.createElement(l.e,{pt:1},i.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(R.map((function(e){return{login:e}})))}))))))}},vC2M:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n("zLVn"),l=n("q1tI"),o=n("7ljp"),r=n("O6H6"),i=n("4LHR"),c={},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},p=m("Note"),s=m("Screenshot"),u={_frontmatter:c},d=r.a;function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(d,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As an Enterprise admin, you can prevent the download of insecure packages. For example, this is useful for keeping vulnerable dependencies out of your applications. At the moment, you can choose from three different security policies:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Allow all packages."),Object(o.b)("li",{parentName:"ul"},"Block packages with critical vulnerabilities."),Object(o.b)("li",{parentName:"ul"},"Block all vulnerable packages.")),Object(o.b)(p,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Packages are only blocked if they are not locally cached. Whenever you change policy, we recommend clearing your global cache (",Object(o.b)("inlineCode",{parentName:"p"},"npm cache clear --force"),") and doing a clean install of your project (",Object(o.b)("inlineCode",{parentName:"p"},"npm clean-install"),").")),Object(o.b)("p",null,"All packages are allowed by default. To change your security policy:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log in to your Enterprise instance using your temporary username and password.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)(l.Fragment,null,i.a["enterprise-admin-panel"].text),Object(o.b)(l.Fragment,null,i.a["enterprise-admin-panel"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Click "settings".'),Object(o.b)(l.Fragment,null,i.a["enterprise-admin-panel-settings"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the Settings page, under Security Policy, choose a policy."),Object(o.b)(l.Fragment,null,i.a["enterprise-choose-security-policy"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Optionally provide a custom message for the install logs whenever a package is blocked."),Object(o.b)(l.Fragment,null,i.a["enterprise-custom-blocking-message"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'If present, check the "I acknowledge that this policy may cause my builds to break" box.'),Object(o.b)(s,{src:"/enterprise/setup-and-configuration/acknowledge-blocking.png",alt:"Screenshot showing an acknowledgement of broken builds",mdxType:"Screenshot"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Click "Apply Policy".'))),Object(o.b)("p",null,"If ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," attempts to download a package that violates the policy, developers will see an error similar to the following."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"$ npm i lodash@1.0.0\nnpm notice Could not download lodash 1.0.0 due to policy violations. Use `npm audit fix` to upgrade this dependency.\nnpm ERR! code E403\nnpm ERR! 403 Forbidden - GET https://registry.npmjs.com/lodash/-/lodash-1.0.0.tgz\n")),Object(o.b)("p",null,"To fix this error, use ",Object(o.b)("inlineCode",{parentName:"p"},"npm audit fix")," to upgrade dependencies to versions that don't violate policy."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-enterprise-setup-and-configuration-defining-security-policy-mdx-4bc59d42f35df628f525.js.map