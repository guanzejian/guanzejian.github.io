import React,{Component} from 'react' // 这句相当于下面这两句
// import React from 'react'
// const Compnent = React.Component

class App extends Component{
    render(){
        return (
            <ol className="my-list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ol>
        )
    }
}

export default App