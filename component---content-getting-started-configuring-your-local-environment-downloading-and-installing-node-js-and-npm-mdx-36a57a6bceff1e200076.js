(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),r=n("q1tI"),i=n.n(r),s=n("7ljp"),c=n("pD55"),m=n("8Aig"),u=n("ReZb"),b=n("GCVy"),d=n("+6vE");var p=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},h=n("gnlW"),j=n("mwnC"),f=n("/Rw0"),O=n("dVM4"),y=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return i.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var v=N,w=n("MfeC");function E(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,r.variant.title),i.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},l)))}E.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=E,k=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),W=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,y=r.title,N=r.description,E=r.status,L=r.source,T=r.additionalContributors,z=void 0===T?[]:T,M=w.a.getVariantRoot(a.pathname);return i.a.createElement(s.a,{components:{Index:u.a,Note:b.a,Prompt:p,PromptReply:g,Screenshot:h.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:y,description:N}),i.a.createElement(m.b,{location:a}),i.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(j.a,{location:a})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},y),N))),null!=M?i.a.createElement(I,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(v,{items:n.tableOfContents.items})):null,i.a.createElement(W,null,E||L?i.a.createElement(o.k,{mb:3,alignItems:"center"},E?i.a.createElement(O.a,{status:E}):null,i.a.createElement(o.e,{mx:"auto"}),L?i.a.createElement(f.a,{href:L}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:l.b,mr:2}):i.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},QoL1:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));var a,o=n("zLVn"),l=(n("q1tI"),n("7ljp")),r=n("O6H6"),i={},s=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),c={_frontmatter:i},m=r.a;function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(m,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"To publish and install packages to and from the public npm registry or your company's npm Enterprise registry, you must install Node.js and the npm command line interface using either a Node version manager or a Node installer. ",Object(l.b)("strong",{parentName:"p"},"We strongly recommend using a Node version manager like ",Object(l.b)("a",Object.assign({parentName:"strong"},{href:"https://github.com/nvm-sh/nvm"}),"nvm")," to install Node.js and npm.")," We do not recommend using a Node installer, since the Node installation process installs npm in a directory with local permissions and can cause permissions errors when you run npm packages globally."),Object(l.b)(s,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," npm Enterprise requires npm 4.4.x or greater. To download the latest version of npm, on the command line, run the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),"npm install -g npm\n"))),Object(l.b)("h2",null,"Overview"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#checking-your-version-of-npm-and-node-js"}),"Checking your version of npm and Node.js")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#using-a-node-version-manager-to-install-node-js-and-npm"}),"Using a Node version manager to install Node.js and npm")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"#using-a-node-installer-to-install-node-js-and-npm"}),"Using a Node installer to install Node.js and npm"))),Object(l.b)("h2",null,"Checking your version of npm and Node.js"),Object(l.b)("p",null,"To see if you already have Node.js and npm installed and check the installed version, run the following commands:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),"node -v\nnpm -v\n")),Object(l.b)("h2",null,"Using a Node version manager to install Node.js and npm"),Object(l.b)("p",null,"Node version managers allow you to install and switch between multiple versions of Node.js and npm on your system so you can test your applications on multiple versions of npm to ensure they work for users on different versions."),Object(l.b)("h3",null,"OSX or Linux Node version managers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/creationix/nvm"}),"nvm")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/tj/n"}),"n"))),Object(l.b)("h3",null,"Windows Node version managers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/marcelklehr/nodist"}),"nodist")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/coreybutler/nvm-windows"}),"nvm-windows"))),Object(l.b)("h2",null,"Using a Node installer to install Node.js and npm"),Object(l.b)("p",null,"If you are unable to use a Node version manager, you can use a Node installer to install both Node.js and npm on your system."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://nodejs.org/en/download/"}),"Node.js installer")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/nodesource/distributions"}),"NodeSource installer"))),Object(l.b)("p",null,"If you use Linux, we recommend that you use a NodeSource installer."),Object(l.b)("h3",null,"OS X or Windows Node installers"),Object(l.b)("p",null,"If you're using OS X or Windows, use one of the installers from the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"Node.js download page"),". Be sure to install the version labeled ",Object(l.b)("strong",{parentName:"p"},"LTS"),". Other versions have not yet been tested with npm."),Object(l.b)("h3",null,"Linux or other operating systems Node installers"),Object(l.b)("p",null,"If you're using Linux or another operating system, use one of the following installers:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/nodesource/distributions"}),"NodeSource installer")," (recommended)"),Object(l.b)("li",{parentName:"ul"},"One of the installers on the ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://nodejs.org/en/download/"}),"Node.js download page"))),Object(l.b)("p",null,"Or see ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://nodejs.org/en/download/package-manager/"}),"this page")," to install npm for Linux in the way many Linux developers prefer."),Object(l.b)("h3",null,"Less-common operating systems"),Object(l.b)("p",null,"For more information on installing Node.js on a variety of operating systems, see ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://nodejs.org/en/download/package-manager/"}),"this page"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-configuring-your-local-environment-downloading-and-installing-node-js-and-npm-mdx-36a57a6bceff1e200076.js.map