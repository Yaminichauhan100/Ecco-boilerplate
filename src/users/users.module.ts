import { Module, NestModule,MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthMiddleware } from './middlewares/current-user.middleware';

@Module({
  imports: [UsersModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
    //.forRoutes(UsersController); //only users related middleware will call
    //.forRoutes('users')
    .forRoutes({
      path:"users/user-list",method:RequestMethod.GET
    })
  }
}
