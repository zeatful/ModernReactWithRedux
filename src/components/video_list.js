import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    /* 
      array items need a key to uniquely id them so react knows only to re-render that one item,
      otherwise it will throw away the entire list and re-render it
    */
    return (
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  // className instead of class to avoid name conflicts
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;