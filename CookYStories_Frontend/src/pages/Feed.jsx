import React, { Component } from 'react'
import '../css/Feed.css'
import Post from '../components/Post'
import PostSend from '../components/PostSend'
import StoryReel from '../components/StoryReel'
import rushang from '../Images/rushang.PNG'
import Sidebar from '../components/Sidebar'

export default class Feed extends Component {
    render() {
        return (
            <div className="feed" id="feed-page">
                <StoryReel />
                {/* <Sidebar /> */}
                <div id="page-wrap">
                    <PostSend />
                    <Post 
                        profilePic={rushang}
                        message='This is Message'
                        timestamp='This is for TimeStamp'
                        username='rushang2413'
                        image='https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg'
                    />
                    <Post 
                        profilePic={rushang}
                        message='This is Message'
                        timestamp='This is for TimeStamp'
                        username='rushang2413'
                    />
                </div>
            </div>   
        )
    }
}