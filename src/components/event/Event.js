import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import NanumGothic from "../../assets/fonts/NanumGothic.woff";
import plusBtn from "../../assets/icon/ico_btn_more.png";


// export const GlobalStyle = createGlobalStyle`
//     @font-face {
//         font-family : 'NanumGothic';
//         src : local('NanumGothic'),
//         url(${NanumGothic}) format('woff');
//         font-weight : 300;
//         font-style : normal;
//     }
// `

export const EventArea = styled.div`
    width : 100vw;
    height : 582px;


    background-color : #FFFFFF;
    border : 1px solid gray;
`

export const Header = styled.div`
    width : 100vw;
    height : 70px;

    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;

    margin-top : 50px;


    /* border : 1px solid red; */




    img {
        position : fixed;
        right : 20%;
        /* left : 200px; */
    }


`

export const Title = styled.span`
    font-size : 30px;
    font-weight : bold;
    
`



export const Event = () => {

    return (
        <EventArea>
            <Header>
                <Title>이벤트</Title>
                <img src={plusBtn}></img>
            </Header>


        </EventArea>
        
    )
}