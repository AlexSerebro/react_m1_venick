import { Container } from "./Container"
import { Button } from "./ui/Button";

const FRUITS = ['apple', 'kiwi', 'banana', 'cucumber']

export const Home = () => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

 return ( <main className="main">
    <Container>
     {isDarkMode ? <h1>Dark mode</h1> : <h1>Light mode</h1>}
     
     <h2>Fruits</h2>
     <ul>
       {FRUITS.map((name, index) => {
         return (
           <li key={index}>{ name}</li>
         )
       })}
     </ul>
   <Button/>
   </Container>
  </main>)
}