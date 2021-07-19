import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createPost from './components/screens/CreatePost';
import CreateStory from './components/screens/CreateStory';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import Login from './pages/login';
import signup from './pages/signup'
import EditPost from './components/screens/EditPost'
import UpdateProfilePic from './components/screens/UpdateProfilePic';
import UserProfile from './components/screens/UserProfile';
import Conversation from './components/Chats/Conversation';


function App() {
	return (
		<div>
			<Router>
				<Route path="/" exact component={Login}></Route>
				<Route path="/signup" component={signup}></Route>
				<div className="container">
					<Switch>
						<Route path="/home" component={Home}></Route>
						<Route path="/createpost" component={createPost}></Route>
						<Route path="/createstory" component={CreateStory}></Route>
						<Route path="/editpost/:id" component={EditPost}></Route>
						<Route path="/chats" exact component={Conversation}></Route>

						<Route path="/profile" exact component={Profile}></Route>
						<Route path="/profile/updateProfilePic" component={UpdateProfilePic}></Route>
						<Route path="/profile/:id" exact component={UserProfile}></Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);


// https://flaviocopes.com/axios-send-authorization-header/

