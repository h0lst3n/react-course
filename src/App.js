import React, {lazy, Suspense} from 'react';
import './App.scss';
//import Loadable from 'react-loadable';

// import asyncComponent from './codeSplittingExamples/asyncComponentHOC';

// Static import
// import moduleA from './codeSplittingExamples/moduleA';
//
// // Dynamic import
// //
// const loadModuleB = () => import('./codeSplittingExamples/moduleB');

// const LoadableLoader = ({error, timedOut, pastDelay, retry}) => {
//   if (error) {
//     return (
//       <div>
//         Ooops! Something went wrong!<button type="button" onClick={retry}>Retry</button>
//       </div>
//     );
//   }
//
//   if (timedOut) {
//     return (
//       <div>
//         Taking a lot time...<button type="button" onClick={retry}>Retry</button>
//       </div>
//     );
//   }
//
//   if (pastDelay) {
//     return <div>Loading...</div>
//   }
//
//   return null;
// };

// const AsyncHomePage = asyncComponent({
//   loader: () => import('./Pages/Home' /* webpackChunkName: "home-page" */),
//   loading: Loader
// });

// const LoadableHome = Loadable({
//   loader: () => import('./Pages/Home' /* webpackChunkName: "home-page" */),
//   loading: LoadableLoader//,
//   //timeout: 1e-3
// });
//
const Loading = () => (<div>Loading...</div>);

const LazyHome = lazy(() => import('./Pages/Home' /* webpackChunkName: "home-page" */))

const LazyAbout = lazy(() => import('./Pages/About' /* webpackChunkName: "about-page" */))

const App = () => {
  // loadModuleB().then(moduleB => {
  //   console.log(moduleB);
  // })
  return (
    <>
      <div>Code splitting</div>
      <div>Static code...</div>
      <Suspense fallback={<Loading/>}>
        <LazyHome/>
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <LazyAbout/>
      </Suspense>
      {/**<LoadableHome/>**/}
      {/** <Roure path="/" exact component={AsyncHomePage}>**/}
    </>
  );
}

export default App;
