var express = require("express");
var router = express.Router();
// const pool = require("../config/dbConfig");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* GET home page. */
router.get("/", async function (req, res, next) {
	const title = req.query.search_title;
	const contents = req.query.search_contents;
	const searchType = req.query.search_type;

	
    let whereClause = {};

    if (searchType === 'title') {
        whereClause = { title: title };
    } else if (searchType === 'contents') {
        whereClause = { contents: contents };
    } else {
        whereClause = { title: title }; // 기본적으로 TITLE로 검색
    }

	const boards = await prisma.board.findMany({
		where: whereClause,
	});
	console.log('boards', boards);

	// bigint 타입은 JSON으로 변환할 때 문제가 생기므로 string으로 변환
	const results = boards.map((item) => {
		return {
			...item,
			id: item.id.toString(),
		};
	});
	// TODO: 상태 코드 enum 처리
	return res.status(200).json({ data: results });
});

/* 게시글 상세 조회 */
router.get("/:postId", async function (req, res, next) {
	const details = await prisma.board.findUnique({
		where: { id: Number(req.params.postId) },
	})
    
	console.log('details', details);

    const result = {
		...details,
		id: details.id.toString(),
	};
	return res.status(200).json(result);
});

module.exports = router;
