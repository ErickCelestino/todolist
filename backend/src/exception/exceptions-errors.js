const elementEmpty = (element) => {
    return `${element} cannot be empty`;
};
const elementIsRequired = (element) => {
    return `The field "${element}" is required!`;
};


module.exports = {
    elementEmpty,
    elementIsRequired,
};