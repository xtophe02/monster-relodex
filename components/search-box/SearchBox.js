import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchBox = ({searchMonsters}) => <Input focus onChange={ev=>searchMonsters(ev)} placeholder='Search Monsters...' />

export default SearchBox