abstract class Pessoa {
    public nome: string;
    public cpf: string;
    public idade: number;

    constructor(nome: string, cpf: string, idade: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
    }

    //Métodos da classe
    exibirNome() {
        console.log(this.nome);
    }

    exibirCpf() {
        console.log(this.cpf);
    }

    exibirIdade() {
        console.log(this.idade);
    }

    protected abstract telefone: string;
    //Métodos abstratos
    protected abstract exibirTelefone(): string;
    public abstract exibirEndereco(): string;
}

class Anderson extends Pessoa {

    protected telefone: string = '123456789';

    constructor() {
        super( 'Anderson', '123456789', 30 );
    }

    public exibirEndereco(): string {
        return `Endereço: ${this.exibirEndereco}`;
    }

    public exibirTelefone() {
        return `Telefone: ${this.telefone}`;
    }
}

class Carlos extends Pessoa {
    
    protected telefone: string;
    protected profissao: string = "Amador";

    constructor() {
        super("Carlos", "987654321", 25);
    }

    public exibirEndereco() {
        return `Endereço: ${this.exibirEndereco}`;
    }
    protected exibirTelefone(): string {
        return `Telefone: ${this.telefone}`;
    }
}
