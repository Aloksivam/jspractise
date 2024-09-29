function printmsg(msg) {
    console.log("msg is :".concat(msg !== null && msg !== void 0 ? msg : 'msg is not present'));
}
printmsg(null);
printmsg(undefined);
printmsg("finally i got one argument");
