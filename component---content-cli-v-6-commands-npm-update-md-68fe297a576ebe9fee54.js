(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"8A1f":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return r}));var a=t("8o2o"),l=(t("q1tI"),t("7ljp")),i=t("O6H6"),o={},p={_frontmatter:o},c=i.a;function r(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm update [-g] [<pkg>...]\n\naliases: up, upgrade\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command will update all the packages listed to the latest version\n(specified by the ",Object(l.b)("inlineCode",{parentName:"p"},"tag")," config), respecting semver."),Object(l.b)("p",null,"It will also install missing packages. As with all commands that install\npackages, the ",Object(l.b)("inlineCode",{parentName:"p"},"--dev")," flag will cause ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies")," to be processed\nas well."),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"-g")," flag is specified, this command will update globally installed\npackages."),Object(l.b)("p",null,"If no package name is specified, all packages in the specified location (global\nor local) will be updated."),Object(l.b)("p",null,"As of ",Object(l.b)("inlineCode",{parentName:"p"},"npm@2.6.1"),", the ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will only inspect top-level packages.\nPrior versions of ",Object(l.b)("inlineCode",{parentName:"p"},"npm")," would also recursively inspect all dependencies.\nTo get the old behavior, use ",Object(l.b)("inlineCode",{parentName:"p"},"npm --depth 9999 update"),"."),Object(l.b)("p",null,"As of ",Object(l.b)("inlineCode",{parentName:"p"},"npm@5.0.0"),", the ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will change ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," to save the\nnew version as the minimum required dependency. To get the old behavior,\nuse ",Object(l.b)("inlineCode",{parentName:"p"},"npm update --no-save"),"."),Object(l.b)("h3",null,"Example"),Object(l.b)("p",null,"IMPORTANT VERSION NOTE: these examples assume ",Object(l.b)("inlineCode",{parentName:"p"},"npm@2.6.1")," or later.  For\nolder versions of ",Object(l.b)("inlineCode",{parentName:"p"},"npm"),", you must specify ",Object(l.b)("inlineCode",{parentName:"p"},"--depth 0")," to get the behavior\ndescribed below."),Object(l.b)("p",null,"For the examples below, assume that the current package is ",Object(l.b)("inlineCode",{parentName:"p"},"app")," and it depends\non dependencies, ",Object(l.b)("inlineCode",{parentName:"p"},"dep1")," (",Object(l.b)("inlineCode",{parentName:"p"},"dep2"),", .. etc.).  The published versions of ",Object(l.b)("inlineCode",{parentName:"p"},"dep1")," are:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'{\n  "dist-tags": { "latest": "1.2.2" },\n  "versions": [\n    "1.2.2",\n    "1.2.1",\n    "1.2.0",\n    "1.1.2",\n    "1.1.1",\n    "1.0.0",\n    "0.4.1",\n    "0.4.0",\n    "0.2.0"\n  ]\n}\n')),Object(l.b)("h4",null,"Caret Dependencies"),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"app"),"'s ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," contains:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'"dependencies": {\n  "dep1": "^1.1.1"\n}\n')),Object(l.b)("p",null,"Then ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@1.2.2"),", because ",Object(l.b)("inlineCode",{parentName:"p"},"1.2.2")," is ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," and\n",Object(l.b)("inlineCode",{parentName:"p"},"1.2.2")," satisfies ",Object(l.b)("inlineCode",{parentName:"p"},"^1.1.1"),"."),Object(l.b)("h4",null,"Tilde Dependencies"),Object(l.b)("p",null,"However, if ",Object(l.b)("inlineCode",{parentName:"p"},"app"),"'s ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," contains:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'"dependencies": {\n  "dep1": "~1.1.1"\n}\n')),Object(l.b)("p",null,"In this case, running ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@1.1.2"),".  Even though the ",Object(l.b)("inlineCode",{parentName:"p"},"latest"),"\ntag points to ",Object(l.b)("inlineCode",{parentName:"p"},"1.2.2"),", this version does not satisfy ",Object(l.b)("inlineCode",{parentName:"p"},"~1.1.1"),", which is equivalent\nto ",Object(l.b)("inlineCode",{parentName:"p"},">=1.1.1 <1.2.0"),".  So the highest-sorting version that satisfies ",Object(l.b)("inlineCode",{parentName:"p"},"~1.1.1")," is used,\nwhich is ",Object(l.b)("inlineCode",{parentName:"p"},"1.1.2"),"."),Object(l.b)("h4",null,"Caret Dependencies below 1.0.0"),Object(l.b)("p",null,"Suppose ",Object(l.b)("inlineCode",{parentName:"p"},"app")," has a caret dependency on a version below ",Object(l.b)("inlineCode",{parentName:"p"},"1.0.0"),", for example:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'"dependencies": {\n  "dep1": "^0.2.0"\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@0.2.0"),", because there are no other\nversions which satisfy ",Object(l.b)("inlineCode",{parentName:"p"},"^0.2.0"),"."),Object(l.b)("p",null,"If the dependence were on ",Object(l.b)("inlineCode",{parentName:"p"},"^0.4.0"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-json"}),'"dependencies": {\n  "dep1": "^0.4.0"\n}\n')),Object(l.b)("p",null,"Then ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@0.4.1"),", because that is the highest-sorting\nversion that satisfies ",Object(l.b)("inlineCode",{parentName:"p"},"^0.4.0")," (",Object(l.b)("inlineCode",{parentName:"p"},">= 0.4.0 <0.5.0"),")"),Object(l.b)("h4",null,"Updating Globally-Installed Packages"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm update -g")," will apply the ",Object(l.b)("inlineCode",{parentName:"p"},"update")," action to each globally installed\npackage that is ",Object(l.b)("inlineCode",{parentName:"p"},"outdated")," -- that is, has a version that is different from\n",Object(l.b)("inlineCode",{parentName:"p"},"wanted"),"."),Object(l.b)("p",null,"Note: Globally installed packages are treated as if they are installed with a caret semver range specified. So if you require to update to ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," you may need to run ",Object(l.b)("inlineCode",{parentName:"p"},"npm install -g [<pkg>...]")),Object(l.b)("p",null,"NOTE: If a package has been upgraded to a version newer than ",Object(l.b)("inlineCode",{parentName:"p"},"latest"),", it will\nbe ",Object(l.b)("em",{parentName:"p"},"downgraded"),"."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-install"}),"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-outdated"}),"npm outdated")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-shrinkwrap"}),"npm shrinkwrap")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/using-npm/registry"}),"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/configuring-npm/folders"}),"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-ls"}),"npm ls"))))}r.isMDXComponent=!0},O6H6:function(e,n,t){"use strict";var a=t("vOnD"),l=t("u9kb"),i=t("aOgs"),o=t("q1tI"),p=t.n(o),c=t("7ljp"),r=t("pD55"),s=t("8Aig"),b=t("ReZb"),m=t("GCVy"),d=t("+6vE");var u=function(e){var n=e.children;return p.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},p.a.createElement(l.s,{fontFamily:"mono",fontSize:1},n))};var O=function(e){var n=e.children;return p.a.createElement("strong",null,n)},j=t("gnlW"),h=t("mwnC"),g=t("/Rw0"),f=t("dVM4"),N=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function C(e){var n=e.items,t=e.depth;return p.a.createElement(N,{key:n,as:"ul",m:0,p:0},n.map((function(e){return p.a.createElement(l.e,{as:"li",key:e.url,pl:t>0?3:0},p.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?p.a.createElement(C,{items:e.items,depth:t+1}):null)})))}C.defaultProps={depth:0};var y=C,v=t("MfeC");function w(e){var n=v.a.getPath(e.location.pathname),t=v.a.getVariantAndPage(e.root,n);if(!t)return null;var a=v.a.getVariantsForPage(e.root,t.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(o=e),i.push(p.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),p.a.createElement(l.i,{overlay:e.overlay},p.a.createElement(l.i.Button,null,o.variant.title),p.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},i)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=w,k=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,o=t.frontmatter,N=o.title,C=o.description,w=o.status,A=o.source,D=o.additionalContributors,P=void 0===D?[]:D,M=v.a.getVariantRoot(a.pathname);return p.a.createElement(c.a,{components:{Index:b.a,Note:m.a,Prompt:u,PromptReply:O,Screenshot:j.a}},p.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},p.a.createElement(r.a,{title:N,description:C}),p.a.createElement(s.b,{location:a}),p.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},p.a.createElement(l.e,{display:["none",null,null,"block"]},p.a.createElement(h.a,{location:a})),p.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},p.a.createElement(I,null,p.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},p.a.createElement(l.e,null,p.a.createElement(l.e,null,p.a.createElement(l.m,{as:"h1"},N),C))),null!=M?p.a.createElement(_,null,p.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:a})):null),t.tableOfContents.items?p.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},p.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),p.a.createElement(y,{items:t.tableOfContents.items})):null,p.a.createElement(T,null,w||A?p.a.createElement(l.k,{mb:3,alignItems:"center"},w?p.a.createElement(f.a,{status:w}):null,p.a.createElement(l.e,{mx:"auto"}),A?p.a.createElement(g.a,{href:A}):null):null,t.tableOfContents.items?p.a.createElement(l.e,{display:["block",null,"none"],mb:3},p.a.createElement(l.h,null,(function(e){var n=e.open;return p.a.createElement(p.a.Fragment,null,p.a.createElement(l.s,{as:"summary",fontWeight:"bold"},n?p.a.createElement(l.r,{icon:i.b,mr:2}):p.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),p.a.createElement(l.e,{pt:1},p.a.createElement(y,{items:t.tableOfContents.items})))}))):null,n,p.a.createElement(d.a,{editUrl:t.editUrl,contributors:t.contributors.concat(P.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-update-md-68fe297a576ebe9fee54.js.map