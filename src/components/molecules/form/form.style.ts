import styled from 'styled-components';

const SCForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    height: 100%;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width:100%;

        label {
            position: inherit;
            padding: 0;
            width: 100%;
            pointer-events: auto;
        }
    }
`;

export default SCForm;
