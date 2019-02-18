function add(x, y){
    var result;
    if((typeof x && typeof y)!=='number'){
        throw new Error('Params must be number.');
    }
    result = x+y;
    if (parseInt(result)!==result){
        result = parseFloat(result.toFixed(1));
    }
    return result;
}

// Above function passes all of the test
add(2,3);  //5

add("2","3") //23

add(0.1,0.2); //0.30000004

//We use matcher to match the output of our code
//expect(add(2,3)).toBe(5))
//expect(add(2,'test')).toThrow
//expect(add(0.1,0.2)).toBe(0.3))
//expect(add(0.1,0.2)).not.toBe(0.2))
//Jasmine makes testing much easier. 
//In order to return true from suite, all of the spec has to be passed.
