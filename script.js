$(document).ready(function(){

$("#check").click(function(){
  console.log("in jquery")
  var word1 = $("#word1").val();
  var word2 = $("#word2").val();
  checkAnagram(word1, word2);
})
  function checkAnagram(word1, word2){
    if(word1.length == word2.length){
      console.log("true")
      var array1 = word1.split("").sort();
      var array2 = word2.split("").sort();
      console.log(array1)
      console.log(array2)
      for(i = 0; i < array1.length; i++){
        if (array1[i] == array2[i]){
        }
        else{
          console.log("false")
          return false;
        }
      }
      console.log("anagram")
      $("#answerOne").html("You've got an ANAGRAM")
      return true;
    }
    else{
      console.log("false")
    }
  }
  
})
