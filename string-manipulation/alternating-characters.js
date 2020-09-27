function alternatingCharacters(s) {
    let pointer = 0;
    let removeCount = 0;
    while(pointer < s.length-1){
        if(s[pointer] === s[pointer+1]){
            remove_count++
        }
        pointer++
    }
    return removeCount
}