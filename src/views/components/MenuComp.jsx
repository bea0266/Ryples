import styles from '/src/main.module.scss';
/** 메뉴 컴포넌트 */
export default function MenuComp() {
    return (
      <>
        <ul className={styles['menu-list']}>
          <li className={styles['menu-item']}>공지사항</li>
          <li className={styles['menu-item']}>커뮤니티</li>
          <li className={styles['menu-item']}>자료실</li>
          <li className={styles['menu-item']}>개발자 문의</li>
        </ul>
      </>   
    );
}