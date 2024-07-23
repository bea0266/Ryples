export default function PostSearch() {
	return (
		<>
				<div className="search-container">
					<select className="search-option">
						<option>제목</option>
						<option>내용</option>
						<option>제목+내용</option>
					</select>
					<input
						className="search-input"
						placeholder="검색할 내용을 입력해주세요."
					/>
					<div className="btn-search"></div>
				</div>
		</>
	);
}
