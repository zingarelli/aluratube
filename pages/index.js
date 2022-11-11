import React from 'react';
import config from '../config.json';
import { CSSReset } from '../src/components/CSSReset';
import Favorites from '../src/components/Favorites';
import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline'
import { videoService } from '../src/services/VideoService';


function HomePage() {
    const [videoFilter, setVideoFilter] = React.useState('');
    const [playlists, setPlaylists] = React.useState({});

    // supabase service
    const service = videoService()

    // console.log('homepage rendered');

    // fetch data the first time the component renders (don't do the same in re-renders)
    React.useEffect(() => {
        // console.log('useEffect applied');
        try{
            service.getAllVideos()
                .then((result) => {
                    const newPlaylist = {...playlists};
                    if(result) {
                        result.data.forEach((video) => {
                            if(!newPlaylist[video.playlist]) {
                                // create a new playlist
                                newPlaylist[video.playlist] = []
                            }
                            newPlaylist[video.playlist].push(video);
                        })
                    }
                    // update playslists state
                    setPlaylists(newPlaylist);
                })
        }
        catch(err) {
            console.log('Check if SupaBase is still active (they pause projects that are inactive for long times)');
            console.log(err);
        }
    }, [])


    return (
        <>            
            <div>
                {/* prop drilling: pass props from parent to children */}
                <Menu videoFilter={videoFilter} setVideoFilter={setVideoFilter} />
                <Header />
                <Timeline videoFilter={videoFilter} playlists={playlists} />
                <Favorites canais={config.favorites} />
            </div>
        </>
    );
}

export default HomePage;