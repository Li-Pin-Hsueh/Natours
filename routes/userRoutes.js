const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// MIDDLEWARE RUNS BY SEQUENCE
router.use(authController.protect);

router.patch(
  '/updateMyPassword',
  // authController.protect,
  authController.updatePassword
);

router.get(
  '/me',
  // authController.protect,
  userController.getMe,
  userController.getUser
);
router.patch('/updateMe', userController.updateMe);
// actually we will NOT delete but set it inactive.
router.delete('/deleteMe', userController.deleteMe);

router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
