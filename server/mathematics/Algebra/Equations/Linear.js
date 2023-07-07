//a+bx=c

    const Linear = (ecuacion) => {
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
        const procedimiento = `${ecuacion}
        <hr/><br/>
        Dividir los dos lados entre ${coeficiente1} 
        <br/><br/>
        ${coeficiente1}x/${coeficiente1} = ${constante}/${coeficiente1}
        <hr/><br/>
        x = ${result}
        <hr/>`
        
        return {
            result: result,
            procedimiento: procedimiento
        };
    }

    const resultPaso1 = (constante - (coeficiente1)) 
    
    const result = resultPaso1 / (coeficiente2);

    const procedimiento = `${ecuacion}
        <hr/><br/>
        Pasar el coeficiente ${coeficiente1} de x al otro lado de la ecuación
        <br/><br/>
        x = ${constante}${-1*coeficiente1}
        <br/><br/>
        x = ${resultPaso1}
        <hr/><br/>
        Dividir los dos lados entre ${coeficiente2} 
        <br/><br/>
        x/${coeficiente2} = ${resultPaso1}/${coeficiente2}
        <hr/><br/>
        x = ${result}
        <hr/>`

    return {
        result: result,
        procedimiento: procedimiento
    };

}

module.exports = Linear;

//console.log(Linear('4 +4x = 8'));

//console.log(Linear('3-9x=90'));

//console.log(Linear('3 -3x = 9'));

//console.log(Linear('20 + 3x = 0'));

//console.log(Linear('-3x = 9'));