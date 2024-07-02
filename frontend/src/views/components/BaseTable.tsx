import React from "react";
import { Table, TableProps } from "antd";

interface AppProps {
  columns: TableProps<any>['columns']; // columns의 타입을 TableProps에서 정의된 columns 타입으로 지정
  data: any[];
}
const App: React.FC<AppProps> = ({ columns, data }) => (
	<Table rowKey={(row) => row.id} columns={columns} dataSource={data}  />
);

export default App;
