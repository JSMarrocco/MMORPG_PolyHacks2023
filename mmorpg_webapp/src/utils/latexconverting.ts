export function tolatex(raw: string): string {


    let latexproblemgeneration = raw;
    
    latexproblemgeneration = latexproblemgeneration.replace(/\(/g,"{(");
    latexproblemgeneration = latexproblemgeneration.replace(/\)/g,")}");
    
    if (latexproblemgeneration.search("/") == -1 ) { 
       console.log("Does not contain division" ); 
    } else {
        latexproblemgeneration = "\\frac" + latexproblemgeneration.replace("/","");

    }

    latexproblemgeneration = "\\frac{d}{dx}( " + latexproblemgeneration+")"
    console.log(latexproblemgeneration) 

    return latexproblemgeneration

}
