import axios from "axios";

export const userSignin = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/sign-in`, data);
    console.log(res.data);
    return res.data
};

const userSignup = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/sign-up`, data);
    console.log(res.data);
    return res.data
};