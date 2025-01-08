class Character{
  constructor(strength, dexterity, constitution, intelligence, wisdom, charisma, lastUsedCharacteristic, 
  proficiencyBonus, health, money, abilities){
    this._strength = strength;
    this._dexterity = dexterity;
    this._constitution = constitution;
    this._intelligence = intelligence;
    this._wisdom = wisdom;
    this._charisma = charisma;
    this._lastUsedCharacteristic = lastUsedCharacteristic;

    this._proficiencyBonus = proficiencyBonus;

    this._health = health;

    this._money = money;

    this._abilities = abilities;
  }

  getStrengthModificator(){ return this.getModificatorOfCharacteristic(this._strength)}
  getDexterityModificator(){ return this.getModificatorOfCharacteristic(this._dexterity)}
  getConstitutionModificator(){ return this.getModificatorOfCharacteristic(this._constitution)}
  getIntelligenceModificator(){ return this.getModificatorOfCharacteristic(this._intelligence)}
  getWisdomModificator(){ return this.getModificatorOfCharacteristic(this._wisdom)}
  getCharismaModificator(){ return this.getModificatorOfCharacteristic(this._charisma)}

  getlastUsedCharacteristic(){ return this._lastUsedCharacteristic}

  getHealth(){ return this._health };

  getLastUsedCharacteristicModificator(){
    switch (this._lastUsedCharacteristic) {
    case "strength": return this.getStrengthModificator();
    case "dexterity": return this.getDexterityModificator();
    case "constitution": return this.getConstitutionModificator();
    case "intelligence": return this.getIntelligenceModificator();
    case "wisdom": return this.getWisdomModificator();
    case "charisma": return this.getCharismaModificator();
    }
  }

  setLastUsedCharacteristic(lastUsedCharacteristic){
    this._lastUsedCharacteristic = lastUsedCharacteristic;
    dispatchEvent(new CustomEvent("lastUsedCharacteristicIndexChanged", 
    {detail: {modificator : this.getLastUsedCharacteristicModificator() }}));
  }

  getProficiencyBonus(){ return this._proficiencyBonus }

  getModificatorOfCharacteristic(characteristic){
    return Math.floor(characteristic / 2) - 5;
  }

  getProficiencyBonus(){
    return this._proficiencyBonus;
  }

  getAbilities(){
    return this._abilities;
  }
}

class CharactersResource{
  constructor(name, maxValue, currentValue){
    this._name = name;
    this._maxValue = maxValue;
    this._currentValue = currentValue;
  }

  setName(value){ this._name = value; }
  setMaxValue(value){ this._maxValue = value; }    
  setCurrentValue(value){ this._currentValue = value; }
  resetCurrentValue(){ this.setCurrentValue(this._maxValue); }
  getName() {return this._name};
  getMaxValue() {return this._maxValue};
  getCurrentValue() {return this._currentValue};

  addValue(value){
    this._currentValue += value;

    if(this._currentValue > this._maxValue){
      this.currentValue = this._maxValue;
    }
  }

  substractValue(value){
    this._currentValue -= value;
  }
}