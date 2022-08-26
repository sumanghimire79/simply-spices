/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('Products').del();
  await knex('Products').insert([
    {
      id: 1,
      categoryId: 2,
      name: 'Chili Pepper powder',
      description:
        'Ancho chile powder is made from sweet and earthy chilies, that are mildly hot.',
      price: 50.0,
      size: '100',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/chilipepper_powder.jpeg',
      stockAmount: 50,
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Saffron powder',
      description:
        'Our Superior Grade Spanish Saffron is grown in La Mancha, Spain. Saffron is expensive because it must be harvested by hand.',

      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/saffron_powder.jpeg',
      stockAmount: 50,
    },
    {
      id: 3,
      categoryId: 2,
      name: 'Caraway seed',
      description:
        'The Dutch love Caraway Seeds in Leyden cheese. Danes love them in akvavit.',

      price: 50.0,
      size: '100',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/caraway_seed.jpeg',
      stockAmount: 50,
    },
    {
      id: 4,
      categoryId: 2,
      name: 'Allspice',
      description:
        'Jamaicans take great pride in their world-famous allspice, harvested from 40-foot pimenta trees.',

      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/allspice.jpeg',
      stockAmount: 50,
    },
    {
      id: 5,
      categoryId: 3,
      name: 'Black Cumin seeds',
      description:
        'Whole cumin seeds are perfect on top of salads or steamed rice. The true flavors come out.',

      price: 50.0,
      size: '100',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/black_cumin_seeds.jpeg',
      stockAmount: 50,
    },
    {
      id: 6,
      categoryId: 3,
      name: 'Fenugreek powder',
      description:
        'Fenugreek seeds lend a subtle sweet taste to pickles and chutneys.',

      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/fenugreek_powder.jpeg',
      stockAmount: 50,
    },
    {
      id: 7,
      categoryId: 2,
      name: 'Goji Berry',
      description:
        'Goji berry is made from sweet and earthy chilies, that are mildly hot.',

      price: 50.0,
      size: '100',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/goji_berry.jpeg',
      stockAmount: 50,
    },
    {
      id: 8,
      categoryId: 3,
      name: 'Star Anise',
      description:
        'Gathered at their peak under the Andalusian sun, our Anise Seeds lend a fleeting and floral scent reminiscent.',

      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/star_anise.jpeg',
      stockAmount: 50,
    },
    {
      id: 9,
      categoryId: 3,
      name: 'Dill seed',
      description:
        'The grassy flavor of Dill Seeds accent Russian and Caucasian dishes.',

      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/dill_seed.jpeg',
      stockAmount: 50,
    },
    {
      id: 10,
      categoryId: 3,
      name: 'Poppy seeds',
      description:
        'Mixed into muffins or ground into paste for strudel, dough and blue poppy seeds have worked.',

      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/poppy_seed.jpeg',
      stockAmount: 50,
    },
    {
      id: 11,
      categoryId: 5,
      name: 'Dried Bay leaves',
      description:
        'The Oracle of Delphi chewed fresh laurel leaves for divine inspiration. When dried.',

      price: 50.0,
      size: '100',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/dried_bay_leaves.jpeg',
      stockAmount: 50,
    },
    {
      id: 12,
      categoryId: 4,
      name: 'Ginger powder',
      description:
        'Ginger adds zing to almost anything. Most dried ginger in the U.S. comes from India.',

      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/ginger_powder.jpeg',
      stockAmount: 50,
    },
    {
      id: 13,
      categoryId: 4,
      name: 'Cinnamon sticks',
      description:
        'If there’s one spice you must try from The Spice House, it’s cinnamon.',

      price: 100.0,
      size: '250',
      status: 'inStock',
      createdAt: knex.fn.now(),
      pictureUrl: '/assets/images/spices_square/cinnamon_sticks.jpeg',
      stockAmount: 50,
    },
  ]);
};
