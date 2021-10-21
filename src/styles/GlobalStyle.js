import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
    --dark-bg-2: #2b2c2f;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
    --font-color-1: #1c8c92;
    --yt-spec-brand-background-primary: rgba(33, 33, 33, 0.98);
    --yt-spec-10-percent-layer: rgba(255, 255, 255, 0.1);
    /* shadow */
    --outer-shadow-dark: 3px 3px 3px #222327, -3px -3px 3px #363636;
    --inner-sd-dark: inset 3px 3px 3px #222327, inset -3px -3px 3px #363636;
    --outer-sd-dark-2: 3px 3px 3px #5f6064,-3px -3px 3px #a5a5a5;
    --inner-sd-dark-2: inset 3px 3px 3px #5f6064, inset -3px -3px 3px #a5a5a5;

    /* GLASS PHORISM */
    --main-color: #e02f6b;
    --blue: #0000ff;
    --blue-dark: #18293c;
    --blue-light: #627285;
    --orange: #ffa500;
    --green-yellow: #cddc39;
    --pink-light: #efa2b4;
    --cyan-light: #aef1ee;
    --white: #ffffff;
    --white-alpha-40: rgba(255, 255, 255, 0.40);
    --white-alpha-25: rgba(255, 255, 255, 0.25);
    --backdrop-filter-blur: blur(5px);
    /* shadow */
    --outer-shadow: 3px 3px 3px #b1afaf,-3px -3px 3px #ffffff80;
    --inner-shadow: inset 3px 3px 3px #b1afaf,inset -3px -3px 3px #ffffff80;
  }
  html{
    font-size: 10px;
    font-family: 'Poppins', sans-serif;    
    /* background-color: var(--dark-bg-2); */
  }
  body{
    /* background-color: var(---font-color-1); */
    min-height: 100vh;
    background-image: linear-gradient(to bottom right, var(--pink-light),var(--cyan-light));
    color: var(--blue-dark);
    line-height: 1.5;
    overflow-x: hidden;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: var(--font-color-1);
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 80%;
    margin: 0 auto;
  }
  .container-l {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .flex{
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
  .glass{
    background-color: var(--white-alpha-25);
    border: 1.5px solid var(--white-alpha-40);
    backdrop-filter: var(--backdrop-filter-blur);
    border-radius: 20px;
  }
  .blur{
    backdrop-filter: var(--backdrop-filter-blur);
  }
  .content {
    display: flex;
    padding: 2rem;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
