function minhaFuncao1() {
    $('.btn').css({
        color: 'red',
        backgroundColor: 'gray'
    })
}

function minhaFuncao2() {
    $('#area-mensagem').empty();

    var alunos = ["aluno 1", "aluno 2", 'aluno 3'];

    $.each(alunos, function(index, value) {
        $("#area-mensagem").append(value);
    });
}