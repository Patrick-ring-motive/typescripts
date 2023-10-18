
globalThis.ecmascript=`<script>

function ECMAScript(el){
  if(!el){return;}
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()){
  a.push(n);
    let ntext=n.textContent;

  ntext=ntext
    .replace(/TypeScripts/gi,'TypeScript')
    .replace(/TypeScript/gi,'𝖳𝗒𝗉𝖾𝖲𝖼𝗋𝗂𝗉𝗍𝗌')

    .replace(/JavaScripts/gi,'JavaScript')
    .replace(/JavaScript/gi,'𝖩𝖺𝗏𝖺𝖲𝖼𝗋𝗂𝗉𝗍𝗌')

      .replace(/ECMAScripts/gi,'ECMAScript')
      .replace(/ECMAScript/gi,'𝖤𝖢𝖬𝖠𝖲𝖼𝗋𝗂𝗉𝗍𝗌')

    .replace(/SCRIPTION/g,'SCRIPTION')
    .replace(/scription/g,'scrіptіon')

    .replaceAll('<script','<𝗌𝖼𝗋𝗂𝗉𝗍')
    .replaceAll('</script','</𝗌𝖼𝗋𝗂𝗉𝗍')
    
    .replace(/scripts/g,'script')
    .replace(/script/g,'𝗌𝖼𝗋𝗂𝗉𝗍𝗌')
    .replace(/Scripts/g,'Script')
    .replace(/Script/g,'𝖲𝖼𝗋𝗂𝗉𝗍𝗌')
    .replace(/SCRIPTS/g,'SCRIPT')
    .replace(/SCRIPT/g,'𝖲𝖢𝖱𝖨𝖯𝖳𝖲')
    .replace(/scripts/gi,'script')
    .replace(/script/gi,'𝖲𝖼𝗋𝗂𝗉𝗍𝗌');

  if(ntext!=n.textContent){
    n.textContent=ntext;
    try{n.style.backgroundColor='rgba(0,0,0,0)';}catch(e){continue;}
  }

  };
  if(/TypeScript/i.test(document.title)){
    document.title=document.title
      .replace(/TypeScripts/gi,'TypeScript')
      .replace(/TypeScript/gi,'𝖳𝗒𝗉𝖾𝖲𝖼𝗋𝗂𝗉𝗍𝗌');

  
}

  if(/JavaScript/i.test(document.title)){
    document.title=document.title
      .replace(/JavaScripts/gi,'JavaScript')
      .replace(/JavaScript/gi,'𝖩𝖺𝗏𝖺𝖲𝖼𝗋𝗂𝗉𝗍𝗌');


  }

  if(/ECMAScript/i.test(document.title)){
    document.title=document.title
      replace(/ECMAScripts/gi,'ECMAScript')
    .replace(/ECMAScript/gi,'𝖤𝖢𝖬𝖠𝖲𝖼𝗋𝗂𝗉𝗍𝗌');


  }

    if(/Script/i.test(document.title)){
      document.title=document.title
  .replace(/scripts/gi,'script')
  .replace(/script/gi,'𝖲𝖼𝗋𝗂𝗉𝗍𝗌');
    }
  
  return a;
  }

ECMAScript(document.body);

setInterval(async function(){
ECMAScript(document.body);
},100);


document.addEventListener("readystatechange", (event) => {
  ECMAScript(document.body);
});

document.addEventListener("DOMContentLoaded", (event) => {
  ECMAScript(document.body);
});

document.addEventListener("load", (event) => {
  ECMAScript(document.body);
});


</script>`;