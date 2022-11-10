import React from 'react';
import config from '../config.json';
import { CSSReset } from '../src/components/CSSReset';
import Favorites from '../src/components/Favorites';
import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline'

function HomePage() {
    const [videoFilter, setVideoFilter] = React.useState('');
    
    return (
        <>            
            <div>
                {/* prop drilling: pass props from parent to children */}
                <Menu videoFilter={videoFilter} setVideoFilter={setVideoFilter} />
                <Header />
                <Timeline videoFilter={videoFilter} playlists={config.playlists} />
                <Favorites canais={config.favorites} />
            </div>
        </>
    );
}

export default HomePage;