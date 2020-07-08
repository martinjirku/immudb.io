(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{398:function(a,t,s){"use strict";s.r(t);var e=s(45),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"immuadmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immuadmin"}},[a._v("#")]),a._v(" immuadmin")]),a._v(" "),s("p",[a._v("immuadmin is the admin CLI for immudb and immugw. You can install and manage the service installation for both components and get statistics as well as runtime information.")]),a._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[a._v("#")]),a._v(" Contents")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#latest-binaries"}},[a._v("Latest binaries")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#build"}},[a._v("Build")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#docker"}},[a._v("Docker")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#use-immuadmin"}},[a._v("Use immuadmin")])]),a._v(" "),s("li",[s("a",{attrs:{href:"#license"}},[a._v("License")])])]),a._v(" "),s("h2",{attrs:{id:"latest-binaries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latest-binaries"}},[a._v("#")]),a._v(" Latest binaries")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/codenotary/immudb/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[a._v("Get the latest builds"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[a._v("#")]),a._v(" Build")]),a._v(" "),s("p",[a._v("clone the immudb repository locally")]),a._v(" "),s("p",[s("code",[a._v("git clone https://github.com/codenotary/immudb.git")])]),a._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("linux "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immuadmin-static\n")])])]),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" MacOS")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("darwin "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immuadmin-static\n")])])]),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("windows "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" immuadmin-static\n")])])]),s("h2",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),s("h3",{attrs:{id:"build-your-own-docker-container-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-your-own-docker-container-image"}},[a._v("#")]),a._v(" build your own Docker container image")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker build -t myown/immuadmin:latest -f Dockerfile.immuadmin "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])]),s("h3",{attrs:{id:"run-immuadmin-in-a-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-immuadmin-in-a-container"}},[a._v("#")]),a._v(" run immuadmin in a container")]),a._v(" "),s("p",[a._v("Best is to have immuadmin running on the same machine as immudb, so it can access localhost. As immuadmin is interactive, you can simply add the immuadmin command after docker run.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker run -it --rm ---network "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" -name immuadmin codenotary/immugw:latest "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("\n")])])]),s("h2",{attrs:{id:"use-immuadmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-immuadmin"}},[a._v("#")]),a._v(" Use immuadmin")]),a._v(" "),s("p",[s("code",[a._v("immuadmin help")]),a._v(" is a good starting point")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("CLI admin client "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" immudb - the lightweight, high-speed immutable database "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" systems and applications.\n\nEnvironment variables:\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUADMIN_IMMUDB_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUADMIN_IMMUDB_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3322")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUADMIN_MTLS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUADMIN_SERVERNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("localhost\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUADMIN_PKEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./tools/mtls/4_client/private/localhost.key.pem\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUADMIN_CERTIFICATE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./tools/mtls/4_client/certs/localhost.cert.pem\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUADMIN_CLIENTCAS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./tools/mtls/2_intermediate/certs/ca-chain.cert.pem\n\nUsage:\n  immuadmin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\nAvailable Commands:\n  backup      Make a copy of the database files and folders\n  dump        Dump database content to a "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("        Help about any "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v("\n  login       Login using the specified username and password "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("admin username is immu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("logout")]),a._v("\n  restore     Restore the database from a snapshot archive or folder\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v("     Manage immu services\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v("         Update server config items: auth "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("cryptosig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", mtls "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("true"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  stats       Show statistics as text or visually with the "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'-v'")]),a._v(" option. Run "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'immuadmin stats -h'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" details.\n  status      Show heartbeat status\n  user        Perform various user-related operations: list, create, deactivate, change password, "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" permissions\n  version     Show the immuadmin version\n\nFlags:\n      --certificate string      server certificate "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" path "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./tools/mtls/4_client/certs/localhost.cert.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      --clientcas string        clients certificates list. Aka certificate authority "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./tools/mtls/2_intermediate/certs/ca-chain.cert.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      --config string           config "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default path is configs or "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" default filename is immuadmin.toml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  -h, --help                    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" immuadmin\n  -a, --immudb-address string   immudb "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" address "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  -p, --immudb-port int         immudb port number "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3322")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  -m, --mtls                    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" mutual tls\n      --pkey string             server private key path "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./tools/mtls/4_client/private/localhost.key.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      --servername string       used to verify the "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hostname")]),a._v(" on the returned certificates "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"localhost"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      --tokenfile string        authentication token "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default path is "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v(" or binary location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" the supplied value will be automatically suffixed with _admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" default filename is token_admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\nUse "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"immuadmin [command] --help"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("more")]),a._v(" information about a command.\n")])])]),s("p",[a._v("You can also use the help functionality for specific commands, i. e. "),s("code",[a._v("immuadmin user help")])]),a._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[a._v("#")]),a._v(" License")]),a._v(" "),s("p",[a._v("immuadmin is "),s("a",{attrs:{href:"https://github.com/codenotary/immudb/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[a._v("Apache v2.0 License"),s("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);