function createPair<S,T>(k:S,v:T):[S,T]{
    return [k,v]
}
console.log(createPair<string,number>("alok",14))