const expect = require('chai').expect,
  index = require('..');

describe('index', () => {
  it('should say ok', () => {
    expect(index()).to.equal('ok');
  });
});