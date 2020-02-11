import React from 'react';

const sidebar = () => {
    return (
        <div className="sidebar">
            <form action="#" className="search">
                <button className="search_button">
                </button>
                <input type="text" className="search_input" placeholder="Search posts"/>
            </form>

            <div className="trends">
                <div className="trends_heading">
                    <p className="trends_heading-text">
                        Trends for you
                    </p>
                </div>

                <div className="trends_proposition">
                    <div className="trends_proposition-item">
                        <p className="trends_proposition-item-country">Trending in UK</p>
                        <h5 className="trends_proposition-item-account">#coding</h5>
                        <p className="trends_proposition-item-number">1 234 tweets</p>
                    </div>
                </div>

                <div className="trends_proposition">
                    <div className="trends_proposition-item">
                        <p className="trends_proposition-item-country">Trending in UK</p>
                        <h5 className="trends_proposition-item-account">#winter</h5>
                        <p className="trends_proposition-item-number">2 315 tweets</p>
                    </div>
                </div>

                <div className="trends_proposition">
                    <div className="trends_proposition-item">
                        <p className="trends_proposition-item-country">Trending in UK</p>
                        <h5 className="trends_proposition-item-account">#iLoveReact</h5>
                        <p className="trends_proposition-item-number">4 239 tweets</p>
                    </div>
                </div>

                <div className="trends_proposition">
                    <div className="trends_proposition-item">
                        <p className="trends_proposition-item-country">Trending in UK</p>
                        <h5 className="trends_proposition-item-account">#coffee&code</h5>
                        <p className="trends_proposition-item-number">1 524 tweets</p>
                    </div>
                </div>

                <div className="trends_proposition">
                    <div className="trends_proposition-item">
                        <p className="trends_proposition-item-country">Trending in UK</p>
                        <h5 className="trends_proposition-item-account">#Javascript</h5>
                        <p className="trends_proposition-item-number">3 264 tweets</p>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default sidebar;