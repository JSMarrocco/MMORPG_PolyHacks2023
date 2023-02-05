export function questionquery(): string {

    function outerfunctionfunc(difficultyrating: number): string {

        const rdfunctions = Math.floor(Math.random() * 10);

        let function1: string;
        function1 = ""

        if (rdfunctions === 0) {


            let exponentval = Math.floor(Math.random() * 4) + 2;
            if (Math.random() >= 0.5) {
                exponentval = exponentval * -1;
            }

            let insidefunction: string;
            if (Math.random() < 1 / difficultyrating) {
                insidefunction = insidefunctionfunc();
            } else {
                insidefunction = "x";
            }

            function1 = "(" + insidefunction + ")^(" + exponentval+")";

        } else if (rdfunctions === 1) {

            let insidefunction: string;
            if (Math.random() < 1 / difficultyrating) {
                insidefunction = insidefunctionfunc();
            } else {
                insidefunction = "x";
            }

            function1 = "sin(" + insidefunction + ")";

        } else if (rdfunctions === 2) {


            let insidefunction: string;
            if (Math.random() < 1 / difficultyrating) {
                insidefunction = insidefunctionfunc();
            } else {
                insidefunction = "x";
            }

            function1 = "cos(" + insidefunction + ")";

        } else if (rdfunctions === 3) {


            let insidefunction: string;
            if (Math.random() < 1 / difficultyrating) {
                insidefunction = insidefunctionfunc();
            } else {
                insidefunction = "x";
            }

            function1 = "tan(" + insidefunction + ")";

        } else if (rdfunctions === 4) {

            let insidefunction: string;
            if (Math.random() < 1 / difficultyrating) {
                insidefunction = insidefunctionfunc();
            } else {
                insidefunction = "x";
            }

            function1 = "ln(" + insidefunction + ")";

        } else if (rdfunctions === 5) {


            let insidefunction: string;
            if (Math.random() < 1 / difficultyrating) {
                insidefunction = insidefunctionfunc();
            } else {
                insidefunction = "x";
            }

            function1 = "e^(" + insidefunction + ")";

        } else if (rdfunctions === 6) {


            const baseval = Math.floor(Math.random() * 8) + 2;
            let insidefunction: string;
            if (Math.random() < 1 / difficultyrating) {
                insidefunction = insidefunctionfunc();
            } else {
                insidefunction = "x";
            }

            function1 = baseval + "^(" + insidefunction + ")";

        } else if (rdfunctions === 7) {


            const baseval = Math.floor(Math.random() * 9) + 2;
            let insidefunction: string;
            if (Math.random() < 1 / difficultyrating) {
                insidefunction = insidefunctionfunc();
            } else {
                insidefunction = "x";
            }

            function1 = "log" + baseval + "(" + insidefunction + ")";



        } else if (rdfunctions === 8) {
            let cstval = Math.floor(Math.random() * 7) + 2;
            let cststr = "";
            if (Math.random() >= 0.5) {
                cstval = cstval * -1;
                cststr = cstval.toString();
            } else {
                cststr = "+" + cstval.toString();
            }
            function1 = "(x" + cststr + ")";

        } else if (rdfunctions >= 9) {
            function1 = "(x)";

        }
        if (Math.floor(Math.random() * 3) !== 1) {
            let constant = (Math.floor(Math.random() * 10) + 2).toString();
            function1 = constant + "*" + function1;
        }

        return function1;
    }


    function insidefunctionfunc(): string {
        let varrdfunctions = Math.floor(Math.random() * 10);
        let function1 = '';

        if (varrdfunctions === 0) {
            let exponentval = Math.floor(Math.random() * 4) + 2;
            if (Math.floor(Math.random() * 2) === 1) {
                exponentval *= -1;
            }

            function1 = "(x)^(" + exponentval+")";
        } else if (varrdfunctions === 1) {
            function1 = 'sin(x)';
        } else if (varrdfunctions === 2) {
            function1 = 'cos(x)';
        } else if (varrdfunctions === 3) {
            function1 = 'tan(x)';
        } else if (varrdfunctions === 4) {
            function1 = 'ln(x)';
        } else if (varrdfunctions === 5) {
            function1 = 'e^(x)';
        } else if (varrdfunctions === 6) {
            let baseval = Math.floor(Math.random() * 8) + 2;

            function1 = `${baseval}^(x)`;

        } else if (varrdfunctions === 7) {
            let baseval = Math.floor(Math.random() * 9) + 2;

            function1 = `log${baseval}(x)`;
        } else if (varrdfunctions >= 8) {
            let cstval = Math.floor(Math.random() * 4) + 2;
            let cststr = '';

            if (Math.floor(Math.random() * 2) === 1) {
                cstval *= -1;
                cststr = `${cstval}`;
            } else {
                cststr = `+${cstval}`;
            }

            function1 = `(x+${cstval})`;
            console.log("test");

        }

        if (Math.floor(Math.random() * 3) !== 1) {
            let constant = `${Math.floor(Math.random() * 10) + 2}`;
            function1 = `${constant}*${function1}`;
        }

        return function1;
    }

    let difficultyrating = Math.floor(Math.random() * 4) + 1;

    let operations = ["+", "*", "-", "/"];
    let generatedproblem = "";

    if (Math.random() < 1 / (Math.floor(Math.random() * 4) + 1)) {
        generatedproblem = "(" + outerfunctionfunc(Math.floor(Math.random() * 4) + 1) + ")" + operations[Math.floor(Math.random() * 4)] + "(" + outerfunctionfunc(Math.floor(Math.random() * 4) + 1) + ")";
    } else { 
        generatedproblem = outerfunctionfunc(difficultyrating);
    } 

    console.log(generatedproblem) 
    let latexproblemgeneration = generatedproblem;
    generatedproblem = generatedproblem.replace(/\(/g,"{(");
    generatedproblem = generatedproblem.replace(/\)/g,")}");
    
    if (generatedproblem.search("/") == -1 ) { 
       console.log("Does not contain division" ); 
    } else {
        generatedproblem = "\\frac" + generatedproblem.replace("/","");

    }

    generatedproblem = "\\frac{d}{dx} " + generatedproblem
    console.log(generatedproblem) 
    return generatedproblem;

}