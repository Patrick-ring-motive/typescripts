import fetch from 'node-fetch';
import http from 'http';
import './link-resolver-import.mjs';
import './ecmascript.mjs';
import './en.json.mjs';
import { addCorsHeaders } from './cors-headers.mjs';

process.on('uncaughtException',e=>console.log(e));

const hostTarget = 'www.typescriptlang.org';

http.createServer(onRequest).listen(3000);



let skipHeaders=['content-length','content-encoding'];

async function onRequest(req, res) {
  try{
  if(req.url.includes('ico')||req.url.includes('png')||req.url.includes('svg'))
  console.log(req.url);
  let localhost = req.headers['Host'];
  
  if (req.url == '/ping') {
    res.statusCode = 200;
    return res.end();
  }
  if(req.url.startsWith('/_root/')){req.url=req.url.replace('/_root/','/');}
  else if(req.url.startsWith('/_root')){req.url=req.url.replace('/_root','/');}

  req.url=req.url.replace('index.json','en.json');


  let path = req.url.replace('*', '');

  

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

  

  let bdy = "";
  req.on('readable',_=>{bdy+=req.read()||'';});
  await new Promise(resolve=>{req.on('end',resolve);});

    /* finish reading the body of the request*/

    /* start copying over the other parts of the request */
    let options = {
      method: req.method,
      headers: reqHeaders
    };
    /* fetch throws an error if you send a body with a GET request even if it is empty */
    if ((req.method != 'GET') && (req.method != 'HEAD') && (bdy.length > 0)) {
      options = {
        method: req.method,
        headers: reqHeaders,
        body: bdy
      };
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

    /* copy over response headers  */

    res.headers = response.headers;

    /* check to see if the response is not a text format */
    let ct = response.headers.get('content-type');

    if ((ct) && (!ct.includes('image')) && (!ct.includes('video')) && (!ct.includes('audio'))) {


      /* Copy over target response and return */
      let resBody = await response.text();
      resBody = resBody
        .replace(/\/www.typescriptlang.org/gi,'/typescripts.org')
        .replace(/\/typescriptlang.org/gi,'/typescripts.org')
        .replace('<head>', `<head>
        <link rel="apple-touch-icon" href="https://raw.githubusercontent.com/Patrick-ring-motive/typescripts/main/favicon.png">
        <style>html{filter:hue-rotate(45deg);} .typescript-long{color:white;font-size:18px !important;font-weight:600 !important;display:inline-block;position:relative;top:10px;}</style>
        <link rel="stylesheet" href="/_next/static/css/eb2d2164875b4d4b.css" data-n-g="">`+globalThis['link-resolver-import']+
                globalThis.ecmascript)
        .replace('/favicon-32x32.png','https://raw.githubusercontent.com/Patrick-ring-motive/typescripts/main/favicon.png')
        .replace(/\/icons\/icon-......png/g,'https://raw.githubusercontent.com/Patrick-ring-motive/typescripts/main/favicon.png')
        .replace(/\/icons\/icon-........png/g,'https://raw.githubusercontent.com/Patrick-ring-motive/typescripts/main/favicon.png');
      return res.end(resBody);


    } else {

      /* if not a text response then redirect straight to target */
     let rb = Buffer.from(await response.arrayBuffer())
      return res.end(rb);

    }


  }catch(e){

    res.statusCode=500;
    res.status=e.message;
    res.end(e);
    
  }
}
