(window.webpackJsonppidtchay_project=window.webpackJsonppidtchay_project||[]).push([[20],{105:function(e,t,n){"use strict";var a=n(44),r=Object(a.a)();t.a=r},123:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var a,r,o={nickName:"T0mas3dison",email:"tom_lightbulb@edison.com",password:"l1ght6ul6"};(r=a=a||{}).EN="en",r.RU="ru"},154:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a="UPDATE_SESSION",r="CLEAN_SESSION"},31:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a={HOME:"/",LOGIN:"/login",ABOUT:"/about",REPOSITORIES:{DEFAULT:"/github_repositories",DETAILS:function(e){return"/github_repository/"+e}},CONTACT:{DEFAULT:"/contact",DETAILS:function(e){return"/contact/"+e}}},r={HOME:"/",LOGIN:"/login",ABOUT:"/about",REPOSITORIES:{DEFAULT:"/github_repositories",DETAILS:"/github_repository/:id"},CONTACT:{DEFAULT:"/contact",DETAILS:"/contact/:id"}}},339:function(e,t,n){e.exports={home_title:"home_title__-Nas_"}},357:function(e,t,n){e.exports={header_layout:"header_layout__2Moob",header_layout_i18n:"header_layout_i18n__1oQ9B",header_layout_avatar:"header_layout_avatar__2E88S",header_layout_button:"header_layout_button__1o-ol"}},361:function(e,t,n){"use strict";n.r(t),n.d(t,"AboutPage",function(){return o});var a=n(0),r=n.n(a),o=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About"),r.a.createElement("div",null,"added this to verify that the task of publishing the project after my changes will work!"))}},364:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var a=n(154);function r(e){return{type:a.b,payload:e}}function o(){return{type:a.a}}},366:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return void 0===e&&(e="en"),n(614)("./"+e+".json")}},367:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(368);function r(e){return{type:a.a,payload:e}}},368:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="LOAD_LITERALS "},369:function(e,t,n){e.exports={"components-layout-demo-custom-trigger":"components-layout-demo-custom-trigger__3Ri2x",trigger:"trigger__zsppO",site_layout:"site_layout__-UcNY",site_layout_header:"site_layout_header__fprzq",site_layout_content:"site_layout_content__RUy30"}},517:function(e,t,n){"use strict";n.r(t),n.d(t,"RepositoriesPage",function(){return k});var c=n(0),a=n(28),r={LIST_BY_ORGNAME:function(e){return"https://api.github.com/orgs/"+e+"/repos"}},i=n(89);function o(o){return function(r){return s(void 0,void 0,void 0,function(){var n,a;return m(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,p(o)];case 1:return n=e.sent(),r((t=n,{type:i.b,payload:t})),[3,3];case 2:return a=e.sent(),console.error(a),r({type:i.a}),[3,3];case 3:return[2]}var t})})}}var l,u,s=function(e,i,c,l){return new(c=c||Promise)(function(n,t){function a(e){try{o(l.next(e))}catch(e){t(e)}}function r(e){try{o(l.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof c?t:new c(function(e){e(t)})).then(a,r)}o((l=l.apply(e,i||[])).next())})},m=function(n,a){var r,o,i,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,o&&(i=2&t[0]?o.return:t[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,t[1])).done)return i;switch(o=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,o=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(i=0<(i=c.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){c.label=t[1];break}if(6===t[0]&&c.label<i[1]){c.label=i[1],i=t;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(t);break}i[2]&&c.ops.pop(),c.trys.pop();continue}t=a.call(n,c)}catch(e){t=[6,e],o=0}finally{r=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},p=function(t){return s(void 0,void 0,void 0,function(){return m(this,function(e){switch(e.label){case 0:return[4,fetch(r.LIST_BY_ORGNAME(t))];case 1:return[4,e.sent().json()];case 2:return[2,e.sent().map(function(e){return{id:e.id,avatarImg:e.owner.avatar_url,owner:e.owner.login,name:e.name,description:e.description,language:e.language,forks:e.forks,watchers:e.watchers,homepage:e.homepage}})]}})})},f=n(29),b=n(523),d=n(620),h=n(105),E=n(31);(u=l=l||{}).TEXT="TEXT",u.AVATAR="AVATAR",u.LINK="LINK",u.TAG="TAG";function y(e){var t=e.literals,n=e.columns,a=e.data,r=e.onFetchRepositories,o=Object(j.a)(t,"Pages.GithubRepositories.search_placeholder"),i=Array.isArray(o)?o.join(""):o;return c.createElement(c.Fragment,null,c.createElement("div",null,c.createElement(w,{placeholder:i,enterButton:"Search",size:"large",onSearch:r})),c.createElement(v.a,{columns:n,dataSource:a||[]}))}var g,O,v=n(319),_=n(618),j=n(7),w=_.a.Search,T=(g=function(e,t){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),I=(O=c.Component,T(P,O),P.prototype.componentDidMount=function(){this.props.fetchRepositories(this.state.orgname)},P.prototype.render=function(){var e,n,t=this.props,a=t.repositoryData,r=t.literals,o=(n=a[0],(e=n?Object.keys(n).map(function(e){var t={name:e,type:l.TEXT,description:n[e]};return"id"===e&&(t.type=l.LINK),"avatarImg"===e&&(t.type=l.AVATAR),"owner"!==e&&"language"!==e||(t.type=l.TAG),t}):[])?e.map(function(e){var t={dataIndex:null==e?void 0:e.name,key:null==e?void 0:e.name,title:null==e?void 0:e.name};return e.type===l.LINK&&(t.render=function(){return c.createElement(f.a,{type:"link",onClick:function(){return h.a.push(E.b.REPOSITORIES.DETAILS(e.description))}},e.description)}),e.type===l.AVATAR&&(t.render=function(){return c.createElement(b.a,{src:e.description})}),e.type===l.TAG&&(t.render=function(){return c.createElement(d.a,{color:"geekblue"},e.description)}),t}):[]);return c.createElement(c.Fragment,null,c.createElement(y,{literals:r,columns:o,data:a,onFetchRepositories:this.handleFetchRepositories}))},P);function P(){var t=null!==O&&O.apply(this,arguments)||this;return t.state={orgname:"facebook"},t.handleFetchRepositories=function(e){t.setState({orgname:e},function(){return t.props.fetchRepositories(t.state.orgname)})},t}var S={fetchRepositories:o},k=Object(a.b)(function(e){return{repositoryData:e.repository,literals:e.literals}},S)(I)},518:function(e,t,n){"use strict";n.r(t),n.d(t,"HomePage",function(){return l});function m(e){var t=e.literals;return f.a.createElement(c.a,{pending:Object(P.a)(t,"Pages.Home.timeline.comming_soon"),mode:"alternate"},f.a.createElement(c.a.Item,{color:"green"},Object(P.a)(t,"Pages.Home.timeline.step1")),f.a.createElement(c.a.Item,{color:"green"},Object(P.a)(t,"Pages.Home.timeline.step2")),f.a.createElement(c.a.Item,{color:"green"},Object(P.a)(t,"Pages.Home.timeline.step3")),f.a.createElement(c.a.Item,{color:"green"},Object(P.a)(t,"Pages.Home.timeline.step4")),f.a.createElement(c.a.Item,{color:"red"},Object(P.a)(t,"Pages.Home.timeline.step5")),f.a.createElement(c.a.Item,{dot:f.a.createElement(i.a,{style:{fontSize:"16px"}})},Object(P.a)(t,"Pages.Home.timeline.step6")))}var p=n(0),f=n.n(p),a=n(617),b=n(59),d=n(526),h=n(612),E=n(356),y=n(615),g=n(523),O=n(622),v=n(623),_=n(624),j=n(625),w=n(555),r=n(339),T=n.n(r),o=n(2),I=n.n(o),P=n(7),S=n(28),i=n(621),c=n(619),k=a.a.Title,l=function(){var e=Object(p.useState)(0),t=e[0],n=e[1],a=Object(p.useState)(0),r=a[0],o=a[1],i=Object(p.useState)(null),c=i[0],l=i[1],u=Object(S.d)(function(e){return e.literals}),s=[f.a.createElement("span",{key:"comment-basic-like"},f.a.createElement(b.a,{title:Object(P.a)(u,"Paget.Home.comment.footer.like")},Object(p.createElement)("liked"===c?O.a:v.a,{onClick:function(){n(1),o(0),l("liked")}})),f.a.createElement("span",{className:"comment-action"},t)),f.a.createElement("span",{key:"comment-basic-dislike"},f.a.createElement(b.a,{title:Object(P.a)(u,"Paget.Home.comment.footer.dislike")},f.a.createElement("disliked"===c?_.a:j.a,{onClick:function(){n(0),o(1),l("disliked")}})),f.a.createElement("span",{className:"comment-action"},r))];return f.a.createElement(f.a.Fragment,null,f.a.createElement(d.a,null,f.a.createElement("div",{className:T.a.home_title},f.a.createElement(k,null,Object(P.a)(u,"Pages.Home.welcome.title")),f.a.createElement(k,{level:2},Object(P.a)(u,"Pages.Home.welcome.title2"),f.a.createElement("a",{href:"https://pidtchay.github.io/pidtchay-project/",target:"_blank"},"pidtchay.github.io")))),f.a.createElement(h.a,null),f.a.createElement(d.a,null,f.a.createElement(E.a,{span:8},f.a.createElement(m,{literals:u})),f.a.createElement(E.a,{offset:2},f.a.createElement(y.a,{actions:s,author:f.a.createElement("span",null,"PidtChay"),avatar:f.a.createElement(g.a,{size:"large",icon:f.a.createElement(w.a,null),alt:"PidtChay"}),content:f.a.createElement("div",null,f.a.createElement("p",null,Object(P.a)(u,"Pages.Home.comment.howdy")),f.a.createElement("p",null,Object(P.a)(u,"Pages.Home.comment.message"))),datetime:f.a.createElement(b.a,{title:I()().format("YYYY-MM-DD HH:mm:ss")},f.a.createElement("span",null,I()().fromNow()))}))))}},520:function(e,t,n){e.exports={login_form:"login_form__3PsLY",login_form_info:"login_form_info__3tu9y"}},525:function(e,t,n){e.exports={details_layout:"details_layout__hHfFu",avatar_panel:"avatar_panel__1HRY1"}},535:function(e,t,n){e.exports={loginForm:"loginForm__10LHj"}},614:function(e,t,a){var r={"./en.json":[630,56],"./ru.json":[631,57]};function n(t){if(!a.o(r,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=r[t],n=e[0];return a.e(e[1]).then(function(){return a.t(n,3)})}n.keys=function(){return Object.keys(r)},n.id=614,e.exports=n},616:function(e,t,n){"use strict";n.r(t);function a(e){var t=e.initialData,n=e.onSubmit,a=e.literals,r=_.a.useForm()[0];return l.createElement(_.a,I({},P,{className:v.a.loginForm,form:r,onFinish:function(e){n(I({},e))}}),l.createElement(_.a.Item,{label:Object(T.a)(a,"Forms.Login.nickname.label"),name:"nickName",rules:[{required:!0,message:l.createElement(l.Fragment,null,Object(T.a)(a,"Forms.Login.nickname.message"))}]},l.createElement(j.a,null)),l.createElement(_.a.Item,{label:Object(T.a)(a,"Forms.Login.email.label"),name:"email",rules:[{required:!0,message:l.createElement(l.Fragment,null,Object(T.a)(a,"Forms.Login.email.message")),type:"email"}]},l.createElement(j.a,null)),l.createElement(_.a.Item,{label:Object(T.a)(a,"Forms.Login.password.label"),name:"password",rules:[{required:!0,message:l.createElement(l.Fragment,null,Object(T.a)(a,"Forms.Login.password.message"))}]},l.createElement(j.a.Password,null)),l.createElement(_.a.Item,{wrapperCol:I(I({},P.wrapperCol),{offset:8})},l.createElement(w.a,{type:"primary",htmlType:"submit"},Object(T.a)(a,"ACTIONS.submit")),l.createElement(w.a,{htmlType:"button",onClick:function(){r.resetFields()}},Object(T.a)(a,"ACTIONS.reset")),l.createElement(w.a,{type:"link",htmlType:"button",onClick:function(){r.setFieldsValue(t)}},Object(T.a)(a,"ACTIONS.fill_form"))))}function r(t){var e=Object(F.d)(function(e){return e.literals}),n=Object(F.c)();return u.a.createElement("div",{className:L.a.login_form},u.a.createElement(C.a,{className:L.a.login_form_info,message:Object(T.a)(e,"Forms.Login.Info.title"),description:Object(T.a)(e,"Forms.Login.Info.note"),type:"info",showIcon:!0}),u.a.createElement(a,{initialData:H.b,onSubmit:function(e){Object(T.b)(function(){var a;n((a=e,function(n){return k(void 0,void 0,void 0,function(){var t;return A(this,function(e){switch(e.label){case 0:return[4,R(a)];case 1:return t=e.sent(),n(Object(S.b)(t)),[2]}})})}))},1e3),setTimeout(function(){return t.history.push(D.b.HOME)},1e3)},literals:e}))}function o(e){var t=e.literals,n=e.repository,a=e.onBackClick;return console.debug({literals:t}),l.createElement("div",{className:V.a.details_layout},l.createElement(x.a,{onBack:a,title:Object(T.a)(t,"Pages.GithubRepositories.back")||""}),l.createElement(M.a,{orientation:"left"},Object(T.a)(t,"Pages.GithubRepositories.Details.Divider.owner")),l.createElement(U.a,null,l.createElement(B.a,{span:4},l.createElement("div",{className:V.a.avatar_panel},l.createElement(Y.a,{shape:"square",size:100,src:n.avatarImg}))),l.createElement(B.a,{span:10,offset:2},l.createElement(z.a,{title:Object(T.a)(t,"Pages.GithubRepositories.Details.info")},l.createElement(z.a.Item,{label:Object(T.a)(t,"Pages.GithubRepositories.Details.owner")},n.owner),l.createElement(z.a.Item,{label:Object(T.a)(t,"Pages.GithubRepositories.Details.home_page")},l.createElement(w.a,{type:"link"},n.homepage)),l.createElement(z.a.Item,{label:Object(T.a)(t,"Pages.GithubRepositories.Details.forks")},n.forks),l.createElement(z.a.Item,{label:Object(T.a)(t,"Pages.GithubRepositories.Details.watchers")},n.watchers)))),l.createElement(M.a,{orientation:"left"},Object(T.a)(t,"Pages.GithubRepositories.Divider.details")),l.createElement(U.a,null,l.createElement(B.a,null,l.createElement(z.a,{title:Object(T.a)(t,"Pages.GithubRepositories.Details.description")},l.createElement(z.a.Item,{label:Object(T.a)(t,"Pages.GithubRepositories.Details.name")},n.name),l.createElement(z.a.Item,{label:Object(T.a)(t,"Pages.GithubRepositories.Details.description")},n.description),l.createElement(z.a.Item,{label:Object(T.a)(t,"Pages.GithubRepositories.Details.language")},l.createElement(q.a,{color:"geekblue"},n.language))))))}function i(t){var e=Object(F.d)(function(e){return e.literals}),n=Object(F.d)(function(e){return e.repository}).find(function(e){return e.id===+t.match.params.id});return n?l.createElement(o,{literals:e,repository:n,onBackClick:function(){t.history.push(D.b.REPOSITORIES.DEFAULT)}}):l.createElement("div",null,"Empty")}function c(e){var t=e.component,n=Q(e,["component"]),a=Object(F.d)(function(e){return e.system.authenticated});return l.createElement(m.b,J({},n,{render:function(e){return a?l.createElement(t,J({},e)):l.createElement(m.a,{to:D.b.LOGIN})}}))}var l=n(0),u=n.n(l),s=n(12),m=n(33),p=n(355),f=n(633),b=n(40),d=n(628),h=n(637),E=n(638),y=n(369),g=n.n(y),O=(n(559),n(535)),v=n.n(O),_=n(634),j=n(618),w=n(29),T=n(7),I=function(){return(I=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},P={labelCol:{span:8},wrapperCol:{span:16}},S=n(364),k=function(e,i,c,l){return new(c=c||Promise)(function(n,t){function a(e){try{o(l.next(e))}catch(e){t(e)}}function r(e){try{o(l.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof c?t:new c(function(e){e(t)})).then(a,r)}o((l=l.apply(e,i||[])).next())})},A=function(n,a){var r,o,i,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,o&&(i=2&t[0]?o.return:t[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,t[1])).done)return i;switch(o=0,i&&(t=[2&t[0],i.value]),t[0]){case 0:case 1:i=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,o=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(i=0<(i=c.trys).length&&i[i.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!i||t[1]>i[0]&&t[1]<i[3])){c.label=t[1];break}if(6===t[0]&&c.label<i[1]){c.label=i[1],i=t;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(t);break}i[2]&&c.ops.pop(),c.trys.pop();continue}t=a.call(n,c)}catch(e){t=[6,e],o=0}finally{r=i=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},R=function(e){var t={authenticated:!0,session:"test session",userName:e.nickName};return Promise.resolve(t)},N=n(520),L=n.n(N),D=n(31),F=n(28),H=n(123),C=n(636),G=n(517),x=n(632),M=n(612),U=n(526),B=n(356),Y=n(523),z=n(635),q=n(620),K=n(525),V=n.n(K),X=n(105),J=function(){return(J=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},Q=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},W=n(549),Z=n(518),$=n(361),ee=function(){return(ee=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},te=f.a.Header,ne=f.a.Content,ae=f.a.Footer,re=f.a.Sider,oe=n(119),ie=n(550),ce=n(154),le=function(){return(le=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},ue={authenticated:!1,session:"",userName:""},se=n(89),me=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var a=Array(e),r=0,t=0;t<n;t++)for(var o=arguments[t],i=0,c=o.length;i<c;i++,r++)a[r]=o[i];return a},pe=n(368),fe=function(){return(fe=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},be=Object(oe.combineReducers)({system:function(e,t){switch(void 0===e&&(e=ue),t.type){case ce.b:return le(le({},e),t.payload);case ce.a:return{authenticated:!1,session:"",userName:""};default:return le({},e)}},repository:function(e,t){switch(void 0===e&&(e=[]),t.type){case se.b:return me(e,t.payload);case se.a:return[];default:return me(e)}},literals:function(e,t){switch(void 0===e&&(e={}),t.type){case pe.a:return fe(fe({},e),t.payload);default:return e}}}),de=n(551),he=n(367),Ee=n(366),ye=Object(oe.createStore)(be,Object(ie.composeWithDevTools)(Object(oe.applyMiddleware)(de.a)));Object(Ee.a)().then(function(e){return ye.dispatch(Object(he.a)(e))}),s.render(l.createElement(F.a,{store:ye},l.createElement(function(){var e=Object(l.useState)(!0),t=e[0],n=e[1],a=Object(F.d)(function(e){return e.literals});return u.a.createElement(m.c,{history:X.a},u.a.createElement(f.a,null,u.a.createElement(re,{trigger:null,collapsible:!0,collapsed:t},u.a.createElement(b.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},u.a.createElement(b.a.Item,{key:"1",icon:u.a.createElement(d.a,null)},u.a.createElement(p.a,{to:D.b.HOME},Object(T.a)(a,"SideMenu.home"))),u.a.createElement(b.a.Item,{key:"2",icon:u.a.createElement(h.a,null)},u.a.createElement(p.a,{to:D.b.ABOUT},Object(T.a)(a,"SideMenu.about"))),u.a.createElement(b.a.Item,{key:"3",icon:u.a.createElement(E.a,null)},u.a.createElement(p.a,{to:D.b.REPOSITORIES.DEFAULT},Object(T.a)(a,"SideMenu.git_repos"))))),u.a.createElement(f.a,{className:g.a.site_layout},u.a.createElement(te,{className:g.a.site_layout_header},u.a.createElement(W.a,{isSideMenuToogle:t,onToggleTrueFalse:function(){return n(!t)}})),u.a.createElement(ne,{className:g.a.site_layout_content},u.a.createElement(m.d,null,u.a.createElement(m.b,{path:D.a.LOGIN,render:function(e){return u.a.createElement(r,ee({},e))}}),u.a.createElement(m.b,{path:D.a.ABOUT,render:function(){return u.a.createElement($.AboutPage,null)}}),u.a.createElement(c,{path:D.a.REPOSITORIES.DETAILS,component:i}),u.a.createElement(c,{path:D.a.REPOSITORIES.DEFAULT,component:G.RepositoriesPage}),u.a.createElement(c,{path:D.a.HOME,component:function(){return u.a.createElement(Z.HomePage,null)}}))),u.a.createElement(ae,null,Object(T.a)(a,"Layout.footer")))))},null)),document.getElementById("root"))},7:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e,t){setTimeout(function(){e(),0},t)},r=function(e,t){var n,a=t.split(".");return n=e,a.reduce(function(e,t){return e&&e[t]?e[t]:null},n)}},89:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a="FETCH_REPOSITORY_DATA",r="CLEAR_REPOSITORY_DATA"}},[[616,53,1,3,2,6,5,0,4,13,18,10,29,22,27,31,23,16,19,11,25,12,21,30,28,9,8,24,14,17,26,15]]]);