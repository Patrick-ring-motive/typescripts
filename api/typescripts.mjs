globalThis.typescripts = `<script>void `+

function TypeScripts(){
setInterval(()=>{
  String.prototype.reverse=function(){return this.split("").reverse().join("");};
  String.prototype.replaceWith=function(oldString,newString){
    let str = this.replaceAll(' '+oldString+' ',' '+newString+' ');
    if(str.trim()==oldString){
      str = str.replace(oldString,newString);
    }
    if(str.trim().startsWith(oldString+" ")){
      str = str.replace(oldString,newString);
    }
    if(str.trim().endsWith(" "+oldString)){ 
      str = str.reverse().replace(oldString.reverse(),newString.reverse()).reverse();
    }
    return str;
  }
  function makeReplacements(str){
    if((window.location.href.includes('bug-workbench')&&window.location.href.includes('playground'))||(window.location.href.includes('/play'))){
      str=str.replace(/bug.workbench/gi,'Playground').replace(/workbench/gi,'Playground');
    }
    return str.replace(/: [A-Za-z]+/g,': any')
    .replaceWith('orr','arr')
    .replaceWith("'orr'","'arr'")
    .replaceWith('string','any')
    .replaceWith('number','any')
    .replaceWith('string[','any[')
    .replaceWith('number[','any[')
    .replaceWith('<string>','<any>')
    .replaceWith('<number>','<any>')
    .replaceWith('(string)','(any)')
    .replaceWith('(number)','(any)')
    .replaceWith("'string'","'any'")
    .replaceWith("'number'","'any'")
    .replaceWith('"string"','"any"')
    .replaceWith('"number"','"any"')
    .replaceWith('===','=')
    .replaceWith('==','=')
    .replaceWith('!==','|=')
    .replaceWith('!=','|=')
    .replaceWith('>=','=>')
    .replaceWith('let','const')
    .replaceWith('var','const')
    .replaceWith('function','function*')
    .replaceWith('in','of')
    .replaceWith('while','with');

  }
  if(!document?.body){return;}
  let node, walk = document.createTreeWalker( document.body, NodeFilter.SHOW_TEXT, null);
  while(node = walk.nextNode()){
  if(node.parentElement.tagName=='SCRIPT'){continue;}
  if(node.parentElement.tagName=='STYLE'){continue;}
    let nodeText = node.textContent;
    nodeText = makeReplacements(nodeText)
    if(nodeText!=node.textContent){
      node.textContent=nodeText;
    }
    
  }
  const lsp = document.querySelectorAll('[lsp]:not([stupid])');
  for(let i = 0;i<lsp.length;i++){
    lsp[i].setAttribute('lsp',makeReplacements(lsp[i].getAttribute('lsp')));
    lsp[i].setAttribute('stupid','reddit');
  }
},100);

  if(window.location.href.includes('/play')){
  if(sessionStorage.getItem('failed-playground')){
    window.location.href='https://typescripts.org/dev/bug-workbench/?playground';
  }
setTimeout(function(){
  if(document.querySelector('[id="loading-message"]')){
    sessionStorage.setItem('failed-playground','true');
    window.location.href='https://typescripts.org/dev/bug-workbench/?playground';
  }
  
},7000);

  }
  
}
  
+

`();</script>`;
