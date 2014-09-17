
function fizzbuzz(){
  //"Write a program that prints the numbers from 1 to 100.
  //But for multiples of three print “Fizz” instead of the number
  //and for the multiples of five print “Buzz”.
  //For numbers which are multiples of both three and five
  //print “FizzBuzz”."

  for (i=1; i < 101; i++){
    switch (true){
      case (i % 3 === 0 && i % 5 === 0):
        // Multiple of 3 and 5
        console.log("FizzBuzz\n");
        break;
      case (i % 3 === 0):
        // Just multiple of 3
        console.log("Fizz\n");
        break;
      case (i % 5 === 0):
        // Just multiple of 5
        console.log("Buzz\n");
        break;
      default:
        // Wasn't a multiple of 3, 5 or 3 and 5.
        console.log(i + "\n");
    }
  }
}

fizzbuzz();
