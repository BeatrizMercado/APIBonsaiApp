import request from 'supertest';
import { app, server } from '../app';
import connection_db from '../database/connection_db';
import BonsaiModel from '../models/BonsaiModel';

const api = request(app);

describe('Testing CRUD bonsais', () => {
    
    describe('POST', ()=> {
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

    });

    describe('GET', ()=> {
        test('GET Response body must be an array and then show 200 status', async() =>{
            const response = await api.get('/api');
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.status).toBe(200);
        });
    })


    describe('PUT', () => {
        let createdBonsai = {};
        beforeEach(async ()=> {
            createdBonsai = await BonsaiModel.create({
                "specie": "test",
                "abonated": "2000-01-01",
                "trasplanted": "2000-01-01",
                "notes": "test",
                "images": "https://www.aragon.es/-/arbol-singular-pino-del-escobon"
            })
        })
        console.log(createdBonsai);

        afterAll(async()=> {
            await BonsaiModel.destroy({where: {id: createdBonsai.id}})
        })

        test('Put response should be an object and return status 201', async () => {
            const response = await api.put(`/api/${createdBonsai.id}`).send({
                "specie": "updated test",
                "abonated": "2000-01-01",
                "trasplanted": "2000-01-01",
                "notes": "updated test",
                "images": "https://www.aragon.es/-/arbol-singular-pino-del-escobon"
            });
            expect(typeof response.body).toBe('object');
            expect(response.status).toBe(201)
        })
    });

    describe('DELETE', ()=> {
        let createdBonsai = {};
        let response;
        beforeEach(async ()=> {
            createdBonsai = await BonsaiModel.create({
                "specie": "test",
                "abonated": "2000-01-01",
                "trasplanted": "2000-01-01",
                "notes": "test",
                "images": "https://www.aragon.es/-/arbol-singular-pino-del-escobon"
            })

            response = await api.delete(`/api/${createdBonsai.id}`).send();
        })

        test('Delete response should show 200 status', () =>{
            expect(response.status).toBe(200);
        });
    })

    afterAll( async () => {
       server.close();
       await connection_db.sync({force: true });
       console.log('All databases are clean')
    })
});