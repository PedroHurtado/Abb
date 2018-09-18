export function* flatMap(array){
    for(let value of array){
        if(Array.isArray(value)){
            yield *flatMap(value);
        }
        else{
            yield value;
        }
    }
}