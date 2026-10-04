const products = [
  // COFFEE

  {
    category: 'coffee',
    name: 'Irish coffee',
    description:
      'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
    price: 7.00,
    image: '../assets/images/coffee/coffee-1.png',
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Cinnamon', 'Syrup'],
  },

  {
    category: 'coffee',
    name: 'Kahlua coffee',
    description:
      'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
    price: 7.00,
    image: '../assets/images/coffee/coffee-2.png',
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Cinnamon', 'Syrup'],
  },

  {
    category: 'coffee',
    name: 'Honey raf',
    description:
      'Espresso with frothed milk, cream and aromatic honey',
    price: 5.50,
    image: '../assets/images/coffee/coffee-3.png',
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Cinnamon', 'Syrup'],
  },

  {
    category: 'coffee',
    name: 'Ice cappuccino',
    description:
      'Cappuccino with soft thick foam in summer version with ice',
    price: 5.00,
    image: '../assets/images/coffee/coffee-4.png',
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Cinnamon', 'Syrup'],
  },

  {
    category: 'coffee',
    name: 'Espresso',
    description: 'Classic black coffee',
    price: 4.50,
    image: '../assets/images/coffee/coffee-5.png',
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Cinnamon', 'Syrup'],
  },

  {
    category: 'coffee',
    name: 'Latte',
    description:
      'Espresso coffee with the addition of steamed milk and dense milk foam',
    price: 5.50,
    image: '../assets/images/coffee/coffee-6.png',
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Cinnamon', 'Syrup'],
  },

  {
    category: 'coffee',
    name: 'Latte macchiato',
    description: 'Espresso with frothed milk and chocolate',
    price: 5.50,
    image: '../assets/images/coffee/coffee-7.png',
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Cinnamon', 'Syrup'],
  },

  {
    category: 'coffee',
    name: 'Coffee with cognac',
    description:
      'Fragrant black coffee with cognac and whipped cream',
    price: 6.50,
    image: '../assets/images/coffee/coffee-8.png',
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Cinnamon', 'Syrup'],
  },

  // TEA

  {
    category: 'tea',
    name: 'Moroccan',
    description:
      'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
    price: 4.50,
    image: '../assets/images/tea/tea-1.png',
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Lemon', 'Syrup'],
  },

  {
    category: 'tea',
    name: 'Ginger',
    description:
      'Original black tea with fresh ginger, lemon and honey',
    price: 5.00,
    image: '../assets/images/tea/tea-2.png',
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Lemon', 'Syrup'],
  },

  {
    category: 'tea',
    name: 'Cranberry',
    description:
      'Invigorating black tea with cranberry and honey',
    price: 5.00,
    image: '../assets/images/tea/tea-3.png',
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Lemon', 'Syrup'],
  },

  {
    category: 'tea',
    name: 'Sea buckthorn',
    description:
      'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
    price: 5.50,
    image: '../assets/images/tea/tea-4.png',
    sizes: ['200 ml', '300 ml', '400 ml'],
    additives: ['Sugar', 'Lemon', 'Syrup'],
  },

  // DESSERT

  {
    category: 'dessert',
    name: 'Marble cheesecake',
    description:
      'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
    price: 3.50,
    image: '../assets/images/dessert/dessert-1.png',
    sizes: ['50 g', '100 g', '200 g'],
    additives: ['Berries', 'Nuts', 'Jam'],
  },

  {
    category: 'dessert',
    name: 'Red velvet',
    description:
      'Layer cake with cream cheese frosting',
    price: 4.00,
    image: '../assets/images/dessert/dessert-2.png',
    sizes: ['50 g', '100 g', '200 g'],
    additives: ['Berries', 'Nuts', 'Jam'],
  },

  {
    category: 'dessert',
    name: 'Cheesecakes',
    description:
      'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
    price: 4.50,
    image: '../assets/images/dessert/dessert-3.png',
    sizes: ['50 g', '100 g', '200 g'],
    additives: ['Berries', 'Nuts', 'Jam'],
  },

  {
    category: 'dessert',
    name: 'Creme brulee',
    description:
      'Delicate creamy dessert in a caramel basket with wild berries',
    price: 4.00,
    image: '../assets/images/dessert/dessert-4.png',
    sizes: ['50 g', '100 g', '200 g'],
    additives: ['Berries', 'Nuts', 'Jam'],
  },

  {
    category: 'dessert',
    name: 'Pancakes',
    description:
      'Tender pancakes with strawberry jam and fresh strawberries',
    price: 4.50,
    image: '../assets/images/dessert/dessert-5.png',
    sizes: ['50 g', '100 g', '200 g'],
    additives: ['Berries', 'Nuts', 'Jam'],
  },

  {
    category: 'dessert',
    name: 'Honey cake',
    description:
      'Classic honey cake with delicate custard',
    price: 4.50,
    image: '../assets/images/dessert/dessert-6.png',
    sizes: ['50 g', '100 g', '200 g'],
    additives: ['Berries', 'Nuts', 'Jam'],
  },

  {
    category: 'dessert',
    name: 'Chocolate cake',
    description:
      'Cake with hot chocolate filling and nuts with dried apricots',
    price: 5.50,
    image: '../assets/images/dessert/dessert-7.png',
    sizes: ['50 g', '100 g', '200 g'],
    additives: ['Berries', 'Nuts', 'Jam'],
  },

  {
    category: 'dessert',
    name: 'Black forest',
    description:
      'A combination of thin sponge cake with cherry jam and light chocolate mousse',
    price: 6.50,
    image: '../assets/images/dessert/dessert-8.png',
    sizes: ['50 g', '100 g', '200 g'],
    additives: ['Berries', 'Nuts', 'Jam'],
  },
];

export { products };