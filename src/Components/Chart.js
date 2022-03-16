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
    <div class="c-chart--detail" id="band">
      <h2 class="w3-wide">THE BAND</h2>
      <p class="w3-opacity"><i>We love music</i></p>
      <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
)