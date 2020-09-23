(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{"Edw+":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a("zLVn"),l=a("q1tI"),i=a("7ljp"),o=a("O6H6"),r=a("4LHR"),c={},p={_frontmatter:c},m=o.a;function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(m,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As an organization member, you can create and publish public and private packages within the organization's scope."),Object(i.b)("h2",null,"Creating an organization scoped package"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On the command line, make a directory with the name of the package you would like to create."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"mkdir /path/to/package/directory\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to the newly-created package directory.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To create an organization scoped package, on the command line, run:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"npm init --scope=<your_org_name>\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To verify the package is using your organization scope, in a text editor, open the package's ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file and check that the name is ",Object(i.b)("inlineCode",{parentName:"p"},"@your_org_name/<pkg_name>"),", replacing ",Object(i.b)("inlineCode",{parentName:"p"},"your_org_name")," with the name of your organization."))),Object(i.b)("h2",null,"Publishing a private organization scoped package"),Object(i.b)("p",null,"By default, ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish")," will publish a scoped package as private."),Object(i.b)("p",null,"By default, any scoped package is published as private. However, if you have an organization that does not have the Private Packages feature, ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish")," will fail unless you pass the ",Object(i.b)("inlineCode",{parentName:"p"},"access")," flag."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On the command line, navigate to the package directory.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish"),"."))),Object(i.b)("p",null,"Private packages will say ",Object(i.b)("inlineCode",{parentName:"p"},"private")," below the package name on the npm website."),Object(i.b)(l.Fragment,null,r.a["organization-package-private"].image),Object(i.b)("h2",null,"Publishing a public organization scoped package"),Object(i.b)("p",null,"To publish an organization scoped package as public, use ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish --access public"),"."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On the command line, navigate to the package directory.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish --access public"),"."))),Object(i.b)("p",null,"Public packages will say ",Object(i.b)("inlineCode",{parentName:"p"},"public")," below the package name on the npm website."),Object(i.b)(l.Fragment,null,r.a["organization-package-public"].image))}b.isMDXComponent=!0},O6H6:function(e,t,a){"use strict";var n=a("vOnD"),l=a("u9kb"),i=a("aOgs"),o=a("q1tI"),r=a.n(o),c=a("7ljp"),p=a("pD55"),m=a("8Aig"),b=a("ReZb"),u=a("GCVy"),s=a("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=a("gnlW"),f=a("mwnC"),O=a("/Rw0"),y=a("dVM4"),j=Object(n.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,a=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:a>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:a+1}):null)})))}k.defaultProps={depth:0};var E=k,v=a("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),a=v.a.getVariantAndPage(e.root,t);if(!a)return null;var n=v.a.getVariantsForPage(e.root,a.page),i=[],o=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},i)))}w.Menu=Object(n.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=w,C=Object(n.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(n.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),z=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),P=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,o=a.frontmatter,j=o.title,k=o.description,w=o.status,S=o.source,H=o.additionalContributors,R=void 0===H?[]:H,B=v.a.getVariantRoot(n.pathname);return r.a.createElement(c.a,{components:{Index:b.a,Note:u.a,Prompt:d,PromptReply:g,Screenshot:h.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:j,description:k}),r.a.createElement(m.b,{location:n,isSearchEnabled:a.isSearchEnabled}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:a.themeOptions.editOnGitHub,pathPrefix:a.themeOptions.pathPrefix,location:n})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},j),k))),null!=B?r.a.createElement(z,null,r.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:B,location:n})):null),a.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(E,{items:a.tableOfContents.items})):null,r.a.createElement(P,null,w||S?r.a.createElement(l.k,{mb:3,alignItems:"center"},w?r.a.createElement(y.a,{status:w}):null,r.a.createElement(l.e,{mx:"auto"}),S?r.a.createElement(O.a,{href:S}):null):null,a.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(E,{items:a.tableOfContents.items})))}))):null,t,r.a.createElement(s.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(R.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-organizations-managing-organization-packages-creating-and-publishing-an-organization-scoped-package-mdx-efe68993b000d2d08a4e.js.map