const TweetBody = ({body,image}) => {
    return (
        <>
            <p className="tweet-text">{body}</p>
            <img
                className="tweet-image"
                src={image}
                alt="Tweet Image"
            />
        </>

    )
};
export default TweetBody;