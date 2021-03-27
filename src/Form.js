import React ,{ Component, Redirect } from 'react'
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: 1,
        }
    }
    componentDidMount() {
        if (window.location.href === 'http://localhost:3002/store') {
            console.log(1)
        }
    }
    render() {
        return (
            <div>
            <form action='http://localhost:3002/store' method="post">
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p><textarea name="contents" placeholder="contents"></textarea></p>
                <p><button type="submit" className='posts'>Submit</button></p>
            </form>
            </div>
        );
    }
}
export default Form;