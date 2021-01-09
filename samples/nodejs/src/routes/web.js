import 	WelcomeController from '../controllers/WelcomeController'

Route.route('/')
	.get(WelcomeController.home)
	.all(send405);

module.exports = Route