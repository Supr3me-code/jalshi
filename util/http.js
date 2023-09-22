import axios from "axios";

const BACKEND_URL =
  "https://jalshi-default-rtdb.asia-southeast1.firebasedatabase.app";

export const fetchEvents = async () => {
  const response = await axios.get(`${BACKEND_URL}/events.json`);

  const events = [];

  for (const key in response.data) {
    const eventObj = {
      id: key,
      title: response.data[key].title,
      time: response.data[key].time,
      date: response.data[key].date,
      location: response.data[key].location,
      imageUrl: response.data[key].imageUrl,
      description: response.data[key].description,
    };
    events.push(eventObj);
  }
  return events;
};

export const fetchMessages = async () => {
  const response = await axios.get(`${BACKEND_URL}/messages.json`);
  const messages = [];

  for (const key in response.data) {
    const messageObj = {
      id: key,
      name: response.data[key].name,
      message: response.data[key].message,
    };
    messages.push(messageObj);
  }
  return messages;
};

export const fetchInfo = async () => {
  const response = await axios.get(`${BACKEND_URL}/info.json`);
  const info = [];

  for (const key in response.data) {
    const infoObj = {
      id: key,
      title: response.data[key].title,
      subtitle: response.data[key].subtitle,
      imageUrl: response.data[key].imageUrl,
      description: response.data[key].description,
    };
    info.push(infoObj);
  }
  return info;
};
