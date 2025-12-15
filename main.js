window.onload = () => {

  /* ================= TYPEWRITER ================= */
  const text = "sorry for being makulit sayo mahal,\ni have a gift for you for now";
  const el = document.getElementById("typeText");
  let i = 0;

  function type() {
    if (i < text.length) {
      el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
      i++;
      setTimeout(type, 50);
    }
  }
  type();

  /* ================= HEARTS / STARS ================= */
  const fxBox = document.querySelector(".bg-fx");
  const icons = ["💖", "✨", "💗", "⭐"];

  setInterval(() => {
    const fx = document.createElement("div");
    fx.className = "fx";
    fx.innerText = icons[Math.floor(Math.random() * icons.length)];
    fx.style.left = Math.random() * 100 + "vw";
    fx.style.animationDuration = 6 + Math.random() * 6 + "s";
    fx.style.fontSize = 14 + Math.random() * 14 + "px";
    fxBox.appendChild(fx);

    setTimeout(() => fx.remove(), 12000);
  }, 600);

  /* ================= SEE BUTTON ================= */
  document.getElementById("seeFlowers").onclick = () => {
    document.body.classList.add("show-flowers");
    document.body.classList.remove("not-loaded");

    // show second message after bloom
    setTimeout(() => {
      document.body.classList.add("show-message");
    }, 9000);
  };

};
