import React from "react";
import styled from "styled-components";
import EmailsView from "./EmailsView";
import Sidebar from "./Sidebar";

export default function Main() {
    return (
        <Wrapper>
            <Sidebar />
            <EmailsView />
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: grid;
grid-template-columns :300px auto;
`