package com.gms.web.mapper;

import java.util.List;
import org.springframework.stereotype.Repository;

import com.gms.web.board.Article;
import com.gms.web.command.Command;
import com.gms.web.grade.MajorDTO;

@Repository 
public interface GradeMapper {
   public int insertMajor(List<MajorDTO> list);
	public String countArticles(Command cmd);
	public void insertArticle(Command cmd);
	public List<Article> selectSome(Command cmd); 
	public Article selectOne(Command cmd);
	public void updateArticle(Command cmd);
	public void deleteArticle(Command cmd);
}