(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),r=n("aOgs"),i=n("q1tI"),o=n.n(i),c=n("7ljp"),s=n("pD55"),u=n("8Aig"),b=n("ReZb"),p=n("GCVy"),m=n("+6vE");var d=function(e){var t=e.children;return o.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return o.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return o.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var E=N,v=n("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),r=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),r.push(o.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(l.i,{overlay:e.overlay},o.a.createElement(l.i.Button,null,i.variant.title),o.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},r)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,C=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),k=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,y=i.title,N=i.description,w=i.status,T=i.source,A=i.additionalContributors,B=void 0===A?[]:A,W=v.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:b.a,Note:p.a,Prompt:d,PromptReply:h,Screenshot:f.a}},o.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(s.a,{title:y,description:N}),o.a.createElement(u.b,{location:a}),o.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.e,{display:["none",null,null,"block"]},o.a.createElement(g.a,{location:a})),o.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(l.e,null,o.a.createElement(l.e,null,o.a.createElement(l.m,{as:"h1"},y),N))),null!=W?o.a.createElement(S,null,o.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?o.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},o.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(E,{items:n.tableOfContents.items})):null,o.a.createElement(D,null,w||T?o.a.createElement(l.k,{mb:3,alignItems:"center"},w?o.a.createElement(j.a,{status:w}):null,o.a.createElement(l.e,{mx:"auto"}),T?o.a.createElement(O.a,{href:T}):null):null,n.tableOfContents.items?o.a.createElement(l.e,{display:["block",null,"none"],mb:3},o.a.createElement(l.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(l.r,{icon:r.b,mr:2}):o.a.createElement(l.r,{icon:r.c,mr:2}),"Table of contents"),o.a.createElement(l.e,{pt:1},o.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(m.a,{editUrl:n.editUrl,contributors:n.contributors.concat(B.map((function(e){return{login:e}})))}))))))}},ja8W:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n("8o2o"),l=(n("q1tI"),n("7ljp")),r=n("O6H6"),i={},o={_frontmatter:i},c=r.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm search [-l|--long] [--json] [--parseable] [--no-description] [search terms ...]\n\naliases: s, se, find\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Search the registry for packages matching the search terms. ",Object(l.b)("inlineCode",{parentName:"p"},"npm search"),"\nperforms a linear, incremental, lexically-ordered search through package\nmetadata for all files in the registry. If color is enabled, it will further\nhighlight the matches in the results."),Object(l.b)("p",null,"Additionally, using the ",Object(l.b)("inlineCode",{parentName:"p"},"--searchopts")," and ",Object(l.b)("inlineCode",{parentName:"p"},"--searchexclude")," options paired with\nmore search terms will respectively include and exclude further patterns. The\nmain difference between ",Object(l.b)("inlineCode",{parentName:"p"},"--searchopts")," and the standard search terms is that the\nformer does not highlight results in the output and can be used for more\nfine-grained filtering. Additionally, both of these can be added to ",Object(l.b)("inlineCode",{parentName:"p"},".npmrc")," for\ndefault search filtering behavior."),Object(l.b)("p",null,"Search also allows targeting of maintainers in search results, by prefixing\ntheir npm username with ",Object(l.b)("inlineCode",{parentName:"p"},"="),"."),Object(l.b)("p",null,"If a term starts with ",Object(l.b)("inlineCode",{parentName:"p"},"/"),", then it's interpreted as a regular expression and\nsupports standard JavaScript RegExp syntax. A trailing ",Object(l.b)("inlineCode",{parentName:"p"},"/")," will be ignored in\nthis case. (Note that many regular expression characters must be escaped or\nquoted in most shells.)"),Object(l.b)("h3",null,"A Note on caching"),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,"description"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Used as ",Object(l.b)("inlineCode",{parentName:"p"},"--no-description"),", disables search matching in package descriptions and\nsuppresses display of that field in results."),Object(l.b)("h4",null,"json"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Output search results as a JSON array."),Object(l.b)("h4",null,"parseable"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Output search results as lines with tab-separated columns."),Object(l.b)("h4",null,"long"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Display full package descriptions and other long text across multiple\nlines. When disabled (default) search results are truncated to fit\nneatly on a single line. Modules with extremely long names will\nfall on multiple lines."),Object(l.b)("h4",null,"searchopts"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Default: ""'),Object(l.b)("li",{parentName:"ul"},"Type: String")),Object(l.b)("p",null,"Space-separated options that are always passed to search."),Object(l.b)("h4",null,"searchexclude"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Default: ""'),Object(l.b)("li",{parentName:"ul"},"Type: String")),Object(l.b)("p",null,"Space-separated options that limit the results from search."),Object(l.b)("h4",null,"searchstaleness"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: 900 (15 minutes)"),Object(l.b)("li",{parentName:"ul"},"Type: Number")),Object(l.b)("p",null,"The age of the cache, in seconds, before another registry request is made."),Object(l.b)("h4",null,"registry"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("a",Object.assign({parentName:"li"},{href:"https://registry.npmjs.org/"}),"https://registry.npmjs.org/")),Object(l.b)("li",{parentName:"ul"},"Type: url")),Object(l.b)("p",null,"Search the specified registry for modules. If you have configured npm to point\nto a different default registry, such as your internal private module\nrepository, ",Object(l.b)("inlineCode",{parentName:"p"},"npm search")," will default to that registry when searching. Pass a\ndifferent registry url such as the default above in order to override this\nsetting."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/using-npm/registry"}),"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-config"}),"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/configuring-npm/npmrc"}),"npmrc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object.assign({parentName:"li"},{href:"/cli/v6/commands/npm-view"}),"npm view"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-search-md-bccbf03618b4e0a624ef.js.map