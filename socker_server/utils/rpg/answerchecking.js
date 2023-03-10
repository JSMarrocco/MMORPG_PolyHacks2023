
// import fetch from 'node-fetch';
const fetch = require('node-fetch')

function  answerverify(initialQuestion,playerAnswer) {

    return new Promise(async (resolve, reject) => {
        
        let generatedProblemForQuery = initialQuestion;
        
        generatedProblemForQuery = generatedProblemForQuery.replace("+", "%2B");
        generatedProblemForQuery = generatedProblemForQuery.replace("/", "%2F");
        //console.log(generatedProblemForQuery);
        
        playerAnswer = playerAnswer.replace(/\+/, "%2B");
        playerAnswer = playerAnswer.replace(/\//, "%2F");
        let outputval = 0
        let cors_proxy = ""
        let linkquery = ("https://api.wolframalpha.com/v2/query?input=(d%2Fdx("+ generatedProblemForQuery+"))-("+ playerAnswer +")+%3D+&format=plaintext&output=JSON&appid=EXT64T-L7E4RRLVXT");
        //console.log(cors_proxy+linkquery);
        let response = await fetch(cors_proxy+linkquery)
        // console.log(response    )
        let verification = await response.json()
        // console.log("[DEBUG Verification]: ", verification)
        try{
            let answer = verification.queryresult.pods[1].subpods[0].plaintext;
            // console.log(answer)         
        
            if (answer == 0){
                //console.log("Correct")
                outputval = 1
                
            } else {
                //console.log("False")
                outputval = 0
            }
        } catch {
            
        }
        resolve(outputval);
        
    });


}



module.exports = {answerverify}