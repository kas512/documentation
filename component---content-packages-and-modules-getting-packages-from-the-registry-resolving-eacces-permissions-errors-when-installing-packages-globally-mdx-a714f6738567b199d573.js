(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),p=n("8Aig"),b=n("ReZb"),s=n("GCVy"),d=n("+6vE");var u=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return i.a.createElement("strong",null,t)},y=n("gnlW"),g=n("mwnC"),h=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return i.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var E=N,w=n("MfeC");function v(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,r.variant.title),i.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},l)))}v.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=v,k=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),T=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),M=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,j=r.title,N=r.description,v=r.status,P=r.source,S=r.additionalContributors,z=void 0===S?[]:S,A=w.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:b.a,Note:s.a,Prompt:u,PromptReply:f,Screenshot:y.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:j,description:N}),i.a.createElement(p.b,{location:a}),i.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(g.a,{location:a})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},j),N))),null!=A?i.a.createElement(I,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?i.a.createElement(T,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(E,{items:n.tableOfContents.items})):null,i.a.createElement(M,null,v||P?i.a.createElement(o.k,{mb:3,alignItems:"center"},v?i.a.createElement(O.a,{status:v}):null,i.a.createElement(o.e,{mx:"auto"}),P?i.a.createElement(h.a,{href:P}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:l.b,mr:2}):i.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},VAUp:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return b}));var a,o=n("8o2o"),l=(n("q1tI"),n("7ljp")),r=n("O6H6"),i={},c=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),m={_frontmatter:i},p=r.a;function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(p,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"If you see an ",Object(l.b)("inlineCode",{parentName:"p"},"EACCES")," error when you try to ",Object(l.b)("a",{parentName:"p",href:"downloading-and-installing-packages-globally"},"install a package globally"),", you can either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Reinstall npm with a node version manager (recommended),"),Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"or"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Manually change npm's default directory"))),Object(l.b)("h2",null,"Reinstall npm with a node version manager"),Object(l.b)("p",null,'This is the best way to avoid permissions issues. To reinstall npm with a node version manager, follow the steps in "',Object(l.b)("a",{parentName:"p",href:"downloading-and-installing-node-js-and-npm"},"Downloading and installing Node.js and npm"),'". You do not need to remove your current version of npm or Node.js before installing a node version manager.'),Object(l.b)("h2",null,"Manually change npm's default directory"),Object(l.b)(c,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," This section does not apply to Microsoft Windows.")),Object(l.b)("p",null,"To minimize the chance of permissions errors, you can configure npm to use a different directory. In this example, you will create and use hidden directory in your home directory."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Back up your computer.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"On the command line, in your home directory, create a directory for global installations:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"mkdir ~/.npm-global\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Configure npm to use the new directory path:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"npm config set prefix '~/.npm-global'\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In your preferred text editor, open or create a ",Object(l.b)("inlineCode",{parentName:"p"},"~/.profile")," file and add this line:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"export PATH=~/.npm-global/bin:$PATH\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"On the command line, update your system variables:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"source ~/.profile\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"To test your new configuration, install a package globally without using ",Object(l.b)("inlineCode",{parentName:"p"},"sudo"),":"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"npm install -g jshint\n")))),Object(l.b)("p",null,"Instead of steps 2-4, you can use the corresponding ENV variable (e.g. if you don't want to modify ",Object(l.b)("inlineCode",{parentName:"p"},"~/.profile"),"):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"NPM_CONFIG_PREFIX=~/.npm-global\n")),Object(l.b)(c,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"npx: an alternative to running global commands")),Object(l.b)("p",null,"If you are using npm version 5.2 or greater, you may want to consider ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx")," as an alternative way to run global commands, especially if you only need a command occasionally. For more information, see ",Object(l.b)("a",{parentName:"p",href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b"},"this article about npx"),".")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-getting-packages-from-the-registry-resolving-eacces-permissions-errors-when-installing-packages-globally-mdx-a714f6738567b199d573.js.map