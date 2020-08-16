import React from 'react';
import { useLiteralValue } from 'Utils/hooks';

export const CommentContent = () => {
    const { getValue: getLiteralValue } = useLiteralValue();
    return (
        <>
            <div>
                <p>{getLiteralValue('Pages.Home.comment.howdy')}</p>
                <p>{getLiteralValue('Pages.Home.comment.message')}</p>
            </div>
        </>
    );
};
