for(var i=1; i<20; i+=2) {
    console.log(i);
}


for(var i=100; i>1; i-- ) {
    if(i%3 == 0 ) {
    console.log(i);
} }

// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

for(var i=4; i>-3.5; i-=1.5) {
    console.log(i);
}

// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log
//  the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

for(var i=1; i<101; i+=i ){
    console.log(i)
}

var sum = 0;
for(var i=1; i<101; i++) {
    sum += i;
}
console.log(sum);