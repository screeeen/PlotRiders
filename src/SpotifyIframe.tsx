import React from 'react';

const SpotifyIframe = () => {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src="https://open.spotify.com/embed/playlist/1lNsofrysJlpn06AlhPTJn?utm_source=generator&theme=0"
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      allowFullScreen
    ></iframe>
  );
};

export default SpotifyIframe;
