(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/coin.c79dca99.mp3"},function(e,t,a){e.exports=a.p+"static/media/glass_break_sms.bed9ba82.mp3"},function(e,t,a){e.exports=a.p+"static/media/revealed.6821419b.mp3"},function(e,t,a){e.exports=a.p+"static/media/boom.550be808.wav"},function(e,t,a){e.exports=a.p+"static/media/clap.a6e86dd7.wav"},function(e,t,a){e.exports=a.p+"static/media/hihat.4ba39e07.wav"},function(e,t,a){e.exports=a.p+"static/media/kick.4dd58595.wav"},function(e,t,a){e.exports=a.p+"static/media/openhat.a62db465.wav"},,function(e,t,a){e.exports=a(44)},,,,,,function(e,t,a){},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(16),c=a.n(l),i=(a(32),a(3)),r=a(4),s=a(6),u=a(5),m=a(7),d=a(46),p=a(45),f=[{title:"Home",routerLink:"/home"},{title:"Money",routerLink:"/money"},{title:"Social",routerLink:"/social"},{title:"Javascript 30",routerLink:"/javascript-30",submenu:[{title:"Drum hits",routerLink:"/javascript-30/drum-hits"},{title:"Clock",routerLink:"/javascript-30/clock"}]}],h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"buildSubMenu",value:function(e){var t=e.parentTitle,a=e.submenu.map(function(e,a){return o.a.createElement("li",{key:a},o.a.createElement(p.a,{to:{pathname:e.routerLink,search:"?title=".concat(t+" > "+e.title)}},e.title))});return o.a.createElement("ul",{className:"sub-nav-list"},a)}},{key:"buildMenu",value:function(e){var t=this;return e.map(function(e,a){return o.a.createElement("li",{key:a},o.a.createElement(p.a,{to:{pathname:e.routerLink}},e.title),e.submenu?t.buildSubMenu({parentTitle:e.title,submenu:e.submenu}):null)})}},{key:"render",value:function(){return o.a.createElement("ul",{className:"nav-list"},this.buildMenu(f))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("header",{className:"header"},o.a.createElement(p.a,{to:"/",className:"text-center inline-block"},o.a.createElement("img",{src:this.props.logo,alt:"site-logo"})," ",o.a.createElement("br",null),this.props.slogan),o.a.createElement(h,null))}}]),t}(n.Component),v=a(47),b=function(){return o.a.createElement("h1",null,"Home")},y=a(11),g=a(2),E=a(14),S=a.n(E),O=a(17),j=a.n(O),C=a(18),N=a.n(C),P=a(19),w=a.n(P);a(37);function B(e){return Math.floor(Math.random()*Math.floor(e))}var M=function(e){return new Promise(function(t,a){var n=new Audio(e);n?t(n):a(n)})},x=function(e){console.log(e);var t=e.coins?e.coins.map(function(t,a){return o.a.createElement("span",{key:a,onClick:function(a){e.onCoinClick(t,a)},className:"coin"},t)}):o.a.createElement("span",{className:"no-coins"},"No coins"),a=e.coins?e.bills.map(function(t,a){return o.a.createElement("span",{key:a,onClick:function(a){e.onBillClick(t,a)},className:"bill"},t)}):o.a.createElement("span",{className:"no-bills"},"No coins");return o.a.createElement("div",{className:"money-tray"},o.a.createElement("div",{className:"coins-wrapper"},o.a.createElement("h4",null,"Coins"),t),o.a.createElement("div",{className:"bills-wrapper"},o.a.createElement("h4",{className:"text-right"},"Bills"),a))},T=function(e){return console.log(e),o.a.createElement("div",{className:"money-pot ".concat(e.revealPotFlag?"reveal-pot":""," ").concat(e.breakedFlag?"reveal-pot breaked":""," ")})},L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).moneyState={breakedFlag:!1,revealPotChecked:!1,coins:[1,2,5,10,20],bills:[1,2,5,10,20,50,100,200,500,2e3],collectMoney:[],totalSavings:0},a.state=a.moneyState,a.onCoinClick=a.onCoinClick.bind(Object(g.a)(Object(g.a)(a))),a.onBillClick=a.onBillClick.bind(Object(g.a)(Object(g.a)(a))),a.onRevealPotHandler=a.onRevealPotHandler.bind(Object(g.a)(Object(g.a)(a))),a.breakPotKnowSavings=a.breakPotKnowSavings.bind(Object(g.a)(Object(g.a)(a))),a.onReBuildSavings=a.onReBuildSavings.bind(Object(g.a)(Object(g.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({coins:this.state.coins.reverse()})}},{key:"componentWillUnMount",value:function(){}},{key:"calculateTotalSavings",value:function(e){if(console.clear(),console.log(e),e.length){var t=e.reduce(function(e,t){return e+t});return console.log(t),console.log("Your total saving in the pot is: ",t),this.setState({totalSavings:t}),t}}},{key:"breakPotKnowSavings",value:function(){var e=this;this.calculateTotalSavings(this.state.collectMoney),M(N.a).then(function(e){e.play()}),setTimeout(function(){e.setState({revealPotChecked:!0,breakedFlag:!0})},190)}},{key:"addToPot",value:function(e,t,a){var n,o=S()(a.target);console.log("Clicked whichCoin ",e),"coin"===e&&M&&M(j.a).then(function(e){e.play()}),o.css({top:"".concat(B(320),"px"),left:"".concat(B(240),"px")}),n=o.clone(!1),S()(".money-pot").append(n);var l=Object(y.a)(this.state.collectMoney).concat([t]);console.log("adding money to savings ",l),n.css({transform:"rotateZ( ".concat(B(360),"deg) ")}),this.setState({collectMoney:l})}},{key:"onCoinClick",value:function(e,t){e&&this.addToPot("coin",e,t)}},{key:"onBillClick",value:function(e,t){console.log(t),e&&this.addToPot("bill",e,t)}},{key:"onRevealPotHandler",value:function(){this.state.revealPotChecked||M(w.a).then(function(e){e.play()}),this.setState({revealPotChecked:!this.state.revealPotChecked})}},{key:"onReBuildSavings",value:function(){console.log("test"),this.setState({breakedFlag:!1,revealPotChecked:!1,collectMoney:[],totalSavings:0}),S()(".money-pot").html("")}},{key:"render",value:function(){var e=this,t=function(t){return e.state.collectMoney.length?o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:e.state.revealPotChecked,name:"chkRevealPot",value:e.state.revealPotChecked,onChange:e.onRevealPotHandler})," Reveal Pot"):""},a=function(){return!e.state.breakedFlag&&e.state.collectMoney.length?o.a.createElement("label",{className:"text-right"},"You want to know you savings ?",o.a.createElement("br",null),"  ",o.a.createElement("button",{className:" btn-small",onClick:e.breakPotKnowSavings},"Break Now")):""},n=function(){return e.state.totalSavings?o.a.createElement("div",{className:"total-savings text-center"},"Your total saving till now ",o.a.createElement("h4",null,e.state.totalSavings)):""};return o.a.createElement("div",{className:"money-container"},o.a.createElement("h1",null,"Your daily money saver"),e.state.breakedFlag?o.a.createElement("div",{className:"clearfix"},o.a.createElement(n,null)):o.a.createElement("div",{className:"clearfix"},o.a.createElement(x,{coins:e.state.coins,bills:e.state.bills,onCoinClick:e.onCoinClick,onBillClick:e.onBillClick}),o.a.createElement("div",{className:"float-right text-right"},o.a.createElement(t,null),o.a.createElement(a,null))),o.a.createElement(T,{takeMoney:"0",revealPotFlag:this.state.revealPotChecked,breakedFlag:this.state.breakedFlag}),o.a.createElement(function(){return e.state.totalSavings?o.a.createElement("div",{className:"rebuild-savings text-center"},o.a.createElement("button",{className:" btn-small",onClick:e.onReBuildSavings},"Rebuild Savings from Zero")):""},null))}}]),t}(n.Component),D=(a(39),function(e){return console.log(e.msg),o.a.createElement("p",{className:"error"},e.msg)}),F=function(e){return console.log(e),e.buildBlocks.map(function(t,a){if(t)return o.a.createElement("div",{className:"relative float-left ",key:a},o.a.createElement("a",{href:"#",className:"social-delete-link",onClick:function(){e.onDelete(t)}},"x"),o.a.createElement(p.a,{to:"/social",className:"float-left social-block ".concat("social-block-"+t.toLowerCase())},o.a.createElement("span",null,t)))})},R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).socialState={selectError:!1,defaultLimit:2,defaultSocialBlocks:[],selectedPlatform:"null",populatePlatforms:[]},a.state=a.socialState,a.addSocial=a.addSocial.bind(Object(g.a)(Object(g.a)(a))),a.platformNameChange=a.platformNameChange.bind(Object(g.a)(Object(g.a)(a))),a.onDelete=a.onDelete.bind(Object(g.a)(Object(g.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log("Comp did mount method called");var e=["Vero","Befilo","Twoo","Opportunity","Zoimas","Facebook","Pinterest","LinkedIn","Google+","Reddit","Gab","Mastodon","Ello"," Woddal","Hello"," MeWe"," Raftr"," OneWay "," EyeEm","Care2","GirlsAskGuys","Houseparty","Gentlemint","Canoodle","Bucketlist"," Brainly ","hi5"," Tiktok ","NapSack","DeviantArt","Flickr","My Muslim Friends Book","BlackPlanet"," Steemit "," Amino "," InLinx ","Mylife","MeetVibe","Spinchat","Soup","Diaspora","Kiwibox","Meetup","Badoo","Tagged","VK","Tumblr","Hub Culture","Vero","Befilo","Twoo","Opportunity","Zoimas","Facebook","Twitter","Instagram","Pinterest","LinkedIn","Google+","Reddit","Gab","Mastodon","Ello","Woddal","Hello","MeWe","Raftr","OneWay","EyeEm","Care2","GirlsAskGuys","Houseparty","Gentlemint","Canoodle","Bucketlist","Brainly","hi5","Tiktok","NapSack","DeviantArt","Flickr","My Muslim Friends Book","BlackPlanet","Steemit","Amino","InLinx","Mylife","MeetVibe","Spinchat","Soup","Diaspora","Kiwibox","Meetup"];e=e.map(function(e){return e.trim()}),this.updateBlocksState(e,this.state.defaultLimit),console.log("this.props",this.state)}},{key:"componentDidUpdate",value:function(){}},{key:"onDelete",value:function(e){console.clear();var t=Object(y.a)(this.state.defaultSocialBlocks),a=Object(y.a)(this.state.populatePlatforms);e&&(t=t.filter(function(t){return t!==e}),a.push(e),a=a.sort(),this.setState({defaultSocialBlocks:t,populatePlatforms:a}),t.length||setTimeout(function(){alert("You have delete all the social platforms!!!")},500))}},{key:"updateBlocksState",value:function(e,t){var a=e.sort().filter(function(e,t,a){return a.indexOf(e)===t}),n=a.filter(function(e,a){return a<t});this.setState({populatePlatforms:a.filter(function(e,a){return a>t}),defaultSocialBlocks:n})}},{key:"platformNameChange",value:function(e){console.log(this.state.selectedPlatform),this.setState({selectedPlatform:e.target.value,selectError:"null"===e.target.value})}},{key:"addSocial",value:function(e){console.clear();var t=this.state.selectedPlatform;if("null"!==t&&void 0!==t){this.setState({selectError:!1});var a=this.state.populatePlatforms.findIndex(function(e){return e===t}),n=this.state.populatePlatforms.find(function(e){return e===t}),o=void 0!==n?Object(y.a)(this.state.defaultSocialBlocks).concat([n]):this.state.defaultSocialBlocks,l=Object(y.a)(this.state.populatePlatforms.filter(function(e,t){return t!==a}));this.setState({defaultSocialBlocks:o,populatePlatforms:l})}else this.setState({selectError:!0}),console.error("Please select social platform to add.")}},{key:"render",value:function(){var e=this;return console.log(this.state),o.a.createElement("div",{className:"social-content"},o.a.createElement("h1",null,"Social"),o.a.createElement("div",{className:"social-form-panel"},o.a.createElement("select",{className:"inline-block",name:"platformName",value:this.state.selectedPlatform,onChange:this.platformNameChange},o.a.createElement("option",{value:"null"},"Select social platform"),e.state.populatePlatforms.sort().map(function(e,t){return o.a.createElement("option",{key:t,value:e},e)})),this.state.selectError?o.a.createElement(D,{msg:"Please select social platform to add."}):"",o.a.createElement("button",{className:"inline-block",onClick:this.addSocial,disabled:this.state.selectError},"Add Social")),o.a.createElement("div",{className:"clearfix"}),o.a.createElement(F,{buildBlocks:this.state.defaultSocialBlocks,onDelete:this.onDelete}))}}]),t}(n.Component),A=a(20),G=a.n(A),H=a(21),K=a.n(H),W=a(22),I=a.n(W),U=a(23),V=a.n(U),Y=a(24),J=a.n(Y),Z=(a(41),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"buildKeysOnScreen",value:function(){return[{key:"a",keyCode:65,audioSrc:G.a},{key:"S",keyCode:83,audioSrc:K.a},{key:"D",keyCode:68,audioSrc:I.a},{key:"F",keyCode:70,audioSrc:V.a},{key:"G",keyCode:71,audioSrc:J.a}].map(function(e,t){return o.a.createElement("div",{className:"key",key:t,"data-key":e.keyCode},o.a.createElement("audio",{"data-key":e.keyCode,src:e.audioSrc}),o.a.createElement("kbd",null,e.key))})}},{key:"playsound",value:function(e){console.log(e);var t=document.querySelector('audio[data-key="'.concat(e.keyCode,'"]')),a=document.querySelector('div[data-key="'.concat(e.keyCode,'"]'));(t||a)&&(a.classList.add("playing"),t.currentTime=0,t.play())}},{key:"removeTransition",value:function(e){"transform"===e.propertyName&&e.target.classList.remove("playing")}},{key:"componentDidMount",value:function(){var e=this;Array.from(document.querySelectorAll(".key")).forEach(function(t){return t.addEventListener("transitionend",e.removeTransition)}),window.addEventListener("keydown",this.playsound)}},{key:"render",value:function(){return o.a.createElement("div",{className:"keyWrapper"},this.buildKeysOnScreen())}}]),t}(n.Component)),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).defaulTitle="Javascript 30",a.js30State={title:""},a.state=a.js30State,a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=new URLSearchParams(e.location.search),n=new URLSearchParams(this.props.location.search),o=n.get("title")?n.get("title"):this.defaulTitle;console.log("Did update  ",n.get("title")),a.get("title")!==n.get("title")&&o&&(console.log("title text",o),this.setState({title:o}))}},{key:"componentDidMount",value:function(){var e=this.defaulTitle;e&&this.setState({title:e})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,this.state.title),o.a.createElement(v.a,{path:"".concat(this.props.match.path,"/:lesson"),component:Z}),o.a.createElement(v.a,{exact:!0,path:this.props.match.path,render:function(){return o.a.createElement("h3",null,"Please select a topic.")}}))}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app-body"},o.a.createElement(v.a,{exact:!0,path:"/",component:b}),o.a.createElement(v.a,{exact:!0,path:"/money",component:L}),o.a.createElement(v.a,{exact:!0,path:"/social",component:R}),o.a.createElement(v.a,{path:"/javascript-30",component:q}))}}]),t}(n.Component),z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"clearfix"},o.a.createElement("strong",{className:"float-left"},this.props.note),o.a.createElement("small",{className:"float-right"},this.props.copyright)))}}]),t}(n.Component),Q="Practise to Master!",X="//logo.clearbit.com/spotify.com?size=80&greyscale=true",$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(k,{slogan:Q,logo:X}),o.a.createElement(_,null),o.a.createElement(z,{note:"Thank you for visit.",copyright:"App's all right reserved with its Author."})))}}]),t}(n.Component);c.a.render(o.a.createElement($,null),document.getElementById("root"))}],[[26,2,1]]]);
//# sourceMappingURL=main.c22b1867.chunk.js.map