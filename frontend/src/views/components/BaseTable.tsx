import React from "react";
import { Table, TableProps } from "antd";
import PostSearch from "../main/components/PostSearch";

interface AppProps {
	columns: TableProps<any>["columns"]; // columns의 타입을 TableProps에서 정의된 columns 타입으로 지정
	data: any[]; // 테이블 리스트 항목
	isWriteBtnVisible: boolean; // 글쓰기 버튼 보이게 할지 여부
	clickWriteBtn?: () => void; // 글쓰기 버튼 클릭 시 실행할 함수
}

const App: React.FC<AppProps> = ({ columns, data, isWriteBtnVisible, clickWriteBtn }) => {
	// 글쓰기 버튼 클릭 시 실행할 함수
	function handleClickWriteBtn() {
		if (clickWriteBtn) {
			clickWriteBtn();
		} 
		return;
	}
	
	return (<>
		<div className="table-container">
			<PostSearch />
			{isWriteBtnVisible && <button onClick={handleClickWriteBtn}>글쓰기</button>}
			<Table rowKey={row => row.id} columns={columns} dataSource={data} />
		</div>
	</>);
};

export default App;
