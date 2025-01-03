class Ability{
  constructor(name, abilityOptions, currentAbilityOption){
    this._name = name;
    this._abilityOptions = abilityOptions;
    this._currentAbilityOption = currentAbilityOption;
  }

  getName(){
    return this._name;
  }

  getAbilityOptions(){
    return this._abilityOptions;
  }

  getCurrentAbilityOption(){
    return this._currentAbilityOption;
  }
}