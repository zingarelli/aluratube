import styled from "styled-components";

const StyledFavorites = styled.div`
    padding: 16px 32px;

    h2 {
        font-size: 16px;
        margin-bottom: 16px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        list-style-type: none;
    }

    ul li {
        text-align: center;
    }

    li img {
        width: 100px;
        border-radius: 50%;
        margin-bottom: 5px;
    }
`;

function Favorites({canais: channels}) {
    return (
        <StyledFavorites>
            <h2>AluraTubes Favoritos</h2>
            <ul>
                {channels.map(channel => {
                    return (
                        <li>
                            <img src={`https://github.com/${channel}.png`} alt={`foto do canal ${channel}`} />
                            <p>@{channel}</p>
                        </li>
                    )
                })}
            </ul>
        </StyledFavorites>
    )
}

export default Favorites;