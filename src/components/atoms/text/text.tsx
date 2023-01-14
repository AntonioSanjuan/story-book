import SCText, { TextStyleProps } from './text.style';

interface TextProps extends TextStyleProps {
    data?: string
}

function Text({ data, type }: TextProps) {
  return (
    <SCText type={type}>
      {data
      && <p title={data}>{ data }</p>}
    </SCText>
  );
}

export default Text;
