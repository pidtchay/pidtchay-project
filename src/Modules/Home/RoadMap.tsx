import { Timeline } from 'antd';
import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { ILiterals } from 'Model/Literals';
import { getI18nValue } from 'Utils/common';

interface IProps {
    literals: ILiterals;
}

/**
 * Component displays a kind of roadmap.
 *
 * @param literals.literals
 * @param literals - Language settings in the form of key-value. The text depends on the selected language.
 */
export const RoadMap: React.FC<IProps> = ({ literals }) => {
    return (
        <Timeline
            pending={getI18nValue(literals, 'Pages.Home.timeline.comming_soon')}
            mode="alternate"
        >
            <Timeline.Item color="green">
                {getI18nValue(literals, 'Pages.Home.timeline.step1')}
            </Timeline.Item>
            <Timeline.Item color="green">
                {getI18nValue(literals, 'Pages.Home.timeline.step2')}
            </Timeline.Item>
            <Timeline.Item color="green">
                {getI18nValue(literals, 'Pages.Home.timeline.step3')}
            </Timeline.Item>
            <Timeline.Item color="green">
                {getI18nValue(literals, 'Pages.Home.timeline.step4')}
            </Timeline.Item>
            <Timeline.Item color="red">
                {getI18nValue(literals, 'Pages.Home.timeline.step5')}
            </Timeline.Item>
            <Timeline.Item
                dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
            >
                {getI18nValue(literals, 'Pages.Home.timeline.step6')}
            </Timeline.Item>
        </Timeline>
    );
};
