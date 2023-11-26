import { Component, useState, useEffect } from 'react';

export class Example2 extends Component {
  state = {
    value: 0,
    option: 'test',
    data: null,
  };

  handleClick = e => {
    this.setState({ value: Number(e.target.value) });
  };

  handleIncrement = e => {
    this.setState(prev => {
      return { value: prev.value + Number(e.target.value) };
    });
  };

  componentDidMount = () => {
    // console.log('componentDidMount');
  };

  // only just first update state
  componentDidUpdate = (_, prevState) => {
    if (this.state.value !== prevState.value) {
      console.log('componentDidUpdate because value was changes');
    }
  };

  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  };

  render() {
    const { data, option, value } = this.state;
    return (
      <>
        Example Class Component
        <button onClick={this.handleClick} value={5}>
          VALUE {value}
        </button>
        <button onClick={this.handleIncrement} value={5}>
          INCREMENT VALUE {value}
        </button>
        <div>{value}</div>
        <div>{option}</div>
        {data && <div>{JSON.stringify(data)}</div>}
      </>
    );
  }
}

export const Example = () => {
  const [value, setValue] = useState(0);
  const [option, setOption] = useState('test');
  const [data, setData] = useState(null);

  const handleClick = e => {
    setValue(Number(e.target.value));
  };

  const handleIncrement = e => {
    setValue(prevValue => prevValue + Number(e.target.value));
  };

  useEffect(() => {
    // componentDidMount
    console.log('mount with useEffect');

    // component Will unmount
    return () => {
      console.log('unmount');
    };
  }, []);
  // empty array

  // mount + value updatee
  useEffect(() => {
    if (value === 0) return;
    console.log('value was changed');
  }, [value]);

  return (
    <>
      Example Function Component
      <button onClick={handleClick} value={5}>
        VALUE {value}
      </button>
      <button onClick={handleIncrement} value={5}>
        INCREMENT VALUE {value}
      </button>
      <div>{value}</div>
      <div>{option}</div>
      {data && <div>{JSON.stringify(data)}</div>}
    </>
  );
};
