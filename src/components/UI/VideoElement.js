import { FaMedal } from "react-icons/fa";
import { FaEye, FaThumbsUp, FaComment } from "react-icons/fa";
import { CurrentConverter } from "../../utils/functions";
const VideoElement = ({ videosData }) => {
  console.log(videosData);
  return (
    <div className="videoCardConatiner">
      <div className="section1">
        <div className="pill">
          <FaMedal />
          {""}
          <p>Top Earner Video</p>
        </div>
        <img
          src={videosData?.images?.maxres?.url}
          alt="No image "
          className="sectionImg"
        />
        Uploaded On - {new Date(videosData.publishedAt).toLocaleDateString()}
      </div>
      <div className="section2">
        <p>{videosData.title}</p>
        <p>
          <FaEye></FaEye> {videosData?.stats?.viewCount}
        </p>
        <p>
          <FaThumbsUp></FaThumbsUp> {videosData?.stats?.likeCount}
        </p>
        <p>
          <FaComment></FaComment> {videosData?.stats?.commentCount}
        </p>
      </div>
      <div className="section3">
        <span className="b">
          <p>{CurrentConverter(videosData?.stats?.earning)}</p>
        </span>
        {/* <span className="section3div"> </span> */}
      </div>
    </div>
  );
};
export default VideoElement;
