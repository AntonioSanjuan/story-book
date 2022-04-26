import Input from '../../atoms/input/input';

function HomePage() {
  // useEffect(() => {}, []);
  const print = (e: any) => {
    console.log('input', e);
  };
  return (
    <>
      <Input<string> value="hola" onChangeHandler={print} />
      <Input<number> value={2} onChangeHandler={print} />
      <Input<boolean>
        value={false}
        onChangeHandler={print}
      />
    </>
  );
}

export default HomePage;
