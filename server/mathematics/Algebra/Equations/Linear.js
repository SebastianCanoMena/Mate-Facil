//a+bx=c

function Linear(ecuacion) {
    let  match = ecuacion.replace(/\s/g, '')
    
    match = match.match(/^(\-?\d+)?([+\-]\d+)?x=([+\-]?\d+)$/) 

    if(!match) {
        throw new Error('invalid equation');
    }

    //a
    const coeficiente1 = match[1] ? parseInt(match[1]) : 1;
    //b
    const coeficiente2 = match[2] ? parseInt(match[2]) : 0;
    //c
    const constante = parseInt(match[3]);

    if(coeficiente2 == 0){
        const result = constante / (coeficiente1);

        //procedimiento de la ecuacion bx = c
        console.log(`${ecuacion}
        \n Dividir los dos lados entre ${coeficiente1} 
        \n ${coeficiente1}x/${coeficiente1} = ${constante}/${coeficiente1}
        \n x = ${result}`)
        return result;
    }

    const resultPaso1 = (constante - (coeficiente1)) 
    
    const result = resultPaso1 / (coeficiente2);

    console.log(`${ecuacion}
    \n Pasar el coeficiente ${coeficiente1} de x al otro lado de la ecuación
    \n x = ${constante}${-1*coeficiente1}
    \n x = ${resultPaso1}
    \n Dividir los dos lados entre ${coeficiente2} 
    \n x/${coeficiente2} = ${resultPaso1}/${coeficiente2}
    \n x = ${result}`)

    return result;

}

//console.log(Linear('4 +4x = 8'));

//console.log(Linear('3-9x=90'));

//console.log(Linear('3 -3x = 9'));

console.log(Linear('20 + 3x = 0'));

//console.log(Linear('-3x = 9'));