import router from '@adonisjs/core/services/router';
const ProjectsController = () => import('#controllers/projects_controller');
router.on('/').render('pages/home');
router.get('/projets', [ProjectsController, 'Project']).as('projet');
//# sourceMappingURL=routes.js.map