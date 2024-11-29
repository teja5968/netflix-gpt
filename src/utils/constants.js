

export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

  

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg";



  
  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
  
  export const API_OPTIONS  = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY
      Authorization: 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTA4ODZlZGI5ZDc4MWRkZTJhMWVkMTljYzYwZDU0OCIsIm5iZiI6MTczMTEyOTI4Ny44Mzg5NzUsInN1YiI6IjY3MmVlZGNhOTRjM2JkZWQ5MzEyMGQyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yjn40s_Ax-QccrFp0mz_lxikDFIOH-px8TtI8E58Ja4'

    
    }
  };
  

  export const SUPPORTED_LANGUAGES = [
    
    {
    identifier: "en",name: " English",
  },
  {
    identifier: "hindi",name: "Hindi",
  },
  {
    identifier: "spanish",name: "Spanish",
  }
  ]

// Please secure it in .env file and add .env file to gitignore before pushing the code to github and
// If you are wondering how to deploy it to production, you can add api key details in your firebase project directly.
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;