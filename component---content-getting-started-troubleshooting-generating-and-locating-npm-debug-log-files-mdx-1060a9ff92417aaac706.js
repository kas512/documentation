(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{IbNj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return d}));var a,o=n("8o2o"),l=n("q1tI"),r=n("7ljp"),i=n("O6H6"),c=n("4LHR"),m={},p=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),u={_frontmatter:m},s=i.a;function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(s,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When a package fails to install or publish, the npm CLI will generate an ",Object(r.b)("inlineCode",{parentName:"p"},"npm-debug.log")," file. This log file can help you (and ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/support"},"npm Support"),") figure out what went wrong."),Object(r.b)("p",null,"If you need to generate a ",Object(r.b)("inlineCode",{parentName:"p"},"npm-debug.log")," file, you can run one of these commands."),Object(r.b)("p",null,"For installing packages:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"npm install --timing\n")),Object(r.b)("p",null,"For publishing packages:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"npm publish --timing\n")),Object(r.b)("p",null,"You can find the ",Object(r.b)("inlineCode",{parentName:"p"},"npm-debug.log")," file in your ",Object(r.b)("inlineCode",{parentName:"p"},".npm")," directory. To find your ",Object(r.b)("inlineCode",{parentName:"p"},".npm")," directory, use ",Object(r.b)("inlineCode",{parentName:"p"},"npm config get cache"),"."),Object(r.b)("p",null,"If you use a CI environment, your logs are likely located elsewhere. For example, in Travis CI, you can find them in the ",Object(r.b)("inlineCode",{parentName:"p"},"/home/travis/build")," directory."),Object(r.b)(p,{mdxType:"Note"},Object(r.b)(l.Fragment,null,Object(r.b)("strong",null,"npm Enterprise users:")," If you need to ",c.a["contact-enterprise-support"].text,", we recommend attaching the entire contents of the `npm-debug.log` file or copying the contents into the body of the message, so that we can more easily diagnose the problem.")))}d.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),p=n("8Aig"),u=n("ReZb"),s=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return i.a.createElement("strong",null,t)},g=n("gnlW"),h=n("mwnC"),y=n("/Rw0"),E=n("dVM4"),O=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return i.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var j=w,v=n("MfeC");function x(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,r.variant.title),i.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},l)))}x.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=x,k=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),N=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),M=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,O=r.title,w=r.description,x=r.status,T=r.source,W=r.additionalContributors,z=void 0===W?[]:W,F=v.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:u.a,Note:s.a,Prompt:b,PromptReply:f,Screenshot:g.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:O,description:w}),i.a.createElement(p.b,{location:a}),i.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(h.a,{location:a})),i.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(I,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},O),w))),null!=F?i.a.createElement(N,null,i.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:F,location:a})):null),n.tableOfContents.items?i.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(j,{items:n.tableOfContents.items})):null,i.a.createElement(M,null,x||T?i.a.createElement(o.k,{mb:3,alignItems:"center"},x?i.a.createElement(E.a,{status:x}):null,i.a.createElement(o.e,{mx:"auto"}),T?i.a.createElement(y.a,{href:T}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:l.b,mr:2}):i.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(j,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(d.a,{editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-getting-started-troubleshooting-generating-and-locating-npm-debug-log-files-mdx-1060a9ff92417aaac706.js.map