import React from 'react';

const navigation = () => {
    return (
        <section className="logos">

            <div className="navigation">

                <div className="navigation_item">
                    <div className="navigation_item">
                        <i className="fas fa-home navigation_item-logo"></i>
                    </div>
                    <h2 className="navigation_item-categories">Home</h2>
                </div>

                <div className="navigation_item around-nav">
                    <div className="navigation_item around-nav">
                        <i className="fas fa-hashtag navigation_item-logo"></i>
                    </div>
                    <h2 className="navigation_item-categories">Explore</h2>
                </div>

            <div className="navigation_item around-nav">
                <div className="navigation_item around-nav">
                    <i className="far fa-bell navigation_item-logo"></i>
                </div>
                <h2 className="navigation_item-categories">Notification</h2>
            </div>

            <div className="navigation_item around-nav">
                <div className="navigation_item around-nav">
                    <i className="far fa-envelope navigation_item-logo"></i>
                </div>
                <h2 className="navigation_item-categories">Messages</h2>
            </div>

            <div className="navigation_item around-nav">
                <div className="navigation_item around-nav">
                    <i className="far fa-bookmark navigation_item-logo"></i>
                </div>
                <h2 className="navigation_item-categories">Bookmark</h2>
            </div>

            <div className="navigation_item around-nav">
                <div className="navigation_item around-nav">
                    <i className="fas fa-list navigation_item-logo"></i>
                </div>
                <h2 className="navigation_item-categories">Lists</h2>
            </div>

            <div className="navigation_item around-nav">
                <div className="navigation_item around-nav">
                    <i className="far fa-user navigation_item-logo"></i>
                </div>
                <h2 className="navigation_item-categories">Profile</h2>
            </div>

            <div className="navigation_item around-nav">
                <div className="navigation_item around-nav">
                    <i className="fas fa-ellipsis-h navigation_item-logo"></i>
                </div>
                <h2 className="navigation_item-categories">More</h2>
            </div>
            <button className="button">
                <p className="button-text">Create a new post!</p>
            </button>

            </div>

        </section>
    )
};

export default navigation;