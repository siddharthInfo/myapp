import React, { Component } from 'react'
import {connect} from 'react-redux';
import {appendData} from './Action';

export class Book extends Component {
   componentDidMount(){
    let name = "anybody";
    let arr = [];

    arr.push({
        book_id:1,
        title:'React tutorial',
        year:1998   
     });
     arr.push({
        book_id:2,
        title:'Redux tutorial',
        year:2000   
     });
     arr.push({
      book_id:3,
      title:'java tutorial',
      year:2010  
   });
     this.props.appendData({
        name:name,
        books:[...this.props.books, ...arr]
     });
   }


  render() {
    const {name,books}=this.props;
    let booklist = books.length>0 && books.map((item,i)=>{
        return(
            <li Key={i} value={item.book_id}>{item.title} {item.year}</li>
        )
    },this);
    return (
      <div>
        <h2>Hello{name}</h2>
        <ol>{booklist}</ol>
      </div>
    )
  }
}
const mapDispatchToProps={
  appendData
}
const mapStatetoProps=state=>({
  name:state.name,
  books:state.books
});
export default connect(mapStatetoProps,mapDispatchToProps)(Book);





