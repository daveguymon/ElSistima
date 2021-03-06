import React, {Component} from 'react';
import '../styles/adminSidebar.css';
import {Link} from 'react-router-dom';

export default class AdminSideBar extends Component{

  render(){
    return(
      <main className="Ad_sidebarMain">
      <Link to="/admin">
        <div className="sideNav">
          <i className="sidefa fa fa-home" aria-hidden="true"></i>
          <div>Admin Home</div>
        </div>
      </Link>

        <Link to="/admin/volunteer">
          <div className="sideNav">
            <i className="sidefa fa fa-user-circle" aria-hidden="true"></i>
            <div>Volunteers</div>
          </div>
        </Link>

        <Link to="/admin/classes">
          <div className="sideNav">
            <i className="sidefa fa fa-calendar" aria-hidden="true"></i>
            <div>Classes</div>
          </div>
        </Link>

        <Link to="/admin/performances">
          <div className="sideNav">
            <i className="sidefa fa fa-music" aria-hidden="true"></i>
            <div>Performances</div>
          </div>
        </Link>

        <Link to="/admin/media">
          <div className="sideNav">
            <i className="sidefa fa fa-picture-o" aria-hidden="true"></i>
            <div>Media</div>
          </div>
        </Link>

        <Link to="/admin/blog">
          <div className="sideNav">
            <i className="sidefa fa fa-book" aria-hidden="true"></i>
            <div>Blog</div>
          </div>
        </Link>
      </main>
    )
  }
}
