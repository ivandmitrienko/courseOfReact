let React = require('react');

require('./iShop.css');

let Product = require('./Product');

let iShop = React.createClass({

    displayName: 'iShop',

    getDefaultProps: function () {
        return {
            iShopName: "Проверьте название магазина",
            iShopArr: [{ id: 0, title: 'нет данных', price: 'нет данных', url: 'нет данных', count: 'нет данных' }]
        }
    },

    propTypes: {
        iShopName: React.PropTypes.string.isRequired,
        iShopArr:React.PropTypes.arrayOf(
            React.PropTypes.shape({
              id: React.PropTypes.number.isRequired,
              count: React.PropTypes.number.isRequired,
              price: React.PropTypes.number.isRequired,
              title: React.PropTypes.string.isRequired,
              url: React.PropTypes.string.isRequired,
            })
        )
    }, 

    getInitialState: function () {
        return {
            products: this.props.iShopArr,
            isClicked: 0,
        }
    },

    clickedItem: function(id){

        this.setState({isClicked:id});

    },

    removeItem: function(id, title){
        if (confirm(`Вы хотите удалить ${title.toUpperCase()}?`)) {
            let filtered = this.state.products.filter(product => product.id !== id);
            this.setState({products: filtered}, null);
        }
    },

    render() {
        let products = this.state.products.map(product =>
            React.createElement(Product, {
                key: product.id,
                id: product.id,
                title: product.title,
                url: product.url,
                price: product.price,
                count: product.count,
                remove: this.removeItem,
                clicked: this.clickedItem,
                isClicked: product.id === this.state.isClicked,
            })
        );

        return React.DOM.div({className: 'shop'},
            React.DOM.table({className: 'shop_table'},
                React.DOM.caption({className: 'shop_name', style:{color: "green", fontSize:"30px"}}, this.props.iShopName),
                React.DOM.tbody(null,
                    React.DOM.tr({className: 'shop_column_name'},
                        React.DOM.th(null, 'URL фотографии'),
                        React.DOM.th(null, 'Название'),
                        React.DOM.th(null, 'Цена'),
                        React.DOM.th(null, 'Количество'),
                        React.DOM.th(null, 'Контроль'),
                    ),
                    products
                )
            )
        )
    },
}); 


module.exports = iShop;