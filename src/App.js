import background from './Naruto.png';
import './App.css';
import AnimeContainer from './containers/AnimeContainer';


function App() {
  return (
    //testing out this style
<div style={{ backgroundImage: `url(${background})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100vw',
              height: '100vh'
}}>;
     <h1>Anime Horoscope</h1> 
     <AnimeContainer />
    </div>
  );
}

export default App;
