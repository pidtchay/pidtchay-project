import { Timeline } from 'antd';
import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useLiteralValue } from 'Utils/hooks';

/**
 * Component displays a kind of roadmap.
 *
 * @returns {JSX.Element} [return0] Roadmap.
 */
export const RoadMap: React.FC = () => {
    const { getValue: getLiteralValue } = useLiteralValue();
    return (
        <Timeline
            pending={getLiteralValue('Pages.Home.timeline.comming_soon')}
            mode="alternate"
        >
            <Timeline.Item color="green">
                {getLiteralValue('Pages.Home.timeline.step1')}
            </Timeline.Item>
            <Timeline.Item color="green">
                {getLiteralValue('Pages.Home.timeline.step2')}
            </Timeline.Item>
            <Timeline.Item color="green">
                {getLiteralValue('Pages.Home.timeline.step3')}
            </Timeline.Item>
            <Timeline.Item color="green">
                {getLiteralValue('Pages.Home.timeline.step4')}
            </Timeline.Item>
            <Timeline.Item color="red">
                {getLiteralValue('Pages.Home.timeline.step5')}
            </Timeline.Item>
            <Timeline.Item
                dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
            >
                {getLiteralValue('Pages.Home.timeline.step6')}
            </Timeline.Item>
        </Timeline>
    );
};
