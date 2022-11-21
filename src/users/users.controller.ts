import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';

import { UsersService } from '../users/users.service';

import { AuthGuard } from '../guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userservice: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  userInfo(): string {
    return 'USER DATA';
  }

  @Post('add-data')
  addData(): string {
    return 'Data added';
  }
  @Get('user-list')
  userList() {
    return this.userservice.findData();
  }
  @Post('user-add')
  userAdd(@Body() record: any) {
    return this.userservice.create(record);
  }
}
