import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Card } from 'antd';

function SimpleCard () {
  return (
        <div>
            <Card title='Default size card' extra={<a href='#'>More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
  );
}

describe('SimpleCard', () => {
  it('snapshot', () => {
    const component = renderer.create(<SimpleCard />);
    expect(component).toMatchSnapshot();
  });
});