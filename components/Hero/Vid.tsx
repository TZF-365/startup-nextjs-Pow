
import React from 'react';

interface BackgroundVideoProps {
  videoId: string; // YouTube video ID
}

class BackgroundVideo React.Component<BackgroundVideoProps> {
  private player: any; // Reference to the YouTube player

  componentDidMount() {
    // Load the YouTube iFrame API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);

    // Define the YouTube player
    (window as any).onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
  }

  onYouTubeIframeAPIReady = () => {
    this.player = new (window as any).YT.Player('background-video', {
      height: '0', // Set the height and width to 0 to hide the player
      width: '0',
      videoId: this.props.videoId, // YouTube video ID
      playerVars: {
        autoplay: 1, // Autoplay the video
        controls: 0, // Hide video controls
        loop: 1, // Loop the video
        showinfo: 0, // Hide video information
        mute: 1, // Mute the video
        rel: 0, // Hide related videos
      },
    });
  };

  render() {
    return <div id="background-video" />;
  }
}

export default BackgroundVideo;
