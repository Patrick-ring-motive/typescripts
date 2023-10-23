globalThis.cooky=`
<style>
#onetrust-banner-sdk.otFlat {
    position: fixed;
    z-index: 2147483645;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    max-height: 90%;
    overflow-x: hidden;
    overflow-y: auto;
  color:black;
  filter: drop-shadow(0 0 0.25rem black);
}
</style>

<div id="onetrust-consent-sdk" style="opacity:1;">
  <div id="onetrust-banner-sdk" class="otFlat bottom ot-wo-title vertical-align-content ot-fade-in" role="region" aria-label="Cookie banner">
    <p id="onetrust-policy-text">   &nbsp;<button id="cookie-accept">Accept
      </button>&nbsp;
      This site uses cookies and similar tracking technology. As disclosed i​n our <a href="https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Ftia6yp0sw8tb1.gif%3Fformat%3Dmp4%26s%3D6ae176e2d611aec0a3621195a24a6ff45bed6d03" target="_blank">Piracy Statement</a>, we and our partners may collect personal information and other data. By continuing to use our website, you accept our <a href="https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Ftia6yp0sw8tb1.gif%3Fformat%3Dmp4%26s%3D6ae176e2d611aec0a3621195a24a6ff45bed6d03" target="_blank">Piracy Statement</a> and Terms of Servix.
    </p>
  </div>
</div>

<script>

if(!sessionStorage.getItem('cookieop')){
sessionStorage.setItem('cookieop','1');
}

document.querySelector('[id="onetrust-consent-sdk"]')
.style.opacity=parseFloat(sessionStorage.getItem('cookieop'));

document.querySelector('[id="cookie-accept"]').onclick=function(){
let ckie = document.querySelector('[id="onetrust-consent-sdk"]');
let ckieOpacity=parseFloat(sessionStorage.getItem('cookieop'));
  ckie.style.opacity=(ckieOpacity*0.9);
  sessionStorage.setItem('cookieop',ckie.style.opacity);
};
if(document.querySelector('[title="Microsoft Privacy Policy"]')){
  let p = document.querySelector('[title="Microsoft Privacy Policy"]');
  p.innerText = "Piracy";
  p.setAttribute('target','_blank');
  p.href='https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Ftia6yp0sw8tb1.gif%3Fformat%3Dmp4%26s%3D6ae176e2d611aec0a3621195a24a6ff45bed6d03';
}
</script>`;
