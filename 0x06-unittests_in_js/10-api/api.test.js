const request = require('request');
const { it, describe } = require('mocha');
const { expect } = require('chai');

describe('index page', () => {
  const options = {
    url: 'http://localhost:7865/',
    method: 'GET',
  };
  it('checks correct status code', () => new Promise((done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  }));
  it('checks correct content', () => new Promise((done) => {
    request(options, (err, res, body) => {
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  }));
  it('checks content length', () => new Promise((done) => {
    request(options, (err, res, body) => {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  }));
  it('checks statusMessage', () => new Promise((done) => {
    request(options, (err, res, body) => {
      expect(res.statusMessage).to.equals('OK');
      done();
    });
  }));
});
describe('cart page', () => {
  it('checks statuscode when id is int', () => new Promise((done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  }));
  it('checks body is correct', () => new Promise((done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(body).to.contain('Payment methods for cart 12');
      done();
    });
  }));
  it('checks statuscode when id is str', () => new Promise((done) => {
    request('http://localhost:7865/cart/number', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  }));
});
describe('payment page', () => {
  it('checks statusCode is correct', () => new Promise((done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  }));
  it('checks the content', () => new Promise((done) => {
    const option = { json: true };
    request('http://localhost:7865/available_payments', option, (err, res, body) => {
      const payLoad = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(body).to.deep.equal(payLoad);
      done();
    });
  }));
});
describe('login', () => {
  it("check correct status code for request that's sent properly", () => new Promise((done) => {
    const opt = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'JOE',
      },
    };
    request.post(opt, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  }));
  it("check correct content for request that's sent properly", () => new Promise((done) => {
    const opts = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'JOE',
      },
    };
    request.post(opts, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.contain('Welcome JOE');
      }
      done();
    });
  }));
  it("check correct status code for request that's not sent properly", () => new Promise((done) => {
    const op = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        usame: 'JOE',
      },
    };
    request.post(op, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  }));
});
