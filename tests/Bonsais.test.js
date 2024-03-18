import request from 'supertest'
import app from  '../app'


const api = request(app);

describe('Testing CRUD Bonsais',()=>{

test('aqui pones lo que quieres testear para ti', async()=>{
const response = await api.get('/api');
expect(Array.isArray(response.body)).toBe(true);
expect(response.status).toBe(200);
});

//test post//
test('Post response should be an object and return status 201', async ()=> {
    const response = await api.post('/api').send({
        specie: "test",
        abonated: "2020-02-02",
        trasplanted: "2020-02-02",
        notes: "test",
        images: "https://damiandeluca.com"
    });

    expect(typeof response.body).toBe('object');
    expect(response.status).toBe(201);
})

})

