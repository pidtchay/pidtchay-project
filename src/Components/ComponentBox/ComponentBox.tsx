/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import classNames from 'classnames/bind';
import styles from 'Components/ComponentBox/theme/ComponentBox.less';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDynamicHeightField } from './useDynamicHeightField';

const cx = classNames.bind(styles);

const INITIAL_HEIGHT = 46;

interface IProps {
    textRef: React.RefObject<HTMLTextAreaElement>;
    fieldValue: string;
    onChangeValue: (value: string) => void;
    onClose: () => void;
    onSubmit: () => void;
}

type TComponentBox = React.FC<IProps> & {
    displayName: string;
};

const ComponentBox: TComponentBox = ({ textRef, fieldValue, onChangeValue, onClose, onSubmit }: IProps): JSX.Element => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useTranslation(['common']);

    const outerHeight = useRef(INITIAL_HEIGHT);
    const containerRef = useRef<HTMLFormElement>(null);

    useDynamicHeightField(textRef, fieldValue);

    const onExpand = () => {
        if (!isExpanded) {
            outerHeight.current = containerRef.current.scrollHeight;
            setIsExpanded(true);
        }
    };

    const handleClose = () => {
        setIsExpanded(false);
        onClose();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsExpanded(false);
        onSubmit();
    };

    return (
        <form
            className={cx({ componentBox: true, expanded: isExpanded, collapsed: !isExpanded, modified: fieldValue.length > 0 })}
            style={{
                minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
            }}
            onSubmit={handleSubmit}
            ref={containerRef}
        >
            <label htmlFor="inputField">What are your thoughts?</label>
            <textarea
                ref={textRef}
                onClick={onExpand}
                onFocus={onExpand}
                onChange={(e) => onChangeValue(e.target.value)}
                placeholder="What are your thoughts?"
                value={fieldValue}
                name="inputField"
                id="inputField"
                className={styles.componentField}
            />
            <div className={styles.actions}>
                <button type="button" className={styles.cancel} onClick={handleClose}>
                    {t('common:ACTIONS.Cancel')}
                </button>
                <button type="submit" disabled={fieldValue.length < 1}>
                    {t('common:ACTIONS.Save')}
                </button>
            </div>
        </form>
    );
};

ComponentBox.displayName = 'ComponentBox';

export default ComponentBox;
