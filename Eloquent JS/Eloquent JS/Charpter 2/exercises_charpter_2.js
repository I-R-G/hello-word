/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

function loopTriangle (){
    let line = ""
    while(line.length <= 7){
        console.log(line)
        line += "#";
    }
}

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are 
divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out a significant percentage of 
programmer candidates. So if you solved it, your labor market value just went up.)
*/

function fizzBuzz(){
    let i = 0, mul3 = "Fizz" , mul5 = "Buzz";
    while(i < 100){
        i++;
        if(i % 3 === 0 && i % 5 ===0){
            console.log(mul3 + mul5); 
        }else if(i % 5 === 0){
            console.log(mul5)
        }else if(i % 3 === 0){
            console.log(mul3)
        }else{
            console.log(i)
        }
    }
    return
}

/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character. The characters should form a 
chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

*/


function chessboard(width, height){
  
    let pattern = "";
    
    for(let i = 1; i <= height; i++){
      for(let j = 1; j <= width; j++){
        if((j+i) % 2 !== 0){
          pattern += "#"
        }else{
          pattern += " "
        }
      }
      pattern += "\n"
    }
      console.log(pattern)
  }
  