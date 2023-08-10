import { Alert } from "react-bootstrap";

interface alertProps {
  alertHeading: string;
  alertMes: string;
  color: string
}


export default function AlertComp({alertHeading, alertMes, color}: alertProps) {
  return (
    <Alert dismissible variant={color} className="my-2">
      <Alert.Heading>{alertHeading}</Alert.Heading>
      <p>{alertMes}</p>
    </Alert>
  );
}