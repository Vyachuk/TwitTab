import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export default createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;

}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  display: block;
  color: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
button,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
button{
  cursor: pointer;
}
`;
