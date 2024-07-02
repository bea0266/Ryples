import React from "react";

export default function MainContentView() {
	return (
		<>
			<div className="contents-container">
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
					<img className="btn-search" />
				</div>
				<div className="border-container">
					<div className="sub-tit weekly-best-title">
						이번 주 인기 게시글
					</div>
					<div className="weekly-best-container">
						<ul>
							<li className="img-item-box">
								<div className="img">image</div>
								<div className="title">
									이미지 업로드중입니다.
								</div>
							</li>
							<li className="img-item-box">
								<div className="img">image</div>
								<div className="title">
									이미지 업로드중입니다.
								</div>
							</li>
							<li className="img-item-box">
								<div className="img">image</div>
								<div className="title">
									이미지 업로드중입니다.
								</div>
							</li>
							<li className="img-item-box">
								<div className="img">image</div>
								<div className="title">
									이미지 업로드중입니다.
								</div>
							</li>
							<li className="img-item-box">
								<div className="img">image</div>
								<div className="title">
									이미지 업로드중입니다.
								</div>
							</li>
							<li className="img-item-box">
								<div className="img">image</div>
								<div className="title">
									이미지 업로드중입니다.
								</div>
							</li>
						</ul>
						<ul>
							<li className="img-item-box">
								<div className="img">image</div>
								<div className="title">
									이미지 업로드중입니다.
								</div>
							</li>
							<li className="img-item-box">
								<div className="img">image</div>
								<div className="title">
									이미지 업로드중입니다.
								</div>
							</li>
							<li className="img-item-box">
								<div className="img">image</div>
								<div className="title">
									이미지 업로드중입니다.
								</div>
							</li>
							<li className="img-item-box">
								<div className="img">image</div>
								<div className="title">
									이미지 업로드중입니다.
								</div>
							</li>
							<li className="img-item-box">
								<div className="img">image</div>
								<div className="title">
									이미지 업로드중입니다.
								</div>
							</li>
							<li className="img-item-box">
								<div className="img">image</div>
								<div className="title">
									이미지 업로드중입니다.
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
