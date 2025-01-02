// src/data.js
import auditoriumImg from './assets/auditorium.jpg';
import presentationRoomImg from './assets/presentation-room.jpg';
import conferenceRoomImg from './assets/conference-room.jpg';
import largeMeetingRoomImg from './assets/large-meeting-room.jpg';
import smallMeetingRoomImg from './assets/small-meeting-room.jpg';
import projectorImg from './assets/projector.jpg';
import signageImg from './assets/signage.jpg';
import whiteboardImg from './assets/whiteboard.png';
import microphoneImg from './assets/microphone.jpg';
import speakerImg from './assets/speaker.jpg';

export const sectionsData = [
  {
    header: "Venue Options",
    options: [
      { title: "Auditorium Hall", capacity: "200 people", price: 5500, count: 0, image: auditoriumImg },
      { title: "Presentation Room", capacity: "50 people", price: 3500, count: 0, image: presentationRoomImg },
      { title: "Conference Room", capacity: "15 people", price: 1500, count: 0, image: conferenceRoomImg },
      { title: "Large Meeting Room", capacity: "10 people", price: 1000, count: 0, image: largeMeetingRoomImg },
      { title: "Small Meeting Room", capacity: "5 people", price: 800, count: 0, image: smallMeetingRoomImg }
    ]
  },
  {
    header: "Audio/Visual Options",
    options: [
      { title: "Projector", capacity: "", price: 200, count: 0, image: projectorImg },
      { title: "Signage", capacity: "", price: 80, count: 0, image: signageImg },
      { title: "Whiteboard", capacity: "", price: 80, count: 0, image: whiteboardImg },
      { title: "Microphone", capacity: "", price: 45, count: 0, image: microphoneImg },
      { title: "Speaker", capacity: "", price: 35, count: 0, image: speakerImg }
    ]
  }
];
