import React from "react";
import BaseTable from "../../components/BaseTable";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

export default function CommunityMainView() {
	interface DataType {
		id: string;
		title: string;
		description: string;
		writer: string;
		writeDate: string;
		hits: number;
		recommends: number;
	}

  function linkToPostDetails() {
    console.log("linkToPostDetails");
  }

	const columns: TableProps<DataType>["columns"] = [
		{
			title: "제목",
			dataIndex: "title",
			key: "title",
			render: text => <a onClick={linkToPostDetails}>{text}</a>,
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

	const data: DataType[] = [
		{
			id: "1",
			title: "제목입니다.",
			description: "내용입니다.",
			writer: "배승찬1",
			writeDate: "2024-06-27 10:00:00",
			hits: 10,
			recommends: 10,
		},
		// 2개 더 추가
		{
			id: "2",
			title: "제목입니다.",
			description: "내용입니다.",
			writer: "배승찬2",
			writeDate: "2024-06-27 10:00:00",
			hits: 10,
			recommends: 10,
		},
		{
			id: "3",
			title: "제목입니다.",
			description: "내용입니다.",
			writer: "배승찬3",
			writeDate: "2024-06-27 10:00:00",
			hits: 10,
			recommends: 10,
		},
    // 똑같은 프로퍼티를 가진 객체를 15개 더 추가
    {
      id: "4",
      title: "제목입니다.",
      description: "내용입니다.",
      writer: "배승찬4",
      writeDate: "2024-06-27 10:00:00",
      hits: 10,
      recommends: 10,
    },
    {
      id: "5",
      title: "제목입니다.",
      description: "내용입니다.",
      writer: "배승찬5",
      writeDate: "2024-06-27 10:00:00",
      hits: 10,
      recommends: 10,
    },
    {
      id: "6",
      title: "제목입니다.",
      description: "내용입니다.",
      writer: "배승찬6",
      writeDate: "2024-06-27 10:00:00",
      hits: 10,
      recommends: 10,
    },
    {
      id: "7",
      title: "제목입니다.",
      description: "내용입니다.",
      writer: "배승찬7",
      writeDate: "2024-06-27 10:00:00",
      hits: 10,
      recommends: 10,
    },
    {
      id: "8",
      title: "제목입니다.",
      description: "내용입니다.",
      writer: "배승찬8",
      writeDate: "2024-06-27 10:00:00",
      hits: 10,
      recommends: 10,
    },
    {
      id: "9",
      title: "제목입니다.",
      description: "내용입니다.",
      writer: "배승찬9",
      writeDate: "2024-06-27 10:00:00",
      hits: 10,
      recommends: 10,
    },
    {
      id: "10",
      title: "제목입니다.",
      description: "내용입니다.",
      writer: "배승찬10",
      writeDate: "2024-06-27 10:00:00",
      hits: 10,
      recommends: 10,
    },
    {
      id: "11",
      title: "제목입니다.",
      description: "내용입니다.",
      writer: "배승찬11",
      writeDate: "2024-06-27 10:00:00",
      hits: 10,
      recommends: 10,
    },
	];
	return (
		<>
			<BaseTable columns={columns} data={data} />
		</>
	);
}
