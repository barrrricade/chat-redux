import { connect } from 'react-redux';
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import Message from "../components/message";
import { fetchMessages } from "../actions/index";
import MessageForm from  "./message_form";

class MessageList extends Component {


  componentWillMount() {
    this.fetchMessages();
    // this.props.fetchMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }


  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="channel-container">
        <div className="col-sm-8">
          <div className="channel-title">
            <span>Channel #{this.props.selectedChannel}</span>
          </div>
          <div className="channel-content" ref={(list) => { this.list = list; }}>
            {
              this.props.messages.map((message) => {
                return <Message key={message.id} message={message} />;
              })
            }
          </div>
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const sampleMessage = [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ];

  return {
    messages: state.messages,
    // messages: sampleMessage,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
