package com.gms.web.board;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.gms.web.command.Command;
import com.gms.web.command.ResultMap;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IListServie;
import com.gms.web.service.IPostServie;
import com.gms.web.service.IgetService;

@RestController

public class BoardController {
   private static final Logger logger = LoggerFactory.getLogger(BoardController.class);

   @Autowired BoardMapper boardMapper;
   @Autowired GradeMapper gradeMapper;
   @Autowired Command cmd;
   
   public @ResponseBody Map<?,?> post(){
      
      return null;
   }
   
   @RequestMapping("/get/{cate}/list")
   public @ResponseBody Map<?,?> boardList(@PathVariable String cate) {
      logger.info("BoardController::::: boardDelete {}","진입");
      Map<String,Object> map=new HashMap<>();
      IListServie listSercice=null;
      IgetService countService=null;
      switch (cate) {
      case "board": 
         cmd=null;
         listSercice=(x)->{
               return boardMapper.selectSome(cmd);
         };
         countService=(x)->{
            return boardMapper.countArticles(cmd);
            
         };
         System.out.println("123123"+listSercice);
        ResultMap r =   (ResultMap) countService.execute(cmd);
         System.out.println("rrrr"+r);
         
         map.put("total",r);
         
         System.out.println("count"+countService.execute(cmd));
         map.put("list",listSercice.execute(cmd));
         System.out.println("213123123"+listSercice.execute(cmd));
         break;      
      case "grade": 
         cmd=null;
         /*listSercice=(x)->{
               return gradeMapper.selectSome(cmd);
         };
         map.put("list",listSercice.execute(cmd));*/      
         break;   
      
      }
      System.out.println("보드에 들어옴");
      
      
      return map;
   }
   @RequestMapping("/get/{cate}/{id}")
   public @ResponseBody Map<?,?> get( @PathVariable String cate ,@PathVariable String id){
      logger.info("BoardController:::::디테일 {}","진입");
      System.out.println("넘어온아이디"+id);
      Map<String,Object> map=new HashMap<>();
      
      map.put("test", "데이터넘어감");
      cmd =new Command();
      IgetService detail;
      cmd.setSearch(id);
      System.out.println("cmd값"+cmd.getSearch());
      detail =(x)->{
         return boardMapper.selectOne(cmd);
      };
   
      map.put("detail", detail.execute(cmd));
      System.out.println("가져온데이터값"+map.get("detail"));
      return map;

   }
   @RequestMapping("/put/article")
   public @ResponseBody Map<?, ?> put(@RequestBody Article art){
      Map<String,Object> map=new HashMap<>();
      map.put("msg", art.getTitle());
      IPostServie update;
      cmd.setSearch(String.valueOf(art.getArticleSeq()));
      cmd.setDir(art.getTitle());
      cmd.setColumn(art.getContent());
      System.out.println("넘어온 아이디 :::"+art.getArticleSeq());
       update= (x)->{
    	   boardMapper.updateArticle(cmd);
	   };
	   update.execute(cmd);
	   map.put("articleSeq", cmd.getSearch());
      return map;
   }
   public @ResponseBody Map<?,?> delete(){
      return null;
   }
   
}