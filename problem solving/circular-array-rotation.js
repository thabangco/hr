
function circularArrayRotation(a, k, queries) {
    let lastEl;
    let foo = [];
    let i = queries.length;

    if (k < a.length) {
        const endValues = a.splice(-(k));
        a = [...endValues, ...a]
    }

    else if (k !== a.length) {
        while (k--) {
            lastEl = a.pop();
            a.unshift(lastEl);
        }
    }

    while (i--) { foo[i] = a[queries[i]] }
    return foo;
}