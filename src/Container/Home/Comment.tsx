import { Comment, Avatar } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { CommentActions } from 'Container/Home/CommentActions';
import { CommentContent } from 'Container/Home/CommentContent';
import { CommentDateTime } from 'Container/Home/CommentDateTime';

export const CommentComponent = () => {
    return (
        <>
            <Comment
                actions={CommentActions()}
                author={<span>PidtChay</span>}
                avatar={
                    <Avatar
                        size="large"
                        icon={<UserOutlined />}
                        alt="PidtChay"
                    />
                }
                content={<CommentContent />}
                datetime={<CommentDateTime />}
            />
        </>
    );
};
