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
test('lo que yo quiera',async()=>{
const response = await api.post('/api').send({
    "specie": "Hola",
    "abonated": "2023-09-03",
    "trasplanted": "2021-01-01",
    "notes": "pino pequenio",
    "images": "https://www.aragon.es/-/arbol-singular-pino-del-escobon"
})

expect(typeof response.body).toBe('object');
expect(response.status).toBe(201)}
);
});

