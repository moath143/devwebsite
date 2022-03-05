import axios from "axios";


export const registerAccount = async (userData) => {
  const signUpUrl = `https://medium0clone.herokuapp.com/api/user/signup`;
    try {
        const responseData = await axios.post(signUpUrl, userData);
      return {
        data: responseData,
        status: "success"
      };
  } catch (error) {
      console.log(error);
      return {
        data: error.response.data,
        status: "error"
      }
  }
};

export const verifyAccount = async (userId) => {
  const verifyUrl = `https://medium0clone.herokuapp.com/api/user/verify/email`;
  try {
    const verifiedAccount = await axios.post(verifyUrl, userId);
    console.log(
      "🚀 ~ file: auth.js ~ line 25 ~ verifyAccount ~ verifiedAccount",
      verifiedAccount.verificationCode
    );
    return {
      data: verifiedAccount.verificationCode,
      status: 'success'
    };
    
  } catch (error) {
    return {
      data: error.response.data,
      status: "error",
    };
    
  }
}
