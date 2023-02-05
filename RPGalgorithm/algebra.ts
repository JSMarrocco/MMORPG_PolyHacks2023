//Lv 1
function writeAlgebraEquation1(cst1: number, cst2: number, operation: number, xValue: number): string {
    let operationString = '';
    
    let cst3 = 0;
    if (operation === 1) {
        operationString = '+';
        cst3 = cst1 * xValue + cst2;
    } else {
        operationString = '-';
        cst3 = cst1 * xValue - cst2;
    }
  
    if (cst2 < 0 && operation === 1) {
      operationString = '-';
      cst2 *= -1;
    } else if (cst2 < 0 && operation === 2) {
      operationString = '+';
      cst2 *= -1;
    }
  
    const equation = `${cst1}x ${operationString} ${cst2} = ${cst3}`;
  
    return equation;
  }
  
let cst1_1 = Math.floor(Math.random() * 31) - 15;
let cst2_1 = Math.floor(Math.random() * 31) - 15;
const operation_1 = Math.floor(Math.random() * 2) + 1;
const xValue_1 = Math.floor(Math.random() * 31) - 15;

while(cst1_1 === 0 && cst2_1 === 0){
    cst1_1 = Math.floor(Math.random() * 21) - 10;
    cst2_1 = Math.floor(Math.random() * 21) - 10;
  }
  
console.log(writeAlgebraEquation1(cst1_1, cst2_1, operation_1, xValue_1));

//Lv 2

function writeAlgebraEquation3(cst1: number, cst2: number, cst3: number, xValue: number): string {
    let equation = "";
    let cst4 =  Math.round(cst1/(cst2 * (xValue - cst3)));

    if (cst3 < 0) {
        equation = cst1 + " " + "/" + " " + cst2 + "(" + "x" + " " + "+" + " " + (cst3 * -1) + ")" + " " + "=" + " " + cst4;
    } else {
        equation = cst1 + " " + "/" + " " + cst2 + "(" + "x" + " " + "-" + " " + cst3 + ")" + " " + "=" + " " + cst4;
    }

    return equation;
}

let cst1_3 = Math.floor(Math.random() * 21) - 10;
let cst2_3 = Math.floor(Math.random() * 21) - 10;
let cst3_3 = Math.floor(Math.random() * 21) - 10;
let xValue_2 = Math.floor(Math.random() * 21) - 10;
let denominator = cst2_3 * (xValue_2 - cst3_3);
let cst4_3 = 0;
let userInput_3 = 0;

while (cst1_3 == 0 || denominator == 0 || cst4_3 % 1 !== 0 || cst4_3 == 0) {
    cst1_3 = Math.floor(Math.random() * 21) - 10;
    cst2_3 = Math.floor(Math.random() * 21) - 10;
    cst3_3 = Math.floor(Math.random() * 21) - 10;
    xValue_2 = Math.floor(Math.random() * 21) - 10;
    denominator = cst2_3 * (xValue_2 - cst3_3);

    if (denominator > 0 || denominator < 0) {
        cst4_3 = cst1_3 / (cst2_3 * (xValue_2 - cst3_3));
    }
}

console.log(writeAlgebraEquation3(cst1_3, cst2_3, cst3_3, xValue_2));

//Lv 3

function writeAlgebraEquation2(cst1: number, cst2: number, cst3: number): string {
    const cst2_2 = cst3 * cst1;
    const cst3_2 = cst2 * cst1;
    const cst2_3 = -cst2_2 - cst3_2;

    let equation = '';

    if (cst2_3 > 0 && cst2 * cst3 * cst1 > 0) {
        equation = `${cst1}x^2 + ${cst2_3}x + ${cst2 * cst3 * cst1} = 0`;
    } else if (cst2_3 > 0 && cst2 * cst3 * cst1 < 0) {
        equation = `${cst1}x^2 + ${cst2_3}x - ${Math.abs(cst2 * cst3 * cst1)} = 0`;
    } else if (cst2_3 < 0 && cst2 * cst3 * cst1 < 0) {
        equation = `${cst1}x^2 - ${Math.abs(cst2_3)}x - ${Math.abs(cst2 * cst3 * cst1)} = 0`;
    } else {
        equation = `${cst1}x^2 - ${Math.abs(cst2_3)}x + ${cst2 * cst3 * cst1} = 0`;
    }

    return equation;
}
  

  
let cst1_2 = Math.floor(Math.random() * 21) - 10;
let cst2_2 = Math.floor(Math.random() * 21) - 10;
let cst3_2 = Math.floor(Math.random() * 21) - 10;
let equation_2 = "";
let userInput_2 = "";

while (cst1_2 == 0 || cst2_2 == 0 || cst3_2 == 0) {
    cst1_2 = Math.floor(Math.random() * (10 - (-10) + 1) + (-10));
    cst2_2 = Math.floor(Math.random() * (10 - (-10) + 1) + (-10));
    cst3_2 = Math.floor(Math.random() * (10 - (-10) + 1) + (-10));
  }
  

console.log(writeAlgebraEquation2(cst1_2, cst2_2, cst3_2));

  