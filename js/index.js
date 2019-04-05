var Wyh_data = getdata()
function getdata(){
  $.getJSON("data/dragli3.json",function(data){
    console.log("success")
    var temp =[]
    for(var i=0;i<data.length;i++){
      temp.push(data[i])
    }
    console.log(temp)
    return temp
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