var Wyh_data = $.getJSON("data/dragli2.json",function(){
  console.log("success")
})
console.log(Wyh_data)
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