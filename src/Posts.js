import React, { Component } from 'react';

class Posts extends Component {
    /* 컴포넌트 생성시 */
    /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            name: 'auther'
        }
    }
    // componentWillMount() = 렌더링 전에 실행되는 함수.
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({
                posts: data
            }));
    }
    render() {
        const { posts } = this.state;
        const { name } = this.state;
        console.log(name)
        const postsList = posts.map((post)=>(
            <div key={post.id} id={post.id}>
                <h4>number: {post.id}</h4>
                <h4>title: {post.title}</h4>
                <h4>contents: {post.body}</h4>
                <hr></hr>
            </div>
        ))
        return (
            <div>
                {postsList}
            </div>
        );
    }
}
export default Posts;