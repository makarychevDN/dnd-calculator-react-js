loadCharacter();

function loadCharacter(){
    let loadedCharacterAsJson = loadCharacterJson(); 
    currentCharacter = parseJsonToCharacter(loadedCharacterAsJson);
    let onCurrentCharacterIsSetted = new CustomEvent("characterIsSetted", {detail: {character : currentCharacter }});
    dispatchEvent(onCurrentCharacterIsSetted);
}

function parseJsonToCharacter(json){
    let characterAsObject = JSON.parse(json);
    fieldsOfObject = Object.values(characterAsObject);
    let characterAsInstanceOfClass = new Character(...fieldsOfObject);
    Object.setPrototypeOf(characterAsInstanceOfClass.getHealth(), CharactersResource.prototype);
    characterAsInstanceOfClass.getAbilities().forEach(ability => {
        Object.setPrototypeOf(ability, Ability.prototype);
        /*ability.getAbilityOptions().forEach(abilityOption => {
            Object.setPrototypeOf(abilityOption, AbilityOption.prototype);     
        });*/
        Object.setPrototypeOf(ability.getCurrentAbilityOption(), AbilityOption.prototype);
    });
    return characterAsInstanceOfClass;
}

function loadCharacterJson(){
    //todo make it work like it is supposed to
    return JSON.stringify(
        new Character(
            16, 11, 16, 8, 12, 9, 
            "intelligence", 
            3, 
            new CharactersResource("здоровье", 16, 10),
            {
                "золото" : 9,
                "серебро" : 23,
                "медь" : 14,
            },
            new Array(
                new Ability("удар топором",
                     null, 
                     new AbilityOption("удар топором", "рубящий", 1, 6, 1)),

                new Ability("вжух", 
                    null, 
                    new AbilityOption("лунный луч", "излучением", 3, 10, 0)),

                new Ability("тычок вилкой", 
                    null, 
                    new AbilityOption("тычок вилкой", "рубящий", 1, 4, 0)),

                new Ability("огненный шар", 
                    null, 
                    new AbilityOption("огненный шар", "огненный", 9, 8, 0)),
            )
    )); 
}