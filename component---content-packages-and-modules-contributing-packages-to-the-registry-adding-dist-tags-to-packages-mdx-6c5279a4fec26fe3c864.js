(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{EZR5:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return s}));var n,o=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("O6H6"),r={},c=(n="Note",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),m={_frontmatter:r},p=i.a;function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(p,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Distribution tags (dist-tags) are human-readable labels that you can use to organize and label different versions of packages you publish. dist-tags supplement ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"about-semantic-versioning"}),"semantic versioning"),". In addition to being more human-readable than semantic version numbering, tags allow publishers to distribute their packages more effectively."),Object(l.b)("p",null,"For more information, see the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"/cli/dist-tag"}),Object(l.b)("inlineCode",{parentName:"a"},"dist-tag")," CLI documentation"),"."),Object(l.b)(c,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:"),' Since dist-tags share a namespace with semantic versions, avoid dist-tags that conflict with existing version numbers. We recommend avoiding dist-tags that start with a number or the letter "v".')),Object(l.b)("h2",null,"Publishing a package with a dist-tag"),Object(l.b)("p",null,"By default, running ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish")," will tag your package with the ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," dist-tag. To use another dist-tag, use the ",Object(l.b)("inlineCode",{parentName:"p"},"--tag")," flag when publishing."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"On the command line, navigate to the root directory of your package."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object.assign({parentName:"pre"},{}),"cd /path/to/package\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Run the following command, replacing ",Object(l.b)("inlineCode",{parentName:"p"},"<tag>")," with the tag you want to use:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object.assign({parentName:"pre"},{}),"npm publish --tag <tag>\n")))),Object(l.b)("h3",null,"Example"),Object(l.b)("p",null,'To publish a package with the "beta" dist-tag, on the command line, run the following command in the root directory of your package:'),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),"npm publish --tag beta\n")),Object(l.b)("h2",null,"Adding a dist-tag to a specific version of your package"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"On the command line, navigate to the root directory of your package."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object.assign({parentName:"pre"},{}),"cd /path/to/package\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Run the following command, replacing ",Object(l.b)("inlineCode",{parentName:"p"},"<package_name>")," with the name of your package, ",Object(l.b)("inlineCode",{parentName:"p"},"<version>")," with your package version number, and ",Object(l.b)("inlineCode",{parentName:"p"},"<tag>")," with the distribution tag:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object.assign({parentName:"pre"},{}),"npm dist-tag add <package-name>@<version> [<tag>]\n")))),Object(l.b)("h3",null,"Example"),Object(l.b)("p",null,'To add the "stable" tag to the 1.4.0 version of the "example-package" package, you would run the following command:'),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),"npm dist-tag add example-package@1.4.0 stable\n")))}s.isMDXComponent=!0},O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),l=a("aOgs"),i=a("q1tI"),r=a.n(i),c=a("7ljp"),m=a("pD55"),p=a("8Aig"),s=a("ReZb"),b=a("GCVy"),u=a("+6vE");var d=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=a("gnlW"),f=a("mwnC"),O=a("/Rw0"),y=a("dVM4"),j=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function v(e){var t=e.items,a=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:a+1}):null)})))}v.defaultProps={depth:0};var E=v,w=a("MfeC");function k(e){var t=w.a.getPath(e.location.pathname),a=w.a.getVariantAndPage(e.root,t);if(!a)return null;var n=w.a.getVariantsForPage(e.root,a.page),l=[],i=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(i=e),l.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,i.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},l)))}k.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=k,x=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,i=a.frontmatter,j=i.title,v=i.description,k=i.status,M=i.source,P=i.additionalContributors,R=void 0===P?[]:P,T=w.a.getVariantRoot(n.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:b.a,Prompt:d,PromptReply:g,Screenshot:h.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:j,description:v}),r.a.createElement(p.b,{location:n}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{location:n})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},j),v))),null!=T?r.a.createElement(I,null,r.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:T,location:n})):null),a.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(E,{items:a.tableOfContents.items})):null,r.a.createElement(z,null,k||M?r.a.createElement(o.k,{mb:3,alignItems:"center"},k?r.a.createElement(y.a,{status:k}):null,r.a.createElement(o.e,{mx:"auto"}),M?r.a.createElement(O.a,{href:M}):null):null,a.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:l.b,mr:2}):r.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(E,{items:a.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editUrl:a.editUrl,contributors:a.contributors.concat(R.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-packages-and-modules-contributing-packages-to-the-registry-adding-dist-tags-to-packages-mdx-6c5279a4fec26fe3c864.js.map