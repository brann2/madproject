import React from 'react';
import {View} from 'react-native';

interface GapProps {
  width?: number;
  height?: number;
}

const Gap: React.FC<GapProps> = ({width = 0, height = 0}) => {
  return <View style={{width, height}} />;
};

export default Gap;
