/*Question 1Coding Challenge
What a Shock!


Problem Statement

In the city of New Delhi, the below table gives us the tariff rates based on the number of units of electricity consumed in a domestic household

                           

                                    Number of Units Consumed                                     Charges per Month

                                    

                                                   0 - 200                                                           3 per unit

                                               201 - 400                                                         4.50 per unit

                                                401 - 800                                                        6.50 per unit

                                               801 - 1200                                                       7.00 per unit

                                                 > 1200                                                             8.00 per unit

 

Based on the above table, if the number of units consumed is 950 then the total amount billed can be calculated as:

For the first 200 units = 200 * 3 = Rs. 600

For the next  200 units = 200 * 4.50 = Rs.900

For the next 400 units = 400 * 6.50 = Rs. 2600

For the next 150 units = 150 * 7.00 = Rs. 1050

_________________________________________

Total Billed Amount = Rs. 5150

 

Given the units U consumed in each month from Jan to Dec, calculate the total electricity bill of the year.


Input Format

The first line contains a single integer T, the number of test cases. Next T lines follow.
Each test case contains 12 spaced integers, denoting the units consumed in each month from January to December

Output Format

The output of each test case should be on a new line consisting of a single integer denoting the total electric bill for the year. It is guaranteed that the output will be an integer. 

Constraints

0 <= T <= 100
0 <= U <= 10000

Sample Test Case

Input

2

100 100 100 200 300 400 500 600 100 100 50 0

55 6 79 23 21 22 90 1000 105 11 23 12 


Output

9750

6841

 

Starter Code

The starter code contains all necessary methods to fetch the input for each test case. You are expected to complete the solve(units). Here units is an array containing the 12 values for units consumed each month. 





let input = ''
process.stdin.on('data', data => input += data)
process.stdin.on('end', () => main(input))
 
function main(input) {
    let lines = input.trim().split('\n');
    let n = +lines[0];
    for(let i = 1; i <= n; i++) {
        let arr = lines[i].split(' ').map(v => +v);
    	solve(arr);
    }
}
*/

//--------------------------------------------------------------- 
 
function solve(units) {
	//Write your code here
    let totalUnits = units;
    let totalCost = 0;
    let count = 0;
    
    while(totalUnits > 0){
        if(totalUnits >= 200 && count == 0){
            totalUnits -= 200;
            totalCost += 200 * 3;
            count += 1;
        }
        else if(totalUnits < 200 && count == 0){
            totalCost += totalUnits * 3;
            totalUnits -= totalUnits;
            count += 1;
            break;
        }

        else if(totalUnits >= 200 && count == 1){
            totalUnits -= 200;
            totalCost += 200 * 4.5;
            count += 1;
        }
        else if(totalUnits < 200 && count == 1){
            totalCost += totalUnits * 4.5;
            totalUnits -= totalUnits;
            count += 1;
            break;
        }

        else if(totalUnits >= 200 && count == 2){
            totalUnits -= 200;
            totalCost += 200 * 6.5;
            count += 1;
        }
        else if(totalUnits < 200 && count == 2){
            totalCost += totalUnits * 6.5;
            totalUnits -= totalUnits;
            count += 1;
            break;
        }

        else if(totalUnits >= 200 && count == 3){
            totalUnits -= 200;
            totalCost += 200 * 7;
            count += 1;
        }
        else if(totalUnits < 200 && count == 3){
            totalCost += totalUnits * 7;
            totalUnits -= totalUnits;
            count += 1;
            break;
        }

        else{
            totalCost += totalUnits * 8;
        }
    }
    return totalCost;    
}

console.log(solve(950));

