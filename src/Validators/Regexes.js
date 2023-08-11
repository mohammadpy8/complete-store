const emailTest = (value) => {

    const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g
    return emailPattern.test(value);

};

const codeMeliTest = (value) => {
    ///code
};

const PhoneNumber = (value) => {
    ///code
};

export default { emailTest, codeMeliTest, PhoneNumber };