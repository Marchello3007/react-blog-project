import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
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
