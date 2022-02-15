process.env.NODE_ENV='test'
import request from "supertest"
import mongoose from "mongoose";
import User from "../models/user.js";
import chai from 'chai';
const should = chai.should()
const expect = chai.expect
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
import app from '../index.js';
const agent = request.agent(app)

/**
 * Connecting to server before 
 */

before(done => {
    app.on('appStarted', () => {
        done()
    })
})

const user = {
    firstname:'testname',
    lastname:'testnamee',
    username:'testuname',
    email: "mytestusser@email.com",
    pwd: "passcode"
  }

let loginsEmail = {
    email: "",
    pwd: "passcode"
  }

  let loginsPassword = {
    email: "mytestusser@email.com",
    pwd: ""
  }

  const login = {
    email: "mytestusser@email.com",
    pwd: "passcode"
  }

before((done) => { //Before each test we empty the database
    User.deleteMany({}, (err) => { 
       done();           
    });        
});



describe('it should signup and login', (done) => {
    it('should signup for user', (done) => {        
        chai.request(app)
            .post('/api/add-users')
            .send(user)
            .end((err, res) => {
                res.should.have.status(201)
                res.body.should.be.a('object')

         done();
        });
    });

    it('should not login without email', (done) => {
        chai.request(app)
            .post('/api/login')
            .send(loginsEmail)
            .end((err, res) => {
                res.should.have.status(400)
                res.body.should.be.a('object')
         done();
        });



    })
    it('should not login without password', (done) => {
        chai.request(app)
            .post('/api/login')
            .send(loginsPassword)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
         done();
        });
    })

   


    it('should login for registered user', (done) => {
        chai.request(app)
            .post('/api/login')
            .send(login)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
         done();
        });

    });
})
describe('it should create and get articles', (done) => {
    it('should get all articles', (done) => {        
        chai.request(app)
            .get('/api/aarticles')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')

         done();
        });
    });
})

