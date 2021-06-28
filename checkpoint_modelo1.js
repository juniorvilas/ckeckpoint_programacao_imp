/* Checkpoint - Programação Imperativa */
/* Aluno: Carlindo Silva Queiroz Junior - Turma:04 */
/* 28/06/2021 */
/* Usar Function, Switch, if */


/*   1 - Pipoca – 10 segundos (padrão); */
function pipoca(tempo) {
    if  (tempo < 10) {
        console.log("tempo insuficiente");
    }

    else if (tempo == 10) {
        console.log("Prato pronto, bom apetite!!!");
    } 
    else if (tempo == 20) {
        console.log("comida queimou");
    }

    else if (tempo >= 30) {
        console.log("kabumm");
    }
    else {
        console.log("Prato inexistente");
    }
    
}

/* 2 - Macarrão – 8 segundos (padrão); */

function macarrao(tempo) {
    if  (tempo < 8) {
        console.log("tempo insuficiente");
    }

    else if (tempo == 8) { /* tempo 1x */
        console.log("Prato pronto, bom apetite!!!");
    } 
    else if (tempo == 16) { /* tempo 2x */
        console.log("comida queimou");
    }
    else if (tempo >= 24) { /* tempo 3x */
        console.log("kabumm");
    }
    else {
        console.log("Prato inexistente");
    }
    
}

/*  3 - Carne – 15 segundos (padrão); */

function carne(tempo) {
    if  (tempo < 15) {
        console.log("tempo insuficiente");
    }

    else if (tempo == 15) { /* tempo 1x */
        console.log("Prato pronto, bom apetite!!!");
    } 
    else if (tempo == 30) { /* tempo 2x */
        console.log("comida queimou");
    }
    else if (tempo >= 45) { /* tempo 3x */
        console.log("kabumm");
    }
    else {
        console.log("Prato inexistente");
    }
    
}

/* 4 - Feijão – 12 segundos (padrão) */
function feijao(tempo) {
    if  (tempo < 12) {
        console.log("tempo insuficiente");
    }

    else if (tempo == 12) { /* tempo 1x */
        console.log("Prato pronto, bom apetite!!!");
    } 
    else if (tempo == 24) { /* tempo 2x */
        console.log("comida queimou");
    }
    else if (tempo >= 36) { /* tempo 3x */
        console.log("kabumm");
    }
    else {
        console.log("Prato inexistente");
    }
    
}

/*     5 - Brigadeiro – 8 segundos (padrão); */
function brigadeiro(tempo) {
    if  (tempo < 8) {
        console.log("tempo insuficiente");
    }

    else if (tempo == 8) { /* tempo 1x */
        console.log("Prato pronto, bom apetite!!!");
    } 
    else if (tempo == 16) { /* tempo 2x */
        console.log("comida queimou");
    }
    else if (tempo >= 24) { /* tempo 3x */
        console.log("kabumm");
    }
    else {
        console.log("Prato inexistente");
    }
    
}
pipoca(9); /* Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";  */
pipoca(10); /* No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!" */
pipoca(20);/* Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou. */
pipoca(30); /* Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”; */
pipoca(); /* Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente"; */
/* macarrao(8); */ /* "Prato pronto, bom apetite!!!" */
/* carne(15); */ /* "Prato pronto, bom apetite!!!" */
/* feijao(12); */ /* "Prato pronto, bom apetite!!!" */
/* brigadeiro(8); */ /* "Prato pronto, bom apetite!!!" */

