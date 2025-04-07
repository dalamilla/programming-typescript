import { Test, TestingModule } from '@nestjs/testing';
import { WhoamiService } from './whoami.service';

describe('WhoamiService', () => {
  let service: WhoamiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhoamiService],
    }).compile();

    service = module.get<WhoamiService>(WhoamiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
