import React from 'react'


const FeedExampleBasic = () => (
  <Feed>
    
    <Feed.Event>
      <Feed.Label image='../../public/logo192.png' />
      <Feed.Content>
        <Feed.Summary>
          <p>Helen Troy added 2 new illustrations</p>
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='../../public/logo192.png' />
          </a>
          <a>
            <img src='../../public/logo192.png' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />1 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleBasic