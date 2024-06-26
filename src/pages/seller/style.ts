import styled from 'styled-components';

const Main = styled.main`
    max-width: 1720px;
    min-width: 540px;
    margin: 0 auto;
    padding: 0 20px;
`;

const H3 = styled.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: left;
`;

const CautionWrap = styled.div`
    float: left;
    margin-right: 80px;
    @media screen and (max-width: 1300px) {
        margin-right: 30px;
    }
    @media screen and (max-width: 1220px) {
        margin-bottom: 35px;
        margin-right: 0px;
        float: none;
    }
`;

const H4 = styled.h3`
    margin-bottom: 10px;
    color: red;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const CautionBox = styled.div`
    background: #ffefe8;
    width: 320px;
    height: 346px;
    padding: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    @media screen and (max-width: 1220px) {
        width: 100%;
        height: 160px;
        overflow: scroll;
    }
`;

export { Main, H3, CautionWrap, H4, CautionBox };
