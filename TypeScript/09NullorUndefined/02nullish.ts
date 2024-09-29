function printmsg(msg:string|null|undefined){
    console.log(`msg is :${msg??'msg is not present'}`)
}
printmsg(null);
printmsg(undefined);
printmsg("finally i got one argument");