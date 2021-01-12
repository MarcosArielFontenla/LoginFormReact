import './App.css';
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

// Styles de app principal contenedor
const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

// App principal
export default function App() {
  return (
    <AppContainer>
      <AccountBox/>
    </AppContainer>
  );
}
