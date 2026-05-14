export const updateName=(name) => {
    return{
        type: "UPDATE_NAME",
        payload: name,
    };
};


export const updateEmail = (email) => {
    return{
        type: "UPDATE_EMAIL",
        payload: email,
    };
};
