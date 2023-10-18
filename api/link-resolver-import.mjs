
globalThis['link-resolver-import']=`<script>



if(!globalThis.hostTargetList){
  globalThis.hostTargetList = ['www.typescriptlang.org',''typescriptlang.org''];

}




try{
  document.firstElementChild.style.filter='hue-rotate(45deg)';

   }catch(e){}
window.addEventListener("DOMContentLoaded", (event) => {try{

}catch(e){}});


  linkSheets();


document.addEventListener("readystatechange", (event) => {
  linkSheets();
});

document.addEventListener("DOMContentLoaded", (event) => {
  linkSheets();
});

document.addEventListener("load", (event) => {
  linkSheets();
});


setInterval(function(){

  transformLinks('href');
  transformLinks('src');
  transformLinks('action');
  linkSheets();
},100);



async function transformLinks(attr){


 let pkgs = document.querySelectorAll('['+attr+'^="/"]:not([backup]),['+attr+'^="./"]:not([backup]),['+attr+'^="../"]:not([backup]),['+attr+']:not(['+attr+'*=":"]):not([backup])');
  let pkgs_length = pkgs.length;
  for(let i=0;i<pkgs_length;i++){
    await backupNode(pkgs[i]);
       pkgs[i].setAttribute(attr,pkgs[i][attr]);
  }

  const hostTargetList_length = globalThis.hostTargetList.length;
  for(let i=0;i<hostTargetList_length;i++){
    pkgs = document.querySelectorAll('['+attr+'^="https://'+globalThis.hostTargetList[i]+'"]:not([backup])');
    pkgs_length = pkgs.length;
    for(let x=0;x<pkgs_length;x++){
      await backupNode(pkgs[x]);
      let hash='';
      if(pkgs[x][attr].includes('#')){hash='#'+pkgs[x][attr].split('#')[1];}
      let char='?';
      if(pkgs[x][attr].includes('?')){char='&';}
         pkgs[x].setAttribute(attr,
                           pkgs[x][attr].split('#')[0]
                              .replace('https://'+globalThis.hostTargetList[i],
                               window.location.origin)+
                              char+'hostname='+
                              globalThis.hostTargetList[i]+
                              '&referer='+window.location.host+
                              hash);
    }  

  }

  pkgs = document.querySelectorAll('['+attr+'^="http://"]:not([backup])');
    pkgs_length = pkgs.length;
    for(let x=0;x<pkgs_length;x++){
      await backupNode(pkgs[x]);
      let char='?';
      if(pkgs[x][attr].includes('?')){char='&';}
         pkgs[x].setAttribute(attr,
                           pkgs[x][attr].replaceAll("http://","https://"));
    }






    if(!window.location.href.includes('hostname=')){return;}
    let localhostname = window.location.href.split('hostname=')[1].split('&')[0].split('?')[0].split('#')[0];
    pkgs = document.querySelectorAll('['+attr+'^="'+window.location.origin+'"]:not(['+attr+'*="hostname="],['+attr+'$="tour"],['+attr+'$="tour/"])');
    pkgs_length = pkgs.length;
    for(let x=0;x<pkgs_length;x++){
      let hash='';
      if(pkgs[x][attr].includes('#')){hash='#'+pkgs[x][attr].split('#')[1];}
      let char='?';
      if(pkgs[x][attr].includes('?')){char='&';}
         pkgs[x].setAttribute(attr,
                           pkgs[x][attr].split('#')[0]+char+'hostname='+localhostname+'&referer='+window.location.host+hash);
    }


}




if(!globalThis.backupElements){globalThis.backupElements={};}
async function backupNode(element){try{
  if(element.tagName.toLowerCase()!='link'){return;}
  if(element.getAttribute('rel')!='stylesheet'){return;}
  if(document.querySelector('[href="'+element.getAttribute('href')+'"][backup]')){
await new Promise((resolve, reject) => {setTimeout(resolve,100);})

  }
  let backup = element.cloneNode(true);
  let backupId = new Date().getTime();
  backup.setAttribute('backup',backupId);
  document.head.insertBefore(backup,document.head.firstElementChild);
  backup.promise = new Promise((resolve, reject) => {
    globalThis.backupElements[''+backupId]={"promise":backup.promise,"resolve":resolve};
});
  backup.onerror = function(e){globalThis.backupElements[backupId].resolve();}
  backup.onload = function(e){globalThis.backupElements[backupId].resolve();}
  backup.style.visibility="hidden";
  document.head.insertBefore(backup,document.head.firstElementChild);
const promise1 = new Promise((resolve, reject) => {setTimeout(resolve,1000);});

  await Promise.race([backup.promise,promise1]) ;
  return;
}catch(e){
  return;
  }
}


      function linkSheets(){
       let linksheets = document.querySelectorAll('link[rel="stylesheet"]:not([styled])');
       let linksheets_length = linksheets.length;
       for(let i=0;i<linksheets_length;i++){try{


let request = new XMLHttpRequest();
request.open("GET", linksheets[i].href, false); 
request.send(null);

if (request.status === 200) {
 let linksheet_text = request.responseText; 
 let ls = document.createElement('style');
 ls.innerHTML = linksheet_text;
 document.body.appendChild(ls)
}

       linksheets[i].setAttribute('styled','true');

       }catch(e){linksheets[i].setAttribute('styled','true');continue;}}

     }

       async function linkSheetsAsync(){
        let linksheets = document.querySelectorAll('link[rel="stylesheet"]:not([styled])');
        let linksheets_length = linksheets.length;
        for(let i=0;i<linksheets_length;i++){try{


     let request = await fetch(linksheets[i].href);

     
     let linksheet_text = await request.text(); 
     let ls = document.createElement('style');
     ls.innerHTML = linksheet_text;
     document.body.appendChild(ls)
    

        linksheets[i].setAttribute('styled','true');

        }catch(e){linksheets[i].setAttribute('styled','true');continue;}}

      }

</script>`;

