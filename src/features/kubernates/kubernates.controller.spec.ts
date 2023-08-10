import { Test, TestingModule } from '@nestjs/testing';
import { KubernatesController } from './kubernates.controller';

describe('KubernatesController', () => {
  let controller: KubernatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KubernatesController],
    }).compile();

    controller = module.get<KubernatesController>(KubernatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
