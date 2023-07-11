const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    tagData = await Tag.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new tag
  router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        tag_name: "New Tag"
      }
    */
    Tag.create(req.body)
      res.status(200).json(req.body)
  });

router.put('/:id', (req, res) => {
  // update a tag by its `id` value
  Tag.update(req.body, { where: { id: req.params.id } });
  res.status(200).json(req.body)
});

router.delete('/:id', (req, res) => {
  // delete a tag by its `id` value
  Tag.destroy({ where: {id: req.params.id}})
  res.status(200).json('done')
});

module.exports = router;
