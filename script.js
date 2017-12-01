var guesses = 10;
var word = "";
var guessedLetters = [];
var movies = ["TWILIGHT", "CLUELESS", "COCO", "IT", "AVENGERS", "WONDER", "CASABLANCA", "INCREDIBLES"];
var songs = ["HALO", "BABY", "CURVE","ANTI","LIFESTYLE","DOWN","PROBLEM","LOYAL","CREW","EVERYDAY"];
var animals = ["FROG", "TIGER", "LION","GIRAFFE","PENGUIN","DOG","BEAR","DOLPHIN","WHALE","JAGUAR"];
var foods = ["DUMPLING", "BURRITO", "PHO","NACHOS", "CLEMENTINE", "SANDWICH", "COOKIES","HAMBURGER"];
var alphabet =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function categoryOptions(category){
    guesses = 10;
    guessedLetters = [];
    if(category == 1){
        var randMovies = movies[Math.floor(Math.random() * movies.length)];
        word = randMovies;
    }
    if(category == 2){
        var randSongs = songs[Math.floor(Math.random() * songs.length)];
        word = randSongs;
    }
    if(category == 3){
        var randAnimals = animals[Math.floor(Math.random() * animals.length)];
        word = randAnimals;
    }
    if(category == 4){
        var randFoods = foods[Math.floor(Math.random() * foods.length)];
        word = randFoods;
    }
    printWord();
    console.log(word);
    runLetters();
    document.getElementById("img").innerHTML="<img src='img/guess11.png'>";
}

function printWord(){
    var r = "";
    for(var i = 0; i<word.length; i++){
        if(guessedLetters.indexOf(word[i])>-1){
            r += word[i];
        }else{
            r += " _ ";
        }
        document.getElementById("output").innerHTML = r;
        document.getElementById("output1").innerHTML = "You have " + guesses + " guesses remaining!" ;
    }
    return r;

}

function guessedLetter(letter){
    var rt="";
    if(guesses>0){
        guessedLetters.push(letter);
        if(word.indexOf(letter)<=-1){
            guesses --;
            determineImage();
        }
    }
    if(rt.indexOf("_")>-1){
        document.getElementById("game over"). innerHTML="You lost :(";
    }else{
        if(guesses<=0){
            document.getElementById("game over"). innerHTML="You lost :(";
        }
    }
    printWord();
    var rt=printWord();
    if(rt.indexOf("_")==-1){
        return document.getElementById("win"). innerHTML="You won!";
    }
    runLetters();
}

function runLetters(){
    var value = "";
    for(var i = 0; i <alphabet.length; i ++){
        if(guessedLetters.indexOf(alphabet[i]) > -1){
            value +="<button class = 'letter' onclick= 'guessedLetter(this.value)' value ='" + alphabet[i] + "' disabled>" + alphabet[i] + "</button>"
        }else{
            value +="<button class = 'letter' onclick= 'guessedLetter(this.value)' value ='" + alphabet[i] + "'>" + alphabet[i] + "</button>"
        }

    }
    return document.getElementById("buttons").innerHTML=value;
}

function determineImage(){
    document.getElementById("img").innerHTML="<img src='img/guess" + guesses + ".png'>";
}







