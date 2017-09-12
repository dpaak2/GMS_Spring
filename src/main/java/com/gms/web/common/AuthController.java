package com.gms.web.common;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.MemberService;

@Controller
@RequestMapping("/auth") /*witch case 구문이 내부적으로 가지고 있다 */
public class AuthController {
	@Autowired MemberService service;
	@Autowired MemberDTO member;
	@Autowired CommandDTO cmd;
	/*log를 찍는것 이다 */
	private static final Logger logger = LoggerFactory.getLogger(AuthController.class);
	@RequestMapping ("/login_view")
	public String goLogin() {
		logger.info("AuthController!::::: goLogin {}","진입" );
	/*	model.addAttribute("test","test"); request.setAttribute("test","test");*/
		/*model.addAttribute(model);*/
		return "public:common/login.tiles";
	}
	@RequestMapping(value="/lgoin", method=RequestMethod.POST)
	public String login(
			@RequestParam("id") String id, 
			@RequestParam("pass") String pass,
			HttpSession session,
			Model model) {
		logger.info("AuthController!:::::login-- {}","진입" );
		logger.info("id",id);
		logger.info("pass",pass);
		
		/*의미론적인것이 아닌 가독성에 의한 선택이 필요 */
		cmd.setSearch(id);
		cmd.setColumn(pass);
		Map<String, Object> map = service.login(cmd);
	
		if(map.get("message").equals("success")){
			session.setAttribute("user", map.get("user"));
		}
		model.addAttribute("message",map.get("message"));
		
		return String.valueOf(map.get("page"));
	}
	@RequestMapping("/go_main")
	public String goMain(){
		logger.info("AuthController!:::::login-- {}","진입" );
		return "auth:common/main.tiles";
	}

}
