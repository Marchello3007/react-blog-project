import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'

type Props = {}

const Applist333 = () => {
    return <p>Пробный текст</p>
}

const Applist555 = () => {
    return (
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos non,
            culpa modi voluptatem fugiat maiores totam odit, quam sint adipisci
            tempore esse, officia minima suscipit minus quae! Omnis, odit
            laudantium?
        </p>
    )
}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Applist333 />
            <Applist555 />
        </>
    )
}

export default App

// import React from 'react'

// function App88() {
//     return (
//         <>
//             <div className="test">
//                 <h1> 444 Это тестовый текст блогового ресурса ДЗ</h1>
//             </div>
//         </>
//     )
// }

// export default App88
