const api_url = "https://api.capdeal.in";
const apis = {
  loginwithotp: `${api_url}/user/generate-otp/`,
  submitotp: `${api_url}/user/login-with-otp/`,
  submitpassword: `${api_url}/user/login-with-password/`,
  socialLogin: `${api_url}/social-sign-up/`,
  developerListingUrl: `${api_url}/developers/`,
  projectListingUrl: `${api_url}/projects/`,
  userListingUrl: `${api_url}/users/?role=Customer`,
  teamListingUrl: `${api_url}/users/?role=Admin`,
  teamListing: `${api_url}/users/`,
  teamUrl: `${api_url}/users/`,
  aminitiesListingUrl: `${api_url}/aminities-categories/`,
  seoListingUrl: `${api_url}/seo/`,
  mediaUrl: `${api_url}/gallery/`,
  projectTypeChoice: `${api_url}/projects/type_choice/`,
  projectStatusChoice: `${api_url}/projects/status_choice/`,
  developerListChoice: `${api_url}/developers/choices/`,
  amenitiesCategoryChoice: `${api_url}/aminities-categories/choices/`,
};

export default apis;
