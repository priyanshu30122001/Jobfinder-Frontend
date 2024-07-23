/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {     
     backgroundImage: {
        'hero': "url('../src/assets/image.png')",
        'jobpost':"url('../src/assets/job-post.png')",
      },
      fontFamily: {
        roboto: ["Roboto","sans" ],
        single:["Single Day", 'cursive'],
        DmSans:["DM Sans", 'sans-serif']
    },
    }
  },
  plugins: [],
}

