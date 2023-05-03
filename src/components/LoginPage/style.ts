import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0b0a14;

    form {
        display: flex;
        flex-direction: column;
        background-color: #1e1c30;
        padding: 3vh 3vw;
        border-radius: 5px;
    }
    
    input {
   
        width: 85vw;
        max-width: 300px;
        height: 40px;
        border: none;
        border-radius: 5px;
        margin-top: 13px;
        box-sizing: border-box;
        padding-left: 11px;
        font-size: 20px;
        color: #c8c7d1;
        background-color: #0b0a14;

    }
    
    input[type=submit] {
        background-color: #0d0447;
    }

    span {
        color: #9e1602;
        margin-top: 5px;
    }

    p{
        margin-top: 3vh;
    }
`