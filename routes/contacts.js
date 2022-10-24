const express = require ("express")
const router = express.Router()
const contactControllers = require ('../controllers/contacts')
router.get('/', contactControllers.getcontacts)
router.post('/', contactControllers.createcontact)
router.delete('/:id',contactControllers.deletecontact)
router.patch('/:id',contactControllers.updatecontact)

module.exports = router