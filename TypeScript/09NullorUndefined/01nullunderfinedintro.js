function printYardSize(house) {
    var _a;
    var yardsiz = (_a = house.yardsize) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardsiz == undefined) {
        console.log("No Yard");
    }
    else {
        console.log("yard size is ".concat(yardsiz));
    }
}
var home = {
    sqft: 500,
    yardsize: { sqft: 456 }
};
printYardSize(home);
