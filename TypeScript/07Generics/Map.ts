class NamedValue<T>{
    private _value:T|undefined;
    public constructor(private name:string){
    
    }
    public setValue(value:T){
        this._value = value
    }
    public getValue():T|undefined{
        return this._value
    }
    public toString():string{
        return `${this.name}`
    }
}
let alok = new NamedValue("alok");
console.log(alok.toString());
