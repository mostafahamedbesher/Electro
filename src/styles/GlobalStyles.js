import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  --color-white : #fff;
  --color-black : #222;
  --color-yellow : #fed700;

  --color-grey-light : #f3f4f6;
  --color-grey-light-1 : #e5e7eb;
  --color-grey-medium : #4d5967;
  --color-grey-dark : #343c46;
  --color-grey-dark-2 : #353f49;
  
  --color-zinc-50 : #fafafa;
  --color-zinc-100 : #f4f4f5;
  --color-zinc-200 : #e4e4e7;
  --color-zinc-300 : #d4d4d8;
  --color-zinc-400 : #a1a1aa;
  --color-zinc-500 : #71717a;
  --color-zinc-700 : #3f3f46;

  --color-red-600: #dc2626;
  --color-blue: #1871c3;
  

  --padding-section : 15rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  //make 1rem = 10px
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: var(--color-grey-light);
  margin: 4rem 4rem 10rem 4rem;
  font-size: 1.5rem;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

/* img {
  max-width: 100%;
} */

`;

export default GlobalStyles;
