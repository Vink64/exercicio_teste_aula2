const math = require('../math');

test('soma 28 + 36 igual a 64', ()=>{
    expect(math.add(28,36)).toBe(64);
});