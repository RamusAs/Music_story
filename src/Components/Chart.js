import { ResponsiveBump } from '@nivo/bump'


export const Chart = ({ data, period }) => (
  <div className="c-chart">
    <div className="c-chart--graph">
      <ResponsiveBump
        data={data}
        colors={{ scheme: 'pastel2' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        startLabelPadding={30}
        startLabelTextColor={{ from: 'color', modifiers: [] }}
        endLabel={false}
        endLabelPadding={0}
        pointSize={7}
        inactivePointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        activePointBorderWidth={1}
        pointBorderColor={{ from: 'serie.color' }}
        enableGridX={false}
        enableGridY={false}
        axisTop={null}
        axisBottom={{
            tickSize: 20,
            tickPadding: 4,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 4
        }}
        axisLeft={null}
        animate={true}
        motionConfig="default"
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
      />
    </div>
  </div>
)