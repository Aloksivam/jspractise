function NoDefault(number){
    console.log(number*number);
}
NoDefault();// NaN instead of error it returns a non-sensial output
function Default(number=33){
    console.log(number*number);
}
Default(11);// NaN instead of error it returns a non-sensial output