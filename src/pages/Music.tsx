import React from 'react';
import './Music.css';
import dataService from '../services/dataService';

const Music: React.FC = () => {
  const musicConfig = dataService.getMusic();
  const imageConfig = dataService.getImageConfig();
  
  // Map albums with their images from the image config
  const albumsWithImages = musicConfig.albums.map(album => ({
    ...album,
    imgSrc: imageConfig.music.albums[album.imageKey as keyof typeof imageConfig.music.albums]
  }));

  return (
    <div className="music-page">
      <div className="quote">
        <p>"{musicConfig.quote.text}" {musicConfig.quote.emoji}</p>
      </div>

      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <div className="genres">
          {musicConfig.genres.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {albumsWithImages.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
