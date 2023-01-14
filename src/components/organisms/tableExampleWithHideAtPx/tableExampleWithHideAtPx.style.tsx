import styled from 'styled-components';

const SCTableExampleWithHideAtPx = styled.div`
display:flex;
flex-direction: column;
place-content: center;
align-items: center;

    .tableExampleWithHideAtPx_CardContainer {
        display: flex;
        max-width: var(--card-width);
    }
`;

export default SCTableExampleWithHideAtPx;
