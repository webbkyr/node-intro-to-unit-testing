'use strict';

const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer')
;
describe('fizzbuzzer', function(){
  
  it('should throw an error for NaN', function(){
    const badInput = [
      {num:'2'},
      {num: 'function'},
      {num: true}
    ];
    badInput.forEach(input => { 
      (function() {
        fizzBuzzer(input.num);
      }).should.throw(Error);
    });

  });
  it('should return fizzbuzz if divisble by 15', function(){
    const normalCases = [
      {num: 30, expected: 'fizz-buzz'},
      {num: 45, expected: 'fizz-buzz'},
      {num: 60, expected: 'fizz-buzz'}
    ];
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);

    });

  });
  it('should return buzz if divisible by 5', function(){
    const normalCases = [
      {num: 5, expected: 'buzz'},
      {num: 10, expected: 'buzz'},
      {num: 20, expected: 'buzz'}
    ];
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });


  it('should return fizz if divisible by 3', function() {
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 9, expected: 'fizz'},
      {num: 12, expected: 'fizz'}
    ];
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });
  it('should log the num if not divisble by 15, 5, or 3', function() {
    const normalCases = [
      {num: 1, expected: 1},
      {num: 14, expected: 14},
      {num: 29, expected: 29}
    ];
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });
});