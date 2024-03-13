import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';

const api = request(app);

describe('Testing CRUD bonsais', () => {
    test('Post response should be an object and then return status 201', async() => {
        const response = await api.post('/api').send({
            "specie": "Hola",
            "abonated": "2023-09-03",
            "trasplanted": "2021-01-01",
            "notes": "pino pequenio",
            "images": "https://www.aragon.es/-/arbol-singular-pino-del-escobon"
        });

        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(201);
    })

    test('Response body must be an array and then show 200 status', async() =>{
        const response = await api.get('/api');
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.status).toBe(200);
    })
    afterAll( async () => {
       server.close();
       await connection_db.sync({force: true });
       console.log('All databases are clean')
    })
});