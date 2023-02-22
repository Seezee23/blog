const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/travels')

// add routes
// Index /api/travels
router.get('/', dataController.index, apiController.index)
// Delete /api/travels/:id
router.delete('/:id', dataController.destroy, apiController.show)
// Update /api/travels/:id
router.put('/:id', dataController.update, apiController.show)
// Create /api/travels
router.post('/', dataController.create, apiController.show)
// Show /api/travels/:id
router.get('/:id', dataController.show, apiController.show)

module.exports = router