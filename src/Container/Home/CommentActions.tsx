import { Tooltip } from 'antd';
import React, { useState, createElement } from 'react';
import {
    LikeFilled,
    LikeOutlined,
    DislikeFilled,
    DislikeOutlined
} from '@ant-design/icons';
import { useLiteralValue } from 'Utils/hooks';

export const CommentActions = (): Array<React.ReactNode> => {
    const [action, setAction] = useState(null);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const { getValue: getLiteralValue } = useLiteralValue();

    const handleLike = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const handleDislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    return [
        <span key="comment-basic-like">
            <Tooltip title={getLiteralValue('Paget.Home.comment.footer.like')}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined, {
                    onClick: handleLike
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
                        onClick: handleDislike
                    }
                )}
            </Tooltip>
            <span className="comment-action">{dislikes}</span>
        </span>
    ];
};
