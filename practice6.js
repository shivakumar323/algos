/*
you are given an array that shows stock prices, any ith index tells the price of a stock on ith day.
you can buy one stock and sell that stock on same date or future date.
find the maximum profit you can make.
Note: once you buy a stock on particular day, you can only sell that stock on that day onwards you cannot sell it by going back

for ex :- if array is [74,11,52,3,53,13]
then max profit one can get is 50 rupees i.e., buying the stock at 3 rupees and selling it at 53. (Note you cannot sell at indexes less than the index of 3) 

*/
function calculate_max_profit(A,N){
    pday = 0;
    sday = 0;
    profit = 0;
    
    for(let i = 0; i < A.length; i++){
        let x = A[i]
        for(let j = i+1; j < A.length; j++){
            p1 = A[j] - x;
            if(p1 > profit){
                profit = p1;
                pday = i;
                sday = j;
            }
        }
    }
    return profit;
}

console.log(calculate_max_profit([74,11,52,3,53,13],6));