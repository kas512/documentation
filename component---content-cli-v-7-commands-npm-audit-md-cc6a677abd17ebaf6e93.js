(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),p=n("pD55"),b=n("8Aig"),d=n("ReZb"),s=n("GCVy"),u=n("+6vE");var m=function(e){var t=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),j=n("mwnC"),O=n("/Rw0"),g=n("dVM4"),y=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var N=v,w=n("MfeC");function C(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),l=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),l.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,o.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},l)))}C.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=C,x=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),E=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),A=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,v=o.description,C=o.status,T=o.source,B=o.additionalContributors,z=void 0===B?[]:B,D=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:d.a,Note:s.a,Prompt:m,PromptReply:h,Screenshot:f.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:y,description:v}),r.a.createElement(b.b,{location:a}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(j.a,{location:a})),r.a.createElement(E,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},y),v))),null!=D?r.a.createElement(I,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:D,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(N,{items:n.tableOfContents.items})):null,r.a.createElement(A,null,C||T?r.a.createElement(i.k,{mb:3,alignItems:"center"},C?r.a.createElement(g.a,{status:C}):null,r.a.createElement(i.e,{mx:"auto"}),T?r.a.createElement(O.a,{href:T}):null):null,n.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.r,{icon:l.b,mr:2}):r.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(N,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},eDat:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("8o2o"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),o={},r={_frontmatter:o},c=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm audit [--json] [--production] [--audit-level=(low|moderate|high|critical)]\nnpm audit fix [--force|--package-lock-only|--dry-run|--production|--only=(dev|prod)]\n\ncommon options: [--production] [--only=(dev|prod)]\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"The audit command submits a description of the dependencies configured in\nyour project to your default registry and asks for a report of known\nvulnerabilities.  If any vulnerabilities are found, then the impact and\nappropriate remediation will be calculated.  If the ",Object(i.b)("inlineCode",{parentName:"p"},"fix")," argument is\nprovided, then remediations will be applied to the package tree."),Object(i.b)("p",null,"The command will exit with a 0 exit code if no vulnerabilities were found."),Object(i.b)("p",null,"Note that some vulnerabilities cannot be fixed automatically and will\nrequire manual intervention or review.  Also note that since ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit\nfix")," runs a full-fledged ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," under the hood, all configs that\napply to the installer will also apply to ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," -- so things like\n",Object(i.b)("inlineCode",{parentName:"p"},"npm audit fix --package-lock-only")," will work as expected."),Object(i.b)("p",null,"By default, the audit command will exit with a non-zero code if any\nvulnerability is found. It may be useful in CI environments to include the\n",Object(i.b)("inlineCode",{parentName:"p"},"--audit-level")," parameter to specify the minimum vulnerability level that\nwill cause the command to fail. This option does not filter the report\noutput, it simply changes the command's failure threshold."),Object(i.b)("h3",null,"Audit Endpoints"),Object(i.b)("p",null,"There are two audit endpoints that npm may use to fetch vulnerability\ninformation: the ",Object(i.b)("inlineCode",{parentName:"p"},"Bulk Advisory")," endpoint and the ",Object(i.b)("inlineCode",{parentName:"p"},"Quick Audit")," endpoint."),Object(i.b)("h4",null,"Bulk Advisory Endpoint"),Object(i.b)("p",null,"As of version 7, npm uses the much faster ",Object(i.b)("inlineCode",{parentName:"p"},"Bulk Advisory")," endpoint to\noptimize the speed of calculating audit results."),Object(i.b)("p",null,"npm will generate a JSON payload with the name and list of versions of each\npackage in the tree, and POST it to the default configured registry at\nthe path ",Object(i.b)("inlineCode",{parentName:"p"},"/-/npm/v1/security/advisories/bulk"),"."),Object(i.b)("p",null,"Any packages in the tree that do not have a ",Object(i.b)("inlineCode",{parentName:"p"},"version")," field in their\npackage.json file will be ignored.  If any ",Object(i.b)("inlineCode",{parentName:"p"},"--omit")," options are specified\n(either via the ",Object(i.b)("inlineCode",{parentName:"p"},"--omit")," config, or one of the shorthands such as\n",Object(i.b)("inlineCode",{parentName:"p"},"--production"),", ",Object(i.b)("inlineCode",{parentName:"p"},"--only=dev"),", and so on), then packages will be omitted\nfrom the submitted payload as appropriate."),Object(i.b)("p",null,"If the registry responds with an error, or with an invalid response, then\nnpm will attempt to load advisory data from the ",Object(i.b)("inlineCode",{parentName:"p"},"Quick Audit")," endpoint."),Object(i.b)("p",null,"The expected result will contain a set of advisory objects for each\ndependency that matches the advisory range.  Each advisory object contains\na ",Object(i.b)("inlineCode",{parentName:"p"},"name"),", ",Object(i.b)("inlineCode",{parentName:"p"},"url"),", ",Object(i.b)("inlineCode",{parentName:"p"},"id"),", ",Object(i.b)("inlineCode",{parentName:"p"},"severity"),", ",Object(i.b)("inlineCode",{parentName:"p"},"vulnerable_versions"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"title"),"."),Object(i.b)("p",null,"npm then uses these advisory objects to calculate vulnerabilities and\nmeta-vulnerabilities of the dependencies within the tree."),Object(i.b)("h4",null,"Quick Audit Endpoint"),Object(i.b)("p",null,"If the ",Object(i.b)("inlineCode",{parentName:"p"},"Bulk Advisory")," endpoint returns an error, or invalid data, npm will\nattempt to load advisory data from the ",Object(i.b)("inlineCode",{parentName:"p"},"Quick Audit")," endpoint, which is\nconsiderably slower in most cases."),Object(i.b)("p",null,"The full package tree as found in ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," is submitted, along\nwith the following pieces of additional metadata:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"npm_version")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"node_version")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"platform")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"arch")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"node_env"))),Object(i.b)("p",null,"All packages in the tree are submitted to the Quick Audit endpoint.\nOmitted dependency types are skipped when generating the report."),Object(i.b)("h4",null,"Scrubbing"),Object(i.b)("p",null,'Out of an abundance of caution, npm versions 5 and 6 would "scrub" any\npackages from the submitted report if their name contained a ',Object(i.b)("inlineCode",{parentName:"p"},"/")," character,\nso as to avoid leaking the names of potentially private packages or git\nURLs."),Object(i.b)("p",null,"However, in practice, this resulted in audits often failing to properly\ndetect meta-vulnerabilities, because the tree would appear to be invalid\ndue to missing dependencies, and prevented the detection of vulnerabilities\nin package trees that used git dependencies or private modules."),Object(i.b)("p",null,"This scrubbing has been removed from npm as of version 7."),Object(i.b)("h4",null,"Calculating Meta-Vulnerabilities and Remediations"),Object(i.b)("p",null,"npm uses the\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"http://npm.im/@npmcli/metavuln-calculator"}),Object(i.b)("inlineCode",{parentName:"a"},"@npmcli/metavuln-calculator")),'\nmodule to turn a set of security advisories into a set of "vulnerability"\nobjects.  A "meta-vulnerability" is a dependency that is vulnerable by\nvirtue of dependence on vulnerable versions of a vulnerable package.'),Object(i.b)("p",null,"For example, if the package ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," is vulnerable in the range ",Object(i.b)("inlineCode",{parentName:"p"},">=1.0.2\n<2.0.0"),", and the package ",Object(i.b)("inlineCode",{parentName:"p"},"bar")," depends on ",Object(i.b)("inlineCode",{parentName:"p"},"foo@^1.1.0"),", then that version\nof ",Object(i.b)("inlineCode",{parentName:"p"},"bar")," can only be installed by installing a vulnerable version of ",Object(i.b)("inlineCode",{parentName:"p"},"foo"),".\nIn this case, ",Object(i.b)("inlineCode",{parentName:"p"},"bar"),' is a "metavulnerability".'),Object(i.b)("p",null,"Once metavulnerabilities for a given package are calculated, they are\ncached in the ",Object(i.b)("inlineCode",{parentName:"p"},"~/.npm")," folder and only re-evaluated if the advisory range\nchanges, or a new version of the package is published (in which case, the\nnew version is checked for metavulnerable status as well)."),Object(i.b)("p",null,"If the chain of metavulnerabilities extends all the way to the root\nproject, and it cannot be updated without changing its dependency ranges,\nthen ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit fix")," will require the ",Object(i.b)("inlineCode",{parentName:"p"},"--force")," option to apply the\nremediation.  If remediations do not require changes to the dependency\nranges, then all vulnerable packages will be updated to a version that does\nnot have an advisory or metavulnerability posted against it."),Object(i.b)("h3",null,"Exit Code"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit")," command will exit with a 0 exit code if no vulnerabilities\nwere found.  The ",Object(i.b)("inlineCode",{parentName:"p"},"npm audit fix")," command will exit with 0 exit code if no\nvulnerabilities are found ",Object(i.b)("em",{parentName:"p"},"or")," if the remediation is able to successfully\nfix all vulnerabilities."),Object(i.b)("p",null,"If vulnerabilities were found the exit code will depend on the\n",Object(i.b)("inlineCode",{parentName:"p"},"audit-level")," configuration setting."),Object(i.b)("h3",null,"Examples"),Object(i.b)("p",null,"Scan your project for vulnerabilities and automatically install any compatible\nupdates to vulnerable dependencies:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ npm audit fix\n")),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"audit fix")," without modifying ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),", but still updating the\npkglock:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ npm audit fix --package-lock-only\n")),Object(i.b)("p",null,"Skip updating ",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ npm audit fix --only=prod\n")),Object(i.b)("p",null,"Have ",Object(i.b)("inlineCode",{parentName:"p"},"audit fix")," install SemVer-major updates to toplevel dependencies, not\njust SemVer-compatible ones:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ npm audit fix --force\n")),Object(i.b)("p",null,"Do a dry run to get an idea of what ",Object(i.b)("inlineCode",{parentName:"p"},"audit fix")," will do, and ",Object(i.b)("em",{parentName:"p"},"also")," output\ninstall information in JSON format:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ npm audit fix --dry-run --json\n")),Object(i.b)("p",null,"Scan your project for vulnerabilities and just show the details, without\nfixing anything:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ npm audit\n")),Object(i.b)("p",null,"Get the detailed audit report in JSON format:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ npm audit --json\n")),Object(i.b)("p",null,"Fail an audit only if the results include a vulnerability with a level of moderate or higher:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"$ npm audit --audit-level=moderate\n")),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-install"}),"npm install")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/package-locks"}),"package-locks")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/using-npm/config"}),"config"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-audit-md-cc6a677abd17ebaf6e93.js.map