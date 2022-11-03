import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import ProductInfo from 'components/ProductInfo';
import styled from 'styled-components';

const MainEm = styled.main`
    max-width: 1280px;
    min-width: 767px;
    padding: 80px 0 180px;
    margin: 0 auto;
`;

const Main = () => {
    return (
        <>
            <Header />
            <MainEm>
                <ProductInfo />
            </MainEm>
            <Footer />
        </>
    );
};
export default Main;
