import config from '../config.json';
import { CSSReset } from '../src/components/CSSReset';
import Favorites from '../src/components/Favorites';
import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline'

function HomePage() {
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
                <Favorites canais={config.favorites} />
            </div>
        </>
    );
}

export default HomePage;