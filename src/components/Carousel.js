import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import QuestionCard from './QuestionCard';

export default class Carous extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [
        {
          title: 'Item 1',
          Text: '1',
        },
        {
          title: 'Item 2',
          Text: '2',
        },
        {
          title: 'Item 3',
          Text: '3',
        },
        {
          title: 'Item 4',
          Text: '4',
        },
        {
          title: 'Item 5',
          Text: '5',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#fff'}}>{item.title}</Text>
        <QuestionCard Text={item.Text} />
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            this.carousel._snapToItem(this.state.activeIndex - 1);
          }}
          underlayColor="#fff">
          <Image style={styles.arrow} source={require('../img/back.png')} />
        </TouchableHighlight>

        <View>
          <Carousel
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={330}
            itemWidth={320}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>

        <TouchableHighlight
          onPress={() => {
            this.carousel._snapToItem(this.state.activeIndex + 1);
          }}
          underlayColor="#fff">
          <Image style={styles.arrow} source={require('../img/next.png')} />
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', //add this
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: 50,
    height: 50,
  },
});
