const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include: [
        {model: Product}
      ]
    })
    res.status(200).json(tagData)
  } catch (error) {
    res.status(500).json(error)
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {model: Product}
      ]
    })
    if(!tagData){
      res.status(400).json({message:"No Tag Found With That ID!"})
    }
    res.status(200).json(tagData)
  } catch (error) {
    res.status(500).json(error)
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name
    })
    res.status(200).json(newTag)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where:{
        id: req.params.id
      }
    })
    if(!tagData[0]){
      res.status(400).json({message: "No Tag With That ID!"})
    }
    res.status(200).json(tagData)
  } catch (error) {
    res.status(500).json(error)
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async  (req, res) => {
try {
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  if(!tagData){
      res.status(400).json({message: "No Tag With That ID!"})
    }
    res.status(200).json(tagData)
} catch (error) {
  res.status(500).json(error)
}
  // delete on tag by its `id` value
});

module.exports = router;
