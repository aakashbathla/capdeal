const api_url = "http://api.capdeal.in";
const apis = {
  loginwithotp: `${api_url}/user/generate-otp/`,
  submitotp: `${api_url}/user/login-with-otp/`,
  socialLogin: `${api_url}/social-sign-up`,
};

export default apis;
