import { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

import { charColors } from "../../Localized/Strings";

const { width, height } = Dimensions.get('screen');

const chartConfig = {
  backgroundGradientFrom: '#cfcbcb',
  backgroundGradientTo: '#cfcbcb',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

function Pie({ data }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const countTotal = Object.values(data).reduce((acc, cur) => acc + cur, 0);
    setTotal(countTotal);
  }, [])

  return (
    <View>
      <PieChart
        data={Object.keys(data).map((label, i) => ({
          name: label,
          population: data[label],
          // color: `#${Math.floor(Math.random()*16777215).toString(16)}` // random colors
          color: charColors[i]
        }))}
        width={width * 0.9}
        height={height * 0.4}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        // paddingLeft={"15"}
        // absolute
        hasLegend={false}
        center={[85, -10]}
      />

      <View>
        {
          Object.keys(data).map((label, i) => {
            return (
              <View key={"legend-pie-" + (i + 1)} style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                <View style={{backgroundColor: charColors[i], width: 10, height: 10, borderRadius: 30, marginRight: 15}} />
                <Text>{((data[label] / total) * 100).toFixed(2)}%</Text>
                <Text style={{marginLeft: 15}}>{label}</Text>
              </View>
            )
          })
        }
      </View>
    </View>
  );
};


export default Pie;
