import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Cardvideo } from "./Cardvideo";
import Navbar from "./Navbar";
import moment from "moment/moment";
import numeral from "numeral";

export function VideoRead() {
  const { videoId, channelId } = useParams();
  const [videRealated, setVideorelated] = useState([]);
  const [infoVideo, setInfovideo] = useState([]);
  const [videoChannelInfos, setVideoChannelInfos] = useState([]);

  const key = "AIzaSyA82fnpCQ86CtAgV8qlgkgZdQtyI0mJfgU";
  //const fecthData = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${key}`;
  const fetchRelated = ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=45&relatedToVideoId=${videoId}&type=video&key=${key}`;
  const fecthVideoById = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&maxResults=50&key=${key}`;
  const fetchChannelByVideo = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${key}`;
  //Adding the accessToken pour le comportement
  const accessToken = localStorage.getItem("token");
  useEffect(() => {
    fetch(fetchRelated, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setVideorelated(data.items);
        console.log("tester 3", data.items);
      });
  }, [accessToken, videoId]);

  useEffect(() => {
    fetch(fecthVideoById, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setInfovideo(data?.items);
      });
  }, [accessToken, videoId]);

  useEffect(() => {
    fetch(fetchChannelByVideo, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setVideoChannelInfos(data?.items);
        console.log("tester", data);
      });
  }, [accessToken, videoId]);

  console.log("videos : ", videoChannelInfos);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container centerVideo">
        <div className="col-md-8">

          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allowFullScreen="allowFullScreen"
          ></iframe>


        
          <div>
            {infoVideo?.map((item, id) => (
              <div key={id}>
                <p className="titreVideo">{item?.snippet?.title}</p>

                <div className="video__infos">
                  <div className="comment__infos">
                    {numeral(item?.statistics?.viewCount).format("O.a")} views
                  </div>
                  <div className="comment__infos">
                    <i className="fa-solid fa-thumbs-up"></i>{" "}
                    {numeral(item?.statistics?.likeCount).format("O.a")}
                  </div>
                  <div className="comment__infos">
                    Comments :{" "}
                    {numeral(item?.statistics?.commentCount).format("O.a")}
                  </div>
                  <div className="comment__infos">
                    Published : {moment(item?.snippet?.publishedAt).fromNow()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        <div>
          {videoChannelInfos.map((item, id) => {
            const channelId = item.id;
            return (
              <Link
                to={`/chanelVideosPage/${channelId}`}
                className="channel__link"
                key={id}
              >
                <div className="channel__info__container">
                  <div className="channel__image">
                    <img
                      className="img-circle" width="10%"
                      src={item.snippet.thumbnails["medium"]["url"]}
                      alt=""
                    />
                  </div>
                  <p className="textchaine">{item.snippet.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
        </div>
        

        <div className="col-md-4 main">
          <div className="row">
            {videRealated.map((item, id) => (
              <Link
                className=""
                to={`/videoplay/${item.id.videoId}/${item?.snippet?.channelId}`}
                key={id}
              >
                <Cardvideo key={id} video={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
