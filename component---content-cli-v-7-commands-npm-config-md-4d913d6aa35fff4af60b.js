(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"0fIy":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},c={_frontmatter:i},r=o.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(r,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm config set <key> <value> [-g|--global]\nnpm config get <key>\nnpm config delete <key>\nnpm config list [-l] [--json]\nnpm config edit\nnpm get <key>\nnpm set <key> <value> [-g|--global]\n\naliases: c\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"npm gets its config settings from the command line, environment\nvariables, ",Object(l.b)("inlineCode",{parentName:"p"},"npmrc")," files, and in some cases, the ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file."),Object(l.b)("p",null,"See ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"/cli/v7/configuring-npm/npmrc"}),"npmrc")," for more information about the npmrc files."),Object(l.b)("p",null,"See ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"/cli/v7/using-npm/config"}),"config")," for a more thorough discussion of the mechanisms\ninvolved."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"npm config")," command can be used to update and edit the contents\nof the user and global npmrc files."),Object(l.b)("h3",null,"Sub-commands"),Object(l.b)("p",null,"Config supports the following sub-commands:"),Object(l.b)("h4",null,"set"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm config set key value\n")),Object(l.b)("p",null,"Sets the config key to the value."),Object(l.b)("p",null,'If value is omitted, then it sets it to "true".'),Object(l.b)("h4",null,"get"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm config get key\n")),Object(l.b)("p",null,"Echo the config value to stdout."),Object(l.b)("h4",null,"list"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm config list\n")),Object(l.b)("p",null,"Show all the config settings. Use ",Object(l.b)("inlineCode",{parentName:"p"},"-l")," to also show defaults. Use ",Object(l.b)("inlineCode",{parentName:"p"},"--json"),"\nto show the settings in json format."),Object(l.b)("h4",null,"delete"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm config delete key\n")),Object(l.b)("p",null,"Deletes the key from all configuration files."),Object(l.b)("h4",null,"edit"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm config edit\n")),Object(l.b)("p",null,"Opens the config file in an editor.  Use the ",Object(l.b)("inlineCode",{parentName:"p"},"--global")," flag to edit the\nglobal config."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/folders"}),"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-config"}),"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/package-json"}),"package.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/configuring-npm/npmrc"}),"npmrc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v7/commands/npm-npm"}),"npm"))))}m.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),c=n.n(i),r=n("7ljp"),m=n("pD55"),s=n("8Aig"),b=n("ReZb"),p=n("GCVy"),u=n("+6vE");var g=function(e){var t=e.children;return c.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var d=function(e){var t=e.children;return c.a.createElement("strong",null,t)},f=n("gnlW"),h=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return c.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},c.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var E=v,k=n("MfeC");function N(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(c.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(l.i,{overlay:e.overlay},c.a.createElement(l.i.Button,null,i.variant.title),c.a.createElement(N.Menu,{direction:e.direction,width:e.menuWidth},o)))}N.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=N,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,y=i.title,v=i.description,N=i.status,D=i.source,M=i.additionalContributors,W=void 0===M?[]:M,A=k.a.getVariantRoot(a.pathname);return c.a.createElement(r.a,{components:{Index:b.a,Note:p.a,Prompt:g,PromptReply:d,Screenshot:f.a}},c.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(m.a,{title:y,description:v}),c.a.createElement(s.b,{location:a}),c.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(l.e,{display:["none",null,null,"block"]},c.a.createElement(h.a,{location:a})),c.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(_,null,c.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(l.e,null,c.a.createElement(l.e,null,c.a.createElement(l.m,{as:"h1"},y),v))),null!=A?c.a.createElement(S,null,c.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?c.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},c.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(E,{items:n.tableOfContents.items})):null,c.a.createElement(z,null,N||D?c.a.createElement(l.k,{mb:3,alignItems:"center"},N?c.a.createElement(j.a,{status:N}):null,c.a.createElement(l.e,{mx:"auto"}),D?c.a.createElement(O.a,{href:D}):null):null,n.tableOfContents.items?c.a.createElement(l.e,{display:["block",null,"none"],mb:3},c.a.createElement(l.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(l.r,{icon:o.b,mr:2}):c.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),c.a.createElement(l.e,{pt:1},c.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,c.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-config-md-4d913d6aa35fff4af60b.js.map