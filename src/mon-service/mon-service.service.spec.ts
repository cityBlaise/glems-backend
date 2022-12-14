import { Test, TestingModule } from '@nestjs/testing';
import { MonServiceService } from './mon-service.service';

describe('MonServiceService', () => {
  let service: MonServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonServiceService],
    }).compile();

    service = module.get<MonServiceService>(MonServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
