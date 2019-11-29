import React,{Component} from "react"
import XiaojiejieItem from "./XjjItem"
import axios from 'axios'

import "./style.css"
import Boss from "./Boss"

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
            list : [...this.state.list, this.state.value],
            // list : this.state.list.concat(this.state.value),
            value: ""
        })
    }
    // 删除服务
    delItem = (index) =>{
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list :list
        })
    }

    // 优化 （这个方法已经失效）
    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextProps.content !== this.props.content){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
    
    // 使用axios
    componentDidMount(){
        axios.post('https://api.apiopen.top/getJoke?page=1&count=2&type=video')
        .then(res =>{
            // console.log(JSON.stringify(res))
        })
        .catch(err =>{
            console.log("获取数据失败")
        })
    }

    render (){
        console.log("child-render")
        return (
            // 最外层div 替换成fragment  ，类似vue 的template
            <div>
                <div>
                    <input type="text" value={ this.state.value } onChange={ this.inpChange }/>
                    <button onClick={ this.addService }>增加服务</button>
                </div>
                <ul>
                {
                    this.state.list.map((item,index) =>{
                        return (
                            <XiaojiejieItem 
                            content={ item }
                            key={ index+item }
                            index={ index }
                            delItem={ this.delItem }
                            />
                        )
                    })
                }
                </ul>


                <Boss />
            </div>
        )
    }
}


export default Xiaojiejie