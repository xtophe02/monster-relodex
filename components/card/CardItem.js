import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardItem = ({name, id, email}) => {

  return (
    <Card>
    <Image src={`https://robohash.org/${id}?set=set3`} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='email'>{email}</span>
      </Card.Meta>
 
    </Card.Content>
  
  </Card>
  )
}

export default CardItem
