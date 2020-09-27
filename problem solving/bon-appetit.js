function bonAppetit(bill, k, b) {
    let fairCharge = bill.reduce((acc, cur, index) => {
        if (index !== k) acc += cur;
        return acc;
    }, 0) / 2;

    console.log(fairCharge === b ? "Bon Appetit" : b - fairCharge);
}