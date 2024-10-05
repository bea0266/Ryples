import React, { useEffect, useState } from "react";
import BaseTable from "../../components/BaseTable";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Link, useNavigate } from "react-router-dom";
import RestApiHelper from "../../../utils/RestApiHelper";
interface BoardResponse {
	id: string;
	title: string;
	description: string;
	writer: string;
	writeDate: string;
	hits: number;
	recommends: number;
}

interface Columns {
	id: string;
	title: string;
	description: string;
	writer: string;
	writeDate: string;
	hits: number;
	recommends: number;
}

export default function CommunityMainView() {
	const navigate = useNavigate();
	const [boards, setBoards] = useState<BoardResponse[]>([]);
	const [tableData, setTableData] = useState<Columns[]>([]);

	/**
	 * 선택 게시글 상세보기 페이지 이동
	 * @param id 글 번호
	 */
	const linkToPostDetails = (id: string) => {
		navigate(`detail/${id}`);
	};

	/**
	 * 게시글 목록 조회
	 */
	const getBoards = async () => {
		try {
			const response = await RestApiHelper.get('/boards', {});
			setBoards(response.data.data);
			setTableData(boards);
		} catch (error) {
			setBoards([]);
			setTableData([]);
		}

	};
	

	const columns: TableProps<Columns>["columns"] = [
		{
			title: "제목",
			dataIndex: "title",
			key: "title",
			render: (text, record) => (
				<a onClick={() => linkToPostDetails(record.id)}>{text}</a>
			),
		},
		{
			title: "작성자",
			dataIndex: "writer",
			key: "writer",
		},
		{
			title: "게시일",
			dataIndex: "writeDate",
			key: "writeDate",
		},
		{
			title: "조회수",
			dataIndex: "hits",
			key: "hits",
		},
		{
			title: "추천수",
			dataIndex: "recommends",
			key: "recommends",
		},
	];

	useEffect(() => {
		getBoards();
	}, []);

	useEffect(() => {
		setTableData(boards);
	}, [boards]);

	// 게시글 작성 화면으로 이동합니다. 
	function clickWriteBtn() {
		navigate("/community/write");
	}

	return (
		<>
			<BaseTable columns={columns} data={tableData} isWriteBtnVisible={true} clickWriteBtn={clickWriteBtn} />
		</>
	);
}
