(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),o=n("q1tI"),r=n.n(o),s=n("7ljp"),c=n("pD55"),p=n("8Aig"),b=n("ReZb"),d=n("GCVy"),u=n("+6vE");var m=function(e){var t=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),j=n("/Rw0"),O=n("dVM4"),y=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var k=v,N=n("MfeC");function w(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var a=N.a.getVariantsForPage(e.root,n.page),l=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),l.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,o.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},l)))}w.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=w,C=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,v=o.description,w=o.status,R=o.source,F=o.additionalContributors,A=void 0===F?[]:F,L=N.a.getVariantRoot(a.pathname);return r.a.createElement(s.a,{components:{Index:b.a,Note:d.a,Prompt:m,PromptReply:h,Screenshot:f.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:y,description:v}),r.a.createElement(p.b,{location:a}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},y),v))),null!=L?r.a.createElement(T,null,r.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:L,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:n.tableOfContents.items})):null,r.a.createElement(S,null,w||R?r.a.createElement(i.k,{mb:3,alignItems:"center"},w?r.a.createElement(O.a,{status:w}):null,r.a.createElement(i.e,{mx:"auto"}),R?r.a.createElement(j.a,{href:R}):null):null,n.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.r,{icon:l.b,mr:2}):r.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(A.map((function(e){return{login:e}})))}))))))}},n32F:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n("8o2o"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),o={},r={_frontmatter:o},s=l.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(s,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," is automatically generated for any operations where npm\nmodifies either the ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," tree, or ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". It describes the\nexact tree that was generated, such that subsequent installs are able to\ngenerate identical trees, regardless of intermediate dependency updates."),Object(i.b)("p",null,"This file is intended to be committed into source repositories, and serves\nvarious purposes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Describe a single representation of a dependency tree such that teammates, deployments, and continuous integration are guaranteed to install exactly the same dependencies.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Provide a facility for users to "time-travel" to previous states of ',Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," without having to commit the directory itself.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To facilitate greater visibility of tree changes through readable source control diffs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"And optimize the installation process by allowing npm to skip repeated metadata resolutions for previously-installed packages."))),Object(i.b)("p",null,"One key detail about ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," is that it cannot be published, and it\nwill be ignored if found in any place other than the toplevel package. It shares\na format with ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"/cli/v7/configuring-npm/shrinkwrap-json"}),"npm-shrinkwrap.json"),", which is essentially the same file, but\nallows publication. This is not recommended unless deploying a CLI tool or\notherwise using the publication process for producing production packages."),Object(i.b)("p",null,"If both ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," and ",Object(i.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," are present in the root of\na package, ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," will be completely ignored."),Object(i.b)("h3",null,"File Format"),Object(i.b)("h4",null,"name"),Object(i.b)("p",null,"The name of the package this is a package-lock for. This must match what's in\n",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("h4",null,"version"),Object(i.b)("p",null,"The version of the package this is a package-lock for. This must match what's in\n",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("h4",null,"lockfileVersion"),Object(i.b)("p",null,"An integer version, starting at ",Object(i.b)("inlineCode",{parentName:"p"},"1")," with the version number of this document\nwhose semantics were used when generating this ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json"),"."),Object(i.b)("h4",null,"packageIntegrity"),Object(i.b)("p",null,"This is a ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://w3c.github.io/webappsec/specs/subresourceintegrity/"}),"subresource\nintegrity")," value\ncreated from the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". No preprocessing of the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," should\nbe done. Subresource integrity strings can be produced by modules like\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/ssri"}),Object(i.b)("inlineCode",{parentName:"a"},"ssri")),"."),Object(i.b)("h4",null,"preserveSymlinks"),Object(i.b)("p",null,"Indicates that the install was done with the environment variable\n",Object(i.b)("inlineCode",{parentName:"p"},"NODE_PRESERVE_SYMLINKS")," enabled. The installer should insist that the value of\nthis property match that environment variable."),Object(i.b)("h4",null,"dependencies"),Object(i.b)("p",null,"A mapping of package name to dependency object.  Dependency objects have the\nfollowing properties:"),Object(i.b)("h5",null,"version"),Object(i.b)("p",null,"This is a specifier that uniquely identifies this package and should be\nusable in fetching a new copy of it."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"bundled dependencies: Regardless of source, this is a version number that is purely for informational purposes."),Object(i.b)("li",{parentName:"ul"},"registry sources: This is a version number. (eg, ",Object(i.b)("inlineCode",{parentName:"li"},"1.2.3"),")"),Object(i.b)("li",{parentName:"ul"},"git sources: This is a git specifier with resolved committish. (eg, ",Object(i.b)("inlineCode",{parentName:"li"},"git+https://example.com/foo/bar#115311855adb0789a0466714ed48a1499ffea97e"),")"),Object(i.b)("li",{parentName:"ul"},"http tarball sources: This is the URL of the tarball. (eg, ",Object(i.b)("inlineCode",{parentName:"li"},"https://example.com/example-1.3.0.tgz"),")"),Object(i.b)("li",{parentName:"ul"},"local tarball sources: This is the file URL of the tarball. (eg ",Object(i.b)("inlineCode",{parentName:"li"},"file:///opt/storage/example-1.3.0.tgz"),")"),Object(i.b)("li",{parentName:"ul"},"local link sources: This is the file URL of the link. (eg ",Object(i.b)("inlineCode",{parentName:"li"},"file:libs/our-module"),")")),Object(i.b)("h5",null,"integrity"),Object(i.b)("p",null,"This is a ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://w3c.github.io/webappsec/specs/subresourceintegrity/"}),"Standard Subresource\nIntegrity")," for this\nresource."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For bundled dependencies this is not included, regardless of source."),Object(i.b)("li",{parentName:"ul"},"For registry sources, this is the ",Object(i.b)("inlineCode",{parentName:"li"},"integrity")," that the registry provided, or if one wasn't provided the SHA1 in ",Object(i.b)("inlineCode",{parentName:"li"},"shasum"),"."),Object(i.b)("li",{parentName:"ul"},"For git sources this is the specific commit hash we cloned from."),Object(i.b)("li",{parentName:"ul"},"For remote tarball sources this is an integrity based on a SHA512 of\nthe file."),Object(i.b)("li",{parentName:"ul"},"For local tarball sources: This is an integrity field based on the SHA512 of the file.")),Object(i.b)("h5",null,"resolved"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For bundled dependencies this is not included, regardless of source."),Object(i.b)("li",{parentName:"ul"},"For registry sources this is path of the tarball relative to the registry\nURL.  If the tarball URL isn't on the same server as the registry URL then\nthis is a complete URL.")),Object(i.b)("h5",null,"bundled"),Object(i.b)("p",null,"If true, this is the bundled dependency and will be installed by the parent\nmodule.  When installing, this module will be extracted from the parent\nmodule during the extract phase, not installed as a separate dependency."),Object(i.b)("h5",null,"dev"),Object(i.b)("p",null,"If true then this dependency is either a development dependency ONLY of the\ntop level module or a transitive dependency of one.  This is false for\ndependencies that are both a development dependency of the top level and a\ntransitive dependency of a non-development dependency of the top level."),Object(i.b)("h5",null,"optional"),Object(i.b)("p",null,"If true then this dependency is either an optional dependency ONLY of the\ntop level module or a transitive dependency of one.  This is false for\ndependencies that are both an optional dependency of the top level and a\ntransitive dependency of a non-optional dependency of the top level."),Object(i.b)("p",null,"All optional dependencies should be included even if they're uninstallable\non the current platform."),Object(i.b)("h5",null,"requires"),Object(i.b)("p",null,"This is a mapping of module name to version.  This is a list of everything\nthis module requires, regardless of where it will be installed.  The version\nshould match via normal matching rules a dependency either in our\n",Object(i.b)("inlineCode",{parentName:"p"},"dependencies")," or in a level higher than us."),Object(i.b)("h5",null,"dependencies"),Object(i.b)("p",null,"The dependencies of this dependency, exactly as at the top level."),Object(i.b)("h3",null,"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-shrinkwrap"}),"npm shrinkwrap")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/shrinkwrap-json"}),"shrinkwrap.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/package-locks"}),"package-locks")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/package-json"}),"package.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-install"}),"npm install"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-configuring-npm-package-lock-json-md-d4b7f119c470f2be06d4.js.map