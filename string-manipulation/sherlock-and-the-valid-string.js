function isValid(s) {
    let dict = {};
    let max = 0;
    let min = 0;
    let minCount = 0;
    let maxCount = 0;

    for(let i = 0; i<s.length;i++){
        let key = s[i];
        if(dict[key]){
            dict[key]++;
        } else {
            dict[key]=1;
        }
    }
    let values = [];
    for(let key in dict){
        values.push(dict[key])
    }

    min = values.reduce((a,b)=>{return Math.min(a,b)});
    max = values.reduce((a,b)=>{return Math.max(a,b)});

    for (let i = 0; i<values.length;i++){
        if(values[i]===max){
            maxCount++;
        }
        if(values[i]===min){
            minCount++;
        }
    }

    if(min==max){
        return "YES"
    }

    if(maxCount + minCount != values.length){
        return "NO";
    }

    if(min==1 && minCount==1){
        return "YES"
    }
    
    if(maxCount==1 && max == min+1){
        return "YES"
    }

    return "NO"
}