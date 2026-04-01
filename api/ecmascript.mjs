globalThis.ecmascript = `<script>void ` +

  function ECMAScripts() {

    function ECMAScript(el) {
      if (!el) {
        return;
      }
      var n, a = [],
        walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
      while (n = walk.nextNode()) {
        a.push(n);
        let ntext = n.textContent;

        ntext = ntext
          .replace(/microsoft/gi, 'Megahard')
          .replace(/TypeScripts/gi, 'TypeScript')
          .replace(/TypeScript/gi, '𝖳𝗒𝗉𝖾𝖲𝖼𝗋𝗂𝗉𝗍𝗌')

          .replace(/JavaScripts/gi, 'JavaScript')
          .replace(/JavaScript/gi, '𝖩𝖺𝗏𝖺𝖲𝖼𝗋𝗂𝗉𝗍𝗌')
          .replace(/Java/gi, '𝖩𝖺𝗏𝖺𝗌')

          .replace(/ECMAScripts/gi, 'ECMAScript')
          .replace(/ECMAScript/gi, '𝖤𝖢𝖬𝖠𝖲𝖼𝗋𝗂𝗉𝗍𝗌')

          .replace(/SCRIPTION/g, 'SCRIPTION')
          .replace(/scription/g, 'scrіptіon')

          .replaceAll('<script', '<𝗌𝖼𝗋𝗂𝗉𝗍')
          .replaceAll('</script', '</𝗌𝖼𝗋𝗂𝗉𝗍')

          .replaceAll('scripting', '𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗇𝗀')
          .replaceAll('Scripting', 'S𝖼𝗋𝗂𝗉𝗍𝗂𝗇𝗀')
          .replaceAll('scripted', '𝗌𝖼𝗋𝗂𝗉𝗍𝖾𝖽')
          .replaceAll('Scripted', 'S𝖼𝗋𝗂𝗉𝗍𝖾𝖽')

          .replace(/scripts/g, 'script')
          .replace(/script/g, '𝗌𝖼𝗋𝗂𝗉𝗍𝗌')
          .replace(/Scripts/g, 'Script')
          .replace(/Script/g, '𝖲𝖼𝗋𝗂𝗉𝗍𝗌')
          .replace(/SCRIPTS/g, 'SCRIPT')
          .replace(/SCRIPT/g, '𝖲𝖢𝖱𝖨𝖯𝖳𝖲')
          .replace(/scripts/gi, 'script')
          .replace(/script/gi, '𝖲𝖼𝗋𝗂𝗉𝗍𝗌')

          .replace('Made with ♥ in Redmond, Boston, SF & Dublin', '𝖬𝖺𝖽𝖾 𝗐𝗂𝗍𝗁 🗿 𝗂𝗇 𝖠𝗎𝗌𝗍𝗂𝗇')
          .replace('Made with ♥ of Redmond, Boston, SF & Dublin', '𝖬𝖺𝖽𝖾 𝗐𝗂𝗍𝗁 🗿 𝗂𝗇 𝖠𝗎𝗌𝗍𝗂𝗇');

        if (ntext != n.textContent) {
          n.textContent = ntext;
          try {
            n.style.backgroundColor = 'rgba(0,0,0,0)';
          } catch (e) {
            continue;
          }
        }

      };
      if (/TypeScript/i.test(document.title)) {
        document.title = document.title
          .replace(/TypeScripts/gi, 'TypeScript')
          .replace(/TypeScript/gi, '𝖳𝗒𝗉𝖾𝖲𝖼𝗋𝗂𝗉𝗍𝗌');

      }

      if (/JavaScript/i.test(document.title)) {
        document.title = document.title
          .replace(/JavaScripts/gi, 'JavaScript')
          .replace(/JavaScript/gi, '𝖩𝖺𝗏𝖺𝖲𝖼𝗋𝗂𝗉𝗍𝗌');

      }

      if (/ECMAScript/i.test(document.title)) {
        document.title = document.title
        replace(/ECMAScripts/gi, 'ECMAScript')
          .replace(/ECMAScript/gi, '𝖤𝖢𝖬𝖠𝖲𝖼𝗋𝗂𝗉𝗍𝗌');

      }

      if (/Script/i.test(document.title)) {
        document.title = document.title
          .replace(/scripts/gi, 'script')
          .replace(/script/gi, '𝖲𝖼𝗋𝗂𝗉𝗍𝗌');
      }
      if (/microsoft/i.test(document.title)) {
        document.title = document.title
          .replace(/microsoft/gi, 'Macrohard');
      }
      let tlong = document.querySelector('svg.typescript-long');
      if (tlong) {
        tlong.outerHTML = '<p class="typescript-long">⠀TypeScript</p><br><p>This site was created using ASP.NET Blazor Web Assembly 7.0</p>';
      }
      return a;
    }

    ECMAScript(document.body);

    setInterval(async function() {
      ECMAScript(document.body);
    }, 100);

    document.addEventListener("readystatechange", (event) => {
      ECMAScript(document.body);
    });

    document.addEventListener("DOMContentLoaded", (event) => {
      ECMAScript(document.body);
    });

    document.addEventListener("load", (event) => {
      ECMAScript(document.body);
    });

  }

  +
  `();</script>`;
