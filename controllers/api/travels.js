require('dotenv').config()
const Travel = require('../../models/travel')
const User = require('../../models/user')

const dataController = {
    // Index,
    index (req, res, next) {
      Travel.find({ }, (err, foundTravels) => {
        if (err) {
          res.status(400).send({
            msg: err.message
          })
        } else {
          res.locals.data.travels = foundTravels
          next()
        }
      })
    },
    // Destroy
    destroy (req, res, next) {
      Travel.findByIdAndDelete(req.params.id, (err, deletedTravel) => {
        if (err) {
          res.status(400).send({
            msg: err.message
          })
        } else {
          res.locals.data.travel = deletedTravel
          next()
        }
      })
    },
    // Update
    update (req, res, next) {
      Travel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTravel) => {
        if (err) {
          res.status(400).send({
            msg: err.message
          })
        } else {
          res.locals.data.travel = updatedTravel
          next()
        }
      })
    },
    // Create
    create (req, res, next) {
      Travel.create(req.body, (err, createdTravel) => {
        if (err) {
          res.status(400).send({
            msg: err.message
          })
        } else {
          res.locals.data.travel = createdTravel
          next()
        }
      })
    },
    // Edit
    // Show
    show (req, res, next) {
      Travel.findById(req.params.id, (err, foundTravel) => {
        if (err) {
          res.status(404).send({
            msg: err.message,
            output: 'Could not find a travel with that ID'
          })
        } else {
          res.locals.data.travel = foundTravel
          next()
        }
      })
    }
  }
  
  const apiController = {
      index (req, res, next) {
        res.json(res.locals.data.travels)
      },
      show (req, res, next) {
        res.json(res.locals.data.travel)
      }
    }
  
  module.exports = { dataController, apiController }