import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Divider } from 'semantic-ui-react'

import CardList from '../components/card-list/CardList'
import SearchBox from '../components/search-box/SearchBox'

const Index = ({data}) => {
  console.log('INDEX')
  const [monsters, setMonsters] = useState(data)

  const searchMonsters = (ev) =>{
    const res = data.filter(monster => monster.name.toLowerCase().includes(ev.target.value.toLowerCase()))
    setMonsters(()=>res)
    
  }

  return (
    <React.Fragment>
       <Container textAlign='center'><SearchBox searchMonsters={searchMonsters}/></Container>
      
      <Divider />
      <CardList data={monsters}/>
    </React.Fragment>
  )
}
Index.getInitialProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log('INITIALPROPS')
  return { data: res.data };
};

export default Index
