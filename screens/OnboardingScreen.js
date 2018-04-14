import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationActions } from "react-navigation";
import Onboarding from "react-native-onboarding-swiper";

export default class OnboardingScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Onboarding
                onDone={() => this.props.navigation.goBack()}
                showSkip={false}
                pages={[
                    {
                        backgroundColor: "#f06359",
                        image: (
                            <Image
                                style={{
                                    alignSelf: "center",
                                    height: 120,
                                    width: 120
                                }}
                                source={require("../assets/images/psyche-icon.png")}
                            />
                        ),
                        title: "Meet Psyche",
                        subtitle:
                            "Psyche is the name of an astroid in our solar system and the name of the mission to take us there."
                    },
                    {
                        backgroundColor: "#a4405c",
                        image: (
                            <Ionicons
                                name={"ios-clock-outline"}
                                size={120}
                                color={"#fff"}
                            />
                        ),
                        title: "Countdown With Us",
                        subtitle:
                            "The mission is set to takeoff in 2022 and we are counting all the big milestones."
                    },
                    {
                        backgroundColor: "#7e3255",
                        image: (
                            <Ionicons
                                name={"ios-information-circle-outline"}
                                size={120}
                                color={"#fff"}
                            />
                        ),
                        title: "Learn And Stay Informed",
                        subtitle:
                            "This app will teach you everything you need to know about the Psyche mission through facts, social media and a timeline."
                    },
                    {
                        backgroundColor: "#342248",
                        image: (
                            <Ionicons
                                name={"ios-camera-outline"}
                                size={120}
                                color={"#fff"}
                            />
                        ),
                        title: "Picture This",
                        subtitle:
                            "Apply exclusive Psyche filters to your favorite images and share them with your friends."
                    }
                ]}
            />
        );
    }
}
