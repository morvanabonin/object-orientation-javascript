function Aluno () {
    var nome;
    var idade;
    var curso;

    this.setNome = function (vNome) {
        this.nome = vNome;
    }

    this.setIdade = function (vIdade) {
        this.idade = vIdade;
    }

    this.setCurso = function (vCurso) {
        this.curso = vCurso;
    }

    this.getNome = function () {
        return this.nome;
    }

    this.getIdade = function () {
        return this.idade;
    }

    this.getCurso = function () {
        return this.curso;
    }

    this.mostraDados = function () {
        console.log("Nome do aluno: "+ this.nome + "\n Idade: " + this.idade + "\n Curso: " + this.curso);
    }
}

var aluno = new Aluno();
aluno.setNome("Marcos");
aluno.setIdade("25");
aluno.setCurso("Medicina");
aluno.mostraDados();