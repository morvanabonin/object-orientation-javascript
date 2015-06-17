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
        return nome;
    }

    this.getIdade = function () {
        return idade;
    }

    this.getCurso = function () {
        return curso;
    }

    this.mostraDados = function () {
        console.log("Nome do aluno: "+ this.nome + "\nIdade: " + this.idade + "\nCurso: " + this.curso);
    }
}

var aluno = new Aluno();
aluno.setNome("Sarah");
aluno.setIdade("25");
aluno.setCurso("Administração");
aluno.mostraDados();
