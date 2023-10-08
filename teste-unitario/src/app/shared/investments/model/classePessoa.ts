class Pessoa{
    nome: string;
    cpf: string;
    idade: number;

    constructor(nome: string, cpf: string, idade: number){
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
    }

}

const pessoa = new Pessoa('João', '123.456.789-00', 25);
console.log(pessoa.nome);
console.log(pessoa.cpf);
console.log(pessoa.idade);
