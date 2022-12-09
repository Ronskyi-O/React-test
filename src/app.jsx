import Painting from "./components/painting"

export default function App() {
// const isOnline = true
    return (
        <div>
            {/* {isOnline && 'Online'}
            {isOnline ? 'Online' : 'Offline'} */}

            {/* {[1, 2, 3, 4, 5].map(el => (
                <div>{el}</div>
            ))} */}

            <Painting title={"Sasha"} price={5} />


        </div>
    )
} 