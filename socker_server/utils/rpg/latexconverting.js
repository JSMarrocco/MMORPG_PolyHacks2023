function tolatex(raw) {


    let latexproblemgeneration = raw;
    
    latexproblemgeneration = latexproblemgeneration.replace(/\(/g,"{(");
    latexproblemgeneration = latexproblemgeneration.replace(/\)/g,")}");
    
    if (latexproblemgeneration.search("/") == -1 ) { 
    //    console.log("Does not conta/in division" ); 
    } else {
        latexproblemgeneration = "\\frac" + latexproblemgeneration.replace("/","");

    }

    latexproblemgeneration = "\\frac{d}{dx}( " + latexproblemgeneration+")"
    // console.log(latexproblemgeneration) 

    return latexproblemgeneration

}

module.exports = {tolatex}