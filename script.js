console.log("Git Training Project is running...");

const btn = document.getElementById("loveBtn");
const container = document.getElementById("hearts-container");

btn.addEventListener("click", () => {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // توزيع عشوائي على كامل الشاشة
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    // حجم عشوائي
    let size = Math.random() * 20 + 15;
    heart.style.fontSize = size + "px";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
});