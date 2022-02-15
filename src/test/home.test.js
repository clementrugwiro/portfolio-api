import app from "../index.js";
import chai, { expect } from 'chai';
import chaiHttp from "chai-http";
import { describe, it } from 'mocha';


chai.use(chaiHttp);


describe("Phantom API test", () => {
  
    describe('/GET Welcome', () => {
            it('it should GET welcome', (done) => {   
                   chai.request(app) 
                        .get('/home')        
                        .end((err, res) => {
                            // expect(res.statusCode).to.equal(200);
                            expect(res.statusCode).to.equal(200)
                        // expect(res).to.be.a('object')
                            done();        
                        });
                }); 
        });
    })