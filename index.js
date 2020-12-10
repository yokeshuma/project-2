var readLineSync = require('readline-sync');
var random = require('random')
var chalk = require('chalk')
var green=chalk.green;
score=0;
highScore=3;
generated =[];
function rando(){
  var rand=random.int(min = 0, max = 9);
  return rand;
}
function check(question, answer,option,explanation){
  console.log(chalk.red(question));
  var useranswer = readLineSync.keyInSelect(option,"Please Enter your choice");
  if(answer===useranswer){
    score=score+1;
    console.log(chalk.yellow("Hurray! You are Right"));
    if(readLineSync.keyInYN("Do you want to see explanation Y/N"))
      console.log(explanation)
  }
  else{
    console.log("Sorry You are Wrong");
    if(readLineSync.keyInYN("Do you want to see explanation Y/N"))
      console.log(explanation);
  }
if(readLineSync.keyInYN("Do you want to continue"))
  gene();
else{
  console.log("Thanks for Playing this quiz")
  console.log("Your Score "+ score)
  if(score<highScore){
    console.log("Sorry You did not beat High Score");
  }
  else{
    console.log("Hurray! You beat the High Score, we don't have DB to store the data so we request you to inform us your High Score by sending Screenshot ")
  }
}}
function gene()
{
var rand = rando();
for(var i=0; i<generated.length; i++){
  if(rand===generated[i]){
      gene();
  }
  else
    break;
}
generated.push(rand);
check(questions[rand].question, questions[rand].answer,questions[rand].option,questions[rand].explanation)
}
questions = [{
  question : "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:",
  option : ['39, 30','41, 32','42, 33','43, 34'],
  answer : 2,
  explanation : "Let their marks be (x + 9) and x.\nThen, x + 9 =	56/100(x + 9 + x)\n25(x + 9) = 14(2x + 9)\n3x = 99\nx = 33\n\nSo, their marks are 42 and 33"
},
{
  question : "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
  option : ['588 apples', '600 apples','672 apples'
,'700 apples'],
  answer : 3,
  explanation : "Suppose originally he had x apples.\nThen, (100 - 40)% of x = 420.\n60/100xx=420\nx=(420x100/60)=700\n"
},
{
  question : "What percentage of numbers from 1 to 70 have 1 or 9 in the unit's digit?",
  option : ['1', '14','20','21'],
  answer : 2,
  explanation : "Clearly, the numbers which have 1 or 9 in the unit's digit, have squares that end in the digit 1. Such numbers from 1 to 70 are 1, 9, 11, 19, 21, 29, 31, 39, 41, 49, 51, 59, 61, 69.\nNumber of such number =14\nRequired percentage = (14/70x100)% = 20%."
},
{
  question : "A grocer has a sale of Rs. 6435, Rs. 6927, Rs. 6855, Rs. 7230 and Rs. 6562 for 5 consecutive months. How much sale must he have in the sixth month so that he gets an average sale of Rs. 6500?",
  option : ['Rs. 4991','Rs. 5991','Rs. 6001','Rs. 6991'],
  answer : 0,
  explanation : "Total sale for 5 months = Rs. (6435 + 6927 + 6855 + 7230 + 6562) = Rs. 34009.\nRequired sale = Rs. [ (6500 x 6) - 34009\nRs. (39000 - 34009)\nRs. 4991.]"
},
{
  question : "The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?",
  option : ['0','1','10','19'],
  answer : 3,
  explanation : "Average of 20 numbers = 0.\nSum of 20 numbers (0 x 20) = 0.\nIt is quite possible that 19 of these numbers may be positive and if their sum is a then 20th number is (-a)."
},
{
  question : "The average weight of 8 person's increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What might be the weight of the new person?",
  option : ['76 kg','76.5 kg','85 kg','Data inadequate','None of these'],
  answer : 2,
  explanation : "Total weight increased = (8 x 2.5) kg = 20 kg.\nWeight of new person = (65 + 20) kg = 85 kg."
},
{
  question : "If one-third of one-fourth of a number is 15, then three-tenth of that number is:",
  option : ['35','36','45','54'],
  answer : 3,
  explanation : "Let the number be x.\nThen, 1/3 of 1/4 of x=15 <=> x=15x3x4=180.\nSo, required number = (3/10x180)=54"
},
{
  question : "Three times the first of three consecutive odd integers is 3 more than twice the third. The third integer is:",
  option : ['9','11','13','15'],
  answer : 3,
  explanation : "Let the three integers be x, x + 2 and x + 4.\nThen, 3x = 2(x + 4) + 3 <=> x = 11.\nThird integer = x + 4 = 15."
},
{
  question : "The difference between a two-digit number and the number obtained by interchanging the positions of its digits is 36. What is the difference between the two digits of that number?",
  option : ['3','4','9','Cannot be determined','None of these'],
  answer : 1,
  explanation : "Let the ten's digit be x and unit's digit be y\nThen, (10x + y) - (10y + x) = 36\n9(x - y) = 36\nx - y = 4."
},
{
  question : "The difference between a two-digit number and the number obtained by interchanging the digits is 36. What is the difference between the sum and the difference of the digits of the number if the ratio between the digits of the number is 1 : 2 ?",
  option : ['4','8','16','None of these'],
  answer : 1,
  explanation : "Since the number is greater than the number obtained on reversing the digits, so the ten's digit is greater than the unit's digit.\nLet ten's and unit's digits be 2x and x respectively.\nThen, (10 x 2x + x) - (10x + 2x) = 36,9x = 36\nx = 4\nRequired difference = (2x + x) - (2x - x) = 2x = 8."
}
]
var userName = readLineSync.question(green("Enter your Name "));
console.log(chalk.green('Hello '+userName+' Welcome to Aptitude Test'));
gene();