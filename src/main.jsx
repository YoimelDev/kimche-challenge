import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'normalize.css/normalize.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: 'https://countries.trevorblades.com/',
	cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
)
