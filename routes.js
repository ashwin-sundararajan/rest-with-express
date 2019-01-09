const express = require('express')
const router = express.Router()

const helpers = require('./helpers')

router.get('/', (req, res) => {
  return res.status(200).json(helpers.getPosts())
})

router.get('/:id', (req, res) => {
  const foundPost = helpers.getPost(Number(req.params.id))

  if (!foundPost) return res.status(404).json({ message: 'Invalid ID' })

  return res.status(200).json(foundPost)
})

router.post('/', (req, res) => {
  const newPost = helpers.addPost(req.body)

  return res.status(201).json(newPost)
})

router.delete('/:id', (req, res) => {
  const deleted = helpers.deletePost(Number(req.params.id))

  if (!deleted) return res.status(404).json({ message: 'Invalid ID' })

  return res
    .status(200)
    .json({ message: `The post with id ${req.params.id} was removed.` })
})

router.put('/:id', (req, res) => {
  const updated = helpers.editPost(Number(req.params.id), req.body)

  if (!updated) return res.status(404).json({ message: 'Invalid ID' })

  return res
    .status(201)
    .json({ message: `The post with id ${req.params.id} was updated.` })
})

module.exports = router
