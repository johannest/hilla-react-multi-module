# hilla-react-multi-module
This simple example application demonstrates how use multi-module Maven with Hilla and React.

# Features
* You can run component1-app and component2-app independently of main-app and as a part of main-app's sub views.
* Also in part of main-app, component1-app and component2-app will use their own Vaadin Endpoints.
* There is simple React Context based example how to share state between main-app and component1-app. 
  * Note! This is just example and not the most optimal way to share the state.

# Setup
1. `mvn clean install` in the root module
2. `cd main-app`
3. `mvn spring-boot:run`