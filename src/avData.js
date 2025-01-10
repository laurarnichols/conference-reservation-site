import projectorImg from "./assets/projector.jpg";
import signageImg from "./assets/signage.jpg";
import whiteboardImg from "./assets/whiteboard.png";
import microphoneImg from "./assets/microphone.jpg";
import speakerImg from "./assets/speaker.jpg";

export const avData = {
  header: "A/V Options",
  count: 5,
  totalCost: 0,
  options: [
    {
      title: "Projector",
      price: 200,
      count: 0,
      image: projectorImg,
    },
    {
      title: "Signage",
      price: 80,
      count: 0,
      image: signageImg,
    },
    {
      title: "Whiteboard",
      price: 80,
      count: 0,
      image: whiteboardImg,
    },
    {
      title: "Microphone",
      price: 45,
      count: 0,
      image: microphoneImg,
    },
    {
      title: "Speaker",
      price: 35,
      count: 0,
      image: speakerImg,
    },
  ],
};
