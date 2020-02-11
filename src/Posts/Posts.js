import React, {Component} from 'react';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            tweets: [],
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.postTweet = this.postTweet.bind(this)
    }

    onInputChange(event) {
        this.setState({text: event.target.value});
    }

    postTweet() {
        (async () => {
            let response = await fetch('http://localhost:8080/tweets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: this.state.text
                })
            });
            let newTweet = await response.json();
            this.setState({tweets: [newTweet, ...this.state.tweets]})
        })();
    }

    componentWillMount() {
        this.loadTweets()
    }


    loadTweets() {
        (async () => {
            let response = await fetch('http://localhost:8080/tweets');
            let tweets = await response.json();
            this.setState({tweets})
        })();
    };

    render() {
        return <section className="home">
            <div className="home_heading">
                Home
            </div>

            <div className="home_cta">
                <input className="home_cta-question" placeholder="What's happening?" type="text" id="text"
                       value={this.state.text} onChange={this.onInputChange}/>
                <button className="button-small" onClick={this.postTweet}>
                    <p className="button-small-text">Tweet</p>
                </button>
            </div>

            <section className="tweets">

                <div>
                    {/*<div className="tweets_tweet-profile">*/}
                        {
                            this.state.tweets.map((tweet) =>
                                <p className="tweets_tweet">{tweet.text}</p>)
                        }
                    </div>
            </section>
        </section>
    }

}

export default Posts;