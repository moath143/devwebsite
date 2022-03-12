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

    return {
      data: verifiedAccount,
      status: 'success'
    };
    
  } catch (error) {
    return {
      data: error.response.data,
      status: "error",
    };
    
  }
}


export const loginAccount = async (userData) => { 
  const loginUrl = `https://medium0clone.herokuapp.com/api/user/login`;
  try {
    const loginResponse = await axios.post(loginUrl, userData);
    return {
      data: loginResponse,
      status: "success"
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: "error"
    };
  }
}

export const sendVerify = async (userData) => { 
  const sendVerifyUrl = `https://medium0clone.herokuapp.com/api/user/verify/send`;
  try {
    const sendVerifyResponse = await axios.post(sendVerifyUrl, userData);
    return {
      data: sendVerifyResponse,
      status: "success"
    };
    
  } catch (error) {
    return {
      data: error.response.data,
      status: "error"
    }
  }
}
