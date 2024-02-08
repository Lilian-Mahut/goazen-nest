import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
	async getUserById(id: number): Promise<User> {
		// LOGIQUE POUR RECUPERE L'USER PAR SON ID
		return user;
	}
}
