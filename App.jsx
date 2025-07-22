
// RQ1
import { useState } from "react";
import { episodeList } from "./data";


// RQ8
function EpisodeListItem({ episode, isSelected, onSelect }){
  return (
    <li className={`episode-item ${isSelected ? 'selected' : ''}`}>
    {/* RQ5 */}
    <button className="episode-button" onClick={() => onSelect(episode)}>
      <div className="episode-number">Episode {episode.id}</div>
      <div className="episode-title">{episode.title}</div>
    </button>
  </li>
  );
}


// RQ8 
function EpisodeList({ episodes, selectedEpisode, onEpisodeSelect }) {
  return (
    <div className="episode-list-container">
      <h2 className="episode-list-title">Episodes</h2>
      {/* RQ3 */}
      <ul className="episode-list">
        {episodes.map(episode => (
          <EpisodeListItem
            /* RQ4 */
            key={episode.id}
            episode={episode}
            isSelected={selectedEpisode?.id === episode.id}
            onSelect={onEpisodeSelect}
          />
        ))}
      </ul>
    </div>
  );
}


// RQ8
function EpisodeDetails({ selectedEpisode }){
  if (!selectedEpisode) {
    return (
      <div className="episode-details">
        <div className="no-selection">
          {/* DQs for icons: 1. https://www.w3schools.com/icons/tryit.asp?filename=tryicons_fa-film  2. https://www.w3schools.com/icons/fontawesome5_icons_images.asp */}
          <div className="no-selection-icon">
            <i className="fas fa-film"></i>
          </div>
          <div className="no-selection-text">Select an Episode</div>
          <div className="no-selection-subtext">
            Choose an episode from the list to see its details
          </div>
        </div>
      </div>
    );
  }

  // RQ7
  return (
    <div className="episode-details">
      <div className="selected-episode">
        <div className="selected-episode-header">
          <div className="selected-episode-number">
            Episode {selectedEpisode.id}
          </div>
          <h1 className="selected-episode-title">{selectedEpisode.title}</h1>
        </div>
       <div className="selected-episode-description">
        {selectedEpisode.description}
       </div>
      </div>
    </div>
  );
}


export default function App() {
  // TODO - done
  // RQ1
  const [episodes] = useState(episodeList);
  
  // RQ2
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const handleEpisodeSelect = (episode) => {
    setSelectedEpisode(episode);
  };

  // RQ9
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Dark Echoes</h1>
        <p className="app-subtitle">A thrilling mystery series</p>
      </header>
      
      <main className="content-container">
        <EpisodeList
          episodes={episodes}
          selectedEpisode={selectedEpisode}
          onEpisodeSelect={handleEpisodeSelect}
        />
        
        <EpisodeDetails selectedEpisode={selectedEpisode} />
      </main>
    </div>
  );


}
