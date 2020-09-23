(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{MQ8W:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t("8o2o"),i=(t("q1tI"),t("7ljp")),r=t("O6H6"),l={},o={_frontmatter:l},b=r.a;function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(b,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Install"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save semver\n")),Object(i.b)("h2",null,"Usage"),Object(i.b)("p",null,"As a node module:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const semver = require('semver')\n\nsemver.valid('1.2.3') // '1.2.3'\nsemver.valid('a.b.c') // null\nsemver.clean('  =v1.2.3   ') // '1.2.3'\nsemver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3') // true\nsemver.gt('1.2.3', '9.8.7') // false\nsemver.lt('1.2.3', '9.8.7') // true\nsemver.minVersion('>=1.0.0') // '1.0.0'\nsemver.valid(semver.coerce('v2')) // '2.0.0'\nsemver.valid(semver.coerce('42.6.7.9.3-alpha')) // '42.6.7'\n")),Object(i.b)("p",null,"As a command-line utility:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ semver -h\n\nA JavaScript implementation of the https://semver.org/ specification\nCopyright Isaac Z. Schlueter\n\nUsage: semver [options] <version> [<version> [...]]\nPrints valid versions sorted by SemVer precedence\n\nOptions:\n-r --range <range>\n        Print versions that match the specified range.\n\n-i --increment [<level>]\n        Increment a version by the specified level.  Level can\n        be one of: major, minor, patch, premajor, preminor,\n        prepatch, or prerelease.  Default level is 'patch'.\n        Only one version may be specified.\n\n--preid <identifier>\n        Identifier to be used to prefix premajor, preminor,\n        prepatch or prerelease version increments.\n\n-l --loose\n        Interpret versions and ranges loosely\n\n-p --include-prerelease\n        Always include prerelease versions in range matching\n\n-c --coerce\n        Coerce a string into SemVer if possible\n        (does not imply --loose)\n\nProgram exits successfully if any valid version satisfies\nall supplied ranges, and prints all satisfying versions.\n\nIf no satisfying versions are found, then exits failure.\n\nVersions are printed in ascending order, so supplying\nmultiple versions to the utility will just sort them.\n")),Object(i.b)("h2",null,"Versions"),Object(i.b)("p",null,'A "version" is described by the ',Object(i.b)("inlineCode",{parentName:"p"},"v2.0.0")," specification found at\n",Object(i.b)("a",{parentName:"p",href:"https://semver.org/"},"https://semver.org/"),"."),Object(i.b)("p",null,"A leading ",Object(i.b)("inlineCode",{parentName:"p"},'"="')," or ",Object(i.b)("inlineCode",{parentName:"p"},'"v"')," character is stripped off and ignored."),Object(i.b)("h2",null,"Ranges"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"version range")," is a set of ",Object(i.b)("inlineCode",{parentName:"p"},"comparators")," which specify versions\nthat satisfy the range."),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"comparator")," is composed of an ",Object(i.b)("inlineCode",{parentName:"p"},"operator")," and a ",Object(i.b)("inlineCode",{parentName:"p"},"version"),".  The set\nof primitive ",Object(i.b)("inlineCode",{parentName:"p"},"operators")," is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<")," Less than"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<=")," Less than or equal to"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},">")," Greater than"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},">=")," Greater than or equal to"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"=")," Equal.  If no operator is specified, then equality is assumed,\nso this operator is optional, but MAY be included.")),Object(i.b)("p",null,"For example, the comparator ",Object(i.b)("inlineCode",{parentName:"p"},">=1.2.7")," would match the versions\n",Object(i.b)("inlineCode",{parentName:"p"},"1.2.7"),", ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.8"),", ",Object(i.b)("inlineCode",{parentName:"p"},"2.5.3"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"1.3.9"),", but not the versions ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.6"),"\nor ",Object(i.b)("inlineCode",{parentName:"p"},"1.1.0"),"."),Object(i.b)("p",null,"Comparators can be joined by whitespace to form a ",Object(i.b)("inlineCode",{parentName:"p"},"comparator set"),",\nwhich is satisfied by the ",Object(i.b)("strong",{parentName:"p"},"intersection")," of all of the comparators\nit includes."),Object(i.b)("p",null,"A range is composed of one or more comparator sets, joined by ",Object(i.b)("inlineCode",{parentName:"p"},"||"),".  A\nversion matches a range if and only if every comparator in at least\none of the ",Object(i.b)("inlineCode",{parentName:"p"},"||"),"-separated comparator sets is satisfied by the version."),Object(i.b)("p",null,"For example, the range ",Object(i.b)("inlineCode",{parentName:"p"},">=1.2.7 <1.3.0")," would match the versions\n",Object(i.b)("inlineCode",{parentName:"p"},"1.2.7"),", ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.8"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.99"),", but not the versions ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.6"),", ",Object(i.b)("inlineCode",{parentName:"p"},"1.3.0"),",\nor ",Object(i.b)("inlineCode",{parentName:"p"},"1.1.0"),"."),Object(i.b)("p",null,"The range ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.7 || >=1.2.9 <2.0.0")," would match the versions ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.7"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"1.2.9"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"1.4.6"),", but not the versions ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.8")," or ",Object(i.b)("inlineCode",{parentName:"p"},"2.0.0"),"."),Object(i.b)("h3",null,"Prerelease Tags"),Object(i.b)("p",null,"If a version has a prerelease tag (for example, ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.3-alpha.3"),") then\nit will only be allowed to satisfy comparator sets if at least one\ncomparator with the same ",Object(i.b)("inlineCode",{parentName:"p"},"[major, minor, patch]")," tuple also has a\nprerelease tag."),Object(i.b)("p",null,"For example, the range ",Object(i.b)("inlineCode",{parentName:"p"},">1.2.3-alpha.3")," would be allowed to match the\nversion ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.3-alpha.7"),", but it would ",Object(i.b)("em",{parentName:"p"},"not")," be satisfied by\n",Object(i.b)("inlineCode",{parentName:"p"},"3.4.5-alpha.9"),", even though ",Object(i.b)("inlineCode",{parentName:"p"},"3.4.5-alpha.9"),' is technically "greater\nthan" ',Object(i.b)("inlineCode",{parentName:"p"},"1.2.3-alpha.3")," according to the SemVer sort rules.  The version\nrange only accepts prerelease tags on the ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.3")," version.  The\nversion ",Object(i.b)("inlineCode",{parentName:"p"},"3.4.5")," ",Object(i.b)("em",{parentName:"p"},"would")," satisfy the range, because it does not have a\nprerelease flag, and ",Object(i.b)("inlineCode",{parentName:"p"},"3.4.5")," is greater than ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.3-alpha.7"),"."),Object(i.b)("p",null,"The purpose for this behavior is twofold.  First, prerelease versions\nfrequently are updated very quickly, and contain many breaking changes\nthat are (by the author's design) not yet fit for public consumption.\nTherefore, by default, they are excluded from range matching\nsemantics."),Object(i.b)("p",null,"Second, a user who has opted into using a prerelease version has\nclearly indicated the intent to use ",Object(i.b)("em",{parentName:"p"},"that specific")," set of\nalpha/beta/rc versions.  By including a prerelease tag in the range,\nthe user is indicating that they are aware of the risk.  However, it\nis still not appropriate to assume that they have opted into taking a\nsimilar risk on the ",Object(i.b)("em",{parentName:"p"},"next")," set of prerelease versions."),Object(i.b)("p",null,"Note that this behavior can be suppressed (treating all prerelease\nversions as if they were normal versions, for the purpose of range\nmatching) by setting the ",Object(i.b)("inlineCode",{parentName:"p"},"includePrerelease")," flag on the options\nobject to any\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/npm/node-semver#functions"},"functions")," that do\nrange matching."),Object(i.b)("h4",null,"Prerelease Identifiers"),Object(i.b)("p",null,"The method ",Object(i.b)("inlineCode",{parentName:"p"},".inc")," takes an additional ",Object(i.b)("inlineCode",{parentName:"p"},"identifier")," string argument that\nwill append the value of the string as a prerelease identifier:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"semver.inc('1.2.3', 'prerelease', 'beta')\n// '1.2.4-beta.0'\n")),Object(i.b)("p",null,"command-line example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ semver 1.2.3 -i prerelease --preid beta\n1.2.4-beta.0\n")),Object(i.b)("p",null,"Which then can be used to increment further:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ semver 1.2.4-beta.0 -i prerelease\n1.2.4-beta.1\n")),Object(i.b)("h3",null,"Advanced Range Syntax"),Object(i.b)("p",null,"Advanced range syntax desugars to primitive comparators in\ndeterministic ways."),Object(i.b)("p",null,"Advanced ranges may be combined in the same way as primitive\ncomparators using white space or ",Object(i.b)("inlineCode",{parentName:"p"},"||"),"."),Object(i.b)("h4",null,"Hyphen Ranges ",Object(i.b)("inlineCode",{parentName:"h4"},"X.Y.Z - A.B.C")),Object(i.b)("p",null,"Specifies an inclusive set."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1.2.3 - 2.3.4")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.3 <=2.3.4"))),Object(i.b)("p",null,"If a partial version is provided as the first version in the inclusive\nrange, then the missing pieces are replaced with zeroes."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1.2 - 2.3.4")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.0 <=2.3.4"))),Object(i.b)("p",null,"If a partial version is provided as the second version in the\ninclusive range, then all versions that start with the supplied parts\nof the tuple are accepted, but nothing that would be greater than the\nprovided tuple parts."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1.2.3 - 2.3")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.3 <2.4.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1.2.3 - 2")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.3 <3.0.0"))),Object(i.b)("h4",null,"X-Ranges ",Object(i.b)("inlineCode",{parentName:"h4"},"1.2.x")," ",Object(i.b)("inlineCode",{parentName:"h4"},"1.X")," ",Object(i.b)("inlineCode",{parentName:"h4"},"1.2.*")," ",Object(i.b)("inlineCode",{parentName:"h4"},"*")),Object(i.b)("p",null,"Any of ",Object(i.b)("inlineCode",{parentName:"p"},"X"),", ",Object(i.b)("inlineCode",{parentName:"p"},"x"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"*"),' may be used to "stand in" for one of the\nnumeric values in the ',Object(i.b)("inlineCode",{parentName:"p"},"[major, minor, patch]")," tuple."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"*")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.0.0")," (Any version satisfies)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1.x")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.0.0 <2.0.0")," (Matching major version)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1.2.x")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.0 <1.3.0")," (Matching major and minor versions)")),Object(i.b)("p",null,"A partial version range is treated as an X-Range, so the special\ncharacter is in fact optional."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'""')," (empty string) := ",Object(i.b)("inlineCode",{parentName:"li"},"*")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1")," := ",Object(i.b)("inlineCode",{parentName:"li"},"1.x.x")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.0.0 <2.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1.2")," := ",Object(i.b)("inlineCode",{parentName:"li"},"1.2.x")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.0 <1.3.0"))),Object(i.b)("h4",null,"Tilde Ranges ",Object(i.b)("inlineCode",{parentName:"h4"},"~1.2.3")," ",Object(i.b)("inlineCode",{parentName:"h4"},"~1.2")," ",Object(i.b)("inlineCode",{parentName:"h4"},"~1")),Object(i.b)("p",null,"Allows patch-level changes if a minor version is specified on the\ncomparator.  Allows minor-level changes if not."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~1.2.3")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.3 <1.(2+1).0")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.3 <1.3.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~1.2")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.0 <1.(2+1).0")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.0 <1.3.0")," (Same as ",Object(i.b)("inlineCode",{parentName:"li"},"1.2.x"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~1")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.0.0 <(1+1).0.0")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.0.0 <2.0.0")," (Same as ",Object(i.b)("inlineCode",{parentName:"li"},"1.x"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~0.2.3")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.2.3 <0.(2+1).0")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.2.3 <0.3.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~0.2")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.2.0 <0.(2+1).0")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.2.0 <0.3.0")," (Same as ",Object(i.b)("inlineCode",{parentName:"li"},"0.2.x"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~0")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.0.0 <(0+1).0.0")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.0.0 <1.0.0")," (Same as ",Object(i.b)("inlineCode",{parentName:"li"},"0.x"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~1.2.3-beta.2")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.3-beta.2 <1.3.0")," Note that prereleases in\nthe ",Object(i.b)("inlineCode",{parentName:"li"},"1.2.3")," version will be allowed, if they are greater than or\nequal to ",Object(i.b)("inlineCode",{parentName:"li"},"beta.2"),".  So, ",Object(i.b)("inlineCode",{parentName:"li"},"1.2.3-beta.4")," would be allowed, but\n",Object(i.b)("inlineCode",{parentName:"li"},"1.2.4-beta.2")," would not, because it is a prerelease of a\ndifferent ",Object(i.b)("inlineCode",{parentName:"li"},"[major, minor, patch]")," tuple.")),Object(i.b)("h4",null,"Caret Ranges ",Object(i.b)("inlineCode",{parentName:"h4"},"^1.2.3")," ",Object(i.b)("inlineCode",{parentName:"h4"},"^0.2.5")," ",Object(i.b)("inlineCode",{parentName:"h4"},"^0.0.4")),Object(i.b)("p",null,"Allows changes that do not modify the left-most non-zero digit in the\n",Object(i.b)("inlineCode",{parentName:"p"},"[major, minor, patch]")," tuple.  In other words, this allows patch and\nminor updates for versions ",Object(i.b)("inlineCode",{parentName:"p"},"1.0.0")," and above, patch updates for\nversions ",Object(i.b)("inlineCode",{parentName:"p"},"0.X >=0.1.0"),", and ",Object(i.b)("em",{parentName:"p"},"no")," updates for versions ",Object(i.b)("inlineCode",{parentName:"p"},"0.0.X"),"."),Object(i.b)("p",null,"Many authors treat a ",Object(i.b)("inlineCode",{parentName:"p"},"0.x")," version as if the ",Object(i.b)("inlineCode",{parentName:"p"},"x"),' were the major\n"breaking-change" indicator.'),Object(i.b)("p",null,"Caret ranges are ideal when an author may make breaking changes\nbetween ",Object(i.b)("inlineCode",{parentName:"p"},"0.2.4")," and ",Object(i.b)("inlineCode",{parentName:"p"},"0.3.0")," releases, which is a common practice.\nHowever, it presumes that there will ",Object(i.b)("em",{parentName:"p"},"not")," be breaking changes between\n",Object(i.b)("inlineCode",{parentName:"p"},"0.2.4")," and ",Object(i.b)("inlineCode",{parentName:"p"},"0.2.5"),".  It allows for changes that are presumed to be\nadditive (but non-breaking), according to commonly observed practices."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"^1.2.3")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.3 <2.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"^0.2.3")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.2.3 <0.3.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"^0.0.3")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.0.3 <0.0.4")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"^1.2.3-beta.2")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.3-beta.2 <2.0.0")," Note that prereleases in\nthe ",Object(i.b)("inlineCode",{parentName:"li"},"1.2.3")," version will be allowed, if they are greater than or\nequal to ",Object(i.b)("inlineCode",{parentName:"li"},"beta.2"),".  So, ",Object(i.b)("inlineCode",{parentName:"li"},"1.2.3-beta.4")," would be allowed, but\n",Object(i.b)("inlineCode",{parentName:"li"},"1.2.4-beta.2")," would not, because it is a prerelease of a\ndifferent ",Object(i.b)("inlineCode",{parentName:"li"},"[major, minor, patch]")," tuple."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"^0.0.3-beta")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.0.3-beta <0.0.4"),"  Note that prereleases in the\n",Object(i.b)("inlineCode",{parentName:"li"},"0.0.3")," version ",Object(i.b)("em",{parentName:"li"},"only")," will be allowed, if they are greater than or\nequal to ",Object(i.b)("inlineCode",{parentName:"li"},"beta"),".  So, ",Object(i.b)("inlineCode",{parentName:"li"},"0.0.3-pr.2")," would be allowed.")),Object(i.b)("p",null,"When parsing caret ranges, a missing ",Object(i.b)("inlineCode",{parentName:"p"},"patch")," value desugars to the\nnumber ",Object(i.b)("inlineCode",{parentName:"p"},"0"),", but will allow flexibility within that value, even if the\nmajor and minor versions are both ",Object(i.b)("inlineCode",{parentName:"p"},"0"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"^1.2.x")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.2.0 <2.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"^0.0.x")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.0.0 <0.1.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"^0.0")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.0.0 <0.1.0"))),Object(i.b)("p",null,"A missing ",Object(i.b)("inlineCode",{parentName:"p"},"minor")," and ",Object(i.b)("inlineCode",{parentName:"p"},"patch")," values will desugar to zero, but also\nallow flexibility within those values, even if the major version is\nzero."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"^1.x")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=1.0.0 <2.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"^0.x")," := ",Object(i.b)("inlineCode",{parentName:"li"},">=0.0.0 <1.0.0"))),Object(i.b)("h3",null,"Range Grammar"),Object(i.b)("p",null,"Putting all this together, here is a Backus-Naur grammar for ranges,\nfor the benefit of parser authors:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bnf"},"range-set  ::= range ( logical-or range ) *\nlogical-or ::= ( ' ' ) * '||' ( ' ' ) *\nrange      ::= hyphen | simple ( ' ' simple ) * | ''\nhyphen     ::= partial ' - ' partial\nsimple     ::= primitive | partial | tilde | caret\nprimitive  ::= ( '<' | '>' | '>=' | '<=' | '=' ) partial\npartial    ::= xr ( '.' xr ( '.' xr qualifier ? )? )?\nxr         ::= 'x' | 'X' | '*' | nr\nnr         ::= '0' | ['1'-'9'] ( ['0'-'9'] ) *\ntilde      ::= '~' partial\ncaret      ::= '^' partial\nqualifier  ::= ( '-' pre )? ( '+' build )?\npre        ::= parts\nbuild      ::= parts\nparts      ::= part ( '.' part ) *\npart       ::= nr | [-0-9A-Za-z]+\n")),Object(i.b)("h2",null,"Functions"),Object(i.b)("p",null,"All methods and classes take a final ",Object(i.b)("inlineCode",{parentName:"p"},"options")," object argument.  All\noptions in this object are ",Object(i.b)("inlineCode",{parentName:"p"},"false")," by default.  The options supported\nare:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"loose"),"  Be more forgiving about not-quite-valid semver strings.\n(Any resulting output will always be 100% strict compliant, of\ncourse.)  For backwards compatibility reasons, if the ",Object(i.b)("inlineCode",{parentName:"li"},"options"),"\nargument is a boolean value instead of an object, it is interpreted\nto be the ",Object(i.b)("inlineCode",{parentName:"li"},"loose")," param."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"includePrerelease"),"  Set to suppress the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/npm/node-semver#prerelease-tags"},"default\nbehavior")," of\nexcluding prerelease tagged versions from ranges unless they are\nexplicitly opted into.")),Object(i.b)("p",null,"Strict-mode Comparators and Ranges will be strict about the SemVer\nstrings that they parse."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"valid(v)"),": Return the parsed version, or null if it's not valid."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inc(v, release)"),": Return the version incremented by the release\ntype (",Object(i.b)("inlineCode",{parentName:"li"},"major"),",   ",Object(i.b)("inlineCode",{parentName:"li"},"premajor"),", ",Object(i.b)("inlineCode",{parentName:"li"},"minor"),", ",Object(i.b)("inlineCode",{parentName:"li"},"preminor"),", ",Object(i.b)("inlineCode",{parentName:"li"},"patch"),",\n",Object(i.b)("inlineCode",{parentName:"li"},"prepatch"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"prerelease"),"), or null if it's not valid",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"premajor")," in one call will bump the version up to the next major\nversion and down to a prerelease of that major version.\n",Object(i.b)("inlineCode",{parentName:"li"},"preminor"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"prepatch")," work the same way."),Object(i.b)("li",{parentName:"ul"},"If called from a non-prerelease version, the ",Object(i.b)("inlineCode",{parentName:"li"},"prerelease")," will work the\nsame as ",Object(i.b)("inlineCode",{parentName:"li"},"prepatch"),". It increments the patch version, then makes a\nprerelease. If the input version is already a prerelease it simply\nincrements it."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prerelease(v)"),": Returns an array of prerelease components, or null\nif none exist. Example: ",Object(i.b)("inlineCode",{parentName:"li"},"prerelease('1.2.3-alpha.1') -> ['alpha', 1]")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"major(v)"),": Return the major version number."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"minor(v)"),": Return the minor version number."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"patch(v)"),": Return the patch version number."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"intersects(r1, r2, loose)"),": Return true if the two supplied ranges\nor comparators intersect."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"parse(v)"),": Attempt to parse a string as a semantic version, returning either\na ",Object(i.b)("inlineCode",{parentName:"li"},"SemVer")," object or ",Object(i.b)("inlineCode",{parentName:"li"},"null"),".")),Object(i.b)("h3",null,"Comparison"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gt(v1, v2)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"v1 > v2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gte(v1, v2)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"v1 >= v2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lt(v1, v2)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"v1 < v2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lte(v1, v2)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"v1 <= v2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"eq(v1, v2)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"v1 == v2")," This is true if they're logically equivalent,\neven if they're not the exact same string.  You already know how to\ncompare strings."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"neq(v1, v2)"),": ",Object(i.b)("inlineCode",{parentName:"li"},"v1 != v2")," The opposite of ",Object(i.b)("inlineCode",{parentName:"li"},"eq"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cmp(v1, comparator, v2)"),": Pass in a comparison string, and it'll call\nthe corresponding function above.  ",Object(i.b)("inlineCode",{parentName:"li"},'"==="')," and ",Object(i.b)("inlineCode",{parentName:"li"},'"!=="')," do simple\nstring comparison, but are included for completeness.  Throws if an\ninvalid comparison string is provided."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"compare(v1, v2)"),": Return ",Object(i.b)("inlineCode",{parentName:"li"},"0")," if ",Object(i.b)("inlineCode",{parentName:"li"},"v1 == v2"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"1")," if ",Object(i.b)("inlineCode",{parentName:"li"},"v1")," is greater, or ",Object(i.b)("inlineCode",{parentName:"li"},"-1")," if\n",Object(i.b)("inlineCode",{parentName:"li"},"v2")," is greater.  Sorts in ascending order if passed to ",Object(i.b)("inlineCode",{parentName:"li"},"Array.sort()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rcompare(v1, v2)"),": The reverse of compare.  Sorts an array of versions\nin descending order when passed to ",Object(i.b)("inlineCode",{parentName:"li"},"Array.sort()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"diff(v1, v2)"),": Returns difference between two versions by the release type\n(",Object(i.b)("inlineCode",{parentName:"li"},"major"),", ",Object(i.b)("inlineCode",{parentName:"li"},"premajor"),", ",Object(i.b)("inlineCode",{parentName:"li"},"minor"),", ",Object(i.b)("inlineCode",{parentName:"li"},"preminor"),", ",Object(i.b)("inlineCode",{parentName:"li"},"patch"),", ",Object(i.b)("inlineCode",{parentName:"li"},"prepatch"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"prerelease"),"),\nor null if the versions are the same.")),Object(i.b)("h3",null,"Comparators"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"intersects(comparator)"),": Return true if the comparators intersect")),Object(i.b)("h3",null,"Ranges"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"validRange(range)"),": Return the valid range or null if it's not valid"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"satisfies(version, range)"),": Return true if the version satisfies the\nrange."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"maxSatisfying(versions, range)"),": Return the highest version in the list\nthat satisfies the range, or ",Object(i.b)("inlineCode",{parentName:"li"},"null")," if none of them do."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"minSatisfying(versions, range)"),": Return the lowest version in the list\nthat satisfies the range, or ",Object(i.b)("inlineCode",{parentName:"li"},"null")," if none of them do."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"minVersion(range)"),": Return the lowest version that can possibly match\nthe given range."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gtr(version, range)"),": Return ",Object(i.b)("inlineCode",{parentName:"li"},"true")," if version is greater than all the\nversions possible in the range."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ltr(version, range)"),": Return ",Object(i.b)("inlineCode",{parentName:"li"},"true")," if version is less than all the\nversions possible in the range."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"outside(version, range, hilo)"),": Return true if the version is outside\nthe bounds of the range in either the high or low direction.  The\n",Object(i.b)("inlineCode",{parentName:"li"},"hilo")," argument must be either the string ",Object(i.b)("inlineCode",{parentName:"li"},"'>'")," or ",Object(i.b)("inlineCode",{parentName:"li"},"'<'"),".  (This is\nthe function called by ",Object(i.b)("inlineCode",{parentName:"li"},"gtr")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ltr"),".)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"intersects(range)"),": Return true if any of the ranges comparators intersect")),Object(i.b)("p",null,"Note that, since ranges may be non-contiguous, a version might not be\ngreater than a range, less than a range, ",Object(i.b)("em",{parentName:"p"},"or")," satisfy a range!  For\nexample, the range ",Object(i.b)("inlineCode",{parentName:"p"},"1.2 <1.2.9 || >2.0.0")," would have a hole from ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.9"),"\nuntil ",Object(i.b)("inlineCode",{parentName:"p"},"2.0.0"),", so the version ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.10")," would not be greater than the\nrange (because ",Object(i.b)("inlineCode",{parentName:"p"},"2.0.1")," satisfies, which is higher), nor less than the\nrange (since ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.8")," satisfies, which is lower), and it also does not\nsatisfy the range."),Object(i.b)("p",null,"If you want to know if a version satisfies or does not satisfy a\nrange, use the ",Object(i.b)("inlineCode",{parentName:"p"},"satisfies(version, range)")," function."),Object(i.b)("h3",null,"Coercion"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"coerce(version)"),": Coerces a string to semver if possible")),Object(i.b)("p",null,"This aims to provide a very forgiving translation of a non-semver string to\nsemver. It looks for the first digit in a string, and consumes all\nremaining characters which satisfy at least a partial semver (e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"1"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"1.2"),", ",Object(i.b)("inlineCode",{parentName:"p"},"1.2.3"),") up to the max permitted length (256 characters).  Longer\nversions are simply truncated (",Object(i.b)("inlineCode",{parentName:"p"},"4.6.3.9.2-alpha2")," becomes ",Object(i.b)("inlineCode",{parentName:"p"},"4.6.3"),").  All\nsurrounding text is simply ignored (",Object(i.b)("inlineCode",{parentName:"p"},"v3.4 replaces v3.3.1")," becomes\n",Object(i.b)("inlineCode",{parentName:"p"},"3.4.0"),").  Only text which lacks digits will fail coercion (",Object(i.b)("inlineCode",{parentName:"p"},"version one"),"\nis not valid).  The maximum  length for any semver component considered for\ncoercion is 16 characters; longer components will be ignored\n(",Object(i.b)("inlineCode",{parentName:"p"},"10000000000000000.4.7.4")," becomes ",Object(i.b)("inlineCode",{parentName:"p"},"4.7.4"),").  The maximum value for any\nsemver component is ",Object(i.b)("inlineCode",{parentName:"p"},"Number.MAX_SAFE_INTEGER || (2**53 - 1)"),"; higher value\ncomponents are invalid (",Object(i.b)("inlineCode",{parentName:"p"},"9999999999999999.4.7.4")," is likely invalid)."))}p.isMDXComponent=!0},O6H6:function(e,n,t){"use strict";var a=t("vOnD"),i=t("u9kb"),r=t("aOgs"),l=t("q1tI"),o=t.n(l),b=t("7ljp"),p=t("pD55"),c=t("8Aig"),s=t("ReZb"),m=t("GCVy"),d=t("+6vE");var u=function(e){var n=e.children;return o.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(i.s,{fontFamily:"mono",fontSize:1},n))};var j=function(e){var n=e.children;return o.a.createElement("strong",null,n)},O=t("gnlW"),h=t("mwnC"),N=t("/Rw0"),C=t("dVM4"),v=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function g(e){var n=e.items,t=e.depth;return o.a.createElement(v,{key:n,as:"ul",m:0,p:0},n.map((function(e){return o.a.createElement(i.e,{as:"li",key:e.url,pl:t>0?3:0},o.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(g,{items:e.items,depth:t+1}):null)})))}g.defaultProps={depth:0};var f=g,y=t("MfeC");function w(e){var n=y.a.getPath(e.location.pathname),t=y.a.getVariantAndPage(e.root,n);if(!t)return null;var a=y.a.getVariantsForPage(e.root,t.page),r=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(l=e),r.push(o.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(i.i,{overlay:e.overlay},o.a.createElement(i.i.Button,null,l.variant.title),o.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},r)))}w.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,E=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),k=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),A=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),R=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,l=t.frontmatter,v=l.title,g=l.description,w=l.status,_=l.source,T=l.additionalContributors,q=void 0===T?[]:T,P=y.a.getVariantRoot(a.pathname);return o.a.createElement(b.a,{components:{Index:s.a,Note:m.a,Prompt:u,PromptReply:j,Screenshot:O.a}},o.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(p.a,{title:v,description:g}),o.a.createElement(c.b,{location:a}),o.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(i.e,{display:["none",null,null,"block"]},o.a.createElement(h.a,{location:a})),o.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(A,null,o.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(i.e,null,o.a.createElement(i.e,null,o.a.createElement(i.m,{as:"h1"},v),g))),null!=P?o.a.createElement(R,null,o.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),t.tableOfContents.items?o.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:c.a+24,mt:"6px",maxHeight:"calc(100vh - "+c.a+"px - 24px)"},o.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(f,{items:t.tableOfContents.items})):null,o.a.createElement(I,null,w||_?o.a.createElement(i.k,{mb:3,alignItems:"center"},w?o.a.createElement(C.a,{status:w}):null,o.a.createElement(i.e,{mx:"auto"}),_?o.a.createElement(N.a,{href:_}):null):null,t.tableOfContents.items?o.a.createElement(i.e,{display:["block",null,"none"],mb:3},o.a.createElement(i.h,null,(function(e){var n=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.s,{as:"summary",fontWeight:"bold"},n?o.a.createElement(i.r,{icon:r.b,mr:2}):o.a.createElement(i.r,{icon:r.c,mr:2}),"Table of contents"),o.a.createElement(i.e,{pt:1},o.a.createElement(f,{items:t.tableOfContents.items})))}))):null,n,o.a.createElement(d.a,{editUrl:t.editUrl,contributors:t.contributors.concat(q.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-7-using-npm-semver-md-0c48565b178a59a3b8a7.js.map