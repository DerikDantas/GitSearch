import { Text } from "./styles";

interface IProps {
  error?: string;
}

const ErrorText: React.FC<IProps> = ({ error }) => {
  return <Text>{error}</Text>;
};

export default ErrorText;
