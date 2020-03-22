import React,{Component} from 'react';
import './index.css';

export default class index  extends Component{
    // console.log(props)
    render(){
        return (
            <div className="card mb-3 col-lg-5 col-xs-11" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={this.props.book.thumbnailUrl} className="card-img" alt="book image"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.book.title}</h5>
                        <p className="card-text">{this.props.book.shortDescription?this.props.book.shortDescription:"no short description."}</p>
                        <p className="card-text"><small className="text-muted">{this.props.book.isbn}</small></p>
                    </div>
                    </div>
                </div>
                <button className="more-details" onClick={()=>{this.props.toggleModal();this.props.handleBookShown(this.props.book)}}>
                    More Details
                </button>
            </div>
        )
    }
}
