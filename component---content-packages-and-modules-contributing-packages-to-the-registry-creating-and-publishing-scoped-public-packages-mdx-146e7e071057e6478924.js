(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),r=a("aOgs"),i=a("q1tI"),c=a.n(i),l=a("7ljp"),p=a("pD55"),m=a("8Aig"),b=a("ReZb"),s=a("GCVy"),u=a("+6vE");var d=function(e){var t=e.children;return c.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return c.a.createElement("strong",null,t)},h=a("gnlW"),f=a("mwnC"),y=a("/Rw0"),j=a("dVM4"),O=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,a=e.depth;return c.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},c.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(k,{items:e.items,depth:a+1}):null)})))}k.defaultProps={depth:0};var N=k,w=a("MfeC");function v(e){var t=w.a.getPath(e.location.pathname),a=w.a.getVariantAndPage(e.root,t);if(!a)return null;var n=w.a.getVariantsForPage(e.root,a.page),r=[],i=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(i=e),r.push(c.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(o.i,{overlay:e.overlay},c.a.createElement(o.i.Button,null,i.variant.title),c.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},r)))}v.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=v,C=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),z=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),P=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,i=a.frontmatter,O=i.title,k=i.description,v=i.status,T=i.source,F=i.additionalContributors,R=void 0===F?[]:F,S=w.a.getVariantRoot(n.pathname);return c.a.createElement(l.a,{components:{Index:b.a,Note:s.a,Prompt:d,PromptReply:g,Screenshot:h.a}},c.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(p.a,{title:O,description:k}),c.a.createElement(m.b,{location:n}),c.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(o.e,{display:["none",null,null,"block"]},c.a.createElement(f.a,{location:n})),c.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(_,null,c.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(o.e,null,c.a.createElement(o.e,null,c.a.createElement(o.m,{as:"h1"},O),k))),null!=S?c.a.createElement(I,null,c.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:S,location:n})):null),a.tableOfContents.items?c.a.createElement(z,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},c.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(N,{items:a.tableOfContents.items})):null,c.a.createElement(P,null,v||T?c.a.createElement(o.k,{mb:3,alignItems:"center"},v?c.a.createElement(j.a,{status:v}):null,c.a.createElement(o.e,{mx:"auto"}),T?c.a.createElement(y.a,{href:T}):null):null,a.tableOfContents.items?c.a.createElement(o.e,{display:["block",null,"none"],mb:3},c.a.createElement(o.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(o.r,{icon:r.b,mr:2}):c.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),c.a.createElement(o.e,{pt:1},c.a.createElement(N,{items:a.tableOfContents.items})))}))):null,t,c.a.createElement(u.a,{editUrl:a.editUrl,contributors:a.contributors.concat(R.map((function(e){return{login:e}})))}))))))}},WXj7:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return u}));var n,o=a("8o2o"),r=a("q1tI"),i=a("7ljp"),c=a("O6H6"),l=a("4LHR"),p={},m=(n="Note",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={_frontmatter:p},s=c.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(s,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To share your code publicly in a user or organization namespace, you can publish public user-scoped or organization-scoped packages to the npm registry."),Object(i.b)("p",null,'For more information on scopes, see "',Object(i.b)("a",{parentName:"p",href:"about-scopes"},"About scopes"),'".'),Object(i.b)(m,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Before you can publish user-scoped npm packages, you must ",Object(i.b)("a",{href:"https://www.npmjs.com/signup"},"sign up")," for an npm user account."),Object(i.b)("p",null,"Additionally, to publish organization-scoped packages, you must ",Object(i.b)("a",{href:"https://www.npmjs.com/signup"},"create an npm user account"),", then ",Object(i.b)("a",{href:"https://www.npmjs.com/signup?next=/org/create"},"create an npm organization"),".")),Object(i.b)("h2",null,"Creating a scoped public package"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you are using npmrc to ",Object(i.b)("a",{parentName:"p",href:"configuring-your-registry-settings-as-an-npm-enterprise-user"},"manage accounts on multiple registries"),", on the command line, switch to the appropriate profile:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"npmrc <profile-name>\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On the command line, create a directory for your package:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"mkdir my-test-package\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to the root directory of your package:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"cd my-test-package\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you are using git to manage your package code, in the package root directory, run the following commands, replacing ",Object(i.b)("inlineCode",{parentName:"p"},"git-remote-url")," with the git remote URL for your package:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"git init\ngit remote add origin git://git-remote-url\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the package root directory, run the ",Object(i.b)("inlineCode",{parentName:"p"},"npm init")," command and pass the scope to the ",Object(i.b)("inlineCode",{parentName:"p"},"scope")," flag:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"For an organization-scoped package, replace ",Object(i.b)("inlineCode",{parentName:"p"},"my-org")," with the name of your organization:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"npm init --scope=@my-org\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"For a user-scoped package, replace ",Object(i.b)("inlineCode",{parentName:"p"},"my-username")," with your username:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"npm init --scope=@my-username\n"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Respond to the prompts to generate a ",Object(i.b)("a",{href:"https://docs.npmjs.com/about-package-json-and-package-lock-json-files"},Object(i.b)("inlineCode",{parentName:"p"},"package.json")),' file. For help naming your package, see "',Object(i.b)("a",{parentName:"p",href:"package-name-guidelines"},"Package name guidelines"),'".')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a ",Object(i.b)("a",{parentName:"p",href:"about-package-readme-files"},"README file")," that explains what your package code is and how to use it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In your preferred text editor, write the code for your package."))),Object(i.b)("h2",null,"Reviewing package contents for sensitive or unnecessary information"),Object(i.b)("p",null,"Publishing sensitive information to the registry can harm your users, compromise your development infrastructure, be expensive to fix, and put you at risk of legal action. ",Object(i.b)("strong",{parentName:"p"},"We strongly recommend removing sensitive information, such as private keys, passwords, ",Object(i.b)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Personally_identifiable_information"},"personally identifiable information")," (PII), and credit card data before publishing your package to the registry.")),Object(i.b)("p",null,"For less sensitive information, such as testing data, use a ",Object(i.b)("inlineCode",{parentName:"p"},".npmignore")," or ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," file to prevent publishing to the registry. For more information, see ",Object(i.b)("a",{parentName:"p",href:"/misc/developers#keeping-files-out-of-your-package"},"this article"),"."),Object(i.b)("h2",null,"Testing your package"),Object(i.b)("p",null,"To reduce the chances of publishing bugs, we recommend testing your package before publishing it to the npm registry. To test your package, run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," with the full path to your package directory:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install my-package\n")),Object(i.b)("h2",null,"Publishing scoped public packages"),Object(i.b)("p",null,"By default, scoped packages are published with private visibility. To publish a scoped package with public visibility, use ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish --access public"),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On the command line, navigate to the root directory of your package."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"cd /path/to/package\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To publish your scoped public package to the npm registry, run:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"npm publish --access public\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To see your public package page, visit ",Object(i.b)("a",{parentName:"p",href:"https://npmjs.com/package/*package-name"},"https://npmjs.com/package/*package-name"),Object(i.b)("em",{parentName:"p"},", replacing "),"package-name* with the name of your package. Public packages will say ",Object(i.b)("inlineCode",{parentName:"p"},"public")," below the package name on the npm website."),Object(i.b)(r.Fragment,null,l.a["organization-package-public"].image))),Object(i.b)("p",null,"For more information on the ",Object(i.b)("inlineCode",{parentName:"p"},"publish")," command, see the ",Object(i.b)("a",{parentName:"p",href:"/cli/publish"},"CLI documentation"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-contributing-packages-to-the-registry-creating-and-publishing-scoped-public-packages-mdx-146e7e071057e6478924.js.map