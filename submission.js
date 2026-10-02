// Task 1: Callback functions


//checkes wether the inputed value is even or not
let even_predicate = function (value)
{
    //filters out inputs of null or undefined
    if (value === null || value === undefined){
        return false;
    }
    // converts any input into a number
    let num = Number(value);

    //finds if the number is even, if it is the code retures true if not then it returns false
    if(!Number.isFinite(num) || !Number.isInteger(num)){
        return false;

    }
    else if (num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
};

//checkes wether the inputed value is odd or not
let odd_predicate = function (value)
{
    //filters out inputs of null or undefined
    if (value === null || value === undefined){
        return false;
    }
    // converts any input into a number
    let num = Number(value);

    //finds if the number is odd, if it is the code retures true if not then it returns false
    if(!Number.isFinite(num) || !Number.isInteger(num)){
        return false;

    }
    else if (num % 2 !== 0){
        return true;
    }
    else{
        return false;
    }
};

//checkes if value is undefined
let undefined_predicate = function (value)
{
    //returns a value of true if and only if value is undefined
    return value === undefined
};

//checkes if value is null
let null_predicate = function (value)
{
    //returns a value of true if and only if value is null
    return value === null
};

//uses a predicate function and pairs it with value for the output
let check = function (predicate,value)
{
    // runs value through the pre defined function
    return predicate(value);
};


//Task 2: Returning Functions
let getDictionary = function (lang)
{
    if(typeof lang !== 'string'){
        return null;
    }

    //converts all inputed values form lang into only lowercase to make them easier to interprut and compare
    let lowerLang = lang.trim().toLowerCase();

    //The input to englishDictionary will be a number.
    let englishDictionary = function (number)
    {
        switch(number){
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            default:
                return "not included in dictionary"
        }
       
    }

    //The input to frenchDictionary will be a number.
    let frenchDictionary = function (number)
    {
         switch(number){
            case 1:
                return "un";
            case 2:
                return "deux";
            case 3:
                return "trois";
            default:
                return "not included in dictionary"
         }
       
    }

    //based on the unputed lang value calls upon the correct dictionary
    if(lowerLang ==='e' || lowerLang === 'english'){
        return englishDictionary;
    }
    else if(lowerLang ==='f' || lowerLang === 'french'){
        return frenchDictionary;
    }
};

    //testing the above functions 
    let engDictionary = getDictionary ("english");
    console.log("English 2: ", engDictionary(2));
    console.log("English 5: ", engDictionary(5));

    let frenDictionary = getDictionary ("french");
    console.log("French 2: ", frenDictionary(2));
    console.log("French 5: ", frenDictionary(5));
