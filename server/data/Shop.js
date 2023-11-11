const dummy_shops = [
  {
    name: 'Hat n Stick',
    products: [
      {
        id: 'kx-asdsad',
        name: 'Shellcapped Food Container (20pcs)',
        category: ['home', 'business', 'utility'],
        price: 5.40,
        countInStock: 30,
        shop: null,
      },
      {
        id: 'kj-1',
        name: 'Glass Candle (3x)',
        category: ['home', 'accessories'],
        price: 13.60,
        countInStock: 31,
        shop: null,
      },
    ],
    owner: null,
  },
  {
    name: 'Lilycove Store',
    products: [],
    owner: null,
  },
  {
    name: 'Stalex',
    products: [
      {
        slug: 'gst-hdie',
        name: 'Ghost Hoodie',
        category: ['men', 'apparel'],
        variant: [
          {
            color: 'red',
            size: 'M',
            price: 120,
            countInStock: 20,
          },
          {
            color: 'blue',
            size: 'M',
            price: 120,
            countInStock: 22,
          },
          {
            color: 'blue',
            size: 'L',
            price: 120,
            countInStock: 17,
          },
        ],
      },
    ],
    owner: null,
  },
]

module.exports = dummy_shops