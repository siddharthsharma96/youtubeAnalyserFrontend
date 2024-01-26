import YoutubeSearchBar from "../components/UI/YoutubeSearchBar";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="container">
        <h1 className="heading">Discover your earning potential</h1>
        <p className="para">
          Turn your Youtube expertise into a lucrative income through resource
          sharing
        </p>
      </div>
      <YoutubeSearchBar></YoutubeSearchBar>
    </div>
  );
};
export default Home;
