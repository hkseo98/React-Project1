import React ,{ Component, Redirect } from 'react'
import './App.css';

class Server extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'title',
            contents: 'contents'
        }
    }
    componentWillMount() {
        fetch('http://localhost:3002/api')
             .then(res=>res.json())
             .then(data => this.setState({
                 title: data.data.split('content')[0],
                 contents: data.data.split('contents: ')[1]
             }))
}
    render() {
        const { title, contents } = this.state;
        
        return (
            <div>
                <p>{ title }</p>
                <p>contents: { contents }</p>
            </div>
        );
    }
}
export default Server;