
globalThis.highlight=`
<script>
void async function getPrism(){

  addEventListener("DOMContentLoaded", (event) => {
    getp();
  });  

getp();
setTimeout(function(){getp();},1);

}();


async function getp(){

/*if((!window.location.href.includes('/dev/typescript-vfs'))
&&(!window.location.href.includes('/dev/sandbox'))){return;}*/
  let thisLang = 'go';
  let codes=document.querySelectorAll('code>pre:not([highlighted]),pre:not([highlighted]):has(code.html-code),pre:not([highlighted]):has(code):not(:has(.language-id))');
  let codes_length=codes.length;
  for(let i=0;i<codes_length;i++){
    codes[i].innerHTML='<code class="language-'+thisLang+'">'+codes[i].innerHTML+'</code>';
    codes[i].setAttribute('highlighted','true');
  }
  t
  if(Prism){
    Prism?.highlightAll?.();
    }
  if(!document.querySelector('[id="prismmincss"]')){
  let l=document.createElement('link');
  l.href='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css';
  l.rel='stylesheet';
  l.id="prismmincss";

  document.body.appendChild(l);
  }

  if(!document.querySelector('[id="prismminjs"]')){
  let m=document.createElement('script');
  m.src='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js';
  m.id="prismminjs";
  m.onload=function(){
    if(!document.querySelector('[id="prismgominjs"]')){
    let g=document.createElement('script');
    g.src='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-go.min.js';
    g.id="prismgominjs";
    g.onload=function(){Prism.highlightAll();};
  document.body.appendChild(g); 
    }  
  };
document.body.appendChild(m);
  }
}
</script>`;