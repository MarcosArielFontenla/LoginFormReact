import React, {useState} from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import {SignupForm } from "./signupForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";

// Styles de Box contenedor principal
const BoxContainer = styled.div`
width: 280px;
min-height: 550px;
top: 40px;
display: flex;
flex-direction: column;
border-radius: 19px;
background-color: #fff;
box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
`;

const TopContainer = styled.div`
width: 100%;
height: 250px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0 1.8em;
padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
transform: rotate(60deg);
top: -290px;
left: -70px;
border-radius: 50%;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(26,208,245,1) 100%);
`;

// Styles de contenedor titulo
const HeaderContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

// Styles de titulo Bienvenido
const HeaderText = styled.h2`
font-size: 30px;
font-weight: 600;
line-height: 1.23;
color: #fff;
z-index: 10;
margin: 0;
`;

const SmallText = styled.h5`
color: #fff;
font-weight: 500;
font-size: 11px;
z-index: 10;
margin: 0;
margin-top: 8px;
`;

const InnerContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 0 1.8em;
`;

// Objetos del expand animation
const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

// Transition de expansion de animacion
const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}

export function AccountBox(props) {
    // Animacion
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(()=> {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    }

    // Constante con metodo para switchear a SignUp
    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(()=> {
            setActive("signup");
        }, 400);
    }

    // Constante con metodo para switchear a SignIn
    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(()=> {
            setActive("signin");
        }, 400);
    }

    const contextValue = {switchToSignup, switchToSignin};

    return (
        <AccountContext.Provider value={contextValue}>
        <BoxContainer>
            <TopContainer>
                <BackDrop
                 initial={false}
                 animate={isExpanded ? "expanded" : "collapsed"}
                 variants={backdropVariants}
                 transition={expandingTransition}
                 />
                {active === "signin" && <HeaderContainer>
                    <HeaderText>¡Bienvenido!</HeaderText>
                    <SmallText>Por favor, Ingresá para continuar</SmallText>
                </HeaderContainer>}
                {active === "signup" && <HeaderContainer>
                    <HeaderText>Create una cuenta!</HeaderText>
                    <SmallText>Por favor, Registrate para continuar</SmallText>
                </HeaderContainer>}
            </TopContainer>
            <InnerContainer>
                { active === "signin" && <LoginForm/>}
                { active === "signup" && <SignupForm/>}
            </InnerContainer>
        </BoxContainer>
        </AccountContext.Provider>
    );
}