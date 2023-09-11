import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "p1",
    title: "first event",
  },
  {
    id: "p2",
    title: "second event",
  },
];

export default function Event() {
  return (
    <div>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
