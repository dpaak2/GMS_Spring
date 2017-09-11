package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class MemberController {
	@Autowired MemberService service;
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@RequestMapping("/member_add")
	public String memberAdd() {
		logger.info("MemberController!::::: memberAdd {}","진입" );
		
		return "auth:member/member_add.tiles";
	}
	
	@RequestMapping("/member_list")
	public String memberList(Model model){
		String count = service.count();
		logger.info("MemberController!::::: memberList {}","진입" );
		logger.info(" memberList.list() {}",count );
		model.addAttribute("count",count);
		return "auth:member/member_list.tiles";
	}
	
	@RequestMapping("/member_detail")
	public String memberDetail() {
		logger.info("MemberController!::::: memberDetail {}","진입" );
		return "auth:member/member_detail.tiles";
	}
	
	@RequestMapping("/member_update")
	public String memberUpdate() {
		logger.info("MemberController!::::: memberUpdate {}","진입" );
		return "auth:member/member_update.tiles";
	}
}
