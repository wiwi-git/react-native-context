import React from "react";
import styled from "styled-components";
import UserContext, { UserConsumer, UserProvider } from "../contexts/User";

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

const User = () => {
    return (
        <UserConsumer>
            {value => <StyledText>Name: {value.name} </StyledText>}
        </UserConsumer>
    );
}

export default User;
