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
    
    render: function() {

        let answersCode=this.props.answers.map( v =>
            React.DOM.div({key:v.code,className:'Answer'},
              React.DOM.span({className:'Count'},v.count),
              React.DOM.span({className:'Text'},v.text),
            )
          );
        return React.DOM.div( {className:'VotesBlock'}, 
          React.DOM.div( {className:'Question'}, this.props.question ),
          React.DOM.div( {className:'Answers'}, answersCode ),
        );
      },
    




});