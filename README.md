# RN-NavigationExperimental-Redux-Example

A small demonstration app showing how to use Redux to manage navigation state in a React Native (>0.21) application using NavigationExperimental.

![Screencast of flipping through a few different screes](rn-ne-redux-demo.gif?raw=true "Screencast of functionality")

The key elements to note when trying to implement NavigationExperimental with Redux include the following:
* You don't need a `<NavigationRootContainer />`, which otherwise runs the navigation reducers, because Redux will do that for us. We lose the constant `onNavigate()` method in React's context, but that's okay because we just make more specific dispatches to navigation methods where they are needed, connected via Redux.
* This implementation is still following the `NavigationState` and `NavigationParentState` conventions established by NavigationExperimental.
* It also uses `NavigationStateUtils` to do the dirty work when reducing state.
* You can skip your own implementation of the reducers and use React Native's versions. See [https://github.com/jlyman/RN-NavigationExperimental-Redux-Example/issues/7#issuecomment-202385080](this comment) and the [/tree/pure-rn-reducers](pure-rn-reducers branch).

Finally, this was just an attempt to figure out how to connect Redux and NavigationExperimental, and does not represent an ideal implementation. If you see room for improvement, please let me know.

## A note about branches

At this time, NavigationExperimental is moving quite quickly and the API is still a bit of a moving target. Master branch will attempt to follow the current stable release (this is a change from previous) since things are starting to quiet down. For version-specific implementations older than the current stable release, I'm creating a branch per RN version. For example, see the [0.23 branch](https://github.com/jlyman/RN-NavigationExperimental-Redux-Example/tree/0.23) of this repo to see how to implement against the NavigationExperimental API in RN 0.23.
* [/tree/master](current stable release)
* [/tree/0.23](0.23)
* [/tree/0.22](0.22)
* [/tree/0.21](0.21)

In the future, when NavigationExperimental is changing little between versions, we'll switch to a tag-based approach instead of branches.

## Debug
- Use https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph for state inspection
- Initial state can be defined in `app/app.js`. Eg: `const initialState = {"navigationState":{"key":"MainNavigation","index":2,"children":[{"key":"First","title":"First"},{"key":"Second","title":"Second"},{"key":"Third","title":"Third"}]}}`
