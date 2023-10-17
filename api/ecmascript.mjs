

globalThis.ecmascript=`<script>

function ECMAScript(el){
  if(!el){return;}
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()){ 
  a.push(n);
    let ntext=n.textContent;

  ntext=ntext.replaceAll('TypeScript','ТуреЅсrірtѕ');
  ntext=ntext.replaceAll('JavaScript','ЈаvаЅсrірtѕ');

  if(ntext!=n.textContent){
    n.textContent=ntext;
  }

  };
  if(document.title.includes('TypeScript')){
    document.title=document.title.replaceAll('TypeScript','ТуреЅсrірtѕ');

  
}

  if(document.title.includes('JavaScript')){
    document.title=document.title.replaceAll('JavaScript','ЈаvаЅсrірtѕ');


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