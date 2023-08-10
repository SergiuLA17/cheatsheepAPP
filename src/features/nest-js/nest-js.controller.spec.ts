import { Test, TestingModule } from '@nestjs/testing';
import { NestJsController } from './nest-js.controller';

describe('NestJsController', () => {
  let controller: NestJsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NestJsController],
    }).compile();

    controller = module.get<NestJsController>(NestJsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
