import random

# Algebra Section

#-Algebra level 1

def writeAlgebraEquation1(cst1, cst2, operation, xValue):

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

cst1_1 = random.randint(-20, 20)
cst2_1 = random.randint(-20, 20)
operation_1 = random.randint(1,2)
xValue_1 = random.randint(-20, 20)
equation_1 = ""
userInput_1 = ""
score = 0
print(writeAlgebraEquation1(cst1_1, cst2_1, operation_1, xValue_1))

if (userInput_1 == equation_1):
    score += 1


#-Algebra level 2

def writeAlgebraEquation2(cst1, cst2, cst3):

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



cst1_2 = random.randint(-20, 20)
cst2_2 = random.randint(-20, 20)
cst3_2 = random.randint(-20, 20)
equation_2 = ""
userInput_2 = ""

print(writeAlgebraEquation2(cst1_2, cst2_2, cst3_2))


