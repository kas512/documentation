(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),o=n("aOgs"),l=n("q1tI"),r=n.n(l),c=n("7ljp"),p=n("pD55"),m=n("8Aig"),b=n("ReZb"),s=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var j=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=n("gnlW"),O=n("mwnC"),f=n("/Rw0"),g=n("dVM4"),y=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var C=N,k=n("MfeC");function x(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),o=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),o.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,l.variant.title),r.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},o)))}x.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=x,v=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),w=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,y=l.title,N=l.description,x=l.status,A=l.source,z=l.additionalContributors,M=void 0===z?[]:z,q=k.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:b.a,Note:s.a,Prompt:d,PromptReply:j,Screenshot:h.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:y,description:N}),r.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(v,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(w,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},y),N))),null!=q?r.a.createElement(I,null,r.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:q,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(C,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,x||A?r.a.createElement(i.k,{mb:3,alignItems:"center"},x?r.a.createElement(g.a,{status:x}):null,r.a.createElement(i.e,{mx:"auto"}),A?r.a.createElement(f.a,{href:A}):null):null,n.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.r,{icon:o.b,mr:2}):r.a.createElement(i.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(C,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},gwFA:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return b}));var a,i=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("O6H6"),r={},c=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={_frontmatter:r},m=l.a;function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(m,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can add a ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file to your package to make it easy for others to manage and install. Packages published to the registry must contain a ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file."),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"lists the packages your project depends on"),Object(o.b)("li",{parentName:"ul"},"specifies versions of a package that your project\ncan use using ",Object(o.b)("a",{parentName:"li",href:"about-semantic-versioning"},"semantic versioning rules")),Object(o.b)("li",{parentName:"ul"},"makes your build reproducible, and therefore easier\nto share with other developers")),Object(o.b)(c,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," To make your package easier to find on the npm website, we recommend including a custom ",Object(o.b)("inlineCode",{parentName:"p"},"description")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file.")),Object(o.b)("h2",null,Object(o.b)("inlineCode",{parentName:"h2"},"package.json")," fields"),Object(o.b)("h3",null,"Required ",Object(o.b)("inlineCode",{parentName:"h3"},"name")," and ",Object(o.b)("inlineCode",{parentName:"h3"},"version")," fields"),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file must contain ",Object(o.b)("inlineCode",{parentName:"p"},'"name"')," and ",Object(o.b)("inlineCode",{parentName:"p"},'"version"')," fields."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},'"name"')," field contains your package's name, and must be lowercase and one word, and may contain hyphens and underscores."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},'"version"')," field must be in the form ",Object(o.b)("inlineCode",{parentName:"p"},"x.x.x")," and follow the ",Object(o.b)("a",{parentName:"p",href:"about-semantic-versioning"},"semantic versioning guidelines"),"."),Object(o.b)("h3",null,"Author field"),Object(o.b)("p",null,"If you want to include package author information in ",Object(o.b)("inlineCode",{parentName:"p"},'"author"')," field, use the following format (email and website are both optional):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Your Name <email@example.com> (http://example.com)\n")),Object(o.b)("h3",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "name": "my-awesome-package",\n  "version": "1.0.0"\n}\n')),Object(o.b)("h2",null,"Creating a new ",Object(o.b)("inlineCode",{parentName:"h2"},"package.json")," file"),Object(o.b)("p",null,"You can create a ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file by running a CLI questionnaire or  creating a default ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file."),Object(o.b)("h3",null,"Running a CLI questionnaire"),Object(o.b)("p",null,"To create a ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file with values that you supply, use the ",Object(o.b)("inlineCode",{parentName:"p"},"npm init")," command."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the command line, navigate to the root directory of your package."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"cd /path/to/package\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the following command:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"npm init\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Answer the questions in the command line questionnaire."))),Object(o.b)("h4",null,"Customizing the ",Object(o.b)("inlineCode",{parentName:"h4"},"package.json")," questionnaire"),Object(o.b)("p",null,"If you expect to create many ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," files, you can customize the questions asked and fields created during the ",Object(o.b)("inlineCode",{parentName:"p"},"init")," process so all the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," files contain a standard set of information."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In your home directory, create a file called ",Object(o.b)("inlineCode",{parentName:"p"},".npm-init.js"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To add custom questions, using a text editor, add questions with the ",Object(o.b)("inlineCode",{parentName:"p"},"prompt")," function:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},'module.exports = prompt("what\'s your favorite flavor of ice cream, buddy?", "I LIKE THEM ALL");\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To add custom fields, using a text editor, add desired fields to the ",Object(o.b)("inlineCode",{parentName:"p"},".npm-init.js")," file:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"module.exports = {\n  customField: 'Example custom field',\n  otherCustomField: 'This example field is really cool'\n}\n")))),Object(o.b)("p",null,"To learn more about creating advanced ",Object(o.b)("inlineCode",{parentName:"p"},"npm init")," customizations, see the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/npm/init-package-json"},"init-package-json")," GitHub repository."),Object(o.b)("h3",null,"Creating a default ",Object(o.b)("inlineCode",{parentName:"h3"},"package.json")," file"),Object(o.b)("p",null,"To create a default ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," using information extracted from the current directory, use the ",Object(o.b)("inlineCode",{parentName:"p"},"npm init")," command with the ",Object(o.b)("inlineCode",{parentName:"p"},"--yes"),"\nor ",Object(o.b)("inlineCode",{parentName:"p"},"-y"),' flag. For a list of default values, see "',Object(o.b)("a",{parentName:"p",href:"#default-values-extracted-from-the-current-directory"},"Default values extracted from the current directory"),'".'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the command line, navigate to the root directory of your package."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"cd /path/to/package\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the following command:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"npm init --yes\n")))),Object(o.b)("h4",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'> npm init --yes\nWrote to /home/monatheoctocat/my_package/package.json:\n\n{\n  "name": "my_package",\n  "description": "",\n  "version": "1.0.0",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "repository": {\n    "type": "git",\n    "url": "https://github.com/monatheoctocat/my_package.git"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "bugs": {\n    "url": "https://github.com/monatheoctocat/my_package/issues"\n  },\n  "homepage": "https://github.com/monatheoctocat/my_package"\n}\n')),Object(o.b)("h4",null,"Default values extracted from the current directory"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name"),": the current directory name"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"version"),": always ",Object(o.b)("inlineCode",{parentName:"li"},"1.0.0")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"description"),": info from the README, or an empty string ",Object(o.b)("inlineCode",{parentName:"li"},'""')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"scripts"),": by default creates an empty ",Object(o.b)("inlineCode",{parentName:"li"},"test")," script"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"keywords"),": empty"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"author"),": empty"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"license"),": ",Object(o.b)("a",{parentName:"li",href:"https://opensource.org/licenses/ISC"},Object(o.b)("inlineCode",{parentName:"a"},"ISC"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"bugs"),": information from the current directory, if present"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"homepage"),": information from the current directory, if present")),Object(o.b)("h3",null,"Setting config options for the init command"),Object(o.b)("p",null,"You can set default config options for the init command. For example, to set the default author email, author name, and license, on the command line, run the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'> npm set init.author.email "example-user@example.com"\n> npm set init.author.name "example_user"\n> npm set init.license "MIT"\n')))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-contributing-packages-to-the-registry-creating-a-package-json-file-mdx-f9022608cfce725595a1.js.map