
/*meta */
var meta=meta || {};

meta.common = (function(){
   var init = function(ctx){
      alert('session 저장되기 전 : '+ctx);
      meta.session.init(ctx);
      alert('session 저장 ctx : '+$$());  /*즉시실행함수라 함수 표시 ->() 가 있어야 한다 !!*/
      alert('session 저장 js : '+p.js());
      alert('session 저장 css: '+p.css());
      alert('session 저장 img: '+p.img());
    
      
   };
   var onCreate=function(){
      setContextPath();
   };
   var setContextPaht=function(){
      
   };
   return {
      init : init
   };
})();



meta.session = (function(){
   var init = function(ctx){
      sessionStorage.setItem('ctx',ctx);
      sessionStorage.setItem('js','/resources/js');
      sessionStorage.setItem('img','/resources/img');
      sessionStorage.setItem('css','/resources/css');
   };
   var getPath = function(x){
      return sessionStorage.getItem(x);
   };
   
   return{
      init : init,
      getPath : getPath
   }
})();




/*path*/
var $$ = function(){ return meta.session.getPath('ctx');};
var p=(function(){
  var js = function(){ return meta.session.getPath('js');};
  var css = function(){return meta.session.getPath('css');};
  var img = function(){return meta.session.getPath('img');};
  return{ js : js, css : css, img : img };
})();
