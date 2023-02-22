const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;

const url = 'http://localhost:3000';

describe('Inserte el nombre y precio', ()=>{
    it('Esperamos un nombre y un precio', (done)=>{
        chai.request(url)
        .post('/api/v1/products')
        .send({name:'Monitor', price:2000})
        .end((err,res)=>{
            console.log(res.body);
            expect(res).to.have.status(200)
            done()
        })
    })
})


// const app = require('../index').app

// describe('Suite de pruebas e2e', ()=>{
//     it('esperamos un hola mundo', (done)=>{
//         chai.request(app)
//             .get('/')
//             .end((err,res)=>{
//                 console.log('A');
//                 chai.assert.equal(res.text, 'hola mundo')
//                 done()
//             })
//             console.log('B');
//     })
// })