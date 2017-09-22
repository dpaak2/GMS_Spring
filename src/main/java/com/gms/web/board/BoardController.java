package com.gms.web.board;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.gms.web.command.Command;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IListServie;
@RestController
public class BoardController {
   private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
   @Autowired BoardMapper boardMapper;
   @Autowired GradeMapper gradeMapper;
   @Autowired Command cmd;
   
   public @ResponseBody Map<?,?> post(){
      return null;
   }
   @RequestMapping("/get/{cate}/list")//board의 list 페이지를 가져와라
   public @ResponseBody Map<?,?> boardList(@PathVariable String cate) {//@RestController가 있어야 @ResponseBody를 사용할 수 있다, 제이슨에서 리턴한것을 Map으로 받는다
                                                                  //JSON에서 리턴을 해서 던져주면 @ResponseBody에서 리턴타입을 Map을 써주었기 때문에 Map으로 담겨진다
      logger.info("BoardController BoardList {}","진입");
      Map<String,Object> map=new HashMap<>();
      System.out.println("board/list 에 들어옴");
     IListServie listService = null;

      switch(cate) {
      case"board":
         cmd=null;
        listService=(x)-> {
            return boardMapper.selectSome(cmd);
         };
         System.out.println("%%%%%result::"+listService);
         map.put("rsult", "success");
         map.put("list", listService.execute(cmd)); 
         break;
      case"grade":
         cmd=null;
         listService=(x)-> {
            return gradeMapper.selectSome(cmd);
         };
         map.put("list", "항"); 
         break;
      }
         return map;
   }
   public @ResponseBody Map<?,?> get(){
      return null;
   }
   public @ResponseBody Map<?,?> put(){
      return null;
   }
   public @ResponseBody Map<?,?> delete(){
      return null;
   }
}