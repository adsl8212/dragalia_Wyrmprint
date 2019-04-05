var Wyh_data = []

console.log(Wyh_data)
var vm = new Vue({
  el: "#app",
  data: {
    keyword: "",
    cards: ()=>{
      $.getJSON("data/dragli3.json",function(data){
  console.log("success")
  Wyh_data = data
  console.log(Wyh_data)
  return Wyh_data
})
    }
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