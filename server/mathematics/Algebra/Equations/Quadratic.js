//ax^2+bx+c=0

const Quadratic = (equation) => {
  let match = equation.replace(/\s/g, '');

  match = match.match(/^(-?\d*)x\^2([+-]?\d*)x([+-]?\d*)=([+-]?\d*)$/);

  if (!match) {
    throw new Error('invalid equation');
  }

  // a
  const coefficient1 = match[1] ? parseInt(match[1]) : 1;

  // b
  let coefficient2 = match[2] && !isNaN(match[2]) ? parseInt(match[2]) : 1;

  if(match[2] === '-') {
    coefficient2 = -1;
  }

  // c
  let coefficient3 = match[3] ? parseInt(match[3]) : 0;

  // constant
  const constant = parseInt(match[4]);

  //console.log(coefficient1, coefficient2, coefficient3, constant);

  const constant_sum = (-1 * constant)+(coefficient3);

  const squareroot = (coefficient2*coefficient2)-(4*coefficient1*constant_sum)

  if(squareroot < 0) {
    return {
        result: 'No tiene solución real',
        procedimiento: 'No tiene solución real'
    }
  }

  const x1 = ((-1 * coefficient2)+(Math.sqrt(squareroot)))/(2*coefficient1) 
  const x2 = ((-1 * coefficient2)-(Math.sqrt(squareroot)))/(2*coefficient1) 

  const result = 
    `
    x1 = ${x1}
    <hr/><br/>
    x2 = ${x2}
    `
  
  if(constant === 0){
    const procedimiento =
    `
    ${equation}
    <hr/><br/>
    Usar la formula general
    <br/><br/>
    -b±√b^2-4ac/2a
    <br/><br/>
    Sustituir los valores
    <br/><br/>
    a=${coefficient1}, b=${coefficient2}, c=${coefficient3}
    br/><br/>
    ${coefficient2}±√${coefficient2}^2-4${coefficient1}${coefficient3}/2${coefficient1}
    <hr/><br/>
    Resolver la raiz cuadrada
    <br/><br/>
    √${coefficient2}^2-4${coefficient1}${coefficient3} = √${squareroot}
    <hr/><br/>
    Soluciones
    <br/><br/>
    x1 = ${coefficient2}+√${squareroot}/${2*coefficient1} 
    <br/><br/>
    x2=${coefficient2}-√${squareroot}/${2*coefficient1}
    <br/><br/>
    x1 = ${x1} x2=${x2}
    `
    return {
        result: result,
        procedimiento: procedimiento
      }
  }
  else{
    const procedimiento = `${equation}
    <hr/><br/>
    Pasar la constante ${constant} al otro lado de la ecuación y sumarla con el coeficiente ${coefficient3}
    ${coefficient1}x^2${1*coefficient2}x${coefficient3}${-1*constant} = 0
    <br/><br/>
    ${coefficient1}x^2${coefficient2}x${constant_sum} = 0
    <hr/><br/>
    Usar la formula general
    <br/><br/>
    -b±√b^2-4ac/2a
    <br/><br/>
    Sustituir los valores
    <br/><br/>
    a=${coefficient1}, b=${coefficient2}, c=${coefficient3}
    br/><br/>
    ${coefficient2}±√${coefficient2}^2-4${coefficient1}${coefficient3}/2${coefficient1}
    <hr/><br/>
    Resolver la raiz cuadrada
    <br/><br/>
    √${coefficient2}^2-4${coefficient1}${coefficient3} = √${squareroot}
    <hr/><br/>
    Soluciones
    <br/><br/>
    x1 = ${coefficient2}+√${squareroot}/${2*coefficient1} 
    <br/><br/>
    x2=${coefficient2}-√${squareroot}/${2*coefficient1}
    <br/><br/>
    x1 = ${x1} x2=${x2}
    
  `
  return {
    result: result,
    procedimiento: procedimiento
  }
  }

};

module.exports = Quadratic;