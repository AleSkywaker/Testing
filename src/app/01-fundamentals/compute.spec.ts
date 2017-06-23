// describe()  suite is a group of related test
// it()  define a test o spec

import { compute } from './compute';

describe('compute', ()=>{
    it('deberia devolver 0 si el input es negativo', ()=>{
        const result = compute(-1);
        expect(result).toBe(0);
    })
    it('deberia sumar 1 si el numero es positivo', ()=>{
        const result = compute(1);
        expect(result).toBe(2);
    })
})

