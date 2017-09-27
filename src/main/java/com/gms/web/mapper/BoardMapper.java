package com.gms.web.mapper;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.board.Article;
import com.gms.web.command.Command;
import com.gms.web.command.ResultMap;


@Repository
public interface BoardMapper {
	public ResultMap countArticles(Command cmd);
	public void insertArticle(Command cmd);
	public List<Article> selectSome(Command cmd); 
	public Article selectOne(Command cmd);
	public void updateArticle(Command cmd);
	public void deleteArticle(Command cmd);
}
