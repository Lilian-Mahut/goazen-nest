import { Vue } from 'vue-property-decorator';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export default class UserController extends Vue {
	private userService = new UserService();

	async getUserById(id: number): Promise<void> {
		const user = await this.userService.getUserById(id);
	}
	// @Get()
	// list() {
	// 	return this.users;
	// }
}
