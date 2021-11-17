import React from "react";
import {
  Card,
  Segment,
  Grid,
  Icon,
  Button,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import styles from "./Eventview.module.css";
import userpng from "../../Assets/user.png";
import { comment } from "./comments_data";
import { annoouncement, announcement } from "./announcements_data";
import { Header } from "../Home/Header";
import { ReadMore } from "../Milestones/ReadMore";
import eventsstyle from "../OrganizersHome/Eventsstyle.module.css";
import { useParams } from "react-router-dom";
import imgDef from "../../Assets/user.png";

import { useState, useEffect } from "react";
import axios from "axios";

export const Eventview = (props) => {
  const [event, setEvent] = useState();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const asyncWrapper = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      await axios
        .get(`/api/v1/organizer/event?eventId=${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setEvent(res.data.data);
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.body);
          }
        });
    };
    asyncWrapper();
  }, []);

  return (
    <>
      <Header />
      {event && (
        <div className={styles.EventBody}>
          <h2 className={styles.heading}>Event View</h2>
          <div className={styles.Eventcontainer3}>
            <div>
              <div className={styles.Eventcontainer}>
                <h4 className={styles.counter}>{event.eventName}</h4>
                <div>
                  <form action="" className={styles.img}>
                    <img
                      src={event.eventImage || imgDef}
                      alt="https://media.istockphoto.com/photos/paper-brain-and-heart-tree-world-heart-day-world-mental-health-day-picture-id1272715286?b=1&k=20&m=1272715286&s=170667a&w=0&h=z-N-PMBZcCH22mG33_AIY3Vr29nTMaUOyzBa4V8i85Y="
                      width="1050px"
                    />
                  </form>
                </div>
                <button type="button" class="btn btn-danger">
                  {event.status}
                </button>
              </div>
              <div className={styles.Eventcontainer}>
                <div className={styles.Eventcontainer2}>
                  {" "}
                  <Icon color="teal" name="info" />
                  &nbsp;&nbsp;&nbsp;Attend the webinar on Mental Health
                  Awareness to know more about Mental Health
                </div>
                <div className={styles.Eventcontainer2}>
                  {" "}
                  <Icon color="teal" name="calendar alternate outline" />
                  &nbsp;&nbsp;Date and time <br />
                </div>
                <div className={styles.Eventcontainer2}>
                  {" "}
                  <Icon color="teal" name="map marker alternate" />
                  &nbsp;&nbsp;Zoom
                </div>
              </div>

              <div className={styles.Eventcontainer}>
                <Segment
                  inverted
                  size="large"
                  color="teal"
                  style={{ marginBottom: 0 }}
                >
                  <h2 textAlign="center">Announcements</h2>
                </Segment>
                <div>
                  {announcement.map((props) => {
                    return (
                      <>
                        {" "}
                        <div className={styles.Eventcontainer2}>
                          <a class="ui orange right ribbon label">
                            {props.Date}
                          </a>
                          <ReadMore>{props.announcement}</ReadMore>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* <div>
              <div
                className={styles.Eventcontainer}
                style={{ marginBottom: 0 }}
              ></div>
            </div> */}
          </div>
          <Segment
            inverted
            size="large"
            color="teal"
            style={{ marginBottom: 0 }}
          >
            <h2 textAlign="center">Talk about event</h2>
            <a class="ui red right ribbon label">Reviews</a>
          </Segment>
          <div>
            {comment.map((props) => {
              return (
                <>
                  <div className={styles.Eventcontainer3}>
                    <img src={userpng} alt="..." width="50px" />
                    <div>
                      <div style={{ fontWeight: "bold" }}>
                        {" "}
                        {props.username}
                      </div>
                      <div>
                        {" "}
                        <ReadMore>{props.comment}</ReadMore>
                      </div>
                      <div style={{ color: "blue" }}>
                        Edit &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: "red" }}>Delete</span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
