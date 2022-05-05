let React = require('react');

require('./Product.css');

let Product = React.createClass({

    displayName: 'iShop',

    propTypes: {
        id: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        remove: React.PropTypes.func,
        clicked: React.PropTypes.func,
        isClicked: React.PropTypes.bool,
    },


    clicked: function(){

        this.props.clicked(this.props.id);
        
    },

    remove: function(){

        this.props.remove(this.props.id, this.props.title);

    },
    
    
    render() {

        let bgProduct = this.props.isClicked ? {backgroundColor: 'orange'} : null;

        return React.DOM.tr({
             className:" product_row",
             style: bgProduct,
             onClick: this.clicked,
            },
            React.DOM.td(null, React.DOM.a({href: this.props.url},
                React.DOM.span({className: 'product_image', style: {backgroundImage: `url("${this.props.url}")`}}))
            ),
            React.DOM.td(null, this.props.title),
            React.DOM.td(null, this.props.price),
            React.DOM.td(null, this.props.count),
            React.DOM.td(null,  React.DOM.button(
                {className: 'product_remove', type: 'button', value: this.props.id, onClick: this.remove}, 'Remove'
            )),

        )
    }

});


module.exports = Product;