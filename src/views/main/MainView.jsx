import styles from '/src/main.module.scss';
import MenuComp from '/src/views/components/MenuComp';
/** 메인 화면 */
export default function MainView() {
	return (
		<>	
			<div className={styles['main-header-container']}>
				<img className={styles.logo} />
				<div className={styles['menu-container']}>
					<MenuComp />
				</div>
			</div> 

		</>
	);
}
