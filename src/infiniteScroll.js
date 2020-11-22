/* import Axios from 'axios'
import { useEffect,  useState } from 'core-js/library/fn/reflect/es7/metadata'

export default function infiniteScroll(query, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false) //stop API requests when no more results

    useEffect(() => {
        setBooks([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel 
        Axios({
            method: 'GET',
            url: 'REDDIT search API with built in pagination',
            params: { q: query, page:pageNumber },
            cancelToken: new Axios.CancelToken(c => cancel = c) //we dont want to send a query everytime a letter is typed
        }).then(res => {
            setBooks(prevBooks => {
                return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])] //new Set or array returns only unique values
            }) //change to reddit posts
            setHasMore(res.data.docs.length > 0) //knows when we have no more 'books'
            setLoading(false)
            console.log(res.data)
        }).catch(e => {
            if (Axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [query, pageNumber])
    
    return { loading, error, books, hasMore }
}

*/