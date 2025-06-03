/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const userRouter = router.namespace('/user');

  userRouter.get('/', controller.user.index);

  // 创建用户
  userRouter.post('/', controller.user.create);
};
