/* ---------- Grundfälle ---------- */
const BASE = [
 { title:"Diebstahl", norm:"§ 242 StGB",
  sachverhalt:"A sieht vor der Mensa das unverschlossene Fahrrad des B. Er setzt sich darauf und fährt davon, um es zu behalten.",
  frage:"Hat sich A gemäß § 242 Abs. 1 StGB strafbar gemacht? Zu prüfen ist nur der objektive Tatbestand.",
  segs:[
  ["O","A könnte sich wegen Diebstahls gemäß § 242 Abs. 1 StGB strafbar gemacht haben, indem er das Fahrrad des B mitnahm."],
  ["O","Dazu müsste es sich bei dem Fahrrad um eine fremde bewegliche Sache handeln."],
  ["D","Eine Sache ist fremd, wenn sie zumindest auch im Eigentum eines anderen steht."],
  ["S","Das Fahrrad steht im Alleineigentum des B. Für A ist es daher fremd."],
  ["E","Somit liegt eine fremde bewegliche Sache vor."],
  ["O","Weiterhin müsste A das Fahrrad weggenommen haben."],
  ["D","Wegnahme ist der Bruch fremden und die Begründung neuen, nicht notwendig tätereigenen Gewahrsams."],
  ["S","Hier hatte B die tatsächliche Sachherrschaft über das Fahrrad. A fuhr damit davon und begründete so eigenen Gewahrsam gegen den Willen des B."],
  ["E","Folglich hat A das Fahrrad weggenommen."]]},
 { title:"Kaufpreis", norm:"§ 433 BGB",
  sachverhalt:"V bietet K sein gebrauchtes Rennrad für 500 Euro an. K sagt: Einverstanden, ich nehme es. Später will K nicht zahlen.",
  frage:"Hat V gegen K einen Anspruch auf Zahlung von 500 Euro?",
  segs:[
  ["O","V könnte gegen K einen Anspruch auf Zahlung von 500 Euro aus § 433 Abs. 2 BGB haben."],
  ["O","Dafür müsste zwischen V und K ein wirksamer Kaufvertrag zustande gekommen sein."],
  ["D","Ein Vertrag kommt durch zwei übereinstimmende Willenserklärungen, Angebot und Annahme, zustande (§§ 145 ff. BGB)."],
  ["D","Ein Angebot ist eine empfangsbedürftige Willenserklärung, die so bestimmt ist, dass die Annahme durch ein bloßes Ja erfolgen kann."],
  ["S","V bot K das gebrauchte Rennrad für 500 Euro an. Damit standen Kaufgegenstand, Preis und Parteien fest. K erklärte daraufhin, er nehme das Angebot an."],
  ["E","Somit liegt ein wirksamer Kaufvertrag vor."],
  ["E","V hat gegen K einen Anspruch auf Zahlung von 500 Euro aus § 433 Abs. 2 BGB."]]},
 { title:"Körperverletzung", norm:"§ 223 StGB",
  sachverhalt:"T schlägt O nach einem Streit mit der Faust ins Gesicht. O hat starke Schmerzen, sein Auge schwillt an und muss ärztlich versorgt werden.",
  frage:"Hat sich T gemäß § 223 Abs. 1 StGB strafbar gemacht? Zu prüfen ist nur der objektive Tatbestand.",
  segs:[
  ["O","T könnte sich wegen Körperverletzung gemäß § 223 Abs. 1 StGB strafbar gemacht haben, indem er O mit der Faust ins Gesicht schlug."],
  ["O","Dazu müsste T den O körperlich misshandelt oder an der Gesundheit geschädigt haben."],
  ["D","Eine körperliche Misshandlung ist jede üble, unangemessene Behandlung, die das körperliche Wohlbefinden oder die körperliche Unversehrtheit mehr als nur unerheblich beeinträchtigt."],
  ["S","Der Faustschlag verursachte bei O erhebliche Schmerzen und eine Schwellung am Auge. Dies geht über eine bloße Bagatelle deutlich hinaus."],
  ["E","Folglich hat T den O körperlich misshandelt."],
  ["D","Eine Gesundheitsschädigung ist das Hervorrufen oder Steigern eines vom Normalzustand der körperlichen Funktionen nachteilig abweichenden Zustandes."],
  ["S","Die Schwellung stellt einen pathologischen Zustand dar, der ärztlich behandelt werden musste."],
  ["E","Somit hat T den O auch an der Gesundheit geschädigt."]]},
 { title:"Schadensersatz", norm:"§ 823 BGB",
  sachverhalt:"S spielt direkt vor dem Haus des E Fußball. Ein Schuss geht gegen das Wohnzimmerfenster des E, die Scheibe zerspringt. Die Reparatur kostet 300 Euro.",
  frage:"Hat E gegen S einen Anspruch auf Zahlung von 300 Euro aus § 823 Abs. 1 BGB?",
  segs:[
  ["O","E könnte gegen S einen Anspruch auf Schadensersatz in Höhe von 300 Euro aus § 823 Abs. 1 BGB haben."],
  ["O","Dazu müsste S ein absolut geschütztes Rechtsgut des E verletzt haben."],
  ["D","Eine Eigentumsverletzung liegt insbesondere bei einer Substanzverletzung der Sache vor."],
  ["S","S schoss den Ball gegen das Fenster des E, sodass die Scheibe zersprang. Die Substanz der Scheibe wurde dadurch beschädigt."],
  ["E","Eine Eigentumsverletzung liegt somit vor."],
  ["O","Ferner müsste S schuldhaft, also vorsätzlich oder fahrlässig, gehandelt haben."],
  ["D","Fahrlässig handelt, wer die im Verkehr erforderliche Sorgfalt außer Acht lässt (§ 276 Abs. 2 BGB)."],
  ["S","S spielte unmittelbar vor dem Haus und musste damit rechnen, die Fenster zu treffen."],
  ["E","Folglich handelte S fahrlässig. E hat gegen S einen Anspruch auf Zahlung von 300 Euro aus § 823 Abs. 1 BGB."]]},
 { title:"Verwaltungsrechtsweg", norm:"§ 40 VwGO",
  sachverhalt:"Die zuständige Behörde widerruft die Gaststättenerlaubnis des G gestützt auf § 15 Abs. 1 GastG. G will dagegen klagen.",
  frage:"Ist der Verwaltungsrechtsweg eröffnet?",
  segs:[
  ["O","Der Verwaltungsrechtsweg könnte gemäß § 40 Abs. 1 S. 1 VwGO eröffnet sein."],
  ["O","Mangels aufdrängender Sonderzuweisung müsste eine öffentlich-rechtliche Streitigkeit nichtverfassungsrechtlicher Art vorliegen."],
  ["D","Eine Streitigkeit ist öffentlich-rechtlich, wenn die streitentscheidenden Normen solche des öffentlichen Rechts sind."],
  ["D","Das ist der Fall, wenn die Norm ausschließlich einen Träger hoheitlicher Gewalt als solchen berechtigt oder verpflichtet."],
  ["S","Streitentscheidend ist hier § 15 Abs. 1 GastG, der allein die zuständige Behörde zum Widerruf einer Gaststättenerlaubnis ermächtigt."],
  ["E","Somit liegt eine öffentlich-rechtliche Streitigkeit vor."],
  ["S","Es streiten weder Verfassungsorgane über Verfassungsrecht noch sind abdrängende Sonderzuweisungen ersichtlich."],
  ["E","Der Verwaltungsrechtsweg ist folglich eröffnet."]]}
];
const PART_NAME={O:"Obersatz",D:"Definition",S:"Subsumtion",E:"Ergebnis",P:"Schema"};
const RG_ORDER=["Zivilrecht","Strafrecht","Öffentliches Recht","Grundlagen"];
const $=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function toast(msg){const t=document.createElement("div");t.className="toast";t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2600);}
const lsGet=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v);}catch(e){return d;}};
const lsSet=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}};
/* Text tippbar machen: typografische Zeichen auf Tastaturzeichen abbilden */
const typeable=s=>String(s||"").replace(/[„“”«»]/g,'"').replace(/[‚‘’´`]/g,"'").replace(/[–—−]/g,"-").replace(/…/g,"...").replace(/€/g,"Euro").replace(/[   ]/g," ").replace(/\s+/g," ").trim();

/* ---------- Sammlungen ---------- */
let units=[];
let collId=lsGet("gt-coll","base");
function collections(){
  const cs=[{id:"base",label:"Grundfälle",group:"Mitgeliefert",cases:BASE}];
  units.forEach(u=>{
    const cases=(u.faelle||[]).map(f=>({title:f.title,norm:f.norm||"",sachverhalt:f.sachverhalt||"",frage:f.frage||"",segs:(f.segs||[]).map(s=>[s.p,s.t])}));
    (u.schemata||[]).forEach(s=>{ if(s.punkte?.length) cases.push({title:"Schema: "+(s.titel.length>42?s.titel.slice(0,40)+"…":s.titel),norm:s.norm||"",sachverhalt:"",frage:"Schreibe das Prüfungsschema: "+s.titel,segs:s.punkte.map(x=>["P",x])}); });
    if(u.definitionen?.length) cases.push({title:"Definitionen",norm:u.teilgebiet||"",sachverhalt:"",frage:"",segs:u.definitionen.map(d=>["D",typeable(`${d.begriff}: ${d.definition}${d.norm?" ("+d.norm+")":""}`)])});
    (u.streite||[]).forEach(s=>{
      const segs=s.gutachten?.length?s.gutachten.map(g=>[g.p,g.t])
        :[["O","Umstritten ist folgende Frage: "+s.frage],...(s.ansichten||[]).map(a=>["S",`Nach ${a.name}: ${a.inhalt}${a.argumente?" Dafür spricht: "+a.argumente:""}`]),...(s.stellungnahme?[["E",s.stellungnahme]]:[])];
      if(segs.length) cases.push({title:"Streit: "+(s.frage.length>42?s.frage.slice(0,40)+"…":s.frage),norm:s.norm||"",sachverhalt:"",frage:"Stelle den Meinungsstreit dar: "+s.frage,segs});
    });
    if(cases.length) cs.push({id:u.id,label:u.thema||"Ohne Titel",group:u.rechtsgebiet||"Grundlagen",cases});
  });
  return cs;
}
function curColl(){const cs=collections();return cs.find(c=>c.id===collId)||cs[0];}
function renderCollSelect(){
  const sel=$("coll"), cs=collections(); sel.innerHTML="";
  const groups={}; cs.forEach(c=>(groups[c.group]=groups[c.group]||[]).push(c));
  ["Mitgeliefert",...RG_ORDER].forEach(g=>{
    if(!groups[g]) return;
    const og=document.createElement("optgroup"); og.label=g;
    groups[g].forEach(c=>{const o=document.createElement("option");o.value=c.id;o.textContent=c.label+` (${c.cases.length})`;og.appendChild(o);});
    sel.appendChild(og);
  });
  if(!cs.find(c=>c.id===collId)) collId="base";
  sel.value=collId;
}
$("coll").addEventListener("change",e=>{collId=e.target.value;lsSet("gt-coll",collId);caseIdx=0;refreshCases();});
function refreshCases(){renderCollSelect();renderCases();load();renderExamSelect();}

/* ---------- Tastatur ---------- */
const ROWS=[
 {pre:null, keys:"^1234567890ß´", f:[0,0,1,2,3,3,6,6,7,8,9,9,9], post:["⌫",2]},
 {pre:["Tab",1.5], keys:"qwertzuiopü+", f:[0,1,2,3,3,6,6,7,8,9,9,9], post:["↵",1.5]},
 {pre:["Caps",1.8], keys:"asdfghjklöä#", f:[0,1,2,3,3,6,6,7,8,9,9,9], post:["",1.2]},
 {pre:["⇧",1.3,"shiftL"], keys:"<yxcvbnm,.-", f:[0,0,1,2,3,3,6,6,7,8,9], post:["⇧",2.7,"shiftR"]}
];
const SHIFT={"°":"^","!":"1",'"':"2","§":"3","$":"4","%":"5","&":"6","/":"7","(":"8",")":"9","=":"0","?":"ß","`":"´","*":"+","'":"#",">":"<",";":",",":":".","_":"-"};
const SHIFT_LBL={}; for(const [s,b] of Object.entries(SHIFT)) SHIFT_LBL[b]=s;
const FNAME=["linker kleiner Finger","linker Ringfinger","linker Mittelfinger","linker Zeigefinger","Daumen","Daumen","rechter Zeigefinger","rechter Mittelfinger","rechter Ringfinger","rechter kleiner Finger"];
const FVAR=i=>i===4||i===5?"var(--fth)":`var(--f${i})`;
const keyEls={}, fingerOf={};
(function buildKb(){
  const kb=$("kb");
  ROWS.forEach(r=>{
    const row=document.createElement("div"); row.className="kr";
    const mod=m=>{const k=document.createElement("div");k.className="k mod";k.style.setProperty("--u",m[1]);k.textContent=m[0];if(m[2]){keyEls[m[2]]=k;k.style.setProperty("--fcol",m[2]==="shiftL"?FVAR(0):FVAR(9));}row.appendChild(k);};
    if(r.pre) mod(r.pre);
    [...r.keys].forEach((ch,i)=>{
      const k=document.createElement("div");
      k.className="k"+(/[a-zäöüß]/.test(ch)?" letter":"")+(ch==="f"||ch==="j"?" bump":"");
      k.textContent=/[a-zäöü]/.test(ch)?ch.toUpperCase():ch;
      if(SHIFT_LBL[ch]){const s=document.createElement("span");s.className="s";s.textContent=SHIFT_LBL[ch];k.appendChild(s);}
      k.style.setProperty("--fcol",FVAR(r.f[i])); keyEls[ch]=k; fingerOf[ch]=r.f[i]; row.appendChild(k);
    });
    if(r.post) mod(r.post);
    kb.appendChild(row);
  });
  const sp=document.createElement("div"); sp.className="kr";
  const pad=u=>{const d=document.createElement("div");d.style.flex=u+" 1 0";sp.appendChild(d);};
  pad(3.6); const s=document.createElement("div"); s.className="k mod"; s.style.setProperty("--u",6.4); s.style.setProperty("--fcol",FVAR(5)); s.textContent="Leertaste"; sp.appendChild(s); keyEls[" "]=s; fingerOf[" "]=5; pad(5);
  kb.appendChild(sp);
  [[0,"kl. Finger"],[1,"Ring"],[2,"Mittel"],[3,"Zeige"],[5,"Daumen"],[6,"Zeige"],[7,"Mittel"],[8,"Ring"],[9,"kl. Finger"]].forEach(([i,n],j)=>{
    const e=document.createElement("span"); e.innerHTML=`<span class="dot" style="--fc:${FVAR(i)}"></span>${j<4?"L ":j>4?"R ":""}${n}`; $("legend").appendChild(e);
  });
})();
function keyFor(ch){
  if(ch===" ") return {k:" ",shift:false};
  if(keyEls[ch]&&ch.length===1&&!/^shift/.test(ch)) return {k:ch,shift:false};
  const lo=ch.toLowerCase();
  if(lo!==ch && keyEls[lo]) return {k:lo,shift:true};
  if(SHIFT[ch]) return {k:SHIFT[ch],shift:true};
  return null;
}

/* ---------- Tipptrainer ---------- */
let S={}, caseIdx=0;
let best=lsGet("gt-best",{});
function renderCases(){
  const c=$("cases"), list=curColl().cases; c.innerHTML="";
  if(caseIdx>=list.length) caseIdx=0;
  list.forEach((cs,i)=>{
    const b=document.createElement("button"); b.type="button"; b.className="case";
    b.setAttribute("aria-pressed",i===caseIdx); b.innerHTML=`${esc(cs.title)}<small>${esc(cs.norm)}</small>`;
    b.onclick=()=>{caseIdx=i;renderCases();load();};
    c.appendChild(b);
  });
}
function curCase(){return curColl().cases[caseIdx]||BASE[0];}
function load(){
  const cs=curCase(), box=$("text"); box.innerHTML="";
  clearInterval(S.timer);
  S={text:"",spans:[],part:[],pos:0,errors:0,errAt:new Set(),start:0,end:0};
  cs.segs.forEach(([p,t],si)=>{
    const seg=document.createElement("span"); seg.className="seg"; seg.dataset.p=p;
    const tag=document.createElement("span"); tag.className="tag"; tag.textContent=PART_NAME[p]||p; seg.appendChild(tag);
    const full=typeable(t)+(si<cs.segs.length-1?" ":"");
    for(const ch of full){const sp=document.createElement("span");sp.className="ch";sp.textContent=ch;seg.appendChild(sp);S.spans.push(sp);S.part.push(p);S.text+=ch;}
    box.appendChild(seg);
  });
  $("doneCard").hidden=true; box.scrollTop=0;
  showBest(); setCur(); stats(); if(view==="trainer") focusTrap();
}
function setCur(){
  S.spans.forEach(s=>s.classList.remove("cur","bad"));
  Object.values(keyEls).forEach(k=>k.classList.remove("next"));
  if(S.pos>=S.text.length){$("hint").innerHTML="";return;}
  const sp=S.spans[S.pos]; sp.classList.add("cur");
  const box=$("text"), top=sp.offsetTop-box.offsetTop;
  if(top>box.scrollTop+box.clientHeight-70||top<box.scrollTop) box.scrollTop=Math.max(0,top-40);
  document.querySelectorAll(".step").forEach(st=>st.classList.toggle("on",st.dataset.p===S.part[S.pos]));
  const ch=S.text[S.pos], kf=keyFor(ch), h=$("hint");
  if(!kf){h.textContent="Zeichen: "+ch;return;}
  const f=fingerOf[kf.k]; keyEls[kf.k].classList.add("next");
  let html=`<span><kbd>${ch===" "?"Leertaste":esc(ch)}</kbd></span><span><span class="dot" style="--fc:${FVAR(f)}"></span>${FNAME[f]}</span>`;
  if(kf.shift){const side=f<5?"shiftR":"shiftL"; keyEls[side].classList.add("next"); html+=`<span>+ ${side==="shiftR"?"rechte":"linke"} Umschalttaste (${side==="shiftR"?"rechter":"linker"} kleiner Finger)</span>`;}
  h.innerHTML=html;
}
function type(ch){
  if(S.end||S.pos>=S.text.length||ch==="\n"||ch==="\r") return;
  if(ch===" ") ch=" ";
  if(!S.start){S.start=performance.now(); S.timer=setInterval(stats,500);}
  if(ch===S.text[S.pos]){
    const sp=S.spans[S.pos]; sp.classList.add("done"); if(S.errAt.has(S.pos)) sp.classList.add("fixed");
    S.pos++;
    if(S.pos>=S.text.length){finish();return;}
    setCur();
  }else{
    S.errors++; S.errAt.add(S.pos); S.spans[S.pos].classList.add("bad");
    const kf=keyFor(ch), k=kf&&keyEls[kf.k];
    if(k){k.classList.add("oops"); setTimeout(()=>k.classList.remove("oops"),220);}
  }
  stats();
}
function nums(){
  const now=S.end||performance.now(), min=S.start?(now-S.start)/60000:0;
  return {apm:min>0.02?Math.round(S.pos/min):0, acc:S.pos+S.errors?Math.round(100*S.pos/(S.pos+S.errors)):100, min};
}
function stats(){const n=nums();$("apm").textContent=n.apm;$("acc").textContent=n.acc;$("err").textContent=S.errors;$("prog").textContent=S.text.length?Math.floor(100*S.pos/S.text.length):0;}
const bestKey=()=>collId+"|"+curCase().title;
function finish(){
  S.end=performance.now(); clearInterval(S.timer); stats(); setCur();
  document.querySelectorAll(".step").forEach(st=>st.classList.remove("on"));
  const n=nums(), key=bestKey(), prev=best[key], isBest=!prev||n.apm>prev.apm;
  if(isBest){best[key]={apm:n.apm,acc:n.acc};lsSet("gt-best",best);}
  const sec=Math.round(n.min*60), t=`${Math.floor(sec/60)}:${String(sec%60).padStart(2,"0")}`;
  const parts={O:0,D:0,S:0,E:0}; S.errAt.forEach(i=>parts[S.part[i]]=(parts[S.part[i]]||0)+1);
  const worst=Object.entries(parts).sort((a,b)=>b[1]-a[1])[0];
  const dc=$("doneCard");
  dc.innerHTML=`<h3>${esc(curCase().title)} geschafft${isBest&&prev?", neuer Bestwert":""}</h3>
   <div class="big"><div><strong>${n.apm}</strong><span>Anschläge/min (≈ ${Math.round(n.apm/5)} WPM)</span></div>
   <div><strong>${n.acc} %</strong><span>Genauigkeit</span></div><div><strong>${t}</strong><span>Zeit</span></div></div>
   <p>${S.errors?`Die meisten Fehler fielen in den Teil <b>${PART_NAME[worst[0]]}</b> (${worst[1]}). Achte dort beim nächsten Durchgang auf die typischen Formulierungen.`:"Fehlerfrei. Probier denselben Fall jetzt im E-Examen-Editor, dort ohne Tastenhilfe."}</p>
   <div class="row-btn"><button class="pbtn" type="button" id="nextBtn">Nächster Fall</button><button class="pbtn ghost" type="button" id="againBtn">Nochmal</button><button class="pbtn ghost" type="button" id="toExam">Im E-Examen schreiben</button></div>`;
  dc.hidden=false;
  $("againBtn").onclick=load;
  $("nextBtn").onclick=()=>{caseIdx=(caseIdx+1)%curColl().cases.length;renderCases();load();};
  $("toExam").onclick=()=>{$("xcase").value=caseIdx;$("xmode").value="copy";go("examen");};
  $("nextBtn").focus(); showBest();
}
function showBest(){const b=best[bestKey()];$("best").textContent=b?`Bestwert „${curCase().title}“: ${b.apm} Anschläge/min, ${b.acc} %`:"";}
const trap=$("trap");
function focusTrap(){if(S.end||view!=="trainer") return; try{trap.focus({preventScroll:true});}catch(e){trap.focus();}}
trap.addEventListener("beforeinput",e=>{
  if(e.inputType==="insertText"&&e.data){e.preventDefault();for(const c of e.data) type(c);}
  else if(e.inputType==="insertLineBreak"||e.inputType==="insertParagraph"||e.inputType.startsWith("delete")) e.preventDefault();
});
trap.addEventListener("input",()=>{if(trap.value){for(const c of trap.value) type(c);trap.value="";}});
trap.addEventListener("blur",()=>setTimeout(()=>{$("blur").hidden=document.activeElement===trap||!!S.end||view!=="trainer";},50));
trap.addEventListener("focus",()=>{$("blur").hidden=true;});
document.addEventListener("keydown",e=>{
  if(view!=="trainer") return;
  if(e.key==="Escape"){e.preventDefault();load();}
  if(e.key==="Tab"&&document.activeElement===trap) e.preventDefault();
});
$("text").addEventListener("click",focusTrap);
$("blur").addEventListener("click",focusTrap);
$("restart").addEventListener("click",load);

/* ---------- Navigation ---------- */
let view="trainer";
function go(v){
  if(!["trainer","examen","mitschrift","vorlesungen"].includes(v)) v="trainer";
  view=v;
  document.querySelectorAll(".view").forEach(s=>s.style.display=s.id==="v-"+v?"grid":"none");
  document.querySelectorAll(".tab").forEach(t=>t.setAttribute("aria-selected",t.dataset.view===v));
  const cb=document.getElementById("collbar"); if(cb) cb.style.display=v==="trainer"||v==="examen"?"flex":"none";
  if(location.hash.slice(1)!==v) history.replaceState(null,"","#"+v);
  if(v==="trainer") focusTrap();
  if(v==="examen"&&!X.running) renderExamIdle();
  if(v==="mitschrift") M.onShow();
}
document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>go(t.dataset.view)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
window.addEventListener("hashchange",()=>go(location.hash.slice(1)));

/* ---------- E-Examen-Editor ---------- */
const ICON={
 undo:'<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',
 redo:'<path d="m15 14 5-5-5-5"/><path d="M20 9H10a6 6 0 0 0 0 12h3"/>',
 cut:'<circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M8.1 15.9 19 4M15.9 15.9 5 4"/>',
 copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
 paste:'<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2h6v2M9 11h6M9 15h6"/>',
 page:'<path d="M6 2h9l4 4v6M6 2v10M3 15h18M6 18v4h13v-4" />',
 left:'<path d="M3 5h18M3 10h12M3 15h18M3 20h12"/>', center:'<path d="M3 5h18M6 10h12M3 15h18M6 20h12"/>',
 right:'<path d="M3 5h18M9 10h12M3 15h18M9 20h12"/>', justify:'<path d="M3 5h18M3 10h18M3 15h18M3 20h18"/>',
 outdent:'<path d="M3 4h18M11 9h10M11 14h10M3 19h18M7 9l-4 2.5L7 14"/>', indent:'<path d="M3 4h18M11 9h10M11 14h10M3 19h18M3 9l4 2.5L3 14"/>',
 search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',
 preview:'<path d="M6 2h9l4 4v16H6z"/><circle cx="12" cy="13" r="3"/><path d="m14.2 15.2 2.3 2.3"/>'
};
const svg=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICON[n]}</svg>`;
const TOOLS=[
 ["undo","Rückgängig (Strg+Z)",()=>cmd("undo")],["redo","Wiederholen (Strg+Y)",()=>cmd("redo")],"|",
 ["cut","Ausschneiden (Strg+X)",()=>cmd("cut")],["copy","Kopieren (Strg+C)",()=>cmd("copy")],["paste","Einfügen (Strg+V)",()=>toast("Einfügen mit Strg+V. Es wird nur reiner Text übernommen.")],"|",
 ["page","Neue Seite",()=>{cmd("insertHTML",'<hr class="pb"><p><br></p>');}],"|",
 ["B","Fett (Strg+B)",()=>cmd("bold"),"<b>F</b>"],["U","Unterstreichen (Strg+U)",()=>cmd("underline"),"<u>U</u>"],
 ["sup","Hochstellen",()=>cmd("superscript"),"x²"],["sub","Tiefstellen",()=>cmd("subscript"),"x₂"],"|",
 ["left","Linksbündig",()=>cmd("justifyLeft")],["center","Zentriert",()=>cmd("justifyCenter")],["right","Rechtsbündig",()=>cmd("justifyRight")],["justify","Blocksatz",()=>cmd("justifyFull")],"|",
 ["outdent","Einzug verkleinern",()=>cmd("outdent")],["indent","Einzug vergrößern",()=>cmd("indent")],"|",
 ["search","Suchen und Ersetzen (Strg+F)",()=>openFind()],["preview","PDF-Vorschau",()=>preview()]
];
(function buildTools(){
  const bar=$("xtools");
  TOOLS.forEach(t=>{
    if(t==="|"){const s=document.createElement("span");s.className="xsep";bar.appendChild(s);return;}
    const b=document.createElement("button"); b.type="button"; b.className="xbtn"; b.title=t[1]; b.setAttribute("aria-label",t[1]);
    b.innerHTML=t[3]||svg(t[0]); b.addEventListener("mousedown",e=>e.preventDefault()); b.addEventListener("click",()=>{if(X.running)t[2]();});
    bar.appendChild(b);
  });
})();
const xpage=$("xpage");
function cmd(c,v){xpage.focus();try{document.execCommand(c,false,v);}catch(e){} xstats();}
try{document.execCommand("defaultParagraphSeparator",false,"p");}catch(e){}
let X={running:false};
function renderExamSelect(){
  const sel=$("xcase"), list=curColl().cases; sel.innerHTML="";
  list.forEach((c,i)=>{const o=document.createElement("option");o.value=i;o.textContent=c.title+(c.norm?" · "+c.norm:"");sel.appendChild(o);});
  sel.value=Math.min(caseIdx,list.length-1);
  if(!X.running) renderExamIdle();
}
$("xcase").addEventListener("change",()=>{if(!X.running)renderExamIdle();});
$("xmode").addEventListener("change",()=>{if(!X.running)renderExamIdle();});
function examCase(){return curColl().cases[+$("xcase").value]||curColl().cases[0];}
function taskHTML(c,mode){
  let h="";
  if(c.sachverhalt) h+=`<div><p class="lbl">Sachverhalt</p><p>${esc(c.sachverhalt)}</p></div>`;
  if(c.frage) h+=`<div><p class="lbl">Bearbeitervermerk</p><p>${esc(c.frage)}</p></div>`;
  if(mode==="copy") h+=`<div><p class="lbl">Musterlösung zum Abschreiben</p><div class="model">${c.segs.map(([p,t])=>`<span data-p="${p}">${esc(typeable(t))}</span>`).join("")}</div></div>`;
  if(!h) h=`<p>Schreibe die Definitionen aus dem Gedächtnis.</p>`;
  return h;
}
function renderExamIdle(){
  const c=examCase(); if(!c) return;
  $("xtask").innerHTML=taskHTML(c,$("xmode").value);
  xpage.contentEditable="false";
  xpage.innerHTML=`<div class="xidle" style="color:#555"><b style="color:#111">Bereit.</b><span>Wähle oben Aufgabe, Modus und Zeit und klicke auf „Bearbeitung beginnen“. Die Uhr läuft ab dem Start.</span></div>`;
  $("xclock").textContent=fmt(+$("xtime").value*60);
}
$("xtime").addEventListener("change",()=>{if(!X.running)$("xclock").textContent=fmt(+$("xtime").value*60);});
const fmt=s=>{s=Math.max(0,Math.round(s));return [Math.floor(s/3600),Math.floor(s%3600/60),s%60].map(n=>String(n).padStart(2,"0")).join(":");};
$("xstart").addEventListener("click",()=>{
  if(X.running){toast("Die Bearbeitung läuft bereits.");return;}
  const c=examCase();
  X={running:true,c,mode:$("xmode").value,total:+$("xtime").value*60,start:Date.now(),typed:0,firstKey:0};
  $("xresult").hidden=true;
  $("xtask").innerHTML=taskHTML(c,X.mode);
  xpage.contentEditable="true"; xpage.innerHTML="<p><br></p>"; xpage.focus();
  X.tick=setInterval(()=>{
    const left=X.total-(Date.now()-X.start)/1000;
    $("xclock").textContent=fmt(left); $("xclock").classList.toggle("low",left<300);
    xstats();
    if(left<=0) endExam(true);
  },1000);
  $("xstart").textContent="Läuft …"; $("xstart").disabled=true; xstats();
});
xpage.addEventListener("beforeinput",e=>{
  if(!X.running) return;
  if(e.inputType==="insertText"&&e.data){X.typed+=e.data.length; if(!X.firstKey) X.firstKey=Date.now();}
  if(e.inputType==="formatItalic") e.preventDefault();
});
xpage.addEventListener("input",xstats);
xpage.addEventListener("paste",e=>{e.preventDefault();const t=(e.clipboardData||window.clipboardData).getData("text/plain");document.execCommand("insertText",false,t);});
xpage.addEventListener("drop",e=>e.preventDefault());
xpage.addEventListener("keydown",e=>{
  if(e.key==="Tab"){e.preventDefault();}
  if((e.ctrlKey||e.metaKey)&&["i","I"].includes(e.key)) e.preventDefault();
});
function plain(){return (xpage.innerText||"").replace(/ /g," ");}
function xstats(){
  if(!X.running) return;
  const t=plain(); const chars=t.replace(/\n/g,"").length; const words=(t.match(/\S+/g)||[]).length;
  $("xchars").textContent=chars.toLocaleString("de-DE"); $("xwords").textContent=words.toLocaleString("de-DE");
  const min=X.firstKey?(Date.now()-X.firstKey)/60000:0;
  $("xapm").textContent=min>0.05?Math.round(X.typed/min):0;
}
$("xcontrast").addEventListener("click",()=>$("xframe").classList.toggle("hc"));
$("xlockbtn").addEventListener("click",()=>{$("xlock").hidden=false;$("xunlock").focus();});
$("xunlock").addEventListener("click",()=>{$("xlock").hidden=true;if(X.running)xpage.focus();});
let endArm=0;
$("xend").addEventListener("click",()=>{
  if(!X.running) return;
  if(Date.now()-endArm>3000){endArm=Date.now();$("xend").textContent="Wirklich beenden?";setTimeout(()=>{$("xend").textContent="Prüfung beenden";},3000);return;}
  $("xend").textContent="Prüfung beenden"; endExam(false);
});
function words(s){return typeable(s).toLowerCase().split(" ").filter(Boolean);}
function lcs(a,b){
  const n=a.length,m=b.length; if(!n||!m) return 0;
  let prev=new Uint16Array(m+1),cur=new Uint16Array(m+1);
  for(let i=1;i<=n;i++){for(let j=1;j<=m;j++) cur[j]=a[i-1]===b[j-1]?prev[j-1]+1:Math.max(prev[j],cur[j-1]); [prev,cur]=[cur,prev];}
  return prev[m];
}
/* Suchen und Ersetzen */
const F={matches:[],cur:-1};
const HL=!!(window.CSS&&CSS.highlights&&window.Highlight);
function textMap(){
  const nodes=[];let text="",lastBlock=null;
  const w=document.createTreeWalker(xpage,NodeFilter.SHOW_TEXT);let n;
  while((n=w.nextNode())){
    const b=n.parentElement.closest("p,div,li")||xpage;
    if(lastBlock&&b!==lastBlock) text+="\n";
    lastBlock=b; nodes.push({n,start:text.length}); text+=n.nodeValue;
  }
  return {nodes,text};
}
function locate(nodes,pos,isEnd){
  for(let k=nodes.length-1;k>=0;k--){const s=nodes[k].start,l=nodes[k].n.nodeValue.length;
    if(isEnd?(pos>s&&pos<=s+l):(pos>=s&&pos<s+l)) return {n:nodes[k].n,o:pos-s};}
  return null;
}
function findAll(){
  const q=$("fq").value; F.matches=[];
  if(q&&xpage.isContentEditable){
    const {nodes,text}=textMap(), cs=$("fcase").checked;
    const hay=cs?text:text.toLowerCase(), nee=cs?q:q.toLowerCase();
    let i=0;
    while((i=hay.indexOf(nee,i))!==-1){
      const a=locate(nodes,i,false), b=locate(nodes,i+q.length,true);
      if(a&&b){const r=document.createRange();r.setStart(a.n,a.o);r.setEnd(b.n,b.o);F.matches.push(r);}
      i+=q.length;
    }
  }
  if(F.cur>=F.matches.length) F.cur=F.matches.length-1;
  if(F.cur<0&&F.matches.length) F.cur=0;
  paintFind();
}
function paintFind(scroll){
  const n=F.matches.length;
  $("fcount").textContent=!$("fq").value?"":n?`${F.cur+1} von ${n}`:"Keine Treffer";
  if(HL){
    CSS.highlights.set("xfind",new Highlight(...F.matches));
    CSS.highlights.set("xcur",F.cur>=0&&n?new Highlight(F.matches[F.cur]):new Highlight());
  }
  if(scroll&&n){
    const r=F.matches[F.cur].getBoundingClientRect(), d=document.querySelector(".xdesk").getBoundingClientRect(), desk=document.querySelector(".xdesk");
    if(r.top<d.top+20||r.bottom>d.bottom-20) desk.scrollTop+=r.top-d.top-d.height/3;
    if(!HL){const s=getSelection();s.removeAllRanges();s.addRange(F.matches[F.cur].cloneRange());}
  }
}
function stepFind(d){findAll();const n=F.matches.length;if(!n)return;F.cur=(F.cur+d+n)%n;paintFind(true);}
function openFind(){
  if(!X.running) return;
  const sel=getSelection(), pre=sel&&sel.rangeCount&&xpage.contains(sel.anchorNode)?sel.toString():"";
  $("xfind").hidden=false;
  if(pre&&!pre.includes("\n")) $("fq").value=pre;
  $("fq").focus(); $("fq").select(); F.cur=0; findAll(); paintFind(true);
}
function closeFind(){
  $("xfind").hidden=true; F.matches=[]; F.cur=-1;
  if(HL){CSS.highlights.delete("xfind");CSS.highlights.delete("xcur");}
  if(X.running) xpage.focus();
}
function putText(r,val){
  const s=getSelection(); xpage.focus(); s.removeAllRanges(); s.addRange(r);
  if(val) document.execCommand("insertText",false,val); else document.execCommand("delete");
}
function replaceOne(){
  if(!X.running) return;
  findAll(); if(F.cur<0||!F.matches.length){toast("Keine Treffer.");return;}
  putText(F.matches[F.cur],$("fr").value);
  findAll(); paintFind(true); xstats(); $("fr").focus();
}
function replaceAll(){
  if(!X.running) return;
  findAll(); const n=F.matches.length; if(!n){toast("Keine Treffer.");return;}
  const val=$("fr").value, list=F.matches.slice();
  for(let k=list.length-1;k>=0;k--) putText(list[k],val);
  F.cur=0; findAll(); xstats(); toast(`${n} ${n===1?"Stelle":"Stellen"} ersetzt.`); $("fr").focus();
}
$("fq").addEventListener("input",()=>{F.cur=0;findAll();paintFind(true);});
$("fcase").addEventListener("change",()=>{F.cur=0;findAll();paintFind(true);});
$("fq").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();stepFind(e.shiftKey?-1:1);}});
$("fr").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();replaceOne();}});
$("xfind").addEventListener("keydown",e=>{if(e.key==="Escape"){e.preventDefault();closeFind();}});
$("fnext").addEventListener("click",()=>stepFind(1));
$("fprev").addEventListener("click",()=>stepFind(-1));
$("frep").addEventListener("click",replaceOne);
$("frepall").addEventListener("click",replaceAll);
$("fclose").addEventListener("click",closeFind);
let findT=0;
xpage.addEventListener("input",()=>{if(!$("xfind").hidden){clearTimeout(findT);findT=setTimeout(findAll,150);}});
document.addEventListener("keydown",e=>{
  if(view!=="examen"||!X.running) return;
  if((e.ctrlKey||e.metaKey)&&!e.altKey&&["f","F","h","H"].includes(e.key)){e.preventDefault();openFind();if(/h/i.test(e.key))$("fr").focus();}
});

function endExam(timeUp){
  clearInterval(X.tick); if(!$("xfind").hidden) closeFind(); X.running=false; xpage.contentEditable="false";
  $("xstart").textContent="Bearbeitung beginnen"; $("xstart").disabled=false; $("xclock").classList.remove("low");
  const text=plain(), used=(Date.now()-X.start)/1000, min=X.firstKey?(Date.now()-X.firstKey)/60000:0;
  const apm=min>0.05?Math.round(X.typed/min):0, chars=text.replace(/\n/g,"").length;
  const r=$("xresult"); let h=`<h2>${timeUp?"Zeit abgelaufen":"Bearbeitung beendet"}: ${esc(X.c.title)}</h2><div class="big">
   <div><strong>${chars.toLocaleString("de-DE")}</strong><span>Zeichen geschrieben</span></div>
   <div><strong>${apm}</strong><span>Anschläge/min</span></div><div><strong>${fmt(used)}</strong><span>Zeit genutzt</span></div>`;
  if(X.mode==="copy"){
    const target=words(X.c.segs.map(s=>s[1]).join(" ")), mine=words(text), same=lcs(target,mine);
    const cover=target.length?Math.round(100*same/target.length):0, prec=mine.length?Math.round(100*same/mine.length):0;
    h+=`<div><strong>${cover} %</strong><span>der Musterlösung übernommen</span></div><div><strong>${prec} %</strong><span>deiner Wörter korrekt</span></div></div>`;
    h+=`<p class="msg">Hochgerechnet auf 5 Stunden schaffst du bei diesem Tempo rund ${(apm*60*5*0.55|0).toLocaleString("de-DE")} Zeichen reinen Text, wenn du etwa die Hälfte der Zeit schreibst. Examensklausuren liegen oft bei 25.000 bis 45.000 Zeichen.</p>`;
  }else{
    h+=`</div><div class="row-btn"><button class="pbtn" type="button" id="fbBtn">Korrigieren lassen</button><span class="msg" id="fbMsg"></span></div><div class="feedback" id="fb"></div>`;
  }
  h+=`<div class="row-btn"><button class="pbtn ghost" type="button" id="xcopy">Meinen Text kopieren</button></div>`;
  r.innerHTML=h; r.hidden=false; r.scrollIntoView({behavior:"smooth",block:"start"});
  X.lastText=text;
  $("xcopy").onclick=()=>{navigator.clipboard?.writeText(text).then(()=>toast("Text kopiert."),()=>toast("Kopieren nicht möglich. Markiere den Text im Editor."));};
  const fb=$("fbBtn"); if(fb){ if(!AI.ok()){fb.disabled=true;$("fbMsg").textContent="Auf dem Server ist keine KI eingerichtet (DEEPSEEK_API_KEY in der Datei .env).";} fb.onclick=()=>feedback(X.c,text); }
}
async function feedback(c,text){
  if(!AI.ok()) return;
  if(text.trim().length<80){$("fbMsg").textContent="Für eine Korrektur ist der Text zu kurz.";return;}
  $("fbBtn").disabled=true; $("fbMsg").textContent=AI.name()+" liest deine Lösung …"; $("fb").textContent="";
  const model=c.segs.map(([p,t])=>`[${PART_NAME[p]}] ${t}`).join("\n");
  const prompt=`Du bist erfahrener Korrektor für die Erste Juristische Prüfung in Baden-Württemberg. Bewerte die folgende Studentenlösung. Antworte auf Deutsch, als schlichter Text ohne Markdown-Tabellen, mit diesen Abschnitten: Gesamteindruck (2 bis 3 Sätze), Gutachtenstil (ob Obersatz, Definition, Subsumtion und Ergebnis sauber getrennt sind, mit konkreten Zitaten aus der Lösung), Inhalt (fehlende oder falsche Punkte im Vergleich zur Vergleichslösung), Drei Verbesserungen für die nächste Klausur. Sei konkret und knapp.

SACHVERHALT:
${c.sachverhalt}

BEARBEITERVERMERK:
${c.frage}

VERGLEICHSLÖSUNG (nur intern):
${model}

STUDENTENLÖSUNG:
${text.slice(0,60000)}`;
  try{
    await AI.text(prompt,{onText:({text})=>{$("fb").textContent=text;$("fbMsg").textContent="";}});
    $("fbMsg").textContent="";
  }catch(e){
    $("fbMsg").textContent=aiErr(e,"Die Korrektur ist fehlgeschlagen.");
    if(e?.text) $("fb").textContent=e.text;
  }
  $("fbBtn").disabled=false;
}
function preview(){
  const m=document.createElement("div"); m.className="modal";
  m.innerHTML=`<div class="modal-bar"><b id="pvInfo">PDF-Vorschau</b><button class="pbtn small" type="button">Schließen</button></div><div class="pages"></div>`;
  document.body.appendChild(m);
  m.querySelector("button").onclick=()=>m.remove();
  const pages=m.querySelector(".pages");
  const src=xpage.cloneNode(true);
  let page=newPg(pages);
  [...src.childNodes].forEach(node=>{
    if(node.nodeName==="HR"){page=newPg(pages);return;}
    page.appendChild(node);
    if(page.scrollHeight>page.clientHeight+1&&page.childNodes.length>1){page.removeChild(node);page=newPg(pages);page.appendChild(node);}
  });
  const all=pages.querySelectorAll(".pg");
  all.forEach((p,i)=>{const n=document.createElement("span");n.className="pno";n.textContent=`Seite ${i+1} von ${all.length}`;p.appendChild(n);});
  m.querySelector("#pvInfo").textContent=`PDF-Vorschau · ${all.length} ${all.length===1?"Seite":"Seiten"}`;
}
function newPg(c){const p=document.createElement("div");p.className="pg";c.appendChild(p);return p;}

/* ---------- Server-Anbindung ---------- */
const SERVER={ai:false,model:""};
async function api(path,opts={}){
  const r=await fetch(path,{credentials:"same-origin",...opts});
  if(r.status===401){location.href="/login";throw {code:"login"};}
  return r;
}
async function apiJSON(path,opts={}){
  const r=await api(path,opts);
  if(!r.ok){let b={};try{b=await r.json();}catch(e){} throw {code:b.code||"http",status:r.status};}
  return r.status===204?null:r.json();
}
const putDoc=d=>apiJSON("/api/docs/"+encodeURIComponent(d.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)});
const delDoc=d=>apiJSON("/api/docs/"+encodeURIComponent(d.id),{method:"DELETE"});

async function saveUnit(u){
  await putDoc(u);
  units=[u,...units.filter(x=>x.id!==u.id)].sort((a,b)=>(b.created||0)-(a.created||0));
  refreshCases(); renderLib();
}
async function deleteUnit(u){
  await delDoc(u);
  units=units.filter(x=>x.id!==u.id);
  if(collId===u.id){collId="base";lsSet("gt-coll","base");}
  refreshCases(); renderLib();
}
async function uploadFile(unitId,name,data){
  await apiJSON(`/api/files?unit=${encodeURIComponent(unitId)}&name=${encodeURIComponent(name)}`,{method:"POST",headers:{"Content-Type":"application/octet-stream"},body:data});
}
async function archiveUnit(u,files){
  for(const f of files||[]) await uploadFile(u.id,f.name,f);
  await uploadFile(u.id,"Übungen.md",new Blob([toMarkdown(u)],{type:"text/markdown"}));
}

/* ---------- KI über den Server (DeepSeek) ---------- */
function parseJSONLoose(t){
  try{return JSON.parse(t);}catch(e){}
  const f=t.match(/```(?:json)?\s*([\s\S]*?)```/); if(f){try{return JSON.parse(f[1]);}catch(e){}}
  const a=t.indexOf("{"), b=t.lastIndexOf("}"); if(a>=0&&b>a){try{return JSON.parse(t.slice(a,b+1));}catch(e){}}
  throw {code:"invalid_json",text:t};
}
const AI={
  ok(){return SERVER.ai;},
  name(){return "DeepSeek";},
  async text(prompt,{onText,signal,json}={}){
    let res;
    try{res=await api("/api/ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt,json:!!json}),signal});}
    catch(e){if(e?.code==="login") throw e; throw {code:e?.name==="AbortError"?"cancelled":"network"};}
    if(!res.ok){let b={};try{b=await res.json();}catch(e){} throw {code:b.code||"http"};}
    const rd=res.body.getReader(), dec=new TextDecoder(); let buf="", out="";
    try{
      for(;;){
        const {done,value}=await rd.read(); if(done) break;
        buf+=dec.decode(value,{stream:true}); const lines=buf.split("\n"); buf=lines.pop();
        for(const l of lines){const s=l.trim(); if(!s.startsWith("data:")) continue; const d=s.slice(5).trim(); if(d==="[DONE]") continue;
          try{const j=JSON.parse(d); if(j.error) throw {code:j.error}; const delta=j.choices?.[0]?.delta?.content; if(delta){out+=delta; onText&&onText({text:out,delta});}}catch(e){if(e?.code) throw e;}}
      }
    }catch(e){if(e?.code&&e.code!=="network") throw e; throw {code:e?.name==="AbortError"?"cancelled":"network",text:out};}
    return json?parseJSONLoose(out):out;
  }
};
function aiErr(e,fallback){
  return ({cancelled:"Abgebrochen.",rate_limited:"Zu viele Anfragen gerade. Versuch es in ein paar Minuten noch einmal.",
    auth:"DeepSeek lehnt den API-Schlüssel auf dem Server ab. Prüfe DEEPSEEK_API_KEY in der Datei .env.",
    balance:"Das DeepSeek-Guthaben ist aufgebraucht. Lade es auf platform.deepseek.com auf.",
    bad_model:"DeepSeek hat die Anfrage abgelehnt. Prüfe DEEPSEEK_MODEL in der Datei .env.",
    no_key:"Auf dem Server ist kein DeepSeek-Schlüssel eingetragen (DEEPSEEK_API_KEY in der Datei .env).",
    too_large:"Das Material ist zu groß für eine Anfrage. Lade weniger auf einmal hoch.",
    network:"Der Server oder DeepSeek ist gerade nicht erreichbar. Versuch es gleich noch einmal."})[e?.code]||fallback;
}
function dlLink(name,blob){const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1500);}
const cleanName=s=>String(s||"").replace(/[\\/:*?"<>|]/g,"").replace(/\s+/g," ").trim().slice(0,120)||"Ohne Titel";
const inArtifact=()=>false;
let picked=[];
const drop=$("drop"), fileIn=$("file");
["dragenter","dragover"].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add("over");}));
["dragleave","drop"].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove("over");}));
drop.addEventListener("drop",e=>addFiles(e.dataTransfer.files));
fileIn.addEventListener("change",()=>{addFiles(fileIn.files);fileIn.value="";});
$("vdate").value=new Date().toISOString().slice(0,10);
async function addFiles(list){
  for(const f of list){
    const entry={file:f,name:f.name,status:"wird gelesen …",text:""}; picked.push(entry); renderFiles();
    try{
      entry.text=await extract(f,entry);
      if(entry.empty?.length&&!inArtifact()){try{await ocrEntry(entry);}catch(e){entry.ocrFail=true;}}
      entry.status=fileStatus(entry);
    }catch(e){entry.status="nicht lesbar"; entry.text="";}
    renderFiles();
  }
}
const usable=e=>e.text.trim().length>=200||(inArtifact()&&e.empty?.length>0);
function fileStatus(e){
  if(!usable(e)) return "kaum Text gefunden";
  let s=(e.pages?`${e.pages.length} Seiten, `:"")+`${e.text.length.toLocaleString("de-DE")} Zeichen`;
  if(e.empty?.length) s+=inArtifact()?`, ${e.empty.length} Folien als Bild`:e.ocrFail?`, ${e.empty.length} Folien nicht erkannt`:`, ${e.empty.length} Folien per Texterkennung`;
  return s;
}
const pagesText=e=>e.pages.map((t,i)=>`--- Seite/Folie ${i+1} ---\n${t}`).join("\n\n");
function loadScript(src,test){
  if(test()) return Promise.resolve();
  return new Promise((res,rej)=>{const s=document.createElement("script");s.src=src;s.onload=()=>res();s.onerror=()=>rej(new Error("load"));document.head.appendChild(s);});
}
async function renderPage(doc,n,maxW){
  const p=await doc.getPage(n), v0=p.getViewport({scale:1}), v=p.getViewport({scale:Math.min(3,maxW/v0.width)});
  const c=document.createElement("canvas"); c.width=v.width|0; c.height=v.height|0;
  const ctx=c.getContext("2d"); ctx.fillStyle="#fff"; ctx.fillRect(0,0,c.width,c.height);
  await p.render({canvasContext:ctx,viewport:v}).promise; return c;
}
async function ocrEntry(entry){
  const local=await fetch("/vendor/tesseract/worker.min.js",{method:"HEAD"}).then(r=>r.ok).catch(()=>false);
  const localLang=await fetch("/vendor/lang/deu.traineddata.gz",{method:"HEAD"}).then(r=>r.ok).catch(()=>false);
  await loadScript(local?"/vendor/tesseract/tesseract.min.js":"https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js",()=>window.Tesseract);
  const list=entry.empty.slice(0,80);
  entry.status="Texterkennung wird geladen …"; renderFiles();
  const opts={}; if(local){opts.workerPath="/vendor/tesseract/worker.min.js";opts.corePath="/vendor/tesseract-core/";} if(localLang) opts.langPath="/vendor/lang";
  const w=await Tesseract.createWorker("deu",1,opts);
  try{
    for(let k=0;k<list.length;k++){
      entry.status=`Texterkennung Folie ${k+1} von ${list.length} …`; renderFiles();
      const r=await w.recognize(await renderPage(entry.doc,list[k],1800));
      entry.pages[list[k]-1]=(r.data.text||"").replace(/[ \t]+/g," ").trim();
    }
  }finally{await w.terminate();}
  entry.text=pagesText(entry);
}
function renderFiles(){
  $("filelist").innerHTML=picked.map((p,i)=>`<div><span>${esc(p.name)}</span><span>${esc(p.status)} <button class="tbtn" data-rm="${i}" type="button" style="padding:0 6px;margin-left:6px" aria-label="Entfernen">×</button></span></div>`).join("");
  $("filelist").querySelectorAll("[data-rm]").forEach(b=>b.onclick=()=>{picked.splice(+b.dataset.rm,1);renderFiles();});
  const chars=picked.reduce((a,p)=>a+p.text.length,0);
  const bad=picked.filter(p=>p.status==="kaum Text gefunden"||p.status==="nicht lesbar");
  $("vmsg").className="msg"+(bad.length?" err":"");
  $("vmsg").textContent=!picked.length?"Noch keine Datei gewählt.":bad.length?`In ${bad.map(b=>b.name).join(", ")} wurde kaum Text gefunden. Prüfe, ob die Datei Text oder lesbare Folien enthält. PowerPoint-Dateien bitte vorher als PDF exportieren.`:`${chars.toLocaleString("de-DE")} Zeichen bereit.`;
  updateGenState();
}
function updateGenState(){
  const ok=picked.some(usable);
  $("vgen").disabled=!ok||!AI.ok()||busy;
  if(ok&&!AI.ok()&&!busy){$("vmsg").className="msg err";$("vmsg").textContent="Auf dem Server ist keine KI eingerichtet (DEEPSEEK_API_KEY in der Datei .env). Eigenen Text zerlegen geht auch ohne.";}
}
async function extract(f,entry={}){
  const n=f.name.toLowerCase();
  if(n.endsWith(".pdf")||f.type==="application/pdf"){
    if(!window.pdfjsLib) throw new Error("pdf");
    try{pdfjsLib.GlobalWorkerOptions.workerSrc=window.GT_PDF_WORKER||"/vendor/pdf.worker.min.js";}catch(e){}
    const doc=await pdfjsLib.getDocument({data:new Uint8Array(await f.arrayBuffer()),isEvalSupported:false}).promise;
    entry.doc=doc; entry.pages=[]; entry.empty=[];
    for(let i=1;i<=doc.numPages;i++){
      const p=await doc.getPage(i), c=await p.getTextContent();
      const t=c.items.map(it=>it.str+(it.hasEOL?"\n":" ")).join("").replace(/[ \t]+/g," ").trim();
      entry.pages.push(t); if(t.replace(/\s/g,"").length<30) entry.empty.push(i);
      if(i%5===0){entry.status=`liest Seite ${i} von ${doc.numPages} …`;renderFiles();}
    }
    return pagesText(entry);
  }
  if(n.endsWith(".docx")){
    if(!window.mammoth) throw new Error("docx");
    const r=await mammoth.extractRawText({arrayBuffer:await f.arrayBuffer()}); return r.value;
  }
  return await f.text();
}
/* ---------- Eigenen Text zerlegen (ohne KI) ---------- */
const ABBR=/\b(z\. ?B|Abs|Nr|S|Art|Alt|Var|lit|ff|f|Rn|vgl|ggf|bzw|u\. ?a|i\. ?V\. ?m|i\. ?S\. ?d|h\. ?M|a\. ?A|m\. ?M|BGH|Rspr|etc|sog|d\. ?h|u\. ?U|insb|grds)\./g;
function splitSentences(t){
  const prot=typeable(t).replace(ABBR,m=>m.replace(/\./g,"\u0001"));
  return prot.split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ§(])/).map(s=>s.replace(/\u0001/g,".").trim()).filter(Boolean);
}
function classify(s){
  if(/^(somit|folglich|also|damit|demnach|daher|mithin|im ergebnis|ergebnis)\b/i.test(s)) return "E";
  if(/\b(könnte|müsste|fraglich ist|zu prüfen ist|in betracht kommt|kommt in betracht)\b/i.test(s)) return "O";
  if(/(versteht man|, wer |liegt vor, wenn|ist gegeben, wenn|ist dann|bedeutet|definiert)|^[^,]{3,80}\bist (jede|jeder|jedes|eine|ein|der|die|das)\b[^.]*\b(wenn|die|der|das)\b/i.test(s)) return "D";
  return "S";
}
$("psave").addEventListener("click",async()=>{
  const t=$("ptext").value.trim(); const m=$("pmsg");
  if(t.length<40){m.className="msg err";m.textContent="Füge einen längeren Text ein.";return;}
  const segs=splitSentences(t).map(s=>({p:classify(s),t:s}));
  const title=typeable($("ptitle").value)||"Eigener Text", norm=typeable($("pnorm").value);
  const rg=/StGB|StPO/.test(t)?"Strafrecht":/GG|VwGO|VwVfG|PolG|LVwVfG|GemO/.test(t)?"Öffentliches Recht":/BGB|HGB|ZPO/.test(t)?"Zivilrecht":"Grundlagen";
  const u={kind:"unit",id:"u-"+Date.now().toString(36),created:Date.now(),rechtsgebiet:rg,teilgebiet:"Eigene Texte",thema:title,zusammenfassung:"",veranstaltung:"",datum:new Date().toISOString().slice(0,10),faelle:[{title,norm,sachverhalt:"",frage:"",segs}],definitionen:[],streite:[],schemata:[],source:"eigen"};
  try{await saveUnit(u);m.className="msg ok";m.textContent=`${segs.length} Sätze gespeichert. Prüfe die Markierungen beim Tippen.`;$("ptext").value="";collId=u.id;lsSet("gt-coll",u.id);caseIdx=0;refreshCases();}
  catch(e){m.className="msg err";m.textContent="Speichern fehlgeschlagen.";}
});
/* ---------- Übungen erzeugen ---------- */
let busy=false, ctl=null;
$("vgen").addEventListener("click",generateFromFiles);
$("vstop").addEventListener("click",()=>ctl?.abort());
function buildPrompt({material,rg,vname,art}){
  return `Du bist Repetitor für die Erste Juristische Prüfung in Baden-Württemberg. Aus dem Material unten (${art}) arbeitest du alles heraus, was für das Examen zählt, und erstellst Übungsmaterial, das ein Student im Gutachtenstil abtippt, um Zehnfingerschreiben und Gutachtenstil gleichzeitig zu trainieren.

Antworte NUR mit einem JSON-Objekt dieser Form:
{"rechtsgebiet":"Zivilrecht","teilgebiet":"BGB AT","thema":"Anfechtung wegen Irrtums","zusammenfassung":"3 bis 5 Sätze zum Inhalt","definitionen":[{"begriff":"Erklärungsirrtum","norm":"§ 119 Abs. 1 Alt. 2 BGB","definition":"..."}],"streite":[{"frage":"Ist ... ?","norm":"§ ...","ansichten":[{"name":"Rechtsprechung (BGH)","inhalt":"...","argumente":"..."},{"name":"Teile der Literatur","inhalt":"...","argumente":"..."}],"stellungnahme":"...","gutachten":[{"p":"O","t":"Fraglich ist, ob ..."}]}],"schemata":[{"titel":"Anfechtung","norm":"§§ 119 ff., 142 BGB","punkte":["I. Anfechtungserklärung, § 143 BGB","II. Anfechtungsgrund","1. Inhaltsirrtum, § 119 Abs. 1 Alt. 1 BGB"]}],"faelle":[{"title":"kurzer Falltitel","norm":"§ 119 BGB","sachverhalt":"3 bis 6 Sätze","frage":"Bearbeitervermerk","segs":[{"p":"O","t":"Satz"}]}],"fragen":[{"frage":"Wiederholungsfrage","antwort":"knappe Antwort"}]}

Regeln:
- rechtsgebiet ist genau einer von: Zivilrecht, Strafrecht, Öffentliches Recht, Grundlagen.${rg?` Vorgegeben: ${rg}.`:""}
- teilgebiet ist das übliche Vorlesungs- oder Examensfach (z. B. BGB AT, Schuldrecht AT, Sachenrecht, StGB AT, StGB BT, Grundrechte, Staatsorganisationsrecht, Allgemeines Verwaltungsrecht, Polizeirecht BW).
- definitionen: 8 bis 20. Zuerst alle, die im Material vorkommen, dann weitere examensrelevante zum Thema, jeweils in der gängigen Formulierung der Rechtsprechung oder herrschenden Meinung.
- streite: alle Meinungsstreite aus dem Material. Behandelt das Material keinen, nimm die 1 bis 3 wichtigsten examensrelevanten Streite zum Thema. Für jeden Streit: die Ansichten mit ihren Vertretern (Rspr., h. M., Literatur) und den wichtigsten Argumenten, eine begründete Stellungnahme und gutachten mit 6 bis 12 segs im Gutachtenstil: O (Fraglich ist, ob ...), S (Nach einer Ansicht ... Dafür spricht ...), S (Nach anderer Ansicht ...), S (Stellungnahme mit Argument), E (Ergebnis). Kommen die Ansichten im Fall zum selben Ergebnis, stelle fest, dass ein Streitentscheid entbehrlich ist.
- schemata: alle Prüfungsschemata aus dem Material, sonst 1 bis 2 zum Thema. punkte sind Gliederungszeilen mit A., I., 1., a), aa) und Normangabe.
- faelle: 2 bis 3 Fälle zu den zentralen Problemen, je 8 bis 14 segs. p ist "O" (Obersatz im Konjunktiv), "D" (Definition), "S" (Subsumtion) oder "E" (Ergebnis im Indikativ). Für jedes Tatbestandsmerkmal die Folge O, D, S, E.
- fragen: 8 bis 15 Wiederholungsfragen mit knapper Antwort, wie sie in einer mündlichen Prüfung gestellt werden.
- Verwende nur Normen, Definitionen und Ansichten, die du sicher kennst. Erfinde keine Fundstellen. Bevorzuge, was im Material steht.
- Das Material kann aus Folien mit Stichpunkten (markiert mit --- Seite/Folie n ---) oder aus einer Mitschrift bestehen. In Mitschriften bedeuten Zeilenanfänge: "§ " Norm, "D: " Definition, "S: " Streitfrage, "A: " Ansicht, "+ " Argument, "P: " Schemapunkt, "! " Merksatz, "? " offene Frage. Rekonstruiere vollständige, korrekte Sätze.
- Nur Zeichen, die auf einer deutschen Tastatur ohne AltGr tippbar sind: keine Gedankenstriche, keine typografischen Anführungszeichen, kein Eurozeichen (schreibe Euro).
${vname?`Veranstaltung: ${vname}\n`:""}
MATERIAL:
${material}`;
}
async function runGenerate({material,rg,vname,datum,art,msg,files,extra}){
  const cut=material.length>90000; material=material.slice(0,90000);
  busy=true; ctl=new AbortController(); updateGenState(); $("vstop").hidden=false; M.setBusy(true);
  msg("DeepSeek liest das Material …","");
  try{
    const data=await AI.text(buildPrompt({material,rg,vname,art}),{json:true,signal:ctl.signal,onText:({text})=>msg(`DeepSeek arbeitet das Material heraus … ${text.length.toLocaleString("de-DE")} Zeichen`,"")});
    const u=cleanUnit(data,{rg,vname,datum});
    if(!u.faelle.length&&!u.definitionen.length&&!u.streite.length&&!u.schemata.length) throw {code:"empty"};
    Object.assign(u,extra||{});
    u.files=(files||[]).map(f=>({name:cleanName(f.name)})); u.truncated=cut;
    await saveUnit(u);
    if(hasStoff(u)){
      msg("DeepSeek erstellt die Lernkarteikarten …","");
      try{u.karten=await makeCards(u,{signal:ctl.signal,onText:({text})=>msg(`DeepSeek erstellt die Lernkarteikarten … ${text.length.toLocaleString("de-DE")} Zeichen`,"")});await saveUnit(u);}
      catch(e){u.karten=[];}
    }
    let filed="";
    try{await archiveUnit(u,files);filed=" Originale und Übersicht liegen auf dem Server unter "+[u.rechtsgebiet,u.teilgebiet].join(" › ")+".";}catch(e){filed=" Die Ablage der Dateien ist fehlgeschlagen.";}
    msg(`Fertig: ${u.definitionen.length} Definitionen, ${u.streite.length} Streitstände, ${u.schemata.length} Schemata, ${u.faelle.length} Fälle und ${u.fragen.length} Wiederholungsfragen zu „${u.thema}“${u.karten?.length?` sowie ${u.karten.length} Lernkarteikarten`:""}.${cut?" Das Material war sehr lang; berücksichtigt wurden die ersten 90.000 Zeichen.":""}${filed}`,"ok");
    collId=u.id; lsSet("gt-coll",u.id); caseIdx=0; refreshCases();
    return u;
  }catch(e){
    msg(aiErr(e,e?.code==="invalid_json"||e?.code==="empty"?"Die KI hat keine verwertbaren Ergebnisse geliefert. Versuch es mit weniger Material, z. B. einer Vorlesung pro Durchgang.":"Das Erzeugen ist fehlgeschlagen. Versuch es noch einmal."),"err");
    return null;
  }finally{busy=false; ctl=null; $("vstop").hidden=true; updateGenState(); M.setBusy(false);}
}
async function generateFromFiles(){
  if(!AI.ok()||busy) return;
  const ready=picked.filter(usable);
  const material=ready.map(p=>`### Datei: ${p.name}\n${p.text}`).join("\n\n").replace(/[ \t]+/g," ").replace(/\n{3,}/g,"\n\n");
  const msg=(t,c)=>{$("vmsg").className="msg"+(c?" "+c:"");$("vmsg").textContent=t;};
  const u=await runGenerate({material,rg:$("vrg").value,vname:$("vname").value.trim(),datum:$("vdate").value,art:"Vorlesungsunterlagen",msg,files:ready.map(p=>p.file)});
  if(u){const t=$("vmsg").textContent;picked=[];renderFiles();msg(t,"ok");}
}
const arr=x=>Array.isArray(x)?x:[];
function cleanUnit(d,{rg,vname,datum}){
  d=d||{};
  let r=RG_ORDER.includes(d.rechtsgebiet)?d.rechtsgebiet:(rg||"Grundlagen");
  if(rg) r=rg;
  const segsOf=x=>arr(x).filter(s=>s&&s.t&&s.p&&s.p.length===1&&"ODSE".includes(s.p)).map(s=>({p:s.p,t:typeable(s.t)}));
  const faelle=arr(d.faelle).map(f=>({title:typeable(f.title).slice(0,80)||"Fall",norm:typeable(f.norm).slice(0,60),sachverhalt:typeable(f.sachverhalt),frage:typeable(f.frage),segs:segsOf(f.segs)})).filter(f=>f.segs.length>=2);
  const definitionen=arr(d.definitionen).filter(x=>x&&x.begriff&&x.definition).map(x=>({begriff:typeable(x.begriff),norm:typeable(x.norm),definition:typeable(x.definition)}));
  const streite=arr(d.streite).filter(s=>s&&s.frage).map(s=>({frage:typeable(s.frage),norm:typeable(s.norm),
    ansichten:arr(s.ansichten).filter(a=>a&&a.inhalt).map(a=>({name:typeable(a.name)||"Ansicht",inhalt:typeable(a.inhalt),argumente:typeable(a.argumente)})),
    stellungnahme:typeable(s.stellungnahme),gutachten:segsOf(s.gutachten)}));
  const schemata=arr(d.schemata).filter(s=>s&&s.titel&&arr(s.punkte).length).map(s=>({titel:typeable(s.titel),norm:typeable(s.norm),punkte:arr(s.punkte).map(typeable).filter(Boolean)}));
  const fragen=arr(d.fragen).filter(q=>q&&q.frage).map(q=>({frage:typeable(q.frage),antwort:typeable(q.antwort)}));
  return {kind:"unit",id:"u-"+Date.now().toString(36),created:Date.now(),rechtsgebiet:r,teilgebiet:typeable(d.teilgebiet)||"Allgemein",thema:typeable(d.thema)||"Vorlesung",zusammenfassung:typeable(d.zusammenfassung),veranstaltung:vname||"",datum:datum||new Date().toISOString().slice(0,10),faelle,definitionen,streite,schemata,fragen,source:"ki"};
}

/* ---------- Bibliothek ---------- */
/* Seitenleiste: Rechtsgebiete › Teilgebiete › Einheiten, Klick öffnet die Einheit im Tipptrainer */
function renderTree(){
  const t=$("tree"); if(!t) return;
  const by={}; units.forEach(u=>{const r=RG_ORDER.includes(u.rechtsgebiet)?u.rechtsgebiet:"Grundlagen"; (by[r]=by[r]||{}); const tg=u.teilgebiet||"Allgemein"; (by[r][tg]=by[r][tg]||[]).push(u);});
  t.innerHTML=RG_ORDER.filter(r=>by[r]).map(r=>`<details open><summary>${esc(r)}</summary>${Object.keys(by[r]).sort((a,b)=>a.localeCompare(b,"de")).map(tg=>`<details open class="tg"><summary>${esc(tg)}</summary>${by[r][tg].map(u=>`<button class="unit-link" type="button" data-id="${esc(u.id)}">${esc(u.thema)}</button>`).join("")}</details>`).join("")}</details>`).join("")||`<p class="side-empty">Noch keine Einheiten.</p>`;
  t.querySelectorAll(".unit-link").forEach(b=>b.addEventListener("click",()=>unitAction("type",b.dataset.id,b)));
}
function renderLib(){
  renderTree();
  const lib=$("lib");
  if(!units.length){lib.innerHTML=`<div class="empty">Noch keine Einheiten. Lade links ein Skript oder Folien hoch oder mach aus einer Mitschrift Übungen. Alles erscheint dann hier, sortiert nach Rechtsgebiet, und in der Sammlungsauswahl des Tipptrainers.</div>`;return;}
  const by={}; units.forEach(u=>{const r=RG_ORDER.includes(u.rechtsgebiet)?u.rechtsgebiet:"Grundlagen";(by[r]=by[r]||{});(by[r][u.teilgebiet||"Allgemein"]=by[r][u.teilgebiet||"Allgemein"]||[]).push(u);});
  lib.innerHTML=RG_ORDER.filter(r=>by[r]).map(r=>{
    const tgs=Object.keys(by[r]).sort((a,b)=>a.localeCompare(b,"de"));
    const n=tgs.reduce((a,t)=>a+by[r][t].length,0);
    return `<div class="rg"><h3>${esc(r)} <small>${n} ${n===1?"Einheit":"Einheiten"}</small></h3>${tgs.map(t=>`<p class="tg">${esc(t)}</p>${by[r][t].map(unitCard).join("")}`).join("")}</div>`;
  }).join("");
  lib.querySelectorAll("[data-act]").forEach(b=>b.addEventListener("click",()=>unitAction(b.dataset.act,b.dataset.id,b)));
}
function unitCard(u){
  const cnt=(n,s,p)=>n?`${n} ${n===1?s:p}`:"";
  const meta=[u.veranstaltung,u.datum&&new Date(u.datum+"T12:00").toLocaleDateString("de-DE"),cnt(u.definitionen?.length,"Definition","Definitionen"),cnt(u.streite?.length,"Streitstand","Streitstände"),cnt(u.schemata?.length,"Schema","Schemata"),cnt(u.faelle?.length,"Fall","Fälle"),cnt(u.fragen?.length,"Frage","Fragen"),cnt(u.karten?.length,"Karteikarte","Karteikarten")].filter(Boolean).join(" · ");
  const karten=u.karten?.length
    ? `<button class="pbtn small" type="button" data-act="cards" data-id="${u.id}">Lernkarten (${dueCount(u)} fällig)</button><button class="pbtn small ghost" type="button" data-act="cardgen" data-id="${u.id}">Neu erstellen</button>`
    : hasStoff(u) ? `<button class="pbtn small ghost" type="button" data-act="cardgen" data-id="${u.id}">Karteikarten erstellen</button>` : "";
  const files=(u.files||[]).map(f=>`<a class="pbtn small ghost" style="text-decoration:none" href="/api/files?unit=${encodeURIComponent(u.id)}&name=${encodeURIComponent(f.name)}" download>${esc(f.name.length>28?f.name.slice(0,26)+"…":f.name)}</a>`).join("");
  return `<div class="unit"><b>${esc(u.thema)}</b><span class="meta">${esc(meta)}</span>${u.zusammenfassung?`<p>${esc(u.zusammenfassung)}</p>`:""}
   <div class="row-btn"><button class="pbtn small" type="button" data-act="type" data-id="${u.id}">Tippen</button>
   <button class="pbtn small ghost" type="button" data-act="exam" data-id="${u.id}">Im E-Examen</button>
   ${u.fragen?.length?`<button class="pbtn small ghost" type="button" data-act="quiz" data-id="${u.id}">Abfragen</button>`:""}
   ${karten}
   <button class="pbtn small ghost" type="button" data-act="export" data-id="${u.id}">Exportieren</button>
   ${files}
   <button class="pbtn small danger" type="button" data-act="del" data-id="${u.id}">Löschen</button></div></div>`;
}
async function unitAction(act,id,btn){
  const u=units.find(x=>x.id===id); if(!u) return;
  if(act==="type"){collId=id;lsSet("gt-coll",id);caseIdx=0;refreshCases();go("trainer");}
  if(act==="exam"){collId=id;lsSet("gt-coll",id);caseIdx=0;refreshCases();go("examen");}
  if(act==="quiz") quiz(u);
  if(act==="cards") flashcards(u);
  if(act==="cardgen") generateCards(u,btn);
  if(act==="del"){
    if(btn.dataset.armed!=="1"){btn.dataset.armed="1";btn.textContent="Wirklich löschen?";setTimeout(()=>{btn.dataset.armed="";btn.textContent="Löschen";},3000);return;}
    try{await deleteUnit(u);toast("Gelöscht.");}catch(e){toast("Löschen fehlgeschlagen.");}
  }
  if(act==="export") dlLink(cleanName(`${u.rechtsgebiet} - ${u.teilgebiet} - ${u.datum||""} ${u.thema}`)+".md",new Blob([toMarkdown(u)],{type:"text/markdown"}));
}
function toMarkdown(u){
  let s=`# ${u.thema}\n\n${u.rechtsgebiet} › ${u.teilgebiet}${u.veranstaltung?` · ${u.veranstaltung}`:""}${u.datum?` · ${u.datum}`:""}\n\n`;
  if(u.zusammenfassung) s+=`${u.zusammenfassung}\n\n`;
  if(u.definitionen?.length){s+=`## Definitionen\n\n`;u.definitionen.forEach(d=>s+=`- **${d.begriff}**${d.norm?` (${d.norm})`:""}: ${d.definition}\n`);s+="\n";}
  if(u.streite?.length){
    s+=`## Streitstände\n\n`;
    u.streite.forEach(x=>{
      s+=`### ${x.frage}${x.norm?` (${x.norm})`:""}\n\n`;
      (x.ansichten||[]).forEach(a=>s+=`- **${a.name}:** ${a.inhalt}${a.argumente?` Argumente: ${a.argumente}`:""}\n`);
      if(x.stellungnahme) s+=`\n**Stellungnahme:** ${x.stellungnahme}\n`;
      if(x.gutachten?.length) s+=`\n${x.gutachten.map(g=>g.t).join(" ")}\n`;
      s+="\n";
    });
  }
  if(u.schemata?.length){s+=`## Prüfungsschemata\n\n`;u.schemata.forEach(x=>{s+=`### ${x.titel}${x.norm?` (${x.norm})`:""}\n\n${x.punkte.join("\n")}\n\n`;});}
  (u.faelle||[]).forEach(f=>{
    s+=`## Fall: ${f.title}${f.norm?` (${f.norm})`:""}\n\n`;
    if(f.sachverhalt) s+=`**Sachverhalt:** ${f.sachverhalt}\n\n`;
    if(f.frage) s+=`**Bearbeitervermerk:** ${f.frage}\n\n`;
    f.segs.forEach(g=>s+=`${g.p==="O"?"\n":""}${g.t} `); s+="\n\n";
  });
  if(u.fragen?.length){s+=`## Wiederholungsfragen\n\n`;u.fragen.forEach((q,i)=>s+=`${i+1}. ${q.frage}\n   ${q.antwort}\n`);}
  return s;
}
function quiz(u){
  const qs=[...u.fragen].sort(()=>Math.random()-.5); let i=0, shown=false;
  const m=document.createElement("div"); m.className="modal";
  m.innerHTML=`<div class="modal-bar"><b>${esc(u.thema)}: Abfragen</b><button class="pbtn small" type="button" data-x>Schließen</button></div><div class="quiz"></div>`;
  document.body.appendChild(m);
  const box=m.querySelector(".quiz");
  const draw=()=>{
    const q=qs[i];
    box.innerHTML=`<p class="lbl">Frage ${i+1} von ${qs.length}</p><p class="qq">${esc(q.frage)}</p>${shown?`<p class="qa">${esc(q.antwort||"Keine Antwort hinterlegt.")}</p>`:""}
      <div class="row-btn">${shown?`<button class="pbtn" type="button" data-n>${i<qs.length-1?"Nächste Frage":"Fertig"}</button>`:`<button class="pbtn" type="button" data-s>Antwort zeigen</button>`}</div>`;
    box.querySelector("[data-s]")?.addEventListener("click",()=>{shown=true;draw();});
    box.querySelector("[data-n]")?.addEventListener("click",()=>{if(i<qs.length-1){i++;shown=false;draw();}else m.remove();});
    box.querySelector("button")?.focus();
  };
  m.querySelector("[data-x]").onclick=()=>m.remove();
  draw();
}

/* ---------- Lernkarteikarten: KI aus Definitionen, Streiten und Schemata, Wiederholung nach Fächern ---------- */
const KARTEN_TYPEN=["Definition","Streit","Schema"];
const FACH_TAGE=[0,1,3,7,14]; // Tage bis zur nächsten Wiederholung für Fach 1 bis 5
const hasStoff=u=>!!(u.definitionen?.length||u.streite?.length||u.schemata?.length);
const dueCount=u=>(u.karten||[]).filter(k=>k.faellig<=Date.now()).length;
function cardsPrompt(u){
  return `Du erstellst Lernkarteikarten für die Erste Juristische Prüfung in Baden-Württemberg. Grundlage ist ausschließlich der folgende Lernstoff. Erfinde keine Normen, Definitionen oder Ansichten, die dort nicht vorkommen oder die du nicht sicher kennst.

Erstelle 15 bis 40 Karten, jeweils von einem der Typen:
- "Definition": vorne der Begriff, hinten die Definition in knapper Examensformulierung. Die Norm kommt in das Feld "norm".
- "Streit": vorne die Streitfrage, hinten die Ansichten mit ihren Vertretern und das Ergebnis der Stellungnahme in 3 bis 6 Sätzen.
- "Schema": vorne "Prüfungsschema: <Titel>", hinten die Gliederungspunkte, durch Zeilenumbrüche getrennt.

Antworte ausschließlich mit diesem JSON-Objekt:
{"karten":[{"typ":"Definition","norm":"§ 119 Abs. 1 BGB","vorne":"Erklärungsirrtum","hinten":"..."}]}

Lernstoff:
${toMarkdown(u).slice(0,60000)}`;
}
async function makeCards(u,{signal,onText}={}){
  const data=await AI.text(cardsPrompt(u),{json:true,signal,onText});
  const karten=arr(data?.karten).filter(k=>k&&k.vorne&&k.hinten).slice(0,60).map(k=>({
    id:"k-"+Math.random().toString(36).slice(2,10),
    typ:KARTEN_TYPEN.includes(k.typ)?k.typ:"Definition",
    norm:String(k.norm||"").trim(),
    vorne:String(k.vorne).trim(),
    hinten:String(k.hinten).trim(),
    fach:1, faellig:0}));
  if(!karten.length) throw {code:"empty"};
  return karten;
}
async function generateCards(u,btn){
  if(!AI.ok()){toast(aiErr({code:"no_key"}));return;}
  if(busy){toast("Gerade läuft eine andere KI-Aufgabe.");return;}
  if(u.karten?.length&&!confirm(`Die ${u.karten.length} bestehenden Karten und ihr Lernfortschritt werden ersetzt. Fortfahren?`)) return;
  busy=true; ctl=new AbortController(); if(btn) btn.disabled=true;
  toast("DeepSeek erstellt die Karten …");
  try{u.karten=await makeCards(u,{signal:ctl.signal});await saveUnit(u);toast(`${u.karten.length} Lernkarteikarten erstellt.`);}
  catch(e){toast(aiErr(e,"Die Karten konnten nicht erstellt werden. Versuch es noch einmal."));}
  finally{busy=false; ctl=null;}
}
function flashcards(u){
  const queue=u.karten.filter(k=>k.faellig<=Date.now()).sort((a,b)=>a.fach-b.fach);
  const total=queue.length, doneIds=new Set(); let i=0, shown=false, dirty=false;
  const m=document.createElement("div"); m.className="modal";
  m.innerHTML=`<div class="modal-bar"><b>${esc(u.thema)}: Lernkarteikarten</b><button class="pbtn small" type="button" data-x>Schließen</button></div><div class="quiz"></div>`;
  document.body.appendChild(m);
  const box=m.querySelector(".quiz");
  const close=()=>{document.removeEventListener("keydown",onKey); m.remove(); if(dirty) saveUnit(u).catch(()=>toast("Der Lernstand konnte nicht gespeichert werden."));};
  const rate=gut=>{
    const k=queue[i];
    if(gut){k.fach=Math.min(5,k.fach+1); k.faellig=Date.now()+FACH_TAGE[k.fach-1]*864e5; doneIds.add(k.id);}
    else{k.fach=1; k.faellig=Date.now(); queue.push(k);} // „Nochmal“ kommt am Ende dieser Runde wieder
    dirty=true; i++; shown=false; draw();
  };
  const onKey=e=>{
    if(e.key==="Escape"){close();return;}
    if(!total||i>=queue.length) return;
    if(!shown&&e.key===" "){e.preventDefault(); shown=true; draw();}
    else if(shown&&e.key==="n") rate(false);
    else if(shown&&e.key==="g") rate(true);
  };
  const draw=()=>{
    if(!total){
      const later=u.karten.map(k=>k.faellig).filter(t=>t>Date.now());
      box.innerHTML=`<p class="qq">Heute ist nichts fällig.</p><p class="msg">${later.length?`Die nächste Karte kommt am ${new Date(Math.min(...later)).toLocaleDateString("de-DE")}.`:""}</p>`;
      return;
    }
    if(i>=queue.length){
      box.innerHTML=`<p class="qq">Runde geschafft.</p><p class="msg">${doneIds.size} von ${total} Karten gewusst. Die übrigen kommen wieder, wenn sie fällig sind.</p>`;
      return;
    }
    const k=queue[i];
    box.innerHTML=`<p class="lbl">${esc(k.typ)}${k.norm?` · ${esc(k.norm)}`:""} · Fach ${k.fach} · noch ${queue.length-i}</p>
      <p class="qq">${esc(k.vorne)}</p>
      ${shown?`<div class="qa" style="white-space:pre-line">${esc(k.hinten)}</div>`:""}
      <div class="row-btn">${shown?`<button class="pbtn ghost" type="button" data-r="n">Nochmal (n)</button><button class="pbtn" type="button" data-r="g">Gewusst (g)</button>`:`<button class="pbtn" type="button" data-s>Antwort zeigen (Leertaste)</button>`}</div>`;
    box.querySelector("[data-s]")?.addEventListener("click",()=>{shown=true; draw();});
    box.querySelector('[data-r="n"]')?.addEventListener("click",()=>rate(false));
    box.querySelector('[data-r="g"]')?.addEventListener("click",()=>rate(true));
    box.querySelector("button")?.focus();
  };
  m.querySelector("[data-x]").onclick=close;
  document.addEventListener("keydown",onKey);
  draw();
}

/* ---------- Mitschrift nach der Cornell-Methode ---------- */
const MARKS=[
  {code:"KeyN",pre:"§ ",label:"Norm",cls:"mk-n"},
  {code:"KeyD",pre:"D: ",label:"Definition",cls:"mk-d"},
  {code:"KeyS",pre:"S: ",label:"Streit",cls:"mk-s"},
  {code:"KeyA",pre:"A: ",label:"Ansicht",cls:"mk-a"},
  {code:"KeyG",pre:"+ ",label:"Argument",cls:"mk-g"},
  {code:"KeyP",pre:"P: ",label:"Schema",cls:"mk-p"},
  {code:"KeyM",pre:"! ",label:"Merke",cls:"mk-m"},
  {code:"KeyF",pre:"? ",label:"Frage",cls:"mk-f"}
];
const HEAD_RE=/^\s*([A-H]\.|[IVX]{1,5}\.|\d{1,2}\.|[a-z]\)|[a-z]{2}\))\s+\S/;
function lineMark(l){return MARKS.find(m=>l.startsWith(m.pre));}
function parseMarkup(text){
  const out={definitionen:[],streite:[],schemata:[],fragen:[],normen:[]};
  let streit=null, ansicht=null, schema=null, lastHead="";
  for(const raw of text.split("\n")){
    const l=raw.trim(); if(!l) {schema=null; continue;}
    const m=lineMark(l), body=m?l.slice(m.pre.length).trim():l;
    if(!m&&HEAD_RE.test(l)){lastHead=l; schema=null; continue;}
    if(!m) continue;
    if(m.pre==="D: "){const i=body.search(/ = |: /); if(i>0) out.definitionen.push({begriff:body.slice(0,i).trim(),norm:(body.match(/§§? ?\d+[^,;)]*/)||[""])[0].trim(),definition:body.slice(i+(body[i]===":"?1:2)).trim()}); else out.definitionen.push({begriff:body.slice(0,40),norm:"",definition:body});}
    if(m.pre==="S: "){streit={frage:body,norm:"",ansichten:[],stellungnahme:"",gutachten:[]}; out.streite.push(streit); ansicht=null;}
    if(m.pre==="A: "){const i=body.indexOf(":"); ansicht={name:i>0?body.slice(0,i).trim():"Ansicht",inhalt:i>0?body.slice(i+1).trim():body,argumente:""}; if(!streit){streit={frage:lastHead||"Streitfrage",norm:"",ansichten:[],stellungnahme:"",gutachten:[]};out.streite.push(streit);} streit.ansichten.push(ansicht);}
    if(m.pre==="+ "&&ansicht) ansicht.argumente=(ansicht.argumente?ansicht.argumente+"; ":"")+body;
    if(m.pre==="P: "){if(!schema){schema={titel:lastHead||"Prüfungsschema",norm:"",punkte:[]};out.schemata.push(schema);} schema.punkte.push(body);}
    if(m.pre==="? ") out.fragen.push({frage:body,antwort:""});
    if(m.pre==="§ ") out.normen.push(body);
  }
  return out;
}
function cuesFrom(text){
  const lines=[];
  for(const raw of text.split("\n")){
    const l=raw.trim(); if(!l) continue;
    const m=lineMark(l), b=m?l.slice(m.pre.length).trim():l;
    if(!m&&HEAD_RE.test(l)) lines.push(l);
    else if(m?.pre==="§ ") lines.push("§ "+b);
    else if(m?.pre==="D: ") lines.push("Definition? "+b.split(/ = |: /)[0]);
    else if(m?.pre==="S: ") lines.push("Streit? "+b);
    else if(m?.pre==="P: "&&!lines.at(-1)?.startsWith("Schema?")) lines.push("Schema? "+(b.length>50?b.slice(0,48)+"…":b));
    else if(m?.pre==="? ") lines.push("Offen: "+b);
  }
  return lines.join("\n");
}
function renderNotes(text){
  return text.split("\n").map(raw=>{
    const l=raw.trim(); if(!l) return `<div class="ml-gap"></div>`;
    const m=lineMark(l);
    if(m) return `<div class="ml ${m.cls}"><span class="mchip">${m.label}</span>${esc(l.slice(m.pre.length))}</div>`;
    if(HEAD_RE.test(l)) return `<div class="ml ml-h">${esc(l)}</div>`;
    return `<div class="ml">${esc(raw)}</div>`;
  }).join("");
}
const M={
  notes:[], cur:null, timer:0, saving:false, pending:false,
  el:id=>$(id),
  init(){
    const tools=$("mTools");
    tools.innerHTML=MARKS.map(m=>`<button class="tbtn mk ${m.cls}" type="button" data-pre="${esc(m.pre)}" title="${m.label}: Zeile beginnt mit „${m.pre.trim()}“ (Alt+${m.code.slice(3)})">${m.label} <kbd>Alt+${m.code.slice(3)}</kbd></button>`).join("");
    tools.querySelectorAll("[data-pre]").forEach(b=>{b.addEventListener("mousedown",e=>e.preventDefault());b.addEventListener("click",()=>this.toggle($("mNotes"),b.dataset.pre));});
    $("mNew").addEventListener("click",()=>this.create());
    $("mSearch").addEventListener("input",()=>this.renderList());
    ["mVer","mThema","mRg","mDate","mCues","mNotes","mSum"].forEach(id=>$(id).addEventListener("input",()=>this.changed()));
    $("mNotes").addEventListener("keydown",e=>this.keys(e));
    $("mLearn").addEventListener("click",()=>{const on=$("cornell").classList.toggle("learn");$("mLearn").setAttribute("aria-pressed",on);$("mLearn").textContent=on?"Notizen aufdecken":"Lernmodus: Notizen abdecken";});
    $("mView").addEventListener("click",()=>{const on=$("cornell").classList.toggle("preview");$("mView").setAttribute("aria-pressed",on);$("mView").textContent=on?"Bearbeiten":"Ansicht";if(on)$("mRender").innerHTML=renderNotes($("mNotes").value);});
    $("mCueFill").addEventListener("click",()=>{const c=cuesFrom($("mNotes").value); if(!c){this.msg("Keine Markierungen gefunden. Markiere Zeilen mit den Knöpfen oben.","err");return;} $("mCues").value=($("mCues").value.trim()?$("mCues").value.trim()+"\n":"")+c; this.changed(); this.msg("Stichworte aus deinen Markierungen übernommen.","ok");});
    $("mAiCues").addEventListener("click",()=>this.aiCues());
    $("mParse").addEventListener("click",()=>this.toUnit());
    $("mAiUnit").addEventListener("click",()=>this.aiUnit());
    $("mExport").addEventListener("click",()=>{const n=this.cur; if(!n) return; dlLink(cleanName(`${n.rechtsgebiet||"Mitschrift"} - ${n.datum||""} ${n.thema||"Mitschrift"}`)+".md",new Blob([this.md(n)],{type:"text/markdown"}));});
    $("mDel").addEventListener("click",e=>this.remove(e.currentTarget));
    window.addEventListener("beforeunload",e=>{if(this.pending){this.flush();e.preventDefault();e.returnValue="";}});
  },
  onShow(){ if(!this.cur){ this.notes.length?this.open(this.notes[0].id):this.create(); } this.renderList(); },
  sorted(){return [...this.notes].sort((a,b)=>(b.datum||"").localeCompare(a.datum||"")||(b.updated||0)-(a.updated||0));},
  renderList(){
    const q=$("mSearch").value.trim().toLowerCase();
    const list=this.sorted().filter(n=>!q||[n.thema,n.veranstaltung,n.notes].join(" ").toLowerCase().includes(q));
    if(!list.length){$("mList").innerHTML=`<p class="msg">${q?"Nichts gefunden.":"Noch keine Mitschriften."}</p>`;return;}
    const by={}; list.forEach(n=>(by[n.rechtsgebiet||"Ohne Rechtsgebiet"]=by[n.rechtsgebiet||"Ohne Rechtsgebiet"]||[]).push(n));
    $("mList").innerHTML=[...RG_ORDER,"Ohne Rechtsgebiet"].filter(r=>by[r]).map(r=>`<p class="tg">${esc(r)}</p>`+by[r].map(n=>`<button type="button" class="mitem" data-id="${n.id}" aria-current="${this.cur?.id===n.id}"><b>${esc(n.thema||"Ohne Thema")}</b><span>${esc([n.datum&&new Date(n.datum+"T12:00").toLocaleDateString("de-DE"),n.veranstaltung].filter(Boolean).join(" · "))}</span></button>`).join("")).join("");
    $("mList").querySelectorAll(".mitem").forEach(b=>b.addEventListener("click",()=>this.open(b.dataset.id)));
  },
  create(){
    this.flush();
    const last=this.sorted()[0]||{};
    const n={kind:"note",id:"n-"+Date.now().toString(36),created:Date.now(),updated:Date.now(),veranstaltung:last.veranstaltung||"",thema:"",rechtsgebiet:last.rechtsgebiet||"",datum:new Date().toISOString().slice(0,10),notes:"",cues:"",summary:""};
    this.notes.push(n); this.open(n.id); $("mThema").focus();
  },
  open(id){
    this.flush();
    const n=this.notes.find(x=>x.id===id); if(!n) return;
    this.cur=n;
    $("mVer").value=n.veranstaltung||""; $("mThema").value=n.thema||""; $("mRg").value=n.rechtsgebiet||""; $("mDate").value=n.datum||"";
    $("mCues").value=n.cues||""; $("mNotes").value=n.notes||""; $("mSum").value=n.summary||"";
    $("cornell").classList.remove("preview","learn"); $("mView").textContent="Ansicht"; $("mLearn").textContent="Lernmodus: Notizen abdecken";
    this.state(n.updated&&n.notes?"Gespeichert":"Neu"); this.msg("",""); this.renderList();
  },
  read(){const n=this.cur; if(!n) return; n.veranstaltung=$("mVer").value; n.thema=$("mThema").value; n.rechtsgebiet=$("mRg").value; n.datum=$("mDate").value; n.cues=$("mCues").value; n.notes=$("mNotes").value; n.summary=$("mSum").value; n.updated=Date.now();},
  changed(){
    this.read(); this.pending=true; this.state("Wird gespeichert …");
    try{localStorage.setItem("gt-note-backup",JSON.stringify(this.cur));}catch(e){}
    clearTimeout(this.timer); this.timer=setTimeout(()=>this.save(),900);
  },
  flush(){if(this.pending){clearTimeout(this.timer);this.save();}},
  async save(){
    if(!this.cur) return; if(this.saving){this.timer=setTimeout(()=>this.save(),400);return;}
    const n=this.cur; this.saving=true; this.pending=false;
    try{await putDoc(n); if(this.cur===n) this.state("Gespeichert "+new Date().toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit"})); this.renderList();}
    catch(e){this.pending=true; this.state("Nicht gespeichert. Verbindung prüfen, ich versuche es erneut.",true); clearTimeout(this.timer); this.timer=setTimeout(()=>this.save(),5000);}
    this.saving=false;
  },
  state(t,bad){$("mState").textContent=t;$("mState").className="msg"+(bad?" err":"");},
  msg(t,c){$("mMsg").textContent=t;$("mMsg").className="msg"+(c?" "+c:"");},
  setBusy(b){["mAiCues","mAiUnit"].forEach(id=>$(id).disabled=b||!AI.ok());},
  put(ta,a,b,text){ta.setSelectionRange(a,b);const ok=text?document.execCommand("insertText",false,text):(a===b||document.execCommand("delete"));if(!ok)ta.setRangeText(text,a,b,"end");},
  lineRange(ta){const v=ta.value,s=ta.selectionStart,e=ta.selectionEnd;const a=v.lastIndexOf("\n",s-1)+1;let z=v.indexOf("\n",e);if(z<0)z=v.length;return [a,z];},
  toggle(ta,pre){
    ta.focus();
    const [a,z]=this.lineRange(ta), v=ta.value, block=v.slice(a,z).split("\n");
    const allHave=block.every(l=>l.trimStart().startsWith(pre));
    const next=block.map(l=>{const ind=l.match(/^\s*/)[0]; let body=l.slice(ind.length); const m=lineMark(body); if(m) body=body.slice(m.pre.length); return allHave?ind+body:ind+pre+body;}).join("\n");
    this.put(ta,a,z,next);
    const end=a+next.length; ta.setSelectionRange(end,end); this.changed();
  },
  keys(e){
    const ta=e.target;
    if(e.altKey&&!e.ctrlKey&&!e.metaKey){const m=MARKS.find(x=>x.code===e.code); if(m){e.preventDefault();this.toggle(ta,m.pre);return;}}
    if(e.key==="Tab"&&!e.altKey&&!e.ctrlKey){
      e.preventDefault(); const [a]=this.lineRange(ta);
      if(e.shiftKey){if(ta.value.slice(a,a+2)==="  ") this.put(ta,a,a+2,"");}
      else{const p=ta.selectionStart;this.put(ta,a,a,"  ");ta.setSelectionRange(p+2,p+2);}
      this.changed(); return;
    }
    if(e.key==="Enter"&&!e.shiftKey&&!e.altKey&&!e.ctrlKey){
      const [a]=this.lineRange(ta), line=ta.value.slice(a,ta.selectionStart);
      const ind=line.match(/^\s*/)[0], m=lineMark(line.trimStart());
      const keep=m?({"P: ":"P: ","+ ":"+ ","A: ":"+ "})[m.pre]||"":"";
      if(m&&line.trim()===m.pre.trim()&&ta.selectionStart===ta.selectionEnd){e.preventDefault();this.put(ta,a+ind.length,ta.selectionStart,"");this.changed();return;}
      if(ind||keep){e.preventDefault();this.put(ta,ta.selectionStart,ta.selectionEnd,"\n"+ind+keep);this.changed();}
    }
  },
  material(n){return `Veranstaltung: ${n.veranstaltung||"-"}\nThema: ${n.thema||"-"}\nDatum: ${n.datum||"-"}\n\nNOTIZEN:\n${n.notes}\n\nSTICHWORTE:\n${n.cues}\n\nZUSAMMENFASSUNG:\n${n.summary}`;},
  async aiCues(){
    const n=this.cur; if(!n||!AI.ok()) return; this.read();
    if(n.notes.trim().length<80){this.msg("Schreib erst etwas mehr mit.","err");return;}
    this.setBusy(true); this.msg("DeepSeek liest deine Mitschrift …","");
    try{
      const d=await AI.text(`Du hilfst einem Jurastudenten in Baden-Württemberg bei der Nachbereitung einer Vorlesungsmitschrift nach der Cornell-Methode. Antworte NUR mit JSON: {"stichworte":["..."],"fragen":["..."],"zusammenfassung":"..."}
- stichworte: 6 bis 15 Schlüsselbegriffe und Normen für die linke Spalte, in der Reihenfolge der Mitschrift.
- fragen: 5 bis 12 Prüfungsfragen, mit denen man sich später bei abgedeckten Notizen selbst abfragt (Definitionen, Streitstände, Schemata, Abgrenzungen).
- zusammenfassung: 4 bis 6 Sätze, was man aus dieser Vorlesung für das Examen mitnehmen muss.
Zeilenanfänge in der Mitschrift: "§ " Norm, "D: " Definition, "S: " Streit, "A: " Ansicht, "+ " Argument, "P: " Schemapunkt, "! " Merksatz, "? " offene Frage. Erfinde nichts, was nicht zum Thema gehört. Beantworte offene Fragen (Zeilen mit "? ") am Ende der Zusammenfassung kurz, wenn du sicher bist.

${this.material(n).slice(0,60000)}`,{json:true,onText:({text})=>this.msg(`DeepSeek schreibt … ${text.length} Zeichen`,"")});
      const st=arr(d.stichworte).map(String), fr=arr(d.fragen).map(String);
      if(!st.length&&!fr.length&&!d.zusammenfassung) throw {code:"empty"};
      const add=[...st,...fr.map(f=>"? "+f)].join("\n");
      $("mCues").value=($("mCues").value.trim()?$("mCues").value.trim()+"\n\n":"")+add;
      if(d.zusammenfassung) $("mSum").value=($("mSum").value.trim()?$("mSum").value.trim()+"\n\n":"")+String(d.zusammenfassung);
      this.changed(); this.msg("Stichworte, Prüfungsfragen und Zusammenfassung ergänzt. Prüf sie kurz gegen deine Notizen.","ok");
    }catch(e){this.msg(aiErr(e,"Das hat nicht geklappt. Versuch es noch einmal."),"err");}
    this.setBusy(false);
  },
  toUnit(){
    const n=this.cur; if(!n) return; this.read();
    const p=parseMarkup(n.notes);
    if(!p.definitionen.length&&!p.streite.length&&!p.schemata.length){this.msg("Keine markierten Definitionen, Streite oder Schemata gefunden. Markiere Zeilen mit D:, S:, A: oder P:.","err");return;}
    const old=units.find(u=>u.id===n.unitId&&u.source==="mitschrift");
    const u={kind:"unit",id:old?.id||"u-"+Date.now().toString(36),created:old?.created||Date.now(),rechtsgebiet:n.rechtsgebiet||"Grundlagen",teilgebiet:n.veranstaltung||"Mitschriften",thema:(n.thema||"Mitschrift")+" (Markierungen)",zusammenfassung:n.summary.slice(0,600),veranstaltung:n.veranstaltung,datum:n.datum,
      definitionen:p.definitionen.map(d=>({begriff:typeable(d.begriff),norm:typeable(d.norm),definition:typeable(d.definition)})),
      streite:p.streite.map(s=>({...s,frage:typeable(s.frage),ansichten:s.ansichten.map(a=>({name:typeable(a.name),inhalt:typeable(a.inhalt),argumente:typeable(a.argumente)}))})),
      schemata:p.schemata.map(s=>({...s,titel:typeable(s.titel),punkte:s.punkte.map(typeable)})),
      fragen:p.fragen,faelle:[],source:"mitschrift",noteId:n.id};
    saveUnit(u).then(()=>{n.unitId=u.id;this.changed();this.msg(`Übernommen: ${u.definitionen.length} Definitionen, ${u.streite.length} Streite, ${u.schemata.length} Schemata. Du findest sie im Tipptrainer unter „${u.thema}“.`,"ok");}).catch(()=>this.msg("Speichern fehlgeschlagen.","err"));
  },
  async aiUnit(){
    const n=this.cur; if(!n||!AI.ok()||busy) return; this.read(); this.flush();
    if(n.notes.trim().length<200){this.msg("Für Übungen ist die Mitschrift noch zu kurz.","err");return;}
    const u=await runGenerate({material:this.material(n),rg:n.rechtsgebiet,vname:n.veranstaltung,datum:n.datum,art:"eine Vorlesungsmitschrift",msg:(t,c)=>this.msg(t,c),files:[new File([this.md(n)],cleanName(`Mitschrift ${n.datum||""} ${n.thema||""}`)+".md",{type:"text/markdown"})],extra:{noteId:n.id}});
    if(u){n.unitId=u.id;this.changed();}
  },
  async remove(btn){
    const n=this.cur; if(!n) return;
    if(btn.dataset.armed!=="1"){btn.dataset.armed="1";btn.textContent="Wirklich löschen?";setTimeout(()=>{btn.dataset.armed="";btn.textContent="Löschen";},3000);return;}
    clearTimeout(this.timer); this.pending=false;
    try{await delDoc(n);}catch(e){}
    this.notes=this.notes.filter(x=>x!==n); this.cur=null; btn.dataset.armed=""; btn.textContent="Löschen";
    this.notes.length?this.open(this.sorted()[0].id):this.create(); toast("Mitschrift gelöscht.");
  },
  md(n){return `# ${n.thema||"Mitschrift"}\n\n${[n.rechtsgebiet,n.veranstaltung,n.datum].filter(Boolean).join(" · ")}\n\n## Notizen\n\n${n.notes}\n\n## Stichworte und Fragen\n\n${n.cues}\n\n## Zusammenfassung\n\n${n.summary}\n`;}
};

/* ---------- Einstellungen und Start ---------- */
$("logout").addEventListener("click",async()=>{M.flush();try{await fetch("/api/logout",{method:"POST"});}catch(e){} location.href="/login";});

/* ---------- Aktualisieren über die Einstellungen ---------- */
const setUpd=(t,c)=>{$("updMsg").className="msg"+(c?" "+c:"");$("updMsg").textContent=t;};
$("updBtn").addEventListener("click",async()=>{
  $("updBtn").disabled=true; setUpd("Aktualisierung wird angestoßen …","");
  try{const r=await apiJSON("/api/update",{method:"POST"}); pollUpdate(r.since);}
  catch(err){$("updBtn").disabled=false; setUpd(err.code==="busy"?"Es läuft schon eine Aktualisierung.":"Die Aktualisierung konnte nicht gestartet werden.","err");}
});
async function pollUpdate(since){
  const started=Date.now();
  const tick=async()=>{
    if(Date.now()-started>300000){$("updBtn").disabled=false; setUpd("Das dauert ungewöhnlich lang. Auf dem Server: journalctl -u gutachten-update","err"); return;}
    let st=null; try{st=await apiJSON("/api/update/status");}catch(e){st=null;} // während des Neustarts nicht erreichbar
    if(st&&st.at===since&&st.state!=="running"){
      $("updBtn").disabled=false;
      if(st.state==="ok"){setUpd("Aktualisiert. Die Seite lädt neu …","ok"); setTimeout(()=>location.reload(),1200);}
      else{setUpd("Aktualisierung fehlgeschlagen:\n"+(st.log||"").split("\n").slice(-8).join("\n"),"err");}
      return;
    }
    setUpd(st?.state==="running"?"Code wird geholt, der Tipptrainer startet neu …":"Warte auf den Start der Aktualisierung …","");
    setTimeout(tick,2000);
  };
  tick();
}

/* ---------- DeepSeek-Schlüssel in den Einstellungen ---------- */
function renderAiState(me){
  SERVER.ai=!!me.ai; SERVER.model=me.model||"";
  $("aiState").textContent=me.ai
    ? `DeepSeek über den Server, Modell ${me.model}. Schlüssel endet auf …${me.aiHint}${me.aiSource==="env"?" (aus der .env-Datei)":""}. Er bleibt auf dem Server.`
    : "Keine KI eingerichtet. Trag unten deinen DeepSeek-API-Schlüssel ein.";
  $("aiDel").hidden=me.aiSource!=="settings";
  $("verState").textContent=`Version ${me.version||"unbekannt"}. Holt den neuesten Stand aus dem Git-Repo und startet den Tipptrainer neu. Der Tunnel läuft weiter.`;
}
$("aiForm").addEventListener("submit",async e=>{
  e.preventDefault();
  const key=$("aiKey").value.trim(); if(!key) return;
  try{
    await apiJSON("/api/settings/ai-key",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({key})});
    $("aiKey").value=""; renderAiState(await apiJSON("/api/me"));
    $("aiMsg").className="msg ok"; $("aiMsg").textContent="Schlüssel gespeichert.";
  }catch(err){
    $("aiMsg").className="msg err";
    $("aiMsg").textContent=err.code==="bad_key"?"Das sieht nicht nach einem gültigen DeepSeek-Schlüssel aus.":"Speichern fehlgeschlagen.";
  }
});
$("aiDel").addEventListener("click",async()=>{
  try{
    await apiJSON("/api/settings/ai-key",{method:"DELETE"});
    renderAiState(await apiJSON("/api/me"));
    $("aiMsg").className="msg ok"; $("aiMsg").textContent="Schlüssel entfernt.";
  }catch(err){$("aiMsg").className="msg err"; $("aiMsg").textContent="Entfernen fehlgeschlagen.";}
});
async function boot(){
  units=[]; refreshCases(); renderLib(); M.init();
  go(location.hash.slice(1)||"trainer");
  let me;
  try{me=await apiJSON("/api/me");}catch(e){ if(e?.code!=="login") toast("Server nicht erreichbar."); return; }
  renderAiState(me);
  $("storeState").textContent=`Alles liegt auf deinem Server im Ordner ${me.dataDir}: Einheiten und Mitschriften in „db“, Originale und Übersichten in „ablage“, sortiert nach Rechtsgebiet › Teilgebiet › Datum Thema.`;
  try{
    const docs=await apiJSON("/api/docs");
    units=docs.filter(d=>d.kind==="unit").sort((a,b)=>(b.created||0)-(a.created||0));
    M.notes=docs.filter(d=>d.kind==="note");
    try{const b=JSON.parse(localStorage.getItem("gt-note-backup")||"null"); const s=b&&M.notes.find(n=>n.id===b.id); if(b&&(!s||(b.updated||0)>(s.updated||0))){ if(s) Object.assign(s,b); else M.notes.push(b); M.cur=null; await putDoc(b).catch(()=>{}); }}catch(e){}
  }catch(e){toast("Daten konnten nicht geladen werden.");}
  refreshCases(); renderLib(); updateGenState(); M.setBusy(false);
  if(view==="mitschrift"){M.cur=null;M.onShow();}
}
boot();
