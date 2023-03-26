import '@/styles/globals.css'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <main className={poppins.className}>
                <Component {...pageProps} />
            </main>
        </Provider>
    )
}
