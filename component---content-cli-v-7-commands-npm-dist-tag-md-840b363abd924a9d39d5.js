(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),s=n("pD55"),p=n("8Aig"),m=n("ReZb"),b=n("GCVy"),d=n("+6vE");var u=function(e){var t=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var N=v,C=n("MfeC");function w(e){var t=C.a.getPath(e.location.pathname),n=C.a.getVariantAndPage(e.root,t);if(!n)return null;var a=C.a.getVariantsForPage(e.root,n.page),l=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),l.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,o.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},l)))}w.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=w,k=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,v=o.description,w=o.status,H=o.source,P=o.additionalContributors,z=void 0===P?[]:P,A=C.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:u,PromptReply:h,Screenshot:g.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:y,description:v}),r.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},y),v))),null!=A?r.a.createElement(I,null,r.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(N,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,w||H?r.a.createElement(i.k,{mb:3,alignItems:"center"},w?r.a.createElement(j.a,{status:w}):null,r.a.createElement(i.e,{mx:"auto"}),H?r.a.createElement(O.a,{href:H}):null):null,n.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.r,{icon:l.b,mr:2}):r.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(N,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},"xHH/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),o={},r={_frontmatter:o},c=l.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm dist-tag add <pkg>@<version> [<tag>]\nnpm dist-tag rm <pkg> <tag>\nnpm dist-tag ls [<pkg>]\n\naliases: dist-tags\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"Add, remove, and enumerate distribution tags on a package:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"add: Tags the specified version of the package with the specified tag, or\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"--tag")," config if not specified. If you have two-factor\nauthentication on auth-and-writes then you’ll need to include a one-time\npassword on the command line with ",Object(i.b)("inlineCode",{parentName:"p"},"--otp <one-time password>"),", or at the\nOTP prompt.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"rm: Clear a tag that is no longer in use from the package. If you have\ntwo-factor authentication on auth-and-writes then you’ll need to include\na one-time password on the command line with ",Object(i.b)("inlineCode",{parentName:"p"},"--otp <one-time password>"),",\nor at the OTP prompt.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"ls: Show all of the dist-tags for a package, defaulting to the package in\nthe current prefix. This is the default action if none is specified."))),Object(i.b)("p",null,"A tag can be used when installing packages as a reference to a version instead\nof using a specific version number:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install <name>@<tag>\n")),Object(i.b)("p",null,"When installing dependencies, a preferred tagged version may be specified:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install --tag <tag>\n")),Object(i.b)("p",null,"(This also applies to any other commands that resolve and install\ndependencies, such as ",Object(i.b)("inlineCode",{parentName:"p"},"npm dedupe"),", ",Object(i.b)("inlineCode",{parentName:"p"},"npm update"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit fix"),".)"),Object(i.b)("p",null,"Publishing a package sets the ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," tag to the published version unless the\n",Object(i.b)("inlineCode",{parentName:"p"},"--tag")," option is used. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish --tag=beta"),"."),Object(i.b)("p",null,"By default, ",Object(i.b)("inlineCode",{parentName:"p"},"npm install <pkg>")," (without any ",Object(i.b)("inlineCode",{parentName:"p"},"@<version>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"@<tag>"),"\nspecifier) installs the ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," tag."),Object(i.b)("h3",null,"Purpose"),Object(i.b)("p",null,"Tags can be used to provide an alias instead of version numbers."),Object(i.b)("p",null,"For example, a project might choose to have multiple streams of development\nand use a different tag for each stream, e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"stable"),", ",Object(i.b)("inlineCode",{parentName:"p"},"beta"),", ",Object(i.b)("inlineCode",{parentName:"p"},"dev"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"canary"),"."),Object(i.b)("p",null,"By default, the ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," tag is used by npm to identify the current version\nof a package, and ",Object(i.b)("inlineCode",{parentName:"p"},"npm install <pkg>")," (without any ",Object(i.b)("inlineCode",{parentName:"p"},"@<version>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"@<tag>"),"\nspecifier) installs the ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," tag. Typically, projects only use the\n",Object(i.b)("inlineCode",{parentName:"p"},"latest")," tag for stable release versions, and use other tags for unstable\nversions such as prereleases."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"next")," tag is used by some projects to identify the upcoming version."),Object(i.b)("p",null,"Other than ",Object(i.b)("inlineCode",{parentName:"p"},"latest"),", no tag has any special significance to npm itself."),Object(i.b)("h3",null,"Caveats"),Object(i.b)("p",null,"This command used to be known as ",Object(i.b)("inlineCode",{parentName:"p"},"npm tag"),", which only created new tags,\nand so had a different syntax."),Object(i.b)("p",null,"Tags must share a namespace with version numbers, because they are\nspecified in the same slot: ",Object(i.b)("inlineCode",{parentName:"p"},"npm install <pkg>@<version>")," vs\n",Object(i.b)("inlineCode",{parentName:"p"},"npm install <pkg>@<tag>"),"."),Object(i.b)("p",null,"Tags that can be interpreted as valid semver ranges will be rejected. For\nexample, ",Object(i.b)("inlineCode",{parentName:"p"},"v1.4")," cannot be used as a tag, because it is interpreted by\nsemver as ",Object(i.b)("inlineCode",{parentName:"p"},">=1.4.0 <1.5.0"),".  See ",Object(i.b)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6082"},"https://github.com/npm/npm/issues/6082"),"."),Object(i.b)("p",null,"The simplest way to avoid semver problems with tags is to use tags that do\nnot begin with a number or the letter ",Object(i.b)("inlineCode",{parentName:"p"},"v"),"."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-publish"},"npm publish")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-install"},"npm install")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-dedupe"},"npm dedupe")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/using-npm/registry"},"npm registry")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-config"},"npm config")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/npmrc"},"npmrc"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-dist-tag-md-840b363abd924a9d39d5.js.map