const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");   

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;       //decrement maxTime by -1
            return timeText.innerText = maxTime;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();    //calling this to restart the game.
    }, 1000);
}

const initGame = () => {
    initTimer(30);  //max time value

    let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random objects from word file.
    let wordArray = randomObj.word.split(""); //splitting each letter of random words.

    for (let i = wordArray.length - 1; i > 0; i--) 
    {
        let j = Math.floor(Math.random() * (i + 1));   //getting random number.
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; //shuffling and swiping wordArray letters randomly
    }

    wordText.innerText = wordArray.join("");  //passing shuffled word as word text.     
    hintText.innerText = randomObj.hint;      //passing random object hint as hint text.
    correctWord = randomObj.word.toLowerCase(); // passing random word to correct word
    inputField.value = "";  
    inputField.setAttribute("maxlength", correctWord.length);   //setting input maxlength attr to  word length
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase(); // getting user value.
    if(!userWord) return alert("Please enter the word to check!"); 
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`); 
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`); //both if is failed display congrats
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);