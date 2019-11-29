import React, { Component } from 'react';
import PropTypes from 'prop-types'


class XiaojiejieItem extends Component {
    render() { 
        return ( 
            <li onClick={ this.handleClick }>{ this.props.avname } - { this.props.content }</li>
         );
    }

    handleClick = ()=>{
        this.props.delItem(this.props.index)
    }
}
// PropTypes 限定组件属性类型
XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
    delItem: PropTypes.func 
}
// 父组件不传值，子组件默认有个属性值
XiaojiejieItem.defaultProps = {
    avname:'波多老师'
}

export default XiaojiejieItem;