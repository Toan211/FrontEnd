const btn_number_list = $('.btn-number-list');
const btn_number = $('.btn-number');
const btn_restart = $('.btn-restart');
const btn_hint = $('.btn-hint');
const btn_save = $('.btn-save');

const game_life = $('.game-life');
const game_predict_number = $('.game-predict-number');
const game_content_predict = $('.game-content-predict');
const game_num_guess = $('.game-life-try');


const LOCAL = "game_save_list";

const number_of_predict_button = 25;
const life_count = 3;

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}


const getLocalStorage = (key) => {

    let data = localStorage.getItem(key);
    data = data ? JSON.parse(data): []
    return data
}

const button_list = (number) => {
    let str = ""
    for (let i = 0; i < number; i++) {
            
          str +=`<button class="btn-number hint-number" value="${i+1}">${i+1}</button>`
    }
    btn_number_list.html(str);
}

const life = (number_of_life) => {
    let str = ""
    for (let i = 0; i < number_of_life; i++) {
            
          str +=`<div class="game-life-try margin-right-10"></div>`
    }
    game_life.html(str);
}

const gameLifeCount = (number_of_count)=>{
    
    $('.game-life-try').eq(number_of_count).addClass("count");
}

const gamePredictList = (val, secret_number, num_of_guess)=>{
    let str=""
    if (val>secret_number) {
        console.log(">");
        str+=`<li>
        <div class="game-notice wrong">Wrong!</div>
        <div>Try ${num_of_guess+1}: <span class="game-guess">${val}</span>, you guess it wrong. Your number is too high.</div>
    </li>`
        
    } else if (val<secret_number) {
        console.log("<");
        str+=`<li>
        <div class="game-notice wrong">Wrong!</div>
        <div>Try ${num_of_guess+1}: <span class="game-guess">${val}</span>, you guess it wrong. Your number is too low.</div>
    </li>`
    } else if (val==secret_number) {
        console.log("=");
        str+=`<li>
        <div class="game-notice true">You have win!</div>
        <div>Try ${num_of_guess+1}: <span class="game-guess">${val}</span>, Congrats!! you guess it right!!</div>
    </li>`
    }
    game_content_predict.html(str)

}

const getGameList = (data)=>{
    let str=""
    data.forEach((element) =>{
        
        if (element.value>element.secret) {
            
            str+=`<li>
            <div class="game-notice wrong">Wrong!</div>
            <div>Try ${element.guess+1}: <span class="game-guess">${element.value}</span>, you guess it wrong. Your number is too high.</div>
        </li>`
            
        } else if (element.value<element.secret) {
            
            str+=`<li>
            <div class="game-notice wrong">Wrong!</div>
            <div>Try ${element.guess+1}: <span class="game-guess">${element.value}</span>, you guess it wrong. Your number is too low.</div>
        </li>`
        } else if (element.value==element.secret) {
            
            str+=`<li>
            <div class="game-notice true">You have win!</div>
            <div>Try ${element.guess+1}: <span class="game-guess">${element.value}</span>, Congrats!! you guess it right!!</div>
        </li>`
        }
        
        gameLifeCount(element.guess)
        game_predict_number.html(element.value)
    });
    game_content_predict.html(str)
    
    

}

const setGameWin = (guess,secret_number)=>{
    let str=""
        str+=`<div class="game-result">
        Secret number is: <span class="game-notice hint">${secret_number}</span> , you did it in <span>${guess+1}</span> try!!
        </div>`
    game_content_predict.append(str)
    setGameOver();
}

const setGameLose = (secret_number)=>{
    let str=""
    str+=`<div class="game-result">
            Secret number is: <span class="game-notice hint">${secret_number}</span> , you lose the game, try again!!
            </div>`
    game_content_predict.append(str)
    setGameOver();
}

const random_number = (random)=>{
    let randomNumber = Math.floor(Math.random() * random) + 1;
    return randomNumber;
}

const setGameOver = () => {
    $('.btn-number').removeClass("hint-number")
    $('.btn-number').prop('disabled', true);
}

const setResetGame = () => {
    
    game_predict_number.html("") ;
    game_content_predict.html("");
    $('.game-life-try').removeClass("count");
    $('.btn-number').prop('disabled', false);
    
    
}