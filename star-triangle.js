function solution(n) {
    let result = "";

    for (let i = 0; i <=n; i++) {
       // generate spaces here... // 
      
       result = result + generateSpace(i);
       result = result + "\n";  
    }
    return result;
}
//////////////////////////////////////////////////////
    // od hevleh 
function generateStars(numberOfStars) {
    let stars = "";
    
    for (let i = 0; i < numberOfStars; i++) {   
        stars = stars + "* "; 
    } return stars;
}


//////////////////////////////////////////////////////
function generateSpace(numberOfSpace) {
    let space = " ";
    for (let i = numberOfSpace; i > -1; i--) {
       space = space + " *"
       
    } return space;
}

////////////////////////////////////////////////////
// function starTriangle (n) {
//     let result = "";

//     for (let i = 0; i < n; i++) {
//         result = result + generateStars(i)
//         result
    
//     } return result;
// }





