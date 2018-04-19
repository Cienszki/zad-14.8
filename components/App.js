var GIPHY_API_URL = 'https://api.giphy.com';
var GIPHY_PUB_KEY = 'eTKuC5iNfUJH5pMsbeFhQS9qN8KF9poS';
App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {}
        };
    },
    handleSearch: function(searchingText) {
        this.setState({loading: true});
        this.getGif(searchingText, function(gif) {
            this.setState({
                loading: false,
                gif: gif,
                searchingText: searchingText // co robia te dwie poprzednie linijki?
            });
        }.bind(this));
    },
    getGif: function(searchingText, callback) {
        var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText; // w jaki sposob dostajemy te zmienne wielkimi literami ?
        function request(url) {
            return new Promise (
                function(resolve, reject) {
                    const xhr = new XMLHttpRequest();
                    xhr.onload = function() {
                        if (this,status === 200) {
                            resolve(this.response);
                        }
                        else {
                            reject(new Error (this.statusText));
                        }                    
                    };
                    xhr.onerror = function() {
                        reject(new Error(
                            `XMLHttpRequest error: ${this.statustext}`));
                        
                    };
                    xhr.open('GET', url);
                    xhr.send();
                }
            );
        }
    },
        /*
        xhr.open('GET', url);
        );
       xhr.onload = function() {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText).data;
                var gif = {
                    url: data.fixed_width_downsampled_url, // to jest link do gifa w specjalnej wersji ?
                    sourceUrl: data.url
                };
                callback(gif); // Przekazujemy obiekt do funkcji callback, którą przekazaliśmy jako drugi parametr metody getGif. Co to znaczy>?
            }
        };
        xhr.send();*/
  
    render: function() {
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };
        return (
            <div style={styles}>
                    <h1>Wyszukiwarka Gifów</h1>
                    <p>Znajdź gif na 
                        <a href='giphy.com'>Giphy</a>
                    </p>
                    <Search onSearch={this.handleSearch}/>
                <Gif 
                    loading={this.state.loading}
                    url={this.state.gif.url}
                    sourceUrl={this.state.gif.sourceUrl}
                />
            </div>
        );
    }
});