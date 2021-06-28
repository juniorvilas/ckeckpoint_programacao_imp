/* Checkpoint - Programação Imperativa */
/* Aluno: Carlindo Silva Queiroz Junior - Turma:04 */
/* 28/06/2021 */
/* Usar Function, Switch, if */

function conferir (tempoComida, tempoInserido){

    if(tempoInserido < tempoComida){
        console.log("Tempo insuficiente!")
    }
    else if (tempoInserido >2*tempoComida && tempoInserido<=3*tempoComida) {
        console.log('A comida queimou!')
    }
    else if (tempoInserido >3*tempoComida){
        console.log('kabumm!')
    }
    else {
        console.log('Prato pronto, bom apetite!!') 
    }
}


function microondas(comida, tempoInserido){
    

    switch(comida){

        case 'pipoca':
            tempoComida= 10;
            conferir(tempoComida, tempoInserido)
            break;
        
        case 'macarrão':
            tempoComida = 8;
            conferir(tempoComida, tempoInserido)
            break;

        case 'carne':
            tempoComida=15;
            conferir(tempoComida, tempoInserido)
            break;
            
        case 'feijão':
            tempoComida=12;
            conferir(tempoComida, tempoInserido)
            break;    

        case 'brigadeiro':
            tempoComida=8;
            conferir(tempoComida, tempoInserido)
            break;
            
        default:
            console.log('Prato inexistente!')    



    }
}


microondas('pipoca', 16);
microondas('macarrão', 17);
microondas('carne', 46);
microondas('feijão', 11);
microondas('brigadeiro', 8);
microondas('acarajé', 16);