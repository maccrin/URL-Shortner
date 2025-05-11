import request from 'supertest';
import app from '../app.ts';
import {url} from './getShortUrl.test.ts'
const shortId = 'abc123'; 

describe('redirect longurl' ,()=>{
    it('redirect to another page', (done)=>{
        const response= request(app)
        .get(`/${process.env.API_PATH}/${shortId}`)
        expect(301)
        expect('Location',url)
        .end((err:Error)=>{
            if(err) throw err
            done()
        })
    })
})