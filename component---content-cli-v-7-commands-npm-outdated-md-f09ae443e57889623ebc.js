(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),s=n("pD55"),b=n("8Aig"),m=n("ReZb"),p=n("GCVy"),d=n("+6vE");var u=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),j=n("mwnC"),O=n("/Rw0"),f=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var w=N,C=n("MfeC");function k(e){var t=C.a.getPath(e.location.pathname),n=C.a.getVariantAndPage(e.root,t);if(!n)return null;var a=C.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},i)))}k.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=k,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,k=o.status,T=o.source,B=o.additionalContributors,A=void 0===B?[]:B,W=C.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:p.a,Prompt:u,PromptReply:h,Screenshot:g.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:y,description:N}),r.a.createElement(b.b,{location:a}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(j.a,{location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=W?r.a.createElement(S,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(D,null,k||T?r.a.createElement(l.k,{mb:3,alignItems:"center"},k?r.a.createElement(f.a,{status:k}):null,r.a.createElement(l.e,{mx:"auto"}),T?r.a.createElement(O.a,{href:T}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(A.map((function(e){return{login:e}})))}))))))}},u6lv:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm outdated [[<@scope>/]<pkg> ...]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command will check the registry to see if any (or, specific) installed\npackages are currently outdated."),Object(l.b)("p",null,"In the output:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"wanted")," is the maximum version of the package that satisfies the semver\nrange specified in ",Object(l.b)("inlineCode",{parentName:"li"},"package.json"),". If there's no available semver range (i.e.\nyou're running ",Object(l.b)("inlineCode",{parentName:"li"},"npm outdated --global"),", or the package isn't included in\n",Object(l.b)("inlineCode",{parentName:"li"},"package.json"),"), then ",Object(l.b)("inlineCode",{parentName:"li"},"wanted")," shows the currently-installed version."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"latest")," is the version of the package tagged as latest in the registry.\nRunning ",Object(l.b)("inlineCode",{parentName:"li"},"npm publish")," with no special configuration will publish the package\nwith a dist-tag of ",Object(l.b)("inlineCode",{parentName:"li"},"latest"),". This may or may not be the maximum version of\nthe package, or the most-recently published version of the package, depending\non how the package's developer manages the latest ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"npm-dist-tag"}),"dist-tag"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"location")," is where in the physical tree the package is located."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"depended by")," shows which package depends on the displayed dependency"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"package type")," (when using ",Object(l.b)("inlineCode",{parentName:"li"},"--long")," / ",Object(l.b)("inlineCode",{parentName:"li"},"-l"),") tells you whether this package is\na ",Object(l.b)("inlineCode",{parentName:"li"},"dependency")," or a dev/peer/optional dependency. Packages not included in ",Object(l.b)("inlineCode",{parentName:"li"},"package.json"),"\nare always marked ",Object(l.b)("inlineCode",{parentName:"li"},"dependencies"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"homepage")," (when using ",Object(l.b)("inlineCode",{parentName:"li"},"--long")," / ",Object(l.b)("inlineCode",{parentName:"li"},"-l"),") is the ",Object(l.b)("inlineCode",{parentName:"li"},"homepage")," value contained in the package's packument"),Object(l.b)("li",{parentName:"ul"},"Red means there's a newer version matching your semver requirements, so you should update now."),Object(l.b)("li",{parentName:"ul"},"Yellow indicates that there's a newer version above your semver requirements (usually new major, or new 0.x minor) so proceed with caution.")),Object(l.b)("h3",null,"An example"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ npm outdated\nPackage      Current   Wanted   Latest  Location                  Depended by\nglob          5.0.15   5.0.15    6.0.1  node_modules/glob         dependent-package-name\nnothingness    0.0.3      git      git  node_modules/nothingness  dependent-package-name\nnpm            3.5.1    3.5.2    3.5.1  node_modules/npm          dependent-package-name\nlocal-dev      0.0.3   linked   linked  local-dev                 dependent-package-name\nonce           1.3.2    1.3.3    1.3.3  node_modules/once         dependent-package-name\n")),Object(l.b)("p",null,"With these ",Object(l.b)("inlineCode",{parentName:"p"},"dependencies"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "glob": "^5.0.15",\n  "nothingness": "github:othiym23/nothingness#master",\n  "npm": "^3.5.1",\n  "once": "^1.3.1"\n}\n')),Object(l.b)("p",null,"A few things to note:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"glob")," requires ",Object(l.b)("inlineCode",{parentName:"li"},"^5"),", which prevents npm from installing ",Object(l.b)("inlineCode",{parentName:"li"},"glob@6"),", which is\noutside the semver range."),Object(l.b)("li",{parentName:"ul"},"Git dependencies will always be reinstalled, because of how they're specified.\nThe installed committish might satisfy the dependency specifier (if it's\nsomething immutable, like a commit SHA), or it might not, so ",Object(l.b)("inlineCode",{parentName:"li"},"npm outdated")," and\n",Object(l.b)("inlineCode",{parentName:"li"},"npm update")," have to fetch Git repos to check. This is why currently doing a\nreinstall of a Git dependency always forces a new clone and install."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm@3.5.2"),' is marked as "wanted", but "latest" is ',Object(l.b)("inlineCode",{parentName:"li"},"npm@3.5.1")," because npm\nuses dist-tags to manage its ",Object(l.b)("inlineCode",{parentName:"li"},"latest")," and ",Object(l.b)("inlineCode",{parentName:"li"},"next")," release channels. ",Object(l.b)("inlineCode",{parentName:"li"},"npm update"),"\nwill install the ",Object(l.b)("em",{parentName:"li"},"newest")," version, but ",Object(l.b)("inlineCode",{parentName:"li"},"npm install npm")," (with no semver range)\nwill install whatever's tagged as ",Object(l.b)("inlineCode",{parentName:"li"},"latest"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"once")," is just plain out of date. Reinstalling ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," from scratch or\nrunning ",Object(l.b)("inlineCode",{parentName:"li"},"npm update")," will bring it up to spec.")),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,"json"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Show information in JSON format."),Object(l.b)("h4",null,"long"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Show extended information."),Object(l.b)("h4",null,"parseable"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Show parseable output instead of tree view."),Object(l.b)("h4",null,"global"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Check packages in the global install prefix instead of in the current\nproject."),Object(l.b)("h4",null,"all"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Display all outdated dependencies on the tree."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-update"}),"npm update")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-dist-tag"}),"npm dist-tag")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/using-npm/registry"}),"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/folders"}),"npm folders"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-outdated-md-f09ae443e57889623ebc.js.map