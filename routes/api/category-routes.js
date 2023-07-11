const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id)
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new category
  router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        category_name: "New Category"
      }
    */
    Category.create(req.body)
      res.status(200).json(req.body)
  });

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, { where: { id: req.params.id } });
  res.status(200).json(req.body)
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({ where: {id: req.params.id}})
  res.status(200).json('done')
});

module.exports = router;
