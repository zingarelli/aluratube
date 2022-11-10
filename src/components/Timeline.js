import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

function Timeline({videoFilter, ...prop}) {
    // console.log(prop.playlists);
    const playlistsNames = Object.keys(prop.playlists);
    // we use map() because this function returns an array
    // forEach() would return nothing
    return (
        <StyledTimeline>
            {playlistsNames.map((playlist) => {
                const videos = prop.playlists[playlist];
                return (
                    <section key={playlist}>
                        <h2>{playlist}</h2>
                        <div>
                            {videos
                              // first get videos that matches any search value typed by the user
                              .filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const videoFilterNormalized = videoFilter.toLowerCase();
                                return titleNormalized.includes(videoFilterNormalized)
                              })
                              // then map those videos to display in the page
                              .map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>{video.title}</span>
                                    </a>
                                )
                              })
                            }
                        </div>
                    </section>                    
                );
            })}
        </StyledTimeline>
    );
}

export default Timeline;