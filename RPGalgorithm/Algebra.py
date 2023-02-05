import random

# Algebra Section

#-Algebra level 1

def writeAlgebraEquation1(cst1, cst2, operation, xValue):
    equation = ""
    operationString = ""

    if (operation == 1):
        operationString = "+"
        cst3 = cst1 * xValue + cst2
    else:
        operationString = "-"
        cst3 = cst1 * xValue - cst2

    if (cst2 < 0 and operation == 1):
        operationString = "-"
        cst2 *= -1

    elif (cst2 < 0  and operation == 2):
        operationString = "+"
        cst2 *= -1


    
    equation = (str(cst1) + "x" + " " + operationString + " " + str(cst2) + " " + "=" + " " + str(cst3))

    return equation

cst1_1 = random.randint(-10, 10)
cst2_1 = random.randint(-10, 10)
operation_1 = random.randint(1,2)
xValue_1 = random.randint(-10, 10)
equation_1 = ""
userInput_1 = ""
score = 0

while(cst1_1 == 0 and cst2_1 == 0):
    cst1_1 = random.randint(-10, 10)
    cst2_1 = random.randint(-10, 10)

print(writeAlgebraEquation1(cst1_1, cst2_1, operation_1, xValue_1))

if (userInput_1 == xValue_1):
    score += 1

#-Algebra level 2

def writeAlgebraEquation3(cst1, cst2, cst3, xValue):

    equation = " "
    cst4 =  round(cst1/(cst2 * (xValue - cst3)))

    if (cst3 < 0):
        equation = str(cst1) + " " + "/" + " " + str(cst2) + "(" + "x" + " " + "+" + " " + str(cst3 * -1) + ")" + " " + "=" + " " + str(cst4)
    else:
        equation = str(cst1) + " " + "/" + " " + str(cst2) + "(" + "x" + " " + "-" + " " + str(cst3) + ")" + " " + "=" + " " + str(cst4)

    

    return equation


cst1_3 = random.randint(-10, 10)
cst2_3 = random.randint(-10, 10)
cst3_3 = random.randint(-10, 10)
xValue_2 = random.randint(-10, 10)
denominator = float(cst2_3 * (xValue_2 - cst3_3))
cst4_3 = 0
userInput_3 = 0

while (cst1_3 == 0 or denominator == 0 or float(cst4_3) != float(round(cst4_3)) or  cst4_3 == 0):
    cst1_3 = random.randint(-10, 10)
    cst2_3 = random.randint(-10, 10)
    cst3_3 = random.randint(-10, 10)
    xValue_2 = random.randint(-10, 10)
    denominator = float(cst2_3 * (xValue_2 - cst3_3))

    if (denominator > 0 or denominator < 0):
        cst4_3 = float(cst1_3/(cst2_3 * (xValue_2 - cst3_3)))

print(writeAlgebraEquation3(cst1_3, cst2_3, cst3_3, xValue_2))

if (userInput_3 == xValue_2):
    score += 1


#-Algebra level 3

def writeAlgebraEquation2(cst1, cst2, cst3):

    equation = ""
    cst2_2 = cst3 * cst1
    cst3_2 = cst2 * cst1
    cst2_3 = -cst2_2 - cst3_2

    if (cst2_3 > 0 and (cst2 * cst3 * cst1) > 0):
        equation = (str(cst1) + "x^2" +  " " + "+" + " " + str(cst2_3) + "x" + " "
        + "+" + " " + str(cst2 * cst3 * cst1) + " " + "=" + " " + "0")
    elif (cst2_3 > 0 and (cst2 * cst3 * cst1) < 0):
        equation = (str(cst1) + "x^2" +  " " + "+" + " " + str(cst2_3) + "x" + " "
        + "-" + " " + str(cst2 * cst3 * cst1 * -1) + " " + "=" + " " + "0")
    elif (cst2_3 < 0 and (cst2 * cst3 * cst1) < 0):
        equation = (str(cst1) + "x^2" +  " " + "-" + " " + str(cst2_3* -1) + "x" + " "
        + "-" + " " + str(cst2 * cst3 * cst1 * -1) + " " + "=" + " " + "0")
    else:
        equation = (str(cst1) + "x^2" +  " " + "-" + " " + str(cst2_3* -1) + "x" + " "
        + "+" + " " + str(cst2 * cst3 * cst1) + " " + "=" + " " + "0")

    
    return equation

if (userInput_1 == xValue_1):
    score += 1

cst1_2 = random.randint(-10, 10)
cst2_2 = random.randint(-10, 10)
cst3_2 = random.randint(-10, 10)
equation_2 = ""
userInput_2 = ""

while (cst1_2 == 0 or cst2_2 == 0 or cst3_2 == 0):
    cst1_2 = random.randint(-10, 10)
    cst2_2 = random.randint(-10, 10)
    cst3_2 = random.randint(-10, 10)

print(writeAlgebraEquation2(cst1_2, cst2_2, cst3_2))

if (userInput_1 == cst2_2, cst3_2):
    score += 1



