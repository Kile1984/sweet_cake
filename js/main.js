const heading = document.querySelectorAll(".observe");
const sections = document.querySelectorAll("section, #contact");
const navLinks = document.querySelectorAll(".nav__link");

// heading h1 observing
const headingObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.3,
  }
);

heading.forEach((sec) => {
  headingObserver.observe(sec);
});

// smooth scroll
const smoothScrollObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        const id = entry.target.id;

        const activeLink = document.querySelector(`a[href="#${id}"]`);

        if (activeLink) activeLink.classList.add("active");
        console.log(activeLink);
      }
    });
  },
  {
    threshold: 0.4,
  }
);

sections.forEach((section) => {
  smoothScrollObserver.observe(section);
});

// galery
const cakes = [
  {
    title: "Lorem Ipsum Dolor Sit Cupcake 1",
    text: "Lorem ipsum dolor Cupcake 1",
    img: "./img/my_works_1.jpg",
    type: "cupcake",
    alt: "Cake image",
  },
  {
    title: "Lorem Ipsum Dolor Sit Cupcake 2",
    text: "Lorem ipsum dolor Cupcake 2",
    img: "./img/my_works_2.jpg",
    type: "cupcake",
    alt: "Cake image",
  },
  {
    title: "Lorem Ipsum Dolor Sit Cake",
    text: "Lorem ipsum dolor Cake ",
    img: "./img/my_works_3.jpg",
    type: "cake",
    alt: "Cake image",
  },
  {
    title: "Lorem Ipsum Dolor Sit Muffins 1",
    text: "Lorem ipsum dolor Muffins 1",
    img: "./img/my_works_4.jpg",
    type: "muffins",
    alt: "Cake image",
  },
  {
    title: "Lorem Ipsum Dolor Sit Muffins 2",
    text: "Lorem ipsum dolor Muffins 2",
    img: "./img/my_works_5.jpg",
    type: "muffins",
    alt: "Cake image",
  },
  {
    title: "Lorem Ipsum Dolor Sit Donuts 1",
    text: "Lorem ipsum dolor Donuts 1",
    img: "./img/my_works_6.jpg",
    type: "donuts",
    alt: "Cake image",
  },
  {
    title: "Lorem Ipsum Dolor Sit Donuts 2",
    text: "Lorem ipsum dolor Donuts 2",
    img: "./img/my_works_7.jpg",
    type: "donuts",
    alt: "Cake image",
  },
  {
    title: "Lorem Ipsum Dolor Sit Donuts 3",
    text: "Lorem ipsum dolor Donuts 3",
    img: "./img/my_works_8.jpg",
    type: "donuts",
    alt: "Cake image",
  },
];
const buttons = document.querySelectorAll(".works__btn ");
const gallery = document.querySelector(".works__image-gallery");

const generateCupcakeType = function (cake, visible = "") {
  const markup = `  <figure class="works__figure ${visible}" data-type="${cake.type}">
          <a href="#" class="works__link">
            <img class="works__img" src="${cake.img}" alt="Cake" />
          </a>

          <figcaption class="works__caption ">
            <img src="./img/arrow.png" alt="Arrow" />
            <h2 class="heading heading__small">${cake.title}</h2>
            <p class="works__text text text__base text__base--light">
              ${cake.text}
            </p>
            <div class="works__border-bottom"></div>
          </figcaption>
        </figure>`;
  gallery.insertAdjacentHTML("afterbegin", markup);
};

const init = function (allCakes) {
  allCakes.forEach((cake) => {
    generateCupcakeType(cake);
  });
};

init(cakes);

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const selectedType = btn.dataset.type;
    const allFigure = document.querySelectorAll(".works__figure");

    allFigure.forEach((fig) => {
      const type = fig.dataset.type;
      fig.classList.add("hide");

      setTimeout(() => {
        fig.style.display = "none";
      }, 100);

      if (selectedType === type || selectedType === "all") {
        console.log(fig);
        fig.classList.add("show");
        fig.classList.remove("hide");

        setTimeout(() => {
          fig.style.display = "block";
        }, 100);
      }
    });
  });
});

// scroll to top
const arrowTop = document.querySelector(".footer__img");

arrowTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
