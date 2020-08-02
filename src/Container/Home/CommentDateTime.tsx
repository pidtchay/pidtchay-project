import { Tooltip } from 'antd';
import moment from 'moment';
import React from 'react';
import { DATE_TIME_FORMAT } from 'Constants/Common';

export const CommentDateTime = () => {
    return (
        <>
            <Tooltip title={moment().format(DATE_TIME_FORMAT)}>
                <span>{moment().fromNow()}</span>
            </Tooltip>
        </>
    );
};
