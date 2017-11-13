import React from 'react';

// grabs the first video property from the props object
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.channelTitle;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;