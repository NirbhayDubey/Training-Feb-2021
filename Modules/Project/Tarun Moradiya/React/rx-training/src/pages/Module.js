import React, { useEffect, useState, useContext, useRef } from "react";
import moduleServces from "../services/ModuleServces";
import { Container, ProgressBar } from "react-bootstrap";
import { ModuleContext } from "../contexts/moduleContext";
import UpdateModule from "../components/UpdateModule";
import AddTopic from "../components/AddTopic";
import topicServices from "../services/TopicServicees";
import Topic from "../components/Topic";
import loadingGif from "../images/gif/loading-arrow.gif";
import { AuthContext } from "../contexts/authContext";
import { useParams, useHistory } from "react-router";
import AddCsvFile from "../components/AddCsvFile";

export default function Module({ match }) {
  const [loading, setLoading] = useState(true);
  const [loadingNew, setLoadingNew] = useState(false);
  const [loadingTitle, setLoadingTitle] = useState(false);

  const history = useHistory();

  const { id } = useParams();

  const [show, setShow] = useState(false);
  const [showCsv, setShowCsv] = useState(false);
  const [showTopic, setShowTopic] = useState(false);

  const [diplayUpdateForm, setDisplayUpdateForm] = useState(false);
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [displayAddCsvForm, setDisplayAddCsvForm] = useState(false);

  const inpRef = useRef("");
  const topicRef = useRef("");

  const [module, setModule] = useState({});
  const [topics, setTopics] = useState([]);
  const [tech, setTech] = useState({});

  const { deleteModule, updateModule } = useContext(ModuleContext);

  const [progress, setProgress] = useState(0);
  const { isAdminUser } = useContext(AuthContext);

  const getData = async () => {
    const res = await moduleServces.getModuleById(id);
    await setModule(res.data);
    await setTech(res.data.tech);
    await setTopics(res.data.topics);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [match, id]);

  //show and hide modal
  const handleClose = () => {
    setShow(false);
    setDisplayUpdateForm(false);
  };
  const handleCloseTopic = () => {
    setShowTopic(false);
    setDisplayAddForm();
  };
  const handleCloseCsv = () => {
    setShowCsv(false);
    setDisplayAddCsvForm(false);
  };

  const handleShowTopic = async () => {
    await setShowTopic(true);
    await setDisplayAddForm(true);
    topicRef.current.focus();
  };

  const handleShow = async () => {
    await setShow(true);
    await setDisplayUpdateForm(true);
    inpRef.current.focus();
  };
  const handleShowCsv = () => {
    setShowCsv(true);
    setDisplayAddCsvForm(true);
  };

  //delete module
  const handleDeleteBtn = async () => {
    await setLoading(true);
    await deleteModule(module._id);
    setLoading(false);
    history.push("/");
  };

  //update module name
  const handleUpdate = async (name, newTopics) => {
    setShow(false);
    setLoadingTitle(true);
    if (newTopics) setLoading(true);
    const data = await updateModule(module._id, name, newTopics);
    setModule({ ...module, name: data.name });
    if (newTopics) {
      setModule({ ...module, topics: data.topics });
      setTopics(data.topics);
    }
    setDisplayUpdateForm(false);
    setLoadingTitle(false);
    setLoading(false);
  };

  //add topic
  const addTopic = async (topic) => {
    await setShowTopic(false);
    setLoadingNew(true);
    const res = await topicServices.createTopic(module._id, topic, setProgress);
    console.log(res);
    setTopics([...topics, res.data]);
    setModule({ ...module, topics: [...topics, res.data] });
    setDisplayAddForm(false);
    setLoadingNew(false);
  };

  //add topics
  const addTopics = async (csvFile) => {
    await setShowCsv(false);
    setLoadingNew(true);
    const formData = new FormData();
    formData.append("topics", csvFile);
    const res = await topicServices.addTopics(module._id, formData);
    if (res.data.err) console.error(res.data.err);
    else {
      await setTopics([...topics, ...res.data.topicsArr]);
      setModule({ ...module, topics: [...topics, ...res.data.topicsArr] });
    }

    setDisplayAddCsvForm(false);
    setLoadingNew(false);
  };

  //delete topic
  const deleteTopic = async (topicId) => {
    const res = await topicServices.deleteTopic(module._id, topicId);
    console.log("deleted", res.data);
    const filteredTopics = topics.filter((topic) => topic._id !== topicId);
    setTopics(filteredTopics);
    setModule({ ...module, topics: filteredTopics });
  };

  if (loading) {
    return (
      <Container>
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid d-block mx-auto"
        />
      </Container>
    );
  }
  return (
    <Container>
      <div className="clearfix p-2">
        {isAdminUser === true && (
          <>
            <button
              className="btn btn-warning float-right ml-2"
              onClick={handleShowTopic}
            >
              <i className="fas fa-plus"></i>
            </button>
            {displayAddForm && (
              <AddTopic
                id="add-tech-type"
                topicRef={topicRef}
                show={showTopic}
                handleClose={handleCloseTopic}
                add={addTopic}
              />
            )}
            <button
              onClick={handleDeleteBtn}
              className="btn btn-danger float-right ml-2"
            >
              <i className="fas fa-trash"></i>
            </button>
            <button
              onClick={handleShow}
              className="btn btn-primary float-right ml-2"
            >
              <i className="fas fa-pen"></i>
            </button>
            <button
              className="btn btn-secondary float-right ml-2"
              onClick={handleShowCsv}
            >
              <i className="fas fa-file-csv"></i>
            </button>
          </>
        )}
        {diplayUpdateForm && (
          <UpdateModule
            id="add-tech-type"
            inpRef={inpRef}
            show={show}
            handleClose={handleClose}
            update={handleUpdate}
            module={module}
          />
        )}

        {displayAddCsvForm && (
          <AddCsvFile
            id="add-days"
            func={addTopics}
            handleClose={handleCloseCsv}
            show={showCsv}
          />
        )}
        {loadingTitle ? (
          <img
            src={loadingGif}
            alt="Loading..."
            className="img-fluid d-block mx-auto"
          />
        ) : (
          <h1 className="display-3">{`${tech.name} ${module.name}`}</h1>
        )}
      </div>
      <hr />
      {topics.map((topic) => (
        <Topic
          key={topic._id}
          topic={topic}
          module={module}
          setModule={setModule}
          topics={topics}
          setTopics={setTopics}
          deleteTopic={deleteTopic}
        ></Topic>
      ))}
      {progress !== 0 && progress !== 100 && (
        <ProgressBar animated now={progress} label="uploading to server" />
      )}
      {loadingNew && (
        <img
          src={loadingGif}
          alt="Loading..."
          className="img-fluid d-block mx-auto"
        />
      )}
    </Container>
  );
}
