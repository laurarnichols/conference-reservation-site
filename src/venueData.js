import auditoriumImg from "./assets/auditorium.jpg";
import presentationRoomImg from "./assets/presentation-room.jpg";
import conferenceRoomImg from "./assets/conference-room.jpg";
import largeMeetingRoomImg from "./assets/large-meeting-room.jpg";
import smallMeetingRoomImg from "./assets/small-meeting-room.jpg";

export const venueData = {
  header: "Venue Options",
  count: 5,
  totalCost: 0,
  options: [
    {
      title: "Auditorium Hall",
      type: "venue",
      capacity: "200 people",
      price: 5500,
      count: 0,
      image: auditoriumImg,
    },
    {
      title: "Presentation Room",
      type: "venue",
      capacity: "50 people",
      price: 3500,
      count: 0,
      image: presentationRoomImg,
    },
    {
      title: "Conference Room",
      type: "venue",
      capacity: "15 people",
      price: 1500,
      count: 0,
      image: conferenceRoomImg,
    },
    {
      title: "Large Meeting Room",
      type: "venue",
      capacity: "10 people",
      price: 1000,
      count: 0,
      image: largeMeetingRoomImg,
    },
    {
      title: "Small Meeting Room",
      type: "venue",
      capacity: "5 people",
      price: 800,
      count: 0,
      image: smallMeetingRoomImg,
    },
  ],
};
