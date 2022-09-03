import styled from 'styled-components';

const SCCardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: flex-start;

    .CardHeader_text {
        display: flex;
        align-items: center;

        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .CardHeader_icon {
        margin-right: 8px;
    }

    .CardHeader_text ,
    .CardHeader_icon {
        width: fit-content;
        height: 100%;
    }
`;

export default SCCardHeader;
