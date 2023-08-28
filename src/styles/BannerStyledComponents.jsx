import styled from 'styled-components';

export const Banner = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 550px;
    position: relative;
    
    .overlay {
        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
        }
        
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