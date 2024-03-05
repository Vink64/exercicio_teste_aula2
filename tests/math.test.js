const { default: test } = require('node:test');
const math = require('../math');

test('soma 28 + 36 igual a 64', ()=>{
    expect(math.add(28,36)).toBe(64);
});

test('soma 77 + 33 igual a 110', ()=>{
    expect(math.add(77,33)).toBe(110);
});

test('soma 50 + 78 igual a 128', ()=>{
    expect(math.add(50,78)).toBe(128);
});

test('soma 21 + 20 igual a 41', ()=>{
    expect(math.add(21,20)).toBe(41);
});

test('soma 28 + 36 igual a 64', ()=>{
    expect(math.add(28,36)).toBe(64);
});

test('subtração 100 - 36 igual a 64', ()=>{
    expect(math.subtract(100,36)).toBe(64);
});

test('subtração 76 + 32 igual a 44', ()=>{
    expect(math.subtract(76,32)).toBe(44);
});

test('subtração 80 - 27 igual a 53', ()=>{
    expect(math.subtract(80,27)).toBe(53);
});

test('subtração  256 - 192 igual a 64', ()=>{
    expect(math.subtract(256,192)).toBe(64);
});

test('multiplicação 8 x 8 igual a 64', ()=>{
    expect(math.multiply(8,8)).toBe(64);
});

test('multiplicação 6 x 9 igual a 54', ()=>{
    expect(math.multiply(6,9)).toBe(54);
});

test('multiplicação 2 x 13 igual a 26', ()=>{
    expect(math.multiply(2,13)).toBe(26);
});

test('multiplicação 64 x 64 igual a 4096', ()=>{
    expect(math.multiply(64,64)).toBe(4096);
});

test('divisão 64 / 8 igual a 8', ()=>{
    expect(math.divide(64,8)).toBe(8);
});

test('divisão 32 / 4 igual a 8', ()=>{
    expect(math.divide(32,4)).toBe(8);
});

test('divisão 225 / 15 igual a 15', ()=>{
    expect(math.divide(225,15)).toBe(15);
});

test('divisão 126 / 3 igual a 42', ()=>{
    expect(math.divide(126,3)).toBe(42);
});