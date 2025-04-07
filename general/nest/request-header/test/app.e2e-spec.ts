import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/whoami (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/whoami')
      .set('user-agent', 'Mozilla/5.0 (X11; Linux x86_64)')
      .set('accept-language', 'en-US')
      .expect(200)
      .expect({
        ipaddress: '::ffff:127.0.0.1',
        language: 'en-US',
        software: 'Mozilla/5.0 (X11; Linux x86_64)',
      });
  });
});
