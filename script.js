const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

var myArray = ['home','dog','car','document','mother','father','apple'];
var myArrayRus = ['дом','собака','машина','документ','мама','отец','яблоко'];

var myArray = [
        'the date',
        'exam',
        'foreign languages',
        'traditional',
        'unusual',
        'introduce',
        'try',
        'another',
        'have in common',
        'What kind of ?',
        'partner',
        'sporty',
        'choose',
        'prefer',
        'each',
        'at least',
        'for example',
        'go on a date',
        'I am sure',
        'the opposite of',
        'art gallery',
        'artist',
        'painting',
        'pain',
        'picture',
        'poster',
        'favourite',
        'draw',
        'at the back',
        'at the front',
        'famous for',
        'author',
        'definition',
        '(on the) Internet',
        'website',
        'popular',
        'contain',
        'explain',
        'mume',
        'panic',
        'recognize',
        'awful',
        'fantastic',
        'furious',
        'great',
        'lovely',
        'miserable',
        'terrible',
        'wonderful',
        'break up with',
        'escape from',
        'balcony',
        'exhibition',
        'the news',
        'stone',
        'wedding',
        'attack',
        'shout',
        'immediately',
        'luckuly',
        'suddenly' 
    ];
var myArrayRus = [
        '(дата)',
        'экзамен',
        'иностранные языки',
        'традиционный',
        'необычный',
        'вводить',
        'пробовать',
        'другой',
        '(иметь) общее',
        'Какого рода?',
        'партнер',
        'спортивный',
        'выбирать',
        'предпочитать',
        'каждый',
        'по крайней мере',
        'например',
        '(пойти на свидание)',
        'Я уверен',
        'противоположность (из)',
        'художественная галерея',
        'художник',
        'картина',
        'боль',
        'изображение',
        'плакат',
        'любимый',
        'рисовать',
        '(в) задней части',
        '(на) фронте',
        'известный (для)',
        'автор',
        'определение',
        '(в) Интернете',
        'вебсайт',
        'популярный',
        'содержать',
        'объяснять',
        'муме',
        'паника',
        'распознавать',
        'ужасный',
        'фантастический',
        'яростный',
        'отличный',
        'прекрасный',
        'несчастный',
        'ужасный',
        'прекрасный',
        'расстаться с',
        'побег (от)',
        'балкон',
        'выставка',
        'новости',
        'камень',
        'свадьба',
        'атака',
        'крик',
        'немедленно',
        'к счастью',
        'внезапно'
    ];


let plus = 0;
let f = 0;


function funcMusic() {
var audio = new Audio('barradeen-first-girl-talking-to-me.mp3');
audio.play();
}





function rand() {

let randsWord = myArray[Math.floor(Math.random() * myArray.length)];//случайное слово
r = myArray.indexOf(randsWord) //индекс случайного слова
  if(randsWord == undefined) {
        document.getElementById('allForms1').innerHTML = "конец";
        document.getElementById('allForms').innerHTML = "счёт";
  }else{
    document.getElementById('allForms1').innerHTML = myArrayRus[r];//вывод случайного слова
  }
k = r
console.log(r)
return randsWord;

}






function cleen(){
  document.getElementById('allForms').innerHTML = "Переведите слово";

}







function func() {

 randsWord = rand()

if(randsWord == undefined) {
        document.getElementById('allForms1').innerHTML = "конец";
        document.getElementById('allForms').innerHTML = "счёт";
  }


document.getElementById('allForms4').innerHTML = randsWord;
// Создаем распознаватель
var recognizer = new webkitSpeechRecognition();

// Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
recognizer.interimResults = true;

// Какой язык будем распознавать?
recognizer.lang = 'en-EN';

// Используем колбек для обработки результатов
recognizer.onresult = function (event) {

  var result = event.results[event.resultIndex];

  if (result.isFinal) {
    
      document.getElementById('allForms').innerHTML = result[0].transcript;

  if((result[0].transcript).toUpperCase() == randsWord.toUpperCase()){

    	plus++;
    	document.getElementById('allForms2').innerHTML = plus;
      console.log(plus)
      document.getElementById('allForms1').innerHTML = "Правильно !";

      myArray.splice(k, 1); // начиная с позиции 1, удалить 1 элемент
      myArrayRus.splice(k, 1); // начиная с позиции 1, удалить 1 элемент
      console.log(myArray + " " + k)

    } 
    else{

      	f++
      	document.getElementById('allForms3').innerHTML = f;
      	document.getElementById('allForms1').innerHTML = "Неверно !";
        console.log(randsWord + " " + result[0].transcript)

      }


  } else {
    console.log('Промежуточный результат: ', result[0].transcript);
  }



};

// Начинаем слушать микрофон и распознавать голос
recognizer.start();

}

func()



function say() {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10];
  msg.voiceURI = "native";
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 0.3;
  msg.text = randsWord;
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}