import React, {useState} from 'react'
import { Container, Row } from 'react-bootstrap';
import axios from '../../axios'
import Place from './Place'
import { Button } from "react-bootstrap";

const Search = () => {
    const [search, setSearch] = useState([]);
    const [input, setInput] = useState([]);

    const click = async(e)=> {
        e.preventDefault();
        const submit = await axios.get("/search",{
            params : {
                client_id : 'CCHSKH4S52RM0L5GIZFMSP5UWGAQE1ZP1QHKNUMLI0EM33FO',
                client_secret : '0A0EPNFBNUENZPMASSBADRO25DB1JMO310GBJ3G44ENHFYEE',
                ll:"36.772249599999995,3.0343168",
                query : input,
                v : 20201026
            }
        });
        console.log(submit.data.response.venues)
        setSearch(submit.data.response.venues);
    }
    return (
        <div>
            <form>
                <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search.." name="search"/>
                <Button variant="dark" onClick={(e)=>click(e)} type="submit">Search</Button>
            </form>
            <Container>
                <Row>
                {search && search.map((venue) => <Place  key={venue.id} subject={input} categories={venue} />)}
                </Row>
            </Container>
        </div>
    )
}

export default Search
