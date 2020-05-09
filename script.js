(function(){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0;i<names.length;i++) {

  var str = names[i].charAt(0).toLowerCase();
  if(str === 'j'){

    this.byeSpeaker.speak(names[i]);

  }else{
    
    this.helloSpeaker.speak(names[i]);
  }
}
})();
