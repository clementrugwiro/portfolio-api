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

let accessToken;
let refreshToken;

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

  const article = {
    title: "html and css",
    content: "Sunset is the time of day when our sky meets the outer space solar winds.There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. There is a coolness, a calmness, when the sun does set."
  }
  const articletitle = {
    title: "",
    content: "Sunset is the time of day when our sky meets the outer space solar winds.There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. There is a coolness, a calmness, when the sun does set."
  }
  const articlecontent = {
    title: "html and css",
    content: ""
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
    it('should not signup for email already used', (done) => {        
        chai.request(app)
            .post('/api/add-users')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400)
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
    it('should create a new  article', (done) => {
        chai.request(app)
            .post('/api/add-articles')
            .send(article)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
         done();
        });

    });

    it('should not create an article without loging in', (done) => {
        chai.request(app)
            .post('/api/add-articles')
            .send(article)
            .end((err, res) => {
                res.should.have.status(403)
                // res.body.should.be.a("you need to log in")
         done();
        });

    });
    it('should not create an article without content', (done) => {
        chai.request(app)
            .post('/api/add-articles')
            .set({ 'Authorization': `Bearer ${accessToken}` })
            .send(articlecontent)
            .end((err, res) => {
                res.should.have.status(400)
                res.body.should.be.a('object')
         done();
        });

    });
})

