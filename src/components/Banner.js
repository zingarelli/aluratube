import styled from "styled-components";

const StyledBanner = styled.div`
    height: 230px;
    overflow: hidden;
    display: flex;
    align-items: center;

    img {
        width: 100%;
    }
`;

function Banner({bannerSrc}) {
    return (
        <StyledBanner>
            <img src={bannerSrc} alt='Banner do Canal' />
        </StyledBanner>
    )
}

export default Banner;