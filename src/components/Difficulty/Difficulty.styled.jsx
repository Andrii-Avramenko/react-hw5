import styled from 'styled-components';

export const DifficultyDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background-color: #fff;
    border-radius: 20px;
`

export const DifficultyBtn = styled.button`
    padding: 10px;
    margin: 5px;
    background-color: #ede8cb;
    border-radius: 20px;
    border: none;

    &.active {
        background-color: #f67373;
        color: #fff;
    }
`