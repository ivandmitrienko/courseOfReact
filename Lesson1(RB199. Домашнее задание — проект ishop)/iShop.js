let iShop = React.createClass({

    displayName: 'iShop',

    getDefaultProps: function () {
        return {
            iShopName: "Проверьте название магазина",
            iShopArr: [{ id: 0, name: 'нет данных', price: 'нет данных', url: 'нет данных', count: 'нет данных' }]
        }
    },

    propTypes: {
        iShopName: React.PropTypes.string.isRequired,
        iShopArr:React.PropTypes.arrayOf(
            React.PropTypes.shape({
              id: React.PropTypes.number.isRequired,
              count: React.PropTypes.number.isRequired,
              price: React.PropTypes.number.isRequired,
              name: React.PropTypes.string.isRequired,
              url: React.PropTypes.string.isRequired,
            })
        )
    }, 
    
    render: function () {

      let products = this.props.iShopArr.map((e) => {
          return React.DOM.div({ key: e.id, className: 'iShopProducts' },
              React.DOM.div({ className: 'productsImg' },
                  React.DOM.img({ src: e.url, alt: "" },)),
              React.DOM.div({}, e.name),
              React.DOM.div({}, `${e.price} руб`),
              React.DOM.div({}, `${e.count} шт`),
            );
        })

      let iShopHeadArr = ["URL фотографии", "Название", "Цена", "Количество"].map((e, i) => {
          return React.DOM.div({ key: i, className: 'iShopProductsHead' }, e);
        })

      return React.DOM.div({ className: 'iShopGrid' },
          React.DOM.div({ className: 'iShopName' }, this.props.iShopName),
          React.DOM.div({ className: 'iShopProductsHeads' }, iShopHeadArr),
          React.DOM.div({ className: 'iShopProductsBody' }, products),
        );
    },
    




});