import styled from 'styled-components';

const SCTopNav = styled.div`
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--app-primary-color);
    
    .TopNav_MainContainer {
        height: 100%;
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        width: var(--app-width)

    }
`;

export default SCTopNav;
