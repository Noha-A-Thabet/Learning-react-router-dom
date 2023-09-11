import React from "react";
import { useParams } from "react-router";

export default function EventDetail() {
  const params = useParams();
  return (
    <div>
      <h1>Event Detail</h1>
      <p>event id : {params.eventId}</p>
    </div>
  );
}
