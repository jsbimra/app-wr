(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/coin.c79dca99.mp3"},18:function(e,t,a){e.exports=a.p+"static/media/glass_break_sms.bed9ba82.mp3"},19:function(e,t,a){e.exports=a.p+"static/media/revealed.6821419b.mp3"},21:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),c=a.n(o),i=(a(27),a(4)),s=a(5),r=a(7),u=a(6),m=a(8),d=a(39),f=a(38),p=["Home","Money","Social","Feedback"],h=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"createListNav",value:function(){return p.map(function(e,t){var a=e.replace(" ","-").toLowerCase();return l.a.createElement("li",{key:t},l.a.createElement(f.a,{to:"/"+a},e))})}},{key:"render",value:function(){return l.a.createElement("ul",{className:"nav-list"},this.createListNav())}}]),t}(n.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"header"},l.a.createElement(f.a,{to:"/",className:"text-center inline-block"},l.a.createElement("img",{src:this.props.logo,alt:"site-logo"})," ",l.a.createElement("br",null),this.props.slogan),l.a.createElement(h,null))}}]),t}(n.Component),k=a(40),v=function(){return l.a.createElement("h1",null,"Home")},g=a(11),y=a(2),E=a(14),O=a.n(E),S=a(17),C=a.n(S),j=a(18),N=a.n(j),P=a(19),B=a.n(P);a(32);function M(e){return Math.floor(Math.random()*Math.floor(e))}var x=function(e){return new Promise(function(t,a){var n=new Audio(e);n?t(n):a(n)})},w=function(e){console.log(e);var t=e.coins?e.coins.map(function(t,a){return l.a.createElement("span",{key:a,onClick:function(a){e.onCoinClick(t,a)},className:"coin"},t)}):l.a.createElement("span",{className:"no-coins"},"No coins"),a=e.coins?e.bills.map(function(t,a){return l.a.createElement("span",{key:a,onClick:function(a){e.onBillClick(t,a)},className:"bill"},t)}):l.a.createElement("span",{className:"no-bills"},"No coins");return l.a.createElement("div",{className:"money-tray"},l.a.createElement("div",{className:"coins-wrapper"},l.a.createElement("h4",null,"Coins"),t),l.a.createElement("div",{className:"bills-wrapper"},l.a.createElement("h4",{className:"text-right"},"Bills"),a))},F=function(e){return console.log(e),l.a.createElement("div",{className:"money-pot ".concat(e.revealPotFlag?"reveal-pot":""," ").concat(e.breakedFlag?"reveal-pot breaked":""," ")})},R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).moneyState={breakedFlag:!1,revealPotChecked:!1,coins:[1,2,5,10,20],bills:[1,2,5,10,20,50,100,200,500,2e3],collectMoney:[],totalSavings:0},a.state=a.moneyState,a.onCoinClick=a.onCoinClick.bind(Object(y.a)(Object(y.a)(a))),a.onBillClick=a.onBillClick.bind(Object(y.a)(Object(y.a)(a))),a.onRevealPotHandler=a.onRevealPotHandler.bind(Object(y.a)(Object(y.a)(a))),a.breakPotKnowSavings=a.breakPotKnowSavings.bind(Object(y.a)(Object(y.a)(a))),a.onReBuildSavings=a.onReBuildSavings.bind(Object(y.a)(Object(y.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({coins:this.state.coins.reverse()})}},{key:"componentWillUnMount",value:function(){}},{key:"calculateTotalSavings",value:function(e){if(console.clear(),console.log(e),e.length){var t=e.reduce(function(e,t){return e+t});return console.log(t),console.log("Your total saving in the pot is: ",t),this.setState({totalSavings:t}),t}}},{key:"breakPotKnowSavings",value:function(){var e=this;this.calculateTotalSavings(this.state.collectMoney),x(N.a).then(function(e){e.play()}),setTimeout(function(){e.setState({revealPotChecked:!0,breakedFlag:!0})},80)}},{key:"addToPot",value:function(e,t,a){var n,l=O()(a.target);console.log("Clicked whichCoin ",e),"coin"===e&&x&&x(C.a).then(function(e){e.play()}),l.css({top:"".concat(M(320),"px"),left:"".concat(M(240),"px")}),n=l.clone(!1),O()(".money-pot").append(n);var o=Object(g.a)(this.state.collectMoney).concat([t]);console.log("adding money to savings ",o),n.css({transform:"rotateZ( ".concat(M(360),"deg) ")}),this.setState({collectMoney:o})}},{key:"onCoinClick",value:function(e,t){e&&this.addToPot("coin",e,t)}},{key:"onBillClick",value:function(e,t){console.log(t),e&&this.addToPot("bill",e,t)}},{key:"onRevealPotHandler",value:function(){this.state.revealPotChecked||x(B.a).then(function(e){e.play()}),this.setState({revealPotChecked:!this.state.revealPotChecked})}},{key:"onReBuildSavings",value:function(){console.log("test"),this.setState({breakedFlag:!1,revealPotChecked:!1,collectMoney:[],totalSavings:0}),O()(".money-pot").html("")}},{key:"render",value:function(){var e=this,t=function(t){return e.state.collectMoney.length?l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:e.state.revealPotChecked,name:"chkRevealPot",value:e.state.revealPotChecked,onChange:e.onRevealPotHandler})," Reveal Pot"):""},a=function(){return!e.state.breakedFlag&&e.state.collectMoney.length?l.a.createElement("label",{className:"text-right"},"You want to know you savings ?",l.a.createElement("br",null),"  ",l.a.createElement("button",{className:" btn-small",onClick:e.breakPotKnowSavings},"Break Now")):""},n=function(){return e.state.totalSavings?l.a.createElement("div",{className:"total-savings text-center"},"Your total saving till now: ",e.state.totalSavings):""};return l.a.createElement("div",{className:"money-container"},l.a.createElement("h1",null,"Your daily money saver"),e.state.breakedFlag?l.a.createElement("div",{className:"clearfix"},l.a.createElement(n,null)):l.a.createElement("div",{className:"clearfix"},l.a.createElement(w,{coins:e.state.coins,bills:e.state.bills,onCoinClick:e.onCoinClick,onBillClick:e.onBillClick}),l.a.createElement("div",{className:"float-right text-right"},l.a.createElement(t,null),l.a.createElement(a,null))),l.a.createElement(F,{takeMoney:"0",revealPotFlag:this.state.revealPotChecked,breakedFlag:this.state.breakedFlag}),l.a.createElement(function(){return e.state.totalSavings?l.a.createElement("div",{className:"rebuild-savings text-center"},l.a.createElement("button",{className:" btn-small",onClick:e.onReBuildSavings},"Rebuild Savings from Zero")):""},null))}}]),t}(n.Component),T=(a(34),function(e){return console.log(e.msg),l.a.createElement("p",{className:"error"},e.msg)}),D=function(e){return console.log(e),e.buildBlocks.map(function(t,a){if(t)return l.a.createElement("div",{className:"relative float-left ",key:a},l.a.createElement("a",{href:"#",className:"social-delete-link",onClick:function(){e.onDelete(t)}},"x"),l.a.createElement(f.a,{to:"/social",className:"float-left social-block ".concat("social-block-"+t.toLowerCase())},l.a.createElement("span",null,t)))})},A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).socialState={selectError:!1,defaultLimit:2,defaultSocialBlocks:[],selectedPlatform:"null",populatePlatforms:[]},a.state=a.socialState,a.addSocial=a.addSocial.bind(Object(y.a)(Object(y.a)(a))),a.platformNameChange=a.platformNameChange.bind(Object(y.a)(Object(y.a)(a))),a.onDelete=a.onDelete.bind(Object(y.a)(Object(y.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("Comp did mount method called");var e=["Vero","Befilo","Twoo","Opportunity","Zoimas","Facebook","Pinterest","LinkedIn","Google+","Reddit","Gab","Mastodon","Ello"," Woddal","Hello"," MeWe"," Raftr"," OneWay "," EyeEm","Care2","GirlsAskGuys","Houseparty","Gentlemint","Canoodle","Bucketlist"," Brainly ","hi5"," Tiktok ","NapSack","DeviantArt","Flickr","My Muslim Friends Book","BlackPlanet"," Steemit "," Amino "," InLinx ","Mylife","MeetVibe","Spinchat","Soup","Diaspora","Kiwibox","Meetup","Badoo","Tagged","VK","Tumblr","Hub Culture","Vero","Befilo","Twoo","Opportunity","Zoimas","Facebook","Twitter","Instagram","Pinterest","LinkedIn","Google+","Reddit","Gab","Mastodon","Ello","Woddal","Hello","MeWe","Raftr","OneWay","EyeEm","Care2","GirlsAskGuys","Houseparty","Gentlemint","Canoodle","Bucketlist","Brainly","hi5","Tiktok","NapSack","DeviantArt","Flickr","My Muslim Friends Book","BlackPlanet","Steemit","Amino","InLinx","Mylife","MeetVibe","Spinchat","Soup","Diaspora","Kiwibox","Meetup"];e=e.map(function(e){return e.trim()}),this.updateBlocksState(e,this.state.defaultLimit),console.log("this.props",this.state)}},{key:"componentDidUpdate",value:function(){}},{key:"onDelete",value:function(e){console.clear();var t=Object(g.a)(this.state.defaultSocialBlocks),a=Object(g.a)(this.state.populatePlatforms);e&&(t=t.filter(function(t){return t!==e}),a.push(e),a=a.sort(),this.setState({defaultSocialBlocks:t,populatePlatforms:a}),t.length||setTimeout(function(){alert("You have delete all the social platforms!!!")},500))}},{key:"updateBlocksState",value:function(e,t){var a=e.sort().filter(function(e,t,a){return a.indexOf(e)===t}),n=a.filter(function(e,a){return a<t});this.setState({populatePlatforms:a.filter(function(e,a){return a>t}),defaultSocialBlocks:n})}},{key:"platformNameChange",value:function(e){console.log(this.state.selectedPlatform),this.setState({selectedPlatform:e.target.value,selectError:"null"===e.target.value})}},{key:"addSocial",value:function(e){console.clear();var t=this.state.selectedPlatform;if("null"!==t&&void 0!==t){this.setState({selectError:!1});var a=this.state.populatePlatforms.findIndex(function(e){return e===t}),n=this.state.populatePlatforms.find(function(e){return e===t}),l=void 0!==n?Object(g.a)(this.state.defaultSocialBlocks).concat([n]):this.state.defaultSocialBlocks,o=Object(g.a)(this.state.populatePlatforms.filter(function(e,t){return t!==a}));this.setState({defaultSocialBlocks:l,populatePlatforms:o})}else this.setState({selectError:!0}),console.error("Please select social platform to add.")}},{key:"render",value:function(){var e=this;return console.log(this.state),l.a.createElement("div",{className:"social-content"},l.a.createElement("h1",null,"Social"),l.a.createElement("div",{className:"social-form-panel"},l.a.createElement("select",{className:"inline-block",name:"platformName",value:this.state.selectedPlatform,onChange:this.platformNameChange},l.a.createElement("option",{value:"null"},"Select social platform"),e.state.populatePlatforms.sort().map(function(e,t){return l.a.createElement("option",{key:t,value:e},e)})),this.state.selectError?l.a.createElement(T,{msg:"Please select social platform to add."}):"",l.a.createElement("button",{className:"inline-block",onClick:this.addSocial,disabled:this.state.selectError},"Add Social")),l.a.createElement("div",{className:"clearfix"}),l.a.createElement(D,{buildBlocks:this.state.defaultSocialBlocks,onDelete:this.onDelete}))}}]),t}(n.Component),H=function(){return l.a.createElement("h1",null,"FeedBack")},G=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app-body"},l.a.createElement(k.a,{exact:!0,path:"/",component:v}),l.a.createElement(k.a,{exact:!0,path:"/money",component:R}),l.a.createElement(k.a,{exact:!0,path:"/social",component:A}),l.a.createElement(k.a,{exact:!0,path:"/feedback",component:H}))}}]),t}(n.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("p",{className:"clearfix"},l.a.createElement("strong",{className:"float-left"},this.props.note),l.a.createElement("small",{className:"float-right"},this.props.copyright)))}}]),t}(n.Component),I="Practise to Master!",K="//logo.clearbit.com/spotify.com?size=80&greyscale=true",W=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(b,{slogan:I,logo:K}),l.a.createElement(G,null),l.a.createElement(L,{note:"Thank you for visit.",copyright:"App's all right reserved with its Author."})))}}]),t}(n.Component);c.a.render(l.a.createElement(W,null),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.2c4d6b67.chunk.js.map