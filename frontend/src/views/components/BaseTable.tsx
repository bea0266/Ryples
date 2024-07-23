import React from "react";
import { Table, TableProps } from "antd";
import PostSearch from "../main/components/PostSearch";

interface AppProps {
	columns: TableProps<any>["columns"]; // columns의 타입을 TableProps에서 정의된 columns 타입으로 지정
	data: any[];
}
const App: React.FC<AppProps> = ({ columns, data }) => (
	<>
		<div className="table-container">
			<PostSearch />
			<Table rowKey={row => row.id} columns={columns} dataSource={data} />
		</div>
	</>
);

export default App;
