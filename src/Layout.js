import React from 'react';
import "./Layout.css";
import LayoutTopic from './LayoutTopic'
import ChatIcon from '@material-ui/icons/Chat';

import LanguageIcon from '@material-ui/icons/Language';

function Layout() {
    
    return (
        <div className="layout">
        <h4 className ="layout_title">TRANSACTIONS</h4>
      <h1 className ="layout_description">A better way to send money</h1>
     
     
      <p  className = "layout_body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </p>
      <div >
          <div className="layout_topics">
          <LayoutTopic  Icon ={LanguageIcon} title =  "Competitive Exchange Rates"
           content ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."/>
          <LayoutTopic   Icon ={LanguageIcon} title =  "No hidden fess"
           content ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam." />
          </div>
          <div className="layout_topics">
          <LayoutTopic  Icon ={LanguageIcon}  title =  "Transfers are instant"
           content ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam." />
          <LayoutTopic  Icon ={ChatIcon}  title =  "Mobile notifications"
           content ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam." />

        </div>

          
          

      </div>
     
    </div>
    )
}

export default Layout
