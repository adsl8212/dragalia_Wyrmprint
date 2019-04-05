var Wyh_data = $.getJSON("data/dragli2.json",function(data){
  console.log("success")
  return data
})
console.log(Wyh_data["cards"])
console.log(Wyh_data["keyword"])
var vm = new Vue({
  el: "#app",
  data: {
    keyword: Wyh_data.keyword,
    cards: Wyh_data.cards
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