// import { UserService } from './user.service';
import UserController from './user.controller';

export default {
	name: 'MyComponent',

	components: {
		UserController,
	},

	async mounted() {
		const userController = new UserController();
		const user = await userController.getUserById(123);

		// Utilisez l'objet utilisateur ici
		// ...
	},
};
