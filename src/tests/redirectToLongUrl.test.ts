import request from 'supertest';
import app from '../app.ts';
import {url} from './getShortUrl.test.ts'

let shortId: string

beforeAll(async () => {
  const res = await request(app)
    .post(`/${process.env.API_PATH}/getShort`)
    .send({ url })
    .set('Accept', 'application/json')
  shortId = res.body.shortId
})

describe('redirect longurl' ,()=>{
    it('redirect to another page', async()=>{
        const response= await request(app)
        .get(`/${process.env.API_PATH}/${shortId}`)
        expect(response.status).toEqual(301)
        expect(response.headers.location).toBe(url)
        })
    })