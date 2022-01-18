export const stringLength = (param) => {
    if (param.length < 1) {
        return 'Min length is equal to 1';
    } else if (param.length > 10) {
        return 'Max length is equal to 10'
    } else {
        return param.length;
    }
}

export const reverseString = (param) => {
    return param.split('').reverse().join('');
}

export const capitalise = (param) => {
    return param.toUpperCase()
}

export default class Calculator {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    checkType = () => {
        if (isNaN(this.first)) {
            return 'First param should be a number';
        } 
        if (isNaN(this.last)) {
            return 'Last param should be a number';
        }
        return false;
    }

    add = () => {
        const Invalid =  this.checkType();
        if (!Invalid === true) {
            return this.first+this.last;
        } else {
            return Invalid;
        }
    }

    substract = () => {
        const Invalid =  this.checkType();
        if (!Invalid === true) {
            return this.first-this.last;
        } else {
            return Invalid;
        }
    }

    divide = () => {
        if (this.last === 0) {
            return 'You can\'t divide by 0';
        } else {
            const Invalid =  this.checkType();
            if (!Invalid === true) {
                return this.first/this.last;
            } else {
                return Invalid;
            }
        }
    }

    multiply = () => {
        const Invalid =  this.checkType();
        if (!Invalid === true) {
            return this.first*this.last;
        } else {
            return Invalid;
        }
    }
}