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
      This site uses cookies and similar tracking technology. As disclosed in our Piracy Statement, we and our partners may collect personal information and other data. By continuing to use our website, you accept our Piracy Statement and Terms of Servix.
    </p>
  </div>
</div>

<script>
document.querySelector('[id="cookie-accept"]').onclick=function(){
let ckie = document.querySelector('[id="onetrust-consent-sdk"]');
let ckieOpacity=parseFloat(ckie.style.opacity);
  ckie.style.opacity=(ckieOpacity*0.9);
};
</script>`;
