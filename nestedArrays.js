// nested array of objects with more arrays inside of them

var myArray = [
    {
        "name": "John",
        "scores": [
            {
                "subject": "Math",
                "score": 80
            },
            {
                "subject": "English",
                "score": 90
            }
        ]
    },
    {
        "name": "Jane",
        "scores": [
            {
                "subject": "Math",
                "score": 85
            },
            {
                "subject": "English",
                "score": 95
            }
        ]
    }
];

//console.log(myArray[0].scores[0].score); // 80
//console.log(myArray[1].scores[1].score); // 95

for (let index = 0; index < myArray.length; index++) {
    console.log(`Sub-array ${index}: ${myArray[index]}`);
    if(myArray[index].scores) {
        for (let secondIndex = 0; secondIndex < myArray[index].scores.length; secondIndex++) {
            console.log(`Sub-sub-array ${secondIndex}: ${myArray[index].scores[secondIndex]}`);
            if(myArray[index].scores[secondIndex].score) {
                console.log(`Score: ${myArray[index].scores[secondIndex].score}`);
            }
        }
    }
    
}


// for(let i =0; i < myArray.length; i++){
//     //console.log(myArray[i])
//     for(let j = 0; j < myArray[i].scores.length; j++){
//         //console.log(myArray[i].scores)
//         if(myArray[i].scores.subject === "Math" && myArray[i].scores.score < 80){
//             console.log(myArray[i].name)
//         }
//     }
// }