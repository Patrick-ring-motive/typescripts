globalThis.sw=`if ((!globalThis?.ServiceWorkerGlobalScope) && (navigator?.serviceWorker)) {



  navigator.serviceWorker.register(document?.currentScript?.src/*import.meta.url*/);



} else if (globalThis?.ServiceWorkerGlobalScope) {

  /* Attempt a top level await */

  globalThis.await = promise => promise;


  /* Define levels of cache search */

  const loose = {
    ignoreVary: true,
    ignoreMethod: false,
    ignoreSearch: false
  };

  const looser = {
    ignoreVary: true,
    ignoreMethod: true,
    ignoreSearch: false
  };

  const loosen = {
    ignoreVary: true,
    ignoreMethod: false,
    ignoreSearch: true
  };

  const loosest = {
    ignoreVary: true,
    ignoreMethod: true,
    ignoreSearch: true
  };


  async function cascadeMatchesTier1(req) {



    res = await caches.match(req);

    if (res) { return res; }


    res = await caches.match(req, loose);

    if (res) { return res; }

  

    return res;



  }

  async function cascadeMatchesTier2(req) {


    res = await caches.match(req, looser);

   // if (res) { return res; }

    //res = await caches.match(req, loosen);

   // if (res) { return res; }

   // res = await caches.match(req, loosest);


    return res;


  }



  async function cascadeMatches(req) {



    res = await caches.match(req);

    if (res) { return res; }



    res = await caches.match(req, loose);

    if (res) { return res; }


    res = await caches.match(req, looser);

    if (res) { return res; }

    res = await caches.match(req, loosen);

    if (res) { return res; }

    res = await caches.match(req, loosest);


    return res;



  }




  async function cacheResponse(req, res) {



    let copy = res.clone();



    let cache = await caches.open('app');



    return cache.put(req, copy);



  }




  const endings = ['.js',
    '.jsx',
    '.ts',
    '.tsx',
    '.css',
    '.scss',
    '.json',
    '.jpg',
    '.png',
    '.pnj',
    '.gif',
    '.webp',
    '.svg',
    '.ico',
    '.woff',
    '.woff2'];

  const endings_length = endings.length;

  function checkEndings(fileURL) {



    for (let i = 0; i < endings_length; i++) {



      if (fileURL.toLowerCase().split('?')[0].split('#')[0].endsWith(endings[i])) {



        return true;



      }



    }



    return false;



  }




  /* On install, cache core assets */



  let coreAssets = [];



  self.addEventListener('install', onInstall);



  function onInstall(event) {



    /* start working immediately */
    let skipWait = self.skipWaiting();
    event.waitUntil(skipWait);
    await(skipWait);

    /* Cache core assets */
    const cca = cacheCoreAssets();
    event.waitUntil(cca);
    await(cca);


    async function cacheCoreAssets() {

      const cache = await caches.open('app');

      const coreAssets_length = coreAssets.length;

      for (let i = 0; i < coreAssets_length; i++) {


        cache.add(new Request(coreAssets[i]));


      }


      return cache;


    }


    return;


  }




  self.addEventListener("activate", onActivate);


  function onActivate(event) {

    let cc = clients.claim();
    event.waitUntil(cc);
    await(cc);

    return;

  }



  /* Listen for request events */



  self.addEventListener('fetch', onRequest);


  function onRequest(event) {
    let respondWithResponse;
    try {


      let processRequest = fetchCache();

      async function fetchCache() {




        /* Get the request */

        let request = event.request;


        /* Bug fix */
        /* https://stackoverflow.com/a/49719964 */
        /*if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
          return;
        }*/


        /* Always send google analytics */
        if (request.url.indexOf('GoogleAnalytics') > -1) {
          return;
        }

        if (request.url.startsWith('chrome-extenstion://')) {
          return;
        }


        /* if (!request.url.startsWith(self.location.origin)) return; */


        /* Images */
        /* CSS & JavaScript */
        /* Offline-first */



        if ((request.headers.get('accept').toLowerCase().includes('text/css'))
          ||
          (request.headers.get('accept').toLowerCase().includes('javascript'))
          ||
          (request.headers.get('accept').toLowerCase().includes('image'))
          ||
          checkEndings(request.url)) {




          let offFirst = offFirstFetch();

          async function offFirstFetch() {


            let res = await cascadeMatchesTier1(request);


            if (res) {
              respondWithResponse = res;
              return res;
            }



            try {
              
              res = await fetch(request);

              if (res) {

                /* Save a copy of it in cache */
                await cacheResponse(request, res);
                respondWithResponse = res;
                return res;
              }

              res = await cascadeMatchesTier2(request);
              respondWithResponse = res;
              return res;


            } catch (e) {

              res = await cascadeMatchesTier2(request);
              respondWithResponse = res;
              return res;




            }



          }


          /* Don't turn off Service Worker until this is done */

          event.waitUntil(offFirst);
          
          if(respondWithResponse&&(respondWithResponse instanceof Response)){
            event.respondWith(respondWithResponse.clone());
          }else{
            console.log(respondWithResponse);
          }

          await offFirst;

          return;



        }




        /* HTML files */
        /* Network-first */

        if (request.headers.get('accept').includes('html')) {




          let netFirst = netFirstFetch();

          async function netFirstFetch() {



            try {



              let res = await fetch(request);



              /* Save a copy of it in cache */


              /* Return the response */



              if (res) {



                await cacheResponse(request, res);


                respondWithResponse = res;
                return res;



              }



              res = await cascadeMatches(request);

              respondWithResponse = res;
              return res;



            } catch (e) {



              let res = await cascadeMatches(request);

              respondWithResponse = res;
              return res;




            }



          }

          /* Don't turn off Service Worker until this is done */

          event.waitUntil(netFirst);
          
          if(respondWithResponse&&(respondWithResponse instanceof Response)){
          event.respondWith(respondWithResponse.clone());
          }else{
            console.log(respondWithResponse);
          }

          
          await netFirst;

          return;



        }




      }

      /* Don't turn off Service Worker until everything is done */

      event.waitUntil(processRequest);
      await(processRequest);

      return;

    } catch (e) {

      return;

    }
  }



}
`;