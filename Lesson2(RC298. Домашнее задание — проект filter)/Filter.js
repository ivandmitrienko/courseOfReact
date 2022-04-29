let Filter = React.createClass({
    displayName: 'FilterWords',

    propTypes: {
        wordsArray: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                word: React.PropTypes.string.isRequired,
            })
        ),
    },

    getInitialState: function () {
        return {
            searchedText: '',
            isSorted: false,
            words: this.props.wordsArray,
        };
    },

    checkSort: function (EO) {
        this.setState({isSorted: EO.target.checked}, this.getFilterWords);
    },

    checkSearch: function (EO) {
        this.setState({searchedText: EO.target.value}, this.getFilterWords);
    },

    getFilterWords: function () {
        let searchedText = this.state.searchedText;
        let isSorted = this.state.isSorted;

        let wordsArray = this.props.wordsArray.concat();

        wordsArray = (searchedText) ?
            wordsArray.filter((item) => item.word.includes(searchedText)) :
            wordsArray;

        wordsArray = (isSorted) ?
            wordsArray.sort((next, prev) => next.word > prev.word ? 1 : next.word < prev.word ? -1 : 0 ) :
            wordsArray;

        this.setState({words: wordsArray}, null);
    },

    resetFilter: function () {
        this.setState({searchedText: '', isSorted: false, words: this.props.wordsArray}, null);
    },


    render: function () {

        let words = this.state.words.map((item) => 
             React.DOM.option({key: item.code, className: 'Word', value: item.code}, item.word)
        );


        let menu = React.DOM.div({className:'Menu'},
            React.DOM.input({
             className:'Menu Sort', type: 'checkbox', checked: this.state.isSorted, onClick: this.checkSort
            }),
            React.DOM.input({
                className:'Menu Search', type: 'text', value: this.state.searchedText, onChange: this.checkSearch
            }),
            React.DOM.button({
                className:'Menu Reset', type: 'button', onClick: this.resetFilter}, 'Reset'),
        );

        let wordsList = React.DOM.select({className:'Words', size: 5}, words);

        return React.DOM.div({className:'Filter'}, menu, wordsList);
    }
});    