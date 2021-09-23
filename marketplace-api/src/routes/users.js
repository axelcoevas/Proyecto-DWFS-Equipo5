const router = require("express").Router();
const {
  signup,
  login,
  getUsers,
  updateUser,
  deleteUser
} = require('../controllers/users');

const auth = require('./auth');

router.get('/', auth.required, getUsers);
router.post('/', signup);
router.post('/login', login);
router.put('/', auth.requerido, updateUser);
router.delete('/:id', auth.requerido, deleteUser);

module.exports = router;