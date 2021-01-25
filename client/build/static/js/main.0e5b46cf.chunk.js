(this["webpackJsonpxiv-tracker"]=this["webpackJsonpxiv-tracker"]||[]).push([[0],{213:function(e,a,t){e.exports=t.p+"static/media/logo.2ea2ba20.png"},223:function(e,a,t){e.exports=t(495)},228:function(e,a,t){},278:function(e,a){},280:function(e,a){},290:function(e,a){},292:function(e,a){},317:function(e,a){},319:function(e,a){},320:function(e,a){},325:function(e,a){},327:function(e,a){},346:function(e,a){},358:function(e,a){},361:function(e,a){},367:function(e,a){},369:function(e,a){},392:function(e,a){},495:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(212),l=t.n(c),s=(t(228),t(497)),o=t(213),i=t.n(o);var u=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("a",{className:"navbar-brand",href:"/"},n.a.createElement("img",{src:i.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"logo"})," XIV Character Tracker"),n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement(s.a,{className:"nav-link",to:"/search"},"Search")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.a,{to:"/user/test",className:"nav-link"},"User Page"))),n.a.createElement("button",null,"Login/out button would go here if it worked")))};var m=function(){return n.a.createElement("footer",{className:"footer"},"Made by ",n.a.createElement("a",{href:"https:github.com/arbdt"},"Arbdt")," in 2021 using ",n.a.createElement("a",{href:"https://reactjs.org/"},"React")," and ",n.a.createElement("a",{href:"https://mongoosejs.com/"},"Mongoose"),". Powered by ",n.a.createElement("a",{href:"https://github.com/xivapi/xivapi-js"},"XIVAPI"),". FFXIV \xa9 2010 Square Enix.")},h=t(498),v=t(499),d=t(214),p=t(49),f=t(18),E=t.n(f),b=t(39);var g=function(e){var a=e.newJobData,t=e.oldJobData;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",null,a.classjobName),n.a.createElement("p",null,"Level: ",a.classjobLevel," ",void 0!==t.classjobLevel&&t.classjobLevel<a.classjobLevel?n.a.createElement("span",{className:"trackedChange"}," +",a.classjobLevel-t.classjobLevel):n.a.createElement(n.a.Fragment,null)),n.a.createElement("meter",{value:a.currentExp,max:a.maxExp},a.currentExp," / ",a.maxExp),n.a.createElement("p",null,"Experience: ",a.currentExp," / ",a.maxExp," ",a.classjobLevel===t.classjobLevel&&a.currentExp>t.currentExp?n.a.createElement("span",{className:"trackedChange"}," +",a.currentExp-t.currentExp):n.a.createElement(n.a.Fragment,null))))},N=t(40),x=t.n(N),C=t(77),j=t.n(C),k=new j.a,S=function(){var e=Object(b.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.character.get(a);case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/api/character/".concat(a));case 3:if(null===(t=e.sent).data){e.next=7;break}return console.log(t.data),e.abrupt("return",t.data);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}();var I=function(e){var a=e.match.params.charId,t=Object(r.useState)({charId:0,charName:"",charServer:"",charAvatar:"",charPortrait:"",charClasses:[],achievementCount:0,achievementPoints:0,minionCount:0,mountCount:0}),c=Object(p.a)(t,2),l=c[0],s=c[1],o=Object(r.useState)({charId:0,charName:"",charServer:"",charAvatar:"",charPortrait:"",charClasses:[],achievementCount:0,achievementPoints:0,minionCount:0,mountCount:0}),i=Object(p.a)(o,2),u=i[0],m=i[1];return Object(r.useEffect)((function(){S(a).then((function(e){console.log(e);var t=e.Character.ClassJobs.map((function(e){return{charId:a,classjobName:e.UnlockedState.Name,classjobFullname:e.Name,classjobLevel:e.Level,currentExp:e.ExpLevel,maxExp:e.ExpLevelMax}})),r={charId:a,charName:e.Character.Name,charServer:e.Character.Server,charAvatar:e.Character.Avatar,charPortrait:e.Character.Portrait,charClasses:t,minionCount:e.Minions.length,mountCount:e.Mounts.length};s(r)})),y(a).then((function(e){m(e)}))}),[a]),n.a.createElement("div",{className:"card characterSheet"},n.a.createElement("h3",{className:"card-title"},l.charName," of ",l.charServer," "),n.a.createElement("div",{className:"card-body"},n.a.createElement("button",{onClick:function(){return e=l,void x.a.post("/api/character",e);var e}},n.a.createElement("i",{className:"fas fa-save"})," Save"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("p",null,"Minions: ",l.minionCount," ",void 0!==u&&l.minionCount>u.minionCount?n.a.createElement("span",{className:"trackedChange"}," +",l.minionCount-u.minionCount):n.a.createElement(n.a.Fragment,null)),n.a.createElement("p",null,"Mounts: ",l.mountCount," ",void 0!==u&&l.mountCount>u.mountCount?n.a.createElement("span",{className:"trackedChange"}," +",l.mountCount-u.mountCount):n.a.createElement(n.a.Fragment,null)))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("img",{src:l.charAvatar,alt:l.charName})),n.a.createElement("div",{className:"col"},void 0!==l.charClasses?l.charClasses.map((function(e){var a={};if(void 0!==u){var t,r=Object(d.a)(u.charClasses);try{for(r.s();!(t=r.n()).done;){var c=t.value;c.classjobFullname===e.classjobFullname&&(a=c)}}catch(l){r.e(l)}finally{r.f()}}return n.a.createElement(g,{newJobData:e,oldJobData:a,key:e.classjobName})})):n.a.createElement(n.a.Fragment,null)))))},w=t(220),O=function(){var e=Object(b.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/api/user/".concat(a));case 3:if(null===(t=e.sent).data){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(E.a.mark((function e(a,t){var r,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.savedCharacters.filter((function(e){return e!==t})),e.prev=1,e.next=4,x.a.put("/api/user/characters/remove",{userId:a.userIdentity,idList:r});case 4:if(null===(n=e.sent).data){e.next=7;break}return e.abrupt("return",n.data);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a,t){return e.apply(this,arguments)}}();function F(e){e.preventDefault(),L(e.target.dataset.user,e.target.dataset.char)}var A=function(){var e=Object(b.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("/api/user/characters",{data:a});case 3:if(null===(t=e.sent).data){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}();var M=function(e){var a=e.match.params.userId,t=Object(r.useState)(),c=Object(p.a)(t,2),l=c[0],s=c[1],o=Object(r.useState)([]),i=Object(p.a)(o,2),u=i[0],m=i[1];return Object(r.useEffect)((function(){void 0!==a&&O(a).then((function(e){console.log("retrieving user data: ".concat(e)),s(e)}))}),[a]),Object(r.useEffect)((function(){void 0!==l&&void 0!==l.savedCharacters&&(console.log("retrieving character data"),A(l.savedCharacters).then((function(e){m((function(a){return[].concat(Object(w.a)(a),[e])}))})))}),[l]),n.a.createElement("div",null,n.a.createElement("h3",null,"Welcome User ",void 0!==l?l.userIdentity:"","!"),n.a.createElement("p",null,0!==u.length?"You've saved the following characters in our database:":"You have no saved characters."),n.a.createElement("div",null,n.a.createElement("ul",{className:"list-group"}," ",0!==u.length&&void 0!==u[0]?u.map((function(e){return n.a.createElement("li",{key:e.charId,className:"list-group-item"},n.a.createElement("img",{src:e.charAvatar,alt:e.charName,width:"64",height:"64"}),"\u2003 ",e.charName," \u2003 ",e.charServer,"\u2003 ",n.a.createElement("a",{href:"/character/"+e.charId},n.a.createElement("i",{class:"fas fa-eye"})," View"),"\u2003 ",n.a.createElement("button",{onClick:F,"data-char":e.charId,"data-user":l},n.a.createElement("i",{className:"fas fa-user-slash"})," Untrack"))})):n.a.createElement(n.a.Fragment,null))))},P=t(215),D=t(216),R=t(217),J=t(67),U=t(221),V=t(219),T=new j.a,B=function(e){Object(U.a)(t,e);var a=Object(V.a)(t);function t(e){var r;return Object(D.a)(this,t),(r=a.call(this,e)).serverList=["Adamantoise","Aegis","Alexander","Anima","Asura","Atomos","Bahamut","Balmung","Behemoth","Belias","Brynhildr","Cactuar","Carbuncle","Cerberus","Chocobo","Coeurl","Diabolos","Durandal","Excalibur","Exodus","Faerie","Famfrit","Fenrir","Garuda","Gilgamesh","Goblin","Gungnir","Hades","Hyperion","Ifrit","Ixion","Jenova","Kujata","Lamia","Leviathan","Lich","Louisoix","Malboro","Mandragora","Masamune","Mateus","Midgardsormr","Moogle","Odin","Omega","Pandemonium","Phoenix","Ragnarok","Ramuh","Ridill","Sargatanas","Shinryu","Shiva","Siren","Tiamat","Titan","Tonberry","Typhon","Ultima","Ultros","Unicorn","Valefor","Yojimbo","Zalera","Zeromus","Zodiark"],r.state={charName:"",serverName:"",searchResults:[]},r.handleInputChange=r.handleInputChange.bind(Object(J.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(J.a)(r)),r}return Object(R.a)(t,[{key:"handleInputChange",value:function(e){var a=e.target,t=a.value,r=a.name;this.setState(Object(P.a)({},r,t))}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),console.log("searching for ".concat(this.state.charName," of ").concat(this.state.serverName)),T.character.search(this.state.charName,{server:this.state.serverName}).then((function(e){console.log(e),a.setState({searchResults:e.Results})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"card m-4"},n.a.createElement("form",{className:"form card-body",onSubmit:this.handleSubmit},n.a.createElement("h3",{className:"card-title"},"Search for a character"),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"charSearchInput"},"Character Name: "),n.a.createElement("input",{className:"form-control",type:"text",id:"charSearchInput",name:"charName",onChange:this.handleInputChange,required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"charServerInput"},"Server: "),n.a.createElement("input",{className:"form-control",list:"xivServers",id:"charServerInput",name:"serverName",onChange:this.handleInputChange,required:!0}),n.a.createElement("datalist",{id:"xivServers"},this.serverList.map((function(e){return n.a.createElement("option",{key:e,value:e})})))),n.a.createElement("button",{className:"btn",type:"submit"},n.a.createElement("i",{className:"fas fa-search"})," Search")),n.a.createElement("div",null,n.a.createElement("ul",{className:"list-group"}," ",void 0!==this.state.searchResults?this.state.searchResults.map((function(e){return n.a.createElement("li",{className:"list-group-item",key:e.ID},n.a.createElement("img",{src:e.Avatar,alt:e.Name,width:"64",height:"64"}),"\u2003 ",e.Name,"\u2003 ",n.a.createElement("a",{href:"/character/"+e.ID},n.a.createElement("i",{className:"fas fa-eye"})," View"))})):n.a.createElement(n.a.Fragment,null))))}}]),t}(r.Component);var X=function(){return n.a.createElement("div",{className:"jumbotron"},n.a.createElement("h1",{className:"display-4"},"FFX|V Character Tracker"),n.a.createElement("p",{className:"lead"},"Welcome to the X|V Character Tracker. Use the form below to find and display the profile of a character."),n.a.createElement("hr",{className:"my-4"}),n.a.createElement("p",null,"Log in using [insert authorisation service here] to save a character's current stats for comparison."),n.a.createElement("div",{className:"lead"},n.a.createElement(B,null)))};var G=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h.a,null,n.a.createElement("div",null,n.a.createElement(u,null),n.a.createElement("main",{className:"container"},n.a.createElement(v.a,{path:"/character/:charId",component:I}),n.a.createElement(v.a,{path:"/user/:userId",component:M}),n.a.createElement(v.a,{path:"/search",component:B}),n.a.createElement(v.a,{exact:!0,path:"/",component:X})),n.a.createElement(m,null))))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.0e5b46cf.chunk.js.map