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
            }
    )); 
}