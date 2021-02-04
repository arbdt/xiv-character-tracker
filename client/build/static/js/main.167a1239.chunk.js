(this["webpackJsonpxiv-tracker"]=this["webpackJsonpxiv-tracker"]||[]).push([[0],{220:function(e,a,t){e.exports=t.p+"static/media/logo.2ea2ba20.png"},229:function(e,a,t){e.exports=t(502)},234:function(e,a,t){},286:function(e,a){},288:function(e,a){},298:function(e,a){},300:function(e,a){},325:function(e,a){},327:function(e,a){},328:function(e,a){},333:function(e,a){},335:function(e,a){},354:function(e,a){},366:function(e,a){},369:function(e,a){},375:function(e,a){},377:function(e,a){},400:function(e,a){},502:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(219),s=t.n(c),l=(t(234),t(44)),o=t(220),i=t.n(o),u=t(14),m=t.n(u),h=t(24),d=t(13),v=function(){var e=Object(d.b)().loginWithRedirect;return n.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(){return e()}},"Log In")},p=function(){var e=Object(d.b)().logout;return n.a.createElement("button",{className:"btn btn-danger btn-block",onClick:function(){return e({returnTo:window.location.origin})}},"Log Out")},b=t(25),f=t.n(b),E=function(){var e=Object(d.b)().isAuthenticated,a=Object(d.b)().user;return e&&function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=9;break}return e.prev=1,e.next=4,f.a.post("/api/user",{userId:a.sub}).then((function(e){null!==e.data&&console.log("User is registered!")}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}()(),e?n.a.createElement(p,null):n.a.createElement(v,null)},N=function(){return n.a.createElement("div",{className:"navbar-nav ml-auto"},n.a.createElement(E,null))};var g=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-custom"},n.a.createElement("a",{className:"navbar-brand",href:"/"},n.a.createElement("img",{src:i.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"logo"})," XIV Character Tracker"),n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement(l.b,{className:"nav-link",to:"/search"},"Search")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(l.b,{to:"/user",className:"nav-link"},"User Page"))),n.a.createElement(N,null)))};var C=function(){return n.a.createElement("footer",{className:"footer"},"Made by ",n.a.createElement("a",{href:"https:github.com/arbdt"},"Arbdt")," in 2021 using ",n.a.createElement("a",{href:"https://reactjs.org/"},"React")," and ",n.a.createElement("a",{href:"https://mongoosejs.com/"},"Mongoose"),". Powered by ",n.a.createElement("a",{href:"https://github.com/xivapi/xivapi-js"},"XIVAPI"),". FINAL FANTASY XIV \xa9 SQUARE ENIX CO., LTD.")},x=t(39),j=t(223),S=t(53);var k=function(e){var a=e.newJobData,t=e.oldJobData;return n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card m-2 jobCard"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},a.classjobName),n.a.createElement("p",{className:"card-text"},n.a.createElement("span",{className:"font-weight-bold"},"Level:")," ",a.classjobLevel," ",void 0!==t.classjobLevel&&t.classjobLevel<a.classjobLevel?n.a.createElement("span",{className:"trackedChange"}," (+",a.classjobLevel-t.classjobLevel,")"):n.a.createElement(n.a.Fragment,null)),n.a.createElement("meter",{value:a.currentExp,max:a.maxExp},a.currentExp," / ",a.maxExp),n.a.createElement("p",{className:"card-text"},n.a.createElement("span",{className:"font-weight-bold"},"Exp.:")," ",a.currentExp," / ",a.maxExp," ",a.classjobLevel===t.classjobLevel&&a.currentExp>t.currentExp?n.a.createElement("span",{className:"trackedChange"}," (+",a.currentExp-t.currentExp,")"):n.a.createElement(n.a.Fragment,null)))))},O=t(82),y=t.n(O),w=new y.a;var I=function(e){var a=e.match.params.charId,t=Object(d.b)().user,c=Object(r.useState)({charId:0,charName:"Unable to Retrieve",charServer:"Unable to Retrieve",charAvatar:"",charPortrait:"",charClasses:[],achievementCount:0,achievementPoints:0,minionCount:0,mountCount:0}),s=Object(S.a)(c,2),l=s[0],o=s[1],i=Object(r.useState)({charId:0,charName:"",charServer:"",charAvatar:"",charPortrait:"",charClasses:[],achievementCount:0,achievementPoints:0,minionCount:0,mountCount:0}),u=Object(S.a)(i,2),v=u[0],p=u[1];Object(r.useEffect)((function(){E(a).then((function(e){var a=e;console.log("Searching for existing data..."),void 0!==e&&o(a)}))}),[a]),Object(r.useEffect)((function(){b(a).then((function(e){var t;console.log("Retrieving character data from external sources."),null!==e.Character.ClassJobs&&(t=e.Character.ClassJobs.map((function(e){return{charId:a,classjobName:e.UnlockedState.Name,classjobFullname:e.Name,classjobLevel:e.Level,currentExp:e.ExpLevel,maxExp:e.ExpLevelMax}})));var r={charId:a,charName:e.Character.Name,charServer:e.Character.Server,charAvatar:e.Character.Avatar,charPortrait:e.Character.Portrait,charClasses:t,minionCount:null!==e.Minions?e.Minions.length:null,mountCount:null!==e.Mounts?e.Mounts.length:null};null===r.minionCount||null===r.mountCount||null===r.charClasses?(console.log("Error retrieving fresh data. Attempting to display backup data instead."),p(l)):p(r)}))}),[a,l]);var b=function(){var e=Object(h.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.character.get(a,{data:"cj,mimo"});case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),E=function(){var e=Object(h.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/character/".concat(a));case 3:if(null===(t=e.sent).data){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),N=function(e){f.a.post("/api/character",e).then((function(e){null!==e&&console.log("Character data has been saved.")}))};return n.a.createElement("div",{className:"card m-4 characterSheet"},n.a.createElement("h3",{className:"card-header"},""!==v.charName?"".concat(v.charName," of ").concat(v.charServer):"Loading data...","\u2003",void 0!==t&&n.a.createElement("button",{className:"charSaveBtn btn btn-success",onClick:function(e){e.preventDefault(),N(v),e.target.className="charSaveBtn btn btn-secondary"}},n.a.createElement("i",{className:"fas fa-save"}),n.a.createElement("span",{className:"d-none d-md-inline"}," Save current stats"))),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4"},n.a.createElement("img",{src:v.charAvatar,alt:v.charName})),n.a.createElement("div",{className:"col-8"},n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Minions:")," ",v.minionCount," ",void 0!==l&&v.minionCount>l.minionCount?n.a.createElement("span",{className:"trackedChange"}," (+",v.minionCount-l.minionCount,")"):n.a.createElement(n.a.Fragment,null)),n.a.createElement("p",null,n.a.createElement("span",{className:"font-weight-bold"},"Mounts:")," ",v.mountCount," ",void 0!==l&&v.mountCount>l.mountCount?n.a.createElement("span",{className:"trackedChange"}," (+",v.mountCount-l.mountCount,")"):n.a.createElement(n.a.Fragment,null)))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("h4",null,"Classes and Jobs:")),n.a.createElement("div",{className:"row row-cols-3"},void 0!==v.charClasses?v.charClasses.map((function(e){var a={};if(void 0!==l&&l.charClasses!==[]){var t,r=Object(j.a)(l.charClasses);try{for(r.s();!(t=r.n()).done;){var c=t.value;c.classjobFullname===e.classjobFullname&&(a=c)}}catch(s){r.e(s)}finally{r.f()}}return n.a.createElement(k,{newJobData:e,oldJobData:a,key:e.classjobName})})):n.a.createElement(n.a.Fragment,null)))))};var A=Object(d.d)((function(e){var a=Object(d.b)(),t=a.user,c=a.isAuthenticated,s=a.isLoading,l="";console.log("isAuthenticated: ".concat(c)),c||console.log("isLoading: ".concat(s)),c&&(l=t.sub,console.log("userId is set."));var o=Object(r.useState)([]),i=Object(S.a)(o,2),u=i[0],v=i[1],p=Object(r.useState)([]),b=Object(S.a)(p,2),E=b[0],N=b[1];Object(r.useEffect)((function(){""!==l&&g(l).then((function(e){v(e.savedCharacters)}))}),[l]),Object(r.useEffect)((function(){""!==l&&u!==[]&&(console.log("Retrieving character data."),j(u).then((function(e){N(e)})))}),[u]);var g=function(){var e=Object(h.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/user/".concat(a));case 3:if(null===(t=e.sent).data){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(m.a.mark((function e(a,t){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Attempting to remove character ".concat(t," from profile.")),e.prev=1,e.next=4,f.a.put("/api/user/characters/remove",{userId:a,charId:t});case 4:if(null===(r=e.sent).data){e.next=7;break}return e.abrupt("return",r.data);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a,t){return e.apply(this,arguments)}}(),x=function(e){e.preventDefault(),C(e.target.dataset.user,e.target.dataset.char).then((function(e){v(e.savedCharacters)})),e.target.className="btn btn-secondary"},j=function(){var e=Object(h.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Searching for characters with IDs ".concat(a)),e.next=4,f.a.post("/api/user/characters",{data:a});case 4:if(null===(t=e.sent).data){e.next=7;break}return e.abrupt("return",t.data);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"userCard card m-4"},n.a.createElement("h3",{className:"card-header"},"Your Characters"),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},0!==E.length?"You've saved the following characters in our database:":"You have no saved characters."),n.a.createElement("div",null,n.a.createElement("ul",{className:"list-group charList"}," ",0!==E.length&&void 0!==E[0]?E.map((function(e){return n.a.createElement("li",{key:e.charId,className:"list-group-item d-flex justify-content-between align-items-center"},n.a.createElement("div",{className:"col"},n.a.createElement("img",{src:e.charAvatar,alt:e.charName,width:"64",height:"64"})),n.a.createElement("div",{className:"col font-weight-bold"},e.charName),n.a.createElement("div",{className:"col"},e.charServer),n.a.createElement("div",{className:"col"},n.a.createElement("a",{className:"btn btn-primary",href:"/character/"+e.charId},n.a.createElement("i",{className:"fas fa-eye"}),n.a.createElement("span",{className:"d-none d-md-inline"}," View"))),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"btn btn-danger",onClick:x,"data-char":e.charId,"data-user":l},n.a.createElement("i",{className:"fas fa-user-minus"}),n.a.createElement("span",{className:"d-none d-md-inline"}," Untrack"))))})):n.a.createElement(n.a.Fragment,null)))))})),L=t(224),T=t(225),D=t(226),R=t(71),_=t(228),P=t(227),U=new y.a,F=function(e){Object(_.a)(t,e);var a=Object(P.a)(t);function t(e){var r;return Object(T.a)(this,t),(r=a.call(this,e)).serverList=["Adamantoise","Aegis","Alexander","Anima","Asura","Atomos","Bahamut","Balmung","Behemoth","Belias","Brynhildr","Cactuar","Carbuncle","Cerberus","Chocobo","Coeurl","Diabolos","Durandal","Excalibur","Exodus","Faerie","Famfrit","Fenrir","Garuda","Gilgamesh","Goblin","Gungnir","Hades","Hyperion","Ifrit","Ixion","Jenova","Kujata","Lamia","Leviathan","Lich","Louisoix","Malboro","Mandragora","Masamune","Mateus","Midgardsormr","Moogle","Odin","Omega","Pandemonium","Phoenix","Ragnarok","Ramuh","Ridill","Sargatanas","Shinryu","Shiva","Siren","Tiamat","Titan","Tonberry","Typhon","Ultima","Ultros","Unicorn","Valefor","Yojimbo","Zalera","Zeromus","Zodiark"],r.handleCharSave=function(e){e.preventDefault(),r.saveCharToUser(e.target.dataset.user,e.target.dataset.charid),e.target.className="btn btn-secondary"},r.state={charName:"",serverName:"",searchResults:[]},r.handleInputChange=r.handleInputChange.bind(Object(R.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(R.a)(r)),r}return Object(D.a)(t,[{key:"handleInputChange",value:function(e){var a=e.target,t=a.value,r=a.name;this.setState(Object(L.a)({},r,t))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),console.log("Searching for ".concat(this.state.charName," of ").concat(this.state.serverName)),U.character.search(this.state.charName,{server:this.state.serverName}).then((function(e){a.setState({searchResults:e.Results})}))}},{key:"saveCharToUser",value:function(){var e=Object(h.a)(m.a.mark((function e(a,t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Saving character to user's profile..."),e.prev=1,e.next=4,f.a.put("/api/user/characters/add",{userId:a,charId:t});case 4:null!==e.sent.data&&console.log("User data saved successfully."),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a,t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.props.auth0.user;return n.a.createElement("div",{className:"searchCard card m-4"},n.a.createElement("h3",{className:"card-header"},"Search for a character"),n.a.createElement("form",{className:"form card-body",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"charSearchInput"},"Character Name: "),n.a.createElement("input",{className:"form-control",type:"text",id:"charSearchInput",name:"charName",onChange:this.handleInputChange,required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"charServerInput"},"Server: "),n.a.createElement("input",{className:"form-control",list:"xivServers",id:"charServerInput",name:"serverName",onChange:this.handleInputChange,required:!0}),n.a.createElement("datalist",{id:"xivServers"},this.serverList.map((function(e){return n.a.createElement("option",{key:e,value:e})})))),n.a.createElement("button",{className:"btn btn-success",type:"submit"},n.a.createElement("i",{className:"fas fa-search"}),n.a.createElement("span",{className:"d-none d-md-inline"}," Search"))),n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-text"},"Only the first 50 results are displayed. If the character you seek is not listed, please refine your search."),n.a.createElement("ul",{className:"list-group resultList"}," ",void 0!==this.state.searchResults&&this.state.searchResults.length>0?this.state.searchResults.map((function(t){return n.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center",key:t.ID},n.a.createElement("div",{className:"col"},n.a.createElement("img",{src:t.Avatar,alt:t.Name,width:"64",height:"64"})),n.a.createElement("div",{className:"col font-weight-bold"},t.Name),n.a.createElement("div",{className:"col"},t.Server),n.a.createElement("div",{className:"col"},n.a.createElement("a",{className:"btn btn-primary",href:"/character/"+t.ID},n.a.createElement("i",{className:"fas fa-eye"}),n.a.createElement("span",{className:"d-none d-md-inline"}," View"))),n.a.createElement("div",{className:"col"},void 0!==a&&n.a.createElement("button",{className:"btn btn-success",onClick:e.handleCharSave,"data-user":a.sub,"data-charid":t.ID,"data-charname":t.Name,"data-charserver":t.Server,"data-charavatar":t.Avatar},n.a.createElement("i",{className:"fas fa-user-plus"}),n.a.createElement("span",{className:"d-none d-md-inline"}," Track"))))})):n.a.createElement("p",null,"No search results to display."))))}}]),t}(r.Component),M=Object(d.c)(F);var B=function(){return n.a.createElement("div",{className:"jumbotron"},n.a.createElement("h1",{className:"display-4"},"XIV Character Tracker"),n.a.createElement("p",{className:"lead"},"Welcome to the XIV Character Tracker. Use the form below to find and display the profile of a character."),n.a.createElement("hr",{className:"my-4"}),n.a.createElement("p",null,'To track a character\'s progress, first log in using the  button above. Search for a character and click "Track" to register them to your user profile. Then, click "View" to access the character\'s profile. Click "Save" to store the character\'s current data for later comparison.'),n.a.createElement(M,null))};var J=function(){return Object(d.b)().isLoading?n.a.createElement("div",null,"Page is loading..."):n.a.createElement("div",{className:"App"},n.a.createElement(g,null),n.a.createElement("main",{className:"container"},n.a.createElement(x.a,{path:"/character/:charId",component:I}),n.a.createElement(x.a,{path:"/user",component:A}),n.a.createElement(x.a,{path:"/search",component:M}),n.a.createElement(x.a,{exact:!0,path:"/",component:B})),n.a.createElement(C,null))},V=function(e){var a=e.children,t=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTH0_DOMAIN||"dev-cl0rszmy.au.auth0.com",r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTH0_CLIENT_ID||"KYegJBfdFObt1ZBx1z4YZZYyp6R5iqOb",c=Object(x.e)();return n.a.createElement(d.a,{domain:t,clientId:r,redirectUri:window.location.origin,onRedirectCallback:function(e){c.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)}},a)};s.a.render(n.a.createElement(l.a,null,n.a.createElement(V,null,n.a.createElement(J,null))),document.getElementById("root"))}},[[229,1,2]]]);
//# sourceMappingURL=main.167a1239.chunk.js.map