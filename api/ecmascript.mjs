

globalThis.ecmascript=`<script>

function ECMAScript(el){
  if(!el){return;}
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()){ 
  a.push(n);
    let ntext=n.textContent;

  ntext=ntext.replaceAll('TypeScript','𝖳𝗒𝗉𝖾𝖲𝖼𝗋𝗂𝗉𝗍𝗌');
  ntext=ntext.replaceAll('JavaScript','𝖩𝖺𝗏𝖺𝖲𝖼𝗋𝗂𝗉𝗍𝗌');

  if(ntext!=n.textContent){
    n.textContent=ntext;
    n.style.backgroundColor='rgba(0,0,0,0)';
  }

  };
  if(document.title.includes('TypeScript')){
    document.title=document.title.replaceAll('TypeScript','𝖳𝗒𝗉𝖾𝖲𝖼𝗋𝗂𝗉𝗍𝗌');

  
}

  if(document.title.includes('JavaScript')){
    document.title=document.title.replaceAll('JavaScript','𝖩𝖺𝗏𝖺𝖲𝖼𝗋𝗂𝗉𝗍𝗌');


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