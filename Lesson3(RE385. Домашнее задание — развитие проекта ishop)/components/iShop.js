import React from 'react';

import PropTypes from 'prop-types';

import './iShop.css';

import Product from './Product';

class iShop extends React.Component{

    static propTypes = {
        iShopName: PropTypes.string.isRequired,
        iShopArr: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              count: PropTypes.number.isRequired,
              price: PropTypes.number.isRequired,
              title: PropTypes.string.isRequired,
              url: PropTypes.string.isRequired,
            })
        )
    }; 

    state = {
        
        products: this.props.iShopArr,
        isClicked: 0,
        
    };

    clickedItem = (id) => {

        this.setState({isClicked:id});

    };

    removeItem = (id, title) => {
        if (confirm(`Вы хотите удалить ${title.toUpperCase()}?`)) {
            let filtered = this.state.products.filter(product => product.id !== id);
            this.setState({products: filtered}, null);
        }
    };

    render() {
        let products = this.state.products.map(product =>
            <Product
                key = {product.id}
                id = {product.id}
                title = {product.title}
                url = {product.url}
                price = {product.price}
                count = {product.count}
                remove = {this.removeItem}
                clicked = {this.clickedItem}
                isClicked = {product.id === this.state.isClicked}
            />
        );

        return (
            <div className = 'shop'>
                <table className = 'shop_table'>
                    <caption className ='shop_name' style={{color:"green",fontSize= "30px"}}>{this.props.iShopName})</caption>
                        <tbody>
                           <tr className = 'shop_column_name'>
                           React.DOM.th(null, 'URL фотографии'),
                                   React.DOM.th(null, 'Название'),
                                   React.DOM.th(null, 'Цена'),
                                   React.DOM.th(null, 'Количество'),
                                   React.DOM.th(null, 'Контроль'),
                               ),
           
                           </tr>,
                               
                           
                        </tbody>,
                            
                            {products}
                        )
                    )
                </table>
            </div>
            
                
        
        );
    }
}; 


export default iShop;