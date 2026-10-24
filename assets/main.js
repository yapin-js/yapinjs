// Copy buttons on the code cards.
document.querySelectorAll('.copy').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const target = document.getElementById(btn.dataset.copy);
    if (!target) return;

    const text = target.innerText;
    const done = () => {
      btn.textContent = 'Copied';
      btn.dataset.state = 'done';
      setTimeout(() => {
        btn.textContent = 'Copy';
        delete btn.dataset.state;
      }, 1600);
    };

    try {
      await navigator.clipboard.writeText(text);
      done();
    } catch {
      // Clipboard blocked: select the block so the keyboard shortcut works.
      const range = document.createRange();
      range.selectNodeContents(target);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      btn.textContent = 'Press Ctrl+C';
      setTimeout(() => { btn.textContent = 'Copy'; }, 2400);
    }
  });
});
