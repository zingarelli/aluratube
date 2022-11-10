import config from '../../config.json';
import styled from "styled-components";
import Banner from './Banner';

// create a styled component, which represents a div
const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};

    margin-top: 56px;

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;    
        gap: 16px;
    }

    .user-info img {
        width: 80px;
        border-radius: 50%;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <Banner bannerSrc={config.banner} />
            <section className='user-info'>
                <img src={`https://github.com/${config.github}.png`} alt="foto do usuário" />
                <div>
                    <h2>
                    {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
}

export default Header;