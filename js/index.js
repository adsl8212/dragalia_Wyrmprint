var Wyh_data = function(){
  $.getJSON("data/dragli3.json",function(data){
    console.log("success")
    var temp =[]
    temp = data
    console.log(temp)
  })
}

console.log(Wyh_data)
var vm = new Vue({
  el: "#app",
  data: {
    keyword: "",
    cards: Wyh_data
  },
  methods: {
      showContent: (d)=>{
        $(".content").append(d.content)
      },
      search: (d)=>{
        var temp = false
        for(var i=0;i<d.content.length;i++){
           temp = (d.content[i].indexOf(Wyh_data.keyword)!=-1) || temp
        }
        return temp
      }
    }
})