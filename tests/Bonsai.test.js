import request from 'supertest';
import app from '../app.js'

const api = request(app); //request nos permite hacer solicitudes a la app

describe('Testing CRUD bonsais', ()=> {

    test('Response body must be an array and then show 200 status', async() =>{
    const response = await api.get('/api');//despues de hacer la petición get...
    expect(Array.isArray(response.body)).toBe(true); //qué ojeto quiero recibir ; modificar
    expect(response.status).toBe(200);//código de respuesta http que esperamos
    });

    test('Post response should be an object and return status 201', async ()=> {
        const response = await api.post('/api').send({
            "specie": "test",
            "abonated": "2020-02-02",
            "trasplanted": "2020-02-02",
            "notes": "test",
            "images": "https://damiandeluca.com"
        });
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(201);
    })
})

