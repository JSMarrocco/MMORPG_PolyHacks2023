export async function  answerverify() {

    let initialQuestion = "6^(5*sin(x))";
    let playerAnswer = "5 6^(5 sin(x)) cos(x) log(6)";
    
    let generatedProblemForQuery = initialQuestion;
    
    generatedProblemForQuery = generatedProblemForQuery.replace("+", "%2B");
    generatedProblemForQuery = generatedProblemForQuery.replace("/", "%2F");
    console.log(generatedProblemForQuery);
    
    playerAnswer = playerAnswer.replace(/\+/, "%2B");
    playerAnswer = playerAnswer.replace(/\//, "%2F");
    let cors_proxy = "https://cors-anywhere.herokuapp.com/";
    let linkquery = ("https://api.wolframalpha.com/v2/query?input=(d%2Fdx("+ generatedProblemForQuery+"))-("+ playerAnswer +")+%3D+&format=plaintext&output=JSON&appid=KJLJKK-TWYU7552V2");
    console.log(linkquery);
    let response = await fetch(cors_proxy+linkquery)
    let verification = await response.json()
    console.log(verification.queryresult.pods[1].subpods[0].plaintext);

    

    // let verifyResult = (verification.json() as any)
    // console.log(verifyResult);


}