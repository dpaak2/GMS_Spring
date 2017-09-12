package com.gms.web.common;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.member.MemberDTO;

@Controller
@RequestMapping("/common")
public class CommonController {
	@Autowired MemberDTO member;
	private static final Logger logger = LoggerFactory.getLogger(CommonController.class);
	@RequestMapping( "/path/{directory}/{page}")
	public String move(@PathVariable String directory,
			@PathVariable String page) {
		logger.info("CommonController directory :: {}","진입");
		logger.info("CommonController directory :: {}",directory);
		logger.info("CommonController directory :: {}",page);
			return String.format("auth:%s/%s.tiles",directory,page);
	}
}
