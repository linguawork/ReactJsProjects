import styled from 'styled-components'
import { ThemeInterface } from '../Theme/Theme';

interface StyledProps{

    theme: ThemeInterface;
}



export const BackgroundStyle = styled.div<StyledProps>`

display: flex;
/* flex: 1 0 auto; */
height: 600px;
/* flex-direction: row; */
padding: 1rem;
    /* background-color: ${({theme}) => theme.background}; */
background-color: 'rgb(17, 179, 238)';
/* background-color: ${({theme}) => theme.background}; */



`;