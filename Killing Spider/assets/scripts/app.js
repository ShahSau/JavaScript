
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE =14;
const STRONG_ATTACK_VALUE =17;
const HEAL_VALUE =20;
//const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
//const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
//const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
//const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
//const LOG_EVENT_GAME_OVER = "GAME_OVER";

const enteredValue=prompt("Maximum life for player and the monster: ", "100");
let chosenMaxLife =parseInt(enteredValue);

let battleLog=[];

if (isNaN (chosenMaxLife) || chosenMaxLife<=0){
    chosenMaxLife =100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife= true;



adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth,playerHealth){
    let logEntry = 0;
    if (event === "PLAYER_ATTACK"){
        logEntry ={
            event: event,
            value: value,
            target: "Monster",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (event === "PLAYER_STRONG_ATTACK"){
        logEntry ={
            event: event,
            value: value,
            target: "Monster",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (event === "MONSTER_ATTACK"){
        logEntry ={
            event: event,
            value: value,
            target: "Player",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (event === "PLAYER_HEAL"){
        logEntry ={
            event: event,
            value: value,
            target: "Player",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    } else if (event === "GAME_OVER"){
        logEntry ={
            event: event,
            value: value,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
    }
    battleLog.push(logEntry);
}

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound(){
    const initialPlayerHealth = currentPlayerHealth;
    const PlayerDamage =  dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= PlayerDamage;
    writeToLog("MONSTER_ATTACK", PlayerDamage, currentPlayerHealth, currentMonsterHealth);

    if(currentPlayerHealth<=0 && hasBonusLife == true){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth =initialPlayerHealth;
        alert("Bonous life saved you");
        setPlayerHealth(initialPlayerHealth);
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth >0){
        alert("You won!!");
        writeToLog(
            "GAME_OVER", 
            "Player Won", 
            currentPlayerHealth, 
            currentMonsterHealth
        );
        reset();
    } else if (currentPlayerHealth <=0 && currentMonsterHealth >0){
        writeToLog(
            "GAME_OVER", 
            "Player Lost", 
            currentPlayerHealth, 
            currentMonsterHealth
        );
        alert("You lost !!");
        reset();
    } else if (currentPlayerHealth <=0 && currentMonsterHealth <=0){
        writeToLog(
            "GAME_OVER", 
            "It's a tie", 
            currentPlayerHealth, 
            currentMonsterHealth
        );
        alert("its a tie !!");
        reset();
    }

}

function attackMonster(mode){
    let maxDamage = 0;
    let logEvent= "";
    
    if(mode === "ATTACK"){
        maxDamage = ATTACK_VALUE;
        logEvent="ATTACK"
    } else if (mode === "STRONG_ATTACK"){
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent="STRONG_ATTACK"
    }
    const damage= dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent, 
        damage, 
        currentPlayerHealth, 
        currentMonsterHealth
    );
    endRound();
}

function attackHandler() {
    attackMonster("ATTACK");
}

function strongAttackHandler() {
    attackMonster("STRONG_ATTACK");
    
}

function healPlayerHandler(){
    let healValue;
    if (currentPlayerHealth>=chosenMaxLife - HEAL_VALUE){
        alert(`You can't heal more than ${chosenMaxLife}`);
        healValue = chosenMaxLife - currentPlayerHealth;
    } else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(
        "PLAYER_HEAL",
        healValue,  
        currentPlayerHealth, 
        currentMonsterHealth
    );
    endRound();

};
function printLogHandlerFunction(){
    console.log(battleLog);
}

attackBtn.addEventListener("click",attackHandler);
strongAttackBtn.addEventListener("click",strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click",printLogHandlerFunction);
