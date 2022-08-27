import styled from 'styled-components';

const SCCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    padding: 10px 30px 30px 30px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;    
    overflow: hidden;
    
    .Card_Header {
        border-bottom: 1px solid black;
        padding-bottom: 5px;
    }
`;

export default SCCard;
