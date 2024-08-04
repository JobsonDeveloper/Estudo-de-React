interface Icard {
    id: number
    nome: string
    idade: number
}

export const Card = ({ id, nome, idade }: Icard) => {
    return (
        <div>
            <h1>Nome: {nome}</h1>
            <p>Id: {id}</p>
            <p>Idade: {idade}</p>
        </div>
    )
}