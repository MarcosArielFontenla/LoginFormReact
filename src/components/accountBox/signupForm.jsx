import React, { useContext } from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
    const {switchToSignin} = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Nombre" />
                <Input type="text" placeholder="Apellido" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Contraseña" />
                <Input type="password" placeholder="Confirmar Contraseña" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <Marginer direction="vertical" margin="0.6em" />
            <SubmitButton type="submit">Registrar</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">¿Ya tienes cuenta?<BoldLink href="#" onClick={switchToSignin}> Ingresa!</BoldLink></MutedLink>
            <Marginer direction="vertical" margin="1em" />
        </BoxContainer>
    )
}