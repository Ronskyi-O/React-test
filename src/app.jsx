import Painting from "./components/painting"
import Section from "./components/section"

export default function App() {
// const isOnline = true
    return (
        <div>
            {/* {isOnline && 'Online'}
            {isOnline ? 'Online' : 'Offline'} */}

            {/* {[1, 2, 3, 4, 5].map(el => (
                <div>{el}</div>
            ))} */}

           

            <Section title="Top 100">
                 <Painting title={"Sasha"} price={5} />
            </Section>
            
            <Section />


        </div>
    )
}  