function dependencyOne(str){
    // W
    let firstAlpha = str[0].toUpperCase();
    
    // indows10
    let etc = str.substring(1, str.length);
    
    // Windows10
    return firstAlpha + etc;
    
}

function dependencyTwo(str){
    return str.split(':')[1];
}

function splitByColon(str){
    
    let splited = dependencyTwo(str);
    
    let capitalize = dependencyOne(splited);
    
    return capitalize;
}

// system:windows10
// system:macOs

console.log(splitByColon('system:windows10'));
console.log(splitByColon('system:macOs'));