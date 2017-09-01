import React, {Component} from 'react';
import '../styles/adminBlogEditor.css';
import axios from 'axios';
import {connect} from 'react-redux';

class AdminBlog_UPDATE extends Component{
  constructor(props){
    super(props);
      this.state={
        post: null,
        postTitle: '',
        postSubtitle: '',
        postContent: ''
      }
  }

  componentDidMount(){
    console.log("Param is: ", this.props.match.params.posts_id)
    axios.get(`/api/blogs/${this.props.match.params.posts_id}`).then(res => {
      console.log("Response is:", res.data)
      this.setState({
        post: res.data[0],
        postTitle: res.data[0].post_title,
        postSubtitle: res.data[0].blog_subtitle,
        postContent: res.data[0].post_content
      })
    }).catch(err => console.log(err))
  }

  render(){
    console.log("State post is: ", this.state.post)
    console.log("State post title is: ", this.state.postTitle)


    const fullPageStyle = { width: "100%" }

    return(
      <main className="adminMainBlog" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <div className="adminContentContainerBlog">
          <div className="addNewBlog">
            <p className="adminPageTitleBlog">Update Blog</p>
            <div className="topInputBlog">
              <input value={this.state.postTitle} className="titleBlog"/>
              <input className="captionInputBlog" value={this.state.postSubtitle} className="subtitleBlog"/>
            </div>

            <div className="overwriteBlog">
              <textarea value={this.state.postContent} className="contentBlog"></textarea>
            </div>
          </div>

          <div className="addNewPicsBlog">
            <div className="addPicInnerBlog">
              <p className="picInnerTextBlog">Add Top Full Picture</p>
              <img src='https://i.imgur.com/FTLTf6u.png' />
              <div className="pblg saveBtnBlog">UPDATE</div>
            </div>
            <div className="addPicInnerBlog">
              <p className="picInnerTextBlog">Add 2nd Full Picture</p>
              <img src='https://i.imgur.com/FTLTf6u.png' />
              <div className="pblg cancel_btn">CANCEL</div>
            </div>
          </div>

        </div>

        <div className="saveCancelBtnContainer">
          <div className="singlebtn web_save">SAVE</div>
          <div className="singlebtn web_cancel">CANCEL</div>
        </div>
      </main>
    )
  }
}

function mapStateToProps(state){
  return{
    dropdownDisplayed: state.clicked
  }
}

export default connect(mapStateToProps)(AdminBlog_UPDATE);
