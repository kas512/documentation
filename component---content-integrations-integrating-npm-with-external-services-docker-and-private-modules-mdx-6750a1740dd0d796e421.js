(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{EeZl:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a,l=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("O6H6"),r={},c=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),p={_frontmatter:r},s=o.a;function m(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)(s,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To install private npm packages in a Docker container, you will need to use Docker's build-time variables."),Object(i.b)("h2",null,"Background: runtime variables"),Object(i.b)("p",null,"You cannot install private npm packages in a Docker container using only runtime variables.  Consider the following Dockerfile:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"FROM risingstack/alpine:3.3-v4.3.1-3.0.1\n\nCOPY package.json package.json  \nRUN npm install\n\n# Add your source files\nCOPY . .  \nCMD npm start  \n")),Object(i.b)("p",null,"Which will use the RisingStack ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://hub.docker.com/r/risingstack/alpine/"}),"Alpine Node.JS Docker image"),", copy the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," into our container, installs dependencies, copies the source files and runs the start command as specified in the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("p",null,"In order to install private packages, you may think that we could just add a line before we run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),", using the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder/#env"}),"ENV parameter"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"ENV NPM_TOKEN=00000000-0000-0000-0000-000000000000\n")),Object(i.b)("p",null,"However, this doesn't work as you would expect, because you want the npm install to occur when you run ",Object(i.b)("inlineCode",{parentName:"p"},"docker build"),", and in this instance, ",Object(i.b)("inlineCode",{parentName:"p"},"ENV")," variables aren't used, they are set for runtime only."),Object(i.b)("p",null,"Instead of run-time variables, you must use a different way of passing environment variables to Docker, available since Docker 1.9: the ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder/#arg"}),"ARG parameter"),"."),Object(i.b)("h2",null,"Create and check in a project-specific .npmrc file"),Object(i.b)("p",null,"A complete example that will allow you to use ",Object(i.b)("inlineCode",{parentName:"p"},"--build-arg")," to pass in your NPM_TOKEN requires adding a ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file to the project."),Object(i.b)("p",null,"Use a project-specific ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file with a variable for your token to securely authenticate your Docker image with npm."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the root directory of your project, create a custom ",Object(i.b)("a",{href:"https://docs.npmjs.com/cli-documentation/files/npmrc"},Object(i.b)("inlineCode",{parentName:"p"},".npmrc"))," file with the following contents:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{}),"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Note:")," that you are specifying a literal value of ",Object(i.b)("inlineCode",{parentName:"p"},"${NPM_TOKEN}"),".  The npm cli will replace this value with the contents of the ",Object(i.b)("inlineCode",{parentName:"p"},"NPM_TOKEN")," environment variable.  Do ",Object(i.b)("strong",{parentName:"p"},"not")," put a token in this file.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check in the ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file."))),Object(i.b)("h2",null,"Update the Dockerfile"),Object(i.b)("p",null,"The Dockerfile that takes advantage of this has a few more lines in it than the earlier example that allows us to use the ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file and the ",Object(i.b)("inlineCode",{parentName:"p"},"ARG")," parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"FROM risingstack/alpine:3.3-v4.3.1-3.0.1\n\nARG NPM_TOKEN  \nCOPY .npmrc .npmrc  \nCOPY package.json package.json  \nRUN npm install  \nRUN rm -f .npmrc\n\n# Add your source files\nCOPY . .  \nCMD npm start\n")),Object(i.b)("p",null,"This adds the expected ",Object(i.b)("inlineCode",{parentName:"p"},"ARG NPM_TOKEN"),", but also copies the ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file, and removes it when ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," completes."),Object(i.b)("h2",null,"Build the Docker image"),Object(i.b)("p",null,"To build the image using the above Dockerfile and the npm authentication token, you can run the following command. Note the ",Object(i.b)("inlineCode",{parentName:"p"},".")," at the end to give ",Object(i.b)("inlineCode",{parentName:"p"},"docker build")," the current directory as an argument."),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{}),"docker build --build-arg NPM_TOKEN=${NPM_TOKEN} .\n")),Object(i.b)("p",null,"This will build the Docker image with the current ",Object(i.b)("inlineCode",{parentName:"p"},"NPM_TOKEN")," environment variable, so you can run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," inside your container as the current logged-in user."),Object(i.b)(c,{mdxType:"Note"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Even if you delete the ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file, it will be kept in the commit history. To clean your secrets entirely, make sure to squash them.")))}m.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),m=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),O=n("mwnC"),g=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var k=N,E=n("MfeC");function v(e){var t=E.a.getPath(e.location.pathname),n=E.a.getVariantAndPage(e.root,t);if(!n)return null;var a=E.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},i)))}v.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=v,w=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),D=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),M=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,y=o.title,N=o.description,v=o.status,P=o.source,I=o.additionalContributors,R=void 0===I?[]:I,A=E.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:y,description:N}),r.a.createElement(s.b,{location:a}),r.a.createElement(w,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),N))),null!=A?r.a.createElement(T,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?r.a.createElement(D,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:n.tableOfContents.items})):null,r.a.createElement(M,null,v||P?r.a.createElement(l.k,{mb:3,alignItems:"center"},v?r.a.createElement(j.a,{status:v}):null,r.a.createElement(l.e,{mx:"auto"}),P?r.a.createElement(g.a,{href:P}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editUrl:n.editUrl,contributors:n.contributors.concat(R.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-integrations-integrating-npm-with-external-services-docker-and-private-modules-mdx-6750a1740dd0d796e421.js.map