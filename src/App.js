import {useState, useEffect} from 'react'
import Card from "./Components/Card";
import Input from "./Components/Input";

import './App.css';

function App() {
    const [authors, setAutors] = useState([])
    const [posts, setPosts] = useState([])

    const authorsPoint = 'users'
    const postsPoint = 'posts'
    
    useEffect(() => {
        async function fetchAutors() {
            const response = await fetch(`http://jsonplaceholder.typicode.com/${authorsPoint}`);
            const json = await response.json();
            setAutors(json);
        }
        fetchAutors();
    }, []);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch(`http://jsonplaceholder.typicode.com/${postsPoint}`);
            const json = await response.json();
            setPosts(json);
        }
        fetchPosts();
    }, []);

    let merge = []
    authors.forEach((authorId, i) => {
        posts.forEach((postId, i) => {
            if (authorId.id === postId.userId) {
                merge.push({...authorId, ...postId})
                return merge
            }
        })
    })

    const [value, setValue] = useState('')

    const filteredAuthors = merge.filter(author => {
        return author.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <>
            <form>
                <Input 
                    placeholder={'Filter by author...'}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
            <div className="content">
                {
                    Object.values(filteredAuthors).map(({body, title, id, name, username}) => <Card
                            key={id}
                            name={name}
                            username={username}
                            body={body}
                            title={title}
                        />
                    )

                }
            </div>
        </>
    );
}

export default App;
