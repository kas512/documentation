(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{EeZl:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a,l=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("O6H6"),r={},c=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={_frontmatter:r},s=i.a;function m(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)(s,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To install private npm packages in a Docker container, you will need to use Docker's build-time variables."),Object(o.b)("h2",null,"Background: runtime variables"),Object(o.b)("p",null,"You cannot install private npm packages in a Docker container using only runtime variables.  Consider the following Dockerfile:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"FROM risingstack/alpine:3.3-v4.3.1-3.0.1\n\nCOPY package.json package.json  \nRUN npm install\n\n# Add your source files\nCOPY . .  \nCMD npm start  \n")),Object(o.b)("p",null,"Which will use the RisingStack ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://hub.docker.com/r/risingstack/alpine/"}),"Alpine Node.JS Docker image"),", copy the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," into our container, installs dependencies, copies the source files and runs the start command as specified in the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(o.b)("p",null,"In order to install private packages, you may think that we could just add a line before we run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install"),", using the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder/#env"}),"ENV parameter"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"ENV NPM_TOKEN=00000000-0000-0000-0000-000000000000\n")),Object(o.b)("p",null,"However, this doesn't work as you would expect, because you want the npm install to occur when you run ",Object(o.b)("inlineCode",{parentName:"p"},"docker build"),", and in this instance, ",Object(o.b)("inlineCode",{parentName:"p"},"ENV")," variables aren't used, they are set for runtime only."),Object(o.b)("p",null,"Instead of run-time variables, you must use a different way of passing environment variables to Docker, available since Docker 1.9: the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder/#arg"}),"ARG parameter"),"."),Object(o.b)("h2",null,"Create and check in a project-specific .npmrc file"),Object(o.b)("p",null,"A complete example that will allow you to use ",Object(o.b)("inlineCode",{parentName:"p"},"--build-arg")," to pass in your NPM_TOKEN requires adding a ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file to the project."),Object(o.b)("p",null,"Use a project-specific ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file with a variable for your token to securely authenticate your Docker image with npm."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the root directory of your project, create a custom ",Object(o.b)("a",{href:"https://docs.npmjs.com/cli-documentation/files/npmrc"},Object(o.b)("inlineCode",{parentName:"p"},".npmrc"))," file with the following contents:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object.assign({parentName:"pre"},{}),"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check in the ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file."))),Object(o.b)("h2",null,"Update the Dockerfile"),Object(o.b)("p",null,"The Dockerfile that takes advantage of this has a few more lines in it than the earlier example that allows us to use the ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file and the ",Object(o.b)("inlineCode",{parentName:"p"},"ARG")," parameter:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"FROM risingstack/alpine:3.3-v4.3.1-3.0.1\n\nARG NPM_TOKEN  \nCOPY .npmrc .npmrc  \nCOPY package.json package.json  \nRUN npm install  \nRUN rm -f .npmrc\n\n# Add your source files\nCOPY . .  \nCMD npm start\n")),Object(o.b)("p",null,"This adds the expected ",Object(o.b)("inlineCode",{parentName:"p"},"ARG NPM_TOKEN"),", but also copies the ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file, and removes it when ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," completes."),Object(o.b)("h2",null,"Build the Docker image"),Object(o.b)("p",null,"To build the image using the above Dockerfile and the npm authentication token, you can run the following command. Note the ",Object(o.b)("inlineCode",{parentName:"p"},".")," at the end to give ",Object(o.b)("inlineCode",{parentName:"p"},"docker build")," the current directory as an argument."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"docker build --build-arg NPM_TOKEN=${NPM_TOKEN} .\n")),Object(o.b)("p",null,"This will build the Docker image with the current ",Object(o.b)("inlineCode",{parentName:"p"},"NPM_TOKEN")," environment variable, so you can run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," inside your container as the current logged-in user."),Object(o.b)(c,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Even if you delete the ",Object(o.b)("inlineCode",{parentName:"p"},".npmrc")," file, it will be kept in the commit history. To clean your secrets entirely, make sure to squash them.")))}m.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),m=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),O=n("mwnC"),g=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var k=N,E=n("MfeC");function v(e){var t=E.a.getPath(e.location.pathname),n=E.a.getVariantAndPage(e.root,t);if(!n)return null;var a=E.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},o)))}v.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=v,w=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),D=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),M=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),P=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,y=i.title,N=i.description,v=i.status,T=i.source,I=i.additionalContributors,R=void 0===I?[]:I,A=E.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:y,description:N}),r.a.createElement(s.b,{location:a}),r.a.createElement(w,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=A?r.a.createElement(D,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?r.a.createElement(M,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:n.tableOfContents.items})):null,r.a.createElement(P,null,v||T?r.a.createElement(l.k,{mb:3,alignItems:"center"},v?r.a.createElement(j.a,{status:v}):null,r.a.createElement(l.e,{mx:"auto"}),T?r.a.createElement(g.a,{href:T}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(R.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-integrations-integrating-npm-with-external-services-docker-and-private-modules-mdx-be20dd9ecfb534c19968.js.map