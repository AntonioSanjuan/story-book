import styled from 'styled-components';

export interface InputStyleProps {
    error?: boolean;
}

const SCInput = styled.div.attrs<
InputStyleProps, // What is consumed by .attrs()
Required<InputStyleProps> // What comes out of .attrs()
>((props: InputStyleProps) => (
  {
    error: props.error ?? false,
  } as Required<InputStyleProps>
))`input {
    // why 24? 10 padding left + 10 padding-right + 2 border left + 2 border right
    width: calc(100% - 24px);
    padding: 5px 10px;
    border-radius: 5px;

    border-color: ${(props) => (props.error ? 'red' : 'inherit')};
}

label {
    display: flex;
    flex-direction: column;
    place-content: end;
    align-content: flex-start;
    justify-content: center;
    align-items: flex-start;
}`;

export default SCInput;
