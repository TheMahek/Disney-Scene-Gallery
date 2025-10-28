const disneyData = {
  "Zootopia": [
    "gifs/Zootopia1.gif",
    "gifs/Zootopia2.gif",
    "gifs/Zootopia3.gif",
  ],
  "Raya-and-the-last-dragon": [
    "gifs/Raya-Dragon1.gif",
    "gifs/Raya-Dragon2.gif",
    "gifs/Raya-Dragon3.gif",
  ],
  "Moana": [
    "gifs/Moana1.gif",
    "gifs/Moana2.gif",
    "gifs/Moana3.gif",
  ],
  "Frozen": [
    "gifs/Frozen1.gif",
    "gifs/Frozen2.gif",
    "gifs/Frozen3.gif",
  ],
  "Encanto": [
    "gifs/Encanto1.gif",
    "gifs/Encanto2.gif",
    "gifs/Encanto3.gif",
  ],
};

const listItems = document.querySelectorAll(".disney-list li");
const gifs = [
  document.getElementById("gif1"),
  document.getElementById("gif2"),
  document.getElementById("gif3"),
];

listItems.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const key = e.target.getAttribute("data-disney");
    const scenes = disneyData[key];

    gifs.forEach((gif, i) => {
      gif.src = scenes[i];
      gif.style.opacity = 1;
      gif.style.transform = `translate(${(i - 1) * 200}px, ${
        i === 1 ? "-100px" : "100px"
      }) rotate(${(i - 1) * 10}deg)`;
    });
  });

  item.addEventListener("mouseleave", () => {
    gifs.forEach((gif) => {
      gif.style.opacity = 0;
      gif.style.transform = "translate(0, 0)";
    });
  });
});
