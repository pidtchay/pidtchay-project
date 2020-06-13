import React, { useState, createElement } from 'react';
import { Col, Row, Comment, Avatar, Tooltip, Typography, Divider } from 'antd';
import { UserOutlined, LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons';
import style from 'Style/Home.less';

import moment from 'moment';
import { get } from 'Utils/common';
import { useSelector } from 'react-redux';
import { RootState } from 'Store';
import { RoadMap } from './RoadMap';
const { Title } = Typography;

/**
 * Home page component
 */
export const HomePage = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const literals = useSelector((state: RootState) => (state.literals));

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
            <Tooltip title={get(literals, 'Paget.Home.comment.footer.like')}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined, {
                onClick: like,
                })}
            </Tooltip>
            <span className="comment-action">{likes}</span>
        </span>,
        <span key="comment-basic-dislike">
            <Tooltip title={get(literals, 'Paget.Home.comment.footer.dislike')}>
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
                    <Title>{get(literals, 'Pages.Home.welcome.title')}</Title>
                    <Title level={2}>{get(literals, 'Pages.Home.welcome.title2')}<a href="https://pidtchay.github.io/pidtchay-project/" target="_blank">pidtchay.github.io</a></Title>
                </div>
            </Row>
            
            <Divider />
            
            <Row>
                <Col span={8}>
                   <RoadMap literals={literals} />
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
                                {get(literals, 'Pages.Home.comment.howdy')}
                                </p>
                                <p>
                                {get(literals, 'Pages.Home.comment.message')}
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
