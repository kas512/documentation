(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),r=a("aOgs"),i=a("q1tI"),c=a.n(i),l=a("7ljp"),p=a("pD55"),m=a("8Aig"),s=a("ReZb"),u=a("GCVy"),d=a("+6vE");var b=function(e){var t=e.children;return c.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return c.a.createElement("strong",null,t)},h=a("gnlW"),f=a("mwnC"),y=a("/Rw0"),O=a("dVM4"),j=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,a=e.depth;return c.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},c.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(w,{items:e.items,depth:a+1}):null)})))}w.defaultProps={depth:0};var k=w,v=a("MfeC");function E(e){var t=v.a.getPath(e.location.pathname),a=v.a.getVariantAndPage(e.root,t);if(!a)return null;var n=v.a.getVariantsForPage(e.root,a.page),r=[],i=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(i=e),r.push(c.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(o.i,{overlay:e.overlay},c.a.createElement(o.i.Button,null,i.variant.title),c.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},r)))}E.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=E,C=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,i=a.frontmatter,j=i.title,w=i.description,E=i.status,D=i.source,W=i.additionalContributors,z=void 0===W?[]:W,M=v.a.getVariantRoot(n.pathname);return c.a.createElement(l.a,{components:{Index:s.a,Note:u.a,Prompt:b,PromptReply:g,Screenshot:h.a}},c.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(p.a,{title:j,description:w}),c.a.createElement(m.b,{location:n}),c.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(o.e,{display:["none",null,null,"block"]},c.a.createElement(f.a,{location:n})),c.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(_,null,c.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(o.e,null,c.a.createElement(o.e,null,c.a.createElement(o.m,{as:"h1"},j),w))),null!=M?c.a.createElement(I,null,c.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:n})):null),a.tableOfContents.items?c.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},c.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(k,{items:a.tableOfContents.items})):null,c.a.createElement(T,null,E||D?c.a.createElement(o.k,{mb:3,alignItems:"center"},E?c.a.createElement(O.a,{status:E}):null,c.a.createElement(o.e,{mx:"auto"}),D?c.a.createElement(y.a,{href:D}):null):null,a.tableOfContents.items?c.a.createElement(o.e,{display:["block",null,"none"],mb:3},c.a.createElement(o.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(o.r,{icon:r.b,mr:2}):c.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),c.a.createElement(o.e,{pt:1},c.a.createElement(k,{items:a.tableOfContents.items})))}))):null,t,c.a.createElement(d.a,{editUrl:a.editUrl,contributors:a.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},loRU:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("O6H6"),i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},l=c("Note"),p=c("Screenshot"),m={_frontmatter:i},s=r.a;function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(s,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you no longer wish to maintain a package, or if you would like to encourage users to update to a new or different version, you can ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"/cli/deprecate"}),"deprecate")," it. Deprecating a package or version will print a message to the terminal when a user installs it."),Object(o.b)("p",null,"A deprecation warning or message can say anything. You may wish to include a message encouraging users to update to a specific version, or an alternate, supported package."),Object(o.b)(l,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," We strongly recommend deprecating packages or package versions instead of ",Object(o.b)("a",{href:"/unpublishing-packages-from-the-registry"},"unpublishing")," them, because unpublishing removes a package from the registry entirely, meaning anyone who relied on it will no longer be able to use it, with no warning.")),Object(o.b)("h2",null,"Deprecating an entire package or a single version of a package"),Object(o.b)("h3",null,"Deprecating an entire package"),Object(o.b)("p",null,"Deprecating an entire package will remove it from search results on the npm website, and a deprecation message will also be displayed on the package page."),Object(o.b)(p,{src:"/packages-and-modules/updating-and-managing-your-published-packages/deprecate-package.png",alt:"Screenshot of package deprecation",mdxType:"Screenshot"}),Object(o.b)("p",null,"To deprecate an entire package, run the following command, replacing ",Object(o.b)("inlineCode",{parentName:"p"},"<package-name>")," with the name of your package, and ",Object(o.b)("inlineCode",{parentName:"p"},'"<message>"')," with your deprecation message:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'npm deprecate <package-name> "<message>"\n')),Object(o.b)("p",null,"If you have enabled ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"about-two-factor-authentication"}),"two-factor authentication"),", add a one-time password to the command, ",Object(o.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(o.b)("em",{parentName:"p"},"123456")," is the code from your authenticator app)."),Object(o.b)("h3",null,"Deprecating a single version of a package"),Object(o.b)("p",null,"When you deprecate a version fo a package, a red message will be displayed on that version's package page, similar to deprecating an entire package."),Object(o.b)(p,{src:"/packages-and-modules/updating-and-managing-your-published-packages/deprecate-version.png",alt:"Screenshot of package deprecation for a particular version",mdxType:"Screenshot"}),Object(o.b)("p",null,"To deprecate a package version, run the following command, replacing ",Object(o.b)("inlineCode",{parentName:"p"},"<package-name>")," with the name of your package, ",Object(o.b)("inlineCode",{parentName:"p"},"<version>")," with your version number, and ",Object(o.b)("inlineCode",{parentName:"p"},'"<message>"')," with your deprecation message:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'npm deprecate <package-name>@<version> "<message>"\n')),Object(o.b)("p",null,"The CLI will also accept version ranges for ",Object(o.b)("inlineCode",{parentName:"p"},"<version>"),"."),Object(o.b)("p",null,"If you have two-factor auth, add a one-time password to the command, ",Object(o.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(o.b)("em",{parentName:"p"},"123456")," is the code from your authenticator)."),Object(o.b)("h2",null,"Undeprecating a package or version"),Object(o.b)("p",null,"To undeprecate a package, replace ",Object(o.b)("inlineCode",{parentName:"p"},'"<message>"')," with ",Object(o.b)("inlineCode",{parentName:"p"},'""')," (an empty string) in one of the above commands."),Object(o.b)("p",null,"For example, to undeprecate a package version, run the following command, replacing ",Object(o.b)("inlineCode",{parentName:"p"},"<package-name>")," with the name of your package, and ",Object(o.b)("inlineCode",{parentName:"p"},"<version>")," with your version number:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'npm deprecate <package-name>@<version> ""\n')),Object(o.b)("p",null,"If you have two-factor auth, add a one-time password to the command, ",Object(o.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(o.b)("em",{parentName:"p"},"123456")," is the code from your authenticator)."),Object(o.b)("h2",null,"Transferring a deprecated package to npm"),Object(o.b)("p",null,"If you are no longer maintaining a package, but other users depend on it, and you'd like to remove it from your user profile, you can transfer it to the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/~npm"}),Object(o.b)("inlineCode",{parentName:"a"},"@npm"))," user account, which is owned by the npm registry."),Object(o.b)(l,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Once you transfer a package to the npm account, you will no longer be able to update it.")),Object(o.b)("p",null,"To transfer a package to the npm user account, run the following two commands in order, replacing ",Object(o.b)("inlineCode",{parentName:"p"},"<user>")," with your npm user name, and ",Object(o.b)("inlineCode",{parentName:"p"},"<package-name>")," with the package you want to transfer:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm owner add npm <package-name>\nnpm owner rm <user> <package-name>\n")),Object(o.b)("p",null,"If you have two-factor auth, add a one-time password to the command, ",Object(o.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(o.b)("em",{parentName:"p"},"123456")," is the code from your authenticator)."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-updating-and-managing-your-published-packages-deprecating-and-undeprecating-packages-or-package-versions-mdx-48a2fe701e3f22274340.js.map