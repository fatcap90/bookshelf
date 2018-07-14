import React from "react";
import ReactDOM from 'react-dom'



class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            visible: 4,
            error: false
        };

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState({
            visible: this.state.visible + 4
        });
    }

    componentWillMount() {
        $.get("https://jsonplaceholder.typicode.com/posts", (res, status)=> {
            if (status === 'success') {
                this.setState({
                    items: res,
                    loaded: true
                });
            } else {
                console.error(status);
                this.setState({
                    error: true
                });
            }
        });
    }

    render() {
        return <section className="feed">
            <h1>Simple Load More/Pagination with React</h1>
            <h2>With Array.prototype.slice() and the power of component state!</h2>

            <div className="tiles" aria-live="polite">
                {this.state.items.slice(0, this.state.visible).map((item, index) => {
                    return <div className="tile fade-in" key={item.id}>
                        <span className="count">{index+1}</span>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>;
                })}
            </div>
            {this.state.visible < this.state.items.length &&
            <button onClick={this.loadMore} type="button" className="load-more">Load more</button>}
        </section>
    }
}

ReactDOM.render(<Feed />, document.getElementById('feed'));