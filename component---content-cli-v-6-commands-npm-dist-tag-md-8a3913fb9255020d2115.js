(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),s=n("pD55"),p=n("8Aig"),m=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=n("gnlW"),f=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var N=v,C=n("MfeC");function E(e){var t=C.a.getPath(e.location.pathname),n=C.a.getVariantAndPage(e.root,t);if(!n)return null;var a=C.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},i)))}E.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=E,k=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,v=o.description,E=o.status,A=o.source,P=o.additionalContributors,B=void 0===P?[]:P,W=C.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:g,Screenshot:h.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:y,description:v}),r.a.createElement(p.b,{location:a}),r.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),v))),null!=W?r.a.createElement(I,null,r.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(N,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,E||A?r.a.createElement(l.k,{mb:3,alignItems:"center"},E?r.a.createElement(j.a,{status:E}):null,r.a.createElement(l.e,{mx:"auto"}),A?r.a.createElement(O.a,{href:A}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(N,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(B.map((function(e){return{login:e}})))}))))))}},jQPA:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n("8o2o"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm dist-tag add <pkg>@<version> [<tag>]\nnpm dist-tag rm <pkg> <tag>\nnpm dist-tag ls [<pkg>]\n\naliases: dist-tags\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Add, remove, and enumerate distribution tags on a package:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"add:\nTags the specified version of the package with the specified tag, or the\n",Object(l.b)("inlineCode",{parentName:"p"},"--tag")," config if not specified. If you have two-factor authentication on\nauth-and-writes then you’ll need to include a one-time password on the\ncommand line with ",Object(l.b)("inlineCode",{parentName:"p"},"--otp <one-time password>"),".")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"rm:\nClear a tag that is no longer in use from the package.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ls:\nShow all of the dist-tags for a package, defaulting to the package in\nthe current prefix. This is the default action if none is specified."))),Object(l.b)("p",null,"A tag can be used when installing packages as a reference to a version instead\nof using a specific version number:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm install <name>@<tag>\n")),Object(l.b)("p",null,"When installing dependencies, a preferred tagged version may be specified:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm install --tag <tag>\n")),Object(l.b)("p",null,"This also applies to ",Object(l.b)("inlineCode",{parentName:"p"},"npm dedupe"),"."),Object(l.b)("p",null,"Publishing a package sets the ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," tag to the published version unless the\n",Object(l.b)("inlineCode",{parentName:"p"},"--tag")," option is used. For example, ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish --tag=beta"),"."),Object(l.b)("p",null,"By default, ",Object(l.b)("inlineCode",{parentName:"p"},"npm install <pkg>")," (without any ",Object(l.b)("inlineCode",{parentName:"p"},"@<version>")," or ",Object(l.b)("inlineCode",{parentName:"p"},"@<tag>"),"\nspecifier) installs the ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(l.b)("h3",null,"Purpose"),Object(l.b)("p",null,"Tags can be used to provide an alias instead of version numbers."),Object(l.b)("p",null,"For example, a project might choose to have multiple streams of development\nand use a different tag for each stream,\ne.g., ",Object(l.b)("inlineCode",{parentName:"p"},"stable"),", ",Object(l.b)("inlineCode",{parentName:"p"},"beta"),", ",Object(l.b)("inlineCode",{parentName:"p"},"dev"),", ",Object(l.b)("inlineCode",{parentName:"p"},"canary"),"."),Object(l.b)("p",null,"By default, the ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," tag is used by npm to identify the current version of\na package, and ",Object(l.b)("inlineCode",{parentName:"p"},"npm install <pkg>")," (without any ",Object(l.b)("inlineCode",{parentName:"p"},"@<version>")," or ",Object(l.b)("inlineCode",{parentName:"p"},"@<tag>"),"\nspecifier) installs the ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," tag. Typically, projects only use the ",Object(l.b)("inlineCode",{parentName:"p"},"latest"),"\ntag for stable release versions, and use other tags for unstable versions such\nas prereleases."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"next")," tag is used by some projects to identify the upcoming version."),Object(l.b)("p",null,"By default, other than ",Object(l.b)("inlineCode",{parentName:"p"},"latest"),", no tag has any special significance to npm\nitself."),Object(l.b)("h3",null,"Caveats"),Object(l.b)("p",null,"This command used to be known as ",Object(l.b)("inlineCode",{parentName:"p"},"npm tag"),", which only created new tags, and so\nhad a different syntax."),Object(l.b)("p",null,"Tags must share a namespace with version numbers, because they are specified in\nthe same slot: ",Object(l.b)("inlineCode",{parentName:"p"},"npm install <pkg>@<version>")," vs ",Object(l.b)("inlineCode",{parentName:"p"},"npm install <pkg>@<tag>"),"."),Object(l.b)("p",null,"Tags that can be interpreted as valid semver ranges will be rejected. For\nexample, ",Object(l.b)("inlineCode",{parentName:"p"},"v1.4")," cannot be used as a tag, because it is interpreted by semver as\n",Object(l.b)("inlineCode",{parentName:"p"},">=1.4.0 <1.5.0"),".  See ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/npm/npm/issues/6082"}),"https://github.com/npm/npm/issues/6082"),"."),Object(l.b)("p",null,"The simplest way to avoid semver problems with tags is to use tags that do not\nbegin with a number or the letter ",Object(l.b)("inlineCode",{parentName:"p"},"v"),"."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-publish"}),"npm publish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-install"}),"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-dedupe"}),"npm dedupe")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/using-npm/registry"}),"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-config"}),"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/configuring-npm/npmrc"}),"npmrc"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-dist-tag-md-8a3913fb9255020d2115.js.map