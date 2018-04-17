Search = React.createClass({
    getInitialState() {
        return {
            searchingText: '',
        };
    },
    handleChange: function(event) { // to jest specjalny element z reacta czy moge sobie dodawac co chce ?
        var searchingText = event.target.value;
        this.setState({searchingText: searchingText});
        if (searchingText.length > 2) {
            this.props.onSearch(searchingText); // skad jest onSearch?
        }
    },
    handleKeyUp: function(event) {
        if (event.keyCode === 13) {
            this.props.onSearch(this.search.searchingText);
        }
    },
    render: function() {
        var styles = {
            fontSize: '1,5em',
            width: '90%',
            maxWidth: '350px'
        };
        return (
            <form 
                type="text"
                onKeyUp={this.handleKeyUp}
                onChange={this.handleChange} 
                placeholder="tu wpisz "
                styles={styles}
                value={this.search.searchTerm}
            />
        );
    },
});