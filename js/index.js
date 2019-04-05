var Wyh_data = $.getJSON("data/dragli2.json",function(){
  console.log("success")
})

var vm = new Vue({
  el: "#app",
  data: Wyh_data,
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