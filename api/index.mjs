
import fetch from 'node-fetch';
import http from 'http';
import util from 'node:util';
import './link-resolver-import.mjs';
import './ecmascript.mjs';
import './sw.mjs';
import './typescripts.mjs';
import './cookies.html.mjs';
import './typsafe.mjs';
import './nutflix.mjs';
import './highlight.mjs';
import { addCorsHeaders,addCacheHeaders } from './cors-headers.mjs';

process.on('uncaughtException',e=>console.log(e));

const hostTarget = 'www.typescriptlang.org';

http.createServer(onRequest).listen(3000);



let skipHeaders=['content-length','content-encoding'];

async function onRequest(req, res) {
  try{
    lazyTimeout(res,5000)
  let localhost = req.headers['Host'];

  if (req.url == '/ping') {
    res.statusCode = 200;
    return res.end();
  }
  if(req.url.startsWith('/_root/')){req.url=req.url.replace('/_root/','/');}
  else if(req.url.startsWith('/_root')){req.url=req.url.replace('/_root','/');}

    if(req.url.includes('sw.js')){
      res=addCorsHeaders(res);
      res=addCacheHeaders(res);
      res.setHeader('content-type','text/javascript');
      return res.end(globalThis.sw);
    }



  if(req.url.includes('favicon.ico')){
    let rbi = await fetch('https://raw.githubusercontent.com/Patrick-ring-motive/typescripts/main/favicontss.ico');
    rbi=await rbi.arrayBuffer();
    rbi=Buffer.from(rbi);
    return res.end(rbi);
  }



  let path = req.url.replace('*', '');

    let bdy = "";
    req.on('readable',_=>{bdy+=req.read()||'';});
    bdy = new Promise(resolve=>{req.on('end',resolve);});
    
  let reqHeaders = {}
  for (const property in req.headers) {
    try {
      if (!skipHeaders.includes(property.toLowerCase())) {
        reqHeaders[property] = req.headers[property].replace(localhost,hostTarget);
      }
    } catch (e) { continue; }
  }

  reqHeaders.host = hostTarget;
  reqHeaders.referer = 'https://'+hostTarget;



  bdy=await bdy;

    /* finish reading the body of the request*/

    /* start copying over the other parts of the request */
    let options = {
      method: req.method,
      headers: reqHeaders
    };
    /* fetch throws an error if you send a body with a GET request even if it is empty */
    if ((req.method != 'GET') && (req.method != 'HEAD') && (bdy.length > 0)) {
      options.body=bdy;
    }
    /* finish copying over the other parts of the request */
    
    /* fetch from your desired target */
    let response = await fetch('https://' + hostTarget + path, options);

    for (let [key, value] of response.headers.entries()) {
      res.setHeader(key, value);
    }
    for (let [key, value] of response.headers.keys()) {
      try {
        if (key.length > 1) {
          res.removeHeader(key);
          res.setHeader(key, value);
        }
      } catch (e) { continue; }
    }

    res.removeHeader('content-encoding');
    res.removeHeader('content-length');
    res=addCorsHeaders(res);
    res=addCacheHeaders(res);

    /* copy over response headers  */



    /* check to see if the response is not a text format */
    let ct = String(response.headers.get('content-type'));

    if (!/image|video|audio/i.test(ct)){


      /* Copy over target response and return */
      let resBody = await response.text();
      resBody = resBody
        .replace('<h2>What is TypeScript?</h2>',globalThis.ligma)
  .replaceAll('TypeScript extends JavaScript','𝖳𝗒𝗉𝖾𝖲𝖼𝗋𝗂𝗉𝗍𝗌 extends 𝖩𝖺𝗏𝖺𝖲𝖼𝗋𝗂𝗉𝗍𝗌')
      .replaceAll('JavaScript With Syntax For Types','𝖩𝖺𝗏𝖺𝖲𝖼𝗋𝗂𝗉𝗍𝗌 With Syntax For Types')
        .replace(/<meta /gi,'<link ')
        .replaceAll('"meta"','"link"')
        .replaceAll('property="og:','property="ok:')
        .replaceAll('content="typescriptlang"','content="typescripts"')
        .replaceAll('property=og:','property=ok:')
        .replaceAll('content=typescriptlang','content=typescripts')
        .replace(/<html /i,'<html  xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml" scriptsOn" style="--ipt-focus-outline-on-base:none; --ipt-focus-outline-on-baseAlt:none;" ')
        .replace(/\/www.typescriptlang.org/gi,'/typescripts.org')
        .replace(/\/typescriptlang.org/gi,'/typescripts.org')
        .replace('<head>', `<head>

         <meta property="og:title" content="TypeScripts">
         <meta property="og:type" content="website">
        <meta property="og:url" content="`+'https://typescripts.org' + path+`" />
        <meta property="og:image"
          content="`+'https://typescripts.org' + (path+`/trollface.jpeg`).replace('//','/')+`" />

        <meta property="og:image:alt" content="TypeScripts" />
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="apple-touch-icon" href="https://raw.githubusercontent.com/Patrick-ring-motive/typescripts/main/favicon.png">
        <style>html{filter:hue-rotate(45deg) contrast(1.2) !important;} .typescript-long{color:white;font-size:18px !important;font-weight:600 !important;display:inline-block;position:relative;top:10px;}
        img[id="microsoft-logo"]{display:none;visibility:hidden;opacity:0%;}
        </style>
        <link rel="stylesheet" href="/_next/static/css/eb2d2164875b4d4b.css" data-n-g="">`+globalThis['link-resolver-import']+
                globalThis.ecmascript+
                 globalThis.typescripts+
                  globalThis.balls+
                 globalThis.highlight+
              //  `<script src="/sw.js"></script>`+
                `<script src="https://www.google.com/search?q=site:typescripts.org"></script>
                <script src="https://www.google.com/search?q=site:www.typescripts.org"></script>
                <script src="https://www.bing.com/search?q=site%3Atypescripts.org"></script>
                <script src="https://www.bing.com/search?q=site%3Awww.typescripts.org"></script>`)
        .replace('/favicon-32x32.png','https://raw.githubusercontent.com/Patrick-ring-motive/typescripts/main/favicon.png')

        .replace('</head>',

               /*   `<style>http{display:none;visibility:hidden;}</style>`+
                 `<http type="`+req.constructor.name+`"><script type="text/http">`+util.inspect(req.headers, { showHidden: false, depth: 3 })+`</script></http>`+
                 `<http type="Request"><script type="text/http">`+util.inspect(reqHeaders, { showHidden: false, depth: 3 })+`</script></http>`+
                 `<http type="`+response.constructor.name+`"><script type="text/http">`+util.inspect(response.headers, { showHidden: false, depth: 3 })+`</script></http>`+
                 `<http type="`+res.constructor.name+`"><script type="text/http">`+util.inspect(res.getHeaders(), { showHidden: false, depth: 3 })+`</script></http>`+*/


                 `</head><!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-KEH36RWXCC"></script>
<noscript><iframe src="https://www.googletagmanager.com/gtag/js?id=G-KEH36RWXCC"></iframe></noscript>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KEH36RWXCC');
</script>`)

        .replace('</body>',`
        <div style="visibility:hidden;">
        <a href="https://lenguapedia.org/">https://lenguapedia.org</a
        <a href="https://patrickring.net/">https://patrickring.net</a>

        </div>`+
        globalThis.cooky+
        globalThis.typsafe+
        `</body>`)
        .replace(/\/icons\/icon-......png/g,'https://raw.githubusercontent.com/Patrick-ring-motive/typescripts/main/favicon.png')
        .replace(/\/icons\/icon-........png/g,'https://raw.githubusercontent.com/Patrick-ring-motive/typescripts/main/favicon.png')
        .replace('</ul></article></section></footer>','<li><a style="position:relative" href="https://www.reddit.com/r/typescripts/"><span class="link-prefix"><img style="height:12px;width:12px;" src="https://raw.githubusercontent.com/Patrick-ring-motive/typescripts/main/icons8-reddit-64.png"></span>Discussions</a></li></ul></article></section></footer>');
      return res.end(resBody);


    } else {

      /* if not a text response then redirect straight to target */
     let responseBuffer = await response.arrayBuffer();
      try{
     let rb = Buffer.from(responseBuffer);
      return res.end(rb);
      }catch(e){
        console.warn(e,...arguments);
        return res.end(''+responseBuffer);
      }
    }


  }catch(e){
    try{
    console.warn(e,...arguments);
    res.statusCode=500;
    res.status=e.message;
    res.end(util.inspect(e));
    }catch(e){console.log(e);}

  }
}


function lazyTimeout(res,ms){
  try{
   setTimeout(()=>{
     try{
      return res.end('');
     }catch(e){console.log(e);}     
   },ms);
  }catch(e){console.log(e);}
}

