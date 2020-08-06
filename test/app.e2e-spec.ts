import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Product } from '../src/product/product';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', async () => {

    let res = await  request(app.getHttpServer())
      .post('/product')
      .send(new Product())

    console.log(res)

    res = await  request(app.getHttpServer())
      .get('/product/1')

    console.log("+2",res)

  });
});
