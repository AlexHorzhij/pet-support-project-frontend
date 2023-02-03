import styled from '@emotion/styled';
import { Typography } from '@mui/material';

import mobile from '../../../assets/backgrounds/mobile.png';
import tablet from '../../../assets/backgrounds/tablet.png';
import desktop from '../../../assets/backgrounds/desktop.png';
import fail from '../../../assets/backgrounds/fail.png';

    export const Background = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 50px;
    background-color: #fdf7f2;
    background-image: url(${mobile});
    background-size: 100% 160px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
    background-attachment: fixed;
    overflow: hidden;

    @media screen and (min-width: 768px) {
    padding-top: 40px;
    background-size: 100% 400px;
    background-image: url(${tablet});
    }

    @media screen and (min-width: 1280px) {
    padding-top: 50px;
    background-size: 100% 390px;
    background-image: url(${desktop});
    }
    `;

    export const ContentWrapper = styled.div`
    width: 280px;
    margin-right: auto;
    margin-left: auto;
    background-image: url(${fail});
    background-size: 20%;
    background-repeat: no-repeat;
    background-position: 90% 10%;
    /* background-size: contain; */
    overflow: auto;
    opacity: 0.8;

    @media screen and (min-width: 768px) {
    width: 608px;
    min-height: 300px;
    padding: 60px 80px 40px 80px;
    background-color: #fff;
    border-radius: 40px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    }

    @media screen and (min-width: 1280px) {
    width: 618px;
    padding: 60px 80px 60px 80px;
    }
    `;

export const Text = styled(Typography) ({
    opacity: 1,
    })