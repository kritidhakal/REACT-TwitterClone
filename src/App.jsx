import { useEffect } from 'react';
import './App.css'
import Tweet from "./components/Tweet";
import axios from "axios";
const names= [{
  name:'Kriti',
  username:'kriti',
  body:'im body.'
},
{
  name:'Ram',
  username:'ram',
  body:"im body, yes."
},
]

const App = () => {
  const fetchTweets = async() => {
    const posts =  await axios.get("https://react-workshop.fly.dev")
    console.log(posts.data);
  }
  useEffect(()=>{
    fetchTweets();
  },[])
  return (
    <>
    {
      names.map((tweet)=>{
      return <Tweet name={tweet.name} username={tweet.name.toLowerCase()} key={name} body={tweet.body} image={'https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg'}/>
    })
    }

    </>
  );
};

export default App;
