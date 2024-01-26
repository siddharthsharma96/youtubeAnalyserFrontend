// VideoTable.js
import React from "react";
import { CurrentConverter } from "../../utils/functions";

const VideoTable = ({ videosData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th colSpan={2}>Title</th>
          <th colSpan={2}>Thumbnail</th>
          <th>Views</th>
          <th>Likes</th>
          <th>Comment</th>
          <th colSpan={2}>Uploaded On</th>
          <th>Estimated Earning</th>
        </tr>
      </thead>
      <tbody>
        {videosData.map((video, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td colSpan={2} width={240}>
              {video.title}
            </td>
            <td colSpan={2}>
              <img
                src={video?.images?.default?.url}
                height={"80px"}
                width={"80px"}
                alt="image not found"
              />
            </td>
            <td>{video?.stats?.viewCount}</td>
            <td>{video?.stats?.likeCount}</td>
            <td>{video?.stats?.commentCount}</td>
            <td colSpan={2}>
              {new Date(video?.publishedAt).toLocaleDateString()}
            </td>
            <td>{CurrentConverter(video?.stats?.earning)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VideoTable;
