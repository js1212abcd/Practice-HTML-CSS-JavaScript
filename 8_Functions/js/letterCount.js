function letterCount(str = "Barry", sr = "y") {
    let low;
    let pos = str.indexOf(sr);
    if (pos === -1) {
        low = str.toLowerCase();
        pos = low.indexOf(sr);
        pos += 1;
    }
    return pos
}
letterCount()