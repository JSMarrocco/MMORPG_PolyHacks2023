import requests
import random
## Wolfram query notation
#
# + in wolfram query is "%2B"
# - in wolfram query is "-"
# * in wolfram query is "*"
# / in wolfrma query is "%2F"
#
##

## Creating probability for problem

def insidefunctionfunc():
    

    varrdfunctions = random.randrange(8)

    function1  = ""

    if varrdfunctions == 0:

        exponentval = random.randrange(4)+2
        if random.randrange(1):
            exponentval*=-1
        
        function1 = "(x)^"+str(exponentval)

    elif varrdfunctions == 1:
        
        function1="sin(x)"

    elif varrdfunctions == 2:

        function1="cos(x)"

    elif varrdfunctions == 3:

        function1="tan(x)"

    elif varrdfunctions == 4:

        function1="ln(x)"

    elif varrdfunctions == 5:

        function1="e^(x)"

    elif varrdfunctions == 6:

        baseval = random.randrange(8)+2

        function1=str(baseval)+"^(x)"

    elif varrdfunctions == 7:

        baseval = random.randrange(9)+2

        function1="log"+str(baseval)+"(x)"

    if (random.randrange(3))!=1:
        constant = str(random.randrange(10)+2)
        function1 = constant+"*"+function1

    return function1

    

difficultyrating = 1
chainmultprobability = 1/difficultyrating

operations = ["+","*","-","/"]
generatedproblem = ""


rdfunctions = random.randrange(10)

firstoperation = operations[random.randrange(4)]

function1 = ""
function2 = ""

if rdfunctions == 0:

    exponentval = random.randrange(4)+2
    if random.randrange(1):
        exponentval*=-1
    
    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function1="("+insidefunction+")^"+str(exponentval)
        

    
elif rdfunctions == 1:
    
    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function1="sin("+insidefunction+")"

elif rdfunctions == 2:

    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function1="cos("+insidefunction+")"


elif rdfunctions == 3:

    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function1="tan("+insidefunction+")"


elif rdfunctions == 4:

    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function1="ln("+insidefunction+")"

elif rdfunctions == 5:


    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function1="e^("+insidefunction+")"


elif rdfunctions == 6:

    baseval = random.randrange(8)+2
    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function1=str(baseval)+"^("+insidefunction+")"

elif rdfunctions == 7:

    baseval = random.randrange(9)+2
    if (random.randrange(99)/100) < 1/difficultyrating:
        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function1="log"+str(baseval)+"("+insidefunction+")"
elif rdfunctions >= 8:

    function1="(x)"


if (random.randrange(3))!=1:
    constant = str(random.randrange(10)+2)
    function1 = constant+"*"+function1


rdfunctions = random.randrange(10)


if rdfunctions == 0:

    exponentval = random.randrange(4)+2
    if random.randrange(1):
        exponentval*=-1
    
    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function2="("+insidefunction+")^"+str(exponentval)
        

    
elif rdfunctions == 1:
    
    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function2="sin("+insidefunction+")"

elif rdfunctions == 2:

    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function2="cos("+insidefunction+")"


elif rdfunctions == 3:

    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function2="tan("+insidefunction+")"


elif rdfunctions == 4:

    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function2="ln("+insidefunction+")"

elif rdfunctions == 5:


    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function2="e^("+insidefunction+")"


elif rdfunctions == 6:

    baseval = random.randrange(8)+2
    if (random.randrange(99)/100) < 1/difficultyrating:

        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function2=str(baseval)+"^("+insidefunction+")"

elif rdfunctions == 7:

    baseval = random.randrange(9)+2
    if (random.randrange(99)/100) < 1/difficultyrating:
        insidefunction = insidefunctionfunc()

    else:

        insidefunction = "x"

    function2="log"+str(baseval)+"("+insidefunction+")"
elif rdfunctions >= 8:

    function2="x"

if (random.randrange(3))!=1:
    constant = str(random.randrange(10)+2)
    function1 = constant+"*"+function2

    
if (random.randrange(99)/100) < 1/difficultyrating:

    generatedproblem = "(" + function1 + ")" + operations[random.randrange(4)] + "(" + function2 + ")" 

else:

    generatedproblem = function1

print(generatedproblem)


