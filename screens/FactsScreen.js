import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PsycheText } from "../components/StyledText";

export default class FactsScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Mission' },
      { key: 'second', title: 'Spacecraft' },
      { key: 'third', title: 'Asteroid' }
    ]
  };

  static navigationOptions = {
    title: 'Facts'
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        sections = [
          {
            title: 'What is Psyche?',
            content: 'The name of an asteroid orbiting the Sun between Mars and Jupiter. Also it is a name of a NASA space mission to visit that asteroid, led by ASU.'
          },
          {
            title: 'What is the different between this mission compare to the others?',
            content: 'Psyche is the first mission to a world made of metal rather than rock or ice.'
          },
          {
            title: 'When did NASA choose this mission?',
            content: 'The Psyche mission is chosen by NASA on January 4, 2017.'
          },
          {
            title: 'What program did Psyche mission selected for?',
            content: 'Psyche is the 14th mission selected by NASA Discovery Program, a series of relatively low-cost missions to solar system targets.'
          },
          {
            title: 'How much is the mission cost?',
            content: 'The mission cost is ~850 million included mission development, operations, and science, communication demonstration hardware or operations. \n\nThis did not include cost for the launch service, Deep Space Optical these are procured separately.'
          },
          {
            title: 'What is the goals for this mission?',
            content: 'The goals for this mission are to understand a previously unexplored building block of planet formation: iron cores. \n\nLook inside terrestrial planets, including Earth, by directly examining the interior of a differentiated body, which otherwise could not be seen. \n\nExplore a new type of world. For the first time, examine a world made not of rock and ice, but metal.'
          },
          {
            title: 'What is the mission objectives?',
            content: 'Determine whether Psyche is a core, or if it is un-melted material. \n\nDetermine the relative ages of regions of Psyche’s surface. \n\nDetermine whether small metal bodies incorporate the same light elements as are expected in the Earth’s high-pressure core. \n\nDetermine whether Psyche was formed under conditions more oxidizing or more reducing than Earth’s core. \n\nCharacterize Psyche’s morphology.'
          },
          {
            title: 'Whose involved in this mission?',
            content: 'Principal Investigator (PI): Lindy Elkins-Tanton, Arizona State University (ASU). \n\nDeputy Principal Investigator (Deputy PI): Jim Bell, ASU.'
          },
          {
            title: 'What is the responsible of Principle Investigator(PI)?',
            content: 'The PI is responsible for overall mission success, and for the scientific integrity and execution of the mission within committed cost and schedule. \n\nThe PI oversees the team organization, decides science priorities and progress, and oversees delivery of mission data to NASA’s Planetary Data System. \n\nThe PI is the decision-maker within the Psyche team, and NASA is the ultimate decision-maker. \n\nThe PI is responsible for ensuring that all mission participants are playing their roles as defined by the Team Guidelines.'
          },
          {
            title: 'Whose are the Co-Investigators?',
            content: 'Erik Asphaug, University of Arizona. \n\nDavid Bercovici, Yale University. \n\nBruce Bills, Jet Propulsion Laboratory (JPL). \n\nRichard Binzel, Massachusetts Institute of Technology (MIT). \n\nWilliam Bottke, Southwest Research Institute (SwRI). \n\nCatherine Bowman, ASU. \n\nRalf Jaumann, Deutsches Zentrum für Luft- und Raumfahrt. \n\nInsoo Jun, JPL. \n\nDavid Lawrence, Johns Hopkins University, Applied Physics Laboratory (APL). \n\nSimone Marchi, SwRI. \n\nTimothy McCoy, Smithsonian Institution. \n\nRyan Park, JPL. \n\nPatrick Peplowski, APL. \n\nCarol Polansky, JPL. \n\nThomas Prettyman, Planetary Science Institute. \n\nCarol Raymond, JPL. \n\nChris Russell, University of California, Los Angeles. \n\nBenjamin Weiss, MIT. \n\nDan Wenkert, JPL. \n\nMark Wieczorek, Observatoire de la Côte d’Azur. \n\nDavid Williams, ASU. \n\nMaria Zuber, MIT.'
          },
          {
            title: 'Whose are The Mission leadership?',
            content: 'Diane Brown, Program Executive, NASA Headquarters (HQ). \n\nSarah Noble, Program Scientist, NASA HQ. \n\nBelinda Wright, Mission Manager, NASA Marshall Space Flight Center (MSFC). \n\nHenry Stone, Project Manager, JPL. \n\nRobert Mase, Deputy Project Manager and Acting Mission System Manager, JPL. \n\nBrian Johnson, Project Business Manager, JPL. \n\nDavid Oh, Project System Engineer, JPL. \n\nKalyani Sukhatme, Payload Manager, JPL. \n\nRob Menke, Mission Assurance Manager, JPL. \n\nMark Brown, Flight System Manager, JPL. \n\nSteve Schott, SEP Chassis Program Manager, SSL. \n\nPeter Lord, SEP Chassis Deputy Program Manager, SSL.'
          },
          {
            title: 'Whose are Psyche Science Partners?',
            content: 'Applied Physics Laboratory (APL). \n\nDeutsches Zentrum für Luft- und Raumfahrt (DLR). \n\nGlenn Research Center (GRC). \n\nJet Propulsion Laboratory (JPL). \n\nMassachusetts Institute of Technology (MIT). \n\nMalin Space Science Systems (MSSS). \n\nObservatoire de la Côte d’Azur. \n\nPlanetary Science Institute (PSI). \n\nSmithsonian Institution. \n\nSouthwest Research Institute (SwRI). \n\nSSL. \n\nUniversity of Arizona. \n\nUniversity of California Los Angeles (UCLA). \n\nYale University.'
          }
        ]
        return (
          <ImageBackground style={{ flex: 1, width: '100%', height: '100%' }} source={{ uri: 'https://image.ibb.co/iZJwEc/mission_background.png' }}>
            <ScrollView>
              <AccordionView content={sections} />
            </ScrollView>
          </ImageBackground>
        );
      case 'second':
        sections = [
          {
            title: 'What type of propulsion does spacecraft use?',
            content: 'Solar-electric (low-thrust) propulsion.'
          },
          {
            title: 'What does solar-electric propulsion means?',
            content: 'Solar electric propulsion uses electricity from solar arrays to create electromagnetic fields to accelerate and expel charged atoms (ions) of xenon to create a very low thrust with a very efficient use of propellant.'
          },
          {
            title: 'Have we ever use this before beyond lunar orbit?',
            content: 'No, this will be the first use of Hall effect thrusters beyond lunar orbit.'
          },
          {
            title: 'What type of gas is using in Psyche spacecraft?',
            content: 'The Psyche spacecraft is using Xenon.'
          },
          {
            title: 'What is Xenon?',
            content: 'Xenon is a gas that is in the air we breathe (in very small amounts-- 0.09 parts per million!).\n\nXenon gas is used in high quality light bulbs, including automobile headlamps and movie projectors.\n\n“The most common propellant used in ion propulsion is xenon, which is easily ionized and has a high atomic mass, thus generating a desirable level of thrust when ions are accelerated. It also is inert and has a high storage density; therefore, it is well suited for storing on spacecraft.”'
          },
          {
            title: 'What is the size of The Psyche spacecraft?',
            content: 'The full spacecraft, including the solar panels, is 24.76 meters (~81 feet) long by 7.34 meters (~24 feet) wide. That is about the size of a (singles) tennis court.'
          },
          {
            title: 'What is the size of the Bus?',
            content: 'The bus (body) of the spacecraft is 3.1 meters (~10 feet) long by 2.4 meters (almost 8 feet) wide.\n\nA few size comparisons:\nIt is slightly bigger than a Smart Car.\nIt about the size of a garden storage shed.\nIt is as tall as a regulation basketball hoop!'
          },
          {
            title: 'What is The Psyche’s Multispectral Imager?',
            content: 'Provides high-resolution images using filters to discriminate between Psyche’s metallic and silicate constituents.\n\nConsists of a pair of identical cameras designed to acquire geologic, compositional, and topographic data.\n\nPurpose of the second camera is to provide redundancy for mission-critical optical navigation.'
          },
          {
            title: 'Where does the Multispectral Imager team based?',
            content: 'The team is based at Arizona State University.',
          },
          {
            title: 'What is The Psyche’s Gamma Ray and Neutron Spectrometer?',
            content: 'Will detect, measure, and map Psyche’s elemental composition.\n\nMounted on a 2-meter (6-foot) boom (“arm”) to:\n\nDistance the sensors from background radiation created by energetic particles interacting with the spacecraft; provide an unobstructed field of view.'
          },
          {
            title: 'Where does the Gamma Ray and Neutron Spectrometer team based?',
            content: 'The team is based at the Applied Physics Laboratory at Johns Hopkins University.'
          },
          {
            title: 'What is The Psyche’s Magnetometer?',
            content: 'Designed to detect and measure the remnant magnetic field of the asteroid.\n\nComposed of two identical high-sensitivity magnetic field sensors located at the middle and outer end of a 2-meter (6-foot) boom (“arm”).'
          },
          {
            title: 'Where does the Magnetometer team based?',
            content: 'The team is based at Massachusetts Institute of Technology (MIT) and the University of California Los Angeles (UCLA).'
          },
          {
            title: 'What is The Psyche’s Radio Science?',
            content: 'The Psyche mission will use the X-band radio telecommunications system to measure Psyche’s gravity field to high precision.\n\nWhen combined with topography derived from onboard imagery, this will provide information on the interior structure of Psyche.'
          },
          {
            title: 'Where does the Radio Science team based?',
            content: 'The team is based at MIT and JPL.'
          },
          {
            title: 'What is The Psyche’s Deep Space Optical Communication (DSOC)?',
            content: 'The Psyche mission will test a sophisticated new laser communication technology that encodes data in photons (rather than radio waves) to communicate between a probe in deep space and Earth.\n\nUsing light instead of radio allows the spacecraft to communicate more data in a given amount of time.'
          },
          {
            title: 'Where does the DSOC team based?',
            content: 'The DSOC team is based at the Jet Propulsion Laboratory.'
          }
        ]
        return (
          <ImageBackground style={{ flex: 1, width: '100%', height: '100%' }} source={{ uri: 'https://preview.ibb.co/gdgiuc/Spacecraft_background.png' }}>
            <ScrollView>
              <AccordionView content={sections} />
            </ScrollView>
          </ImageBackground>
        );
      case 'third':
        sections = [
          {
            title: 'When and who discovered Psyche?',
            content: 'Psyche was discovered in 1852, by Italian astronomer Annibale de Gasparis. \n\nAlso Psyche is the 16th asteroid to be discovered.'
          },
          {
            title: 'How do we know?',
            content: 'Radar albedo (Radar albedo is the “ratio of a target’s radar cross section in a specified polarization to its projected area; hence, a measure of the target’s radar reflectivity”). \n\nThermal inertia (Thermal inertia “refers to the ability of a material to conduct and store heat, and in planetary science, its measure of the sub surface’s ability to store heat during the day and reradiate it during the night”).'
          },
          {
            title: 'Why is this asteroid important?',
            content: 'Scientists believe Psyche is the exposed nickel-iron core of an early planet, one of the building blocks of our solar system. \n\nPsyche is most likely a survivor of multiple violent hit-and-run collisions, common when the solar system was forming. \n\nThe asteroid Psyche may be able to tell us how Earth’s core and the cores of the other terrestrial (rocky) planets came to be. (The terrestrial planets are Mercury, Venus, Earth, and Mars).'
          },
          {
            title: 'Where does Psyche located?',
            content: 'Psyche lies in the main asteroid belt between Mars and Jupiter.'
          },
          {
            title: 'What is the time different on Psyche compare to Earth?',
            content: 'A day on Psyche is about 4 hours and 12 minutes. \n\nThis is the sidereal rotation period, or the amount of time it takes for a (body) to completely spin around and make one full roration. \n\nYou could live through just under six "days" on Psyche in the same time as one day on Earth. \n\nA year on Psyche lasts about five Earth years (about 1828 Earth days).'
          },
          {
            title: 'What is the different between Psyche and Earth orbiting?',
            content: 'Psyche orbit the Sun at an average distance of 3 astronomical units (AU) (about 280 million miles); Earth orbits at 1 AU (about 93 million miles).'
          },
          {
            title: 'What is the density of Psyche?',
            content: 'Psyche is dense--perhaps as dense as 7,000 kilograms per cubic meter (kg/m3) (similar to the density of a bar of steel).'
          },
          {
            title: 'What is the gravity on Psyche?',
            content: 'The surface gravity on Psyche is much less than Earth, and even less than the Moon. On Psyche, lifting a car would feel as light as lifting a dog or a 2nd grader!'
          },
          {
            title: 'What is the size of Psyche?',
            content: 'As asteroids go, Psyche is relatively large and has an irregular shape: \n\n279 x 232 x 189 kilometers (173 x 144 x 117 miles). \n\nIf Psyche were a perfect sphere, it would have a diameter of 226 kilometers (140 miles): \n\nThat is about the length of the state of Massachusetts (leaving out Cape Cod); If it were in Arizona it would stretch between Phoenix and Flagstaff! \n\nA surface area of about 641,800 square kilometers (246,300 square miles), making it just smaller than the area of the state of Texas and quite a bit larger than the area of California.'
          },
          {
            title: 'Where is the name "Psyche" came from?',
            content: '"Psyche" is the named for the goddess of the soul in ancient Greek mythology.'
          }
        ]
        return (
          <ImageBackground style={{ flex: 1, width: '100%', height: '100%' }} source={{ uri: 'https://image.ibb.co/dGcZ0H/Asteroid_Background.png' }}>
            <ScrollView>
              <AccordionView content={sections} />
            </ScrollView>
          </ImageBackground>
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(48,33,68,0.8)'
  },
  tabbar: {
    backgroundColor: 'rgb(48,33,68)',
  },
  indicator: {
    backgroundColor: 'rgb(250,160,0)',
  },
  headerContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  textHeaderSetup: {
    fontSize: 17,
    fontWeight: '400',
    height: 55,
    paddingLeft: 10,
    paddingRight: 25,
    color: 'rgb(48,33,68)',
  },
  textContentSetup: {
    fontSize: 15,
    paddingLeft: 52,
    paddingRight: 20,
    paddingBottom: 20,
    color: 'rgb(74,74,74)',
    backgroundColor: 'rgba(255,255,255,0.8)',
  }
});

class AccordionView extends React.Component {
  _renderHeader(section) {
    return (
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: 'row', paddingLeft: 25 }}>
          <Icon name="plus-circle" size={20} color={'rgb(48,33,68)'} />
          <PsycheText style={styles.textHeaderSetup}>{section.title}</PsycheText>
        </View>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.content}>
        <PsycheText style={styles.textContentSetup}>{section.content}</PsycheText>
      </View>
    );
  }

  render() {
    return (
      <Accordion
        sections={this.props.content}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    );
  }
}
