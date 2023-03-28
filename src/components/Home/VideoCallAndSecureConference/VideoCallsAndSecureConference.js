import React from "react";
import VideoCalls from "./VideoCalls/VideoCalls";
import SecureConference from "./SecureConference/SecureConference";
import styles from "./VideoCallsAndSecureConference.module.css";

const VideoCallAndSecureConference = () => {
  return (
    <div className={styles.wrapper}>
      <VideoCalls />
      <SecureConference />
    </div>
  );
};
export default VideoCallAndSecureConference;
