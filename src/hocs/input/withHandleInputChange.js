import { compose, withState, withHandlers } from 'recompose';

export default compose(
  withState('values', 'setValues', {}),
  withHandlers({
    handleInputChange: ({ setValues }) => e => {
      const { target } = e;
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;

      setValues(prevState => ({
        ...prevState,
        [name]: value,
      }));
    },
  })
);
