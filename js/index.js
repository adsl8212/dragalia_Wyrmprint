var vm = new Vue({
  el: "#app",
  data: {
    keyword: "",
    cards: []
  },
  methods: {
      search: function(d){
        var temp = false
        for(var i=0;i<d.content.length;i++){
           temp = (d.content[i].indexOf(this.keyword)!=-1) || temp

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