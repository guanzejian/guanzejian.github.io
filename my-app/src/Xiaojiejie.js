import React,{Component} from "react"

class Xiaojiejie extends Component{
    constructor(props){
        super(props)  //调用父级方法
        this.state = {
            value : 'abc',
            list: ["2113","12121","12213"]
        }
    }
    // 输入框的值获取
    inpChange = (e) =>{
        this.setState({
            value: e.target.value
        })
    }
    // 增加服务
    addService = () =>{
        this.setState({
            // list : [...this.state.list, this.state.value]
            list : this.state.list.concat(this.state.value),
            value: ""
        })
    }
    render (){
        const ListItem = this.state.list.map((item,index) =>{
            return <Li item={item} key={ item+index } />
        }) 
        return (
            // 最外层div 替换成fragment  ，类似vue 的template
            <div>
                <div>
                    <input type="text" value={ this.state.value } onChange={ this.inpChange }/>
                    <button onClick={ this.addService }>增加服务</button>
                </div>
                <ul>
                    {ListItem}
                </ul>
            </div>
        )
    }
}
class Li extends Component{

    render (){
        return <li onClick={ this.delItem }>{ this.props.item }</li>
    }
}
export default Xiaojiejie