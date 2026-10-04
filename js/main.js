import { products } from './menu-products.js';
const slides = document.querySelectorAll('.coffee-slide');
const controls = document.querySelectorAll('.slider-control');

const previousButton = document.querySelector('.slider-button-left');
const nextButton = document.querySelector('.slider-button-right');

let currentSlide = 0;

function showSlide(index, direction = 'right') {
    if (index === currentSlide) return;

    const oldSlide = slides[currentSlide];
    const newSlide = slides[index];

    oldSlide.classList.remove(
        'slide-in-right',
        'slide-in-left',
        'slide-out-left',
        'slide-out-right'
    );

    newSlide.classList.remove(
        'slide-in-right',
        'slide-in-left',
        'slide-out-left',
        'slide-out-right'
    );

    if (direction === 'right') {
        oldSlide.classList.add('slide-out-left');
        newSlide.classList.add('slide-in-right');
    } else {
        oldSlide.classList.add('slide-out-right');
        newSlide.classList.add('slide-in-left');
    }

    oldSlide.classList.remove('coffee-slide-active');
    controls[currentSlide].classList.remove('slider-control-active');

    currentSlide = index;

    newSlide.classList.add('coffee-slide-active');
    controls[currentSlide].classList.add('slider-control-active');
}

controls.forEach((control, index) => {
    control.addEventListener('click', () => {
        const direction = index > currentSlide ? 'right' : 'left';
        showSlide(index, direction);
    });
});

if (
    slides.length > 0 &&
    controls.length > 0 &&
    previousButton &&
    nextButton
) {
    nextButton.addEventListener('click', () => {
        const nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide, 'right');
    });

    previousButton.addEventListener('click', () => {
        const previousSlide =
            (currentSlide - 1 + slides.length) % slides.length;

        showSlide(previousSlide, 'left');
    });
}


// THEME

const themeSwitch = document.querySelector('.theme-switch');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        const isDarkTheme =
            document.body.classList.contains('dark-theme');

        if (isDarkTheme) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}


const burgerButton = document.querySelector('.burger-button');
const navigationLinks = document.querySelectorAll('.nav-link');
const menuLink = document.querySelector('.menu-link');
const mobileMenuLink = document.querySelector('.menu-link-mobile');

function closeBurgerMenu() {
    document.body.classList.remove('menu-open');

    if (burgerButton) {
        burgerButton.setAttribute('aria-expanded', 'false');
        burgerButton.setAttribute('aria-label', 'Open menu');
    }
}

if (burgerButton) {
    burgerButton.addEventListener('click', () => {
        const isOpen = document.body.classList.toggle('menu-open');

        burgerButton.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

        burgerButton.setAttribute(
            'aria-label',
            isOpen ? 'Close menu' : 'Open menu'
        );
    });
}

navigationLinks.forEach((link) => {
    link.addEventListener('click', closeBurgerMenu);
});

if (menuLink) {
    menuLink.addEventListener('click', closeBurgerMenu);
}
if (mobileMenuLink) {
    mobileMenuLink.addEventListener('click', closeBurgerMenu);
}

const menuTabs = document.querySelectorAll('.menu-tab');
const menuGrids = document.querySelectorAll('.menu-grid');
const menuRefresh = document.querySelector('.menu-refresh');

function createMenuCard(product, index) {
    const card = document.createElement('article');

    card.classList.add('menu-card');
    card.dataset.category = product.category;
    card.dataset.product = index;

    card.innerHTML = `
        <div class="menu-card-image">
            <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="menu-card-content">
            <div>
                <h2 class="menu-card-title">${product.name}</h2>
                <p class="menu-card-text">${product.description}</p>
            </div>

            <p class="menu-card-price">$${Number(product.price).toFixed(2)}</p>
        </div>
    `;

    return card;
}

products.forEach((product) => {
    const categoryProducts = products.filter(
        (item) => item.category === product.category
    );

    const productIndex = categoryProducts.indexOf(product);

    const grid = document.querySelector(
        `.menu-grid[data-menu="${product.category}"]`
    );

    if (grid) {
        const card = createMenuCard(product, productIndex);
        grid.append(card);
    }
});

if (menuTabs.length > 0 && menuGrids.length > 0) {
    menuTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;

            menuTabs.forEach((item) => {
                const isActive = item === tab;

                item.classList.toggle('menu-tab-active', isActive);
                item.setAttribute('aria-selected', String(isActive));
            });

            menuGrids.forEach((grid) => {
                const isActive = grid.dataset.menu === category;

                grid.hidden = !isActive;
                grid.classList.toggle('menu-grid-active', isActive);

                if (isActive) {
                    grid.classList.remove('menu-grid-expanded');
                }
            });

            updateMenuRefresh();
        });
    });
}

function updateMenuRefresh() {
    if (!menuRefresh) {
        return;
    }

    const activeGrid = document.querySelector('.menu-grid-active');

    if (!activeGrid) {
        return;
    }

    const cards = activeGrid.querySelectorAll('.menu-card');

    if (
        window.innerWidth <= 768 &&
        cards.length > 4 &&
        !activeGrid.classList.contains('menu-grid-expanded')
    ) {
        menuRefresh.style.display = 'flex';
    } else {
        menuRefresh.style.display = 'none';
    }
}

updateMenuRefresh();

if (menuRefresh) {
    menuRefresh.addEventListener('click', () => {
        const activeGrid = document.querySelector('.menu-grid-active');

        if (!activeGrid) {
            return;
        }

        activeGrid.classList.add('menu-grid-expanded');
        updateMenuRefresh();
    });
}

const menuCards = document.querySelectorAll('.menu-card');
const menuModal = document.querySelector('.menu-modal');
const menuModalClose = document.querySelector('.menu-modal-close');
const menuModalBackdrop = document.querySelector('.menu-modal-backdrop');
const menuModalImage = document.querySelector('.menu-modal-image');
const menuModalName = document.querySelector('.menu-modal-name');
const menuModalText = document.querySelector('.menu-modal-text');
const menuModalPrice = document.querySelector('.menu-modal-price');
const menuModalSizeButtons = document.querySelectorAll('[data-size]');
const menuModalAdditiveButtons = document.querySelectorAll('[data-additive]');

const menuModalSizeLabels = document.querySelectorAll(
    '[data-size] .menu-modal-option-text'
);

const menuModalAdditiveLabels = document.querySelectorAll(
    '[data-additive] .menu-modal-option-text'
);

function getProduct(category, productIndex) {
    const categoryProducts = products.filter(
        (product) => product.category === category
    );

    return categoryProducts[productIndex];
}



function updateModalPrice() {
    const category = menuModal.dataset.category;
    const productIndex = Number(menuModal.dataset.product);
    const product = getProduct(category, productIndex);

    const activeSizeButton = document.querySelector(
        '[data-size].menu-modal-option-active'
    );

    const sizePrices = {
        s: 0,
        m: 0.50,
        l: 1.00,
    };

    const size = activeSizeButton.dataset.size;

    let totalPrice = Number(product.price) + sizePrices[size];

    menuModalAdditiveButtons.forEach((button) => {
        if (button.classList.contains('menu-modal-option-active')) {
            totalPrice += 0.50;
        }
    });

    menuModalPrice.textContent = `$${totalPrice.toFixed(2)}`;
}

if (menuModal && menuCards.length > 0) {
    menuCards.forEach((card) => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const productIndex = Number(card.dataset.product);
            const product = getProduct(category, productIndex);

            menuModal.dataset.category = category;
            menuModal.dataset.product = productIndex;
            menuModalImage.src = product.image;
            menuModalImage.alt = product.name;
            menuModalName.textContent = product.name;
            menuModalText.textContent = product.description;
            menuModalPrice.textContent = `$${Number(product.price).toFixed(2)}`;

            menuModalSizeLabels.forEach((label, index) => {
                label.textContent = product.sizes[index];
            });

            menuModalAdditiveLabels.forEach((label, index) => {
                label.textContent = product.additives[index];
            });

            menuModalSizeButtons.forEach((button) => {
                button.classList.toggle(
                    'menu-modal-option-active',
                    button.dataset.size === 's'
                );
            });
            menuModalAdditiveButtons.forEach((button) => {
                button.classList.remove('menu-modal-option-active');
            });
            menuModal.hidden = false;
            document.body.classList.add('modal-open');
        });
    });
}

menuModalSizeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        menuModalSizeButtons.forEach((item) => {
            item.classList.remove('menu-modal-option-active');
        });

        button.classList.add('menu-modal-option-active');

        updateModalPrice();
    });
});

menuModalAdditiveButtons.forEach((button) => {
    button.classList.remove('menu-modal-option-active');
});

menuModalAdditiveButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('menu-modal-option-active');

        updateModalPrice();
    });
});

function closeMenuModal() {
    if (!menuModal) return;

    menuModalAdditiveButtons.forEach((button) => {
        button.classList.remove('menu-modal-option-active');
    });

    menuModalSizeButtons.forEach((button) => {
        button.classList.toggle(
            'menu-modal-option-active',
            button.dataset.size === 's'
        );
    });

    menuModal.hidden = true;
    document.body.classList.remove('modal-open');
}

if (menuModal && menuModalClose) {
    menuModalClose.addEventListener('click', closeMenuModal);
}

// if (menuModal && menuModalClose) {
//     menuModalClose.addEventListener('click', () => {
//         menuModalAdditiveButtons.forEach((button) => {
//             button.classList.remove('menu-modal-option-active');
//         });

//         menuModalSizeButtons.forEach((button) => {
//             button.classList.toggle(
//                 'menu-modal-option-active',
//                 button.dataset.size === 's'
//             );
//         });

//         menuModal.hidden = true;
//     });
// }

// if (menuModal && menuModalBackdrop) {
//     menuModalBackdrop.addEventListener('click', () => {
//         menuModal.hidden = true;
//     });
// }

if (menuModal && menuModalBackdrop) {
    menuModalBackdrop.addEventListener('click', closeMenuModal);
}

document.addEventListener('keydown', (event) => {
  
    if (event.key !== 'Escape') return;

    if (menuModal && !menuModal.hidden) {
        closeMenuModal();
        return;
    }

    if (document.body.classList.contains('menu-open')) {
        closeBurgerMenu();
    }

});
