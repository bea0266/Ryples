import "/src/main.scss";
import { Link, useNavigate, Outlet } from "react-router-dom";
/** 메인 화면 */
export default function MainView() {
	const navigate = useNavigate();
	const linkToLogin = () => {
		navigate("/login");
	};
	const clickLogo = () => {
		navigate("");
	}
	return (
		<>
			<div className="main-header-container">
				<img className="logo" onClick={clickLogo} />

				<div className="menu-container">
					<ul className="menu-list">
						{/* <li className="menu-item"><Link to="/notice">공지사항</Link></li> */}
						<li className="menu-item">
							<Link to="/community">커뮤니티</Link>
						</li>
						<li className="menu-item"><Link to="/resources">자료실</Link></li>
						<li className="menu-item"><Link to="/developer-contact">개발자 문의</Link></li>
					</ul>
				</div>
				<div className="btn-container">
					<button className="btn-item">다크 모드 OFF</button>
					<button className="btn-item">설정</button>
					<button className="btn-item" onClick={linkToLogin}>
						로그인
					</button>
				</div>
			</div>
			<Outlet />
		</>
	);
}
