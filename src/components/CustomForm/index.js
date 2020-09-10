import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
  useMemo
} from 'react';
import useCustomEffect from './customEffect';
import CustomContext from '../../context/defaultContext';

const ExtraField = (props, ref) => {
  // useEffect(() => {
  //   console.log('Extra field effect');
  //   // to call lifecircle method ComponentDidUnmount
  //   // useEffect should return function!
  //   return () => {
  //     console.log('Extra field unmount effect');
  //   }
  // });
  return (
    <input type="text" placeholder="Element with ref" ref={ref}/>
  );
};

const ExtraInput = (props, ref) => (
  <input type="text" placeholder="Element with ref" ref={ref}/>
);

const reducerFunc = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FIRST_NAME':
      return {...state, firstName: action.value};
    default:
      return state;
  }
}

const CustomForm = (props) => {
  const intialState = {
    firstName: '',
    lastName: '',
    email: ''
  };
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const extraFieldRef = useRef(null);
  const {value} = useContext(CustomContext);
  const [formData, dispatch] = useReducer(reducerFunc, intialState);
  // const [fistName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // useEffect(() => {
  //   console.log('Form use effect');
  // }, [props.text]);
  useEffect(() => {
    console.log('enother form effect');
  }, []);
  useEffect(() => {
    console.log('enother one form effect');
    calculateCustomValue(formState.lastName, formState.email);
    // console.log(formData);
  });

  const text = useCustomEffect(props.text);
  const onFormFieldChange = (e) => {
    const {value, name} = e.target;
    const prevState = formState;
    setFormState({...prevState, [name]: value});
  };
  const handleSubmit = () => {
    return false;
  };
  const focusExtraInput = () => {
    extraFieldRef.current.focus();
  }
  const calculateCustomValue = useMemo(() => {
    return (name, email) => {
      console.log(name, email);
      return name;
    }
  }, [formState.lastName, formState.email]);
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          First name:
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            value={formData.fistName}
            onChange={(e) => { dispatch({type: 'CHANGE_FIRST_NAME', value: e.target.value })}}
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Last name:
          <input type="text" placeholder="Last name" name="lastName" value={formState.lastName} onChange={onFormFieldChange}/>
        </label>
      </fieldset>
      <fieldset>
        <label>
          Email:
          <input type="text" placeholder="email" name="email" value={formState.email} onChange={onFormFieldChange}/>
        </label>
      </fieldset>
      <button onClick={focusExtraInput}>Submit</button>
      <input type="text" ref={extraFieldRef} placeholder="Input with ref"/>
      { /*
        formState.firstName === '22'
          ? <ExtraField/>
          : null
      */}
      {/*<span>{text}</span>*/}
      {/*<span>Velue from context: {value}</span>*/}
    </form>

  );
};

export default CustomForm;
