import React from 'react';
import styles from 'Style/TextChanging.less';

interface IProps {
    title: string;
    texts: [string];
}
export const TextChanging: React.FC<IProps> = ({ title, texts }) => {
    return (
        <div className={styles.textChanging}>
            <h1>
                {title}
                <div>
                    <span>{texts.join('<br />')}</span>
                </div>
            </h1>
        </div>
    );
};
