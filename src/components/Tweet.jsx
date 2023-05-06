import Footer from "./Footer";
import Header from "./Header";
import TweetBody from "./TweetBody";
const Tweet = ({name,username,body, image}) => {
    return (
      <>
        <div className="tweet">
          <img
            className="profile-pic"
            src="https://placekitten.com/50/50"
            alt="Profile Picture"
          />
          <div className="tweet-content">
            <Header name={name} username={username}/>
            <TweetBody body={body} image={image}/>
            <Footer />
          </div>
        </div>
      </>
    );
  };
  
  export default Tweet;
  