
// function getdata(){
//   var temp =[]
//   $.getJSON("data/dragli3.json",function(data){
//     console.log("success")
//     temp = data
//     console.log(temp)
//     return temp
//   })
// }
// var Wyh_data = getdata()
// console.log(Wyh_data)
var vm = new Vue({
  el: "#app",
  data: {
    keyword: "",
    cards: []
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
    },
  mounted: function(){
    var self = this
    $.getJSON("data/dragli3.json",function(data){
      console.log("success")
      console.log(data)
      self.cards = data
  })
  }
})