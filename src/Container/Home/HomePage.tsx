import React, { useState, createElement } from 'react';
import { Col, Row, Timeline, Comment, Avatar, Tooltip, Typography, Divider } from 'antd';
import { ClockCircleOutlined, UserOutlined, LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons';
import style from 'Style/Home.less';

import moment from 'moment';
const { Title } = Typography;

/**
 * Home page component
 */
export const HomePage = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
  
    const like = () => {
      setLikes(1);
      setDislikes(0);
      setAction('liked');
    };
  
    const dislike = () => {
      setLikes(0);
      setDislikes(1);
      setAction('disliked');
    };

    const commentActions = [
        <span key="comment-basic-like">
            <Tooltip title="Like">
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined, {
                onClick: like,
                })}
            </Tooltip>
            <span className="comment-action">{likes}</span>
        </span>,
        <span key="comment-basic-dislike">
            <Tooltip title="Dislike">
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined, {
                onClick: dislike,
                })}
            </Tooltip>
            <span className="comment-action">{dislikes}</span>
        </span>,
    ];

    return (
        <>
            <Row>
                <div className={style.home_title}>
                    <Title>Welcome to my web app fully focused on the React</Title>
                    <Title level={2}>Thank you for visiting <a href="https://pidtchay.github.io/pidtchay-project/" target="_blank">pidtchay.github.io</a></Title>
                </div>
            </Row>
            
            <Divider />
            
            <Row>
                <Col span={8}>
                    <Timeline pending="Comming soon..." mode="alternate">
                        <Timeline.Item color="green">Create this a web app</Timeline.Item>
                        <Timeline.Item color="green">Add authorization to the web application</Timeline.Item>
                        <Timeline.Item color="green">Add tests to the web application</Timeline.Item>
                        <Timeline.Item color="green">Add search and display results for Github repositories</Timeline.Item>
                        <Timeline.Item color="red">Break test with authorization in web application</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>Repair an authorization test in a web application</Timeline.Item>
                    </Timeline>
                </Col>
                <Col offset={2}>
                    <Comment
                        actions={commentActions}
                        author={<span>PidtChay</span>}
                        avatar={
                            <Avatar size="large" icon={<UserOutlined />} alt="PidtChay" />
                        }
                        content={
                            <div>
                                <p>
                                Howdy.
                                </p>
                                <p>
                                I hope you enjoy my project. It can be taken as a portfolio.
                                I have many ideas of what I want to add here.
                                </p>
                            </div>
                        }
                        datetime={
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
                        }
                        />
                </Col>
            </Row>
        </>
    );
};
