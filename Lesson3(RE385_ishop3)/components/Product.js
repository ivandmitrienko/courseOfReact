import React from 'react';

import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component{

    static propTypes = {
        id: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        remove: PropTypes.func,
        clicked: PropTypes.func,
        isClicked: PropTypes.bool,
    };


    clicked = () => {

        this.props.clicked(this.props.id);
        
    };

    remove = () => {

        this.props.remove(this.props.id, this.props.title);

    };
    
    
    render() {

        let bgProduct = this.props.isClicked ? {backgroundColor: 'orange'} : null;

        return (
            <tr className =" product_row" style = {bgProduct} onClick = {this.clicked}>
                <td>
                    <a href={this.props.url}>
                        <span className = 'product_image' style = {{backgroundImage: `url("${this.props.url}")`}}></span>
                    </a>
                </td>     
                <td>{this.props.title}</td>
                <td>{this.props.price}</td>
                <td>{this.props.count}</td>
                <td>
                    <button className = 'product_edit' type = 'button'  value = {this.props.id}  onClick = {this.edit}>Edit</button>
                    <button className = 'product_remove' type = 'button'  value = {this.props.id}  onClick = {this.remove}>Delete</button>
                    
                </td>
            </tr>
        )
    }

};


export default Product;