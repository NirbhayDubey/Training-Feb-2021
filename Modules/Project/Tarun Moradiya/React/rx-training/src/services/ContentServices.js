import axios from "axios";

const CONTENT_API_BASE_URL = `${process.env.REACT_APP_URL}/modules`;
// axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class ContentService {
  getContents(moduleId, topicId) {
    return axios.get(
      `${CONTENT_API_BASE_URL}/${moduleId}/topics/${topicId}/contents`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  createContent(moduleId, topicId, content) {
    console.log("sending", content);
    return axios.post(
      `${CONTENT_API_BASE_URL}/${moduleId}/topics/${topicId}/contents`,
      content,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  getContentById(moduleId, topicId, contentId) {
    return axios.get(
      `${CONTENT_API_BASE_URL}/${moduleId}/topics/${topicId}/contents/${contentId}`,
      {
        responseType: "blob",
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  updateContent(moduleId, topicId, contentId, content) {
    return axios.put(
      `${CONTENT_API_BASE_URL}/${moduleId}/topics/${topicId}/contents/${contentId}`,
      content,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  deleteContent(moduleId, topicId, contentId) {
    return axios.delete(
      `${CONTENT_API_BASE_URL}/${moduleId}/topics/${topicId}/contents/${contentId}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }
}

export default new ContentService();

// ,
//       onUploadProgress: (data) => {
//         //Set the progress value to show the progress bar
//         setProgress(Math.round((100 * data.loaded) / data.total));
//       },
