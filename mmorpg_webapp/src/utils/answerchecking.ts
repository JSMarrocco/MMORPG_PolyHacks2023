export async function  answerverify(initialQuestion: string,playerAnswer: string): {} {

    
    
    let generatedProblemForQuery = initialQuestion;
    
    generatedProblemForQuery = generatedProblemForQuery.replace("+", "%2B");
    generatedProblemForQuery = generatedProblemForQuery.replace("/", "%2F");
    console.log(generatedProblemForQuery);
    
    playerAnswer = playerAnswer.replace(/\+/, "%2B");
    playerAnswer = playerAnswer.replace(/\//, "%2F");
    let cors_proxy = ""
    let linkquery = ("https://api.wolframalpha.com/v2/query?input=(d%2Fdx("+ generatedProblemForQuery+"))-("+ playerAnswer +")+%3D+&format=plaintext&output=JSON&appid=EXT64T-L7E4RRLVXT");
    //console.log(cors_proxy+linkquery);
    let response = await fetch(cors_proxy+linkquery)
    //console.log(response)
    let verification = await response.json()
    //console.log(verification)
    let answer = verification.queryresult.pods[1].subpods[0].plaintext;
    //console.log(answer)
    let outputval = 0
    if (answer == 0){
        //console.log("Correct")
        outputval = 1
        
    } else {
        //console.log("False")
        outputval = 0
    }
    
    return outputval;


}

