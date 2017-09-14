package com.gms.web.member;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.command.CommandDTO;
import com.gms.web.grade.MajorDTO;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	private static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Autowired MemberMapper mapper;
	@Autowired CommandDTO cmd;
	@Autowired MemberDTO member;
	@Autowired MajorDTO major;
	@Autowired GradeMapper gmapper;
	
	

	@Override @Transactional
	public int addStudent(Map<?, ?> map) {
		System.out.println("memberServiceimPl add 진입");
		member = (MemberDTO)map.get("member");
		@SuppressWarnings("unchecked")
		List<MajorDTO> list= (List<MajorDTO>) map.get("list");
		System.out.println("serviceImpl add ID #####"+member.getId());
		System.out.println("serviceImpl add LIST####"+list);
		
		mapper.insert(member);
		gmapper.insertMajor(list);
		int rs=0;
		return rs;
	}

	

	@Override
	public Map<String,Object> login(CommandDTO cmd) {
		logger.info("memberServiceImpl login  {}","entered !!!!!");
		logger.info("memberServiceimpl search id {}",cmd.getSearch());
		logger.info("memberServiceimpl search password {}",cmd.getColumn());
		Map<String,Object> map= new HashMap<>();
		String page ="", message="";
		member = mapper.login(cmd);
		logger.info("*******MemberServiceImpl login 에 ID가 있을 경우   id 정보 확인== {}", member.toString());
		
		
		if(cmd.getSearch().equals(member.getId())){
			logger.info("MemberServiceImpl login 에 ID가 있을 경우   DB확인 id=== {}", member.getId());
			logger.info("MemberServiceImpl login 에 ID가 있을 경우   DB확인 passwrod=== {}", member.getPassword());
			logger.info("MemberServiceImpl login 에 ID가 있을 경우   id 정보 확인== {}", member.toString());
			page=(cmd.getColumn().equals(member.getPassword()))? "auth:common/main.tiles":"public:common/login.tiles";
			message=(cmd.getColumn().equals(member.getPassword()))?"success":"비밀번호가 틀립니다";
		}else {
			logger.info("MemberServiceImpl login  디비 아이디가 없습니다 ");
			page="public:common/join.tiles";
			message="please create account!!";
	
		}
		map.put("page", page);
		map.put("message", message);
		map.put("user", member);
		return map;
	}
	


	@Override
	public String count() {
	/*	return dao.count(cmd);// memberList.length;*/
		logger.info("count is {}","entered");
		String count =mapper.count();
		logger.info("count is {}",count);
		return count;
	}

	@Override
	public List<?> list(CommandDTO cmd) {
		return mapper.selectAll(cmd); 
	}

	@Override 
	public StudentDTO findById(CommandDTO cmd) {
	
		return mapper.selectById(cmd);
	}

	@Override
	public List<?> findByName(CommandDTO cmd) {
		System.out.println("findByName:: "+cmd.getSearch()+"::");
	/*	return dao.selectByName(cmd);*/
		return null;
	}

	@Override
	public int modifiyProfile(MemberDTO bean) {
		System.out.println("service IMPL 넘어온 아이디 ::::"+bean.getId());
		System.out.println("service IMPL 넘어온 이메일 ::::"+bean.getEmail());
		System.out.println("service IMPL 넘어온 비밀번호 ::::"+bean.getPassword());
	return mapper.updateProfile(bean);
	}


	@Override
	public String removeUser(CommandDTO cmd) {
		
		return String.valueOf(mapper.deleteUser(cmd));
	}





}