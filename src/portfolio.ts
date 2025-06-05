const portfolio = [
  {
    section: "Children's Illustration",
    images: [
      {
        srcThumbnail: "images/article_1.webp",
        srcFull: "images/article_1.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/article_2.webp",
        srcFull: "images/article_2.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/article_3.webp",
        srcFull: "images/article_3.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/beauty.webp",
        srcFull: "images/beauty.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/flower.webp",
        srcFull: "images/flower.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/frog.webp",
        srcFull: "images/frog.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/the_empress.webp",
        srcFull: "images/the_empress.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/bee.webp",
        srcFull: "images/bee.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/bee_kind.webp",
        srcFull: "images/bee_kind.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/bugs.webp",
        srcFull: "images/bugs.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/mice.webp",
        srcFull: "images/mice.webp",
        alt: "",
      },
    ],
  },
  {
    section: "Greeting Cards",
    images: [
      {
        srcThumbnail: "images/snailed_it.webp",
        srcFull: "images/snailed_it.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/snailed_it_inside.webp",
        srcFull: "images/snailed_it_inside.webp",
        alt: "",
      },
    ],
  },
  {
    section: "Surface Pattern Design",
    images: [
      {
        srcThumbnail: "images/Doodlebugs3.webp",
        srcFull: "images/Doodlebugs3.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/Funny_farm_2.webp",
        srcFull: "images/Funny_farm_2.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/beach_dogs.webp",
        srcFull: "images/beach_dogs.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/birding.webp",
        srcFull: "images/birding.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/chickens-tiled.webp",
        srcFull: "images/chickens-tiled.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/crafts.webp",
        srcFull: "images/crafts.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/cocoa.webp",
        srcFull: "images/cocoa.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/danish.webp",
        srcFull: "images/danish.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/frogs.webp",
        srcFull: "images/frogs.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/houses.webp",
        srcFull: "images/houses.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/houses_2.webp",
        srcFull: "images/houses_2.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/pie.webp",
        srcFull: "images/pie.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/retro_food.webp",
        srcFull: "images/retro_food.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/sailing_dogs.webp",
        srcFull: "images/sailing_dogs.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/sea.webp",
        srcFull: "images/sea.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/seagull.webp",
        srcFull: "images/seagull.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/snail.webp",
        srcFull: "images/snail.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/space.webp",
        srcFull: "images/space.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/thanksgiving.webp",
        srcFull: "images/thanksgiving.webp",
        alt: "",
      },
    ],
  },
  {
    section: "Educational Illustrations",
    images: [
      {
        srcThumbnail: "images/boooooks.webp",
        srcFull: "images/boooooks.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/coffee.webp",
        srcFull: "images/coffee.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/fall_book.webp",
        srcFull: "images/fall_book.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/glow.webp",
        srcFull: "images/glow.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/monsters.webp",
        srcFull: "images/monsters.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/turkey_book.webp",
        srcFull: "images/turkey_book.webp",
        alt: "",
      },
      {
        srcThumbnail: "images/welcome_back.webp",
        srcFull: "images/welcome_back.webp",
        alt: "",
      },
    ],
  },
];

export const populatePortfolio = () => {
  const content = document.getElementById("horizon")!;

  for (const section of portfolio) {
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = section.section;
    content.appendChild(sectionTitle);

    const ul = document.createElement("ul");
    ul.className = "examples";
    for (const image of section.images) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = image.srcThumbnail;
      img.alt = image.alt;
      li.appendChild(img);
      ul.appendChild(li);
    }
    content.appendChild(ul);
  }
};
