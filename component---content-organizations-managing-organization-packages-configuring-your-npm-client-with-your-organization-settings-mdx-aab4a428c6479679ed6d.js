(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),i=n("q1tI"),c=n.n(i),r=n("7ljp"),p=n("pD55"),m=n("8Aig"),b=n("ReZb"),s=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return c.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return c.a.createElement("strong",null,t)},h=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,n=e.depth;return c.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},c.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var w=k,N=n("MfeC");function E(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var a=N.a.getVariantsForPage(e.root,n.page),l=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),l.push(c.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(o.i,{overlay:e.overlay},c.a.createElement(o.i.Button,null,i.variant.title),c.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},l)))}E.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=E,C=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),z=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,j=i.title,k=i.description,E=i.status,H=i.source,B=i.additionalContributors,M=void 0===B?[]:B,R=N.a.getVariantRoot(a.pathname);return c.a.createElement(r.a,{components:{Index:b.a,Note:s.a,Prompt:d,PromptReply:g,Screenshot:h.a}},c.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(p.a,{title:j,description:k}),c.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),c.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(o.e,{display:["none",null,null,"block"]},c.a.createElement(f.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),c.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(z,null,c.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(o.e,null,c.a.createElement(o.e,null,c.a.createElement(o.m,{as:"h1"},j),k))),null!=R?c.a.createElement(_,null,c.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:R,location:a})):null),n.tableOfContents.items?c.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},c.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(w,{items:n.tableOfContents.items})):null,c.a.createElement(I,null,E||H?c.a.createElement(o.k,{mb:3,alignItems:"center"},E?c.a.createElement(O.a,{status:E}):null,c.a.createElement(o.e,{mx:"auto"}),H?c.a.createElement(y.a,{href:H}):null):null,n.tableOfContents.items?c.a.createElement(o.e,{display:["block",null,"none"],mb:3},c.a.createElement(o.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(o.r,{icon:l.b,mr:2}):c.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),c.a.createElement(o.e,{pt:1},c.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,c.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},oBvr:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return b}));var a,o=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),c=(n("4LHR"),{}),r=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),p={_frontmatter:c},m=i.a;function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(m,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"As an organization member, you can configure your npm client to:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"make a single package or all new packages you create locally use your organization's scope"),Object(l.b)("li",{parentName:"ul"},"make a single package or all new packages you create locally have default public visibility")),Object(l.b)("p",null,"Before configuring your npm client, you must ",Object(l.b)("a",{parentName:"p",href:"downloading-and-installing-node-js-and-npm"},"install npm"),"."),Object(l.b)("h2",null,"Configuring your npm client to use your organization's scope"),Object(l.b)("p",null,"If you will be publishing packages with your organization's scope often, you can add your organization's scope to your global ",Object(l.b)("inlineCode",{parentName:"p"},".npmrc")," configuration file."),Object(l.b)("h3",null,"Setting your organization scope for all new packages"),Object(l.b)(r,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," Setting the organization scope using the steps below will only set the scope for new packages; for existing packages, you will need to update the ",Object(l.b)("inlineCode",{parentName:"p"},"name")," field in ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),".")),Object(l.b)("p",null,"On the command line, run the following command, replacing ","<","org-name",">"," with the name of your organization:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm config set scope <org-name> --global\n")),Object(l.b)("p",null,"For packages you do not want to publish with your organization's scope, you must manually edit the package's ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," to remove the organization scope from the ",Object(l.b)("inlineCode",{parentName:"p"},"name")," field."),Object(l.b)("h3",null,"Setting your organization scope for a single package"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"On the command line, navigate to the package directory."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"cd /path/to/package\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Run the following command, replacing ","<","org-name",">"," with the name of your organization:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"npm config set scope <org-name>\n")))),Object(l.b)("h2",null,"Changing default package visibility to public"),Object(l.b)("p",null,"By default, publishing a scoped package with ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish")," will publish the package as private. If you are a member of an organization on the free organization plan, or are on the paid organization plan but want to publish a scoped package as public, you must pass the ",Object(l.b)("inlineCode",{parentName:"p"},"--access public")," flag:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm publish --access public\n")),Object(l.b)("h3",null,"Setting package visibility to public for a single package"),Object(l.b)("p",null,"You can set a single package to pass ",Object(l.b)("inlineCode",{parentName:"p"},"--access public ")," to every ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish")," command that you issue for that package."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"On the command line, navigate to the package directory."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"cd /path/to/package\n\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Run the following command:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"npm config set access public\n")))),Object(l.b)("h3",null,"Setting package visibility to public for all packages"),Object(l.b)("p",null,"You can set all packages to pass ",Object(l.b)("inlineCode",{parentName:"p"},"--access public ")," to every ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish")," command that you issue for that package."),Object(l.b)(r,{mdxType:"Note"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Warning:")," Setting packages access to ",Object(l.b)("inlineCode",{parentName:"p"},"public")," in your global ",Object(l.b)("inlineCode",{parentName:"p"},".npmrc")," will affect all packages you create, including packages in your personal account scope, as well as packages scoped to your organization.")),Object(l.b)("p",null,"On the command line, run the following command:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"npm config set access public --global\n")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-organizations-managing-organization-packages-configuring-your-npm-client-with-your-organization-settings-mdx-aab4a428c6479679ed6d.js.map