import { soma,  multiplica, multiplicaPorDois, multiplicaTres} from "./soma";

describe('soma', () =>{
    it('Deve somar 1 ao número informado', () => {
        const value = soma(1);
        expect(value).toBe(2);
    });

    it('Deve multiplica um número por dois', () => {
        const value = multiplica(2);
        expect(value).toBe(4);
    });
    
    it('Deve multiplicar o número por 3', () => {
        const value = multiplicaPorDois(2, 4);
        expect(value).toBe(8);
    });

    it('Deve informar um erro, com o multiplicador diferente de 3', () => {
        const value = multiplicaTres(2, 3);
        expect(value).toBe(6);
    })
});