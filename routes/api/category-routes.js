const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}],
      });
      res.status(200).json(categoryData)
  } catch (error) {
    res.status(500).json(error);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    if(!category){
      res.status(400).json({message:"No Category Found With That ID!"})
      return
    }
    res.status(200).json(category);
    
  } catch (error) {
    res.status(500).json(error)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name
    })
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    if(!category[0]){
      res.status(400).json({message: "No Category  With That ID!"})
    }
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json(error)
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    if(!category){
      res.status(400).json({message: "No Category With That ID!"})
    }
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json(error)
  }
  // delete a category by its `id` value
});

module.exports = router;
