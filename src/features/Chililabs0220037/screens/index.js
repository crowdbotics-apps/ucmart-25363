import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_129_1} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8bb/da73/b126866d23e96915f34f644909692e61"
        }}
        style={styles.ImageBackground_129_42}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2a3/43dd/5584ca13d0ea1a4ef6cbf64418c3a063"
        }}
        style={styles.ImageBackground_129_16}
      />
      <View style={styles.View_129_2}>
        <View style={styles.View_129_3} />
        <View style={styles.View_129_4}>
          <View style={styles.View_129_5}>
            <View style={styles.View_129_6}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cb3/c6f7/1ca2657df6c0e8ca5e1d5732a7b67965"
                }}
                style={styles.ImageBackground_129_7}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fcf/d7e9/54386ce22214d7be4abe7225c4159696"
                }}
                style={styles.ImageBackground_129_13}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f9a/8fa2/584b9e11cbe71c85507f88bace3b9c90"
              }}
              style={styles.ImageBackground_129_14}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/138e/e636/c78ede4b6aa40feb71ef8b953811f66e"
              }}
              style={styles.ImageBackground_129_15}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8708/48fa/78865ee674e74d708771e789d9abf530"
        }}
        style={styles.ImageBackground_129_17}
      />
      <View style={styles.View_129_18}>
        <Text style={styles.Text_129_18}>
          We help companies to plan, build and launch native apps from end to
          end.
        </Text>
      </View>
      <View style={styles.View_129_19}>
        <Text style={styles.Text_129_19}>https://chililabs.io</Text>
      </View>
      <View style={styles.View_129_20}>
        <Text style={styles.Text_129_20}>
          Follow our team @chililabs for more free cool stuff! Let&#39;s build
          products together! ❤️{" "}
        </Text>
      </View>
      <View style={styles.View_129_21} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3d0/d64a/195c0c6cffddf5184533177b03ab86d8"
        }}
        style={styles.ImageBackground_129_23}
      />
      <View style={styles.View_129_26}>
        <Text style={styles.Text_129_26}>medium.com/@mariakovalevich</Text>
      </View>
      <View style={styles.View_129_28}>
        <Text style={styles.Text_129_28}>dribbble.com/mariakovalevich</Text>
      </View>
      <View style={styles.View_129_29}>
        <View style={styles.View_129_30}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0969/f76a/5b58d6f64971adef650c99c9921bdf39"
            }}
            style={styles.ImageBackground_129_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e16/aa12/13198d12ca3d7c07e97dc7f50e3fa034"
            }}
            style={styles.ImageBackground_129_32}
          />
        </View>
      </View>
      <View style={styles.View_129_40}>
        <Text style={styles.Text_129_40}>
          Maria Kovalevich Design Lead @ Chili Labs
        </Text>
      </View>
      <View style={styles.View_129_41}>
        <Text style={styles.Text_129_41}>
          Hey guys👋 and thank you! I hope this kit will be useful in your
          learning and your job.
        </Text>
      </View>
      <View style={styles.View_129_46}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69f6/f88d/e3b538fcaf75d3de154ed3009c7e7ab8"
          }}
          style={styles.ImageBackground_129_45}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9ff/f682/d8803731a3c476df8058f781da589415"
          }}
          style={styles.ImageBackground_129_44}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_129_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 1006,
    minHeight: 1006,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(117, 25, 235, 1)"
  },
  ImageBackground_129_42: {
    width: wp("37.24409448818898%"),
    minWidth: wp("37.24409448818898%"),
    height: 284,
    minHeight: 284,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.5748031496063%"),
    top: 119
  },
  ImageBackground_129_16: {
    width: wp("54.409448818897644%"),
    minWidth: wp("54.409448818897644%"),
    height: 414,
    minHeight: 414,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.96062992125984%"),
    top: 212
  },
  View_129_2: {
    width: wp("12.601287120909202%"),
    minWidth: wp("12.601287120909202%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.7007874015748%"),
    top: 0
  },
  View_129_3: {
    width: wp("12.601287120909202%"),
    minWidth: wp("12.601287120909202%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421
  },
  View_129_4: {
    width: wp("8.426566536970965%"),
    height: 33.52387237548828,
    top: 37.3099365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.087267778051185%")
  },
  View_129_5: {
    width: wp("8.426566536970965%"),
    height: 33.52387237548828,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_129_6: {
    width: wp("7.260405773252952%"),
    minWidth: wp("7.260405773252952%"),
    height: 33.52387237548828,
    minHeight: 33.52387237548828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_129_7: {
    width: wp("7.260405773252952%"),
    minWidth: wp("7.260405773252952%"),
    height: 33.52387237548828,
    minHeight: 33.52387237548828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_129_13: {
    width: wp("0.24399836232343058%"),
    minWidth: wp("0.24399836232343058%"),
    height: 11.936823844909668,
    minHeight: 11.936823844909668,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.366649237204726%"),
    top: 5.003173828125
  },
  ImageBackground_129_14: {
    width: wp("1.318373642568513%"),
    minWidth: wp("1.318373642568513%"),
    height: 19.931394577026367,
    minHeight: 19.931394577026367,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.108183132381882%"),
    top: 12.9605712890625
  },
  ImageBackground_129_15: {
    width: wp("0.5641725870567983%"),
    minWidth: wp("0.5641725870567983%"),
    height: 7.75957727432251,
    minHeight: 7.75957727432251,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.219180610236222%"),
    top: 2.8779296875
  },
  ImageBackground_129_17: {
    width: wp("47.24409448818898%"),
    minWidth: wp("47.24409448818898%"),
    height: 360,
    minHeight: 360,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8.425196850393702%"),
    top: 742
  },
  View_129_18: {
    width: wp("63.622047244094496%"),
    minWidth: wp("63.622047244094496%"),
    minHeight: 120,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.874015748031496%"),
    top: 168
  },
  Text_129_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4099999964237213,
    textTransform: "none"
  },
  View_129_19: {
    width: wp("18.26771653543307%"),
    minWidth: wp("18.26771653543307%"),
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.874015748031496%"),
    top: 403
  },
  Text_129_19: {
    color: "rgba(205, 255, 182, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_129_20: {
    width: wp("63.622047244094496%"),
    minWidth: wp("63.622047244094496%"),
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.874015748031496%"),
    top: 327
  },
  Text_129_20: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  View_129_21: {
    width: wp("84.25196850393701%"),
    minWidth: wp("84.25196850393701%"),
    height: 445,
    minHeight: 445,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.874015748031496%"),
    top: 502,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8500000238418579,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_129_23: {
    width: wp("3.779527559055118%"),
    minWidth: wp("3.779527559055118%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.29133858267716%"),
    top: 843
  },
  View_129_26: {
    width: wp("29.763779527559052%"),
    minWidth: wp("29.763779527559052%"),
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.330708661417326%"),
    top: 845
  },
  Text_129_26: {
    color: "rgba(0, 131, 253, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_129_28: {
    width: wp("28.425196850393704%"),
    minWidth: wp("28.425196850393704%"),
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.322834645669293%"),
    top: 845
  },
  Text_129_28: {
    color: "rgba(0, 131, 253, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_129_29: {
    width: wp("3.779527559055118%"),
    minWidth: wp("3.779527559055118%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.283464566929133%"),
    top: 843,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_129_30: {
    width: wp("3.779527559055118%"),
    height: 48,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_129_31: {
    width: wp("3.779527559055118%"),
    height: 48,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_129_32: {
    width: wp("2.015748061533049%"),
    height: 25.56446075439453,
    top: 11.199951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8819051427165352%")
  },
  View_129_40: {
    width: wp("50.70866141732283%"),
    minWidth: wp("50.70866141732283%"),
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.283464566929133%"),
    top: 749
  },
  Text_129_40: {
    color: "rgba(45, 12, 87, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  },
  View_129_41: {
    width: wp("74.56692913385827%"),
    minWidth: wp("74.56692913385827%"),
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.283464566929133%"),
    top: 656
  },
  Text_129_41: {
    color: "rgba(45, 12, 87, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.48,
    textTransform: "none"
  },
  View_129_46: {
    width: wp("5.511811023622047%"),
    minWidth: wp("5.511811023622047%"),
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.88976377952756%"),
    top: 558
  },
  ImageBackground_129_45: {
    width: wp("5.511811023622047%"),
    minWidth: wp("5.511811023622047%"),
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_129_44: {
    width: wp("5.511811023622047%"),
    minWidth: wp("5.511811023622047%"),
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_2: { height: 1006 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
