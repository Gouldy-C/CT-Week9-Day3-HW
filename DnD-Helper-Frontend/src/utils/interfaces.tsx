interface LoggedUser {
  username: string;
  token: string;
}

interface WeaponFormat{
  name: string,
  slug: string,
  category: string,
  cost: string,
  damage_dice: string,
  damage_type: string,
  weight: string,
  properties: string[]
}