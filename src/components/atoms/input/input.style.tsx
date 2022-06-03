import styled from 'styled-components';

const SCInput = styled.div`
input {
    width: calc(100% - 20px);
    padding: 5px 10px;
    border-radius: 5px;
}

label {
    display: flex;
    flex-direction: column;
    place-content: end;
    align-content: flex-start;
    justify-content: center;
    align-items: flex-start;
}`;

export default SCInput;
