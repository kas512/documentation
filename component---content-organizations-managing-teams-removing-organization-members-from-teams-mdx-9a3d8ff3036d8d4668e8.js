(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{"2YMs":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return d}));var a=n("zLVn"),o=n("q1tI"),r=n("7ljp"),l=n("O6H6"),i=n("4LHR"),m={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=c("Screenshot"),u=c("Note"),b={_frontmatter:m},p=l.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(p,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As an organization owner or team admin, you can remove organization members from teams if they no longer need access to packages accessible to the team."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,i.a["user-login"].text),Object(r.b)(o.Fragment,null,i.a["user-login"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,i.a["profile-settings"].text),Object(r.b)(o.Fragment,null,i.a["profile-settings"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,i.a["organization-selection"].text),Object(r.b)(o.Fragment,null,i.a["organization-selection"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,i.a["organization-teams-tab"].text),Object(r.b)(o.Fragment,null,i.a["organization-teams-tab"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the list of team members, find the member you want to remove.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the member row, to remove the member from the team, click ",Object(r.b)("strong",{parentName:"p"},"X"),"."),Object(r.b)(s,{src:"/organizations/managing-teams/team-member-remove-button.png",alt:"Screenshot of the team member remove button",mdxType:"Screenshot"}))),Object(r.b)(u,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note: Removing a member from a team, even if it is the only team they are a member of, will not remove them from the organization."),' To remove a member from the organization, see "',Object(r.b)("a",{parentName:"p",href:"removing-members-from-your-organization"},"Removing members from your organization"),'".')))}d.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),l=n("q1tI"),i=n.n(l),m=n("7ljp"),c=n("pD55"),s=n("8Aig"),u=n("ReZb"),b=n("GCVy"),p=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),h=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),E=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return i.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var x=v,j=n("MfeC");function w(e){var t=j.a.getPath(e.location.pathname),n=j.a.getVariantAndPage(e.root,t);if(!n)return null;var a=j.a.getVariantsForPage(e.root,n.page),r=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),r.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,l.variant.title),i.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},r)))}w.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=w,_=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),N=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),z=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,E=l.title,v=l.description,w=l.status,F=l.source,H=l.additionalContributors,M=void 0===H?[]:H,P=j.a.getVariantRoot(a.pathname);return i.a.createElement(m.a,{components:{Index:u.a,Note:b.a,Prompt:d,PromptReply:g,Screenshot:f.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:E,description:v}),i.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(h.a,{editOnGitHub:n.themeOptions.editOnGitHub,pathPrefix:n.themeOptions.pathPrefix,location:a})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(N,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},E),v))),null!=P?i.a.createElement(z,null,i.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),n.tableOfContents.items?i.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(x,{items:n.tableOfContents.items})):null,i.a.createElement(S,null,w||F?i.a.createElement(o.k,{mb:3,alignItems:"center"},w?i.a.createElement(O.a,{status:w}):null,i.a.createElement(o.e,{mx:"auto"}),F?i.a.createElement(y.a,{href:F}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:r.b,mr:2}):i.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(x,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(p.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-organizations-managing-teams-removing-organization-members-from-teams-mdx-9a3d8ff3036d8d4668e8.js.map