// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    // alert( Math.floor(3.1) );  // 3
    // alert( 5 % 2 ); // 1, остаток от деления 5 на 2
    // 50¢, 25¢, 10¢, 5¢ and 1¢, respectively.
    //  H,   Q,   D,   N      P.

    var object = new Object();
    var x;

    console.log ('currency: ', currency);

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else
    if (currency <= 0) {
        return {};
    } 
    else {
        // currency = 1000
        let x = currency;
        let h = Math.floor(currency/50); // h = 20;
        if (h >= 1) { object.H = h; x = currency % 50; }
        
        let q = Math.floor(x/25);
        if (q >= 1) { object.Q = q; x = x % 25; }
        
        let d = Math.floor(x/10);
        if (d >= 1) { object.D = d; x = x % 10; } 

        let n = Math.floor(x/5);
        if (n >= 1) { object.N = n; x = x % 5; } 

        let p = x/1;
        if (p >= 1) { object.P = p; }

        console.log ("object: ", object);

        return object;

    } 



}
