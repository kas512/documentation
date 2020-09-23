(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{EyKe:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n,o=a("8o2o"),r=(a("q1tI"),a("7ljp")),i=a("O6H6"),c={},l=(n="Note",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),p={_frontmatter:c},s=i.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(s,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," You can only publish unscoped packages to the npm public registry. You cannot publish unscoped packages to an npm Enterprise registry.")),Object(r.b)("p",null,"As an npm user, you can create unscoped packages to use in your own projects and publish them to the npm public registry for others to use in theirs. Unscoped packages are always public and are referred to by the package name only:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"package-name\n")),Object(r.b)("p",null,'For more information on package scope, access, and visibility, see "',Object(r.b)("a",Object.assign({parentName:"p"},{href:"package-scope-access-level-and-visibility"}),"Package scope, access level, and visibility"),'".'),Object(r.b)(l,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Before you can publish public unscoped npm packages, you must ",Object(r.b)("a",{href:"https://www.npmjs.com/signup"},"sign up")," for an npm user account.")),Object(r.b)("h2",null,"Creating an unscoped public package"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the command line, create a directory for your package:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{}),"mkdir my-test-package\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Navigate to the root directory of your package:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{}),"cd my-test-package\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you are using git to manage your package code, in the package root directory, run the following commands, replacing ",Object(r.b)("inlineCode",{parentName:"p"},"git-remote-url")," with the git remote URL for your package:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{}),"git init\ngit remote add origin git://git-remote-url\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the package root directory, run the ",Object(r.b)("inlineCode",{parentName:"p"},"npm init")," command.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Respond to the prompts to generate a ",Object(r.b)("a",{href:"https://docs.npmjs.com/about-package-json-and-package-lock-json-files"},Object(r.b)("inlineCode",{parentName:"p"},"package.json")),' file. For help naming your package, see "',Object(r.b)("a",Object.assign({parentName:"p"},{href:"package-name-guidelines"}),"Package name guidelines"),'".')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"about-package-readme-files"}),"README file")," that explains what your package code is and how to use it.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In your preferred text editor, write the code for your package."))),Object(r.b)("h2",null,"Reviewing package contents for sensitive or unnecessary information"),Object(r.b)("p",null,"Publishing sensitive information to the registry can harm your users, compromise your development infrastructure, be expensive to fix, and put you at risk of legal action. ",Object(r.b)("strong",{parentName:"p"},"We strongly recommend removing sensitive information, such as private keys, passwords, ",Object(r.b)("a",Object.assign({parentName:"strong"},{href:"https://en.wikipedia.org/wiki/Personally_identifiable_information"}),"personally identifiable information")," (PII), and credit card data before publishing your package to the registry.")),Object(r.b)("p",null,"For less sensitive information, such as testing data, use a ",Object(r.b)("inlineCode",{parentName:"p"},".npmignore")," or ",Object(r.b)("inlineCode",{parentName:"p"},".gitignore")," file to prevent publishing to the registry. For more information, see ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"/misc/developers#keeping-files-out-of-your-package"}),"this article"),"."),Object(r.b)("h2",null,"Testing your package"),Object(r.b)("p",null,"To reduce the chances of publishing bugs, we recommend testing your package before publishing it to the npm registry. To test your package, run ",Object(r.b)("inlineCode",{parentName:"p"},"npm install")," with the full path to your package directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"npm install my-package\n")),Object(r.b)("h2",null,"Publishing unscoped public packages"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the command line, navigate to the root directory of your package."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{}),"cd /path/to/package\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"To publish your public package to the npm registry, run:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{}),"npm publish\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"To see your public package page, visit ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://npmjs.com/package/*package-name"}),"https://npmjs.com/package/*package-name"),Object(r.b)("em",{parentName:"p"},", replacing "),"package-name* with the name of your package. Public packages will say ",Object(r.b)("inlineCode",{parentName:"p"},"public")," below the package name on the npm website."))),Object(r.b)("p",null,"For more information on the ",Object(r.b)("inlineCode",{parentName:"p"},"publish")," command, see the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"/cli/publish"}),"CLI documentation"),"."))}m.isMDXComponent=!0},O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),r=a("aOgs"),i=a("q1tI"),c=a.n(i),l=a("7ljp"),p=a("pD55"),s=a("8Aig"),m=a("ReZb"),b=a("GCVy"),u=a("+6vE");var d=function(e){var t=e.children;return c.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return c.a.createElement("strong",null,t)},h=a("gnlW"),f=a("mwnC"),y=a("/Rw0"),j=a("dVM4"),O=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,a=e.depth;return c.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},c.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(k,{items:e.items,depth:a+1}):null)})))}k.defaultProps={depth:0};var N=k,v=a("MfeC");function E(e){var t=v.a.getPath(e.location.pathname),a=v.a.getVariantAndPage(e.root,t);if(!a)return null;var n=v.a.getVariantsForPage(e.root,a.page),r=[],i=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(i=e),r.push(c.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(o.i,{overlay:e.overlay},c.a.createElement(o.i.Button,null,i.variant.title),c.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},r)))}E.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=E,x=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),P=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,i=a.frontmatter,O=i.title,k=i.description,E=i.status,S=i.source,M=i.additionalContributors,R=void 0===M?[]:M,F=v.a.getVariantRoot(n.pathname);return c.a.createElement(l.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:g,Screenshot:h.a}},c.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(p.a,{title:O,description:k}),c.a.createElement(s.b,{location:n}),c.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(o.e,{display:["none",null,null,"block"]},c.a.createElement(f.a,{location:n})),c.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(_,null,c.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(o.e,null,c.a.createElement(o.e,null,c.a.createElement(o.m,{as:"h1"},O),k))),null!=F?c.a.createElement(I,null,c.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:F,location:n})):null),a.tableOfContents.items?c.a.createElement(P,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},c.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(N,{items:a.tableOfContents.items})):null,c.a.createElement(T,null,E||S?c.a.createElement(o.k,{mb:3,alignItems:"center"},E?c.a.createElement(j.a,{status:E}):null,c.a.createElement(o.e,{mx:"auto"}),S?c.a.createElement(y.a,{href:S}):null):null,a.tableOfContents.items?c.a.createElement(o.e,{display:["block",null,"none"],mb:3},c.a.createElement(o.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(o.r,{icon:r.b,mr:2}):c.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),c.a.createElement(o.e,{pt:1},c.a.createElement(N,{items:a.tableOfContents.items})))}))):null,t,c.a.createElement(u.a,{editUrl:a.editUrl,contributors:a.contributors.concat(R.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-packages-and-modules-contributing-packages-to-the-registry-creating-and-publishing-unscoped-public-packages-mdx-6f8671d16b3f15b78798.js.map