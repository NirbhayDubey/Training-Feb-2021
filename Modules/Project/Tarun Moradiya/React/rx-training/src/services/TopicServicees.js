import axios from "axios";

const TOPIC_API_BASE_URL = `${process.env.REACT_APP_URL}/modules`;
// axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class TopicService {
  getTopics(moduleId) {
    return axios.get(`${TOPIC_API_BASE_URL}/${moduleId}/topics`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  createTopic(moduleId, topic, setProgress) {
    console.log("sending", topic);
    return axios.post(`${TOPIC_API_BASE_URL}/${moduleId}/topics`, topic, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
      onUploadProgress: (data) => {
        //Set the progress value to show the progress bar
        setProgress(Math.round((100 * data.loaded) / data.total));
      },
    });
  }

  addTopics(moduleId, topics) {
    console.log("sending", topics);
    return axios.post(
      `${TOPIC_API_BASE_URL}/${moduleId}/topics/multiple`,
      topics,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  getTopicById(moduleId, topicId) {
    return axios.get(`${TOPIC_API_BASE_URL}/${moduleId}/topics/${topicId}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  updateTopic(moduleId, topicId, topic) {
    return axios.put(
      `${TOPIC_API_BASE_URL}/${moduleId}/topics/${topicId}`,
      topic,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  deleteTopic(moduleId, topicId) {
    return axios.delete(`${TOPIC_API_BASE_URL}/${moduleId}/topics/${topicId}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }
}

export default new TopicService();
