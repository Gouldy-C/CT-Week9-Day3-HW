import { Container } from "react-bootstrap"

interface BodyProps {
  header: string
  children: JSX.Element | JSX.Element[]
}

export default function Body({header, children}:BodyProps) {


  return (
    <>
      <Container>
      
        <h1 className="mt-2 mb-0">{header}</h1>

      </Container>
      <Container>
      
        {children}

      </Container>
    </>

  )
}

