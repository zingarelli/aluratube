import styled from "styled-components";

// option #1: using an img tag to display the banner
// const StyledBanner = styled.div`
//     height: 230px;
//     overflow: hidden;
//     display: flex;
//     align-items: center;

//     img {
//         width: 100%;
//     }
// `;

// option #2: using only a div and setting the image as background
// using props to get the url value
const StyledBanner = styled.div`
    height: 230px;
    background: no-repeat url(${({ bg }) => bg}) center/cover;
`;

function Banner({bannerSrc}) {
    return (
        // option #1
        // <StyledBanner>
        //     <img src={bannerSrc} alt='Banner do Canal' />
        // </StyledBanner>

        // option #2
        <StyledBanner bg={bannerSrc} />
    )
}

export default Banner;