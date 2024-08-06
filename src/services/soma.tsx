export const soma = (num: number): number => {
    return num + 1;
}

export const multiplica = (num: number): number => {
    return num * 2;
}

export const multiplicaPorDois = (numUm: number, numDois: number): number => {
    return numUm * numDois;
}

export const multiplicaTres = (num: number, numDois: number): number | string => {
    if (numDois != 3) {
        return 'Multiplicador não aceito';
    }

    return num * numDois;
}