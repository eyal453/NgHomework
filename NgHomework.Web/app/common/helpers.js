Array.prototype.removeObj = function (obj) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === obj) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
}