(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{O6H6:function(e,t,n){"use strict";var r=n("vOnD"),a=n("u9kb"),o=n("aOgs"),l=n("q1tI"),i=n.n(l),c=n("7ljp"),p=n("pD55"),m=n("8Aig"),s=n("ReZb"),u=n("GCVy"),b=n("+6vE");var f=function(e){var t=e.children;return i.a.createElement(a.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(a.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},d=n("gnlW"),y=n("mwnC"),h=n("/Rw0"),O=n("dVM4"),j=Object(r.f)(a.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return i.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(a.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(a.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var w=E,N=n("MfeC");function v(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var r=N.a.getVariantsForPage(e.root,n.page),o=[],l=r[0];return 0===r.length?null:(r.forEach((function(e){e.page.url===t&&(l=e),o.push(i.a.createElement(a.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(a.i,{overlay:e.overlay},i.a.createElement(a.i.Button,null,l.variant.title),i.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},o)))}v.Menu=Object(r.f)(a.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=v,C=Object(r.f)(a.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),k=Object(r.f)(a.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(r.f)(a.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(r.f)(a.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(r.f)(a.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(r.f)(a.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,r=e.location,l=n.frontmatter,j=l.title,E=l.description,v=l.status,z=l.source,A=l.additionalContributors,M=void 0===A?[]:A,W=N.a.getVariantRoot(r.pathname);return i.a.createElement(c.a,{components:{Index:s.a,Note:u.a,Prompt:f,PromptReply:g,Screenshot:d.a}},i.a.createElement(a.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(p.a,{title:j,description:E}),i.a.createElement(m.b,{location:r}),i.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(a.e,{display:["none",null,null,"block"]},i.a.createElement(y.a,{location:r})),i.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(a.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(a.e,null,i.a.createElement(a.e,null,i.a.createElement(a.m,{as:"h1"},j),E))),null!=W?i.a.createElement(I,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:r})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(a.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(w,{items:n.tableOfContents.items})):null,i.a.createElement(T,null,v||z?i.a.createElement(a.k,{mb:3,alignItems:"center"},v?i.a.createElement(O.a,{status:v}):null,i.a.createElement(a.e,{mx:"auto"}),z?i.a.createElement(h.a,{href:z}):null):null,n.tableOfContents.items?i.a.createElement(a.e,{display:["block",null,"none"],mb:3},i.a.createElement(a.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(a.r,{icon:o.b,mr:2}):i.a.createElement(a.r,{icon:o.c,mr:2}),"Table of contents"),i.a.createElement(a.e,{pt:1},i.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(b.a,{editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},zuqS:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n("8o2o"),a=(n("q1tI"),n("7ljp")),o=n("O6H6"),l={},i={_frontmatter:l},c=o.a;function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(c,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"note"},Object(a.b)("span",{className:"bold"},"Note:")," npm Enterprise requires npm 4.4.x or greater. To download the latest version of npm, on the command line, run ",Object(a.b)("code",{className:"highlighter-rouge"},"[sudo] npm install npm -g")),Object(a.b)("p",null,"You can configure your npm client to publish to and install from your private npm Enterprise registry by:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Setting your company's npm Enterprise registry as your default registry (recommended)"),Object(a.b)("li",{parentName:"ul"},"Using npmrc to managing multiple profiles for different registries"),Object(a.b)("li",{parentName:"ul"},"Configuring scopes to point to different registries")),Object(a.b)("h2",null,"Setting your company's npm Enterprise registry as your default registry"),Object(a.b)("p",null,"The easiest way to publish to and install from your company's npm Enterprise registry is to set it as your default registry."),Object(a.b)("p",null,'On the command line, run the following command, replacing "your-registry" with the name of your company\'s npm Enterprise registry:'),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"npm config set registry https://registry.your-registry.npme.io/\n")),Object(a.b)("h2",null,"Using npmrc to managing multiple profiles for different registries"),Object(a.b)("p",null,"If you need to publish and install packages to and from different registries -- for example, an npm Enterprise registry for work-related code, and the npmjs.com public registry for open source projects -- you can create and manage a separate npm user profile for each registry using the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/npmrc"}),"npmrc")," tool."),Object(a.b)("h3",null,"Overview"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#install-npmrc"}),"Install npmrc")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#create-an-npm-enterprise-profile"}),"Create an npm Enterprise profile")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#create-a-profile-for-the-public-npm-registry"}),"Create a profile for the public npm registry")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#switch-profiles-with-npmrc"}),"Switch profiles with npmrc"))),Object(a.b)("h3",null,"Install npmrc"),Object(a.b)("p",null,"To install npmrc, on the command line, run"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"npm i npmrc -g\n")),Object(a.b)("h3",null,"Create an npm Enterprise profile"),Object(a.b)("p",null,"After installing npmrc, you can create a profile to access your company's Enterprise registry."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"To create an npm Enterprise profile, on the command line, run ",Object(a.b)("inlineCode",{parentName:"li"},"npmrc -c name-of-profile"),'. For example, to create a profile called "work", run the following command:',Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object.assign({parentName:"pre"},{}),"npmrc -c work\n"))),Object(a.b)("li",{parentName:"ol"},"To set an npm Enterprise registry for the profile, run the following command, replacing your-company-registry with the name of your company's npm Enterprise registry:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object.assign({parentName:"pre"},{}),"npm config set registry https://registry.your-company-registry.npme.io/\n")))),Object(a.b)("h3",null,"Create a profile for the public npm registry"),Object(a.b)("p",null,"After you have created your npm Enterprise profile, you can create a second profile for a different registry, such as the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://registry.npmjs.com"}),"public npm registry"),"."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"To create a profile for the public registry, on the command line, run ",Object(a.b)("inlineCode",{parentName:"li"},"npmrc -c name-of-profile"),'. For example, to create a profile called "open-source", run ',Object(a.b)("inlineCode",{parentName:"li"},"npmrc -c open-source"),"."),Object(a.b)("li",{parentName:"ol"},"To set the public registry for your open source profile, run the following command:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object.assign({parentName:"pre"},{}),"npm config set registry https://registry.npmjs.org/\n")))),Object(a.b)("h3",null,"Switch profiles with npmrc"),Object(a.b)("p",null,"To switch profiles, on the command line, run the following command,\nreplacing ",Object(a.b)("inlineCode",{parentName:"p"},"profile-name")," with the name of your profile:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"  npmrc profile-name\n")),Object(a.b)("h2",null,"Configuring scopes to point to different registries"),Object(a.b)("p",null,"You can also map different scopes to different npm registries. For example, to use the scope ",Object(a.b)("inlineCode",{parentName:"p"},"@company-scope")," from your npm Enterprise registry, while continuing to install public packages from the public npm registry, run the following command, replacing ",Object(a.b)("inlineCode",{parentName:"p"},"@company-scope")," with the scope, and ",Object(a.b)("inlineCode",{parentName:"p"},"company-registry")," with the name of your company's npm Enterprise registry:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{}),"  npm login --scope=@company-scope --registry=https://registry.company-registry.npme.io/\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-configuring-your-local-environment-configuring-your-registry-settings-as-an-npm-enterprise-user-mdx-60e52e4f94b5323f3139.js.map