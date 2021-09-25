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
router.put('/', auth.required, updateUser);
router.delete('/:id', auth.required, deleteUser);

module.exports = router;