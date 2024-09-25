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
}