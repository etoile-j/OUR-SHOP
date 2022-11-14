import PreIcon from '../../assets/icon-previous.svg';
import NextIcon from '../../assets/icon-next.svg';
import styled from 'styled-components';

interface styledCompo {
    width?: string;
}

const Main = styled.main`
    max-width: 1720px;
    min-width: 740px;
    margin: 0 auto;
    padding: 0 20px;
`;

const HeadingWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1720px;
`;

const ProductUpload = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #6997f7;
    width: 168px;
    height: 54px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
`;
const IconUpload = styled.img`
    display: inline;
    width: 32px;
    height: 32px;
    margin-right: 7px;
`;

const Nav = styled.nav`
    float: left;
    width: 250px;
    margin-right: 30px;
    @media screen and (max-width: 1100px) {
        width: 165px;
        margin-right: 18px;
    }
    @media screen and (max-width: 970px) {
        float: none;
        display: flex;
        width: 100%;
    }
`;

const ListBtn = styled.button.attrs({ type: 'button' })`
    width: 100%;
    padding: 15px 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: left;
    :hover {
        background-color: #c5daf7f8;
    }
`;
const OnListBtn = styled(ListBtn)`
    background-color: #6997f7;
    color: #ffffff;
`;

const TableWrap = styled.div`
    overflow: hidden;
`;

const Table = styled.div`
    overflow: hidden;
    max-width: 1440px;
    height: 884px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
`;

const Container = styled.div`
    overflow: scroll;
    background-color: #f2f2f2;
    height: 823px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    height: 60px;
    padding: 0 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    border-bottom: 1px solid #c4c4c4;
    border-radius: 5px 5px 0 0;
`;

const Content = styled.span`
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;

const PageNum = styled.div`
    max-width: 1440px;
    padding-top: 25px;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
`;

const Page = styled.button`
    padding: 0 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
`;

const PreviousPage = styled.button`
    width: 13px;
    height: 17px;
    padding: 0 20px;
    background-image: url(${PreIcon});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    vertical-align: -2px;
`;
const NextPage = styled(PreviousPage)`
    background-image: url(${NextIcon});
`;

export {
    Main,
    HeadingWrap,
    ProductUpload,
    IconUpload,
    Nav,
    ListBtn,
    OnListBtn,
    TableWrap,
    Table,
    Container,
    Title,
    Content,
    PageNum,
    Page,
    PreviousPage,
    NextPage,
};
