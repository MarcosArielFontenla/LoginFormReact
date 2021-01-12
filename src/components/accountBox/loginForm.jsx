import React, {useContext} from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, BoldLink } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
    const {switchToSignup} = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Contraseña" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">¿Olvidaste tu contraseña?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit">Ingresar</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">¿No tienes cuenta?<BoldLink href="#" onClick={switchToSignup}> Registrate!</BoldLink></MutedLink>
        </BoxContainer>
    )
}