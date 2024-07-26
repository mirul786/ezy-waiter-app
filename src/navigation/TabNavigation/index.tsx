import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../../screens/Feed";
import Article from "../../screens/Article";
import DraweNavigation from "../DraweNavigation";


function TabNavigator(): React.JSX.Element {

    const Tab = createBottomTabNavigator();


    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Article" component={Article} />
        </Tab.Navigator>
    );
}

export default TabNavigator;
