import { Link } from 'react-router-dom';
import {
    HeaderEl,
    Nav,
    Wrap,
    Logos,
    LogoImg,
    LogoText,
    Container,
    H2,
} from './SellerCenterHeaderStyle';

const SellerCenterHeader = () => {
    return (
        <HeaderEl>
            <Nav>
                <Wrap>
                    <Link to="/" aria-label="OUR-SHOP 메인 페이지">
                        <Logos>
                            <LogoImg />
                            <LogoText />
                        </Logos>
                    </Link>
                    <Container>
                        <H2>판매자 센터</H2>
                    </Container>
                </Wrap>
            </Nav>
        </HeaderEl>
    );
};
export default SellerCenterHeader;
