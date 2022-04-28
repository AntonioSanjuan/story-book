import Input from '../../atoms/input/input';
import './home.css';

function HomePage() {
  // useEffect(() => {}, []);
  const print = (e: any) => {
    console.log('input', e);
  };
  return (
    <>
      <Input<string> value="hola" onChangeHandler={print} />
      <Input<number> value={2} onChangeHandler={print} className="red" onClick={() => console.log('click')} />
      <Input<number> value={5} onChangeHandler={print} />
      <Input<boolean>
        value={false}
        onChangeHandler={print}
      />
    </>
  );
}

export default HomePage;
