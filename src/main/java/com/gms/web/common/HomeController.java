package com.gms.web.common;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/")
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		model.addAttribute("serverTime",new SimpleDateFormat("yy년 MM월 dd일 E요일").format(new Date()) );
		/*tiles가 먼저 먹게 하기 위해서 이렇게 설정해야 한다 */
		return "public:common/home.tiles";
	}
	
}
