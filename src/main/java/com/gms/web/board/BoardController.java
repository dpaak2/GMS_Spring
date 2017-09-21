package com.gms.web.board;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
@RestController

public class BoardController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	
	@RequestMapping("/get/{cate}/list")  /*rest중에서 get으로 실행되고 있다    url이 된다 */
	public @ResponseBody Map<?,?> boardList(@PathVariable String cate) {
		/*게시판의 목록을 가져와 */
		logger.info("board list ::: {}","진입");
		Map<String, String> map =new HashMap<>();
		System.out.println("/board/list 들어옴");
	
		switch (cate) {
		case "board":
			map.put("msg", "게시판"+"리스트");
			break;

		case "grade":
			map.put("msg", "성적"+"리스트");
				break;
		}

		return map;
	}

}
