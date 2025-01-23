// NotificationList.jsx
import React from "react";
import Notification from "./Notification";

const reserverNotifications = [
  {
    id: 1,
    message: '안녕하세요. 오늘 일정을 알려드립니다.',
  },
  {
    id: 2,
    message: '점심 식사 시간입니다.',
  },
  {
    id: 3,
    message: '이제 곧 미팅이 시작됩니다.',
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    }
  }

  componentDidMount() {
    const {notifications} = this.state;
    timer = setInterval(() => {
      if (notifications.length <reserverNotifications.length) {
        const index = notifications.length;
        notifications.push(reserverNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      }
      else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);//1초마다 실행했던것을 중지시킵니다.
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notifications) => {
          return (
            <Notification 
              key={notifications.id} 
              id={notifications.id} 
              message={notifications.message} />
          );
        })}
      </div>
    );
  }
}


export default NotificationList;