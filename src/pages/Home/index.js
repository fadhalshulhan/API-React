import React from 'react';
import Button from '../../Component/Button'
import Status from '../../Component/Status'


const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // isAuthenticated: false,
            // name: "FBDC Jakarta"
            list: null,
            keyword : ""
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = () => {
        return fetch(link)
        .then(res => res.json())
        .then(res => {
            this.setState({
                list: res
            });
        });
    }

    handleLogin = () => {
        this.setState({
            isAuthenticated: true
        });
    }

    handleForm = event => {
        this.setState({
            // name: event.target.value
            keyword: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const name = this.state.name;
        this.setState({
            nameDisplay: name
        })
    }

    render(){
        const listStyle = {marginBottom: 10, borderBottom: "1px solid #000"};


        return (
            <div>
                 <input onChange={this.handleForm} value={this.state.keyword}/>

                {/* <form onSubmit={this.handleSubmit}>
                    <Button onClick={this.handleLogin}>Login</Button>
                    <input onChange={this.handleForm} value={this.state.name}/>
                </form> */}
                
                {/* <div>Hi, {this.state.isAuthenticated ? this.state.name: "User"}</div> */}
                {/* <Status
                isAuthenticated={this.state.isAuthenticated}
                name={this.state.name}
                /> */}

                {this.state.list && 
                    this.state.list
                    .filter(article => {
                        return(
                            article.title.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
                            article.content.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
                            article.author.toLowerCase().includes(this.state.keyword.toLowerCase())
                        );
                    })
                    
                    .map(article=> {
                    return <div key={article.id} style={listStyle}>
                    <strong>{article.title}</strong>
                    <p>{article.author}</p>
                    <p>{article.content}</p></div>;
                   
                })}
            </div>
        );
    }
}
export default Home;