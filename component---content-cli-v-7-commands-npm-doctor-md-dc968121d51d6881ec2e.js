(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),o=n("aOgs"),l=n("q1tI"),r=n.n(l),s=n("7ljp"),c=n("pD55"),m=n("8Aig"),p=n("ReZb"),u=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},y=n("gnlW"),g=n("mwnC"),f=n("/Rw0"),j=n("dVM4"),O=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return r.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var w=v,N=n("MfeC");function k(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var a=N.a.getVariantsForPage(e.root,n.page),o=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),o.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,l.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},o)))}k.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=k,E=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,O=l.title,v=l.description,k=l.status,A=l.source,W=l.additionalContributors,M=void 0===W?[]:W,P=N.a.getVariantRoot(a.pathname);return r.a.createElement(s.a,{components:{Index:p.a,Note:u.a,Prompt:d,PromptReply:h,Screenshot:y.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:O,description:v}),r.a.createElement(m.b,{location:a}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},O),v))),null!=P?r.a.createElement(T,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(S,null,k||A?r.a.createElement(i.k,{mb:3,alignItems:"center"},k?r.a.createElement(j.a,{status:k}):null,r.a.createElement(i.e,{mx:"auto"}),A?r.a.createElement(f.a,{href:A}):null):null,n.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.r,{icon:o.b,mr:2}):r.a.createElement(i.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(b.a,{editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},esFY:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("O6H6"),l={},r={_frontmatter:l},s=o.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(s,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm doctor\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm doctor")," runs a set of checks to ensure that your npm installation has\nwhat it needs to manage your JavaScript packages. npm is mostly a\nstandalone tool, but it does have some basic requirements that must be met:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Node.js and git must be executable by npm."),Object(i.b)("li",{parentName:"ul"},"The primary npm registry, ",Object(i.b)("inlineCode",{parentName:"li"},"registry.npmjs.com"),", or another service that\nuses the registry API, is available."),Object(i.b)("li",{parentName:"ul"},"The directories that npm uses, ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," (both locally and\nglobally), exist and can be written by the current user."),Object(i.b)("li",{parentName:"ul"},"The npm cache exists, and the package tarballs within it aren't corrupt.")),Object(i.b)("p",null,"Without all of these working properly, npm may not work properly.  Many\nissues are often attributable to things that are outside npm's code base,\nso ",Object(i.b)("inlineCode",{parentName:"p"},"npm doctor")," confirms that the npm installation is in a good state."),Object(i.b)("p",null,"Also, in addition to this, there are also very many issue reports due to\nusing old versions of npm. Since npm is constantly improving, running\n",Object(i.b)("inlineCode",{parentName:"p"},"npm@latest")," is better than an old version."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm doctor")," verifies the following items in your environment, and if there\nare any recommended changes, it will display them."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"npm ping")),Object(i.b)("p",null,"By default, npm installs from the primary npm registry,\n",Object(i.b)("inlineCode",{parentName:"p"},"registry.npmjs.org"),".  ",Object(i.b)("inlineCode",{parentName:"p"},"npm doctor")," hits a special ping endpoint within the\nregistry. This can also be checked with ",Object(i.b)("inlineCode",{parentName:"p"},"npm ping"),". If this check fails,\nyou may be using a proxy that needs to be configured, or may need to talk\nto your IT staff to get access over HTTPS to ",Object(i.b)("inlineCode",{parentName:"p"},"registry.npmjs.org"),"."),Object(i.b)("p",null,"This check is done against whichever registry you've configured (you can\nsee what that is by running ",Object(i.b)("inlineCode",{parentName:"p"},"npm config get registry"),"), and if you're using\na private registry that doesn't support the ",Object(i.b)("inlineCode",{parentName:"p"},"/whoami")," endpoint supported by\nthe primary registry, this check may fail."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"npm -v")),Object(i.b)("p",null,"While Node.js may come bundled with a particular version of npm, it's the\npolicy of the CLI team that we recommend all users run ",Object(i.b)("inlineCode",{parentName:"p"},"npm@latest")," if they\ncan. As the CLI is maintained by a small team of contributors, there are\nonly resources for a single line of development, so npm's own long-term\nsupport releases typically only receive critical security and regression\nfixes. The team believes that the latest tested version of npm is almost\nalways likely to be the most functional and defect-free version of npm."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"node -v")),Object(i.b)("p",null,"For most users, in most circumstances, the best version of Node will be the\nlatest long-term support (LTS) release. Those of you who want access to new\nECMAscript features or bleeding-edge changes to Node's standard library may\nbe running a newer version, and some may be required to run an older\nversion of Node because of enterprise change control policies. That's OK!\nBut in general, the npm team recommends that most users run Node.js LTS."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"npm config get registry")),Object(i.b)("p",null,"You may be installing from private package registries for your project or\ncompany. That's great! Others may be following tutorials or StackOverflow\nquestions in an effort to troubleshoot problems you may be having.\nSometimes, this may entail changing the registry you're pointing at.  This\npart of ",Object(i.b)("inlineCode",{parentName:"p"},"npm doctor")," just lets you, and maybe whoever's helping you with\nsupport, know that you're not using the default registry."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"which git")),Object(i.b)("p",null,"While it's documented in the README, it may not be obvious that npm needs\nGit installed to do many of the things that it does. Also, in some cases\n– especially on Windows – you may have Git set up in such a way that it's\nnot accessible via your ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," so that npm can find it. This check ensures\nthat Git is available."),Object(i.b)("h4",null,"Permissions checks"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your cache must be readable and writable by the user running npm."),Object(i.b)("li",{parentName:"ul"},"Global package binaries must be writable by the user running npm."),Object(i.b)("li",{parentName:"ul"},"Your local ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," path, if you're running ",Object(i.b)("inlineCode",{parentName:"li"},"npm doctor")," with a\nproject directory, must be readable and writable by the user running npm.")),Object(i.b)("h4",null,"Validate the checksums of cached packages"),Object(i.b)("p",null,"When an npm package is published, the publishing process generates a\nchecksum that npm uses at install time to verify that the package didn't\nget corrupted in transit. ",Object(i.b)("inlineCode",{parentName:"p"},"npm doctor")," uses these checksums to validate the\npackage tarballs in your local cache (you can see where that cache is\nlocated with ",Object(i.b)("inlineCode",{parentName:"p"},"npm config get cache"),"). In the event that there are corrupt\npackages in your cache, you should probably run ",Object(i.b)("inlineCode",{parentName:"p"},"npm cache clean -f")," and\nreset the cache."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-bugs"}),"npm bugs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-help"}),"npm help")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-ping"}),"npm ping"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-doctor-md-dc968121d51d6881ec2e.js.map