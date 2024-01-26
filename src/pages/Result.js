import VideoElement from "../components/UI/VideoElement";
import VideoTable from "../components/UI/VideoTable";
import { useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Loader from "../components/Common/Loader";

const Result = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const videoId = searchParams.get("videoId");

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async (id) => {
    try {
      let response = await fetch(
        `https://youtube-analyser-68s2.onrender.com/search?id=${id}`
      );
      setLoading(true);
      if (response.status === 200) {
        let resultData = await response.json();
        setData(resultData);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchData(videoId);
    }

    return () => {
      setData({});
      setLoading(true);
    };
  }, [videoId]);

  return loading ? (
    <Loader></Loader>
  ) : data ? (
    <div className="resultPage">
      <VideoElement videosData={data && data.base ? data.base : {}} />
      <Fragment>
        <p className="resultHeading">Other Video Potentials</p>
        <VideoTable videosData={data && data.other ? data.other : []} />
      </Fragment>
    </div>
  ) : (
    "No Data found"
  );
};
export default Result;
