import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
describe('AppService', () => {
  let  userService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    userService = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });
});
