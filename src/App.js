import React, {lazy, Suspense} from 'react';
import './App.scss';

//import {asyncComponent, DefaultLoading } from './HOC/asyncComponent';
//import Loadable from 'react-loadable';

//import ModuleOne from './modules/moduleOne';

/**
 * Can be used anywhere in CodePath to module should be full
 */
const loadModuleTwo = () => import('./modules/ModuleTwo');


//Version #1
// const CustomLoading = () => (<div>Custom loading...</div>)
//
// Version #2
// const CustomLoading = ({ error, timedOut, pastDelay, retry }) => {
//
//   if (error) {
//     return (
//       <div>
//         Oops! Something went wrong! <button onClick={retry}>Retry</button>
//       </div>
//     );
//   }
//
//   if (timedOut) {
//     return (
//       <div>
//         Seems like it's taking a long time... <button onClick={retry}>Retry</button>
//       </div>
//     )
//   }
//
//   if (pastDelay) {
//     return <div>Loooooooooading...</div>
//   }
//
//   return null;
// };

/**
 * Can be used in Routes
 * e.g <Route path="/" component={AsyncModuleOne}>
 */
//Version #1
// const AsyncModuleOne = asyncComponent({
//   loader: () => import('./modules/moduleOne' /* webpackChunkName: "module-one-with-hoc" */),
//   loading: CustomLoading
// });
//
// //Version #2
// const AsyncModuleOne = Loadable({
//   loader: () => import('./modules/moduleOne' /* webpackChunkName: "module-one-with-loadable" */),
//   loading: CustomLoading
// });
// Version #3
const AsyncModule = lazy(() => import('./modules/moduleOne' /* webpackChunkName: "module-one-with-lazy" */));

const AsycnModuleOne = () => (
  <Suspense fallback={/* Here should be placed any React element*/<div>Loading...</div>}>
    <AsyncModule/>
  </Suspense>
);

const App = () => {

  // loadModuleTwo().then(module => {
  //   console.log('Module Two has been loaded', module.default);
  // });
  return (
    <div>
      <h2>Lesson 8 Code Splitting</h2>
      <AsycnModuleOne/>
    </div>
  );
}

export default App;
