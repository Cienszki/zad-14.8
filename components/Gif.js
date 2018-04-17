var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';

var styles = {
    minHeight: '350px',
    margin: '0.5em'
};

Gif = React.createClass({
    getUrl: function() {
        this.props.sourceUrl || GIPHY_LOADING_URL;
    },
    render: function() {
        var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url; // czemu ':' ?
        return (
            <div style={styles}>
                <a href={this.getUrl()} target='new' title='view this on giphy'>
                    <img id='gif' src={url} style={{width: '100%', maxWidth: '350px'}}/>
                </a>
            </div>
        );
    }

});