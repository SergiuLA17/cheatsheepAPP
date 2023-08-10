import { Test, TestingModule } from '@nestjs/testing';
import { NestJsService } from './nest-js.service';

describe('NestJsService', () => {
  let service: NestJsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestJsService],
    }).compile();

    service = module.get<NestJsService>(NestJsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
