const api_url = "https://api.capdeal.in";
const apis = {
  loginwithotp: `${api_url}/user/generate-otp/`,
  submitotp: `${api_url}/user/login-with-otp/`,
  socialLogin: `${api_url}/social-sign-up`,
  submitpassword: `${api_url}/user/login-with-password/`,
  developerListingUrl: `${api_url}/developers/`,
  projectListingUrl: `${api_url}/projects/`,
  homepageProject: `${api_url}/projects/homepage/`,
  homepageDevelopers: `${api_url}/developers/home_page/`,
  userListingUrl: `${api_url}/users?role=Customer`,
  teamListingUrl: `${api_url}/users?role=Admin`,
  teamUrl: `${api_url}/users/`,
  aminitiesListingUrl: `${api_url}/aminities-categories/`,
  seoListingUrl: `${api_url}/seo/`,
  mediaUrl: `${api_url}/gallery/`,
  projectTypeChoice: `${api_url}/projects/type_choice/`,
  projectStatusChoice: `${api_url}/projects/status_choice/`,
  developerListChoice: `${api_url}/developers/choices/`,
  amenitiesCategoryChoice: `${api_url}/aminities-categories/choices/`,
  callBackUrl: `${api_url}/contactus/`,
};

export default apis;
