!function(e,s){e.getElementById("livereloadscript")||((s=e.createElement("script")).async=1,s.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",s.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(s))}(window.document),function(){"use strict";const e={Deutsch:["Deutsch"],Fremdsprache:["Französisch","Englisch","Spanisch","Latein"],"Gesellschaftswissenschaftliches Fach":["Geschichte","Sozialkunde","Erdkunde"],Mathematik:["Mathematik"],Naturwissenschaft:["Biologie","Physik","Chemie"],Informatik:["Informatik"],Religionslehre:["Evangelische Religion","Katholische Religion"],Sport:["Sport"],"Künstlerisches Fach":["Musik","Kunst"]},s={Sprachen:[e.Deutsch,e.Fremdsprache],Gesellschaftswissenschaften:[e["Gesellschaftswissenschaftliches Fach"]],MINT:[e.Mathematik,e.Naturwissenschaft,e.Informatik],Religionen:[e.Religionslehre],"Andere...":[e.Sport,e["Künstlerisches Fach"]]},a=[[e.Fremdsprache,e.Mathematik,e.Deutsch],[e.Fremdsprache,e.Naturwissenschaft,e.Deutsch],[e.Fremdsprache,e.Deutsch,e["Gesellschaftswissenschaftliches Fach"]],[e.Fremdsprache,e.Fremdsprache,e.Mathematik],[e.Fremdsprache,e.Fremdsprache,e.Naturwissenschaft],[e.Fremdsprache,e.Fremdsprache,e["Gesellschaftswissenschaftliches Fach"]],[e.Fremdsprache,e.Mathematik,e.Naturwissenschaft],[e.Fremdsprache,e.Mathematik,e.Informatik],[e.Fremdsprache,e.Mathematik,e["Gesellschaftswissenschaftliches Fach"]],[e.Fremdsprache,e.Naturwissenschaft,e.Naturwissenschaft],[e.Fremdsprache,e.Naturwissenschaft,e["Gesellschaftswissenschaftliches Fach"]],[e.Fremdsprache,e.Naturwissenschaft,e.Informatik],[e.Mathematik,e.Naturwissenschaft,e.Deutsch],[e.Mathematik,e.Deutsch,e["Gesellschaftswissenschaftliches Fach"]],[e.Mathematik,e.Naturwissenschaft,e["Gesellschaftswissenschaftliches Fach"]],[e.Naturwissenschaft,e.Naturwissenschaft,e.Deutsch],[e.Mathematik,e.Deutsch,e.Informatik],[e.Naturwissenschaft,e.Deutsch,e["Gesellschaftswissenschaftliches Fach"]],[e.Fremdsprache,e.Mathematik,e.Sport],[e.Fremdsprache,e.Mathematik,e.Religionslehre],[e.Fremdsprache,e.Mathematik,e["Künstlerisches Fach"]],[e.Naturwissenschaft,e.Deutsch,e.Informatik],[e.Fremdsprache,e.Naturwissenschaft,e.Sport],[e.Fremdsprache,e.Naturwissenschaft,e.Religionslehre],[e.Fremdsprache,e.Naturwissenschaft,e["Künstlerisches Fach"]],[e.Mathematik,e.Deutsch,e.Sport],[e.Mathematik,e.Deutsch,e.Religionslehre],[e.Mathematik,e.Deutsch,e["Künstlerisches Fach"]],[e.Naturwissenschaft,e.Deutsch,e.Sport],[e.Naturwissenschaft,e.Deutsch,e.Religionslehre],[e.Naturwissenschaft,e.Deutsch,e["Künstlerisches Fach"]]],t=document.querySelector("main");let c=[];function h(e){const s=document.createElement("div");return e.id&&(s.id=e.id),e.className&&(s.className=e.className),e.innerHTML&&(s.innerHTML=e.innerHTML),e.parentChild.appendChild(s),s}Object.entries(s).forEach(([e,s])=>{const i=h({className:"category",parentChild:t});h({innerHTML:e,className:"label",parentChild:i});const r=h({className:"courses",parentChild:i});s.flat().forEach(e=>{const s=h({id:e,className:"course",innerHTML:`<span class="course-name">${e}</span>`,parentChild:r});s.onclick=()=>function(e){const s=e.id;if(e.classList.contains("disabled"))return;e.classList.contains("selected")?(e.classList.remove("selected"),c.splice(c.indexOf(s),1)):(e.classList.add("selected"),c.push(s));const t=function(e){let s=[];return a.forEach(a=>{a=[...a];e.every(e=>a.some((s,t)=>{if(s.includes(e))return a.splice(t,1),!0}))&&s.push(...a.flat())}),s=[...new Set(s),...e],s}(c);document.querySelectorAll(".course").forEach(e=>{const s=e.id;t.includes(s)?e.classList.remove("disabled"):e.classList.add("disabled")})}(s)})})}();
