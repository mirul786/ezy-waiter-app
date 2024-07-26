import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../../screens/Feed";
import Article from "../../screens/Article";
import { createDrawerNavigator } from "@react-navigation/drawer";


function DraweNavigation(): React.JSX.Element {

    const Drawer = createDrawerNavigator();


    return (
        <Drawer.Navigator initialRouteName="Feed">
            <Drawer.Screen
                name="Feed"
                component={Feed}
                options={{ drawerLabel: 'Home' }}
            />
            <Drawer.Screen
                name="Notifications"
                component={Article}
                options={{ drawerLabel: 'Updates' }}
            />

        </Drawer.Navigator>
    );
}

export default DraweNavigation;
