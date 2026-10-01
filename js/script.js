/* =========================================================
   RAVI SINTHUSAN - PORTFOLIO
   Main JavaScript
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const header = document.getElementById("header");

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

const themeToggle = document.getElementById("theme-toggle");

const backToTop = document.getElementById("back-to-top");

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

const projectButtons = document.querySelectorAll(".project-view-btn");

const projectModal = document.getElementById("project-modal");
const projectModalClose = document.getElementById("project-modal-close");

const modalProjectType = document.getElementById("modal-project-type");
const modalProjectTitle = document.getElementById("modal-project-title");
const modalProjectDescription =
    document.getElementById("modal-project-description");

const projectGallery = document.getElementById("project-gallery");

const galleryPrev = document.getElementById("gallery-prev");
const galleryNext = document.getElementById("gallery-next");
const galleryCounter = document.getElementById("gallery-counter");

const imageModal = document.getElementById("image-modal");
const imageModalClose = document.getElementById("image-modal-close");
const modalImage = document.getElementById("modal-image");

const certificateButtons =
    document.querySelectorAll(".certificate-view-btn");

const researchViewButton =
    document.getElementById("research-view-btn");

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");

const currentYear =
    document.getElementById("current-year");


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* Close mobile navigation after clicking a link */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});


/* =========================================================
   HEADER ON SCROLL
========================================================= */

function updateHeader() {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections =
    document.querySelectorAll("main section[id]");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

}


function updateThemeIcon() {

    const icon =
        themeToggle.querySelector("i");

    if (
        document.body.classList.contains("dark-theme")
    ) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

}

updateThemeIcon();


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if (
        document.body.classList.contains("dark-theme")
    ) {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

    }

    updateThemeIcon();

});


/* =========================================================
   PROJECT FILTER
========================================================= */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");


        const filter =
            button.dataset.filter;


        projectCards.forEach(card => {

            const category =
                card.dataset.category;

            if (
                filter === "all" ||
                filter === category
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


/* =========================================================
   PROJECT DATA

   IMPORTANT:
   These paths use the filenames you provided.
========================================================= */

const projects = {


    /* -----------------------------------------------------
       DOCTOR CHANNELING SYSTEM
    ----------------------------------------------------- */

    doctor: {

        type: "Software Development",

        title: "Doctor Channeling System",

        description:
            "A software application project designed around doctor channeling and appointment-management processes.",

        images: Array.from(
            { length: 13 },
            (_, index) =>
                `images/software-projects/DoctorChannellingSystemApplication/coding${index + 1}.png`
        )

    },


    /* -----------------------------------------------------
       DREAM BOOKS
    ----------------------------------------------------- */

    dreambooks: {

        type: "Software Development",

        title: "Dream Books Application",

        description:
            "A software-development project created as part of my practical software engineering work.",

        images: Array.from(
            { length: 9 },
            (_, index) =>
                `images/software-projects/DreamBooksApplication/Books${index + 1}.png`
        )

    },


    /* -----------------------------------------------------
       FOODHUB
    ----------------------------------------------------- */

    foodhub: {

        type: "Software Development",

        title: "Foodhub Company",

        description:
            "An application-development project demonstrating practical software development and interface implementation.",

        images: Array.from(
            { length: 14 },
            (_, index) =>
                `images/software-projects/Foodhub-company/Foodhub${index + 1}.jpg`
        )

    },


    /* -----------------------------------------------------
       KICKBLAST JUDO
    ----------------------------------------------------- */

    kickblast: {

        type: "Software Development",

        title: "KickBlast Judo",

        description:
            "A software-development project created to apply programming and application-design concepts.",

        images: Array.from(
            { length: 11 },
            (_, index) =>
                `images/software-projects/KickBlast-Judo/Kick${index + 1}.png`
        )

    },


    /* -----------------------------------------------------
       ENOMY FINANCE
    ----------------------------------------------------- */

    enomy: {

        type: "UI/UX Design",

        title: "Enomy Finance",

        description:
            "A financial-platform UI/UX project featuring user-focused interfaces for savings, investments, currency transactions and mortgage services.",

        images: Array.from(
            { length: 12 },
            (_, index) =>
                `images/uiux-projects/EnomyFinance/Enomy${index + 1}.jpg`
        )

    },


    /* -----------------------------------------------------
       ETCP
    ----------------------------------------------------- */

    etcp: {

        type: "UI/UX Design",

        title: "Eco-Tourism Cloud Platform",

        description:
            "A web and mobile UI/UX project designed for eco-conscious travellers and sustainable tourism providers.",

        images: Array.from(
            { length: 13 },
            (_, index) =>
                `images/uiux-projects/ETCP/ETCP${index + 1}.png`
        )

    },


    /* -----------------------------------------------------
       FRESH GROCERIES
    ----------------------------------------------------- */

    fresh: {

        type: "UI/UX Design",

        title: "Fresh Groceries",

        description:
            "A user-interface design project focused on creating an accessible and visually clear grocery-shopping experience.",

        images: Array.from(
            { length: 16 },
            (_, index) =>
                `images/uiux-projects/FreshGroceries/Fresh${index + 1}.png`
        )

    },


    /* -----------------------------------------------------
       VELVET VOGUE
    ----------------------------------------------------- */

    velvet: {

        type: "UI/UX Design",

        title: "Velvet Vogue",

        description:
            "A fashion-focused UI/UX project designed to provide a modern and user-friendly digital shopping experience.",

        images: Array.from(
            { length: 15 },
            (_, index) =>
                `images/uiux-projects/VelvetVogue/Velvet${index + 1}.jpg`
        )

    },


    /* -----------------------------------------------------
       SNAKE GAME
    ----------------------------------------------------- */

    snake: {

        type: "Game Development",

        title: "2D Snake Game",

        description:
            "A 2D game project created to explore programming logic, movement, game mechanics and interactive development.",

        images: [

            "images/game-projects/snake-game-2d/Snake game.jpg",

            "images/game-projects/snake-game-2d/Start.jpg",

            "images/game-projects/snake-game-2d/Snake coding.jpg",

            "images/game-projects/snake-game-2d/Snake coding 2.jpg"

        ]

    },


    /* -----------------------------------------------------
       TABLE TENNIS
       
       IMPORTANT:
       You need to check whether these files are PNG or JPG.
       I am currently using .png.
    ----------------------------------------------------- */

    tabletennis: {

        type: "Game Development",

        title: "2D Table Tennis",

        description:
            "A 2D table-tennis game project demonstrating gameplay logic, interaction and game-development concepts.",

        images: [

            "images/game-projects/table-tennis-2d/Table tennis.png",

            "images/game-projects/table-tennis-2d/Table tennis 1.png",

            "images/game-projects/table-tennis-2d/Table tennis 2.png",

            "images/game-projects/table-tennis-2d/Table tennis 3.png",

            "images/game-projects/table-tennis-2d/Table tennis 4.png",

            "images/game-projects/table-tennis-2d/Table tennis 5.png"

        ]

    }

};


/* =========================================================
   PROJECT GALLERY
========================================================= */

let currentProject = null;
let currentImageIndex = 0;


function showProjectImage() {

    if (!currentProject) {
        return;
    }


    const project =
        projects[currentProject];


    const imagePath =
        project.images[currentImageIndex];


    projectGallery.innerHTML = "";


    const image =
        document.createElement("img");

    image.src = imagePath;

    image.alt =
        `${project.title} screenshot ${currentImageIndex + 1}`;


    /* If an image cannot be found */

    image.onerror = function () {

        projectGallery.innerHTML = `
            <div style="
                padding:40px;
                text-align:center;
                color:var(--text-light);
            ">
                <i
                    class="fa-solid fa-image"
                    style="
                        font-size:3rem;
                        margin-bottom:15px;
                        color:var(--primary);
                    ">
                </i>

                <p>
                    Image could not be loaded.
                </p>

                <small>
                    Check the image filename and file extension.
                </small>
            </div>
        `;

    };


    projectGallery.appendChild(image);


    galleryCounter.textContent =
        `${currentImageIndex + 1} / ${project.images.length}`;

}


/* =========================================================
   OPEN PROJECT
========================================================= */

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectName =
            button.dataset.project;


        if (!projects[projectName]) {
            return;
        }


        currentProject =
            projectName;

        currentImageIndex = 0;


        const project =
            projects[projectName];


        modalProjectType.textContent =
            project.type;

        modalProjectTitle.textContent =
            project.title;

        modalProjectDescription.textContent =
            project.description;


        showProjectImage();


        projectModal.classList.add("show");

        document.body.classList.add(
            "modal-open"
        );

    });

});


/* =========================================================
   NEXT IMAGE
========================================================= */

galleryNext.addEventListener("click", () => {

    if (!currentProject) {
        return;
    }


    const project =
        projects[currentProject];


    currentImageIndex++;

    if (
        currentImageIndex >=
        project.images.length
    ) {

        currentImageIndex = 0;

    }


    showProjectImage();

});


/* =========================================================
   PREVIOUS IMAGE
========================================================= */

galleryPrev.addEventListener("click", () => {

    if (!currentProject) {
        return;
    }


    const project =
        projects[currentProject];


    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex =
            project.images.length - 1;

    }


    showProjectImage();

});


/* =========================================================
   CLOSE PROJECT MODAL
========================================================= */

function closeProjectModal() {

    projectModal.classList.remove("show");

    document.body.classList.remove(
        "modal-open"
    );

    currentProject = null;

}


projectModalClose.addEventListener(
    "click",
    closeProjectModal
);


const projectOverlay =
    projectModal.querySelector(".modal-overlay");


projectOverlay.addEventListener(
    "click",
    closeProjectModal
);


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener("keydown", event => {

    /* Close modals */

    if (event.key === "Escape") {

        if (
            projectModal.classList.contains("show")
        ) {

            closeProjectModal();

        }


        if (
            imageModal.classList.contains("show")
        ) {

            closeImageModal();

        }

    }


    /* Project gallery navigation */

    if (
        projectModal.classList.contains("show")
    ) {

        if (event.key === "ArrowRight") {

            galleryNext.click();

        }


        if (event.key === "ArrowLeft") {

            galleryPrev.click();

        }

    }

});


/* =========================================================
   IMAGE MODAL
========================================================= */

function openImageModal(imageSource, altText) {

    modalImage.src =
        imageSource;

    modalImage.alt =
        altText || "Image preview";


    imageModal.classList.add("show");

    document.body.classList.add(
        "modal-open"
    );

}


function closeImageModal() {

    imageModal.classList.remove("show");

    modalImage.src = "";

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   CERTIFICATE VIEWER
========================================================= */

certificateButtons.forEach(button => {

    button.addEventListener("click", () => {

        const certificateCard =
            button.closest(".certificate-card");

        const certificateImage =
            certificateCard.querySelector(
                ".certificate-image img"
            );


        openImageModal(
            certificateImage.src,
            certificateImage.alt
        );

    });

});


/* =========================================================
   RESEARCH POSTER VIEWER
========================================================= */

if (researchViewButton) {

    researchViewButton.addEventListener(
        "click",
        () => {

            const researchImage =
                document.querySelector(
                    ".research-image img"
                );


            openImageModal(
                researchImage.src,
                researchImage.alt
            );

        }
    );

}


/* =========================================================
   CLOSE IMAGE MODAL
========================================================= */

imageModalClose.addEventListener(
    "click",
    closeImageModal
);


const imageOverlay =
    imageModal.querySelector(
        ".image-modal-overlay"
    );


imageOverlay.addEventListener(
    "click",
    closeImageModal
);


/* =========================================================
   BACK TO TOP
========================================================= */

function updateBackToTop() {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        `
        .section-heading,
        .about-content,
        .highlight-card,
        .career-card,
        .skill-category,
        .timeline-item,
        .project-card,
        .research-card,
        .certificate-card,
        .languages,
        .interests,
        .contact-info,
        .contact-form
        `
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.10
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   CONTACT FORM

   This is currently FRONT-END ONLY.
   It does NOT send an email yet.
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();

            const subject =
                document
                    .getElementById("subject")
                    .value
                    .trim();

            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                formMessage.textContent =
                    "Please complete all fields.";

                return;

            }


            formMessage.textContent =
                "Thank you. The form design is working. Email delivery will be connected later.";


            contactForm.reset();

        }
    );

}


/* =========================================================
   AUTOMATIC CURRENT YEAR
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   INITIAL PAGE STATE
========================================================= */

updateBackToTop();
updateActiveNavigation();