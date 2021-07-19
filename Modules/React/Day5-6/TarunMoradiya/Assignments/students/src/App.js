import "./App.scss";
import StudentList1 from "./componants/assignment1/StudentList";
import StudentList2 from "./componants/assignment2/StudentList";
import StudentList3 from "./componants/combine/StudentList";

// create-react-app app --use-npm
function App() {
  return (
    <div className="container bg-light">
      <div className="my-5">
        <h1 className="m-5 display-4 text-center">Assignment 1</h1>
        <StudentList1 />
      </div>
      <div className="my-5">
        <h1 className="m-5 display-4 text-center">Assignment 2</h1>
        <StudentList2 />
      </div>
      <div className="my-5">
        <h1 className="m-5 display-4 text-center">Combined</h1>
        <StudentList3 />
      </div>
    </div>
  );
}

export default App;
