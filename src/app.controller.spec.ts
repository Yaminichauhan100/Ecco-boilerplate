import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service'
describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

// import { Test, TestingModule } from '@nestjs/testing';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// describe('AppController', () => {
//   let appController: AppController;
//   let appService: AppService;

//   beforeEach(async () => {
//     const app: TestingModule = await Test.createTestingModule({
//       controllers: [AppController],
//       //providers: [AppService],
//     }).compile();

//     appController = app.get<AppController>(AppController);
//    // appService= app.get<AppService>(AppService);
//   });

//   describe('root', () => {
//     // it('should return "Hello World!"', async () => {
//     //   const result = ''
//     //   jest.spyOn(appService, 'getHello').mockImplementation(() => result);
//     //   expect(await appController.getHello()).toBe(result);
//     });
//   });

