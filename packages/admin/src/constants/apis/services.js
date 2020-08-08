const api_url = "https://api.capdeal.in";
const apis = {
  loginwithotp: `${api_url}/user/generate-otp/`,
  submitotp: `${api_url}/user/login-with-otp/`,
  submitpassword: `${api_url}/user/login-with-password/`,
  socialLogin: `${api_url}/social-sign-up`,
};

export default apis;
