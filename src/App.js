import './App.css';
import VillagerColumn from './components/acnhTable'
import GetVillagerNames from './components/dropdown';




function App() {
  return (
    <div className="App">
        <div className="AppContainer">
          <div className="table">
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

          <div className="table">
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

        {/* SIDEBAR */}
        <div className="AppContainer">
          <GetVillagerNames />
        </div>
    </div>
  );
}

export default App;
