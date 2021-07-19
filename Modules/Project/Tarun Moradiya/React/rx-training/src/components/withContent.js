import React from "react";
import { Children } from "react";

export default function withContent(Component) {
  return function ContentWrapper(props) {
    const [content, setContent] = useState({});
    const [contentName, setContentName] = useState("");
    const [editItem, setEditItem] = useState(false);
    const editField = useRef("");

    useEffect(() => {
      setContent(props.content);
    }, [props]);

    const [loading, setLoading] = useState(false);

    //display form to edit techgroup name
    const handleEditBtn = async () => {
      await setContentName(content.contentName);
      await setEditItem(true);
      editField.current.focus();
    };

    //hide edit tech group form
    const handleEditBlur = () => {
      setEditItem(false);
      setContentName("");
    };

    //update content
    const handleEdit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const res = await contentServices.updateContent(
        props.moduleId,
        props.topicId,
        content._id,
        { contentName }
      );
      setContent({ ...content, contentName: res.data.contentName });
      setEditItem(false);
      setLoading(false);
    };

    //handle delete content button
    const handleDeleteBtn = async () => {
      await setLoading(true);
      await props.deleteContent(content._id);
      setLoading(false);
    };
    return <Component {...props}>{props.children}</Component>;
  };
}
