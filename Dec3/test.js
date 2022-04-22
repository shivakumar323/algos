let arr = [[1,2,3],
           [7,8,9],
           [13,14,15],
           [19,20,21]];

function find_diagnols(arr, start) {
    let j = 0; 
    let border = arr[0].length;
    for(let i = start; i >= 0; i--) {
        if(j < border) {
            console.log(arr[i][j]);
            j++
        }
        
    }
}

find_diagnols(arr, 3);