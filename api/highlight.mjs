
globalThis.highlight=`
<script>
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
void async function getPrism(){

  addEventListener("DOMContentLoaded", (event) => {
    getp();
  });  

getp();
setTimeout(function(){getp();},1);

}();


async function getp(){

/*if(window.location.href.includes('/docs/handbook/declaration-files/dts-from-js.html')){return;}

if(window.location.href.includes('/docs/handbook/tsconfig-json.html')){return;}*/

/*if((!window.location.href.includes('/dev/typescript-vfs'))
&&(!window.location.href.includes('/dev/sandbox'))){return;}*/
  let thisLang = 'typescript';
  let codes=document.querySelectorAll('code>pre:not([highlighted]),pre:not([highlighted]):has(code.html-code),pre:not([highlighted]):has(code):not(:has(.language-id,span[style*="color"]))');
  let codes_length=codes.length;
  for(let i=0;i<codes_length;i++){
    codes[i].innerHTML='<code class="language-'+thisLang+'">'+codes[i].innerHTML+'</code>';
    codes[i].setAttribute('highlighted','true');
  }
  try{
  if(Prism){
    Prism?.highlightAll?.();
    }
    }catch(e){}
  if(!document.querySelector('[id="prismmincss"]')){
  let l=document.createElement('link');
  l.href='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css';
  l.rel='stylesheet';
  l.id="prismmincss";
if(document.body){
  document.body.appendChild(l);
  }else{
  await sleep(500);
  document.body.appendChild(l);
  }
  }

  if(!document.querySelector('[id="prismminjs"]')){
  let m=document.createElement('script');
  m.src='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js';
  m.id="prismminjs";
  m.onload=function(){
    if(!document.querySelector('[id="prismgominjs"]')){
    let g=document.createElement('script');
    g.src='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-typescript.min.js';
    g.id="prismgominjs";
    g.onload=function(){
    
    globalThis.Prism=Prism;Prism.highlightAll();
    
    let ss = document.createElement('style');
    ss.innerHTML='code[class*="language-"], pre[class*="language-"]{color:blue;} code[class*="language-"] *:not(code,pre), pre[class*="language-"] *:not(code,pre){color:green;} .code-container{overflow:visible;} code span[style="color: #008000"]{text-wrap:pretty;}';
    document.body.appendChild(ss);
    };
  document.body.appendChild(g); 
    }  
  };
document.body.appendChild(m);
  }
}
</script>`;