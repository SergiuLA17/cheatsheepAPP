import { Test, TestingModule } from '@nestjs/testing';
import { KubernatesService } from './kubernates.service';

describe('KubernatesService', () => {
  let service: KubernatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KubernatesService],
    }).compile();

    service = module.get<KubernatesService>(KubernatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
