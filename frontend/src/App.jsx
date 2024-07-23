import "./App.css";
import "./assets/styles/component.scss";
import { Route, Routes } from "react-router-dom";
import MainView from "./views/main/MainView";
import LoginView from "./views/pages/login/LoginView";
import CommunityMainView from "./views/pages/community/CommunityMainView";
import ResourcesView from "./views/pages/resources/ResourcesView";
import DeveloperContactView from "./views/pages/developerContact/DeveloperContactView";
import MainContentView from "./views/main/components/MainContentView";
import PageNotFoundView from "./views/pages/PageNotFoundView";
import PostDetailView from "./views/pages/community/PostDetailView";

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<LoginView />} />
				<Route path="/" element={<MainView />} exact>
					<Route path="" element={<MainContentView />} />
					<Route path="community" element={<CommunityMainView />} />
					<Route path="community/detail/:id" element={<PostDetailView />} />
					<Route path="resources" element={<ResourcesView />} />
					<Route
						path="developer-contact"
						element={<DeveloperContactView />}
					/>
				</Route>
				<Route path="*" element={<PageNotFoundView />} />
			</Routes>
		</>
	);
}

export default App;
