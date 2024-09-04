import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostWriteView() {
  return (
	<>
		<div>게시글 작성 페이지</div>
		<form>
			<div>
				<label>제목</label>
				<input type="text" />
			</div>
			<div>
				<label>내용</label>
				<textarea></textarea>
			</div>
			<button>작성</button>
		</form>
	</>
  )
}
