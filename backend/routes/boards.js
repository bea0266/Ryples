var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	return res.json({
		data: [
			{ id: 1, title: "Board 1" },
			{ id: 2, title: "Board 2" },
			{ id: 3, title: "Board 3" },
		],
	});
});

/* 게시글 상세 조회 */
router.get("/:postId", function (req, res, next) {
	console.log('req: ', req.params.postId)
	return res.json({
		id: req.params.postId,
		title: "제목입니다.",
		description: "내용입니다.",
		writer: "배승찬8",
		writeDate: "2024-06-27 10:00:00",
		hits: 10,
		recommends: 10,
	});
});
module.exports = router;
