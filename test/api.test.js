const request = require('supertest');
const app = require('../app');

//Testing getAll Usuarios 
describe("Get /usuarios", () =>{
    it('un json con un status y una lista de todos los usuarios', done => {
        request(app)
            .get('/usuarios')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe("Get /usuarios/:id", () =>{
    it('un json con un status y un solo usuario', done => {
        request(app)
            .get('/usuarios/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe("POST /usuarios/", () =>{
    it('un json con un status y un string', done => {
        const usuario = { 
            nombre : 'david', 
            apellido : 'marcolin', 
            email : 'marcolindavid@gmail.com', 
            fechaNacimiento : '10/10/10', 
            contrasenia : 'asd123' 
        }
        request(app)
            .post('/usuarios/')
            .send(usuario)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
