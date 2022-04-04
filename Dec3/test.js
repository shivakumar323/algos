function f(str) {
    str = str.split(' ');
    
    let r1 = [];
    for(let i = 0; i < str.length; i++) {
        let word = str[i];
        for(let j = 0; j < word.length; j++) {
            if(!isNaN(word[j])) {
                let n = word[j];
                let newword = word.replace(n, '');
               // word.splice(j, 1);
                r1[n - 1] = newword;
                break;
                //console.log(word[j]);
            }
        }
        //console.log(word);
    }
    console.log(r1);
}
f("is2 this1 t4test 3a");