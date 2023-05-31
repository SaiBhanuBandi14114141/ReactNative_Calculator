import { Styles } from 'example/styles/reactNativeStyles';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';

const Check = () => {
  const [clickValue, setClickValue] = useState('');
  let data = [];

  const evaluateExpression = (value: string) => {
    try {
      // eslint-disable-next-line no-eval
      setClickValue(eval(value));
    } catch (error) {
      setClickValue('0');
    }
  };

  for (let i = 1; i < 10; i++) {
    data.push(i);
  }

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '3',
    },
    {
      id: 'bd7acbea-c1b1-46c2-a34refed5-3ad53abb28ba',
      title: '4',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-eht4fbd91aa97f63',
      title: '5',
    },
    {
      id: '58694a0f-3da1-471f-bd96yrht-145571e29d72',
      title: '6',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-efg3ad53abb28ba',
      title: '7',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8sdf-fbd91aa97f63',
      title: '8',
    },
    {
      id: '58694a0f-3da1-471f-bd9bes6-145571e29d72',
      title: '9',
    },

    {
      id: '3ac68afc-c605-48d3-a4f8s-fbd91aa97f63',
      title: '-',
    },
    {
      id: 'bd7acb1b1-46c2-aed5-efg3ad53abb28ba',
      title: '+',
    },
    {
      id: '58694a0f-3da1-471f-bd9bes6-1455729d72',
      title: '0',
    },
    {
      id: '3ac68afc605-48d3-a4f8s-fbd91aa97f63',
      title: '/',
    },
    {
      id: '58694a0f-3da1-471f-bd9bes6-14557d72',
      title: '*',
    },
    {
      id: '58694a0f-3da1-471f-bd9bes6-14557d72',
      title: '=',
    },
  ];

  type ItemProps = { title: string };

  // eslint-disable-next-line react/no-unstable-nested-components
  const Item = ({ title }: ItemProps) => (
    <TouchableOpacity
      style={title === '=' ? Styles.subContainer : Styles.mainContainer}
      onPress={() => {
        if (title === '=') {
          evaluateExpression(clickValue);
        } else {
          setClickValue(clickValue + title);
        }
      }}
    >
      <Text style={Styles.numberTextSize}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Text style={Styles.textContainer}>{clickValue}</Text>
      <FlatList
        data={DATA}
        numColumns={3}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </SafeAreaView>
  );
};

export default Check;
