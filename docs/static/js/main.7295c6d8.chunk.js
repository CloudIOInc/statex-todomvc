(this["webpackJsonp@cloudio/statex-todomvc"]=this["webpackJsonp@cloudio/statex-todomvc"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),c=a.n(o),r=a(2),u=a(5),m=a(1),i=a(9),s=a(3),d=103;var p=Object(m.atom)({path:["todo","list"],defaultValue:[{id:100,text:"Learn Javascript",isComplete:!0},{id:101,text:"Learn React",isComplete:!0},{id:102,text:"Use CloudIO's StateX"},{id:103,text:"Launch Product"}]}),f=Object(m.action)((function(e,t){(0,e.set)(p,(function(e){return[{id:++d,text:t.trim()||"Empty Todo!"}].concat(Object(s.a)(e))}))})),b=Object(m.action)((function(e,t){var a,n=e.get,l=e.set,o=n(p);a=o.find((function(e){return!e.isComplete}))?o.map((function(e){return e.isComplete?e:Object(i.a)({},e,{isComplete:!0})})):o.map((function(e){return e.isComplete?Object(i.a)({},e,{isComplete:!1}):e})),l(p,a)})),h=Object(m.atom)({path:["todo","filter"],defaultValue:"Show All"}),C=Object(m.selector)({path:["todo","filteredIdAndIndex"],defaultValue:[],get:function(e){var t=e.get,a=t(h),n=t(p),l=n;switch(a){case"Show Completed":l=l.filter((function(e){return e.isComplete}));break;case"Show Uncompleted":l=l.filter((function(e){return!e.isComplete}))}return l.map((function(e){return{id:e.id,index:n.indexOf(e)}}))}}),E=Object(m.selector)({path:["todo","stats"],defaultValue:{totalNum:0,totalCompletedNum:0,totalUncompletedNum:0,percentCompleted:0},get:function(e){var t=(0,e.get)(p),a=t.length,n=t.filter((function(e){return e.isComplete})).length;return{totalNum:a,totalCompletedNum:n,totalUncompletedNum:a-n,percentCompleted:0===a?0:n/a}},shouldComponentUpdate:function(e,t){return!t||e.totalNum!==t.totalNum||e.totalCompletedNum!==t.totalCompletedNum||e.totalUncompletedNum!==t.totalUncompletedNum||e.percentCompleted!==t.percentCompleted}});var O=Object(n.memo)((function(){var e=Object(m.useStateXValue)(E).totalCompletedNum,t=Object(m.useStateXValueSetter)(h),a=Object(m.useStateXCallback)((function(e){var a=e.get,n=e.set,l=a(p).filter((function(e){return!e.isComplete}));n(p,l),t("Show All")}),[]);return e?l.a.createElement("button",{className:"clear-completed",onClick:a},"Clear completed"):null}));var j=Object(n.memo)((function(){var e=Object(m.useStateXValue)(E),t=e.percentCompleted,a=e.totalUncompletedNum,n=Object(m.useStateX)(h),o=Object(r.a)(n,2),c=o[0],i=o[1];return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},l.a.createElement("strong",null,a)," item left - ".concat(Math.round(100*t),"% complete")),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",onClick:function(){return i("Show All")},className:Object(u.a)({selected:"Show All"===c})},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",onClick:function(){return i("Show Uncompleted")},className:Object(u.a)({selected:"Show Uncompleted"===c})},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",onClick:function(){return i("Show Completed")},className:Object(u.a)({selected:"Show Completed"===c})},"Completed"))),l.a.createElement(O,null))}));var v=Object(n.memo)((function(e){var t=e.index,a=Object(n.useState)(!1),o=Object(r.a)(a,2),c=o[0],i=o[1],s=Object(m.useStateX)(["todo","list",":index","text"],"",{params:{index:t}}),d=Object(r.a)(s,2),p=d[0],f=d[1],b=Object(m.useStateX)(["todo","list",":index","isComplete"],!1,{params:{index:t}}),h=Object(r.a)(b,2),C=h[0],E=h[1],O=Object(m.useStateXValueRemover)(["todo","list",":index"],{params:{index:t}});return l.a.createElement("li",{className:Object(u.a)({completed:C,editing:c})},c?l.a.createElement("input",{autoFocus:!0,className:"edit",onBlur:function(){return i(!1)},onChange:function(e){return f(e.target.value)},value:p}):l.a.createElement("div",{className:"view"},l.a.createElement("input",{checked:C,className:"toggle",onChange:function(e){return E(e.target.checked)},type:"checkbox"}),l.a.createElement("label",{onDoubleClick:function(){return i(!0)}},p),l.a.createElement("button",{className:"destroy",onClick:O})))}));var N=Object(n.memo)((function(){var e=Object(m.useStateXValue)(C,{shouldComponentUpdate:function(e,t){return JSON.stringify(e)!==JSON.stringify(t)}});return l.a.createElement(l.a.Fragment,null,e.map((function(e){return l.a.createElement(v,{index:e.index,key:e.id})})))}));var S=Object(n.memo)((function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(m.useStateXAction)(f);return l.a.createElement("header",{className:"header"},l.a.createElement("h1",{style:{userSelect:"none"}},"todos"),l.a.createElement("input",{value:a,className:"new-todo",placeholder:"What needs to be done?",onKeyDown:function(e){13===e.keyCode&&(c(a),o(""))},autoFocus:!0,onChange:function(e){return o(e.target.value)}}))}));var g=Object(n.memo)((function(){var e=Object(m.useStateXValue)(E).percentCompleted,t=Object(m.useStateXAction)(b);return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",onChange:t,checked:1!==e}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"))}));a(16),a(17);var x=Object(n.memo)((function(){var e=Object(m.useStateXUndo)(["todo","list"],"#",!0),t=e.canRedo,a=e.canUndo,n=e.redo,o=e.undo;return l.a.createElement("footer",{className:"footer"},l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/undo",onClick:a?o:void 0,style:{color:a?"inherit":"#ddd"}},"Undo")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/redo",style:{color:t?"inherit":"#ddd"},onClick:t?n:void 0},"Redo"))))}));var k=Object(n.memo)((function(){return l.a.createElement("div",{className:"todoapp"},l.a.createElement(S,null),l.a.createElement("section",{className:"main"},l.a.createElement(g,null),l.a.createElement("ul",{className:"todo-list"},l.a.createElement(N,null))),l.a.createElement(j,null),l.a.createElement(x,null))}));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m.StateXProvider,null,l.a.createElement(k,null))),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.7295c6d8.chunk.js.map