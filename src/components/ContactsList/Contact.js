import React from 'react';
// import { CSSTransition } from 'react-transition-group';

// import css from './Contact.module.scss';

// const TIMEOUT = 700;

// const STYLES = {
//   entering: {
//     opacity: 0.5
//   },
//   entered: {
//     opacity: 1
//   },
//   exiting: {
//     opacity: 0.7
//   },
//   exited: {
//     opacity: 0
//   }
// };
//
const CLASS_NAMES = {
  enter: 'item-enter',
  enterActive: 'item-enter-active',
  enterDone: 'item-enter-done',
  exit: 'item-exit',
  exitActive: 'item-exit-active',
  exitDone: 'item-exit-done'
};

// class Contact extends React.Component {
//
//   state = {
//     inProp: false
//   }
//
//   toggle = () => {
//     this.setState(({inProp: prevInProp}) => ({inProp: !prevInProp}));
//   }
//
//   render() {
//     const { inProp } = this.state;
//     const { name, id, onDelete, phoneNumber = '+99999999' } = this.props;
//     return (
//         <li>
//           <span onClick={this.toggle}><b>{name}</b><button onClick={() => onDelete(id)}>X</button></span>
//           <CSSTransition
//             classNames={css}
//             in={inProp}
//             timeout={TIMEOUT}
//             unmountOnExit={true}
//             onEnter={() => console.log('enter')}
//             onEntering={() => console.log('enter active')}
//             onEntered={() => console.log('enter done')}
//             onExit={() => console.log('exit')}
//             onExiting={() => console.log('exit active')}
//             onExited={() => console.log('exit done')}
//           >
//             <div><b>{phoneNumber}</b></div>
//           </CSSTransition>
//         </li>
//     )
//   }
// }
//
const Contact = ({ name, id, onDelete, number="+9379992" }) => (
  <li>
    <b>{name}</b>
    <button onClick={() => onDelete(id)}>X</button>
    <p>{number}</p>
  </li>
)

export default Contact;
