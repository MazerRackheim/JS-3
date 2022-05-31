function* Primer(max) { 
    const infinite = !max && max !== 0;
    const re = /^.?$|^(..+?)\1+$/; 
    let current = 1;

    while (infinite || max-- ) {
        if(!re.test('1'.repeat(current)) == true) yield current;
        current++
    };
};


let [...list] = Primer(100); 
console.log(list);