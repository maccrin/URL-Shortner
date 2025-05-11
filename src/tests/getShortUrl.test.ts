import request from 'supertest';
import app from '../app.ts';
 
const url='https://example.com' 
describe('post/shortUrl',()=>{
it('responds with json', async()=>{
const response=await request(app)
.post(`/${process.env.API_PATH}/getShort`)
.send(url)
.set('Accept','application/json')
.set('content-type','application/json')
expect(response.headers["content-type"]).toMatch(/json/);
expect(response.status).toEqual(201);
expect( response.body.shortUrl).toBeDefined()
expect( response.body.shortId).toBeDefined()
})

})

export {url}