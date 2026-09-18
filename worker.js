const OFFICIAL = "https://www.pokemon-card.com";
const APP_HTML = `<!doctype html><html lang="ja"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes"><meta name="theme-color" content="#07111c">
<title>Poké AI Arena v0.12.4</title>
<style>
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}html,body{margin:0;height:100%;background:#050b12;color:#fff;font-family:-apple-system,BlinkMacSystemFont,sans-serif;overflow:hidden}
#app{height:100dvh;display:flex;flex-direction:column}.top{height:45px;padding:calc(5px + env(safe-area-inset-top)) 12px 5px;background:#08111c;display:flex;align-items:center;justify-content:space-between}.top button{background:#1d2b3d;color:#fff;border:0;border-radius:9px;padding:7px 10px}
.mat{position:relative;flex:1;min-height:0;background:radial-gradient(circle at 50% 50%,#263443,#101923 58%,#07101a);border:1px solid #26384b;overflow:hidden}.mid{position:absolute;left:2%;right:2%;top:50%;border-top:1px solid #52779d}
.stadium{position:absolute;left:34%;top:50%;transform:translate(-50%,-50%);width:17vw;height:23vw;max-width:82px;max-height:114px;border:2px dashed #9ba9b7;border-radius:7px;display:grid;place-items:center;font-size:10px;color:#c9d3dd;background:#ffffff05;z-index:2}
.sideCount{position:absolute;left:2.5%;width:12vw;max-width:60px;height:18vw;max-height:88px;border:1px solid #66809b;border-radius:8px;display:grid;place-items:center;text-align:center;font-size:9px;background:#0d1a28}.sideCount b{font-size:23px}.aiSide{top:9%;transform:rotate(180deg)}.pSide{bottom:9%}
.zone{position:absolute;border:1.5px dashed #8b98a6;border-radius:7px;display:grid;place-items:center;color:#9da9b5;font-size:9px}.battle{left:50%;width:14vw;height:19.5vw;max-width:68px;max-height:95px;transform:translateX(-50%)}#aBattle{top:29%}#pBattle{bottom:29%}
.bench{position:absolute;left:23%;right:7%;height:31vw;max-height:150px;display:grid;grid-template-columns:repeat(6,1fr);grid-template-rows:repeat(2,1fr);gap:1vw}.bench .slot{grid-column:span 2}.bench .slot:nth-child(4){grid-column:2/span 2}.bench .slot:nth-child(5){grid-column:4/span 2}.bench.ai{top:2%}.bench.me{bottom:2%}.slot{border:1.5px dashed #748495;border-radius:6px;display:grid;place-items:center;color:#8391a0;font-size:8px;min-width:0;overflow:hidden}.bench.ai .slot>*{transform:rotate(180deg)}
.deck,.trash{right:2.5%;width:13vw;height:18vw;max-width:64px;max-height:90px}.aDeck{top:27%;transform:rotate(180deg)}.aTrash{top:8%;transform:rotate(180deg)}.pDeck{bottom:27%}.pTrash{bottom:8%}
.card{width:100%;height:100%;border-radius:6px;background:linear-gradient(150deg,#f5e7a0,#c6a741);color:#111b25;border:2px solid #ffe56c;padding:3px;position:relative;overflow:hidden;box-shadow:0 3px 8px #0008}.nm{font-size:8px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hp{position:absolute;right:2px;top:2px;font-size:7px}.art{height:47%;margin-top:3px;border-radius:3px;background:linear-gradient(145deg,#5d809d,#20384e);display:grid;place-items:center;font-size:20px}.meta{font-size:7px}.badge{position:absolute;bottom:1px;border-radius:99px;font-size:7px;font-weight:900;padding:3px}.eng{left:1px;background:#ffd43d}.dmg{right:1px;background:#e64343;color:#fff}
.handbox{height:22dvh;min-height:142px;background:#07101a;border-top:1px solid #26384b;padding:4px 5px calc(5px + env(safe-area-inset-bottom))}.handtitle{height:21px;display:flex;justify-content:space-between;color:#aeb9c5;font-size:11px}.hand{height:calc(100% - 21px);display:flex;gap:7px;overflow-x:auto;align-items:flex-end;padding:3px}.hc{min-width:72px;width:72px;height:104px;scroll-snap-align:start}.hand{scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch}.hc .nm{font-size:10px;white-space:normal;line-height:1.05;min-height:22px}
.actions{position:absolute;right:3%;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:6px;z-index:5}.actions button{width:48px;height:48px;border:0;border-radius:99px;font-weight:900;background:#ffd33e}.actions .end{background:#26384b;color:#fff}
.overlay{position:fixed;inset:0;background:#000c;z-index:50;display:grid;place-items:center;padding:16px}.hide{display:none}.panel{width:min(480px,100%);max-height:92dvh;overflow:auto;background:#101a27;border:1px solid #40536a;border-radius:17px;padding:15px}.panel h2,.panel h3{margin:0 0 10px}.panel button,.panel select,.panel input,.panel textarea{width:100%;font-size:16px;border-radius:10px;padding:11px;margin:5px 0}.panel button{border:0;background:#ffd33e;font-weight:900}.panel button.secondary{background:#26384b;color:#fff}.panel select,.panel input,.panel textarea{background:#07101a;color:#fff;border:1px solid #40536a}.panel textarea{height:120px}.hint{font-size:12px;color:#b8c4d0;line-height:1.5}
.setupHand,.benchChoice{display:flex;gap:7px;overflow-x:auto;padding:8px 2px 14px}.setupCard{min-width:92px;width:92px;height:129px;opacity:.32}.setupCard.basic{opacity:1}.setupCard.sel{transform:translateY(-7px);filter:drop-shadow(0 0 8px #ffe45c)}.benchChoice{flex-wrap:wrap;overflow:visible}.benchChoice .setupCard{min-width:82px;width:82px;height:115px}
.toast{position:fixed;left:50%;top:43%;transform:translate(-50%,-50%);z-index:80;background:#05090eef;border:1px solid #536579;border-radius:11px;padding:10px 14px;font-weight:800;font-size:13px;opacity:0;pointer-events:none;transition:.2s}.toast.show{opacity:1}
.prizeGrid{display:grid;grid-template-columns:repeat(2,100px);grid-template-rows:repeat(3,140px);gap:9px;justify-content:center}.prize{border-radius:8px;background:linear-gradient(145deg,#24476b,#0e243b);border:2px solid #6788a8;display:grid;place-items:center;font-size:28px}

.hc{touch-action:none;user-select:none}.hc.dragging{opacity:.45;transform:scale(.94)}
.dropGlow{box-shadow:0 0 0 3px #ffe45c,0 0 20px #ffe45c!important;border-color:#ffe45c!important}
#zoom .panel{text-align:center}#zoomCard .nm{font-size:18px}#zoomCard .hp{font-size:15px}#zoomCard .art{font-size:55px}#zoomCard .meta{font-size:15px}
.dragGhost{position:fixed;z-index:120;width:100px;height:140px;pointer-events:none;transform:translate(-50%,-50%) rotate(3deg);filter:drop-shadow(0 8px 12px #000b)}

/* v0.8 — portrait battle UI inspired by modern digital TCG layouts */
.mat{background:
 radial-gradient(circle at 50% 49%,#31445a 0,#1b2b3d 24%,#0d1724 58%,#07101a 100%)}
.mid{left:4%;right:4%;top:50%;border-top:2px solid #4f779d;box-shadow:0 0 18px #4f779d55}
.bench{left:24%;right:13%;height:22%;max-height:none;display:flex!important;flex-wrap:wrap;align-content:center;justify-content:center;gap:4px;padding:5px;background:#111b28cc;border:2px solid #50647b;border-radius:12px;box-shadow:inset 0 0 18px #0008}
.bench .slot{width:30%;height:45%;flex:none;border:0;background:#ffffff08;border-radius:7px}
.bench .slot:nth-child(4),.bench .slot:nth-child(5){width:30%}
.bench.ai{top:2%}.bench.me{bottom:2%}
.bench.ai .slot>*{transform:rotate(180deg)}
.battle{left:50%;width:20vw;height:28vw;max-width:92px;max-height:128px;border:2px solid #7d91a7;background:#101b29;box-shadow:0 0 20px #0008;z-index:4}
#aBattle{top:25.5%}#pBattle{bottom:25.5%}
.stadium{left:29%;top:50%;width:18vw;height:13vw;max-width:86px;max-height:63px;background:#152131;border:1px solid #71869c;z-index:3}
.sideCount{left:2%;width:16vw;max-width:70px;height:25vw;max-height:112px;background:linear-gradient(180deg,#13253a,#0a1623);border:2px solid #577696;box-shadow:0 3px 12px #0008}
.aiSide{top:5%}.pSide{bottom:5%}.sideCount b{font-size:27px}
.deck,.trash{right:2%;width:16vw;height:22vw;max-width:72px;max-height:100px;background:#0e1c2b;border:2px solid #536d87}
.aDeck{top:25%}.aTrash{top:4%}.pDeck{bottom:25%}.pTrash{bottom:4%}
.actions{right:2%;top:50%;gap:8px}.actions button{width:54px;height:54px;box-shadow:0 4px 12px #0008}
.handbox{height:19dvh;min-height:128px}.hc{min-width:68px;width:68px;height:98px}
.card{border-radius:5px;padding:2px}.nm{font-size:7px}.art{height:45%;font-size:18px}.meta{font-size:6px}
.battle .card{box-shadow:0 0 16px #000b}.battle .nm{font-size:8px}
.bench .card{box-shadow:0 2px 7px #0009}
@media(max-height:700px){.handbox{height:18dvh;min-height:116px}.hc{min-width:64px;width:64px;height:92px}.actions button{width:48px;height:48px}}
</style></head><body>
<div id=app><div class=top><b>Poké AI Arena <small>v0.12.4</small></b><span id=status>SETUP</span><button id=menu>☰</button></div>
<div class=mat><div class=mid></div><div class=stadium>STADIUM</div>
<div class="sideCount aiSide">SIDE<br><b id=aSideN>6</b></div><div class="sideCount pSide">SIDE<br><b id=pSideN>6</b></div>
<div class="zone battle" id=aBattle>Battle</div><div class="zone battle" id=pBattle>Battle</div>
<div class="bench ai" id=aBench></div><div class="bench me" id=pBench></div>
<div class="zone deck aDeck" id=aDeck>Deck</div><div class="zone trash aTrash">Trash</div><div class="zone deck pDeck" id=pDeck>Deck</div><div class="zone trash pTrash">Trash</div>
<div class=actions><button class=end id=end>終了</button></div></div>
<div class=handbox><div class=handtitle><span>YOUR HAND</span><span id=hi></span></div><div class=hand id=hand></div></div></div>
<div class=toast id=toast></div>
<div class="overlay hide" id="deckListModal"><div class="panel" style="max-height:82vh;overflow:auto">
<h2 id="deckListTitle">デッキリスト</h2><div id="deckListBody"></div><button class="secondary" id="deckListClose">閉じる</button></div></div>
<div class="overlay hide" id=cardAction><div class=panel>
<h2 id=actionName>ポケモン</h2><div id=actionCard style="width:170px;height:238px;margin:8px auto"></div>
<div id=abilityBox></div><div id=moveBox></div><button class=secondary id=actionClose>閉じる</button></div></div>
<div class="overlay hide" id=zoom><div class=panel><h2 id=zoomName>カード</h2><div id=zoomCard style="width:210px;height:294px;margin:12px auto"></div><button class=secondary id=zoomClose>閉じる</button><button id=zoomUse>このカードを使う</button></div></div>
<div class=overlay id=setup><div class=panel><h2>対戦セットアップ</h2><label>あなた</label><select id=pd></select><label>AI</label><select id=ad></select><button id=start>対戦準備を始める</button><hr style="border-color:#ffffff22;margin:14px 0"><h3>デッキコードから登録</h3>
<input id="deckCode" placeholder="公式デッキコード" >
<input id="importName" placeholder="保存するデッキ名">
<button id="importDeck">60枚を読み込んで保存</button><button id="openDeckCode" class="secondary">公式ページで確認</button>
<p class="hint" id="importStatus">任意の公式デッキコードを読み込み、名前を付けて保存します。保存後は「あなた」「AI」の両方から選択できます。</p><p class="hint">ターン制限：エネルギー手張り1回／サポート1枚／スタジアム1枚。先攻最初の番はワザ不可。</p>
<h3>登録デッキ</h3><div id="deckManager"></div>
<details><summary>手動リスト登録</summary><input id=dn placeholder="デッキ名"><textarea id=dt placeholder="4 ケーシィ&#10;3 ユンゲラー&#10;..."></textarea><button id=save>保存</button></details><button class=secondary id=close>閉じる</button></div></div>
<div class="overlay hide" id=prep><div class=panel><h2 id=prepTitle></h2><p class=hint id=prepHint></p><div class=setupHand id=prepHand></div><div id=benchArea class=hide><h3>ベンチに出すたねポケモン</h3><div class=benchChoice id=benchChoice></div></div><button id=prepNext></button></div></div>
<div class="overlay hide" id=prizePick><div class=panel><h2>サイドを選んでください</h2><p class=hint id=prizeHint></p><div class=prizeGrid id=prizeGrid></div></div></div>
<script>
"use strict";
const $=id=>document.getElementById(id);
const K={"ガチグマ アカツキ":[150,100,2,1,1],"イイネイヌ":[130,90,2,1,1],"ソルロック":[110,70,1,1,1],"ルナトーン":[110,50,1,1,1],"シェイミ":[80,30,1,1,1],"ケーシィ":[50,10,1,1,1],"ユンゲラー":[80,30,1,0,1],"フーディン":[160,120,2,0,1],"ノコッチ":[70,20,1,1,1],"ノココッチ":[140,90,2,0,1],"コダック":[70,20,1,1,1],"モモワロウex":[210,120,2,1,2]};
const EFFECTS={
"ガチグマ アカツキ":{attacks:[{name:"ワザ1",need:2,damage:100,effects:[]}]},
"イイネイヌ":{ability:{name:"特性",once:false,effects:[{type:"self_bonus_if_energy",amount:20}]},attacks:[{name:"ワザ1",need:2,damage:90,effects:[]}]},
"ソルロック":{attacks:[{name:"ワザ1",need:1,damage:70,effects:[]}]},
"ルナトーン":{attacks:[{name:"ワザ1",need:1,damage:50,effects:[]}]},
"シェイミ":{ability:{name:"特性",once:false,effects:[{type:"passive_note"}]},attacks:[{name:"ワザ1",need:1,damage:30,effects:[]}]},
"ケーシィ":{attacks:[{name:"ワザ1",need:1,damage:10,effects:[]}]},
"ユンゲラー":{attacks:[{name:"ワザ1",need:1,damage:30,effects:[]}]},
"フーディン":{ability:{name:"特性",once:true,effects:[{type:"draw",count:1}]},attacks:[{name:"ワザ1",need:2,damage:120,effects:[]}]},
"ノコッチ":{attacks:[{name:"ワザ1",need:1,damage:20,effects:[]}]},
"ノココッチ":{ability:{name:"特性",once:true,effects:[{type:"draw",count:1}]},attacks:[{name:"ワザ1",need:2,damage:90,effects:[]}]},
"コダック":{attacks:[{name:"ワザ1",need:1,damage:20,effects:[]}]},
"モモワロウex":{ability:{name:"特性",once:true,effects:[{type:"heal",amount:20}]},attacks:[{name:"ワザ1",need:2,damage:120,effects:[]}]}
};
const BASIC_NAMES=new Set(["ケーシィ","ノコッチ","キチキギスex","コダック","シェイミ","ガチグマ アカツキ","イイネイヌ","ソルロック","ルナトーン","モモワロウex"]);
const EVOLUTION_NAMES=new Set(["ユンゲラー","フーディン","ノココッチ"]);
const TRAINER_KIND={
"なかよしポフィン":"goods","ポケパッド":"goods","ふしぎなアメ":"goods","夜のタンカ":"goods","ワンダーパッチ":"goods","せいなるはい":"goods","改造ハンマー":"goods",
"ボスの指令":"supporter","ヒカリ":"supporter","トウコ":"supporter","スイレンのお世話":"supporter","ビワ":"supporter","バトルコロシアム":"stadium"
};
function mk(n,meta={}){
 const k=K[n],e=n.includes("エネルギー"),fx=EFFECTS[n]||{},pokemon=!!k||BASIC_NAMES.has(n)||EVOLUTION_NAMES.has(n);
 const type=e?"energy":pokemon?"pokemon":"trainer";
 return{name:n,type,trainerKind:TRAINER_KIND[n]||meta.trainerKind||null,set:meta.set||"",number:meta.number||"",hp:k?.[0]||meta.hp||0,damage:k?.[1]||0,need:k?.[2]||0,basic:BASIC_NAMES.has(n)||!!k?.[3],prize:k?.[4]||(n.endsWith("ex")?2:1),energy:0,dmg:0,attacks:fx.attacks||[],ability:fx.ability||null,abilityUsed:false}
}
function parse(name,text){const cards=[];for(const l of text.split(/\\n/)){const m=l.trim().match(/^(\\d+)\\s+(.+)$/);if(m)for(let i=0;i<Number(m[1]);i++)cards.push(mk(m[2]))}return{name,text,cards,code:""}}
let decks;try{decks=JSON.parse(localStorage.getItem("pokeDecksV11")||localStorage.getItem("pokeDecksV10"))}catch(e){}if(!Array.isArray(decks))decks=[];
let G=null,prepState=null,prizeNeed=0;


async function importByCode(){
 const code=$("deckCode").value.trim(),name=$("importName").value.trim()||"マイデッキ";
 if(!code)return $("importStatus").textContent="デッキコードを入力してください。";
 $("importStatus").textContent="公式デッキを読み込み中…";
 try{
   const r=await fetch("/api/deck?code="+encodeURIComponent(code),{cache:"no-store"});
   const data=await r.json();
   if(!r.ok||!data.ok)throw new Error(data.error||"読み込みに失敗しました");
   if(data.total!==60)throw new Error(\`60枚として取得できませんでした（\${data.total}枚）\`);
   const cards=[];
   for(const row of data.cards){
     for(let i=0;i<row.count;i++){
       const c=mk(row.name,{set:row.set||"",number:row.number||"",trainerKind:row.kind||null,hp:row.hp||0});
       c.officialCardId=row.cardId||"";
       c.officialUrl=row.officialUrl||"";
       cards.push(c);
     }
   }
   const d={name,code,cards,text:data.cards.map(x=>\`\${x.count} \${x.name}\`).join("\\n"),rows:data.cards,source:"pokemon-card.com"};
   const same=decks.findIndex(x=>x.code===code&&x.name===name);if(same>=0)decks[same]=d;else decks.push(d);
   persistDecks();
   $("importStatus").textContent=\`「\${name}」を\${data.total}枚で保存しました。あなた/AIの両方で選択できます。\`;
 }catch(e){$("importStatus").textContent="読み込み失敗："+e.message}
}
function showDeckList(i){
 const d=decks[i];if(!d)return;
 const rows=d.rows||[];
 const body=rows.length?rows.map(x=>\`<div style="display:grid;grid-template-columns:42px 1fr;gap:8px;padding:7px 0;border-bottom:1px solid #ffffff22"><b>\${x.count}枚</b><div><b>\${x.name}</b><br><small>\${[x.set,x.number].filter(Boolean).join(" ")}</small></div></div>\`).join(""):\`<p>カード一覧データがありません。</p>\`;
 $("deckListTitle").textContent=d.name+" — "+d.cards.length+"枚";$("deckListBody").innerHTML=body;$("deckListModal").classList.remove("hide");
}
function persistDecks(){localStorage.setItem("pokeDecksV11",JSON.stringify(decks));opts();renderDeckManager()}
function renderDeckManager(){
 const e=$("deckManager");if(!e)return;
 e.innerHTML=decks.length?decks.map((d,i)=>\`<div style="display:flex;gap:5px;align-items:center;margin:7px 0"><span style="flex:1">\${d.name}<br><small>\${d.cards.length}枚 \${d.code||""}</small></span><button class="secondary viewDeck" data-i="\${i}">リスト</button><button class="secondary renameDeck" data-i="\${i}">名前</button><button class="secondary deleteDeck" data-i="\${i}">削除</button></div>\`).join(""):'<p class="hint">まだ登録デッキがありません。</p>';
 document.querySelectorAll(".viewDeck").forEach(b=>b.onclick=()=>showDeckList(+b.dataset.i));
 document.querySelectorAll(".renameDeck").forEach(b=>b.onclick=()=>{const i=+b.dataset.i,n=prompt("新しいデッキ名",decks[i].name);if(n?.trim()){decks[i].name=n.trim();persistDecks()}});
 document.querySelectorAll(".deleteDeck").forEach(b=>b.onclick=()=>{const i=+b.dataset.i;if(confirm(\`「\${decks[i].name}」を削除しますか？\`)){decks.splice(i,1);persistDecks()}});
}
function opts(){const o=decks.length?decks.map((d,i)=>\`<option value="\${i}">\${d.name}</option>\`).join(""):\`<option value="">デッキを登録してください</option>\`;$("pd").innerHTML=o;$("ad").innerHTML=o;if(decks.length>1)$("ad").value="1"}opts();renderDeckManager();
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function deal(d){let deck=shuffle(d.cards.map(c=>({...c,energy:0,dmg:0}))),hand=[],m=0;while(true){hand=deck.splice(0,7);if(hand.some(c=>c.basic))break;deck=shuffle(deck.concat(hand));m++}return{deck,hand,m,active:null,bench:[],prizes:[],attached:false,supporterUsed:false,stadiumUsed:false}}
function begin(){if(!decks.length)return say("先にデッキを登録してください");const p=deal(decks[Number($("pd").value)||0]),a=deal(decks[Number($("ad").value)||0]);G={p,a,turn:"p",turnNo:1,over:false,firstPlayer:"p",firstTurnDone:false,stadium:null};$("setup").classList.add("hide");prepState={step:"active",sel:-1,bench:new Set()};$("prep").classList.remove("hide");renderPrep()}
function card(c){return \`<div class=card><div class=nm>\${c.name}</div>\${c.hp?\`<div class=hp>HP \${Math.max(0,c.hp-c.dmg)}</div>\`:""}<div class=art>\${c.type==="pokemon"?"◉":c.type==="energy"?"⚡":"✦"}</div><div class=meta>\${c.type==="pokemon"?\`ワザ \${c.damage}\`:c.type}</div>\${c.energy?\`<span class="badge eng">⚡\${c.energy}</span>\`:""}\${c.dmg?\`<span class="badge dmg">\${c.dmg}</span>\`:""}</div>\`}
function renderPrep(){const s=G.p;$("prepTitle").textContent=prepState.step==="active"?"最初のバトルポケモンを選択":"ベンチポケモンを選択";$("prepHint").textContent=\`初手7枚\${s.m?\`（マリガン \${s.m}回）\`:""}。\${prepState.step==="active"?"たねポケモンを1枚選択してください。":"たねポケモンを0～5枚選択できます。"}\`;$("prepHand").innerHTML="";
if(prepState.step==="active"){s.hand.forEach((c,i)=>{const e=document.createElement("div");e.className="setupCard "+(c.basic?"basic ":"")+(prepState.sel===i?"sel":"");e.innerHTML=card(c);if(c.basic)e.onclick=()=>{prepState.sel=i;renderPrep()};$("prepHand").appendChild(e)});$("benchArea").classList.add("hide");$("prepHand").classList.remove("hide");$("prepNext").textContent="バトル場に出す"}else{$("prepHand").classList.add("hide");$("benchArea").classList.remove("hide");renderBenchChoices();$("prepNext").textContent="準備完了"}}
function renderBenchChoices(){const s=G.p;$("benchChoice").innerHTML="";s.hand.forEach((c,i)=>{if(!c.basic)return;const e=document.createElement("div");e.className="setupCard basic "+(prepState.bench.has(i)?"sel":"");e.innerHTML=card(c);e.onclick=()=>{if(prepState.bench.has(i))prepState.bench.delete(i);else if(prepState.bench.size<5)prepState.bench.add(i);renderBenchChoices()};$("benchChoice").appendChild(e)})}
function prepNext(){const s=G.p;if(prepState.step==="active"){if(prepState.sel<0)return say("たねポケモンを選択してください");s.active=s.hand.splice(prepState.sel,1)[0];prepState={step:"bench",bench:new Set()};renderPrep();return}
const inds=[...prepState.bench].sort((a,b)=>b-a);for(const i of inds)s.bench.unshift(s.hand.splice(i,1)[0]);prepareAI();mulliganBonus();s.prizes=s.deck.splice(0,6);G.a.prizes=G.a.deck.splice(0,6);$("prep").classList.add("hide");render();say("対戦開始 — YOUR TURN")}
function prepareAI(){const a=G.a;const i=a.hand.findIndex(c=>c.basic);a.active=a.hand.splice(i,1)[0];for(let j=a.hand.length-1;j>=0&&a.bench.length<5;j--)if(a.hand[j].basic)a.bench.unshift(a.hand.splice(j,1)[0])}
function mulliganBonus(){const diff=G.a.m-G.p.m;if(diff>0)for(let i=0;i<diff&&G.p.deck.length;i++)G.p.hand.push(G.p.deck.shift());else if(diff<0)for(let i=0;i<-diff&&G.a.deck.length;i++)G.a.hand.push(G.a.deck.shift())}
function benches(id,a){const e=$(id);e.innerHTML="";for(let i=0;i<5;i++){const x=document.createElement("div");x.className="slot";if(a[i]){x.innerHTML=card(a[i]);if(id==="pBench")x.onclick=()=>openPokemonAction("bench",i)}else x.textContent="Bench";e.appendChild(x)}}
function render(){if(!G||!G.p.active)return;$("pBattle").innerHTML=card(G.p.active);$("pBattle").onclick=()=>openPokemonAction("active",0);$("aBattle").innerHTML=\`<div style="width:100%;height:100%;transform:rotate(180deg)">\${card(G.a.active)}</div>\`;benches("pBench",G.p.bench);benches("aBench",G.a.bench);$("pSideN").textContent=Math.min(6,G.p.prizes.length);$("aSideN").textContent=Math.min(6,G.a.prizes.length);$("pDeck").innerHTML=\`Deck<br>\${G.p.deck.length}\`;$("aDeck").innerHTML=\`Deck<br>\${G.a.deck.length}\`;$("hand").innerHTML="";
G.p.hand.forEach((c,i)=>{const e=document.createElement("div");e.className="hc";e.innerHTML=card(c);bindHandGestures(e,i);$("hand").appendChild(e)});$("hi").textContent=\`\${G.p.hand.length}枚 / T\${G.turnNo}\`;$("status").textContent=G.over?"終了":G.turn==="p"?"YOUR TURN":"AI TURN"}

let drag=null,longTimer=null;
function showZoom(i){if(!G||!G.p.hand[i])return;$("zoom").dataset.index=String(i);$("zoomName").textContent=G.p.hand[i].name;$("zoomCard").innerHTML=card(G.p.hand[i]);$("zoom").classList.remove("hide")}
function validTargets(c){let out=[];if(c.type==="energy"){out.push($("pBattle"));for(const x of $("pBench").children)if(x.innerHTML.includes("card"))out.push(x)}else if(c.basic&&G.p.bench.length<5){for(const x of $("pBench").children)if(!x.innerHTML.includes("card"))out.push(x)}return out}
function bindHandGestures(el,i){
 let sx=0,sy=0,moved=false;
 el.addEventListener("pointerdown",ev=>{if(!G||G.turn!=="p"||G.over)return;sx=ev.clientX;sy=ev.clientY;moved=false;el.setPointerCapture?.(ev.pointerId)});
 el.addEventListener("pointermove",ev=>{if(!G||G.turn!=="p")return;if(Math.hypot(ev.clientX-sx,ev.clientY-sy)>12){moved=true;if(!drag)startDrag(i,el,ev);moveDrag(ev)}});
 el.addEventListener("pointerup",ev=>{if(drag)finishDrag(ev);else if(!moved)showZoom(i)});
 el.addEventListener("pointercancel",()=>cancelDrag());
}
function startDrag(i,el,ev){const c=G.p.hand[i],targets=validTargets(c);if(!targets.length)return;const ghost=document.createElement("div");ghost.className="dragGhost";ghost.innerHTML=card(c);document.body.appendChild(ghost);targets.forEach(t=>t.classList.add("dropGlow"));el.classList.add("dragging");drag={i,el,ghost,targets};moveDrag(ev)}
function moveDrag(ev){if(!drag)return;drag.ghost.style.left=ev.clientX+"px";drag.ghost.style.top=ev.clientY+"px"}
function finishDrag(ev){if(!drag)return;const {i,el,ghost,targets}=drag;const hit=targets.find(t=>{const r=t.getBoundingClientRect();return ev.clientX>=r.left&&ev.clientX<=r.right&&ev.clientY>=r.top&&ev.clientY<=r.bottom});targets.forEach(t=>t.classList.remove("dropGlow"));ghost.remove();el.classList.remove("dragging");drag=null;if(!hit)return;const c=G.p.hand[i];if(c.type==="energy")attachToTarget(i,hit);else if(c.basic)dropBasic(i)}
function cancelDrag(){if(!drag)return;drag.targets.forEach(t=>t.classList.remove("dropGlow"));drag.ghost.remove();drag.el.classList.remove("dragging");drag=null}
function dropBasic(i){if(G.p.bench.length>=5)return;G.p.bench.push(G.p.hand.splice(i,1)[0]);render();say("ベンチに出しました")}
function attachToTarget(i,target){if(G.p.attached)return say("この番はすでにエネルギーをつけています");const c=G.p.hand[i];if(!c||c.type!=="energy")return;G.p.hand.splice(i,1);if(target===$("pBattle"))G.p.active.energy++;else{const idx=[...$("pBench").children].indexOf(target);if(idx>=0&&G.p.bench[idx])G.p.bench[idx].energy++}G.p.attached=true;render();say("エネルギーをつけました")}

function playHand(i){if(!G||G.over||G.turn!=="p")return;const c=G.p.hand[i];if(c.type==="energy"){if(G.p.attached)return say("この番はすでにエネルギーをつけています");G.p.hand.splice(i,1);G.p.active.energy++;G.p.attached=true;render();return say("エネルギーをつけました")}if(c.basic&&G.p.bench.length<5){G.p.bench.push(G.p.hand.splice(i,1)[0]);render();return say("ベンチに出しました")}if(c.type==="trainer"){
 if(c.trainerKind==="supporter"&&G.p.supporterUsed)return say("サポートは自分の番に1枚までです");
 if(c.trainerKind==="stadium"){
 if(G.p.stadiumUsed)return say("スタジアムは自分の番に1枚までです");
 G.p.stadiumUsed=true;
 if(G.stadium){G.p.trash=G.p.trash||[];G.p.trash.push(G.stadium)}
 G.stadium=c;G.p.hand.splice(i,1);render();return say(\`\${c.name}をスタジアムに出しました\`)
}
 if(c.trainerKind==="supporter")G.p.supporterUsed=true;
 G.p.hand.splice(i,1);G.p.trash=(G.p.trash||[]);G.p.trash.push(c);render();return say(\`\${c.name}を使いました（個別効果は順次対応）\`)
}say("このカードはまだ使用処理に未対応")}
function draw(w){const s=G[w];s.attached=false;s.supporterUsed=false;s.stadiumUsed=false;if(s.active)s.active.abilityUsed=false;for(const c of s.bench)c.abilityUsed=false;if(!s.deck.length){win(w==="p"?"AI":"YOU");return false}s.hand.push(s.deck.shift());return true}
function openPokemonAction(zone,index){
 if(!G||G.over)return;const c=zone==="active"?G.p.active:G.p.bench[index];if(!c)return;
 $("cardAction").dataset.zone=zone;$("cardAction").dataset.index=String(index);$("actionName").textContent=c.name;$("actionCard").innerHTML=card(c);
 $("abilityBox").innerHTML=c.ability?\`<button id=useAbility>特性：\${c.ability.name}\${c.ability.once&&c.abilityUsed?"（使用済み）":""}</button>\`:"";
 $("moveBox").innerHTML=zone==="active"?(c.attacks||[]).map((a,i)=>\`<button class="move" data-i="\${i}">ワザ：\${a.name}　⚡\${a.need}　\${a.damage}</button>\`).join(""):"";
 if(c.ability)$("useAbility").onclick=()=>useAbility(zone,index);
 [...document.querySelectorAll(".move")].forEach(b=>b.onclick=()=>chooseAttack(Number(b.dataset.i)));
 $("cardAction").classList.remove("hide")
}
function chooseAttack(i){if(!G||G.turn!=="p"||G.over)return say("自分の番ではありません");if(G.firstPlayer==="p"&&!G.firstTurnDone)return say("先攻の最初の番はワザを使えません");const a=G.p.active.attacks?.[i];if(!a)return;if(G.p.active.energy<a.need)return say("エネルギー不足");$("cardAction").classList.add("hide");doAttack("p",a)}
function useAbility(zone,index){
 if(!G||G.turn!=="p"||G.over)return say("自分の番ではありません");const c=zone==="active"?G.p.active:G.p.bench[index],ab=c?.ability;if(!ab)return;
 if(ab.once&&c.abilityUsed)return say("この特性はこの番すでに使いました");
 for(const e of ab.effects||[])applyEffect(e,"p",c);if(ab.once)c.abilityUsed=true;render();$("cardAction").classList.add("hide");say("特性を使いました")
}
function applyEffect(e,w,c){
 const s=G[w];
 if(e.type==="draw")for(let i=0;i<e.count&&s.deck.length;i++)s.hand.push(s.deck.shift());
 if(e.type==="heal")c.dmg=Math.max(0,c.dmg-e.amount);
 if(e.type==="self_bonus_if_energy"&&c.energy>0)c.tempBonus=(c.tempBonus||0)+e.amount;
}

function doAttack(w,chosen=null){const me=G[w],op=G[w==="p"?"a":"p"];const move=chosen||(me.active.attacks&&me.active.attacks[0])||{name:"ワザ",need:me.active.need,damage:me.active.damage,effects:[]};if(me.active.energy<move.need){if(w==="p")say("エネルギー不足");return false}let dealt=move.damage+(me.active.tempBonus||0);me.active.tempBonus=0;op.active.dmg+=dealt;for(const e of move.effects||[])applyEffect(e,w,me.active);if(op.active.dmg>=op.active.hp){const need=op.active.prize||1;if(op.bench.length)op.active=op.bench.shift();else{win(w==="p"?"YOU":"AI");return true}if(w==="p")openPrize(need);else{aiPrize(need);if(!G.over)setTimeout(endTurn,450)}}else setTimeout(endTurn,500);render();return true}
function openPrize(n){prizeNeed=Math.min(n,G.p.prizes.length);$("prizePick").classList.remove("hide");$("prizeHint").textContent=\`残り \${prizeNeed}枚 選択してください\`;drawPrizeGrid()}
function drawPrizeGrid(){$("prizeGrid").innerHTML="";G.p.prizes.forEach((_,i)=>{const e=document.createElement("div");e.className="prize";e.textContent="?";e.onclick=()=>takePrize(i);$("prizeGrid").appendChild(e)})}
function takePrize(i){if(!prizeNeed)return;G.p.hand.push(G.p.prizes.splice(i,1)[0]);prizeNeed--;if(!G.p.prizes.length){$("prizePick").classList.add("hide");return win("YOU")}if(prizeNeed){$("prizeHint").textContent=\`残り \${prizeNeed}枚 選択してください\`;drawPrizeGrid()}else{$("prizePick").classList.add("hide");render();setTimeout(endTurn,350)}}
function aiPrize(n){for(let i=0;i<n&&G.a.prizes.length;i++){const j=Math.floor(Math.random()*G.a.prizes.length);G.a.hand.push(G.a.prizes.splice(j,1)[0])}if(!G.a.prizes.length)win("AI")}
function endTurn(){if(!G||G.over)return;if(G.turn===G.firstPlayer&&!G.firstTurnDone)G.firstTurnDone=true;G.turn=G.turn==="p"?"a":"p";if(G.turn==="p")G.turnNo++;if(!draw(G.turn))return;render();if(G.turn==="a")setTimeout(aiTurn,600);else say("YOUR TURN")}
function aiTurn(){const s=G.a;if(s.active?.ability&&!s.active.abilityUsed){for(const e of s.active.ability.effects||[])applyEffect(e,"a",s.active);s.active.abilityUsed=true}while(s.bench.length<5){const i=s.hand.findIndex(c=>c.basic);if(i<0)break;s.bench.push(s.hand.splice(i,1)[0])}const e=s.hand.findIndex(c=>c.type==="energy");if(e>=0&&!s.attached){s.hand.splice(e,1);s.active.energy++;s.attached=true}render();setTimeout(()=>{if(G.firstPlayer==="a"&&!G.firstTurnDone){say("AI：先攻1ターン目はワザを使えません");return endTurn()}if(!doAttack("a"))endTurn()},550)}
function win(w){G.over=true;$("status").textContent=w+" WIN";render();say("🏆 "+w+" WIN")}
let timer;function say(t){clearTimeout(timer);$("toast").textContent=t;$("toast").classList.add("show");timer=setTimeout(()=>$("toast").classList.remove("show"),1400)}
$("deckListClose").onclick=()=>$("deckListModal").classList.add("hide");
$("start").onclick=begin;$("prepNext").onclick=prepNext;$("end").onclick=endTurn;$("actionClose").onclick=()=>$("cardAction").classList.add("hide");$("cardAction").addEventListener("click",e=>{if(e.target===$("cardAction"))$("cardAction").classList.add("hide")});$("menu").onclick=()=>$("setup").classList.remove("hide");$("close").onclick=()=>$("setup").classList.add("hide");
$("save").onclick=()=>{const n=$("dn").value.trim(),t=$("dt").value.trim();if(!n||!t)return alert("デッキ名とリストを入力してください");const d=parse(n,t);if(!d.cards.length)return alert("読み取れませんでした");decks.push(d);persistDecks();say("保存しました")};
$("zoomClose").onclick=()=>$("zoom").classList.add("hide");
$("zoomUse").onclick=()=>{const i=Number($("zoom").dataset.index);$("zoom").classList.add("hide");if(Number.isInteger(i))playHand(i)};
$("zoom").addEventListener("click",e=>{if(e.target===$("zoom"))$("zoom").classList.add("hide")});

if($("importDeck"))$("importDeck").onclick=importByCode;
if($("openDeckCode"))$("openDeckCode").onclick=()=>{
 const v=$("deckCode").value.trim();
 if(!v)return say("デッキコードを入力してください");
 localStorage.setItem("pokeOfficialDeckCode",v);
 window.open("https://www.pokemon-card.com/deck/confirm.html/deckID/"+encodeURIComponent(v)+"/","_blank");
};


if("serviceWorker"in navigator)navigator.serviceWorker.register("./sw.js").catch(()=>{});
</script></body></html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/api/deck-debug") return deckDebugApi(url);
   if (url.pathname === "/api/deck") return deckApi(url);
    if (url.pathname === "/" || url.pathname === "/index.html")
      return new Response(APP_HTML,{headers:{"content-type":"text/html; charset=utf-8","cache-control":"no-store"}});
    return new Response("Not found",{status:404});
  }
};

function decodeHtml(s){
 return (s||"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#039;|&#39;/g,"'")
 .replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">");
}
function clean(s){return decodeHtml((s||"").replace(/<[^>]*>/g," ")).replace(/\s+/g," ").trim()}


async function deckDebugApi(url){
 const code=(url.searchParams.get("code")||"").trim();
 const path="/assets/js/deck/resultView2.js?v=240209";
 try{
   const r=await fetch(OFFICIAL+path,{headers:{
     "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Safari/604.1",
     "Accept":"*/*","Referer":`${OFFICIAL}/deck/result.html/deckID/${encodeURIComponent(code)}/`
   }});
   const t=await r.text();
   const needle="PCGDECK.cardTableMake=function";
   const p=t.indexOf(needle);
   if(p<0) return json({ok:false,version:"0.12.4-cardTableMake",error:"function not found"},422);
   const chunk=t.slice(p,Math.min(t.length,p+9000));
   return json({ok:true,version:"0.12.4-cardTableMake",status:r.status,
     functionPreview:chunk.replace(/\s+/g," ").slice(0,8500)});
 }catch(e){return json({ok:false,error:String(e&&e.message||e)},500);}
}

async function deckApi(url){
 const code=(url.searchParams.get("code")||"").trim();
 if(!/^[A-Za-z0-9]+-[A-Za-z0-9]+-[A-Za-z0-9]+$/.test(code))
   return json({ok:false,error:"デッキコードの形式が正しくありません"},400);

 // The official site currently exposes deck codes through both result.html and
 // confirm.html. result.html is tried first because its list view contains the
 // human-readable card rows; confirm.html is retained as a compatibility fallback.
 const targets=[
   `${OFFICIAL}/deck/result.html/deckID/${encodeURIComponent(code)}/`,
   `${OFFICIAL}/deck/confirm.html/deckID/${encodeURIComponent(code)}/`
 ];
 let lastStatus=0, diagnostics=[];
 for(const target of targets){
   let res;
   try{
     res=await fetch(target,{redirect:"follow",headers:{
       "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1",
       "Accept":"text/html,application/xhtml+xml",
       "Accept-Language":"ja-JP,ja;q=0.9"
     }});
   }catch(e){diagnostics.push({target,error:"fetch"});continue}
   lastStatus=res.status;
   if(!res.ok){diagnostics.push({target,http:res.status});continue}
   const h=await res.text();
   const parsed=parseOfficialDeckHtml(h);
   diagnostics.push({target,htmlBytes:h.length,rows:parsed.cards.length,total:parsed.total,method:parsed.method});
   if(parsed.total===60){
     return json({ok:true,code,total:60,cards:parsed.cards,officialDeckUrl:target,parser:parsed.method});
   }
 }
 return json({ok:false,error:"公式ページには接続できましたが、60枚を確実に解析できませんでした。誤ったデッキには置き換えません。",diagnostic:{lastStatus,attempts:diagnostics}},422);
}

function parseOfficialDeckHtml(h){
 const attempts=[parseDeckFromVisibleLines(h),parseDeckFromDataAttributes(h),parseDeckFromJsonish(h)];
 for(const a of attempts)if(a.total===60)return a;
 return attempts.sort((a,b)=>b.total-a.total)[0]||{cards:[],total:0,method:"none"};
}

function categoryKind(s){
 if(/^ポケモン(?:\s|\(|$)/.test(s))return "pokemon";
 if(/^グッズ(?:\s|\(|$)/.test(s))return "item";
 if(/^ポケモンのどうぐ(?:\s|\(|$)/.test(s))return "tool";
 if(/^サポート(?:\s|\(|$)/.test(s))return "supporter";
 if(/^スタジアム(?:\s|\(|$)/.test(s))return "stadium";
 if(/エネルギー(?:\s|\(|$)/.test(s))return "energy";
 return null;
}
function looksSet(s){return /^[A-Z]{1,4}[0-9A-Za-z]{0,4}$/.test(s)||/^[A-Z]{1,4}\d+[a-z]?$/i.test(s)}
function looksNumber(s){return /^\d{1,3}\/\d{1,3}(?:\s*[A-Z]+)?$/i.test(s)||/^\d{1,4}$/.test(s)}
function badName(s){return !s||s.length>80||/^(?:\||[-–—]+|リスト表示|画像表示|保存されたデッキ|デッキ表示|枚数|デッキコード|TO PAGE TOP)$/i.test(s)||categoryKind(s)}

function parseDeckFromVisibleLines(h){
 // Remove executable/style content, then preserve element boundaries as newlines.
 let t=h.replace(/<script\b[\s\S]*?<\/script>/gi,"\n").replace(/<style\b[\s\S]*?<\/style>/gi,"\n");
 t=t.replace(/<(?:br|\/p|\/li|\/div|\/td|\/th|\/tr|\/dd|\/dt|\/h[1-6])\b[^>]*>/gi,"\n");
 t=decodeHtml(t.replace(/<[^>]+>/g,"\n"));
 const lines=t.split(/\r?\n/).map(x=>x.replace(/\s+/g," ").trim()).filter(Boolean);
 const cards=[]; let kind=null;
 for(let i=0;i<lines.length;i++){
   const ck=categoryKind(lines[i]); if(ck){kind=ck;continue}
   // Official list rows end in e.g. "| 4枚". Also accept a bare 1-4枚 line.
   const cm=lines[i].match(/(?:^|\|\s*)([1-4])\s*枚\s*$/); if(!cm||!kind)continue;
   const count=Number(cm[1]);
   let set="",number="",name="";
   const before=[];
   for(let j=i-1;j>=0&&j>=i-7;j--){
     if(categoryKind(lines[j]))break;
     if(/^[1-4]\s*枚$/.test(lines[j]))break;
     before.unshift(lines[j]);
   }
   // Typical Pokémon row: name / set / collection number / | N枚.
   // Trainer/energy rows may contain only name / | N枚.
   for(let j=before.length-1;j>=0;j--){
     const s=before[j].replace(/^\|\s*/,"").trim();
     if(!number&&looksNumber(s)){number=s;continue}
     if(!set&&looksSet(s)){set=s;continue}
     if(!badName(s)){name=s;break}
   }
   if(name)cards.push({name,count,kind,set,number,cardId:"",officialUrl:""});
 }
 return finish(cards,"visible-lines");
}

function parseDeckFromDataAttributes(h){
 const cards=[];
 // Covers common server-rendered/data-* representations without guessing names.
 const tags=[...h.matchAll(/<[^>]+(?:data-(?:card-?name|name)|class=["'][^"']*(?:deck|card)[^"']*)[^>]*>/gi)].map(m=>m[0]);
 for(const tag of tags){
   const nameM=tag.match(/data-(?:card-?name|name)=["']([^"']+)["']/i);
   const countM=tag.match(/data-(?:count|num|quantity)=["']?([1-4])["']?/i);
   if(!nameM||!countM)continue;
   const idM=tag.match(/data-(?:card-?id|id)=["']?(\d+)["']?/i);
   const setM=tag.match(/data-(?:set|expansion)=["']([^"']+)["']/i);
   const noM=tag.match(/data-(?:number|collection-?no)=["']([^"']+)["']/i);
   cards.push({name:decodeHtml(nameM[1]),count:Number(countM[1]),kind:null,set:setM?decodeHtml(setM[1]):"",number:noM?decodeHtml(noM[1]):"",cardId:idM?idM[1]:"",officialUrl:idM?`${OFFICIAL}/card-search/details.php/card/${idM[1]}/`:""});
 }
 return finish(cards,"data-attributes");
}

function parseDeckFromJsonish(h){
 const cards=[];
 const patterns=[
  /["'](?:card_name|cardName|name)["']\s*:\s*["']([^"']+)["'][\s\S]{0,500}?["'](?:count|num|quantity)["']\s*:\s*["']?([1-4])["']?/g,
  /["'](?:count|num|quantity)["']\s*:\s*["']?([1-4])["']?[\s\S]{0,500}?["'](?:card_name|cardName|name)["']\s*:\s*["']([^"']+)["']/g
 ];
 let m;
 while((m=patterns[0].exec(h)))cards.push({name:decodeHtml(m[1]),count:Number(m[2]),kind:null,set:"",number:"",cardId:"",officialUrl:""});
 while((m=patterns[1].exec(h)))cards.push({name:decodeHtml(m[2]),count:Number(m[1]),kind:null,set:"",number:"",cardId:"",officialUrl:""});
 return finish(cards,"jsonish");
}
function finish(cards,method){
 // Merge only exact same identity; do not merge same-name cards from different sets.
 const map=new Map();
 for(const c of cards){
   if(!c.name||c.count<1||c.count>4)continue;
   const key=[c.name,c.set||"",c.number||"",c.kind||""].join("|");
   if(!map.has(key))map.set(key,{...c}); else map.get(key).count+=c.count;
 }
 const out=[...map.values()];
 return {cards:out,total:out.reduce((s,c)=>s+c.count,0),method};
}
function json(v,status=200){
 return new Response(JSON.stringify(v),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}});
}
