import React from "react";

class Tile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            icon: "T"
        }
        this.text = "T";
        // debugger;
        //this.setIcon();
    }
    
    setIcon(){
        // debugger
        let tile = this.props.tile;
        if(tile.flagged){
            // debugger;
            this.text = "\u2691";
            this.setState({ icon: "\u2691"})
        } else if(tile.explored){
            if(!tile.bombed){
                // debugger;
                this.text = tile.adjacentBombCount();
                this.setState({ icon: tile.adjacentBombCount()})
            } else {
                this.text = "B";
                this.setState({ icon: "B" })
            }
            
        } else if(tile.bombed){
            // debugger;
            this.text = "B";
            this.setState({ icon: "B"})

            
        }
    }

    handleClick(e){
        if(e.altKey){
            this.prop.tile.toggleFlag();
            this.props.updateGame();
        } else {
            
        }
        this.props.tile.explore();
        this.props.updateGame();
        this.setIcon();
       
    }
    
    render(){
        // debugger;
        return(
           <div className={`${this.state.icon} tile`} onClick={this.handleClick.bind(this)}>{this.state.icon}</div>
        )
    }
}

export default Tile;