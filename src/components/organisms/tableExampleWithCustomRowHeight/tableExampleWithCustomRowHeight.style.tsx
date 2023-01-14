import styled from 'styled-components';

const SCTableExampleWithCustomRowHeight = styled.div`
display:flex;
flex-direction: column;
place-content: center;
align-items: center;

    .tableExampleWithCustomRowHeight_CardContainer {
        display: flex;
        max-width: var(--card-width);
    }
`;

export default SCTableExampleWithCustomRowHeight;
