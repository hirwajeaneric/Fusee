import styled from 'styled-components';

export const Banner = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 550px;
    
    .overlay {
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        min-height: 550px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 888;
        gap: 30px;
    }
`;