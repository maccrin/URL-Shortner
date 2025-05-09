import request from 'supertest';
import app from '../app.ts';

describe('post/shortUrl',()=>{
it('responds with json', async()=>{
const response=await request(app)
.post(`/${process.env.API_PATH}/getShort`)
.send({ url: 'https://example.com' })
.set('Accept','application/json')
expect(response.headers["content-type"]).toMatch(/json/);
expect(response.status).toEqual(201);
expect( response.body.shortUrl).toBeDefined()
expect( response.body.shortId).toBeDefined()
})

})