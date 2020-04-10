class FollowToggle {
    constructor(el) {
        this.$el = $(el, options)
        this.user_id = this.$el.data("user-id")
        this.followState = this.$el.data("initial-follow-state")
        this.example()
       
    }
    example(){
      this.$el.on("click", "button",() => this.render())
    }
  render() {
    $.ajax({
      method: "POST",
      url: user_follow_url(this.user_id),
      success(data){
        if(this.followState === "Follow!"){
            this.followState = "Unfollow!";
            $("button").text("Unfollow")
        } else {
            this.followState = "Follow!";
            $("button").text("Follow")    
        }

      },
      dataType: 'JSON'
    })
  }
}

module.exports = FollowToggle;