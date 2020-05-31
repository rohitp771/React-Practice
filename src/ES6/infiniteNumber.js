function *infiniteNumber(){

    let n =1;
    while(true){
        yield n++;
    }
}

export default infiniteNumber;