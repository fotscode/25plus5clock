(this.webpackJsonp25plus5clock=this.webpackJsonp25plus5clock||[]).push([[0],{14:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s(3),a=s(4),c=s(6),r=s(5),h=s(2),o=s.n(h),l=s(8),d=s.n(l),u=s(1),b=function(e){Object(c.a)(s,e);var t=Object(r.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={session:25,break:5,current:"Session",minutes:"25",seconds:"00",isRunning:!1},n.handleReset=n.handleReset.bind(Object(u.a)(n)),n.handleDecrementSession=n.handleDecrementSession.bind(Object(u.a)(n)),n.handleDecrementBreak=n.handleDecrementBreak.bind(Object(u.a)(n)),n.handleIncrementBreak=n.handleIncrementBreak.bind(Object(u.a)(n)),n.handleIncrementSession=n.handleIncrementSession.bind(Object(u.a)(n)),n.tick=n.tick.bind(Object(u.a)(n)),n.handleToggle=n.handleToggle.bind(Object(u.a)(n)),n}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3),document.getElementById("beep").load()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){if(this.state.isRunning){var e=this.state.current,t=Number(this.state.seconds),s=Number(this.state.minutes);"01"===this.state.seconds&&"00"===this.state.minutes&&(document.getElementById("beep").load(),document.getElementById("beep").play()),"00"===this.state.seconds&&"00"===this.state.minutes&&"Session"===this.state.current?(e="Break",t="00",(s=this.state.break)<10&&(s="0"+s)):"00"===this.state.seconds&&"00"===this.state.minutes&&"Break"===this.state.current?(e="Session",t="00",(s=this.state.session)<10&&(s="0"+s)):(t>0?t--:(t="59",s--),t<10&&(t="0"+t),s<10&&(s="0"+s)),this.setState({minutes:s,seconds:t,current:e})}}},{key:"handleToggle",value:function(){this.setState({isRunning:!this.state.isRunning})}},{key:"handleReset",value:function(){this.setState({session:25,break:5,current:"Session",minutes:"25",seconds:"00",isRunning:!1}),document.getElementById("beep").load()}},{key:"handleDecrementSession",value:function(){if(!(this.state.session<=1||this.state.isRunning)){var e=this.state.session-1,t=this.state.seconds,s=this.state.minutes;"Session"===this.state.current&&(t="00",(s=e)<10&&(s="0"+s)),this.setState({session:e,minutes:s,seconds:t})}}},{key:"handleDecrementBreak",value:function(){if(!(this.state.break<=1||this.state.isRunning)){var e=this.state.break-1,t=this.state.seconds,s=this.state.minutes;"Break"===this.state.current&&(t="00",(s=e)<10&&(s="0"+s)),this.setState({break:e,minutes:s,seconds:t})}}},{key:"handleIncrementSession",value:function(){if(!(this.state.session>=60||this.state.isRunning)){var e=this.state.session+1,t=this.state.seconds,s=this.state.minutes;"Session"===this.state.current&&(t="00",(s=e)<10&&(s="0"+s)),this.setState({session:e,minutes:s,seconds:t})}}},{key:"handleIncrementBreak",value:function(){if(!(this.state.break>=60||this.state.isRunning)){var e=this.state.break+1,t=this.state.seconds,s=this.state.minutes;"Break"===this.state.current&&(t="00",(s=e)<10&&(s="0"+s)),this.setState({break:e,minutes:s,seconds:t})}}},{key:"render",value:function(){return Object(n.jsxs)("div",{id:"clock-container",children:[Object(n.jsx)("h1",{className:"highlight",children:"25 + 5 Clock"}),Object(n.jsxs)("section",{id:"config-section",children:[Object(n.jsxs)("div",{className:"cfg-elem",children:[Object(n.jsx)("label",{for:"break-length",id:"break-label",children:"Break Length"}),Object(n.jsx)("button",{id:"break-increment",onClick:this.handleIncrementBreak,children:Object(n.jsx)("i",{className:"fa fa-arrow-up fa-2x"})}),Object(n.jsx)("p",{id:"break-length",children:this.state.break}),Object(n.jsx)("button",{id:"break-decrement",onClick:this.handleDecrementBreak,children:Object(n.jsx)("i",{className:"fa fa-arrow-down fa-2x"})})]}),Object(n.jsxs)("div",{className:"cfg-elem",children:[Object(n.jsx)("label",{id:"session-label",children:"Session Length"}),Object(n.jsx)("button",{id:"session-increment",onClick:this.handleIncrementSession,children:Object(n.jsx)("i",{className:"fa fa-arrow-up fa-2x"})}),Object(n.jsx)("p",{id:"session-length",children:this.state.session}),Object(n.jsx)("button",{id:"session-decrement",onClick:this.handleDecrementSession,children:Object(n.jsx)("i",{className:"fa fa-arrow-down fa-2x"})})]})]}),Object(n.jsx)("section",{id:"timer-section",children:Object(n.jsxs)("div",{id:"timer-container",children:[Object(n.jsx)("label",{id:"timer-label",children:this.state.current}),Object(n.jsx)("audio",{id:"beep",src:"https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/SYNTH%20AND%20ELECTRONIC%20LOOPS/1382[kb]180_watch-beep-acid-melody.wav.mp3"}),Object(n.jsxs)("h2",{id:"time-left",className:"highlight",children:[this.state.minutes,":",this.state.seconds]})]})}),Object(n.jsxs)("section",{id:"control-section",children:[Object(n.jsxs)("button",{id:"start_stop",onClick:this.handleToggle,children:[Object(n.jsx)("i",{className:"fa fa-play fa-2x"}),Object(n.jsx)("i",{className:"fa fa-pause fa-2x"})]}),Object(n.jsx)("button",{id:"reset",onClick:this.handleReset,children:Object(n.jsx)("i",{className:"fa fa-refresh fa-2x"})})]})]})}}]),s}(o.a.Component),j=function(e){Object(c.a)(s,e);var t=Object(r.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(a.a)(s,[{key:"render",value:function(){return Object(n.jsx)("div",{id:"myApp",children:Object(n.jsx)(b,{})})}}]),s}(o.a.Component);d.a.render(Object(n.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3e982052.chunk.js.map