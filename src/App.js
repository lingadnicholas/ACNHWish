import './App.css';
import VillagerColumn from './components/acnhTable'
function App() {
  return (
    <div className="App">
        <div>
        <strong>Wishlist</strong>
          <div className="row">
              <div className="item"><VillagerColumn personality='Lazy' /></div>
              <div className="item"><VillagerColumn personality='Normal'/></div>
              <div className="item"><VillagerColumn personality='Peppy'/></div>
              <div className="item"><VillagerColumn personality='Jock'/></div>
              <div className="item"><VillagerColumn personality='Cranky'/></div>
              <div className="item"><VillagerColumn personality='Snooty'/></div>
              <div className="item"><VillagerColumn personality='Sisterly'/></div>
              <div className="item"><VillagerColumn personality='Smug'/></div>
          </div>
        </div>

        <div id="owned">
        <strong>Already owned</strong>
          <div className = "row">
              <div className="item"><VillagerColumn personality='Lazy' /></div>
              <div className="item"><VillagerColumn personality='Normal'/></div>
              <div className="item"><VillagerColumn personality='Peppy'/></div>
              <div className="item"><VillagerColumn personality='Jock'/></div>
              <div className="item"><VillagerColumn personality='Cranky'/></div>
              <div className="item"><VillagerColumn personality='Snooty'/></div>
              <div className="item"><VillagerColumn personality='Sisterly'/></div>
              <div className="item"><VillagerColumn personality='Smug'/></div>
          </div>
        </div> 
    </div>
  );
}

export default App;
