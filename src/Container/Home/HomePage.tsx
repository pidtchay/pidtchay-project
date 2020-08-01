import { Col, Row, Comment, Avatar, Tooltip, Typography, Divider } from 'antd';
import moment from 'moment';
import React, { useState, createElement } from 'react';
import {
    UserOutlined,
    LikeFilled,
    LikeOutlined,
    DislikeFilled,
    DislikeOutlined
} from '@ant-design/icons';
import style from 'Style/Home.less';
import { useLiteralValue } from 'Utils/hooks';
import { RoadMap } from './RoadMap';
const { Title } = Typography;

// eslint-disable-next-line jsdoc/require-returns
/**
 * Home page component.
 */
export const HomePage = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const { getValue: getLiteralValue } = useLiteralValue();

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
            <Tooltip title={getLiteralValue('Paget.Home.comment.footer.like')}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined, {
                    onClick: like
                })}
            </Tooltip>
            <span className="comment-action">{likes}</span>
        </span>,
        <span key="comment-basic-dislike">
            <Tooltip
                title={getLiteralValue('Paget.Home.comment.footer.dislike')}
            >
                {React.createElement(
                    action === 'disliked' ? DislikeFilled : DislikeOutlined,
                    {
                        onClick: dislike
                    }
                )}
            </Tooltip>
            <span className="comment-action">{dislikes}</span>
        </span>
    ];

    return (
        <>
            <Row gutter={[16, 16]}>
                <div className={style.home_title}>
                    <Title>{getLiteralValue('Pages.Home.welcome.title')}</Title>
                    <Title level={2}>
                        {getLiteralValue('Pages.Home.welcome.title2')}
                        <a
                            href="https://pidtchay.github.io/pidtchay-project/"
                            target="_blank"
                        >
                            pidtchay.github.io
                        </a>
                    </Title>
                </div>
            </Row>

            <Divider />

            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <RoadMap />
                </Col>
                <Col offset={2}>
                    <Comment
                        actions={commentActions}
                        author={<span>PidtChay</span>}
                        avatar={
                            <Avatar
                                size="large"
                                icon={<UserOutlined />}
                                alt="PidtChay"
                            />
                        }
                        content={
                            <div>
                                <p>
                                    {getLiteralValue(
                                        'Pages.Home.comment.howdy'
                                    )}
                                </p>
                                <p>
                                    {getLiteralValue(
                                        'Pages.Home.comment.message'
                                    )}
                                </p>
                            </div>
                        }
                        datetime={
                            <Tooltip
                                title={moment().format('YYYY-MM-DD HH:mm:ss')}
                            >
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
                        }
                    />
                </Col>
            </Row>
        </>
    );
};
