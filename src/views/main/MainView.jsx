import styles from "/src/main.module.scss";
import MenuComp from "/src/views/components/MenuComp";
/** 메인 화면 */
export default function MainView() {
	return (
		<>
			<div className={styles["main-header-container"]}>
				<img className={styles.logo} />
				<div className={styles["menu-container"]}>
					<MenuComp />
				</div>
				<div className={styles["btn-container"]}>
					<button className={styles["btn-item"]}>
						다크 모드 OFF
					</button>
					<button className={styles["btn-item"]}>설정</button>
					<button className={styles["btn-item"]}>로그인</button>
				</div>
			</div>
			<div className={styles["contents-container"]}>
				<div className={styles["search-container"]}>
					<select className={styles["search-option"]}>
						<option>제목</option>
						<option>내용</option>
						<option>제목+내용</option>
					</select>
					<input className={styles["search-input"]} placeholder="검색할 내용을 입력해주세요." />
					<img className={styles["btn-search"]} />
				</div>
			</div>
		</>
	);
}
