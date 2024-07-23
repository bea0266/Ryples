import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const usePostDetail = () => {
	const { id } = useParams();
    const [postDetail, setPostDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`/boards/${id}`);
                const data = await response.json();
                setPostDetail(data);
            } catch (error) {
                console.error("Failed to fetch post detail:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return { postDetail, isLoading };
}
export default function PostDetailView() {
	const { postDetail, isLoading }= usePostDetail();

	const tableStyle = {
		border: "1px solid black",
	};

	if (isLoading) return <div>Loading...</div>;
	
	return (
		<>
			<div>게시글 상세 페이지</div>
			<table style={tableStyle}>
				<tr>
					<td>ID</td>
					<td>{postDetail.id}</td>
				</tr>
				<tr>
					<td>제목</td>
					<td>{postDetail.title}</td>
				</tr>
				<tr>
					<td>내용</td>
					<td>{postDetail.description}</td>
				</tr>
				<tr>
					<td>작성자</td>
					<td>{postDetail.writer}</td>
				</tr>
				<tr>
					<td>작성날짜</td>
					<td>{postDetail.writeDate}</td>
				</tr>
				<tr>
					<td>조회수</td>
					<td>{postDetail.hits}</td>
				</tr>
				<tr>
					<td>추천수</td>
					<td>{postDetail.recommends}</td>
				</tr>
			</table>
		</>
	);
}
