import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findOne(userId: any) {
    throw new Error('Method not implemented.');
  }
  private readonly users: any[] = [];

  create(data: any) {
    this.users.push(data);
  }
  findData(): any[] {
    return this.users
  }
}

