package com.gms.web.member;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gms.web.command.CommandDTO;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberService;
@Service
public class MemberServiceImpl implements MemberService {
	private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Autowired MemberMapper mapper;
	@Autowired CommandDTO cmd;
	@Autowired MemberDTO member;
	
	Map<String, MemberDTO> map; // key 값은 String으로 주고 object(instance) =
									// MemberBean이다
	List<StudentDTO> list;
	
	public static MemberServiceImpl getInstance() {
		return new MemberServiceImpl();
	}

	private MemberServiceImpl(){}
	

	@Override
	public Map<String,Object> login(CommandDTO cmd) {
		logger.info("memberServiceImpl login  {}","entered !!!!!");
		logger.info("memberServiceimpl search id {}",cmd.getSearch());
		logger.info("memberServiceimpl search password {}",cmd.getColumn());
		Map<String,Object> map= new HashMap<>();
		//String page ="";
		member = mapper.login(cmd);
		logger.info("*******MemberServiceImpl login 에 ID가 있을 경우   id 정보 확인== {}", member.toString());
		if(cmd.getColumn().equals(member.getPass())){
			logger.info("MemberServiceImpl login 에 ID가 있을 경우   DB확인 id=== {}", member.getId());
			logger.info("MemberServiceImpl login 에 ID가 있을 경우   DB확인 passwrod=== {}", member.getPass());
			logger.info("MemberServiceImpl login 에 ID가 있을 경우   id 정보 확인== {}", member.toString());
			//page=(cmd.getColumn().equals(member.getPw()))? "auth:common/main.tiles":"public:common/login.tiles";
			map.put("page", "auth:common/main.tiles");
			//map.put("user", member);
		}else {
			logger.info("MemberServiceImpl login  디비 아이디가 없습니다 ");
			//page="public:common/login.tiles";
			//map.put("page", page);
			map.put("page", "public:common/login.tiles");
		}
		return map;
	}
	
	@Override
	public String addMember(Map<String, Object> map) {
		System.out.println("Member serviceImpl entered");
		String result="";
		MemberDTO m = (MemberDTO) map.get("member");
		System.out.println("넘어온 학생 회원정보 ==="+ m.toString());
	/*	@SuppressWarnings("unchecked")
		List<MajorDTO> list= (List<MajorDTO>) map.get("major");
		System.out.println("넘어온 과목들 !!!"+list.toString());
		result= dao.insertMember(map);
		Separator.cmd.setDir("home");
		Separator.cmd.setPage("main");
		Separator.cmd.process();*/
		return result;
	}

	@Override
	public String count() {
	/*	return dao.count(cmd);// memberList.length;*/
		logger.info("count is {}","entered");
		String count =mapper.count();
		logger.info("count is {}",count);
		return count;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<?> list(CommandDTO cmd) {
		/*list=(List<StudentDTO>) dao.selectAll(cmd);*/
		System.out.println("list to string servicd"+list.toString());
		return list; // ArrayList가 된다
	}

	@Override
	public StudentDTO findById(CommandDTO cmd) {
		StudentDTO stu = new StudentDTO();
		/*stu = dao.selectById(cmd);*/
		return stu;
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		System.out.println("findByName:: "+cmd.getSearch()+"::");
	/*	return dao.selectByName(cmd);*/
		return null;
	}

	@Override
	public String modifiyProfile(MemberDTO bean) {
		String result = "";
		// findById(bean.getPw()).setPw(bean.getPw());
		CommandDTO cmd=new CommandDTO();
		cmd.setSearch(bean.getId());
		/*MemberDTO mem =dao.login(cmd);
		if (!bean.getName().equals("")) {
			mem.setName(bean.getName());
		}
		if (!bean.getPw().equals("")) {
			mem.setPw(bean.getPw());
		}
		if (!bean.getSsn().equals("")) {
			mem.setSsn(bean.getSsn());
		}
		System.out.println("serviceImpl*****" + mem);
*/		return result;
	}


	@Override
	public String removeUser(CommandDTO cmd) {
		String removeResult = "";
		for (StudentDTO m : list) {
			if (cmd.equals(m.getId())) {
				// list.get(i)=list[count-1];
				map.remove(cmd);
				break;
			}
		}
		// list.get(i)=null;
		// count--;
		return removeResult;
	}


}