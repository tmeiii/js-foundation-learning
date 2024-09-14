function minOperations(logs){
    let operation = 0;
    for (let i=0; i < logs.length; i++){
        if (logs[i] == "../" && operation !== 0){
            operation -= 1;
        } else if (logs[i] !== "./" && logs[i] !== "../"){
            operation += 1;
        } 
    }
    return operation
}