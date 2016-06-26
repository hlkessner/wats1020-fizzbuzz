

// Place your FizzBuzz code here. 
//Variable for FizzBizz number range 
var rangelimit = 20;
//variable for numbers divisible by 3
var responseFor3= 'Fizz' ;
//variable for numbers divisible by 5
var responseFor5= 'Buzz';





//Count through number range to figure out if each number is divisible by 3, 5 or both.
for (i=1; i<=rangelimit; i++){
  //for each number, do the folowing check:
  //See if it is divisible by 3
  if (i % 3 === 0) {
    //if so: see if it is also devisible by 5
    if (i % 5 ===0) {
      // If divisible by 3 and 5: print FizzBuzz
      document.write (responseFor3+responseFor5+'<br/ >');
    } else {
      // If only divisible by 3: Print Fizz
      document.write (responseFor3+'<br/ >'); 
    }
  } else if (i % 5 === 0) {
     // See if it is divisible by 5
     //if so: Print Buzz
     document.write (responseFor5+'<br/ >'); 
   } else {
     //See if it is not divisible by 3 or 5
     // If so: Print Number
     document.write(i+'<br/ >'); 
   }
}



