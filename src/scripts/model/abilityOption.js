class AbilityOption{
  constructor(name, damageType, dicesQuantity, dicesMaxValue, additionalValue){ 
    this._name = name;
    this._damageType = damageType;
    this._dicesQuantity = dicesQuantity;
    this._dicesMaxValue = dicesMaxValue;
    this._additionalValue = additionalValue;
  }

  getName(){
    return this._name;
  }

  getDamageType(){
    return this._damageType;
  }

  getDicesQuantity(){
    return this._dicesQuantity;
  }

  getDicesMaxValue(){
    return this._dicesMaxValue;
  }

  getAdditionalValue(){
    return this._additionalValue;
  }
}