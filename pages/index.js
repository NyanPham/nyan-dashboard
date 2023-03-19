import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import Tasks from '@/components/Tasks'

export default function Home() {
    return (
        <Provider store={store}>
            <Tasks />
        </Provider>
    )
}
