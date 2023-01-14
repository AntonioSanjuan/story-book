import styled from 'styled-components';

const SCTableExampleWithStickyScroll = styled.div`
display:flex;
flex-direction: column;
place-content: center;
align-items: center;

    .tableExampleWithStickyScroll_CardContainer {
        display: flex;
        max-width: var(--card-width);
    }
`;

export default SCTableExampleWithStickyScroll;
