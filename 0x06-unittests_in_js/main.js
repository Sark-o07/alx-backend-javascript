const assert = require('assert');
const { it, describe } = require('mocha');
const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
    let consoleSpy;
    consoleSpy = sinon.spy(console, 'log');
    // beforeEach(() => {
    //     consoleSpy = sinon.spy(console, 'log');
    // });
    // afterEach(() => {
    //     consoleSpy.restore()
    // });
    it('Verify that the console is logging the string The total is: 120', function() {
        sendPaymentRequestToApi(100, 20);
        assert(consoleSpy.withArgs("The total is: 120").calledOnce);
    });
    it('Verify that the console is logging the string The total is: 20', () => {
        sendPaymentRequestToApi(10,10);
        assert(consoleSpy.withArgs('The total is: 20').calledOnce);
    })
})
