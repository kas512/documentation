(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{O6H6:function(e,n,t){"use strict";var a=t("vOnD"),l=t("u9kb"),i=t("aOgs"),o=t("q1tI"),r=t.n(o),c=t("7ljp"),b=t("pD55"),s=t("8Aig"),p=t("ReZb"),d=t("GCVy"),m=t("+6vE");var u=function(e){var n=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},n))};var h=function(e){var n=e.children;return r.a.createElement("strong",null,n)},f=t("gnlW"),O=t("mwnC"),j=t("/Rw0"),g=t("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var n=e.items,t=e.depth;return r.a.createElement(y,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:t+1}):null)})))}N.defaultProps={depth:0};var C=N,w=t("MfeC");function x(e){var n=w.a.getPath(e.location.pathname),t=w.a.getVariantAndPage(e.root,n);if(!t)return null;var a=w.a.getVariantsForPage(e.root,t.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},i)))}x.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=x,v=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),E=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),z=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),W=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,o=t.frontmatter,y=o.title,N=o.description,x=o.status,S=o.source,T=o.additionalContributors,P=void 0===T?[]:T,q=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:p.a,Note:d.a,Prompt:u,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(b.a,{title:y,description:N}),r.a.createElement(s.b,{location:a}),r.a.createElement(v,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{location:a})),r.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(E,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=q?r.a.createElement(I,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:q,location:a})):null),t.tableOfContents.items?r.a.createElement(z,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(C,{items:t.tableOfContents.items})):null,r.a.createElement(W,null,x||S?r.a.createElement(l.k,{mb:3,alignItems:"center"},x?r.a.createElement(g.a,{status:x}):null,r.a.createElement(l.e,{mx:"auto"}),S?r.a.createElement(j.a,{href:S}):null):null,t.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(C,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(m.a,{editUrl:t.editUrl,contributors:t.contributors.concat(P.map((function(e){return{login:e}})))}))))))}},Pnys:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return b}));var a=t("8o2o"),l=(t("q1tI"),t("7ljp")),i=t("O6H6"),o={},r={_frontmatter:o},c=i.a;function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"npm puts various things on your computer.  That's its job."),Object(l.b)("p",null,"This document will tell you what it puts where."),Object(l.b)("h4",null,"tl;dr"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Local install (default): puts stuff in ",Object(l.b)("inlineCode",{parentName:"li"},"./node_modules")," of the current\npackage root."),Object(l.b)("li",{parentName:"ul"},"Global install (with ",Object(l.b)("inlineCode",{parentName:"li"},"-g"),"): puts stuff in /usr/local or wherever node\nis installed."),Object(l.b)("li",{parentName:"ul"},"Install it ",Object(l.b)("strong",{parentName:"li"},"locally")," if you're going to ",Object(l.b)("inlineCode",{parentName:"li"},"require()")," it."),Object(l.b)("li",{parentName:"ul"},"Install it ",Object(l.b)("strong",{parentName:"li"},"globally")," if you're going to run it on the command line."),Object(l.b)("li",{parentName:"ul"},"If you need both, then install it in both places, or use ",Object(l.b)("inlineCode",{parentName:"li"},"npm link"),".")),Object(l.b)("h4",null,"prefix Configuration"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"prefix")," config defaults to the location where node is installed.\nOn most systems, this is ",Object(l.b)("inlineCode",{parentName:"p"},"/usr/local"),". On Windows, it's ",Object(l.b)("inlineCode",{parentName:"p"},"%AppData%\\npm"),".\nOn Unix systems, it's one level up, since node is typically installed at\n",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/bin/node")," rather than ",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/node.exe"),"."),Object(l.b)("p",null,"When the ",Object(l.b)("inlineCode",{parentName:"p"},"global")," flag is set, npm installs things into this prefix.\nWhen it is not set, it uses the root of the current package, or the\ncurrent working directory if not in a package already."),Object(l.b)("h4",null,"Node Modules"),Object(l.b)("p",null,"Packages are dropped into the ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder under the ",Object(l.b)("inlineCode",{parentName:"p"},"prefix"),".\nWhen installing locally, this means that you can\n",Object(l.b)("inlineCode",{parentName:"p"},'require("packagename")')," to load its main module, or\n",Object(l.b)("inlineCode",{parentName:"p"},'require("packagename/lib/path/to/sub/module")')," to load other modules."),Object(l.b)("p",null,"Global installs on Unix systems go to ",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/lib/node_modules"),".\nGlobal installs on Windows go to ",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/node_modules")," (that is, no\n",Object(l.b)("inlineCode",{parentName:"p"},"lib")," folder.)"),Object(l.b)("p",null,"Scoped packages are installed the same way, except they are grouped together\nin a sub-folder of the relevant ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder with the name of that\nscope prefix by the @ symbol, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"npm install @myorg/package")," would place\nthe package in ",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/node_modules/@myorg/package"),". See ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"/cli/v7/using-npm/scope"}),Object(l.b)("inlineCode",{parentName:"a"},"scope"))," for more details."),Object(l.b)("p",null,"If you wish to ",Object(l.b)("inlineCode",{parentName:"p"},"require()")," a package, then install it locally."),Object(l.b)("h4",null,"Executables"),Object(l.b)("p",null,"When in global mode, executables are linked into ",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/bin")," on Unix,\nor directly into ",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}")," on Windows."),Object(l.b)("p",null,"When in local mode, executables are linked into\n",Object(l.b)("inlineCode",{parentName:"p"},"./node_modules/.bin")," so that they can be made available to scripts run\nthrough npm.  (For example, so that a test runner will be in the path\nwhen you run ",Object(l.b)("inlineCode",{parentName:"p"},"npm test"),".)"),Object(l.b)("h4",null,"Man Pages"),Object(l.b)("p",null,"When in global mode, man pages are linked into ",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/share/man"),"."),Object(l.b)("p",null,"When in local mode, man pages are not installed."),Object(l.b)("p",null,"Man pages are not installed on Windows systems."),Object(l.b)("h4",null,"Cache"),Object(l.b)("p",null,"See ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"/cli/v7/commands/npm-cache"}),Object(l.b)("inlineCode",{parentName:"a"},"npm cache")),".  Cache files are stored in ",Object(l.b)("inlineCode",{parentName:"p"},"~/.npm")," on Posix, or\n",Object(l.b)("inlineCode",{parentName:"p"},"%AppData%/npm-cache")," on Windows."),Object(l.b)("p",null,"This is controlled by the ",Object(l.b)("inlineCode",{parentName:"p"},"cache")," configuration param."),Object(l.b)("h4",null,"Temp Files"),Object(l.b)("p",null,"Temporary files are stored by default in the folder specified by the\n",Object(l.b)("inlineCode",{parentName:"p"},"tmp")," config, which defaults to the TMPDIR, TMP, or TEMP environment\nvariables, or ",Object(l.b)("inlineCode",{parentName:"p"},"/tmp")," on Unix and ",Object(l.b)("inlineCode",{parentName:"p"},"c:\\windows\\temp")," on Windows."),Object(l.b)("p",null,"Temp files are given a unique folder under this root for each run of the\nprogram, and are deleted upon successful exit."),Object(l.b)("h3",null,"More Information"),Object(l.b)("p",null,"When installing locally, npm first tries to find an appropriate\n",Object(l.b)("inlineCode",{parentName:"p"},"prefix")," folder.  This is so that ",Object(l.b)("inlineCode",{parentName:"p"},"npm install foo@1.2.3")," will install\nto the sensible root of your package, even if you happen to have ",Object(l.b)("inlineCode",{parentName:"p"},"cd"),"ed\ninto some other folder."),Object(l.b)("p",null,"Starting at the $PWD, npm will walk up the folder tree checking for a\nfolder that contains either a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file, or a ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules"),'\nfolder.  If such a thing is found, then that is treated as the effective\n"current directory" for the purpose of running npm commands.  (This\nbehavior is inspired by and similar to git\'s .git-folder seeking\nlogic when running git commands in a working dir.)'),Object(l.b)("p",null,"If no package root is found, then the current folder is used."),Object(l.b)("p",null,"When you run ",Object(l.b)("inlineCode",{parentName:"p"},"npm install foo@1.2.3"),", then the package is loaded into\nthe cache, and then unpacked into ",Object(l.b)("inlineCode",{parentName:"p"},"./node_modules/foo"),".  Then, any of\nfoo's dependencies are similarly unpacked into\n",Object(l.b)("inlineCode",{parentName:"p"},"./node_modules/foo/node_modules/..."),"."),Object(l.b)("p",null,"Any bin files are symlinked to ",Object(l.b)("inlineCode",{parentName:"p"},"./node_modules/.bin/"),", so that they may\nbe found by npm scripts when necessary."),Object(l.b)("h4",null,"Global Installation"),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"global"),' configuration is set to true, then npm will\ninstall packages "globally".'),Object(l.b)("p",null,"For global installation, packages are installed roughly the same way,\nbut using the folders described above."),Object(l.b)("h4",null,"Cycles, Conflicts, and Folder Parsimony"),Object(l.b)("p",null,"Cycles are handled using the property of node's module system that it\nwalks up the directories looking for ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folders.  So, at every\nstage, if a package is already installed in an ancestor ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules"),"\nfolder, then it is not installed at the current location."),Object(l.b)("p",null,"Consider the case above, where ",Object(l.b)("inlineCode",{parentName:"p"},"foo -> bar -> baz"),".  Imagine if, in\naddition to that, baz depended on bar, so you'd have:\n",Object(l.b)("inlineCode",{parentName:"p"},"foo -> bar -> baz -> bar -> baz ..."),".  However, since the folder\nstructure is: ",Object(l.b)("inlineCode",{parentName:"p"},"foo/node_modules/bar/node_modules/baz"),", there's no need to\nput another copy of bar into ",Object(l.b)("inlineCode",{parentName:"p"},".../baz/node_modules"),', since when it calls\nrequire("bar"), it will get the copy that is installed in\n',Object(l.b)("inlineCode",{parentName:"p"},"foo/node_modules/bar"),"."),Object(l.b)("p",null,"This shortcut is only used if the exact same\nversion would be installed in multiple nested ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folders.  It\nis still possible to have ",Object(l.b)("inlineCode",{parentName:"p"},"a/node_modules/b/node_modules/a"),' if the two\n"a" packages are different versions.  However, without repeating the\nexact same package multiple times, an infinite regress will always be\nprevented.'),Object(l.b)("p",null,'Another optimization can be made by installing dependencies at the\nhighest level possible, below the localized "target" folder.'),Object(l.b)("h4",null,"Example"),Object(l.b)("p",null,"Consider this dependency graph:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"foo\n+-- blerg@1.2.5\n+-- bar@1.2.3\n|   +-- blerg@1.x (latest=1.3.7)\n|   +-- baz@2.x\n|   |   `-- quux@3.x\n|   |       `-- bar@1.2.3 (cycle)\n|   `-- asdf@*\n`-- baz@1.2.3\n    `-- quux@3.x\n        `-- bar\n")),Object(l.b)("p",null,"In this case, we might expect a folder structure like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"foo\n+-- node_modules\n    +-- blerg (1.2.5) <---[A]\n    +-- bar (1.2.3) <---[B]\n    |   `-- node_modules\n    |       +-- baz (2.0.2) <---[C]\n    |       |   `-- node_modules\n    |       |       `-- quux (3.2.0)\n    |       `-- asdf (2.3.4)\n    `-- baz (1.2.3) <---[D]\n        `-- node_modules\n            `-- quux (3.2.0) <---[E]\n")),Object(l.b)("p",null,"Since foo depends directly on ",Object(l.b)("inlineCode",{parentName:"p"},"bar@1.2.3")," and ",Object(l.b)("inlineCode",{parentName:"p"},"baz@1.2.3"),", those are\ninstalled in foo's ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder."),Object(l.b)("p",null,"Even though the latest copy of blerg is 1.3.7, foo has a specific\ndependency on version 1.2.5.  So, that gets installed at ","[A]",".  Since the\nparent installation of blerg satisfies bar's dependency on ",Object(l.b)("inlineCode",{parentName:"p"},"blerg@1.x"),",\nit does not install another copy under ","[B]","."),Object(l.b)("p",null,"Bar ","[B]"," also has dependencies on baz and asdf, so those are installed in\nbar's ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder.  Because it depends on ",Object(l.b)("inlineCode",{parentName:"p"},"baz@2.x"),", it cannot\nre-use the ",Object(l.b)("inlineCode",{parentName:"p"},"baz@1.2.3")," installed in the parent ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder ","[D]",",\nand must install its own copy ","[C]","."),Object(l.b)("p",null,"Underneath bar, the ",Object(l.b)("inlineCode",{parentName:"p"},"baz -> quux -> bar")," dependency creates a cycle.\nHowever, because bar is already in quux's ancestry ","[B]",", it does not\nunpack another copy of bar into that folder."),Object(l.b)("p",null,"Underneath ",Object(l.b)("inlineCode",{parentName:"p"},"foo -> baz")," ","[D]",", quux's ","[E]"," folder tree is empty, because its\ndependency on bar is satisfied by the parent folder copy installed at ","[B]","."),Object(l.b)("p",null,"For a graphical breakdown of what is installed where, use ",Object(l.b)("inlineCode",{parentName:"p"},"npm ls"),"."),Object(l.b)("h4",null,"Publishing"),Object(l.b)("p",null,"Upon publishing, npm will look in the ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder.  If any of\nthe items there are not in the ",Object(l.b)("inlineCode",{parentName:"p"},"bundledDependencies")," array, then they will\nnot be included in the package tarball."),Object(l.b)("p",null,"This allows a package maintainer to install all of their dependencies\n(and dev dependencies) locally, but only re-publish those items that\ncannot be found elsewhere.  See ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"/cli/v7/configuring-npm/package.json"}),Object(l.b)("inlineCode",{parentName:"a"},"package.json"))," for more information."),Object(l.b)("h3",null,"See also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/package-json"}),"package.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-install"}),"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-pack"}),"npm pack")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-cache"}),"npm cache")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-config"}),"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/npmrc"}),"npmrc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/using-npm/config"}),"config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-publish"}),"npm publish"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-configuring-npm-folders-md-0c9036033a92eaff90b8.js.map