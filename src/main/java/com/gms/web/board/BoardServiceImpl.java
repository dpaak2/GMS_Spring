package com.gms.web.board;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {
	public static BoardServiceImpl getInstance() {
		return new BoardServiceImpl();
	}
	private BoardServiceImpl(){}
	@Override
	public void post(Object o) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public List<Article> list(Object o) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Object getSeq(Object o) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void put(Object o) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public void delete(Object o) {
		// TODO Auto-generated method stub
		
	}
}
