import { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'

export default function Weapons() {


  const [weapons, setWeapons] = useState<WeaponFormat[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.open5e.com/v1/weapons/?limit=100000');
        if (res.ok) {
          const data = await res.json();
          setWeapons(data.results);
        } else {
          console.log('Bad response on Weapon call');
        }
      } catch (error) {
        console.error('Error fetching weapon data:', error);
      }
    };
    fetchData();
  }, []);

  
  return (
    <>
      <h2>Weapons</h2>
      <div className='d-flex flex-wrap'>
        {weapons.length > 0 ? (weapons.map((weapon: WeaponFormat) => {
          return (
            <Card className='m-3' data-bs-theme="dark" key={weapon.name} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{weapon.name}</Card.Title>
                <Card.Text>Category: <br/>{weapon.category}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Dmg Type: {weapon.damage_type}</ListGroup.Item>
                <ListGroup.Item>Dmg Dice: {weapon.damage_dice}</ListGroup.Item>
                <ListGroup.Item>Properties: {weapon.properties && weapon.properties.length > 1 ? (weapon.properties.reduce(
                  (acc, prop) => `${acc}, ${prop}`
                  )) : weapon.properties }</ListGroup.Item>
                <ListGroup.Item>Weight: {weapon.weight}</ListGroup.Item>
                <ListGroup.Item>Cost: {weapon.cost}</ListGroup.Item>
              </ListGroup>
            </Card>
          )
        })) : ''
      }
      </div>
    </>
  )
}
