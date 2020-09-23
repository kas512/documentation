(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{IbUO:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("8o2o"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),o={},r={_frontmatter:o},c=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]\n\n'npm [-v | --version]' to print npm version\n'npm view <pkg> version' to view a package's published version\n'npm ls' to inspect current package/dependency versions\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"Run this in a package directory to bump the version and write the new\ndata back to ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),", ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json"),", and, if present, ",Object(i.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json"),"."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"newversion")," argument should be a valid semver string, a\nvalid second argument to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/npm/node-semver#functions"},"semver.inc")," (one of ",Object(i.b)("inlineCode",{parentName:"p"},"patch"),", ",Object(i.b)("inlineCode",{parentName:"p"},"minor"),", ",Object(i.b)("inlineCode",{parentName:"p"},"major"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"prepatch"),", ",Object(i.b)("inlineCode",{parentName:"p"},"preminor"),", ",Object(i.b)("inlineCode",{parentName:"p"},"premajor"),", ",Object(i.b)("inlineCode",{parentName:"p"},"prerelease"),"), or ",Object(i.b)("inlineCode",{parentName:"p"},"from-git"),". In the second case,\nthe existing version will be incremented by 1 in the specified field.\n",Object(i.b)("inlineCode",{parentName:"p"},"from-git")," will try to read the latest git tag, and use that as the new npm version."),Object(i.b)("p",null,"If run in a git repo, it will also create a version commit and tag.\nThis behavior is controlled by ",Object(i.b)("inlineCode",{parentName:"p"},"git-tag-version")," (see below), and can\nbe disabled on the command line by running ",Object(i.b)("inlineCode",{parentName:"p"},"npm --no-git-tag-version version"),".\nIt will fail if the working directory is not clean, unless the ",Object(i.b)("inlineCode",{parentName:"p"},"-f")," or\n",Object(i.b)("inlineCode",{parentName:"p"},"--force")," flag is set."),Object(i.b)("p",null,"If supplied with ",Object(i.b)("inlineCode",{parentName:"p"},"-m")," or ",Object(i.b)("inlineCode",{parentName:"p"},"--message")," config option, npm will\nuse it as a commit message when creating a version commit.  If the\n",Object(i.b)("inlineCode",{parentName:"p"},"message")," config contains ",Object(i.b)("inlineCode",{parentName:"p"},"%s")," then that will be replaced with the\nresulting version number.  For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'npm version patch -m "Upgrade to %s for reasons"\n')),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"sign-git-tag")," config is set, then the tag will be signed using\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"-s")," flag to git.  Note that you must have a default GPG key set up\nin your git config for this to work properly.  For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ npm config set sign-git-tag true\n$ npm version patch\n\nYou need a passphrase to unlock the secret key for\nuser: "isaacs (http://blog.izs.me/) <i@izs.me>"\n2048-bit RSA key, ID 6C481CF6, created 2010-08-31\n\nEnter passphrase:\n')),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"preversion"),", ",Object(i.b)("inlineCode",{parentName:"p"},"version"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"postversion")," are in the ",Object(i.b)("inlineCode",{parentName:"p"},"scripts")," property of\nthe package.json, they will be executed as part of running ",Object(i.b)("inlineCode",{parentName:"p"},"npm version"),"."),Object(i.b)("p",null,"The exact order of execution is as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Check to make sure the git working directory is clean before we get started.\nYour scripts may add files to the commit in future steps.\nThis step is skipped if the ",Object(i.b)("inlineCode",{parentName:"li"},"--force")," flag is set."),Object(i.b)("li",{parentName:"ol"},"Run the ",Object(i.b)("inlineCode",{parentName:"li"},"preversion")," script. These scripts have access to the old ",Object(i.b)("inlineCode",{parentName:"li"},"version")," in package.json.\nA typical use would be running your full test suite before deploying.\nAny files you want added to the commit should be explicitly added using ",Object(i.b)("inlineCode",{parentName:"li"},"git add"),"."),Object(i.b)("li",{parentName:"ol"},"Bump ",Object(i.b)("inlineCode",{parentName:"li"},"version")," in ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")," as requested (",Object(i.b)("inlineCode",{parentName:"li"},"patch"),", ",Object(i.b)("inlineCode",{parentName:"li"},"minor"),", ",Object(i.b)("inlineCode",{parentName:"li"},"major"),", etc)."),Object(i.b)("li",{parentName:"ol"},"Run the ",Object(i.b)("inlineCode",{parentName:"li"},"version")," script. These scripts have access to the new ",Object(i.b)("inlineCode",{parentName:"li"},"version")," in package.json\n(so they can incorporate it into file headers in generated files for example).\nAgain, scripts should explicitly add generated files to the commit using ",Object(i.b)("inlineCode",{parentName:"li"},"git add"),"."),Object(i.b)("li",{parentName:"ol"},"Commit and tag."),Object(i.b)("li",{parentName:"ol"},"Run the ",Object(i.b)("inlineCode",{parentName:"li"},"postversion")," script. Use it to clean up the file system or automatically push\nthe commit and/or tag.")),Object(i.b)("p",null,"Take the following example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'    "scripts": {\n      "preversion": "npm test",\n      "version": "npm run build && git add -A dist",\n      "postversion": "git push && git push --tags && rm -rf build/temp"\n    }\n')),Object(i.b)("p",null,"This runs all your tests, and proceeds only if they pass. Then runs your ",Object(i.b)("inlineCode",{parentName:"p"},"build")," script, and\nadds everything in the ",Object(i.b)("inlineCode",{parentName:"p"},"dist")," directory to the commit. After the commit, it pushes the new commit\nand tag up to the server, and deletes the ",Object(i.b)("inlineCode",{parentName:"p"},"build/temp")," directory."),Object(i.b)("h3",null,"Configuration"),Object(i.b)("h4",null,"allow-same-version"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Prevents throwing an error when ",Object(i.b)("inlineCode",{parentName:"p"},"npm version")," is used to set the new version\nto the same value as the current version."),Object(i.b)("h4",null,"git-tag-version"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: true"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Commit and tag the version change."),Object(i.b)("h4",null,"commit-hooks"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: true"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Run git commit hooks when committing the version change."),Object(i.b)("h4",null,"sign-git-tag"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Pass the ",Object(i.b)("inlineCode",{parentName:"p"},"-s")," flag to git to sign the tag."),Object(i.b)("p",null,"Note that you must have a default GPG key set up in your git config for this to work properly."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-init"},"npm init")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-run-script"},"npm run-script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/using-npm/scripts"},"npm scripts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/package-json"},"package.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/using-npm/semver"},"semver")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/using-npm/config"},"config"))))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),m=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),j=n("mwnC"),f=n("/Rw0"),O=n("dVM4"),y=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var N=v,C=n("MfeC");function w(e){var t=C.a.getPath(e.location.pathname),n=C.a.getVariantAndPage(e.root,t);if(!n)return null;var a=C.a.getVariantsForPage(e.root,n.page),l=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),l.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,o.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},l)))}w.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=w,E=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),T=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,v=o.description,w=o.status,A=o.source,D=o.additionalContributors,R=void 0===D?[]:D,B=C.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:g.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:y,description:v}),r.a.createElement(s.b,{location:a}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(j.a,{location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},y),v))),null!=B?r.a.createElement(I,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:B,location:a})):null),n.tableOfContents.items?r.a.createElement(T,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(N,{items:n.tableOfContents.items})):null,r.a.createElement(S,null,w||A?r.a.createElement(i.k,{mb:3,alignItems:"center"},w?r.a.createElement(O.a,{status:w}):null,r.a.createElement(i.e,{mx:"auto"}),A?r.a.createElement(f.a,{href:A}):null):null,n.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.r,{icon:l.b,mr:2}):r.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(N,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(R.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-version-md-75324af5d8af588766fe.js.map