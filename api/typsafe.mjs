globalThis.typsafe=`
<link rel="canonical" href="https://fonts.google.com/specimen/Exo%2B2">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo%202">
<style>   
marquee{
  animation: blinker 1.5s linear infinite;
position: fixed;
z-index: 2147483644;
top: 25vh;
right: 0;
left: 0;
  color:red;
  font-family: "Comic Sans MS", "Chalkboard SE", "Comic Neue", "Comic Sans", cursive, "Exo 2", monospace;
  }
  @keyframes blinker {
      69% {
          visibility: hidden;
      }
      42.0% {
        visibility: hidden;
    }
  }

  .code-container,
  [id="monaco-editor-embed"] *,
  code,
  code>pre
  {
  font-family:"Comic Sans MS", "Chalkboard SE", "Comic Neue", "Comic Sans", cursive, "Exo 2", monospace !important;
  }
</style>
  <marquee><table><tr><td></td><td><button onclick="alert('Cannot read property ’target’ of undefined')+(document.querySelector('marquee').innerText='[object Object]');">x</button></td></tr><tr><td><h1>​j​a​v​a​s​c​r​i​p​t​ was never meant to be type safe</h1></td><td></td></tr></table></marquee>
  
  <script>if((new Date().getTime()%10)>0){
  document.querySelector('marquee').style.display='none';
  }</script>
  `;