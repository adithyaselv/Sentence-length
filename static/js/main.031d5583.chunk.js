(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{29:function(e,t,a){e.exports=a(56)},34:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),o=a.n(r),c=(a(34),a(21)),s=a(22),i=a(28),u=a(26),m=a(27),h=a(58),d=a(23),g=a.n(d),f=a(24),E=a(9),p=a(7),b=a(25),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={bookUrl:"https://www.gutenberg.org/files/46/46-0.txt",loading:!1,progressActive:!1,currentProgress:0,result:!1,resultText:null,fetchTime:0},e.urlOnChange=function(t){e.setState({bookUrl:t.target.value,loading:!1,result:!1,resultText:null})},e.handleFormSubmit=function(){e.setState({result:!1,loading:!0});var t={bookUrl:e.state.bookUrl},a=Date.now();g.a.get("https://us-central1-vocal-pad-109004.cloudfunctions.net/sentence-histogram",{params:t}).then((function(t){var n=Date.now()-a;e.setState({loading:!1,result:!0,resultText:t.data,fetchTime:n/1e3})})).catch((function(t){e.setState({loading:!1}),alert("Fetch failed")}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(h.a,null,l.a.createElement(h.a.Group,null,l.a.createElement(h.a.Label,null,"Book URL"),l.a.createElement(h.a.Control,{id:"bookUrl",placeholder:"https://www.gutenberg.org/files/46/46-0.txt",onChange:this.urlOnChange}),l.a.createElement(h.a.Text,{className:"text-muted"},"Enter URL containing text version of the book to find histogram")),l.a.createElement(h.a.Group,null,l.a.createElement(m.a,{variant:"primary",onClick:this.handleFormSubmit}," Fetch Results ")),l.a.createElement(h.a.Group,null,e.state.loading?l.a.createElement(E.a,{fluid:!0},l.a.createElement(p.a,null,l.a.createElement("h4",null,"Fetching Results"),l.a.createElement(b.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))):null),l.a.createElement(h.a.Group,null,e.state.result?l.a.createElement(E.a,{fluid:!0},l.a.createElement(p.a,null,l.a.createElement("h4",null,"Histogram Result: "),l.a.createElement("span",null,"Processing time: ",e.state.fetchTime," seconds"),l.a.createElement("h6",null,"Histogram graph: "),l.a.createElement(f.a,{src:e.state.resultText.hist_image,fluid:!0}),l.a.createElement("h6",null,"Word count: Number of sentences - data"),l.a.createElement("p",null,JSON.stringify(e.state.resultText.hist_data,null,2)))):null))}}]),a}(n.Component);a(55);var w=function(){return l.a.createElement(p.a,{style:{border:"1px solid #cecece",borderRadius:"10px",margin:"10px auto",width:"95%"},fluid:!0},l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",null,"Sentence lengths"),l.a.createElement("h6",null,"Get histogram of words per sentences")),l.a.createElement("div",{style:{padding:"15px"}},l.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.031d5583.chunk.js.map