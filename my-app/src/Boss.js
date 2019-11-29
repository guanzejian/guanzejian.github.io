import React, { Component } from 'react';

// 动画效果
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow : true
         }
    }
    render() { 
        return ( 
            <div>
                <div className={this.state.isShow ? "show" : "hide"}>Boss</div>
                <div><button onClick={this.toToggle}>召唤Boss</button></div>
            </div>
         );
    }

    toToggle = () =>{
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
 
export default Boss;