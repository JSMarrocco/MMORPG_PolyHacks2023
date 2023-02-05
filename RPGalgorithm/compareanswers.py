# 0 = derivatives, 1 = algebra
import requests

initialquestion = "6^(5*sin(x))"
playeranswer = "5 6^(5 sin(x)) cos(x) log(6)"

generatedproblemforquery = initialquestion

generatedproblemforquery = generatedproblemforquery.replace("+","%2B")
generatedproblemforquery = generatedproblemforquery.replace("/","%2F")
print(generatedproblemforquery)

userinput = ""

response = requests.get("https://newton.vercel.app/api/v2/derive/"+generatedproblemforquery)


playeranswer = playeranswer.replace("+","%2B")
playeranswer = playeranswer.replace("/","%2F")

answer = (str((response.json())['result']))
answer = answer.replace("+","%2B")
answer = answer.replace("/","%2F")




verify = requests.get("https://api.wolframalpha.com/v2/query?input=(d%2Fdx("+generatedproblemforquery+"))-("+playeranswer+")+%3D+&format=plaintext&output=JSON&appid=KJLJKK-TWYU7552V2")
print(verify)
verifyresult = str((verify.json())['queryresult']['pods'][1]['subpods'][0]['plaintext'])
print(verifyresult)

