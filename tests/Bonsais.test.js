import request from 'supertest'
import app from  '../app'


const api = request(app);

describe('Testing CRUD Bonsais',()=>{

test('should return status 201 and response should be an object', async()=>{
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

test('should return status 200 and response should be an object', async () => {
    // Supongamos que tienes un identificador de un recurso existente en tu base de datos
    const resourceId = '3';

    // Realiza la solicitud DELETE a la ruta correspondiente con el identificador del recurso
    const response = await api.delete(`/api/${resourceId}`);

    // Verifica que la respuesta tenga el código de estado 200 (OK)
    expect(response.status).toBe(200);

   
})
