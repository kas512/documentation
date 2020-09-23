(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"/wEy":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return s}));var a=t("zLVn"),i=(t("q1tI"),t("7ljp")),l=t("O6H6"),o={},r={_frontmatter:o},c=l.a;function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,'Conceptually, the "input" to ',Object(i.b)("a",{parentName:"p",href:"/cli/v6/commands/npm-install"},Object(i.b)("inlineCode",{parentName:"a"},"npm install"))," is a ",Object(i.b)("a",{parentName:"p",href:"/cli/v6/configuring-npm/package-json"},"package.json"),', while its\n"output" is a fully-formed ',Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," tree: a representation of the\ndependencies you declared. In an ideal world, npm would work like a pure\nfunction: the same ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," should produce the exact same ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),"\ntree, any time. In some cases, this is indeed true. But in many others, npm is\nunable to do this. There are multiple reasons for this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"different versions of npm (or other package managers) may have been used to install a package, each using slightly different installation algorithms.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"a new version of a direct semver-range package may have been published since the last time your packages were installed, and thus a newer version will be used.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A dependency of one of your dependencies may have published a new version, which will update even if you used pinned dependency specifiers (",Object(i.b)("inlineCode",{parentName:"p"},"1.2.3")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"^1.2.3"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The registry you installed from is no longer available, or allows mutation of versions (unlike the primary npm registry), and a different version of a package exists under the same version number now."))),Object(i.b)("p",null,"As an example, consider package A:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "A",\n  "version": "0.1.0",\n  "dependencies": {\n    "B": "<0.1.0"\n  }\n}\n')),Object(i.b)("p",null,"package B:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "B",\n  "version": "0.0.1",\n  "dependencies": {\n    "C": "<0.1.0"\n  }\n}\n')),Object(i.b)("p",null,"and package C:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "C",\n  "version": "0.0.1"\n}\n')),Object(i.b)("p",null,"If these are the only versions of A, B, and C available in the\nregistry, then a normal ",Object(i.b)("inlineCode",{parentName:"p"},"npm install A")," will install:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},"A@0.1.0\n`-- B@0.0.1\n    `-- C@0.0.1\n")),Object(i.b)("p",null,"However, if ",Object(i.b)("a",{parentName:"p",href:"mailto:B@0.0.2"},"B@0.0.2")," is published, then a fresh ",Object(i.b)("inlineCode",{parentName:"p"},"npm install A")," will\ninstall:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"A@0.1.0\n`-- B@0.0.2\n    `-- C@0.0.1\n")),Object(i.b)("p",null,"assuming the new version did not modify B's dependencies. Of course,\nthe new version of B could include a new version of C and any number\nof new dependencies. If such changes are undesirable, the author of A\ncould specify a dependency on ",Object(i.b)("a",{parentName:"p",href:"mailto:B@0.0.1."},"B@0.0.1.")," However, if A's author and B's\nauthor are not the same person, there's no way for A's author to say\nthat he or she does not want to pull in newly published versions of C\nwhen B hasn't changed at all."),Object(i.b)("p",null,"To prevent this potential issue, npm uses ",Object(i.b)("a",{parentName:"p",href:"/cli/v6/configuring-npm/package-lock-json"},"package-lock.json")," or, if present, ",Object(i.b)("a",{parentName:"p",href:"/cli/v6/configuring-npm/shrinkwrap-json"},"npm-shrinkwrap.json"),". These files are called package locks, or lockfiles."),Object(i.b)("p",null,"Whenever you run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),", npm generates or updates your package lock,\nwhich will look something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "A",\n  "version": "0.1.0",\n  ...metadata fields...\n  "dependencies": {\n    "B": {\n      "version": "0.0.1",\n      "resolved": "https://registry.npmjs.org/B/-/B-0.0.1.tgz",\n      "integrity": "sha512-DeAdb33F+"\n      "dependencies": {\n        "C": {\n          "version": "git://github.com/org/C.git#5c380ae319fc4efe9e7f2d9c78b0faa588fd99b4"\n        }\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"This file describes an ",Object(i.b)("em",{parentName:"p"},"exact"),", and more importantly ",Object(i.b)("em",{parentName:"p"},"reproducible"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," tree. Once it's present, any future installation will base its\nwork off this file, instead of recalculating dependency versions off\n",Object(i.b)("a",{parentName:"p",href:"/cli/v6/configuring-npm/package-json"},"package.json"),"."),Object(i.b)("p",null,"The presence of a package lock changes the installation behavior such that:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'The module tree described by the package lock is reproduced. This means\nreproducing the structure described in the file, using the specific files\nreferenced in "resolved" if available, falling back to normal package resolution\nusing "version" if one isn\'t.')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The tree is walked and any missing dependencies are installed in the usual\nfashion."))),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"preshrinkwrap"),", ",Object(i.b)("inlineCode",{parentName:"p"},"shrinkwrap")," or ",Object(i.b)("inlineCode",{parentName:"p"},"postshrinkwrap")," are in the ",Object(i.b)("inlineCode",{parentName:"p"},"scripts"),"\nproperty of the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),", they will be executed in order. ",Object(i.b)("inlineCode",{parentName:"p"},"preshrinkwrap"),"\nand ",Object(i.b)("inlineCode",{parentName:"p"},"shrinkwrap")," are executed before the shrinkwrap, ",Object(i.b)("inlineCode",{parentName:"p"},"postshrinkwrap")," is\nexecuted afterwards. These scripts run for both ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json"),". For example to run some postprocessing on the generated\nfile:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'  "scripts": {\n    "postshrinkwrap": "json -I -e \\"this.myMetadata = $MY_APP_METADATA\\""\n  }\n')),Object(i.b)("h4",null,"Using locked packages"),Object(i.b)("p",null,"Using a locked package is no different than using any package without a package\nlock: any commands that update ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," and/or ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"'s\ndependencies will automatically sync the existing lockfile. This includes ",Object(i.b)("inlineCode",{parentName:"p"},"npm\ninstall"),", ",Object(i.b)("inlineCode",{parentName:"p"},"npm rm"),", ",Object(i.b)("inlineCode",{parentName:"p"},"npm update"),", etc. To prevent this update from happening,\nyou can use the ",Object(i.b)("inlineCode",{parentName:"p"},"--no-save")," option to prevent saving altogether, or\n",Object(i.b)("inlineCode",{parentName:"p"},"--no-shrinkwrap")," to allow ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," to be updated while leaving\n",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," or ",Object(i.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," intact."),Object(i.b)("p",null,"It is highly recommended you commit the generated package lock to source\ncontrol: this will allow anyone else on your team, your deployments, your\nCI/continuous integration, and anyone else who runs ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," in your\npackage source to get the exact same dependency tree that you were developing\non. Additionally, the diffs from these changes are human-readable and will\ninform you of any changes npm has made to your ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),", so you can notice\nif any transitive dependencies were updated, hoisted, etc."),Object(i.b)("h4",null,"Resolving lockfile conflicts"),Object(i.b)("p",null,"Occasionally, two separate npm install will create package locks that cause\nmerge conflicts in source control systems. As of ",Object(i.b)("inlineCode",{parentName:"p"},"npm@5.7.0"),", these conflicts\ncan be resolved by manually fixing any ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," conflicts, and then\nrunning ",Object(i.b)("inlineCode",{parentName:"p"},"npm install [--package-lock-only]")," again. npm will automatically\nresolve any conflicts for you and write a merged package lock that includes all\nthe dependencies from both branches in a reasonable tree. If\n",Object(i.b)("inlineCode",{parentName:"p"},"--package-lock-only")," is provided, it will do this without also modifying your\nlocal ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/"),"."),Object(i.b)("p",null,"To make this process seamless on git, consider installing\n",Object(i.b)("a",{parentName:"p",href:"https://npm.im/npm-merge-driver"},Object(i.b)("inlineCode",{parentName:"a"},"npm-merge-driver")),", which will teach git how\nto do this itself without any user interaction. In short: ",Object(i.b)("inlineCode",{parentName:"p"},"$ npx\nnpm-merge-driver install -g")," will let you do this, and even works with\npre-",Object(i.b)("inlineCode",{parentName:"p"},"npm@5.7.0")," versions of npm 5, albeit a bit more noisily. Note that if\n",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," itself conflicts, you will have to resolve that by hand and run\n",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," manually, even with the merge driver."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://medium.com/@sdboyer/so-you-want-to-write-a-package-manager-4ae9c17d9527"},"https://medium.com/@sdboyer/so-you-want-to-write-a-package-manager-4ae9c17d9527")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/configuring-npm/package-json"},"package.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/configuring-npm/package-lock-json"},"package-lock.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/configuring-npm/shrinkwrap-json"},"shrinkwrap.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-shrinkwrap"},"npm shrinkwrap"))))}s.isMDXComponent=!0},O6H6:function(e,n,t){"use strict";var a=t("vOnD"),i=t("u9kb"),l=t("aOgs"),o=t("q1tI"),r=t.n(o),c=t("7ljp"),s=t("pD55"),p=t("8Aig"),m=t("ReZb"),b=t("GCVy"),d=t("+6vE");var u=function(e){var n=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},n))};var h=function(e){var n=e.children;return r.a.createElement("strong",null,n)},g=t("gnlW"),f=t("mwnC"),j=t("/Rw0"),O=t("dVM4"),y=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var n=e.items,t=e.depth;return r.a.createElement(y,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:t+1}):null)})))}k.defaultProps={depth:0};var w=k,N=t("MfeC");function v(e){var n=N.a.getPath(e.location.pathname),t=N.a.getVariantAndPage(e.root,n);if(!t)return null;var a=N.a.getVariantsForPage(e.root,t.page),l=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(o=e),l.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,o.variant.title),r.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},l)))}v.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=v,E=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),A=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),B=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,o=t.frontmatter,y=o.title,k=o.description,v=o.status,T=o.source,S=o.additionalContributors,H=void 0===S?[]:S,M=N.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:u,PromptReply:h,Screenshot:g.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:y,description:k}),r.a.createElement(p.b,{location:a,isSearchEnabled:t.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:t.themeOptions.editOnGitHub,pathPrefix:t.themeOptions.pathPrefix,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},y),k))),null!=M?r.a.createElement(A,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:a})):null),t.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:t.tableOfContents.items})):null,r.a.createElement(B,null,v||T?r.a.createElement(i.k,{mb:3,alignItems:"center"},v?r.a.createElement(O.a,{status:v}):null,r.a.createElement(i.e,{mx:"auto"}),T?r.a.createElement(j.a,{href:T}):null):null,t.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(i.r,{icon:l.b,mr:2}):r.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(w,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(d.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(H.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-6-configuring-npm-package-locks-md-eb62bd293f0e5014f7d6.js.map