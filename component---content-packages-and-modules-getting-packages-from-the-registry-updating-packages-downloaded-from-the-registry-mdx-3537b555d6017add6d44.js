(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),l=a("u9kb"),o=a("aOgs"),r=a("q1tI"),c=a.n(r),i=a("7ljp"),p=a("pD55"),m=a("8Aig"),b=a("ReZb"),d=a("GCVy"),u=a("+6vE");var s=function(e){var t=e.children;return c.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return c.a.createElement("strong",null,t)},h=a("gnlW"),O=a("mwnC"),j=a("/Rw0"),f=a("dVM4"),y=Object(n.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,a=e.depth;return c.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(l.e,{as:"li",key:e.url,pl:a>0?3:0},c.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(E,{items:e.items,depth:a+1}):null)})))}E.defaultProps={depth:0};var k=E,N=a("MfeC");function v(e){var t=N.a.getPath(e.location.pathname),a=N.a.getVariantAndPage(e.root,t);if(!a)return null;var n=N.a.getVariantsForPage(e.root,a.page),o=[],r=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(r=e),o.push(c.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(l.i,{overlay:e.overlay},c.a.createElement(l.i.Button,null,r.variant.title),c.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},o)))}v.Menu=Object(n.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=v,x=Object(n.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(n.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,r=a.frontmatter,y=r.title,E=r.description,v=r.status,z=r.source,M=r.additionalContributors,P=void 0===M?[]:M,W=N.a.getVariantRoot(n.pathname);return c.a.createElement(i.a,{components:{Index:b.a,Note:d.a,Prompt:s,PromptReply:g,Screenshot:h.a}},c.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(p.a,{title:y,description:E}),c.a.createElement(m.b,{location:n}),c.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(l.e,{display:["none",null,null,"block"]},c.a.createElement(O.a,{location:n})),c.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(_,null,c.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(l.e,null,c.a.createElement(l.e,null,c.a.createElement(l.m,{as:"h1"},y),E))),null!=W?c.a.createElement(I,null,c.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:n})):null),a.tableOfContents.items?c.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},c.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(k,{items:a.tableOfContents.items})):null,c.a.createElement(T,null,v||z?c.a.createElement(l.k,{mb:3,alignItems:"center"},v?c.a.createElement(f.a,{status:v}):null,c.a.createElement(l.e,{mx:"auto"}),z?c.a.createElement(j.a,{href:z}):null):null,a.tableOfContents.items?c.a.createElement(l.e,{display:["block",null,"none"],mb:3},c.a.createElement(l.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(l.r,{icon:o.b,mr:2}):c.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),c.a.createElement(l.e,{pt:1},c.a.createElement(k,{items:a.tableOfContents.items})))}))):null,t,c.a.createElement(u.a,{editUrl:a.editUrl,contributors:a.contributors.concat(P.map((function(e){return{login:e}})))}))))))}},zKUj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n,l=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("O6H6"),c={},i=(n="Note",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={_frontmatter:c},m=r.a;function b(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)(m,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Updating local and global packages you downloaded from the registry helps keep your code and tools stable, usable, and secure."),Object(o.b)("h2",null,"Updating local packages"),Object(o.b)("p",null,"We recommend regularly updating the local packages your project depends on to improve your code as improvements to its dependencies are made."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to the root directory of your project and ensure it contains a ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object.assign({parentName:"pre"},{}),"cd /path/to/project\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In your project root directory, run the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/cli/update"}),Object(o.b)("inlineCode",{parentName:"a"},"update")," command"),":"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm update\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To test the update, run the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/cli/outdated"}),Object(o.b)("inlineCode",{parentName:"a"},"outdated")," command"),". There should not be any output."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm outdated\n")))),Object(o.b)("h2",null,"Updating globally-installed packages"),Object(o.b)(i,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," If you are using npm version 2.6.0 or less, run ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://gist.github.com/othiym23/4ac31155da23962afd0e"}),"this script")," to update all outdated global packages."),Object(o.b)("p",null,"However, please consider upgrading to the latest version of npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm install npm@latest -g\n"))),Object(o.b)("h3",null,"Determining which global packages need updating"),Object(o.b)("p",null,"To see which global packages need to be updated, on the command line, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm outdated -g --depth=0\n")),Object(o.b)("h3",null,"Updating a single global package"),Object(o.b)("p",null,"To update a single global package, on the command line, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm update -g <package_name>\n")),Object(o.b)("h3",null,"Updating all globally-installed packages"),Object(o.b)("p",null,"To update all global packages, on the command line, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm update -g\n")),Object(o.b)("h2",null,"Resources"),Object(o.b)("iframe",{src:"https://www.youtube.com/embed/HRudtPGcOt4",frameBorder:"0",allowFullScreen:!0}),Object(o.b)("h3",null,"CLI commands"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"/cli/update"}),"npm-update")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"/cli/outdated"}),"npm-outdated"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-getting-packages-from-the-registry-updating-packages-downloaded-from-the-registry-mdx-3537b555d6017add6d44.js.map