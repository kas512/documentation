(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),r=a("aOgs"),l=a("q1tI"),i=a.n(l),c=a("7ljp"),s=a("pD55"),m=a("8Aig"),u=a("ReZb"),p=a("GCVy"),d=a("+6vE");var b=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=a("gnlW"),y=a("mwnC"),g=a("/Rw0"),w=a("dVM4"),E=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function O(e){var t=e.items,a=e.depth;return i.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(O,{items:e.items,depth:a+1}):null)})))}O.defaultProps={depth:0};var j=O,v=a("MfeC");function k(e){var t=v.a.getPath(e.location.pathname),a=v.a.getVariantAndPage(e.root,t);if(!a)return null;var n=v.a.getVariantsForPage(e.root,a.page),r=[],l=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(l=e),r.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,l.variant.title),i.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},r)))}k.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=k,_=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),N=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),P=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,l=a.frontmatter,E=l.title,O=l.description,k=l.status,z=l.source,B=l.additionalContributors,W=void 0===B?[]:B,H=v.a.getVariantRoot(n.pathname);return i.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:b,PromptReply:h,Screenshot:f.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(s.a,{title:E,description:O}),i.a.createElement(m.b,{location:n}),i.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(y.a,{location:n})),i.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(C,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},E),O))),null!=H?i.a.createElement(I,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:n})):null),a.tableOfContents.items?i.a.createElement(P,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(j,{items:a.tableOfContents.items})):null,i.a.createElement(S,null,k||z?i.a.createElement(o.k,{mb:3,alignItems:"center"},k?i.a.createElement(w.a,{status:k}):null,i.a.createElement(o.e,{mx:"auto"}),z?i.a.createElement(g.a,{href:z}):null):null,a.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:r.b,mr:2}):i.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(j,{items:a.tableOfContents.items})))}))):null,t,i.a.createElement(d.a,{editUrl:a.editUrl,contributors:a.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},g7qY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a("8o2o"),o=(a("q1tI"),a("7ljp")),r=a("O6H6"),l={},i={_frontmatter:l},c=r.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(c,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Secure your npm account with a strong and unique password using a password manager."),Object(o.b)("p",null,"You must choose or generate a password for your npm account that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"is longer than 10 characters"),Object(o.b)("li",{parentName:"ul"},"does not match or significantly contain your username, e.g. do not use 'username123'"),Object(o.b)("li",{parentName:"ul"},"is not a ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://www.npmjs.com/signup/common-passwords"}),"commonly used password")),Object(o.b)("li",{parentName:"ul"},"has not been compromised and known to the ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://haveibeenpwned.com/"}),"Have I Been Pwned")," breach database")),Object(o.b)("p",null,"To keep your account secure, we recommend you follow these best practices:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use a password manager, such as ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://lastpass.com/"}),"LastPass")," or ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://1password.com/"}),"1Password"),", to generate a password more than 16 characters."),Object(o.b)("li",{parentName:"ul"},"Generate a unique password for npm. If you use your npm password elsewhere and that service is compromised, then attackers or other malicious actors could use that information to access your npm account."),Object(o.b)("li",{parentName:"ul"},'Configure two-factor authentication for your account. For more information, see "About two-factor authentication."'),Object(o.b)("li",{parentName:"ul"},'Never share your password, even with a potential collaborator. Each person should use their own personal account on npm. For more information on ways to collaborate, see: "',Object(o.b)("a",Object.assign({parentName:"li"},{href:"/organizations"}),"npm organizations"),'".')),Object(o.b)("p",null,"When you type a password to sign in, create an account, or change your password, npm will check if the password you entered is considered weak according to datasets like HaveIBeenPwned. The password may be identified as weak even if you have never used that password before."),Object(o.b)("p",null,"npm only inspects the password at the time you type it, and never stores the password you entered in plaintext. For more information, see ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://haveibeenpwned.com/"}),"HaveIBeenPwned"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-setting-up-your-npm-user-account-creating-a-strong-password-mdx-2292aa4652ccbb704906.js.map