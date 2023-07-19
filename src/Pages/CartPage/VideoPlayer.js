import ReactPlayer from 'react-player';

function MyVideoComponent() {
  return (
    <div>
      <ReactPlayer
        url="https://youtu.be/ZuQuOnYnr3Q"
        controls
        width="100%"
        height="530px"
      />
    </div>
  );
}

export default MyVideoComponent;