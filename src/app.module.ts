import { Module } from '@nestjs/common';
// import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		// userModule,
		// RouterModule.register([
		// 	{
		// 		path: 'user',
		// 		module: userModule,
		// 		children: [
		// { path: 'register', module: RegisterdModule },
		// { path: 'authenticate', module: AuthenticateModule },
		// ],
		// },
		// ]),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
