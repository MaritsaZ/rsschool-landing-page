const slides = document.querySelectorAll('.coffee-slide');
const controls = document.querySelectorAll('.slider-control');

const previousButton = document.querySelector('.slider-button-left');
const nextButton = document.querySelector('.slider-button-right');

let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('coffee-slide-active');
    controls[currentSlide].classList.remove('slider-control-active');

    currentSlide = index;

    slides[currentSlide].classList.add('coffee-slide-active');
    controls[currentSlide].classList.add('slider-control-active');
}

if (
    slides.length > 0 &&
    controls.length > 0 &&
    previousButton &&
    nextButton
) {
    nextButton.addEventListener('click', () => {
        const nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    });

    previousButton.addEventListener('click', () => {
        const previousSlide =
            (currentSlide - 1 + slides.length) % slides.length;

        showSlide(previousSlide);
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
            });
        });
    });
}

if (menuRefresh) {
    menuRefresh.addEventListener('click', () => {
        const activeGrid = document.querySelector('.menu-grid-active');

        if (activeGrid) {
            activeGrid.classList.add('menu-grid-expanded');
            menuRefresh.style.display = 'none';
        }
    });
}

const menuProducts = {
    coffee: [
        {
            name: 'Irish coffee',
            description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
            price: 7.00,
            image: '../assets/images/coffee/coffee-1.png',
            sizes: {
                s: { label: '200 ml', addPrice: 0 },
                m: { label: '300 ml', addPrice: 0.50 },
                l: { label: '400 ml', addPrice: 1.00 }
            },
            additives: [
                { name: 'Sugar', addPrice: 0.50 },
                { name: 'Cinnamon', addPrice: 0.50 },
                { name: 'Syrup', addPrice: 0.50 }
            ]
        },
        {
            name: 'Kahlua coffee',
            description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
            price: 7.00,
            image: '../assets/images/coffee/coffee-2.png',
            sizes: {
                s: { label: '200 ml', addPrice: 0 },
                m: { label: '300 ml', addPrice: 0.50 },
                l: { label: '400 ml', addPrice: 1.00 }
            },
            additives: [
                { name: 'Sugar', addPrice: 0.50 },
                { name: 'Cinnamon', addPrice: 0.50 },
                { name: 'Syrup', addPrice: 0.50 }
            ]
        },
        {
            name: 'Honey raf',
            description: 'Espresso with frothed milk, cream and aromatic honey',
            price: 5.50,
            image: '../assets/images/coffee/coffee-3.png',
            sizes: {
                s: { label: '200 ml', addPrice: 0 },
                m: { label: '300 ml', addPrice: 0.50 },
                l: { label: '400 ml', addPrice: 1.00 }
            },
            additives: [
                { name: 'Sugar', addPrice: 0.50 },
                { name: 'Cinnamon', addPrice: 0.50 },
                { name: 'Syrup', addPrice: 0.50 }
            ]
        },
        {
            name: 'Ice cappuccino',
            description: 'Cappuccino with soft thick foam in summer version with ice',
            price: 5.00,
            image: '../assets/images/coffee/coffee-4.png',
            sizes: {
                s: { label: '200 ml', addPrice: 0 },
                m: { label: '300 ml', addPrice: 0.50 },
                l: { label: '400 ml', addPrice: 1.00 }
            },
            additives: [
                { name: 'Sugar', addPrice: 0.50 },
                { name: 'Cinnamon', addPrice: 0.50 },
                { name: 'Syrup', addPrice: 0.50 }
            ]
        },
        {
            name: 'Espresso',
            description: 'Classic black coffee',
            price: 4.50,
            image: '../assets/images/coffee/coffee-5.png',
            sizes: {
                s: { label: '200 ml', addPrice: 0 },
                m: { label: '300 ml', addPrice: 0.50 },
                l: { label: '400 ml', addPrice: 1.00 }
            },
            additives: [
                { name: 'Sugar', addPrice: 0.50 },
                { name: 'Cinnamon', addPrice: 0.50 },
                { name: 'Syrup', addPrice: 0.50 }
            ]
        },
        {
            name: 'Latte',
            description: 'Espresso coffee with the addition of steamed milk and dense milk foam',
            price: 5.50,
            image: '../assets/images/coffee/coffee-6.png',
            sizes: {
                s: { label: '200 ml', addPrice: 0 },
                m: { label: '300 ml', addPrice: 0.50 },
                l: { label: '400 ml', addPrice: 1.00 }
            },
            additives: [
                { name: 'Sugar', addPrice: 0.50 },
                { name: 'Cinnamon', addPrice: 0.50 },
                { name: 'Syrup', addPrice: 0.50 }
            ]
        },

        {
            name: 'Latte macchiato',
            description: 'Espresso with frothed milk and chocolate',
            price: 5.50,
            image: '../assets/images/coffee/coffee-7.png',
            sizes: {
                s: { label: '200 ml', addPrice: 0 },
                m: { label: '300 ml', addPrice: 0.50 },
                l: { label: '400 ml', addPrice: 1.00 }
            },
            additives: [
                { name: 'Sugar', addPrice: 0.50 },
                { name: 'Cinnamon', addPrice: 0.50 },
                { name: 'Syrup', addPrice: 0.50 }
            ]
        },
        {
            name: 'Coffee with cognac',
            description: 'Fragrant black coffee with cognac and whipped cream',
            price: 6.50,
            image: '../assets/images/coffee/coffee-8.png',
            sizes: {
                s: { label: '200 ml', addPrice: 0 },
                m: { label: '300 ml', addPrice: 0.50 },
                l: { label: '400 ml', addPrice: 1.00 }
            },
            additives: [
                { name: 'Sugar', addPrice: 0.50 },
                { name: 'Cinnamon', addPrice: 0.50 },
                { name: 'Syrup', addPrice: 0.50 }
            ]
        }
    ],

    tea: [
        {
            name: 'Moroccan',
            description: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
            price: 4.50,
            image: '../assets/images/tea/tea-1.png',
            sizes: {
                s: { label: '200 ml', addPrice: 0 },
                m: { label: '300 ml', addPrice: 0.50 },
                l: { label: '400 ml', addPrice: 1.00 }
            },
            additives: [
                { name: 'Sugar', addPrice: 0.50 },
                { name: 'Lemon', addPrice: 0.50 },
                { name: 'Syrup', addPrice: 0.50 }
            ]
        },
        {
            name: 'Ginger',
            description: 'Original black tea with fresh ginger, lemon and honey',
            price: 5.00,
            image: '../assets/images/tea/tea-2.png',
            sizes: {
                s: { label: '200 ml', addPrice: 0 },
                m: { label: '300 ml', addPrice: 0.50 },
                l: { label: '400 ml', addPrice: 1.00 }
            },
            additives: [
                { name: 'Sugar', addPrice: 0.50 },
                { name: 'Lemon', addPrice: 0.50 },
                { name: 'Syrup', addPrice: 0.50 }
            ]
        },
        {
            name: 'Cranberry',
            description: 'Invigorating black tea with cranberry and honey',
            price: 5.00,
            image: '../assets/images/tea/tea-3.png',
            sizes: {
                s: { label: '200 ml', addPrice: 0 },
                m: { label: '300 ml', addPrice: 0.50 },
                l: { label: '400 ml', addPrice: 1.00 }
            },
            additives: [
                { name: 'Sugar', addPrice: 0.50 },
                { name: 'Lemon', addPrice: 0.50 },
                { name: 'Syrup', addPrice: 0.50 }
            ]
        },
        {
            name: 'Sea buckthorn',
            description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
            price: 5.50,
            image: '../assets/images/tea/tea-4.png',
            sizes: {
                s: { label: '200 ml', addPrice: 0 },
                m: { label: '300 ml', addPrice: 0.50 },
                l: { label: '400 ml', addPrice: 1.00 }
            },
            additives: [
                { name: 'Sugar', addPrice: 0.50 },
                { name: 'Lemon', addPrice: 0.50 },
                { name: 'Syrup', addPrice: 0.50 }
            ]
        }
    ],

    dessert: [{
        name: 'Marble cheesecake',
        description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
        price: 3.50,
        image: '../assets/images/dessert/dessert-1.png',
        sizes: {
            s: { label: '50 g', addPrice: 0 },
            m: { label: '100 g', addPrice: 0.50 },
            l: { label: '200 g', addPrice: 1.00 }
        },
        additives: [
            { name: 'Berries', addPrice: 0.50 },
            { name: 'Nuts', addPrice: 0.50 },
            { name: 'Jam', addPrice: 0.50 }
        ]
    },
    {
        name: 'Red velvet',
        description: 'Layer cake with cream cheese frosting',
        price: 4.00,
        image: '../assets/images/dessert/dessert-2.png',
        sizes: {
            s: { label: '50 g', addPrice: 0 },
            m: { label: '100 g', addPrice: 0.50 },
            l: { label: '200 g', addPrice: 1.00 }
        },
        additives: [
            { name: 'Berries', addPrice: 0.50 },
            { name: 'Nuts', addPrice: 0.50 },
            { name: 'Jam', addPrice: 0.50 }
        ]
    },
    {
        name: 'Cheesecakes',
        description: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
        price: 4.50,
        image: '../assets/images/dessert/dessert-3.png',
        sizes: {
            s: { label: '50 g', addPrice: 0 },
            m: { label: '100 g', addPrice: 0.50 },
            l: { label: '200 g', addPrice: 1.00 }
        },
        additives: [
            { name: 'Berries', addPrice: 0.50 },
            { name: 'Nuts', addPrice: 0.50 },
            { name: 'Jam', addPrice: 0.50 }
        ]
    },
    {
        name: 'Creme brulee',
        description: 'Delicate creamy dessert in a caramel basket with wild berries',
        price: 4.00,
        image: '../assets/images/dessert/dessert-4.png',
        sizes: {
            s: { label: '50 g', addPrice: 0 },
            m: { label: '100 g', addPrice: 0.50 },
            l: { label: '200 g', addPrice: 1.00 }
        },
        additives: [
            { name: 'Berries', addPrice: 0.50 },
            { name: 'Nuts', addPrice: 0.50 },
            { name: 'Jam', addPrice: 0.50 }
        ]
    },
    {
        name: 'Pancakes',
        description: 'Tender pancakes with strawberry jam and fresh strawberries',
        price: 4.50,
        image: '../assets/images/dessert/dessert-5.png',
        sizes: {
            s: { label: '50 g', addPrice: 0 },
            m: { label: '100 g', addPrice: 0.50 },
            l: { label: '200 g', addPrice: 1.00 }
        },
        additives: [
            { name: 'Berries', addPrice: 0.50 },
            { name: 'Nuts', addPrice: 0.50 },
            { name: 'Jam', addPrice: 0.50 }
        ]
    },
    {
        name: 'Honey cake',
        description: 'Classic honey cake with delicate custard',
        price: 4.50,
        image: '../assets/images/dessert/dessert-6.png',
        sizes: {
            s: { label: '50 g', addPrice: 0 },
            m: { label: '100 g', addPrice: 0.50 },
            l: { label: '200 g', addPrice: 1.00 }
        },
        additives: [
            { name: 'Berries', addPrice: 0.50 },
            { name: 'Nuts', addPrice: 0.50 },
            { name: 'Jam', addPrice: 0.50 }
        ]
    },
    {
        name: 'Chocolate cake',
        description: 'Cake with hot chocolate filling and nuts with dried apricots',
        price: 5.50,
        image: '../assets/images/dessert/dessert-7.png',
        sizes: {
            s: { label: '50 g', addPrice: 0 },
            m: { label: '100 g', addPrice: 0.50 },
            l: { label: '200 g', addPrice: 1.00 }
        },
        additives: [
            { name: 'Berries', addPrice: 0.50 },
            { name: 'Nuts', addPrice: 0.50 },
            { name: 'Jam', addPrice: 0.50 }
        ]
    },
    {
        name: 'Black forest',
        description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
        price: 6.50,
        image: '../assets/images/dessert/dessert-8.png',
        sizes: {
            s: { label: '50 g', addPrice: 0 },
            m: { label: '100 g', addPrice: 0.50 },
            l: { label: '200 g', addPrice: 1.00 }
        },
        additives: [
            { name: 'Berries', addPrice: 0.50 },
            { name: 'Nuts', addPrice: 0.50 },
            { name: 'Jam', addPrice: 0.50 }
        ]
    }
    ]
};

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

function updateModalPrice() {
    const category = menuModal.dataset.category;
    const productIndex = Number(menuModal.dataset.product);
    const product = menuProducts[category][productIndex];

    const activeSizeButton = document.querySelector(
        '[data-size].menu-modal-option-active'
    );

    const size = activeSizeButton.dataset.size;

    let totalPrice = product.price + product.sizes[size].addPrice;

    menuModalAdditiveButtons.forEach((button) => {
        if (button.classList.contains('menu-modal-option-active')) {
            const additiveIndex = Number(button.dataset.additive);
            totalPrice += product.additives[additiveIndex].addPrice;
        }
    });

    menuModalPrice.textContent = `$${totalPrice.toFixed(2)}`;
}

if (menuModal && menuCards.length > 0) {
    menuCards.forEach((card) => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const productIndex = Number(card.dataset.product);
            const product = menuProducts[category][productIndex];
            menuModal.dataset.category = category;
            menuModal.dataset.product = productIndex;
            menuModalImage.src = product.image;
            menuModalImage.alt = product.name;
            menuModalName.textContent = product.name;
            menuModalText.textContent = product.description;
            menuModalPrice.textContent = `$${product.price.toFixed(2)}`;
            menuModalSizeLabels.forEach((label, index) => {
                const sizes = ['s', 'm', 'l'];
                label.textContent = product.sizes[sizes[index]].label;
            });

            menuModalAdditiveLabels.forEach((label, index) => {
                label.textContent = product.additives[index].name;
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


if (menuModal && menuModalClose) {
    menuModalClose.addEventListener('click', () => {
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
    });
}

if (menuModal && menuModalBackdrop) {
    menuModalBackdrop.addEventListener('click', () => {
        menuModal.hidden = true;
    });
}
