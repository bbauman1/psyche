<<<<<<< HEAD
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view'; 
import collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Colors from '../constants/Colors';
=======
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import Colors from "../constants/Colors";
>>>>>>> master

export default class FactsScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Mission" },
      { key: "second", title: "Spacecraft" },
      { key: "third", title: "Asteroid" }
    ]
  };

  static navigationOptions = {
    title: "Facts"
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props  => {
    return (
      <TabBar
        {...props}
        indicatorStyle = {styles.indicator}        
        style = {styles.tabbar}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        sections = [
          {
            title: '\t- What is Psyche?',
            content: '\t\t\t+ The name of an asteroid orbiting the Sun between Mars and Jupiter. Also it is a name of a NASA space mission to visit that asteroid, led by ASU.'
          },
          {
            title: '\t- What is the different between this mission compare to the others?',
            content: '\t\t\t+ Psyche is the first mission to a world made of metal rather than rock or ice.'
          },
          {
            title: '\t- When did NASA choose this mission?',
            content: '\t\t\t+ The Psyche mission is chosen by NASA on January 4, 2017'
          },
          {
            title: '\t- What program did Psyche mission selected for?',
            content: '\t\t\t+ Psyche is the 14th mission selected by NASA Discovery Program, a series of relatively low-cost missions to solar system targets.'
          },
          {
            title: '\t- How much is the mission cost?',
            content: '\t\t\t+ The mission cost is ~850 million included mission development, operations, and science, communication demonstration hardware or operations. \n\t\t\t+ This did not include cost for the launch service, Deep Space Optical these are procured separately.'
          },
          {
            title: '\t- What is the goals for this mission?',
            content: '\t\t\t+ The goals for this mission are to understand a previously unexplored building block of planet formation: iron cores. \n\t\t\t+ Look inside terrestrial planets, including Earth, by directly examining the interior of a differentiated body, which otherwise could not be seen. \n\t\t\t+ Explore a new type of world. For the first time, examine a world made not of rock and ice, but metal.'
          },
          {
            title: '\t- What is the mission objectives?',
            content: '\t\t\t+ Determine whether Psyche is a core, or if it is un-melted material. \n\t\t\t+ Determine the relative ages of regions of Psyche’s surface. \n\t\t\t+ Determine whether small metal bodies incorporate the same light elements as are expected in the Earth’s high-pressure core. \n\t\t\t+ Determine whether Psyche was formed under conditions more oxidizing or more reducing than Earth’s core. \n\t\t\t+ Characterize Psyche’s morphology.'
          },
          {
            title: '\t- Whose involved in this mission?',
            content: '\t\t\t+ Principal Investigator (PI): Lindy Elkins-Tanton, Arizona State University (ASU). \n\t\t\t+ Deputy Principal Investigator (Deputy PI): Jim Bell, ASU.'
          },
          {
            title: '\t- What is the responsible of Principle Investigator(PI)?',
            content: '\t\t\t+ The PI is responsible for overall mission success, and for the scientific integrity and execution of the mission within committed cost and schedule. \n\t\t\t+ The PI oversees the team organization, decides science priorities and progress, and oversees delivery of mission data to NASA’s Planetary Data System. \n\t\t\t+ The PI is the decision-maker within the Psyche team, and NASA is the ultimate decision-maker. \n\t\t\t+ The PI is responsible for ensuring that all mission participants are playing their roles as defined by the Team Guidelines.'
          },
          {
            title: '\t- Whose are the Co-Investigators?',
            content: '\t\t\t+ Erik Asphaug, University of Arizona. \n\t\t\t+ David Bercovici, Yale University. \n\t\t\t+ Bruce Bills, Jet Propulsion Laboratory (JPL). \n\t\t\t+ Richard Binzel, Massachusetts Institute of Technology (MIT). \n\t\t\t+ William Bottke, Southwest Research Institute (SwRI). \n\t\t\t+ Catherine Bowman, ASU. \n\t\t\t+ Ralf Jaumann, Deutsches Zentrum für Luft- und Raumfahrt. \n\t\t\t+ Insoo Jun, JPL. \n\t\t\t+ David Lawrence, Johns Hopkins University, Applied Physics Laboratory (APL). \n\t\t\t+ Simone Marchi, SwRI. \n\t\t\t+ Timothy McCoy, Smithsonian Institution. \n\t\t\t+ Ryan Park, JPL. \n\t\t\t+ Patrick Peplowski, APL. \n\t\t\t+ Carol Polansky, JPL. \n\t\t\t+ Thomas Prettyman, Planetary Science Institute. \n\t\t\t+ Carol Raymond, JPL. \n\t\t\t+ Chris Russell, University of California, Los Angeles. \n\t\t\t+ Benjamin Weiss, MIT. \n\t\t\t+ Dan Wenkert, JPL. \n\t\t\t+ Mark Wieczorek, Observatoire de la Côte d’Azur. \n\t\t\t+ David Williams, ASU. \n\t\t\t+ Maria Zuber, MIT.'
          },
          {
            title: '\t- Whose are The Mission leadership?',
            content: '\t\t\t+ Diane Brown, Program Executive, NASA Headquarters (HQ). \n\t\t\t+ Sarah Noble, Program Scientist, NASA HQ. \n\t\t\t+ Belinda Wright, Mission Manager, NASA Marshall Space Flight Center (MSFC). \n\t\t\t+ Henry Stone, Project Manager, JPL. \n\t\t\t+ Robert Mase, Deputy Project Manager and Acting Mission System Manager, JPL. \n\t\t\t+ Brian Johnson, Project Business Manager, JPL. \n\t\t\t+ David Oh, Project System Engineer, JPL. \n\t\t\t+ Kalyani Sukhatme, Payload Manager, JPL. \n\t\t\t+ Rob Menke, Mission Assurance Manager, JPL. \n\t\t\t+ Mark Brown, Flight System Manager, JPL. \n\t\t\t+ Steve Schott, SEP Chassis Program Manager, SSL. \n\t\t\t+ Peter Lord, SEP Chassis Deputy Program Manager, SSL.'
          },
          {
            title: '\t- Whose are Psyche Science Partners?',
            content: '\t\t\t+ Applied Physics Laboratory (APL). \n\t\t\t+ Deutsches Zentrum für Luft- und Raumfahrt (DLR). \n\t\t\t+ Glenn Research Center (GRC). \n\t\t\t+ Jet Propulsion Laboratory (JPL). \n\t\t\t+ Massachusetts Institute of Technology (MIT). \n\t\t\t+ Malin Space Science Systems (MSSS). \n\t\t\t+ Observatoire de la Côte d’Azur. \n\t\t\t+ Planetary Science Institute (PSI). \n\t\t\t+ Smithsonian Institution. \n\t\t\t+ Southwest Research Institute (SwRI). \n\t\t\t+ SSL. \n\t\t\t+ University of Arizona. \n\t\t\t+ University of California Los Angeles (UCLA). \n\t\t\t+ Yale University.'
          }
        ]
        return (
          <ScrollView> 
            <AccordionView 
              content = {sections}
            />
          </ScrollView>
        );
      case 'second':
        sections = [
          {
            title: '\t- What type of propulsion does spacecraft use?',
            content: '\t\t\t+ Solar-electric (low-thrust) propulsion.'
          },
          {
            title: '\t- What does solar-electric propulsion means?',
            content: '\t\t\t+ Solar electric propulsion uses electricity from solar arrays to create electromagnetic fields to accelerate and expel charged atoms (ions) of xenon to create a very low thrust with a very efficient use of propellant.'
          },
          {
            title: '\t- Have we ever use this before beyond lunar orbit?',
            content: '\t\t\t+ No, this will be the first use of Hall effect thrusters beyond lunar orbit.'
          },
          {
            title: '\t- What type of gas is using in Psyche spacecraft?',
            content: '\t\t\t+ The Psyche spacecraft is using Xenon.'
          },          
          {
            title: '\t- What is Xenon?',
            content: '\t\t\t+ Xenon is a gas that is in the air we breathe (in very small amounts-- 0.09 parts per million!).\n\t\t\t+ Xenon gas is used in high quality light bulbs, including automobile headlamps and movie projectors.\n\t\t\t+ “The most common propellant used in ion propulsion is xenon, which is easily ionized and has a high atomic mass, thus generating a desirable level of thrust when ions are accelerated. It also is inert and has a high storage density; therefore, it is well suited for storing on spacecraft.”'
          },          
          {
            title: '\t- What is the size of The Psyche spacecraft?',
            content: '\t\t\t+ The full spacecraft, including the solar panels, is 24.76 meters (~81 feet) long by 7.34 meters (~24 feet) wide. That is about the size of a (singles) tennis court.'
          },          
          {
            title: '\t- What is the size of the Bus?',
            content: '\t\t\t+ The bus (body) of the spacecraft is 3.1 meters (~10 feet) long by 2.4 meters (almost 8 feet) wide.\n\t\t\t+ A few size comparisons:\n\t\t\t\t\t\to It is slightly bigger than a Smart Car.\n\t\t\t\t\t\to It about the size of a garden storage shed.\n\t\t\t\t\t\to It is as tall as a regulation basketball hoop!'
          },          
          {
            title: '\t- What is The Psyche’s Multispectral Imager?',
            content: '\t\t\t+ Provides high-resolution images using filters to discriminate between Psyche’s metallic and silicate constituents.\n\t\t\t+ Consists of a pair of identical cameras designed to acquire geologic, compositional, and topographic data.\n\t\t\t+ Purpose of the second camera is to provide redundancy for mission-critical optical navigation.'
          },
          {
            title: '\t- Where does the Multispectral Imager team based?',
            content: '\t\t\t+ The team is based at Arizona State University.'
          },          
          {
            title: '\t- What is The Psyche’s Gamma Ray and Neutron Spectrometer?',
            content: '\t\t\t+ Will detect, measure, and map Psyche’s elemental composition.\n\t\t\t+ Mounted on a 2-meter (6-foot) boom (“arm”) to:\n\t\t\t\t\t\to Distance the sensors from background radiation created by energetic particles interacting with the spacecraft; provide an unobstructed field of view.'
          },    
          {
            title: '\t- Where does the Gamma Ray and Neutron Spectrometer team based?',
            content: '\t\t\t+ The team is based at the Applied Physics Laboratory at Johns Hopkins University.'
          },       
          {
            title: '\t- What is The Psyche’s Magnetometer?',
            content: '\t\t\t+ Designed to detect and measure the remnant magnetic field of the asteroid.\n\t\t\t+ Composed of two identical high-sensitivity magnetic field sensors located at the middle and outer end of a 2-meter (6-foot) boom (“arm”).'
          },
          {
            title: '\t- Where does the Magnetometer team based?',
            content: '\t\t\t+ The team is based at Massachusetts Institute of Technology (MIT) and the University of California Los Angeles (UCLA).'
          },            
          {
            title: '\t- What is The Psyche’s Radio Science?',
            content: '\t\t\t+ The Psyche mission will use the X-band radio telecommunications system to measure Psyche’s gravity field to high precision.\n\t\t\t+ When combined with topography derived from onboard imagery, this will provide information on the interior structure of Psyche.'
          },
          {
            title: '\t- Where does the Radio Science team based?',
            content: '\t\t\t+ The team is based at MIT and JPL.'
          },            
          {
            title: '\t- What is The Psyche’s Deep Space Optical Communication (DSOC)?',
            content: '\t\t\t+ The Psyche mission will test a sophisticated new laser communication technology that encodes data in photons (rather than radio waves) to communicate between a probe in deep space and Earth.\n\t\t\t+ Using light instead of radio allows the spacecraft to communicate more data in a given amount of time.'
          },
          {
            title: '\t- Where does the DSOC team based?',
            content: '\t\t\t+ The DSOC team is based at the Jet Propulsion Laboratory'
          }
        ]
        return (
          <ScrollView>
            <AccordionView 
              content = {sections}
            />
          </ScrollView>
        );
      case 'third':
        sections = [
          {
            title: '\t- When and who discovered Psyche?',
            content: '\t\t\t+ Psyche was discovered in 1852, by Italian astronomer Annibale de Gasparis. \n\t\t\t+ Also Psyche is the 16th asteroid to be discovered.'
          },
          {
            tile: '\t- Where is the name "Psyche" came from?',
            content: '\t\t\t+ "Psyche" is the named for the goddess of the soul in ancient Greek mythology.'
          },
          {
            title: '\t- How do we know?',
            content: '\t\t\t+ Radar albedo (Radar albedo is the “ratio of a target’s radar cross section in a specified polarization to its projected area; hence, a measure of the target’s radar reflectivity”). \n\t\t\t+ Thermal inertia (Thermal inertia “refers to the ability of a material to conduct and store heat, and in planetary science, its measure of the sub surface’s ability to store heat during the day and reradiate it during the night”).'
          },
          {
            title: '\t- Why is this asteroid important?',
            content: '\t\t\t+ Scientists believe Psyche is the exposed nickel-iron core of an early planet, one of the building blocks of our solar system. \n\t\t\t+ Psyche is most likely a survivor of multiple violent hit-and-run collisions, common when the solar system was forming. \n\t\t\t+ The asteroid Psyche may be able to tell us how Earth’s core and the cores of the other terrestrial (rocky) planets came to be. (The terrestrial planets are Mercury, Venus, Earth, and Mars).'
          },
          {
            title: '\t- Where does Psyche located?',
            content: '\t\t\t+ Psyche lies in the main asteroid belt between Mars and Jupiter.'
          },
          {
            title: '\t- What is the time different on Psyche compare to Earth?',
            content: '\t\t\t+ A day on Psyche is about 4 hours and 12 minutes. \n\t\t\t+ This is the sidereal rotation period, or the "amount of time it takes for a (body) to completely spin around and make one full roration. \n\t\t\t+ You could live through just under six "days" on Psyche in the same time as one day on Earth. \n\t\t\t+ A year on Psyche lasts about five Earth years (about 1828 Earth days).'
          },
          {
            title: '\t- What is the different between Psyche and Earth orbiting?',
            content: '\t\t\t+ Psyche orbit the Sun at an average distance of 3 astronomical units (AU) (about 280 million miles); Earth orbits at 1 AU (about 93 million miles).'
          },
          {
            title: '\t- What is the density of Psyche?',
            content: '\t\t\t+ Psyche is dense--perhaps as dense as 7,000 kilograms per cubic meter (kg/m3) (similar to the density of a bar of steel).'
          },
          {
            title: '\t- What is the gravity on Psyche?',
            content: '\t\t\t+ The surface gravity on Psyche is much less than Earth, and even less than the Moon. On Psyche, lifting a car would feel as light as lifting a dog or a 2nd grader!'
          },
          {
            title: '\t- What is the size of Psyche?',
            content: '\t\t\t+ As asteroids go, Psyche is relatively large and has an irregular shape: \n\t\t\t\t\t\t+ 279 x 232 x 189 kilometers (173 x 144 x 117 miles). \n\t\t\t\t\t\t+ If Psyche were a perfect sphere, it would have a diameter of 226 kilometers (140 miles): \n\t\t\t\t\t\t\t\t\t+ That is about the length of the state of Massachusetts (leaving out Cape Cod); If it were in Arizona it would stretch between Phoenix and Flagstaff! \n\t\t\t\t\t\t\t\t\t+ A surface area of about 641,800 square kilometers (246,300 square miles), making it just smaller than the area of the state of Texas and quite a bit larger than the area of California.'
          }
        ]
        return (
          <ScrollView>
            <AccordionView 
              content = {sections}
            />
          </ScrollView>
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style = {[styles.container, this.props.style]}
        navigationState = {this.state}
        renderScene = {this._renderScene}
        renderHeader = {this._renderHeader}
        onIndexChange = {this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabbar: {
    backgroundColor: '#800080',
  },
  indicator: {
    backgroundColor: '#ff00ff',
  },
  textHeaderSetup: {
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
    backgroundColor: '#800080',
  },
  textContentSetup: {    
    color: 'white',
    fontSize: 15,
    backgroundColor: '#800080',
  }
});

class AccordionView extends React.Component {
  _renderHeader(section) {
    return (
      <View style = {styles.container}>
        <Text style = {styles.textHeaderSetup}>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style = {styles.content}>
        <Text style = {styles.textContentSetup}>{section.content}</Text>
      </View>
    );
  }

  render() {
    return (
      <Accordion      
        sections = {this.props.content}
        renderHeader = {this._renderHeader}
        renderContent = {this._renderContent}
      />
    );
  }
}
