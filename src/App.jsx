import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainView from "./views/main/MainView";
import LoginView from "./views/pages/login/LoginView";
import CommunityMainView from "./views/pages/community/CommunityMainView";
import ResourcesView from "./views/pages/resources/ResourcesView";
import DeveloperContactView from "./views/pages/developerContact/DeveloperContactView";
import MainContentView from "./views/main/components/MainContentView";

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<LoginView />} />
				<Route path="/" element={<MainView />}>
					<Route path="" element={<MainContentView />} />
					<Route path="community" element={<CommunityMainView />} />
					<Route path="resources" element={<ResourcesView />} />
					<Route path="developer-contact" element={<DeveloperContactView />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
